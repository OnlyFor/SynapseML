"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[3234],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6422:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],s={title:"Quickstart - Document Question and Answering with PDFs",hide_title:!0,status:"stable"},c="A Guide to Q&A on PDF Documents",p={unversionedId:"Explore Algorithms/AI Services/Quickstart - Document Question and Answering with PDFs",id:"Explore Algorithms/AI Services/Quickstart - Document Question and Answering with PDFs",title:"Quickstart - Document Question and Answering with PDFs",description:"Introduction",source:"@site/docs/Explore Algorithms/AI Services/Quickstart - Document Question and Answering with PDFs.md",sourceDirName:"Explore Algorithms/AI Services",slug:"/Explore Algorithms/AI Services/Quickstart - Document Question and Answering with PDFs",permalink:"/SynapseML/docs/Explore Algorithms/AI Services/Quickstart - Document Question and Answering with PDFs",draft:!1,tags:[],version:"current",frontMatter:{title:"Quickstart - Document Question and Answering with PDFs",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Quickstart - Create Audiobooks",permalink:"/SynapseML/docs/Explore Algorithms/AI Services/Quickstart - Create Audiobooks"},next:{title:"Quickstart - Flooding Risk",permalink:"/SynapseML/docs/Explore Algorithms/AI Services/Quickstart - Flooding Risk"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Step 1: Provide the keys for Azure AI Services and Azure OpenAI to authenticate the applications.",id:"step-1-provide-the-keys-for-azure-ai-services-and-azure-openai-to-authenticate-the-applications",level:3},{value:"Step 2: Load the PDF documents into a Spark DataFrame.",id:"step-2-load-the-pdf-documents-into-a-spark-dataframe",level:3},{value:"Display the raw data from the PDF documents",id:"display-the-raw-data-from-the-pdf-documents",level:5},{value:"Step 3: Read the documents using Azure AI Document Intelligence.",id:"step-3-read-the-documents-using-azure-ai-document-intelligence",level:3},{value:"Step 4: Split the documents into chunks.",id:"step-4-split-the-documents-into-chunks",level:3},{value:"Step 5: Generate Embeddings.",id:"step-5-generate-embeddings",level:3},{value:"Step 6: Store the embeddings in Azure Cognitive Search Vector Store.",id:"step-6-store-the-embeddings-in-azure-cognitive-search-vector-store",level:3},{value:"Step 7: Ask a Question.",id:"step-7-ask-a-question",level:3},{value:"Step 8: Respond to a User\u2019s Question.",id:"step-8-respond-to-a-users-question",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"a-guide-to-qa-on-pdf-documents"},"A Guide to Q&A on PDF Documents"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this notebook, we'll demonstrate how to develop a context-aware question answering framework for any form of a document using ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/products/ai-services/openai-service"},"OpenAI models"),", ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/SynapseML/"},"SynapseML")," and ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/products/cognitive-services/"},"Azure AI Services"),". In this notebook, we assume that PDF documents are the source of data, however, the same framework can be easiy extended to other document formats too.   "),(0,r.kt)("p",null,"We\u2019ll cover the following key steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Preprocessing PDF Documents: Learn how to load the PDF documents into a Spark DataFrame, read the documents using the ",(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/ai-services/ai-document-intelligence"},"Azure AI Document Intelligence")," in Azure AI Services, and use SynapseML to split the documents into chunks."),(0,r.kt)("li",{parentName:"ol"},"Embedding Generation and Storage: Learn how to generate embeddings for the chunks using SynapseML and ",(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/openai-service"},"Azure OpenAI Services"),", store the embeddings in a vector store using ",(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/search"},"Azure Cognitive Search"),", and search the vector store to answer the user\u2019s question."),(0,r.kt)("li",{parentName:"ol"},"Question Answering Pipeline: Learn how to retrieve relevant document based on the user\u2019s question and provide the answer using ",(0,r.kt)("a",{parentName:"li",href:"https://python.langchain.com/en/latest/index.html#"},"Langchain"),".")),(0,r.kt)("p",null,"We start by installing the necessary python libraries."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%pip install langchain openai\n")),(0,r.kt)("h3",{id:"step-1-provide-the-keys-for-azure-ai-services-and-azure-openai-to-authenticate-the-applications"},"Step 1: Provide the keys for Azure AI Services and Azure OpenAI to authenticate the applications."),(0,r.kt)("p",null,"To authenticate Azure AI Services and Azure OpenAI applications, you need to provide the respective API keys. Here is an example of how you can provide the keys in Python code. ",(0,r.kt)("inlineCode",{parentName:"p"},"find_secret()")," function uses Azure Keyvault to get the API keys, however you can directly paste your own keys there."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql import SparkSession\nfrom synapse.ml.core.platform import find_secret\n\nai_services_key = find_secret("cognitive-api-key")\nai_services_location = "eastus"\n\n# Fill in the following lines with your Azure service information\naoai_service_name = "synapseml-openai"\naoai_endpoint = f"https://{aoai_service_name}.openai.azure.com/"\naoai_key = find_secret("openai-api-key")\naoai_deployment_name_embeddings = "text-embedding-ada-002"\naoai_deployment_name_query = "text-davinci-003"\naoai_model_name_query = "text-davinci-003"\n\n# Azure Cognitive Search\ncogsearch_name = "mmlspark-azure-search"\ncogsearch_index_name = "examplevectorindex"\ncogsearch_api_key = find_secret("azure-search-key")\n')),(0,r.kt)("h3",{id:"step-2-load-the-pdf-documents-into-a-spark-dataframe"},"Step 2: Load the PDF documents into a Spark DataFrame."),(0,r.kt)("p",null,"For this tutorial, we will be using NASA's ",(0,r.kt)("a",{parentName:"p",href:"https://www.nasa.gov/sites/default/files/atoms/files/earth_book_2019_tagged.pdf"},"Earth")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.nasa.gov/sites/default/files/atoms/files/earth_at_night_508.pdf"},"Earth at Night")," e-books. To load PDF documents into a Spark DataFrame, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},'spark.read.format("binaryFile")')," method provided by Apache Spark."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql.functions import udf\nfrom pyspark.sql.types import StringType\n\ndocument_path = "wasbs://public@synapseaisolutionsa.blob.core.windows.net/NASAEarth"  # path to your document\ndf = spark.read.format("binaryFile").load(document_path).limit(10).cache()\n')),(0,r.kt)("p",null,"This code will read the PDF documents and create a Spark DataFrame named df with the contents of the PDFs. The DataFrame will have a schema that represents the structure of the PDF documents, including their textual content."),(0,r.kt)("p",null,"Let's take a glimpse at the contents of the e-books we are working with. Below are some screenshots that showcase the essence of the books; as you can see they contain information about the Earth."),(0,r.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/notebooks/NASAearthbook_screenshot.png",width:"500"}),(0,r.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/notebooks/NASAearthatnight_screenshot.png",width:"460"}),(0,r.kt)("h5",{id:"display-the-raw-data-from-the-pdf-documents"},"Display the raw data from the PDF documents"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Show the dataframe without the content\ndisplay(df.drop("content"))\n')),(0,r.kt)("h3",{id:"step-3-read-the-documents-using-azure-ai-document-intelligence"},"Step 3: Read the documents using Azure AI Document Intelligence."),(0,r.kt)("p",null,"We utilize ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/SynapseML/"},"SynapseML"),", an ecosystem of tools designed to enhance the distributed computing framework ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/spark"},"Apache Spark"),". SynapseML introduces advanced networking capabilities to the Spark ecosystem and offers user-friendly SparkML transformers for various ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/products/ai-services"},"Azure AI Services"),"."),(0,r.kt)("p",null,'Additionally, we employ AnalyzeDocument from Azure AI Services to extract the complete document content and present it in the designated columns called "output_content" and "paragraph."'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import AnalyzeDocument\nfrom pyspark.sql.functions import col\n\nanalyze_document = (\n    AnalyzeDocument()\n    .setPrebuiltModelId("prebuilt-layout")\n    .setSubscriptionKey(ai_services_key)\n    .setLocation(ai_services_location)\n    .setImageBytesCol("content")\n    .setOutputCol("result")\n    .setPages(\n        "1-15"\n    )  # Here we are reading the first 15 pages of the documents for demo purposes\n)\n\nanalyzed_df = (\n    analyze_document.transform(df)\n    .withColumn("output_content", col("result.analyzeResult.content"))\n    .withColumn("paragraphs", col("result.analyzeResult.paragraphs"))\n).cache()\n')),(0,r.kt)("p",null,"We can observe the analayzed Spark DataFrame named ",(0,r.kt)("inlineCode",{parentName:"p"},"analyzed_df"),' using the following code. Note that we drop the "content" column as it is not needed anymore.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'analyzed_df = analyzed_df.drop("content")\ndisplay(analyzed_df)\n')),(0,r.kt)("h3",{id:"step-4-split-the-documents-into-chunks"},"Step 4: Split the documents into chunks."),(0,r.kt)("p",null,"After analyzing the document, we leverage SynapseML\u2019s PageSplitter to divide the documents into smaller sections, which are subsequently stored in the \u201cchunks\u201d column. This allows for more granular representation and processing of the document content."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.featurize.text import PageSplitter\n\nps = (\n    PageSplitter()\n    .setInputCol("output_content")\n    .setMaximumPageLength(4000)\n    .setMinimumPageLength(3000)\n    .setOutputCol("chunks")\n)\n\nsplitted_df = ps.transform(analyzed_df)\ndisplay(splitted_df)\n')),(0,r.kt)("p",null,"Note that the chunks for each document are presented in a single row inside an array. In order to embed all the chunks in the following cells, we need to have each chunk in a separate row. To accomplish that, we first explode these arrays so there is only one chunk in each row, then filter the Spark DataFrame in order to only keep the path to the document and the chunk in a single row."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Each column contains many chunks for the same document as a vector.\n# Explode will distribute and replicate the content of a vecor across multple rows\nfrom pyspark.sql.functions import explode, col\n\nexploded_df = splitted_df.select("path", explode(col("chunks")).alias("chunk")).select(\n    "path", "chunk"\n)\ndisplay(exploded_df)\n')),(0,r.kt)("h3",{id:"step-5-generate-embeddings"},"Step 5: Generate Embeddings."),(0,r.kt)("p",null,"To produce embeddings for each chunk, we utilize both SynapseML and Azure OpenAI Service. By integrating the Azure OpenAI service with SynapseML, we can leverage the power of the Apache Spark distributed computing framework to process numerous prompts using the OpenAI service. This integration enables the SynapseML embedding client to generate embeddings in a distributed manner, enabling efficient processing of large volumes of data. If you're interested in applying large language models at a distributed scale using Azure OpenAI and Azure Synapse Analytics, you can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/SynapseML/docs/Explore%20Algorithms/OpenAI/"},"this approach"),". For more detailed information on generating embeddings with Azure OpenAI, you can look ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/cognitive-services/openai/how-to/embeddings?tabs=console"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import OpenAIEmbedding\n\nembedding = (\n    OpenAIEmbedding()\n    .setSubscriptionKey(aoai_key)\n    .setDeploymentName(aoai_deployment_name_embeddings)\n    .setCustomServiceName(aoai_service_name)\n    .setTextCol("chunk")\n    .setErrorCol("error")\n    .setOutputCol("embeddings")\n)\n\ndf_embeddings = embedding.transform(exploded_df)\n\ndisplay(df_embeddings)\n')),(0,r.kt)("h3",{id:"step-6-store-the-embeddings-in-azure-cognitive-search-vector-store"},"Step 6: Store the embeddings in Azure Cognitive Search Vector Store."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/search/search-what-is-azure-search"},"Azure Cognitive Search")," offers a user-friendly interface for creating a vector database, as well as storing and retrieving data using vector search. If you're interested in learning more about vector search, you can look ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure/cognitive-search-vector-pr/tree/main"},"here"),"."),(0,r.kt)("p",null,"Storing data in the AzureCogSearch vector database involves two main steps:"),(0,r.kt)("p",null,"Creating the Index: The first step is to establish the index or schema of the vector database. This entails defining the structure and properties of the data that will be stored and indexed in the vector database."),(0,r.kt)("p",null,"Adding Chunked Documents and Embeddings: The second step involves adding the chunked documents, along with their corresponding embeddings, to the vector datastore. This allows for efficient storage and retrieval of the data using vector search capabilities."),(0,r.kt)("p",null,"By following these steps, you can effectively store your chunked documents and their associated embeddings in the AzureCogSearch vector database, enabling seamless retrieval of relevant information through vector search functionality."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql.functions import monotonically_increasing_id\nfrom pyspark.sql.functions import lit\n\ndf_embeddings = (\n    df_embeddings.drop("error")\n    .withColumn(\n        "idx", monotonically_increasing_id().cast("string")\n    )  # create index ID for ACS\n    .withColumn("searchAction", lit("upload"))\n)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import writeToAzureSearch\nimport json\n\ndf_embeddings.writeToAzureSearch(\n    subscriptionKey=cogsearch_api_key,\n    actionCol="searchAction",\n    serviceName=cogsearch_name,\n    indexName=cogsearch_index_name,\n    keyCol="idx",\n    vectorCols=json.dumps([{"name": "embeddings", "dimension": 1536}]),\n)\n')),(0,r.kt)("h3",{id:"step-7-ask-a-question"},"Step 7: Ask a Question."),(0,r.kt)("p",null,"After processing the document, we can proceed to pose a question. We will use ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/SynapseML/docs/Explore%20Algorithms/OpenAI/Quickstart%20-%20OpenAI%20Embedding/"},"SynapseML")," to convert the user's question into an embedding and then utilize cosine similarity to retrieve the top K document chunks that closely match the user's question. It's worth mentioning that alternative similarity metrics can also be employed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'user_question = "What did the astronaut Edgar Mitchell call Earth?"\nretrieve_k = 2  # Retrieve the top 2 documents from vector database\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\n\n# Ask a question and convert to embeddings\n\n\ndef gen_question_embedding(user_question):\n    # Convert question to embedding using synapseML\n    from synapse.ml.cognitive import OpenAIEmbedding\n\n    df_ques = spark.createDataFrame([(user_question, 1)], ["questions", "dummy"])\n    embedding = (\n        OpenAIEmbedding()\n        .setSubscriptionKey(aoai_key)\n        .setDeploymentName(aoai_deployment_name_embeddings)\n        .setCustomServiceName(aoai_service_name)\n        .setTextCol("questions")\n        .setErrorCol("errorQ")\n        .setOutputCol("embeddings")\n    )\n    df_ques_embeddings = embedding.transform(df_ques)\n    row = df_ques_embeddings.collect()[0]\n    question_embedding = row.embeddings.tolist()\n    return question_embedding\n\n\ndef retrieve_k_chunk(k, question_embedding):\n    # Retrieve the top K entries\n    url = f"https://{cogsearch_name}.search.windows.net/indexes/{cogsearch_index_name}/docs/search?api-version=2023-07-01-Preview"\n\n    payload = json.dumps(\n        {"vector": {"value": question_embedding, "fields": "embeddings", "k": k}}\n    )\n    headers = {\n        "Content-Type": "application/json",\n        "api-key": cogsearch_api_key,\n    }\n\n    response = requests.request("POST", url, headers=headers, data=payload)\n    output = json.loads(response.text)\n    print(response.status_code)\n    return output\n\n\n# Generate embeddings for the question and retrieve the top k document chunks\nquestion_embedding = gen_question_embedding(user_question)\noutput = retrieve_k_chunk(retrieve_k, question_embedding)\n')),(0,r.kt)("h3",{id:"step-8-respond-to-a-users-question"},"Step 8: Respond to a User\u2019s Question."),(0,r.kt)("p",null,"To provide a response to the user's question, we will utilize the ",(0,r.kt)("a",{parentName:"p",href:"https://python.langchain.com/en/latest/index.html"},"LangChain")," framework. With the LangChain framework we will augment the retrieved documents with respect to the user's question. Following this, we can request a response to the user's question from our framework."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Import necenssary libraries and setting up OpenAI\nfrom langchain.llms import AzureOpenAI\nfrom langchain import PromptTemplate\nfrom langchain.chains import LLMChain\nimport openai\n\nopenai.api_type = "azure"\nopenai.api_base = aoai_endpoint\nopenai.api_version = "2022-12-01"\nopenai.api_key = aoai_key\n')),(0,r.kt)("p",null,'We can now wrap up the Q&A journey by asking a question and checking the answer. You will see that Edgar Mitchell called Earth "a sparkling blue and white jewel"!'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Define a Question Answering chain function using LangChain\ndef qa_chain_func():\n\n    # Define llm model\n    llm = AzureOpenAI(\n        deployment_name=aoai_deployment_name_query,\n        model_name=aoai_model_name_query,\n        openai_api_key=aoai_key,\n        openai_api_version="2022-12-01",\n    )\n\n    # Write a preprompt with context and query as variables\n    template = """\n    context :{context}\n    Answer the question based on the context above. If the\n    information to answer the question is not present in the given context then reply "I don\'t know".\n    Question: {query}\n    Answer: """\n\n    # Define a prompt template\n    prompt_template = PromptTemplate(\n        input_variables=["context", "query"], template=template\n    )\n    # Define a chain\n    qa_chain = LLMChain(llm=llm, prompt=prompt_template)\n    return qa_chain\n\n\n# Concatenate the content of retrieved documents\ncontext = [i["chunk"] for i in output["value"]]\n\n# Make a Quesion Answer chain function and pass\nqa_chain = qa_chain_func()\nanswer = qa_chain.run({"context": context, "query": user_question})\n\nprint(answer)\n')))}m.isMDXComponent=!0}}]);