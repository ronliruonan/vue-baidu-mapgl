<script>
import commonMixin from '../base/mixins/common.js'
import bindEvents from '../base/bindEvent.js'
import {createPoint} from '../base/factory.js'

export default {
  render () {},
  name: 'bmap-gl-point-collection',
  mixins: [commonMixin('overlay')],
  props: {
    points: {
      type: Array,
      default () {
        return []
      }
    },
    shape: {
      type: String,
      default: 'BMAP_POINT_SHAPE_CIRCLE'
    },
    color: {
      type: String
    },
    size: {
      type: String,
      default: 'BMAP_POINT_SIZE_NORMAL'
    }
  },
  watch: {
    shape (val) {
      const {originInstance, color, size} = this
      originInstance.setStyles({
        shape: global[val],
        color,
        size: global[size]
      })
    },
    size (val) {
      const {originInstance, color, shape} = this
      originInstance.setStyles({
        shape: global[shape],
        color,
        size: global[val]
      })
    },
    color (val) {
      const {originInstance, shape, size} = this
      originInstance.setStyles({
        shape: global[shape],
        color: val,
        size: global[size]
      })
    },
    points: {
      deep: true,
      handler (val) {
        const {originInstance} = this
        originInstance.clear()
        originInstance.setPoints(val)
      }
    }
  },
  methods: {
    load () {
      const {BMapGL, map, points, shape, color, size} = this
      const overlay = this.originInstance = new BMapGL.PointCollection(points.map(p => createPoint(BMapGL, p)), {
        shape: global[shape],
        color,
        size: global[size]
      })
      bindEvents.call(this, overlay)
      map.addOverlay(overlay)
    }
  }
}
</script>
