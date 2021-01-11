<template>
    <div class="wechat-mini-program-sourcemap">
        <section class="header">
            <div class="title">
                <span>微信小程序 Source Map 解析服务</span>
            </div>
            <!-- <DocAndOtherParseLink position="upload-zip-parse" /> -->
        </section>
        <div class="error-input-area">
            <div class="file-input">
                <el-upload
                    class="upload-area"
                    drag
                    :auto-upload="false"
                    :limit="1"
                    action="./"
                    :on-change="handleFileChange"
                    :on-remove="handleFileRemove"
                >
                    <i class="el-icon-upload" />
                    <div class="el-upload__text">
                        请将微信小程序 Source Map 压缩包（.zip）拖到此处<br><br>
                        或<em>点击上传</em>
                    </div>
                    <div
                        slot="tip"
                        class="el-upload__tip"
                    >
                        若想上传新的 Source Map 压缩包，请先删除已有的压缩包。
                    </div>
                </el-upload>
            </div>
            <div class="error-content">
                <el-input
                    v-model="errorContent"
                    type="textarea"
                    :autosize="{minRows: 13, maxRows: 13}"
                    :placeholder="placeholder"
                />
            </div>
            <el-button
                type="primary"
                class="parse-btn"
                @click="parse"
            >
                解析
            </el-button>
        </div>

        <div class="result-area">
            <h1 class="title">
                源码位置
            </h1>
            <el-table
                v-loading="isRequesting"
                :data="errorList"
                stripe
                style="width: 100%; min-height: 300px;"
            >
                <el-table-column
                    type="index"
                    label="错误列"
                    width="70"
                />
                <el-table-column
                    prop="errorString"
                    label="错误内容"
                />
                <el-table-column
                    label="source"
                >
                    <template slot-scope="scope">
                        {{ getErrorSourcemapResultProperty(scope.row, 'source') }}
                    </template>
                </el-table-column>
                <el-table-column
                    label="line"
                    width="100"
                >
                    <template slot-scope="scope">
                        {{ getErrorSourcemapResultProperty(scope.row, 'line') }}
                    </template>
                </el-table-column>
                <el-table-column
                    label="column"
                    width="100"
                >
                    <template slot-scope="scope">
                        {{ getErrorSourcemapResultProperty(scope.row, 'column') }}
                    </template>
                </el-table-column>
                <el-table-column
                    label="name"
                    width="200"
                >
                    <template slot-scope="scope">
                        {{ getErrorSourcemapResultProperty(scope.row, 'name') }}
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <comment-and-access-statistics></comment-and-access-statistics>
    </div>
</template>

<script>
import sourceMap from 'source-map';
import JSZip from 'jszip';
// import DocAndOtherParseLink from './other-sourcemap-parse-link.vue';
import CommentAndAccessStatistics from '@/components/comment-and-access-statistics.vue';
import { parseErrorContent } from './util';

sourceMap.SourceMapConsumer.initialize({
    'lib/mappings.wasm': 'https://unpkg.com/source-map@0.7.3/lib/mappings.wasm',
});

export default {
    components: {
        // DocAndOtherParseLink,
        CommentAndAccessStatistics,
    },
    data() {
        return {
            zipFile: null,
            errorContent: '',
            isRequesting: false,
            errorList: [],
            placeholder: '请将错误内容放在此处，注意分行，以便自动识别所需的 Source Map 文件',
        };
    },
    methods: {
        handleFileChange(zipFile) {
            this.zipFile = zipFile;
        },
        handleFileRemove() {
            this.zipFile = null;
            this.errorList = [];
        },
        parse() {
            if (!this.zipFile) {
                this.$message({
                    message: '请上传 source map 压缩包',
                    type: 'warning',
                });
                return;
            }
            if (!this.errorContent.trim()) {
                this.$message({
                    message: '请输入错误内容',
                    type: 'warning',
                });
                return;
            }

            this.errorList = [];
            this.isRequesting = true;

            const errorList = parseErrorContent(this.errorContent);

            JSZip.loadAsync(this.zipFile.raw).then(async (zip) => {
                const list = await Promise.all(errorList.map(async (error) => {
                    if (error.canMap) {
                        const file = zip.files[error.file] || zip.files[error.fileFromCI];
                        if (!file) {
                            return error;
                        }
                        return file.async('text').then(async (content) => {
                            // app-service.js.map 文件可能太大，无法解析，需要截掉 sourcesContent 那段
                            // 注意截断后的字符串要加 } 使得 JSON 字符串保持完整
                            let rawSourcemapString = content;
                            const sourceContentIndex = rawSourcemapString.indexOf(',\n"sourcesContent"');
                            if (sourceContentIndex > -1) {
                                rawSourcemapString = `${rawSourcemapString.slice(0, sourceContentIndex)}}`;
                            }

                            const rawSourceMapJsonData = JSON.parse(rawSourcemapString);

                            const consumer = await new sourceMap.SourceMapConsumer(rawSourceMapJsonData);
                            const result = consumer.originalPositionFor({
                                line: error.line,
                                column: error.column,
                            });

                            consumer.destroy();
                            // eslint-disable-next-line no-param-reassign
                            error.result = result;
                            return error;
                        }).catch((err) => {
                            console.error(`解析 ${error.file || error.fileFromCI} 文件时出错`, err);
                            return error;
                        });
                    }
                    return error;
                })).catch((err) => {
                    console.error('解析 Source Map 文件时出错', err);
                }).finally(() => {
                    this.isRequesting = false;
                });
                this.errorList = list;
            }).catch((err) => {
                this.isRequesting = false;
                console.error('解压 Source Map 压缩包时出错', err);
            });
        },

        getErrorSourcemapResultProperty(row, property) {
            return (row.result && row.result[property]) || '-';
        },
    },
};
</script>

<style lang="less" scoped>
.wechat-mini-program-sourcemap {
    margin: 0 50px 50px;
    .header {
        display: flex;
        align-items: center;
        height: 50px;
        margin: 20px 0;
        font-weight: bold;
        font-size: 28px;
        line-height: 50px;

        .title {
            flex-grow: 1;
            display: flex;
            align-items: baseline;
            line-height: 50px;
        }
    }
    .error-input-area {
        display: flex;
        .error-content {
            flex-grow: 1;
            height: 270px;
            margin-left: 10px;

            /deep/ textarea {
                white-space: nowrap;
            }
        }

        .file-input {
            .upload-area {
                text-align: left;

                /deep/ .el-upload-dragger {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 286px;

                    .el-icon-upload {
                        margin-top: 0;
                    }
                }
            }

            /deep/ .el-upload-list {
                width: 360px;
            }

            .input {
                margin-top: 20px;
            }
        }

        .parse-btn {
            margin-left: 10px;
            height: 285px;
        }
    }

    .result-area {
        .title {
            margin: 20px 0;
            font-weight: bold;
            font-size: 24px;
            text-align: left;
        }
    }
}
</style>
