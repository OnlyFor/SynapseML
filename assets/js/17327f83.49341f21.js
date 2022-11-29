"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[7302],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),f=r,b=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return a?n.createElement(b,l(l({ref:t},u),{},{components:a})):n.createElement(b,l({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(67294),r=a(86010),o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(83117),r=a(67294),o=a(86010),l=a(72389),s=a(67392),i=a(7094),c=a(12466),u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,a,l=e.lazy,m=e.block,f=e.defaultValue,b=e.values,v=e.groupId,d=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=b?b:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,s.l)(w,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===f?f:null!=(t=null!=f?f:null==(a=y.find((function(e){return e.props.default})))?void 0:a.props.value)?t:y[0].props.value;if(null!==k&&!w.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.U)(),T=g.tabGroupChoices,V=g.setTabGroupChoices,_=(0,r.useState)(k),C=_[0],O=_[1],N=[],Z=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var E=T[v];null!=E&&E!==C&&w.some((function(e){return e.value===E}))&&O(E)}var z=function(e){var t=e.currentTarget,a=N.indexOf(t),n=w[a].value;n!==C&&(Z(t),O(n),null!=v&&V(v,String(n)))},I=function(e){var t,a=null;switch(e.key){case"Enter":z(e);break;case"ArrowRight":var n,r=N.indexOf(e.currentTarget)+1;a=null!=(n=N[r])?n:N[0];break;case"ArrowLeft":var o,l=N.indexOf(e.currentTarget)-1;a=null!=(o=N[l])?o:N[N.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},d)},w.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return N.push(e)},onKeyDown:I,onClick:z},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(y.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function f(e){var t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},31989:function(e,t,a){var n=a(67294),r=a(52263);t.Z=function(e){var t=e.className,a=e.py,o=e.scala,l=e.csharp,s=e.sourceLink,i=(0,r.Z)().siteConfig.customFields.version,c="https://mmlspark.blob.core.windows.net/docs/"+i+"/pyspark/"+a,u="https://mmlspark.blob.core.windows.net/docs/"+i+"/scala/"+o,p="https://mmlspark.blob.core.windows.net/docs/"+i+"/dotnet/"+l;return n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,n.createElement("strong",null,"Python API: "),n.createElement("a",{href:c},t)),n.createElement("td",null,n.createElement("strong",null,"Scala API: "),n.createElement("a",{href:u},t)),n.createElement("td",null,n.createElement("strong",null,".NET API: "),n.createElement("a",{href:p},t)),n.createElement("td",null,n.createElement("strong",null,"Source: "),n.createElement("a",{href:s},t)))))}},33624:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return v},default:function(){return k},frontMatter:function(){return b},metadata:function(){return d},toc:function(){return w}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),l=a(65488),s=a(85162),i=a(31989),c=["components"],u=[{value:"VectorZipper",id:"vectorzipper",level:2},{value:"VowpalWabbitClassifier",id:"vowpalwabbitclassifier",level:2},{value:"VowpalWabbitFeaturizer",id:"vowpalwabbitfeaturizer",level:2},{value:"VowpalWabbitInteractions",id:"vowpalwabbitinteractions",level:2}],p={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"vectorzipper"},"VectorZipper"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import *\n\ndf = spark.createDataFrame([\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f")\n], ["action1", "action2"])\n\nactionOneFeaturizer = (VowpalWabbitFeaturizer()\n    .setInputCols(["action1"])\n    .setOutputCol("sequence_one"))\n\nactionTwoFeaturizer = (VowpalWabbitFeaturizer()\n    .setInputCols(["action2"])\n    .setOutputCol("sequence_two"))\n\nseqDF = actionTwoFeaturizer.transform(actionOneFeaturizer.transform(df))\n\nvectorZipper = (VectorZipper()\n    .setInputCols(["sequence_one", "sequence_two"])\n    .setOutputCol("out"))\n\ndisplay(vectorZipper.transform(seqDF))\n'))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.vw._\n\nval df = (Seq(\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f"),\n      ("action1_f", "action2_f")\n    ).toDF("action1", "action2"))\n\nval actionOneFeaturizer = (new VowpalWabbitFeaturizer()\n    .setInputCols(Array("action1"))\n    .setOutputCol("sequence_one"))\n\nval actionTwoFeaturizer = (new VowpalWabbitFeaturizer()\n    .setInputCols(Array("action2"))\n    .setOutputCol("sequence_two"))\n\nval seqDF = actionTwoFeaturizer.transform(actionOneFeaturizer.transform(df))\n\nval vectorZipper = (new VectorZipper()\n    .setInputCols(Array("sequence_one", "sequence_two"))\n    .setOutputCol("out"))\n\ndisplay(vectorZipper.transform(seqDF))\n')))),(0,o.kt)(i.Z,{className:"VectorZipper",py:"synapse.ml.vw.html#module-synapse.ml.vw.VectorZipper",scala:"com/microsoft/azure/synapse/ml/vw/VectorZipper.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VectorZipper.scala",mdxType:"DocTable"}),(0,o.kt)("h2",{id:"vowpalwabbitclassifier"},"VowpalWabbitClassifier"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.vw import *\n\nvw = (VowpalWabbitClassifier()\n      .setNumBits(10)\n      .setLearningRate(3.1)\n      .setPowerT(0)\n      .setLabelConversion(False))\n"))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import com.microsoft.azure.synapse.ml.vw._\n\nval vw = (new VowpalWabbitClassifier()\n      .setNumBits(10)\n      .setLearningRate(3.1)\n      .setPowerT(0)\n      .setLabelConversion(false))\n")))),(0,o.kt)(i.Z,{className:"VowpalWabbitClassifier",py:"synapse.ml.vw.html#module-synapse.ml.vw.VowpalWabbitClassifier",scala:"com/microsoft/azure/synapse/ml/vw/VowpalWabbitClassifier.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VowpalWabbitClassifier.scala",mdxType:"DocTable"}),(0,o.kt)("h2",{id:"vowpalwabbitfeaturizer"},"VowpalWabbitFeaturizer"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import *\n\nfeaturizer = (VowpalWabbitFeaturizer()\n      .setStringSplitInputCols(["in"])\n      .setPreserveOrderNumBits(2)\n      .setNumBits(18)\n      .setPrefixStringsWithColumnName(False)\n      .setOutputCol("features"))\n'))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.vw._\n\nval featurizer = (new VowpalWabbitFeaturizer()\n      .setStringSplitInputCols(Array("in"))\n      .setPreserveOrderNumBits(2)\n      .setNumBits(18)\n      .setPrefixStringsWithColumnName(false)\n      .setOutputCol("features"))\n')))),(0,o.kt)(i.Z,{className:"VowpalWabbitFeaturizer",py:"synapse.ml.vw.html#module-synapse.ml.vw.VowpalWabbitFeaturizer",scala:"com/microsoft/azure/synapse/ml/vw/VowpalWabbitFeaturizer.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VowpalWabbitFeaturizer.scala",mdxType:"DocTable"}),(0,o.kt)("h2",{id:"vowpalwabbitinteractions"},"VowpalWabbitInteractions"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.vw import *\n\ninteractions = (VowpalWabbitInteractions()\n    .setInputCols(["v1"])\n    .setOutputCol("out"))\n'))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.vw._\nimport org.apache.spark.ml.linalg._\n\ncase class Data(v1: Vector, v2: Vector, v3: Vector)\n\nval df = spark.createDataFrame(Seq(Data(\n  Vectors.dense(Array(1.0, 2.0, 3.0)),\n  Vectors.sparse(8, Array(5), Array(4.0)),\n  Vectors.sparse(11, Array(8, 9), Array(7.0, 8.0))\n)))\n\nval interactions = (new VowpalWabbitInteractions()\n    .setInputCols(Array("v1"))\n    .setOutputCol("out"))\n\ndisplay(interactions.transform(df))\n')))),(0,o.kt)(i.Z,{className:"VowpalWabbitInteractions",py:"synapse.ml.vw.html#module-synapse.ml.vw.VowpalWabbitInteractions",scala:"com/microsoft/azure/synapse/ml/vw/VowpalWabbitInteractions.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/vw/src/main/scala/com/microsoft/azure/synapse/ml/vw/VowpalWabbitInteractions.scala",mdxType:"DocTable"}))}m.isMDXComponent=!0;var f=["components"],b={title:"Transformers - Vowpal Wabbit",sidebar_label:"Vowpal Wabbit",hide_title:!0},v="Vowpal Wabbit",d={unversionedId:"documentation/transformers/transformers_vw",id:"version-0.9.4/documentation/transformers/transformers_vw",title:"Transformers - Vowpal Wabbit",description:"",source:"@site/versioned_docs/version-0.9.4/documentation/transformers/transformers_vw.md",sourceDirName:"documentation/transformers",slug:"/documentation/transformers/transformers_vw",permalink:"/SynapseML/docs/0.9.4/documentation/transformers/transformers_vw",draft:!1,tags:[],version:"0.9.4",frontMatter:{title:"Transformers - Vowpal Wabbit",sidebar_label:"Vowpal Wabbit",hide_title:!0},sidebar:"version-0.9.4/docs",previous:{title:"OpenCV",permalink:"/SynapseML/docs/0.9.4/documentation/transformers/transformers_opencv"},next:{title:"Deep Learning",permalink:"/SynapseML/docs/0.9.4/documentation/transformers/transformers_deep_learning"}},y={},w=[].concat(u),h={toc:w};function k(e){var t=e.components,a=(0,r.Z)(e,f);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vowpal-wabbit"},"Vowpal Wabbit"),(0,o.kt)(m,{mdxType:"VW"}))}k.isMDXComponent=!0}}]);