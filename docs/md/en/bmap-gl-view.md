# Map View

`BmView` is the container used to render the Baidu map instance visualization area.\
The Baidu Map instance is rendered on the `<bmap-gl> ` node when the `BmView` component is not mounted in the `BaiduMap` component. \
When `BaiduMap` is mounted with the` BmView` component, the Baidu Map instance is rendered on the `<bmap-gl-view>` node. \
Each `BaiduMap` component should correspond to a single` BmView` component. If you declare more than one `BmView` component, only the first one can be rendered.\
This component is mainly used to control the layout. In addition to being able to render the map view, there is no other purpose.

## Examples

### Use `BmView` to render a map instance

#### Code
```html
<doc-preview>
  <bmap-gl class="map" center="北京">
    <p style="text-indent: 20px; line-height: 60px;">The following is a Baidu map instance rendered using the `BmView` component</p>
    <bmap-gl-view style="position: absolute; top: 60px; bottom: 20px; left: 20px; right: 20px"></bmap-gl-view>
  </bmap-gl>
</doc-preview>
```

#### Preview
<doc-preview>
  <bmap-gl class="map" center="北京">
    <p style="text-indent: 20px; line-height: 60px;">
The following is a Baidu map instance rendered using the `BmView` component</p>
    <bmap-gl-view style="position: absolute; top: 60px; bottom: 20px; left: 20px; right: 20px"></bmap-gl-view>
  </bmap-gl>
</doc-preview>


