import './polyfills.server.mjs';
import{a as k,c as w}from"./chunk-ZYOHLNZV.mjs";import{a as M}from"./chunk-F6Z6CSM6.mjs";import{m as x}from"./chunk-EDGUP6NC.mjs";import{$ as f,Oa as a,Pa as g,cb as o,fb as r,gb as n,hb as s,sb as l,ub as u,wb as v}from"./chunk-7NCOCEK3.mjs";import"./chunk-VVCT4QZE.mjs";var d=class{constructor(){this.post_id="",this.title="",this.summary="",this.content="",this.image_path="",this.tags=[]}};var E=(()=>{let e=class e{constructor(p,i){this.postService=p,this.router=i,this.post=new d,this.message="",this.marked={title:"",content:"",tags:"",image:""},this.router.paramMap.subscribe(t=>{let h=t.get("id");h!=null&&this.postService.detail(h).subscribe(c=>{this.post=c,this.marked={title:`# **${this.post.title}**`,content:`# *${this.post.content}*`,tags:`${this.post.tags.join(", ")}`,image:`![Post image](/images/${this.post.image_path})`}},c=>{this.message=c.error.detail})})}};e.\u0275fac=function(i){return new(i||e)(g(M),g(x))},e.\u0275cmp=f({type:e,selectors:[["app-detail"]],standalone:!0,features:[v],decls:13,vars:5,consts:[[1,"container","my-5"],[1,"title"],[3,"data"],[1,"post-img"],[1,"content"],[1,"tags"],[1,""]],template:function(i,t){i&1&&(l(0),r(1,"div",0)(2,"div",1),s(3,"markdown",2),n(),r(4,"div",3),s(5,"markdown",2),n(),r(6,"div",4),s(7,"markdown",2),n(),r(8,"div",5)(9,"div",6)(10,"span"),l(11,"Tags:"),n()(),s(12,"markdown",2),n()()),i&2&&(u("",t.message," "),a(3),o("data",t.marked.title),a(2),o("data",t.marked.image),a(2),o("data",t.marked.content),a(5),o("data",t.marked.tags))},dependencies:[w,k],styles:[".container[_ngcontent-%COMP%]{max-width:972px;margin:0 auto;background-color:#fff;box-shadow:0 2px 4px #0000001a;padding:20px}.title[_ngcontent-%COMP%]{text-align:center;margin-bottom:10px}.post-img[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.post-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.content[_ngcontent-%COMP%]{line-height:1.6;margin-bottom:20px}.tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#f2f2f2;padding:4px 8px;margin-right:8px;margin-bottom:8px;border-radius:4px}"]});let m=e;return m})();export{E as DetailComponent};