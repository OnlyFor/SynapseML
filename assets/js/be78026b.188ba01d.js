"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[7359],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},84235:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),i=["components"],s={title:"CognitiveServices - Create a Multilingual Search Engine from Forms",hide_title:!0,status:"stable"},l=void 0,c={unversionedId:"features/cognitive_services/CognitiveServices - Create a Multilingual Search Engine from Forms",id:"version-0.10.0/features/cognitive_services/CognitiveServices - Create a Multilingual Search Engine from Forms",title:"CognitiveServices - Create a Multilingual Search Engine from Forms",description:"",source:"@site/versioned_docs/version-0.10.0/features/cognitive_services/CognitiveServices - Create a Multilingual Search Engine from Forms.md",sourceDirName:"features/cognitive_services",slug:"/features/cognitive_services/CognitiveServices - Create a Multilingual Search Engine from Forms",permalink:"/SynapseML/docs/0.10.0/features/cognitive_services/CognitiveServices - Create a Multilingual Search Engine from Forms",draft:!1,tags:[],version:"0.10.0",frontMatter:{title:"CognitiveServices - Create a Multilingual Search Engine from Forms",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"CognitiveServices - Celebrity Quote Analysis",permalink:"/SynapseML/docs/0.10.0/features/cognitive_services/CognitiveServices - Celebrity Quote Analysis"},next:{title:"CognitiveServices - Multivariate Anomaly Detection",permalink:"/SynapseML/docs/0.10.0/features/cognitive_services/CognitiveServices - Multivariate Anomaly Detection"}},p={},u=[],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n\n    spark = SparkSession.builder.getOrCreate()\n    from notebookutils.mssparkutils.credentials import getSecret\n\n    os.environ["VISION_API_KEY"] = getSecret("mmlspark-build-keys", "cognitive-api-key")\n    os.environ["AZURE_SEARCH_KEY"] = getSecret(\n        "mmlspark-build-keys", "azure-search-key"\n    )\n    os.environ["TRANSLATOR_KEY"] = getSecret("mmlspark-build-keys", "translator-key")\n    from notebookutils.visualization import display\n\n\nkey = os.environ["VISION_API_KEY"]\nsearch_key = os.environ["AZURE_SEARCH_KEY"]\ntranslator_key = os.environ["TRANSLATOR_KEY"]\n\nsearch_service = "mmlspark-azure-search"\nsearch_index = "form-demo-index"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql.functions import udf\nfrom pyspark.sql.types import StringType\n\n\ndef blob_to_url(blob):\n    [prefix, postfix] = blob.split("@")\n    container = prefix.split("/")[-1]\n    split_postfix = postfix.split("/")\n    account = split_postfix[0]\n    filepath = "/".join(split_postfix[1:])\n    return "https://{}/{}/{}".format(account, container, filepath)\n\n\ndf2 = (\n    spark.read.format("binaryFile")\n    .load("wasbs://ignite2021@mmlsparkdemo.blob.core.windows.net/form_subset/*")\n    .select("path")\n    .limit(10)\n    .select(udf(blob_to_url, StringType())("path").alias("url"))\n    .cache()\n)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"display(df2)\n")),(0,o.kt)("embed",{src:"https://mmlsparkdemo.blob.core.windows.net/ignite2021/form_svgs/Invoice11205.svg",width:"40%"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import AnalyzeInvoices\n\nanalyzed_df = (\n    AnalyzeInvoices()\n    .setSubscriptionKey(key)\n    .setLocation("eastus")\n    .setImageUrlCol("url")\n    .setOutputCol("invoices")\n    .setErrorCol("errors")\n    .setConcurrency(5)\n    .transform(df2)\n    .cache()\n)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"display(analyzed_df)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import FormOntologyLearner\n\norganized_df = (\n    FormOntologyLearner()\n    .setInputCol("invoices")\n    .setOutputCol("extracted")\n    .fit(analyzed_df)\n    .transform(analyzed_df)\n    .select("url", "extracted.*")\n    .cache()\n)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"display(organized_df)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql.functions import explode, col\n\nitemized_df = (\n    organized_df.select("*", explode(col("Items")).alias("Item"))\n    .drop("Items")\n    .select("Item.*", "*")\n    .drop("Item")\n)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"display(itemized_df)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'display(itemized_df.where(col("ProductCode") == 48))\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import Translate\n\ntranslated_df = (\n    Translate()\n    .setSubscriptionKey(translator_key)\n    .setLocation("eastus")\n    .setTextCol("Description")\n    .setErrorCol("TranslationError")\n    .setOutputCol("output")\n    .setToLanguage(["zh-Hans", "fr", "ru", "cy"])\n    .setConcurrency(5)\n    .transform(itemized_df)\n    .withColumn("Translations", col("output.translations")[0])\n    .drop("output", "TranslationError")\n    .cache()\n)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"display(translated_df)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import *\nfrom pyspark.sql.functions import monotonically_increasing_id, lit\n\n(\n    translated_df.withColumn("DocID", monotonically_increasing_id().cast("string"))\n    .withColumn("SearchAction", lit("upload"))\n    .writeToAzureSearch(\n        subscriptionKey=search_key,\n        actionCol="SearchAction",\n        serviceName=search_service,\n        indexName=search_index,\n        keyCol="DocID",\n    )\n)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import requests\n\nurl = "https://{}.search.windows.net/indexes/{}/docs/search?api-version=2019-05-06".format(\n    search_service, search_index\n)\nrequests.post(url, json={"search": "door"}, headers={"api-key": search_key}).json()\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"")))}d.isMDXComponent=!0}}]);