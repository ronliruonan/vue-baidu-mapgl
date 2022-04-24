<template lang="md">

# Transit Search

`BmTransit`

## Instance Properties

|name|type|default|description|
|------|-----|------|----|
|location|String, Point, None||Search area. The type can be empty, coordinate point or city name.|
|start|String, Point, LocalResultPoi||The starting point, the type can be a keyword, a coordinate point (supported by version 1.1), or a LocalSearchPoi instance.|
|end|String, Point, LocalResultPoi||The end point, the type can be a keyword, a coordinate point (supported by version 1.1), or a LocalSearchPoi instance.|
|policy|TransitPolicy||Policy parameters for transit.|
|panel|Boolean|true|Whether to show the result panel.|
|pageCapacity|Number||Set the capacity per page.|
|autoViewport|Boolean||Whether to adjust the viewport after search.|
|selectFirstResult|Boolean||Whether to select the first search result.|

## Events

|name|parameter|description|
|------|----|----|
|markersset|{pois: Array}|Triggers when markers are set.|
|infohtmlset|{poi: LocalResultPoi}|Triggers when info windows are set.|
|resultshtmlset|{container: HTMLElement}|Triggers when the result panel is set.|
|searchcomplete|{results: [LocalResult]}|Triggers when the search is completed.|
|polylinesset|{routes: Array, routes: Array}|Triggers when the polyline is set.|

## Example

### Search transit policy on the map

#### 代码

```html
<template>
<bmap-gl>
  <bmap-gl-view class="map" center="北京">
  </bmap-gl-view>
  <bmap-gl-transit start="百度大厦" end="北京邮电大学西门" :auto-viewport="true" location="北京"></bmap-gl-transit>
</bmap-gl>
</template>
```

#### 预览
<doc-preview>
<bmap-gl>
  <bmap-gl-view class="map" center="北京">
  </bmap-gl-view>
  <bmap-gl-transit start="百度大厦" end="北京邮电大学西门" :auto-viewport="true" location="北京"></bmap-gl-transit>
</bmap-gl>
</doc-preview>
</template>
