////////////////////////////////////////////////////////////
const require=function(js){document.write('<script\tsrc="'+js+'"></script>');};
const restyle=function(ss){document.write('<link\thref="'+ss+'"\trel="stylesheet"\ttype="text/css"/>');};
////////////////////////////////////////////////////////////
restyle('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
restyle('https://fonts.googleapis.com/css?family=Garamond:400,700');
restyle('https://asinerum.github.io/project/gui/fonts.css');
restyle('https://asinerum.github.io/project/gui/style.css');
////////////////////////////////////////////////////////////
require('https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
require('https://ajax.googleapis.com/ajax/libs/angularjs/1.7.6/angular.min.js');
require('https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.0.0-beta.34/dist/web3.min.js');
require('https://cdn.jsdelivr.net/gh/ethereumjs/browser-builds/dist/ethereumjs-tx/ethereumjs-tx-1.3.3.min.js');
require('https://asinerum.github.io/project/scr/xuteng9.js');
require('https://kit.fontawesome.com/608f5e1b1c.js');
////////////////////////////////////////////////////////////
const btnXut=function(tag,nid,a,n,i,t,v){if(!nid)nid='xut'+HYPHEN;a={};n=document.getElementsByTagName(tag?tag:STAR);for(i=0;i<n.length;i++){t=n[i].className;v=n[i].getAttribute('value');if(t&&t.indexOf(nid)===0){a[t]=[t.split(HYPHEN)[1],Number(v)];}}Object.keys(a).forEach(function(t){if(a[t]&&avalid(a[t][0]))xuteng.methods.incomeOf(a[t][0]).call(function(err,result){if(err){mw(t,'<i\tclass="fas\u0020fa-book-dead"></i>');}else{mw(t,'<button\tclass="axut"><i\tclass="fas\u0020fa-flask"></i></button><button\tclass="axut">'+w2s(result)+'</button><button\tclass="axut\u0020bxut"\tonclick="mm_transfer(\''+a[t][0]+'\',g2(\'to-'+a[t][0]+'\'));"><i\tclass="fas\u0020fa-faucet"></i></button><input\ttype="text"\tclass="axut\u0020bxut"\tid="to-'+a[t][0]+'"\tsize="3"\tvalue="'+a[t][1]+'"/>');}});});};
const launch=function(mg,gw){startXuteng();if(!mg)mg=200000;if(!gw)gw=5;maxgas=mg;txgwei=gw;btnXut();};
////////////////////////////////////////////////////////////