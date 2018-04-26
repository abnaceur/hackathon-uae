(function(b){var a=window.AmazonUIPageJS||window.P,f=a._namespace||a.attributeErrors,c=f?f("AmazonGatewayHerotatorJS"):a;c.guardFatal?c.guardFatal(b)(c,window):c.execute(function(){b(c,window)})})(function(b,a,f){b.when("generic-observable").register("gw-herotator-controller",function(a){var b=function(){};return function(h){function n(){t.notifyObservers("delayBegin")}function l(){t.notifyObservers("delayInterrupted")}function p(a){for(var b=0;b<B.length;b++)if(B[b]===a)return b+1}function d(a){a=
a||{};return{delay_complete:a.delay_complete||b,js_ready:a.js_ready||b,fg_loaded:a.fg_loaded||b,mouse_move:a.mouse_move||b,mouse_leave:a.mouse_leave||b,delay_interrupted_timeout:a.delay_interrupted_timeout||b,rotation_complete:a.rotation_complete||b,goto_card:function(a){a!==A&&u.user_navigation(B[a-1])},user_navigation:a.user_navigation||function(a){u=new v(a)},user_interaction:a.user_interaction||function(){u.user_navigation(B[A-1])},stop_autorotation:a.stop_autorotation||function(){u.user_navigation(B[A-
1])},pause:a.pause||b,resume:a.resume||b}}function g(){function a(){!e&&D[b]&&(u=1===z?new x:new r)}n();var b=B[(A-1+1)%z+1-1],e=!0;return new d({fg_loaded:function(e){e===b&&a()},delay_complete:function(){e=!1;a()},mouse_move:function(){u=new m},pause:function(){u=new q}})}function m(){l();return new d({mouse_move:l,mouse_leave:function(){u=new g},delay_interrupted_timeout:function(){u.mouse_leave()},pause:function(){u=new q(!0)}})}function q(a){l();return new d({mouse_move:function(){a=!0;l()},
mouse_leave:function(){a=!1},resume:function(){u=a?new m:0<H?new g:new x}})}function r(){t.notifyObservers("autorotating");A=(A-1+1)%z+1;t.notifyObservers("gotoCard",A);H--;return new d({rotation_complete:function(){u=0<H?new g:new x},mouse_move:function(){u=0<H?new e:new x},pause:function(){u=new f}})}function e(a){var b=!1;return new d({rotation_complete:function(){n();u=b?new q:new m},pause:function(){b=!0},resume:function(){b=!1}})}function f(){var a=!1;return new d({rotation_complete:function(){n();
u=new q(a)},mouse_move:function(){a=!0},mouse_leave:function(){a=!1}})}function v(a){t.notifyObservers("userNavigation");A=p(a);t.notifyObservers("gotoCard",A);return new d({rotation_complete:function(){u=new x},user_navigation:function(a){u=new w(a)},user_interaction:b})}function w(a){return new d({rotation_complete:function(){u=new v(a)},user_navigation:function(b){a=b},user_interaction:b})}function x(){t.notifyObservers("stopAutorotation");return new d({})}h=h||{};var t=new a,u=new function(){function a(){D[C]&&
e&&(t.notifyObservers("ready"),u=new g,q&&u.pause(),m&&u.stop_autorotation())}var e=!1,m=!1,q=!1;return new d({fg_loaded:function(b){b===C&&a()},js_ready:function(){e=!0;a()},user_navigation:b,stop_autorotation:function(){m=!0},pause:function(){q=!0},resume:function(){q=!1}})},B=h.fgIDs||[],z=B.length,C=B[0],A=h.card_num||1,D={},H=h.circular?Infinity:z;return{delayComplete:function(){u.delay_complete()},jsReady:function(){u.js_ready()},fgLoaded:function(a){D[a]=!0;C===a&&t.notifyObservers("atfLoaded");
u.fg_loaded(a)},mouseMove:function(){u.mouse_move()},mouseLeave:function(){u.mouse_leave()},delayInterruptedTimeout:function(){u.delay_interrupted_timeout()},rotationComplete:function(){u.rotation_complete()},gotoCard:function(a){u.goto_card(a)},userInteraction:function(){u.user_interaction()},userNavigation:function(a){u.user_navigation(a)},stopAutorotation:function(){u.stop_autorotation()},pause:function(){u.pause()},resume:function(){u.resume()},addObserver:t.addObserver,removeObserver:t.removeObserver}}});
b.when("herotator-btf").register("herotator",function(a){return a});b.register("herotator-btf",function(){return function(c,k){function h(a){return function(){b.when("gw-desktop-herotator/controller").execute(function(){J[a]()})}}function n(a,b,e){a.addEventListener?a.addEventListener(b,e,!1):a.attachEvent("on"+b,e)}function l(a,g){z[a]=[];var u=g.length;if(0<u)for(var m=0;m<u;m++)(function(u){var m=new Image;m.onload=function(){z[a].splice(e(z[a],m),1);z[a]&&0===z[a].length&&
b.when("gw-desktop-herotator/controller").execute(function(){var b=document.getElementById("gw-ftGr-"+a),e=b.className,e=e.replace(/\s*\ba\-lazy\-loaded\b\s*/,"");b.className=e;J.fgLoaded(a)});b.when("A").execute(function(b){var e=b.$("#gw-ftGr-"+a+" img.a-dynamic-image");b.loadDynamicImage(e)})};z[a].push(m);m.src=g[u].src})(m);else b.when("gw-desktop-herotator/controller").execute(function(){J.fgLoaded(a)})}function p(){B=Date.now()}function d(){D||q()}function g(){G=G?Math.min(G,Date.now()):Date.now();
clearTimeout(t.timeout_id);clearTimeout(g.timeout_id);g.timeout_id=setTimeout(function(){g.timeout_id=0;J.delayInterruptedTimeout()},3E3)}function m(){D=!0}function q(){q.sent||(clearTimeout(q.timeout),q.timeout=setTimeout(function(){r(c.uri,c.data);q.sent=!0},2E3))}function r(a,e){b.when("A").execute(function(b){b.$.ajax(a,{async:!1,cache:!1,type:"post",data:e})})}function e(a,b){if(a.indexOf)return a.indexOf(b);for(var e=0;e<a.length;e++)if(a[e]===b)return e}function f(){return U=U||w()}function v(b){"object"===
typeof a.ue&&"function"===typeof a.ue.count&&a.ue.count(b,(a.ue.count(b)||0)+1)}function w(){var a=L(".a-carousel-rounded-buttons .a-carousel-left,.a-carousel-rounded-buttons .a-carousel-right");L(".a-carousel-rounded-buttons .a-carousel-left").attr("cel_widget_id","gw-desktop-hero-left-cel");L(".a-carousel-rounded-buttons .a-carousel-right").attr("cel_widget_id","gw-desktop-hero-right-cel");L(".a-carousel-rounded-buttons .a-carousel-left").addClass("celwidget");L(".a-carousel-rounded-buttons .a-carousel-right").addClass("celwidget");
L(".a-carousel-rounded-buttons .a-carousel-left").click(function(a){v("gw-desktop-hero-left")});L(".a-carousel-rounded-buttons .a-carousel-right").click(function(a){v("gw-desktop-hero-right")});return{show:function(){a.show();L(".a-carousel-left").css("z-index",10);L(".a-carousel-right").css("z-index",10)},hide:function(){a.hide()}}}function x(){var e=L("#gw-desktop-herotator");e.addClass("gw-desktop-herotator-ready");b.register("herotator-controls",function(){1<e.find(".a-carousel-card").length?
(f().show(),a.GWI&&a.GWI.recordLatency("gwHerotatorActive")):f().hide()})}function t(a){H<G&&(A-=G-H,G=0);H=Date.now();t.timeout_id=setTimeout(function(){A=C;J.delayComplete()},A)}function u(a,b){u.current_card!==b&&(u.current_card=b,F.gotoPage(b),T.notifyObservers("page_changed"));setTimeout(function(){J.rotationComplete()},250)}var B=Date.now(),z={},C=5E3,A=C,D=!1,H=0,G=0,F,L,K=document.getElementById("gw-desktop-herotator").getElementsByTagName("ol")[0],T,J,U;n(K,"click",h("userInteraction"));
n(K,"mouseenter",h("mouseMove"));n(K,"mousemove",h("mouseMove"));n(K,"mouseleave",h("mouseLeave"));n(K,"touchstart",h("userInteraction"));n(K,"touchmove",h("userInteraction"));n(K,"touchend",h("userInteraction"));n(K,"touchcancel",h("userInteraction"));for(var K=document.getElementById("gw-desktop-herotator").getElementsByTagName("li")[0],N=0,O=K.childNodes[N];O&&"div"!==String(O.nodeName).toLowerCase();)N++,O=K.childNodes[N];N=O;K=String(N.id).replace(/^gw-ftGr-/,"");N=N.getElementsByTagName("img");
l(K,N||[]);for(var R=[K],K=0;k[K];)R.push(k[K].fgID),K++;b.when("gw-herotator-controller").execute(function(a){J=new a({fgIDs:R});J.addObserver("atfLoaded",p);J.addObserver("delayBegin",t);J.addObserver("delayInterrupted",g);J.addObserver("gotoCard",u);J.addObserver("userNavigation",d);J.addObserver("stopAutorotation",m);J.addObserver("ready",function(){var a=Date.now()-B;A=Math.max(C-a,1);x();L("#gw-desktop-herotator").addClass("gw-desktop-herotator-ready")});b.register("gw-desktop-herotator/controller");
b.when("generic-observable").register("gw-desktop-herotator",function(a){T=new a;return{getAutorotationDelay:function(){return C},setAutorotationDelay:function(a){a=parseInt(a,10);A=a-(C-A);C=a},stopAutorotation:function(){J.stopAutorotation()},disableNavigation:function(){f().hide();F.pause()},enableNavigation:function(){f().show();F.resume()},pause:function(){J.pause()},resume:function(){J.resume()},addObserver:T.addObserver,removeObserver:T.removeObserver}})});b.when("A","a-carousel-framework",
"gwAjax").execute(function(e,g,u){function m(){var b=0;for(a.GWI&&a.GWI.recordLatency("gw-hero-btf-populate");k[b];){var e=k[b].fgID,g=k[b].content,u=document.getElementById("gw-ftGr-"+e);L(u).html(g);g=u.getElementsByTagName("img");l(e,g);b++}}L=e.$;g.onInit("gateway-desktop-layout.herotator",function(){var a=e.$("#gw-desktop-herotator > .a-carousel-container");F=g.getCarousel(a);F.onChange("pageNumber",function(){var a=F.getAttr("pageNumber");J.gotoCard(a);a-=2;k[a]&&k[a].callbackUrl&&(u(k[a].callbackUrl,
{type:"POST",id:"desktop-herotator-btf-"+k[a].fgID}),delete k[a].callbackUrl)});m();b.when("gw-desktop-herotator").register("gw-desktop-herotator/dom-ready");b.when("gw-desktop-herotator/controller","gw-desktop-herotator").execute(function(){J.jsReady()})})})}})});