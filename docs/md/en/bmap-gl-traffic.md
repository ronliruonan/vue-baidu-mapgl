# Traffic Layer

`BmTraffic`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|predictDate|PredictDate||Predict date of traffic.|

## Examples

### Traffic at 12 o'clock on Sundays

#### Code

```html
<template>
  <bmap-gl class="map" :center="{lng: 116.332782, lat: 40.007978}" :zoom="16">
    <bmap-gl-traffic :predictDate="{weekday: 7, hour: 12}">
    </bmap-gl-traffic>
  </bmap-gl>
</template>
```

#### Preview

<doc-preview>
  <bmap-gl class="map" :center="{lng: 116.332782, lat: 40.007978}" :zoom="15">
    <bmap-gl-traffic :predictDate="{weekday: 7, hour: 12}">
    </bmap-gl-traffic>
  </bmap-gl>
</doc-preview>