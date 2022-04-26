#### 预览

<doc-preview>
  <bmap-gl style="height:75vh;" class="map" :zoom="zoom" scrollWheelZoom :center="{lng: 116.432809, lat: 39.96858}" @ready="readyHandler">
    <bmap-gl-control v-show="isReady">
      <!-- <md-button class="md-raised" @click="addZoom(21)">缩放至最大</md-button> -->
      <!-- <md-button class="md-raised" @click="addZoom(3)">缩放至最小</md-button> -->
      <md-button class="md-raised" @click="clickWeixing">卫星图</md-button>
    </bmap-gl-control>
    <!-- 要使用双tag进行闭合，不然会中奖 -->
    <bmap-gl-zoom anchor="BMAP_ANCHOR_TOP_RIGHT"></bmap-gl-zoom>
    <bmap-gl-scale></bmap-gl-scale>
  </bmap-gl>
</doc-preview>

<script>
export default {
  data () {
    return {
      mapInstance: null,
      isReady: false,
      zoom: 18.5,
      buildingList: [
        {
            "buildingId": "1112027390255",
            "buildingName": "33号楼",
            "hasRentHouse": 1,
            "position": "116.43346865102163,39.968585768122004"
        },
        {
            "buildingId": "1112027413680",
            "buildingName": "31号楼",
            "hasRentHouse": 1,
            "position": "116.4354680308297,39.9695610068507"
        },
        {
            "buildingId": "1112027413144",
            "buildingName": "26号楼",
            "hasRentHouse": 1,
            "position": "116.43590966040735,39.968397579377395"
        },
        {
            "buildingId": "1112027408951",
            "buildingName": "22号楼",
            "hasRentHouse": 1,
            "position": "116.43696542271395,39.96755818573313"
        },
        {
            "buildingId": "1112027411512",
            "buildingName": "28号楼",
            "hasRentHouse": 1,
            "position": "116.43551743234505,39.96862678060809"
        },
        {
            "buildingId": "1112027458201",
            "buildingName": "27号楼",
            "hasRentHouse": 1,
            "position": "116.43324863687484,39.96997220079427"
        },
        {
            "buildingId": "1112027387869",
            "buildingName": "23号楼",
            "hasRentHouse": 1,
            "position": "116.43763103418954,39.96902353998935"
        },
        {
            "buildingId": "1112027425068",
            "buildingName": "13号楼",
            "hasRentHouse": 1,
            "position": "116.43259948542389,39.96980573243178"
        },
        {
            "buildingId": "1112027435733",
            "buildingName": "20号楼",
            "hasRentHouse": 1,
            "position": "116.43757451586013,39.968853505061844"
        },
        {
            "buildingId": "1112027443239",
            "buildingName": "30号楼",
            "hasRentHouse": 1,
            "position": "116.43586397781445,39.96697190083452"
        },
        {
            "buildingId": "1112027417396",
            "buildingName": "3号楼",
            "hasRentHouse": 1,
            "position": "116.43209937798588,39.969752588844266"
        },
        {
            "buildingId": "1112027434193",
            "buildingName": "21号楼",
            "hasRentHouse": 1,
            "position": "116.43720757302457,39.96925144827119"
        },
        {
            "buildingId": "1112027439834",
            "buildingName": "25号楼",
            "hasRentHouse": 1,
            "position": "116.43730102475523,39.969077547317816"
        },
        {
            "buildingId": "1112027437507",
            "buildingName": "29号楼",
            "hasRentHouse": 1,
            "position": "116.43497093500734,39.968538656573216"
        },
        {
            "buildingId": "1112027441936",
            "buildingName": "38号楼",
            "hasRentHouse": 1,
            "position": "116.43318449792004,39.96920307877524"
        },
        {
            "buildingId": "1112027439427",
            "buildingName": "32号楼",
            "hasRentHouse": 1,
            "position": "116.43407542149515,39.96859886015719"
        },
        {
            "buildingId": "1112027436862",
            "buildingName": "24号楼",
            "hasRentHouse": 1,
            "position": "116.43634336435767,39.968388698297574"
        },
        {
            "buildingId": "1112027448668",
            "buildingName": "6号楼",
            "hasRentHouse": 1,
            "position": "116.43205334828153,39.97099440460023"
        },
        {
            "buildingId": "1112027416534",
            "buildingName": "34号楼",
            "hasRentHouse": 1,
            "position": "116.43281576976428,39.9686700917998"
        },
        {
            "buildingId": "1112027394631",
            "buildingName": "17号楼",
            "hasRentHouse": 1,
            "position": "116.43281594647495,39.97098828792301"
        },
        {
            "buildingId": "1112027391714",
            "buildingName": "36号楼",
            "hasRentHouse": 1,
            "position": "116.43204959548105,39.96925729529766"
        },
        {
            "buildingId": "1112027397003",
            "buildingName": "18号楼",
            "hasRentHouse": 0,
            "position": "116.43651103727403,39.96699819482015"
        },
        {
            "buildingId": "1112027424742",
            "buildingName": "5号楼",
            "hasRentHouse": 0,
            "position": "116.4323364960933,39.97045063116609"
        },
        {
            "buildingId": "1112027438865",
            "buildingName": "15号楼",
            "hasRentHouse": 0,
            "position": "116.43261185971829,39.970115620706046"
        },
        {
            "buildingId": "1112027447222",
            "buildingName": "19号楼",
            "hasRentHouse": 0,
            "position": "116.43643825447063,39.966657365581554"
        },
        {
            "buildingId": "1112027454871",
            "buildingName": "1号楼",
            "hasRentHouse": 0,
            "position": "116.43781760722594,39.968415941856684"
        },
        {
            "buildingId": "1112047640167",
            "buildingName": "甲26号楼",
            "hasRentHouse": 0,
            "position": "116.43543068315991,39.968414279029886"
        }
      ],
    }
  },
  methods: {
    readyHandler ({ BMapGL, map }) {
      this.isReady = true
      this.mapInstance = map

      const icon = new BMapGL.Icon('https://webmap1.bdimg.com/wolfman/static/common/images/hot-copyright_ac4ab30.png', new BMapGL.Size(14,14))
      this.buildingList.forEach(item => {
        const pos = item.position.split(',')
        map.addOverlay(new BMapGL.Marker(new BMapGL.Point(pos[0], pos[1]), { icon }))
      })
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

