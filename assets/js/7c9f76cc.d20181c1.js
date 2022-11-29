"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[290],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=l.createContext({}),u=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return l.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=u(n),k=r,m=p["".concat(s,".").concat(k)]||p[k]||c[k]||a;return n?l.createElement(m,i(i({ref:e},d),{},{components:n})):l.createElement(m,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96717:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var l=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],o={title:"CognitiveServices - Multivariate Anomaly Detection",hide_title:!0,status:"stable"},s="Recipe: Cognitive Services - Multivariate Anomaly Detection",u={unversionedId:"features/cognitive_services/CognitiveServices - Multivariate Anomaly Detection",id:"version-0.10.0/features/cognitive_services/CognitiveServices - Multivariate Anomaly Detection",title:"CognitiveServices - Multivariate Anomaly Detection",description:"This recipe shows how you can use SynapseML and Azure Cognitive Services on Apache Spark for multivariate anomaly detection. Multivariate anomaly detection allows for the detection of anomalies among many variables or timeseries, taking into account all the inter-correlations and dependencies between the different variables. In this scenario, we use SynapseML to train a model for multivariate anomaly detection using the Azure Cognitive Services, and we then use to the model to infer multivariate anomalies within a dataset containing synthetic measurements from three IoT sensors.",source:"@site/versioned_docs/version-0.10.0/features/cognitive_services/CognitiveServices - Multivariate Anomaly Detection.md",sourceDirName:"features/cognitive_services",slug:"/features/cognitive_services/CognitiveServices - Multivariate Anomaly Detection",permalink:"/SynapseML/docs/0.10.0/features/cognitive_services/CognitiveServices - Multivariate Anomaly Detection",draft:!1,tags:[],version:"0.10.0",frontMatter:{title:"CognitiveServices - Multivariate Anomaly Detection",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"CognitiveServices - Create a Multilingual Search Engine from Forms",permalink:"/SynapseML/docs/0.10.0/features/cognitive_services/CognitiveServices - Create a Multilingual Search Engine from Forms"},next:{title:"CognitiveServices - OpenAI",permalink:"/SynapseML/docs/0.10.0/features/cognitive_services/CognitiveServices - OpenAI"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setup",id:"setup",level:3},{value:"Create an Anomaly Detector resource",id:"create-an-anomaly-detector-resource",level:4},{value:"Create a Storage Account resource",id:"create-a-storage-account-resource",level:4},{value:"Enter your service keys",id:"enter-your-service-keys",level:4}],p={toc:c};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recipe-cognitive-services---multivariate-anomaly-detection"},"Recipe: Cognitive Services - Multivariate Anomaly Detection"),(0,a.kt)("p",null,"This recipe shows how you can use SynapseML and Azure Cognitive Services on Apache Spark for multivariate anomaly detection. Multivariate anomaly detection allows for the detection of anomalies among many variables or timeseries, taking into account all the inter-correlations and dependencies between the different variables. In this scenario, we use SynapseML to train a model for multivariate anomaly detection using the Azure Cognitive Services, and we then use to the model to infer multivariate anomalies within a dataset containing synthetic measurements from three IoT sensors. "),(0,a.kt)("p",null,"To learn more about the Anomaly Detector Cognitive Service please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cognitive-services/anomaly-detector/"}," this documentation page"),". "),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An Azure subscription - ",(0,a.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/free/"},"Create one for free"))),(0,a.kt)("h3",{id:"setup"},"Setup"),(0,a.kt)("h4",{id:"create-an-anomaly-detector-resource"},"Create an Anomaly Detector resource"),(0,a.kt)("p",null,"Follow the instructions below to create an ",(0,a.kt)("inlineCode",{parentName:"p"},"Anomaly Detector")," resource using the Azure portal or alternatively, you can also use the Azure CLI to create this resource."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the Azure Portal, click ",(0,a.kt)("inlineCode",{parentName:"li"},"Create")," in your resource group, and then type ",(0,a.kt)("inlineCode",{parentName:"li"},"Anomaly Detector"),". Click on the Anomaly Detector resource."),(0,a.kt)("li",{parentName:"ul"},"Give the resource a name, and ideally use the same region as the rest of your resource group. Use the default options for the rest, and then click ",(0,a.kt)("inlineCode",{parentName:"li"},"Review + Create")," and then ",(0,a.kt)("inlineCode",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ul"},"Once the Anomaly Detector resource is created, open it and click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Keys and Endpoints")," panel on the left. Copy the key for the Anomaly Detector resource into the ",(0,a.kt)("inlineCode",{parentName:"li"},"ANOMALY_API_KEY")," environment variable, or store it in the ",(0,a.kt)("inlineCode",{parentName:"li"},"anomalyKey")," variable in the cell below.")),(0,a.kt)("h4",{id:"create-a-storage-account-resource"},"Create a Storage Account resource"),(0,a.kt)("p",null,"In order to save intermediate data, you will need to create an Azure Blob Storage Account. Within that storage account, create a container for storing the intermediate data. Make note of the container name, and copy the connection string to that container. You will need this later to populate the ",(0,a.kt)("inlineCode",{parentName:"p"},"containerName")," variable and the ",(0,a.kt)("inlineCode",{parentName:"p"},"BLOB_CONNECTION_STRING")," environment variable."),(0,a.kt)("h4",{id:"enter-your-service-keys"},"Enter your service keys"),(0,a.kt)("p",null,"Let's start by setting up the environment variables for our service keys. The next cell sets the ",(0,a.kt)("inlineCode",{parentName:"p"},"ANOMALY_API_KEY")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"BLOB_CONNECTION_STRING")," environment variables based on the values stored in our Azure Key Vault. If you are running this in your own environment, make sure you set these environment variables before you proceed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n\n    spark = SparkSession.builder.getOrCreate()\n    from notebookutils.mssparkutils.credentials import getSecret\n\n    os.environ["ANOMALY_API_KEY"] = getSecret("mmlspark-build-keys", "anomaly-api-key")\n    os.environ["BLOB_CONNECTION_STRING"] = getSecret(\n        "mmlspark-build-keys", "madtest-connection-string"\n    )\n')),(0,a.kt)("div",{class:"ansiout"}),(0,a.kt)("p",null,"Now, lets read the ",(0,a.kt)("inlineCode",{parentName:"p"},"ANOMALY_API_KEY")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"BLOB_CONNECTION_STRING")," environment variables and set the ",(0,a.kt)("inlineCode",{parentName:"p"},"containerName")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"location")," variables."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# An Anomaly Dectector subscription key\nanomalyKey = os.environ["ANOMALY_API_KEY"]\n# A connection string to your blob storage account\nconnectionString = os.environ["BLOB_CONNECTION_STRING"]\n# The name of the container where you will store intermediate data\ncontainerName = "intermediate-data-container-name"\n# The location of the anomaly detector resource that you created\nlocation = "westus2"\n')),(0,a.kt)("div",{class:"ansiout"}),(0,a.kt)("p",null,"Let's import all the necessary modules."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nimport pandas as pd\n\nimport pyspark\nfrom pyspark.sql.functions import col\nfrom pyspark.sql.functions import lit\nfrom pyspark.sql.types import DoubleType\nimport matplotlib.pyplot as plt\n\nimport synapse.ml\nfrom synapse.ml.cognitive import *\n")),(0,a.kt)("div",{class:"ansiout"}),(0,a.kt)("p",null,"Now, let's read our sample data into a Spark DataFrame."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'df = (\n    spark.read.format("csv")\n    .option("header", "true")\n    .load("wasbs://publicwasb@mmlspark.blob.core.windows.net/MVAD/sample.csv")\n)\n\ndf = (\n    df.withColumn("sensor_1", col("sensor_1").cast(DoubleType()))\n    .withColumn("sensor_2", col("sensor_2").cast(DoubleType()))\n    .withColumn("sensor_3", col("sensor_3").cast(DoubleType()))\n)\n\n# Let\'s inspect the dataframe:\ndf.show(5)\n')),(0,a.kt)("p",null,"We can now create an ",(0,a.kt)("inlineCode",{parentName:"p"},"estimator")," object, which will be used to train our model. In the cell below, we specify the start and end times for the training data. We also specify the input columns to use, and the name of the column that contains the timestamps. Finally, we specify the number of data points to use in the anomaly detection sliding window, and we set the connection string to the Azure Blob Storage Account. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'trainingStartTime = "2020-06-01T12:00:00Z"\ntrainingEndTime = "2020-07-02T17:55:00Z"\nintermediateSaveDir = "intermediateData"\ntimestampColumn = "timestamp"\ninputColumns = ["sensor_1", "sensor_2", "sensor_3"]\n\nestimator = (\n    FitMultivariateAnomaly()\n    .setSubscriptionKey(anomalyKey)\n    .setLocation(location)\n    .setStartTime(trainingStartTime)\n    .setEndTime(trainingEndTime)\n    .setContainerName(containerName)\n    .setIntermediateSaveDir(intermediateSaveDir)\n    .setTimestampCol(timestampColumn)\n    .setInputCols(inputColumns)\n    .setSlidingWindow(200)\n    .setConnectionString(connectionString)\n)\n')),(0,a.kt)("div",{class:"ansiout"}),(0,a.kt)("p",null,"Now that we have created the ",(0,a.kt)("inlineCode",{parentName:"p"},"estimator"),", let's fit it to the data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"model = estimator.fit(df)\n")),(0,a.kt)("div",{class:"ansiout"}),(0,a.kt)("p",null,"Once the training is done, we can now use the model for inference. The code in the next cell specifies the start and end times for the data we would like to detect the anomlies in. It will then show the results."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'inferenceStartTime = "2020-07-02T18:00:00Z"\ninferenceEndTime = "2020-07-06T05:15:00Z"\n\nresult = (\n    model.setStartTime(inferenceStartTime)\n    .setEndTime(inferenceEndTime)\n    .setOutputCol("results")\n    .setErrorCol("errors")\n    .setInputCols(inputColumns)\n    .setTimestampCol(timestampColumn)\n    .transform(df)\n)\n\nresult.show(5)\n')),(0,a.kt)("p",null,"When we called ",(0,a.kt)("inlineCode",{parentName:"p"},".show(5)")," in the previous cell, it showed us the first five rows in the dataframe. The results were all ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," because they were not inside the inferrence window."),(0,a.kt)("p",null,"To show the results only for the inferred data, lets select the columns we need. We can then order the rows in the dataframe by ascending order, and filter the result to only show the rows that are in the range of the inference window. In our case ",(0,a.kt)("inlineCode",{parentName:"p"},"inferenceEndTime")," is the same as the last row in the dataframe, so can ignore that. "),(0,a.kt)("p",null,"Finally, to be able to better plot the results, lets convert the Spark dataframe to a Pandas dataframe."),(0,a.kt)("p",null,"This is what the next cell does:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'rdf = (\n    result.select(\n        "timestamp",\n        *inputColumns,\n        "results.contributors",\n        "results.isAnomaly",\n        "results.severity"\n    )\n    .orderBy("timestamp", ascending=True)\n    .filter(col("timestamp") >= lit(inferenceStartTime))\n    .toPandas()\n)\n\nrdf\n')),(0,a.kt)("div",{class:"ansiout"},"/databricks/spark/python/pyspark/sql/pandas/conversion.py:92: UserWarning: toPandas attempted Arrow optimization because 'spark.sql.execution.arrow.pyspark.enabled' is set to true; however, failed by the reason below: Unable to convert the field contributors. If this column is not necessary, you may consider dropping it or converting to primitive type before the conversion. Direct cause: Unsupported type in conversion to Arrow: ArrayType(StructType(List(StructField(contributionScore,DoubleType,true),StructField(variable,StringType,true))),true) Attempting non-optimization as 'spark.sql.execution.arrow.pyspark.fallback.enabled' is set to true. warnings.warn(msg) Out[8]: "),(0,a.kt)("div",null,(0,a.kt)("table",{border:"1",class:"dataframe"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null),(0,a.kt)("th",null,"timestamp"),(0,a.kt)("th",null,"sensor_1"),(0,a.kt)("th",null,"sensor_2"),(0,a.kt)("th",null,"sensor_3"),(0,a.kt)("th",null,"contributors"),(0,a.kt)("th",null,"isAnomaly"),(0,a.kt)("th",null,"severity"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"0"),(0,a.kt)("td",null,"2020-07-02T18:00:00Z"),(0,a.kt)("td",null,"1.069680"),(0,a.kt)("td",null,"0.393173"),(0,a.kt)("td",null,"3.129125"),(0,a.kt)("td",null,"None"),(0,a.kt)("td",null,"False"),(0,a.kt)("td",null,"0.00000")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"1"),(0,a.kt)("td",null,"2020-07-02T18:05:00Z"),(0,a.kt)("td",null,"0.932784"),(0,a.kt)("td",null,"0.214959"),(0,a.kt)("td",null,"3.077339"),(0,a.kt)("td",null,"[(0.5516611337661743, series_1), (0.3133429884..."),(0,a.kt)("td",null,"True"),(0,a.kt)("td",null,"0.06478")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"2"),(0,a.kt)("td",null,"2020-07-02T18:10:00Z"),(0,a.kt)("td",null,"1.012214"),(0,a.kt)("td",null,"0.466037"),(0,a.kt)("td",null,"2.909561"),(0,a.kt)("td",null,"None"),(0,a.kt)("td",null,"False"),(0,a.kt)("td",null,"0.00000")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"3"),(0,a.kt)("td",null,"2020-07-02T18:15:00Z"),(0,a.kt)("td",null,"1.122182"),(0,a.kt)("td",null,"0.398438"),(0,a.kt)("td",null,"3.029489"),(0,a.kt)("td",null,"None"),(0,a.kt)("td",null,"False"),(0,a.kt)("td",null,"0.00000")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"4"),(0,a.kt)("td",null,"2020-07-02T18:20:00Z"),(0,a.kt)("td",null,"1.091310"),(0,a.kt)("td",null,"0.282137"),(0,a.kt)("td",null,"2.948016"),(0,a.kt)("td",null,"None"),(0,a.kt)("td",null,"False"),(0,a.kt)("td",null,"0.00000")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"..."),(0,a.kt)("td",null,"..."),(0,a.kt)("td",null,"..."),(0,a.kt)("td",null,"..."),(0,a.kt)("td",null,"..."),(0,a.kt)("td",null,"..."),(0,a.kt)("td",null,"..."),(0,a.kt)("td",null,"...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"995"),(0,a.kt)("td",null,"2020-07-06T04:55:00Z"),(0,a.kt)("td",null,"-0.443438"),(0,a.kt)("td",null,"0.768980"),(0,a.kt)("td",null,"-0.710800"),(0,a.kt)("td",null,"None"),(0,a.kt)("td",null,"False"),(0,a.kt)("td",null,"0.00000")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"996"),(0,a.kt)("td",null,"2020-07-06T05:00:00Z"),(0,a.kt)("td",null,"-0.529400"),(0,a.kt)("td",null,"0.822140"),(0,a.kt)("td",null,"-0.944681"),(0,a.kt)("td",null,"None"),(0,a.kt)("td",null,"False"),(0,a.kt)("td",null,"0.00000")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"997"),(0,a.kt)("td",null,"2020-07-06T05:05:00Z"),(0,a.kt)("td",null,"-0.377911"),(0,a.kt)("td",null,"0.738591"),(0,a.kt)("td",null,"-0.871468"),(0,a.kt)("td",null,"None"),(0,a.kt)("td",null,"False"),(0,a.kt)("td",null,"0.00000")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"998"),(0,a.kt)("td",null,"2020-07-06T05:10:00Z"),(0,a.kt)("td",null,"-0.501993"),(0,a.kt)("td",null,"0.727775"),(0,a.kt)("td",null,"-0.786263"),(0,a.kt)("td",null,"None"),(0,a.kt)("td",null,"False"),(0,a.kt)("td",null,"0.00000")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"999"),(0,a.kt)("td",null,"2020-07-06T05:15:00Z"),(0,a.kt)("td",null,"-0.404138"),(0,a.kt)("td",null,"0.806980"),(0,a.kt)("td",null,"-0.883521"),(0,a.kt)("td",null,"None"),(0,a.kt)("td",null,"False"),(0,a.kt)("td",null,"0.00000")))),(0,a.kt)("p",null,"1000 rows \xd7 7 columns")),(0,a.kt)("p",null,"Let's now format the ",(0,a.kt)("inlineCode",{parentName:"p"},"contributors")," column that stores the contribution score from each sensor to the detected anomalies. The next cell formats this data, and splits the contribution score of each sensor into its own column."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def parse(x):\n    if type(x) is list:\n        return dict([item[::-1] for item in x])\n    else:\n        return {"series_0": 0, "series_1": 0, "series_2": 0}\n\n\nrdf["contributors"] = rdf["contributors"].apply(parse)\nrdf = pd.concat(\n    [rdf.drop(["contributors"], axis=1), pd.json_normalize(rdf["contributors"])], axis=1\n)\nrdf\n')),(0,a.kt)("div",{class:"ansiout"},"Out[9]: "),(0,a.kt)("div",null,(0,a.kt)("table",{border:"1",class:"dataframe"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null),(0,a.kt)("th",null,"timestamp"),(0,a.kt)("th",null,"sensor_1"),(0,a.kt)("th",null,"sensor_2"),(0,a.kt)("th",null,"sensor_3"),(0,a.kt)("th",null,"isAnomaly"),(0,a.kt)("th",null,"severity"),(0,a.kt)("th",null,"series_0"),(0,a.kt)("th",null,"series_1"),(0,a.kt)("th",null,"series_2"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"0"),(0,a.kt)("td",null,"2020-07-02T18:00:00Z"),(0,a.kt)("td",null,"1.069680"),(0,a.kt)("td",null,"0.393173"),(0,a.kt)("td",null,"3.129125"),(0,a.kt)("td",null,"False"),(0,a.kt)("td",null,"0.00000"),(0,a.kt)("td",null,"0.000000"),(0,a.kt)("td",null,"0.000000"),(0,a.kt)("td",null,"0.000000")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"1"),(0,a.kt)("td",null,"2020-07-02T18:05:00Z"),(0,a.kt)("td",null,"0.932784"),(0,a.kt)("td",null,"0.214959"),(0,a.kt)("td",null,"3.077339"),(0,a.kt)("td",null,"True"),(0,a.kt)("td",null,"0.06478"),(0,a.kt)("td",null,"0.313343"),(0,a.kt)("td",null,"0.551661"),(0,a.kt)("td",null,"0.134996")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"2"),(0,a.kt)("td",null,"2020-07-02T18:10:00Z"),(0,a.kt)("td",null,"1.012214"),(0,a.kt)("td",null,"0.466037"),(0,a.kt)("td",null,"2.909561"),(0,a.kt)("td",null,"False"),(0,a.kt)("td",null,"0.00000"),(0,a.kt)("td",null,"0.000000"),(0,a.kt)("td",null,"0.000000"),(0,a.kt)("td",null,"0.000000")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"3"),(0,a.kt)("td",null,"2020-07-02T18:15:00Z"),(0,a.kt)("td",null,"1.122182"),(0,a.kt)("td",null,"0.398438"),(0,a.kt)("td",null,"3.029489"),(0,a.kt)("td",null,"False"),(0,a.kt)("td",null,"0.00000"),(0,a.kt)("td",null,"0.000000"),(0,a.kt)("td",null,"0.000000"),(0,a.kt)("td",null,"0.000000")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"4"),(0,a.kt)("td",null,"2020-07-02T18:20:00Z"),(0,a.kt)("td",null,"1.091310"),(0,a.kt)("td",null,"0.282137"),(0,a.kt)("td",null,"2.948016"),(0,a.kt)("td",null,"False"),(0,a.kt)("td",null,"0.00000"),(0,a.kt)("td",null,"0.000000"),(0,a.kt)("td",null,"0.000000"),(0,a.kt)("td",null,"0.000000")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"..."),(0,a.kt)("td",null,"..."),(0,a.kt)("td",null,"..."),(0,a.kt)("td",null,"..."),(0,a.kt)("td",null,"..."),(0,a.kt)("td",null,"..."),(0,a.kt)("td",null,"..."),(0,a.kt)("td",null,"..."),(0,a.kt)("td",null,"..."),(0,a.kt)("td",null,"...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"995"),(0,a.kt)("td",null,"2020-07-06T04:55:00Z"),(0,a.kt)("td",null,"-0.443438"),(0,a.kt)("td",null,"0.768980"),(0,a.kt)("td",null,"-0.710800"),(0,a.kt)("td",null,"False"),(0,a.kt)("td",null,"0.00000"),(0,a.kt)("td",null,"0.000000"),(0,a.kt)("td",null,"0.000000"),(0,a.kt)("td",null,"0.000000")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"996"),(0,a.kt)("td",null,"2020-07-06T05:00:00Z"),(0,a.kt)("td",null,"-0.529400"),(0,a.kt)("td",null,"0.822140"),(0,a.kt)("td",null,"-0.944681"),(0,a.kt)("td",null,"False"),(0,a.kt)("td",null,"0.00000"),(0,a.kt)("td",null,"0.000000"),(0,a.kt)("td",null,"0.000000"),(0,a.kt)("td",null,"0.000000")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"997"),(0,a.kt)("td",null,"2020-07-06T05:05:00Z"),(0,a.kt)("td",null,"-0.377911"),(0,a.kt)("td",null,"0.738591"),(0,a.kt)("td",null,"-0.871468"),(0,a.kt)("td",null,"False"),(0,a.kt)("td",null,"0.00000"),(0,a.kt)("td",null,"0.000000"),(0,a.kt)("td",null,"0.000000"),(0,a.kt)("td",null,"0.000000")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"998"),(0,a.kt)("td",null,"2020-07-06T05:10:00Z"),(0,a.kt)("td",null,"-0.501993"),(0,a.kt)("td",null,"0.727775"),(0,a.kt)("td",null,"-0.786263"),(0,a.kt)("td",null,"False"),(0,a.kt)("td",null,"0.00000"),(0,a.kt)("td",null,"0.000000"),(0,a.kt)("td",null,"0.000000"),(0,a.kt)("td",null,"0.000000")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"999"),(0,a.kt)("td",null,"2020-07-06T05:15:00Z"),(0,a.kt)("td",null,"-0.404138"),(0,a.kt)("td",null,"0.806980"),(0,a.kt)("td",null,"-0.883521"),(0,a.kt)("td",null,"False"),(0,a.kt)("td",null,"0.00000"),(0,a.kt)("td",null,"0.000000"),(0,a.kt)("td",null,"0.000000"),(0,a.kt)("td",null,"0.000000")))),(0,a.kt)("p",null,"1000 rows \xd7 9 columns")),(0,a.kt)("p",null,"Great! We now have the contribution scores of sensors 1, 2, and 3 in the ",(0,a.kt)("inlineCode",{parentName:"p"},"series_0"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"series_1"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"series_2")," columns respectively. "),(0,a.kt)("p",null,"Let's run the next cell to plot the results. The ",(0,a.kt)("inlineCode",{parentName:"p"},"minSeverity")," parameter in the first line specifies the minimum severity of the anomalies to be plotted. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'minSeverity = 0.1\n\n\n####### Main Figure #######\nplt.figure(figsize=(23, 8))\nplt.plot(\n    rdf["timestamp"],\n    rdf["sensor_1"],\n    color="tab:orange",\n    line,\n    linewidth=2,\n    label="sensor_1",\n)\nplt.plot(\n    rdf["timestamp"],\n    rdf["sensor_2"],\n    color="tab:green",\n    line,\n    linewidth=2,\n    label="sensor_2",\n)\nplt.plot(\n    rdf["timestamp"],\n    rdf["sensor_3"],\n    color="tab:blue",\n    line,\n    linewidth=2,\n    label="sensor_3",\n)\nplt.grid(axis="y")\nplt.tick_params(axis="x", which="both", bottom=False, labelbottom=False)\nplt.legend()\n\nanoms = list(rdf["severity"] >= minSeverity)\n_, _, ymin, ymax = plt.axis()\nplt.vlines(np.where(anoms), ymin=ymin, ymax=ymax, color="r", alpha=0.8)\n\nplt.legend()\nplt.title(\n    "A plot of the values from the three sensors with the detected anomalies highlighted in red."\n)\nplt.show()\n\n####### Severity Figure #######\nplt.figure(figsize=(23, 1))\nplt.tick_params(axis="x", which="both", bottom=False, labelbottom=False)\nplt.plot(\n    rdf["timestamp"],\n    rdf["severity"],\n    color="black",\n    line,\n    linewidth=2,\n    label="Severity score",\n)\nplt.plot(\n    rdf["timestamp"],\n    [minSeverity] * len(rdf["severity"]),\n    color="red",\n    line,\n    linewidth=1,\n    label="minSeverity",\n)\nplt.grid(axis="y")\nplt.legend()\nplt.ylim([0, 1])\nplt.title("Severity of the detected anomalies")\nplt.show()\n\n####### Contributors Figure #######\nplt.figure(figsize=(23, 1))\nplt.tick_params(axis="x", which="both", bottom=False, labelbottom=False)\nplt.bar(\n    rdf["timestamp"], rdf["series_0"], width=2, color="tab:orange", label="sensor_1"\n)\nplt.bar(\n    rdf["timestamp"],\n    rdf["series_1"],\n    width=2,\n    color="tab:green",\n    label="sensor_2",\n    bottom=rdf["series_0"],\n)\nplt.bar(\n    rdf["timestamp"],\n    rdf["series_2"],\n    width=2,\n    color="tab:blue",\n    label="sensor_3",\n    bottom=rdf["series_0"] + rdf["series_1"],\n)\nplt.grid(axis="y")\nplt.legend()\nplt.ylim([0, 1])\nplt.title("The contribution of each sensor to the detected anomaly")\nplt.show()\n')),(0,a.kt)("img",{width:"1300",src:"https://mmlspark.blob.core.windows.net/graphics/mvad_plot.png"}),(0,a.kt)("p",null,"The plots above show the raw data from the sensors (inside the inference window) in orange, green, and blue. The red vertical lines in the first figure show the detected anomalies that have a severity greater than or equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"minSeverity"),". "),(0,a.kt)("p",null,"The second plot shows the severity score of all the detected anomalies, with the ",(0,a.kt)("inlineCode",{parentName:"p"},"minSeverity")," threshold shown in the dotted red line."),(0,a.kt)("p",null,"Finally, the last plot shows the contribution of the data from each sensor to the detected anomalies. This helps us diagnose and understand the most likely cause of each anomaly."))}k.isMDXComponent=!0}}]);