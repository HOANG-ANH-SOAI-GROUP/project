////////////////////////////////////////////////////////////[6]
const bipCashcoin=function(key=window.newaccount.hex,cbf=console.warn){return(bipkey2coin(key,CASHCOIN,cbf));};
const bipDashcoin=function(key=window.newaccount.hex,cbf=console.warn){return(bipkey2coin(key,DASHCOIN,cbf));};
const bipDogecoin=function(key=window.newaccount.hex,cbf=console.warn){return(bipkey2coin(key,DOGECOIN,cbf));};
const bipLitecoin=function(key=window.newaccount.hex,cbf=console.warn){return(bipkey2coin(key,LITECOIN,cbf));};
const bipTestcoin=function(key=window.newaccount.hex,cbf=console.warn){return(bipkey2coin(key,BITTEST,cbf));};
const bipkey2coin=function(key,cid,cbf=console.warn,v,p,w,a,k){if(!BXCHAINS[cid])return(cbf(ERROR,null));v=Bitcoin.Address.networkVersion;p=Bitcoin.ECKey.privateKeyPrefix;try{w=_ECKey(key);w.setCompressed(true);Bitcoin.Address.networkVersion=BXCHAINS[cid].version;Bitcoin.ECKey.privateKeyPrefix=BXCHAINS[cid].pkprefix;a=w.getBitcoinAddress();k=w.getBitcoinWalletImportFormat();}catch(e){return(cbf(ERROR,null))};window.newaccount[cid]={btc:a,key:k};Bitcoin.Address.networkVersion=v;Bitcoin.ECKey.privateKeyPrefix=p;cbf(BXCHAINS[cid].coin+COLON,a,'\nPRIVATEKEY:',k);};
////////////////////////////////////////////////////////////[5]
const bipCashCoin=function(key=window.newaccount.dat.priv,cbf=console.warn,a,k){key=_CashKey(key);key.setCompressed(true);a=getCashcoinAddress(key);;k=key.getBitcoinWalletImportFormat();;cbf('**BCH:',a,'\nPRIVATEKEY:',k);window.newaccount.cashcoin={btc:a,key:k};};
const bipDashCoin=function(key=window.newaccount.dat.priv,cbf=console.warn,a,k){key=_DashKey(key);key.setCompressed(true);a=key.getDashcoinAddress();k=key.getDashcoinWalletImportFormat();cbf('*DASH:',a,'\nPRIVATEKEY:',k);window.newaccount.dashcoin={btc:a,key:k};};
const bipLiteCoin=function(key=window.newaccount.dat.priv,cbf=console.warn,a,k){key=_LiteKey(key);key.setCompressed(true);a=key.getLitecoinAddress();k=key.getLitecoinWalletImportFormat();cbf('**LTC:',a,'\nPRIVATEKEY:',k);window.newaccount.litecoin={btc:a,key:k};};
const bipAltcoins=function(key=window.newaccount.dat.priv,cbf=console.warn){bipCashCoin(key,cbf);bipDashcoin(key,cbf);bipDogecoin(key,cbf);bipLitecoin(key,cbf);bipTestcoin(key,cbf);};
const getCashcoinAddress=function(key){return(bchaddr.toCashAddress(key.getBitcoinAddress()).split(COLON)[1]);};
////////////////////////////////////////////////////////////[3]
const bipNewAccount=function(status,divBtc,divEth,divKey,divHex,r){showLoad(status);r=bipAccount();if(!r)return(showError(status));db(divBtc,r.btc);db(divEth,r.eth);db(divKey,r.key);db(divHex,r.hex);showOkay(status);window.newaccount=r;bipAltcoins();};
const bipOldAccount=function(status,inKey,inPwd,divBtc,divEth,divBip,k,p){k=gv(inKey);p=gv(inPwd);if(!loRegex.test(p))return(alert(hi_prompt_chk));showLoad(status);db(divBtc,EMPTY);db(divEth,EMPTY);db(divBip,EMPTY);bipEncrypt(p,k,function(e,r){if(e)return(showError(status));db(divBtc,r.btc);db(divEth,r.eth);db(divBip,r.bip);showOkay(status);window.newaccount=r;bipAltcoins();});};
const bipKeyDecrypt=function(status,inBip,inPwd,divBtc,divEth,divKey,divHex,b,p){b=gv(inBip);p=gv(inPwd);showLoad(status);db(divBtc,EMPTY);db(divEth,EMPTY);db(divKey,EMPTY);db(divHex,EMPTY);bipDecrypt(p,b,function(e,r){if(e)return(showError(status));db(divBtc,r.btc);db(divEth,r.eth);db(divKey,r.key);db(divHex,r.hex);showOkay(status);window.newaccount=r;bipAltcoins();sender=r.eth;senderPte=r.hex;});};
////////////////////////////////////////////////////////////[4]
const key2wallet=function(key){return(web3.eth.accounts.privateKeyToAccount(HEXINIT+key).address)};
const bipAccount=function(skip=10,key=false,cbf,i,k,h,r){try{for(i=0;i<skip;i++)k=_ECKey(key);k.setCompressed(true);h=k.getBitcoinHexFormat();r={dat:k,key:k.getBitcoinWalletImportFormat(),btc:k.getBitcoinAddress(),hex:h,eth:key2wallet(h)};if(cbf)return(cbf(null,r));return(r)}catch(e){if(cbf)return(cbf(e,null));return(null)}};
const bipEncrypt=function(pw,key,cbf=console.log,k,b,h,e){try{key=_ECKey(key);key.setCompressed(true);k=key.getBitcoinWalletImportFormat();b=key.getBitcoinAddress();h=key.getBitcoinHexFormat();e=key2wallet(h);PRIVATEKEY.BIP38PrivateKeyToEncryptedKeyAsync(k,pw,true,function(err,bip){cbf(err,{dat:key,key:k,btc:b,hex:h,eth:e,bip:bip});});}catch(e){cbf(e,null)}};
const bipDecrypt=function(pw,bip,cbf=console.log){try{PRIVATEKEY.BIP38EncryptedKeyToByteArrayAsync(bip,pw,function(err,key){if(err)return(cbf(err,null));bipAccount(1,_Buffer(key).toString(HEX),cbf);});}catch(e){cbf(e,null)}};
////////////////////////////////////////////////////////////