import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
import { viteMockServe } from "vite-plugin-mock";

import createAutoImport from './auto-import'
import createSvgIcon from './svg-icon'
import createCompression from './compression'
import createSetupExtend from './setup-extend'

export default function createVitePlugins(viteEnv, isBuild = false) {
  console.log('viteEnv', viteEnv.VITE_MOCK, typeof viteEnv.VITE_MOCK)
  const vitePlugins = [
    vue(),
    // vant 按需引入
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `../es/${name}/style`,
        },
      ],
    }),
    // mock配置
    viteMockServe({
      mockPath: 'mock',// 设置模拟.ts 文件的存储文件夹，默认为根目录下的mock文件夹
      supportTs: false, //打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
      localEnabled: viteEnv.VITE_MOCK == 'true', // 设置是否启用本地 xxx.ts 文件，不要在生产环境中打开它.设置为 false 将禁用 mock 功能
      // prodEnabled: viteEnv.VITE_MOCK == true, // 设置打包是否启用 mock 功能
      prodEnabled: false, // 设置打包是否启用 mock 功能
      //  这样可以控制关闭mock的时候不让mock打包到最终代码内
      injectCode: `
          import { setupProdMockServer } from '../mockProdServer';
          setupProdMockServer();
        `,
    })
  ]

  // vitePlugins.push(mockjs())
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createSetupExtend())
  vitePlugins.push(createSvgIcon(isBuild))
  isBuild && vitePlugins.push(...createCompression(viteEnv))
  return vitePlugins
}
