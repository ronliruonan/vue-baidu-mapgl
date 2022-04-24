<script>
import commonMixin from '../base/mixins/common.js'
import {createSize} from '../base/factory.js'

export default {
  name: 'bmap-gl-panorama',
  mixins: [commonMixin('control')],
  render () {},
  props: ['anchor', 'offset'],
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
      const {BMapGL, map, anchor, offset} = this
      this.originInstance = new BMapGL.PanoramaControl({
        anchor: global[anchor],
        offset: offset && createSize(BMapGL, offset)
      })
      map.addControl(this.originInstance)
    }
  }
}
</script>
