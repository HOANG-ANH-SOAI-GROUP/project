////////////////////////////////////////////////////////////
const Menu=function(element){self=this;
 element.onclick=function(e){setAction(e,self,ACTION,BUTACT)};
 element.onchange=function(e){setAction(e,self,CHANGE,DATACT)};
 self.onSetFee=function(){promm_setFee();}
 self.onEthXut=function(){promm_sendeth2xut();}
 self.onXutXut=function(){promm_transfer2xut();}
 self.onSysReg=function(){promm_regs2sys(0,0);}
 self.onSetBuy=function(){promm_userSetBuy();}
 self.onDisBuy=function(){promm_userStopBuy(0);}
 self.onSetSel=function(){promm_userSetSell();;}
 self.onDisSel=function(){promm_userStopSell(0);}
 self.onBuyOfr=function(){promm_buyFromSeller();}
 self.onSelReq=function(){promm_sellToBuyer();}
 self.onGoUser=function(){getUserData(gv(_user),getDType(0));}
 self.onGetBuy=function(){getOwnRequest(g2(_buyPostNum));}
 self.onGetSel=function(){getOwnOffer(g2(_sellPostNum));}
 self.onGetOfr=function(){getUserOffer(gv(_sellerAddress),g2(_sellerPostNum));}
 self.onGetReq=function(){getUserRequest(gv(_buyerAddress),g2(_buyerPostNum));}
 self.goXutGet=function(){dv(_sendThis,(g2(_xutThis)/s2n(sellTpe)));}
 self.goEthGet=function(){dv(_ethThis,(g2(_transThis)/s2n(buyTpe)));}
 self.goEthSet=function(){dv(_eth2pay,(g2(_xut2buy)/g2(_buyrate)+s2n(typePriceEth)));}
 self.goXutSet=function(){dv(_eth2recv,((g2(_xut2sell)-s2n(typePriceXut))/g2(_sellrate)));}
 self.goXutBuy=function(){dv(_eth2send,(g2(_xut2gain)/gn(_sellingTpe)));}
 self.goXutSel=function(){dv(_eth2gain,(g2(_xut2send)/gn(_buyingTpe)));}
 self.goUtcGet=function(){getUts('year','month','day','hour','minute','_uts','_utstring');}
 self.onAuthKstDec=function(){author_getAccount();}
 self.onAuthAccNew=function(){author_newAccount();}
 self.onAuthAccImp=function(){author_oldAccount();}
 self.onAuthAccExp=function(){author_PrivateKey();}
 self.onAuthSigSig=function(){do_signmess(0);}
 self.onAuthSigVer=function(){do_smverify(0);}
 self.onAuthPayEth=function(){do_sendeth();}
 self.onAuthPayXut=function(){do_transfer();}
 self.onAuthEthXut=function(){do_sendeth2xut('_help_buy','mm_buy');}
 self.onAuthXutXut=function(){do_transfer2xut('_help_sell','mm_sell');}
 self.onAuthSetFee=function(){author_setFee('mm_setFee');}
 self.onAuthSysReg=function(){author_regs2sys('_help_register');}
 self.onAuthSetBuy=function(){author_userSetBuy('_help_tobuy','mm_userSetBuy');}
 self.onAuthDisBuy=function(){author_userStopBuy('_help_buying','mm_userStopBuy');}
 self.onAuthSetSel=function(){author_userSetSell('_help_tosell','mm_userSetSell');}
 self.onAuthDisSel=function(){author_userStopSell('_help_selling','mm_userStopSell');}
 self.onAuthBuyOfr=function(){author_buyFromSeller('_help_buyfrom','mm_buyFromSeller');}
 self.onAuthSelReq=function(){author_sellToBuyer('_help_sellto','mm_sellToBuyer');}
 self.onAuthCpyKst=function(){tcopy(_keystore,hi_alert_kstcopy);}
 self.onAuthCpyKey=function(){tcopy(_newprivate,hi_alert_kstcopy);}
 self.onAuthCpyExp=function(){tcopy(_expprivate,hi_alert_kstcopy);}
 self.onAuthCpySig=function(){tcopy(_signature,hi_alert_kstcopy);}
 self.onAuthCokGet=function(){user_getCookie();}
 self.onAuthCokSet=function(){user_setCookie();}
 self.onAuthCokDel=function(){user_delCookie();}
 self.goAuthNetPut=function(){selectNet(gv(_network));}
 self.goAuthNetFix=function(){selectNet(network);}
 self.goAuthGasWei=function(){txgwei=gv(_txgwei);}
 self.goAuthGasMax=function(){maxgas=gv(_maxgas);}
 self.onUserGetPro=function(){deaddrMyProfile(sender,'_profile');}
 self.onUserGetDom=function(){dwDomainWithFee(sender,'_domain','_domfee');}
 self.onUserSetPro=function(){createMyProfile(gv('proname'),gv('protext'),gv('prostyle'));}
 self.onUserSetDom=function(){createOneDomain(gv('domname'),{ip:gv('domip'),note:gv('domref')},g2('dometh'),function(e,r){if(e)dw('mm_setDomain',ERROR+e)},'mm_setDomain');}
 self.onUserDocSet=function(){createSimpleDoc(gv('docform'),gn('_uts'),g2('xutMin'),g2('xutMax'),g2('doctype'),{name:gv('docdat')},gv('rewards').split(COMMA),'_doc_hash','_doc_status');}
 self.onUserPayXut=function(){xutengRemitFor(gv('xutTo'),g2('xut'),gv('xutNote'),console.log,'_userxut_status',false);}
 self.onUserPayEth=function(){ethereumRemitFor(gv('to'),g2('eth'),gv('ethNote'),console.log,'_usereth_status',false);}
 self.onUserTxView=function(){dwTxHashContent(gv('txhash'),'_txaddress','_txnote','_txdata');};
 self.onUserGoUser=function(){getAliasData(gv(_user),1,function(addr){dw('_userWallet',addr);deaddrMyProfile(addr,'_userProfile');deaddrMyDomains(addr,'_userDomain');});}
 self.onUserAAlias=function(){self.goUserAAlias();xuteng.methods.addressOf(gv('_ahash')).call(function(e,oa){if(oa!=ZEROADDR)dw('_address',oa);else{dw('_address',HYPHEN)}});}
 self.onUserAaAddr=function(){if(avalid(gv('_aowner')))return(alert(ERROR));mm_ping(toHash(gv('alias').toLowerCase()),g2('atype'));}
 self.goUserRedXut=function(a){a=gv('xutTo');if(avalid(a))return(dv('xutTarget',a));xutengUserRedirect(a,function(e,r){dv('xutTarget',r)})}
 self.goUserRedEth=function(a){a=gv('to');if(avalid(a))return(dv('ethTarget',a));xutengUserRedirect(a,function(e,r){dv('ethTarget',r)})}
 self.goUserAAlias=function(a){a=gv('alias').toLowerCase();dv('_ahash',toHash(a));xutengAliasesOwner(a,function(e,ua){if(ua!=ZEROADDR)dv('_aowner',ua);else{dv('_aowner',HYPHEN)}});}
 self.goUserGoUser=self.onUserGoUser;
 self.onAuthGoUser=self.onGoUser;
 self.onAuthGetBuy=self.onGetBuy;
 self.onAuthGetSel=self.onGetSel;
 self.onAuthGetOfr=self.onGetOfr;
 self.onAuthGetReq=self.onGetReq;
 showCaps();
}
new Menu(document.getElementById(ACTDIV));
lottimePicker('year','month','day','hour','minute','_uts','_utstring');
////////////////////////////////////////////////////////////