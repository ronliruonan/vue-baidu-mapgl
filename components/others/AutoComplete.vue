<template>
<span>
  <slot>
    <input>
  </slot>
</span>
</template>

<script>
import commonMixin from '../base/mixins/common.js'
import bindEvents from '../base/bindEvent.js'

export default {
  name: 'bmap-gl-autocomplete',
  mixins: [commonMixin()],
  props: {
    types: {
      type: String
    },
    location: {
      type: String
    },
    sugStyle: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {
    types () {
      this.reload()
    },
    location () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMapGL, map, $el, types, location, sugStyle} = this
      const input = $el.querySelector('input')
      if (!input) {
        return
      }
      this.originInstance = new BMapGL.Autocomplete({
        input,
        types,
        location: location || map,
        onSearchComplete: e => {
          const $sugs = document.querySelectorAll('.tangram-suggestion-main')
          for (const $sug of $sugs) {
            for (const name in sugStyle) {
              $sug.style[name] = sugStyle[name].toString()
            }
          }
          this.$emit('searchcomplete', e)
        }
      })

      // Support v-model
      this.originInstance.addEventListener('onconfirm', e => {
        const val = e.item.value
        this.$emit('input', val.province + val.city + val.district + val.street + val.business)
      })

      bindEvents.call(this, this.originInstance)
    }
  }
}
</script>
