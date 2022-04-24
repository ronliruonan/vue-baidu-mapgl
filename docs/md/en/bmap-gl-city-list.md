# City List Control

`BmCityList`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|anchor|ControlAnchor||The location of the control.|
|offset|Size||The offset of the control.|

## Events
|name|parameter|description|
|------|-----|----|
|changeBefore||Triggers before switching the city.|
|changeAfter||Triggers after switching the city.|


## Examples

### Add a city list control in the upper left corner of the map

#### Code

```html
<template>
  <bmap-gl class="map" class="map" style="height: 500px" center="北京">
    <bmap-gl-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bmap-gl-city-list>
  </bmap-gl>
</template>
```

#### Preview

<doc-preview>
  <bmap-gl class="map" class="map" style="height: 500px" center="北京">
    <bmap-gl-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bmap-gl-city-list>
  </bmap-gl>
</doc-preview>