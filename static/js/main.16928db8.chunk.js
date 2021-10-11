(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={App:"App_App__26Ew7",title:"App_title__37IEI"}},16:function(t,e,n){t.exports={list:"Contacts_list__1J4pi",item:"Contacts_item__15hrN",button:"Contacts_button__12jOi"}},21:function(t,e,n){t.exports={label:"Filter_label__xXGuQ",input:"Filter_input__2d7Ps"}},7:function(t,e,n){t.exports={form:"Form_form__3TEJt",label:"Form_label__1YaUf",input:"Form_input__3cp7-",button:"Form_button__3-Al-"}},77:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(13),o=n.n(r),s=n(6),u=n(15),i=n.n(u),l=n(16),b=n.n(l),d=n(3),f={fetchContactsRequest:Object(d.b)("contacts/fetchContactsRequest"),fetchContactsSuccess:Object(d.b)("contacts/fetchContactsSuccess"),fetchContactsError:Object(d.b)("contacts/fetchContactsError"),addContactsRequest:Object(d.b)("contacts/addContactsRequest"),addContactsSuccess:Object(d.b)("contacts/addContactsSuccess"),addContactsError:Object(d.b)("contacts/addContactsError"),deleteContactsRequest:Object(d.b)("contacts/deleteContactsRequest"),deleteContactsSuccess:Object(d.b)("contacts/deleteContactsSuccess"),deleteContactsError:Object(d.b)("contacts/deleteContactsError"),onChangeFilter:Object(d.b)("contacts/changeFilter")},j=n(20),h=n.n(j),p=n(31),m=n(11),O=n.n(m);O.a.defaults.baseURL="http://localhost:7777";var C,g,v,_=function(t){return function(e){var n=t;e(f.addContactsRequest()),O.a.post("/contacts",n).then((function(t){var n=t.data;return e(f.addContactsSuccess(n))})).catch((function(t){return e(f.addContactsError(t))}))}},x=function(){return function(){var t=Object(p.a)(h.a.mark((function t(e){var n,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(f.fetchContactsRequest()),t.prev=1,t.next=4,O.a.get("/contacts");case 4:n=t.sent,c=n.data,e(f.fetchContactsSuccess(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(f.fetchContactsError(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},A=function(t){return function(e){e(f.deleteContactsRequest()),O.a.delete("/contacts/".concat(t)).then((function(n){n.data;return e(f.deleteContactsSuccess(t))})).catch((function(t){return e(f.deleteContactsError(t))}))}},k=n(9),F=function(t){return t.phonebook.filter},S={getIsLOading:function(t){return t.phonebook.loading},getPhonebookFilter:F,getFilteredContacts:Object(k.a)([F,function(t){return t.phonebook.contacts}],(function(t,e){var n=t.toLowerCase().trim();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},y=n(2),E=n(14),N=n(4),q=f.fetchContactsRequest,I=f.fetchContactsSuccess,R=f.fetchContactsError,w=f.addContactsRequest,z=f.addContactsSuccess,L=f.addContactsError,J=f.deleteContactsRequest,Z=f.deleteContactsSuccess,P=f.deleteContactsError,B=f.onChangeFilter,M=Object(d.c)([],(C={},Object(y.a)(C,I,(function(t,e){return e.payload})),Object(y.a)(C,z,(function(t,e){var n=e.payload;return[].concat(Object(E.a)(t),[n])})),Object(y.a)(C,Z,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),C)),T=Object(d.c)("",Object(y.a)({},B,(function(t,e){return e.payload}))),V=Object(d.c)(null,(g={},Object(y.a)(g,R,(function(t,e){return e.payload})),Object(y.a)(g,q,(function(){return null})),g)),D=Object(d.c)(!1,(v={},Object(y.a)(v,q,(function(){return!0})),Object(y.a)(v,I,(function(){return!1})),Object(y.a)(v,R,(function(){return!1})),Object(y.a)(v,w,(function(){return!0})),Object(y.a)(v,z,(function(){return!1})),Object(y.a)(v,L,(function(){return!1})),Object(y.a)(v,J,(function(){return!0})),Object(y.a)(v,Z,(function(){return!1})),Object(y.a)(v,P,(function(){return!1})),v)),U=Object(N.b)({contacts:M,filter:T,loading:D,error:V}),$=n(1);var G=Object(s.b)((function(t){return{isLoading:S.getIsLOading(t),contacts:S.getFilteredContacts(t)}}),(function(t){return{fetchContacts:function(){return t(x())},onClick:function(e){return t(A(e))}}}))((function(t){var e=t.contacts,n=t.isLoading,a=t.onClick,r=Object(s.c)();return Object(c.useEffect)((function(){r(x())}),[r]),Object($.jsxs)("div",{children:[Object($.jsx)("ul",{className:b.a.list,children:e.map((function(t){var e=t.id,n=t.name,c=t.number;return Object($.jsxs)("li",{className:b.a.item,children:[n,": ",c,Object($.jsx)("button",{type:"button",onClick:function(){a(e)},className:b.a.button,children:"Delete"})]},e)}))}),n&&Object($.jsx)("h3",{children:"Loading..."})]})})),Q=n(10),X=n.n(Q),Y=n(21),H=n.n(Y);var K=Object(s.b)((function(t){return{filter:S.getPhonebookFilter(t)}}),(function(t){return{onChange:function(e){return t(f.onChangeFilter(e.target.value))}}}))((function(t){var e=t.filter,n=t.onChange,c=X.a.generate();return Object($.jsxs)("label",{htmlFor:c,className:H.a.label,children:["Find contacts by name",Object($.jsx)("input",{id:c,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:n,className:H.a.input})]})})),W=n(32),tt=n(33),et=n(36),nt=n(35),ct=n(7),at=n.n(ct),rt=function(t){Object(et.a)(n,t);var e=Object(nt.a)(n);function n(){var t;Object(W.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.nameId=X.a.generate(),t.numberId=X.a.generate(),t.handleSubmit=function(e){e.preventDefault(),console.log(t.props.contacts),t.props.contacts.find((function(e){return e.name===t.state.name}))?alert("".concat(t.state.name," is already created!")):(t.props.onSubmit(t.state),t.resetFormInput())},t.hadleAddValue=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(y.a)({},c,a))},t}return Object(tt.a)(n,[{key:"resetFormInput",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){return Object($.jsxs)("form",{onSubmit:this.handleSubmit,className:at.a.form,children:[Object($.jsx)("label",{htmlFor:this.nameId,className:at.a.label,children:"Name"}),Object($.jsx)("input",{id:this.nameId,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.hadleAddValue,className:at.a.input}),Object($.jsx)("label",{htmlFor:this.numberId,className:at.a.label,children:"Number"}),Object($.jsx)("input",{id:this.numberId,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.hadleAddValue,className:at.a.input}),Object($.jsx)("button",{type:"submit",className:at.a.button,children:"Add contact"})]})}}]),n}(c.Component),ot=Object(s.b)((function(t){return{contacts:t.phonebook.contacts}}),(function(t){return{onSubmit:function(e){return t(_(e))}}}))(rt);var st=function(){return Object($.jsxs)("div",{className:i.a.App,children:[Object($.jsx)("h1",{className:i.a.title,children:"Phonebook"}),Object($.jsx)(ot,{}),Object($.jsx)("h2",{className:i.a.title,children:"Contacts:"}),Object($.jsx)(K,{}),Object($.jsx)(G,{})]})},ut=n(34),it=n.n(ut),lt=n(8),bt=[].concat(Object(E.a)(Object(d.d)({serializableCheck:{ignoredActions:[lt.a,lt.f,lt.b,lt.c,lt.d,lt.e]}})),[it.a]),dt=Object(d.a)({reducer:{phonebook:U},middleware:bt,devTools:!1});o.a.render(Object($.jsx)(a.a.StrictMode,{children:Object($.jsx)(s.a,{store:dt,children:Object($.jsx)(st,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.16928db8.chunk.js.map