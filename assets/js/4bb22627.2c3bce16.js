"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[6095],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return b}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),b=r,d=m["".concat(i,".").concat(b)]||m[b]||p[b]||o;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(67294),r=a(86010),o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(83117),r=a(67294),o=a(86010),l=a(72389),s=a(67392),i=a(7094),u=a(12466),c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,a,l=e.lazy,m=e.block,b=e.defaultValue,d=e.values,f=e.groupId,v=e.className,w=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:w.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,s.l)(y,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===b?b:null!=(t=null!=b?b:null==(a=w.find((function(e){return e.props.default})))?void 0:a.props.value)?t:w[0].props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.U)(),_=k.tabGroupChoices,E=k.setTabGroupChoices,T=(0,r.useState)(g),C=T[0],x=T[1],V=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var O=_[f];null!=O&&O!==C&&y.some((function(e){return e.value===O}))&&x(O)}var N=function(e){var t=e.currentTarget,a=V.indexOf(t),n=y[a].value;n!==C&&(P(t),x(n),null!=f&&E(f,String(n)))},W=function(e){var t,a=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":var n,r=V.indexOf(e.currentTarget)+1;a=null!=(n=V[r])?n:V[0];break;case"ArrowLeft":var o,l=V.indexOf(e.currentTarget)-1;a=null!=(o=V[l])?o:V[V.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},v)},y.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return V.push(e)},onKeyDown:W,onClick:N},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(w.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function b(e){var t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},31989:function(e,t,a){var n=a(67294),r=a(52263);t.Z=function(e){var t=e.className,a=e.py,o=e.scala,l=e.csharp,s=e.sourceLink,i=(0,r.Z)().siteConfig.customFields.version,u="https://mmlspark.blob.core.windows.net/docs/"+i+"/pyspark/"+a,c="https://mmlspark.blob.core.windows.net/docs/"+i+"/scala/"+o,p="https://mmlspark.blob.core.windows.net/docs/"+i+"/dotnet/"+l;return n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,n.createElement("strong",null,"Python API: "),n.createElement("a",{href:u},t)),n.createElement("td",null,n.createElement("strong",null,"Scala API: "),n.createElement("a",{href:c},t)),n.createElement("td",null,n.createElement("strong",null,".NET API: "),n.createElement("a",{href:p},t)),n.createElement("td",null,n.createElement("strong",null,"Source: "),n.createElement("a",{href:s},t)))))}},49056:function(e,t,a){a.r(t),a.d(t,{assets:function(){return w},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return d},metadata:function(){return v},toc:function(){return y}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),l=a(65488),s=a(85162),i=a(31989),u=["components"],c=[{value:"VowpalWabbitRegressor",id:"vowpalwabbitregressor",level:2},{value:"VowpalWabbitContextualBandit",id:"vowpalwabbitcontextualbandit",level:2}],p={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"vowpalwabbitregressor"},"VowpalWabbitRegressor"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import *\n\nvw = (VowpalWabbitRegressor()\n      .setLabelCol("Y1")\n      .setFeaturesCol("features")\n      .setPredictionCol("pred"))\n\nvwRegressor = (VowpalWabbitRegressor()\n      .setNumPasses(20)\n      .setPassThroughArgs("--holdout_off --loss_function quantile -q :: -l 0.1"))\n'))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.vw._\n\nval vw = (new VowpalWabbitRegressor()\n  .setLabelCol("Y1")\n  .setFeaturesCol("features")\n  .setPredictionCol("pred"))\n\nval vwRegressor = (new VowpalWabbitRegressor()\n  .setNumPasses(20)\n  .setPassThroughArgs("--holdout_off --loss_function quantile -q :: -l 0.1"))\n\n')))),(0,o.kt)(i.Z,{className:"VowpalWabbitRegressor",py:"synapse.ml.vw.html#module-synapse.ml.vw.VowpalWabbitRegressor",scala:"com/microsoft/azure/synapse/ml/vw/VowpalWabbitRegressor.html",csharp:"classSynapse_1_1ML_1_1Vw_1_1VowpalWabbitRegressor.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VowpalWabbitRegressor.scala",mdxType:"DocTable"}),(0,o.kt)("h2",{id:"vowpalwabbitcontextualbandit"},"VowpalWabbitContextualBandit"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import *\n\ncb = (VowpalWabbitContextualBandit()\n      .setPassThroughArgs("--cb_explore_adf --epsilon 0.2 --quiet")\n      .setLabelCol("cost")\n      .setProbabilityCol("prob")\n      .setChosenActionCol("chosen_action")\n      .setSharedCol("shared_features")\n      .setFeaturesCol("action_features")\n      .setUseBarrierExecutionMode(False))\n'))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.vw._\n\nval cb = (new VowpalWabbitContextualBandit()\n  .setPassThroughArgs("--cb_explore_adf --epsilon 0.2 --quiet")\n  .setLabelCol("cost")\n  .setProbabilityCol("prob")\n  .setChosenActionCol("chosen_action")\n  .setSharedCol("shared_features")\n  .setFeaturesCol("action_features")\n  .setUseBarrierExecutionMode(false))\n\n')))),(0,o.kt)(i.Z,{className:"VowpalWabbitContextualBandit",py:"synapse.ml.vw.html#module-synapse.ml.vw.VowpalWabbitContextualBandit",scala:"com/microsoft/azure/synapse/ml/vw/VowpalWabbitContextualBandit.html",csharp:"classSynapse_1_1ML_1_1Vw_1_1VowpalWabbitContextualBandit.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VowpalWabbitContextualBandit.scala",mdxType:"DocTable"}))}m.isMDXComponent=!0;var b=["components"],d={title:"Estimators - Vowpal Wabbit",sidebar_label:"Vowpal Wabbit",hide_title:!0},f="Vowpal Wabbit",v={unversionedId:"documentation/estimators/estimators_vw",id:"version-0.10.2/documentation/estimators/estimators_vw",title:"Estimators - Vowpal Wabbit",description:"",source:"@site/versioned_docs/version-0.10.2/documentation/estimators/estimators_vw.md",sourceDirName:"documentation/estimators",slug:"/documentation/estimators/estimators_vw",permalink:"/SynapseML/docs/documentation/estimators/estimators_vw",draft:!1,tags:[],version:"0.10.2",frontMatter:{title:"Estimators - Vowpal Wabbit",sidebar_label:"Vowpal Wabbit",hide_title:!0},sidebar:"docs",previous:{title:"LightGBM",permalink:"/SynapseML/docs/documentation/estimators/estimators_lightgbm"},next:{title:"Introduction",permalink:"/SynapseML/docs/mlflow/introduction"}},w={},y=[].concat(c),h={toc:y};function g(e){var t=e.components,a=(0,r.Z)(e,b);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vowpal-wabbit"},"Vowpal Wabbit"),(0,o.kt)(m,{mdxType:"VW"}))}g.isMDXComponent=!0}}]);