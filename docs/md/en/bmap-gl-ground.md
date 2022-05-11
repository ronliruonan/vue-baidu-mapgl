<template lang="md">

# Ground Overlay

`BmGround`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|bounds|Bounds||Ground cover bounds.|
|opacity|Number||Overlay opacity.|
|imageURL|String||Overlay image url.|
|displayOnMinLevel|Number||The minimum zoom level of that the layer displays.|
|displayOnMaxLevel|Number||The maximum zoom level of that the layer displays.|


## Events

|name|parameter|description|
|------|----|----|
|click|event{type, target, point, pixel}|Triggers when click on the ground overlay.|
|dblclick|event{type, target, point, pixel}|Triggers when double click on the ground overlay.|

## Examples

### Add a ground overlay on the map

#### Code

```html
<template>
  <bmap-gl class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bmap-gl-ground
      :bounds="{ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}" imageURL="http://raw.githubusercontent.com/ronliruonan/vue-baidu-mapgl/static_site/favicon.png">
    </bmap-gl-ground>
  </bmap-gl>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
```

#### Preview

<doc-preview>
  <bmap-gl class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="12">
    <bmap-gl-ground
      :bounds="bounds"
      imageURL="//developer.baidu.com/map/jsdemo/img/si-huan.png"
      :opacity="1"
      :displayOnMinLevel="10"
      :displayOnMaxLevel="14">
    </bmap-gl-ground>
  </bmap-gl>
</doc-preview>
</template>

<script>
export default {
  data () {
    return {
      bounds: {
        ne: {
          lng: 116.475451,
          lat: 39.9764
        },
        sw:{
          lng: 116.29579,
          lat: 39.837146
        }
      }
    }
  }
}
</script>