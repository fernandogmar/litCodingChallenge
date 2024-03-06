(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,Z=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),rt=new WeakMap;let At=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Z&&t===void 0){const n=e!==void 0&&e.length===1;n&&(t=rt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&rt.set(e,t))}return t}toString(){return this.cssText}};const Ht=s=>new At(typeof s=="string"?s:s+"",void 0,X),yt=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((n,i,o)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[o+1],s[0]);return new At(e,s,X)},Rt=(s,t)=>{if(Z)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const n=document.createElement("style"),i=B.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,s.appendChild(n)}},ot=Z?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return Ht(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:kt,defineProperty:jt,getOwnPropertyDescriptor:It,getOwnPropertyNames:Lt,getOwnPropertySymbols:Dt,getPrototypeOf:Bt}=Object,g=globalThis,ct=g.trustedTypes,Jt=ct?ct.emptyScript:"",K=g.reactiveElementPolyfillSupport,H=(s,t)=>s,J={toAttribute(s,t){switch(t){case Boolean:s=s?Jt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},tt=(s,t)=>!kt(s,t),lt={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:tt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);class O extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=lt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&jt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){const{get:i,set:o}=It(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get(){return i==null?void 0:i.call(this)},set(r){const h=i==null?void 0:i.call(this);o.call(this,r),this.requestUpdate(t,h,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??lt}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;const t=Bt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){const e=this.properties,n=[...Lt(e),...Dt(e)];for(const i of n)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[e,n]of this.elementProperties){const i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)e.unshift(ot(i))}else t!==void 0&&e.push(ot(t));return e}static _$Eu(t,e){const n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Rt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostDisconnected)==null?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EC(t,e){var o;const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const r=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:J).toAttribute(e,n.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){var o;const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=n.getPropertyOptions(i),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((o=r.converter)==null?void 0:o.fromAttribute)!==void 0?r.converter:J;this._$Em=i,this[i]=h.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??tt)(this[t],e))return;this.P(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,n){this._$AL.has(t)||this._$AL.set(t,e),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,r]of i)r.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}O.elementStyles=[],O.shadowRootOptions={mode:"open"},O[H("elementProperties")]=new Map,O[H("finalized")]=new Map,K==null||K({ReactiveElement:O}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,z=R.trustedTypes,ht=z?z.createPolicy("lit-html",{createHTML:s=>s}):void 0,et="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,it="?"+m,zt=`<${it}>`,S=document,k=()=>S.createComment(""),j=s=>s===null||typeof s!="object"&&typeof s!="function",vt=Array.isArray,bt=s=>vt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",F=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,dt=/>/g,A=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ut=/'/g,pt=/"/g,St=/^(?:script|style|textarea|title)$/i,Wt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),w=Wt(1),E=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),$t=new WeakMap,b=S.createTreeWalker(S,129);function Et(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ht!==void 0?ht.createHTML(t):t}const Ct=(s,t)=>{const e=s.length-1,n=[];let i,o=t===2?"<svg>":"",r=T;for(let h=0;h<e;h++){const c=s[h];let a,p,l=-1,u=0;for(;u<c.length&&(r.lastIndex=u,p=r.exec(c),p!==null);)u=r.lastIndex,r===T?p[1]==="!--"?r=at:p[1]!==void 0?r=dt:p[2]!==void 0?(St.test(p[2])&&(i=RegExp("</"+p[2],"g")),r=A):p[3]!==void 0&&(r=A):r===A?p[0]===">"?(r=i??T,l=-1):p[1]===void 0?l=-2:(l=r.lastIndex-p[2].length,a=p[1],r=p[3]===void 0?A:p[3]==='"'?pt:ut):r===pt||r===ut?r=A:r===at||r===dt?r=T:(r=A,i=void 0);const d=r===A&&s[h+1].startsWith("/>")?" ":"";o+=r===T?c+zt:l>=0?(n.push(a),c.slice(0,l)+et+c.slice(l)+m+d):c+m+(l===-2?h:d)}return[Et(s,o+(s[e]||"<?>")+(t===2?"</svg>":"")),n]};class I{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let o=0,r=0;const h=t.length-1,c=this.parts,[a,p]=Ct(t,e);if(this.el=I.createElement(a,n),b.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=b.nextNode())!==null&&c.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(et)){const u=p[r++],d=i.getAttribute(l).split(m),$=/([.?@])?(.*)/.exec(u);c.push({type:1,index:o,name:$[2],strings:d,ctor:$[1]==="."?Ot:$[1]==="?"?wt:$[1]==="@"?Pt:L}),i.removeAttribute(l)}else l.startsWith(m)&&(c.push({type:6,index:o}),i.removeAttribute(l));if(St.test(i.tagName)){const l=i.textContent.split(m),u=l.length-1;if(u>0){i.textContent=z?z.emptyScript:"";for(let d=0;d<u;d++)i.append(l[d],k()),b.nextNode(),c.push({type:2,index:++o});i.append(l[u],k())}}}else if(i.nodeType===8)if(i.data===it)c.push({type:2,index:o});else{let l=-1;for(;(l=i.data.indexOf(m,l+1))!==-1;)c.push({type:7,index:o}),l+=m.length-1}o++}}static createElement(t,e){const n=S.createElement("template");return n.innerHTML=t,n}}function C(s,t,e=s,n){var r,h;if(t===E)return t;let i=n!==void 0?(r=e._$Co)==null?void 0:r[n]:e._$Cl;const o=j(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((h=i==null?void 0:i._$AO)==null||h.call(i,!1),o===void 0?i=void 0:(i=new o(s),i._$AT(s,e,n)),n!==void 0?(e._$Co??(e._$Co=[]))[n]=i:e._$Cl=i),i!==void 0&&(t=C(s,i._$AS(s,t.values),i,n)),t}class xt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,i=((t==null?void 0:t.creationScope)??S).importNode(e,!0);b.currentNode=i;let o=b.nextNode(),r=0,h=0,c=n[0];for(;c!==void 0;){if(r===c.index){let a;c.type===2?a=new N(o,o.nextSibling,this,t):c.type===1?a=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(a=new Ut(o,this,t)),this._$AV.push(a),c=n[++h]}r!==(c==null?void 0:c.index)&&(o=b.nextNode(),r++)}return b.currentNode=S,i}p(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class N{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),j(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):bt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==f&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=I.createElement(Et(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const r=new xt(i,this),h=r.u(this.options);r.p(e),this.T(h),this._$AH=r}}_$AC(t){let e=$t.get(t.strings);return e===void 0&&$t.set(t.strings,e=new I(t)),e}k(t){vt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const o of t)i===e.length?e.push(n=new N(this.S(k()),this.S(k()),this,this.options)):n=e[i],n._$AI(o),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=f}_$AI(t,e=this,n,i){const o=this.strings;let r=!1;if(o===void 0)t=C(this,t,e,0),r=!j(t)||t!==this._$AH&&t!==E,r&&(this._$AH=t);else{const h=t;let c,a;for(t=o[0],c=0;c<o.length-1;c++)a=C(this,h[n+c],e,c),a===E&&(a=this._$AH[c]),r||(r=!j(a)||a!==this._$AH[c]),a===f?t=f:t!==f&&(t+=(a??"")+o[c+1]),this._$AH[c]=a}r&&!i&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ot extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}class wt extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}}class Pt extends L{constructor(t,e,n,i,o){super(t,e,n,i,o),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??f)===E)return;const n=this._$AH,i=t===f&&n!==f||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==f&&(n===f||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ut{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const Vt={P:et,A:m,C:it,M:1,L:Ct,R:xt,D:bt,V:C,I:N,H:L,N:wt,U:Pt,B:Ot,F:Ut},G=R.litHtmlPolyfillSupport;G==null||G(I,N),(R.litHtmlVersions??(R.litHtmlVersions=[])).push("3.1.2");const qt=(s,t,e)=>{const n=(e==null?void 0:e.renderBefore)??t;let i=n._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;n._$litPart$=i=new N(t.insertBefore(k(),o),o,void 0,e??{})}return i._$AI(s),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let P=class extends O{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=qt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}};var gt;P._$litElement$=!0,P.finalized=!0,(gt=globalThis.litElementHydrateSupport)==null||gt.call(globalThis,{LitElement:P});const Y=globalThis.litElementPolyfillSupport;Y==null||Y({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:tt},Ft=(s=Kt,t,e)=>{const{kind:n,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(e.name,s),n==="accessor"){const{name:r}=e;return{set(h){const c=t.get.call(this);t.set.call(this,h),this.requestUpdate(r,c,s)},init(h){return h!==void 0&&this.P(r,void 0,s),h}}}if(n==="setter"){const{name:r}=e;return function(h){const c=this[r];t.call(this,h),this.requestUpdate(r,c,s)}}throw Error("Unsupported decorator location: "+n)};function W(s){return(t,e)=>typeof e=="object"?Ft(s,t,e):((n,i,o)=>{const r=i.hasOwnProperty(o);return i.constructor.createProperty(o,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(i,o):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Tt(s){return W({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Yt=s=>(...t)=>({_$litDirective$:s,values:t});class Qt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Zt}=Vt,ft=()=>document.createComment(""),M=(s,t,e)=>{var o;const n=s._$AA.parentNode,i=t===void 0?s._$AB:t._$AA;if(e===void 0){const r=n.insertBefore(ft(),i),h=n.insertBefore(ft(),i);e=new Zt(r,h,s,s.options)}else{const r=e._$AB.nextSibling,h=e._$AM,c=h!==s;if(c){let a;(o=e._$AQ)==null||o.call(e,s),e._$AM=s,e._$AP!==void 0&&(a=s._$AU)!==h._$AU&&e._$AP(a)}if(r!==i||c){let a=e._$AA;for(;a!==r;){const p=a.nextSibling;n.insertBefore(a,i),a=p}}}return e},y=(s,t,e=s)=>(s._$AI(t,e),s),Xt={},te=(s,t=Xt)=>s._$AH=t,ee=s=>s._$AH,Q=s=>{var n;(n=s._$AP)==null||n.call(s,!1,!0);let t=s._$AA;const e=s._$AB.nextSibling;for(;t!==e;){const i=t.nextSibling;t.remove(),t=i}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=(s,t,e)=>{const n=new Map;for(let i=t;i<=e;i++)n.set(s[i],i);return n},ie=Yt(class extends Qt{constructor(s){if(super(s),s.type!==Gt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,t,e){let n;e===void 0?e=t:t!==void 0&&(n=t);const i=[],o=[];let r=0;for(const h of s)i[r]=n?n(h,r):r,o[r]=e(h,r),r++;return{values:o,keys:i}}render(s,t,e){return this.dt(s,t,e).values}update(s,[t,e,n]){const i=ee(s),{values:o,keys:r}=this.dt(t,e,n);if(!Array.isArray(i))return this.ut=r,o;const h=this.ut??(this.ut=[]),c=[];let a,p,l=0,u=i.length-1,d=0,$=o.length-1;for(;l<=u&&d<=$;)if(i[l]===null)l++;else if(i[u]===null)u--;else if(h[l]===r[d])c[d]=y(i[l],o[d]),l++,d++;else if(h[u]===r[$])c[$]=y(i[u],o[$]),u--,$--;else if(h[l]===r[$])c[$]=y(i[l],o[$]),M(s,c[$+1],i[l]),l++,$--;else if(h[u]===r[d])c[d]=y(i[u],o[d]),M(s,i[l],i[u]),u--,d++;else if(a===void 0&&(a=_t(r,d,$),p=_t(h,l,u)),a.has(h[l]))if(a.has(h[u])){const _=p.get(r[d]),q=_!==void 0?i[_]:null;if(q===null){const nt=M(s,i[l]);y(nt,o[d]),c[d]=nt}else c[d]=y(q,o[d]),M(s,i[l],q),i[_]=null;d++}else Q(i[u]),u--;else Q(i[l]),l++;for(;d<=$;){const _=M(s,c[$+1]);y(_,o[d]),c[d++]=_}for(;l<=u;){const _=i[l++];_!==null&&Q(_)}return this.ut=r,te(s,c),E}});var se=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,V=(s,t,e,n)=>{for(var i=n>1?void 0:n?ne(t,e):t,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&se(t,e,i),i};let U=class extends P{constructor(){super(...arguments),this.name="",this.options=[],this.selectedOptions=[]}render(){return w`
              <ul @change=${this._handleCheckboxChange}>
                ${ie(this.options,s=>s,s=>w`
                      <li>
                        <label>     
                          <input
                            type="checkbox"
                            value=${s}
                            .checked=${this.selectedOptions.includes(s)}
                          />
                          ${s}
                        </label>
                      </li>
                    `)}
              </ul>
        `}_handleCheckboxChange(s){const t=s.target;t.checked?(this.selectedOptions=[...this.selectedOptions,t.value],this._handleSelectedOptionsAdded(t.value)):(this.selectedOptions=this.selectedOptions.filter(e=>e!==t.value),this._handleSelectedOptionsRemoved(t.value)),this._handleSelectedOptionsChange()}_handleSelectedOptionsChange(){if(this.name){const s=new CustomEvent(`${this.name}-selected`,{bubbles:!0,composed:!0,detail:{selectedOptions:this.selectedOptions}});this.dispatchEvent(s)}}_handleSelectedOptionsAdded(s){if(this.name){const t=new CustomEvent(`${this.name}-option-selected`,{bubbles:!0,composed:!0,detail:{option:s}});this.dispatchEvent(t)}}_handleSelectedOptionsRemoved(s){if(this.name){const t=new CustomEvent(`${this.name}-option-unselected`,{bubbles:!0,composed:!0,detail:{option:s}});this.dispatchEvent(t)}}};U.styles=yt`
      ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        padding: 0;
        margin: 0;
        height: 100%;
      }
      
      li {
        flex: none;
        width: fit-content;
        list-style-type: none;
        padding: 4px;
      }

      li * {
        cursor: pointer;
      }
    `;V([W()],U.prototype,"name",2);V([W()],U.prototype,"options",2);V([Tt()],U.prototype,"selectedOptions",2);U=V([Nt("checkbox-group")],U);const v=[{name:"Alabama",circuit:"11th"},{name:"Alaska",circuit:"9th"},{name:"Arizona",circuit:"9th"},{name:"Arkansas",circuit:"8th"},{name:"California",circuit:"9th"},{name:"Colorado",circuit:"10th"},{name:"Connecticut",circuit:"2nd"},{name:"Delaware",circuit:"3rd"},{name:"Florida",circuit:"11th"},{name:"Georgia",circuit:"11th"},{name:"Hawaii",circuit:"9th"},{name:"Idaho",circuit:"9th"},{name:"Illinois",circuit:"7th"},{name:"Indiana",circuit:"7th"},{name:"Iowa",circuit:"8th"},{name:"Kansas",circuit:"10th"},{name:"Kentucky",circuit:"6th"},{name:"Louisiana",circuit:"5th"},{name:"Maine",circuit:"1st"},{name:"Maryland",circuit:"4th"},{name:"Massachusetts",circuit:"1st"},{name:"Michigan",circuit:"6th"},{name:"Minnesota",circuit:"8th"},{name:"Mississippi",circuit:"5th"},{name:"Missouri",circuit:"8th"},{name:"Montana",circuit:"9th"},{name:"Nebraska",circuit:"8th"},{name:"Nevada",circuit:"9th"},{name:"New Hampshire",circuit:"1st"},{name:"New Jersey",circuit:"3rd"},{name:"New Mexico",circuit:"10th"},{name:"New York",circuit:"2nd"},{name:"North Carolina",circuit:"4th"},{name:"North Dakota",circuit:"8th"},{name:"Ohio",circuit:"6th"},{name:"Oklahoma",circuit:"10th"},{name:"Oregon",circuit:"9th"},{name:"Pennsylvania",circuit:"3rd"},{name:"Rhode Island",circuit:"1st"},{name:"South Carolina",circuit:"4th"},{name:"South Dakota",circuit:"8th"},{name:"Tennessee",circuit:"6th"},{name:"Texas",circuit:"5th"},{name:"Utah",circuit:"10th"},{name:"Vermont",circuit:"2nd"},{name:"Virginia",circuit:"4th"},{name:"Washington",circuit:"9th"},{name:"West Virginia",circuit:"4th"},{name:"Wisconsin",circuit:"7th"},{name:"Wyoming",circuit:"10th"}];function re(s){return s.map(t=>[parseInt(t.circuit,10)-1,t.circuit]).reduce((t,[e,n])=>(t[e]=n,t),[])}function oe(s,t){return s.filter(e=>t.includes(e.name)).map(e=>e.circuit)}function Mt(s){return s.map(t=>t.name)}function D(s,t){return Mt(s.filter(e=>t.includes(e.circuit)))}function mt(s,t){return s.filter(e=>!t.includes(e))}function ce(s,t){return[...new Set([...s,...t])]}var le=Object.defineProperty,he=Object.getOwnPropertyDescriptor,st=(s,t,e,n)=>{for(var i=n>1?void 0:n?he(t,e):t,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&le(t,e,i),i};let x=class extends P{constructor(){super(...arguments),this.selectedJurisdictions=[],this.selectedCircuits=[],this._handleJurisdictionsOptionUnselected=s=>{const t=s.detail.option;console.log("_handleJurisdictionsOptionUnselected",t),this.selectedCircuits=mt(this.selectedCircuits,oe(v,[t]))}}static get circuitOptions(){return re(v)}static get jurisdictionOptions(){return Mt(v)}attributeChangedCallback(s,t,e){s==="jurisdictions"&&e!==t&&(this.selectedJurisdictions=JSON.parse(e)),super.attributeChangedCallback(s,t,e)}render(){const s=this.selectedJurisdictions.length?w`
                <p> 
                    Selected jurisdictions: 
                    ${this.selectedJurisdictions.map(t=>w`<span class="tag">${t}</span>`)}
                </p>
            `:w`<p>Select your jurisdiction</p>`;return w`
                <div class="header">
                    ${s}
                </div>
                <div class="body">
                    <div class="jurisdictions">
                        <label>US States</label>
                        <checkbox-group 
                            name="jurisdictions" 
                            .options=${x.jurisdictionOptions} 
                            .selectedOptions=${this.selectedJurisdictions}
                            @jurisdictions-selected=${this._handleJurisdictionsSelected}
                            @jurisdictions-option-unselected=${this._handleJurisdictionsOptionUnselected}
                        ></checkbox-group>
                    </div>
                    <div class="circuits">
                        <label>US Circuits</label>
                        <checkbox-group class="circuits" 
                            name="circuits" 
                            .options=${x.circuitOptions}
                            .selectedOptions=${this.selectedCircuits}
                            @circuits-selected=${this._handleCircuitsSelected}
                            @circuits-option-selected=${this._handleCircuitsOptionSelected}
                            @circuits-option-unselected=${this._handleCircuitsOptionUnselected}
                        ></checkbox-group>
                    </div>
                </div>
        `}_handleCircuitsOptionSelected(s){const t=s.detail.option;console.log("_handleCircuitsOptionSelected",D(v,[t])),this.selectedJurisdictions=ce(this.selectedJurisdictions,D(v,[t])),console.log("this.selectedJurisdictions",this.selectedJurisdictions)}_handleCircuitsOptionUnselected(s){const t=s.detail.option;console.log("_handleCircuitsOptionUnselected",D(v,[t])),this.selectedJurisdictions=mt(this.selectedJurisdictions,D(v,[t]))}_handleCircuitsSelected(s){this.selectedCircuits=s.detail.selectedOptions}_handleJurisdictionsSelected(s){this.selectedJurisdictions=s.detail.selectedOptions}};x.styles=yt`
        :host {
            display: flex;
            flex-direction: column;
            padding: 20px;
            min-height: 500px;
            height: 100vh;
            max-height: 800px;
            min-width: 600px;
        }

        .body {
            flex: 1 1 0;
            min-height: 0;
            display: flex;
            flex-direction: row;
            border: 1px solid #444;
        }

        .circuits {
            min-width: fit-content;
        }

        .header {
            flex: none;
            padding: 8px;
        }

        .jurisdictions {
            flex: 1 0;
            min-width: fit-content;
            border-right: 1px solid #444;
        }

        label {
            display: block;
            background-color: silver;
            color: #444;
            text-align: center;
            padding: 8px;
        }

        .tag ~ .tag::before {
            content: ', '; 
        }
    `;st([W({type:Array,attribute:"jurisdictions",reflect:!0})],x.prototype,"selectedJurisdictions",2);st([Tt()],x.prototype,"selectedCircuits",2);x=st([Nt("checkbox-challenge")],x);
