webpackJsonp([40],{TvKQ:function(t,e,v){var _,a,s;!function(v,n){a=[t,e],_=n,void 0!==(s="function"==typeof _?_.apply(e,a):_)&&(t.exports=s)}(0,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{name:"湖南省"}}},t.exports=e.default})},Unwm:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("section",[[v("h1",[t._v("Boundary")]),t._v(" "),t._m(0),t._v(" "),v("h2",[t._v("Instance Properties")]),t._v(" "),t._m(1),t._v(" "),v("h2",[t._v("Events")]),t._v(" "),t._m(2),t._v(" "),v("h2",[t._v("Example")]),t._v(" "),v("h3",[t._v("Add a boundary area of Haidian District, Beijing on the map")]),t._v(" "),v("h4",[t._v("Code")]),t._v(" "),t._m(3),t._v(" "),v("h4",[t._v("Preview")]),t._v(" "),v("doc-preview",[v("doc-preview",[v("bmap-gl",{staticClass:"map",attrs:{center:{lng:109.49384,lat:26.84204},zoom:11}},[v("bmap-gl-boundary",{attrs:{name:t.name,strokeWeight:2,strokeColor:"blue"}})],1),t._v(" "),v("md-table",[v("md-table-header",[v("md-table-head",[t._v("Boundary Name")])],1),t._v(" "),v("md-table-body",[v("md-table-row",[v("md-table-cell",[v("md-input-container",[v("md-input",{attrs:{"md-inline":""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1)],1)],1)],1)],1)],1)]],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("p",[t._v("The "),v("code",[t._v("BmBoundary")]),t._v(" component rendered by and inherits from the"),v("code",[t._v("bmap-gl-polygon")]),t._v(" component.")])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("table",[v("thead",[v("tr",[v("th",[t._v("name")]),t._v(" "),v("th",[t._v("type")]),t._v(" "),v("th",[t._v("default")]),t._v(" "),v("th",[t._v("description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("name")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Name of the boundary.")])]),t._v(" "),v("tr",[v("td",[t._v("strokeColor")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Polygon stroke color.")])]),t._v(" "),v("tr",[v("td",[t._v("strokeWeight")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Polygon stroke width.")])]),t._v(" "),v("tr",[v("td",[t._v("strokeOpacity")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Polygon stroke opacity.")])]),t._v(" "),v("tr",[v("td",[t._v("strokeStyle")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("'solid'")]),t._v(" "),v("td",[t._v("Polygon stroke style. "),v("code",[t._v("'solid'")]),t._v(" or "),v("code",[t._v("'dashed'")]),t._v(".")])]),t._v(" "),v("tr",[v("td",[t._v("fillColor")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Polygon fill color.")])]),t._v(" "),v("tr",[v("td",[t._v("fillOpacity")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Polygon fill opacity.")])]),t._v(" "),v("tr",[v("td",[t._v("massClear")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("Whether remove this overlay or not when "),v("code",[t._v("map.clearOverlays")]),t._v(" is called.")])]),t._v(" "),v("tr",[v("td",[t._v("clicking")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("Whether to respond to a click event.")])])])])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("table",[v("thead",[v("tr",[v("th",[t._v("name")]),t._v(" "),v("th",[t._v("parameter")]),t._v(" "),v("th",[t._v("description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("click")]),t._v(" "),v("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),v("td",[t._v("Triggers when click on the boundary.")])]),t._v(" "),v("tr",[v("td",[t._v("dblclick")]),t._v(" "),v("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),v("td",[t._v("Triggers when double click on the boundary.")])]),t._v(" "),v("tr",[v("td",[t._v("mousedown")]),t._v(" "),v("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),v("td",[t._v("Triggers when the mouse is pressed down on the boundary.")])]),t._v(" "),v("tr",[v("td",[t._v("mouseup")]),t._v(" "),v("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),v("td",[t._v("Triggers when the mouse is released on the boundary.")])]),t._v(" "),v("tr",[v("td",[t._v("mouseout")]),t._v(" "),v("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),v("td",[t._v("Triggers when the mouse leaves the boundary area.")])]),t._v(" "),v("tr",[v("td",[t._v("mouseover")]),t._v(" "),v("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),v("td",[t._v("Triggers when the mouse enters the boundary area.")])]),t._v(" "),v("tr",[v("td",[t._v("remove")]),t._v(" "),v("td",[t._v("event{type, target}")]),t._v(" "),v("td",[t._v("Triggers when the boundary is removed.")])])])])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("pre",[v("code",{staticClass:"language-html"},[v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("bmap-gl")]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.403765, lat: 39.914850}"')]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"11"')]),t._v(">")]),t._v("\n  "),v("span",{staticClass:"hljs-tag"},[t._v("<"),v("span",{staticClass:"hljs-name"},[t._v("bmap-gl-boundary")]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"北京市海淀区"')]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v(":strokeWeight")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"2"')]),t._v(" "),v("span",{staticClass:"hljs-attr"},[t._v("strokeColor")]),t._v("="),v("span",{staticClass:"hljs-string"},[t._v('"blue"')]),t._v(">")]),v("span",{staticClass:"hljs-tag"},[t._v("</"),v("span",{staticClass:"hljs-name"},[t._v("bmap-gl-boundary")]),t._v(">")]),t._v("\n"),v("span",{staticClass:"hljs-tag"},[t._v("</"),v("span",{staticClass:"hljs-name"},[t._v("bmap-gl")]),t._v(">")]),t._v("\n")])])}]}},gSFf:function(t,e,v){var _=v("VU/8")(v("TvKQ"),v("Unwm"),null,null);t.exports=_.exports},vgEA:function(t,e,v){t.exports=v("gSFf")}});