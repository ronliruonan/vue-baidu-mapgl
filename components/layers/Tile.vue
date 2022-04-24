<script>
import commonMixin from '../base/mixins/common.js'
import {createBounds} from '../base/factory.js'

export default {
  name: 'bmap-gl-tile',
  render (h) {},
  mixins: [commonMixin('layer')],
  props: {
    transparentPng: {
      type: Boolean
    },
    tileUrlTemplate: {
      type: String
    },
    copyright: {
    },
    zIndex: {
      type: Number
    }
  },
  watch: {
    transparentPng () {
      this.reload()
    },
    tileUrlTemplate () {
      this.reload()
    },
    copyright () {
      this.reload()
    },
    zIndex () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMapGL, map, transparentPng, tileUrlTemplate, copyright, zIndex} = this
      this.originInstance = new BMapGL.TileLayer({
        transparentPng,
        tileUrlTemplate,
        copyright: copyright && {
          id: copyright.id,
          content: copyright.content,
          bounds: copyright.bounds && createBounds(copyright.bounds)
        },
        zIndex
      })
      map.addTileLayer(this.originInstance)
    }
  }
}
</script>
