////////////////////////////////////////////////////////////[3]
const userInit=function(user,divUser='user'){user=hashParam(ARGADDR);if(!user){dv(divUser,BLANK);return(console.error(hi_alert_data));};dv(divUser,user);window.setTimeout(menu.onUserGoUser,1000);};
const gameInit=function(game,divAddr='txhash',divUser='user'){game=hashParam(ARGADDR);game=(avalid(game)||hvalid(game))?game:BLANK;if(!game){dv(divAddr,BLANK);dv(divUser,BLANK);return(console.error(hi_alert_data));};dv(divAddr,game);window.setTimeout(menu.onUserTxView,1000);};
const reLotter=function(cbf,status='_gameresult',varAddr='txhash',divHash='_txaddress',a,h){a=gv(varAddr);h=gt(divHash);if(avalid(a)&&hvalid(h)){window.targetAddress=a;}else{if(avalid(h)&&hvalid(a)){window.targetAddress=h;}else{window.targetAddress=null;return(cbf(null,null));}};showLoad(status);
;deaddrLottoGame(window.targetAddress,HYPHEN,function(err,result){if(err){dw(status,ERROR);return(cbf(err,null));}if(result){window.lottoGame=result;lottoGame.game=GAMES[lottoGame.frm];if(!lottoGame.game||lottoGame.game.rev){dw(status,HYPHEN);return(cbf(null,undefined));}
;lotter(result.uts,lottoGame.game.num,lottoGame.game.dec,function(err,result){if(err){dw(status,ERROR);return(cbf(err,null));};dw(status,result.toString());cbf(null,result);});}else{dw(status,ASK);window.lottoGame=null}});};
////////////////////////////////////////////////////////////[4]
const dwDomainWithFee=function(ua,divDom,divFee,cbf){deaddrMyDomains(ua,divDom,cbf);xutengDomainAnnualETH(function(e,fee){if(cbf)cbf(e,fee);dw(divFee,'FEE&nbsp;'+fee+'&nbsp;ETH/YEAR')})};
const dwDomainRegInfo=function(dn,divUser,divTime,divIp,divNote,cbf){xutengDomainStatus(dn).then(data=>{if(cbf)cbf(null,data);if(!data)data={};db(divUser,data.user);db(divTime,data.time);db(divIp,data.json&&data.json.obj?data.json.obj.ref.ip:HYPHEN);db(divNote,data.json&&data.json.obj?data.json.obj.ref.note:HYPHEN);});};
const dwTxHashContent=function(txh,divAddr,divNote,divData,cbf){dw(divAddr,HYPHEN);dw(divNote,HYPHEN);dw(divData,HYPHEN);if(avalid(txh)){divHashFromAddr(txh,divAddr);deaddrLottoGame(txh,divData,cbf);}if(hvalid(txh)){divAddrFromHash(txh,divAddr);dehashLottoGame(txh,divData,cbf);getInput(txh,function(e,obj){dw(divNote,obj?obj.ref:HYPHEN)});}};
const dwAddrAliasInfo=function(alias,divHash,divOwner,divAddr,cbf){alias=alias.toLowerCase();db(divHash,toHash(alias));xutengAliasesOwner(alias,function(e,ua){if(cbf)cbf(e,ua);if(ua!=ZEROADDR)db(divOwner,ua);else{db(divOwner,HYPHEN)}});xuteng.methods.addressOf(gv(divHash)).call(function(e,oa){if(cbf)cbf(e,oa);if(oa!=ZEROADDR)db(divAddr,oa);else{db(divAddr,HYPHEN)}});}
////////////////////////////////////////////////////////////