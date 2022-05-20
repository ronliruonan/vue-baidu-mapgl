webpackJsonp([4],{"90Ud":function(s,a){s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("bmap-gl-overlay",{ref:"customOverlay",class:{sample:!0,active:s.active},attrs:{pane:"labelPane"},on:{draw:s.draw}},[t("div",{domProps:{textContent:s._s(s.text)},on:{click:s.handleClick}})])},staticRenderFns:[]}},IBl6:function(s,a,t){var l=t("VU/8")(t("LHsn"),t("90Ud"),null,null);s.exports=l.exports},IJnJ:function(s,a,t){var l,n,v;!function(_,e){n=[s,a,t("IBl6")],l=e,void 0!==(v="function"==typeof l?l.apply(a,n):l)&&(s.exports=v)}(0,function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=function(s){return s&&s.__esModule?s:{default:s}}(t);a.default={data:function(){return{active:!1,position:{lng:116.404,lat:39.915}}},components:{MyOverlay:l.default},methods:{draw:function(s){var a=s.el,t=s.BMapGL,l=s.map,n=l.pointToOverlayPixel(new t.Point(116.404,39.915));a.style.left=n.x-60+"px",a.style.top=n.y-20+"px"}}},s.exports=a.default})},LHsn:function(s,a,t){(function(t){var l,n,v;!function(t,_){n=[s,a],l=_,void 0!==(v="function"==typeof l?l.apply(a,n):l)&&(s.exports=v)}(0,function(s,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={watch:{position:{handler:function(){this.$refs.customOverlay.reload()},deep:!0}},props:["text","position","active"],methods:{handleClick:function(){t.alert("Well done.")},draw:function(s){var a=s.el,t=s.BMapGL,l=s.map,n=this.position,v=n.lng,_=n.lat,e=l.pointToOverlayPixel(new t.Point(v,_));a.style.left=e.x-60+"px",a.style.top=e.y-20+"px"}}},s.exports=a.default})}).call(a,t("DuR2"))},PMuC:function(s,a,t){t("ge5u");var l=t("VU/8")(t("IJnJ"),t("b619"),null,null);s.exports=l.exports},aw82:function(s,a,t){a=s.exports=t("FZ+f")(),a.push([s.i,".sample{width:120px;height:40px;background:rgba(0,0,0,.5);overflow:hidden;color:#fff;text-align:center;padding:10px;position:absolute}.sample.active{background:rgba(0,0,0,.75);color:#fff}",""])},b619:function(s,a){s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("自定义覆盖物")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("属性")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("事件")]),s._v(" "),s._m(2),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("单独使用")]),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(3),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[t("bmap-gl",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15}},[t("bmap-gl-overlay",{class:{sample:!0,active:s.active},attrs:{pane:"labelPane"},on:{draw:s.draw},nativeOn:{mouseover:function(a){s.active=!0},mouseleave:function(a){s.active=!1}}},[t("div",[s._v("我爱北京天安门")])])],1)],1),s._v(" "),t("h3",[s._v("二次封装用法")]),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),t("h5",[s._v("封装组件 MyOverlay")]),s._v(" "),s._m(4),s._v(" "),t("h5",[s._v("调用 MyOverlay 组件")]),s._v(" "),s._m(5),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[t("bmap-gl",{attrs:{center:{lng:116.404,lat:39.915},zoom:15}},[t("bmap-gl-view",{staticClass:"map"}),s._v(" "),t("my-overlay",{attrs:{position:{lng:s.position.lng,lat:s.position.lat},text:"点击我",active:s.active},nativeOn:{mouseover:function(a){s.active=!0},mouseleave:function(a){s.active=!1}}}),s._v(" "),t("md-table",[t("md-table-header",[t("md-table-head",[s._v("覆盖物经度")]),s._v(" "),t("md-table-head",[s._v("覆盖物纬度")])],1),s._v(" "),t("md-table-body",[t("md-table-row",[t("md-table-cell",[t("md-input-container",[t("md-input",{model:{value:s.position.lng,callback:function(a){s.$set(s.position,"lng",a)},expression:"position.lng"}})],1)],1),s._v(" "),t("md-table-cell",[t("md-input-container",[t("md-input",{model:{value:s.position.lat,callback:function(a){s.$set(s.position,"lat",a)},expression:"position.lat"}})],1)],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("code",[s._v("BmOverlay")]),s._v(" 自定义覆盖物组件是一个高度订制化的组件，通过 "),t("code",[s._v("draw")]),s._v(" 事件进行覆盖物的重绘。推荐的使用方法是将重绘逻辑相同的 "),t("code",[s._v("BmOverlay")]),s._v(" 进行二次封装。自定义覆盖物仅在地图发生变化时触发 "),t("code",[s._v("draw")]),s._v(" 方法重绘覆盖物视图，若需要定制数据视图同步策略，请手动触发 "),t("code",[s._v("BmOverlay")]),s._v(" 的 "),t("code",[s._v("reload")]),s._v(" 实例方法。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("属性名")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("pane")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("自定义覆盖物所在"),t("a",{attrs:{href:"http://lbsyun.baidu.com/cms/jsapi/class/jsapi_reference.html#a3b1"}},[s._v("容器")]),s._v("。包含 "),t("code",[s._v("floatPane")]),s._v("、"),t("code",[s._v("markerMouseTarget")]),s._v("、"),t("code",[s._v("floatShadow")]),s._v("、"),t("code",[s._v("labelPane")]),s._v("、"),t("code",[s._v("markerPane")]),s._v("、"),t("code",[s._v("markerShadow")]),s._v("、"),t("code",[s._v("mapPane")]),s._v(" 共 7 种合法值")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("initialize")]),s._v(" "),t("td",[s._v("event{BMapGL, map, el, overlay}")]),s._v(" "),t("td",[s._v("覆盖物初始化时触发此事件")])]),s._v(" "),t("tr",[t("td",[s._v("draw")]),s._v(" "),t("td",[s._v("event{BMapGL, map, el, overlay}")]),s._v(" "),t("td",[s._v("地图发生改变时触发此事件")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bmap-gl")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"map"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":center")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"{lng: 116.404, lat: 39.915}"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":zoom")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"15"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bmap-gl-overlay")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("pane")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"labelPane"')]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v(":class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"{sample: true, active}"')]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("@draw")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"draw"')]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("@mouseover.native")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"active = true"')]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("@mouseleave.native")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"active = false"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("我爱北京天安门"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bmap-gl-overlay")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bmap-gl")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("active")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n    }\n  },\n  "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    draw ({el, BMapGL, map}) {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" pixel = map.pointToOverlayPixel("),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" BMapGL.Point("),t("span",{staticClass:"hljs-number"},[s._v("116.404")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("39.915")]),s._v("))\n      el.style.left = pixel.x - "),t("span",{staticClass:"hljs-number"},[s._v("60")]),s._v(" + "),t("span",{staticClass:"hljs-string"},[s._v("'px'")]),s._v("\n      el.style.top = pixel.y - "),t("span",{staticClass:"hljs-number"},[s._v("20")]),s._v(" + "),t("span",{staticClass:"hljs-string"},[s._v("'px'")]),s._v("\n    }\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),t("span",{staticClass:"css"},[s._v("\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".sample")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("120px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("40px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("line-height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("40px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("background")]),s._v(": "),t("span",{staticClass:"hljs-built_in"},[s._v("rgba")]),s._v("("),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("0.5")]),s._v(");\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("overflow")]),s._v(": hidden;\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("box-shadow")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("5px")]),s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("#000")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("color")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("#fff")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("text-align")]),s._v(": center;\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("padding")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("10px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("position")]),s._v(": absolute;\n}\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".sample")]),t("span",{staticClass:"hljs-selector-class"},[s._v(".active")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("background")]),s._v(": "),t("span",{staticClass:"hljs-built_in"},[s._v("rgba")]),s._v("("),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("0.75")]),s._v(");\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("color")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("#fff")]),s._v(";\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bmap-gl-overlay")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"customOverlay"')]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v(":class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"{sample: true, active}"')]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("pane")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"labelPane"')]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("@draw")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"draw"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-text")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"text"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"handleClick"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bmap-gl-overlay")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("props")]),s._v(": ["),t("span",{staticClass:"hljs-string"},[s._v("'text'")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("'position'")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("'active'")]),s._v("],\n  "),t("span",{staticClass:"hljs-attr"},[s._v("watch")]),s._v(": {\n    "),t("span",{staticClass:"hljs-attr"},[s._v("position")]),s._v(": {\n      handler () {\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$refs.customOverlay.reload()\n      },\n      "),t("span",{staticClass:"hljs-attr"},[s._v("deep")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n    }\n  },\n  "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    handleClick () {\n      global.alert("),t("span",{staticClass:"hljs-string"},[s._v("'Well done.'")]),s._v(")\n    },\n    draw ({el, BMapGL, map}) {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" {lng, lat} = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".position\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" pixel = map.pointToOverlayPixel("),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" BMapGL.Point(lng, lat))\n      el.style.left = pixel.x - "),t("span",{staticClass:"hljs-number"},[s._v("60")]),s._v(" + "),t("span",{staticClass:"hljs-string"},[s._v("'px'")]),s._v("\n      el.style.top = pixel.y - "),t("span",{staticClass:"hljs-number"},[s._v("20")]),s._v(" + "),t("span",{staticClass:"hljs-string"},[s._v("'px'")]),s._v("\n    }\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),t("span",{staticClass:"css"},[s._v("\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".sample")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("120px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("40px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("line-height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("40px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("background")]),s._v(": "),t("span",{staticClass:"hljs-built_in"},[s._v("rgba")]),s._v("("),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("0.5")]),s._v(");\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("overflow")]),s._v(": hidden;\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("box-shadow")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("5px")]),s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("#000")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("color")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("#fff")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("text-align")]),s._v(": center;\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("padding")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("10px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("position")]),s._v(": absolute;\n}\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".sample")]),t("span",{staticClass:"hljs-selector-class"},[s._v(".active")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("background")]),s._v(": "),t("span",{staticClass:"hljs-built_in"},[s._v("rgba")]),s._v("("),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("0.75")]),s._v(");\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("color")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("#fff")]),s._v(";\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bmap-gl")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"map"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":center")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"{lng: 116.404, lat: 39.915}"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":zoom")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"15"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("my-overlay")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v(":position")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"{lng: 116.404, lat: 39.915}"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("text")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"点击我"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v(":active")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"active"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("@mouseover.native")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"active = true"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("@mouseleave.native")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"active = false"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("my-overlay")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bmap-gl")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" MyOverlay "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'../../components/MyOverlay.vue'")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("active")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n    }\n  }\n  "),t("span",{staticClass:"hljs-attr"},[s._v("components")]),s._v(": {\n    MyOverlay\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])}]}},ge5u:function(s,a,t){var l=t("aw82");"string"==typeof l&&(l=[[s.i,l,""]]),l.locals&&(s.exports=l.locals);t("rjj0")("59df04f9",l,!0)},y2xd:function(s,a,t){s.exports=t("PMuC")}});