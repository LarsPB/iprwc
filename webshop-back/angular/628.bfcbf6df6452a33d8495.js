(self.webpackChunkwebshop_front=self.webpackChunkwebshop_front||[]).push([[628],{628:(t,e,n)=>{"use strict";n.r(e),n.d(e,{AdminProductsModule:()=>Z});var o=n(583),r=n(665),i=n(533),c=n(855),d=n(870),a=n(639),u=n(384);let p=(()=>{class t{constructor(t){this.authService=t}canActivate(t,e){const n=this.authService.user.roles.includes(t.data.roles);return n||window.alert("You are not authorized"),n}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(u.e))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var s=n(528);function g(t,e){if(1&t&&(a.TgZ(0,"div",19),a._UZ(1,"img",20),a.qZA()),2&t){const t=a.oxw();a.xp6(1),a.Q6J("src",t.productForm.value.imagePath,a.LSH)("alt",t.productForm.value.productName)}}let m=(()=>{class t{constructor(t,e,n){this.productService=t,this.route=e,this.router=n,this.editMode=!1}ngOnInit(){this.route.params.subscribe(t=>{this.id=+t.id,this.editMode=null!=t.id,this.initForm()})}onSubmit(){this.editMode?(this.updatedProduct=this.productService.getProduct(this.id),console.log("Wat is de updatedProductId? ",this.updatedProduct.id),this.productService.updateProduct(this.updatedProduct.id,this.productForm.value)):this.productService.addProduct(this.productForm.value),this.productForm.reset(this.productForm.value),this.router.navigate(["/admin/products"])}initForm(){let t="",e="",n="",o=null,i="";if(this.editMode){const r=this.productService.getProduct(this.id);t=r.id,e=r.name,n=r.imagePath,o=r.price,i=r.description}this.productForm=new r.cw({name:new r.NI(e,r.kI.required),imagePath:new r.NI(n,r.kI.required),price:new r.NI(o,[r.kI.required,r.kI.pattern("^[0-9]+(.[0-9]{0,2})?$")]),description:new r.NI(i,r.kI.required)}),console.log(this.productForm.controls.name.value)}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(s.M),a.Y36(c.gz),a.Y36(c.F0))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-admin-product-edit"]],decls:33,vars:4,consts:[[1,"login-form",3,"formGroup","ngSubmit"],[1,"form-control"],["for","productName"],["type","text","name","productName","id","productName","formControlName","name"],["class","image-preview",4,"ngIf"],["for","imagePath"],["type","text","name","imagePath","id","imagePath","formControlName","imagePath"],["imagePath",""],["for","category"],["id","category","name","category"],["value","computer-tablet"],["value","beeld-geluid"],["value","telefonie"],["value","huishouden-wonen"],["for","productPrice"],["type","number","name","productPrice","id","productPrice","formControlName","price"],["for","productDesc"],["name","productDesc","id","productDesc","rows","5","formControlName","description"],["type","submit",1,"btn",3,"disabled"],[1,"image-preview"],[1,"img",3,"src","alt"]],template:function(t,e){1&t&&(a.TgZ(0,"form",0),a.NdJ("ngSubmit",function(){return e.onSubmit()}),a.TgZ(1,"div",1),a.TgZ(2,"label",2),a._uU(3,"Product name"),a.qZA(),a._UZ(4,"input",3),a.qZA(),a.YNc(5,g,2,2,"div",4),a.TgZ(6,"div",1),a.TgZ(7,"label",5),a._uU(8,"Image Path"),a.qZA(),a._UZ(9,"input",6,7),a.qZA(),a.TgZ(11,"div",1),a.TgZ(12,"label",8),a._uU(13,"Product category"),a.qZA(),a.TgZ(14,"select",9),a.TgZ(15,"option",10),a._uU(16,"Computers & tablets"),a.qZA(),a.TgZ(17,"option",11),a._uU(18,"Beeld & geluid"),a.qZA(),a.TgZ(19,"option",12),a._uU(20,"Telefonie"),a.qZA(),a.TgZ(21,"option",13),a._uU(22,"Huishouden & wonen"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(23,"div",1),a.TgZ(24,"label",14),a._uU(25,"Price"),a.qZA(),a._UZ(26,"input",15),a.qZA(),a.TgZ(27,"div",1),a.TgZ(28,"label",16),a._uU(29,"Description"),a.qZA(),a._UZ(30,"textarea",17),a.qZA(),a.TgZ(31,"button",18),a._uU(32),a.qZA(),a.qZA()),2&t&&(a.Q6J("formGroup",e.productForm),a.xp6(5),a.Q6J("ngIf",e.productForm.value.imagePath),a.xp6(26),a.Q6J("disabled",!e.productForm.valid),a.xp6(1),a.Oqu(!1===e.editMode?"Add Product":"Update Product"))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,o.O5,r.YN,r.Kr,r.wV],styles:[".login-form[_ngcontent-%COMP%]{width:40%;margin:0 auto;padding:3rem}.form-control[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-bottom:.5rem}.form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:.25rem 0}.form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{outline:none;padding-left:5px;border-radius:3px;border:1px solid #999}.form-control[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{outline:none}.form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:#1f7ff4;box-shadow:0 8px 24px #959da533}.btn[_ngcontent-%COMP%]{border:1px solid #49b616;background-color:#49b616;color:#fff;width:7rem;height:100%;padding:.5rem 0;border-radius:3px;cursor:pointer}.btn[type=submit][_ngcontent-%COMP%]:disabled{pointer-events:none;border:#ccc;background-color:#ccc}.btn[_ngcontent-%COMP%]:hover{border-color:#000;background-color:#52cc19}.image-preview[_ngcontent-%COMP%]{overflow:hidden;width:100%;height:30rem}.img[_ngcontent-%COMP%]{height:100%;width:100%}@media only screen and (min-device-width : 320px) and (max-device-width : 480px){.image-preview[_ngcontent-%COMP%]{height:80%;width:80%}.login-form[_ngcontent-%COMP%]{width:80%;padding:1rem}}"]}),t})(),l=(()=>{class t{constructor(t,e){this.productService=t,this.router=e}ngOnInit(){}onRemoveProduct(){this.productService.deleteProduct(this.productId)}onEdit(){this.router.navigate(["../admin/edit-product",this.productId])}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(s.M),a.Y36(c.F0))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-admin-product-item"]],inputs:{product:"product",productId:"productId"},decls:17,vars:7,consts:[[1,"shop-item"],[1,"item-header"],[1,"item-image"],["alt","",3,"src"],[1,"item-content"],[1,"item-price"],[1,"item-description"],[1,"item-action"],[1,"btn","btn-alert",3,"click"]],template:function(t,e){1&t&&(a.TgZ(0,"article",0),a.TgZ(1,"header",1),a.TgZ(2,"h3"),a._uU(3),a.qZA(),a.qZA(),a.TgZ(4,"div",2),a._UZ(5,"img",3),a.qZA(),a.TgZ(6,"div",4),a.TgZ(7,"h2",5),a._uU(8),a.ALo(9,"number"),a.qZA(),a.TgZ(10,"p",6),a._uU(11),a.qZA(),a.qZA(),a.TgZ(12,"div",7),a.TgZ(13,"button",8),a.NdJ("click",function(){return e.onEdit()}),a._uU(14," Aanpassen "),a.qZA(),a.TgZ(15,"button",8),a.NdJ("click",function(){return e.onRemoveProduct()}),a._uU(16," Verwijderen "),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(3),a.Oqu(e.product.name),a.xp6(2),a.Q6J("src",e.product.imagePath,a.LSH),a.xp6(3),a.hij("\u20ac",a.xi3(9,4,e.product.price,"1.2-2"),""),a.xp6(3),a.Oqu(e.product.description))},pipes:[o.JJ],styles:[".shop-item[_ngcontent-%COMP%]{height:28rem;width:16rem;padding:0;margin:0;background-color:#fff;border:1px solid #ccc;border-radius:3px}.shop-item[_ngcontent-%COMP%]:hover{box-shadow:0 25px 50px -12px #00000040}.item-content[_ngcontent-%COMP%], .item-header[_ngcontent-%COMP%]{padding:1rem 0}.item-header[_ngcontent-%COMP%]{height:4rem}.item-content[_ngcontent-%COMP%]{height:6rem}.item-price[_ngcontent-%COMP%]{padding-bottom:.25rem}.item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{overflow:hidden;width:100%;height:14rem}.item-action[_ngcontent-%COMP%]{text-align:center;display:flex;justify-content:center;grid-gap:1rem;gap:1rem}.btn[_ngcontent-%COMP%]{padding:.75rem .5rem;border-radius:3px;background-color:#fff;border:1px solid #ccc}.btn-alert[_ngcontent-%COMP%]{background-color:#b62416;color:#fff}i[_ngcontent-%COMP%]{padding:0 .25rem}.btn[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#1f7ff4;color:#fff}.btn-alert[_ngcontent-%COMP%]:hover{background-color:#cc2819}"]}),t})();function h(t,e){if(1&t&&a._UZ(0,"app-admin-product-item",4),2&t){const t=e.index;a.Q6J("product",e.$implicit)("productId",t)}}const f=function(t,e){return{itemsPerPage:5,currentPage:t,totalItems:e}};let P=(()=>{class t{constructor(t){this.productService=t,this.products=[],this.page=1}ngOnInit(){this.productService.getProducts(),this.subscription=this.productService.productsChanged.subscribe(t=>{this.products=t,this.totalLength=t.length,console.log(this.totalLength)})}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(s.M))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-admin-product-list"]],decls:5,vars:7,consts:[[1,"container"],[3,"product","productId",4,"ngFor","ngForOf"],[1,"pagination-container"],["autoHide","true","previousLabel","Vorige","nextLabel","Volgende",1,"my-pagination",3,"pageChange"],[3,"product","productId"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.YNc(1,h,1,2,"app-admin-product-item",1),a.ALo(2,"paginate"),a.qZA(),a.TgZ(3,"div",2),a.TgZ(4,"pagination-controls",3),a.NdJ("pageChange",function(t){return e.page=t}),a.qZA(),a.qZA()),2&t&&(a.xp6(1),a.Q6J("ngForOf",a.xi3(2,1,e.products,a.WLB(4,f,e.page,e.totalLength))))},directives:[o.sg,i.LS,l],pipes:[i._s],styles:[".container[_ngcontent-%COMP%]{width:100%;padding:2rem;text-align:center;display:flex;flex-direction:row;flex-wrap:wrap;grid-gap:2rem;gap:2rem;justify-content:center}.pagination-container[_ngcontent-%COMP%]{text-align:center;color:#000;padding:2rem}.my-pagination[_ngcontent-%COMP%]{font-size:larger;color:red}"]}),t})();const b=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-admin"]],decls:1,vars:0,template:function(t,e){1&t&&a._UZ(0,"router-outlet")},directives:[c.lC],encapsulation:2}),t})(),canActivate:[d.a,p],data:{roles:"ADMIN"},children:[{path:"products",component:P},{path:"add-product",component:m},{path:"edit-product/:id",component:m}]}];let _=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[c.Bz.forChild(b)],c.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[o.ez,r.UX,i.JX,_]]}),t})()}}]);