(this.webpackJsonpcityscopejs=this.webpackJsonpcityscopejs||[]).push([[0],{224:function(e,t){},237:function(e,t,a){},27:function(e){e.exports=JSON.parse('{"docsURL":"https://raw.githubusercontent.com/CityScope/CS_cityscopeJS/master/docs/","radar":{"domain":[{"name":"amazing city","domain":[0,1]},{"name":"validated innovation","domain":[0,1]},{"name":"predicted happiness","domain":[0,1]},{"name":"wow mix-use","domain":[0,1]},{"name":"ok buildings","domain":[0,1]},{"name":"fun crime rates","domain":[0,1]},{"name":"success urbanism","domain":[0,1]},{"name":"happy AI","domain":[0,1]},{"name":"free parking","domain":[0,1]},{"name":"deep chainy","domain":[0,1]},{"name":"failed urbanism","domain":[0,1]},{"name":"Data for free","domain":[0,1]},{"name":"vapor energy","domain":[0,1]},{"name":"deep chainy","domain":[0,1]}],"colorRange":["#fc03ec","#79C7E3"]},"cityIO":{"baseURL":"https://cityio.media.mit.edu/api/table/","interval":500,"cityIOmodules":["header","interactive_grid_mapping","meta_grid","ABM","grid","access","interactive_grid_data","interactive_network_data"]},"map":{"mapStyle":{"sat":"mapbox://styles/relnox/cjs9rb33k2pix1fo833uweyjd?fresh=true","dark":"mapbox://styles/relnox/cjl58dpkq2jjp2rmzyrdvfsds?fresh=true","blue":"mapbox://styles/relnox/ck0h5xn701bpr1dqs3he2lecq?fresh=true"},"layers":{"ABM":{"startSimHour":25200,"endSimHour":50400,"animationSpeed":20},"heatmap":{"colors":[[213,62,79],[252,141,89],[254,224,139],[230,245,152],[153,213,148],[50,136,189]]}},"initialViewState":{"longitude":-71.0894527,"latitude":42.3603609,"zoom":17,"pitch":0,"bearing":0},"netTypes":{"0":{"width":10,"color":[255,255,255,50],"name":"None"},"1":{"width":5,"color":[100,100,100,150],"name":"two lanes"},"2":{"width":10,"color":[50,50,50,150],"name":"four lanes"},"3":{"width":4,"color":[0,250,0,150],"name":"bikelanes"},"4":{"width":2,"color":[200,200,0,150],"name":"walkway"}},"types":{"0":{"height":0,"color":[0,0,0,0],"name":"None"},"1":{"height":1,"color":[255,255,255],"name":"Road"},"2":{"height":10,"color":[153,213,148],"name":"Green"},"3":{"height":10,"color":[252,141,89],"name":"Residential Low"},"4":{"height":20,"color":[254,224,139],"name":"Residential Mid"},"5":{"height":30,"color":[230,245,152],"name":"Residential Tall"},"6":{"height":40,"color":[213,62,79],"name":"Office Mixuse"},"7":{"height":80,"color":[50,136,189],"name":"Office Tower"}}},"menu":{"toggles":{"GRID":true,"NETWORK":true,"TEXT":false,"PATHS":false,"ABM":false,"ACCESS":false,"RADAR":false,"ROTATE":false,"KS":false}}}')},323:function(e,t,a){e.exports=a(454)},347:function(e,t,a){},431:function(e,t){},452:function(e,t,a){},454:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(43),r=a.n(o),s=(a(237),a(47)),c=a(48),l=a(51),u=a(49),d=a(52),p=a(58),h=a(179),m=a(36),g=a(27),f="GET_CITYIO_DATA";var y="LISTEN_TO_MAP_EVENTS";var v="LISTEN_TO_ABM_SLIDERS";var S="MENU_INTERACTION";for(var b=Object.keys(g.menu.toggles),E=[],O=0;O<b.length;O++)Object.values(g.menu.toggles)[O]&&E.push(b[O]);var w={MENU:E,CITYIO:{},MAP:{},SLIDERS:{}};function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(m.a)({},e,{CITYIO:t.data});case S:return Object(m.a)({},e,{MENU:t.data});case y:return Object(m.a)({},e,{MAP:t.data});case v:return Object(m.a)({},e,{SLIDERS:t.data});default:return e}}var j=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),k=function(){return Object(h.b)(D,j)},T=a(105),_=a(133),M=a.n(_),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleURL=function(){a.cityioURL=g.cityIO.baseURL+a.props.tableName,a.getCityIOHash(a.cityioURL+"/meta"),a.timer=setInterval((function(){return a.getCityIOHash(a.cityioURL+"/meta")}),g.cityIO.interval),console.log("starting cityIO interval every..",g.cityIO.interval)},a.getCityIOHash=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){a.handleCityIOHashes(e)})).catch((function(e){console.log(e)}))},a.handleCityIOHashes=function(e){e.id!==a.state.oldHashs.id&&(a.setState({cityIOmodulesStatus:{}}),a.setState({readyToShareWithRedux:!1}),g.cityIO.cityIOmodules.forEach((function(t){e.hashes[t]!==a.state.oldHashs[t]?(a.setNestedState("cityIOmodulesStatus",t,!1),a.getCityIOmoduleData(t,a.cityioURL+"/"+t),a.setNestedState("oldHashs",t,e.hashes[t])):a.setNestedState("cityIOmodulesStatus",t,!0)})),a.setNestedState("oldHashs","id",e.id))},a.checkDoneCityIO=function(e){for(var t in a.setNestedState("cityIOmodulesStatus",e,!0),a.state.cityIOmodulesStatus)if(!0!==a.state.cityIOmodulesStatus[t])return;a.setState({readyToShareWithRedux:!0})},a.sharePropsWithRedux=function(){if(a.state.readyToShareWithRedux){var e=a.state.cityIOmodulesData;e.tableName=a.props.tableName,console.log("done updating from cityIO.."),a.props.getCityioData(e)}},a.setNestedState=function(e,t,n){var i=Object(m.a)({},a.state[e]);i[t]=n,a.setState(Object(T.a)({},e,i))},a.getCityIOmoduleData=function(e,t){M.a.get(t).then((function(t){a.setNestedState("cityIOmodulesData",e,t.data),console.log("...updating module:",e),a.checkDoneCityIO(e)})).catch((function(e){e.response?console.log("error.response:","\n",e.response.data,"\n",e.response.status,"\n",e.response.headers):e.request?console.log("error.request:",e.request):console.log("misc error:",e.message),console.log("request config:",e.config)}))},a.state={oldHashs:{},cityIOmodulesData:{}},a.cityioURL=null,a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.handleURL()}},{key:"render",value:function(){return this.sharePropsWithRedux(),null}}]),t}(n.Component),C={getCityioData:function(e){return{type:f,data:e}}},R=Object(p.b)(null,C)(I),N=(a(347),a(348)),x=g.docsURL,A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={text:"loading..."},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=x+this.props.doc+".md";console.log(t),M.a.get(t,{mode:"no-cors"}).then((function(t){e.setState({text:t.data})}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"docs"},i.a.createElement(N,{source:this.state.text,transformImageUri:function(e){return e.startsWith("http")?e:"".concat(g.docsURL).concat(e)}}))}}]),t}(n.Component),L=a(195),U=a(92),P=a(496),W=a(503),H=a(287),B=a(519),V=a(501),z=a(500),F=a(517),K=a(512),Y=a(504),G=a(270),X=a.n(G),J=a(272),q=a.n(J),Z=a(271),Q=a.n(Z),$=a(499),ee=a(203),te=a(520),ae=g.map.layers.ABM,ne=ae.startSimHour,ie=ae.endSimHour,oe=new Date(1e3*(21600+ne)).getHours(),re=new Date(1e3*(21600+ie)).getHours(),se=[{value:0,label:"12AM"},{value:6,label:"6AM"},{value:12,label:"12PM"},{value:18,label:"6PM"}],ce=Object(P.a)({root:{width:"100%"}});var le={listenToSlidersEvents:function(e){return{type:v,data:e}}},ue=Object(p.b)((function(e){return{ABMlayerEvents:e.MAP}}),le)((function(e){var t=ce(),a=i.a.useState([oe,12,re]),n=Object(U.a)(a,2),o=n[0],r=n[1],s=i.a.useState([50]),c=Object(U.a)(s,2),l=c[0],u=c[1];return i.a.createElement("div",{className:t.root},i.a.createElement(ee.a,{id:"range-slider",gutterBottom:!0},"Simulation Range"),i.a.createElement(te.a,{min:0,max:23,marks:se,value:o,onChange:function(t,a){r(a),e.listenToSlidersEvents(Object(m.a)({},e,{SLIDERS:Object(m.a)({},e,{time:a})}))},valueLabelDisplay:"auto","aria-labelledby":"range-slider"}),i.a.createElement(ee.a,{id:"range-slider",gutterBottom:!0},"Simulation Speed"),i.a.createElement(te.a,{min:0,max:100,value:l,onChange:function(t,a){u(a),e.listenToSlidersEvents(Object(m.a)({},e,{SLIDERS:Object(m.a)({},e,{speed:a})}))},valueLabelDisplay:"auto","aria-labelledby":"range-slider"}))})),de=Object(P.a)((function(e){return{root:{padding:e.spacing(1,5),position:"fixed",bottom:"3vw",left:"3vw",width:"20vw"}}}));function pe(){var e=de();return i.a.createElement($.a,{className:e.root},i.a.createElement(ue,null))}var he=a(502),me=a(274),ge=a.n(me),fe=a(273),ye=a.n(fe);var ve={listenToMenuUI:function(e){return{type:S,data:e}}},Se=Object(p.b)((function(e){return{menuState:e.MENU}}),ve)((function(e){for(var t=Object.keys(g.menu.toggles),a=Object(P.a)((function(e){return{root:{width:"100%",maxWidth:"15em",position:"absolute","& > *":{margin:e.spacing(1)}},paper:{background:"black",color:"white"},list:{width:"15em"},fullList:{width:"auto"},menuButton:{position:"fixed",top:e.spacing(2),left:e.spacing(2)},editButton:{position:"fixed",top:e.spacing(12),left:e.spacing(2)},resetViewButton:{position:"fixed",top:e.spacing(22),left:e.spacing(2)}}}))(),n=Object(H.a)({palette:{type:"dark"}}),o=i.a.useState(Object.keys(g.menu.toggles).filter((function(e){return g.menu.toggles[e]})).map(String)),r=Object(U.a)(o,2),s=r[0],c=r[1],l=i.a.useState({left:!1}),u=Object(U.a)(l,2),d=u[0],p=u[1],h=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&p(Object(m.a)({},d,Object(T.a)({},e,t)))}},f=function(t){return function(){var a=s.indexOf(t),n=Object(L.a)(s);-1===a?n.push(t):n.splice(a,1),c(n),p(Object(m.a)({},d,{checked:n})),e.listenToMenuUI(n)}},y=[],v=0;v<t.length;v++){var S=i.a.createElement(B.a,{key:t[v]},i.a.createElement(z.a,{primary:t[v]}),i.a.createElement(V.a,null,i.a.createElement(F.a,{edge:"end",onChange:f(t[v]),checked:!!e.menuState.includes(t[v])})));y.push(S)}var b;return i.a.createElement(he.a,{theme:n},i.a.createElement("div",{className:a.root},i.a.createElement(K.a,{anchor:"left",open:d.left,onClose:h("left",!1)},(b="left",i.a.createElement("div",{className:a.list,role:"presentation",onClick:h(b,!1),onKeyDown:h(b,!1)})),i.a.createElement(W.a,{className:a.root},i.a.createElement("h2",null,"cityscopeJS"),y))),i.a.createElement(Y.a,{className:a.menuButton,onClick:h("left",!0)},i.a.createElement(X.a,null)),i.a.createElement(Y.a,{className:a.editButton,onClick:f("EDIT")},s.includes("EDIT")?i.a.createElement(Q.a,null):i.a.createElement(q.a,null)),i.a.createElement(Y.a,{className:a.resetViewButton,onClick:f("RESET_VIEW")},s.includes("RESET_VIEW")?i.a.createElement(ye.a,null):i.a.createElement(ge.a,null)),d.checked&&d.checked.includes("ABM")?i.a.createElement(pe,null):null)})),be=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.cityioData&&this.props.cityioData.grid?i.a.createElement(Se,null):null}}]),t}(n.Component),Ee=Object(p.b)((function(e){return{cityioData:e.CITYIO}}),null)(be),Oe=a(178),we=a(429),De=function(e){var t=(new Date).toLocaleString("en-US",{timeZone:we(e.spatial.latitude,e.spatial.longitude),hour:"2-digit",hour12:!1});return(new Date).getUTCHours()+24-parseInt(t)},je=function(e){var t=g.map.types,a=e.grid,n=e.meta_grid,i=e.interactive_grid_data;if(i)for(var o=0;o<n.features.length;o++)n.features[o].properties=i[o];var r=e.interactive_grid_mapping;for(var s in r){var c=a[s][0],l=n.features[r[s]].properties;if(l.type=c,-1!==a[s][0]){var u=Object.values(t)[a[s][0]];l.color=u.color,l.height=u.height}else console.log("... got null type...")}return JSON.parse(JSON.stringify(n))},ke=function(e){var t=e.meta_grid.features,a={type:"FeatureCollection",features:[]};if(t)for(var n=0;n<t.length;n++){var i=t[n].geometry.coordinates[0][0],o=n,r={type:"Feature",properties:e.interactive_network_data?e.interactive_network_data[o]:{land_use:"network",netWidth:5,color:[255,255,255,1],id:o},geometry:{type:"Point",coordinates:i}};a.features.push(r)}return a},Te=function(e){for(var t=e.meta_grid,a=[],n=0;n<t.features.length;n++)a[n]={text:t.features[n].properties.height.toString(),coordinates:[t.features[n].geometry.coordinates[0][0][0],t.features[n].geometry.coordinates[0][0][1],t.features[n].properties.height+10]};return a},_e=function(e){for(var t=e.access,a=t.features.map((function(e){return e.geometry.coordinates})),n=t.features.map((function(e){return e.properties})),i=[],o=0;o<a.length;o++)i.push({coordinates:a[o],values:n[o]});return i},Me=function(e,t,a){for(var n=[],i=0;i<e.features.length;i++)n[i]=e.features[i].properties;M.a.post("https://cityio.media.mit.edu/api/table/update/"+t+a,n).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},Ie=a(286),Ce=a(518),Re=a(508),Ne=(a(430),a(513)),xe=a(288),Ae=a(514),Le=a(202),Ue=a(515),Pe=a(456),We=a(264),He=a(153),Be=["background: linear-gradient(#10B500, #0086B5)","border: 3px solid #ffffff","color: white","display: block","text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5)","line-height: 40px","text-align: center","font-weight: bold"].join(";"),Ve=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e)))._mulipleObjPicked=function(e){var t=a.state.pickingRadius,n=e.x-t/2,i=e.y-t/2;return a.deckGL.pickObjects({x:n,y:i,width:t,height:t})},a._handleCellsSelection=function(e){var t=a.state.randomType,n=a._mulipleObjPicked(e);n.forEach((function(e){var i=e.object.properties;"None"===i.land_use||i.interactive||(i.old_height=i.height,i.old_color=i.color,i.color=t.color,i.height=t.height),a.setState({selectedCellsState:n})}))},a._handleCellsHover=function(e){var t=a.state.randomType;if(e.object&&e.object.properties){var n=e.object.properties;"None"===n.land_use||n.interactive||(n.old_color=n.color,n.color=t.color,a.setState({selectedCellsState:e.object}),n.color=n.old_color,a.setState({selectedCellsState:e.object}))}},a._handleNetSelection=function(e){var t=a.state.randomNetType,n=a._mulipleObjPicked(e);n.forEach((function(e){var a=e.object.properties;"network"===a.land_use&&(a.old_color=a.color,a.color=t.color,a.netWidth=t.width)})),a.setState({selectedNetState:n})},a._renderSelectionTarget=function(){if(a.props.menu.includes("EDIT")&&a.state.mousePos){var e=!a.props.menu.includes("GRID")&&a.props.menu.includes("NETWORK")?a.state.randomNetType:a.state.randomType,t=e.color,n="rgb("+t[0]+","+t[1]+","+t[2]+")",o=a.state.mousePos,r=a.state.pickingRadius,s=o.clientX-r/2,c=o.clientY-r/2;return i.a.createElement("div",{style:{border:"2px solid",backgroundColor:a.state.mouseDown?"rgba("+t[0]+","+t[1]+","+t[2]+",0.6)":"rgba(0,0,0,0)",borderColor:n,color:n,borderRadius:"15%",position:"fixed",zIndex:1,pointerEvents:"none",width:r,height:r,left:s,top:c}},i.a.createElement("div",{style:{position:"relative",left:r+10,fontSize:"1vw"}},e.name))}},a._rndType=function(){var e=Object.keys(g.map.types),t=g.map.types[e[e.length*Math.random()<<0]];a.setState({randomType:t});var n=Object.keys(g.map.netTypes),i=g.map.netTypes[n[n.length*Math.random()<<0]];a.setState({randomNetType:i})},a._handleKeyUp=function(){a.setState({keyDownState:null})},a._handleKeyDown=function(e){a.setState({keyDownState:e.nativeEvent.key})," "===e.nativeEvent.key?a._rndType():"="===e.nativeEvent.key&&a.state.pickingRadius<100?a.setState({pickingRadius:a.state.pickingRadius+5}):"-"===e.nativeEvent.key&&a.state.pickingRadius>0&&a.setState({pickingRadius:a.state.pickingRadius-5})},a.state={menu:null,cityioData:null,draggingWhileEditing:!1,selectedCellsState:null,selectedNetState:null,time:0,pickingRadius:40,viewState:g.map.initialViewState},a.animationFrame=null,a._onViewStateChange=a._onViewStateChange.bind(Object(Oe.a)(a)),a.timeZoneOffset=De(a.props.cityioData.header),a.dirLightSettings={timestamp:Date.UTC(2019,7,1,11+a.timeZoneOffset),color:[255,255,255],intensity:1,_shadow:!0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){this.animationFrame&&window.cancelAnimationFrame(this.animationFrame)}},{key:"componentDidMount",value:function(){this._rightClickViewRotate(),this._setupEffects(),this._setViewStateToTableHeader()}},{key:"componentDidUpdate",value:function(e,t){if(e.menu!==t.menu&&(this.setState({menu:this.props.menu}),this._animate()),t.cityioData!==this.props.cityioData){console.log("%c new cityioData data to render ",Be);var a=this.props.cityioData;this.setState({cityioData:a,meta_grid:je(a),gridTextData:Te(a),networkGeojson:ke(a)}),this.props.cityioData.access&&this.setState({access:_e(a)}),this._rndType()}e.menu.includes("EDIT")&&!this.props.menu.includes("EDIT")&&(console.log(this.props.cityioData),Me(this.state.meta_grid,this.props.cityioData.tableName,"/interactive_grid_data"),Me(this.state.networkGeojson,this.props.cityioData.tableName,"/interactive_network_data")),!e.menu.includes("RESET_VIEW")&&this.props.menu.includes("RESET_VIEW")?this._setViewStateToTableHeader():e.menu.includes("RESET_VIEW")&&!this.props.menu.includes("RESET_VIEW")&&this.setState({viewState:Object(m.a)({},this.state.viewState,{pitch:45})})}},{key:"_onViewStateChange",value:function(e){var t=e.viewState;this.setState({viewState:t})}},{key:"_setViewStateToTableHeader",value:function(){var e=this.props.cityioData.header;this.setState({viewState:Object(m.a)({},this.state.viewState,{longitude:e.spatial.longitude,latitude:e.spatial.latitude,zoom:14,pitch:0,bearing:180-e.spatial.rotation})})}},{key:"_setupEffects",value:function(){var e=new Pe.a({color:[255,255,255],intensity:.85}),t=new We.a(this.dirLightSettings),a=new He.a({ambientLight:e,dirLight:t});a.shadowColor=[0,0,0,.5],this._effects=[a]}},{key:"_animate",value:function(){if(window.cancelAnimationFrame(this.animationFrame),this.props.menu.includes("ABM")){var e=g.map.layers.ABM,t=e.startSimHour,a=e.animationSpeed,n=e.endSimHour,i=this.state.time+a;(this.state.time>n||this.state.time<t)&&(i=t);var o=3600*this.timeZoneOffset,r=new Date(1e3*(t+o+this.state.time));this._effects[0].directionalLights[0].timestamp=Date.UTC(r.getFullYear(),r.getMonth(),r.getDay(),r.getHours(),r.getMinutes(),r.getSeconds()),this.setState({time:i})}if(this.props.menu.includes("ROTATE")){var s=this.state.viewState.bearing?this.state.viewState.bearing:0;s<360?s+=.05:s=0,this.setState({viewState:Object(m.a)({},this.state.viewState,{bearing:s})})}this.animationFrame=window.requestAnimationFrame(this._animate.bind(this)),this.props.menu.includes("ABM")||(this._effects[0].directionalLights[0].timestamp=this.dirLightSettings.timestamp)}},{key:"_rightClickViewRotate",value:function(){document.getElementById("deckgl-wrapper").addEventListener("contextmenu",(function(e){return e.preventDefault()}))}},{key:"_renderLayers",value:function(){var e=this,t=this.props.cityioData,a=[];return this.props.menu.includes("TEXT")&&a.push(new Ne.a({id:"gridText-layer",data:this.state.gridTextData,getText:function(e){return e.text},getPosition:function(e){return e.coordinates},getColor:[255,255,255],getSize:16})),this.props.menu.includes("NETWORK")&&this.state.networkGeojson&&this.state.networkGeojson.features&&a.push(new xe.a({id:"NETWORK",data:this.state.networkGeojson.features,pickable:!0,opacity:.8,stroked:!0,filled:!0,radiusScale:1,radiusMinPixels:1,radiusMaxPixels:20,getPosition:function(e){return e.geometry.coordinates},getFillColor:[0,0,0,0],getLineColor:function(e){return e.properties.color},getRadius:function(e){return e.properties.netWidth},updateTriggers:{getLineColor:this.state.selectedNetState,getRadius:this.state.selectedNetState},transitions:{getLineColor:500,getRadius:500},onClick:function(t){e.props.menu.includes("EDIT")&&"Shift"!==e.state.keyDownState&&e._handleNetSelection(t)},onDrag:function(t){e.props.menu.includes("EDIT")&&"Shift"!==e.state.keyDownState&&e._handleNetSelection(t)},onDragStart:function(){e.props.menu.includes("EDIT")&&"Shift"!==e.state.keyDownState&&e.setState({draggingWhileEditing:!0})},onDragEnd:function(){e.setState({draggingWhileEditing:!1})}})),this.props.menu.includes("GRID")&&a.push(new Ae.a({id:"GRID",data:this.state.meta_grid,visible:!!this.props.menu.includes("GRID"),pickable:!0,extruded:!0,lineWidthScale:1,lineWidthMinPixels:2,getElevation:function(e){return"None"!==e.properties.land_use?e.properties.height:0},getFillColor:function(e){return void 0!==e.properties.type?e.properties.color:e.properties.color?e.properties.color:"None"!==e.properties.land_use?g.map.types[1].color:g.map.types[0].color},onClick:function(t){e.props.menu.includes("EDIT")&&"Shift"!==e.state.keyDownState&&e._handleCellsSelection(t)},onHover:function(t){e.props.menu.includes("EDIT")&&"Shift"!==e.state.keyDownState&&e._handleCellsHover(t)},onDrag:function(t){e.props.menu.includes("EDIT")&&"Shift"!==e.state.keyDownState&&e._handleCellsSelection(t)},onDragStart:function(){e.props.menu.includes("EDIT")&&"Shift"!==e.state.keyDownState&&e.setState({draggingWhileEditing:!0})},onDragEnd:function(){e.setState({draggingWhileEditing:!1})},updateTriggers:{getFillColor:this.state.selectedCellsState,getElevation:this.state.selectedCellsState},transitions:{getFillColor:500,getElevation:500}})),this.props.menu.includes("ABM")&&a.push(new Re.a({id:"ABM",visible:!!this.props.menu.includes("ABM"),data:t.ABM,getPath:function(e){for(var t in e.path)e.path[t][2]=20;return e.path},getTimestamps:function(e){return e.timestamps},getColor:function(e){switch(e.mode[1]){case 0:return[255,0,0];case 1:return[0,0,255];case 2:return[0,255,0];default:return[0,0,0]}},getWidth:2,opacity:.8,rounded:!0,trailLength:500,currentTime:this.state.time})),this.props.menu.includes("PATHS")&&a.push(new Le.a({id:"PATHS",visible:!!this.props.menu.includes("PATHS"),_shadow:!1,data:t.ABM,getPath:function(e){var t=Math.random()<.5?5e-5*Math.random():-5e-5*Math.random();for(var a in e.path)e.path[a][0]=e.path[a][0]+t,e.path[a][1]=e.path[a][1]+t,e.path[a][2]=10;return e.path},getColor:function(e){switch(e.mode[1]){case 0:return[255,0,0];case 1:return[0,0,255];case 2:return[0,255,0];default:return[0,0,0]}},opacity:.2,getWidth:1})),this.props.menu.includes("ACCESS")&&a.push(new Ue.a({id:"ACCESS",visible:!!this.props.menu.includes("ACCESS"),colorRange:g.map.layers.heatmap.colors,radiusPixels:200,opacity:.25,data:this.state.access,getPosition:function(e){return e.coordinates},getWeight:function(e){return e.values.housing}})),a}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{onKeyDown:this._handleKeyDown,onKeyUp:this._handleKeyUp,onMouseMove:function(t){return e.setState({mousePos:t.nativeEvent})},onMouseUp:function(){return e.setState({mouseDown:!1})},onMouseDown:function(){return e.setState({mouseDown:!0})}},i.a.createElement("div",null,this._renderSelectionTarget()),i.a.createElement(Ce.a,{getCursor:function(){return e.props.menu.includes("EDIT")?"none":"all-scroll"},ref:function(t){e.deckGL=t&&t.deck},viewState:this.state.viewState,onViewStateChange:this._onViewStateChange,layers:this._renderLayers(),effects:this._effects,controller:{touchZoom:!0,touchRotate:!0,dragPan:!this.state.draggingWhileEditing,dragRotate:!this.state.draggingWhileEditing,keyboard:!1}},i.a.createElement(Ie.a,{asyncRender:!0,dragRotate:!0,reuseMaps:!0,mapboxApiAccessToken:"pk.eyJ1IjoicmVsbm94IiwiYSI6ImNqd2VwOTNtYjExaHkzeXBzYm1xc3E3dzQifQ.X8r8nj4-baZXSsFgctQMsg",mapStyle:g.map.mapStyle.blue,preventStyleDiffing:!0})))}}]),t}(n.Component),ze={listenToMapEvents:function(e){return{type:y,data:e}}},Fe=Object(p.b)(null,ze)(Ve),Ke=a(433).solve,Ye=function(e,t){for(var a=[],n=[],i=0,o=e.length;i<o;++i){var r=Object(U.a)(e[i],2),s=r[0],c=r[1],l=Object(U.a)(t[i],2),u=l[0],d=l[1];a.push([s,c,1,0,0,0,-s*u,-c*u],[0,0,0,s,c,1,-s*d,-c*d]),n.push(u,d)}var p=Ke(a,n,!0);return[p[0],p[3],0,p[6],p[1],p[4],0,p[7],0,0,1,0,p[2],p[5],0,1].map((function(e){return function(e,t){var a=Math.pow(10,t),n=e*a;return Math.round(n)/a}(e,10)}))},Ge=function(e){return"matrix3d(".concat(e.join(", "),")")},Xe=function(e){return"translate(".concat(e[0],"px, ").concat(e[1],"px)")},Je={container:{width:30,height:30,borderRadius:"50%",position:"absolute",border:"4px solid white",cursor:"move"},"top-left":{left:-15,top:-15},"bottom-left":{left:-15,bottom:-15},"top-right":{top:-15,right:-15},"bottom-right":{bottom:-15,right:-15}},qe=function(e){var t=e.position,a=e.translation,i=e.onMouseEnter,o=e.onMouseDown,r=e.onMouseUp,s=e.className,c=void 0===s?"":s,l=e.style,u=void 0===l?{}:l;return n.createElement("div",{onMouseEnter:function(){return i&&i(t)},onMouseDown:function(e){return o(e,t)},onMouseUp:function(){return r(t)},className:c,style:Object(m.a)({},Je.container,{},Je[t],{},u,{transform:Xe(a)})})},Ze=a(511),Qe=a(510),$e=a(282),et=a.n($e),tt=Object(P.a)((function(e){return{button:{margin:e.spacing(1),position:"fixed",top:"50vh",zIndex:1e3}}}));function at(){var e=tt();return i.a.createElement(Qe.a,{container:!0,alignItems:"center",justify:"center"},i.a.createElement(Ze.a,{variant:"contained",color:"secondary",className:e.button,startIcon:i.a.createElement(et.a,null)},"Reset Projection Mapping"))}var nt={position:"relative"},it=["top-left","top-right","bottom-right","bottom-left"],ot=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],rt=function(){var e={};return it.forEach((function(t){e[t]=[0,0]})),e},st=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).container=void 0,a.layerTranslateDelta=void 0,a.anchorTranslateDelta=void 0,a.isAnchorDragging=!1,a.targetPoints=void 0,a.anchorMoving=void 0,a.state={matrix:ot,translateDelta:rt(),sourcePoints:void 0,transformOrigin:[0,0],containerTranslate:[a.props.x||0,a.props.y||0]},a.onAnchorMouseDown=function(e,t){e.stopPropagation(),a.anchorTranslateDelta=[e.pageX-a.state.translateDelta[t][0],e.pageY-a.state.translateDelta[t][1]],a.anchorMoving=t},a.onAnchorMouseMove=function(e){if(a.anchorTranslateDelta&&a.state.sourcePoints&&a.anchorMoving){e.preventDefault(),e.stopPropagation();var t=it.indexOf(a.anchorMoving),n=e.pageX-a.anchorTranslateDelta[0],i=e.pageY-a.anchorTranslateDelta[1];a.targetPoints[t]=[a.state.sourcePoints[t][0]+n,a.state.sourcePoints[t][1]+i],a.setState({matrix:Ye(a.state.sourcePoints,a.targetPoints),translateDelta:Object(m.a)({},a.state.translateDelta,Object(T.a)({},a.anchorMoving,[n,i]))})}},a.onAnchorMouseUp=function(e){a.anchorTranslateDelta=void 0,a.anchorMoving=void 0},a.onMouseUp=function(){a.layerTranslateDelta=void 0},a.onMouseMove=function(e){if(a.layerTranslateDelta&&a.props.isEditMode){var t=[e.pageX-a.layerTranslateDelta[0],e.pageY-a.layerTranslateDelta[1]];a.setState({containerTranslate:t})}},a.onMouseDown=function(e){var t=a.state.containerTranslate;a.layerTranslateDelta=[e.pageX-t[0],e.pageY-t[1]]},a._clearLocalStraoge=function(){localStorage.getItem("projMap")&&localStorage.removeItem("projMap"),window.location.reload()},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){if(console.log("starting projMap..."),window.addEventListener("mousemove",this.onAnchorMouseMove),window.addEventListener("mousemove",this.onMouseMove),this.container){var e=this.container.getBoundingClientRect(),t=e.width,a=e.height,n=[[0,0],[t,0],[t,a],[0,a]];this.targetPoints=[].concat(n),this.setState({sourcePoints:n})}}},{key:"componentDidUpdate",value:function(e,t){if(!e.isEditMode&&this.props.isEditMode){if(localStorage.getItem("projMap")){console.log("loading prev. projMap...");var a=localStorage.getItem("projMap");this.setState(JSON.parse(a))}}else e.isEditMode&&!this.props.isEditMode&&(console.log("saving edited projMap..."),localStorage.setItem("projMap",JSON.stringify(t)))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mousemove",this.onAnchorMouseMove),window.removeEventListener("mousemove",this.onMouseMove)}},{key:"render",value:function(){var e=this,t=this.props,a=t.style,i=t.isEditMode,o=t.className,r=t.anchorStyle,s=t.anchorClassName,c=this.state,l=c.translateDelta,u=c.matrix,d=c.containerTranslate,p=c.transformOrigin;return n.createElement(n.Fragment,null,i&&n.createElement("div",{onClick:function(){return e._clearLocalStraoge()}},n.createElement(at,null)),n.createElement("div",{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,style:{cursor:i?"all-scroll":"inherit",position:"relative",display:"inline-block",transform:Xe(d)}},n.createElement("div",{ref:function(t){e.container=t},style:Object(m.a)({},nt,{},a,{pointerEvents:i?"none":"all",transform:Ge(u),transformOrigin:"".concat(p[0],"px ").concat(p[1],"px 0px")}),className:o},this.props.children),i&&n.createElement("div",null,it.map((function(t,a){return n.createElement(qe,{style:r,className:s,key:t,translation:l[t],position:t,onMouseDown:e.onAnchorMouseDown,onMouseUp:e.onAnchorMouseUp})})))))}}]),t}(n.Component),ct=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i))))._checkKeystone=function(){return!!a.props.menu.includes("KS")},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props&&this.props.cityioData&&this.props.cityioData.header?i.a.createElement(st,{className:"mapLayer",style:{height:"99.5vh",width:"100vw"},isEditMode:this._checkKeystone()},i.a.createElement(Fe,{cityioData:this.props.cityioData,menu:this.props.menu})):null}}]),t}(n.Component),lt=Object(p.b)((function(e){return{cityioData:e.CITYIO,menu:e.MENU}}),null)(ct),ut=a(227),dt=(a(451),a(452),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).domain=g.radar.domain,a.colorRange=g.radar.colorRange,a.state={cityioData:{},radarData:[]},a.radarSize=700,a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"generateData",value:function(){var e={},t={};for(var a in this.domain)e[this.domain[a].name]=this.props.cityioData.grid[a][0]/10,t[this.domain[a].name]=a/this.domain.length;this.setState({radarData:[e,t]})}},{key:"componentDidMount",value:function(){console.log(">> init radar"),this.generateData()}},{key:"componentDidUpdate",value:function(e,t){t.cityioData!==this.props.cityioData&&(this.setState({cityioData:this.props.cityioData}),console.log("new radar data.."),this.generateData())}},{key:"render",value:function(){return i.a.createElement(ut.b,{className:"Radar blur",animation:!0,data:this.state.radarData,domains:this.domain,colorRange:this.colorRange,style:{polygons:{fillOpacity:.2,strokeWidth:2},axes:{text:{opacity:0,fontWeight:700,fill:"white"},strokeWidth:0},labels:{textAnchor:"middle",fontSize:12,fontWeight:"600",fill:"white"}},margin:{left:this.radarSize/6,top:this.radarSize/6,bottom:this.radarSize/6,right:this.radarSize/6},width:this.radarSize,height:this.radarSize},i.a.createElement(ut.a,{style:{fill:"white",fillOpacity:.1,backgroundColor:"#fff",opacity:.5,stroke:"white",width:.1},tickValues:Object(L.a)(new Array(11)).map((function(e,t){return t/10-1}))}))}}]),t}(n.Component)),pt=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.menu&&this.props.menu.includes("RADAR")&&this.props.cityioData&&this.props.cityioData.grid?i.a.createElement(dt,{cityioData:this.props.cityioData}):null}}]),t}(n.Component),ht=Object(p.b)((function(e){return{cityioData:e.CITYIO,menu:e.MENU}}),null)(pt),mt=a(284),gt=a(109),ft=k(),yt=function(){var e=window.location.search.substring(1);return""!==e?(console.log(e),i.a.createElement(p.a,{store:ft},i.a.createElement(lt,null),i.a.createElement(R,{tableName:e}),i.a.createElement(ht,null),i.a.createElement(Ee,null))):i.a.createElement(A,{doc:"home"})},vt=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(A,{doc:"arch"}),i.a.createElement(A,{doc:"schema"}))},St=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(mt.a,null,i.a.createElement(gt.c,null,i.a.createElement(gt.a,{path:"/docs"},i.a.createElement(vt,null),";"),i.a.createElement(gt.a,{path:"/"},i.a.createElement(yt,null))))}}]),t}(n.Component),bt=document.getElementById("root");r.a.render(i.a.createElement(St,null),bt)}},[[323,1,2]]]);
//# sourceMappingURL=main.01b32260.chunk.js.map