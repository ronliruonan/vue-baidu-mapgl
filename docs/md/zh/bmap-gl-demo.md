#### 预览

<doc-preview>
  <bmap-gl style="height:75vh;" class="map" :zoom="19" scrollWheelZoom :center="{lng: 116.432809, lat: 39.96858}" @ready="readyHandler">
    <!-- 自定义控件 -->
    <bmap-gl-control v-show="isReady">
      <md-button class="md-raised" @click="addZoom(21)">缩放至最大</md-button>
      <!-- <md-button class="md-raised" @click="addZoom(3)">缩放至最小</md-button> -->
      <md-button class="md-raised" @click="clickWeixing">卫星图</md-button>
    </bmap-gl-control>
    <!-- 要使用双tag进行闭合，不然会中奖 -->
    <!-- 缩放控件 -->
    <bmap-gl-zoom anchor="BMAP_ANCHOR_TOP_RIGHT"></bmap-gl-zoom>
    <!-- 比例尺控件 -->
    <bmap-gl-scale></bmap-gl-scale>
    <bmap-gl-distance ref="jjgg"></bmap-gl-distance>
    <bmap-gl-overlay
      pane="labelPane"
      v-for="item in buildingList" :key="item.position"
      :class="{sample: true, active: true}"
      @draw="draw(item, $event)"
    >
      <transition name="slide-fade">
        <div class="card-box">
          <div class="card-name">
            {{ item.buildingName }}
            <div class='triangle-down'></div>
          </div>
        </div>
      </transition>
    </bmap-gl-overlay>
  </bmap-gl>
  <h2 @click="opendis">点我开启</h2>
</doc-preview>

<script>
export default {
  data () {
    return {
      active: false,
      mapInstance: null,
      isReady: false,
      zoom: 18.5,
      buildingList: [
        {
            "buildingId": "1112027425068",
            "buildingName": "13号楼",
            "hasRentHouse": 1,
            "position": "116.43259948542389,39.96980573243178"
        },
        {
            "buildingId": "1112027441936",
            "buildingName": "38号楼",
            "hasRentHouse": 1,
            "position": "116.43318449792004,39.96920307877524"
        },
      ],
    }
  },
  methods: {
    opendis() {
      this.$refs.jjgg.open()
    },
    readyHandler ({ BMapGL, map }) {
      this.isReady = true
      this.mapInstance = map

      this.drawPoints({ BMapGL, map })
      this.drawLables({ BMapGL, map })

    },
    drawLables ({ BMapGL, map }) {
      // this.buildingList.forEach(item => {
      //   const pos = item.position.split(',')
      //   const label = new BMapGL.Label(item.buildingName, { 
      //     position: new BMapGL.Point(pos[0],pos[1]),
      //     offset: new BMapGL.Size(-20, -40)
      //   })
      //   map.addOverlay(label)
      // })

      // const label = new BMapGL.Label('33号楼', { 
      //   position: new BMapGL.Point(116.43346865102163,39.968585768122004),
      //   offset: new BMapGL.Size(-20, -40)
      //  })
      //  map.addOverlay(label)

      class CustomOverlay extends BMapGL.Overlay {

      }
    },
    drawPoints({ BMapGL, map }) {
      const iconPath = 'https://smsimg.ziroom.com/0a03e01b-cd8a-40e6-a83f-c579c387e631.jpg';
      // icon
      // const icon = new BMapGL.Icon(iconPath, new BMapGL.Size(10,10))

      const icon = new BMapGL.Icon(iconPath, new BMapGL.Size(70,70), {
        // anchor: { width: 20, height:20 }, // 坐标移动，width: +左移, height:+上移，-下移
        imageSize: { width:10, height:10 },
        // imageOffset: { width: -35, height:-35 }
        // imageOffset: new BMapGL.Size(-35, -35),
        // size: { width: 70, height: 70 },
        // imageSize: { width: 70, height: 70 }
      })
      // setSize icon可视区域的大小, width+右边，height+下边
      // icon.setSize(new BMapGL.Size(40,40))
      // setImageSize icon的大小
      // icon.setImageSize(new BMapGL.Size(10,10))
      // setImageOffset icon相对于可视区域的偏移量
      // icon.setImageOffset(new BMapGL.Size(-20,-10))

      function dragend (e) {
        console.log('dragend', e)
      }
      this.buildingList.forEach(item => {
        const pos = item.position.split(',')
        // point
        const point = new BMapGL.Point(pos[0], pos[1]);
        // marker
        const marker = new BMapGL.Marker(point, { 
          icon, 
          enableDragging: true,
          // offset: { width: 35, height: 35 } 
        });
        marker.addEventListener('dragend', dragend);
        map.addOverlay(marker)
      })
    },
    draw(item, { el, BMapGL, map }) {
      if (!item.position) return void 0;
      if (!item.position.length) return void 0;

      const center = item.position.split(',');
      const pixel = map.pointToOverlayPixel(new BMapGL.Point(center[0], center[1]));
      el.style.left = pixel.x - 22 + 'px';
      const top = 40;
      el.style.top = pixel.y - top + 'px';
    },
    addZoom (level) {
      this.zoom = level
    },
    clickWeixing () {
      this.mapInstance.setMapType(BMAP_SATELLITE_MAP)
      // var scaleCtrl = new BMapGL.ScaleControl()  // 添加比例尺控件
      // this.mapInstance.addControl(scaleCtrl)
      // var zoomCtrl = new BMapGL.ZoomControl()  // 添加缩放控件
      // this.mapInstance.addControl(zoomCtrl)
    }
  }
}
</script>

<style>
.sample {
  min-width: 42px;
  /* max-width: 107px; */
  width: auto;
  white-space: nowrap;
  font-size: 8px;
  color: #fff;
  /* text-align: center; */
  padding: 2px 4px;
  position: absolute;
  border: 2px solid #999;
  background: #262626;
  border-radius: 8px;
  z-index: 100;
}
.sample.active {
  background: rgba(0,0,0,0.75);
  color: #fff;
  z-index: 1000;
  opacity: 1 !important;
}
.triangle-down {
  z-index: 100;
  position: absolute;
  bottom: 0px;
}
.triangle-down:after{
  box-sizing: content-box;
  width: 0px;
  height: 0px;
  position: absolute;
  bottom: -20px;;
  left: 12px;
  padding:0;
  border-right: 10px solid transparent;
  border-top:10px solid #ccc;
  border-bottom:10px solid transparent;
  border-left:10px solid transparent;
  display: block;
  content:'';
  z-index: -2;
}
.triangle-down:before{
  box-sizing: content-box;
  width: 0px;
  height: 0px;
  position: absolute;
  bottom: -16px;;
  left: 14px;
  padding:0;
  border-right: 8px solid transparent;
  border-top:8px solid  #262626;
  border-bottom: 8px solid transparent;
  border-left:8px solid transparent;
  display: block;
  content: '';
  z-index: -1;
}
.rowCls {
  margin-top: 20px;
}
</style>
