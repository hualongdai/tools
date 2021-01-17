<template>
    <div class="doc-and-other-parse-link">
        <el-link
            href="https://blog.windstone.cc/articles/wechat-mini-program-sourcemap/"
            target="_blank"
            :underline="false"
            class="manual"
        >
            <span>使用文档</span>
            <i class="el-icon-link el-icon--right" />
        </el-link>
        <!-- <el-link
            v-if="position !== 'one-click-parse'"
            href="/"
            target="_blank"
            :underline="false"
            class="parse-link"
        >
            <span>一键解析服务</span>
            <i class="el-icon-link el-icon--right" />
        </el-link>
        <el-link
            v-if="position !== 'upload-zip-parse'"
            href="/upload-zip-parse"
            target="_blank"
            :underline="false"
            class="parse-link"
        >
            <span>上传 Source Map 压缩包解析</span>
            <i class="el-icon-link el-icon--right" />
        </el-link>
        <el-link
            v-if="position !== 'single-file-parse'"
            href="/single-file-parse"
            target="_blank"
            :underline="false"
            class="parse-link"
        >
            <span>单文件解析服务</span>
            <i class="el-icon-link el-icon--right" />
        </el-link> -->
    </div>
</template>

<script>
export default {
    props: {
        position: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="less" scoped>
.doc-and-other-parse-link {
    .parse-link {
        margin-left: 20px;
    }
}
</style>
