<script>
import commonMixin from '../base/mixins/common.js'

export default {
  name: 'bmap-gl-triffic',
  render (h) {},
  mixins: [commonMixin('layer')],
  props: {
    predictDate: {
      type: Object
    }
  },
  watch: {
    'pridictDate.weekday' () {
      this.reload()
    },
    'pridictDate.hour' () {
      this.reload()
    },
    pridictDate () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {pridictDate, BMapGL, map} = this
      this.originInstance = new BMapGL.TrafficLayer({
        pridictDate
      })
      map.addTileLayer(this.originInstance)
    }
  }
}
</script>
