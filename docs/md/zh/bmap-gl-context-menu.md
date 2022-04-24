<template lang="md">

# 上下文菜单

`BmContextMenu`

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|width |Number||菜单宽度|

## 事件

|事件名|参数|描述|
|------|----|----|
|open|event{type, target, point, pixel}|右键菜单打开时触发，事件参数point和pixel分别表示菜单开启时的地理和像素坐标点|
|close|event{type, target, point, pixel}|右键菜单关闭时触发，事件参数point和pixel分别表示菜单开启时的地理和像素坐标点|

## 示例

### 在地图中插入一个上下文菜单

#### 代码

```html
<template>
  <bmap-gl class="map" :center="center" :zoom="zoom">
    <bmap-gl-context-menu>
      <bmap-gl-context-menu-item :callback="gotoBeijing" text="去北京"></bmap-gl-context-menu-item>
      <bmap-gl-context-menu-item :callback="gotoShanghai" text="去上海"></bmap-gl-context-menu-item>
    </bmap-gl-context-menu>
  </bmap-gl>
</template>

<script>
export default {
  data () {
    return {
      center: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 15
    }
  },
  methods: {
    gotoBeijing (e) {
      this.center = {
        lng: 116.404,
        lat: 39.915
      }
    },
    gotoShanghai (e) {
      this.center = {
        lng: 121.473354,
        lat: 31.238413
      }
    }
  }
}
</script>
```

#### 预览

<doc-preview>
  <bmap-gl class="map" :center="center" :zoom="zoom">
    <bmap-gl-context-menu>
      <bmap-gl-context-menu-item :callback="gotoBeijing" text="去北京"></bmap-gl-context-menu-item>
      <bmap-gl-context-menu-item :callback="gotoShanghai" text="去上海"></bmap-gl-context-menu-item>
    </bmap-gl-context-menu>
  </bmap-gl>
</doc-preview>

### 在 `BmMarker` 组件中插入一个上下文菜单

#### 代码

```html
<template>
  <bmap-gl class="map" :center="center" :zoom="zoom">
    <bmap-gl-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true">
      <bmap-gl-context-menu>
        <bmap-gl-context-menu-item :callback="getPosition" text="获取坐标"></bmap-gl-context-menu-item>
      </bmap-gl-context-menu>
    </bmap-gl-marker>
  </bmap-gl>
</template>

<script>
export default {
  data () {
    return {
      center: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 15
    }
  },
  methods: {
    getPosition (e) {
      alert(`${e.point.lng} / ${e.point.lat}`)
    }
  }
}
</script>
```

#### 预览

<doc-preview>
  <bmap-gl class="map" :center="center" :zoom="zoom">
    <bmap-gl-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true">
      <bmap-gl-context-menu>
        <bmap-gl-context-menu-item :callback="getPosition" text="获取坐标"></bmap-gl-context-menu-item>
      </bmap-gl-context-menu>
    </bmap-gl-marker>
  </bmap-gl>
</doc-preview>
</template>

<script>
export default {
  data () {
    return {
      center: '北京',
      zoom: 15
    }
  },
  methods: {
    gotoBeijing (e) {
      this.center = '北京'
    },
    gotoShanghai (e) {
      this.center = '上海'
    },
    getPosition (e) {
      alert(`${e.point.lng} / ${e.point.lat}`)
    }
  }
}
</script>