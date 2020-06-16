////////////////////////////////////////////////////////////[2]
const xutengUsageRegister=function(xut=0,status=TEST){do_register(contractAddress,xut,status);};
const xutengSetDomainName=function(domain=BLANK,ref=BLANK,eth=0,cbf=console.log,status=TEST,raw=true){showLoad(status);domain=domain.toLowerCase();xuteng.methods.retDomain(domain).call((e,info)=>{if(e)return(cbf(e,null));if(info.user.toLowerCase()!=sender.toLowerCase()&&info.time>ethnow())return(cbf('OWNER',null));xuteng.methods.contents(sender).call((e,info)=>{if(e)return(cbf(e,null));if(info.json){try{info.json=JSON.parse(info.json)}catch(e){info.json={obj:{}}};if(info.json.obj.domain!=domain)return(cbf('NAME',null));}ref=setInput({domain,ref});if(raw){setDomain(domain,ref,eth);send(0,0,status,cbf);}else{mm_setDomain(domain,ref,eth);}});});};
////////////////////////////////////////////////////////////[2]
const xutengSendEthForXut=function(eth=0,cbf=console.log,status=TEST){buy(eth);send(0,0,status,cbf);};
const xutengSendXutForEth=function(xut=0,cbf=console.log,status=TEST){sell(xut);send(0,0,status,cbf);};
////////////////////////////////////////////////////////////[2]
const ethereumTransfer=function(to=BLANK,eth=0,cbf=console.log,status=TEST){if(avalid(to))return(sendeth(to,eth,0,status,cbf));xutengUserRedirect(to,function(err,result){if(err||!result||result==ZEROADDR)return(cbf(err,null));to=result;return(sendeth(to,eth,0,status,cbf));});};
const ethereumRemitFor=function(to=BLANK,eth=0,ref=BLANK,cbf=console.log,status=TEST,raw=true){ref=setInput({ref});if(avalid(to))if(raw){return(sendeth(to,eth,0,status,cbf,ref));}else{return(mm_sendeth(to,eth,ref));}xutengUserRedirect(to,function(err,result){if(err||!result||result==ZEROADDR)return(cbf(err,null));to=result;if(raw){return(sendeth(to,eth,0,status,cbf,ref));}else{return(mm_sendeth(to,eth,ref));}});};
////////////////////////////////////////////////////////////[4]
const xutengTransfer=function(to=BLANK,xut=0,cbf=console.log,status=TEST){if(avalid(to))return(xutengDirectTransfer(to,xut,cbf,status));xutengUserRedirect(to,function(err,result){if(err||!result||result==ZEROADDR)return(cbf(err,null));to=result;return(xutengDirectTransfer(to,xut,cbf,status));});};
const xutengRemitFor=function(to=BLANK,xut=0,ref=BLANK,cbf=console.log,status=TEST,raw=true){if(avalid(to))return(xutengDirectRemitFor(to,xut,ref,cbf,status,raw));xutengUserRedirect(to,function(err,result){if(err||!result||result==ZEROADDR)return(cbf(err,null));to=result;return(xutengDirectRemitFor(to,xut,ref,cbf,status,raw));});};
const xutengDirectTransfer=function(to=BLANK,xut=0,cbf=console.log,status=TEST){transfer(to,xut);send(0,0,status,cbf);};
const xutengDirectRemitFor=function(to=BLANK,xut=0,ref=BLANK,cbf=console.log,status=TEST,raw=true){if(raw){transferFor(to,xut,setInput({ref}));send(0,0,status,cbf);}else{mm_transferFor(to,xut,setInput({ref}));}};
////////////////////////////////////////////////////////////