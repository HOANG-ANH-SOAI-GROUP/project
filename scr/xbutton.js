////////////////////////////////////////////////////////////
const nolink='<i\tclass="fa\u0020fa-trash"></i>';
const xgaUrl='https://asinerum.github.io/project/game#a=';
const btnXut=function(tag,nid,a,n,i,t){if(!nid)nid='xut-';a={};n=document.getElementsByTagName(tag?tag:STAR);for(i=0;i<n.length;i++){t=n[i].className;if(t&&t.indexOf(nid)===0){a[t]=[t.split(HYPHEN)[1],n[i].getAttribute('value'),n[i].getAttribute('fixed'),i,n[i].getAttribute('size')];console.log(a[t]);}};
;if(nid=='xut-')Object.keys(a).forEach(function(t){if(a[t]&&avalid(a[t][0]))xuteng.methods.incomeOf(a[t][0]).call(function(err,result){if(err){mw(t,nolink);}else{mw(t,'<button\tclass="axut\u0020bxut"\tonclick="incomeOf(\''+a[t][0]+'\',\'of-'+a[t][0]+'\');"><i\tclass="fa\u0020fa-flask"></i></button><button\tclass="axut"><span\tclass="of-'+a[t][0]+'">'+w2s(result)+'</span></button><button\tclass="axut\u0020bxut"\tonclick="mm_transfer(\''+a[t][0]+'\',g2(\''+a[t][3]+HYPHEN+a[t][0]+'\'));"><i\tclass="fa\u0020fa-diamond"></i></button><input\ttype="text"\tclass="axut\u0020bxut"\tid="'+a[t][3]+HYPHEN+a[t][0]+'"\tsize="'+(a[t][4]?a[t][4]:3)+'"\tvalue="'+(a[t][1]?Number(a[t][1]):1)+'"'+(a[t][2]?'\tdisabled':'')+'/>');}});/**RPC**/;});/**keys**/;
;if(nid=='xga-')Object.keys(a).forEach(function(t){if(a[t]&&avalid(a[t][0]))deaddrLottoGame(a[t][0],TEST,function(err,result){if(err||!result||!result.dat||!result.dat.name){mw(t,nolink);}else{mw(t,'<a\tclass="button"\ttarget="_blank"\thref="'+xgaUrl+a[t][0]+'">'+result.dat.name+'</a>');}});/**RPC**/;});/**keys**/;
;if(nid=='xxx-')Object.keys(a).forEach(function(t){;;;});/**keys**/;};
////////////////////////////////////////////////////////////
const cmtXut=function(str,a,b,i){a=str.match(/\[xut\](.*?)\[\/xut\]/g);b=str.match(/\[xut=(.*?)\]/g);if(a)for(i=0;i<a.length;i++){str=str.replace(a[i],'<b\u0020class="xut-'+a[i].replace(/\[\/?xut\]/g,'')+'"></b>');};if(b)for(i=0;i<b.length;i++){str=str.replace(b[i],'<b\u0020class="xut-'+b[i].slice(5).split(']')[0]+'"></b>');};return(str);};
const launch=function(mg=200000,gw=0){startXuteng();maxgas=mg;txgwei=gw;btnXut('b','xut-');btnXut('b','xga-');};
const xready=function(mg=200000,gw=0){$(document).ready(function(){launch(mg,gw);});};
////////////////////////////////////////////////////////////