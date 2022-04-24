<script>
import commonMixin from '../base/mixins/common.js'
import bindEvents from '../base/bindEvent.js'
import {createIcon, createSize} from '../base/factory.js'

export default {
  name: 'bmap-gl-geolocation',
  render () {},
  mixins: [commonMixin('control')],
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
    },
    showAddressBar: {
      type: Boolean
    },
    autoLocation: {
      type: Boolean
    },
    locationIcon: {
      type: Object
    }
  },
  watch: {
    anchor () {
      this.reload()
    },
    offset () {
      this.reload()
    },
    showAddressBar () {
      this.reload()
    },
    autoLocation () {
      this.reload()
    },
    locationIcon () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMapGL, map, anchor, showAddressBar, autoLocation, locationIcon, offset} = this
      this.originInstance = new BMapGL.GeolocationControl({
        anchor: global[anchor],
        showAddressBar,
        enableAutoLocation: autoLocation,
        offset: offset && createSize(BMapGL, offset),
        locationIcon: locationIcon && createIcon(BMapGL, locationIcon)
      })
      bindEvents.call(this, this.originInstance)
      map.addControl(this.originInstance)
    }
  }
}
</script>
