<script>
import commonMixin from '../base/mixins/common.js'
import bindEvents from '../base/bindEvent.js'
import {createPoint, createSize} from '../base/factory.js'

export default {
  name: 'bmap-gl-label',
  render () {},
  mixins: [commonMixin('overlay')],
  props: {
    content: {
      type: String
    },
    title: {
      type: String
    },
    offset: {},
    position: {},
    labelStyle: {},
    zIndex: {
      type: Number,
      default: 0
    },
    massClear: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    content (val) {
      this.originInstance.setContent(val)
    },
    title (val) {
      this.originInstance.setTitle(val)
    },
    'offset.width' (val, oldVal) {
      const {BMapGL} = this
      if (val.toString() !== oldVal.toString()) {
        this.originInstance.setOffset(createSize(BMapGL, {width: val, height: this.offset.height}))
      }
    },
    'offset.height' (val, oldVal) {
      const {BMapGL} = this
      if (val.toString() !== oldVal.toString()) {
        this.originInstance.setOffset(createSize(BMapGL, {
          width: this.offset.width,
          height: val
        }))
      }
    },
    'position.lng' (val, oldVal) {
      const {BMapGL} = this
      const lng = val
      if (val.toString() !== oldVal.toString() && lng >= -180 && lng <= 180) {
        this.originInstance.setCenter(createPoint(BMapGL, {lng, lat: this.center.lat}))
      }
    },
    'position.lat' (val, oldVal) {
      const {BMapGL} = this
      const lat = val
      if (val.toString() !== oldVal.toString() && lat >= -74 && lat <= 74) {
        this.originInstance.setCenter(createPoint(BMapGL, {lng: this.center.lng, lat}))
      }
    },
    labelStyle: {
      handler (val) {
        this.originInstance.setStyle(val)
      },
      deep: true
    },
    zIndex (val) {
      this.originInstance.setZIndex(val)
    },
    massClear (val) {
      val ? this.originInstance.enableMassClear() : this.originInstance.disableMassClear()
    }
  },
  methods: {
    load () {
      const {BMapGL, map, content, title, offset, position, labelStyle, zIndex, massClear, $parent} = this
      const overlay = new BMapGL.Label(content, {
        offset: createSize(BMapGL, offset),
        position: createPoint(BMapGL, position),
        enableMassClear: massClear
      })
      this.originInstance = overlay
      try {
        $parent.originInstance.setLabel(overlay)
      } catch (e) {
        map.addOverlay(overlay)
      }
      title && overlay.setTitle(title)
      labelStyle && overlay.setStyle(labelStyle)
      zIndex && overlay.setZIndex(zIndex)
      bindEvents.call(this, overlay)
    }
  }
}
</script>
