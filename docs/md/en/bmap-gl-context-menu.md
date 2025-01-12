<template lang="md">

# Context Menu

`BmContextMenu`

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|width|Number||Menu width.|

## Events

|name|parameter|description|
|------|----|----|
|open|event{type, target, point, pixel}|Triggers when opening the context menu.|
|close|event{type, target, point, pixel}|Triggers when closing the context menu.|

## Example

### Add a context menu on the map

#### Code

```html
<template>
  <bmap-gl class="map" :center="center" :zoom="zoom">
    <bmap-gl-context-menu>
      <bmap-gl-context-menu-item :callback="gotoBeijing" text="Go to Beijing"></bmap-gl-context-menu-item>
      <bmap-gl-context-menu-item :callback="gotoShanghai" text="Go to Shanghai"></bmap-gl-context-menu-item>
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
      <bmap-gl-context-menu-item :callback="gotoShanghai" text="Go to Shanghai"></bmap-gl-context-menu-item>
    </bmap-gl-context-menu>
  </bmap-gl>
</doc-preview>

### Add a context menu on the `BmMarker` component

#### Code

```html
<template>
  <bmap-gl class="map" :center="center" :zoom="zoom">
    <bmap-gl-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true">
      <bmap-gl-context-menu>
        <bmap-gl-context-menu-item :callback="getPosition" text="Get coordinate"></bmap-gl-context-menu-item>
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

#### Preview

<doc-preview>
  <bmap-gl class="map" :center="center" :zoom="zoom">
    <bmap-gl-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true">
      <bmap-gl-context-menu>
        <bmap-gl-context-menu-item :callback="getPosition" text="Get coordinate"></bmap-gl-context-menu-item>
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