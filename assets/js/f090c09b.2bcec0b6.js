"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[3750],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78560:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=["components"],o={title:"LightGBM - Overview",hide_title:!0,status:"stable"},s="LightGBM",d={unversionedId:"features/lightgbm/LightGBM - Overview",id:"version-0.10.0/features/lightgbm/LightGBM - Overview",title:"LightGBM - Overview",description:"LightGBM is an open-source,",source:"@site/versioned_docs/version-0.10.0/features/lightgbm/LightGBM - Overview.md",sourceDirName:"features/lightgbm",slug:"/features/lightgbm/LightGBM - Overview",permalink:"/SynapseML/docs/0.10.0/features/lightgbm/LightGBM - Overview",draft:!1,tags:[],version:"0.10.0",frontMatter:{title:"LightGBM - Overview",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"About",permalink:"/SynapseML/docs/0.10.0/features/lightgbm/about"},next:{title:"About",permalink:"/SynapseML/docs/0.10.0/features/vw/about"}},p={},c=[{value:"Advantages of LightGBM",id:"advantages-of-lightgbm",level:3},{value:"LightGBM Usage:",id:"lightgbm-usage",level:3},{value:"Bankruptcy Prediction with LightGBM Classifier",id:"bankruptcy-prediction-with-lightgbm-classifier",level:2},{value:"Read dataset",id:"read-dataset",level:4},{value:"Split the dataset into train and test",id:"split-the-dataset-into-train-and-test",level:4},{value:"Add featurizer to convert features to vector",id:"add-featurizer-to-convert-features-to-vector",level:4},{value:"Check if the data is unbalanced",id:"check-if-the-data-is-unbalanced",level:4},{value:"Model Training",id:"model-training",level:4},{value:"Feature Importances Visualization",id:"feature-importances-visualization",level:4},{value:"Model Prediction",id:"model-prediction",level:4},{value:"Quantile Regression for Drug Discovery with LightGBMRegressor",id:"quantile-regression-for-drug-discovery-with-lightgbmregressor",level:2},{value:"Read dataset",id:"read-dataset-1",level:4},{value:"Split dataset into train and test",id:"split-dataset-into-train-and-test",level:4},{value:"Model Training",id:"model-training-1",level:4},{value:"Model Prediction",id:"model-prediction-1",level:4},{value:"LightGBM Ranker",id:"lightgbm-ranker",level:2},{value:"Read dataset",id:"read-dataset-2",level:4},{value:"Model Training",id:"model-training-2",level:4},{value:"Model Prediction",id:"model-prediction-2",level:4}],u={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lightgbm"},"LightGBM"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/LightGBM"},"LightGBM")," is an open-source,\ndistributed, high-performance gradient boosting (GBDT, GBRT, GBM, or\nMART) framework. This framework specializes in creating high-quality and\nGPU enabled decision tree algorithms for ranking, classification, and\nmany other machine learning tasks. LightGBM is part of Microsoft's\n",(0,i.kt)("a",{parentName:"p",href:"http://github.com/microsoft/dmtk"},"DMTK")," project."),(0,i.kt)("h3",{id:"advantages-of-lightgbm"},"Advantages of LightGBM"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Composability"),": LightGBM models can be incorporated into existing\nSparkML Pipelines, and used for batch, streaming, and serving\nworkloads."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Performance"),": LightGBM on Spark is 10-30% faster than SparkML on\nthe Higgs dataset, and achieves a 15% increase in AUC.  ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/LightGBM/blob/master/docs/Experiments.rst#parallel-experiment"},"Parallel\nexperiments"),"\nhave verified that LightGBM can achieve a linear speed-up by using\nmultiple machines for training in specific settings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Functionality"),": LightGBM offers a wide array of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/LightGBM/blob/master/docs/Parameters.rst"},"tunable\nparameters"),",\nthat one can use to customize their decision tree system. LightGBM on\nSpark also supports new types of problems such as quantile regression."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cross platform")," LightGBM on Spark is available on Spark, PySpark, and SparklyR")),(0,i.kt)("h3",{id:"lightgbm-usage"},"LightGBM Usage:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LightGBMClassifier: used for building classification models. For example, to predict whether a company will bankrupt or not, we could build a binary classification model with LightGBMClassifier."),(0,i.kt)("li",{parentName:"ul"},"LightGBMRegressor: used for building regression models. For example, to predict the house price, we could build a regression model with LightGBMRegressor."),(0,i.kt)("li",{parentName:"ul"},"LightGBMRanker: used for building ranking models. For example, to predict website searching result relevance, we could build a ranking model with LightGBMRanker.")),(0,i.kt)("h2",{id:"bankruptcy-prediction-with-lightgbm-classifier"},"Bankruptcy Prediction with LightGBM Classifier"),(0,i.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/Documentation/bankruptcy image.png",width:"800"}),(0,i.kt)("p",null,"In this example, we use LightGBM to build a classification model in order to predict bankruptcy."),(0,i.kt)("h4",{id:"read-dataset"},"Read dataset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n\n    spark = SparkSession.builder.getOrCreate()\n    from notebookutils.visualization import display\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'df = (\n    spark.read.format("csv")\n    .option("header", True)\n    .option("inferSchema", True)\n    .load(\n        "wasbs://publicwasb@mmlspark.blob.core.windows.net/company_bankruptcy_prediction_data.csv"\n    )\n)\n# print dataset size\nprint("records read: " + str(df.count()))\nprint("Schema: ")\ndf.printSchema()\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"display(df)\n")),(0,i.kt)("h4",{id:"split-the-dataset-into-train-and-test"},"Split the dataset into train and test"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"train, test = df.randomSplit([0.85, 0.15], seed=1)\n")),(0,i.kt)("h4",{id:"add-featurizer-to-convert-features-to-vector"},"Add featurizer to convert features to vector"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.ml.feature import VectorAssembler\n\nfeature_cols = df.columns[1:]\nfeaturizer = VectorAssembler(inputCols=feature_cols, outputCol="features")\ntrain_data = featurizer.transform(train)["Bankrupt?", "features"]\ntest_data = featurizer.transform(test)["Bankrupt?", "features"]\n')),(0,i.kt)("h4",{id:"check-if-the-data-is-unbalanced"},"Check if the data is unbalanced"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'display(train_data.groupBy("Bankrupt?").count())\n')),(0,i.kt)("h4",{id:"model-training"},"Model Training"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import LightGBMClassifier\n\nmodel = LightGBMClassifier(\n    objective="binary", featuresCol="features", labelCol="Bankrupt?", isUnbalance=True\n)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"model = model.fit(train_data)\n")),(0,i.kt)("p",null,'By calling "saveNativeModel", it allows you to extract the underlying lightGBM model for fast deployment after you train on Spark.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import LightGBMClassificationModel\n\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    model.saveNativeModel("/models/lgbmclassifier.model")\n    model = LightGBMClassificationModel.loadNativeModelFromFile(\n        "/models/lgbmclassifier.model"\n    )\nelse:\n    model.saveNativeModel("/lgbmclassifier.model")\n    model = LightGBMClassificationModel.loadNativeModelFromFile("/lgbmclassifier.model")\n')),(0,i.kt)("h4",{id:"feature-importances-visualization"},"Feature Importances Visualization"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import pandas as pd\nimport matplotlib.pyplot as plt\n\nfeature_importances = model.getFeatureImportances()\nfi = pd.Series(feature_importances, index=feature_cols)\nfi = fi.sort_values(ascending=True)\nf_index = fi.index\nf_values = fi.values\n\n# print feature importances\nprint("f_index:", f_index)\nprint("f_values:", f_values)\n\n# plot\nx_index = list(range(len(fi)))\nx_index = [x / len(fi) for x in x_index]\nplt.rcParams["figure.figsize"] = (20, 20)\nplt.barh(\n    x_index, f_values, height=0.028, align="center", color="tan", tick_label=f_index\n)\nplt.xlabel("importances")\nplt.ylabel("features")\nplt.show()\n')),(0,i.kt)("h4",{id:"model-prediction"},"Model Prediction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"predictions = model.transform(test_data)\npredictions.limit(10).toPandas()\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import ComputeModelStatistics\n\nmetrics = ComputeModelStatistics(\n    evaluationMetric="classification",\n    labelCol="Bankrupt?",\n    scoredLabelsCol="prediction",\n).transform(predictions)\ndisplay(metrics)\n')),(0,i.kt)("h2",{id:"quantile-regression-for-drug-discovery-with-lightgbmregressor"},"Quantile Regression for Drug Discovery with LightGBMRegressor"),(0,i.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/Documentation/drug.png",width:"800"}),(0,i.kt)("p",null,"In this example, we show how to use LightGBM to build a simple regression model."),(0,i.kt)("h4",{id:"read-dataset-1"},"Read dataset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'triazines = spark.read.format("libsvm").load(\n    "wasbs://publicwasb@mmlspark.blob.core.windows.net/triazines.scale.svmlight"\n)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# print some basic info\nprint("records read: " + str(triazines.count()))\nprint("Schema: ")\ntriazines.printSchema()\ndisplay(triazines.limit(10))\n')),(0,i.kt)("h4",{id:"split-dataset-into-train-and-test"},"Split dataset into train and test"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"train, test = triazines.randomSplit([0.85, 0.15], seed=1)\n")),(0,i.kt)("h4",{id:"model-training-1"},"Model Training"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import LightGBMRegressor\n\nmodel = LightGBMRegressor(\n    objective="quantile", alpha=0.2, learningRate=0.3, numLeaves=31\n).fit(train)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"print(model.getFeatureImportances())\n")),(0,i.kt)("h4",{id:"model-prediction-1"},"Model Prediction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"scoredData = model.transform(test)\ndisplay(scoredData)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import ComputeModelStatistics\n\nmetrics = ComputeModelStatistics(\n    evaluationMetric="regression", labelCol="label", scoresCol="prediction"\n).transform(scoredData)\ndisplay(metrics)\n')),(0,i.kt)("h2",{id:"lightgbm-ranker"},"LightGBM Ranker"),(0,i.kt)("h4",{id:"read-dataset-2"},"Read dataset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'df = spark.read.format("parquet").load(\n    "wasbs://publicwasb@mmlspark.blob.core.windows.net/lightGBMRanker_train.parquet"\n)\n# print some basic info\nprint("records read: " + str(df.count()))\nprint("Schema: ")\ndf.printSchema()\ndisplay(df.limit(10))\n')),(0,i.kt)("h4",{id:"model-training-2"},"Model Training"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.lightgbm import LightGBMRanker\n\nfeatures_col = "features"\nquery_col = "query"\nlabel_col = "labels"\nlgbm_ranker = LightGBMRanker(\n    labelCol=label_col,\n    featuresCol=features_col,\n    groupCol=query_col,\n    predictionCol="preds",\n    leafPredictionCol="leafPreds",\n    featuresShapCol="importances",\n    repartitionByGroupingColumn=True,\n    numLeaves=32,\n    numIterations=200,\n    evalAt=[1, 3, 5],\n    metric="ndcg",\n)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"lgbm_ranker_model = lgbm_ranker.fit(df)\n")),(0,i.kt)("h4",{id:"model-prediction-2"},"Model Prediction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'dt = spark.read.format("parquet").load(\n    "wasbs://publicwasb@mmlspark.blob.core.windows.net/lightGBMRanker_test.parquet"\n)\npredictions = lgbm_ranker_model.transform(dt)\npredictions.limit(10).toPandas()\n')))}m.isMDXComponent=!0}}]);