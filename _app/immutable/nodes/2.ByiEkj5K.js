var ue=n=>{throw TypeError(n)};var rs=(n,a,s)=>a.has(n)||ue("Cannot "+s);var ot=(n,a,s)=>(rs(n,a,"read from private field"),s?s.call(n):a.get(n)),lt=(n,a,s)=>a.has(n)?ue("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(n):a.set(n,s);import{n as M,a as y,c as tt}from"../chunks/p9griWmR.js";import{p as Ce}from"../chunks/CZPrcKdF.js";import{b as Me,h as J,J as Ne,j as t,T as is,K as os,L as Kt,M as $t,N as jt,c as ut,ah as ls,O as De,a as kt,P as Le,as as Ut,al as Ae,F as zt,at as cs,X as fs,A as de,au as us,av as ds,ak as vs,aw as ps,d as Pe,ax as hs,ay as ms,ae as _s,I as ys,H as gs,az as ws,aA as bs,E as xs,aB as ks,aC as Oe,aa as Ts,aD as Xt,a7 as ve,a6 as pe,aE as he,a8 as Es,e as Cs,aF as Ms,p as Ie,t as I,o as Fe,aq as It,g as me,v as C,m as x,C as st,ar as Ns,aG as _e,q as P,s as O,f as Q}from"../chunks/BO53PG1l.js";import{d as Ds,a as Ls,e as ye,s as B}from"../chunks/D2IktVsI.js";import{p as xt,a as Ft,i as $}from"../chunks/BoGfmRiQ.js";function ct(n,a){return a}function As(n,a,s,c){for(var u=[],p=a.length,e=0;e<p;e++)ds(a[e].e,u,!0);var f=p>0&&u.length===0&&s!==null;if(f){var h=s.parentNode;vs(h),h.append(s),c.clear(),at(n,a[0].prev,a[p-1].next)}ps(u,()=>{for(var d=0;d<p;d++){var i=a[d];f||(c.delete(i.k),at(n,i.prev,i.next)),Pe(i.e,!f)}})}function ft(n,a,s,c,u,p=null){var e=n,f={items:new Map,first:null};J&&Ne();var h=null,d=!1,i=is(()=>{var l=s();return ys(l)?l:l==null?[]:Ae(l)});Me(()=>{var l=t(i),v=l.length;if(d&&v===0)return;d=v===0;let _=!1;if(J){var k=e.data===os;k!==(v===0)&&(e=Kt(),$t(e),jt(!1),_=!0)}if(J){for(var V=null,E,g=0;g<v;g++){if(ut.nodeType===8&&ut.data===ls){e=ut,_=!0,jt(!1);break}var H=l[g],U=c(H,g);E=Se(ut,f,V,null,H,U,g,u,a,s),f.items.set(U,E),V=E}v>0&&$t(Kt())}J||Ps(l,f,e,u,a,c,s),p!==null&&(v===0?h?De(h):h=kt(()=>p(e)):h!==null&&Le(h,()=>{h=null})),_&&jt(!0),t(i)}),J&&(e=ut)}function Ps(n,a,s,c,u,p,e){var f=n.length,h=a.items,d=a.first,i=d,l,v=null,_=[],k=[],V,E,g,H;for(H=0;H<f;H+=1){if(V=n[H],E=p(V,H),g=h.get(E),g===void 0){var U=i?i.e.nodes_start:s;v=Se(U,a,v,v===null?a.first:v.next,V,E,H,c,u,e),h.set(E,v),_=[],k=[],i=v.next;continue}if(Os(g,V,H),g.e.f&Ut&&De(g.e),g!==i){if(l!==void 0&&l.has(g)){if(_.length<k.length){var nt=k[0],T;v=nt.prev;var Tt=_[0],dt=_[_.length-1];for(T=0;T<_.length;T+=1)ge(_[T],nt,s);for(T=0;T<k.length;T+=1)l.delete(k[T]);at(a,Tt.prev,dt.next),at(a,v,Tt),at(a,dt,nt),i=nt,v=dt,H-=1,_=[],k=[]}else l.delete(g),ge(g,i,s),at(a,g.prev,g.next),at(a,g,v===null?a.first:v.next),at(a,v,g),v=g;continue}for(_=[],k=[];i!==null&&i.k!==E;)i.e.f&Ut||(l??(l=new Set)).add(i),k.push(i),i=i.next;if(i===null)continue;g=i}_.push(g),v=g,i=g.next}if(i!==null||l!==void 0){for(var Et=l===void 0?[]:Ae(l);i!==null;)i.e.f&Ut||Et.push(i),i=i.next;var yt=Et.length;if(yt>0){var Ct=null;As(a,Et,Ct,h)}}zt.first=a.first&&a.first.e,zt.last=v&&v.e}function Os(n,a,s,c){cs(n.v,a),n.i=s}function Se(n,a,s,c,u,p,e,f,h,d){var i=(h&hs)!==0,l=(h&ms)===0,v=i?l?fs(u):de(u):u,_=h&us?de(e):e,k={i:_,v,k:p,a:null,e:null,prev:s,next:c};try{return k.e=kt(()=>f(n,v,_,d),J),k.e.prev=s&&s.e,k.e.next=c&&c.e,s===null?a.first=k:(s.next=k,s.e.next=k.e),c!==null&&(c.prev=k,c.e.prev=k.e),k}finally{}}function ge(n,a,s){for(var c=n.next?n.next.e.nodes_start:s,u=a?a.e.nodes_start:s,p=n.e.nodes_start;p!==c;){var e=_s(p);u.before(p),p=e}}function at(n,a,s){a===null?n.first=s:(a.next=s,a.e.next=s&&s.e),s!==null&&(s.prev=a,s.e.prev=a&&a.e)}function z(n,a,s,c){var u=n.__attributes??(n.__attributes={});J&&(u[a]=n.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&n.nodeName==="LINK")||u[a]!==(u[a]=s)&&(a==="style"&&"__styles"in n&&(n.__styles={}),a==="loading"&&(n[bs]=s),s==null?n.removeAttribute(a):typeof s!="string"&&Is(n).includes(a)?n[a]=s:n.setAttribute(a,s))}var we=new Map;function Is(n){var a=we.get(n.nodeName);if(a)return a;we.set(n.nodeName,a=[]);for(var s,c=n,u=Element.prototype;u!==c;){s=ws(c);for(var p in s)s[p].set&&a.push(p);c=gs(c)}return a}function et(n,a,s){if(s){if(n.classList.contains(a))return;n.classList.add(a)}else{if(!n.classList.contains(a))return;n.classList.remove(a)}}function be(n,a,s,c){var u=n.__styles??(n.__styles={});u[a]!==s&&(u[a]=s,s==null?n.style.removeProperty(a):n.style.setProperty(a,s,""))}function xe(n,a){var s=zt,c=Es,u=Cs;ve(n),pe(n),he(n.ctx);try{a()}finally{ve(s),pe(c),he(u)}}function Fs(n,a,s){var c=n,u;Me(()=>{var p=zt,e=ut,f=!1;p.fn=h=>{var d=a.onerror;let i=a.failed;if(!d&&!i||f)throw h;var l=()=>{Le(u),xe(p,()=>{f=!1,u=kt(()=>s(c)),Xt()})};d==null||d(h,l),u?Pe(u):J&&($t(e),Oe(),$t(Kt())),i&&Ts(()=>{xe(p,()=>{f=!0;try{u=kt(()=>{i(c,()=>h,()=>l)})}catch(v){Ms(v,p,null,p.ctx)}Xt(),f=!1})})},J&&Ne(),u=kt(()=>s(c)),Xt()},xs|ks),J&&(c=ut)}const Ss=!1,$s=!0,ba=Object.freeze(Object.defineProperty({__proto__:null,prerender:$s,ssr:Ss},Symbol.toStringTag,{value:"Module"}));function zs(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var St={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */var Rs=St.exports,ke;function Ws(){return ke||(ke=1,function(n){(function(a,s){n.exports?n.exports=s():a.Toastify=s()})(Rs,function(a){var s=function(e){return new s.lib.init(e)},c="1.12.0";s.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},s.lib=s.prototype={toastify:c,constructor:s,init:function(e){return e||(e={}),this.options={},this.toastElement=null,this.options.text=e.text||s.defaults.text,this.options.node=e.node||s.defaults.node,this.options.duration=e.duration===0?0:e.duration||s.defaults.duration,this.options.selector=e.selector||s.defaults.selector,this.options.callback=e.callback||s.defaults.callback,this.options.destination=e.destination||s.defaults.destination,this.options.newWindow=e.newWindow||s.defaults.newWindow,this.options.close=e.close||s.defaults.close,this.options.gravity=e.gravity==="bottom"?"toastify-bottom":s.defaults.gravity,this.options.positionLeft=e.positionLeft||s.defaults.positionLeft,this.options.position=e.position||s.defaults.position,this.options.backgroundColor=e.backgroundColor||s.defaults.backgroundColor,this.options.avatar=e.avatar||s.defaults.avatar,this.options.className=e.className||s.defaults.className,this.options.stopOnFocus=e.stopOnFocus===void 0?s.defaults.stopOnFocus:e.stopOnFocus,this.options.onClick=e.onClick||s.defaults.onClick,this.options.offset=e.offset||s.defaults.offset,this.options.escapeMarkup=e.escapeMarkup!==void 0?e.escapeMarkup:s.defaults.escapeMarkup,this.options.ariaLive=e.ariaLive||s.defaults.ariaLive,this.options.style=e.style||s.defaults.style,e.backgroundColor&&(this.options.style.background=e.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var e=document.createElement("div");e.className="toastify on "+this.options.className,this.options.position?e.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(e.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):e.className+=" toastify-right",e.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var f in this.options.style)e.style[f]=this.options.style[f];if(this.options.ariaLive&&e.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)e.appendChild(this.options.node);else if(this.options.escapeMarkup?e.innerText=this.options.text:e.innerHTML=this.options.text,this.options.avatar!==""){var h=document.createElement("img");h.src=this.options.avatar,h.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?e.appendChild(h):e.insertAdjacentElement("afterbegin",h)}if(this.options.close===!0){var d=document.createElement("button");d.type="button",d.setAttribute("aria-label","Close"),d.className="toast-close",d.innerHTML="&#10006;",d.addEventListener("click",(function(E){E.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var i=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&i>360?e.insertAdjacentElement("afterbegin",d):e.appendChild(d)}if(this.options.stopOnFocus&&this.options.duration>0){var l=this;e.addEventListener("mouseover",function(E){window.clearTimeout(e.timeOutValue)}),e.addEventListener("mouseleave",function(){e.timeOutValue=window.setTimeout(function(){l.removeElement(e)},l.options.duration)})}if(typeof this.options.destination<"u"&&e.addEventListener("click",(function(E){E.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&e.addEventListener("click",(function(E){E.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var v=u("x",this.options),_=u("y",this.options),k=this.options.position=="left"?v:"-"+v,V=this.options.gravity=="toastify-top"?_:"-"+_;e.style.transform="translate("+k+","+V+")"}return e},showToast:function(){this.toastElement=this.buildToast();var e;if(typeof this.options.selector=="string"?e=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?e=this.options.selector:e=document.body,!e)throw"Root element is not defined";var f=s.defaults.oldestFirst?e.firstChild:e.lastChild;return e.insertBefore(this.toastElement,f),s.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(e){e.className=e.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),e.parentNode&&e.parentNode.removeChild(e),this.options.callback.call(e),s.reposition()}).bind(this),400)}},s.reposition=function(){for(var e={top:15,bottom:15},f={top:15,bottom:15},h={top:15,bottom:15},d=document.getElementsByClassName("toastify"),i,l=0;l<d.length;l++){p(d[l],"toastify-top")===!0?i="toastify-top":i="toastify-bottom";var v=d[l].offsetHeight;i=i.substr(9,i.length-1);var _=15,k=window.innerWidth>0?window.innerWidth:screen.width;k<=360?(d[l].style[i]=h[i]+"px",h[i]+=v+_):p(d[l],"toastify-left")===!0?(d[l].style[i]=e[i]+"px",e[i]+=v+_):(d[l].style[i]=f[i]+"px",f[i]+=v+_)}return this};function u(e,f){return f.offset[e]?isNaN(f.offset[e])?f.offset[e]:f.offset[e]+"px":"0px"}function p(e,f){return!e||typeof f!="string"?!1:!!(e.className&&e.className.trim().split(/\s+/gi).indexOf(f)>-1)}return s.lib.init.prototype=s.lib,s})}(St)),St.exports}var Vs=Ws();const Hs=zs(Vs),Te=[{name:"Capricorn",symbol:"♑",start:new Date("2037/01/20 17:15"),end:new Date("2037/02/16 17:47")},{name:"Aquarius",symbol:"♒",start:new Date("2037/02/16 17:47"),end:new Date("2037/03/11 17:47")},{name:"Pisces",symbol:"♓",start:new Date("2037/03/11 17:47"),end:new Date("2037/04/18 17:45")},{name:"Aries",symbol:"♈",start:new Date("2037/04/18 17:45"),end:new Date("2037/05/13 17:45")},{name:"Taurus",symbol:"♉",start:new Date("2037/05/13 17:45"),end:new Date("2037/06/21 17:45")},{name:"Gemini",symbol:"♊",start:new Date("2037/06/21 17:45"),end:new Date("2037/07/20 17:45")},{name:"Cancer",symbol:"♋",start:new Date("2037/07/20 17:45"),end:new Date("2037/08/10 17:45")},{name:"Leo",symbol:"♌",start:new Date("2037/08/10 17:45"),end:new Date("2037/09/16 17:45")},{name:"Virgo",symbol:"♍",start:new Date("2037/09/16 17:45"),end:new Date("2037/10/30 17:45")},{name:"Libra",symbol:"♎",start:new Date("2037/10/30 17:45"),end:new Date("2037/11/23 17:45")},{name:"Scorpio",symbol:"♏",start:new Date("2037/11/23 17:45"),end:new Date("2037/11/29 17:45")},{name:"Ophiuchus",symbol:"⛎",start:new Date("2037/11/29 17:45"),end:new Date("2037/12/27 17:45")},{name:"Sagittarius",symbol:"♐",start:new Date("2037/12/27 17:45"),end:new Date("2022/01/20 17:45")}];var Bs=M('<path class="arc svelte-1k8lj6w"></path>');function Ee(n,a){Ie(a,!0);const s=Ce.url.searchParams.has("debug");let c=xt(a,"cx",3,0),u=xt(a,"cy",3,0),p=xt(a,"r",3,50),e=xt(a,"Ⲑs",3,0),f=xt(a,"Ⲑe",19,()=>Math.PI);s&&console.debug({cx:c(),cy:u(),r:p(),"Ⲑs":e(),"Ⲑe":f()});const h={start:p()*Math.cos(e()+Math.PI/2),end:p()*Math.cos(f()+Math.PI/2)},d={start:p()*Math.sin(e()+Math.PI/2),end:p()*Math.sin(f()+Math.PI/2)},i=0,l=0,v=1;s&&console.debug({x:h,y:d,rotation:i,largeArcFlag:l,sweepFlag:v});var _=Bs();I(()=>z(_,"d",`
    M ${c()+h.start},${u()+d.start}
    A ${p()??""},${p()??""}
      ${i}
      ${l}
      ${v}
      ${h.end??""},${d.end??""}
  `)),y(n,_),Fe()}var qs=(n,a)=>{st(a,!t(a))},Ys=()=>{},Gs=M('<text class="synodic svelte-r86iph"><title class="svelte-r86iph"> </title> </text>'),js=M('<g class="lunar month svelte-r86iph"><!><!></g>'),Us=M('<line y1="40" y2="45" class="svelte-r86iph"></line>'),Xs=M('<tspan class="roman svelte-r86iph"> </tspan><tspan class="operation svelte-r86iph" dx="-1" dy="-1">⨯</tspan><tspan class="hexadecimal svelte-r86iph" dx="-0.5" dy="1">𝔸</tspan><tspan class="tz svelte-r86iph" dx="-0.5" dy="-0.5"></tspan>',1),Ks=M('<tspan class="roman svelte-r86iph"> </tspan>'),Qs=M('<tspan class="number svelte-r86iph"> </tspan>'),Js=M('<tspan class="number svelte-r86iph"> </tspan>'),Zs=M('<tspan class="unknown svelte-r86iph">¿?</tspan>'),ta=M('<text y="40" transform="rotate(180)" class="svelte-r86iph"><!></text>'),ea=M('<g class="major svelte-r86iph"><!><!></g>'),sa=M('<text y="53" class="day number svelte-r86iph"></text>'),aa=M('<g class="zodiac month svelte-r86iph"><!><text y="55" class="norse svelte-r86iph"><title class="svelte-r86iph"> </title> </text><!></g>'),na=(n,a,s)=>{a[t(s)]=!a[t(s)]},ra=M('<g class="minor svelte-r86iph"><line y1="45" y2="50" role="button" class="svelte-r86iph"></line><text class="svelte-r86iph"> </text></g>'),ia=M('<line class="year arm svelte-r86iph" y1="2" y2="-30"></line>'),oa=M('<line class="hour arm svelte-r86iph" y1="2" y2="-20"></line>'),la=M('<line class="minute arm svelte-r86iph" y1="4" y2="-30"></line>'),ca=M('<g class="second svelte-r86iph"><line class="arm svelte-r86iph" y1="10"></line><line id="counterweight" y1="10" y2="2" class="svelte-r86iph"></line><circle r="2" class="svelte-r86iph"></circle></g>'),fa=M('<text id="babylonian" class="readout svelte-r86iph" x="-38%" y="48%" style="textAnchor: start"> <tspan class="colon svelte-r86iph">:</tspan> <tspan class="colon svelte-r86iph">:</tspan> </text>'),ua=M('<text class="readout svelte-r86iph" y="-45%"> </text>'),da=M('<text id="percent" class="readout svelte-r86iph" x="38%" y="48%"> </text>'),va=M('<svg viewBox="-70 -70 140 140" class="svelte-r86iph"><defs><marker id="arrow" viewBox="-1 0 12 11" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse" stroke="context-stroke" fill="context-fill"><path d="M0,0 l10,5 l-10,5 z"></path></marker></defs><circle id="face" r="48" role="button" class="svelte-r86iph"></circle><!><!><!><!><!><!><!><!><!><!><!></svg>');function pa(n,a){var Nt,Dt,Lt,At,Pt,Ot;Ie(a,!0);const s=Ce.url.searchParams.has("debug");let c=It(0);const u=()=>performance.timeOrigin+performance.now(),p=new Date().getTimezoneOffset()*60*1e3;let e=Ft([]);const f=24*60*60*1e3,h=f*365.25;let d=It(Ft(u())),i=x(()=>(t(d)%f-p)/f*100),l=It("centurion");class v{constructor(){lt(this,Nt,x(()=>t(i)/10));lt(this,Dt,x(()=>t(i)*10%100));lt(this,Lt,x(()=>t(i)*1e3%100))}get hours(){return t(ot(this,Nt))}get minutes(){return t(ot(this,Dt))}get seconds(){return t(ot(this,Lt))}}Nt=new WeakMap,Dt=new WeakMap,Lt=new WeakMap;let _=new v;class k{constructor(){lt(this,At,x(()=>t(i)%100));lt(this,Pt,x(()=>t(i)*100%100));lt(this,Ot,x(()=>t(i)*1e4%100))}get hours(){return t(ot(this,At))}get minutes(){return t(ot(this,Pt))}get seconds(){return t(ot(this,Ot))}}At=new WeakMap,Pt=new WeakMap,Ot=new WeakMap;let V=new k,E=x(()=>new Date(t(d))),g=x(()=>new Date(t(E).getFullYear(),0,1)),H=x(()=>new Date(t(E).getFullYear(),11,31,23,59,59,999));const U=t(H).getTime()-t(g).getTime(),nt=(t(E).getTime()-t(g).getTime())/U;s&&console.debug({yStart:t(g),yEnd:t(H),yLength:U,yPercent:nt});let T=It(!1);me(()=>{let r;function o(){const N=async()=>{t(c)>0&&await new Promise(D=>{setTimeout(D,t(c))}),st(d,Ft(u())),r=requestAnimationFrame(o)};document.startViewTransition?document.startViewTransition(async()=>{await N(),await Ns()}):N()}return o(),()=>{r!=null&&cancelAnimationFrame(r)}});let Tt=30;const dt=Array.from({length:100}).map((r,o)=>o),yt=dt.slice(0,39).slice(0,13),Ct=yt.slice(0,11),$e=Ct.slice(0,10),ze=["0"].concat(Ct.map(r=>String.fromCodePoint(8544+r))),Re=["0","Ⅹ","ⅩⅩ","ⅩⅩⅬ","ⅩⅬ","Ⅼ","ⅬⅩ","ⅬⅩⅩ","ⅩⅩⅭ","ⅩⅭ","Ⅽ"],Qt=[{icon:"🌑",name:"New Moon"},{icon:"🌒",name:"Waxing Crescent"},{icon:"🌓",name:"First Quarter"},{icon:"🌔",name:"Waxing Gibbous"},{icon:"🌕",name:"Full Moon"},{icon:"🌖",name:"Waning Gibbous"},{icon:"🌗",name:"Last Quarter"},{icon:"🌘",name:"Waning Crescent"}];let b=Ft({moons:!1,year:!0,hours:!0,minutes:!0,seconds:!0,tenMarks:!0,minTicks:!0,zodiac:!0,face:!0,percent:!0,decimal:!0,fraction:!0,babylonian:!0});const Rt=29.53059*24*60*60*1e3,Wt=Rt/h;s&&console.debug({day:f,year:h,synodic:Rt,synPercent:Wt});const Jt=(r,o={})=>{Hs({text:r,duration:1e4,close:!0,gravity:"bottom",position:"center",stopOnFocus:!0,style:{background:"linear-gradient(to right, #0004C2, #C25800)",borderRadius:"1rem"},...o}).showToast()};me(()=>{Jt(`’𐌵’ or face click to switch speeds.

’ｐ’ adds a pause.

’d,c,t, & n’ change the face units.`,{gravity:"top"})});const vt=Te.map(({start:r,end:o,symbol:N,name:D})=>({start:(r.getTime()-t(g).getTime())/U-12,end:(o.getTime()-t(g).getTime())/U-12,symbol:N,name:D,length:Math.round((o.getTime()-r.getTime())/f)}));vt.length>0&&(vt.at(-1).end=vt.at(0).start),s&&console.debug({zodiac:Te,zPercents:vt});const Zt=vt.find(({name:r})=>r==="Capricorn"),We=Zt.start&U;s&&console.debug({capPercent:Zt,capOffset:We});const Vt=-t(E).getTimezoneOffset()/60,Ve=Vt>=0?`+${Vt}`:Vt,Ht={epoch:new Date(2024,6,16,17,30),start:0};let Bt=Ht.epoch.getTime(),te=Ht.start;for(;Bt<=t(d);)te=Bt,Bt+=Rt;Ht.start=te;const{PI:rt,cos:He,sin:Be}=Math;var qt=va();Ls(r=>{I(()=>_e.title=`${(t(T)?"Decimal":"Percentage")??""} Clock`)}),ye("keypress",_e,r=>{r.key==="u"?st(T,!t(T)):r.key==="p"?(st(c,(t(c)+200)%1200),Jt(`Pausing ${t(c).toLocaleString()}ms.`)):r.key==="d"?st(l,"decimal"):r.key==="c"?st(l,"centurion"):r.key==="t"?st(l,"roman times"):r.key==="n"?st(l,"roman tens"):r.key==="m"?b.moons=!b.moons:r.key==="f"?b.face=!b.face:r.key==="i"?b.minutes=!b.minutes:r.key==="h"?b.hours=!b.hours:r.key==="b"?b.babylonian=!b.babylonian:r.key==="1"?b.tenMarks=!b.tenMarks:r.key==="y"&&(b.year=!b.year)});var Mt=C(P(qt));Mt.__click=[qs,T],Mt.__keydown=[Ys],z(Mt,"tabindex",-1);var ee=C(Mt);{var qe=r=>{var o=tt(),N=Q(o);ft(N,17,()=>Array.from({length:Tt}),ct,(D,m,w)=>{var L=js();const F=x(()=>58.75),A=x(()=>2*rt*w/(yt.length-1)),S=x(()=>w/yt.length);var R=P(L);const W=x(()=>2*rt*t(A)),Z=x(()=>2*rt*(t(A)+2*rt*Wt));Ee(R,{cx:0,cy:0,get r(){return t(F)},get"Ⲑs"(){return t(W)},get"Ⲑe"(){return t(Z)}});var it=C(R);ft(it,17,()=>Qt,ct,(gt,G,j)=>{var q=Gs();const X=x(()=>Wt/Qt.length),pt=x(()=>(t(F)+t(S)*3.5)*He(t(A)+j*t(X)*2*rt)),Y=x(()=>(t(F)+t(S)*3.5)*Be(t(A)+j*t(X)*2*rt));var K=P(q),wt=P(K,!0);O(K);var Yt=C(K);O(q),I(()=>{z(q,"x",t(pt)),z(q,"y",t(Y)),be(q,"--rotation",`${2*rt*j*t(X)}rad`),B(wt,t(G).name),B(Yt,` ${t(G).icon??""}`)}),y(gt,q)}),O(L),y(D,L)}),y(r,o)};$(ee,r=>{b.moons&&r(qe)})}var se=C(ee);{var Ye=r=>{var o=tt(),N=Q(o);ft(N,17,()=>$e,ct,(D,m)=>{var w=ea(),L=P(w);{var F=R=>{var W=Us();y(R,W)};$(L,R=>{b.minTicks&&R(F)})}var A=C(L);{var S=R=>{var W=ta(),Z=P(W);{var it=G=>{var j=Xs(),q=Q(j),X=P(q,!0);O(q);var pt=C(q,3);pt.textContent=Ve,I(()=>B(X,ze[t(m)])),y(G,j)},gt=G=>{var j=tt(),q=Q(j);{var X=Y=>{var K=Ks(),wt=P(K,!0);O(K),I(()=>B(wt,Re[t(m)])),y(Y,K)},pt=Y=>{var K=tt(),wt=Q(K);{var Yt=ht=>{var mt=Qs(),Gt=P(mt);O(mt),I(()=>B(Gt,`${t(m)*10}%`)),y(ht,mt)},es=ht=>{var mt=tt(),Gt=Q(mt);{var ss=_t=>{var bt=Js(),ns=P(bt,!0);O(bt),I(()=>B(ns,t(m))),y(_t,bt)},as=_t=>{var bt=Zs();y(_t,bt)};$(Gt,_t=>{t(l)==="decimal"?_t(ss):_t(as,!1)},!0)}y(ht,mt)};$(wt,ht=>{t(l)==="centurion"?ht(Yt):ht(es,!1)},!0)}y(Y,K)};$(q,Y=>{t(l)==="roman tens"?Y(X):Y(pt,!1)},!0)}y(G,j)};$(Z,G=>{t(l)==="roman times"?G(it):G(gt,!1)})}O(W),y(R,W)};$(A,R=>{b.tenMarks&&R(S)})}O(w),I(()=>{z(w,"transform",`rotate(${36*t(m)})`),et(w,"decimal",t(T))}),y(D,w)}),y(r,o)};$(se,r=>{b.minutes&&r(Ye)})}var ae=C(se);{var Ge=r=>{var o=tt(),N=Q(o);ft(N,17,()=>vt,ct,(D,m)=>{var w=aa();const L=x(()=>.437),F=x(()=>({start:t(m).start+t(L),end:t(m).end+t(L),width:t(m).start-t(m).end}));var A=P(w);const S=x(()=>2*Math.PI*(t(m).start+t(L))),R=x(()=>2*Math.PI*(t(m).end+t(L)));Ee(A,{cx:0,cy:0,r:51,get"Ⲑs"(){return t(S)},get"Ⲑe"(){return t(R)}});var W=C(A),Z=P(W),it=P(Z,!0);O(Z);var gt=C(Z);O(W);var G=C(W);ft(G,17,()=>Array.from({length:t(m).length}),ct,(j,q,X,pt)=>{var Y=sa();Y.textContent=X,I(()=>z(Y,"transform",`rotate(${2*Math.PI*(t(F).start+X*t(F).width/t(m).length)*(180/Math.PI)})`)),y(j,Y)}),O(w),I(()=>{z(W,"transform",`rotate(${2*Math.PI*t(F).start*(180/Math.PI)})`),B(it,t(m).name),B(gt,` ${t(m).symbol??""}`)}),y(D,w)}),y(r,o)};$(ae,r=>{b.zodiac&&r(Ge)})}var ne=C(ae);{var je=r=>{var o=tt(),N=Q(o);ft(N,17,()=>dt,ct,(D,m)=>{var w=ra();const L=x(()=>t(m)*3.6+180),F=x(()=>Math.floor(t(T)?_.seconds:V.seconds)===t(m));var A=P(w);A.__click=[na,e,m];var S=C(A),R=P(S,!0);O(S),O(w),I(()=>{z(w,"transform",`rotate(${t(L)??""})`),et(w,"on",e[t(m)]),et(w,"current",t(F)),z(A,"tabindex",t(m)+1),z(S,"y",t(F)?48:44.5),B(R,t(m))}),ye("keypress",A,W=>{if(W.key==="Enter")return e[t(m)]=!e[t(m)]}),y(D,w)}),y(r,o)};$(ne,r=>{b.seconds&&r(je)})}var re=C(ne);{var Ue=r=>{var o=ia();z(o,"transform",`rotate(${360*nt})`),I(()=>et(o,"decimal",t(T))),y(r,o)};$(re,r=>{b.year&&r(Ue)})}var ie=C(re);{var Xe=r=>{var o=oa();I(()=>{z(o,"transform",`rotate(${360*(t(i)/100)})`),et(o,"decimal",t(T))}),y(r,o)};$(ie,r=>{b.hours&&r(Xe)})}var oe=C(ie);{var Ke=r=>{var o=la();I(()=>{z(o,"transform",`rotate(${360*(t(T)?_.minutes/100:V.minutes/100)})`),et(o,"decimal",t(T))}),y(r,o)};$(oe,r=>{b.minutes&&r(Ke)})}var le=C(oe);{var Qe=r=>{var o=ca(),N=P(o);Oe(2),O(o),I(()=>{z(o,"transform",`rotate(${360*(t(T)?_.seconds/100:V.seconds/100)})`),et(o,"decimal",t(T)),be(o,"view-transition-name","seconds"),z(N,"y2",t(T)?-36:-42)}),y(r,o)};$(le,r=>{b.seconds&&r(Qe)})}var ce=C(le);{var Je=r=>{var o=tt(),N=Q(o);{const D=x(()=>{const[m,w,L]=t(E).toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!1,hourCycle:"h23"}).split(/:/g);return{hr:m,min:w,sec:L}});Fs(N,{},m=>{var w=fa(),L=P(w,!0),F=C(L,2,!0),A=C(F,2,!0);O(w),I(()=>{B(L,t(D).hr),B(F,t(D).min),B(A,t(D).sec)}),y(m,w)})}y(r,o)};$(ce,r=>{b.babylonian&&r(Je)})}var fe=C(ce);ft(fe,17,()=>[_,V],ct,(r,o,N)=>{var D=tt();const m=x(()=>N===0),w=x(()=>N===0?"decimal":"fraction");var L=Q(D);{var F=A=>{var S=ua(),R=P(S);O(S),I((W,Z,it)=>{z(S,"id",t(w)),z(S,"x",t(m)?"-36%":"38%"),et(S,"active",t(T)&&t(w)==="decimal"||!t(T)&&t(w)==="fraction"),B(R,`${W??""}${(t(m)?"ʜ":"ʜ͋")??""}${Z??""}${(t(m)?"ᴍ":"ᴍ͋")??""}${it??""}`)},[()=>Math.floor(t(o).hours).toString().padStart(t(m)?1:2,"0"),()=>Math.floor(t(o).minutes).toString().padStart(2,"0"),()=>Math.floor(t(o).seconds).toString().padStart(2,"0")]),y(A,S)};$(L,A=>{b[t(w)]&&A(F)})}y(r,D)});var Ze=C(fe);{var ts=r=>{var o=da(),N=P(o);O(o),I(D=>B(N,`${D??""}%`),[()=>t(i).toFixed(3)]),y(r,o)};$(Ze,r=>{b.percent&&r(ts)})}O(qt),y(n,qt),Fe()}Ds(["click","keydown"]);function xa(n){pa(n,{})}export{xa as component,ba as universal};
