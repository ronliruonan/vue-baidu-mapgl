# Tile Layer

`BmTile`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|transparentPng|Boolean||Whether or not a PNG with transparent information is used.|
|tileUrlTemplate|String||Specify a tile URL template that can be expanded for each tile request to reference a unique tile based on an existing tile coordinate system. The format of the template should be `http://yourhost/tile?x={X}&y={Y}&z={Z}.png` , X is longitude, Y is latitude and Z is zoom level.|
|copyright|Copyright||Copyright message.|
|zIndex|Number||Z index of the layer.|


## Examples

### Map of Tsinghua University

#### Code

```html
<template>
  <bmap-gl class="map" :center="{lng: 116.332782, lat: 40.007978}" :zoom="16">
    <bmap-gl-tile
      :isTransparentPng="true"
      tileUrlTemplate="//developer.baidu.com/map/jsdemo/demo/tiles/{Z}/tile{X}_{Y}.png">
    </bmap-gl-tile>
  </bmap-gl>
</template>
```

#### Preview

<doc-preview>
  <bmap-gl class="map" :center="{lng: 116.332782, lat: 40.007978}" :zoom="16">
    <bmap-gl-tile
      :isTransparentPng="true"
      tileUrlTemplate="//developer.baidu.com/map/jsdemo/demo/tiles/{Z}/tile{X}_{Y}.png"/></bmap-gl-tile>
  </bmap-gl>
</doc-preview>