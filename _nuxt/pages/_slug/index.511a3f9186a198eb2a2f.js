webpackJsonp([3],{"00Uv":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'.single-post .entry-header{background:transparent;border-bottom:none}.single-post .entry-header h1{margin-bottom:0}.single-post .entry-content img{max-width:100%;height:auto}.single-post .entry-content a img{border:0}.single-post .entry-content .alignleft{float:left}.single-post .entry-content .alignright{float:right}.single-post .entry-content .aligncenter{display:block;margin-left:auto;margin-right:auto}.single-post .entry-content blockquote{padding:16px;margin:8px 0 24px;border-left:2px solid #87a6bc;color:#4f748e;background:#e9eff3}.single-post .entry-content .wp-caption img{display:block;margin:0}.single-post .entry-content .wp-caption .wp-caption-dd{background:#f3f6f8;color:#4f748e;font-size:14px;line-height:1.7;padding:16px}#comments{position:relative;background-color:#f2f3f5;border-top:1px solid #dddfe2}#comments:before{border-left:7px solid transparent;border-right:7px solid transparent;top:-7px;border-bottom:7px solid #dddfe2;left:29px}#comments:after,#comments:before{position:absolute;content:"";display:inline-block}#comments:after{border-left:6px solid transparent;border-right:6px solid transparent;top:-6px;border-bottom:6px solid #f2f3f5;left:30px}#comments .list-comments li .avatar{height:3em;width:3em;border:1px solid rgba(0,0,0,.12);margin-top:4px;margin-top:.25rem}#comments .list-comments .comment-body{min-height:48px;min-height:3rem;margin-bottom:.5em}#comments .list-comments .comment-body .comment-time{font-size:70%;color:#616770}#comments .list-comments .comment-body .comment-content{display:inline}#comments .list-comments .comment-body .comment-content:after{content:"";display:block;clear:both}#comments .list-comments .comment-body .comment-content img{max-width:100%;clear:both;display:block;margin-left:auto;margin-right:auto}#comments .list-comments .fn,#comments .list-comments .fn a{color:#365899;font-weight:600}#comments .list-comments .says{display:none}#comments .list-comments .view-more-link{color:#365899;font-weight:600;cursor:pointer;text-decoration:none}#comments .children-comments li .avatar{font-size:.75em}#comments .children-comments li:not(.view-more-comment):nth-of-type(n+4){display:none}#comments .children-comments.all-replies li{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}#comments .children-comments.all-replies li.view-more-comment{display:none!important}',""])},EQqF:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{key:t.post.id,staticClass:"post single-post mb-3",attrs:{tag:"article","no-body":""}},[n("b-card-header",{staticClass:"entry-header"},[n("h1",{staticClass:"h2",domProps:{innerHTML:t._s(t.post.title.rendered)}})]),n("b-card-body",[n("div",{staticClass:"entry-content",domProps:{innerHTML:t._s(t.post.content.rendered)}})]),n("b-card-footer",{attrs:{id:"comments"}},[t.post.meta_fields.comments?n("ol",{staticClass:"list-comments list-unstyled"},[t._l(t.comments_paginate,function(e,o){return n("li",{key:o,staticClass:"media"},[n("img",{staticClass:"mr-2 rounded-circle avatar",attrs:{src:"https://i0.wp.com/graph.facebook.com/"+e.id+"/picture?type=square"}}),n("div",{staticClass:"media-body"},[n("div",{staticClass:"comment-body"},[n("b",{staticClass:"fn"},[t._v(t._s(e.name)+" ")]),n("span",{staticClass:"says"},[t._v(" đã viết:")]),n("div",{staticClass:"comment-content",domProps:{innerHTML:t._s(e.comment)}}),n("div",{staticClass:"comment-time"},[n("time",[t._v(t._s(t.timeFormat(e.time)))])])]),e.replies?n("ol",{staticClass:"list-comments children-comments list-unstyled",attrs:{id:"children-"+o}},[t._l(e.replies,function(e,s){return n("li",{key:o+"-"+s,staticClass:"media"},[n("img",{staticClass:"mr-2 rounded-circle avatar",attrs:{src:"https://i0.wp.com/graph.facebook.com/"+e.id+"/picture?type=square"}}),n("div",{staticClass:"media-body"},[n("div",{staticClass:"comment-body"},[n("b",{staticClass:"fn"},[t._v(t._s(e.name)+" ")]),n("span",{staticClass:"says"},[t._v(" đã viết:")]),n("div",{staticClass:"comment-content",domProps:{innerHTML:t._s(e.comment)}}),n("div",{staticClass:"comment-time"},[n("time",[t._v(t._s(t.timeFormat(e.time)))])])])])])}),e.replies.length>3?n("li",{staticClass:"view-more-comment"},[n("a",{staticClass:"view-more-link",attrs:{"data-id":"#children-"+o},on:{click:function(t){t.target.parentNode.parentNode.classList.toggle("all-replies")}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"2 -2 24 24",transform:"rotate(180)",fill:"#4b4f56"}},[n("path",{attrs:{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"}}),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]),t._v(" Xem thêm phản hồi\n              ")])]):t._e()],2):t._e()])])}),t.isLastPage?t._e():n("li",{staticClass:"view-more-comment"},[n("nuxt-link",{staticClass:"view-more-link",attrs:{to:"/",event:""},nativeOn:{click:function(e){e.preventDefault(),t.setCommentPage(e)}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"2 -2 24 24",transform:"rotate(180)",fill:"#4b4f56"}},[n("path",{attrs:{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"}}),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]),t._v(" Xem thêm bình luận\n        ")])],1)],2):n("div",{staticClass:"fb-comments",attrs:{"data-href":t.$route.fullPath,"data-numposts":"15"}})])],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s},FTGG:function(t,e,n){var o=n("00Uv");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("rjj0")("7760dab3",o,!1,{sourceMap:!1})},sVqw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("utu/"),s=n("EQqF"),i=!1;var a=function(t){i||n("FTGG")},r=n("VU/8")(o.a,s.a,!1,a,null,null);r.options.__file="pages/_slug/index.vue",e.default=r.exports},"utu/":function(t,e,n){"use strict";var o=n("Dd8w"),s=n.n(o),i=n("Xxa5"),a=n.n(i),r=n("exGp"),m=n.n(r),c=n("NYxO");e.a={asyncData:function(){var t=m()(a.a.mark(function t(e){e.app;var n=e.store,o=e.params;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.commit("SET_CURRENT_PAGE",1),n.commit("SET_PER_PAGE",15),t.next=4,n.dispatch("getPost",o.slug);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),computed:s()({},Object(c.mapGetters)({post:"getPost",comments_paginate:"getCommentsByPage",isLastPage:"isLastPage"})),methods:{timeFormat:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Date(1e3*t).toLocaleDateString("vi-Vn",{weekday:"long",hour12:!0,hour:"numeric",minute:"numeric"})},setCommentPage:function(t){this.$store.commit("SET_CURRENT_PAGE",this.$store.state.pagination.page+1)}},head:function(){return{title:this.post.title.rendered,meta:[{hid:"description",name:"description",content:this.post.excerpt.rendered},{hid:"og:title",property:"og:title",content:this.post.title.rendered+" • Scott Evans"},{hid:"og:description",property:"og:description",content:this.post.excerpt.rendered},{hid:"og:image",property:"og:image",content:this.post.featured_media_url}]}}}}});