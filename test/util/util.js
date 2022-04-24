import Vue from 'vue'
// import BaiduMap from '@/index.js'

export const createApp = ({template = `<bmap-gl></bmap-gl>`, methods = {}}) => {
  const $root = document.createElement('div')
  document.body.appendChild($root)
  return new Vue({
    el: $root,
    template,
    methods
  })
}
