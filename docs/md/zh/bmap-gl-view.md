# 地图视图

`BMapGLView` 是用于渲染百度地图实例可视化区域的容器，通常与 `LocalSearch` 等会输出其它视图的组件结合使用。\
当 `BaiduMap` 组件中没有挂载 `BMapGLView` 组件时，百度地图实例将渲染在 `<bmap-gl>` 节点上。\
当 `BaiduMap` 挂载了 `BMapGLView` 组件时，百度地图实例将渲染在 `<bmap-gl-view>` 节点上。\
每个 `BaiduMap` 组件应对应唯一一个 `BMapGLView` 组件，如果声明了多个 `BMapGLView` 组件，只有第一个能被正常渲染。
该组件主要用于控制布局。除了能够渲染地图视图以外，没有任何其它用途。

## 示例

### 使用 `BMapGLView` 渲染一个地图实例

#### 代码
```html
<doc-preview>
  <bmap-gl class="map" style="display: flex; flex-direction: column" center="北京">
    <p style="padding: 0 10px;">以下是使用 `bmap-gl-view` 组件渲染的百度地图实例</p>
    <bmap-gl-view style="width: 100%; height:100px; flex: 1"></bmap-gl-view>
  </bmap-gl>
</doc-preview>
```

#### 预览
<doc-preview>
  <bmap-gl class="map" style="display: flex; flex-direction: column" center="北京">
    <p style="padding: 0 10px;">以下是使用 `bmap-gl-view` 组件渲染的百度地图实例</p>
    <bmap-gl-view style="width: 100%; height:100px; flex: 1"></bmap-gl-view>
  </bmap-gl>
</doc-preview>


