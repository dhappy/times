var vt=i=>{throw TypeError(i)};var At=(i,s,e)=>s.has(i)||vt("Cannot "+e);var R=(i,s,e)=>(At(i,s,"read from private field"),e?e.call(i):s.get(i)),D=(i,s,e)=>s.has(i)?vt("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(i):s.set(i,e);import{n as U,a as Y}from"../chunks/Cw9rcrGU.js";import"../chunks/DUsZp8BX.js";import{b as Mt,h as V,x as qt,m as o,ag as St,H as $t,y as ht,z as mt,A as rt,c as j,a6 as Pt,B as Nt,a as Ct,C as Ft,as as lt,aa as Lt,r as yt,at as It,aj as Rt,s as gt,au as Dt,av as Ht,a9 as Vt,aw as Wt,d as Bt,ax as Yt,ay as jt,a3 as Kt,w as Ut,az as Xt,v as Gt,aA as Jt,K as Qt,aq as ft,u as _t,P as E,L as K,M as Zt,p as it,J as N,N as M,ar as te,aB as xt,aC as wt,O as q}from"../chunks/De-vNxea.js";import{d as ee,a as se,e as bt,s as st}from"../chunks/CjU-TfXP.js";import{p as ct,i as ie}from"../chunks/m2eab7uX.js";function ut(i,s){return s}function oe(i,s,e,u){for(var d=[],v=s.length,t=0;t<v;t++)Ht(s[t].e,d,!0);var c=v>0&&d.length===0&&e!==null;if(c){var l=e.parentNode;Vt(l),l.append(e),u.clear(),S(i,s[0].prev,s[v-1].next)}Wt(d,()=>{for(var p=0;p<v;p++){var n=s[p];c||(u.delete(n.k),S(i,n.prev,n.next)),Bt(n.e,!c)}})}function dt(i,s,e,u,d,v=null){var t=i,c={items:new Map,first:null};V&&qt();var l=null,p=!1,n=St(()=>{var f=e();return Ut(f)?f:f==null?[]:Lt(f)});Mt(()=>{var f=o(n),r=f.length;if(p&&r===0)return;p=r===0;let a=!1;if(V){var h=t.data===$t;h!==(r===0)&&(t=ht(),mt(t),rt(!1),a=!0)}if(V){for(var k=null,x,m=0;m<r;m++){if(j.nodeType===8&&j.data===Pt){t=j,a=!0,rt(!1);break}var w=f[m],A=u(w,m);x=Ot(j,c,k,null,w,A,m,d,s,e),c.items.set(A,x),k=x}r>0&&mt(ht())}V||ne(f,c,t,d,s,u,e),v!==null&&(r===0?l?Nt(l):l=Ct(()=>v(t)):l!==null&&Ft(l,()=>{l=null})),a&&rt(!0),o(n)}),V&&(t=j)}function ne(i,s,e,u,d,v,t){var c=i.length,l=s.items,p=s.first,n=p,f,r=null,a=[],h=[],k,x,m,w;for(w=0;w<c;w+=1){if(k=i[w],x=v(k,w),m=l.get(x),m===void 0){var A=n?n.e.nodes_start:e;r=Ot(A,s,r,r===null?s.first:r.next,k,x,w,u,d,t),l.set(x,r),a=[],h=[],n=r.next;continue}if(ae(m,k,w),m.e.f&lt&&Nt(m.e),m!==n){if(f!==void 0&&f.has(m)){if(a.length<h.length){var $=h[0],T;r=$.prev;var W=a[0],P=a[a.length-1];for(T=0;T<a.length;T+=1)kt(a[T],$,e);for(T=0;T<h.length;T+=1)f.delete(h[T]);S(s,W.prev,P.next),S(s,r,W),S(s,P,$),n=$,r=P,w-=1,a=[],h=[]}else f.delete(m),kt(m,n,e),S(s,m.prev,m.next),S(s,m,r===null?s.first:r.next),S(s,r,m),r=m;continue}for(a=[],h=[];n!==null&&n.k!==x;)n.e.f&lt||(f??(f=new Set)).add(n),h.push(n),n=n.next;if(n===null)continue;m=n}a.push(m),r=m,n=m.next}if(n!==null||f!==void 0){for(var L=f===void 0?[]:Lt(f);n!==null;)n.e.f&lt||L.push(n),n=n.next;var nt=L.length;if(nt>0){var X=null;oe(s,L,X,l)}}yt.first=s.first&&s.first.e,yt.last=r&&r.e}function ae(i,s,e,u){It(i.v,s),i.i=e}function Ot(i,s,e,u,d,v,t,c,l,p){var n=(l&Yt)!==0,f=(l&jt)===0,r=n?f?Rt(d):gt(d):d,a=l&Dt?gt(t):t,h={i:a,v:r,k:v,a:null,e:null,prev:e,next:u};try{return h.e=Ct(()=>c(i,r,a,p),V),h.e.prev=e&&e.e,h.e.next=u&&u.e,e===null?s.first=h:(e.next=h,e.e.next=h.e),u!==null&&(u.prev=h,u.e.prev=h.e),h}finally{}}function kt(i,s,e){for(var u=i.next?i.next.e.nodes_start:e,d=s?s.e.nodes_start:e,v=i.e.nodes_start;v!==u;){var t=Kt(v);d.before(v),v=t}}function S(i,s,e){s===null?i.first=e:(s.next=e,s.e.next=e&&e.e),e!==null&&(e.prev=s,e.e.prev=s&&s.e)}function C(i,s,e,u){var d=i.__attributes??(i.__attributes={});V&&(d[s]=i.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&i.nodeName==="LINK")||d[s]!==(d[s]=e)&&(s==="style"&&"__styles"in i&&(i.__styles={}),s==="loading"&&(i[Xt]=e),e==null?i.removeAttribute(s):typeof e!="string"&&re(i).includes(s)?i[s]=e:i.setAttribute(s,e))}var Tt=new Map;function re(i){var s=Tt.get(i.nodeName);if(s)return s;Tt.set(i.nodeName,s=[]);for(var e,u=i,d=Element.prototype;d!==u;){e=Jt(u);for(var v in e)e[v].set&&s.push(v);u=Gt(u)}return s}function H(i,s,e){if(e){if(i.classList.contains(s))return;i.classList.add(s)}else{if(!i.classList.contains(s))return;i.classList.remove(s)}}function le(i,s,e,u){var d=i.__styles??(i.__styles={});d[s]!==e&&(d[s]=e,i.style.setProperty(s,e,""))}const fe=!1,ce=!0,Ae=Object.freeze(Object.defineProperty({__proto__:null,prerender:ce,ssr:fe},Symbol.toStringTag,{value:"Module"}));function ue(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ot={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */var de=ot.exports,Et;function pe(){return Et||(Et=1,function(i){(function(s,e){i.exports?i.exports=e():s.Toastify=e()})(de,function(s){var e=function(t){return new e.lib.init(t)},u="1.12.0";e.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},e.lib=e.prototype={toastify:u,constructor:e,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||e.defaults.text,this.options.node=t.node||e.defaults.node,this.options.duration=t.duration===0?0:t.duration||e.defaults.duration,this.options.selector=t.selector||e.defaults.selector,this.options.callback=t.callback||e.defaults.callback,this.options.destination=t.destination||e.defaults.destination,this.options.newWindow=t.newWindow||e.defaults.newWindow,this.options.close=t.close||e.defaults.close,this.options.gravity=t.gravity==="bottom"?"toastify-bottom":e.defaults.gravity,this.options.positionLeft=t.positionLeft||e.defaults.positionLeft,this.options.position=t.position||e.defaults.position,this.options.backgroundColor=t.backgroundColor||e.defaults.backgroundColor,this.options.avatar=t.avatar||e.defaults.avatar,this.options.className=t.className||e.defaults.className,this.options.stopOnFocus=t.stopOnFocus===void 0?e.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||e.defaults.onClick,this.options.offset=t.offset||e.defaults.offset,this.options.escapeMarkup=t.escapeMarkup!==void 0?t.escapeMarkup:e.defaults.escapeMarkup,this.options.ariaLive=t.ariaLive||e.defaults.ariaLive,this.options.style=t.style||e.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var c in this.options.style)t.style[c]=this.options.style[c];if(this.options.ariaLive&&t.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,this.options.avatar!==""){var l=document.createElement("img");l.src=this.options.avatar,l.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?t.appendChild(l):t.insertAdjacentElement("afterbegin",l)}if(this.options.close===!0){var p=document.createElement("button");p.type="button",p.setAttribute("aria-label","Close"),p.className="toast-close",p.innerHTML="&#10006;",p.addEventListener("click",(function(x){x.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var n=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&n>360?t.insertAdjacentElement("afterbegin",p):t.appendChild(p)}if(this.options.stopOnFocus&&this.options.duration>0){var f=this;t.addEventListener("mouseover",function(x){window.clearTimeout(t.timeOutValue)}),t.addEventListener("mouseleave",function(){t.timeOutValue=window.setTimeout(function(){f.removeElement(t)},f.options.duration)})}if(typeof this.options.destination<"u"&&t.addEventListener("click",(function(x){x.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&t.addEventListener("click",(function(x){x.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var r=d("x",this.options),a=d("y",this.options),h=this.options.position=="left"?r:"-"+r,k=this.options.gravity=="toastify-top"?a:"-"+a;t.style.transform="translate("+h+","+k+")"}return t},showToast:function(){this.toastElement=this.buildToast();var t;if(typeof this.options.selector=="string"?t=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?t=this.options.selector:t=document.body,!t)throw"Root element is not defined";var c=e.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,c),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),e.reposition()}).bind(this),400)}},e.reposition=function(){for(var t={top:15,bottom:15},c={top:15,bottom:15},l={top:15,bottom:15},p=document.getElementsByClassName("toastify"),n,f=0;f<p.length;f++){v(p[f],"toastify-top")===!0?n="toastify-top":n="toastify-bottom";var r=p[f].offsetHeight;n=n.substr(9,n.length-1);var a=15,h=window.innerWidth>0?window.innerWidth:screen.width;h<=360?(p[f].style[n]=l[n]+"px",l[n]+=r+a):v(p[f],"toastify-left")===!0?(p[f].style[n]=t[n]+"px",t[n]+=r+a):(p[f].style[n]=c[n]+"px",c[n]+=r+a)}return this};function d(t,c){return c.offset[t]?isNaN(c.offset[t])?c.offset[t]:c.offset[t]+"px":"0px"}function v(t,c){return!t||typeof c!="string"?!1:!!(t.className&&t.className.trim().split(/\s+/gi).indexOf(c)>-1)}return e.lib.init.prototype=e.lib,e})}(ot)),ot.exports}var ve=pe();const he=ue(ve),me=(i,s)=>{it(s,!o(s))};var ye=()=>{},ge=U('<tspan class="operation svelte-zveq0x" dx="-1" dy="-1">⨯</tspan><tspan class="hexadecimal svelte-zveq0x" dx="-0.5" dy="1">𝔸</tspan>',1),_e=U('<g class="major svelte-zveq0x"><line y1="40" y2="45" class="svelte-zveq0x"></line><text y="40" transform="rotate(180)" class="svelte-zveq0x"><tspan class="roman svelte-zveq0x"> </tspan><!></text></g>'),xe=(i,s,e)=>{s[o(e)]=!s[o(e)]},we=U('<g class="minor svelte-zveq0x"><line y1="45" y2="50" role="button" class="svelte-zveq0x"></line><text class="svelte-zveq0x"> </text></g>'),be=U('<text class="readout svelte-zveq0x" x="0%"> </text>'),ke=U('<svg viewBox="-50 -50 100 100" class="svelte-zveq0x"><defs><marker id="arrow" viewBox="-1 0 12 11" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse" stroke="context-stroke" fill="context-fill"><path d="M0,0 l10,5 l-10,5 z"></path></marker></defs><circle id="face" r="48" role="button" class="svelte-zveq0x"></circle><!><!><line class="hour arm svelte-zveq0x" y1="2" y2="-20"></line><line class="minute arm svelte-zveq0x" y1="4" y2="-30"></line><g class="second svelte-zveq0x"><line class="arm svelte-zveq0x" y1="10"></line><line id="counterweight" y1="10" y2="2" class="svelte-zveq0x"></line><circle r="2" class="svelte-zveq0x"></circle></g><!><text id="percent" class="readout svelte-zveq0x" x="0%" y="18%"> </text></svg>');function Te(i,s){var G,J,Q,Z,tt,et;Qt(s,!0);let e=ft(0);const u=()=>performance.timeOrigin+performance.now(),d=new Date().getTimezoneOffset()*60*1e3;let v=ct([]);const t=24*60*60*1e3;let c=ft(ct(u())),l=N(()=>(o(c)%t-d)/t*100);class p{constructor(){D(this,G,N(()=>o(l)/10));D(this,J,N(()=>o(l)*10%100));D(this,Q,N(()=>o(l)*1e3%100))}get hours(){return o(R(this,G))}get minutes(){return o(R(this,J))}get seconds(){return o(R(this,Q))}}G=new WeakMap,J=new WeakMap,Q=new WeakMap;let n=new p;class f{constructor(){D(this,Z,N(()=>o(l)%100));D(this,tt,N(()=>o(l)*100%100));D(this,et,N(()=>o(l)*1e4%100))}get hours(){return o(R(this,Z))}get minutes(){return o(R(this,tt))}get seconds(){return o(R(this,et))}}Z=new WeakMap,tt=new WeakMap,et=new WeakMap;let r=new f,a=ft(!1);_t(()=>{let y;function g(){const _=async()=>{o(e)>0&&await new Promise(b=>{setTimeout(b,o(e))}),it(c,ct(u())),y=requestAnimationFrame(g)};document.startViewTransition?document.startViewTransition(async()=>{await _(),await te()}):_()}return g(),()=>{y!=null&&cancelAnimationFrame(y)}});const h=Array.from({length:100}).map((y,g)=>g),k=h.slice(0,11),x=["0"].concat(k.map(y=>String.fromCodePoint(8544+y))),m=y=>{he({text:y,duration:1e4,close:!0,gravity:"bottom",position:"center",stopOnFocus:!0,style:{background:"linear-gradient(to right, #0004C2, #C25800)",borderRadius:"1rem"}}).showToast()};_t(()=>{m(`Press ’𐌵’ or click the face to switch speeds.

Press ’ｐ’ to add a pause.`)});var w=ke();se(y=>{K(()=>xt.title=`${(o(a)?"Decimal":"Percentage")??""} Clock`)}),bt("keypress",xt,y=>{y.key==="u"?it(a,!o(a)):y.key==="p"&&(it(e,(o(e)+200)%1200),m(`Pausing ${o(e).toLocaleString()}ms.`))});var A=E(M(w));A.__click=[me,a],A.__keydown=[ye],C(A,"tabindex",-1);var $=E(A);dt($,17,()=>k,ut,(y,g)=>{var _=_e(),b=E(M(_)),O=M(b),z=M(O,!0);q(O);var F=E(O);{var B=I=>{var at=ge();wt(),Y(I,at)};ie(F,I=>{o(a)||I(B)})}q(b),q(_),K(()=>{C(_,"transform",`rotate(${36*o(g)})`),H(_,"decimal",o(a)),st(z,x[o(g)])}),Y(y,_)});var T=E($);dt(T,17,()=>h,ut,(y,g)=>{var _=we();const b=N(()=>o(g)*3.6+180),O=N(()=>Math.floor(o(a)?n.seconds:r.seconds)===o(g));var z=M(_);z.__click=[xe,v,g];var F=E(z),B=M(F,!0);q(F),q(_),K(()=>{C(_,"transform",`rotate(${o(b)??""})`),H(_,"on",v[o(g)]),H(_,"current",o(O)),C(z,"tabindex",o(g)+1),C(F,"y",o(O)?48:44.5),st(B,o(g))}),bt("keypress",z,I=>{I.key==="Enter"&&(v[o(g)]=!v[o(g)])}),Y(y,_)});var W=E(T),P=E(W),L=E(P),nt=M(L);wt(2),q(L);var X=E(L);dt(X,17,()=>[n,r],ut,(y,g,_)=>{var b=be();const O=N(()=>_===0),z=N(()=>_===0?"digital":"fraction");C(b,"y",`${23+_*5}%`);var F=M(b);q(b),K((B,I,at)=>{C(b,"id",o(z)),H(b,"active",o(a)&&o(z)==="digital"||!o(a)&&o(z)==="fraction"),st(F,`${B??""}${(o(O)?"ʜ":"ʜ͋")??""}${I??""}${(o(O)?"ᴍ":"ᴍ͋")??""}${at??""}`)},[()=>Math.floor(o(g).hours).toString().padStart(o(O)?1:2,"0"),()=>Math.floor(o(g).minutes).toString().padStart(2,"0"),()=>Math.floor(o(g).seconds).toString().padStart(2,"0")]),Y(y,b)});var pt=E(X),zt=M(pt);q(pt),q(w),K(y=>{C(W,"transform",`rotate(${360*(o(l)/100)})`),H(W,"decimal",o(a)),C(P,"transform",`rotate(${360*(o(a)?n.minutes/100:r.minutes/100)})`),H(P,"decimal",o(a)),C(L,"transform",`rotate(${360*(o(a)?n.seconds/100:r.seconds/100)})`),H(L,"decimal",o(a)),le(L,"view-transition-name","seconds"),C(nt,"y2",o(a)?-36:-42),st(zt,`${y??""}%`)},[()=>o(l).toFixed(4)]),Y(i,w),Zt()}ee(["click","keydown"]);function Me(i){Te(i,{})}export{Me as component,Ae as universal};
