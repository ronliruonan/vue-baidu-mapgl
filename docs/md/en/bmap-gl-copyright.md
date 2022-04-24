# Copyright Control

`BmCopyright`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|anchor|ControlAnchor||The location of the control.|
|offset|Size||The offset of the control.|
|copyright|Array||The list of copyright messages.|

## Examples

### Add a copyright control in the upper right corner of the map

#### Code

```html
<template>
  <bmap-gl class="map" center="北京" :zoom="3">
    <bmap-gl-copyright
      anchor="BMAP_ANCHOR_TOP_RIGHT"
      :copyright="[{id: 1, content: 'Copyright Message', bounds: {ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<a>Copyright message.</a>'}]">
    </bmap-gl-copyright>
  </bmap-gl>
</template>
```

#### Preview

<doc-preview>
  <bmap-gl class="map" center="北京" :zoom="3">
    <bmap-gl-copyright
      anchor="BMAP_ANCHOR_TOP_RIGHT"
      :copyright="[{id: 1, content: 'Copyright Message', bounds: {ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<a>Copyright meessage</a>'}]">
    </bmap-gl-copyright>
  </bmap-gl>
</doc-preview>