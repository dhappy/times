var ha=Object.defineProperty;var Me=r=>{throw TypeError(r)};var ma=(r,s,a)=>s in r?ha(r,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[s]=a;var oe=(r,s,a)=>ma(r,typeof s!="symbol"?s+"":s,a),_a=(r,s,a)=>s.has(r)||Me("Cannot "+a);var gt=(r,s,a)=>(_a(r,s,"read from private field"),a?a.call(r):s.get(r)),wt=(r,s,a)=>s.has(r)?Me("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(r):s.set(r,a);import{n as M,a as _,c as at}from"../chunks/CD4gT-3R.js";import{p as Pt}from"../chunks/Gr3-gG0Y.js";import{E as He,h as nt,F as Ve,d as t,a3 as ya,H as ga,I as ue,J as Ft,K as le,P as Tt,an as wa,M as Be,N as $t,O as qe,aw as ce,ar as Ye,i as Kt,ax as Ne,W as ba,s as Pe,ay as de,az as xa,aq as Ta,aA as ka,aB as je,aC as ve,aD as Ea,ak as Ca,k as Da,a6 as Ma,a5 as Na,aE as Ge,ag as Ue,aF as Pa,G as Aa,aG as La,ac as Je,aH as fe,a0 as Ae,ad as Le,aI as Oe,ae as Oa,l as Ia,aJ as Sa,w as Ke,y as S,z as Qe,ab as Ut,m as Fa,C as N,v as C,e as kt,aK as Ie,A as O,B as D,av as $a,x as X}from"../chunks/D0n13H1h.js";import{d as za,b as Ra,e as Se,s as H}from"../chunks/b_sgUc_Y.js";import{p as St,i as I}from"../chunks/CUYiCboh.js";import{s as W}from"../chunks/B--o0kAc.js";import{p as dt}from"../chunks/DzFztJLw.js";function bt(r,s){return s}function Wa(r,s,a,o){for(var h=[],d=s.length,e=0;e<d;e++)xa(s[e].e,h,!0);var f=d>0&&h.length===0&&a!==null;if(f){var b=a.parentNode;Ta(b),b.append(a),o.clear(),vt(r,s[0].prev,s[d-1].next)}ka(h,()=>{for(var u=0;u<d;u++){var l=s[u];f||(o.delete(l.k),vt(r,l.prev,l.next)),je(l.e,!f)}})}function xt(r,s,a,o,h,d=null){var e=r,f={items:new Map,first:null},b=(s&Ge)!==0;if(b){var u=r;e=nt?Ft(Ma(u)):u.appendChild(Na())}nt&&Ve();var l=null,T=!1,c=ya(()=>{var v=a();return Da(v)?v:v==null?[]:Ye(v)});He(()=>{var v=t(c),p=v.length;if(T&&p===0)return;T=p===0;let P=!1;if(nt){var A=e.data===ga;A!==(p===0)&&(e=ue(),Ft(e),le(!1),P=!0)}if(nt){for(var j=null,J,$=0;$<p;$++){if(Tt.nodeType===8&&Tt.data===wa){e=Tt,P=!0,le(!1);break}var y=v[$],x=o(y,$);J=Xe(Tt,f,j,null,y,x,$,h,s,a),f.items.set(x,J),j=J}p>0&&Ft(ue())}nt||Ha(v,f,e,h,s,o,a),d!==null&&(p===0?l?Be(l):l=$t(()=>d(e)):l!==null&&qe(l,()=>{l=null})),P&&le(!0),t(c)}),nt&&(e=Tt)}function Ha(r,s,a,o,h,d,e){var At,Lt,zt,Ot;var f=(h&Pa)!==0,b=(h&(ve|de))!==0,u=r.length,l=s.items,T=s.first,c=T,v,p=null,P,A=[],j=[],J,$,y,x;if(f)for(x=0;x<u;x+=1)J=r[x],$=d(J,x),y=l.get($),y!==void 0&&((At=y.a)==null||At.measure(),(P??(P=new Set)).add(y));for(x=0;x<u;x+=1){if(J=r[x],$=d(J,x),y=l.get($),y===void 0){var pt=c?c.e.nodes_start:a;p=Xe(pt,s,p,p===null?s.first:p.next,J,$,x,o,h,e),l.set($,p),A=[],j=[],c=p.next;continue}if(b&&Va(y,J,x,h),y.e.f&ce&&(Be(y.e),f&&((Lt=y.a)==null||Lt.unfix(),(P??(P=new Set)).delete(y))),y!==c){if(v!==void 0&&v.has(y)){if(A.length<j.length){var st=j[0],Z;p=st.prev;var ct=A[0],Et=A[A.length-1];for(Z=0;Z<A.length;Z+=1)Fe(A[Z],st,a);for(Z=0;Z<j.length;Z+=1)v.delete(j[Z]);vt(s,ct.prev,Et.next),vt(s,p,ct),vt(s,Et,st),c=st,p=Et,x-=1,A=[],j=[]}else v.delete(y),Fe(y,c,a),vt(s,y.prev,y.next),vt(s,y,p===null?s.first:p.next),vt(s,p,y),p=y;continue}for(A=[],j=[];c!==null&&c.k!==$;)c.e.f&ce||(v??(v=new Set)).add(c),j.push(c),c=c.next;if(c===null)continue;y=c}A.push(y),p=y,c=y.next}if(c!==null||v!==void 0){for(var ht=v===void 0?[]:Ye(v);c!==null;)c.e.f&ce||ht.push(c),c=c.next;var Ct=ht.length;if(Ct>0){var pe=h&Ge&&u===0?a:null;if(f){for(x=0;x<Ct;x+=1)(zt=ht[x].a)==null||zt.measure();for(x=0;x<Ct;x+=1)(Ot=ht[x].a)==null||Ot.fix()}Wa(s,ht,pe,l)}}f&&Ue(()=>{var Rt;if(P!==void 0)for(y of P)(Rt=y.a)==null||Rt.apply()}),Kt.first=s.first&&s.first.e,Kt.last=p&&p.e}function Va(r,s,a,o){o&ve&&Ne(r.v,s),o&de?Ne(r.i,a):r.i=a}function Xe(r,s,a,o,h,d,e,f,b,u){var l=(b&ve)!==0,T=(b&Ea)===0,c=l?T?ba(h):Pe(h):h,v=b&de?Pe(e):e,p={i:v,v:c,k:d,a:null,e:null,prev:a,next:o};try{return p.e=$t(()=>f(r,c,v,u),nt),p.e.prev=a&&a.e,p.e.next=o&&o.e,a===null?s.first=p:(a.next=p,a.e.next=p.e),o!==null&&(o.prev=p,o.e.prev=p.e),p}finally{}}function Fe(r,s,a){for(var o=r.next?r.next.e.nodes_start:a,h=s?s.e.nodes_start:a,d=r.e.nodes_start;d!==o;){var e=Ca(d);h.before(d),d=e}}function vt(r,s,a){s===null?r.first=a:(s.next=a,s.e.next=a&&a.e),a!==null&&(a.prev=s,a.e.prev=s&&s.e)}function ut(r,s,a){if(a){if(r.classList.contains(s))return;r.classList.add(s)}else{if(!r.classList.contains(s))return;r.classList.remove(s)}}function $e(r,s,a,o){var h=r.__styles??(r.__styles={});h[s]!==a&&(h[s]=a,a==null?r.style.removeProperty(s):r.style.setProperty(s,a,""))}function ze(r,s){var a=Kt,o=Oa,h=Ia;Ae(r),Le(r),Oe(r.ctx);try{s()}finally{Ae(a),Le(o),Oe(h)}}function Ba(r,s,a){var o=r,h;He(()=>{var d=Kt,e=Tt,f=!1;d.fn=b=>{var u=s.onerror;let l=s.failed;if(!u&&!l||f)throw b;var T=()=>{qe(h),ze(d,()=>{f=!1,h=$t(()=>a(o)),fe()})};u==null||u(b,T),h?je(h):nt&&(Ft(e),Je(),Ft(ue())),l&&Ue(()=>{ze(d,()=>{f=!0;try{h=$t(()=>{l(o,()=>b,()=>T)})}catch(c){Sa(c,d,null,d.ctx)}fe(),f=!1})})},nt&&Ve(),h=$t(()=>a(o)),fe()},Aa|La),nt&&(o=Tt)}const qa=!1,Ya=!0,Is=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ya,ssr:qa},Symbol.toStringTag,{value:"Module"}));function ja(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Jt={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */var Ga=Jt.exports,Re;function Ua(){return Re||(Re=1,function(r){(function(s,a){r.exports?r.exports=a():s.Toastify=a()})(Ga,function(s){var a=function(e){return new a.lib.init(e)},o="1.12.0";a.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},a.lib=a.prototype={toastify:o,constructor:a,init:function(e){return e||(e={}),this.options={},this.toastElement=null,this.options.text=e.text||a.defaults.text,this.options.node=e.node||a.defaults.node,this.options.duration=e.duration===0?0:e.duration||a.defaults.duration,this.options.selector=e.selector||a.defaults.selector,this.options.callback=e.callback||a.defaults.callback,this.options.destination=e.destination||a.defaults.destination,this.options.newWindow=e.newWindow||a.defaults.newWindow,this.options.close=e.close||a.defaults.close,this.options.gravity=e.gravity==="bottom"?"toastify-bottom":a.defaults.gravity,this.options.positionLeft=e.positionLeft||a.defaults.positionLeft,this.options.position=e.position||a.defaults.position,this.options.backgroundColor=e.backgroundColor||a.defaults.backgroundColor,this.options.avatar=e.avatar||a.defaults.avatar,this.options.className=e.className||a.defaults.className,this.options.stopOnFocus=e.stopOnFocus===void 0?a.defaults.stopOnFocus:e.stopOnFocus,this.options.onClick=e.onClick||a.defaults.onClick,this.options.offset=e.offset||a.defaults.offset,this.options.escapeMarkup=e.escapeMarkup!==void 0?e.escapeMarkup:a.defaults.escapeMarkup,this.options.ariaLive=e.ariaLive||a.defaults.ariaLive,this.options.style=e.style||a.defaults.style,e.backgroundColor&&(this.options.style.background=e.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var e=document.createElement("div");e.className="toastify on "+this.options.className,this.options.position?e.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(e.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):e.className+=" toastify-right",e.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var f in this.options.style)e.style[f]=this.options.style[f];if(this.options.ariaLive&&e.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)e.appendChild(this.options.node);else if(this.options.escapeMarkup?e.innerText=this.options.text:e.innerHTML=this.options.text,this.options.avatar!==""){var b=document.createElement("img");b.src=this.options.avatar,b.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?e.appendChild(b):e.insertAdjacentElement("afterbegin",b)}if(this.options.close===!0){var u=document.createElement("button");u.type="button",u.setAttribute("aria-label","Close"),u.className="toast-close",u.innerHTML="&#10006;",u.addEventListener("click",(function(A){A.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var l=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&l>360?e.insertAdjacentElement("afterbegin",u):e.appendChild(u)}if(this.options.stopOnFocus&&this.options.duration>0){var T=this;e.addEventListener("mouseover",function(A){window.clearTimeout(e.timeOutValue)}),e.addEventListener("mouseleave",function(){e.timeOutValue=window.setTimeout(function(){T.removeElement(e)},T.options.duration)})}if(typeof this.options.destination<"u"&&e.addEventListener("click",(function(A){A.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&e.addEventListener("click",(function(A){A.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var c=h("x",this.options),v=h("y",this.options),p=this.options.position=="left"?c:"-"+c,P=this.options.gravity=="toastify-top"?v:"-"+v;e.style.transform="translate("+p+","+P+")"}return e},showToast:function(){this.toastElement=this.buildToast();var e;if(typeof this.options.selector=="string"?e=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?e=this.options.selector:e=document.body,!e)throw"Root element is not defined";var f=a.defaults.oldestFirst?e.firstChild:e.lastChild;return e.insertBefore(this.toastElement,f),a.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(e){e.className=e.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),e.parentNode&&e.parentNode.removeChild(e),this.options.callback.call(e),a.reposition()}).bind(this),400)}},a.reposition=function(){for(var e={top:15,bottom:15},f={top:15,bottom:15},b={top:15,bottom:15},u=document.getElementsByClassName("toastify"),l,T=0;T<u.length;T++){d(u[T],"toastify-top")===!0?l="toastify-top":l="toastify-bottom";var c=u[T].offsetHeight;l=l.substr(9,l.length-1);var v=15,p=window.innerWidth>0?window.innerWidth:screen.width;p<=360?(u[T].style[l]=b[l]+"px",b[l]+=c+v):d(u[T],"toastify-left")===!0?(u[T].style[l]=e[l]+"px",e[l]+=c+v):(u[T].style[l]=f[l]+"px",f[l]+=c+v)}return this};function h(e,f){return f.offset[e]?isNaN(f.offset[e])?f.offset[e]:f.offset[e]+"px":"0px"}function d(e,f){return!e||typeof f!="string"?!1:!!(e.className&&e.className.trim().split(/\s+/gi).indexOf(f)>-1)}return a.lib.init.prototype=a.lib,a})}(Jt)),Jt.exports}var Ja=Ua();const Ka=ja(Ja),We=[{name:"Capricorn",symbol:"♑",start:new Date("2037/01/20 17:15"),end:new Date("2037/02/16 17:47")},{name:"Aquarius",symbol:"♒",start:new Date("2037/02/16 17:47"),end:new Date("2037/03/11 17:47")},{name:"Pisces",symbol:"♓",start:new Date("2037/03/11 17:47"),end:new Date("2037/04/18 17:45")},{name:"Aries",symbol:"♈",start:new Date("2037/04/18 17:45"),end:new Date("2037/05/13 17:45")},{name:"Taurus",symbol:"♉",start:new Date("2037/05/13 17:45"),end:new Date("2037/06/21 17:45")},{name:"Gemini",symbol:"♊",start:new Date("2037/06/21 17:45"),end:new Date("2037/07/20 17:45")},{name:"Cancer",symbol:"♋",start:new Date("2037/07/20 17:45"),end:new Date("2037/08/10 17:45")},{name:"Leo",symbol:"♌",start:new Date("2037/08/10 17:45"),end:new Date("2037/09/16 17:45")},{name:"Virgo",symbol:"♍",start:new Date("2037/09/16 17:45"),end:new Date("2037/10/30 17:45")},{name:"Libra",symbol:"♎",start:new Date("2037/10/30 17:45"),end:new Date("2037/11/23 17:45")},{name:"Scorpio",symbol:"♏",start:new Date("2037/11/23 17:45"),end:new Date("2037/11/29 17:45")},{name:"Ophiuchus",symbol:"⛎",start:new Date("2037/11/29 17:45"),end:new Date("2037/12/27 17:45")},{name:"Sagittarius",symbol:"♐",start:new Date("2037/12/27 17:45"),end:new Date("2038/01/20 17:45")}];var Qa=M('<path class="arc svelte-1k8lj6w"></path>');function Xa(r,s){Ke(s,!0);const a=Pt.url.searchParams.has("debug");let o=St(s,"cx",3,0),h=St(s,"cy",3,0),d=St(s,"r",3,50),e=St(s,"Ⲑs",3,0),f=St(s,"Ⲑe",19,()=>Math.PI);a&&console.debug({cx:o(),cy:h(),r:d(),"Ⲑs":e(),"Ⲑe":f()});const b={start:d()*Math.cos(e()+Math.PI/2),end:d()*Math.cos(f()+Math.PI/2)},u={start:d()*Math.sin(e()+Math.PI/2),end:d()*Math.sin(f()+Math.PI/2)},l=0,T=0,c=1;a&&console.debug({x:b,y:u,rotation:l,largeArcFlag:T,sweepFlag:c});var v=Qa();S(()=>W(v,"d",`
    M ${o()+b.start},${h()+u.start}
    A ${d()??""},${d()??""}
      ${l}
      ${T}
      ${c}
      ${b.end??""},${u.end??""}
  `)),_(r,v),Qe()}var Za=(r,s,a)=>{kt(s,!t(s)),t(s)?kt(a,dt({decimal:"roman"})):kt(a,dt({fraction:"arabic"}))},ts=()=>{},es=M('<text class="synodic svelte-r86iph"><title class="svelte-r86iph"> </title> </text>'),as=M('<g class="lunar month svelte-r86iph"></g>'),ss=M('<line y1="40" y2="45" class="svelte-r86iph"></line>'),ns=M('<tspan class="roman svelte-r86iph"> </tspan>'),rs=M('<tspan class="roman svelte-r86iph"> </tspan><tspan class="operation svelte-r86iph" dx="-1" dy="-1">⨯</tspan><tspan class="hexadecimal svelte-r86iph" dx="-0.5" dy="1">𝔸</tspan><tspan class="tz svelte-r86iph" dx="-0.5" dy="-0.5"></tspan>',1),is=M('<tspan class="number svelte-r86iph"> </tspan>'),os=M('<tspan class="roman svelte-r86iph"> </tspan>'),ls=M('<tspan class="number svelte-r86iph"> </tspan>'),cs=M('<tspan class="unknown svelte-r86iph">¿?</tspan>'),fs=M('<text y="40" transform="rotate(180)" class="svelte-r86iph"><!></text>'),us=M('<g class="major svelte-r86iph"><!><!></g>'),ds=M('<g class="svelte-r86iph"><title class="svelte-r86iph"> </title><text y="53" class="day number svelte-r86iph"></text></g>'),vs=M('<g class="zodiac month svelte-r86iph"><!><text y="55" class="norse svelte-r86iph"><title class="svelte-r86iph"> </title> </text><g class="zodiac days svelte-r86iph"></g></g>'),ps=(r,s,a)=>{s[t(a)]=!s[t(a)]},hs=M('<g class="minor svelte-r86iph"><line y1="45" y2="50" role="button" class="svelte-r86iph"></line><text class="svelte-r86iph"> </text></g>'),ms=M('<g class="seconds svelte-r86iph"></g>'),_s=M('<line class="year arm svelte-r86iph" y1="2" y2="-30"><title>Day</title></line>'),ys=M('<line class="hour arm svelte-r86iph" y1="2" y2="-20"><title>Hours</title></line>'),gs=M('<line class="minute arm svelte-r86iph" y1="4" y2="-30"><title>Minutes</title></line>'),ws=M('<g class="second svelte-r86iph"><title class="svelte-r86iph">Seconds</title><line class="arm svelte-r86iph" y1="10"></line><line id="counterweight" y1="10" y2="2" class="svelte-r86iph"></line><circle r="2" class="svelte-r86iph"></circle></g>'),bs=M('<text id="babylonian" class="readout svelte-r86iph" x="-38%" y="48%" style="textAnchor: start"> <tspan class="colon svelte-r86iph">:</tspan> <tspan class="colon svelte-r86iph">:</tspan> </text>'),xs=M('<text class="readout svelte-r86iph" y="-45%"> </text>'),Ts=M('<text id="percent" class="readout svelte-r86iph" x="38%" y="48%"> </text>'),ks=M('<svg viewBox="-70 -70 140 140" class="svelte-r86iph"><defs><marker id="arrow" viewBox="-1 0 12 11" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse" stroke="context-stroke" fill="context-fill"><path d="M0,0 l10,5 l-10,5 z"></path></marker></defs><circle id="face" r="48" role="button" class="svelte-r86iph"></circle><!><!><!><!><!><!><!><!><!><!><!></svg>');function Es(r,s){var Vt,Bt,qt,Yt,jt,Gt;Ke(s,!0);const a=Pt.url.searchParams.has("debug");let o=Ut(Pt.url.searchParams.get("type")==="decimal");const h=(()=>{let n="";const i=Pt.url.searchParams.get("date");n+=i||new Date().toISOString().split("T")[0];const w=Pt.url.searchParams.get("time");return n+=`T${w||new Date().toISOString().split("T")[1]}`,a&&console.debug({"Initial Time":n}),new Date(n).getTime()})();let d=Ut(0),e=null;const f=()=>{e==null&&(e=new Date().getTime());const i=new Date().getTime()-e;return h+i},b=new Date().getTimezoneOffset()*60*1e3;let u=dt([]);const l=24*60*60*1e3,T=l*365.25;let c=Ut(dt(f())),v=C(()=>((t(c)%l-b)/l+1)%1*100);const p={fraction:["arabic","roman","roman/times","none"],decimal:["arabic","roman","none"]};let P=Ut(dt(t(o)?{decimal:"roman"}:{fraction:"arabic"}));function A(n){return"decimal"in n}function j(n){return"fraction"in n}class J{constructor(){oe(this,"type","decimal");wt(this,Vt,C(()=>t(v)/10));wt(this,Bt,C(()=>t(v)*10%100));wt(this,qt,C(()=>t(v)*1e3%100))}get hours(){return t(gt(this,Vt))}get minutes(){return t(gt(this,Bt))}get seconds(){return t(gt(this,qt))}}Vt=new WeakMap,Bt=new WeakMap,qt=new WeakMap;let $=new J;class y{constructor(){oe(this,"type","fraction");wt(this,Yt,C(()=>t(v)%100));wt(this,jt,C(()=>t(v)*100%100));wt(this,Gt,C(()=>t(v)*1e4%100))}get hours(){return t(gt(this,Yt))}get minutes(){return t(gt(this,jt))}get seconds(){return t(gt(this,Gt))}}Yt=new WeakMap,jt=new WeakMap,Gt=new WeakMap;let x=new y,pt=C(()=>new Date(t(c))),st=C(()=>new Date(t(pt).getFullYear(),0,1)),Z=C(()=>new Date(t(pt).getFullYear(),11,31,23,59,59,999));const ct=t(Z).getTime()-t(st).getTime(),Et=(t(pt).getTime()-t(st).getTime())/ct;a&&console.debug({yStart:t(st),yEnd:t(Z),yLength:ct,yPercent:Et}),Fa(()=>{let n;function i(){const w=async()=>{t(d)>0&&await new Promise(g=>{setTimeout(g,t(d))}),kt(c,dt(f())),n=requestAnimationFrame(i)};document.startViewTransition?document.startViewTransition(async()=>{await w(),await $a()}):w()}return i(),()=>{n!=null&&cancelAnimationFrame(n)}});let ht=30;const Ct=Array.from({length:100}).map((n,i)=>i),At=Ct.slice(0,39).slice(0,13),Lt=At.slice(0,11),zt=Lt.slice(0,10),Ot=["0"].concat(Lt.map(n=>String.fromCodePoint(8544+n))),Rt=["0","Ⅹ","ⅩⅩ","ⅩⅩⅬ","ⅩⅬ","Ⅼ","ⅬⅩ","ⅬⅩⅩ","ⅩⅩⅭ","ⅩⅭ","Ⅽ"],he=[{icon:"🌑",name:"New Moon"},{icon:"🌒",name:"Waxing Crescent"},{icon:"🌓",name:"First Quarter"},{icon:"🌔",name:"Waxing Gibbous"},{icon:"🌕",name:"Full Moon"},{icon:"🌖",name:"Waning Gibbous"},{icon:"🌗",name:"Last Quarter"},{icon:"🌘",name:"Waning Crescent"}],{searchParams:Qt}=Pt.url;function G(n){const[[i,w],...g]=Object.entries(n);if(g.length>0)throw new Error("`has` only accepts an object with a single key.");const m=(()=>{if(Qt.has(i)&&[void 0,null,"true","t","1"].includes(Qt.get(i)))return!0;if(Qt.has(i))return!1;if(w!=null&&typeof w=="boolean")return w;throw new Error(`Invalid default, "${w}", for "${i}".`)})();return{[i]:m}}let k=dt({...G({moons:!1}),...G({year:!0}),...G({hours:!0}),...G({minutes:!0}),...G({seconds:!0}),...G({tenMarks:!0}),...G({minTicks:!0}),...G({zodiac:!0}),...G({face:!0}),...G({percent:!0}),...G({decimal:!0}),...G({fraction:!0}),...G({babylonian:!0})});const Xt=29.53059*24*60*60*1e3,Zt=Xt/T;a&&console.debug({day:l,year:T,synodic:Xt,synPercent:Zt});const Ze=(n,i={})=>{Ka({text:n,duration:1e4,close:!0,gravity:"bottom",position:"center",stopOnFocus:!0,style:{background:"linear-gradient(to right, #0004C2, #C25800)",borderRadius:"1rem"},...i}).showToast()},te=We.map(({start:n,end:i,symbol:w,name:g})=>({start:(n.getTime()-t(st).getTime())/ct-12,end:(i.getTime()-t(st).getTime())/ct-12,symbol:w,name:g,length:Math.round((i.getTime()-n.getTime())/l)}));a&&console.debug({zodiac:We,zPercents:te});const me=te.find(({name:n})=>n==="Capricorn"),ta=me.start&ct;a&&console.debug({capPercent:me,capOffset:ta});const ee=-t(pt).getTimezoneOffset()/60,ea=ee>=0?`+${ee}`:ee,Dt=C(()=>t(o)?$:x),ae={epoch:new Date(2024,6,16,17,30),start:0};let se=ae.epoch.getTime(),_e=ae.start;for(;se<=t(c);)_e=se,se+=Xt;ae.start=_e;const{PI:Wt,cos:aa,sin:sa}=Math;var ne=ks();Ra(n=>{S(()=>Ie.title=`${(t(o)?"Decimal":"Percentage")??""} Clock`)}),Se("keypress",Ie,n=>{if(n.key==="u")kt(o,!t(o));else if(n.key==="p")kt(d,(t(d)+200)%1200),Ze(`Pausing ${t(d).toLocaleString()}ms.`);else if(n.key==="k"){const i=p[t(Dt).type],w=i.indexOf(t(P)[t(Dt).type]),g=i[(w+1)%i.length];a&&console.debug({type:t(Dt).type,next:g,units:t(P)}),kt(P,dt({[t(Dt).type]:g}))}else n.key==="m"?k.moons=!k.moons:n.key==="f"?k.face=!k.face:n.key==="i"?k.minutes=!k.minutes:n.key==="h"?k.hours=!k.hours:n.key==="b"?k.babylonian=!k.babylonian:n.key==="1"?k.tenMarks=!k.tenMarks:n.key==="y"&&(k.year=!k.year)});var Ht=N(O(ne));Ht.__click=[Za,o,P],Ht.__keydown=[ts],W(Ht,"tabindex",-1);var ye=N(Ht);{var na=n=>{var i=at(),w=X(i);xt(w,17,()=>Array.from({length:ht}),bt,(g,m,E)=>{var L=as();const F=C(()=>58.75),z=C(()=>2*Wt*Zt*E),V=C(()=>E/At.length);xt(L,21,()=>he,bt,(B,q,tt)=>{var K=es();const mt=C(()=>Zt/he.length),et=C(()=>(t(F)+t(V)*3.5)*aa(t(z)+tt*t(mt)*2*Wt)),rt=C(()=>(t(F)+t(V)*3.5)*sa(t(z)+tt*t(mt)*2*Wt));var ft=O(K),it=O(ft,!0);D(ft);var Mt=N(ft);D(K),S(()=>{W(K,"x",t(et)),W(K,"y",t(rt)),$e(K,"--rotation",`${2*Wt*tt*t(mt)}rad`),H(it,t(q).name),H(Mt,` ${t(q).icon??""}`)}),_(B,K)}),D(L),_(g,L)}),_(n,i)};I(ye,n=>{k.moons&&n(na)})}var ge=N(ye);{var ra=n=>{var i=at(),w=X(i);xt(w,17,()=>zt,bt,(g,m)=>{var E=us(),L=O(E);{var F=B=>{var q=ss();_(B,q)};I(L,B=>{k.minTicks&&B(F)})}var z=N(L);{var V=B=>{var q=fs(),tt=O(q);{var K=et=>{var rt=at(),ft=X(rt);{var it=R=>{var Y=ns(),_t=O(Y,!0);D(Y),S(()=>H(_t,Rt[t(m)])),_(R,Y)},Mt=R=>{var Y=at(),_t=X(Y);{var Nt=U=>{var Q=rs(),ot=X(Q),It=O(ot,!0);D(ot);var lt=N(ot,3);lt.textContent=ea,S(()=>H(It,Ot[t(m)])),_(U,Q)},re=U=>{var Q=at(),ot=X(Q);{var It=lt=>{var yt=is(),ie=O(yt);D(yt),S(()=>H(ie,`${t(m)*10}%`)),_(lt,yt)};I(ot,lt=>{t(P).fraction==="arabic"&&lt(It)},!0)}_(U,Q)};I(_t,U=>{t(P).fraction==="roman/times"?U(Nt):U(re,!1)},!0)}_(R,Y)};I(ft,R=>{t(P).fraction==="roman"?R(it):R(Mt,!1)})}_(et,rt)},mt=et=>{var rt=at(),ft=X(rt);{var it=R=>{var Y=at(),_t=X(Y);{var Nt=U=>{var Q=os(),ot=O(Q,!0);D(Q),S(()=>H(ot,Ot[t(m)])),_(U,Q)},re=U=>{var Q=at(),ot=X(Q);{var It=lt=>{var yt=ls(),ie=O(yt,!0);D(yt),S(()=>H(ie,t(m))),_(lt,yt)};I(ot,lt=>{t(P).decimal==="arabic"&&lt(It)},!0)}_(U,Q)};I(_t,U=>{t(P).decimal==="roman"?U(Nt):U(re,!1)})}_(R,Y)},Mt=R=>{var Y=cs();_(R,Y)};I(ft,R=>{A(t(P))?R(it):R(Mt,!1)},!0)}_(et,rt)};I(tt,et=>{j(t(P))?et(K):et(mt,!1)})}D(q),_(B,q)};I(z,B=>{k.tenMarks&&B(V)})}D(E),S(()=>{W(E,"transform",`rotate(${36*t(m)})`),ut(E,"decimal",t(o))}),_(g,E)}),_(n,i)};I(ge,n=>{k.minutes&&n(ra)})}var we=N(ge);{var ia=n=>{var i=at(),w=X(i);xt(w,17,()=>te,bt,(g,m)=>{var E=vs();const L=C(()=>.437),F=C(()=>({start:t(m).start+t(L),end:t(m).end+t(L),width:t(m).end-t(m).start}));var z=O(E);const V=C(()=>2*Math.PI*(t(m).start+t(L))),B=C(()=>2*Math.PI*(t(m).end+t(L)));Xa(z,{cx:0,cy:0,r:51,get"Ⲑs"(){return t(V)},get"Ⲑe"(){return t(B)}});var q=N(z),tt=O(q),K=O(tt,!0);D(tt);var mt=N(tt);D(q);var et=N(q);xt(et,21,()=>Array.from({length:t(m).length}),bt,(rt,ft,it,Mt)=>{var R=ds(),Y=O(R),_t=O(Y);D(Y);var Nt=N(Y);Nt.textContent=it,D(R),S(()=>{H(_t,`${t(m).name??""} ${it??""}`),W(Nt,"transform",`rotate(${2*Math.PI*(t(F).start+it*t(F).width/t(m).length)*(180/Math.PI)})`)}),_(rt,R)}),D(et),D(E),S(()=>{W(q,"transform",`rotate(${2*Math.PI*t(F).start*(180/Math.PI)})`),H(K,t(m).name),H(mt,` ${t(m).symbol??""}`)}),_(g,E)}),_(n,i)};I(we,n=>{k.zodiac&&n(ia)})}var be=N(we);{var oa=n=>{var i=ms();xt(i,21,()=>Ct,bt,(w,g)=>{var m=hs();const E=C(()=>t(g)*3.6+180),L=C(()=>Math.floor(t(o)?$.seconds:x.seconds)===t(g));var F=O(m);F.__click=[ps,u,g];var z=N(F),V=O(z,!0);D(z),D(m),S(()=>{W(m,"transform",`rotate(${t(E)??""})`),ut(m,"on",u[t(g)]),ut(m,"current",t(L)),W(F,"tabindex",t(g)+1),W(z,"y",t(L)?48:44.5),H(V,t(g))}),Se("keypress",F,B=>{if(B.key==="Enter")return u[t(g)]=!u[t(g)]}),_(w,m)}),D(i),_(n,i)};I(be,n=>{k.seconds&&n(oa)})}var xe=N(be);{var la=n=>{var i=_s();W(i,"transform",`rotate(${360*Et})`),S(()=>ut(i,"decimal",t(o))),_(n,i)};I(xe,n=>{k.year&&n(la)})}var Te=N(xe);{var ca=n=>{var i=ys();S(()=>{W(i,"transform",`rotate(${360*(t(v)/100)})`),ut(i,"decimal",t(o))}),_(n,i)};I(Te,n=>{k.hours&&n(ca)})}var ke=N(Te);{var fa=n=>{var i=gs();S(()=>{W(i,"transform",`rotate(${360*t(Dt).minutes/100})`),ut(i,"decimal",t(o))}),_(n,i)};I(ke,n=>{k.minutes&&n(fa)})}var Ee=N(ke);{var ua=n=>{var i=ws(),w=N(O(i));Je(2),D(i),S(()=>{W(i,"transform",`rotate(${360*t(Dt).seconds/100})`),ut(i,"decimal",t(o)),$e(i,"view-transition-name","seconds"),W(w,"y2",t(o)?-36:-42)}),_(n,i)};I(Ee,n=>{k.seconds&&n(ua)})}var Ce=N(Ee);{var da=n=>{var i=at(),w=X(i);{const g=C(()=>{const[m,E,L]=t(pt).toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!1,hourCycle:"h23"}).split(/:/g);return{hr:m,min:E,sec:L}});Ba(w,{},m=>{var E=bs(),L=O(E,!0),F=N(L,2,!0),z=N(F,2,!0);D(E),S(()=>{H(L,t(g).hr),H(F,t(g).min),H(z,t(g).sec)}),_(m,E)})}_(n,i)};I(Ce,n=>{k.babylonian&&n(da)})}var De=N(Ce);xt(De,17,()=>[$,x],bt,(n,i,w,g)=>{var m=at();const E=C(()=>w===0);var L=X(m);{var F=z=>{var V=xs(),B=O(V);D(V),S((q,tt,K)=>{W(V,"id",t(i).type),W(V,"x",t(E)?"-36%":"38%"),ut(V,"active",t(o)&&t(i).type==="decimal"||!t(o)&&t(i).type==="fraction"),H(B,`${q??""}${(t(E)?"ʜ":"ʜ͋")??""}${tt??""}${(t(E)?"ᴍ":"ᴍ͋")??""}${K??""}`)},[()=>Math.floor(t(i).hours).toString().padStart(t(E)?1:2,"0"),()=>Math.floor(t(i).minutes).toString().padStart(2,"0"),()=>Math.floor(t(i).seconds).toString().padStart(2,"0")]),_(z,V)};I(L,z=>{k[t(i).type]&&z(F)})}_(n,m)});var va=N(De);{var pa=n=>{var i=Ts(),w=O(i);D(i),S(g=>H(w,`${g??""}%`),[()=>t(v).toFixed(3)]),_(n,i)};I(va,n=>{k.percent&&n(pa)})}D(ne),_(r,ne),Qe()}za(["click","keydown"]);function Ss(r){Es(r,{})}export{Ss as component,Is as universal};
