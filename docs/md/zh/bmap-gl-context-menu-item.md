<template lang="md">

# 菜单项

`BmContextMenuItem` 菜单项是右键菜单的子组件，请勿在其他组件中使用。

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|callback|Function|new Function|点击菜单时执行的回调函数，第一个参数为 {BMapGL, map, target, pixel, point}|
|text|String||指定此菜单项的文本|
|iconUrl|String||指定此菜单项的icon URL（大小为17px*17px）|
|disabled|Boolean|false|是否禁用菜单项|
|seperator|Boolean|false|是否是分隔线（此属性为真时，其它属性会被忽略）|

## 示例

### 插入一个复杂的右键菜单

#### 代码

```html
<template>
  <bmap-gl class="map" :center="center" :zoom="zoom">
    <bmap-gl-context-menu>
      <bmap-gl-context-menu-item :callback="gotoBeijing" text="去北京"></bmap-gl-context-menu-item>
      <bmap-gl-context-menu-item :callback="gotoShanghai" text="去上海" iconUrl="http://lbsyun.baidu.com/skins/MySkin/resources/img/red.png"></bmap-gl-context-menu-item>
      <bmap-gl-context-menu-item seperator></bmap-gl-context-menu-item>
      <bmap-gl-context-menu-item disabled text="去深圳"></bmap-gl-context-menu-item>
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
      <bmap-gl-context-menu-item :callback="gotoShanghai" text="去上海" iconUrl="http://lbsyun.baidu.com/skins/MySkin/resources/img/red.png"></bmap-gl-context-menu-item>
      <bmap-gl-context-menu-item seperator></bmap-gl-context-menu-item>
      <bmap-gl-context-menu-item disabled text="去深圳"></bmap-gl-context-menu-item>
    </bmap-gl-context-menu>
  </bmap-gl>
</doc-preview>
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