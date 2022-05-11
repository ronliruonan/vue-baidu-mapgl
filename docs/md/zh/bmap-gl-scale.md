# 比例尺控件

`BmapGLScale`

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|anchor|ControlAnchor||控件停靠位置|
|offset|Size||控件偏移值|

## 示例

### 在右上角加入比例尺控件

#### 代码

```html
<template>
  <bmap-gl class="map" center="北京">
    <bmap-gl-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bmap-gl-scale>
  </bmap-gl>
</template>
```

#### 预览

<doc-preview>
  <bmap-gl class="map" center="北京">
    <bmap-gl-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bmap-gl-scale>
  </bmap-gl>
</doc-preview>
