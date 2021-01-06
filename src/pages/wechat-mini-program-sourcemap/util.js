const lineBreakReg = /\n+/;
const errorStringReg = /https:\/\/usr(?:\/\/([^/]+))?\/app-service\.js:(\d+):(\d+)/;

// eslint-disable-next-line import/prefer-default-export
export function parseErrorContent(errorContent) {
  const errorStringList = errorContent.split(lineBreakReg);
  return errorStringList.map((errorString) => {
    const result = errorString.match(errorStringReg);
    if (result) {
      return {
        canMap: true,
        errorString,
        // 不同地方获取的 sourcemap 压缩文件，通过 jszip 解析后得到的文件名不一致，以 __APP__ 为例：
        // 1. 从微信管理后台下载，__APP__/app-service.map.map
        // 2. CI 工具上传时获取的，/__APP__/app.service.js.map
        file: `${result[1] || '__APP__'}/app-service.map.map`, // 对应 1
        fileFromCI: `/${result[1] || '__APP__'}/app-service.js.map`, // 对应 2
        line: +result[2],
        column: +result[3],
      };
    }
    return {
      canMap: false,
      errorString,
      file: '',
      fileFromCI: '',
      line: '',
      column: '',
    };
  });
}
