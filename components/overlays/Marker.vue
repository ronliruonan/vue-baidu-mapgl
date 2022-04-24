<template>
<div>
  <slot></slot>
</div>
</template>

<script>
import commonMixin from '../base/mixins/common.js'
import bindEvents from '../base/bindEvent.js'
import {createLabel, createIcon, createPoint} from '../base/factory.js'

export default {
  name: 'bmap-gl-marker',
  mixins: [commonMixin('overlay')],
  props: {
    position: {},
    offset: {},
    icon: {},
    massClear: {
      type: Boolean,
      default: true
    },
    dragging: {
      type: Boolean,
      default: false
    },
    clicking: {
      type: Boolean,
      default: true
    },
    raiseOnDrag: {
      type: Boolean,
      default: false
    },
    draggingCursor: {
      type: String
    },
    rotation: {
      type: Number
    },
    shadow: {
      type: Object
    },
    title: {
      type: String
    },
    label: {
      type: Object
    },
    animation: {
      type: String
    },
    top: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    'position.lng' (val, oldVal) {
      const {BMapGL, originInstance, position, renderByParent, $parent} = this
      if (val !== oldVal && val >= -180 && val <= 180) {
        originInstance.setPosition(createPoint(BMapGL, {lng: val, lat: position.lat}))
      }
      renderByParent && $parent.reload()
    },
    'position.lat' (val, oldVal) {
      const {BMapGL, originInstance, position, renderByParent, $parent} = this
      if (val !== oldVal && val >= -74 && val <= 74) {
        originInstance.setPosition(createPoint(BMapGL, {lng: position.lng, lat: val}))
      }
      renderByParent && $parent.reload()
    },
    'offset.width' (val, oldVal) {
      const {BMapGL, originInstance} = this
      if (val !== oldVal) {
        originInstance.setOffset(new BMapGL.Size(val, this.offset.height))
      }
    },
    'offset.height' (val, oldVal) {
      const {BMapGL, originInstance} = this
      if (val !== oldVal) {
        originInstance.setOffset(new BMapGL.Size(this.offset.width, val))
      }
    },
    icon: {
      deep: true,
      handler (val) {
        const {BMapGL, originInstance, rotation} = this
        originInstance && originInstance.setIcon(createIcon(BMapGL, val))
        rotation && originInstance && originInstance.setRotation(rotation)
      }
    },
    massClear (val) {
      val ? this.originInstance.enableMassClear() : this.originInstance.disableMassClear()
    },
    dragging (val) {
      val ? this.originInstance.enableDragging() : this.originInstance.disableDragging()
    },
    clicking () {
      this.reload()
    },
    raiseOnDrag () {
      this.reload()
    },
    draggingCursor (val) {
      this.originInstance.setDraggingCursor(val)
    },
    rotation (val) {
      this.originInstance.setRotation(val)
    },
    shadow (val) {
      this.originInstance.setShadow(val)
    },
    title (val) {
      this.originInstance.setTitle(val)
    },
    label (val) {
      this.reload()
    },
    animation (val) {
      this.originInstance.setAnimation(global[val])
    },
    top (val) {
      this.originInstance.setTop(val)
    },
    zIndex (val) {
      this.originInstance.setZIndex(val)
    }
  },
  methods: {
    load () {
      const {BMapGL, map, position, offset, icon, massClear, dragging, clicking, raiseOnDrag, draggingCursor, rotation, shadow, title, label, animation, top, renderByParent, $parent, zIndex} = this
      const overlay = new BMapGL.Marker(new BMapGL.Point(position.lng, position.lat), {
        offset,
        icon: icon && createIcon(BMapGL, icon),
        enableMassClear: massClear,
        enableDragging: dragging,
        enableClicking: clicking,
        raiseOnDrag,
        draggingCursor,
        rotation,
        shadow,
        title
      })
      this.originInstance = overlay
      label && overlay && overlay.setLabel(createLabel(BMapGL, label))
      overlay.setTop(top)
      overlay.setZIndex(zIndex)
      bindEvents.call(this, overlay)
      if (renderByParent) {
        $parent.reload()
      } else {
        map.addOverlay(overlay)
      }
      overlay.setAnimation(global[animation])
    }
  }
}
</script>
