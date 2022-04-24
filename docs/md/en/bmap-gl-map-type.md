# Map Type Control

`BmMapType`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|anchor|ControlAnchor||The location of the control.|
|offset|Size||The offset of the control.|
|type|NavigationControlType||The type of the control.|
|mapTypes|Array||Controls the type of map instance.|

## Examples

### Add a map type control in the upper left corner of the map

#### Code

```html
<template>
  <bmap-gl class="map" center="北京">
    <bmap-gl-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bmap-gl-map-type>
  </bmap-gl>
</template>
```

#### Preview

<doc-preview>
  <bmap-gl class="map" center="北京">
    <bmap-gl-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bmap-gl-map-type>
  </bmap-gl>
</doc-preview>
