"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[50433],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>h});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(t),h=a,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||s;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7346:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=t(83117),a=(t(67294),t(3905));const s={title:"Quickstart - Create a Visual Search Engine",hide_title:!0,status:"stable"},i=void 0,o={unversionedId:"Explore Algorithms/AI Services/Quickstart - Create a Visual Search Engine",id:"version-1.0.5/Explore Algorithms/AI Services/Quickstart - Create a Visual Search Engine",title:"Quickstart - Create a Visual Search Engine",description:"Creating a searchable Art Database with The MET's open-access collection",source:"@site/versioned_docs/version-1.0.5/Explore Algorithms/AI Services/Quickstart - Create a Visual Search Engine.md",sourceDirName:"Explore Algorithms/AI Services",slug:"/Explore Algorithms/AI Services/Quickstart - Create a Visual Search Engine",permalink:"/SynapseML/docs/Explore Algorithms/AI Services/Quickstart - Create a Visual Search Engine",draft:!1,tags:[],version:"1.0.5",frontMatter:{title:"Quickstart - Create a Visual Search Engine",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Quickstart - Analyze Text",permalink:"/SynapseML/docs/Explore Algorithms/AI Services/Quickstart - Analyze Text"},next:{title:"Quickstart - Create Audiobooks",permalink:"/SynapseML/docs/Explore Algorithms/AI Services/Quickstart - Create Audiobooks"}},c={},l=[],p={toc:l};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Creating a searchable Art Database with The MET's open-access collection"),(0,a.kt)("p",null,"In this example, we show how you can enrich data using Cognitive Skills and write to an Azure Search Index using SynapseML. We use a subset of The MET's open-access collection and enrich it by passing it through 'Describe Image' and a custom 'Image Similarity' skill. The results are then written to a searchable index."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import os, sys, time, json, requests\nfrom pyspark.sql.functions import lit, udf, col, split\nfrom synapse.ml.core.platform import *\n\nai_service_key = find_secret(\n    secret_name="ai-services-api-key", keyvault="mmlspark-build-keys"\n)\nai_service_loc = "eastus"\nazure_search_key = find_secret(\n    secret_name="azure-search-key", keyvault="mmlspark-build-keys"\n)\nsearch_service = "mmlspark-azure-search"\nsearch_index = "test"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'data = (\n    spark.read.format("csv")\n    .option("header", True)\n    .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/metartworks_sample.csv")\n    .withColumn("searchAction", lit("upload"))\n    .withColumn("Neighbors", split(col("Neighbors"), ",").cast("array<string>"))\n    .withColumn("Tags", split(col("Tags"), ",").cast("array<string>"))\n    .limit(25)\n)\n')),(0,a.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/CognitiveSearchHyperscale/MetArtworkSamples.png",width:"800"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.services import AnalyzeImage\nfrom synapse.ml.stages import SelectColumns\n\n# define pipeline\ndescribeImage = (\n    AnalyzeImage()\n    .setSubscriptionKey(ai_service_key)\n    .setLocation(ai_service_loc)\n    .setImageUrlCol("PrimaryImageUrl")\n    .setOutputCol("RawImageDescription")\n    .setErrorCol("Errors")\n    .setVisualFeatures(\n        ["Categories", "Description", "Faces", "ImageType", "Color", "Adult"]\n    )\n    .setConcurrency(5)\n)\n\ndf2 = (\n    describeImage.transform(data)\n    .select("*", "RawImageDescription.*")\n    .drop("Errors", "RawImageDescription")\n)\n')),(0,a.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/CognitiveSearchHyperscale/MetArtworksProcessed.png",width:"800"}),(0,a.kt)("p",null,"Before writing the results to a Search Index, you must define a schema which must specify the name, type, and attributes of each field in your index. Refer ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/search/search-what-is-an-index"},"Create a basic index in Azure Search")," for more information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.services import *\n\ndf2.writeToAzureSearch(\n    subscriptionKey=azure_search_key,\n    actionCol="searchAction",\n    serviceName=search_service,\n    indexName=search_index,\n    keyCol="ObjectID",\n)\n')),(0,a.kt)("p",null,"The Search Index can be queried using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/rest/api/searchservice/"},"Azure Search REST API")," by sending GET or POST requests and specifying query parameters that give the criteria for selecting matching documents. For more information on querying refer ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/rest/api/searchservice/Search-Documents"},"Query your Azure Search index using the REST API")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'url = "https://{}.search.windows.net/indexes/{}/docs/search?api-version=2019-05-06".format(\n    search_service, search_index\n)\nrequests.post(\n    url, json={"search": "Glass"}, headers={"api-key": azure_search_key}\n).json()\n')))}u.isMDXComponent=!0}}]);