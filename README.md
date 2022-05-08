<p align="center">
  <img src="https://raw.githubusercontent.com/ronliruonan/vue-baidu-mapgl/static_site/favicon.png" width="200px">
</p>
<p align="center">Baidu Map GL components for Vue 2.x</p>

[![npm](https://img.shields.io/npm/v/vue-baidu-map-plus.svg)]()
[![Travis](https://img.shields.io/travis/ronliruonan/vue-baidu-map-plus.svg)]()
[![Package Quality](https://npm.packagequality.com/shield/vue-baidu-map-plus.svg)](http://packagequality.com/#?package=vue-baidu-map-plus)
[![npm](https://img.shields.io/npm/dm/vue-baidu-map-plus.svg)]()
[![license](https://img.shields.io/github/license/ronliruonan/vue-baidu-mapgl.svg)]()

# Baidu Map GL
## 选择`vue-baidu-map-plus`的理由
如果你的项目中已经在使用 `vue-baidu-map`, 那么当前就是你最佳的选择（ 因为fork了源项目，100%保留/兼容了原有的功能组件，仅最小范围升级GL版本 ）      

## 重复轮子吗
因为项目中使用了Lite版本百度地图 `vue-baidu-map`，与业务实际对照百度地图官网有多差异，为保持用户体感一致，考虑使用Baidu MapGL版本。    
考虑成本问题，直接直接fork原作者，升级为百度地图 GL版本，待完善ing.    


<br>
<br>

## Thanks & `vue-baidu-map` 源著
<p align="center">
  <img src="https://dafrok.github.io/vue-baidu-map/favicon.png" width="200px">
</p>
<p align="center">Baidu Map components for Vue 2.x</p>

[![npm](https://img.shields.io/npm/v/vue-baidu-map.svg)]()
[![Travis](https://img.shields.io/travis/Dafrok/vue-baidu-map.svg)]()
[![Package Quality](https://npm.packagequality.com/shield/vue-baidu-map.svg)](http://packagequality.com/#?package=vue-baidu-map)
[![npm](https://img.shields.io/npm/dm/vue-baidu-map.svg)]()
[![license](https://img.shields.io/github/license/dafrok/vue-baidu-map.svg)]()

## Languages

- [中文](https://github.com/Dafrok/vue-baidu-map/blob/master/README.zh.md)
- [English-Not available](https://github.com/Dafrok/vue-baidu-map/blob/master/README.md)

## Documentation

[https://dafrok.github.io/vue-baidu-map](https://dafrok.github.io/vue-baidu-map)

## Get Start

### Installation

```bash
npm i --save vue-baidu-map
```

### Initialization

```javascript
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'YOUR_APP_KEY'
})
```

### Usage

```vue
<template>
  <baidu-map class="map">
  </baidu-map>
</template>

<style>
/* The container of BaiduMap must be set width & height. */
.map {
  width: 100%;
  height: 300px;
}
</style>
```

## Contributing

[Contributing Guide](https://github.com/Dafrok/vue-baidu-map/blob/master/CONTRIBUTING.md)


## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2016-present, Dafrok <o.o@mug.dog>
