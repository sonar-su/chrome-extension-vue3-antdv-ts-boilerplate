# chrome-extension-vue3-antdv-ts-boilerplate

自用的chrome插件开发模版
Vue3 + Typescript + Vite + Antdv(Ant Design Vue)

内置了可移动悬浮窗，鼠标hover后的icon以及对应的悬浮窗，也可自行修改
自己封装了一套消息传递（原来用的webext-bridge，不太会用，经常碰到预期外的问题）

# 开始入门
- 安装依赖
```
git clone https://github.com/sonar-su/chrome-extension-vue3-antdv-ts-boilerplate.git
cd <project_name>
pnpm install (node版本 > 14)
```
- 本地运行
```
pnpm dev
在chrome插件界面，打开右上角Developer mode，再点击左侧Load unpacked，加载该项目的dist目录
等左下角load的toast消失后再去打开插件popup，不然antdv组件会加载不出
```

# Build
```
npm run build
```

## LICENSE
[MIT](LICENSE)

## Credits
该项目大部分基于 https://github.com/mubaidr/vite-vue3-chrome-extension-v3



