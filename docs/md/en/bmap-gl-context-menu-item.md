<template lang="md">

# Context Menu Item

`BmContextMenuItem`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|callback|Function|new Function|The callback function of clicking the menu item. The parameter of callback is `{BMapGL, map, target, pixel, point}`.|
|text|String||The text of the menu item.|
|iconUrl|String||The icon of the menu item. (size: 17 * 17)|
|disabled|Boolean|false|Whether or not disable the menu item.|
|seperator|Boolean|false|Whether the menu item is a seperator or not.|

## Events

### Add a context menu on the map

#### Code

```html
<template>
  <bmap-gl class="map" :center="center" :zoom="zoom">
    <bmap-gl-context-menu>
      <bmap-gl-context-menu-item :callback="gotoBeijing" text="Go to Beijing"></bmap-gl-context-menu-item>
      <bmap-gl-context-menu-item :callback="gotoShanghai" text="Go to Shanghai" iconUrl="http://lbsyun.baidu.com/skins/MySkin/resources/img/red.png"></bmap-gl-context-menu-item>
      <bmap-gl-context-menu-item seperator></bmap-gl-context-menu-item>
      <bmap-gl-context-menu-item disabled text="Go to Shenzhen"></bmap-gl-context-menu-item>
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

#### Preview

<doc-preview>
  <bmap-gl class="map" :center="center" :zoom="zoom">
    <bmap-gl-context-menu>
      <bmap-gl-context-menu-item :callback="gotoBeijing" text="Go to Beijing"></bmap-gl-context-menu-item>
      <bmap-gl-context-menu-item :callback="gotoShanghai" text="Go to Shanghai" iconUrl="http://lbsyun.baidu.com/skins/MySkin/resources/img/red.png"></bmap-gl-context-menu-item>
      <bmap-gl-context-menu-item seperator></bmap-gl-context-menu-item>
      <bmap-gl-context-menu-item disabled text="Go to Shenzhen"></bmap-gl-context-menu-item>
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