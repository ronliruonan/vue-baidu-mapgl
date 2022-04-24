<script>
import commonMixin from '../base/mixins/common.js'
import {createSize} from '../base/factory.js'

export default {
  name: 'bmap-gl-navigation',
  render () {},
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
      const {BMapGL, map, anchor, offset, type, showZoomInfo, enableGeolocation} = this
      this.originInstance = new BMapGL.NavigationControl({
        anchor: global[anchor],
        offset: offset && createSize(BMapGL, offset),
        type: global[type],
        showZoomInfo,
        enableGeolocation
      })
      map.addControl(this.originInstance)
    }
  }
}
</script>
