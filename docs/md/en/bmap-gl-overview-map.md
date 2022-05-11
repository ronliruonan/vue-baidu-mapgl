# Overview Map Control

`BmapGLOverviewMap`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|anchor|ControlAnchor||The location of the control.|
|offset|Size||The offset of the control.|
|size|Size||The size of the overview map.|
|isOpen|Boolean|false|Whether the overview map is open or not.|

## Events
|name|parameter|description|
|------|-----|----|
|viewchanged|event{type, target, isOpen}|Triggers when the overview map is changed.|
|viewchanging|event{type, target}|Triggers during the changing of the overview map.|

## Examples

### Add a overview map control in the lower right corner of the map

#### Code

```html
<template>
  <bmap-gl class="map" center="北京">
    <bmap-gl-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bmap-gl-overview-map>
  </bmap-gl>
</template>
```

#### Preview

<doc-preview>
  <bmap-gl class="map" center="北京">
    <bmap-gl-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bmap-gl-overview-map>
  </bmap-gl>
</doc-preview>
