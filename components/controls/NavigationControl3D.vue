<script>
import commonMixin from '../base/mixins/common.js'
import { createSize } from '../base/factory.js'

export default {
  name: 'bmap-gl-navigation3d',
  render () { },
  mixins: [commonMixin('control')],
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
    },
    type: {
      type: String
    },
    showZoomInfo: {
      type: Boolean
    },
    enableGeolocation: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    anchor () {
      this.reload()
    },
    offset () {
      this.reload()
    },
    type () {
      this.reload()
    },
    showZoomInfo () {
      this.reload()
    }
  },
  methods: {
    load () {
      const { BMapGL, map, anchor, offset } = this
      this.originInstance = new BMapGL.NavigationControl3D({
        anchor: global[anchor],
        offset: offset && createSize(BMapGL, offset)
      })
      map.addControl(this.originInstance)
    }
  }
}
</script>
