"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[4359],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return h}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(t),h=a,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||s;return t?n.createElement(d,o(o({ref:r},l),{},{components:t})):n.createElement(d,o({ref:r},l))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46541:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=t(87462),a=t(63366),s=(t(67294),t(3905)),o=["components"],i={title:"AzureSearchIndex - Met Artworks",hide_title:!0,status:"stable",url_path:"features/other/AzureSearchIndex - Met Artworks",name:"AzureSearchIndex - Met Artworks"},c=void 0,p={unversionedId:"features/other/AzureSearchIndex - Met Artworks",id:"version-0.10.1/features/other/AzureSearchIndex - Met Artworks",title:"AzureSearchIndex - Met Artworks",description:"Creating a searchable Art Database with The MET's open-access collection",source:"@site/versioned_docs/version-0.10.1/features/other/AzureSearchIndex - Met Artworks.md",sourceDirName:"features/other",slug:"/features/other/AzureSearchIndex - Met Artworks",permalink:"/SynapseML/docs/features/other/AzureSearchIndex - Met Artworks",tags:[],version:"0.10.1",frontMatter:{title:"AzureSearchIndex - Met Artworks",hide_title:!0,status:"stable",url_path:"features/other/AzureSearchIndex - Met Artworks",name:"AzureSearchIndex - Met Artworks"},sidebar:"docs",previous:{title:"DeepLearning - Deep Vision Classifier",permalink:"/SynapseML/docs/features/simple_deep_learning/DeepLearning - Deep Vision Classifier"},next:{title:"ConditionalKNN - Exploring Art Across Cultures",permalink:"/SynapseML/docs/features/other/ConditionalKNN - Exploring Art Across Cultures"}},l={},u=[],m={toc:u};function h(e){var r=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",null,"Creating a searchable Art Database with The MET's open-access collection"),(0,s.kt)("p",null,"In this example, we show how you can enrich data using Cognitive Skills and write to an Azure Search Index using SynapseML. We use a subset of The MET's open-access collection and enrich it by passing it through 'Describe Image' and a custom 'Image Similarity' skill. The results are then written to a searchable index."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import os, sys, time, json, requests\nfrom pyspark.ml import Transformer, Estimator, Pipeline\nfrom pyspark.ml.feature import SQLTransformer\nfrom pyspark.sql.functions import lit, udf, col, split\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.sql import SparkSession\n\n# Bootstrap Spark Session\nspark = SparkSession.builder.getOrCreate()\n\nfrom synapse.ml.core.platform import running_on_synapse, find_secret\n\nif running_on_synapse():\n    from notebookutils.visualization import display\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'cognitive_key = find_secret("cognitive-api-key")\ncognitive_loc = "eastus"\nazure_search_key = find_secret("azure-search-key")\nsearch_service = "mmlspark-azure-search"\nsearch_index = "test"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'data = (\n    spark.read.format("csv")\n    .option("header", True)\n    .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/metartworks_sample.csv")\n    .withColumn("searchAction", lit("upload"))\n    .withColumn("Neighbors", split(col("Neighbors"), ",").cast("array<string>"))\n    .withColumn("Tags", split(col("Tags"), ",").cast("array<string>"))\n    .limit(25)\n)\n')),(0,s.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/CognitiveSearchHyperscale/MetArtworkSamples.png",width:"800"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import AnalyzeImage\nfrom synapse.ml.stages import SelectColumns\n\n# define pipeline\ndescribeImage = (\n    AnalyzeImage()\n    .setSubscriptionKey(cognitive_key)\n    .setLocation(cognitive_loc)\n    .setImageUrlCol("PrimaryImageUrl")\n    .setOutputCol("RawImageDescription")\n    .setErrorCol("Errors")\n    .setVisualFeatures(\n        ["Categories", "Description", "Faces", "ImageType", "Color", "Adult"]\n    )\n    .setConcurrency(5)\n)\n\ndf2 = (\n    describeImage.transform(data)\n    .select("*", "RawImageDescription.*")\n    .drop("Errors", "RawImageDescription")\n)\n')),(0,s.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/CognitiveSearchHyperscale/MetArtworksProcessed.png",width:"800"}),(0,s.kt)("p",null,"Before writing the results to a Search Index, you must define a schema which must specify the name, type, and attributes of each field in your index. Refer ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/search/search-what-is-an-index"},"Create a basic index in Azure Search")," for more information."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import *\n\ndf2.writeToAzureSearch(\n    subscriptionKey=azure_search_key,\n    actionCol="searchAction",\n    serviceName=search_service,\n    indexName=search_index,\n    keyCol="ObjectID",\n)\n')),(0,s.kt)("p",null,"The Search Index can be queried using the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/rest/api/searchservice/"},"Azure Search REST API")," by sending GET or POST requests and specifying query parameters that give the criteria for selecting matching documents. For more information on querying refer ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/searchservice/Search-Documents"},"Query your Azure Search index using the REST API")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'url = "https://{}.search.windows.net/indexes/{}/docs/search?api-version=2019-05-06".format(\n    search_service, search_index\n)\nrequests.post(\n    url, json={"search": "Glass"}, headers={"api-key": azure_search_key}\n).json()\n')))}h.isMDXComponent=!0}}]);