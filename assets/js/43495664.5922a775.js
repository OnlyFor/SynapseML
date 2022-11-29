"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[936],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(n),p=i,f=m["".concat(c,".").concat(p)]||m[p]||g[p]||s;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62872:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return g}});var r=n(83117),i=n(80102),s=(n(67294),n(3905)),o=["components"],a={title:"CognitiveServices - Celebrity Quote Analysis",hide_title:!0,status:"stable"},c="Celebrity Quote Analysis with The Cognitive Services on Spark",l={unversionedId:"features/cognitive_services/CognitiveServices - Celebrity Quote Analysis",id:"version-0.10.0/features/cognitive_services/CognitiveServices - Celebrity Quote Analysis",title:"CognitiveServices - Celebrity Quote Analysis",description:"Extracting celebrity quote images using Bing Image Search on Spark",source:"@site/versioned_docs/version-0.10.0/features/cognitive_services/CognitiveServices - Celebrity Quote Analysis.md",sourceDirName:"features/cognitive_services",slug:"/features/cognitive_services/CognitiveServices - Celebrity Quote Analysis",permalink:"/SynapseML/docs/0.10.0/features/cognitive_services/CognitiveServices - Celebrity Quote Analysis",draft:!1,tags:[],version:"0.10.0",frontMatter:{title:"CognitiveServices - Celebrity Quote Analysis",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"CognitiveServices - Analyze Text",permalink:"/SynapseML/docs/0.10.0/features/cognitive_services/CognitiveServices - Analyze Text"},next:{title:"CognitiveServices - Create a Multilingual Search Engine from Forms",permalink:"/SynapseML/docs/0.10.0/features/cognitive_services/CognitiveServices - Create a Multilingual Search Engine from Forms"}},u={},g=[{value:"Extracting celebrity quote images using Bing Image Search on Spark",id:"extracting-celebrity-quote-images-using-bing-image-search-on-spark",level:3},{value:"Recognizing Images of Celebrities",id:"recognizing-images-of-celebrities",level:3},{value:"Reading the quote from the image.",id:"reading-the-quote-from-the-image",level:3},{value:"Understanding the Sentiment of the Quote",id:"understanding-the-sentiment-of-the-quote",level:3},{value:"Tying it all together",id:"tying-it-all-together",level:3}],m={toc:g};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"celebrity-quote-analysis-with-the-cognitive-services-on-spark"},"Celebrity Quote Analysis with The Cognitive Services on Spark"),(0,s.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/SparkSummit2/cog_services.png",width:"800"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import *\nfrom pyspark.ml import PipelineModel\nfrom pyspark.sql.functions import col, udf\nfrom pyspark.ml.feature import SQLTransformer\nimport os\n\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n\n    spark = SparkSession.builder.getOrCreate()\n    from notebookutils.mssparkutils.credentials import getSecret\n\n    os.environ["VISION_API_KEY"] = getSecret("mmlspark-build-keys", "cognitive-api-key")\n    os.environ["TEXT_API_KEY"] = getSecret("mmlspark-build-keys", "cognitive-api-key")\n    os.environ["BING_IMAGE_SEARCH_KEY"] = getSecret(\n        "mmlspark-build-keys", "bing-search-key"\n    )\n\n# put your service keys here\nTEXT_API_KEY = os.environ["TEXT_API_KEY"]\nVISION_API_KEY = os.environ["VISION_API_KEY"]\nBING_IMAGE_SEARCH_KEY = os.environ["BING_IMAGE_SEARCH_KEY"]\n')),(0,s.kt)("h3",{id:"extracting-celebrity-quote-images-using-bing-image-search-on-spark"},"Extracting celebrity quote images using Bing Image Search on Spark"),(0,s.kt)("p",null,"Here we define two Transformers to extract celebrity quote images."),(0,s.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/Cog%20Service%20NB/step%201.png",width:"600"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'imgsPerBatch = 10  # the number of images Bing will return for each query\noffsets = [\n    (i * imgsPerBatch,) for i in range(100)\n]  # A list of offsets, used to page into the search results\nbingParameters = spark.createDataFrame(offsets, ["offset"])\n\nbingSearch = (\n    BingImageSearch()\n    .setSubscriptionKey(BING_IMAGE_SEARCH_KEY)\n    .setOffsetCol("offset")\n    .setQuery("celebrity quotes")\n    .setCount(imgsPerBatch)\n    .setOutputCol("images")\n)\n\n# Transformer to that extracts and flattens the richly structured output of Bing Image Search into a simple URL column\ngetUrls = BingImageSearch.getUrlTransformer("images", "url")\n')),(0,s.kt)("h3",{id:"recognizing-images-of-celebrities"},"Recognizing Images of Celebrities"),(0,s.kt)("p",null,"This block identifies the name of the celebrities for each of the images returned by the Bing Image Search."),(0,s.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/Cog%20Service%20NB/step%202.png",width:"600"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'celebs = (\n    RecognizeDomainSpecificContent()\n    .setSubscriptionKey(VISION_API_KEY)\n    .setModel("celebrities")\n    .setUrl("https://eastus.api.cognitive.microsoft.com/vision/v2.0/")\n    .setImageUrlCol("url")\n    .setOutputCol("celebs")\n)\n\n# Extract the first celebrity we see from the structured response\nfirstCeleb = SQLTransformer(\n    statement="SELECT *, celebs.result.celebrities[0].name as firstCeleb FROM __THIS__"\n)\n')),(0,s.kt)("h3",{id:"reading-the-quote-from-the-image"},"Reading the quote from the image."),(0,s.kt)("p",null,"This stage performs OCR on the images to recognize the quotes."),(0,s.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/Cog%20Service%20NB/step%203.png",width:"600"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.stages import UDFTransformer\n\nrecognizeText = (\n    RecognizeText()\n    .setSubscriptionKey(VISION_API_KEY)\n    .setUrl("https://eastus.api.cognitive.microsoft.com/vision/v2.0/recognizeText")\n    .setImageUrlCol("url")\n    .setMode("Printed")\n    .setOutputCol("ocr")\n    .setConcurrency(5)\n)\n\n\ndef getTextFunction(ocrRow):\n    if ocrRow is None:\n        return None\n    return "\\n".join([line.text for line in ocrRow.recognitionResult.lines])\n\n\n# this transformer wil extract a simpler string from the structured output of recognize text\ngetText = (\n    UDFTransformer()\n    .setUDF(udf(getTextFunction))\n    .setInputCol("ocr")\n    .setOutputCol("text")\n)\n')),(0,s.kt)("h3",{id:"understanding-the-sentiment-of-the-quote"},"Understanding the Sentiment of the Quote"),(0,s.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/Cog%20Service%20NB/step4.jpg",width:"600"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'sentimentTransformer = (\n    TextSentiment()\n    .setTextCol("text")\n    .setUrl("https://eastus.api.cognitive.microsoft.com/text/analytics/v3.0/sentiment")\n    .setSubscriptionKey(TEXT_API_KEY)\n    .setOutputCol("sentiment")\n)\n\n# Extract the sentiment score from the API response body\ngetSentiment = SQLTransformer(\n    statement="SELECT *, sentiment[0].sentiment as sentimentLabel FROM __THIS__"\n)\n')),(0,s.kt)("h3",{id:"tying-it-all-together"},"Tying it all together"),(0,s.kt)("p",null,"Now that we have built the stages of our pipeline its time to chain them together into a single model that can be used to process batches of incoming data"),(0,s.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/Cog%20Service%20NB/full_pipe_2.jpg",width:"800"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.stages import SelectColumns\n\n# Select the final coulmns\ncleanupColumns = SelectColumns().setCols(\n    ["url", "firstCeleb", "text", "sentimentLabel"]\n)\n\ncelebrityQuoteAnalysis = PipelineModel(\n    stages=[\n        bingSearch,\n        getUrls,\n        celebs,\n        firstCeleb,\n        recognizeText,\n        getText,\n        sentimentTransformer,\n        getSentiment,\n        cleanupColumns,\n    ]\n)\n\ncelebrityQuoteAnalysis.transform(bingParameters).show(5)\n')))}p.isMDXComponent=!0}}]);