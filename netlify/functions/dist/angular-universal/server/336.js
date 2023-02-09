"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=336,exports.ids=[336],exports.modules={42336:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ContactUsComponent:()=>ContactUsComponent});var common=__webpack_require__(69808),fesm2015_forms=__webpack_require__(93075),ngx_translate_core=__webpack_require__(51062),http=__webpack_require__(40520),environment=__webpack_require__(92340),url=__webpack_require__(66201),core=__webpack_require__(5e3);const AUTH_API=environment.N.apiUrl,httpOptions={headers:new http.WM({"Content-Type":"application/json"})};class PublicService{constructor(http2){this.http=http2}sendContact(_contact){return this.http.post(PublicService.sendContactPath,{_contact},httpOptions)}}__name(PublicService,"PublicService"),PublicService.sendContactPath=AUTH_API+url.H.sendContact,PublicService.\u0275fac=__name(function(t){return new(t||PublicService)(core.LFG(http.eN))},"PublicService_Factory"),PublicService.\u0275prov=core.Yz7({token:PublicService,factory:PublicService.\u0275fac,providedIn:null});var router=__webpack_require__(74202),toaster_service=__webpack_require__(4611),loader_service=__webpack_require__(57888);function ContactUsComponent_div_15_Template(rf,ctx){1&rf&&(core.TgZ(0,"div",8),core._uU(1),core.ALo(2,"translate"),core.qZA()),2&rf&&(core.xp6(1),core.hij(" ",core.lcZ(2,1,"PLEASE_ENTER_NAME_HERE")," "))}function ContactUsComponent_div_21_Template(rf,ctx){1&rf&&(core.TgZ(0,"div",8),core._uU(1),core.ALo(2,"translate"),core.qZA()),2&rf&&(core.xp6(1),core.hij(" ",core.lcZ(2,1,"PLEASE_ENTER_EMAIL_HERE")," "))}function ContactUsComponent_div_27_Template(rf,ctx){1&rf&&(core.TgZ(0,"div",8),core._uU(1),core.ALo(2,"translate"),core.qZA()),2&rf&&(core.xp6(1),core.hij(" ",core.lcZ(2,1,"PLEASE_ENTER_CONTACT_HERE")," "))}function ContactUsComponent_div_33_Template(rf,ctx){1&rf&&(core.TgZ(0,"div",8),core._uU(1),core.ALo(2,"translate"),core.qZA()),2&rf&&(core.xp6(1),core.hij(" ",core.lcZ(2,1,"PLEASE_ENTER_MESSAGE_HERE")," "))}__name(ContactUsComponent_div_15_Template,"ContactUsComponent_div_15_Template"),__name(ContactUsComponent_div_21_Template,"ContactUsComponent_div_21_Template"),__name(ContactUsComponent_div_27_Template,"ContactUsComponent_div_27_Template"),__name(ContactUsComponent_div_33_Template,"ContactUsComponent_div_33_Template");class ContactUsComponent{constructor(fb,router2,contactService,toaster,loadingService){this.fb=fb,this.router=router2,this.contactService=contactService,this.toaster=toaster,this.loadingService=loadingService,this.contactForm=this.fb.group({name:new fesm2015_forms.NI("",fesm2015_forms.kI.required),email:new fesm2015_forms.NI("",[fesm2015_forms.kI.required,fesm2015_forms.kI.email]),contact:new fesm2015_forms.NI("",fesm2015_forms.kI.required),message:new fesm2015_forms.NI("",fesm2015_forms.kI.required)})}onSubmit(){this.loadingService.setLoading(!0);const req={name:this.contactForm.value.name,email:this.contactForm.value.email,contact:this.contactForm.value.contact,message:this.contactForm.value.message};if(!this.contactForm.valid)return this.loadingService.setLoading(!1),this.contactForm.markAllAsTouched();this.contactService.sendContact(req).subscribe({next:()=>{this.loadingService.setLoading(!1),this.toaster.show("success","Hurray!","Contact sent successfully."),this.router.navigateByUrl("/home")},error:()=>{this.loadingService.setLoading(!1),this.toaster.show("error","Error!","Sorry! Contact not sent.")}})}}__name(ContactUsComponent,"ContactUsComponent"),ContactUsComponent.\u0275fac=__name(function(t){return new(t||ContactUsComponent)(core.Y36(fesm2015_forms.qu),core.Y36(router.F0),core.Y36(PublicService),core.Y36(toaster_service.M),core.Y36(loader_service.D))},"ContactUsComponent_Factory"),ContactUsComponent.\u0275cmp=core.Xpm({type:ContactUsComponent,selectors:[["app-contact-us"]],standalone:!0,features:[core._Bn([PublicService]),core.jDz],decls:38,vars:27,consts:[[1,"contact-form"],[3,"formGroup","ngSubmit"],["formControlName","name","type","text","required",""],["class","error-text",4,"ngIf"],["type","text","formControlName","email","required",""],["type","text","formControlName","contact","required",""],["formControlName","message","row","4","required",""],[3,"disabled"],[1,"error-text"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"div")(1,"div")(2,"h1"),core._uU(3),core.ALo(4,"translate"),core.qZA(),core.TgZ(5,"h4"),core._uU(6),core.ALo(7,"translate"),core.qZA(),core.TgZ(8,"div",0)(9,"form",1),core.NdJ("ngSubmit",__name(function(){return ctx.onSubmit()},"ContactUsComponent_Template_form_ngSubmit_9_listener")),core.TgZ(10,"div")(11,"label"),core._uU(12),core.ALo(13,"translate"),core.qZA(),core._UZ(14,"input",2),core.YNc(15,ContactUsComponent_div_15_Template,3,3,"div",3),core.qZA(),core.TgZ(16,"div")(17,"label"),core._uU(18),core.ALo(19,"translate"),core.qZA(),core._UZ(20,"input",4),core.YNc(21,ContactUsComponent_div_21_Template,3,3,"div",3),core.qZA(),core.TgZ(22,"div")(23,"label"),core._uU(24),core.ALo(25,"translate"),core.qZA(),core._UZ(26,"input",5),core.YNc(27,ContactUsComponent_div_27_Template,3,3,"div",3),core.qZA(),core.TgZ(28,"div")(29,"label"),core._uU(30),core.ALo(31,"translate"),core.qZA(),core._UZ(32,"textarea",6),core.YNc(33,ContactUsComponent_div_33_Template,3,3,"div",3),core.qZA(),core.TgZ(34,"div")(35,"button",7),core._uU(36),core.ALo(37,"translate"),core.qZA()()()()()()),2&rf&&(core.xp6(3),core.Oqu(core.lcZ(4,13,"CONTACT_US")),core.xp6(3),core.Oqu(core.lcZ(7,15,"WE_LOVE_TO_HEAR_FROM_YOU")),core.xp6(3),core.Q6J("formGroup",ctx.contactForm),core.xp6(3),core.Oqu(core.lcZ(13,17,"NAME")),core.xp6(3),core.Q6J("ngIf",!(null!=ctx.contactForm.controls.name&&ctx.contactForm.controls.name.valid)&&((null==ctx.contactForm.controls.name?null:ctx.contactForm.controls.name.dirty)||(null==ctx.contactForm.controls.name?null:ctx.contactForm.controls.name.touched))),core.xp6(3),core.Oqu(core.lcZ(19,19,"EMAIL")),core.xp6(3),core.Q6J("ngIf",!(null!=ctx.contactForm.controls.email&&ctx.contactForm.controls.email.valid)&&((null==ctx.contactForm.controls.email?null:ctx.contactForm.controls.email.dirty)||(null==ctx.contactForm.controls.email?null:ctx.contactForm.controls.email.touched))),core.xp6(3),core.Oqu(core.lcZ(25,21,"PHONE_NUMBER")),core.xp6(3),core.Q6J("ngIf",!(null!=ctx.contactForm.controls.contact&&ctx.contactForm.controls.contact.valid)&&((null==ctx.contactForm.controls.contact?null:ctx.contactForm.controls.contact.dirty)||(null==ctx.contactForm.controls.contact?null:ctx.contactForm.controls.contact.touched))),core.xp6(3),core.Oqu(core.lcZ(31,23,"MESSAGE")),core.xp6(3),core.Q6J("ngIf",!(null!=ctx.contactForm.controls.message&&ctx.contactForm.controls.message.valid)&&((null==ctx.contactForm.controls.message?null:ctx.contactForm.controls.message.dirty)||(null==ctx.contactForm.controls.message?null:ctx.contactForm.controls.message.touched))),core.xp6(2),core.Q6J("disabled",!ctx.contactForm.valid),core.xp6(1),core.Oqu(core.lcZ(37,25,"SEND_MESSAGE")))},"ContactUsComponent_Template"),dependencies:[common.ez,common.O5,fesm2015_forms.UX,fesm2015_forms._Y,fesm2015_forms.Fj,fesm2015_forms.JJ,fesm2015_forms.JL,fesm2015_forms.Q7,fesm2015_forms.sg,fesm2015_forms.u,fesm2015_forms.u5,ngx_translate_core.aw,ngx_translate_core.X$],styles:["[_nghost-%COMP%] > div[_ngcontent-%COMP%]{height:calc(100vh - 113px);max-width:calc(100% - 200px);margin-left:auto;overflow-y:auto;display:flex;justify-content:center;align-items:center}@media screen and (max-width: 767px){[_nghost-%COMP%] > div[_ngcontent-%COMP%]{max-width:100%;height:calc(100vh - 182px)}}[_nghost-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{max-width:800px;width:100%;margin:0 auto;padding:15px;max-height:100%}@media screen and (max-width: 991px){[_nghost-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{overflow-y:auto}}[_nghost-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Poppins,sans-serif,arial;font-size:32px;font-weight:600;text-align:center;margin:0 0 10px}[_nghost-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Poppins,sans-serif,arial;font-size:16px;font-weight:600;text-align:center;margin:0}[_nghost-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%]{color:#c1292e;padding-top:4px;font-size:14px}[_nghost-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]{margin-top:30px;padding:30px;background:#000;border-radius:6px}[_nghost-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{margin-top:15px}[_nghost-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], [_nghost-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px;border:0;width:100%;font-size:1rem;background-color:#fff;border-radius:4px;resize:none;outline:none}[_nghost-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:5px;display:inline-block;color:#fff}[_nghost-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#1266f1;color:#fff;font-family:Raleway,sans-serif;font-weight:600;font-size:16px;letter-spacing:1.3px;display:inline-block;padding:16px 40px;text-decoration:none;text-transform:uppercase;transition:all .3s ease-in-out;border-radius:5px}[_nghost-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#39c0ed;color:#fff}"]})}};