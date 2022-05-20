webpackJsonp([39],{"/qCm":function(t,v,_){t.exports=_("mlCb")},cQpO:function(t,v){t.exports={render:function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("section",[[_("h1",[t._v("行政区划")]),t._v(" "),t._m(0),t._v(" "),_("h2",[t._v("属性")]),t._v(" "),t._m(1),t._v(" "),_("h2",[t._v("事件")]),t._v(" "),t._m(2),t._v(" "),_("h2",[t._v("示例")]),t._v(" "),_("h3",[t._v("在地图中添加北京市海淀区行政区划范围")]),t._v(" "),_("h4",[t._v("代码")]),t._v(" "),t._m(3),t._v(" "),_("h4",[t._v("预览")]),t._v(" "),_("doc-preview",[_("bmap-gl",{staticClass:"map",attrs:{center:{lng:109.49384,lat:26.84204},zoom:11}},[_("bmap-gl-boundary",{attrs:{name:t.name,strokeWeight:2,strokeColor:"blue"}})],1),t._v(" "),_("md-table",[_("md-table-header",[_("md-table-head",[t._v("行政区划名")])],1),t._v(" "),_("md-table-body",[_("md-table-row",[_("md-table-cell",[_("md-input-container",[_("md-input",{attrs:{"md-inline":""},model:{value:t.name,callback:function(v){t.name=v},expression:"name"}})],1)],1)],1)],1)],1)],1)]],2)},staticRenderFns:[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("p",[_("code",[t._v("BmBoundary")]),t._v(" 组件继承于 "),_("code",[t._v("bmap-gl-polygon")]),t._v(" 组件，视图由 "),_("code",[t._v("bmap-gl-polygon")]),t._v(" 组件进行渲染。")])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("table",[_("thead",[_("tr",[_("th",[t._v("属性名")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("name")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("行政区划名称")])]),t._v(" "),_("tr",[_("td",[t._v("strokeColor")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("折线颜色")])]),t._v(" "),_("tr",[_("td",[t._v("strokeWeight")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("折线的宽度，以像素为单位")])]),t._v(" "),_("tr",[_("td",[t._v("strokeOpacity")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("折线的透明度，取值范围0 - 1")])]),t._v(" "),_("tr",[_("td",[t._v("strokeStyle")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("'solid'")]),t._v(" "),_("td",[t._v("折线的样式，solid或dashed")])]),t._v(" "),_("tr",[_("td",[t._v("fillColor")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("填充颜色。当参数为空时，折线覆盖物将没有填充效果")])]),t._v(" "),_("tr",[_("td",[t._v("fillOpacity")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("填充的透明度，取值范围0 - 1")])]),t._v(" "),_("tr",[_("td",[t._v("massClear")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("是否在调用map.clearOverlays清除此覆盖物")])]),t._v(" "),_("tr",[_("td",[t._v("clicking")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("是否响应点击事件")])])])])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("table",[_("thead",[_("tr",[_("th",[t._v("事件名")]),t._v(" "),_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("click")]),t._v(" "),_("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),_("td",[t._v("点击行政区划后会触发此事件")])]),t._v(" "),_("tr",[_("td",[t._v("dblclick")]),t._v(" "),_("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),_("td",[t._v("双击行政区划后会触发此事件")])]),t._v(" "),_("tr",[_("td",[t._v("mousedown")]),t._v(" "),_("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),_("td",[t._v("鼠标在行政区划上按下触发此事件")])]),t._v(" "),_("tr",[_("td",[t._v("mouseup")]),t._v(" "),_("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),_("td",[t._v("鼠标在行政区划释放触发此事件")])]),t._v(" "),_("tr",[_("td",[t._v("mouseout")]),t._v(" "),_("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),_("td",[t._v("鼠标离开行政区划时触发此事件")])]),t._v(" "),_("tr",[_("td",[t._v("mouseover")]),t._v(" "),_("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),_("td",[t._v("当鼠标进入行政区划时会触发此事件")])]),t._v(" "),_("tr",[_("td",[t._v("remove")]),t._v(" "),_("td",[t._v("event{type, target}")]),t._v(" "),_("td",[t._v("移出行政区划时触发")])])])])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("pre",[_("code",{staticClass:"language-html"},[_("span",{staticClass:"hljs-tag"},[t._v("<"),_("span",{staticClass:"hljs-name"},[t._v("bmap-gl")]),t._v(" "),_("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),_("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.403765, lat: 39.914850}"')]),t._v(" "),_("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"11"')]),t._v(">")]),t._v("\n  "),_("span",{staticClass:"hljs-tag"},[t._v("<"),_("span",{staticClass:"hljs-name"},[t._v("bmap-gl-boundary")]),t._v(" "),_("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"北京市海淀区"')]),t._v(" "),_("span",{staticClass:"hljs-attr"},[t._v(":strokeWeight")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"2"')]),t._v(" "),_("span",{staticClass:"hljs-attr"},[t._v("strokeColor")]),t._v("="),_("span",{staticClass:"hljs-string"},[t._v('"blue"')]),t._v(">")]),_("span",{staticClass:"hljs-tag"},[t._v("</"),_("span",{staticClass:"hljs-name"},[t._v("bmap-gl-boundary")]),t._v(">")]),t._v("\n"),_("span",{staticClass:"hljs-tag"},[t._v("</"),_("span",{staticClass:"hljs-name"},[t._v("bmap-gl")]),t._v(">")]),t._v("\n")])])}]}},mlCb:function(t,v,_){var e=_("VU/8")(_("nyWg"),_("cQpO"),null,null);t.exports=e.exports},nyWg:function(t,v,_){var e,a,s;!function(_,n){a=[t,v],e=n,void 0!==(s="function"==typeof e?e.apply(v,a):e)&&(t.exports=s)}(0,function(t,v){"use strict";Object.defineProperty(v,"__esModule",{value:!0}),v.default={data:function(){return{name:"湖南省"}}},t.exports=v.default})}});