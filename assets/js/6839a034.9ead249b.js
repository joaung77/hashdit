"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7528],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,u=d["".concat(s,".").concat(m)]||d[m]||h[m]||i;return a?n.createElement(u,l(l({ref:t},c),{},{components:a})):n.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1783:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={slug:"PancakeSwap-Security-Report-14Sep2023",title:"PancakeSwap September 14th Weekly Security Report",authors:["Sebastian"],tags:["PancakeSwap","September",2023]},s=void 0,p={permalink:"/hashdit/blog/PancakeSwap-Security-Report-14Sep2023",source:"@site/blog/2023-09-14/2023-09-14.md",title:"PancakeSwap September 14th Weekly Security Report",description:"Disclaimer",date:"2023-09-14T00:00:00.000Z",formattedDate:"September 14, 2023",tags:[{label:"PancakeSwap",permalink:"/hashdit/blog/tags/pancake-swap"},{label:"September",permalink:"/hashdit/blog/tags/september"},{label:"2023",permalink:"/hashdit/blog/tags/2023"}],readingTime:3.195,truncated:!1,authors:[{name:"Sebastian Lim",title:"SCS@HashDit",url:"https://github.com/slim115",imageURL:"https://github.com/slim115.png",key:"Sebastian"}],frontMatter:{slug:"PancakeSwap-Security-Report-14Sep2023",title:"PancakeSwap September 14th Weekly Security Report",authors:["Sebastian"],tags:["PancakeSwap","September","2023"]},nextItem:{title:"PancakeSwap September 7th Weekly Security Report",permalink:"/hashdit/blog/PancakeSwap-Security-Report-07Sep2023"}},c={authorsImageUrls:[void 0]},d=[{value:"Disclaimer",id:"disclaimer",level:2},{value:"Overview",id:"overview",level:2},{value:"High Risk TVL protocol on PCS",id:"high-risk-tvl-protocol-on-pcs",level:2},{value:"Key themes on high risks:",id:"key-themes-on-high-risks",level:3},{value:"Integrations with PancakeSwap",id:"integrations-with-pancakeswap",level:2},{value:"Stay Safe!",id:"stay-safe",level:2},{value:"About HashDit?",id:"about-hashdit",level:2}],h={toc:d};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{align:"justify"},(0,i.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"The information provided through the BNB Chain community does not constitute advice or recommendation for investment or trading. Projects are listed in no particular order below. BNB Chain does not take responsibility for any of your investment decisions. Please seek professional advice before taking financial risks."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Contract names are there for reference only, there may be legitimate contracts which share the same name, always double check The contract addresses which are the unique identifier of any smart contract."))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pancakeswap.finance/"},"PancakeSwap")," is the most popular decentralized exchange native to BNB Chain. You can swap tokens, invest in yield farms and liquidity pools, and buy and sell collectibles. It is part of the ever-growing world of decentralized finance protocols. "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pancakeswap.finance/"},"PancakeSwap")," stands tall as the flagship DeFi platform within the BNB Smart Chain (BSC) ecosystem, however, risks exist in every DEX and blockchain ecosystem. HashDit diligently checks projects every week to identify potential threats within the PancakeSwap landscape, ensuring your trading experience is protected. Consider HashDit as a trusted guide that helps you navigate in DeFi by highlighting potential hazards and keeping your journey secure. Remember, vigilance and a proactive approach are vital for a safe and successful DeFi experience."),(0,i.kt)("h2",{id:"high-risk-tvl-protocol-on-pcs"},"High Risk TVL protocol on PCS"),(0,i.kt)("p",null,"In this week, there were ",(0,i.kt)("strong",{parentName:"p"},"41")," newly identified risky addresses.\n",(0,i.kt)("strong",{parentName:"p"},"Trending")," newly identified risky addresses: "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Address"),(0,i.kt)("th",{parentName:"tr",align:null},"ContractName"),(0,i.kt)("th",{parentName:"tr",align:null},"Weekly Active Transactions"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0xb1a1d06d42a43a8fcfdc7fdcd744f7ef03e8ad1a"),(0,i.kt)("td",{parentName:"tr",align:null},"HongKongDAO (HKD)"),(0,i.kt)("td",{parentName:"tr",align:null},"375")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0xac68931b666e086e9de380cfdb0fb5704a35dc2d"),(0,i.kt)("td",{parentName:"tr",align:null},"BNB Tiger INU ",(0,i.kt)("a",{parentName:"td",href:"https://bnbtiger.top/"},"https://bnbtiger.top/")),(0,i.kt)("td",{parentName:"tr",align:null},"317")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0x8624b3a4f29620390d06286df207f6791c243389"),(0,i.kt)("td",{parentName:"tr",align:null},"GDPToken"),(0,i.kt)("td",{parentName:"tr",align:null},"297")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0xd9628be9ef42b75ca171128e8ce32eceecd858fd"),(0,i.kt)("td",{parentName:"tr",align:null},"ZGC (ZGC)"),(0,i.kt)("td",{parentName:"tr",align:null},"289")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0x6f9f7632cc42397a1e062db5346f2a9f9bc73e92"),(0,i.kt)("td",{parentName:"tr",align:null},"BTR"),(0,i.kt)("td",{parentName:"tr",align:null},"178")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0x0a4e1bdfa75292a98c15870aef24bd94bffe0bd4"),(0,i.kt)("td",{parentName:"tr",align:null},"FOTAToken"),(0,i.kt)("td",{parentName:"tr",align:null},"117")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0x57ca2436f9f54f4909a521e24768e21e322cae88"),(0,i.kt)("td",{parentName:"tr",align:null},"JUPITER"),(0,i.kt)("td",{parentName:"tr",align:null},"115")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0x56b331c7e3d68306f26e07492125f0faa9d95343"),(0,i.kt)("td",{parentName:"tr",align:null},"Alcazar: LEO Token"),(0,i.kt)("td",{parentName:"tr",align:null},"78")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0x000000000482aa9817645c3d56aa2230f6573532"),(0,i.kt)("td",{parentName:"tr",align:null},"GPTChat (GPTC) - Fake_Phishing685"),(0,i.kt)("td",{parentName:"tr",align:null},"76")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0x014a087b646bd90e7dcead3993f49eb1f4b5f30a"),(0,i.kt)("td",{parentName:"tr",align:null},"GulfCoin"),(0,i.kt)("td",{parentName:"tr",align:null},"41")))),(0,i.kt)("h3",{id:"key-themes-on-high-risks"},"Key themes on high risks:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Exactly half of the newly identified risky addresses (56%) were through ",(0,i.kt)("strong",{parentName:"p"},"threat intelligence"),". These addresses are either confirmed rugpulls (project has already removed rugged) or scam tokens that have high risk of rugs. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Red Alarm projects")," are manually identified by our security team for being potential scams. These are identified from a project level, for example projects that utilize fake social media marketing, or create scam meme projects. They are labeled under the DApps section of this page(29%)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Another theme for these contracts is that they have a ",(0,i.kt)("strong",{parentName:"p"},"privileged role"),", e.g owner is an EOA, which could mean some centralization risk as the owner can mint or toggle honeypot mode at will, so there could be rugpull risk. This portion represents 5% of the total newly identified risky addresses."))),(0,i.kt)("p",null,"Refer to this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hashdit/hashdit/blob/main/gitbook_source_code/data/14092024_most_popular_risky_address.csv"},"link")," for the full list."),(0,i.kt)("p",null,"Tip: Filter by Top_TVL_Risky_Pool / Trending_Risky_Pool / Trending_Risky_Tokens to retrieve the risky addresses from different sources."),(0,i.kt)("h2",{id:"integrations-with-pancakeswap"},"Integrations with PancakeSwap"),(0,i.kt)("p",null,"Hashdit has partnered with PancakeSwap to integrate the DappBay\u2019s Red Alarm. The risk score level reflects how risky the interacted token is, helping users make better informed decisions."),(0,i.kt)("p",null,"Example: Fake Circle Token - 0x84ef2e2e977062da3cfc12c038fa3ce2d42d01b1\n",(0,i.kt)("img",{alt:"IMG-1",src:a(6327).Z,width:"512",height:"227"})),(0,i.kt)("p",null,"The RedAlarm keyword will link to the risk scanner as seen in the image below.\n",(0,i.kt)("img",{alt:"IMG-2",src:a(7515).Z,width:"512",height:"305"})),(0,i.kt)("p",null,"Please take note that the risk level in Pancake & Risk Scanner might be different, because ",(0,i.kt)("a",{parentName:"p",href:"https://www.hashdit.io/en"},"Hashdit")," use more conservative strategies for PancakeSwap than ",(0,i.kt)("a",{parentName:"p",href:"https://dappbay.bnbchain.org/"},"DappBay")," risk scanner."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IMG-3",src:a(208).Z,width:"512",height:"279"})),(0,i.kt)("h2",{id:"stay-safe"},"Stay Safe!"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.hashdit.io/en"},"HashDit")," advises you to act with caution in general, but ask that you take particular care when dealing with the projects we highlight as risky on our weekly update. Continue enjoying the BNBChain ecosystem and most importantly, stay SAFU!"),(0,i.kt)("h2",{id:"about-hashdit"},"About HashDit?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.hashdit.io/en"},"HashDit")," is building a safe blockchain ecosystem on BNB Chain by providing threat intelligence, code auditing and instant analysis for smart contracts. In the vast and ever-evolving world of Defi investing, ",(0,i.kt)("a",{parentName:"p",href:"https://www.hashdit.io/en"},"HashDit")," stands as a beacon of trust and knowledge for everyday investors.  ",(0,i.kt)("a",{parentName:"p",href:"https://www.hashdit.io/en"},"HashDit")," is a member of ",(0,i.kt)("a",{parentName:"p",href:"https://www.bnbchain.org/en/blog/introducing-avengerdao-the-security-initiative-protecting-users-from-malicious-actors/"},"AvengerDAO"),", which is a community-driven initiative created to protect users and projects on BNB Chain from malicious actors and activity.")))}m.isMDXComponent=!0},6327:function(e,t,a){t.Z=a.p+"assets/images/1-39f22afd3daca8d107fbdfce62c59f42.png"},7515:function(e,t,a){t.Z=a.p+"assets/images/2-5d183ccb20239e215594155476486c92.png"},208:function(e,t,a){t.Z=a.p+"assets/images/3-543dc73a3c9282f4fb78be5fae6639a3.jpeg"}}]);