/*
 * @Date: 2021-01-01 13:57:27
 * @LastEditors: wax
 * @LastEditTime: 2021-01-02 13:27:58
 * @FilePath: ../src/components/index.js
 */

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function validateFileName(str) {
  return (
    /^\S+\.vue$/.test(str) &&
    str.replace(/^\S+\/(\w+)\.vue$/, (rs, $1) => capitalizeFirstLetter($1))
  );
}

// const requireComponent = require.context('.', true, /\.vue$/)
const requireComponent = import.meta.globEager("./**/*.vue");

export default {
  install(app) {
    // 找到组件文件夹下以.vue命名的文件，如果文件名为index，那么取组件中的name作为注册的组件名
    for (const component of Object.entries(requireComponent)) {
      const componentName = component[0].split("/")[1];
      app.component(componentName, component[1].default || component);
    }
  }
};
