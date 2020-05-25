////////////////////////////////////////////////////////////
const funcName=function(){return(funcName.caller.name);};
////////////////////////////////////////////////////////////
const hvalid=function(h){return(hashRegex.test(h));};
const avalid=function(a){return(web3.utils.isAddress(a));};
const nvalid=function(n,b){n=s2n(n);b=s2n(b);return(n>0&&n<=b);};
////////////////////////////////////////////////////////////
const nsmall=function(n,b){return(nvalid(n,b));};
const nmidle=function(n,b){n=s2n(n);b=s2n(b);return(n>0&&n<b);};
const nlarge=function(n,s){n=s2n(n);s=s2n(s);return(n>s&&s>=0);};
////////////////////////////////////////////////////////////
const wrd=function(o,v){return(Object.keys(o).find(key=>o[key]==v));};
const n2s=function(n,d){if(!n)return(ZERO);if(!d)d=0;n=n.toString().split(DOT);n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,COMMA);n[1]=n[1]?DOT+n[1].substr(0,d):EMPTY;return(n[0]+n[1]);};
const w2s=function(n){return(n2s(fromWei(n),5));};
const s2n=function(s){s=parseFloat(s.toString().replace(/[^\d\.\-]/g,EMPTY));if(isNaN(s))return(0);return(s);};
const s2w=function(s){return(toWei(s2n(s).toString()));};
const toHex=function(s){return(web3.utils.toHex(s));};
const toHash=function(s){return(web3.utils.keccak256(s,{encoding:HEX}));};
const jtoHash=function(j){return(toHash(JSON.stringify(j)));};
const toWei=function(n){return(web3.utils.toWei(n.toString(),ETHER));};
const gtoWei=function(n){return(web3.utils.toWei(n.toString(),GWEI));};
const fromWei=function(w){return(web3.utils.fromWei(w.toString(),ETHER));};
const fromGwei=function(g){return(fromWei(gtoWei(g)));};
const s2wHex=function(s){return(toHex(s2w(s)));};
const g2wHex=function(g){return(toHex(gtoWei(g)));};
////////////////////////////////////////////////////////////
const errCode=function(e){if(e!=null){e=e.toString();if(e.indexOf(RECEIPT)>0)return(hi_prompt_rct);e=(e.substring(e.lastIndexOf(HASH)));if(e){return(e);}else{return(0);}}return(null);};
const setInput=function(obj){return(JSON.stringify({obj:obj}));};
const getInput=function(tx,cbf=console.log){web3.eth.getTransaction(tx,function(err,result){if(err)return(cbf(err,null));try{tx=web3.utils.toUtf8(result.input);tx=tx.substring(tx.indexOf('{"obj":'));tx=tx.substr(0,tx.lastIndexOf('}}')+2);tx=JSON.parse(tx);}catch(e){return(cbf(hi_alert_data,null));}cbf(null,tx.obj);});};
////////////////////////////////////////////////////////////
const toDate=function(y,m,d){return(parseInt((new Date(Date.UTC(y,m-1,d,0,0,0,0))).getTime()/1000,10));};
const nowDate=function(){return(parseInt((new Date()).getTime()/1000,10));};
const fromDate=function(n){return((new Date(n*1000)).toString());};
////////////////////////////////////////////////////////////
const hiRegex=(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'));
const loRegex=(new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'));
const hashRegex=(new RegExp('^0x([A-Fa-f0-9]{64})$'));
////////////////////////////////////////////////////////////