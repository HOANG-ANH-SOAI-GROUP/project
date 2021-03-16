////////////////////////////////////////////////////////////
const rawFilterTx=function(r){return({bal:fromSat(r.final_balance),usl:r.txrefs.filter(item=>!item.spent_by&&item.tx_output_n!==-1)});};
const rawCypherUs=function(acc,scid,cbf=console.log){rawCypherTx(acc,scid,(e,r)=>{if(e)return(cbf(e,null));if(!r||!r.final_balance)return(cbf(hi_alert_balance,null));cbf(null,rawFilterTx(r))})};
const rawCypherTx=function(acc,scid,cbf=console.log){axios.get(BROXIES[0].getTransactionList(acc,scid)).then(r=>{if(r.status===200){cbf(null,r.data)}else{_Error(r.status)}}).catch(e=>{cbf(e,null)});};
const rawGenBtcTx=function(usl,bal,acc,wif,to,amt,scid,fee,out=TEST,b,w){try{b=_Builder(scid);b.setVersion(1);w=_BWallet(wif,scid);/*wif=newaccount.key*/;usl.forEach(item=>b.addInput(item.tx_hash,item.tx_output_n));b.addOutput(to,1*toSat(amt));b.addOutput(acc,1*bitChange(bal,amt,fee));/*acc=sender*/;usl.forEach((item,index)=>{b.sign(index,w)});db(out,b.build().toHex());}catch(e){return(db(out,e))}};
const rawSetBtcTx=function(acc,wif,to,amt,scid,fee,out=TEST){rawCypherUs(acc,scid,(e,r)=>{if(e)return(db(out,e));return(rawGenBtcTx(r.usl,r.bal,acc,wif,to,amt,scid,fee,out))})};
////////////////////////////////////////////////////////////
const rawTransfer=function(acc,pte,to,amt,scid,price,gas,status=TEST,out=TEST,eth=0){if(!EXTOKENS[scid])return(dw(status,INVALID));showLoad(status);getUserNonce(acc,network,function(err,nonce){if(err)return(dw(status,err));Transfer(to,amt,EXTOKENS[scid]().dec,function(err,result){if(err||!result)return(dw(status,err));dw(status,DONE);db(out,result);},scid,eth,price,gas,nonce,acc,pte,true,false);});};
const rawPayEther=function(acc,pte,to,eth,msg,price,gas,status=TEST,out=TEST){showLoad(status);getUserNonce(acc,network,function(err,nonce){if(err)return(dw(status,err));PayEther(to,eth,msg,function(err,result){if(err||!result)return(dw(status,err));dw(status,DONE);db(out,result);},price,gas,nonce,acc,pte,true,false);});};
const rawGenEther=function(acc,pte,to,eth,msg,price,gas,nonce,status=TEST,out=TEST){showLoad(status);PayEther(to,eth,msg,function(err,result){if(err||!result)return(dw(status,err));dw(status,DONE);db(out,result);},price,gas,nonce,acc,pte,true,false);};
////////////////////////////////////////////////////////////
const rawTokenSum=function(addr=XUTENG[network].addr,cbf=console.log){axios.get(PROXIES[0].getTokenTotalSupply(addr,network)).then(r=>{cbf(null,fromHex(r.data.result))}).catch(e=>{cbf(e,null)});};/*pennies*/
const rawAccToken=function(addr=XUTENG[network].addr,acc=sender,cbf=console.log){axios.get(PROXIES[0].getUserTokenBalance(addr,acc,network)).then(r=>{cbf(null,fromHex(r.data.result))}).catch(e=>{cbf(e,null)});};/*pennies*/
const rawAccEther=function(acc=sender,cbf=console.log){axios.get(PROXIES[0].getUserEtherBalance(acc,network)).then(r=>{cbf(null,fromWHex(r.data.result))}).catch(e=>{cbf(e,null)});};/*ethers*/
////////////////////////////////////////////////////////////
const rawDecimals=function(addr=XUTENG[network].addr,cbf=console.log){axios.get(PROXIES[0].getContractDecimals(addr,network)).then(r=>{cbf(null,fromHex(r.data.result))}).catch(e=>{cbf(e,null)});};
const rawGetNonce=function(addr=sender,cbf=console.log){axios.get(PROXIES[0].getTransactionCount(addr,network)).then(r=>{cbf(null,fromHex(r.data.result))}).catch(e=>{cbf(e,null)});};
const rawGetPrice=function(cbf=console.log){axios.get(PROXIES[0].getGasPrice(network)).then(r=>{cbf(null,fromHex(r.data.result)/1000000000)}).catch(e=>{cbf(e,null)});};
////////////////////////////////////////////////////////////