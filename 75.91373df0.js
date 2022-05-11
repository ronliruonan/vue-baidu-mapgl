webpackJsonp([75],{"36h0":function(t,s,a){var _=a("VU/8")(null,a("VS2F"),null,null);t.exports=_.exports},AKc5:function(t,s,a){t.exports=a("36h0")},VS2F:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("定位控件，请你放弃这个，当前最新政策只能定位城市")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("属性")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("事件")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("示例")]),t._v(" "),a("h3",[t._v("在地图右下角加入定位控件")]),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(3),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[a("bmap-gl",{staticClass:"map",attrs:{center:"北京"}},[a("bmap-gl-geolocation",{attrs:{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT",showAddressBar:!0,autoLocation:!0}})],1)],1)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("BmGeolocation")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("anchor")]),t._v(" "),a("td",[t._v("ControlAnchor")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("控件停靠位置")])]),t._v(" "),a("tr",[a("td",[t._v("offset")]),t._v(" "),a("td",[t._v("Size")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("控件偏移值")])]),t._v(" "),a("tr",[a("td",[t._v("showAddressBar")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("是否显示定位信息面板。默认显示定位信息面板")])]),t._v(" "),a("tr",[a("td",[t._v("autoLocation")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("添加控件时是否进行定位。根据 "),a("a",{attrs:{href:"https://www.w3.org/TR/geolocation-API/#privacy_for_uas"}},[t._v("W3C相关标准")]),t._v(" 描述，为保证用户隐私安全，geoLocation API 必须使用 SSL 连接，并获得用户的手动许可。请确保使用该属性时满足上述条件。")])]),t._v(" "),a("tr",[a("td",[t._v("locationIcon")]),t._v(" "),a("td",[t._v("Icon")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("可自定义定位中心点的Icon样式")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("事件名")]),t._v(" "),a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("locationSuccess")]),t._v(" "),a("td",[t._v("{point, AddressComponent, marker}")]),t._v(" "),a("td",[t._v("定位成功后触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("locationError")]),t._v(" "),a("td",[t._v("{StatusCode}")]),t._v(" "),a("td",[t._v("定位失败后触发此事件")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bmap-gl")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"北京"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bmap-gl-geolocation")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("anchor")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"BMAP_ANCHOR_BOTTOM_RIGHT"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":showAddressBar")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":autoLocation")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bmap-gl-geolocation")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bmap-gl")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])}]}}});