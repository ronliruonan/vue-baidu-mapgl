# Painting

## Description

Due to the features of MVVM, painting in the map no longer needs to be implemented using third-party tools such as `BMapLib.DrawingManager`.

## Examples

### Draw polylines

#### Code

```html
<bmap-gl class="map"
  :center="{lng: 116.404, lat: 39.915}"
  :zoom="14"
  @mousemove="syncPolyline"
  @click="paintPolyline"
  @rightclick="newPolyline">
  <bmap-gl-control>
    <button @click="toggle('polyline')">{{ polyline.editing ? 'STOP' : 'START' }}</button>
  </bmap-gl-control>
  <bmap-gl-polyline :path="path" v-for="path of polyline.paths"></bmap-gl-polyline>
</bmap-gl>

<script>
export default {
  data () {
    return {
      polyline: {
        editing: false,
        paths: []
      }
    }
  },
  methods: {
    toggle (name) {
      this[name].editing = !this[name].editing
    },
    syncPolyline (e) {
      if (!this.polyline.editing) {
        return
      }
      const {paths} = this.polyline
      if (!paths.length) {
        return
      }
      const path = paths[paths.length - 1]
      if (!path.length) {
        return
      }
      if (path.length === 1) {
        path.push(e.point)
      }
      this.$set(path, path.length - 1, e.point)
    },
    newPolyline (e) {
      if (!this.polyline.editing) {
        return
      }
      const {paths} = this.polyline
      if(!paths.length) {
        paths.push([])
      }
      const path = paths[paths.length - 1]
      path.pop()
      if (path.length) {
        paths.push([])
      }
    },
    paintPolyline (e) {
      if (!this.polyline.editing) {
        return
      }
      const {paths} = this.polyline
      !paths.length && paths.push([])
      paths[paths.length - 1].push(e.point)
    }
  }
}
</script>
```

#### Preview

<bmap-gl class="map"
  :center="{lng: 116.404, lat: 39.915}"
  :zoom="14"
  @mousemove="syncPolyline"
  @click="paintPolyline"
  @rightclick="newPolyline">
  <bmap-gl-control>
    <md-button class="md-raised md-primary" @click="toggle('polyline')">{{ polyline.editing ? 'STOP' : 'START' }}</md-button>
  </bmap-gl-control>
  <bmap-gl-polyline :path="path" v-for="path of polyline.paths"></bmap-gl-polyline>
</bmap-gl>

<script>
export default {
  data () {
    return {
      polyline: {
        editing: false,
        paths: []
      }
    }
  },
  methods: {
    toggle (name) {
      this[name].editing = !this[name].editing
    },
    syncPolyline (e) {
      if (!this.polyline.editing) {
        return
      }
      const {paths} = this.polyline
      if (!paths.length) {
        return
      }
      const path = paths[paths.length - 1]
      if (!path.length) {
        return
      }
      if (path.length === 1) {
        path.push(e.point)
      }
      this.$set(path, path.length - 1, e.point)
    },
    newPolyline (e) {
      if (!this.polyline.editing) {
        return
      }
      const {paths} = this.polyline
      if(!paths.length) {
        paths.push([])
      }
      const path = paths[paths.length - 1]
      path.pop()
      if (path.length) {
        paths.push([])
      }
    },
    paintPolyline (e) {
      if (!this.polyline.editing) {
        return
      }
      const {paths} = this.polyline
      !paths.length && paths.push([])
      paths[paths.length - 1].push(e.point)
    }
  }
}
</script>