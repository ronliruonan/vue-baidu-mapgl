# 交通流量图层

`BmTraffic`

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|predictDate|PredictDate||预测日期|

## 示例

### 周日12点时的交通路况

#### 代码

```html
<template>
  <bmap-gl class="map" :center="{lng: 116.332782, lat: 40.007978}" :zoom="16">
    <bmap-gl-traffic :predictDate="{weekday: 7, hour: 12}">
    </bmap-gl-traffic>
  </bmap-gl>
</template>
```

#### 预览

<doc-preview>
  <bmap-gl class="map" :center="{lng: 116.332782, lat: 40.007978}" :zoom="15">
    <bmap-gl-traffic :predictDate="{weekday: 7, hour: 12}">
    </bmap-gl-traffic>
  </bmap-gl>
</doc-preview>