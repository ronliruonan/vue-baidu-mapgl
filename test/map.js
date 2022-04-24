import Vue from 'vue'
import BaiduMap from '../components/index.js'
import {expect} from 'chai'
import {createApp} from './util/util.js'

describe('Regist', () => {
  it('global regist', done => {
    Vue.use(BaiduMap, {ak: 'oW2UEhdth2tRbEE4FUpF9E5YVDCIPYih'})
    const app = createApp({})
    expect(app._BMapGL().ak).equal('oW2UEhdth2tRbEE4FUpF9E5YVDCIPYih')
    done()
  })
})

// describe('Map', () => {
//   it('load map component', done => createApp({
//       template: `<bmap-gl @ready="test"></bmap-gl>`,
//       methods: {
//         test ({BMapGL, map}) {
//           expect(map.loaded).equal(true)
//           expect(BMapGL).equal(global.BMapGL)
//           done()
//         }
//       }
//     })).timeout(5000)

//   it('load map component with ak', done => createApp({
//       template: `<bmap-gl ak="oW2UEhdth2tRbEE4FUpF9E5YVDCIPYih" @ready="test"></bmap-gl>`,
//       methods: {
//         test ({BMapGL, map}) {
//           expect(map.loaded).equal(true)
//           expect(BMapGL).equal(global.BMapGL)
//           done()
//         }
//       }
//     })).timeout(5000)
// })