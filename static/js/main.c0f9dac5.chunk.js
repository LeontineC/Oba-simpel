(this.webpackJsonpoba_simpel=this.webpackJsonpoba_simpel||[]).push([[0],{103:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var s,a=n(2),c=n.n(a),i=n(21),l=n.n(i),o=n(4),r=n(1),j=c.a.createContext({}),b=function(e){var t=Object(a.useState)(16),n=Object(o.a)(t,2),s=n[0],c=n[1];return Object(r.jsx)(j.Provider,{value:[s,c],children:e.children})},d=n(66),u=n.n(d),h=n(38),m=n.n(h),O=n(50),g=n.n(O),x=n(67),p=n.n(x),k=n(68),v=n.n(k),f=n(29),w=n(22),N=n(14),y=function(){var e=Object(a.useContext)(j),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(!1),i=Object(o.a)(c,2),l=i[0],b=i[1],d=function(){return b(!l)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("nav",{className:"navbar",children:[Object(r.jsx)("img",{src:"images/ObaLogo.svg",alt:"OBA simpel logo",className:"logo"}),Object(r.jsx)("button",{className:"menuBtn",onClick:d,children:l?Object(r.jsx)(w.a,{className:"RiClose"}):Object(r.jsx)(w.b,{className:"RiMenu"})}),Object(r.jsx)("div",{className:"left",children:Object(r.jsxs)("ul",{className:"listLeft",id:l?"hidden":"",children:[Object(r.jsx)("li",{children:Object(r.jsxs)(N.c,{exact:!0,activeClassName:"active",to:"/",className:"navLink",onClick:d,children:[Object(r.jsx)(u.a,{style:{fontSize:"50px"}}),"Start"]})}),Object(r.jsx)("li",{children:Object(r.jsxs)(N.c,{activeClassName:"active",to:"/activiteiten",className:"navLink",onClick:d,children:[Object(r.jsx)(m.a,{style:{fontSize:"50px"}}),"Activiteiten"]})}),Object(r.jsx)("li",{children:Object(r.jsxs)(N.c,{activeClassName:"active",to:"/boeken",className:"navLink",onClick:d,children:[Object(r.jsx)(f.a,{style:{fontSize:"50px"}}),"Boeken"]})})]})}),Object(r.jsx)("div",{className:"right",children:Object(r.jsxs)("ul",{className:"listRight",children:[Object(r.jsx)("li",{children:Object(r.jsxs)("button",{className:"btnsRight",onClick:function(){return s(n+2)},children:[Object(r.jsx)(g.a,{style:{color:"$primary-color",fontSize:"2vw"}}),"vergroot letters"]})}),Object(r.jsx)("li",{children:Object(r.jsxs)("button",{className:"btnsRight",onClick:function(){return s(n-2)},children:[Object(r.jsx)(g.a,{style:{color:"$primary-color",fontSize:"2vw"}}),"verklein letters"]})}),Object(r.jsx)("li",{children:Object(r.jsxs)("button",{className:"btnsRight",children:[Object(r.jsx)(p.a,{style:{color:"$primary-color",fontSize:"2vw"}}),"Taal"]})}),Object(r.jsx)("li",{className:"btnsRight",children:Object(r.jsxs)("a",{href:"https://www.oba.nl/",style:{color:"$primary-color"},children:[Object(r.jsx)(v.a,{style:{fontSize:"2vw",fontFamily:"'Poppins', sanSerif",color:"$primary-color"}}),"naar OBA.nl"]})})]})})]})})},z=(n(103),n(6)),S=n(69),C=n(39),B=function(e){var t=e.open,n=e.children,s=e.onClose,a=e.title,c=e.author,i=e.omslagafbeeldingen,o=e.publisher,j=e.language,b=e.series,d=e.description;e.publishYear,e.topicalSubjects;return t?l.a.createPortal(Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"overlay"}),Object(r.jsxs)("div",{className:"modal",children:[Object(r.jsxs)("button",{class:"close-window",onClick:s,children:[Object(r.jsx)(C.a,{class:"icon"}),"Sluiten "]}),n,Object(r.jsx)("h3",{children:a}),Object(r.jsxs)("h5",{children:[c.slice(c.indexOf(",")+1,c.length)," ",c.slice(0,c.indexOf(","))]}),Object(r.jsxs)("div",{className:"modal_display",children:[Object(r.jsx)("div",{className:"modal_image",children:Object(r.jsx)("img",{src:i,alt:"cover picture of "+a})}),Object(r.jsxs)("div",{className:"modal_details",children:[a?Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"Titel: "}),a]}):null,c?Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"Auteur: "}),c]}):null,o?Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"Uitgever: "}),o]}):null,j?Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"Taal: "}),j]}):null,b?Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"Reeks: "}),b]}):null,d?Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{children:"Beschrijving: "}),d]}):null]})]})]})]}),document.getElementById("portal")):null},A=function(e){var t=e.title,n=e.omslagafbeeldingen,s=e.author,c=e.publisher,i=e.language,l=e.series,j=e.description,b=e.publishYear,d=e.topicalSubjects,u=Object(a.useState)(!1),h=Object(o.a)(u,2),m=h[0],O=h[1];return Object(r.jsxs)("article",{children:[Object(r.jsxs)("button",{className:"sliderImage",onClick:function(){return O(!0)},children:[" ",Object(r.jsx)("img",{className:"sliderImages",src:n,alt:"cover picture of "+t}),Object(r.jsx)("h5",{className:"sliderTitle",children:t})]}),Object(r.jsx)(B,{omslagafbeeldingen:n,title:t,author:s,publisher:c,language:i,series:l,description:j,publishYear:b,topicalSubjects:d,open:m,onClose:function(){return O(!1)}})]})},_=n(20),F=n(70),L=n.n(F),D=function(e){var t=e.books,n=(e.setFilteredBooks,e.setGenreName,e.genreName,e.ad),s=e.setAd,c=(e.setSearchValue,e.searchValue),i=Object(a.useState)([]),l=Object(o.a)(i,2),j=l[0],b=l[1],d=Object(a.useState)(t.length),u=Object(o.a)(d,2);u[0],u[1];Object(a.useEffect)((function(){h()}),[t]);var h=function(){var e=[];t.length>0&&t.map((function(t){-1==e.indexOf(t.boek_genre)&&e.push(t.boek_genre)})),b(e)},m=function(e){s(c?"-"+e.target.name+"/":e.target.name+"/")};return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"div-genreFilterBtn",children:""==n?Object(r.jsx)("div",{children:j&&j.map((function(e){return Object(r.jsx)("button",{onClick:m,className:"genreFilterBtn",name:e,children:""===e?"Anders":e})}))}):Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(){s("")},className:"genreFilterBtn",children:"terug"}),Object(r.jsx)("button",{style:{backgroundColor:"gray",textDecoration:"underline"},className:"genreFilterBtn",disabled:!0,children:n.slice(0,n.length-1)})]})})})},T=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)("1"),l=Object(o.a)(i,2),j=l[0],b=l[1],d=Object(a.useState)(),u=Object(o.a)(d,2),h=u[0],m=u[1],O=Object(a.useState)(1),g=Object(o.a)(O,2),x=g[0],p=g[1],k=Object(a.useState)("random/"),v=Object(o.a)(k,2),f=v[0],w=v[1],N=Object(a.useState)("random/"),y=Object(o.a)(N,2),z=y[0],C=y[1],B=Object(a.useState)(""),F=Object(o.a)(B,2),T=F[0],E=F[1],I=Object(a.useState)(""),M=Object(o.a)(I,2),P=M[0],R=M[1],G=Object(a.useState)(),H=Object(o.a)(G,2),V=H[0],J=H[1];Object(a.useEffect)((function(){Y()}),[x,f,T]);var Y=function(){m([]),b(!0),c([]);P.length;var e="https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/boeken/".concat(f+T,"/page/").concat(x);console.log(e),fetch(e).then((function(e){return e.json()})).then((function(e){b(!1),c(e.boeken),J(e.meta.count/20)}))},Z=function(){p((function(e){return e+1})),console.log(x)},$=function(){p((function(e){return e-1})),console.log(x)},W=function(e){C(e.target.name),p((function(e){return 1})),w(e.target.name),E(""),R("")};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"inputDiv",children:[Object(r.jsx)("input",{className:"inputBooksPage",placeholder:"Waar ben je naar op zoek?",onChange:function(e){R(e.target.value)},value:P}),Object(r.jsx)("button",{className:"zoekFilterBtn",onClick:function(e){w((function(e){return e+P})),E(""),p(1)},children:"Zoek"})]}),Object(r.jsxs)("div",{className:"div-genreFilterBtn",children:[Object(r.jsx)("button",{onClick:W,style:"random/"===z?{backgroundColor:"gray",textDecoration:"underline"}:null,className:"typeFilterBtn",name:"random/",children:"willekeurig"}),Object(r.jsx)("button",{onClick:W,style:"largetype/"===z?{backgroundColor:"gray",textDecoration:"underline"}:null,className:"typeFilterBtn",name:"largetype/",children:"grote letters "}),Object(r.jsx)("button",{onClick:W,style:"audiobook/"===z?{backgroundColor:"gray",textDecoration:"underline"}:null,className:"typeFilterBtn",name:"audiobook/",children:"audio boeken"}),Object(r.jsx)("button",{onClick:W,style:"dvdvideo/"===z?{backgroundColor:"gray",textDecoration:"underline"}:null,className:"typeFilterBtn",name:"dvdvideo/",children:"dvdvideo"}),Object(r.jsx)("button",{onClick:W,style:"book/"===z?{backgroundColor:"gray",textDecoration:"underline"}:null,className:"typeFilterBtn",name:"book/",children:"boeken"}),Object(r.jsx)("button",{onClick:W,style:"ebook/"===z?{backgroundColor:"gray",textDecoration:"underline"}:null,className:"typeFilterBtn",name:"ebook/",children:"e-boek"})]}),n&&n&&Object(r.jsx)(D,{books:n,searchValue:P,setSearchValue:R,ad:T,setAd:E,genreName:f,setGenreName:w,filteredBooks:h,setFilteredBooks:m}),Object(r.jsx)("section",{children:!1===j?Object(r.jsx)("div",{children:h&&h.length>0?Object(r.jsxs)("div",{className:"search_results",children:[h&&h.map((function(e){var t=e.id,n=e.title,s=e.omslagafbeeldingen,a=e.auteurs,c=e.uitgever,i=e.taal,l=e.series,o=e.beschrijving,j=e.uitgave_jaar,b=e.topical_subjects;return Object(r.jsx)(A,{title:n,omslagafbeeldingen:s[1],autho:!0,language:i,series:l,r:a,publisher:c,description:o,publishYear:j,topicalSubjects:b},t)})),n.length>0?Object(r.jsxs)("div",{div:!0,className:"pages",children:[Object(r.jsx)("button",{className:"nextPreviousBtn",disabled:1==x,onClick:$,children:"vorige pagina"}),Object(r.jsx)("h2",{children:0==n.length?Object(r.jsx)("h2",{children:"Geen Resultaten"}):null}),Object(r.jsx)("button",{disabled:V>x,className:"nextPreviousBtn",onClick:Z,children:"volgende pagina"})]}):null]}):Object(r.jsxs)("div",{className:"search_results",children:[n&&n.map((function(e){var t=e.id,n=e.title,s=e.omslagafbeeldingen,a=e.auteurs,c=e.uitgever,i=e.taal,l=e.series,o=e.beschrijving,j=e.uitgave_jaar,b=e.topical_subjects;return Object(r.jsx)(A,{title:n,omslagafbeeldingen:s[1],author:a,publisher:c,language:i,series:l,description:o,publishYear:j,topicalSubjects:b},t)})),n?Object(r.jsxs)("div",{className:"pages",children:[Object(r.jsx)("button",{className:"nextPreviousBtn",disabled:1==x,onClick:$,children:"vorige pagina"}),Object(r.jsx)("h2",{children:0==n.length?Object(r.jsx)("h2",{children:"Geen Resultaten"}):null}),Object(r.jsx)("button",{disabled:V<x,className:"nextPreviousBtn",onClick:Z,children:"volgende pagina"})]}):null]})}):!0===j?Object(r.jsx)(L.a,{color:"rgb(1, 117, 113)",loading:j,css:Object(_.css)(s||(s=Object(S.a)(["display: block;margin: 0 auto;"]))),size:150}):Object(r.jsx)(r.Fragment,{})})]})},E=n(71),I=n.n(E),M=function(e){var t=e.location,n=e.tijd,s=e.datum,a=e.open,c=e.children,i=e.onClose,o=e.title,j=e.omslagafbeeldingen,b=e.description;return a?l.a.createPortal(Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"overlay"}),Object(r.jsxs)("div",{className:"modal",children:[Object(r.jsxs)("button",{class:"close-window",onClick:i,children:[Object(r.jsx)(C.a,{class:"icon"}),"Sluiten "]}),c,c,Object(r.jsx)("h3",{children:o}),Object(r.jsxs)("div",{className:"time_details",children:[Object(r.jsx)("h4",{children:s}),Object(r.jsx)("h5",{children:n})]}),Object(r.jsxs)("div",{className:"modal_display",children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{className:"modal_image_act",src:j,alt:"cover picture of "+o})}),Object(r.jsxs)("div",{className:"modal_details activity_modal",children:[Object(r.jsx)("p",{children:Object(r.jsx)("span",{children:b})}),Object(r.jsx)("span",{className:"register",children:"Aanmelden"}),Object(r.jsx)("p",{children:"Op dit moment kun je alleen op afspraak komen."}),Object(r.jsx)("p",{className:"italics",children:"Bereid je voor op je bezoek aan de OBA en doe de gezondheidscheck voordat je naar de OBA komt."}),Object(r.jsx)("button",{className:"register_button",children:"Aanmelden"}),Object(r.jsxs)("p",{children:[t," | Osdorpplein 16 | 1068EL ",t.slice(4)]}),Object(r.jsx)("span",{children:"T: 020-5230900 | E: oba@oba.nl"})]})]})]})]}),document.getElementById("portal")):null},P=function(e){var t=e.id,n=e.dayFormat,s=e.location,c=e.datum,i=e.tijd,l=e.title,j=e.omslagafbeeldingen,b=(e.author,e.publisher,e.language,e.series,e.description),d=Object(a.useState)(!1),u=Object(o.a)(d,2),h=u[0],m=u[1];return Object(r.jsxs)("article",{children:[Object(r.jsx)("button",{className:"activitySliderButton ActCal",style:{backgroundImage:"url('images/activityicon_green.svg')",backgroundPosition:"cover",backgroundRepeat:"no-repeat",height:"100%"},onClick:function(){return m(!0)},children:Object(r.jsxs)("div",{className:"ActInfo",children:[Object(r.jsx)("h3",{children:l}),Object(r.jsx)("h4",{children:i}),Object(r.jsx)("h4",{children:n}),Object(r.jsx)("img",{src:j,alt:l})]})},t),Object(r.jsx)(M,{omslagafbeeldingen:j,datum:c,tijd:i,title:l,description:b,location:s,open:h,onClose:function(){return m(!1)}})]})};var R=function(e){var t=e.activities;return Object(r.jsx)("div",{children:Object(r.jsx)("div",{children:t&&t.length>0?Object(r.jsx)("div",{className:"mainActCal",children:t&&t.map((function(e){var t=new Date(e.datum),n=t.toLocaleString("nl",{weekday:"short"})+" "+t.getDate()+" "+t.toLocaleString("nl",{month:"short"});return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(P,{omslagafbeeldingen:e.omslagafbeeldingen[0],tijd:e.tijd,title:e.title,dayFormat:n,datum:e.datum,description:e.beschrijving,location:e.locatie},e.id)})}))}):Object(r.jsx)("p",{children:"sorry no results"})})})},G=n(150),H="https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/",V=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(H+"activiteiten"),i=Object(o.a)(c,2),l=i[0],j=i[1],b=Object(a.useState)(!1),d=Object(o.a)(b,2),u=d[0],h=d[1],m=Object(a.useState)(""),O=Object(o.a)(m,2),g=O[0],x=O[1],p=Object(a.useState)(""),k=Object(o.a)(p,2),v=k[0],f=k[1];Object(a.useEffect)((function(){return f(""),j(H+"activiteiten"),w(l+"/random"),function(){x("")}}),[]);var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";h(!0);var t=""!==e?e:l;I.a.get("".concat(t)).then((function(e){s(e.data.activiteiten),h(!1)})).catch((function(e){return console.log(e)}))},N=function(e){f(e.target.name),w(l+"/datum/"+e.target.name),j(l+"/datum/"+e.target.name)};return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{onChange:function(e){x(e.target.value)},value:g}),Object(r.jsx)("button",{onClick:function(){return function(){if(""!==g){var e=H+"activiteiten/zoek/"+g;j(e),w(e),f("")}else x("Schrijf maar iets")}()},children:"Zoek"}),Object(r.jsxs)("div",{className:"randomActCal",children:[Object(r.jsx)("button",{name:"c_nextweek",style:"c_nextweek"===v?{backgroundColor:"gray",textDecoration:"underline"}:null,onClick:N,className:"raActCal",children:"Volgende Week"}),Object(r.jsx)("button",{name:"d_thismonth",style:"d_thismonth"===v?{backgroundColor:"gray",textDecoration:"underline"}:null,onClick:N,className:"raActCal",children:"Deze Maand"}),Object(r.jsx)("button",{name:"e_nextmonth",style:"e_nextmonth"===v?{backgroundColor:"gray",textDecoration:"underline"}:null,onClick:N,className:"raActCal",children:"Aankomende Maand"}),Object(r.jsx)("button",{name:"f_next3month",style:"f_next3month"===v?{backgroundColor:"gray",textDecoration:"underline"}:null,onClick:N,className:"raActCal",children:"In Drie Maanden"}),Object(r.jsx)("button",{name:"g_thisyear",style:"g_thisyear"===v?{backgroundColor:"gray",textDecoration:"underline"}:null,onClick:N,className:"raActCal",children:"Dit Jaar"})]}),u?Object(r.jsx)(G.a,{style:{marginTop:"200px"},active:!0,inline:"centered"}):Object(r.jsx)(R,{activities:n})]})};n(73),n(74);var J=function(){var e=Object(a.useContext)(j),t=(Object(o.a)(e,1)[0],Object(a.useState)(null)),n=Object(o.a)(t,2),s=(n[0],n[1]),c=Object(a.useState)(!1),i=Object(o.a)(c,2),l=(i[0],i[1]),b=Object(a.useState)([]),d=Object(o.a)(b,2),u=(d[0],d[1]),h=Object(a.useState)(),m=Object(o.a)(h,2);m[0],m[1];return Object(a.useEffect)((function(){fetch("https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/boeken/audiobook/").then((function(e){return e.json()})).then((function(e){console.log(e),l(!0),u(e.boeken)}),(function(e){l(!0),s(e)}))}),[]),Object(r.jsx)("div",{children:Object(r.jsx)(T,{})})},Y=n(42),Z=n.n(Y),$=n(43),W=n.n($),U=function(e){var t=e.data,n=Object(a.useState)(0),s=Object(o.a)(n,2),c=s[0],i=s[1];t.length>10&&(t.length=10);var l=t.length,j=function(e){return e>l-1?null:[e,(e+1)%l,(e+2)%l,(e+3)%l,(e+4)%l,(e+5)%l,(e+6)%l,(e+7)%l]};return console.log(c),console.log(j(c)),!Array.isArray(t)||t.length<=0?null:Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("section",{className:"slider",children:[Object(r.jsx)("button",{className:"arrowBtnLeft",children:Object(r.jsx)(Z.a,{style:{fontSize:"200px"},onClick:function(){i((function(e){return 0===e?l-1:e-1}))}})}),Object(r.jsx)("button",{className:"arrowBtnRight",children:Object(r.jsx)(W.a,{style:{fontSize:"200px"},onClick:function(){i((function(e){return e===l-1?0:e+1}))}})}),Object(r.jsx)("div",{className:"wrapper",children:j(c).map((function(e,n){var s=t[e];return Object(r.jsx)("div",{className:e===c?"slide active":"slide",style:{transform:"translateX(".concat(100*(n-1),"%)")},children:Object(r.jsx)(A,{title:s.title,omslagafbeeldingen:s.omslagafbeeldingen[1],author:s.auteurs,publisher:s.uitgever,language:s.taal,series:s.series,description:s.beschrijving,publishYear:s.uitgave_jaar,topicalSubjects:s.topical_subjects},s.id)},e)}))})]})})},K=function(e){var t=e.location,n=e.datum,s=e.tijd,c=e.title,i=e.omslagafbeeldingen,l=e.author,j=e.publisher,b=e.language,d=e.series,u=e.description,h=Object(a.useState)(!1),m=Object(o.a)(h,2),O=m[0],g=m[1];return Object(r.jsxs)("article",{children:[Object(r.jsxs)("button",{className:"activitySliderButton",onClick:function(){return g(!0)},children:[" ",Object(r.jsx)("img",{className:"sliderImageActiviteiten",src:i,alt:"cover picture of "+c}),Object(r.jsxs)("div",{className:"overlayActiviteiten",children:[Object(r.jsx)("h4",{children:n}),Object(r.jsx)("h5",{children:s}),Object(r.jsx)("h4",{children:c})]})]}),Object(r.jsx)(M,{omslagafbeeldingen:i,datum:n,tijd:s,title:c,author:l,publisher:j,language:b,series:d,description:u,location:t,open:O,onClose:function(){return g(!1)}})]})},X=function(e){var t=e.data,n=Object(a.useState)(0),s=Object(o.a)(n,2),c=s[0],i=s[1];t.length>7&&(t.length=7);var l=t.length;return!Array.isArray(t)||t.length<=0?null:Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("section",{className:"sliderActiviteiten",children:[Object(r.jsx)("button",{className:"arrowBtnLeft",children:Object(r.jsx)(Z.a,{style:{fontSize:"200px"},onClick:function(){i((function(e){return 0===e?l-1:e-1}))}})}),Object(r.jsx)("button",{className:"arrowBtnRight",children:Object(r.jsx)(W.a,{style:{fontSize:"200px"},onClick:function(){i((function(e){return e===l-1?0:e+1}))}})}),Object(r.jsx)("div",{className:"wrapperActiviteiten",children:function(e){return e>l-1?null:[e,(e+1)%l,(e+2)%l,(e+3)%l,(e+4)%l]}(c).map((function(e,n){var s=t[e],a=new Date(s.datum),i=a.toLocaleString("nl",{weekday:"short"})+" "+a.getDate()+" "+a.toLocaleString("nl",{month:"short"});return Object(r.jsx)("div",{className:e===c?"slideA active":"slideA",style:{transform:"translateX(".concat(100*(n-1),"%)")},children:Object(r.jsx)(K,{title:s.title,datum:i,tijd:s.tijd,omslagafbeeldingen:s.omslagafbeeldingen[0],description:s.beschrijving,location:s.locatie},s.id)},e)}))})]})})},q=function(){return Object(r.jsx)("div",{className:"containerTips",children:Object(r.jsxs)("div",{className:"wrapperImagesTips",children:[Object(r.jsxs)(N.b,{to:"/maatje",children:[Object(r.jsx)("img",{className:"imageTips",src:"https://www.oba.nl/dam/nieuws/0418_oba-maatje_mauritsdame.jpg.rendition.384.614.jpeg",alt:"vrouw en vrijwilliger kijken samen naar een boek in een woonkamer"}),Object(r.jsx)("h2",{className:"overlayTipsOne",children:"OBA maatje"})]}),Object(r.jsxs)(N.b,{to:"/ebooksluisterboeken",children:[Object(r.jsx)("img",{className:"imageTips",src:"https://www.oba.nl/dam/0420_luisterboeken.jpg.rendition.792.1267.jpeg",alt:"man met koptelefoon zit buiten naar een luisterboek te luisteren"}),Object(r.jsx)("h2",{className:"overlayTipsTwo",children:"E-books en luisterboeken"})]}),Object(r.jsxs)(N.b,{to:"/passendlezen",children:[Object(r.jsx)("img",{className:"imageTips",src:"../../images/passendLezen.jpeg",alt:"vrouw met koptelefoon kijkt met glimlach voor zich uit op een fluwelen fauteuil"}),Object(r.jsx)("h2",{className:"overlayTipsThree",children:"Passend Lezen"})]})]})})},Q=n(75),ee=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(),i=Object(o.a)(c,2),l=i[0],b=i[1],d=Object(a.useContext)(j);Object(o.a)(d,1)[0];return Object(a.useEffect)((function(){fetch("https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/boeken/").then((function(e){return e.json()})).then((function(e){console.log(e),s(e)}))}),[]),Object(a.useEffect)((function(){fetch("https://techgrounds-oba.herokuapp.com/api/oba/techgrounds/activiteiten/random").then((function(e){return e.json()})).then((function(e){console.log(e),b(e)}))}),[]),n&&l?(console.log(n.largetype.boeken),console.log(l),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"Home",children:[Object(r.jsxs)("h2",{className:"hTwoHome lightbulb",children:[Object(r.jsx)(Q.a,{style:{fontSize:"400%"}})," Tips"]}),Object(r.jsx)(q,{}),Object(r.jsxs)("h2",{className:"hTwoHome event",children:[Object(r.jsx)(m.a,{style:{fontSize:"400%"}})," Activiteiten"]}),Object(r.jsx)(X,{data:l.activiteiten}),Object(r.jsxs)("h2",{className:"hTwoHome bookOne",children:[Object(r.jsx)(f.a,{style:{fontSize:"400%"}})," Grootletter boeken"]}),Object(r.jsx)(U,{data:n.largetype.boeken}),Object(r.jsxs)("h2",{className:"hTwoHome bookTwo",children:[Object(r.jsx)(f.a,{style:{fontSize:"400%"}})," Audio boeken"]}),Object(r.jsx)(U,{data:n.audio.boeken}),Object(r.jsxs)("h2",{className:"hTwoHome bookThree",children:[Object(r.jsx)(f.a,{style:{fontSize:"400%"}})," Boeken"]}),Object(r.jsx)(U,{data:n.book.boeken})]})})):null},te=function(){var e=Object(a.useContext)(j),t=Object(o.a)(e,1)[0];return Object(r.jsx)("div",{className:"maatje",style:{fontSize:"".concat(t,"px")},children:Object(r.jsxs)("div",{className:"textMaatje",children:[Object(r.jsx)("h1",{children:"Iedere maand een stapel favoriete boeken, cd\u2019s of films thuis?"}),Object(r.jsx)("img",{src:"https://www.oba.nl/dam/nieuws/0418_oba-maatje_mauritsdame.jpg.rendition.384.614.jpeg",alt:"vrouw en vrijwilliger kijken samen naar een boek in een woonkamer",className:"imgMaatje"}),Object(r.jsxs)("p",{children:["Zou u het fijn vinden om iedere maand een eigen vertrouwde vrijwilliger thuis te ontvangen, die een stapel fijne boeken, films, cd\u2019s of luisterboeken uit de OBA voor u meebrengt?"," "]}),Object(r.jsx)("h2",{children:"Dan is OBA Maatje iets voor u!"}),Object(r.jsx)("p",{children:"U maakt kennis met een OBA Maatje-vrijwilliger. Klikt het, dan komt uw eigen vertrouwde OBA Maatje eens per maand gezellig langs en brengt een pakket mee dat is samengesteld volgens uw wensen."}),Object(r.jsx)("h2",{children:"Hoe werkt het?"}),Object(r.jsxs)("p",{children:["Als OBA-lid kunt u zich aanmelden door een mail met uw naam, adres en telefoonnummer te sturen naar",Object(r.jsx)("a",{href:"mailto: obamaatje@oba.nl",children:" obamaatje@oba.nl "}),". U kunt ook bellen naar 020 - 52 30 900. Een medewerker van de OBA neemt dan contact met u op om een afspraak te maken voor een intakegesprek."]}),Object(r.jsx)("h2",{children:"Bent u nog geen OBA-lid?"}),Object(r.jsx)("p",{children:"Schrijf u dan eerst in:"}),Object(r.jsx)("a",{href:"https://www.oba.nl/service/word-lid.html",className:"anchorMaatje",children:Object(r.jsx)("p",{children:"ga naar het inschrijfformulier"})})]})})},ne=function(){var e=Object(a.useContext)(j),t=Object(o.a)(e,1)[0];return Object(r.jsx)("div",{className:"passendLezen",style:{fontSize:"".concat(t,"px")},children:Object(r.jsxs)("div",{className:"textPassend",children:[Object(r.jsx)("h1",{children:"Passend Lezen"}),Object(r.jsx)("img",{src:"../../images/passendLezen.jpeg",alt:"vrouw met koptelefoon kijkt met glimlach voor zich uit op een fluwelen fauteuil",className:"imgPassend"}),Object(r.jsx)("p",{children:"Je hebt geen letters nodig om te kunnen lezen. Een goed verhaal zit tussen je oren, speelt zich af in je eigen fantasie. Daarom heeft de OBA ook gesproken boeken. Op www.passendlezen.nl vind je ruim 80.000 van zulke boeken in de meest uiteenlopende genres, van klassiekers tot actuele titels. En allemaal exclusief voor mensen met een leesbeperking."}),Object(r.jsx)("h2",{children:"Voor leden met een leesbeperking"}),Object(r.jsx)("p",{children:"Gesproken boeken zijn speciaal ontwikkeld voor alle leden die blind, slechtziend of dyslectisch zijn. Maar ook als je een andere beperking hebt waardoor lezen niet of moeilijk gaat, kun je gebruik maken van gesproken boeken."}),Object(r.jsx)("h2",{children:"Wat zijn gesproken boeken? "}),Object(r.jsx)("p",{children:"Veel boeken zijn tegenwoordig verkrijgbaar als luisterboek. Hoewel een gesproken boek en een luisterboek veel op elkaar lijken, zijn ze niet helemaal hetzelfde. Gesproken boeken zijn exclusief beschikbaar voor mensen met een leesbeperking en zijn volledig afgestemd op hun wensen. Zo worden de boeken op een rustig tempo ingesproken zonder te veel intonatie. Ook kun je door een gesproken boek navigeren om bijvoorbeeld naar een volgend hoofdstuk te gaan."}),Object(r.jsx)("h2",{children:"Verklaring leesbeperking "}),Object(r.jsxs)("p",{children:["Om gebruik te maken van de gesproken boeken, moet je bij het inschrijven op de website aangeven dat je een",Object(r.jsxs)("a",{href:"https://www.passendlezen.nl/iguana/www.main.cls?surl=leesbeperking",children:[" ","leesbeperking"," "]}),"hebt. Medewerkers van Bibliotheekservice Passend Lezen nemen contact met je op om de gegevens en de verklaring te bevestigen. Meer informatie over de inschrijfvoorwaarden vind je op",Object(r.jsxs)("a",{href:"https://www.passendlezen.bibliotheek.nl/",children:[" ","www.passendlezen.nl"]})]}),Object(r.jsx)("h2",{children:"Hoe werkt het?"}),Object(r.jsxs)("p",{children:["Voor leden van de Bibliotheek is gebruik maken van de gesproken boeken kosteloos en heel eenvoudig."," ",Object(r.jsxs)("a",{href:"https://www.passendlezen.nl/iguana/www.main.cls?surl=lid-worden-ob",children:["Klik hier"," "]})," ","om in te loggen met jouw lidmaatschapsgegevens van de Bibliotheek. Je krijgt dan toegang tot de ruim 80.000 gesproken boeken. Zet de titels die je wilt lezen op het boekenplankje. Op het plankje passen maximaal 15 titels die je zo lang mag lenen als je wilt. Je kunt de boeken vervolgens streamen en afspelen op een pc, tablet of mobiele telefoon. Je hebt hiervoor wel een internetverbinding nodig."," "]}),Object(r.jsx)("h2",{children:"Meer informatie "}),Object(r.jsxs)("p",{children:["Ga naar ",Object(r.jsx)("a",{href:"www.passendlezen.nl",children:" www.passendlezen.nl"})]})]})})},se=function(){var e=Object(a.useContext)(j),t=Object(o.a)(e,1)[0];return Object(r.jsxs)("div",{className:"ebooksLuisterBoeken",style:{fontSize:"".concat(t,"px")},children:[Object(r.jsxs)("div",{className:"textEBooks",children:[Object(r.jsx)("h1",{children:"Hoe leen je e-books en luisterboeken?"}),Object(r.jsx)("img",{src:"https://www.oba.nl/dam/0420_luisterboeken.jpg.rendition.792.1267.jpeg",alt:"man met koptelefoon zit buiten naar een luisterboek te luisteren",className:"imgEBooks"}),Object(r.jsx)("p",{children:"Als lid van de OBA heb je toegang tot duizenden e-books en luisterboeken uit de landelijke online Bibliotheek. In een paar stappen lees je ze op je smartphone of tablet via de online Bibliotheek-app. Lees hier alles over deze app en probeer hem meteen uit!"}),Object(r.jsx)("p",{children:"Wil je e-books van de bibliotheek lezen op je e-reader?"}),Object(r.jsxs)("p",{children:[Object(r.jsxs)("a",{href:"https://www.onlinebibliotheek.nl/klantenservice/e-books/e-reader.html",children:[" ","Bekijk hoe het werkt op onlinebibliotheek.nl"," "]})," "]})]}),Object(r.jsx)("hr",{style:{width:"50%",marginLeft:"25%",marginBottom:"5%"}}),Object(r.jsx)("div",{className:"instructionsEBooks",children:Object(r.jsxs)("ul",{className:"instructionsList",children:[Object(r.jsxs)("li",{className:"instructionsListItem",children:[Object(r.jsx)(w.c,{style:{fontSize:"30px",margin:"10%",color:"teal"}}),Object(r.jsx)("h3",{style:{margin:"5%"},children:"Download de app"})," ",Object(r.jsxs)("p",{children:["Ga naar de  ",Object(r.jsxs)("a",{href:"https://apps.apple.com/us/app/id1517985604",style:{color:"teal"},children:["App Store"," "]})," ","of"," ",Object(r.jsxs)("a",{href:"https://play.google.com/store/apps/details?id=com.odilo.bibliotheek",style:{color:"teal"},children:["Google play"," "]})," ","en zoek naar de online Bibliotheek app."]})," "]}),Object(r.jsxs)("li",{className:"instructionsListItem",children:[" ",Object(r.jsx)(w.d,{style:{fontSize:"30px",margin:"10%",color:"teal"}}),Object(r.jsx)("h3",{style:{margin:"5%"},children:"Log in "}),Object(r.jsx)("p",{children:" Gebruik je pasnummer om in te loggen. "}),Object(r.jsx)("p",{children:"Deze staat op je OBA-pas en begint met het cijfer '22000...'. "}),Object(r.jsx)("p",{children:" Je geboortedatum is je wachtwoord (ddmmjjjj)."})]})," ",Object(r.jsxs)("li",{className:"instructionsListItem",children:[Object(r.jsx)(w.e,{style:{fontSize:"30px",margin:"10%",color:"teal"}}),Object(r.jsx)("h3",{style:{margin:"5%"},children:"Lezen en luisteren "}),Object(r.jsx)("p",{children:"Nu kun je e-books en luisterboeken uitzoeken en lenen."})]})]})})]})},ae=function(){var e=Object(a.useState)(20),t=Object(o.a)(e,2);t[0],t[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(b,{children:Object(r.jsx)(N.a,{basename:"/",children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(y,{}),Object(r.jsxs)(z.c,{children:[Object(r.jsx)(z.a,{exact:!0,path:"/",component:ee}),Object(r.jsx)(z.a,{exact:!0,path:"/boeken",component:J}),Object(r.jsx)(z.a,{exact:!0,path:"/activiteiten",component:V}),Object(r.jsx)(z.a,{exact:!0,path:"/searchResultsbooks",component:T}),Object(r.jsx)(z.a,{exact:!0,path:"/maatje",component:te}),Object(r.jsx)(z.a,{exact:!0,path:"/passendlezen",component:ne}),Object(r.jsx)(z.a,{exact:!0,path:"/ebooksluisterboeken",component:se})]})]})})})})};l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(N.a,{children:Object(r.jsx)(ae,{})})}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.c0f9dac5.chunk.js.map