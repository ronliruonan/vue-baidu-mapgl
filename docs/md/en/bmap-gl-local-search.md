<template lang="md">

# Local Search

`BmLocalSearch`

## Instance Properties

|name|type|default|description|
|------|-----|------|----|
|location|String, Point, None||Search area. The type can be empty, coordinate point or city name.|
|bounds|Bounds||Limit the search for a square area. No results if the exceeds the current location.|
|nearby|{center: Point, radius: Number}||Limit the search for a circle area. No results if the exceeds the current location.|
|keyword|String, Array||Keywords. Supporting up to 10 keywords when the type is array.|
|forceLocal|Boolean||Indicates whether the search scope is constrained in the current city|
|customData|CustomData||Whether search on the lbs cloud.|
|panel|Boolean|true|Whether to show the result panel.|
|pageCapacity|Number||Set the capacity per page.|
|autoViewport|Boolean||Whether to adjust the viewport after search.|
|selectFirstResult|Boolean||Whether to select the first search result.|

## Events

|name|parameter|description|
|------|----|----|
|markersset|{pois: Array}|Triggers when markers are set.|
|infohtmlset|{poi: LocalResultPoi}|Triggers when info windows are set.|
|resultshtmlset|{container: HTMLElement}|Triggers when the result panel is set.|
|searchcomplete|{results: [LocalResult]}|Triggers when the search is completed.|

## Examples

### Local search by keyword in the map

#### Code

```html
<template>
  <label>Keyword：<input v-model="keyword"></label>
  <label>Location：<input v-model="location"></label>
  <bmap-gl>
    <bmap-gl-view class="map"></bmap-gl-view>
    <bmap-gl-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bmap-gl-local-search>
  </bmap-gl>
</template>

<script>
export default {
  data () {
    return {
      location: '北京',
      keyword: '百度'
    }
  }
}
</script>
</style>
```


#### Preview

<doc-preview>
<bmap-gl>
  <bmap-gl-view class="map">
  </bmap-gl-view>
  <md-table>
    <md-table-header>
      <md-table-head>Keyword</md-table-head>
      <md-table-head>Location</md-table-head>
    </md-table-header>
    <md-table-body>
      <md-table-row>
        <md-table-cell>
          <md-input-container>
            <md-input v-model="keyword"></md-input>
          </md-input-container>
        </md-table-cell>
        <md-table-cell>
          <md-input-container>
            <md-input v-model="location"></md-input>
          </md-input-container>
        </md-table-cell>
      </md-table-row>
    </md-table-body>
  </md-table>
  <bmap-gl-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bmap-gl-local-search>
</doc-preview>
</bmap-gl>


### Local search in a square area

#### Code

```html
<template>
  <bmap-gl>
    <bmap-gl-view class="map"></bmap-gl-view>
    <bmap-gl-local-search keyword="银行" :bounds="bounds" :auto-viewport="true" :panel="false"></bmap-gl-local-search>
    <bmap-gl-polygon :path="polygonPath"></bmap-gl-polygon>
  </bmap-gl>
</template>

<script>
export default {
  data () {
    return {
      pStart: {
        lng: 116.294625,
        lat: 39.961627
      },
      pEnd: {
        lng: 116.357474,
        lat: 39.988609
      }
    }
  },
  computed: {
    bounds () {
      const {pStart, pEnd} = this
      return {
        sw: {lng: pStart.lng, lat: pStart.lat},
        ne:{lng: pEnd.lng, lat: pEnd.lat}
      }
    },
    polygonPath () {
      const {pStart, pEnd} = this
      return [
        {lng: pStart.lng, lat: pStart.lat},
        {lng: pEnd.lng, lat: pStart.lat},
        {lng: pEnd.lng, lat: pEnd.lat},
        {lng: pStart.lng, lat: pEnd.lat}
      ]
    }
  }
}
</script>
```

#### Preview

<doc-preview>
  <bmap-gl :center="{lng: 116.274625, lat: 39.961627}" :zoom="11">
    <bmap-gl-view class="map"></bmap-gl-view>
    <bmap-gl-local-search keyword="银行" :bounds="bounds" :auto-viewport="true" :panel="false"></bmap-gl-local-search>
    <bmap-gl-polygon :path="polygonPath"></bmap-gl-polygon>
  </bmap-gl>
</doc-preview>


### Local search in a circle area

#### Code

```html
<template>
  <bmap-gl>
    <bmap-gl-view class="map"></bmap-gl-view>
    <bmap-gl-local-search keyword="餐馆" :nearby="nearby" :auto-viewport="true" :panel="false"></bmap-gl-local-search>
    <bmap-gl-circle :center="nearby.center" :radius="nearby.radius"></bmap-gl-circle>
  </bmap-gl>
</template>

<script>
export default {
  data () {
    return {
      nearby: {
        center: {
          lng: 116.404, 
          lat: 39.915
        },
        radius: 1000
      }
    }
  }
}
</script>
```

#### Preview

<doc-preview>
  <bmap-gl :center="{lng: 116.404, lat: 39.915}" :zoom="15">
    <bmap-gl-view class="map"></bmap-gl-view>
    <bmap-gl-local-search keyword="餐馆" :nearby="nearby" :auto-viewport="true" :panel="false"></bmap-gl-local-search>
    <bmap-gl-circle :center="nearby.center" :radius="nearby.radius"></bmap-gl-circle>
  </bmap-gl>
</doc-preview>

</template>

<script>
export default {
  data () {
    return {
      location: '北京',
      keyword: '百度',
      pStart: {
        lng: 116.294625,
        lat: 39.961627
      },
      pEnd: {
        lng: 116.357474,
        lat: 39.988609
      },
      nearby: {
        center: {
          lng: 116.404, 
          lat: 39.915
        },
        radius: 1000
      }
    }
  },
  computed: {
    bounds () {
      const {pStart, pEnd} = this
      return {
        sw: {lng: pStart.lng, lat: pStart.lat},
        ne:{lng: pEnd.lng, lat: pEnd.lat}
      }
    },
    polygonPath () {
      const {pStart, pEnd} = this
      return [
        {lng: pStart.lng, lat: pStart.lat},
        {lng: pEnd.lng, lat: pStart.lat},
        {lng: pEnd.lng, lat: pEnd.lat},
        {lng: pStart.lng, lat: pEnd.lat}
      ]
    }
  }
}
</script>