"use strict";(self.webpackChunk_docsearch_website=self.webpackChunk_docsearch_website||[]).push([[2097],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4959:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(8168),r=(a(6540),a(5680));const o={title:"Required configuration"},i=void 0,l={unversionedId:"required-configuration",id:"version-legacy/required-configuration",title:"Required configuration",description:"This section, empowered by the details about how we build a DocSearch index, gives you the best practices to optimize our crawl. Adopting this following specification is required to let our crawler build the best experience from your website. You will need to update your website and follow these rules.",source:"@site/versioned_docs/version-legacy/required-configuration.md",sourceDirName:".",slug:"/required-configuration",permalink:"/docs/legacy/required-configuration",draft:!1,editUrl:"https://github.com/spader-ai/spader-web/edit/main/packages/website/versioned_docs/version-legacy/required-configuration.md",tags:[],version:"legacy",lastUpdatedBy:"liuf",lastUpdatedAt:1728739082,formattedLastUpdatedAt:"Oct 12, 2024",frontMatter:{title:"Required configuration"},sidebar:"version-legacy/docs",previous:{title:"Behavior",permalink:"/docs/legacy/behavior"},next:{title:"Tips for a good search",permalink:"/docs/legacy/tips"}},s={},c=[{value:"The generic configuration example",id:"the-generic-configuration-example",level:2},{value:"Overview of a clear layout",id:"overview-of-a-clear-layout",level:3},{value:"Use the right classes as selectors",id:"use-the-right-classes-as-selectors",level:3},{value:"Introduce global information as meta tags",id:"introduce-global-information-as-meta-tags",level:2},{value:"Nice to have",id:"nice-to-have",level:2}],p={toc:c},u="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This section, ",(0,r.yg)("a",{parentName:"p",href:"/docs/legacy/how-do-we-build-an-index"},"empowered by the details about how we build a DocSearch index"),", gives you the best practices to optimize our crawl. Adopting this following specification is required to let our crawler build the best experience from your website. You will need to update your website and follow these rules."),(0,r.yg)("p",null,"Note: If your website is generated thanks to one of our supported tools, you do not need to change your website as it is already compliant with our requirements."),(0,r.yg)("h2",{id:"the-generic-configuration-example"},"The generic configuration example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "index_name": "example",\n  "start_urls": ["https://www.example.com/doc/"],\n  "sitemap_urls": ["https://www.example.com/sitemap.xml"],\n  "stop_urls": [],\n  "selectors": {\n    "lvl0": {\n      "selector": ".DocSearch-lvl0",\n      "global": true,\n      "default_value": "Documentation"\n    },\n    "lvl1": {\n      "selector": ".DocSearch-lvl1",\n      "global": true,\n      "default_value": "Chapter"\n    },\n    "lvl2": ".DocSearch-content .DocSearch-lvl2",\n    "lvl3": ".DocSearch-content .DocSearch-lvl3",\n    "lvl4": ".DocSearch-content .DocSearch-lvl4",\n    "lvl5": ".DocSearch-content .DocSearch-lvl5",\n    "lvl6": ".DocSearch-content .DocSearch-lvl6",\n    "text": ".DocSearch-content p, .DocSearch-content li"\n  },\n  "custom_settings": {\n    "attributesForFaceting": ["language", "version"]\n  },\n  "nb_hits": "OUTPUT OF THE CRAWL"\n}\n')),(0,r.yg)("h3",{id:"overview-of-a-clear-layout"},"Overview of a clear layout"),(0,r.yg)("p",null,"A website implementing these best practices will look simple and crystal clear. It can have this following aspect:"),(0,r.yg)("img",{src:"https://docsearch.spader.com/img/assets/recommended-layout.png",alt:"Recommended layout for your page"}),(0,r.yg)("p",null,"The main blue element will be your ",(0,r.yg)("inlineCode",{parentName:"p"},".DocSearch-content")," container. More details in the following guidelines."),(0,r.yg)("h3",{id:"use-the-right-classes-as-selectors"},"Use the right classes as ",(0,r.yg)("a",{parentName:"h3",href:"/docs/legacy/config-file#selectors"},"selectors")),(0,r.yg)("p",null,"You can add some specific static classes to help us find your content role. These classes can not involve any style changes. These dedicated classes will help us to create a great learn-as-you-type experience from your documentation."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Add a static class ",(0,r.yg)("inlineCode",{parentName:"p"},"DocSearch-content")," to the main container of your textual content. Most of the time, this tag is a ",(0,r.yg)("inlineCode",{parentName:"p"},"<main>")," or an ",(0,r.yg)("inlineCode",{parentName:"p"},"<article>")," HTML element.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Every searchable ",(0,r.yg)("inlineCode",{parentName:"p"},"lvl")," element outside this main documentation container (for instance in a sidebar) must be a ",(0,r.yg)("inlineCode",{parentName:"p"},"global")," selector. They will be globally picked up and injected to every record built from your page. Be careful, the level value matters and every matching element must have an increasing level along the HTML flow. A level ",(0,r.yg)("inlineCode",{parentName:"p"},"X")," (for ",(0,r.yg)("inlineCode",{parentName:"p"},"lvlX"),") should appear after a level ",(0,r.yg)("inlineCode",{parentName:"p"},"Y")," while ",(0,r.yg)("inlineCode",{parentName:"p"},"X > Y"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"lvlX")," selectors should use the standard title tags like ",(0,r.yg)("inlineCode",{parentName:"p"},"h1"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"h2"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"h3"),", etc. You can also use static classes. Set a unique ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," attribute to these elements as detailed below.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Every DOM elements matching the ",(0,r.yg)("inlineCode",{parentName:"p"},"lvlX")," selectors must have a unique ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," attribute. This will help the redirection to directly scroll down to the exact place of the matching elements. These attributes define the right anchor to use.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Every textual element (selector ",(0,r.yg)("inlineCode",{parentName:"p"},"text"),") must be wrapped in a ",(0,r.yg)("inlineCode",{parentName:"p"},"<p>")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"<li>")," tag. This content must be atomic and split into small entities. Be careful to never nest one matching element into another one as it will create duplicates.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Stay consistent and do not forget that we need to have some consistency along the HTML flow ",(0,r.yg)("a",{parentName:"p",href:"/docs/legacy/how-do-we-build-an-index"},"as presented here"),"."))),(0,r.yg)("h2",{id:"introduce-global-information-as-meta-tags"},"Introduce global information as meta tags"),(0,r.yg)("p",null,"Our crawler automatically extracts information from our DocSearch specific meta tags:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<meta name="docsearch:language" content="en" />\n<meta name="docsearch:version" content="1.0.0" />\n')),(0,r.yg)("p",null,"The crawl adds the ",(0,r.yg)("inlineCode",{parentName:"p"},"content")," value of these ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," tags to all records extracted from the page. The meta tags ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," must follow the ",(0,r.yg)("inlineCode",{parentName:"p"},"docsearch:$NAME")," pattern. ",(0,r.yg)("inlineCode",{parentName:"p"},"$NAME")," is the name of the attribute set to all records."),(0,r.yg)("p",null,"You can then ",(0,r.yg)("a",{parentName:"p",href:"https://www.spader.com/doc/guides/managing-results/refine-results/faceting/"},"transform these attributes as ",(0,r.yg)("inlineCode",{parentName:"a"},"facetFilters"))," to filter over them from the UI. You will need to set the setting ",(0,r.yg)("inlineCode",{parentName:"p"},"attributesForFaceting")," of the Spader index. You need to submit a PR on your associated configuration via ",(0,r.yg)("a",{parentName:"p",href:"/docs/legacy/config-file#custom_settings-optional"},"the DocSearch ",(0,r.yg)("inlineCode",{parentName:"a"},"custom_settings")," setting"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'"custom_settings": {\n  "attributesForFaceting": ["language", "version"]\n}\n')),(0,r.yg)("p",null,"It enables you to filter on the value of these meta tags. The following example shows how to update the JavaScript snippet to retrieve records from these pages."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'docsearch({\n  [\u2026],\n  spaderOptions: {\n    \'facetFilters\': ["language:en", "version:1.0.0"]\n  },\n  [\u2026],\n});\n')),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"docsearch:version")," meta tag can be a set ",(0,r.yg)("a",{parentName:"p",href:"https://html.spec.whatwg.org/dev/common-microsyntaxes.html#comma-separated-tokens"},"of comma-separated tokens"),", each of which is a version relevant to the page. These tokens must be compliant with ",(0,r.yg)("a",{parentName:"p",href:"https://semver.org/"},"the SemVer specification")," or only contain alphanumeric characters (e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"latest"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"next"),", etc.). As facet filters, these version tokens are case-insensitive."),(0,r.yg)("p",null,"For example, all records extracted from a page with the following meta tag:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<meta name="docsearch:version" content="2.0.0-alpha.62,latest" />\n')),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"version")," attribute of these records will be :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'version:["2.0.0-alpha.62" , "latest"]\n')),(0,r.yg)("h2",{id:"nice-to-have"},"Nice to have"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Your website should have ",(0,r.yg)("a",{parentName:"p",href:"https://www.sitemaps.org/"},"an updated sitemap"),". This is key to let our crawler know what should be updated. Do not worry, we will still crawl your website and discover embedded hyperlinks to find your great content.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Every page needs to have their full context available. Using global elements might help (see above).")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Make sure your documentation content is also available without JavaScript rendering on the client-side. If you absolutely need JavaScript turned on, you need to ",(0,r.yg)("a",{parentName:"p",href:"/docs/legacy/config-file#js_render-optional"},"set ",(0,r.yg)("inlineCode",{parentName:"a"},"js_render: true")," in your configuration"),"."))),(0,r.yg)("p",null,"Any questions? Connect with us on ",(0,r.yg)("a",{parentName:"p",href:"https://alg.li/discord"},"Discord")," or let our ",(0,r.yg)("a",{parentName:"p",href:"https://support.spader.com/"},"support")," team know."))}g.isMDXComponent=!0}}]);