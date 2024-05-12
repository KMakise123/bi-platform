(window.webpackJsonp=window.webpackJsonp||[]).push([[2,17,21,23],{248:function(t,e,s){},249:function(t,e,s){"use strict";s.r(e);var i={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},a=(s(252),s(4)),n=Object(a.a)(i,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=n.exports},250:function(t,e,s){"use strict";s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return u})),s.d(e,"f",(function(){return d})),s.d(e,"d",(function(){return p})),s.d(e,"a",(function(){return f})),s.d(e,"e",(function(){return b}));s(46);const i=/#.*$/,a=/\.(md|html)$/,n=/\/$/,r=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(a,"")}function l(t){return r.test(t)}function c(t){if(l(t))return t;const e=t.match(i),s=e?e[0]:"",a=o(t);return n.test(a)?t:a+".html"+s}function u(t,e){const s=decodeURIComponent(t.hash),a=function(t){const e=t.match(i);if(e)return e[0]}(e);if(a&&s!==a)return!1;return o(t.path)===o(e)}function h(t,e,s){if(l(e))return{type:"external",path:e};s&&(e=function(t,e,s){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const a=e.split("/");s&&a[a.length-1]||a.pop();const n=t.replace(/^\//,"").split("/");for(let t=0;t<n.length;t++){const e=n[t];".."===e?a.pop():"."!==e&&a.push(e)}""!==a[0]&&a.unshift("");return a.join("/")}(e,s));const i=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:c(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,s,i){const{pages:a,themeConfig:n}=s,r=i&&n.locales&&n.locales[i]||n;if("auto"===(t.frontmatter.sidebar||r.sidebar||n.sidebar))return p(t);const o=r.sidebar||n.sidebar;if(o){const{base:s,config:i}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(s=t,/(\.html|\/)$/.test(s)?s:s+"/").indexOf(encodeURI(i)))return{base:i,config:e[i]};var s;return{}}(e,o);return"auto"===i?p(t):i?i.map(t=>function t(e,s,i,a=1){if("string"==typeof e)return h(s,e,i);if(Array.isArray(e))return Object.assign(h(s,e[0],i),{title:e[1]});{const n=e.children||[];return 0===n.length&&e.path?Object.assign(h(s,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:n.map(e=>t(e,s,i,a+1)),collapsable:!1!==e.collapsable}}}(t,a,s)):[]}return[]}function p(t){const e=f(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function f(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function b(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},252:function(t,e,s){"use strict";s(248)},253:function(t,e,s){},254:function(t,e,s){},255:function(t,e,s){"use strict";s(253)},256:function(t,e,s){},258:function(t,e,s){"use strict";s.r(e);var i=s(251),a=s(249),n=s(94),r=s.n(n),o={name:"DropdownLink",components:{NavLink:i.default,DropdownTransition:a.default},props:{item:{required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},isLastItemOfArray:(t,e)=>r()(e)===t,handleDropdown(){0===event.detail&&this.setOpen(!this.open)}}},l=(s(255),s(4)),c=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow down"})]),t._v(" "),e("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(s,i){return e("li",{key:s.link||i,staticClass:"dropdown-item"},["links"===s.type?e("h4",[t._v("\n          "+t._s(s.text)+"\n        ")]):t._e(),t._v(" "),"links"===s.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(s.items,(function(i){return e("li",{key:i.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:i},on:{focusout:function(e){t.isLastItemOfArray(i,s.items)&&t.isLastItemOfArray(s,t.item.items)&&t.setOpen(!1)}}})],1)})),0):e("NavLink",{attrs:{item:s},on:{focusout:function(e){t.isLastItemOfArray(s,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=c.exports},259:function(t,e,s){"use strict";s.r(e);var i=s(258),a=s(250),n={name:"NavLinks",components:{NavLink:s(251).default,DropdownLink:i.default},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,s=this.$router.options.routes,i=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(a=>{const n=t[a],r=i[a]&&i[a].label||n.lang;let o;return n.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,a),s.some(t=>t.path===o)||(o=a)),{text:r,link:o}})};return[...this.userNav,a]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(a.e)(t),{items:(t.items||[]).map(a.e)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let s=0;s<e.length;s++){const i=e[s];if(new RegExp(i,"i").test(t))return i}return"Source"}}},r=(s(260),s(4)),o=Object(r.a)(n,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n      "+t._s(t.repoLabel)+"\n      "),e("OutboundLink")],1):t._e()]):t._e()}),[],!1,null,null,null);e.default=o.exports},260:function(t,e,s){"use strict";s(254)},266:function(t,e,s){"use strict";s(256)},269:function(t,e,s){"use strict";s.r(e);var i=s(250);function a(t,e,s,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"toc-sidebar-link":!0}},s)}function n(t,e,s,r,o,l=1){return!e||l>o?null:t("ul",{class:"toc-sidebar-sub-headers"},e.map(e=>{const c=Object(i.c)(r,s+"#"+e.slug);let u="toc-sidebar-sub-header";return e.level<=3?u+=c?" active":"":e.level>3&&e.level<=6&&(u+=" toc-sidebar-depth-"+e.level),t("li",{class:u},[a(t,s+"#"+e.slug,e.title,c),n(t,e.children,s,r,o,l+1)])}))}var r={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:s,$route:r,$themeConfig:o,$themeLocaleConfig:l},props:{item:c,sidebarDepth:u}}){const h=Object(i.c)(r,c.path),d="auto"===c.type?h||c.children.some(t=>Object(i.c)(r,c.basePath+"#"+t.slug)):h,p="external"===c.type?function(t,e,s){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"toc-sidebar-link":!0}},[s,t("OutboundLink")])}(t,c.path,c.title||c.path):a(t,c.path,c.title||c.path,d),f=[e.frontmatter.sidebarDepth,u,l.sidebarDepth,o.sidebarDepth,1].find(t=>void 0!==t),b=l.displayAllHeaders||o.displayAllHeaders;if("auto"===c.type)return[p,n(t,c.children,c.basePath,r,f)];if((d||b)&&c.headers&&!i.b.test(c.path)){return[p,n(t,Object(i.a)(c.headers),c.path,r,f)]}return p}},o=(s(266),s(4)),l=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.default=l.exports},274:function(t,e,s){},278:function(t,e,s){},281:function(t,e,s){},285:function(t,e,s){"use strict";s.r(e);var i=s(269),a=s(249),n=s(250);function r(t,e){return"group"===e.type&&e.children.some(e=>"group"===e.type?r(t,e):"page"===e.type&&Object(n.c)(t,e.path))}var o={name:"PageSidebarToc",components:{PageSidebarTocLink:i.default,DropdownTransition:a.default},props:["items","depth","sidebarDepth"],data:()=>({openGroupIndex:0}),created(){this.refreshIndex()},watch:{$route(){this.refreshIndex()}},methods:{refreshIndex(){const t=function(t,e){for(let s=0;s<e.length;s++){const i=e[s];if(r(t,i))return s}return-1}(this.$route,this.items[0].children);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(n.c)(this.$route,t.regularPath)}}},l=s(4),c=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("DropdownTransition",[t.items[0].children.length?e("ul",{staticClass:"toc-sidebar-links"},t._l(t.items[0].children,(function(s,i){return e("li",{key:i},[e("PageSidebarTocLink",{attrs:{sidebarDepth:t.sidebarDepth,item:s}})],1)})),0):t._e()])}),[],!1,null,null,null);e.default=c.exports},290:function(t,e,s){"use strict";s(274)},291:function(t,e,s){"use strict";s(278)},293:function(t,e,s){"use strict";s(281)},302:function(t,e,s){"use strict";s.r(e);var i=s(288),a=s(294),n=s(286),r=s(259);function o(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={name:"Navbar",components:{SidebarButton:n.default,NavLinks:r.default,SearchBox:a.a,AlgoliaSearchBox:i.a},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(o(this.$el,"paddingLeft"))+parseInt(o(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},c=(s(290),s(4)),u=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.default=u.exports},303:function(t,e,s){"use strict";s.r(e);var i=s(283),a=s(284),n=s(285),r={components:{PageEdit:i.default,PageNav:a.default,PageSidebarToc:n.default},props:["sidebarItems","pageSidebarItems"],mounted(){console.log(this.$site,this,"this.$site")}},o=(s(291),s(4)),l=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"page"},[t._t("top"),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticStyle:{width:"100%"}},[e("Content",{staticClass:"theme-default-content custom-content"}),t._v(" "),e("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1))],1),t._v(" "),e("div",{ref:"tocc",staticClass:"toc-container-sidebar"},[e("div",{staticClass:"pos-box"},[e("div",{staticClass:"icon-arrow"}),t._v(" "),e("div",{staticClass:"scroll-box",staticStyle:{"max-height":"86vh"}},[e("div",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.pageSidebarItems[0].title))]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"toc-box"},[e("PageSidebarToc",{attrs:{depth:0,items:t.pageSidebarItems,sidebarDepth:6}})],1)])])])]),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=l.exports},305:function(t,e,s){"use strict";s.r(e);s(46);var i={name:"PageSidebar",data:()=>({list:[]}),components:{NavLinks:s(259).default},props:["pageSidebarItems","sidebarItems"],computed:{},mounted(){this.list=this.$site.themeConfig.extraSideBar},methods:{showToc(t){t.currentTarget.className="option-box on"},hideToc(t){t.currentTarget.className="option-box"},showTocOver(t){t.currentTarget.className="option-box-toc-over on"},hideTocOver(t){t.currentTarget.className="option-box-toc-over"}}},a=(s(293),s(4)),n=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("aside",{staticClass:"page-sidebar"},[t._t("top"),t._v(" "),e("div",{staticClass:"page-side-toolbar"},t._l(t.list,(function(s,i){return e("div",{key:i,staticClass:"option-box",on:{mouseover:function(e){return t.showToc(e)},mouseout:function(e){return t.hideToc(e)}}},[e("img",{staticClass:"nozoom",attrs:{src:s.icon,width:"24px"}}),t._v(" "),e("span",{staticClass:"show-txt",domProps:{innerHTML:t._s(s.title)}}),t._v(" "),e("div",{staticClass:"toc-container"},[e("div",{staticClass:"pos-box"},[e("div",{staticClass:"icon-arrow"}),t._v(" "),e("div",{staticClass:"scroll-box",staticStyle:{"text-align":"center"}},[e("span",{domProps:{innerHTML:t._s(s.popoverTitle)}}),t._v(" "),e("img",{staticStyle:{margin:"10px"},attrs:{src:s.popoverUrl,height:"180px"}}),t._v(" "),e("span",{domProps:{innerHTML:t._s(s.popoverDesc)}})])])])])})),0),t._v(" "),t._t("middle"),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=n.exports},321:function(t,e,s){"use strict";s.r(e);var i=s(301),a=s(302),n=s(303),r=s(304),o=s(305),l=s(250),c={components:{Home:i.default,Page:n.default,Sidebar:r.default,Navbar:a.default,PageSidebar:o.default},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},shouldShowPageSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.pageSidebarItems.length},sidebarItems(){return Object(l.f)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageSidebarItems(){return Object(l.d)(this.$page)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},u=s(4),h=Object(u.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems,"page-sidebar-items":t.pageSidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.shouldShowPageSidebar?e("PageSidebar",{attrs:{"page-sidebar-items":t.pageSidebarItems,"sidebar-items":t.sidebarItems}},[t._t("page-sidebar-top"),t._v(" "),t._t("page-sidebar-bottom")],2):t._e()],1)}),[],!1,null,null,null);e.default=h.exports}}]);