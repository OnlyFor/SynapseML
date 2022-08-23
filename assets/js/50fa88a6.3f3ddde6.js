"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[3907],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(a),g=r,b=p["".concat(i,".").concat(g)]||p[g]||c[g]||l;return a?n.createElement(b,s(s({ref:t},m),{},{components:a})):n.createElement(b,s({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<l;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),r=a(67294),l=a(72389),s=a(22662),o=a(86010),i="tabItem_LplD";function u(e){var t,a,l,u=e.lazy,m=e.block,c=e.defaultValue,p=e.values,g=e.groupId,b=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),d=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(d.length>0)throw new Error('Docusaurus error: Duplicate values "'+d.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.UB)(),L=v.tabGroupChoices,k=v.setTabGroupChoices,M=(0,r.useState)(y),C=M[0],T=M[1],w=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var N=L[g];null!=N&&N!==C&&h.some((function(e){return e.value===N}))&&T(N)}var G=function(e){var t=e.currentTarget,a=w.indexOf(t),n=h[a].value;n!==C&&(E(t),T(n),null!=g&&k(g,n))},B=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.currentTarget)+1;a=w[n]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;a=w[r]||w[w.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},b)},h.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return w.push(e)},onKeyDown:B,onFocus:G,onClick:G},l,{className:(0,o.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),u?(0,r.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,l.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},31989:function(e,t,a){var n=a(67294),r=a(52263);t.Z=function(e){var t=e.className,a=e.py,l=e.scala,s=e.csharp,o=e.sourceLink,i=(0,r.Z)().siteConfig.customFields.version,u="https://mmlspark.blob.core.windows.net/docs/"+i+"/pyspark/"+a,m="https://mmlspark.blob.core.windows.net/docs/"+i+"/scala/"+l,c="https://mmlspark.blob.core.windows.net/docs/"+i+"/dotnet/"+s;return n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,n.createElement("strong",null,"Python API: "),n.createElement("a",{href:u},t)),n.createElement("td",null,n.createElement("strong",null,"Scala API: "),n.createElement("a",{href:m},t)),n.createElement("td",null,n.createElement("strong",null,".NET API: "),n.createElement("a",{href:c},t)),n.createElement("td",null,n.createElement("strong",null,"Source: "),n.createElement("a",{href:o},t)))))}},20519:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return L},frontMatter:function(){return b},metadata:function(){return h},toc:function(){return y}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),s=a(9877),o=a(58215),i=a(31989),u=["components"],m=[{value:"LightGBMClassifier",id:"lightgbmclassifier",level:2},{value:"LightGBMRanker",id:"lightgbmranker",level:2},{value:"LightGBMRegressor",id:"lightgbmregressor",level:2}],c={toc:m};function p(e){var t=e.components,a=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"lightgbmclassifier"},"LightGBMClassifier"),(0,l.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import *\n\nlgbmClassifier = (LightGBMClassifier()\n      .setFeaturesCol("features")\n      .setRawPredictionCol("rawPrediction")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10)\n      .setObjective("binary")\n      .setLabelCol("labels")\n      .setLeafPredictionCol("leafPrediction")\n      .setFeaturesShapCol("featuresShap"))\n'))),(0,l.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.lightgbm._\n\nval lgbmClassifier = (new LightGBMClassifier()\n      .setFeaturesCol("features")\n      .setRawPredictionCol("rawPrediction")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10)\n      .setObjective("binary")\n      .setLabelCol("labels")\n      .setLeafPredictionCol("leafPrediction")\n      .setFeaturesShapCol("featuresShap"))\n')))),(0,l.kt)(i.Z,{className:"LightGBMClassifier",py:"synapse.ml.lightgbm.html#module-synapse.ml.lightgbm.LightGBMClassifier",scala:"com/microsoft/azure/synapse/ml/lightgbm/LightGBMClassifier.html",csharp:"classSynapse_1_1ML_1_1Lightgbm_1_1LightGBMClassifier.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/lightgbm/src/main/scala/com/microsoft/azure/synapse/ml/lightgbm/LightGBMClassifier.scala",mdxType:"DocTable"}),(0,l.kt)("h2",{id:"lightgbmranker"},"LightGBMRanker"),(0,l.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import *\n\nlgbmRanker = (LightGBMRanker()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setGroupCol("query")\n      .setDefaultListenPort(12402)\n      .setRepartitionByGroupingColumn(False)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n'))),(0,l.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.lightgbm._\n\nval lgbmRanker = (new LightGBMRanker()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setGroupCol("query")\n      .setDefaultListenPort(12402)\n      .setRepartitionByGroupingColumn(false)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n')))),(0,l.kt)(i.Z,{className:"LightGBMRanker",py:"synapse.ml.lightgbm.html#module-synapse.ml.lightgbm.LightGBMRanker",scala:"com/microsoft/azure/synapse/ml/lightgbm/LightGBMRanker.html",csharp:"classSynapse_1_1ML_1_1Lightgbm_1_1LightGBMRanker.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/lightgbm/src/main/scala/com/microsoft/azure/synapse/ml/lightgbm/LightGBMRanker.scala",mdxType:"DocTable"}),(0,l.kt)("h2",{id:"lightgbmregressor"},"LightGBMRegressor"),(0,l.kt)(s.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import *\n\nlgbmRegressor = (LightGBMRegressor()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n'))),(0,l.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.lightgbm._\n\nval lgbmRegressor = (new LightGBMRegressor()\n      .setLabelCol("labels")\n      .setFeaturesCol("features")\n      .setDefaultListenPort(12402)\n      .setNumLeaves(5)\n      .setNumIterations(10))\n')))),(0,l.kt)(i.Z,{className:"LightGBMRegressor",py:"synapse.ml.lightgbm.html#module-synapse.ml.lightgbm.LightGBMRegressor",scala:"com/microsoft/azure/synapse/ml/lightgbm/LightGBMRegressor.html",csharp:"classSynapse_1_1ML_1_1Lightgbm_1_1LightGBMRegressor.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/lightgbm/src/main/scala/com/microsoft/azure/synapse/ml/lightgbm/LightGBMRegressor.scala",mdxType:"DocTable"}))}p.isMDXComponent=!0;var g=["components"],b={title:"Estimators - LightGBM",sidebar_label:"LightGBM",hide_title:!0},f="LightGBM",h={unversionedId:"documentation/estimators/estimators_lightgbm",id:"version-0.10.0/documentation/estimators/estimators_lightgbm",title:"Estimators - LightGBM",description:"",source:"@site/versioned_docs/version-0.10.0/documentation/estimators/estimators_lightgbm.md",sourceDirName:"documentation/estimators",slug:"/documentation/estimators/estimators_lightgbm",permalink:"/SynapseML/docs/0.10.0/documentation/estimators/estimators_lightgbm",tags:[],version:"0.10.0",frontMatter:{title:"Estimators - LightGBM",sidebar_label:"LightGBM",hide_title:!0},sidebar:"docs",previous:{title:"Core",permalink:"/SynapseML/docs/0.10.0/documentation/estimators/estimators_core"},next:{title:"Vowpal Wabbit",permalink:"/SynapseML/docs/0.10.0/documentation/estimators/estimators_vw"}},d={},y=[].concat(m),v={toc:y};function L(e){var t=e.components,a=(0,r.Z)(e,g);return(0,l.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lightgbm"},"LightGBM"),(0,l.kt)(p,{mdxType:"LightGBM"}))}L.isMDXComponent=!0}}]);