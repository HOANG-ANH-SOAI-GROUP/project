////////////////////////////////////////////////////////////
const getUserData=function(ua,dt){if(badAddr(ua))return;;xuteng.methods.getData(ua,dt).call(function(err,result){if(err)return;
dw('_pteDocs_user',n2s(result['objlen'][0],0));
dw('_pteMsgs_user',n2s(result['objlen'][1],0));
dw('_pubDocs_user',n2s(result['objlen'][2],0));
dw('_typDocs_user',n2s(result['objlen'][3],0));
dw('_pteBuys_user',n2s(result['objlen'][4],0));
dw('_pteSell_user',n2s(result['objlen'][5],0));
dw('_pteRole_user',wrdRole(result['admset'][0]));
dw('_pteLevl_user',wrdRegs(result['admset'][1]));
dw('_pteTick_user',wrdTick(result['admset'][2]));
dw('_ethers_user',w2s(result['objdat'][0]));
dw('_xuteng_user',w2s(result['objdat'][1]));
dw('_income_user',w2s(result['objdat'][2]));
dw('_minted_user',w2s(result['objdat'][3]));
dw('_pteRegCount_user',n2s(result['admlen'][3],0));
db('_pteFee_user',w2s(result['prices'][5]));});};
////////////////////////////////////////////////////////////
const getData=function(ua,dt){xuteng.methods.getData(ua,dt).call(function(err,result){if(err)return;
contType=dt;
cloneData(result);
cloneBalance(result);
dw('_symbol',(SYMBOL));
dw('_decimals',(DECIMALS));
dw('_name',(result['xname']));
dw('_owner',(result['xowner']));
dc('_buyAllowed',(result['utrset'][0]));
dc('_exchangeAllowed',(result['utrset'][1]));
dc('_sellAllowed',(result['utrset'][2]));
dc('_transferAllowed',(result['utrset'][3]));
dc('_typeBanned',(result['typset'][0]));
dc('_typePublic',(result['typset'][1]));
dc('_typeRegReq',(result['typset'][2]));
dw('_buyingCount',n2s(result['utrlen'][0],0));
dw('_exchangeCount',n2s(result['utrlen'][1],0));
dw('_sellingCount',n2s(result['utrlen'][2],0));
dw('_pteDocs',n2s(result['objlen'][0],0));
dw('_pteMsgs',n2s(result['objlen'][1],0));
dw('_pubDocs',n2s(result['objlen'][2],0));
dw('_typDocs',n2s(result['objlen'][3],0));
dw('_pteBuys',n2s(result['objlen'][4],0));
dw('_pteSell',n2s(result['objlen'][5],0));
dw('_pteJoin',n2s(result['objlen'][6],0));
dw('_pteUser',n2s(result['objlen'][7],0));
dw('_adminsCount',n2s(result['admlen'][0],0));
dw('_sysRegCount',n2s(result['admlen'][1],0));
dw('_sysRnkCount',n2s(result['admlen'][2],0));
dw('_pteRegCount',n2s(result['admlen'][3],0));
dw('_pteExpt',wrdExpt(result['admlen'][4],0));
dw('_pteRole',wrdRole(result['admset'][0]));
dw('_pteLevl',wrdRegs(result['admset'][1]));
dw('_pteTick',wrdTick(result['admset'][2]));
db('_buyAtTpe',w2s(result['prices'][0]));
db('_sellAtTpe',w2s(result['prices'][1]));
db('_typePIT',w2s(result['prices'][2]));
db('_typePIE',w2s(result['prices'][3]));
db('_sysFee',w2s(result['prices'][4]));
db('_pteFee',w2s(result['prices'][5]));
dw('_ethers',w2s(result['objdat'][0]));
dw('_xuteng',w2s(result['objdat'][1]));
dw('_income',w2s(result['objdat'][2]));
dw('_minted',w2s(result['objdat'][3]));
dw('_ethersOfXut',w2s(result['xutdat'][0]));
dw('_xutengOfXut',w2s(result['xutdat'][1]));
dw('_totalSupply',w2s(result['xutdat'][2]));});};
////////////////////////////////////////////////////////////
const cloneData=function(result){
mc('class_buyAllowed',(result['utrset'][0]));
mc('class_exchangeAllowed',(result['utrset'][1]));
mc('class_sellAllowed',(result['utrset'][2]));
mc('class_transferAllowed',(result['utrset'][3]));
mc('class_typeBanned',(result['typset'][0]));
mc('class_typePublic',(result['typset'][1]));
mc('class_typeRegReq',(result['typset'][2]));
mw('class_ethersOfXut',w2s(result['xutdat'][0]));
mw('class_xutengOfXut',w2s(result['xutdat'][1]));
mw('class_ethers',w2s(result['objdat'][0]));
mw('class_xuteng',w2s(result['objdat'][1]));
mw('class_income',w2s(result['objdat'][2]));
mw('class_minted',w2s(result['objdat'][3]));
mw('class_pteBuys',n2s(result['objlen'][4],0));
mw('class_pteSell',n2s(result['objlen'][5],0));
mw('class_pteLevl',wrdRegs(result['admset'][1]));
mw('class_buyAtTpe',w2s(result['prices'][0]));
mw('class_sellAtTpe',w2s(result['prices'][1]));
mw('class_typePIT',w2s(result['prices'][2]));
mw('class_typePIE',w2s(result['prices'][3]));
mw('class_sysFee',w2s(result['prices'][4]));
mw('class_pteFee',w2s(result['prices'][5]));};
////////////////////////////////////////////////////////////
const cloneBalance=function(result){
buyTpe=w2s(result['prices'][0]);
sellTpe=w2s(result['prices'][1]);
typePriceXut=w2s(result['prices'][2]);
typePriceEth=w2s(result['prices'][3]);
sysRegFee=w2s(result['prices'][4]);
pteRegFee=w2s(result['prices'][5]);
userEth=w2s(result['objdat'][0]);
userXut=w2s(result['objdat'][1]);
userBuysCount=result['objlen'][4];
userSellCount=result['objlen'][5];
userReg=result['typset'][3];
buyAllowed=result['utrset'][0];
exchangeAllowed=result['utrset'][1];
sellAllowed=result['utrset'][2];
transferAllowed=result['utrset'][3];
xutEth=w2s(result['xutdat'][0]);
xutXut=w2s(result['xutdat'][1]);};
////////////////////////////////////////////////////////////
const ethersOf=function(ua,div){web3.eth.getBalance(ua,function(err,result){if(err)return;dw(div,w2s(result));});};
const xutengOf=function(ua,div){xuteng.methods.balanceOf(ua).call(function(err,result){if(err)return;dw(div,w2s(result));});};
const incomeOf=function(ua,div){xuteng.methods.incomeOf(ua).call(function(err,result){if(err)return;dw(div,w2s(result));});};
const mintedOf=function(ua,div){xuteng.methods.mintedOf(ua).call(function(err,result){if(err)return;dw(div,w2s(result));});};
////////////////////////////////////////////////////////////