"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[28456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(83117),r=(n(67294),n(3905));const o={title:"Quickstart - Measure Heterogeneous Effects",hide_title:!0,status:"stable"},l="Startup Investment Attribution - Understand Outreach Effort's Effect\"",s={unversionedId:"Explore Algorithms/Causal Inference/Quickstart - Measure Heterogeneous Effects",id:"version-1.0.4/Explore Algorithms/Causal Inference/Quickstart - Measure Heterogeneous Effects",title:"Quickstart - Measure Heterogeneous Effects",description:"This sample notebook aims to show the application of using SynapseML's DoubleMLEstimator for inferring causality using observational data.",source:"@site/versioned_docs/version-1.0.4/Explore Algorithms/Causal Inference/Quickstart - Measure Heterogeneous Effects.md",sourceDirName:"Explore Algorithms/Causal Inference",slug:"/Explore Algorithms/Causal Inference/Quickstart - Measure Heterogeneous Effects",permalink:"/SynapseML/docs/1.0.4/Explore Algorithms/Causal Inference/Quickstart - Measure Heterogeneous Effects",draft:!1,tags:[],version:"1.0.4",frontMatter:{title:"Quickstart - Measure Heterogeneous Effects",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Quickstart - Measure Causal Effects",permalink:"/SynapseML/docs/1.0.4/Explore Algorithms/Causal Inference/Quickstart - Measure Causal Effects"},next:{title:"Quickstart - Synthetic difference in differences",permalink:"/SynapseML/docs/1.0.4/Explore Algorithms/Causal Inference/Quickstart - Synthetic difference in differences"}},i={},u=[{value:"Background",id:"background",level:2},{value:"Data",id:"data",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"startup-investment-attribution---understand-outreach-efforts-effect"},"Startup Investment Attribution - Understand Outreach Effort's Effect\""),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This sample notebook aims to show the application of using SynapseML's DoubleMLEstimator for inferring causality using observational data.")),(0,r.kt)("p",null,"A startup that sells software would like to know whether its outreach efforts were successful in attracting new customers or boosting consumption among existing customers. In other words, they would like to learn the treatment effect of each investment on customers' software usage."),(0,r.kt)("p",null,"In an ideal world, the startup would run several randomized experiments where each customer would receive a random assortment of investments. However, this can be logistically prohibitive or strategically unsound: the startup might not have the resources to design such experiments or they might not want to risk losing out on big opportunities due to lack of incentives."),(0,r.kt)("p",null,"In this customer scenario walkthrough, we show how SynapseML causal package can use historical investment data to learn the investment effect."),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"In this scenario, a startup that sells software provides discounts incentives to its customer. A customer might be given or not."),(0,r.kt)("p",null,"The startup has historical data on these investments for 2,000 customers, as well as how much revenue these customers generated in the year after the investments were made. They would like to use this data to learn the optimal incentive policy for each existing or new customer in order to maximize the return on investment (ROI)."),(0,r.kt)("p",null,"The startup faces a challenge:  the dataset is biased because historically the larger customers received the most incentives. Thus, they need a causal model that can remove the bias."),(0,r.kt)("h2",{id:"data"},"Data"),(0,r.kt)("p",null,"The data* contains ~2,000 customers and is comprised of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Customer features: details about the industry, size, revenue, and technology profile of each customer."),(0,r.kt)("li",{parentName:"ul"},"Interventions: information about which incentive was given to a customer."),(0,r.kt)("li",{parentName:"ul"},"Outcome: the amount of product the customer bought in the year after the incentives were given.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Global Flag"),(0,r.kt)("td",{parentName:"tr",align:null},"W"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the customer has global offices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Major Flag"),(0,r.kt)("td",{parentName:"tr",align:null},"W"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the customer is a large consumer in their industry (as opposed to SMC - Small Medium Corporation - or SMB - Small Medium Business)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMC Flag"),(0,r.kt)("td",{parentName:"tr",align:null},"W"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the customer is a Small Medium Corporation (SMC, as opposed to major and SMB)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Commercial Flag"),(0,r.kt)("td",{parentName:"tr",align:null},"W"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the customer's business is commercial (as opposed to public secor)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IT Spend"),(0,r.kt)("td",{parentName:"tr",align:null},"W"),(0,r.kt)("td",{parentName:"tr",align:null},"dollar spent on IT-related purchases")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Employee Count"),(0,r.kt)("td",{parentName:"tr",align:null},"W"),(0,r.kt)("td",{parentName:"tr",align:null},"number of employees")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PC Count"),(0,r.kt)("td",{parentName:"tr",align:null},"W"),(0,r.kt)("td",{parentName:"tr",align:null},"number of PCs used by the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Size"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"customer's size given by their yearly total revenue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Discount"),(0,r.kt)("td",{parentName:"tr",align:null},"T"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the customer was given a discount (binary)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Revenue"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"$ Revenue from customer given by the amount of software purchased")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Import the sample multi-attribution data\ndata = (\n    spark.read.format("csv")\n    .option("inferSchema", True)\n    .option("header", True)\n    .load(\n        "wasbs://publicwasb@mmlspark.blob.core.windows.net/multi_attribution_sample.csv"\n    )\n)\n')),(0,r.kt)("h1",{id:"get-heterogenous-causal-effects-with-synapseml-orthodml-estimator"},"Get Heterogenous Causal Effects with SynapseML OrthoDML Estimator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"data.columns\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.causal import *\nfrom pyspark.ml import Pipeline\nfrom synapse.ml.causal import *\nfrom pyspark.ml.feature import VectorAssembler\nfrom pyspark.sql.types import IntegerType, BooleanType, DateType, DoubleType\nimport matplotlib.pyplot as plt\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'treatmentColumn = "Discount"\noutcomeColumn = "Revenue"\nconfounderColumns = [\n    "Global Flag",\n    "Major Flag",\n    "SMC Flag",\n    "Commercial Flag",\n    "Employee Count",\n    "PC Count",\n]\nheteroColumns = ["Size", "IT Spend"]\nheterogeneityVecCol = "XVec"\nconfounderVecCol = "XWVec"\n\ndata = data.withColumn(treatmentColumn, data.Discount.cast(DoubleType()))\n\nheterogeneityVector = VectorAssembler(\n    inputCols=heteroColumns, outputCol=heterogeneityVecCol\n)\n\nconfounderVector = VectorAssembler(\n    inputCols=confounderColumns, outputCol=confounderVecCol\n)\n\npipeline = Pipeline(stages=[heterogeneityVector, confounderVector])\n\nppfit = pipeline.fit(data).transform(data)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"### Create the Ortho Forest DML Estimator Model\nmtTransform = (\n    OrthoForestDMLEstimator()\n    .setNumTrees(100)\n    .setTreatmentCol(treatmentColumn)\n    .setOutcomeCol(outcomeColumn)\n    .setHeterogeneityVecCol(heterogeneityVecCol)\n    .setConfounderVecCol(confounderVecCol)\n    .setMaxDepth(10)\n    .setMinSamplesLeaf(10)\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"### Fit the model for the data\nfinalModel = mtTransform.fit(ppfit)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"### Transform the input data to see the model in action\nfinalPred = finalModel.transform(ppfit)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"### Get the data in Pandas\npd_final = finalPred.toPandas()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'### Plot and see the non-linear effects\nplt.scatter("Size", mtTransform.getOutputCol(), data=pd_final)\n')))}c.isMDXComponent=!0}}]);