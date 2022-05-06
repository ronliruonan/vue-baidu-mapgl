import BMapGL from './map/Map.vue'
import BMapGLView from './map/MapView.vue'
/** 比例尺控件 */
import BMapGLScale from './controls/Scale.vue'
import BMapGLNavigation from './controls/Navigation.vue'
import BMapGLMapType from './controls/MapType.vue'
import BMapGLOverviewMap from './controls/OverviewMap.vue'
import BMapGLGeolocation from './controls/Geolocation.vue'
import BMapGLCopyright from './controls/Copyright.vue'
import BMapGLCityList from './controls/CityList.vue'
import BMapGLPanorama from './controls/Panorama.vue'
import BMapGLControl from './controls/Control.vue'
import BMapGLMarker from './overlays/Marker.vue'
import BMapGLPointCollection from './overlays/PointCollection.vue'
import BMapGLPolyline from './overlays/Polyline.vue'
import BMapGLPolygon from './overlays/Polygon.vue'
import BMapGLCircle from './overlays/Circle.vue'
import BMapGLGround from './overlays/Ground.vue'
import BMapGLLabel from './overlays/Label.vue'
import BMapGLInfoWindow from './overlays/InfoWindow.vue'
import BMapGLOverlay from './overlays/Overlay.vue'
import BMapGLContextMenu from './context-menu/Menu.vue'
import BMapGLContextMenuItem from './context-menu/Item.vue'
import BMapGLLocalSearch from './search/LocalSearch.vue'
import BMapGLTransit from './search/Transit.vue'
import BMapGLWalking from './search/Walking.vue'
import BMapGLDriving from './search/Driving.vue'
import BMapGLBus from './search/Bus.vue'
import BMapGLTile from './layers/Tile.vue'
import BMapGLTraffic from './layers/Traffic.vue'
import BMapGLBoundary from './others/Boundary.vue'
import BMapGLAutoComplete from './others/AutoComplete.vue'

import BMapGLlMarkerClusterer from './extra/MarkerClusterer.vue'
import BMapGLlLushu from './extra/Lushu.vue'
import BMapGLlHeatmap from './extra/Heatmap.vue'
import BMapGLlCurveLine from './extra/CurveLine.vue'

// new for baidu map gl

/** 缩放控件 */
import BMapGLZoom from './controls/Zoom.vue'
/** 3D控件 */
import BMapGLNavigationControl3D from './controls/NavigationControl3D.vue'
import BMapGLToolDistance from './tools/distance.vue'

export default {
  install (Vue, options) {
    const { ak } = options
    Vue.prototype._BMapGL = () => ({ ak })

    Vue.component('bmap-gl', BMapGL)
    Vue.component('bmap-gl-zoom', BMapGLZoom)
    Vue.component('bmap-gl-scale', BMapGLScale)
    Vue.component('bmap-gl-navigation3d', BMapGLNavigationControl3D)

    Vue.component('bmap-gl-view', BMapGLView)

    Vue.component('bmap-gl-navigation', BMapGLNavigation)
    Vue.component('bmap-gl-map-type', BMapGLMapType)
    Vue.component('bmap-gl-overview-map', BMapGLOverviewMap)
    Vue.component('bmap-gl-geolocation', BMapGLGeolocation)
    Vue.component('bmap-gl-copyright', BMapGLCopyright)
    Vue.component('bmap-gl-city-list', BMapGLCityList)
    Vue.component('bmap-gl-panorama', BMapGLPanorama)
    Vue.component('bmap-gl-control', BMapGLControl)

    Vue.component('bmap-gl-marker', BMapGLMarker)
    Vue.component('bmap-gl-point-collection', BMapGLPointCollection)
    Vue.component('bmap-gl-polyline', BMapGLPolyline)
    Vue.component('bmap-gl-polygon', BMapGLPolygon)
    Vue.component('bmap-gl-circle', BMapGLCircle)
    Vue.component('bmap-gl-ground', BMapGLGround)
    Vue.component('bmap-gl-label', BMapGLLabel)
    Vue.component('bmap-gl-info-window', BMapGLInfoWindow)
    Vue.component('bmap-gl-overlay', BMapGLOverlay)

    Vue.component('bmap-gl-context-menu', BMapGLContextMenu)
    Vue.component('bmap-gl-context-menu-item', BMapGLContextMenuItem)

    Vue.component('bmap-gl-local-search', BMapGLLocalSearch)
    Vue.component('bmap-gl-transit', BMapGLTransit)
    Vue.component('bmap-gl-walking', BMapGLWalking)
    Vue.component('bmap-gl-driving', BMapGLDriving)
    Vue.component('bmap-gl-bus', BMapGLBus)

    Vue.component('bmap-gl-tile', BMapGLTile)
    Vue.component('bmap-gl-traffic', BMapGLTraffic)

    Vue.component('bmap-gl-auto-complete', BMapGLAutoComplete)
    Vue.component('bmap-gl-boundary', BMapGLBoundary)

    Vue.component('bmap-gl-distance', BMapGLToolDistance)
  }
}

export {
  BMapGL, BMapGLView,
  BMapGLZoom, BMapGLScale, BMapGLNavigationControl3D,
  BMapGLNavigation, BMapGLMapType, BMapGLOverviewMap, BMapGLGeolocation, BMapGLCopyright, BMapGLCityList, BMapGLPanorama, BMapGLControl,
  BMapGLMarker, BMapGLPointCollection, BMapGLPolyline, BMapGLPolygon, BMapGLCircle, BMapGLGround, BMapGLLabel, BMapGLInfoWindow, BMapGLOverlay,
  BMapGLContextMenu, BMapGLContextMenuItem,
  BMapGLLocalSearch, BMapGLTransit, BMapGLWalking, BMapGLDriving, BMapGLBus,
  BMapGLTile, BMapGLTraffic,
  BMapGLBoundary, BMapGLAutoComplete,
  BMapGLToolDistance
}

export {
  BMapGLlMarkerClusterer,
  BMapGLlLushu,
  BMapGLlHeatmap,
  BMapGLlCurveLine
}
