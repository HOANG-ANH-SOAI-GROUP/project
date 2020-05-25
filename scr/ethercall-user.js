////////////////////////////////////////////////////////////[4]
const xutengMemberStatus=async(wallet,cbf=console.log)=>{return new Promise(resolve=>{xuteng.methods.getData(wallet,1).call((e,r)=>{if(e){if(cbf)cbf(e,null);resolve(null);}else{r=wrdExpt(r.admlen[MEMBERSHIPOF]);if(cbf)cbf(null,r);resolve(r);}});});};
const xutengWalletDetail=async(wallet,cbf=console.log)=>{return new Promise(resolve=>{xuteng.methods.contents(wallet).call((e,r)=>{if(e){if(cbf)cbf(e,null);resolve(null);}else{r={data:JSON.parse(r.json).obj,time:wrdExpt(r.time)};if(cbf)cbf(null,r);resolve(r);}});});};
const xutengDomainStatus=async(domain,cbf=console.log)=>{return new Promise(resolve=>{xuteng.methods.retDomain(domain.toLowerCase()).call((e,r)=>{if(e){if(cbf)cbf(e,null);resolve(null);}else{r={user:r.user,id:JSON.parse(r.json).obj,exp:wrdExpt(r.time)};if(cbf)cbf(null,r);resolve(r);}});});};
const xutengDomainsOwner=async(domain,cbf=console.log)=>{return new Promise(resolve=>{xuteng.methods.downerOf(toHash(domain.toLowerCase())).call((e,r)=>{if(e){if(cbf)cbf(e,null);resolve(null);}else{if(cbf)cbf(null,r);resolve(r);}});});};
////////////////////////////////////////////////////////////[2]
const xutengDomainAnnualETH=async(cbf=console.log)=>{return new Promise(resolve=>{xuteng.methods.getData(contractAddress,TYPES.domain).call((e,r)=>{if(e){if(cbf)cbf(e,null);resolve(null);}else{r=fromWei(r.prices[TYPEPIW]);if(cbf)cbf(null,r);resolve(r);}});});};
const xutengMemberAnnualXUT=async(cbf=console.log)=>{return new Promise(resolve=>{xuteng.methods.getData(contractAddress,TYPES.domain).call((e,r)=>{if(e){if(cbf)cbf(e,null);resolve(null);}else{r=fromWei(r.prices[MEMBERFEEOFXUT]);if(cbf)cbf(null,r);resolve(r);}});});};
////////////////////////////////////////////////////////////[4]
const xutengTxDehash=async(hash,cbf=console.log)=>{return new Promise(resolve=>{dehash(hash,(e,r)=>{if(e){if(cbf)cbf(e,null);resolve(null);}else{if(cbf)cbf(null,r);resolve(r);}});});};
const xutengTxBlocks=async(begin,end,t)=>{t=trange(begin,end);if(!t)return(t);await(getBStop(0,t.begin));begin=window.blocknum;if(!begin)return(null);await(getBStop(0,t.end));end=window.blocknum;if(!end)return(null);return({begin,end});};
const xutengReceived=async(address,begin,end,cbf=console.log,t,i,j=[])=>{t=await(xutengTxBlocks(begin,end));if(!t)return(t);xuteng.getPastEvents('Transfer',{filter:{toAddress:address},fromBlock:t.begin,toBlock:t.end},function(err,result){if(err)return(null);for(i=0;i<result.length;i++){j.push({xut:fromWei(result[i].returnValues.txPenny),tx:result[i].transactionHash,from:result[i].returnValues.fromAddress});}if(cbf)cbf(null,j);console.log(j);return(j);});};
const xutengSentAway=async(address,begin,end,cbf=console.log,t,i,j=[])=>{t=await(xutengTxBlocks(begin,end));if(!t)return(t);xuteng.getPastEvents('Transfer',{filter:{fromAddress:address},fromBlock:t.begin,toBlock:t.end},function(err,result){if(err)return(null);for(i=0;i<result.length;i++){j.push({xut:fromWei(result[i].returnValues.txPenny),tx:result[i].transactionHash,to:result[i].returnValues.toAddress});}if(cbf)cbf(null,j);console.log(j);return(j);});};
////////////////////////////////////////////////////////////