"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4554],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(h,l(l({ref:e},u),{},{components:a})):n.createElement(h,l({ref:e},u))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6351:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={sidebar_position:3},s="How to use the HashDit API",p={unversionedId:"tutorial",id:"tutorial",title:"How to use the HashDit API",description:"Tutorial",source:"@site/docs/tutorial.md",sourceDirName:".",slug:"/tutorial",permalink:"/hashdit/docs/tutorial",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Data",permalink:"/hashdit/docs/hashdit-api/data"},next:{title:"Risk Level Description",permalink:"/hashdit/docs/risk-level-description"}},u={},d=[{value:"Tutorial",id:"tutorial",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:d};function m(t){var e=t.components,o=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-use-the-hashdit-api"},"How to use the HashDit API"),(0,i.kt)("h2",{id:"tutorial"},"Tutorial"),(0,i.kt)("p",null,"In this tutorial, we will provide a step-by-step guide on how to use the HashDit API using Postman. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Prerequisite:")," The service scope of this API is currently limited to users who have applied for access by sending a request to ",(0,i.kt)("a",{parentName:"li",href:"mailto:support@hashdit.com."},"support@hashdit.com.")," The received appid and appsecret are essential to be able to use the API.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"API Endpoint: ",(0,i.kt)("a",{parentName:"li",href:"https://api.hashdit.io/security-api/public/app/v1/detect"},"https://api.hashdit.io/security-api/public/app/v1/detect"),"  ")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After you have received appid and appsecret, you navigate to Postman and generate a request using a Pre-request Script, as shown in the figure below. Make sure that you have specified the following parameters correctly."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Method type should be selected as POST, as shown in step1 in the figure below."),(0,i.kt)("li",{parentName:"ul"},"Specified the correct request URL, as shown in step2 in the below figure."),(0,i.kt)("li",{parentName:"ul"},"Provide a pre-request script."),(0,i.kt)("li",{parentName:"ul"},"Set the required headers.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(1119).Z,width:"1600",height:"657"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Pre-Request Script"),": In this script, you will specify the appid, appsecret, uuid, set the body of the request, set the signature, set the headers, and set the global variables."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In lines 1 to 8, we set values for different variables, these will be then used to set the headers of the request as shown below."),(0,i.kt)("p",{parentName:"li"}," ",(0,i.kt)("img",{src:a(8418).Z,width:"1085",height:"412"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For server authorization, whenever the client calls the server\u2019s restful interface, it is required on the client side to set the following headers as described in the table below to be able to pass the server authorization. "))))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Header"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,i.kt)("td",{parentName:"tr",align:null},"application/json;charset=UTF-8"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"X-Signature-appid"),(0,i.kt)("td",{parentName:"tr",align:null},"appid"),(0,i.kt)("td",{parentName:"tr",align:null},"unique code received after applying at ",(0,i.kt)("a",{parentName:"td",href:"mailto:support@hashdit.com"},"support@hashdit.com"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"X-Signature-timestamp"),(0,i.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,i.kt)("td",{parentName:"tr",align:null},"millisecond")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"X-Signature-nonce"),(0,i.kt)("td",{parentName:"tr",align:null},"nonce"),(0,i.kt)("td",{parentName:"tr",align:null},"Random uuid, replace \u201c-\u201d with \u201c\u201d, 32 byte length")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"X-Signature-signature"),(0,i.kt)("td",{parentName:"tr",align:null},"signature"),(0,i.kt)("td",{parentName:"tr",align:null},"Hash of appsecret, appid, timestamp, nonce, method, uri, query, body. ",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Note:")," Where uri is the path\uff0cmultiple key-value pair  in query and header should be ",(0,i.kt)("strong",{parentName:"td"},"sorted")," alphabetically by key, comma separated")))),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Setting Body of the Request:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"After specifying the pre-request and headers, set the body of your request. To know about the different input fields, parameters, and output details, you can refer to the official documentation.   "),(0,i.kt)("li",{parentName:"ul"},"In this tutorial, we have used the raw format to set the body of our request, as shown in the figure below. However, it is up to you to choose whatever of the supported types you wish to use. As input parameters for the API, we have passed the address and chain_id key-value pairs.\n",(0,i.kt)("img",{src:a(836).Z,width:"932",height:"250"})),(0,i.kt)("li",{parentName:"ul"},"In the body of the message, if you are wanting to scan a smart contract for a dapp for risk analysis, the passed parameters are as described below")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chain_id"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"Chain id of the blockchain the contract to check is deployed on"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"56 (BSC Mainnet)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"Contract address that needs to be scanned for risk factor"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"0x312bc7eaaf93f1c60dc5afc115fccde161055fb0(No Risk)",(0,i.kt)("br",null),"0x1ffaa3176d63a4889391f628e6f3c934cf00c9ba(Low Risk)",(0,i.kt)("br",null),"0x57eba2d1adf4102051ac8094aec65d48d6c3bfae(Medium Risk)",(0,i.kt)("br",null),"0x4debab03731a326c04f69621c3de3e1bc0b34ff8(High Risk)")))),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Send Request:")," click on the Send button to send your request."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Response:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If everything goes well, the response received for the contract address (0x57eba2d1adf4102051ac8094aec65d48d6c3bfae0x312bc7eaaf93f1c60dc5afc115fccde161055fb0), the response will be as shown in the figure below.\n",(0,i.kt)("img",{src:a(2462).Z,width:"696",height:"566"})),(0,i.kt)("li",{parentName:"ul"},"The different parameters in the response are as explained in the table below")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Nullable"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"status"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"Result of operation"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"OK\uff1a The scanning process terminated as expected ",(0,i.kt)("br",null),"ERROR\uff1a Exception thrown or unexpected situation met")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"code"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"Result code of operation"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"00001:verify signature error",(0,i.kt)("br",null)," > appid, timestamp, nonce, signature headers can not be null or empty",(0,i.kt)("br",null),"> nonce is illegal",(0,i.kt)("br",null),"> timestamp has illegal",(0,i.kt)("br",null),"> timestamp is expired",(0,i.kt)("br",null),"> invalid appid",(0,i.kt)("br",null),"> appid has expired",(0,i.kt)("br",null),"> invalid signature",(0,i.kt)("br",null),"> replay request",(0,i.kt)("br",null),"> app is out of count limit",(0,i.kt)("br",null),"00002:unknown server error occurred during verifying signature",(0,i.kt)("br",null),"00003:unknown server error occurred during detection")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Data")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"The following parameters are part of data")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"request ID"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"Unique request id"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"risk_level"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"Likelihood and impact of the risk"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"5 Significant Risk",(0,i.kt)("br",null),"4 High Risk",(0,i.kt)("br",null),"3 Medium Risk",(0,i.kt)("br",null),"2 Low Risk",(0,i.kt)("br",null),"1 Some Risk",(0,i.kt)("br",null),"0 Very Low Risk")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"has_result"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether there is already a definite result, if False it needs to be requested in ","[polling_interval]"," seconds"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"True")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"polling_interval"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"Recommended next request interval seconds"),(0,i.kt)("td",{parentName:"tr",align:null},"long"),(0,i.kt)("td",{parentName:"tr",align:null},"60")))),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"One of the core missions of Hashdit is to provide the everyday Defi investors with essential threat intelligence that will help them in making informed decisions. Investing in Defi can be both highly profitable as well as full of pitfalls at the same time, because of which it is difficult to successfully navigate through this massive landscape for both newbies and experienced investors. To bridge this gap, HashDit aims to provide timely and comprehensive threat intelligence regarding Defi projects, the HashDit Address Query Public API is one such attempt. It can be used to query the risk that may be associated with a token or smart contract due to several different vulnerabilities. In this tutorial, we have provided a step-by-step guide on how to use the API with Postman to check a smart contract's risk factor."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pre-request Script used in this tutorial")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'var appid = "add your appid";\nvar appSecret = "add your appSecret";\nvar uuid=require(\'uuid\');\nvar timestamp = new Date().getTime();\nvar nonce = uuid().replace(/-/g, \'\');\nconst body=pm.request.body.raw\nvar hash = CryptoJS.HmacSHA256(appid+";"+timestamp+";"+nonce+";"+"POST;/security-api/public/app/v1/detect;"+ body, appSecret)\nvar signature = CryptoJS.enc.Hex.stringify(hash)\n \nconsole.log("signature:" + signature)\npm.globals.set(\'appid\', appid);\npm.globals.set("timestamp", timestamp);\npm.globals.set("signature", signature);\npm.globals.set("nonce", nonce);\n')))}m.isMDXComponent=!0},1119:function(t,e,a){e.Z=a.p+"assets/images/tutorial-1-b5a3dc6d50f98412d461955ef1124764.png"},8418:function(t,e,a){e.Z=a.p+"assets/images/tutorial-2-59156a14a8f6bc547421efb88b21afe4.png"},836:function(t,e,a){e.Z=a.p+"assets/images/tutorial-3-e098e071f33c1ca92f20ae39a703e908.png"},2462:function(t,e,a){e.Z=a.p+"assets/images/tutorial-4-f5fe3590e7e95f04b0542055eb56d586.png"}}]);