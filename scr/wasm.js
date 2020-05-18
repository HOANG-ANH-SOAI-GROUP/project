////////////////////////////////////////////////////////////[3]
const wasmRust=async(wasm,imports,cbf,r,b,o)=>{r=await(fetch(wasm));b=await(r.arrayBuffer());o=await(WebAssembly.instantiate(b,imports));/***WebAssembly.Module***/;window.wasmInstance=o.instance;cbf(null,o.instance);};
const wasmCAsc=async(wasm,imports,cbf,r,b,o)=>{r=await(fetch(wasm));b=await(r.arrayBuffer());b=(new Uint8Array(b));o=(new WebAssembly.Module(b));o=(new WebAssembly.Instance(o,imports));window.wasmInstance=o;cbf(null,o);};
const wasmCbin=function(wasm,imports,cbf){loadUint8(wasm,function(err,result){if(err)return(cbf(err,null));cbf(null,(new WebAssembly.Instance((new WebAssembly.Module(result)),imports)));});};
////////////////////////////////////////////////////////////[6]
const loadUint8=function(path,cbf){fetch(path).then(response=>response.arrayBuffer()).then(buffer=>{return(cbf(null,(new Uint8Array(buffer))));}).catch(err=>{cbf(err,null)});};
const loadWCode=function(code,imports={env:{}}){window.wasmInstance=(new WebAssembly.Instance((new WebAssembly.Module(wasmCode)),imports));return(window.wasmInstance);};
const loadILB64=function(b64,s,a,i){s=window.atob(b64);a=(new Uint8Array(s.length));for(i=0;i<s.length;i++)a[i]=s.charCodeAt(i);return(a);};
const wasmILB64=function(b64,memory){if(!memory)memory=wasmCache();window.wasmInstance=(new WebAssembly.Instance((new WebAssembly.Module(loadILB64(b64))),{env:{memory}}));return(window.wasmInstance);};
const wasmCache=function(ini=256,max=256){window.wasmMemory=(new WebAssembly.Memory({initial:ini,maximum:max}));return(window.wasmMemory);};
const getBuffer=function(){window.wasmBuffer=(new Uint8Array(window.wasmInstance.exports.memory.buffer));return(window.wasmBuffer);};
////////////////////////////////////////////////////////////[7]
const setCbinWasmString=function(str,pos=0,ins,b,i){if(!ins)ins=window.wasmInstance;b=(new Uint8Array(ins.exports.memory.buffer));for(i=pos;i<pos+str.length;i++)b[i]=str.charCodeAt(i);b[i]='\0';return(pos);};
const getCbinWasmString=function(pointer,ins,b,i,s){if(!ins)ins=window.wasmInstance;b=(new Uint8Array(ins.exports.memory.buffer));s='';for(i=pointer;b[i];i++)s+=String.fromCharCode(b[i]);return(s);};
const setWasmNewStr=function(str,exports,e,b,l,m,p,i){/**RUST**/;if(!exports)exports=window.wasmInstance.exports;e=(new TextEncoder('UTF-8'));b=e.encode(str);l=b.length;p=exports.alloc(l+1);m=(new Uint8Array(exports.memory.buffer));for(i=0;i<l;i++){m[p+i]=b[i];}m[p+l]=0;/**NULL**/;return(p);};
const getWasmMemStr=function(ptr,exports,o,b,c,d,m,u){/**RUST**/;if(!exports)exports=window.wasmInstance.exports;o=ptr;c=function*(){m=(new Uint8Array(exports.memory.buffer));while(m[ptr]!==0){if(m[ptr]===undefined){throw(Error('MEMORY'))};yield(m[ptr]);ptr++;}};b=(new Uint8Array(c()));d=(new TextDecoder('UTF-8'));u=d.decode(b);exports.dealloc_str(o);return(u);};
const setWasmString=function(str,pointer=0,ins,b,i){if(!ins)ins=window.wasmInstance;b=(new Uint8Array(ins.exports.memory.buffer));for(i=pointer;i<pointer+str.length;i++)b[i]=str.charCodeAt(i);b[i]='\0';return(str.length);};
const getWasmString=function(pointer,len,ins,b,i,s){if(!ins)ins=window.wasmInstance;b=(new Uint8Array(ins.exports.memory.buffer,pointer,len));s='';for(i=0;i<len;i++)s+=String.fromCharCode(b[i]);return(s);};
const getWasmStrEnd=function(pointer,ins,b,i,s){/**/if(!ins)ins=window.wasmInstance;b=(new Uint8Array(ins.exports.memory.buffer,pointer));s='';for(i=0;b[i];i++)s+=String.fromCharCode(b[i]);return(s);};
////////////////////////////////////////////////////////////