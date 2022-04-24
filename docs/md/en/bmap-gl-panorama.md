# Panorama Control

`BmPanorama`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|anchor|ControlAnchor||The location of the control.|
|offset|Size||The offset of the control.|

## Examples

### Add a panorama control on the map

#### Code

```html
<template>
  <bmap-gl class="map" center="北京">
    <bmap-gl-panorama></bmap-gl-panorama>
  </bmap-gl>
</template>
```

#### Preview
<doc-preview>
  <bmap-gl class="map" center="北京">
    <bmap-gl-panorama></bmap-gl-panorama>
  </bmap-gl>
</doc-preview>