<script>
import commonMixin from '../base/mixins/common.js'
import { createSize } from '../base/factory.js'

export default {
  name: 'bmap-gl-scale',
  render () { },
  mixins: [commonMixin('control')],
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
    }
  },
  watch: {
    anchor () {
      this.reload()
    },
    offset () {
      this.reload()
    }
  },
  methods: {
    load () {
      const { BMapGL, map, anchor, offset } = this
      this.originInstance = new BMapGL.ScaleControl({ // 添加比例尺
        anchor: global[anchor],
        offset: offset && createSize(BMapGL, offset)
      })
      map.addControl(this.originInstance)
    }
  }
}
</script>
