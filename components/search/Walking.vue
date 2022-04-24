<template>
<div v-show="panel">
  <slot></slot>
</div>
</template>

<script>
import {createPoint} from '../base/factory.js'
import {isPoint, getPosition} from '../base/util.js'
import commonMixin from '../base/mixins/common.js'

export default {
  name: 'bmap-gl-walking',
  mixins: [commonMixin('search')],
  props: {
    location: {
      type: [Object, String]
    },
    start: {
      type: [Object, String]
    },
    end: {
      type: [Object, String]
    },
    panel: {
      type: Boolean,
      default: true
    },
    pageCapacity: {
      type: Number
    },
    autoViewport: {
      type: Boolean
    },
    selectFirstResult: {
      type: Boolean
    }
  },
  watch: {
    location: {
      handler (val) {
        const {originInstance, map} = this
        originInstance.setLocation(val || map)
      },
      deep: true
    },
    start: {
      handler (val) {
        const {originInstance, end, BMapGL} = this
        originInstance.search(getPosition(BMapGL, val), getPosition(BMapGL, end))
      },
      deep: true
    },
    end: {
      handler (val) {
        const {originInstance, start, BMapGL} = this
        originInstance.search(getPosition(BMapGL, start), getPosition(BMapGL, val))
      },
      deep: true
    },
    panel () {
      this.reload()
    },
    autoViewport (val) {
      this.reload()
    },
    selectFirstResult (val) {
      this.reload()
    },
    highlightMode () {
      this.reload()
    }
  },
  methods: {
    search (start, end) {
      const {originInstance} = this
      originInstance.search(start, end)
    },
    load () {
      const instance = this
      const {map, BMapGL, location, selectFirstResult, autoViewport, highlightMode, search, start, end, originInstance} = this
      const _location = location ? isPoint(location) ? createPoint(BMapGL, location) : location : map
      const route = this.originInstance = new BMapGL.WalkingRoute(_location, {
        renderOptions: {
          map,
          // panel: panel && this.$el,
          panel: this.$el,
          selectFirstResult,
          autoViewport,
          highlightMode
        },
        onSearchComplete (e) {
          if (originInstance && originInstance !== route) {
            originInstance.clearResults()
          }
          instance.$emit('searchcomplete', e)
        },
        onMarkersSet (e) {
          instance.$emit('markersset', e)
        },
        onInfoHtmlSet (e) {
          instance.$emit('infohtmlset', e)
        },
        onPolylinesSet (e) {
          instance.$emit('polylinesset', e)
        },
        onResultsHtmlSet (e) {
          instance.$emit('resultshtmlset', e)
        }
      })
      search(isPoint(start) ? createPoint(BMapGL, start) : start, isPoint(end) ? createPoint(BMapGL, end) : end)
    }
  }
}
</script>
