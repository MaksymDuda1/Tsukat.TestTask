import{b as j}from"./chunk-GI2GR3VV.js";import{c as x,d as I,e as S,f as E,h as N,j as T,l as O,m as k}from"./chunk-ASXN3TPI.js";import{Aa as A,Rb as D,S as f,Sa as R,Ta as w,U as g,Ua as F,Wa as b,Xa as M,_ as y,da as l,ga as v,ha as C,hb as d,ib as p,jb as c,ub as P,yb as m}from"./chunk-YDWLH77J.js";var h=[{path:"",loadComponent:()=>import("./chunk-U6RUG6RP.js").then(n=>n.HomeComponent)},{path:"detail/:id",loadComponent:()=>import("./chunk-UL4XDN3J.js").then(n=>n.DetailComponent)}];var L="@",W=(()=>{let e=class e{constructor(r,o,i,s,a){this.doc=r,this.delegate=o,this.zone=i,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=y(w,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-HR6QI6VZ.js")).catch(o=>{throw new f(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:i})=>{this._engine=o(this.animationType,this.doc,this.scheduler);let s=new i(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(r,o){let i=this.delegate.createRenderer(r,o);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new u(i);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let U=a.createRenderer(r,o);s.use(U)}).catch(a=>{s.use(i)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){R()},e.\u0275prov=g({token:e,factory:e.\u0275fac});let n=e;return n})(),u=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,o){this.delegate.insertBefore(e,t,r,o)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,o){this.delegate.setAttribute(e,t,r,o)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,o){this.delegate.setStyle(e,t,r,o)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(L)}};function H(n="animations"){return b("NgAsyncAnimations"),v([{provide:F,useFactory:(e,t,r)=>new W(e,t,r,n),deps:[D,S,M]},{provide:A,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var V={providers:[O(h),N(),x(I()),H(),j(),C(k.forRoot(h))]};var _=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l({type:e,selectors:[["app-top-menu"]],standalone:!0,features:[m],decls:4,vars:0,consts:[[1,"row","justify-content-center","m-0"],[1,"col-12"],[1,"text-center","my-4"]],template:function(o,i){o&1&&(d(0,"div",0)(1,"div",1)(2,"h2",2),P(3,"Posts"),p()()())}});let n=e;return n})();var z=(()=>{let e=class e{constructor(){this.title="frontend"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l({type:e,selectors:[["app-root"]],standalone:!0,features:[m],decls:3,vars:0,consts:[[1,"content"]],template:function(o,i){o&1&&(c(0,"app-top-menu"),d(1,"div",0),c(2,"router-outlet"),p())},dependencies:[T,_]});let n=e;return n})();E(z,V).catch(n=>console.error(n));