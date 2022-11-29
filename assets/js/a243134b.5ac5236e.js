"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[8616],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26924:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),s=["components"],l={title:"ONNX - Inference on Spark",hide_title:!0,status:"stable"},i=void 0,p={unversionedId:"features/onnx/ONNX - Inference on Spark",id:"version-0.9.4/features/onnx/ONNX - Inference on Spark",title:"ONNX - Inference on Spark",description:"ONNX Inference on Spark",source:"@site/versioned_docs/version-0.9.4/features/onnx/ONNX - Inference on Spark.md",sourceDirName:"features/onnx",slug:"/features/onnx/ONNX - Inference on Spark",permalink:"/SynapseML/docs/0.9.4/features/onnx/ONNX - Inference on Spark",draft:!1,tags:[],version:"0.9.4",frontMatter:{title:"ONNX - Inference on Spark",hide_title:!0,status:"stable"},sidebar:"version-0.9.4/docs",previous:{title:"About",permalink:"/SynapseML/docs/0.9.4/features/onnx/about"},next:{title:"About",permalink:"/SynapseML/docs/0.9.4/features/lightgbm/about"}},u={},c=[{value:"ONNX Inference on Spark",id:"onnx-inference-on-spark",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"onnx-inference-on-spark"},"ONNX Inference on Spark"),(0,a.kt)("p",null,"In this example, we will train a LightGBM model, convert the model to ONNX format and use the converted model to infer some testing data on Spark."),(0,a.kt)("p",null,"Python dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"onnxmltools==1.7.0"),(0,a.kt)("li",{parentName:"ul"},"lightgbm==3.2.1")),(0,a.kt)("p",null,"Load training data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'df = spark.read.format("csv")\\\n  .option("header", True)\\\n  .option("inferSchema", True)\\\n  .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/company_bankruptcy_prediction_data.csv")\n\ndisplay(df)\n')),(0,a.kt)("p",null,"Use LightGBM to train a model"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.ml.feature import VectorAssembler\nfrom synapse.ml.lightgbm import LightGBMClassifier\n\nfeature_cols = df.columns[1:]\nfeaturizer = VectorAssembler(\n    inputCols=feature_cols,\n    outputCol='features'\n)\n\ntrain_data = featurizer.transform(df)['Bankrupt?', 'features']\n\nmodel = (\n  LightGBMClassifier(featuresCol=\"features\", labelCol=\"Bankrupt?\")\n  .setEarlyStoppingRound(300)\n  .setLambdaL1(0.5)\n  .setNumIterations(1000)\n  .setNumThreads(-1)\n  .setMaxDeltaStep(0.5)\n  .setNumLeaves(31)\n  .setMaxDepth(-1)\n  .setBaggingFraction(0.7)\n  .setFeatureFraction(0.7)\n  .setBaggingFreq(2)\n  .setObjective(\"binary\")\n  .setIsUnbalance(True)\n  .setMinSumHessianInLeaf(20)\n  .setMinGainToSplit(0.01)\n)\n\nmodel = model.fit(train_data)\n")),(0,a.kt)("p",null,"Export the trained model to a LightGBM booster, convert it to ONNX format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import lightgbm as lgb\nfrom lightgbm import Booster, LGBMClassifier\n\ndef convertModel(lgbm_model: LGBMClassifier or Booster, input_size: int) -> bytes:\n  from onnxmltools.convert import convert_lightgbm\n  from onnxconverter_common.data_types import FloatTensorType\n  initial_types = [("input", FloatTensorType([-1, input_size]))]\n  onnx_model = convert_lightgbm(lgbm_model, initial_types=initial_types, target_opset=9)\n  return onnx_model.SerializeToString()\n\nbooster_model_str = model.getLightGBMBooster().modelStr().get()\nbooster = lgb.Booster(model_str=booster_model_str)\nmodel_payload_ml = convertModel(booster, len(feature_cols))\n')),(0,a.kt)("p",null,"Load the ONNX payload into an ",(0,a.kt)("inlineCode",{parentName:"p"},"ONNXModel"),", and inspect the model inputs and outputs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.onnx import ONNXModel\n\nonnx_ml = ONNXModel().setModelPayload(model_payload_ml)\n\nprint("Model inputs:" + str(onnx_ml.getModelInputs()))\nprint("Model outputs:" + str(onnx_ml.getModelOutputs()))\n')),(0,a.kt)("p",null,"Map the model input to the input dataframe's column name (FeedDict), and map the output dataframe's column names to the model outputs (FetchDict)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'onnx_ml = (\n  onnx_ml\n    .setDeviceType("CPU")\n    .setFeedDict({"input": "features"})\n    .setFetchDict({"probability": "probabilities", "prediction": "label"})\n    .setMiniBatchSize(5000)\n)\n')),(0,a.kt)("p",null,"Create some testing data and transform the data through the ONNX model."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.ml.feature import VectorAssembler\nimport pandas as pd\nimport numpy as np\n\nn = 1000 * 1000\nm = 95\ntest = np.random.rand(n, m)\ntestPdf = pd.DataFrame(test)\ncols = list(map(str, testPdf.columns))\ntestDf = spark.createDataFrame(testPdf)\ntestDf = testDf.union(testDf).repartition(200)\ntestDf = VectorAssembler().setInputCols(cols).setOutputCol("features").transform(testDf).drop(*cols).cache()\n\ndisplay(onnx_ml.transform(testDf))\n')))}d.isMDXComponent=!0}}]);