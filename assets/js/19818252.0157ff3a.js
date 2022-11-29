"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[3850],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return t?a.createElement(h,l(l({ref:n},u),{},{components:t})):a.createElement(h,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(67294),r=t(86010),o="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(83117),r=t(67294),o=t(86010),l=t(72389),i=t(67392),s=t(7094),p=t(12466),u="tabList__CuJ",d="tabItem_LNqP";function c(e){var n,t,l=e.lazy,c=e.block,m=e.defaultValue,h=e.values,f=e.groupId,k=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,i.l)(v,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(n=null!=m?m:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:y[0].props.value;if(null!==w&&!v.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,s.U)(),S=g.tabGroupChoices,T=g.setTabGroupChoices,N=(0,r.useState)(w),x=N[0],E=N[1],O=[],I=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var M=S[f];null!=M&&M!==x&&v.some((function(e){return e.value===M}))&&E(M)}var D=function(e){var n=e.currentTarget,t=O.indexOf(n),a=v[t].value;a!==x&&(I(n),E(a),null!=f&&T(f,String(a)))},C=function(e){var n,t=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;t=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var o,l=O.indexOf(e.currentTarget)-1;t=null!=(o=O[l])?o:O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},k)},v.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return O.push(e)},onKeyDown:C,onClick:D},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),l?(0,r.cloneElement)(y.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function m(e){var n=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},48405:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),l=t(65488),i=t(85162),s=["components"],p={title:".NET setup",hide_title:!0,sidebar_label:".NET setup",description:".NET setup and example for SynapseML"},u=".NET setup and example for SynapseML",d={unversionedId:"reference/dotnet-setup",id:"reference/dotnet-setup",title:".NET setup",description:".NET setup and example for SynapseML",source:"@site/docs/reference/dotnet-setup.md",sourceDirName:"reference",slug:"/reference/dotnet-setup",permalink:"/SynapseML/docs/next/reference/dotnet-setup",draft:!1,tags:[],version:"current",frontMatter:{title:".NET setup",hide_title:!0,sidebar_label:".NET setup",description:".NET setup and example for SynapseML"},sidebar:"docs",previous:{title:"R setup",permalink:"/SynapseML/docs/next/reference/R-setup"},next:{title:"SAR Algorithm",permalink:"/SynapseML/docs/next/reference/SAR"}},c={},m=[{value:"Installation",id:"installation",level:2},{value:"1. Install .NET",id:"1-install-net",level:3},{value:"2. Install Java",id:"2-install-java",level:3},{value:"3. Install Apache Spark",id:"3-install-apache-spark",level:3},{value:"4. Install .NET for Apache Spark",id:"4-install-net-for-apache-spark",level:3},{value:"5. Install WinUtils (Windows Only)",id:"5-install-winutils-windows-only",level:3},{value:"6. Set DOTNET_WORKER_DIR and check dependencies",id:"6-set-dotnet_worker_dir-and-check-dependencies",level:3},{value:"Write a .NET for SynapseML App",id:"write-a-net-for-synapseml-app",level:2},{value:"1. Create a console app",id:"1-create-a-console-app",level:3},{value:"2. Install Nuget package",id:"2-install-nuget-package",level:3},{value:"3. Write your app",id:"3-write-your-app",level:3},{value:"4. Run your .NET App",id:"4-run-your-net-app",level:3},{value:"Next",id:"next",level:2}],h={toc:m};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"net-setup-and-example-for-synapseml"},".NET setup and example for SynapseML"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h3",{id:"1-install-net"},"1. Install .NET"),(0,o.kt)("p",null,"To start building .NET apps, you need to download and install the .NET SDK (Software Development Kit)."),(0,o.kt)("p",null,"Download and install the ",(0,o.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/download/dotnet/3.1"},".NET Core SDK"),".\nInstalling the SDK adds the dotnet toolchain to your PATH."),(0,o.kt)("p",null,"Once you've installed the .NET Core SDK, open a new command prompt or terminal and run ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet"),"."),(0,o.kt)("p",null,"If the command runs and prints out information about how to use dotnet, can move to the next step.\nIf you receive a ",(0,o.kt)("inlineCode",{parentName:"p"},"'dotnet' is not recognized as an internal or external command")," error, make sure\nyou opened a new command prompt or terminal before running the command."),(0,o.kt)("h3",{id:"2-install-java"},"2. Install Java"),(0,o.kt)("p",null,"Install ",(0,o.kt)("a",{parentName:"p",href:"https://www.oracle.com/java/technologies/downloads/#java8"},"Java 8.1")," for Windows and macOS,\nor ",(0,o.kt)("a",{parentName:"p",href:"https://openjdk.org/install/"},"OpenJDK 8")," for Ubuntu."),(0,o.kt)("p",null,"Select the appropriate version for your operating system. For example, select jdk-8u201-windows-x64.exe\nfor a Windows x64 machine or jdk-8u231-macosx-x64.dmg for macOS. Then, use the command java to verify the installation."),(0,o.kt)("h3",{id:"3-install-apache-spark"},"3. Install Apache Spark"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://spark.apache.org/downloads.html"},"Download and install Apache Spark")," with version >= 3.2.0.\n(SynapseML v0.10.2 only supports spark version >= 3.2.0)"),(0,o.kt)("p",null,"Extract downloaded zipped files (with 7-Zip app on Windows or ",(0,o.kt)("inlineCode",{parentName:"p"},"tar")," on linux) and remember the location of\nextracted files, we take ",(0,o.kt)("inlineCode",{parentName:"p"},"~/bin/spark-3.2.0-bin-hadoop3.2/")," as an example here."),(0,o.kt)("p",null,"Run the following commands to set the environment variables used to locate Apache Spark.\nOn Windows, make sure to run the command prompt in administrator mode."),(0,o.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"win",label:"Windows",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  setx /M HADOOP_HOME C:\\bin\\spark-3.2.0-bin-hadoop3.2\\\n  setx /M SPARK_HOME C:\\bin\\spark-3.2.0-bin-hadoop3.2\\\n  setx /M PATH "%PATH%;%HADOOP_HOME%;%SPARK_HOME%bin" # Warning: Don\'t run this if your path is already long as it will truncate your path to 1024 characters and potentially remove entries!\n'))),(0,o.kt)(i.Z,{value:"linux",label:"Mac/Linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  export SPARK_HOME=~/bin/spark-3.2.0-bin-hadoop3.2/\n  export PATH="$SPARK_HOME/bin:$PATH"\n  source ~/.bashrc\n')))),(0,o.kt)("p",null,"Once you've installed everything and set your environment variables, open a ",(0,o.kt)("strong",{parentName:"p"},"new")," command prompt or terminal and run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"spark-submit --version\n")),(0,o.kt)("p",null,"If the command runs and prints version information, you can move to the next step."),(0,o.kt)("p",null,"If you receive a ",(0,o.kt)("inlineCode",{parentName:"p"},"'spark-submit' is not recognized as an internal or external command")," error, make sure you opened a ",(0,o.kt)("strong",{parentName:"p"},"new")," command prompt."),(0,o.kt)("h3",{id:"4-install-net-for-apache-spark"},"4. Install .NET for Apache Spark"),(0,o.kt)("p",null,"Download the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dotnet/spark/releases"},"Microsoft.Spark.Worker")," ",(0,o.kt)("strong",{parentName:"p"},"v2.1.1")," release from the .NET for Apache Spark GitHub.\nFor example if you're on a Windows machine and plan to use .NET Core, download the Windows x64 netcoreapp3.1 release."),(0,o.kt)("p",null,"Extract Microsoft.Spark.Worker and remember the location."),(0,o.kt)("h3",{id:"5-install-winutils-windows-only"},"5. Install WinUtils (Windows Only)"),(0,o.kt)("p",null,".NET for Apache Spark requires WinUtils to be installed alongside Apache Spark.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/steveloughran/winutils/blob/master/hadoop-3.0.0/bin/winutils.exe"},"Download winutils.exe"),".\nThen, copy WinUtils into C:\\bin\\spark-3.2.0-bin-hadoop3.2\\bin."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you are using a different version of Hadoop, which is annotated at the end of your Spark install folder name, select the version of WinUtils that's compatible with your version of Hadoop.")),(0,o.kt)("h3",{id:"6-set-dotnet_worker_dir-and-check-dependencies"},"6. Set DOTNET_WORKER_DIR and check dependencies"),(0,o.kt)("p",null,"Run one of the following commands to set the DOTNET_WORKER_DIR environment variable, which is used by .NET apps to locate .NET for Apache Spark\nworker binaries. Make sure to replace <PATH-DOTNET_WORKER_DIR> with the directory where you downloaded and extracted the Microsoft.Spark.Worker.\nOn Windows, make sure to run the command prompt in administrator mode."),(0,o.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"win",label:"Windows",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  setx /M DOTNET_WORKER_DIR <PATH-DOTNET-WORKER-DIR>\n"))),(0,o.kt)(i.Z,{value:"linux",label:"Mac/Linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  export DOTNET_WORKER_DIR=<PATH-DOTNET-WORKER-DIR>\n")))),(0,o.kt)("p",null,"Finally, double-check that you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet, java, spark-shell")," from your command line before you move to the next section."),(0,o.kt)("h2",{id:"write-a-net-for-synapseml-app"},"Write a .NET for SynapseML App"),(0,o.kt)("h3",{id:"1-create-a-console-app"},"1. Create a console app"),(0,o.kt)("p",null,"In your command prompt or terminal, run the following commands to create a new console application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"dotnet new console -o SynapseMLApp\ncd SynapseMLApp\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet")," command creates a new application of type console for you. The -o parameter creates a directory\nnamed ",(0,o.kt)("inlineCode",{parentName:"p"},"SynapseMLApp")," where your app is stored and populates it with the required files.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"cd SynapseMLApp")," command changes the directory to the app directory you created."),(0,o.kt)("h3",{id:"2-install-nuget-package"},"2. Install Nuget package"),(0,o.kt)("p",null,"To use .NET for Apache Spark in an app, install the Microsoft.Spark package.\nIn your command prompt or terminal, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"dotnet add package Microsoft.Spark --version 2.1.1\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This tutorial uses Microsoft.Spark 2.1.1 version as SynapseML 0.10.2 depends on it.\nChange to corresponding version if necessary.")),(0,o.kt)("p",null,"To use SynapseML features in the app, install SynapseML.X package.\nIn this tutorial, we use SynapseML.Cognitive as an example.\nIn your command prompt or terminal, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"# Update Nuget Config to include SynapseML Feed\ndotnet nuget add source https://mmlspark.blob.core.windows.net/synapsemlnuget/index.json -n SynapseMLFeed\ndotnet add package SynapseML.Cognitive --version 0.10.2\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet nuget add")," command adds SynapseML's resolver to the source, so that our package can be found."),(0,o.kt)("h3",{id:"3-write-your-app"},"3. Write your app"),(0,o.kt)("p",null,"Open Program.cs file in Visual Studio Code, or any text editor, and replace all of the code with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing Synapse.ML.Cognitive;\nusing Microsoft.Spark.Sql;\nusing Microsoft.Spark.Sql.Types;\n\nnamespace SynapseMLApp\n{\n    class Program\n    {        static void Main(string[] args)\n        {\n            // Create Spark session\n            SparkSession spark =\n                SparkSession\n                    .Builder()\n                    .AppName("TextSentimentExample")\n                    .GetOrCreate();\n\n            // Create DataFrame\n            DataFrame df = spark.CreateDataFrame(\n                new List<GenericRow>\n                {\n                    new GenericRow(new object[] {"I am so happy today, its sunny!", "en-US"}),\n                    new GenericRow(new object[] {"I am frustrated by this rush hour traffic", "en-US"}),\n                    new GenericRow(new object[] {"The cognitive services on spark aint bad", "en-US"})\n                },\n                new StructType(new List<StructField>\n                {\n                    new StructField("text", new StringType()),\n                    new StructField("language", new StringType())\n                })\n            );\n\n            // Create TextSentiment\n            var model = new TextSentiment()\n                .SetSubscriptionKey("YOUR_SUBSCRIPTION_KEY")\n                .SetLocation("eastus")\n                .SetTextCol("text")\n                .SetOutputCol("sentiment")\n                .SetErrorCol("error")\n                .SetLanguageCol("language");\n\n            // Transform\n            var outputDF = model.Transform(df);\n\n            // Display results\n            outputDF.Show();\n\n            // Stop Spark session\n            spark.Stop();\n        }\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.spark.sql.sparksession?view=spark-dotnet"},"SparkSession")," is the entrypoint\nof Apache Spark applications, which manages the context and information of your application. A DataFrame is a way of organizing\ndata into a set of named columns."),(0,o.kt)("p",null,"Create a ",(0,o.kt)("a",{parentName:"p",href:"https://mmlspark.blob.core.windows.net/docs/0.10.2/dotnet/classSynapse_1_1ML_1_1Cognitive_1_1TextSentiment.html"},"TextSentiment"),"\ninstance, set corresponding subscription key and other configurations. Then, apply transformation to the dataframe,\nwhich analyzes the sentiment based on each row, and stores result into output column."),(0,o.kt)("p",null,"The result of the transformation is stored in another DataFrame. Note that at this point, no operations have taken place because\n.NET for Apache Spark lazily evaluates the data. It's not until the Show method is called to display the contents of the words\ntransformed DataFrame to the console that the operations defined in the lines above execute. Once you no longer need the Spark\nsession, use the Stop method to stop your session."),(0,o.kt)("h3",{id:"4-run-your-net-app"},"4. Run your .NET App"),(0,o.kt)("p",null,"Run the following command to build your application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"dotnet build\n")),(0,o.kt)("p",null,"Navigate to your build output directory (In windows for example you could run ",(0,o.kt)("inlineCode",{parentName:"p"},"cd bin\\Debug\\net5.0"),").\nUse the spark-submit command to submit your application to run on Apache Spark."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"spark-submit --class org.apache.spark.deploy.dotnet.DotnetRunner --packages com.microsoft.azure:synapseml_2.12:0.10.2 --master local microsoft-spark-3-2_2.12-2.1.1.jar dotnet SynapseMLApp.dll\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--packages com.microsoft.azure:synapseml_2.12:0.10.2")," specifies the dependency on synapseml_2.12 version 0.10.2;\n",(0,o.kt)("inlineCode",{parentName:"p"},"microsoft-spark-3-2_2.12-2.1.1.jar")," specifies Microsoft.Spark version 2.1.1 and Spark version 3.2"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This command assumes you have downloaded Apache Spark and added it to your PATH environment variable to be able to use spark-submit.\nOtherwise, you'd have to use the full path (for example, C:\\bin\\apache-spark\\bin\\spark-submit or ~/spark/bin/spark-submit).")),(0,o.kt)("p",null,"When your app runs, the sentiment analysis result is written to the console."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-----------------------------------------+--------+-----+--------------------------------------------------+\n|                                     text|language|error|                                         sentiment|\n+-----------------------------------------+--------+-----+--------------------------------------------------+\n|          I am so happy today, its sunny!|   en-US| null|[{positive, null, {0.99, 0.0, 0.0}, [{I am so h...|\n|I am frustrated by this rush hour traffic|   en-US| null|[{negative, null, {0.0, 0.0, 0.99}, [{I am frus...|\n| The cognitive services on spark aint bad|   en-US| null|[{negative, null, {0.0, 0.01, 0.99}, [{The cogn...|\n+-----------------------------------------+--------+-----+--------------------------------------------------+\n")),(0,o.kt)("p",null,"Congratulations! You successfully authored and ran a .NET for SynapseML app.\nRefer to the ",(0,o.kt)("a",{parentName:"p",href:"https://mmlspark.blob.core.windows.net/docs/0.10.2/dotnet/index.html"},"developer docs")," for API guidance."),(0,o.kt)("h2",{id:"next"},"Next"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Refer to this ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/spark/tutorials/databricks-deployment"},"tutorial")," for deploying a .NET app to Databricks."),(0,o.kt)("li",{parentName:"ul"},"You could download compatible ",(0,o.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/publicwasb/dotnet/install-worker.sh"},"install-worker.sh"),"\nand ",(0,o.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/publicwasb/dotnet/db-init.sh"},"db-init.sh")," files needed for deployment on Databricks.")))}f.isMDXComponent=!0}}]);