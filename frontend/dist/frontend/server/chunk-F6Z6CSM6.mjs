import './polyfills.server.mjs';
import{a as o,b as s}from"./chunk-EDGUP6NC.mjs";import{Q as a,V as n}from"./chunk-7NCOCEK3.mjs";var f=(()=>{let t=class t{constructor(i){this.client=i,this.path="api/posts/"}detail(i){return this.client.get(this.path+i)}getPosts(i){let r=new o;return i?.forEach(p=>{r=r.append("tags",p)}),this.client.get(this.path,{params:r})}};t.\u0275fac=function(r){return new(r||t)(n(s))},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{f as a};
