# Custom Control

`BmControl` component allows developers to customize the controls.

Due to the mouse wheel scaling featrue of Baidu Map, scrolling a DOM element with mouse wheel in a custom control component will not to work. It can be resolved by stopping the propagation of `wheel` event.

## Instance Properties

|name|type|default|description|
|------|-----|-----|----|
|anchor|ControlAnchor||The location of the control.|
|offset|Size||The offset of the control.|

## Examples

### Add a custom control on the map

#### Code

```html
<template>
  <bmap-gl class="map" :zoom="zoom" :center="{lng: 116.404, lat: 39.915}">
    <bmap-gl-control>
      <button @click="addZoom(19)">Zoom Max</button>
      <button @click="addZoom(10)">Reset</button>
      <button @click="addZoom(3)">Zoom Min</button>
    </bmap-gl-control>
  </bmap-gl>
</template>

<script>
export default {
  data () {
    return {
      zoom: 10
    }
  },
  methods: {
    addZoom (level) {
      this.zoom = level
    }
  }
}
</script>
```

#### Preview 

<doc-preview>
  <bmap-gl class="map" :zoom="zoom" :center="{lng: 116.404, lat: 39.915}">
    <bmap-gl-control>
      <md-button class="md-raised" @click="addZoom(19)">Zoom Max</md-button>
      <md-button class="md-raised" @click="addZoom(10)">Reset</md-button>
      <md-button class="md-raised" @click="addZoom(3)">Zoom Min</md-button>
    </bmap-gl-control>
  </bmap-gl>
</doc-preview>

### Use third party libraries

#### 代码

```html
<template>
  <bmap-gl class="map" :zoom="zoom" :center="{lng: 116.404, lat: 39.915}" @ready="setDistanceToolInstance">
    <bmap-gl-control>
      <button @click="openDistanceTool">Open Instance Tool</button>
    </bmap-gl-control>
  </bmap-gl>
</template>

<script>
import DistanceTool from 'bmaplib.distancetool'

export default {
  unmount () {
    distanceTool && distanceTool.close()
  },
  methods: {
    setDistanceToolInstance ({map}) {
      this.distanceTool = new DistanceTool(map, {lineStroke : 2})
    },
    openDistanceTool (e) {
      const {distanceTool} = this
      distanceTool && distanceTool.open()
    }
  }
}
</script>
```

#### 预览

<doc-preview>
  <bmap-gl class="map" :zoom="zoom" :center="{lng: 116.404, lat: 39.915}" @ready="setDistanceToolInstance">
    <bmap-gl-control>
      <md-button class="md-raised md-primary" @click="openDistanceTool">
        Open Instance Tool
      </md-button>
    </bmap-gl-control>
  </bmap-gl>
</doc-preview>

<script>
import DistanceTool from 'bmaplib.distancetool'

export default {
  data () {
    return {
      zoom: 10
    }
  },
  unmount () {
    distanceTool && distanceTool.close()
  },
  methods: {
    setDistanceToolInstance ({map}) {
      this.distanceTool = new DistanceTool(map, {lineStroke : 2})
    },
    openDistanceTool (e) {
      const {distanceTool} = this
      distanceTool && distanceTool.open()
    },
    addZoom (level) {
      this.zoom = level
    }
  }
}
</script>