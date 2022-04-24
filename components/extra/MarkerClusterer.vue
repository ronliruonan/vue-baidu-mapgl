<template>
<span>
  <slot></slot>
</span>
</template>

<script>
import MarkerClusterer from 'bmaplib.markerclusterer'
import {createSize} from '../base/factory.js'
import commonMixin from '../base/mixins/common.js'

export default {
  name: 'bml-marker-clusterer',
  mixins: [commonMixin('markerClusterer')],
  props: {
    gridSize: {
      type: Object
    },
    maxZoom: {
      type: Number
    },
    minClusterSize: {
      type: Number
    },
    styles: {
      type: Array,
      default () {
        return []
      }
    },
    averageCenter: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    gridSize: {
      handler (val) {
        const {BMapGL, originInstance} = this
        originInstance.setGridSize(BMapGL, val.map)
      },
      deep: true
    },
    maxZoom (val) {
      const {originInstance} = this
      originInstance.setMaxZoom(val)
    },
    minClusterSize: {
      handler (val) {
        const {BMapGL, originInstance} = this
        originInstance.setMinClusterSize(createSize(BMapGL, val))
      },
      deep: true
    },
    styles: {
      handler (val) {
        const {BMapGL, originInstance} = this
        const obj = JSON.parse(JSON.stringify(val)).map(item => {
          item.size = item.size && createSize(BMapGL, item.size)
          return item
        })
        originInstance.setStyles(obj)
      },
      deep: true
    },
    averageCenter (val) {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMapGL, map, gridSize, minClusterSize, maxZoom, styles, averageCenter} = this
      this.originInstance = new MarkerClusterer(map, {
        gridSize: gridSize && createSize(BMapGL, gridSize),
        maxZoom,
        minClusterSize: minClusterSize && createSize(BMapGL, minClusterSize),
        styles: styles.map(item => {
          item.size = createSize(BMapGL, item.size)
          return item
        }),
        isAverageCenter: averageCenter
      })
      this.$nextTick(() => {
        const markers = this.$children.map(inst => inst.originInstance).filter(marker => marker instanceof BMapGL.Marker)
        this.originInstance.addMarkers(markers)
      })
    }
  },
  beforeCreate () {
    this.preventChildrenRender = true
  }
}
</script>
