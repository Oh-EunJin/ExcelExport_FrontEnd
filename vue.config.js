const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // npm run build 타겟 디렉토리 -> 해당 경로에 vue 빌드 출력물 생성됨
  //outputDir: '../excel_export_backend/src/main/resources/static',

  // npm run serve 개발 진행시에 포트가 다르기때문에 프록시 설정
  // target : 백엔드 port가 들어감
  // changeOrigin -> true로 해야 cros 문제 해결할 수 있음
  // devServer: {
  //   proxy: {
  //     '/': {
  //       target: "http://localhost:8080",
  //       changeOrigin: true,
  //     }
  //   }
  // },

  devServer: {
    port: 3000,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        ws: true,
        changeOrigin: true,
      },
    },
  },

})