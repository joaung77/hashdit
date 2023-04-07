"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1337],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var s=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,s,i=function(e,t){if(null==e)return{};var a,s,i={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=s.createContext({}),c=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(a),p=i,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||n;return a?s.createElement(m,r(r({ref:t},u),{},{components:a})):s.createElement(m,r({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<n;c++)r[c]=a[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}p.displayName="MDXCreateElement"},955:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return h}});var s=a(7462),i=a(3366),n=(a(7294),a(3905)),r=["components"],o={slug:"The-risks-and-future-of-crypto-wallets",title:"The Risks and Future of Crypto Wallets",authors:["Himura K"],tags:["smart-contract-security","standards","best practices","crypto wallets","smart wallets","mpc","multisig","multi-signature"]},l="The Risks and Future of Crypto Wallets",c={permalink:"/hashdit/blog/The-risks-and-future-of-crypto-wallets",source:"@site/blog/2023-01-06/2023-01-06.md",title:"The Risks and Future of Crypto Wallets",description:"Introduction",date:"2023-01-06T00:00:00.000Z",formattedDate:"January 6, 2023",tags:[{label:"smart-contract-security",permalink:"/hashdit/blog/tags/smart-contract-security"},{label:"standards",permalink:"/hashdit/blog/tags/standards"},{label:"best practices",permalink:"/hashdit/blog/tags/best-practices"},{label:"crypto wallets",permalink:"/hashdit/blog/tags/crypto-wallets"},{label:"smart wallets",permalink:"/hashdit/blog/tags/smart-wallets"},{label:"mpc",permalink:"/hashdit/blog/tags/mpc"},{label:"multisig",permalink:"/hashdit/blog/tags/multisig"},{label:"multi-signature",permalink:"/hashdit/blog/tags/multi-signature"}],readingTime:13.305,truncated:!1,authors:[{name:"Himura K.",title:"SCS@HashDit",key:"Himura K"}],frontMatter:{slug:"The-risks-and-future-of-crypto-wallets",title:"The Risks and Future of Crypto Wallets",authors:["Himura K"],tags:["smart-contract-security","standards","best practices","crypto wallets","smart wallets","mpc","multisig","multi-signature"]},prevItem:{title:"Multisig Wallet Migration Guide",permalink:"/hashdit/blog/smart-wallet-migration-guide"},nextItem:{title:"2022 End of Year BSC Security Report",permalink:"/hashdit/blog/bsc-2022-end-of-year-report"}},u={authorsImageUrls:[void 0]},h=[{value:"Introduction",id:"introduction",level:2},{value:"Crypto Wallets and Single Point of Failure (SPOF)",id:"crypto-wallets-and-single-point-of-failure-spof",level:2},{value:"Loss of Seed Phrases and Private Keys",id:"loss-of-seed-phrases-and-private-keys",level:3},{value:"Stolen or Leaked Private Keys and Seed Phrases",id:"stolen-or-leaked-private-keys-and-seed-phrases",level:3},{value:"The Secure Future of Crypto Wallets",id:"the-secure-future-of-crypto-wallets",level:2},{value:"Multi-Party Computation Wallets",id:"multi-party-computation-wallets",level:3},{value:"Smart Wallets",id:"smart-wallets",level:3},{value:"Conclusion on the Security Perspective.",id:"conclusion-on-the-security-perspective",level:2}],d={toc:h};function p(e){var t=e.components,o=(0,i.Z)(e,r);return(0,n.kt)("wrapper",(0,s.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("div",{align:"justify"},(0,n.kt)("p",null,"\u2003","Crypto wallets are a piece of software used to manage and transfer crypto assets. But different from traditional wallets, no crypto assets are stored in them. Crypto wallets, however, are composed of a public key that is associated with the wallet's public address used to send someone crypto assets. and, private keys, which are necessary to access and manage the associated assets. Crypto assets stay on chain, their smart contract state changes to reflect the changing of owners."),(0,n.kt)("p",null,"\u2003","Crypto wallets are the first component a new user has to start learning. And they are fundamental for anyone wanting to interact with crypto assets, decentralized applications (Dapps) - in Decentralized Finance, Non-Fungible Tokens, Decentralized Autonomous Organizations, etc."),(0,n.kt)("p",null,"\u2003","Even if under the hood, crypto wallets rely on the usage of secure asymmetric cryptographic keys, managing such keys has always been a security challenge in the IT industry. Over the years, asymmetric keys have been used to secure communications between parties, by ensuring message confidentiality and are heavily used to secure internet communications between browsers and servers, with the famous HTTPS standard."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"www secure communications",src:a(9640).Z,width:"1280",height:"768"})),(0,n.kt)("div",{align:"center"},(0,n.kt)("i",null,"Figure 1"),": ",(0,n.kt)("u",null,"Worldwide secure communication with TLS and HTTPS.")),(0,n.kt)("br",null),(0,n.kt)("p",null,"\u2003","Now, cryptographic keys have the challenge of securing crypto assets. This is a completely new use case that presents more risks than using public key infrastructure (PKI) to secure messages between parties over the internet. The financial impacts cannot be compared. Instead of being stored securely in Hardware Security Module (HSM), managed by a Key Management System secured by cloud providers with years of experience and a team of experts, crypto wallets can now be stored in a browser plugin, in a web app, mobile app or in a desktop app. Lot of relevant characteristics exist for crypto wallets: are they hot wallets, cold wallets, paper wallets, or hardware wallets? Do they implement hierarchical deterministic standards, are they blockchain-specific, multi-chain? Are they self-custody or 3rd party custody? With all these questions, arise security concerns that we are not addressing in the article."),(0,n.kt)("p",null,"\u2003","Mismanaging crypto private keys has been a common cause of loss of funds for investors and a reason for Dapps to be hacked. In the long run, this becomes a major problem for wide crypto adoption. Especially when compared with today's banking system security and user experience."),(0,n.kt)("p",null,"\u2003","So far, the Web3 industry has been getting inspiration from the IT industry's best practices, when considering the public key infrastructure. However, is it enough? Should the Web3 industry create new standards dedicated to such use cases?")),(0,n.kt)("h2",{id:"crypto-wallets-and-single-point-of-failure-spof"},"Crypto Wallets and Single Point of Failure (SPOF)"),(0,n.kt)("div",{align:"justify"},(0,n.kt)("p",null,"\u2003","However, the usage of public keys to managing assets associated with a crypto wallet is unfortunately risky. Indeed, the seed phrase and the private keys become a central security element that can put all the funds associated at risk. In this article, we are further evaluating the risks associated with the loss or the theft/leak of private keys.")),(0,n.kt)("h3",{id:"loss-of-seed-phrases-and-private-keys"},"Loss of Seed Phrases and Private Keys"),(0,n.kt)("div",{align:"justify"},(0,n.kt)("p",null,"\u2003"," If a private key or a seed phrase is lost, users are not able to access their crypto assets. According to Chainalysis, 20% or $140 billion dollars of all bitcoins are lost. Many stories of users that lost their wallet password, or the hard drive containing the wallets, seed phrases, and hardware wallets. Once keys are lost, by design, for asymmetric cryptographic keys to be secure, it is impossible to regenerate the private key. Therefore, funds are lost forever.")),(0,n.kt)("h3",{id:"stolen-or-leaked-private-keys-and-seed-phrases"},"Stolen or Leaked Private Keys and Seed Phrases"),(0,n.kt)("div",{align:"justify"},(0,n.kt)("p",null,"\u2003","Similarly, if these sensitive pieces of information are stolen, malicious actors get full control of one's assets. The most common and most effective type of attacks in the crypto industry is the usage of social engineering attacks, phishing and scams are still the most profitable ways to steal crypto assets because they are single and rapid to be put into place, one only need to build a fake website pretending to be real Web3 projects, or fake wallet application that steal the data one inadvertently shares with them. In many cases, such malicious applications request seed phrases or private keys, which should never be shared - only if one migrates their wallet\u2019s private keys to another wallet provider. To summarize, as a user or investor, it just requires a small amount of inattention for one to click a malicious link and interact with the underlying application for them to lose part of all of their crypto assets."),(0,n.kt)("p",null,"\u2003","For projects, it becomes a real problem to manage a considerable amount of crypto assets. The project is only as secure as their less secure link. Not only are they susceptible to phishing attacks, but also, to hacks and sometimes internal jobs or an employee who went rogue that could be covered as hacks."),(0,n.kt)("p",null,"\u2003","Note: If one discovers, their private keys or seed phrases have been compromised, they should move any remaining assets to a new safe wallet as soon as possible!"),(0,n.kt)("p",null,"\u2003","This is why we consider crypto wallets a single point of failure. A single point of failure is a part of a system that, if it fails, causes the entire system (Decentralized application or wallet) to fail. It is a critical component or a bottleneck that, if it becomes unavailable, causes the system to be unavailable as well. It is important to identify and mitigate single points of failure in order to increase the reliability and availability of a system."),(0,n.kt)("p",null,"\u2003","In a Public Key Infrastructure (PKI) system, a single point of failure can exist if the private key associated with a particular public key is lost or compromised."),(0,n.kt)("p",null,"\u2003","So let\u2019s consider the classic dilemma in the web3 ecosystem: \u201cNot your crypto, not your coins\u201d - the dilemma between self-custody such as hardware wallets, and third-party custody, such as in exchanges. On the one hand, one should take full ownership of managing their crypto wallets, using, storing, and securing them on their own. They would be subjected to the existing risk of losing or mismanaging them. On the other hand, some users would rather delegate the management of their crypto wallet to a third party that is specialized in the matter. This is a valid debate."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Self custody",src:a(6209).Z,width:"1600",height:"1068"})),(0,n.kt)("div",{align:"center"},(0,n.kt)("i",null,"Figure 2"),": ",(0,n.kt)("u",null,"Ledger self-custody hardware wallet.")),(0,n.kt)("br",null),"\u2003It is important however for every end-user to understand the risks associated with the management of crypto wallets. But when thinking of mass adoption, there is always a community that would rather pay not to have to waste time or to worry about the risks and responsibility that it is to securely manage their crypto life savings. Such groups would rather rely on a trusted third-party entity to do it for them. Similar to what we have done over the years with banks and insurance.",(0,n.kt)("p",null,(0,n.kt)("img",{alt:"3rd party custody illustraction",src:a(8065).Z,width:"1024",height:"1024"})),(0,n.kt)("div",{align:"center"},(0,n.kt)("i",null,"Figure 3"),": ",(0,n.kt)("u",null,"Illustration of a third-party custody safe.")),(0,n.kt)("br",null),"\u2003However, in this article, we are not evaluating the many practical and philosophical pros and cons of each one of the options and are limiting ourselves to mentioning that each option implies a very different level of responsibilities and requires different levels of expertise in cybersecurity, in general. Self-custody, with today\u2019s technology, is still risky even for individuals with technical knowledge.",(0,n.kt)("p",null,"\u2003","But, many solutions are in place to address the single point of failure problem and enable a more secure self-custody experience for users and web3 projects. So let\u2019s discover the solutions.")),(0,n.kt)("h2",{id:"the-secure-future-of-crypto-wallets"},"The Secure Future of Crypto Wallets"),(0,n.kt)("div",{align:"justify"},(0,n.kt)("p",null,"\u2003","To mitigate the risks of a single point of failure in PKI, over the years organizations have created securities policies and best practices gathered in security frameworks such as the ISO/IEC 27099. In such a framework, some of the guidelines suggest the implementation of robust key management protocols in combination with HSMs, as well as regular testing and monitoring of these systems for vulnerabilities. This includes implementing measures such as backups and redundant solutions to ensure that the system remains functional in the event of a key management failure, at the software and hardware level."),(0,n.kt)("p",null,"\u2003","However, the crypto space has changed the way we use public key infrastructure. Now, the new practice is to use it for managing crypto assets. And PKI's traditional policies and procedures did not take into account the usage of such mechanisms for crypto asset management. The web3 industry had to develop solutions for this new use case of asymmetric keys being used as wallets."),(0,n.kt)("p",null,"\u2003","Thanks to cryptographic techniques such as signature verification, multi-party computing (MPC), and smart contracts technology, two new solutions are being considered the future of crypto wallets because of their ease of use, flexibility, security, control, compatibility with current existing solutions while addressing the problems of a single point of failure. On the one hand, there are the Multi-party Computation Wallets and the Smart Wallets, also known as multi-signature (multisig) wallets.")),(0,n.kt)("h3",{id:"multi-party-computation-wallets"},"Multi-Party Computation Wallets"),(0,n.kt)("div",{align:"justify"},"\u2003Firstly, multi-party computation (MPC) wallets are crypto asset wallets that can use MPC cryptographic techniques such as secret sharing, homomorphic encryption, zero-knowledge proof, or oblivious transfer. The goal of such solutions is to enable different parties to manage one private key and the assets associated with it, without one single participant knowing the whole private key. This means, not a single entity knows the private key on his own, which prevents them from accessing the funds.",(0,n.kt)("p",null,"\u2003","Such particularity makes an MPC wallet a tool for creating a shared crypto account, with family members or with your business partners. MPC wallets help in introducing trust when required to manage crypto assets together."),(0,n.kt)("p",null,"\u2003","MPC wallets are still in their early days, mainly because (secure) multi-party computation is still an evolving field in cryptographic and should still evolve in the next few years with great new techniques."),(0,n.kt)("p",null,"Here are some of the MPC ",(0,n.kt)("b",null,"advantages"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"Off-chain recovery."),(0,n.kt)("li",null,"Chain agnostic."),(0,n.kt)("li",null,"No gas overhead."),(0,n.kt)("li",null,"No need for change in Dapp for integration.")),(0,n.kt)("p",null,"Some of the ",(0,n.kt)("b",null,"drawbacks")," are:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"Early stage technology, libraries implementations, which is not great from a security point of view because they can have undetected vulnerabilities."),(0,n.kt)("li",null,"Immutability and lack of redundancy - once created, one cannot change the signers of the associated wallets. In case one loses their wallet, all the funds stored in the MPC will stay blocked."),(0,n.kt)("li",null,"All wallets associated with it have to sign. There is no m-over-n signature architecture.")),(0,n.kt)("h3",{id:"smart-wallets"},"Smart Wallets"),(0,n.kt)("p",null,"\u2003","Secondly, smart (contract) wallets or multisig wallets have been used and battle-tested for longer. Indeed, they are smart contracts deployed on chains and publicly available for anyone to verify. With smart wallets, similarly to MPC wallets, it is possible for a group of individuals to manage together crypto assets associated with the main smart wallet."),(0,n.kt)("p",null,"\u2003","Multisig wallet owners are able to set up the minimum number of signatures required for the wallet to validate and authorize transactions. This allows them to distribute the keys associated with the main wallet account to other parties, decentralizing the responsibility of managing the funds of a project and creating redundancy."),(0,n.kt)("p",null,"\u2003","Practically speaking, to authorize a transaction multiple parties have to read and validate the transaction before it can be taken into account. Thanks to this mechanism, if one of the private keys is lost or stolen, a malicious actor will not be able to access the funds without the other wallet owners. And they are notified someone is performing a suspicious transaction that can be confirmed directly with other key managers. Such a mechanism provides an additional layer of security for the wallet and the crypto assets it holds."),(0,n.kt)("p",null,"\u2003","Multisig wallets are important for individual users who want to keep ownership of their crypto assets. This helps solve the problem of lost hard drives where crypto wallets or seed phrases were stored. If one gets lost, they still can manage the funds and reconfigure the multisig and remove the lost key and add a new one."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2 of 3 Multisig Wallet",src:a(8400).Z,width:"1458",height:"736"})),(0,n.kt)("div",{align:"center"},(0,n.kt)("i",null,"Figure 4"),": ",(0,n.kt)("u",null,"2 of 3 Multi-Signature wallet.")),(0,n.kt)("br",null),(0,n.kt)("p",null,"\u2003","Additionally, multisig wallets can provide an additional layer of security for organizations or groups such as DAO that hold large amounts of crypto assets. By requiring multiple signatures for transactions, multisig wallets can help to prevent unauthorized access or misuse of the funds. One of the main actors that can benefit from multisig wallets is the web3 projects. In recent history, many hacks such as The AscenDex hack as well as the Ankr protocol hack happened because of leaked/stolen private keys. These two projects suffered major financial losses severely impacting not only the project financials but their partners and the trust placed in them by the users, investors, and the community. Multi-sig could become a new standard."),(0,n.kt)("p",null,"\u2003","Multi sig has also a very interesting added value. From the perspective of web3 projects and protocols: The increasing number of smart contracts in a decentralized application and the increasing complexity of their architecture and interactions, it becomes fundamental to provide transparency and visibility on key performance indicators such as the usage of a secure crypto wallet. They fulfill two main roles: managing crypto assets, but also performing important actions in decentralized applications such as updating the smart contract, pausing a protocol, changing the fees, etc."),(0,n.kt)("p",null,"\u2003","Such information is relevant not only for web3 projects' internal security and monitoring but also to increase trust between them and business partners, customers and investors. Since the blockchain is a single source of truth, all the stakeholders can easily verify the security measure on the chain,"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Observability and Monitoring",src:a(6233).Z,width:"1063",height:"1600"})),(0,n.kt)("div",{align:"center"},(0,n.kt)("i",null,"Figure 5"),": ",(0,n.kt)("u",null,"Observability and Monitoring.")),(0,n.kt)("br",null),"\u2003 Smart wallets are one of the most advanced security solutions for managing crypto wallets for projects to allow anyone to certify they are using proper security measures to protect their applications and as a consequence, protect their users, their business partners, and their community.",(0,n.kt)("p",null,"Smart wallets are quite versatile, enabling more features, and here are a few of them:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"Timelock - prevent spending before a certain date."),(0,n.kt)("li",null,"Spending limits."),(0,n.kt)("li",null,"Mutability, add and remove keys or signers after the wallet is set up."),(0,n.kt)("li",null,"Gas abstractions and pay for fees with other tokens than network tokens."),(0,n.kt)("li",null,"Transaction batching.")),(0,n.kt)("p",null,"Some of the ",(0,n.kt)("b",null,"drawbacks")," are:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"The overhead for the multi-wallet creation is about 30-40.000 gas and an additional 2.000 gas on the subsequent ones."),(0,n.kt)("li",null,"Requires Dapp adoption of the EIP 1271 standard."))),(0,n.kt)("h2",{id:"conclusion-on-the-security-perspective"},"Conclusion on the Security Perspective."),(0,n.kt)("div",{align:"justify"},(0,n.kt)("p",null,"\u2003","MPC and Smart Wallets are the future technologies for crypto wallets even if MPC and its cryptographic technologies are still being developed and standardized. Multisig, on the other hand, has been around for longer, and battle-tested and even hacked with the Parity Multisig Hack which made projects put more effort into smart wallet security. Both types of wallets create redundancy to prevent the mismanagement of funds by one user."),(0,n.kt)("p",null,"\u2003","Even if MPC wallets display a simpler and off-chain process for wallet creation and recovery, being a little cheaper to use and more compatible with decentralized applications, they lack flexibility once they are created. Losing any of the keys required to sign a transaction prevents the parties from accessing the wallet's funds. Smart wallets on the other hand are more flexible, users can be added or removed from the multisig wallet, and keys can be rotated, which is important in case of a security breach or a lost key. Finally, because they are smart contracts, they can implement very different functional features such as paying limits, lack of funds, and others."),(0,n.kt)("p",null,"\u2003","We prefer Multi-signature wallets over other options such as multi-party computation wallets because the latter cannot be easily identified nor audited on-chain. Any project user, business partner, or investor can verify on the chain they are using security best practices to reduce the risks associated with a compromised private key be it an internal job or an external hack, it just makes the whole system more redundant and resilient.")))}p.isMDXComponent=!0},8065:function(e,t,a){t.Z=a.p+"assets/images/3rd_party_custody-a2445bffb53111a46149b4e2f0ba65f7.png"},6233:function(e,t,a){t.Z=a.p+"assets/images/monitoring-67cc5b802b6652daed38fdef3c7a999e.jpeg"},8400:function(e,t,a){t.Z=a.p+"assets/images/multisig-d2f2320eb53c484cb679756e125e62cb.png"},9640:function(e,t,a){t.Z=a.p+"assets/images/secure_www-1a85deeb23ec55bd291dee227ac874f8.png"},6209:function(e,t,a){t.Z=a.p+"assets/images/self_custody-f5e7d8a723de534f1465c27f62783991.png"}}]);