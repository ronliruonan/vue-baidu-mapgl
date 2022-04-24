<script>
import commonMixin from '../base/mixins/common.js'
import {createSize} from '../base/factory.js'

export default {
  name: 'bmap-gl-copyright',
  render () {},
  mixins: [commonMixin('control')],
  props: ['anchor', 'offset', 'copyright'],
  watch: {
    anchor () {
      this.reload()
    },
    offset () {
      this.reload()
    },
    copyright () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMapGL, map, offset, anchor, updateCopyrightList} = this
      this.originInstance = new BMapGL.CopyrightControl({
        anchor: global[anchor],
        offset: offset && createSize(BMapGL, offset)
      })
      updateCopyrightList()
      map.addControl(this.originInstance)
    },
    updateCopyrightList () {
      const {BMapGL, map} = this
      const {removeCopyright, getCopyrightCollection} = this.originInstance
      const copyrightList = getCopyrightCollection()
      copyrightList && copyrightList.forEach(item => {
        removeCopyright(item.id)
      })
      this.copyright && this.copyright.forEach(item => {
        const bounds = item.bounds
          ? new BMapGL.Bounds(new BMapGL.Point(item.bounds.sw.lng, item.bounds.sw.lat), new BMapGL.Point(item.bounds.ne.lng, item.bounds.ne.lat))
          : map.getBounds()
        this.originInstance.addCopyright({
          id: item.id,
          content: item.content,
          bounds
        })
        this.originInstance.getCopyrightCollection()
      })
    }
  }
}
</script>
