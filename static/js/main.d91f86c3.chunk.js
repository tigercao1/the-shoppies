(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),s=n.n(a),r=n(22),c=n.n(r),o=(n(32),n(11)),u=n(23),l=n(4),d=(n(33),n(5)),h=n(6),p=n(3),m=n(8),j=n(7),b=n(24),f=n.n(b),O=(n(36),function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).handleInput=function(e){i.props.setLoadingState(!0),i.props.initSearch(),i.searchByTitle({title:e.target.value.trim()})},i.handleInput=i.handleInput.bind(Object(p.a)(i)),i.searchByTitle=i.searchByTitle.bind(Object(p.a)(i)),i.searchByTitle=f.a.debounce(i.searchByTitle,500),i}return Object(h.a)(n,[{key:"searchByTitle",value:function(e){this.props.searchByTitle(e)}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"search-bar",children:[Object(i.jsx)("p",{children:"Movie Title"}),Object(i.jsx)("input",{type:"text",id:"search-field",placeholder:"Search...",autoComplete:"off",onChange:this.handleInput})]})}}]),n}(a.Component)),v=(n(37),n(38),function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),s=n[0],r=n[1];Object(a.useEffect)((function(){r(e.isNominated)}),[e.isNominated]);return Object(i.jsxs)("div",{className:"result-list-item",children:[Object(i.jsxs)("div",{className:"title",children:[e.title," (",e.year,")"]}),Object(i.jsx)("button",{disabled:s,onClick:function(){e.handleNomination({title:e.title,year:e.year,id:e.id})},children:"Nominate"})]})}),g=(n(39),function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={currPage:i.props.currPage},i.updatePageNum=i.updatePageNum.bind(Object(p.a)(i)),i.prevPage=i.prevPage.bind(Object(p.a)(i)),i.nextPage=i.nextPage.bind(Object(p.a)(i)),i}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(e){e.currPage!==this.props.currPage&&this.setState({currPage:this.props.currPage})}},{key:"updatePageNum",value:function(e){var t=parseInt(e.target.value);this.props.updatePageNum(t)}},{key:"prevPage",value:function(){this.props.updatePageNum(this.state.currPage-1)}},{key:"nextPage",value:function(){this.props.updatePageNum(this.state.currPage+1)}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"page-bar",children:[Object(i.jsx)("button",{className:"page-button",disabled:null===this.props.numOfPages||1===this.state.currPage,onClick:this.prevPage,children:"Prev"}),this.props.numOfPages?Object(i.jsxs)("div",{className:"page-num",children:[Object(i.jsx)("select",{className:"page-num-selection",onChange:this.updatePageNum,value:this.state.currPage,children:Array.from(Array(this.props.numOfPages),(function(e,t){return Object(i.jsx)("option",{value:t+1,children:t+1},t+1)}))}),Object(i.jsxs)("span",{children:[" / ",this.props.numOfPages]})]}):Object(i.jsx)("div",{}),Object(i.jsx)("button",{className:"page-button",disabled:null===this.props.numOfPages||this.state.currPage===this.props.numOfPages,onClick:this.nextPage,children:"Next"})]})}}]),n}(a.Component)),N=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={movies:i.props.movieData||null,isLoading:i.props.isLoading,didFinishNominate:i.props.didFinishNominate},i.updatePageNum=i.updatePageNum.bind(Object(p.a)(i)),i.handleNomination=i.handleNomination.bind(Object(p.a)(i)),i}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(e){e.movieData!==this.props.movieData&&this.setState({movies:this.props.movieData}),e.isLoading!==this.props.isLoading&&this.setState({isLoading:this.props.isLoading}),e.didFinishNominate!==this.props.didFinishNominate&&this.setState({didFinishNominate:this.props.didFinishNominate})}},{key:"updatePageNum",value:function(e){this.props.updatePageNum(e)}},{key:"handleNomination",value:function(e){this.props.handleNomination(e)}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"result-list",children:[Object(i.jsx)("p",{children:"Search results"}),this.state.isLoading?Object(i.jsx)("div",{className:"placeholder",children:Object(i.jsx)("div",{className:"loader"})}):this.state.movies&&"Incorrect IMDb ID."!==this.state.movies?Array.isArray(this.state.movies)?Object(i.jsx)("div",{className:"list-body",children:this.state.movies.map((function(t,n){return Object(i.jsx)(v,{title:t.title,year:t.year,id:t.id,isNominated:!!e.state.didFinishNominate||t.isNominated,handleNomination:e.handleNomination},n)}))}):Object(i.jsx)("div",{className:"placeholder",children:this.state.movies}):Object(i.jsx)("div",{className:"placeholder",children:"Search something"}),Object(i.jsx)(g,{updatePageNum:this.updatePageNum,numOfPages:this.props.numOfPages,currPage:this.props.currPage})]})}}]),n}(a.Component),y=n(13),P=n.n(y),x=n(25),S="812bf1e0",k="http://www.omdbapi.com/",T=n(26),I=n.n(T).a.create({baseURL:k,responseType:"json",timeout:5e3}),B=function(){function e(){Object(d.a)(this,e),this.params={apiKey:S},this.searchByTitle=this.searchByTitle.bind(this)}return Object(h.a)(e,[{key:"searchByTitle",value:function(){var e=Object(x.a)(P.a.mark((function e(t){var n,i;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={apiKey:this.params.apiKey},t.title&&(n.s=t.title,n.type="movie",t.page&&(n.page=t.page)),e.next=4,I.get("/",{params:n});case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),C=(n(59),n(60),function(e){return Object(i.jsxs)("div",{className:"result-list-item",children:[Object(i.jsxs)("div",{className:"title",children:[e.title," (",e.year,")"]}),Object(i.jsx)("button",{onClick:function(){e.onRemove(e.id)},children:"Remove"})]})}),D=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={nominations:i.props.nominations||[]},i}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(e){e.nominations.length!==this.props.nominations.length&&this.setState({nominations:this.props.nominations})}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"nominations",children:[Object(i.jsx)("p",{children:"Nominations"}),this.state.nominations.length>0?this.state.nominations.map((function(t,n){return Object(i.jsx)(C,{title:t.title,year:t.year,id:t.id,onRemove:e.props.onRemove},n)})):Object(i.jsx)("div",{className:"placeholder",children:"Nominate your favorite movies"})]})}}]),n}(a.Component);var L=function(){var e=new B,t=Object(a.useState)(!1),n=Object(l.a)(t,2),s=n[0],r=n[1],c=Object(a.useState)(!1),d=Object(l.a)(c,2),h=d[0],p=d[1],m=Object(a.useState)(null),j=Object(l.a)(m,2),b=j[0],f=j[1],v=Object(a.useState)(null),g=Object(l.a)(v,2),y=g[0],P=g[1],x=Object(a.useState)(""),S=Object(l.a)(x,2),k=S[0],T=S[1],I=Object(a.useState)((function(){var e=JSON.parse(localStorage.getItem("nominations"))||[];return e.length>=5&&r(!0),e})),C=Object(l.a)(I,2),L=C[0],F=C[1],w=Object(a.useState)(1),R=Object(l.a)(w,2),A=R[0],E=R[1],J=Object(a.useState)(!1),M=Object(l.a)(J,2),U=M[0],K=M[1],Y=function(e){return L.filter((function(t){return t.id===e})).length>0};Object(a.useEffect)((function(){L.length>=5?(r(!0),K(!0)):(K(!1),r(!1)),G(L)}),[L]);var q=function(t){t?(T(t.title),e.searchByTitle(t).then((function(e){if(e.data){var t=e.data;"True"===t.Response?(f(function(e){var t=[];if(e){var n,i=Object(u.a)(e);try{for(i.s();!(n=i.n()).done;){var a=n.value,s=Y(a.imdbID);t.push({title:a.Title,year:a.Year,id:a.imdbID,isNominated:s})}}catch(r){i.e(r)}finally{i.f()}}return t}(t.Search)),function(e){if(e&&!isNaN(e)){var t=parseInt(e),n=Math.ceil(t/10);P(n)}}(t.totalResults)):(console.log(t.Error),f(t.Error))}})).catch((function(e){e.response&&z(e.response.data)})).finally((function(){p(!1)}))):(f(null),p(!1))},z=function(e){console.log(e)},G=function(e){localStorage.setItem("nominations",JSON.stringify(e))};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("div",{className:"title-bar",children:"The Shoppies"}),Object(i.jsx)(O,{searchByTitle:q,setLoadingState:function(e){p(e)},initSearch:function(){P(null),f(null),E(1)}}),Object(i.jsxs)("div",{className:"app-body",children:[Object(i.jsx)(N,{movieData:b,isLoading:h,numOfPages:y,updatePageNum:function(e){var t={title:k,page:e};E(e),q(t)},handleNomination:function(e){if(L.length<5){F((function(t){return[].concat(Object(o.a)(t),[e])}));var t=Object(o.a)(b);for(var n in t)t[n].id===e.id&&(t[n].isNominated=!0);f(t)}},didFinishNominate:s,currPage:A}),Object(i.jsx)(D,{nominations:L,onRemove:function(e){var t=L.filter((function(t){return t.id!==e}));if(F(t),Array.isArray(b)){var n=Object(o.a)(b);for(var i in n)n[i].id===e&&(n[i].isNominated=!1);f(n)}}})]}),U?Object(i.jsx)("div",{className:"snackbar",children:"You had finished nominating your favorite movies!"}):""]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),s(e),r(e)}))};c.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(L,{})}),document.getElementById("root")),F()}},[[61,1,2]]]);
//# sourceMappingURL=main.d91f86c3.chunk.js.map