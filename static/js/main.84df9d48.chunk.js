(this.webpackJsonptaproom=this.webpackJsonptaproom||[]).push([[0],{29:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(10),a=n.n(r),s=(n(29),n.p+"static/media/BeerHeader.632950e4.jpeg"),d=n(0);var l=function(){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)("img",{width:"auto",height:"auto",src:s,alt:"beer"}),Object(d.jsx)("hr",{}),Object(d.jsx)("h1",{children:"Tap-Room:"}),Object(d.jsx)("h3",{children:"It's 5 o'clock somewhere.."})]})},o=n(16),j=n(17),u=n(24),b=n(23),h=n(9);var g=function(e){return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)("div",{onClick:function(){return e.whenKegClicked(e.id)},children:Object(d.jsx)(h.a,{style:{width:"14rem"},children:Object(d.jsxs)(h.a.Body,{children:[Object(d.jsx)(h.a.Title,{children:e.name}),Object(d.jsx)(h.a.Subtitle,{children:e.brand}),Object(d.jsxs)(h.a.Text,{children:[e.price,Object(d.jsx)("br",{})," ",e.quantity," Pints Remaining"]})]})})})})},m=n(18),O=n(19),p=n(22);var x=function(e){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"- Beer On Tap -"}),Object(d.jsx)(m.a,{fluid:!0,children:Object(d.jsx)(O.a,{children:Object(d.jsx)(p.a,{children:Object.values(e.kegList).map((function(t){return Object(d.jsx)(g,{whenKegClicked:e.onKegSelection,brand:t.brand,name:t.name,content:t.content,price:t.price,quantity:t.quantity,formattedWaitTime:t.formattedWaitTime,id:t.id},t.id)}))})})})]})},f=n(40);var v=function(e){return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsxs)("form",{onSubmit:e.formSubmissionHandler,children:[Object(d.jsx)("input",{type:"text",name:"name",placeholder:"Name"}),Object(d.jsx)("input",{type:"text",name:"brand",placeholder:"Beverage Brand"}),Object(d.jsx)("input",{type:"text",name:"content",placeholder:"Alcohol Content"}),Object(d.jsx)("input",{type:"text",name:"price",placeholder:"Beverage Cost"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"submit",children:e.buttonText})]})})};var K=function(e){return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)(v,{formSubmissionHandler:function(t){t.preventDefault(),e.onNewKegCreation({name:t.target.name.value,brand:t.target.brand.value,content:t.target.content.value,price:t.target.price.value,quantity:124,id:Object(f.a)()})},buttonText:"Submit"})})};var y=function(e){var t=e.keg,n=e.onClickingDelete,i=e.onClickDecrement;return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)("h2",{children:" Keg Details:"}),Object(d.jsxs)("h3",{children:[t.brand,": ",Object(d.jsx)("br",{}),t.name," (",t.content,")"]}),Object(d.jsx)("h2",{children:t.price}),Object(d.jsxs)("h4",{children:["Pints Remaining: ",t.quantity]}),Object(d.jsx)("button",{onClick:e.onClickingEdit,children:" Edit Keg"}),Object(d.jsx)("button",{onClick:function(){return n(t.id)},children:" Delete Keg"}),Object(d.jsx)("button",{onClick:function(){return i(t.id)},children:"-"}),Object(d.jsx)("hr",{})]})};var k=function(e){var t=e.keg;return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)(v,{formSubmissionHandler:function(n){n.preventDefault(),e.onEditKeg({name:n.target.name.value,brand:n.target.brand.value,content:n.target.content.value,price:n.target.price.value,id:t.id})},buttonText:"Update Keg"})})},C=n(12),S="ADD_KEG",E="DELETE_KEG",D="TOGGLE_FORM",q=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).handleClick=function(){null!=i.state.selectedKeg?i.setState({selectedKeg:null,editing:!1}):(0,i.props.dispatch)({type:D})},i.handleAddingNewKegToList=function(e){var t=i.props.dispatch,n=e.name,c=e.brand,r=e.content,a=e.price,s=e.quantity,d=e.id;t({type:S,name:n,brand:c,content:r,price:a,quantity:s,id:d}),t({type:D})},i.handleChangingSelectedKeg=function(e){var t=i.props.masterKegList[e];i.setState({selectedKeg:t})},i.handleEditClick=function(){i.setState({editing:!0})},i.handleDeletingKeg=function(e){(0,i.props.dispatch)({type:E,id:e}),i.setState({selectedKeg:null})},i.handleDecrementClick=function(e){var t=i.props.masterKegList[e];t.quantity>1?(t.quantity-=1,i.setState({selectedKeg:t})):(t.quantity="0 - this keg is empty",i.setState({selectedKeg:t}))},i.handleEditingKegInList=function(e){var t=i.props.dispatch,n=e.name,c=e.brand,r=e.content,a=e.price,s=e.quantity,d=e.id;t({type:S,name:n,brand:c,content:r,price:a,quantity:s,id:d}),i.setState({editing:!1,selectedKeg:null})},i.state={selectedKeg:null,editing:!1},i}return Object(j.a)(n,[{key:"render",value:function(){var e=null,t=null;return this.state.editing?(e=Object(d.jsx)(k,{keg:this.state.selectedKeg,onEditKeg:this.handleEditingKegInList}),t="Return to Beer menu"):null!=this.state.selectedKeg?(e=Object(d.jsx)(y,{keg:this.state.selectedKeg,onClickingDelete:this.handleDeletingKeg,onClickingEdit:this.handleEditClick,onClickDecrement:this.handleDecrementClick}),t="Return to Beer menu"):this.props.formOnPage?(e=Object(d.jsx)(K,{onNewKegCreation:this.handleAddingNewKegToList}),t="Return to list"):(e=Object(d.jsx)(x,{kegList:this.props.masterKegList,onKegSelection:this.handleChangingSelectedKeg}),t="Add Beer"),Object(d.jsxs)(c.a.Fragment,{children:[e,Object(d.jsx)("button",{onClick:this.handleClick,children:t})]})}}]),n}(c.a.Component),L=q=Object(C.b)((function(e){return{masterKegList:e.masterKegList,formOnPage:e.formOnPage}}))(q);n.p;var w=function(){return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)("div",{className:"container"})})};var T=function(){return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(l,{}),Object(d.jsx)(L,{}),Object(d.jsx)(w,{})]})},F=n(8),B=n(2),R=n(11),N=Object(F.b)({formOnPage:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case D:return!e;default:return e}},masterKegList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.name,i=t.brand,c=t.price,r=t.quantity,a=t.content,s=t.id,d=t.type;switch(d){case S:return Object.assign({},e,Object(R.a)({},s,{name:n,brand:i,price:c,quantity:r,content:a,id:s}));case E:var l=Object(B.a)({},e);return delete l[s],l;default:return e}}}),P=Object(F.c)(N);a.a.render(Object(d.jsx)(C.a,{store:P,children:Object(d.jsx)(T,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.84df9d48.chunk.js.map