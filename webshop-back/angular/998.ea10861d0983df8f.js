"use strict";(self.webpackChunkwebshop_front=self.webpackChunkwebshop_front||[]).push([[998],{998:(x,g,c)=>{c.r(g),c.d(g,{AdminProductsModule:()=>w});var p=c(808),i=c(182),s=c(567),a=c(932),P=c(870),t=c(96),C=c(384);let _=(()=>{class e{constructor(o){this.authService=o}canActivate(o,n){const d=this.authService.user.roles.includes(o.data.roles);return d||window.alert("You are not authorized"),d}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(C.e))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=c(528);function v(e,r){if(1&e&&(t.TgZ(0,"div",19),t._UZ(1,"img",20),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("src",o.productForm.value.imagePath,t.LSH)("alt",o.productForm.value.productName)}}let h=(()=>{class e{constructor(o,n,d){this.productService=o,this.route=n,this.router=d,this.editMode=!1}ngOnInit(){this.route.params.subscribe(o=>{this.id=+o.id,this.editMode=null!=o.id,this.initForm()})}onSubmit(){this.editMode?(this.updatedProduct=this.productService.getProduct(this.id),this.productService.updateProduct(this.updatedProduct.id,this.productForm.value)):this.productService.addProduct(this.productForm.value),this.productForm.reset(this.productForm.value),this.router.navigate(["/admin/products"])}initForm(){let o="",n="",d="",m=null,f="";if(this.editMode){const u=this.productService.getProduct(this.id);o=u.id,n=u.name,d=u.imagePath,m=u.price,f=u.description}this.productForm=new i.cw({name:new i.NI(n,i.kI.required),imagePath:new i.NI(d,i.kI.required),price:new i.NI(m,[i.kI.required,i.kI.pattern("^[0-9]+(.[0-9]{0,2})?$")]),description:new i.NI(f,i.kI.required)})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l.M),t.Y36(a.gz),t.Y36(a.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin-product-edit"]],decls:33,vars:4,consts:[[1,"login-form",3,"formGroup","ngSubmit"],[1,"form-control"],["for","productName"],["type","text","name","productName","id","productName","formControlName","name"],["class","image-preview",4,"ngIf"],["for","imagePath"],["type","text","name","imagePath","id","imagePath","formControlName","imagePath"],["imagePath",""],["for","category"],["id","category","name","category"],["value","computer-tablet"],["value","beeld-geluid"],["value","telefonie"],["value","huishouden-wonen"],["for","productPrice"],["type","number","name","productPrice","id","productPrice","formControlName","price"],["for","productDesc"],["name","productDesc","id","productDesc","rows","5","formControlName","description"],["type","submit",1,"btn",3,"disabled"],[1,"image-preview"],[1,"img",3,"src","alt"]],template:function(o,n){1&o&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(1,"div",1),t.TgZ(2,"label",2),t._uU(3,"Product name"),t.qZA(),t._UZ(4,"input",3),t.qZA(),t.YNc(5,v,2,2,"div",4),t.TgZ(6,"div",1),t.TgZ(7,"label",5),t._uU(8,"Image Path"),t.qZA(),t._UZ(9,"input",6,7),t.qZA(),t.TgZ(11,"div",1),t.TgZ(12,"label",8),t._uU(13,"Product category"),t.qZA(),t.TgZ(14,"select",9),t.TgZ(15,"option",10),t._uU(16,"Computers & tablets"),t.qZA(),t.TgZ(17,"option",11),t._uU(18,"Beeld & geluid"),t.qZA(),t.TgZ(19,"option",12),t._uU(20,"Telefonie"),t.qZA(),t.TgZ(21,"option",13),t._uU(22,"Huishouden & wonen"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",1),t.TgZ(24,"label",14),t._uU(25,"Price"),t.qZA(),t._UZ(26,"input",15),t.qZA(),t.TgZ(27,"div",1),t.TgZ(28,"label",16),t._uU(29,"Description"),t.qZA(),t._UZ(30,"textarea",17),t.qZA(),t.TgZ(31,"button",18),t._uU(32),t.qZA(),t.qZA()),2&o&&(t.Q6J("formGroup",n.productForm),t.xp6(5),t.Q6J("ngIf",n.productForm.value.imagePath),t.xp6(26),t.Q6J("disabled",!n.productForm.valid),t.xp6(1),t.Oqu(!1===n.editMode?"Add Product":"Update Product"))},directives:[i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,p.O5,i.YN,i.Kr,i.wV],styles:[".login-form[_ngcontent-%COMP%]{width:40%;margin:0 auto;padding:3rem}.form-control[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-bottom:.5rem}.form-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:.25rem 0}.form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{outline:none;padding-left:5px;border-radius:3px;border:1px solid hsl(0,0%,60%)}.form-control[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{outline:none}.form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:#1f7ff4;box-shadow:#959da533 0 8px 24px}.btn[_ngcontent-%COMP%]{border:none;border:1px solid hsl(101,78%,40%);background-color:#49b616;color:#fff;width:7rem;height:100%;padding:.5rem 0;border-radius:3px;cursor:pointer}.btn[type=submit][_ngcontent-%COMP%]:disabled{pointer-events:none;border:hsl(0,0%,80%);background-color:#ccc}.btn[_ngcontent-%COMP%]:hover{border-color:#000;background-color:#52cc19}.image-preview[_ngcontent-%COMP%]{overflow:hidden;width:100%;height:30rem}.img[_ngcontent-%COMP%]{height:100%;width:100%}@media only screen and (min-device-width : 320px) and (max-device-width : 480px){.image-preview[_ngcontent-%COMP%]{height:80%;width:80%}.login-form[_ngcontent-%COMP%]{width:80%;padding:1rem}}"]}),e})(),A=(()=>{class e{constructor(o,n){this.productService=o,this.router=n}ngOnInit(){}onRemoveProduct(){this.productService.deleteProduct(this.productId)}onEdit(){this.router.navigate(["../admin/edit-product",this.productId])}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l.M),t.Y36(a.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin-product-item"]],inputs:{product:"product",productId:"productId"},decls:17,vars:7,consts:[[1,"shop-item"],[1,"item-header"],[1,"item-image"],["alt","",3,"src"],[1,"item-content"],[1,"item-price"],[1,"item-description"],[1,"item-action"],[1,"btn","btn-alert",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"article",0),t.TgZ(1,"header",1),t.TgZ(2,"h3"),t._uU(3),t.qZA(),t.qZA(),t.TgZ(4,"div",2),t._UZ(5,"img",3),t.qZA(),t.TgZ(6,"div",4),t.TgZ(7,"h2",5),t._uU(8),t.ALo(9,"number"),t.qZA(),t.TgZ(10,"p",6),t._uU(11),t.qZA(),t.qZA(),t.TgZ(12,"div",7),t.TgZ(13,"button",8),t.NdJ("click",function(){return n.onEdit()}),t._uU(14," Aanpassen "),t.qZA(),t.TgZ(15,"button",8),t.NdJ("click",function(){return n.onRemoveProduct()}),t._uU(16," Verwijderen "),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(3),t.Oqu(n.product.name),t.xp6(2),t.Q6J("src",n.product.imagePath,t.LSH),t.xp6(3),t.hij("\u20ac",t.xi3(9,4,n.product.price,"1.2-2"),""),t.xp6(3),t.Oqu(n.product.description))},pipes:[p.JJ],styles:[".shop-item[_ngcontent-%COMP%]{height:28rem;width:16rem;padding:0;margin:0;background-color:#fff;border:1px solid hsl(0,0%,80%);border-radius:3px}.shop-item[_ngcontent-%COMP%]:hover{box-shadow:#00000040 0 25px 50px -12px}.item-header[_ngcontent-%COMP%], .item-content[_ngcontent-%COMP%]{padding:1rem 0}.item-header[_ngcontent-%COMP%]{height:4rem}.item-content[_ngcontent-%COMP%]{height:6rem}.item-price[_ngcontent-%COMP%]{padding-bottom:.25rem}.item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{overflow:hidden;width:100%;height:14rem}.item-action[_ngcontent-%COMP%]{text-align:center;display:flex;justify-content:center;grid-gap:1rem;gap:1rem}.btn[_ngcontent-%COMP%]{padding:.75rem .5rem;border-radius:3px;background-color:#fff;border:none;border:1px solid hsl(0,0%,80%)}.btn-alert[_ngcontent-%COMP%]{background-color:#b62416;color:#fff}i[_ngcontent-%COMP%]{padding:0 .25rem}.btn[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#1f7ff4;color:#fff}.btn-alert[_ngcontent-%COMP%]:hover{background-color:#cc2819}"]}),e})();function Z(e,r){if(1&e&&t._UZ(0,"app-admin-product-item",4),2&e){const n=r.index;t.Q6J("product",r.$implicit)("productId",n)}}const b=function(e,r){return{itemsPerPage:5,currentPage:e,totalItems:r}};let M=(()=>{class e{constructor(o){this.productService=o,this.products=[],this.page=1}ngOnInit(){this.productService.getProducts(),this.subscription=this.productService.productsChanged.subscribe(o=>{this.products=o,this.totalLength=o.length})}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l.M))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin-product-list"]],decls:5,vars:7,consts:[[1,"container"],[3,"product","productId",4,"ngFor","ngForOf"],[1,"pagination-container"],["autoHide","true","previousLabel","Vorige","nextLabel","Volgende",1,"my-pagination",3,"pageChange"],[3,"product","productId"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.YNc(1,Z,1,2,"app-admin-product-item",1),t.ALo(2,"paginate"),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"pagination-controls",3),t.NdJ("pageChange",function(m){return n.page=m}),t.qZA(),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,n.products,t.WLB(4,b,n.page,n.totalLength))))},directives:[p.sg,s.LS,A],pipes:[s._s],styles:[".container[_ngcontent-%COMP%]{width:100%;padding:2rem;text-align:center;display:flex;flex-direction:row;flex-wrap:wrap;grid-gap:2rem;gap:2rem;justify-content:center}.pagination-container[_ngcontent-%COMP%]{text-align:center;color:#000;padding:2rem}.my-pagination[_ngcontent-%COMP%]{font-size:larger;color:red}"]}),e})();const O=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin"]],decls:1,vars:0,template:function(o,n){1&o&&t._UZ(0,"router-outlet")},directives:[a.lC],encapsulation:2}),e})(),canActivate:[P.a,_],data:{roles:"ADMIN"},children:[{path:"products",component:M},{path:"add-product",component:h},{path:"edit-product/:id",component:h}]}];let T=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.Bz.forChild(O)],a.Bz]}),e})(),w=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,i.UX,s.JX,T]]}),e})()}}]);