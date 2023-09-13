# chrome-extension-vue3-antdv-ts-boilerplate

Chrome Extension Development boilerplate

Incorporates a draggable floating window, icons on mouse hover, along with their respective pop-up windows. Customization is also feasible.
I've encapsulated a proprietary messaging framework

[中文文档](README_ZH.md)

# Getting Started
- Install
```
git clone https://github.com/sonar-su/chrome-extension-vue3-antdv-ts-boilerplate.git
cd <project_name>
pnpm install (node version > 14)
```
- Starting Development
```
pnpm dev
```
Then load extension in browser with the dist/ folder.

After the toast loading in the lower-left corner disappears, proceed to open the plugin popup; otherwise, the antdv component might not render properly.
# Build
```
npm run build
```

## LICENSE
[MIT](LICENSE)

## Credits
The majority of this project is built upon: 

https://github.com/mubaidr/vite-vue3-chrome-extension-v3

https://github.com/antfu/vitesse-webext


