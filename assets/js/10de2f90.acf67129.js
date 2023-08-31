"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1752],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=i,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return a?n.createElement(m,r(r({ref:t},h),{},{components:a})):n.createElement(m,r({ref:t},h))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9364:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],s={slug:"bsc-2023-half-year-report",title:"2023 H1 BSC Security Report",authors:["Sebastian","Chris"],tags:["smart-contract-security","half-year-report","bsc",2023]},l=void 0,c={permalink:"/hashdit/blog/bsc-2023-half-year-report",source:"@site/blog/2023-08-01/2023-08-01.md",title:"2023 H1 BSC Security Report",description:"Overview",date:"2023-08-01T00:00:00.000Z",formattedDate:"August 1, 2023",tags:[{label:"smart-contract-security",permalink:"/hashdit/blog/tags/smart-contract-security"},{label:"half-year-report",permalink:"/hashdit/blog/tags/half-year-report"},{label:"bsc",permalink:"/hashdit/blog/tags/bsc"},{label:"2023",permalink:"/hashdit/blog/tags/2023"}],readingTime:16.165,truncated:!1,authors:[{name:"Sebastian Lim",title:"SCS@HashDit",url:"https://github.com/slim115",imageURL:"https://github.com/slim115.png",key:"Sebastian"},{name:"Chris",title:"SCS@HashDit",key:"Chris"}],frontMatter:{slug:"bsc-2023-half-year-report",title:"2023 H1 BSC Security Report",authors:["Sebastian","Chris"],tags:["smart-contract-security","half-year-report","bsc","2023"]},prevItem:{title:"PancakeSwap August 24th Weekly Security Report",permalink:"/hashdit/blog/PancakeSwap-Security-Report-24Aug2023"},nextItem:{title:"Zero-Knowledge Proof and Its Application in Blockchain",permalink:"/hashdit/blog/zero-knowledge-proof-and-its-application-in-blockchain"}},h={authorsImageUrls:[void 0,void 0]},d=[{value:"Overview",id:"overview",level:2},{value:"Disclaimer",id:"disclaimer",level:4},{value:"BSC Innovations",id:"bsc-innovations",level:4},{value:"2023 H1 in focus",id:"2023-h1-in-focus",level:2},{value:"General",id:"general",level:3},{value:"Comparison with H1 previous years",id:"comparison-with-h1-previous-years",level:3},{value:"Type of attack vectors",id:"type-of-attack-vectors",level:3},{value:"Specific attack vectors",id:"specific-attack-vectors",level:3},{value:"Type of projects",id:"type-of-projects",level:3},{value:"Top 10 incidents in 2023 H1",id:"top-10-incidents-in-2023-h1",level:3},{value:"Fintoch - $31.6 Million Loss",id:"fintoch---316-million-loss",level:4},{value:"ippswap - $14.5 Million Loss",id:"ippswap---145-million-loss",level:4},{value:"Safemoon - $8.9 Million Loss",id:"safemoon---89-million-loss",level:4},{value:"SwapX - $7.3 Million Loss",id:"swapx---73-million-loss",level:4},{value:"Atlantis Loans - $3.5 Million Loss",id:"atlantis-loans---35-million-loss",level:4},{value:"$FUT - $2.7 Million Loss",id:"fut---27-million-loss",level:4},{value:"Circulate - $2.3 Million Loss",id:"circulate---23-million-loss",level:4},{value:"YieldRobot - $2.1 Million Loss",id:"yieldrobot---21-million-loss",level:4},{value:"LianGo Protocol - $1.6 Million Loss",id:"liango-protocol---16-million-loss",level:4},{value:"DeusDAO (DEI) - $1.3 Million Loss",id:"deusdao-dei---13-million-loss",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Hashdit",id:"hashdit",level:4}],p={toc:d};function u(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("div",{align:"justify"},(0,o.kt)("p",null,"This report delves into the security events occurring on BNB Smart Chain (BSC) during 2023 H1. It analyzes the types of projects that were targeted and whether they shared common attack techniques. Additionally, the report examines the financial implications of these occurrences."),(0,o.kt)("h4",{id:"disclaimer"},"Disclaimer"),(0,o.kt)("p",null,"The financial data presented in this report has undergone thorough verification through our internal monitoring system, ensuring its accuracy. The data is derived from the $USD valuation of the cryptocurrency at the time of the incident. It's important to note that due to the inherent volatility of cryptocurrency prices, there may be variations in the total amount lost based on current token valuations."),(0,o.kt)("p",null,"Furthermore, the financial data might not fully reflect the true \u201cexploited amount\u201d of the incident. This is especially true for scams where the total scammed amount is usually mixed with an initial base amount injected by the scam project party."),(0,o.kt)("h4",{id:"bsc-innovations"},"BSC Innovations"),(0,o.kt)("p",null,"The first half of 2023 has been an exciting journey for BNB Smart Chain (BSC), marked by continuous innovation and the tireless efforts of the BNB Chain team in crafting and advancing cutting-edge technologies."),(0,o.kt)("p",null,"Just to name a few in H1:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://greenfield.bnbchain.org/en"},"Greenfield Testnet")," went Live: The Greenfield testnet, is an open-source project aimed at providing a scalable and efficient data availability layer for decentralized applications (dApps).")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IMG-1",src:a(785).Z,width:"524",height:"295"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://forum.bnbchain.org/t/a-proposal-for-adopting-a-lower-transaction-fee-cost-on-bnb-smart-chain-to-enhance-competitiveness/"},"Reduced Transaction Costs"),": Following extensive discussions, BSC validators have lowered transaction costs from ",(0,o.kt)("strong",{parentName:"p"},"5 Gwei to 3 Gwei"),". This reduction in fees will help drive network adoption, making BNB Chain an even more attractive platform for developers and users. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/docs/BSC-FAQs-validator"},"BSC Validators Self-Stake Update"),": Thanks to an on-chain governance proposal, validators significantly reduced the cost to become a BNB Smart Chain validator, fostering a more diverse and robust ecosystem. This change greatly benefits the community by improving entry cost to be a BSC validator. Self-Staked moved from ",(0,o.kt)("strong",{parentName:"p"},"10,000 BNB")," to ",(0,o.kt)("strong",{parentName:"p"},"2,000 BNB"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"BNB Chain exhibited a significant rise in market share, demonstrating steady growth in the percentage of verified smart contracts. Its market share increased from ",(0,o.kt)("strong",{parentName:"p"},"38%")," at the beginning of Q2 to ",(0,o.kt)("strong",{parentName:"p"},"45%")," by the end of H1. This performance underscores BNB Chain's dominance and the high level of trust placed in its infrastructure by developers and users."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IMG-2",src:a(2421).Z,width:"2860",height:"1426"})),(0,o.kt)("p",{align:"center"},"Figure 1: Number of contracts verified weekly across chains (Refer to the Red box for 2023 H1 data)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://opbnb.bnbchain.org/en"},"opBNB")," and ",(0,o.kt)("a",{parentName:"li",href:"https://zkbnb.bnbchain.org/"},"zkBNB"),": These dynamic layer 2 solutions are poised to revolutionize the BNB Chain ecosystem by further enhancing the capabilities of BNB Chain\u2019s ecosystem; offering developers a boundless horizon to pioneer groundbreaking advancements. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IMG-3",src:a(7128).Z,width:"343",height:"193"}),"\n",(0,o.kt)("img",{alt:"IMG-4",src:a(8372).Z,width:"345",height:"195"})),(0,o.kt)("p",null,"[Refer to the blogs ",(0,o.kt)("a",{parentName:"p",href:"https://www.bnbchain.org/en/blog/bnb-chain-q1-tech-updates-innovations-and-opportunities-for-developers/"},"1"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.bnbchain.org/en/blog/web3-in-numbers-verified-smart-contracts-surged-in-q2-2023-despite-bear-market/"},"2")," released by BNBChain for more information]"),(0,o.kt)("h2",{id:"2023-h1-in-focus"},"2023 H1 in focus"),(0,o.kt)("h3",{id:"general"},"General"),(0,o.kt)("p",null,"A comprehensive overview reveals that security incidents on BSC resulted in an aggregate loss of nearly $101.84 million. An examination of the monthly breakdown highlights notable patterns. Specifically, the months of May, March, and June emerged as pivotal periods, witnessing the highest recorded losses.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IMG-5",src:a(5488).Z,width:"2882",height:"1248"})),(0,o.kt)("p",{align:"center"},"Figure 2: Amount of stolen funds in dollars per month in 2023 H1"),(0,o.kt)("p",null,"This chart shows the number of projects impacted by exploits in 2023 H1."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IMG-6",src:a(7874).Z,width:"2882",height:"728"})),(0,o.kt)("p",{align:"center"},"Figure 3: Number of different project impacted by exploits"),(0,o.kt)("p",null,"In total, there were 199 incidents on BSC."),(0,o.kt)("p",null,"As seen in Figure 3, the highest number of security incidents took place in June."),(0,o.kt)("h3",{id:"comparison-with-h1-previous-years"},"Comparison with H1 previous years"),(0,o.kt)("p",null,"When we compare the data with H1 of previous years, there is a decreasing trend, which can signify that the security posture of BNB Chain has improved over the years."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IMG-7",src:a(4172).Z,width:"2882",height:"648"})),(0,o.kt)("p",{align:"center"},"Figure 4: Financial Loss across the previous H1 of 2020 - 2023"),(0,o.kt)("h3",{id:"type-of-attack-vectors"},"Type of attack vectors"),(0,o.kt)("p",null,"Out of the 199 security incidents, hacks took up 66.3%, 33.2% were scams. However,  1 particular incident (0.5%) was a white-hat hack. The white-hat ",(0,o.kt)("a",{parentName:"p",href:"https://cointelegraph.com/news/hashflow-users-made-whole-after-600k-exploit"},"hack")," is related to a Hashflow project, where an old contract had an Open Approval, this means that any users that have approved funds to the victim contract can have his existing funds stolen."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IMG-8",src:a(5090).Z,width:"2882",height:"848"})),(0,o.kt)("p",{align:"center"},"Figure 5: Proportion of different type of exploits"),(0,o.kt)("p",null,"However, it is interesting to note that even when the number of hacks are nearly doubled to that of scams, the financial impact of hacks were less significant than the ones related to the scams. The total financial loss of hacks ($35m) was nearly half of the loss to scams ($66m), as shown below in Figure 6 below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IMG-9",src:a(741).Z,width:"2882",height:"848"})),(0,o.kt)("p",{align:"center"},"Figure 6: Financial impact measured in dollars comparing different types of incidents"),"Looking at the comparison with 2022 H1, we observed that this trend was actually reversed! In 2022, the number of scam incidents was double that of hack cases, with the financial loss of hacks being double that of scams. You can refer to our previous [report]((https://hashdit.github.io/hashdit/blog/bsc-2022-end-of-year-report/)) for more information.",(0,o.kt)("p",null,"The observed trend potentially signifies an escalating presence of scammers within the crypto space. Their tactics continuously evolve, challenging users' vigilance. Furthermore, smaller, lesser-known projects may exhibit comparatively lower emphasis on security measures. This underscores the pressing need for heightened awareness and diligence across the ecosystem to safeguard against emerging threats. "),(0,o.kt)("h3",{id:"specific-attack-vectors"},"Specific attack vectors"),(0,o.kt)("p",null,"Figure 7 displays the specific attack vectors against its financial loss in 2023 H1."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IMG-10",src:a(9038).Z,width:"2882",height:"888"})),(0,o.kt)("p",{align:"center"},"Figure 7: Proportion of the funds lost comparing the different type of vulnerabilities"),(0,o.kt)("p",null,"Looking at the breakdown, the most common loss of funds was attributed to Rugpulls (25%),  while the second most common attack vector was due to  Reflection Vulnerability. Several token smart contracts deployed on BSC utilize the Reflection mechanism for token holders to gain dividends, however the reflection implementation might be flawed, leading to its liquidity pool being drained by malicious actors. The third most common attack vector was Price Manipulation at 8.2%. This is common as well since poorly designed smart contracts rely on the instantaneous price of liquidity pools, and hence can be easily manipulated by a large Swap trade or Flash Loan by hackers."),(0,o.kt)("h3",{id:"type-of-projects"},"Type of projects"),(0,o.kt)("p",null,"When comparing the types of project with the observed financial loss, a whopping 98.8% of financial loss were attributed to DeFi projects.\nThe second most common type of projects that were targeted wasBridge projects at 0.6%, followed by GameFi and Metaverse projects at 0.3% and 0.2% respectively."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IMG-11",src:a(6349).Z,width:"2882",height:"888"})),(0,o.kt)("p",{align:"center"},"Figure 8: Proportion of funds lost comparing the type of project"),(0,o.kt)("p",null,"With a large proportion of fiat loss associated with DeFi projects, this  that DeFi projects are still the most common type of crypto project in the space. At the same time, it shows how important it is for users to only invest in reputable and well audited projects, and to stay clear of potential rugpulls and vulnerabilities."),(0,o.kt)("h3",{id:"top-10-incidents-in-2023-h1"},"Top 10 incidents in 2023 H1"),(0,o.kt)("p",null,"The following were the top 10 security incidents in terms of financial loss in 2023 H1. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IMG-12",src:a(2288).Z,width:"2882",height:"1008"})),(0,o.kt)("p",{align:"center"},"Figure 9: Top exploits measured in dollars in 2023 H1 on the BNB Smart Chain"),(0,o.kt)("h4",{id:"fintoch---316-million-loss"},"Fintoch - $31.6 Million Loss"),(0,o.kt)("p",null,"On 25-May-2023, Fintoch, a Ponzi platform was reported to have rugpulled $31.6 million USD. The funds were since bridged to multiple addresses on Tron and Ethereum. Its users reported that they could not withdraw their funds."),(0,o.kt)("p",null,"Fintoch advertises themselves as a blockchain financial platform built by Morgan Stanley, and users can get 1% return on investment every day. The team\u2019s page on the Fintoch website refers \"Bobby Lambert'' as their CEO, when in fact he did not exist and was, in fact,  a paid actor. Earlier, the Singaporean government and Morgan Stanley both ",(0,o.kt)("a",{parentName:"p",href:"https://www.morganstanley.com/content/dam/msdotcom/global-offices/pdf/Indonesia/Indonesia_Fintoch_Important_Notice.pdf"},"issued")," warnings about this \u201cinvestment plan\u201d."),(0,o.kt)("h4",{id:"ippswap---145-million-loss"},"ippswap - $14.5 Million Loss"),(0,o.kt)("p",null,"On 26-May-2023, a scam project, ippswap was found to have rugpulled $14.5 million USD. The ippswap project executed a concerning action by exploiting a privileged backdoor method, takeToken(), within the staking contract. This unauthorized maneuver allowed the project party to transfer IPPSwap LP Tokens, which had been staked by users, directly to their own account.  Liquidity was then subsequently removed using the above LP tokens to gain $14,535,741.86 USDT."),(0,o.kt)("p",null,"Some of the USDT funds flowed onto Binance exchange where the funds have been frozen by the Binance team."),(0,o.kt)("h4",{id:"safemoon---89-million-loss"},"Safemoon - $8.9 Million Loss"),(0,o.kt)("p",null,"The Safemoon project was exploited for $8.9 million USD on 29-Mar-2023. The Safemoon liquidity pool was compromised after a code upgrade introduced a bug, a public burn() function. The hacker was able to burn the SFM tokens in the liquidity pool, artificially inflating the price of the SFM tokens, and then sold sufficient tokens to wipe out all the WBNB in the pool."),(0,o.kt)("p",null,"On April 20, the SafeMoon attacker returned 80% of the stolen funds, and transferred 21,804 BNB (approximately $7.2 million) to the SafeMoon vault wallet, taxing the remaining 20% as a bounty."),(0,o.kt)("h4",{id:"swapx---73-million-loss"},"SwapX - $7.3 Million Loss"),(0,o.kt)("p",null,"SwapX, a DeFi project, faced an Open Approval issue starting from 27-Feb-2023, resulting in users losing more than $7.3 million USD. Users of BSCex / SwapX, a DEX on BNB Chain, had their funds stolen from their wallets. Vulnerabilities were found in four old contracts (deployed on Jan. 2021, May. 2021, July 2021, and Oct. 2021) belonging to the DEX. Many users still have active approvals to these contracts, even though they have not used it for a long time. Affected users remain at risk as long as they have not revoked their approvals."),(0,o.kt)("h4",{id:"atlantis-loans---35-million-loss"},"Atlantis Loans - $3.5 Million Loss"),(0,o.kt)("p",null,"On 12-June-2023, Atlantis Loans faced a malicious Governance proposal takeover, coupled with the abandonment by the core team whichresulted in ~$3.5 million USD loss. On April 12, its official TG channel was deleted and a backup channel was created instead, with multiple users of the community claiming that the project had been abandoned and that they are trying to build it up again. A malicious proposal was then submitted to take over the core contracts of Atlantis Loans which was successfully shut down by the new project party."),(0,o.kt)("p",null,"However, a similar proposal was submitted on June 12, and was not blocked this time, which resulted in the hacker stealing funds from users that have approved the Atlantis Loans core contracts."),(0,o.kt)("h4",{id:"fut---27-million-loss"},"$FUT - $2.7 Million Loss"),(0,o.kt)("p",null,"Early this year on 4-Jan-2023, the $FUT project team conducted a rugpull for $2.7 million USD. The project party was able to invoke the privileged function withdrawSushiReward() of the Masterchef contract to transfer all the FCS to another controlled wallet. He then subsequently swapped all his FCS for $FUT before exiting for USDT. Once again, this shows the risk of over-centralization by the project party, as they have too many privileges and can easily backdoor funds from users."),(0,o.kt)("h4",{id:"circulate---23-million-loss"},"Circulate - $2.3 Million Loss"),(0,o.kt)("p",null,"On 12-Jan-2023, the Circulate Ponzi managed to scam around $2.3 million USD from users. The CirculateBUSD and CirculateWBNB contracts promised users high APR by depositing funds with them. When users deposit funds, they invoke the startTrading() method of the contract, this in turn calls a third party dependency: SwapHelper contract which is unverified. However, upon decompiling the code, we noticed that there was a hardcoded condition that when the contract reached $2m of staked funds, the funds will be immediately transferred to a designated project team\u2019s address."),(0,o.kt)("p",null,"Although it is currently unknown how the scammer in this incident was able to get large investment into their recently created contracts (~2 days), it is highly likely that the contracts were scams from the beginning due to design bugs in the SwapHelper contract.\nOn the whole, third party dependencies in smart contracts present a security risk. Whilst reliance on third parties such as the use of oracles is sometimes unavoidable, developers should avoid these dependencies as much as possible. "),(0,o.kt)("h4",{id:"yieldrobot---21-million-loss"},"YieldRobot - $2.1 Million Loss"),(0,o.kt)("p",null,"On 17-Jan-2023, YieldRobot scammed users of around $2.1 million USD. For context, YieldRobot is a De-Fi protocol which promises to give yield for users that deposit BUSD.\nTwo days prior to the incident, the YieldRobot contract deployer wallet set the signer to a new EOA (0x3f531). The signer address is needed to approve the redemption of coupons."),(0,o.kt)("p",null,"In order to redeem a coupon it must pass a check to verify it has the correct signer. Once approved, the coupon is added to the user\u2019s reward balance. In this incident, 0x8f2DB called setCoupon() which credited them 2.1m BUSD."),(0,o.kt)("p",null,"The new signer approved the malicious coupon redemption, as such he was able to claimRewards of the contract\u2019s BUSD balance and drain all the BUSD funds."),(0,o.kt)("h4",{id:"liango-protocol---16-million-loss"},"LianGo Protocol - $1.6 Million Loss"),(0,o.kt)("p",null,"On 7-Feb-2023, the LianGo protocol was exploited for $1.6 million USD, roughly 6,148,859 LGT reward coins were stolen. For context, LianGo is a decentralized payment consumption and LGT is their main token."),(0,o.kt)("p",null,"The reason for the theft was that the owner administrator of LGTPool created a fake LP token pledge pool (pool 3), and then the thief put a large amount of LP tokens into the pool, pledged and obtained 6.14 million LGT reward tokens. "),(0,o.kt)("p",null,"Based on on-chain data, the thief has been preparing for the theft for a long time. 58 days before the incident, the stealer\u2019s address obtained the gas fee from Tornado Cash, and deployed the fake LP contract 32 days before the incident."),(0,o.kt)("p",null,"Then on the same day the LianGoPay project deployed the trading pair contracts of LGT tokens and WBNB on Pancake. This contract address is very similar to the address of the fake LP contract that was deployed earlier -- the 4 letters before and after are the same, which can be easily confused. As such, it is likely a private key compromise to the project\u2019s back end system."),(0,o.kt)("p",null,"The administrator of the LGTPool contract initiated three consecutive transactions to create pledge pools, the first two of which also created a real one when creating two fake LP token pledge pools (pools 3 and 4). LP token pool for WBNB and LGT. Because the front and rear four digits of the real and fake LP token contract addresses are the same, it is difficult for users to detect that the first two created LP pools are fake LP pools. "),(0,o.kt)("p",null,"Then the attacker launched an attack, first deploying an attack contract. When the contract was initialized, a huge amount of fake LP tokens was pledged for the fake No. 3 LP pledge pool - up to 614885935211982505426257800000000."),(0,o.kt)("p",null,"Then the attacker initiated a redemption transaction and received the rewarded LGT tokens. Because of the huge amount of pledged principal, 6.14 million LGT rewards were generated. These reward tokens were exchanged for 1.62 million BSC-USD tokens and transferred to an address starting with 0xCb65 (this address used to receive gas fees from Tornado Cash 58 days before the incident)."),(0,o.kt)("h4",{id:"deusdao-dei---13-million-loss"},"DeusDAO (DEI) - $1.3 Million Loss"),(0,o.kt)("p",null,"On 6-May-2023, the DeusDAO (DEI) project was hacked for slightly more than $1.3 million USD due to a wrong contract upgrade. The project was hacked on 3 different chains: Ethereum, Arbitrum and on the BNB Chain. The upgrade bug introduced a public burn vulnerability, which allowed attackers to steal funds from other wallets that have DEI tokens."),(0,o.kt)("p",null,"The issue was specifically in the burnFrom method, which wrongly swapped the 2 parameters of msg.sender and the account to be granted approval. The hacker essentially approved DEI tokens to a whale account with a large amount of DEI tokens, and then invoked the wrongly implemented burnFrom method with 0 tokens. This approves all the DEI tokens to the caller instead, where he can just simply call transferFrom and steal all his tokens."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"BSC continues to be a strong competitor, outperforming Ethereum in terms of daily active users and verified contracts. However, it is undeniable that 2023 H1 has proven to be a challenging year for both investors and developers due to the continued bear market trend and exploit incidents. Below we have some final advice for investors and developers:"),(0,o.kt)("p",null,"For investors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Understand what you're signing, do not blindly sign random signatures/transactions (never sign signatures outside of official websites)"),(0,o.kt)("li",{parentName:"ul"},"Always double check that you are on the official website of the dApp"),(0,o.kt)("li",{parentName:"ul"},"Be wary of new/trending projects or projects that guarantee High APYs / use MEV bots, and always verify the project team\u2019s authenticity"),(0,o.kt)("li",{parentName:"ul"},"Use multiple wallets for different activities (hot wallet for frequent transactions; cold wallet to store high value funds)"),(0,o.kt)("li",{parentName:"ul"},"Ensure you are interacting with an open-source contract and revoke approval once interaction is done"),(0,o.kt)("li",{parentName:"ul"},"Check the security and risk scores of interacted contracts (e.g when using Trust wallet)\nIf ",(0,o.kt)("em",{parentName:"li"},"High Risk")," is flagged, we strongly advise to stay away")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Feel free to reach out to our team if you have any doubts about a certain project / contract address / transaction / risk score!")),(0,o.kt)("p",null,"For developers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Verify & open-source all relevant contracts on-chain (to ensure transparency and trust within the space)"),(0,o.kt)("li",{parentName:"ul"},"Ensure the project is audited by at least 2 well-known security companies and fix all issues where applicable (Including auditing newly added code)"),(0,o.kt)("li",{parentName:"ul"},"Incorporate / Implement a bug-bounty program to upkeep the security posture of the project and encourage the community to ensure the code remains secure"),(0,o.kt)("li",{parentName:"ul"},"Ensure security is at the core of the business: run sufficient testing / stress-testing / simulations such as (1) adverse token price fluctuations, (2) edge cases"),(0,o.kt)("li",{parentName:"ul"},"Prevent centralization risks by using multi signature wallets and not a single EOA wallet to run operations"),(0,o.kt)("li",{parentName:"ul"},"Minimize contract upgradeability and only apply to contracts when necessary"),(0,o.kt)("li",{parentName:"ul"},"Ensure funds are stored securely (key management, fund distribution)"),(0,o.kt)("li",{parentName:"ul"},"Implement safeguards in the event of a hack (formulate an Incident Response plan, introduce time lock / pausing within the smart contract)"),(0,o.kt)("li",{parentName:"ul"},"Constant monitoring of system parameters e.g Exchange Rate of a token")),(0,o.kt)("h4",{id:"hashdit"},"Hashdit"),(0,o.kt)("p",null,"HashDit\u2019s core mission is to provide the essential threat intelligence for the everyday crypto investors, helping them to make informed decisions. Our methodology includes a variety of automated and manual techniques to evaluate a dApp project. The team has optimized its product offerings and improved its accuracy in 2023 H1."),(0,o.kt)("p",null,"Products at Hashdit currently:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Risk assessment"),": All-in-one collection of security rating framework, auto-scan tools, and corresponding APIs, which are able to deliver accurate detection for potential rugpull/exploit risks based on a smart contract address. This is integrated with platforms like ",(0,o.kt)("a",{parentName:"p",href:"https://trustwallet.com/"},"Trust Wallet")," and ",(0,o.kt)("a",{parentName:"p",href:"https://pancakeswap.finance/"},"PancakeSwap"),", to leverage their reach and protect more users."),(0,o.kt)("p",{parentName:"li"},"It is able to detect multiple other risks, besides the usual SWC bugs, such as Tornado Cash interaction, risky functions encompassing ERC20 or ERC721 token standards (such as Migrate() or Blacklist() ), HoneyPot detection, etc. This can help users gain a better understanding of the smart contract, if it could be a scam.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Audit service"),": Comprehensive code audits following extensive and detailed best practices for smart contracts and discovering code loopholes / security vulnerabilities before they are deployed on-chain, guaranteeing users\u2019 safety on BSC.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Monitoring"),": Detecting sensitive events / transactions that happen on-chain to quickly respond and minimize any additional financial losses. At the same time, Hashdit warns users early by sharing any information we found on our ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/hashdit?s=21&t=U4gLkKc72FyZ1zfJDsWzqg"},"Twitter"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Blog"),": Our goal is to share our security knowledge for builders, investors and users in the Web3 community. With all the players in the industry equipped with the security knowledge needed and adopting a security-first mindset, only then will the Web3 ecosystem be a safer place for everyone.")))))}u.isMDXComponent=!0},4172:function(e,t,a){t.Z=a.p+"assets/images/Comparison_with_past_years-4c6b49a0a0ad776dbf4936c2b2618053.png"},741:function(e,t,a){t.Z=a.p+"assets/images/Fiat_Exploit_Type-2805a994ad2b9b021d851f2f1a2479b3.png"},7874:function(e,t,a){t.Z=a.p+"assets/images/Month_Incidents-caaaf4ed7f8560ec2fddd96e057ab371.png"},5488:function(e,t,a){t.Z=a.p+"assets/images/Month_overview-54aae6bcf3145d20b4cbd19f76200ff0.png"},6349:function(e,t,a){t.Z=a.p+"assets/images/Project_type-f8c2b55aeb65704f8da7cddea9938cc7.png"},5090:function(e,t,a){t.Z=a.p+"assets/images/Proportion_Exploit_Type-11228b3ddf1c7a3f24c69d20bc6a16b4.png"},2288:function(e,t,a){t.Z=a.p+"assets/images/Top10_Incidents-1ace81352862b296dbd9c9c70e7b0f73.png"},9038:function(e,t,a){t.Z=a.p+"assets/images/Type_of_exploits_this_month-595262bb3c1cd52242640ec44acc6759.png"},2421:function(e,t,a){t.Z=a.p+"assets/images/contracts_verified-6cfc2f19f026c76cc6c18deb54b56535.png"},785:function(e,t,a){t.Z=a.p+"assets/images/gnfd-fea84a1c9dc7ec063deaae06dec4bbb7.jpeg"},7128:function(e,t,a){t.Z=a.p+"assets/images/opbnb-a77276d74188a4d674936b8932be9404.png"},8372:function(e,t,a){t.Z=a.p+"assets/images/zkbnb-a834965d607b35804d402bf2a9a188b0.jpeg"}}]);