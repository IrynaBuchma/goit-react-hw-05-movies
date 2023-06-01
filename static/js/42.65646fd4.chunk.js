"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[42],{7865:function(e,t,r){r.d(t,{Z:function(){return i}});var n="Container_container__7LqQo",a=r(184);function i(e){var t=e.children;return(0,a.jsx)("div",{className:n,children:t})}},6042:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(9439),a=r(2791),i=r(7689),s=r(1087),o=r(6032),c=r(3285),l=r(6673),u=r(8251),v={movies:"MovieDetailsPage_movies__YmuHJ",about:"MovieDetailsPage_about__FNhtq",overview:"MovieDetailsPage_overview__Cg22i",description:"MovieDetailsPage_description__JSzNh",navigation:"MovieDetailsPage_navigation__SJ9v+",information:"MovieDetailsPage_information__e5SPI",link:"MovieDetailsPage_link__rhdjc",activeLink:"MovieDetailsPage_activeLink__XM0zo",button:"MovieDetailsPage_button__mSHH6",mainTitle:"MovieDetailsPage_mainTitle__SbYRD",title:"MovieDetailsPage_title__63V3V",genre:"MovieDetailsPage_genre__1VQLG",score:"MovieDetailsPage_score__zCRy6"},p=r(7865),d=r(184);function h(){var e=(0,a.useState)(null),t=(0,n.Z)(e,2),r=t[0],h=t[1],m=(0,i.TH)(),f=(0,i.s0)(),g=(0,a.useState)(null),_=(0,n.Z)(g,2),x=_[0],b=_[1],Z=(0,a.useState)(c.Z.IDLE),j=(0,n.Z)(Z,2),w=j[0],D=j[1],N=(0,i.UO)().movieId;(0,a.useEffect)((function(){D(c.Z.PENDING),o.Z.getMovieById(N).then((function(e){h(e),D(c.Z.RESOLVED)})).catch((function(e){console.log(e),b("Something went wrong. Please try again later."),D(c.Z.REJECTED)}))}),[N,x]);return(0,d.jsxs)(p.Z,{children:[(0,d.jsx)("button",{type:"button",onClick:function(){var e,t;return f(null!==(e=null===m||void 0===m||null===(t=m.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},className:v.button,children:"Go back"}),w===c.Z.PENDING&&(0,d.jsx)(l.Z,{}),w===c.Z.REJECTED&&(0,d.jsx)(l.Z,{message:x.message}),w===c.Z.RESOLVED&&(0,d.jsxs)("div",{className:v.movies,children:[(0,d.jsx)("img",{src:r.poster_path?"https://image.tmdb.org/t/p/w500/".concat(r.poster_path):u,alt:r.title,width:"270"}),(0,d.jsxs)("div",{className:v.about,children:[(0,d.jsxs)("h1",{className:v.mainTitle,children:[r.title," "]}),(0,d.jsxs)("p",{className:v.score,children:["User Score: ",10*r.vote_average,"%"]}),(0,d.jsxs)("h3",{className:v.title,children:["Overview",(0,d.jsx)("span",{className:v.description,children:r.overview})]}),r.genres&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h3",{className:v.title,children:"Genres"}),(0,d.jsx)("ul",{className:v.genre,children:r.genres.map((function(e){return(0,d.jsx)("li",{children:e.name},e.id)}))})]})]})]}),(0,d.jsxs)("div",{className:v.navigation,children:[(0,d.jsx)("h2",{className:v.information,children:"Additional Information"}),(0,d.jsx)(s.OL,{to:"cast",state:{from:m},className:v.link,activeclassname:v.activeLink,children:(0,d.jsx)("p",{className:v.cast,children:"Cast"})}),(0,d.jsx)(s.OL,{to:"reviews",state:{from:m},className:v.link,activeclassname:v.activeLink,children:(0,d.jsx)("p",{className:v.reviews,children:"Reviews"})}),(0,d.jsx)(i.j3,{})]})]})}},6032:function(e,t,r){var n=r(5861),a=r(7757),i=r.n(a),s=r(1243);function o(){return(o=(0,n.Z)(i().mark((function e(t){var r,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"trending/movie/day",params:{page:t}},e.next=4,(0,s.Z)(r,t);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function c(){return(c=(0,n.Z)(i().mark((function e(t,r){var n,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={url:"search/movie",params:{query:t,page:r}},e.next=4,(0,s.Z)(n,t,r);case 4:return a=e.sent,o=a.data,e.abrupt("return",o);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(){return(l=(0,n.Z)(i().mark((function e(t){var r,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t)},e.next=4,(0,s.Z)(r,t);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function u(){return(u=(0,n.Z)(i().mark((function e(t){var r,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t,"/credits")},e.next=4,(0,s.Z)(r,t);case 4:return n=e.sent,a=n.data,e.abrupt("return",a.cast);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function v(){return(v=(0,n.Z)(i().mark((function e(t){var r,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t,"/reviews")},e.next=4,(0,s.Z)(r,t);case 4:return n=e.sent,a=n.data,e.abrupt("return",a.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"64838f78e32b0fdbe94ce78a1f5060cb",language:"en-US"};var p={getTrendingMovies:function(e){return o.apply(this,arguments)},getMoviesByKeyWord:function(e,t){return c.apply(this,arguments)},getMovieById:function(e){return l.apply(this,arguments)},getCastInfo:function(e){return u.apply(this,arguments)},getMovieReview:function(e){return v.apply(this,arguments)}};t.Z=p},3285:function(e,t){t.Z={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},8251:function(e,t,r){e.exports=r.p+"static/media/No_image_available.7100ed2c3f8fe4b5077c.jpg"}}]);
//# sourceMappingURL=42.65646fd4.chunk.js.map