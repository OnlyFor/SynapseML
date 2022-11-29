"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[517],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91486:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),s=["components"],i={title:"TextAnalytics - Amazon Book Reviews",hide_title:!0,status:"stable"},l=void 0,c={unversionedId:"features/other/TextAnalytics - Amazon Book Reviews",id:"version-0.10.0/features/other/TextAnalytics - Amazon Book Reviews",title:"TextAnalytics - Amazon Book Reviews",description:"TextAnalytics - Amazon Book Reviews",source:"@site/versioned_docs/version-0.10.0/features/other/TextAnalytics - Amazon Book Reviews.md",sourceDirName:"features/other",slug:"/features/other/TextAnalytics - Amazon Book Reviews",permalink:"/SynapseML/docs/0.10.0/features/other/TextAnalytics - Amazon Book Reviews",draft:!1,tags:[],version:"0.10.0",frontMatter:{title:"TextAnalytics - Amazon Book Reviews",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"TextAnalytics - Amazon Book Reviews with Word2Vec",permalink:"/SynapseML/docs/0.10.0/features/other/TextAnalytics - Amazon Book Reviews with Word2Vec"},next:{title:"Cognitive",permalink:"/SynapseML/docs/0.10.0/documentation/transformers/transformers_cognitive"}},p={},u=[{value:"TextAnalytics - Amazon Book Reviews",id:"textanalytics---amazon-book-reviews",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"textanalytics---amazon-book-reviews"},"TextAnalytics - Amazon Book Reviews"),(0,o.kt)("p",null,"Again, try to predict Amazon book ratings greater than 3 out of 5, this time using\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"TextFeaturizer")," module which is a composition of several text analytics APIs that\nare native to Spark."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n\n    spark = SparkSession.builder.getOrCreate()\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'data = spark.read.parquet(\n    "wasbs://publicwasb@mmlspark.blob.core.windows.net/BookReviewsFromAmazon10K.parquet"\n)\ndata.limit(10).toPandas()\n')),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"TextFeaturizer")," to generate our features column.  We remove stop words, and use TF-IDF\nto generate 2\xb2\u2070 sparse features."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.featurize.text import TextFeaturizer\n\ntextFeaturizer = (\n    TextFeaturizer()\n    .setInputCol("text")\n    .setOutputCol("features")\n    .setUseStopWordsRemover(True)\n    .setUseIDF(True)\n    .setMinDocFreq(5)\n    .setNumFeatures(1 << 16)\n    .fit(data)\n)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"processedData = textFeaturizer.transform(data)\nprocessedData.limit(5).toPandas()\n")),(0,o.kt)("p",null,"Change the label so that we can predict whether the rating is greater than 3 using a binary\nclassifier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'processedData = processedData.withColumn("label", processedData["rating"] > 3).select(\n    ["features", "label"]\n)\nprocessedData.limit(5).toPandas()\n')),(0,o.kt)("p",null,"Train several Logistic Regression models with different regularizations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'train, test, validation = processedData.randomSplit([0.60, 0.20, 0.20])\nfrom pyspark.ml.classification import LogisticRegression\n\nlrHyperParams = [0.05, 0.1, 0.2, 0.4]\nlogisticRegressions = [\n    LogisticRegression(regParam=hyperParam) for hyperParam in lrHyperParams\n]\n\nfrom synapse.ml.train import TrainClassifier\n\nlrmodels = [\n    TrainClassifier(model=lrm, labelCol="label").fit(train)\n    for lrm in logisticRegressions\n]\n')),(0,o.kt)("p",null,"Find the model with the best AUC on the test set."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.automl import FindBestModel, BestModel\n\nbestModel = FindBestModel(evaluationMetric="AUC", models=lrmodels).fit(test)\nbestModel.getRocCurve().show()\nbestModel.getBestModelMetrics().show()\nbestModel.getAllModelMetrics().show()\n')),(0,o.kt)("p",null,"Use the optimized ",(0,o.kt)("inlineCode",{parentName:"p"},"ComputeModelStatistics")," API to find the model accuracy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import ComputeModelStatistics\n\npredictions = bestModel.transform(validation)\nmetrics = ComputeModelStatistics().transform(predictions)\nprint(\n    "Best model\'s accuracy on validation set = "\n    + "{0:.2f}%".format(metrics.first()["accuracy"] * 100)\n)\n')))}d.isMDXComponent=!0}}]);