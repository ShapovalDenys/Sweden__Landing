(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{22:function(e,t,a){e.exports=a(51)},27:function(e,t,a){},47:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),i=a.n(o),l=(a(27),a(6)),s=a.n(l),c=a(19),u=a(2),m=a(20),p=a.n(m),d=(a(46),a(8)),h=a(57),f=(a(47),function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(""),l=Object(u.a)(i,2),m=l[0],f=l[1],b=Object(n.useState)(""),y=Object(u.a)(b,2),g=y[0],E=y[1],v=Object(n.useState)("+"),_=Object(u.a)(v,2),w=_[0],N=_[1],S=Object(n.useState)(),j=Object(u.a)(S,2),C=j[0],O=j[1],k=Object(n.useState)(!1),T=Object(u.a)(k,2),q=T[0],x=T[1],P=Object(n.useState)(!1),A=Object(u.a)(P,2),D=A[0],R=A[1],I=Object(n.useState)(!1),U=Object(u.a)(I,2),W=U[0],z=U[1],J=Object(n.useState)(!1),H=Object(u.a)(J,2),M=H[0],B=H[1],G=function(){var e=Object(c.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch("https://ipinfo.io/json").then((function(e){return e.json()}))]);case 2:t=e.sent,a=Object(u.a)(t,1),n=a[0],O(JSON.stringify(n));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){o(Object(d.b)(w))}),[w]),Object(n.useEffect)((function(){G()}),[]);return Object(n.useEffect)((function(){m.length>1&&R(!1)}),[m]),Object(n.useEffect)((function(){g.length>1&&z(!1)}),[g]),Object(n.useEffect)((function(){w&&w.length>2&&B(!1)}),[w]),r.a.createElement("form",{className:"form"},r.a.createElement("input",{onChange:function(e){return f(e.target.value)},className:D?"form__input form__input-error":"form__input",type:"name",name:"name",placeholder:"Full name",required:!0}),r.a.createElement("input",{onChange:function(e){return E(e.target.value)},className:W?"form__input form__input-error":"form__input",type:"email",name:"email",placeholder:"Email",required:!0}),r.a.createElement(d.a,{flags:h.a,international:!0,defaultCountry:"SE",value:w,className:M?"form__input form__input-error":"form__input",onChange:N}),q?r.a.createElement("div",{className:"lds-ring loader"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)):r.a.createElement("button",{onClick:function(e){return function(e){if(e.preventDefault(),m.length<1)R(!0);else if(g.length<1)z(!0);else if(w&&w.length<2)B(!0);else{x(!0);var t=JSON.stringify({name:m,mail:g,tel:w,ipInfo:C});console.log(t),p.a.post("/send.php",t).then((function(e){console.log(e),x(!1),f(""),E(""),N("")})).catch((function(e){console.log(e)}))}}(e)},className:a?"form__submit disable":"form__submit",type:"submit"},"Sing Up now"))}),b=(a(50),function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(!1),l=Object(u.a)(i,2),s=l[0],c=l[1],m=Object(n.useState)(!1),p=Object(u.a)(m,2),d=p[0],h=p[1],f=Object(n.useState)(!1),b=Object(u.a)(f,2),y=b[0],g=b[1],E=Object(n.useState)(!1),v=Object(u.a)(E,2),_=v[0],w=v[1],N=Object(n.useState)(!1),S=Object(u.a)(N,2),j=S[0],C=S[1],O=Object(n.useState)(!1),k=Object(u.a)(O,2),T=k[0],q=k[1],x=function(e){switch(o(!0),e.target.id){case"Website Agreement":c(!0);break;case"Risk Disclaimer":h(!0);break;case"Privacy Policy":g(!0);break;case"Spam Disclaimer":w(!0);break;case"Report Abuse":C(!0);break;case"Contact Us":q(!0)}},P=function(){o(!1),c(!1),h(!1),g(!1),w(!1),C(!1),q(!1)};return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{onClick:P,className:a?"footer__page open-page":"footer__page"}),r.a.createElement("div",{className:a?"footer__page-inner open-page open-page-text":"footer__page-inner"},r.a.createElement("button",{onClick:P,type:"button",className:"footer__page-inner-close"},"+"),s&&r.a.createElement("div",{className:"website-agreement"},r.a.createElement("h2",null,"TERMS AND CONDITIONS"),r.a.createElement("h3",null,"1. Agreement"),r.a.createElement("p",null,"1.1  These Terms and Conditions are deemed a binding agreement between the client and the Company"),r.a.createElement("p",null,"1.2  By using or otherwise accessing the Services, or clicking to accept or agree to these Terms and Conditions where that option is made available, client agrees for eligibility for use of the Services and that client has read, understood, and accepted these Terms and Conditions."),r.a.createElement("h3",null,"2. Eligibility"),r.a.createElement("p",null,"2.1  Client is allowed to use the Services if he/she are permitted in accordance with the law of their residence and/or domicile."),r.a.createElement("p",null,"2.2  The Company has no obligation or capability to verify whether client is eligible to use the Service and bears no responsibility for your use of the Service.")),d&&r.a.createElement("div",{className:"risk-disclaimer"},r.a.createElement("h2",null,"Disclaimer"),r.a.createElement("h3",null,"Risk Warning:"),r.a.createElement("p",null,"1.1.  The Company is not responsible for any direct, indirect or consequential losses as a result of using the Service."),r.a.createElement("p",null,"1.2.  New Technology. Client understands that using the Service is not limited to company platform, including other associated and related technologies are new and untested and outside of your or the Company\u2019s control and adverse changes in market forces or the technology, broadly construed, will excuse the nonperformance by the Company under this Agreement including temporary interruption or permanent termination of your access to the Software and Services."),r.a.createElement("p",null,"1.3.  Unfavorable regulatory environment. 4th Industrial Revolution technologies have been the subject of scrutiny by various regulatory bodies around the world. The functioning of the Platform could be impacted by one or more regulatory inquiries or actions, including but not limited to restrictions of use of the Service."),r.a.createElement("p",null,"1.4.  Risk of theft and hacking. Hackers or other groups or organizations may attempt to steal your data and password in any number of ways."),r.a.createElement("p",null,"1.1.  The Company is not responsible for any direct, indirect or consequential losses as a result of using the Service."),r.a.createElement("p",null,"1.2.  New Technology. Client understands that using the Service is not limited to company platform, including other associated and related technologies are new and untested and outside of your or the Company\u2019s control and adverse changes in market forces or the technology, broadly construed, will excuse the nonperformance by the Company under this Agreement including temporary interruption or permanent termination of your access to the Software and Services."),r.a.createElement("p",null,"1.3.  Unfavorable regulatory environment. 4th Industrial Revolution technologies have been the subject of scrutiny by various regulatory bodies around the world. The functioning of the Platform could be impacted by one or more regulatory inquiries or actions, including but not limited to restrictions of use of the Service."),r.a.createElement("p",null,"1.4.  Risk of theft and hacking. Hackers or other groups or organizations may attempt to steal your data and password in any number of ways."),r.a.createElement("p",null,"1.1.  The Company is not responsible for any direct, indirect or consequential losses as a result of using the Service."),r.a.createElement("p",null,"1.2.  New Technology. Client understands that using the Service is not limited to company platform, including other associated and related technologies are new and untested and outside of your or the Company\u2019s control and adverse changes in market forces or the technology, broadly construed, will excuse the nonperformance by the Company under this Agreement including temporary interruption or permanent termination of your access to the Software and Services."),r.a.createElement("p",null,"1.3.  Unfavorable regulatory environment. 4th Industrial Revolution technologies have been the subject of scrutiny by various regulatory bodies around the world. The functioning of the Platform could be impacted by one or more regulatory inquiries or actions, including but not limited to restrictions of use of the Service."),r.a.createElement("p",null,"1.4.  Risk of theft and hacking. Hackers or other groups or organizations may attempt to steal your data and password in any number of ways.")),y&&r.a.createElement("div",{className:"privacy-policy"},r.a.createElement("h2",null,"Privacy Policy"),r.a.createElement("h3",null,"1. Introduction"),r.a.createElement("p",null,"1.1.  This Privacy Policy explains how the Company uses client\u2019s Personal Data (defined below) company provides access and utility through our platform via software, API (application program interface), technologies, products and/or functionalities (\u201cService\u201d). In the course of providing Service, to abide by the laws in the jurisdictions that the company operates, and to improve services, company needs to collect and maintain personal information about the client. As a rule, the company never discloses any personal information about our customers to any non-affiliated third parties, except as described below."),r.a.createElement("p",null,"1.2.  Company may update this Privacy Policy at any time by posting the amended version on this site including the effective date of the amended version."),r.a.createElement("p",null,"1.3.  Company communicates any material changes to this Privacy Policy via email."),r.a.createElement("h3",null,"2. Definitions"),r.a.createElement("p",null,"2.1  Client is allowed to use the Services if he/she are permitted in accordance with the law of their residence and/or domicile."),r.a.createElement("p",null,"2.2  The Company has no obligation or capability to verify whether client is eligible to use the Service and bears no responsibility for your use of the Service.")),_&&r.a.createElement("div",{className:"spam-Disclaimery"},r.a.createElement("h2",null,"Spam Disclaimer"),r.a.createElement("h3",null,"General"),r.a.createElement("p",null,"1. E-mail messages from The Company are exclusively intended for the addressee(s)."),r.a.createElement("p",null,"2. Company's e-mail messages (including any attachments) are company property and may be confidential or otherwise protected from publication."),r.a.createElement("p",null,"3. Any unauthorized use, reproduction or distribution of the message (in whole or in part) is expressly forbidden."),r.a.createElement("p",null,"4. If you have mistakenly received an e-mail from the Company, we would request that you inform the sender of this immediately by e-mail or by another means."),r.a.createElement("p",null,"5. We would also request that you immediately delete this e-mail and any attachment(s) from your system."),r.a.createElement("p",null,"6. The Company shall not be liable for incorrect or incomplete transmission of information by e-mail."),r.a.createElement("p",null,"7. Neither shall it be liable for any delay in receipt, or any damage caused as a result."),r.a.createElement("p",null,"8. The Company does not guarantee that the integrity of e-mail will be preserved during transmission. Nor does it guarantee that the message or files attached to it cannot be infected by digital viruses or other infections, or that the message cannot be intercepted. We draw your attention to the fact that e-mail and attached files may be subject to changes by third parties.")),j&&r.a.createElement("div",{className:"report-abuse"},r.a.createElement("h2",null,"Report Abuse"),r.a.createElement("p",null,"The website securestgains.com is used as a marketing material to promote advertisers by 3rd party promoters, affiliates, affiliate networks and ad networks."),r.a.createElement("p",null,"Anyone promoting this website is prohibited from using spam, spyware, incentivization, denial of service, use of wrong/false marketing material, your identity was used in prelanders prioir for you reaching thise page and any other illegal activity and is obligated to apply all local laws and regulations including GDPR rules where the users are sent from."),r.a.createElement("p",null,"If you have come to securestgains.com as a result of abuse activity (mentioned above or any other which is not) , please complete the form below to report the issue. We carefully examine every abuse report and we take action against the promoters."),r.a.createElement("form",{className:"report-abuse__form"},r.a.createElement("input",{className:"report-abuse__form-input",type:"name",name:"name",placeholder:"Name",required:!0}),r.a.createElement("input",{className:"report-abuse__form-input",type:"surname",name:"surname",placeholder:"Surname",required:!0}),r.a.createElement("input",{className:"report-abuse__form-input",type:"email",name:"email",placeholder:"Email",required:!0}),r.a.createElement("input",{className:"report-abuse__form-input",type:"subject",name:"subject",placeholder:"Subject",required:!0}),r.a.createElement("textarea",{className:"report-abuse__form-input-textarea",type:"text",placeholder:"Message",required:!0}),r.a.createElement("button",{type:"submit",className:"report-abuse__form-input-button"},"SEND"))),T&&r.a.createElement("div",{className:"contact-us"},r.a.createElement("h2",null,"Contact Us"),r.a.createElement("p",null,"If you have any questions or feedback, you are welcome to contact us by using the form below:"),r.a.createElement("form",{className:"report-abuse__form"},r.a.createElement("input",{className:"report-abuse__form-input",type:"name",name:"name",placeholder:"Name",required:!0}),r.a.createElement("input",{className:"report-abuse__form-input",type:"surname",name:"surname",placeholder:"Surname",required:!0}),r.a.createElement("input",{className:"report-abuse__form-input",type:"email",name:"email",placeholder:"Email",required:!0}),r.a.createElement("input",{className:"report-abuse__form-input",type:"subject",name:"subject",placeholder:"Subject",required:!0}),r.a.createElement("textarea",{className:"report-abuse__form-input-textarea",type:"text",placeholder:"Message",required:!0}),r.a.createElement("button",{type:"submit",className:"report-abuse__form-input-button"},"SEND")))),r.a.createElement("button",{onClick:function(e){return x(e)},className:"footer__button",type:"button",id:"Website Agreement"},"Website Agreement"),r.a.createElement("button",{onClick:function(e){return x(e)},className:"footer__button",type:"button",id:"Risk Disclaimer"},"Risk Disclaimer"),r.a.createElement("button",{onClick:function(e){return x(e)},className:"footer__button",type:"button",id:"Privacy Policy"},"Privacy Policy"),r.a.createElement("button",{onClick:function(e){return x(e)},className:"footer__button",type:"button",id:"Spam Disclaimer"},"Spam Disclaimer"),r.a.createElement("button",{onClick:function(e){return x(e)},className:"footer__button",type:"button",id:"Report Abuse"},"Report Abuse"),r.a.createElement("button",{onClick:function(e){return x(e)},className:"footer__button footer__button-last",type:"button",id:"Contact Us"},"Contact Us"))}),y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("section",{className:"main"},r.a.createElement("div",{className:"main__logo"},r.a.createElement("img",{className:"main__logo-img",src:"./img/logo.png",alt:"logo"})),r.a.createElement("div",{className:"main__form"},r.a.createElement("h1",{className:"main__form-article"},"Registrera dig nu och  l\xe5t din tur g\xf6ra resten!"),r.a.createElement("img",{className:"main__form-text",src:"./img/text.png",alt:"text"}),r.a.createElement(f,null))),r.a.createElement(b,null))};i.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.05eecbe9.chunk.js.map