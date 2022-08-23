"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[4528],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,y=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},15346:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"Overview",description:"SynapseML Overview",keywords:["SynapseML"]},c=void 0,p={permalink:"/SynapseML/blog/overview",source:"@site/blog/overview.md",title:"Overview",description:"SynapseML Overview",date:"2021-10-18T18:07:02.000Z",formattedDate:"October 18, 2021",tags:[],readingTime:.66,truncated:!0,authors:[],frontMatter:{title:"Overview",description:"SynapseML Overview",keywords:["SynapseML"]},nextItem:{title:"Publication - Large-Scale Intelligent Microservices",permalink:"/SynapseML/blog/2020/12/01/Large-Scale Intelligent Microservices"}},l={authorsImageUrls:[]},u=[],f={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Synapse Machine Learning expands the distributed computing framework ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/spark"},"Apache Spark")," in several new directions. SynapseML adds several machine learning frameworks to the SparkML Ecosystem, including ",(0,a.kt)("a",{parentName:"p",href:"/docs/features/lightgbm/about"},"LightGBM"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/features/vw/about"},"Vowpal Wabbit"),", ",(0,a.kt)("a",{parentName:"p",href:"https://opencv.org/"},"OpenCV"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/linkedin/isolation-forest"},"Isolation Forest"),", and the ",(0,a.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/research/product/cognitive-toolkit/"},"Microsoft Cognitive Toolkit (CNTK)")," . These tools allow users to craft powerful and highly-scalable models that span multiple ML ecosystems."),(0,a.kt)("p",null,"SynapseML also brings new networking capabilities to the Spark ecosystem. With the HTTP on Spark project, users can embed any web service into their SparkML models and use their Spark clusters for massive networking workflows. In this vein, SynapseML provides easy to use SparkML transformers for a wide variety of Microsoft Cognitive Services. Finally, the Spark Serving project enables high throughput, sub-millisecond latency web services, backed by your Spark cluster."),(0,a.kt)("p",null,"Visit the SynapseML Github repository to learn more."))}m.isMDXComponent=!0}}]);