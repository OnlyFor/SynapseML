"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[1126],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85899:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),l=["components"],i={title:"Introduction",description:"MLflow support of SynapseML"},s=void 0,c={unversionedId:"mlflow/introduction",id:"version-0.10.2/mlflow/introduction",title:"Introduction",description:"MLflow support of SynapseML",source:"@site/versioned_docs/version-0.10.2/mlflow/introduction.md",sourceDirName:"mlflow",slug:"/mlflow/introduction",permalink:"/SynapseML/docs/mlflow/introduction",draft:!1,tags:[],version:"0.10.2",frontMatter:{title:"Introduction",description:"MLflow support of SynapseML"},sidebar:"docs",previous:{title:"Vowpal Wabbit",permalink:"/SynapseML/docs/documentation/estimators/estimators_vw"},next:{title:"Examples",permalink:"/SynapseML/docs/mlflow/examples"}},p={},u=[{value:"What is MLflow",id:"what-is-mlflow",level:2},{value:"Installation",id:"installation",level:2}],f={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-mlflow"},"What is MLflow"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mlflow/mlflow"},"MLflow")," is a platform to streamline machine learning development, including tracking experiments, packaging code into reproducible runs, and sharing and deploying models. MLflow offers a set of lightweight APIs that can be used with any existing machine learning application or library (TensorFlow, PyTorch, XGBoost, etc), wherever you currently run ML code (e.g. in notebooks, standalone applications or the cloud). MLflow's current components are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://mlflow.org/docs/latest/tracking.html"},"MLflow Tracking"),": An API to log parameters, code, and results in machine learning experiments and compare them using an interactive UI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://mlflow.org/docs/latest/projects.html"},"MLflow Projects"),": A code packaging format for reproducible runs using Conda and Docker, so you can share your ML code with others."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://mlflow.org/docs/latest/models.html"},"MLflow Models"),": A model packaging format and tools that let you easily deploy the same model (from any ML library) to batch and real-time scoring on platforms such as Docker, Apache Spark, Azure ML and AWS SageMaker."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://mlflow.org/docs/latest/model-registry.html"},"MLflow Model Registry"),": A centralized model store, set of APIs, and UI, to collaboratively manage the full lifecycle of MLflow Models.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Install MLflow from PyPI via ",(0,a.kt)("inlineCode",{parentName:"p"},"pip install mlflow")),(0,a.kt)("p",null,"MLflow requires ",(0,a.kt)("inlineCode",{parentName:"p"},"conda")," to be on the ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," for the projects feature."),(0,a.kt)("p",null,"Learn more about MLflow on their ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mlflow/mlflow"},"GitHub page"),"."))}m.isMDXComponent=!0}}]);