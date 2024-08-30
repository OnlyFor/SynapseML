"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[77381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,g=m["".concat(d,".").concat(u)]||m[u]||c[u]||s;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(83117),a=(n(67294),n(3905));const s={title:"Quickstart - Custom Embeddings and Approximate KNN on GPU",hide_title:!0,status:"stable"},i="Embedding Text with local (per node) NVIDIA TensorRT accelerator and GPU based Aproximate Nearest Neighbor (ANN)",o={unversionedId:"Explore Algorithms/OpenAI/Quickstart - Custom Embeddings and Approximate KNN on GPU",id:"version-1.0.5/Explore Algorithms/OpenAI/Quickstart - Custom Embeddings and Approximate KNN on GPU",title:"Quickstart - Custom Embeddings and Approximate KNN on GPU",description:"The demo extending existing Azure OpenAI based demo when encoding is processed by OpenAI requests and KNN was using GPU based brute force search. This tutorial shows how to perform fast local embeddings using multilingual E5 text embeddings and fast aproximate Nearest Neighbor search using IVFFlat alcorithm. All tutorial stages accelerated by NVIDIA GPU using NVIDIA TensorRT and Spark Rapids ML. The tutorial folder contains two benchmark notebooks to demonstrate advantages of the presented GPU based approach compare to previos CPU based demo",source:"@site/versioned_docs/version-1.0.5/Explore Algorithms/OpenAI/Quickstart - Custom Embeddings and Approximate KNN on GPU.md",sourceDirName:"Explore Algorithms/OpenAI",slug:"/Explore Algorithms/OpenAI/Quickstart - Custom Embeddings and Approximate KNN on GPU",permalink:"/SynapseML/docs/Explore Algorithms/OpenAI/Quickstart - Custom Embeddings and Approximate KNN on GPU",draft:!1,tags:[],version:"1.0.5",frontMatter:{title:"Quickstart - Custom Embeddings and Approximate KNN on GPU",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Quickstart - OpenAI Embedding and GPU based KNN",permalink:"/SynapseML/docs/Explore Algorithms/OpenAI/Quickstart - OpenAI Embedding and GPU based KNN"},next:{title:"Quickstart - Understand and Search Forms",permalink:"/SynapseML/docs/Explore Algorithms/OpenAI/Quickstart - Understand and Search Forms"}},d={},l=[{value:"Step 1: Prepare Environment",id:"step-1-prepare-environment",level:2},{value:"Step 2: Load Input Data",id:"step-2-load-input-data",level:2},{value:"Step 3: Generate Embeddings",id:"step-3-generate-embeddings",level:2},{value:"Step 4: Build the query against embeddings",id:"step-4-build-the-query-against-embeddings",level:2},{value:"Step 5: Build a fast vector index to over review embeddings",id:"step-5-build-a-fast-vector-index-to-over-review-embeddings",level:2},{value:"Step 6: Find top k Nearest Neighbors ON GPU",id:"step-6-find-top-k-nearest-neighbors-on-gpu",level:2},{value:"Step 7: Collect and display results",id:"step-7-collect-and-display-results",level:2}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"embedding-text-with-local-per-node-nvidia-tensorrt-accelerator-and-gpu-based-aproximate-nearest-neighbor-ann"},"Embedding Text with local (per node) NVIDIA TensorRT accelerator and GPU based Aproximate Nearest Neighbor (ANN)"),(0,a.kt)("p",null,"The demo extending existing ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/SynapseML/blob/master/docs/Explore%20Algorithms/OpenAI/Quickstart%20-%20OpenAI%20Embedding%20and%20GPU%20based%20KNN.ipynb"},"Azure OpenAI based demo")," when encoding is processed by OpenAI requests and KNN was using GPU based brute force search. This tutorial shows how to perform fast local embeddings using ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2402.05672"},"multilingual E5 text embeddings")," and fast aproximate Nearest Neighbor search using IVFFlat alcorithm. All tutorial stages accelerated by NVIDIA GPU using ",(0,a.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/tensorrt"},"NVIDIA TensorRT")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NVIDIA/spark-rapids-ml"},"Spark Rapids ML"),". The tutorial folder contains two benchmark notebooks to demonstrate advantages of the presented GPU based approach compare to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/SynapseML/blob/master/docs/Explore%20Algorithms/OpenAI/Quickstart%20-%20OpenAI%20Embedding.ipynb"},"previos CPU based demo")),(0,a.kt)("p",null,"The key prerequisites for this quickstart include a working Azure OpenAI resource, and an Apache Spark cluster with SynapseML installed. We suggest creating a Synapse workspace, but currently the notebook was running on Databricks GPU based cluster using Standard_NC24ads_A100_v4 with 6 workers. Databricks Runtime was 13.3 LTS ML (includes Apache Spark 3.4.1, GPU, Scala 2.12) with related ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/SynapseML/tree/master/tools/init_scripts"},"init_script")," to install all required packages."),(0,a.kt)("h2",{id:"step-1-prepare-environment"},"Step 1: Prepare Environment"),(0,a.kt)("p",null,"It will imports required libraries and get initial settings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import torch\nimport sys\nimport pyspark.sql.functions as F\nfrom pyspark.sql.types import StructType, StructField, IntegerType, StringType\nfrom pyspark.ml.linalg import Vectors\nfrom pyspark.ml.linalg import VectorUDT\nfrom spark_rapids_ml.knn import (\n    ApproximateNearestNeighbors,\n    ApproximateNearestNeighborsModel,\n)\nfrom synapse.ml.hf import HuggingFaceSentenceEmbedder\nfrom synapse.ml.nn import KNN\n")),(0,a.kt)("h2",{id:"step-2-load-input-data"},"Step 2: Load Input Data"),(0,a.kt)("p",null,"It will load public dataset and generate extra syntetic rows if set by size parameter"),(0,a.kt)("p",null,"The loaded dataset has 1000 rows. If you specify ",(0,a.kt)("i",null,"number_of_input_rows")," in ","[1..1000]"," it will cut extra rows if needed"),(0,a.kt)("p",null,"If ",(0,a.kt)("i",null,"number_of_input_rows")," in ","[1000..1000000]"," it will generate extra rows using cross join of original data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'file_path = "wasbs://publicwasb@mmlspark.blob.core.windows.net/fine_food_reviews_1k.csv"\n\ndf = spark.read.options(inferSchema="True", delimiter=",", header=True).csv(file_path)\ndf = df.withColumn(\n    "data",\n    F.format_string("Title: %s; Content: %s", F.trim(df.Summary), F.trim(df.Text)),\n)\n\n# Size of DF\nnumber_of_input_rows = 100\n\n\n# Check if the row count is less than 10\nif number_of_input_rows <= 0 or number_of_input_rows >= 1000000:\n    raise ValueError(f"Limit is {number_of_input_rows}, which should be less than 1M.")\n\nif number_of_input_rows > 1000:\n\n    # Cross-join the DataFrame with itself to create n x n pairs for string concatenation (synthetic data)\n    cross_joined_df = df.crossJoin(df.withColumnRenamed("data", "data_"))\n\n    # Create a new column \'result_vector\' by concatenating the two source vectors\n    tmp_df = cross_joined_df.withColumn(\n        "result_vector",\n        F.concat(F.col("data"), F.lit(". \\n"), F.col("data_")),\n    )\n\n    # Select only the necessary columns and show the result\n    tmp_df = tmp_df.select("result_vector")\n\n    # Shuffle the DataFrame with a fixed seed to have close strings spreaded\n    seed = 42\n\n    df = (\n        tmp_df.withColumnRenamed("result_vector", "data")\n        .withColumn("id", F.monotonically_increasing_id())\n        .orderBy(F.rand(seed))\n    )\n\ndf = df.limit(number_of_input_rows).repartition(10).cache()\n\nprint(f"Loaded: {number_of_input_rows} rows")\n')),(0,a.kt)("h2",{id:"step-3-generate-embeddings"},"Step 3: Generate Embeddings"),(0,a.kt)("p",null,'We will first generate embeddings using NVIDIA TensorRT optimized SentenceTransformer. In the demo you can use two fifferent HF models: intfloat/e5-large-v2 or sentence-transformers/all-MiniLM-L6-v2"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# To create embedder with different models, uncomment the following line\n# embedder = HuggingFaceSentenceEmbedder(modelName="intfloat/e5-large-v2", inputCol="data", outputCol="embeddings", runtime="tensorrt")\nembedder = HuggingFaceSentenceEmbedder(\n    modelName="sentence-transformers/all-MiniLM-L6-v2",\n    inputCol="data",\n    outputCol="embeddings",\n    runtime="tensorrt",\n)\n\nembeddings = embedder.transform(df).select("id", "embeddings").cache()\n')),(0,a.kt)("h2",{id:"step-4-build-the-query-against-embeddings"},"Step 4: Build the query against embeddings"),(0,a.kt)("p",null,"Get query embeddings running standard SentenceTransformer just on the driver. Convert embedding results to a data frame"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Sample query\nqueries = ["desserts", "disgusting"]\nids = [1, 2]\n\n# Create DataFrame directly from the data and schema\nquery_df = spark.createDataFrame(\n    list(zip(ids, queries)),\n    StructType(\n        [\n            StructField("id", IntegerType(), nullable=False),\n            StructField("data", StringType(), nullable=False),\n        ]\n    ),\n)\n\nquery_embeddings = embedder.transform(query_df).select("id", "embeddings").cache()\n')),(0,a.kt)("h2",{id:"step-5-build-a-fast-vector-index-to-over-review-embeddings"},"Step 5: Build a fast vector index to over review embeddings"),(0,a.kt)("p",null,"We will use fast NVIDIA Rapids indexer. This KNN implementation will work only on GPU. If you want to use CPU then switch to synapse.ml.nn CPU based KNN implementation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"RUN_ON_GPU = torch.cuda.is_available()\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'if RUN_ON_GPU:\n    rapids_knn_model = (\n        ApproximateNearestNeighbors(k=5)\n        .setInputCol("embeddings")\n        .setIdCol("id")\n        .fit(embeddings)\n    )\nelse:\n    array_to_vector_udf = udf(lambda array: Vectors.dense(array), VectorUDT())\n    df_with_vectors = embeddings.withColumn(\n        "features", array_to_vector_udf(embeddings["embeddings"])\n    )\n    knn = (\n        KNN()\n        .setFeaturesCol("features")\n        .setValuesCol("id")\n        .setOutputCol("output")\n        .setK(10)\n    )\n    knn_model = knn.fit(df_with_vectors)\n')),(0,a.kt)("h2",{id:"step-6-find-top-k-nearest-neighbors-on-gpu"},"Step 6: Find top k Nearest Neighbors ON GPU"),(0,a.kt)("p",null,"We will use fast ANN ",(0,a.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/blog/accelerated-vector-search-approximating-with-rapids-raft-ivf-flat/"},"IVFFlat algorithm")," from Rapids"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'if RUN_ON_GPU:\n    (_, _, knn_df) = rapids_knn_model.kneighbors(query_embeddings)\nelse:\n    array_to_vector_udf = udf(lambda array: Vectors.dense(array), VectorUDT())\n    df_with_vectors = query_embeddings.withColumn(\n        "features", array_to_vector_udf(query_embeddings["embeddings"])\n    )\n    knn_df = knn_model.transform(df_with_vectors)\n')),(0,a.kt)("h2",{id:"step-7-collect-and-display-results"},"Step 7: Collect and display results"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'if RUN_ON_GPU:\n    result_df = (\n        knn_df.withColumn(\n            "zipped", F.explode(F.arrays_zip(F.col("indices"), F.col("distances")))\n        )\n        .select(\n            F.col("query_id"),\n            F.col("zipped.indices").alias("id"),\n            F.col("zipped.distances").alias("distance"),\n        )\n        .join(df, on="id", how="inner")\n        .select("query_id", "id", "data", "distance")\n    )\nelse:\n    knn_df = knn_df.withColumnRenamed("data", "original_data")\n    result_df = (\n        knn_df.withColumn("match", F.explode("output"))\n        .join(df, df["id"] == F.col("match.value"))\n        .select("original_data", F.col("data"), "match.distance")\n    )\n\ndisplay(result_df)\n')),(0,a.kt)("h1",{id:"results"},"Results"),(0,a.kt)("p",null,"The goal of this demo is to showcase two acceleration techniques: local (per node) embedding generation and approximate KNN. Compared to the original method, which relies on HTTP requests to the OpenAI model and CPU-based KNN. The new approach is significantly more scalable and provides substantial acceleration, especially for large input datasets."),(0,a.kt)("p",null,"This is the comparison dureation results on 10 T4 GPU nodes for both approaches:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://mmlspark.blob.core.windows.net/graphics/Documentation/knn_comparison.png",alt:"KNN Comparison"})))}c.isMDXComponent=!0}}]);