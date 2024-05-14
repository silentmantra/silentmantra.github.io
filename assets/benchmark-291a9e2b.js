import{e as A,r as S,w,o as B,a as k,c as _,f as g,g as P,h as N,v as R,s as C,n as I,F as T,p as U,i as L,j as E,d as F}from"./runtime-dom.esm-bundler-1ee02b66.js";ReadableStream.prototype[Symbol.asyncIterator]=async function*(){const e=this.getReader();try{for(;;){const{done:t,value:n}=await e.read();if(t)return;yield n}}finally{e.releaseLock()}};{let p=function(l){for(var s=atob(l),f=new Uint8Array(s.length),d=0;d<s.length;d++)f[d]=s.charCodeAt(d);return f.buffer};const t={gzip:(l=>async s=>{const d=new Blob([s]).stream().pipeThrough(new CompressionStream(l)),h=[];for await(const u of d)h.push(u);return await n(h)})("gzip"),base64:r,uri:encodeURIComponent};String.prototype.compress=async function(l="gzip"){let s=this;for(const f of l.words)s=await t[f](s);return s};async function n(l){const f=await new Blob(l).arrayBuffer();return new Uint8Array(f)}async function r(l){const s=await new Promise(f=>{const d=new FileReader;d.onload=()=>f(d.result),d.readAsDataURL(new Blob([l]))});return s.slice(s.indexOf(",")+1)}const i={gzip:(l=>async s=>{const d=new Blob([s]).stream().pipeThrough(new DecompressionStream(l)),h=[];for await(const O of d)h.push(O);const u=await n(h);return new TextDecoder().decode(u)})("gzip"),base64:p,uri:decodeURIComponent};String.prototype.decompress=async function(l){let s=this;for(const f of l.words)s=await i[f](s);return s}}String.random=function(e){return Array.from({length:e},()=>String.fromCharCode(97+Math.random()*20|0)).join("")};String.prototype.cast=function(){if(!isNaN(this))return parseFloat(this);if(this==="true")return!0;if(this==="false")return!1;if(this!=="undefined")return this==="null"?null:this};String.prototype.interpolate=function(){const e=[].copy(arguments);return this.replaceAll(/%[%d]?/mg,t=>e.length?t==="%d"||typeof t=="number"?parseInt(e.shift()):t==="%f"||typeof t=="number"?parseFloat(e.shift()).toFixed(3):t==="%%"?e.shift():'"'+e.shift()+'"':t)};{const e=new RegExp("[-._](.)","g");String.prototype.camelize=function(){return this.replace(e,function(t,n){return n.toUpperCase()})}}{const e=new RegExp("[A-Z]","g");String.prototype.kebabize=function(){return this.replace(e,function(t){return"-"+t.toLowerCase()}).replace("_","-")}}String.prototype.slugify=function(){return this.trim().replace(/[\s\W_]+/g,"-").replace(/-+/g,"-")};String.prototype.flags=function(e=t=>t.camelize()){var t={};for(const n of this.words)t[e(n)]=!0;return t};{const e=/\s*\n\s*/mg;Object.defineProperty(String.prototype,"lines",{get(){return this.trim().split(e)||[]}})}Object.defineProperty(String.prototype,"capitalized",{get(){return this[0].toUpperCase()+this.slice(1)}});String.prototype.wordTree=function(e="()"){const t=e[0],n=e[1],r=" ",o=this.trim().replace(new RegExp("\\s*["+e+"]\\s*","mg"),f=>f.trim()).replace(/\s+/mg," ");let i="",p=0;const l={};return s(l),l;function s(f){for(;o[p]!==void 0;){const h=o[p++];if(h===t){const u=f[i]={};i="",s(u)}else{if(h===n)return i&&d();h===r?d():i+=h}}i&&d();function d(){let[h,u]=i.split(":");u!==void 0?isNaN(parseFloat(u))?u==="true"?u=!0:u==="false"?u=!1:u==="null"&&(u=null):u=parseFloat(u):u=!0,f[h]=u,i=""}}};{const e=/\S+/mg;Object.defineProperties(String.prototype,{words:{get(){return this.match(e)||[]}},set:{get(){return new Set(this.match(e)||[])}}})}Object.defineProperty(String.prototype,"quotedWords",{get(){const e=this.words,t=[];let n="";for(let r=0,o=e.length;r<o;r++){let i=e[r];if(n){if(i[i.length-1]==="'"){n+=" "+i.slice(0,i.length-1),t.push(n),n="";continue}n+=i;continue}if(i[0]==="'"){n=i.slice(1);continue}t.push(i)}return t}});{const e=/.{1}/mg;Object.defineProperty(String.prototype,"chars",{get(){return this.match(e)||[]}})}{const e=/.$/mg;Object.defineProperty(String.prototype,"lastChar",{get(){var t;return((t=this.match(e))==null?void 0:t[0])||""}})}String.prototype.cutEnd=function(e){return this.slice(0,this.length-e)};String.prototype.reverse=function(){for(var e="",t=this.length-1;t>=0;t--)e+=this[t];return e};String.prototype.capitalize=function(){return this[0].toUpperCase()+this.slice(1)};String.prototype.hashCode=function(){let e=0;for(let t=0,n=this.length;t<n;t++)e=(e<<5)-e+this.charCodeAt(t),e|=0;return e};var x;{const e={},t=((x=globalThis.navigator)==null?void 0:x.languages[0])||"en";String.prototype.localeCompare=function(n,r=t){return(e[r]??new Intl.Collator(r).compare)(this,n)}}JSON.clone=function(e){return JSON.parse(JSON.stringify(e))};Object.getRootPrototypeOf=function(e){let t=e,n=null;for(;(t=Object.getPrototypeOf(t))&&t.constructor.name!=="Object";)n=t;return n};Object.injectPrototype=function(e,t){const n=Object.getPrototypeOf(e),r=Object.getRootPrototypeOf(t);return Object.setPrototypeOf(e,t),Object.setPrototypeOf(r,n),e};Object.defineLazyPrototypeProperty=function(e,t,n,r=null){return Object.defineProperty(e.prototype,t,{get(){try{const o=n.call(this);return Object.defineProperty(this,t,Object.assign({value:o,configurable:!0,enumerable:!0},r)),o}catch(o){if("initLazyValue"in o)return o.initLazyValue;throw o}},configurable:!0})};Object.defineLazyPrototypeProperties=function(e,t){for(const n in t)Object.defineLazyPrototypeProperty(e,n,t[n]);return e};Object.deepCopy=function(e,t=null){const n=JSON.stringify(t||e),r=JSON.parse(n,(o,i)=>typeof i=="string"&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(i)?new Date(i):i);return t&&Object.sync(e,r),r};Object.sync=function(e,t){return Object.clear(e),Object.assign(e,t),e};{const e=Object.values;Object.values=function(t,n){if(arguments.length<2)return e.call(Object,t);const r=[];n=n.set;for(const o in t)n.has(o)&&Object.hasOwn(t,o)&&r.push(t[o]);return r}}{const e={};Object.get=function(t,n){let r=e[n];if(!r){let o=n[0]==="["?"":".";try{e[n]=r=new Function("obj","try{return obj"+o+n+"}catch(e){return undefined}")}catch(i){e[n]=r=()=>i.message}}return r(t)}}Object.toUrlParams=function(e){let t=[];for(let r in e)e.hasOwnProperty(r)&&t.push(encodeURIComponent(r)+"="+encodeURIComponent(n(e[r])));return t.join("&");function n(r){return r instanceof Date?JSON.stringify(r).replace(/"/g,""):r}};Object.set=function(e,t,n){let r=t.split(/\.|\]\.|\[/g),o;for(;o=r.shift();){if(!r.length){e[o]=n;break}is_.obj(e[o])||(is_.num(r[0])?e[o]=[]:e[o]={}),e=e[o]}return e};Object.hasAllProperties=function(e,t){return t.words.intersect(Object.keys(e)).length==t.length};Object.appendMethod=function(e,t,n){if(is_.obj(t)){for(let r in t)Object.appendMethod(e,r,t[r]);return e}if(!e[t])return e[t]=n,e;e[t]=function(...r){e[t](...r),n(...r)}};Object.defineProperty(Object.prototype,"each",{enumerable:!1,writable:!0,value:function(e){var t=0;for(var n in this)if(e(n,this[n],t++)===!1)break}});Object.ensureProperty=function(e,t,n){return e.hasOwnProperty(t)||Object.defineProperty(e,t,{writable:!0,value:n}),e[t]};Object.map=function(e,t){var n=[];for(var r in e)n.push(t(r,e[r]));return n};Object.flatten=function(e){var t={};for(var n in e){var r=e[n];if(typeof r=="object"){var o=Object.flatten(r);for(var i in o)t[n+"."+i]=o[i]}else if(is_.arr(r))for(var p=0,l=r.length;p<l;p++)t[n+"."+p]=r[p];else t[n]=e[n]}return t};Object.remove=function(e,t){for(const n in e)e[n]===t&&delete e[n];return e};Object.removeNulls=function(e){var t={};for(var n in e)e[n]===null||e[n]===void 0||(t[n]=e[n]);return t};Object.copy=function(e,t,n){var r={};if(!t){for(var o in e)r[o]=e[o];return r}if(is_.str(t)&&t[0]=="!"){var i=t.substring(1).words;for(var o in e)i.contains(o)||(r[o]=e[o]);return r}for(const p of t.words)e.hasOwnProperty(p)&&(n!="no-false"||e[p])&&(r[p]=e[p]);return r};Object.extend=function(e,o,n,r){var o=Object.copy(o,n,r);for(var i in o)e[i]=o[i];return e};Object.clear=function(e,t=null){if(!t){for(const r in e)delete e[r];return this}if(typeof t=="function"){for(const r in e)t(r,e[r])&&delete e[r];return this}if(t[0]==="!"){const r=new Set(t.slice(1).words);for(const o in e)r.has(o)||delete e[o];return this}for(const r in t.words)delete e[r];return this};Object.splice=function(e,t){var n={};return t?(t.eachWord(function(r){e.hasOwnProperty(r)&&(n[r]=e[r],delete e[r])}),n):(Object.keys(e).each(function(r){n[r]=e[r],delete e[r]}),n)};Object.isIterable=function(e){return e instanceof Object};Object.iterator=function(e){if(Array.isArray(e))return function*(){for(let t=0;t<e.length;t++)yield[e[t],t]}();if(e instanceof Object)return function*(){for(const t in e)yield[e[t],t]}()};Object.mapWalk=function(e,t,n=null){const r=[];try{debugger;for(const[o,i]of Object.iterator(e)){if(Object.isIterable(o)){Object.mapWalk(o,t,n||r);continue}(n||r).tail=t(o,i,e)}}catch{debugger}return r};Object.walk=function(e,t,n=[]){for(const[r,o]of Object.iterator(e))if(Object.isIterable(r)){if(Object.walk(r,t,n.concat(o))===!1)return!1;continue}else if(t(r,o,e,n.slice())===!1)return!1};const M="/assets/gauge-9728a2f9.svg";const $=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},j=e=>(U("data-v-7d9eab35"),e=e(),L(),e),D=j(()=>g("dialog",null,[g("textarea")],-1)),J=j(()=>g("h1",null,[g("img",{src:M}),E(" silentmantra benchmark")],-1)),K={class:"toolbar"},V={class:"title"},W={class:"code-wrapper"},H={__name:"benchmark",setup(e){let t=!1;const n=A({code:""});u();const r=S(),o=S(!1),i=c=>{c.key==="l"&&c.ctrlKey&&(c.preventDefault(),p())},p=async()=>n.code=await prettier.format(n.code,{parse:"babel",trailingComma:"none",plugins:prettierPlugins}),l=()=>O(location.href),s=()=>O(`[${n.title||"benchmark"}](${location.href})`),f=()=>window.open(location.href);{let c;w(n,async a=>{t=!0,await(c??(c=new Promise(y=>queueMicrotask(async()=>{const b=await JSON.stringify(a).compress("gzip base64 uri");location.hash=b,c=null}))))})}const d=()=>{const c=r.value;c.offsetHeight<c.scrollHeight&&(c.style.height=c.scrollHeight+16+"px")};w(()=>n.code,h),window.addEventListener("silentmatraBenchmarkLoaded",()=>{h(n.code)}),B(()=>{n.code||h("")});function h(c){var y;setTimeout(()=>o.value=!0);const a=r.value;a.value=c,(y=window.SilentMantraBenchmark)==null||y.set(r.value,c)}w(()=>n.code,d,{once:!0}),w(()=>n.title,c=>document.title=[c,"silentmantra benchmark"].filter(Boolean).join(" / ")),window.addEventListener("hashchange",u);async function u(){if(!location.hash)return;if(t){t=!1;return}const c=JSON.parse(await location.hash.slice(1).decompress("uri base64 gzip"));console.log("reading state from URL",c),Object.walk(c,(a,y,b,z)=>{if((a==null?void 0:a.constructor.name)==="Object")return;let m=n,v;for(;v=z.shift();)m=m[v];if(Array.isArray(m))m.replace(b);else try{m[y]=a}catch{debugger}})}function O(c){const a=document.querySelector("dialog"),y=a.querySelector("textarea");a.style.opacity=0,y.textContent=c,a.showModal(),y.focus(),y.select(),document.execCommand("copy"),a.close()}return(c,a)=>(k(),_(T,null,[D,g("div",{class:I(["wrapper",{loaded:o.value}])},[J,g("div",K,[P("",!0),g("button",{onClick:l},"copy url"),g("button",{onClick:s},"copy markup url"),P("",!0),g("button",{onClick:f},"duplicate"),g("button",{onClick:a[1]||(a[1]=y=>(n.code="",n.title=""))},"reset")]),g("div",V,[N(g("input",{autofocus:"","onUpdate:modelValue":a[2]||(a[2]=y=>n.title=y),placeholder:"title"},null,512),[[R,n.title]])]),g("div",W,[a[3]||(C(-1),a[3]=(k(),_("textarea",{ref_key:"$code",ref:r,key:1,class:"code",spellcheck:"false",onInput:d,onKeydown:i,onKeyup:y=>n.code=r.value.value},null,40,["onKeyup"])),C(1),a[3])])],2)],64))}},q=$(H,[["__scopeId","data-v-7d9eab35"]]);F(q).mount("#app");
