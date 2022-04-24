# Scale Control

`BmScale`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|anchor|ControlAnchor||The location of the control.|
|offset|Size||The offset of the control.|

## Examples

### Add a scale control in the upper right corner of the map

#### Code

```html
<template>
  <bmap-gl class="map" center="北京">
    <bmap-gl-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bmap-gl-scale>
  </bmap-gl>
</template>
```

#### Preview

<doc-preview>
  <bmap-gl class="map" center="北京">
    <bmap-gl-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bmap-gl-scale>
  </bmap-gl>
</doc-preview>