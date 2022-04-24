# Usage

## Usage

### Global Registration

Regist all components of *vue-bmap-gl* at once.

```javascript
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map-plus'

Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'YOUR_APP_KEY'
})
```

```html
<template>
  <bmap-gl class="bmap-gl-view">
  </bmap-gl>
</template>

<style>
.bmap-gl-view {
  width: 100%;
  height: 300px;
}
</style>
```

### Local Registration

A locally registered `BaiduMap` component **must** declare the `ak` attribute.
All components are stored in the `vue-bmap-gl / components` folder.
As ES module can't be run directly in most browsers, if importing component causes some runtime errors, please check the webpack's loader configuration whethor the `include` and `exclude` options hits this library.

```html
<template>
  <bmap-gl class="bmap-gl-view" ak="YOUR_APP_KEY">
  </bmap-gl>
</template>

<script>
import BaiduMap from 'vue-bmap-gl/components/map/Map.vue'
export default {
  components: {
    BaiduMap
  }
}
</script>

<style>
.bmap-gl-view {
  width: 100%;
  height: 300px;
}
</style>
```

### CDN Registration

```html
<script>
Vue.use(VueBaiduMap.default, {
  ak: 'YOUR_APP_KEY'
})
</script>
```

## Q&A

- `BaiduMap` component is an empty block level element. If it doesn't declare its height, the map view will be invisible.
- `BaiduMap` component cannot render maps without `center` and `zoom`. But if `center` is a legal place name string, `BaiduMap` will automatically adjust the value of` zoom` according to the name.
- If you need to update your model, just do it in the callback of the global component event `ready`.

### Wrong Way

```html
<template>
  <bmap-gl :center="center" :zoom="zoom"></bmap-gl>
</template>
<script>
export default {
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  mounted () {
    this.lng = 116.404
    this.lat = 39.915
    this.zoom = 15
  }
}
</script>
```

### Right Way

```html
<template>
  <bmap-gl :center="center" :zoom="zoom" @ready="handler"></bmap-gl>
</template>
<script>
export default {
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods: {
    handler ({BMapGL, map}) {
      console.log(BMapGL, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  }
}
</script>
```

## Hello world!

```html
<template>
  <bmap-gl class="map" center="北京"></bmap-gl>
</template>
<style>
.map {
  width: 100%;
  height: 400px;
}
</style>
```
<doc-preview>
  <bmap-gl class="map" center="北京">
  </bmap-gl>
</doc-preview>
