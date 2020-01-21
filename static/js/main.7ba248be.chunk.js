(this.webpackJsonpcityscopejs=this.webpackJsonpcityscopejs||[]).push([[0],{208:function(e,t){},219:function(e,t,a){},292:function(e,t,a){e.exports=a(343)},31:function(e){e.exports=JSON.parse('{"radar":{"domain":[{"name":"amazing city","domain":[0,1]},{"name":"validated innovation","domain":[0,1]},{"name":"predicted happiness","domain":[0,1]},{"name":"wow mix-use","domain":[0,1]},{"name":"ok buildings","domain":[0,1]},{"name":"fun crime rates","domain":[0,1]},{"name":"success urbanism","domain":[0,1]},{"name":"happy AI","domain":[0,1]},{"name":"free parking","domain":[0,1]},{"name":"deep chainy","domain":[0,1]},{"name":"failed urbanism","domain":[0,1]},{"name":"Data for free","domain":[0,1]},{"name":"vapor energy","domain":[0,1]},{"name":"deep chainy","domain":[0,1]}],"colorRange":["#fc03ec","#79C7E3"]},"cityIO":{"baseURL":"https://cityio.media.mit.edu/api/table/","interval":1000,"cityIOmodules":["header","interactive_grid_mapping","meta_grid","ABM","grid","access","interactive_grid_data"]},"map":{"mapStyle":{"sat":"mapbox://styles/relnox/cjs9rb33k2pix1fo833uweyjd?fresh=true","dark":"mapbox://styles/relnox/cjl58dpkq2jjp2rmzyrdvfsds?fresh=true","blue":"mapbox://styles/relnox/ck0h5xn701bpr1dqs3he2lecq?fresh=true"},"layers":{"ABM":{"startSimHour":25200,"endSimHour":50400,"animationSpeed":20},"heatmap":{"colors":[[213,62,79],[252,141,89],[254,224,139],[230,245,152],[153,213,148],[50,136,189]]}},"initialViewState":{"longitude":-71.0894527,"latitude":42.3603609,"zoom":17,"pitch":0,"bearing":0},"types":{"0":{"height":0,"color":[0,0,0,0],"name":"None"},"1":{"height":1,"color":[255,255,255],"name":"Road"},"2":{"height":10,"color":[153,213,148],"name":"Green"},"3":{"height":10,"color":[252,141,89],"name":"Residential Low"},"4":{"height":20,"color":[254,224,139],"name":"Residential Mid"},"5":{"height":30,"color":[230,245,152],"name":"Residential Tall"},"6":{"height":40,"color":[213,62,79],"name":"Office Mixuse"},"7":{"height":80,"color":[50,136,189],"name":"Office Tower"}}},"menu":{"toggles":{"GRID":true,"TEXT":false,"EDIT":false,"PATHS":false,"ABM":false,"ACCESS":false,"RADAR":false,"ROTATE":false,"KS":false}}}')},317:function(e,t,a){},321:function(e,t){},342:function(e,t,a){},343:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),o=a(42),r=a.n(o),s=(a(219),a(46)),c=a(47),l=a(50),u=a(48),d=a(51),h=a(56),p=a(166),m=a(38),f=a(31),g="GET_CITYIO_DATA";var y="LISTEN_TO_MAP_EVENTS";var v="LISTEN_TO_ABM_SLIDERS";var b="MENU_INTERACTION";for(var S=Object.keys(f.menu.toggles),O=[],E=0;E<S.length;E++)Object.values(f.menu.toggles)[E]&&O.push(S[E]);var D={MENU:O,CITYIO:{},MAP:{},SLIDERS:{}};function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(m.a)({},e,{CITYIO:t.data});case b:return Object(m.a)({},e,{MENU:t.data});case y:return Object(m.a)({},e,{MAP:t.data});case v:return Object(m.a)({},e,{SLIDERS:t.data});default:return e}}var j=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),M=function(){return Object(p.b)(w,j)},T=a(99),k=a(167),C=a.n(k),I=(a(317),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"background"},i.a.createElement("div",{className:"info shadow"},i.a.createElement("h1",null,"CityScopeJS"),"CityScopeJS is a unified front-end for the"," ",i.a.createElement("a",{href:"https://cityscope.media.mit.edu/"},"MIT CityScope")," ","project, an"," ",i.a.createElement("a",{href:"https://github.com/CityScope/CS_cityscopeJS"},"open-source")," ","urban modeling and simulation tool. Start by adding CityScope table name to the URL",i.a.createElement("small",null,"(in the form of: '...URL/?yourTableName') "),", for example:",i.a.createElement("br",null),i.a.createElement("a",{href:"https://cityscope.media.mit.edu/CS_cityscopeJS/?grasbrook"},"CityScopeJS Hamburg"),", or click ",i.a.createElement("a",{href:"https://cityio.media.mit.edu"}," here")," ","for a list of active CityScope tables. ",i.a.createElement("br",null),i.a.createElement("br",null)))}}]),t}(n.Component)),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleURL=function(){a.tableName=window.location.search.substring(1),""!==a.tableName?(a.setState({userEnteredCityioEndpoint:!0}),a.cityioURL=f.cityIO.baseURL+a.tableName.toString(),a.getCityIOHash(a.cityioURL+"/meta"),a.timer=setInterval((function(){return a.getCityIOHash(a.cityioURL+"/meta")}),f.cityIO.interval),console.log("starting cityIO interval every..",f.cityIO.interval)):a.setState({userEnteredCityioEndpoint:!1})},a.getCityIOHash=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){a.handleCityIOHashes(e)})).catch((function(e){console.log(e)}))},a.handleCityIOHashes=function(e){e.id!==a.state.oldHashs.id&&(a.setState({cityIOmodulesStatus:{}}),a.setState({readyToShareWithRedux:!1}),f.cityIO.cityIOmodules.forEach((function(t){e.hashes[t]!==a.state.oldHashs[t]?(a.setNestedState("cityIOmodulesStatus",t,!1),a.getCityIOmoduleData(t,a.cityioURL+"/"+t),a.setNestedState("oldHashs",t,e.hashes[t])):a.setNestedState("cityIOmodulesStatus",t,!0)})),a.setNestedState("oldHashs","id",e.id))},a.checkDoneCityIO=function(e){for(var t in a.setNestedState("cityIOmodulesStatus",e,!0),a.state.cityIOmodulesStatus)if(!0!==a.state.cityIOmodulesStatus[t])return;a.setState({readyToShareWithRedux:!0})},a.sharePropsWithRedux=function(){if(a.state.readyToShareWithRedux){var e=a.state.cityIOmodulesData;e.tableName=a.tableName,console.log("done updating from cityIO.."),a.props.getCityioData(e)}},a.setNestedState=function(e,t,n){var i=Object(m.a)({},a.state[e]);i[t]=n,a.setState(Object(T.a)({},e,i))},a.getCityIOmoduleData=function(e,t){C.a.get(t).then((function(t){a.setNestedState("cityIOmodulesData",e,t.data),console.log("...updating module:",e),a.checkDoneCityIO(e)})).catch((function(e){e.response?console.log("error.response:","\n",e.response.data,"\n",e.response.status,"\n",e.response.headers):e.request?console.log("error.request:",e.request):console.log("misc error:",e.message),console.log("request config:",e.config)}))},a.state={oldHashs:{},userEnteredCityioEndpoint:!1,cityIOmodulesData:{}},a.cityioURL=null,a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.handleURL()}},{key:"render",value:function(){return!1===this.state.userEnteredCityioEndpoint?i.a.createElement(I,null):(this.sharePropsWithRedux(),null)}}]),t}(n.Component),x={getCityioData:function(e){return{type:g,data:e}}},A=Object(h.b)(null,x)(_),N=a(182),R=a(87),L=a(385),U=a(392),P=a(257),H=a(408),B=a(390),W=a(389),z=a(407),V=a(401),Y=a(393),F=a(244),J=a.n(F),X=a(388),K=a(190),q=a(409),G=f.map.layers.ABM,Z=G.startSimHour,Q=G.endSimHour,$=new Date(1e3*(21600+Z)).getHours(),ee=new Date(1e3*(21600+Q)).getHours(),te=[{value:0,label:"12AM"},{value:6,label:"6AM"},{value:12,label:"12PM"},{value:18,label:"6PM"}],ae=Object(L.a)({root:{width:"100%"}});var ne={listenToSlidersEvents:function(e){return{type:v,data:e}}},ie=Object(h.b)((function(e){return{ABMlayerEvents:e.MAP}}),ne)((function(e){var t=ae(),a=i.a.useState([$,12,ee]),n=Object(R.a)(a,2),o=n[0],r=n[1],s=i.a.useState([50]),c=Object(R.a)(s,2),l=c[0],u=c[1];return i.a.createElement("div",{className:t.root},i.a.createElement(K.a,{id:"range-slider",gutterBottom:!0},"Simulation Range"),i.a.createElement(q.a,{min:0,max:23,marks:te,value:o,onChange:function(t,a){r(a),e.listenToSlidersEvents(Object(m.a)({},e,{SLIDERS:Object(m.a)({},e,{time:a})}))},valueLabelDisplay:"auto","aria-labelledby":"range-slider"}),i.a.createElement(K.a,{id:"range-slider",gutterBottom:!0},"Simulation Speed"),i.a.createElement(q.a,{min:0,max:100,value:l,onChange:function(t,a){u(a),e.listenToSlidersEvents(Object(m.a)({},e,{SLIDERS:Object(m.a)({},e,{speed:a})}))},valueLabelDisplay:"auto","aria-labelledby":"range-slider"}))})),oe=Object(L.a)((function(e){return{root:{padding:e.spacing(1,5),position:"fixed",bottom:"3vw",left:"3vw",width:"20vw"}}}));function re(){var e=oe();return i.a.createElement(X.a,{className:e.root},i.a.createElement(ie,null))}var se=a(391);var ce={listenToMenuUI:function(e){return{type:b,data:e}}},le=Object(h.b)((function(e){return{menuState:e.MENU}}),ce)((function(e){for(var t=Object.keys(f.menu.toggles),a=Object(L.a)((function(e){return{root:{width:"100%",maxWidth:"15em",position:"absolute","& > *":{margin:e.spacing(1)}},paper:{background:"black",color:"white"},list:{width:"15em"},fullList:{width:"auto"},menuButton:{position:"fixed",top:e.spacing(2),left:e.spacing(2)}}}))(),n=Object(P.a)({palette:{type:"dark"}}),o=i.a.useState(Object.keys(f.menu.toggles).filter((function(e){return f.menu.toggles[e]})).map(String)),r=Object(R.a)(o,2),s=r[0],c=r[1],l=i.a.useState({left:!1}),u=Object(R.a)(l,2),d=u[0],h=u[1],p=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&h(Object(m.a)({},d,Object(T.a)({},e,t)))}},g=function(t){return function(){var a=s.indexOf(t),n=Object(N.a)(s);-1===a?n.push(t):n.splice(a,1),c(n),h(Object(m.a)({},d,{checked:n})),e.listenToMenuUI(n)}},y=[],v=0;v<t.length;v++){var b=i.a.createElement(H.a,{key:t[v]},i.a.createElement(W.a,{primary:t[v]}),i.a.createElement(B.a,null,i.a.createElement(z.a,{edge:"end",onChange:g(t[v]),checked:!!e.menuState.includes(t[v])})));y.push(b)}var S;return i.a.createElement(se.a,{theme:n},i.a.createElement("div",null,i.a.createElement("div",{className:a.root},i.a.createElement(V.a,{anchor:"left",open:d.left,onClose:p("left",!1)},(S="left",i.a.createElement("div",{className:a.list,role:"presentation",onClick:p(S,!1),onKeyDown:p(S,!1)})),i.a.createElement(U.a,{className:a.root},i.a.createElement("h2",null,"cityscopeJS"),y)),i.a.createElement(Y.a,{"aria-label":"add",className:a.menuButton,onClick:p("left",!0)},i.a.createElement(J.a,null))),d.checked&&d.checked.includes("ABM")?i.a.createElement(re,null):null))})),ue=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.cityioData&&this.props.cityioData.grid?i.a.createElement(le,null):null}}]),t}(n.Component),de=Object(h.b)((function(e){return{cityioData:e.CITYIO}}),null)(ue),he=a(165),pe=a(319),me=function(e){var t=(new Date).toLocaleString("en-US",{timeZone:pe(e.spatial.latitude,e.spatial.longitude),hour:"2-digit",hour12:!1});return(new Date).getUTCHours()+24-parseInt(t)},fe=function(e){var t=f.map.types,a=e.grid,n=e.meta_grid,i=e.interactive_grid_data;if(i)for(var o=0;o<n.features.length;o++)n.features[o].properties=i[o];var r=e.interactive_grid_mapping;for(var s in r){var c=a[s][0],l=n.features[r[s]].properties;if(l.type=c,-1!==a[s][0]){var u=Object.values(t)[a[s][0]];l.color=u.color,l.height=u.height}else console.log("... got null type...")}return JSON.parse(JSON.stringify(n))},ge=function(e){for(var t=e.meta_grid,a=[],n=0;n<t.features.length;n++)a[n]={text:t.features[n].properties.height.toString(),coordinates:[t.features[n].geometry.coordinates[0][0][0],t.features[n].geometry.coordinates[0][0][1],t.features[n].properties.height+10]};return a},ye=function(e){for(var t=e.access,a=t.features.map((function(e){return e.geometry.coordinates})),n=t.features.map((function(e){return e.properties})),i=[],o=0;o<a.length;o++)i.push({coordinates:a[o],values:n[o]});return i},ve=a(256),be=a(406),Se=a(397),Oe=(a(320),a(403)),Ee=a(402),De=a(189),we=a(404),je=a(345),Me=a(240),Te=a(141),ke=["background: linear-gradient(#10B500, #0086B5)","border: 3px solid #ffffff","color: white","display: block","text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5)","line-height: 40px","text-align: center","font-weight: bold"].join(";"),Ce=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e)))._mulipleObjPicked=function(e){var t=e.x-5,n=e.y-5;return a.deckGL.pickObjects({x:t,y:n,width:10,height:10})},a._handleSelection=function(e){var t=a.state.randomType,n=a._mulipleObjPicked(e);n.forEach((function(e){var a=e.object.properties;"None"===a.land_use||a.interactive||(a.old_height=a.height,a.old_color=a.color,a.color=t.color,a.height=t.height)})),a.setState({selectedCellsState:n})},a._renderSelectionTarget=function(){if(a.props.menu.includes("EDIT")&&a.state.mousePos){var e=a.state.randomType.color,t="rgb("+e[0]+","+e[1]+","+e[2]+")",n=a.state.mousePos,o=n.clientX-15,r=n.clientY-15;return i.a.createElement("div",{style:{border:"2px solid",backgroundColor:a.state.mouseDown?"rgba("+e[0]+","+e[1]+","+e[2]+",0.6)":"rgba(0,0,0,0)",borderColor:t,color:t,borderRadius:"15%",position:"fixed",zIndex:1,pointerEvents:"none",width:30,height:30,left:o,top:r}},i.a.createElement("div",{style:{position:"relative",left:40,fontSize:"1vw"}},a.state.randomType.name))}},a._rndType=function(){var e=Object.keys(f.map.types),t=f.map.types[e[e.length*Math.random()<<0]];a.setState({randomType:t})},a._handleKeyUp=function(){a.setState({keyDownState:null})},a._handleKeyDown=function(e){a.setState({keyDownState:e.nativeEvent.key})," "===e.nativeEvent.key&&a._rndType()},a.state={menu:null,cityioData:null,draggingWhileEditing:!1,selectedCellsState:null,time:0,viewState:f.map.initialViewState},a.animationFrame=null,a._onViewStateChange=a._onViewStateChange.bind(Object(he.a)(a)),a.timeZoneOffset=me(a.props.cityioData.header),a.dirLightSettings={timestamp:Date.UTC(2019,7,1,10+a.timeZoneOffset),color:[255,255,255],intensity:1,_shadow:!0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){this.animationFrame&&window.cancelAnimationFrame(this.animationFrame)}},{key:"componentDidMount",value:function(){this._rightClickViewRotate(),this._setupEffects(),this._setViewStateToTableHeader()}},{key:"componentDidUpdate",value:function(e,t){if(e.menu!==t.menu&&(this.setState({menu:this.props.menu}),this._animate()),t.cityioData!==this.props.cityioData){console.log("%c new cityioData data to render ",ke);var a=this.props.cityioData;this.setState({cityioData:a}),this.setState({meta_grid:fe(a),gridTextData:ge(a),access:ye(a)}),this._rndType()}e.menu.includes("EDIT")&&!this.props.menu.includes("EDIT")&&function(e,t){for(var a=[],n=0;n<e.features.length;n++)a[n]=e.features[n].properties;C.a.post("https://cityio.media.mit.edu/api/table/update/"+t+"/interactive_grid_data",a).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}(this.state.meta_grid,this.props.cityioData.tableName)}},{key:"_onViewStateChange",value:function(e){var t=e.viewState;this.setState({viewState:t})}},{key:"_setViewStateToTableHeader",value:function(){var e=this.props.cityioData.header;this.setState({viewState:Object(m.a)({},this.state.viewState,{longitude:e.spatial.longitude,latitude:e.spatial.latitude,zoom:14,pitch:0,bearing:180-e.spatial.rotation})})}},{key:"_setupEffects",value:function(){var e=new je.a({color:[255,255,255],intensity:1}),t=new Me.a(this.dirLightSettings),a=new Te.a({ambientLight:e,dirLight:t});a.shadowColor=[0,0,0,.5],this._effects=[a]}},{key:"_animate",value:function(){if(window.cancelAnimationFrame(this.animationFrame),this.props.menu.includes("ABM")){var e=f.map.layers.ABM,t=e.startSimHour,a=e.animationSpeed,n=e.endSimHour,i=this.state.time+a;(this.state.time>n||this.state.time<t)&&(i=t);var o=3600*this.timeZoneOffset,r=new Date(1e3*(t+o+this.state.time));this._effects[0].directionalLights[0].timestamp=Date.UTC(r.getFullYear(),r.getMonth(),r.getDay(),r.getHours(),r.getMinutes(),r.getSeconds()),this.setState({time:i})}if(this.props.menu.includes("ROTATE")){var s=this.state.viewState.bearing?this.state.viewState.bearing:0;s<360?s+=.05:s=0,this.setState({viewState:Object(m.a)({},this.state.viewState,{bearing:s})})}this.animationFrame=window.requestAnimationFrame(this._animate.bind(this)),this.props.menu.includes("ABM")||(this._effects[0].directionalLights[0].timestamp=this.dirLightSettings.timestamp)}},{key:"_rightClickViewRotate",value:function(){document.getElementById("deckgl-wrapper").addEventListener("contextmenu",(function(e){return e.preventDefault()}))}},{key:"_renderLayers",value:function(){var e=this,t=this.props.cityioData,a=[];return this.props.menu.includes("TEXT")&&a.push(new Oe.a({id:"gridText-layer",data:this.state.gridTextData,getText:function(e){return e.text},getPosition:function(e){return e.coordinates},getColor:[255,255,255],getSize:16})),this.props.menu.includes("GRID")&&a.push(new Ee.a({id:"GRID",data:this.state.meta_grid,visible:!!this.props.menu.includes("GRID"),pickable:!0,extruded:!0,lineWidthScale:1,lineWidthMinPixels:2,getElevation:function(e){return"None"!==e.properties.land_use?e.properties.height:0},getFillColor:function(e){return void 0!==e.properties.type?e.properties.color:e.properties.color?e.properties.color:"None"!==e.properties.land_use?f.map.types[1].color:f.map.types[0].color},onClick:function(t){e.props.menu.includes("EDIT")&&"Shift"!==e.state.keyDownState&&e._handleSelection(t)},onDrag:function(t){e.props.menu.includes("EDIT")&&"Shift"!==e.state.keyDownState&&e._handleSelection(t)},onDragStart:function(){e.props.menu.includes("EDIT")&&"Shift"!==e.state.keyDownState&&e.setState({draggingWhileEditing:!0})},onDragEnd:function(){e.setState({draggingWhileEditing:!1})},updateTriggers:{getFillColor:this.state.selectedCellsState,getElevation:this.state.selectedCellsState},transitions:{getFillColor:500,getElevation:500}})),this.props.menu.includes("ABM")&&a.push(new Se.a({id:"ABM",visible:!!this.props.menu.includes("ABM"),data:t.ABM,getPath:function(e){for(var t in e.path)e.path[t][2]=20;return e.path},getTimestamps:function(e){return e.timestamps},getColor:function(e){switch(e.mode[1]){case 0:return[255,0,0];case 1:return[0,0,255];case 2:return[0,255,0];default:return[0,0,0]}},getWidth:2,opacity:.8,rounded:!0,trailLength:500,currentTime:this.state.time})),this.props.menu.includes("PATHS")&&a.push(new De.a({id:"PATHS",visible:!!this.props.menu.includes("PATHS"),_shadow:!1,data:t.ABM,getPath:function(e){var t=Math.random()<.5?5e-5*Math.random():-5e-5*Math.random();for(var a in e.path)e.path[a][0]=e.path[a][0]+t,e.path[a][1]=e.path[a][1]+t,e.path[a][2]=10;return e.path},getColor:function(e){switch(e.mode[1]){case 0:return[255,0,0];case 1:return[0,0,255];case 2:return[0,255,0];default:return[0,0,0]}},opacity:.2,getWidth:1})),this.props.menu.includes("ACCESS")&&a.push(new we.a({id:"ACCESS",visible:!!this.props.menu.includes("ACCESS"),colorRange:f.map.layers.heatmap.colors,radiusPixels:200,opacity:.25,data:this.state.access,getPosition:function(e){return e.coordinates},getWeight:function(e){return e.values.housing}})),a}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{onKeyDown:this._handleKeyDown,onKeyUp:this._handleKeyUp,onMouseMove:function(t){return e.setState({mousePos:t.nativeEvent})},onMouseUp:function(){return e.setState({mouseDown:!1})},onMouseDown:function(){return e.setState({mouseDown:!0})}},i.a.createElement("div",null,this._renderSelectionTarget()),i.a.createElement(be.a,{getCursor:function(){return e.props.menu.includes("EDIT")?"none":"all-scroll"},ref:function(t){e.deckGL=t&&t.deck},viewState:this.state.viewState,onViewStateChange:this._onViewStateChange,layers:this._renderLayers(),effects:this._effects,controller:{dragPan:!this.state.draggingWhileEditing,dragRotate:!this.state.draggingWhileEditing}},i.a.createElement(ve.a,{asyncRender:!0,dragRotate:!0,reuseMaps:!0,mapboxApiAccessToken:"pk.eyJ1IjoicmVsbm94IiwiYSI6ImNqd2VwOTNtYjExaHkzeXBzYm1xc3E3dzQifQ.X8r8nj4-baZXSsFgctQMsg",mapStyle:f.map.mapStyle.blue,preventStyleDiffing:!0})))}}]),t}(n.Component),Ie={listenToMapEvents:function(e){return{type:y,data:e}}},_e=Object(h.b)(null,Ie)(Ce),xe=a(323).solve,Ae=function(e,t){for(var a=[],n=[],i=0,o=e.length;i<o;++i){var r=Object(R.a)(e[i],2),s=r[0],c=r[1],l=Object(R.a)(t[i],2),u=l[0],d=l[1];a.push([s,c,1,0,0,0,-s*u,-c*u],[0,0,0,s,c,1,-s*d,-c*d]),n.push(u,d)}var h=xe(a,n,!0);return[h[0],h[3],0,h[6],h[1],h[4],0,h[7],0,0,1,0,h[2],h[5],0,1].map((function(e){return function(e,t){var a=Math.pow(10,t),n=e*a;return Math.round(n)/a}(e,10)}))},Ne=function(e){return"matrix3d(".concat(e.join(", "),")")},Re=function(e){return"translate(".concat(e[0],"px, ").concat(e[1],"px)")},Le={container:{width:30,height:30,borderRadius:"50%",position:"absolute",border:"4px solid white",cursor:"move"},"top-left":{left:-15,top:-15},"bottom-left":{left:-15,bottom:-15},"top-right":{top:-15,right:-15},"bottom-right":{bottom:-15,right:-15}},Ue=function(e){var t=e.position,a=e.translation,i=e.onMouseEnter,o=e.onMouseDown,r=e.onMouseUp,s=e.className,c=void 0===s?"":s,l=e.style,u=void 0===l?{}:l;return n.createElement("div",{onMouseEnter:function(){return i&&i(t)},onMouseDown:function(e){return o(e,t)},onMouseUp:function(){return r(t)},className:c,style:Object(m.a)({},Le.container,{},Le[t],{},u,{transform:Re(a)})})},Pe=a(400),He=a(399),Be=a(254),We=a.n(Be),ze=Object(L.a)((function(e){return{button:{margin:e.spacing(1),position:"fixed",top:"50vh",zIndex:1e3}}}));function Ve(){var e=ze();return i.a.createElement(He.a,{container:!0,alignItems:"center",justify:"center"},i.a.createElement(Pe.a,{variant:"contained",color:"secondary",className:e.button,startIcon:i.a.createElement(We.a,null)},"Reset Projection Mapping"))}var Ye={position:"relative"},Fe=["top-left","top-right","bottom-right","bottom-left"],Je=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Xe=function(){var e={};return Fe.forEach((function(t){e[t]=[0,0]})),e},Ke=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).container=void 0,a.layerTranslateDelta=void 0,a.anchorTranslateDelta=void 0,a.isAnchorDragging=!1,a.targetPoints=void 0,a.anchorMoving=void 0,a.state={matrix:Je,translateDelta:Xe(),sourcePoints:void 0,transformOrigin:[0,0],containerTranslate:[a.props.x||0,a.props.y||0]},a.onAnchorMouseDown=function(e,t){e.stopPropagation(),a.anchorTranslateDelta=[e.pageX-a.state.translateDelta[t][0],e.pageY-a.state.translateDelta[t][1]],a.anchorMoving=t},a.onAnchorMouseMove=function(e){if(a.anchorTranslateDelta&&a.state.sourcePoints&&a.anchorMoving){e.preventDefault(),e.stopPropagation();var t=Fe.indexOf(a.anchorMoving),n=e.pageX-a.anchorTranslateDelta[0],i=e.pageY-a.anchorTranslateDelta[1];a.targetPoints[t]=[a.state.sourcePoints[t][0]+n,a.state.sourcePoints[t][1]+i],a.setState({matrix:Ae(a.state.sourcePoints,a.targetPoints),translateDelta:Object(m.a)({},a.state.translateDelta,Object(T.a)({},a.anchorMoving,[n,i]))})}},a.onAnchorMouseUp=function(e){a.anchorTranslateDelta=void 0,a.anchorMoving=void 0},a.onMouseUp=function(){a.layerTranslateDelta=void 0},a.onMouseMove=function(e){if(a.layerTranslateDelta&&a.props.isEditMode){var t=[e.pageX-a.layerTranslateDelta[0],e.pageY-a.layerTranslateDelta[1]];a.setState({containerTranslate:t})}},a.onMouseDown=function(e){var t=a.state.containerTranslate;a.layerTranslateDelta=[e.pageX-t[0],e.pageY-t[1]]},a._clearLocalStraoge=function(){localStorage.getItem("projMap")&&localStorage.removeItem("projMap"),window.location.reload()},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){if(console.log("starting projMap..."),window.addEventListener("mousemove",this.onAnchorMouseMove),window.addEventListener("mousemove",this.onMouseMove),this.container){var e=this.container.getBoundingClientRect(),t=e.width,a=e.height,n=[[0,0],[t,0],[t,a],[0,a]];this.targetPoints=[].concat(n),this.setState({sourcePoints:n})}}},{key:"componentDidUpdate",value:function(e,t){if(!e.isEditMode&&this.props.isEditMode){if(localStorage.getItem("projMap")){console.log("loading prev. projMap...");var a=localStorage.getItem("projMap");this.setState(JSON.parse(a))}}else e.isEditMode&&!this.props.isEditMode&&(console.log("saving edited projMap..."),localStorage.setItem("projMap",JSON.stringify(t)))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mousemove",this.onAnchorMouseMove),window.removeEventListener("mousemove",this.onMouseMove)}},{key:"render",value:function(){var e=this,t=this.props,a=t.style,i=t.isEditMode,o=t.className,r=t.anchorStyle,s=t.anchorClassName,c=this.state,l=c.translateDelta,u=c.matrix,d=c.containerTranslate,h=c.transformOrigin;return n.createElement(n.Fragment,null,i&&n.createElement("div",{onClick:function(){return e._clearLocalStraoge()}},n.createElement(Ve,null)),n.createElement("div",{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,style:{cursor:i?"all-scroll":"inherit",position:"relative",display:"inline-block",transform:Re(d)}},n.createElement("div",{ref:function(t){e.container=t},style:Object(m.a)({},Ye,{},a,{pointerEvents:i?"none":"all",transform:Ne(u),transformOrigin:"".concat(h[0],"px ").concat(h[1],"px 0px")}),className:o},this.props.children),i&&n.createElement("div",null,Fe.map((function(t,a){return n.createElement(Ue,{style:r,className:s,key:t,translation:l[t],position:t,onMouseDown:e.onAnchorMouseDown,onMouseUp:e.onAnchorMouseUp})})))))}}]),t}(n.Component),qe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i))))._checkKeystone=function(){return!!a.props.menu.includes("KS")},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props&&this.props.cityioData&&this.props.cityioData.header?i.a.createElement(Ke,{style:{height:"100vh",width:"100vw"},isEditMode:this._checkKeystone()},i.a.createElement(_e,{cityioData:this.props.cityioData,menu:this.props.menu})):null}}]),t}(n.Component),Ge=Object(h.b)((function(e){return{cityioData:e.CITYIO,menu:e.MENU}}),null)(qe),Ze=a(209),Qe=(a(341),a(342),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).domain=f.radar.domain,a.colorRange=f.radar.colorRange,a.state={cityioData:{},radarData:[]},a.radarSize=700,a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"generateData",value:function(){var e={},t={};for(var a in this.domain)e[this.domain[a].name]=this.props.cityioData.grid[a][0]/10,t[this.domain[a].name]=a/this.domain.length;this.setState({radarData:[e,t]})}},{key:"componentDidMount",value:function(){console.log(">> init radar"),this.generateData()}},{key:"componentDidUpdate",value:function(e,t){t.cityioData!==this.props.cityioData&&(this.setState({cityioData:this.props.cityioData}),console.log("new radar data.."),this.generateData())}},{key:"render",value:function(){return i.a.createElement(Ze.b,{className:"Radar blur",animation:!0,data:this.state.radarData,domains:this.domain,colorRange:this.colorRange,style:{polygons:{fillOpacity:.2,strokeWidth:2},axes:{text:{opacity:0,fontWeight:700,fill:"white"},strokeWidth:0},labels:{textAnchor:"middle",fontSize:12,fontWeight:"600",fill:"white"}},margin:{left:this.radarSize/6,top:this.radarSize/6,bottom:this.radarSize/6,right:this.radarSize/6},width:this.radarSize,height:this.radarSize},i.a.createElement(Ze.a,{style:{fill:"white",fillOpacity:.1,backgroundColor:"#fff",opacity:.5,stroke:"white",width:.1},tickValues:Object(N.a)(new Array(11)).map((function(e,t){return t/10-1}))}))}}]),t}(n.Component)),$e=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.menu&&this.props.menu.includes("RADAR")&&this.props.cityioData&&this.props.cityioData.grid?i.a.createElement(Qe,{cityioData:this.props.cityioData}):null}}]),t}(n.Component),et=Object(h.b)((function(e){return{cityioData:e.CITYIO,menu:e.MENU}}),null)($e),tt=M(),at=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(h.a,{store:tt},i.a.createElement(Ge,null),i.a.createElement(A,null),i.a.createElement(et,null),i.a.createElement(de,null))}}]),t}(n.Component),nt=document.getElementById("root");r.a.render(i.a.createElement(at,null),nt)}},[[292,1,2]]]);
//# sourceMappingURL=main.7ba248be.chunk.js.map