<script>
import commonMixin from '../base/mixins/common.js'

const appendJS = () => {
  const elJS = document.createElement('script')
  elJS.src = '//mapopen.cdn.bcebos.com/github/BMapGLLib/DistanceTool/src/DistanceTool.min.js'
  document.body.appendChild(elJS)
}

export default {
  name: 'bmap-gl-distance',
  data () {
    return {
      toolDis: null
    }
  },
  render () { },
  mixins: [commonMixin('control')],
  beforeCreate () {
    appendJS()
  },
  methods: {
    load () {
      const { map } = this
      this.toolDis = new window.BMapGLLib.DistanceTool(map)
    },
    tryInitTool () {
      if (!window.BMapGLLib) throw new Error('未检测到BMapGLLib')
      if (!this.toolDis) this.load()
    },
    open () {
      this.tryInitTool()

      this.toolDis.open()
    },
    close () {
      this.tryInitTool()

      this.toolDis.close()
    }
  }
}
</script>
