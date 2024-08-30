"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[82681],{3905:(e,a,r)=>{r.d(a,{Zo:()=>c,kt:()=>m});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=t.createContext({}),i=function(e){var a=t.useContext(p),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},c=function(e){var a=i(e.components);return t.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},k=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=i(r),m=n,d=k["".concat(p,".").concat(m)]||k[m]||u[m]||s;return r?t.createElement(d,o(o({ref:a},c),{},{components:r})):t.createElement(d,o({ref:a},c))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=k;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var i=2;i<s;i++)o[i]=r[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}k.displayName="MDXCreateElement"},70375:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var t=r(83117),n=(r(67294),r(3905));const s={title:"Install SynapseML",description:"Install SynapseML"},o=void 0,l={unversionedId:"Get Started/Install SynapseML",id:"version-1.0.4/Get Started/Install SynapseML",title:"Install SynapseML",description:"Install SynapseML",source:"@site/versioned_docs/version-1.0.4/Get Started/Install SynapseML.md",sourceDirName:"Get Started",slug:"/Get Started/Install SynapseML",permalink:"/SynapseML/docs/1.0.4/Get Started/Install SynapseML",draft:!1,tags:[],version:"1.0.4",frontMatter:{title:"Install SynapseML",description:"Install SynapseML"},sidebar:"docs",previous:{title:"Create a Spark Cluster",permalink:"/SynapseML/docs/1.0.4/Get Started/Create a Spark Cluster"},next:{title:"Set up Cognitive Services",permalink:"/SynapseML/docs/1.0.4/Get Started/Set up Cognitive Services"}},p={},i=[{value:"Microsoft Fabric",id:"microsoft-fabric",level:2},{value:"Synapse",id:"synapse",level:2},{value:"Python",id:"python",level:2},{value:"SBT",id:"sbt",level:2},{value:"Spark package",id:"spark-package",level:2},{value:"Databricks",id:"databricks",level:2},{value:"Apache Livy and HDInsight",id:"apache-livy-and-hdinsight",level:2},{value:"Docker",id:"docker",level:2},{value:"Building from source",id:"building-from-source",level:2},{value:"R (Beta)",id:"r-beta",level:2},{value:"C# (.NET)",id:"c-net",level:2}],c={toc:i};function u(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"microsoft-fabric"},"Microsoft Fabric"),(0,n.kt)("p",null,"SynapseML is already installed in Microsoft Fabric notebooks. To change the version please place the following in the first cell of your notebook: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'%%configure -f\n{\n  "name": "synapseml",\n  "conf": {\n      "spark.jars.packages": "com.microsoft.azure:synapseml_2.12:<THE_SYNAPSEML_VERSION_YOU_WANT>",\n      "spark.jars.repositories": "https://mmlspark.azureedge.net/maven",\n      "spark.jars.excludes": "org.scala-lang:scala-reflect,org.apache.spark:spark-tags_2.12,org.scalactic:scalactic_2.12,org.scalatest:scalatest_2.12,com.fasterxml.jackson.core:jackson-databind",\n      "spark.yarn.user.classpath.first": "true",\n      "spark.sql.parquet.enableVectorizedReader": "false"\n  }\n}\n')),(0,n.kt)("h2",{id:"synapse"},"Synapse"),(0,n.kt)("p",null,"SynapseML is already installed in Synapse Analytics notebooks. To change the version please place the following in the first cell of your notebook:"),(0,n.kt)("p",null,"For Spark3.4 pools"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'%%configure -f\n{\n  "name": "synapseml",\n  "conf": {\n      "spark.jars.packages": "com.microsoft.azure:synapseml_2.12:1.0.4",\n      "spark.jars.repositories": "https://mmlspark.azureedge.net/maven",\n      "spark.jars.excludes": "org.scala-lang:scala-reflect,org.apache.spark:spark-tags_2.12,org.scalactic:scalactic_2.12,org.scalatest:scalatest_2.12,com.fasterxml.jackson.core:jackson-databind",\n      "spark.yarn.user.classpath.first": "true",\n      "spark.sql.parquet.enableVectorizedReader": "false"\n  }\n}\n')),(0,n.kt)("p",null,"For Spark3.3 pools:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'%%configure -f\n{\n  "name": "synapseml",\n  "conf": {\n      "spark.jars.packages": "com.microsoft.azure:synapseml_2.12:0.11.4-spark3.3",\n      "spark.jars.repositories": "https://mmlspark.azureedge.net/maven",\n      "spark.jars.excludes": "org.scala-lang:scala-reflect,org.apache.spark:spark-tags_2.12,org.scalactic:scalactic_2.12,org.scalatest:scalatest_2.12,com.fasterxml.jackson.core:jackson-databind",\n      "spark.yarn.user.classpath.first": "true",\n      "spark.sql.parquet.enableVectorizedReader": "false"\n  }\n}\n')),(0,n.kt)("h2",{id:"python"},"Python"),(0,n.kt)("p",null,"To try out SynapseML on a Python (or Conda) installation, you can get Spark\ninstalled via pip with ",(0,n.kt)("inlineCode",{parentName:"p"},"pip install pyspark"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import pyspark\nspark = pyspark.sql.SparkSession.builder.appName("MyApp") \\\n            # Use 0.11.4-spark3.3 version for Spark3.3 and 1.0.4 version for Spark3.4\n            .config("spark.jars.packages", "com.microsoft.azure:synapseml_2.12:1.0.4") \\\n            .config("spark.jars.repositories", "https://mmlspark.azureedge.net/maven") \\\n            .getOrCreate()\nimport synapse.ml\n')),(0,n.kt)("h2",{id:"sbt"},"SBT"),(0,n.kt)("p",null,"If you're building a Spark application in Scala, add the following lines to\nyour ",(0,n.kt)("inlineCode",{parentName:"p"},"build.sbt"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'resolvers += "SynapseML" at "https://mmlspark.azureedge.net/maven"\n// Use 0.11.4-spark3.3 version for Spark3.3 and 1.0.4 version for Spark3.4\nlibraryDependencies += "com.microsoft.azure" % "synapseml_2.12" % "1.0.4"\n')),(0,n.kt)("h2",{id:"spark-package"},"Spark package"),(0,n.kt)("p",null,"SynapseML can be conveniently installed on existing Spark clusters via the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--packages")," option, examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Use 0.11.4-spark3.3 version for Spark3.3 and 1.0.4 version for Spark3.4\nspark-shell --packages com.microsoft.azure:synapseml_2.12:1.0.4\npyspark --packages com.microsoft.azure:synapseml_2.12:1.0.4\nspark-submit --packages com.microsoft.azure:synapseml_2.12:1.0.4 MyApp.jar\n")),(0,n.kt)("p",null,"A similar technique can be used in other Spark contexts too. For example, you can use SynapseML\nin ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Azure/aztk/"},"AZTK")," by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Azure/aztk/wiki/PySpark-on-Azure-with-AZTK#optional-set-up-mmlspark"},"adding it to the\n",(0,n.kt)("inlineCode",{parentName:"a"},".aztk/spark-defaults.conf"),"\nfile"),"."),(0,n.kt)("h2",{id:"databricks"},"Databricks"),(0,n.kt)("p",null,"To install SynapseML on the ",(0,n.kt)("a",{parentName:"p",href:"http://community.cloud.databricks.com"},"Databricks\ncloud"),", create a new ",(0,n.kt)("a",{parentName:"p",href:"https://docs.databricks.com/user-guide/libraries.html#libraries-from-maven-pypi-or-spark-packages"},"library from Maven\ncoordinates"),"\nin your workspace."),(0,n.kt)("p",null,"For the coordinates use: ",(0,n.kt)("inlineCode",{parentName:"p"},"com.microsoft.azure:synapseml_2.12:1.0.4")," for Spark3.4 Cluster and\n",(0,n.kt)("inlineCode",{parentName:"p"},"com.microsoft.azure:synapseml_2.12:0.11.4-spark3.3")," for Spark3.3 Cluster;\nAdd the resolver: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://mmlspark.azureedge.net/maven"),". Ensure this library is\nattached to your target cluster(s)."),(0,n.kt)("p",null,"Finally, ensure that your Spark cluster has at least Spark 3.2 and Scala 2.12."),(0,n.kt)("p",null,"You can use SynapseML in both your Scala and PySpark notebooks. To get started with our example notebooks, import the following databricks archive:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"https://mmlspark.blob.core.windows.net/dbcs/SynapseMLExamplesv1.0.4.dbc")),(0,n.kt)("h2",{id:"apache-livy-and-hdinsight"},"Apache Livy and HDInsight"),(0,n.kt)("p",null,"To install SynapseML from within a Jupyter notebook served by Apache Livy, the following configure magic can be used. You'll need to start a new session after this configure cell is executed."),(0,n.kt)("p",null,"Excluding certain packages from the library may be necessary due to current issues with Livy 0.5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'%%configure -f\n{\n    "name": "synapseml",\n    "conf": {\n        # Use 0.11.4-spark3.3 version for Spark3.3 and 1.0.4 version for Spark3.4\n        "spark.jars.packages": "com.microsoft.azure:synapseml_2.12:1.0.4",\n        "spark.jars.excludes": "org.scala-lang:scala-reflect,org.apache.spark:spark-tags_2.12,org.scalactic:scalactic_2.12,org.scalatest:scalatest_2.12,com.fasterxml.jackson.core:jackson-databind"\n    }\n}\n')),(0,n.kt)("p",null,'In Azure Synapse, "spark.yarn.user.classpath.first" should be set to "true" to override the existing SynapseML packages'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'%%configure -f\n{\n    "name": "synapseml",\n    "conf": {\n        # Use 0.11.4-spark3.3 version for Spark3.3 and 1.0.4 version for Spark3.4\n        "spark.jars.packages": "com.microsoft.azure:synapseml_2.12:1.0.4",\n        "spark.jars.excludes": "org.scala-lang:scala-reflect,org.apache.spark:spark-tags_2.12,org.scalactic:scalactic_2.12,org.scalatest:scalatest_2.12,com.fasterxml.jackson.core:jackson-databind",\n        "spark.yarn.user.classpath.first": "true"\n    }\n}\n')),(0,n.kt)("h2",{id:"docker"},"Docker"),(0,n.kt)("p",null,"The easiest way to evaluate SynapseML is via our pre-built Docker container.  To\ndo so, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -p 8888:8888 -e ACCEPT_EULA=yes mcr.microsoft.com/mmlspark/release\n")),(0,n.kt)("p",null,"Navigate to ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:8888/"},"http://localhost:8888/")," in your web browser to run the sample\nnotebooks.  See the ","[documentation]","(../../Reference/Docker Setup.md) for more on Docker use."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"To read the EULA for using the docker image, run"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -p 8888:8888 mcr.microsoft.com/mmlspark/release eula\n"))),(0,n.kt)("h2",{id:"building-from-source"},"Building from source"),(0,n.kt)("p",null,"SynapseML has recently transitioned to a new build infrastructure.\nFor detailed developer docs, see the ",(0,n.kt)("a",{parentName:"p",href:"../../Reference/Docker%20Setup"},"Developer Readme")),(0,n.kt)("p",null,"If you're an existing SynapseML developer, you'll need to reconfigure your\ndevelopment setup. We now support platform independent development and\nbetter integrate with intellij and SBT.\nIf you encounter issues, reach out to our support email!"),(0,n.kt)("h2",{id:"r-beta"},"R (Beta)"),(0,n.kt)("p",null,"To try out SynapseML using the R autogenerated wrappers, ",(0,n.kt)("a",{parentName:"p",href:"../../Reference/R%20Setup"},"see our\ninstructions"),".  Note: This feature is still under development\nand some necessary custom wrappers may be missing."),(0,n.kt)("h2",{id:"c-net"},"C# (.NET)"),(0,n.kt)("p",null,"To try out SynapseML with .NET, follow the ",(0,n.kt)("a",{parentName:"p",href:"../../Reference/Dotnet%20Setup"},".NET Installation Guide"),".\nNote: Some stages including AzureSearchWriter, DiagnosticInfo, UDPyF Param, ParamSpaceParam, BallTreeParam,\nConditionalBallTreeParam, LightGBMBooster Param are still under development and not exposed in .NET."))}u.isMDXComponent=!0}}]);