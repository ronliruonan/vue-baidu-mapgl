# Third-Party Components

The third-party component is an encapsulation of an open source library developed based on the Baidu Map JS API. These components not global registration by vue-bmap-gl lib. Please register by yourself if needed.

## Examples

### Global Registration

```javascript
import Vue from 'vue'
import {BmlMarkerClusterer} from 'vue-baidu-map-plus'

Vue.component('bml-marker-cluster', BmlMarkerClusterer)
```

### Local Registration

```javascript
import {BmlMarkerClusterer} from 'vue-baidu-map-plus'
export default {
  components: {
    BmlMarkerClusterer
  }
}
```
