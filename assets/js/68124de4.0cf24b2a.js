"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[364],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24744:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"DeepLearning - CIFAR10 Convolutional Network",hide_title:!0,status:"stable"},s=void 0,p={unversionedId:"features/other/DeepLearning - CIFAR10 Convolutional Network",id:"version-0.9.4/features/other/DeepLearning - CIFAR10 Convolutional Network",title:"DeepLearning - CIFAR10 Convolutional Network",description:"DeepLearning - CIFAR10 Convolutional Network",source:"@site/versioned_docs/version-0.9.4/features/other/DeepLearning - CIFAR10 Convolutional Network.md",sourceDirName:"features/other",slug:"/features/other/DeepLearning - CIFAR10 Convolutional Network",permalink:"/SynapseML/docs/0.9.4/features/other/DeepLearning - CIFAR10 Convolutional Network",tags:[],version:"0.9.4",frontMatter:{title:"DeepLearning - CIFAR10 Convolutional Network",hide_title:!0,status:"stable"},sidebar:"version-0.9.4/docs",previous:{title:"DeepLearning - BiLSTM Medical Entity Extraction",permalink:"/SynapseML/docs/0.9.4/features/other/DeepLearning - BiLSTM Medical Entity Extraction"},next:{title:"DeepLearning - Flower Image Classification",permalink:"/SynapseML/docs/0.9.4/features/other/DeepLearning - Flower Image Classification"}},c={},u=[{value:"DeepLearning - CIFAR10 Convolutional Network",id:"deeplearning---cifar10-convolutional-network",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"deeplearning---cifar10-convolutional-network"},"DeepLearning - CIFAR10 Convolutional Network"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.cntk import CNTKModel\nfrom synapse.ml.downloader import ModelDownloader\nfrom pyspark.sql.functions import udf\nfrom pyspark.sql.types import IntegerType\nfrom os.path import abspath\n")),(0,a.kt)("p",null,"Set some paths."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'cdnURL = "https://mmlspark.azureedge.net/datasets"\n\n# Please note that this is a copy of the CIFAR10 dataset originally found here:\n# http://www.cs.toronto.edu/~kriz/cifar-10-python.tar.gz\nimagesWithLabels = spark.read.parquet("wasbs://publicwasb@mmlspark.blob.core.windows.net/CIFAR10_test.parquet")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'modelName = "ConvNet"\nmodelDir = "dbfs:///models/"\n')),(0,a.kt)("p",null,"Get the model"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"d = ModelDownloader(spark, modelDir)\nmodel = d.downloadByName(modelName)\n\n")),(0,a.kt)("p",null,"Evaluate CNTK model."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import time\nstart = time.time()\n\n# Use CNTK model to get log probabilities\ncntkModel = CNTKModel().setInputCol("images").setOutputCol("output") \\\n                       .setModelLocation(model.uri).setOutputNode("z")\nscoredImages = cntkModel.transform(imagesWithLabels)\n\n# Transform the log probabilities to predictions\ndef argmax(x): return max(enumerate(x),key=lambda p: p[1])[0]\n\nargmaxUDF = udf(argmax, IntegerType())\nimagePredictions = scoredImages.withColumn("predictions", argmaxUDF("output")) \\\n                               .select("predictions", "labels")\n\nnumRows = imagePredictions.count()\n\nend = time.time()\nprint("classifying {} images took {} seconds".format(numRows,end-start))\n')),(0,a.kt)("p",null,"Plot confusion matrix."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'imagePredictions = imagePredictions.toPandas()\ny, y_hat = imagePredictions["labels"], imagePredictions["predictions"]\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import matplotlib.pyplot as plt\nimport numpy as np\nfrom sklearn.metrics import confusion_matrix\n\ncm = confusion_matrix(y, y_hat)\n\nlabels = ["airplane", "automobile", "bird", "cat", "deer", "dog", "frog",\n          "horse", "ship", "truck"]\nplt.imshow(cm, interpolation="nearest", cmap=plt.cm.Blues)\nplt.colorbar()\ntick_marks = np.arange(len(labels))\nplt.xticks(tick_marks, labels, rotation=90)\nplt.yticks(tick_marks, labels)\nplt.xlabel("Predicted label")\nplt.ylabel("True Label")\ndisplay(plt.show())\n')))}d.isMDXComponent=!0}}]);