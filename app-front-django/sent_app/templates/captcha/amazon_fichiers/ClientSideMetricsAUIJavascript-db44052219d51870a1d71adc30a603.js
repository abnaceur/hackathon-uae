(function(f,c,A){function n(h){for(var e={},k,a,w=0;w<h.length;w++)a=h[w],k=a.r+a.s+a.m,a.c&&(e[k]||(e[k]=[]),e[k].push(h[w]));return e}function v(h){for(var e=1;e<arguments.length;e++){var k=arguments[e];try{if(k.isSupported)return k.send(h)}catch(a){}}}function g(){if(b.length){for(var h=0;h<y.length;h++)y[h]();a._flhs+=1;l();v(n(b.splice(0,b.length)),t,H,F)}L=E=0}function l(){p&&m({k:"chk",f:a._flhs,l:a._lpn,s:"full"},"csm")}function m(h,e,k){k=k||{};!f.ue_furl||0===k.bf&&a.isBF||(h={r:k.r||a.rid,
s:k.s||f.ue_sid,m:k.m||f.ue_mid,mkt:k.mkt||f.ue_mkt,sn:k.sn||f.ue_sn,c:e,d:h,t:k.t||a.d(),cs:k.c&&f.ue_qsl},a._lpn[e]=(a._lpn[e]||0)+1,k.b?v(n([h]),t,F):k.nb?v(n([h]),t,H,F):k.img||P[e]?v(n([h]),F):k.ff?(b.push(h),g()):k.n?(b.push(h),0===M?g():L||(L=c.setTimeout(g,M))):(b.push(h),E||(E=c.setTimeout(g,J))))}function x(h,e,k){K++;K==C&&m({m:"Max number of Forester Logs exceeded",f:"forester-client.js",logLevel:"ERROR"},c.ue_err_chan||"jserr");(K<C||k&&k.il)&&m(h,e,k)}function D(){if(!N){for(var h=0;h<
q.length;h++)q[h]();for(h=0;h<y.length;h++)y[h]();a._flhs+=1;l();v(n(b.splice(0,b.length)),t,F);N=!0}}var z={};(function(){function h(e){return 10>e?"0"+e:e}function e(e){a.lastIndex=0;return a.test(e)?'"'+e.replace(a,function(e){var k=b[e];return"string"===typeof k?k:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function k(h,a){var b,T,r,t,Q=w,U,c=a[h];c&&"object"===typeof c&&"function"===typeof c.toJSON&&(c=c.toJSON(h));"function"===typeof f&&(c=f.call(a,h,c));switch(typeof c){case "string":return e(c);
case "number":return isFinite(c)?String(c):"null";case "boolean":case "null":return String(c);case "object":if(!c)return"null";w+=d;U=[];if("[object Array]"===Object.prototype.toString.apply(c)){t=c.length;for(b=0;b<t;b+=1)U[b]=k(b,c)||"null";r=0===U.length?"[]":w?"[\n"+w+U.join(",\n"+w)+"\n"+Q+"]":"["+U.join(",")+"]";w=Q;return r}if(f&&"object"===typeof f)for(t=f.length,b=0;b<t;b+=1)"string"===typeof f[b]&&(T=f[b],(r=k(T,c))&&U.push(e(T)+(w?": ":":")+r));else for(T in c)Object.prototype.hasOwnProperty.call(c,
T)&&(r=k(T,c))&&U.push(e(T)+(w?": ":":")+r);r=0===U.length?"{}":w?"{\n"+w+U.join(",\n"+w)+"\n"+Q+"}":"{"+U.join(",")+"}";w=Q;return r}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+h(this.getUTCMonth()+1)+"-"+h(this.getUTCDate())+"T"+h(this.getUTCHours())+":"+h(this.getUTCMinutes())+":"+h(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});
var a=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,w,d,b={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},f;"function"!==typeof z.stringify&&(z.stringify=function(e,h,a){var b;d=w="";if("number"===typeof a)for(b=0;b<a;b+=1)d+=" ";else"string"===typeof a&&(d=a);if((f=h)&&"function"!==typeof h&&("object"!==typeof h||"number"!==typeof h.length))throw Error("JSON.stringify");return k("",{"":e})})})();
var u=function(){function h(e,k){if(null==e)return k.push("!n");if("number"===typeof e)return k.push("!"+e);if("string"===typeof e)return"\\"==e[e.length-1]?k.push("'"+e.replace(/'/g,"\\'")+"u005C'"):k.push("'"+e.replace(/'/g,"\\'")+"'");if("boolean"===typeof e)return k.push(e?"!t":"!f");if(e instanceof Array){k.push("*");for(var a=0;a<e.length;a++)h(e[a],k);return k.push(")")}if("object"==typeof e){k.push("(");for(a in e)e.hasOwnProperty(a)&&(k.push(a),h(e[a],k));return k.push(")")}return k.push("!n")}
return{stringify:function(e){var k=[];h(e,k);return k.join("")}}}(),O=f.ue_qsl||2E3,C=1E3,p=1===window.ue_ddq,B=function(){},G=c.JSON&&c.JSON.stringify||z&&z.stringify,d=u.stringify,a=f.ue||{},u=f.uet||B;(f.uet||B)("bb","ue_frst_v2",{wb:1});var r="//"+f.ue_furl+"/1/batch/1/OE/",b=[],q=[],y=[],N=!1,L,E,M=void 0===f.ue_hpfi?1E3:f.ue_hpfi,J=void 0===f.ue_lpfi?1E4:f.ue_lpfi,P={"scheduled-delivery":1},K=0,H=function(){function h(){if(c.XDomainRequest){var e=new XDomainRequest;e.onerror=B;e.ontimeout=B;
e.onprogress=B;e.onload=B;e.timeout=0;return e}if(c.XMLHttpRequest){e=new XMLHttpRequest;if(!("withCredentials"in e))throw"";return e}if(c.ActiveXObject){for(var k=0;k<d.length&&!e;k++)try{e=new ActiveXObject(d[k]),d=[d[k]]}catch(h){}return e}}function e(e){for(var k=[],h=e[0]||{},d=0;d<e.length;d++){var b={};b[e[d].c]=e[d].d;k.push(b)}return{rid:h.r||a.rid,sid:h.s||f.ue_sid,mid:h.m||f.ue_mid,mkt:h.mkt||f.ue_mkt,sn:h.sn||f.ue_sn,reqs:k}}function k(k){var a=e(k),d=h();if(!d)throw"";d.onerror=function(){for(var e=
0;e<k.length;e++)b.push(k[e]);H.isSupported=!1};d.open("POST",r,!0);d.setRequestHeader&&d.setRequestHeader("Content-type","text/plain");d.send(G(a))}var d="MSXML2.XMLHTTP.6.0 MSXML2.XMLHTTP.5.0 MSXML2.XMLHTTP.4.0 MSXML2.XMLHTTP.3.0 MSXML2.XMLHTTP Microsoft.XMLHTTP".split(" ");return{send:function(e){for(var h in e)e.hasOwnProperty(h)&&e[h].length&&k(e[h])},buildPOSTBodyLog:e,isSupported:!0}}(),F=function(){return{send:function(h){for(var e in h)if(h.hasOwnProperty(e)){for(var k=h[e],b=k,w={},I=void 0,
t=0;t<b.length;t++)I=b[t].c,w[I]||(w[I]=[]),w[I].push(b[t]);var k=k[0]||{},b=k.sn||f.ue_sn,k=r+(k.m||f.ue_mid)+":"+(k.s||f.ue_sid)+":"+(k.r||a.rid)+(b?":"+b:""),b=[],I=k,t=[],c=void 0;for(c in w)if(w.hasOwnProperty(c))for(var S=0;S<w[c].length;S++){var q=w[c][S],y=encodeURIComponent((q.cs?d:G)(q.d));t.push({l:y,t:q.t,p:1,c:c,d:q.cs?"c":"j"})}w=t;t=void 0;c="$";for(q=0;q<w.length;){S=w[q];t!=S.c?(I+=c+S.c+"=",c="&",t=S.c):I+=",";var y=I,m=S.d+":",g=S,I=(g.l.match(".{1,"+(O-I.length)+"}[^%]{0,2}")||
[])[0]||"";g.l=g.l.substr(I.length);I=y+(m+I+":"+S.t);if(S.l)I+=":"+S.p++ +"_",b.push(I),I=k,c="$",t=0;else if(q++,1!=S.p)for(I+=":"+S.p+"_"+S.p,y=0;y<S.p-1;y++)b[b.length-y-1]+=S.p}b.push(I);k=b;for(b=0;b<k.length;b++)(new Image).src=k[b]}},isSupported:!0}}(),t=function(){return{send:function(h){for(var e in h)if(h.hasOwnProperty(e)){var k=H.buildPOSTBodyLog(h[e]);if(!navigator.sendBeacon(r,G(k)))throw"";}},isSupported:!!navigator.sendBeacon}}();a._fic=F;a._fac=H;a._fbc=t;a._flq=b;a.sid=a.sid||f.ue_sid;
a.mid=a.mid||f.ue_mid;a.furl=a.furl||f.ue_furl;a.sn=a.sn||f.ue_sn;a.isBF=function(){var h=c.performance||c.webkitPerformance,e=A.ue_backdetect&&A.ue_backdetect.ue_back&&document.ue_backdetect.ue_back.value,k=a.bfini;return h&&h.navigation&&2===h.navigation.type||1<k||!k&&1<e}();a._flhs=a._flhs||0;a._lpn=a._lpn||{};try{c.amznJQ&&c.amznJQ.declareAvailable&&c.amznJQ.declareAvailable("forester-client"),c.P&&c.P.register&&c.P.register("forester-client",B)}catch(R){f.ueLogError(R,{logLevel:"WARN"})}(function(){a.log&&
a.log.isStub&&(a.log.replay(function(h,e,k){var a=h[2]||{};a.t=e;a.r=k;a.n=1;x(h[0],h[1],a)}),a.onunload.replay(function(h){q.push(h[0])}),a.onflush.replay(function(h){y.push(h[0])}))})();a.log=x;a.log.reset=function(){K=0};a.onunload=function(h){q.push(h)};a.onflush=function(h){y.push(h)};a.attach("beforeunload",D);a.attach("pagehide",D);u("ld","ue_frst_v2",{wb:1})})(ue_csm,window,document);
(function(f,c){function A(d){if(d)return d.replace(/^\s+|\s+$/g,"")}function n(d,a){if(!d)return{};var r="INFO"===a.logLevel;d.m&&d.m.message&&(d=d.m);var b=a.m||a.message||"",b=d.m&&d.m.message?b+d.m.message:d.m&&d.m.target&&d.m.target.tagName?b+("Error handler invoked by "+d.m.target.tagName+" tag"):d.m?b+d.m:d.message?b+d.message:b+"Unknown error",b={m:b,name:d.name,type:d.type,csm:O+" "+(d.fromOnError?"onerror":"ueLogError")},c,y,g=0,m;b.logLevel=a.logLevel||x;a.adb&&(b.adb=a.adb);if(c=a.attribution)b.attribution=
""+c;if(!r){b.pageURL=a.pageURL||""+(window.location?window.location.href:"")||"missing";b.f=d.f||d.sourceURL||d.fileName||d.filename||d.m&&d.m.target&&d.m.target.src;b.l=d.l||d.line||d.lineno||d.lineNumber;b.c=d.c?""+d.c:d.c;b.s=[];b.t=f.ue.d();if((r=d.stack||(d.err?d.err.stack:""))&&r.split)for(b.csm+=" stack",c=r.split("\n");g<c.length&&b.s.length<C;)(r=c[g++])&&b.s.push(A(r));else for(b.csm+=" callee",y=v(d.args||arguments,"callee"),c=g=0;y&&g<C;)m=p,y.skipTrace||(r=y.toString())&&r.substr&&(m=
0===c?4*p:m,m=1==c?2*p:m,b.s.push(r.substr(0,m)),c++),y=v(y,"caller"),g++;if(!b.f&&0<b.s.length&&(g=b)&&g.s){var l,r=0<g.s.length?g.s[0]:"";c=1<g.s.length?g.s[1]:"";r&&(l=r.match(G));l&&3==l.length||!c||(l=c.match(B));l&&3==l.length&&(g.f=l[1],g.l=l[2])}}return b}function v(d,a){try{return d[a]}catch(f){}}function g(d,a){if(d){var r=n(d,a),b=window.ue_err?window.ue_err.addContextInfo:null;b&&b(r);f.ue.log(r,a.channel||m,{nb:1});"function"===typeof ue_err.elh&&ue_err.elh(d,a);try{if(!d.fromOnError){var q=
c.console,y=c.JSON,b="Error logged with the Track&Report JS errors API(http://tiny/1covqr6l8/wamazindeClieUserJava): ";if(q){if(y&&y.stringify)try{b+=y.stringify(r)}catch(g){b+="no info provided; converting to string failed"}else b+=r.m;"function"===typeof q.error?q.error(b,r):"function"===typeof q.log&&q.log(b,r)}}}catch(l){}}}function l(d,a){if(d&&!(f.ue_err.ec>f.ue_err.mxe)){f.ue_err.ter.push(d);a=a||{};var r=d.logLevel||a.logLevel;a.logLevel=r;a.attribution=d.attribution||a.attribution;r&&r!==
x&&r!==D&&r!==z&&r!==u||f.ue_err.ec++;r&&r!=x||ue_err.ecf++;g(d,a)}}if(!f.ueLogError||f.ueLogError.isStub){var m=f.ue_err_chan||"jserr",x="FATAL",D="ERROR",z="WARN",u="DOWNGRADED",O="v5",C=20,p=256,B=/\(?([^\s]*):(\d+):\d+\)?/,G=/.*@(.*):(\d*)/;g.skipTrace=1;n.skipTrace=1;l.skipTrace=1;(function(){if(f.ue_err.erl){var d=f.ue_err.erl.length,a,r;for(a=0;a<d;a++)r=f.ue_err.erl[a],g(r.ex,r.info);ue_err.erl=[]}})();f.ueLogError=l}})(ue_csm,window);
ue_csm.ue.exec(function(f,c){var A=function(){},n=function(){return{send:function(f,l){if(l&&f){var m;if(c.XDomainRequest)m=new XDomainRequest,m.onerror=A,m.ontimeout=A,m.onprogress=A,m.onload=A,m.timeout=0;else if(c.XMLHttpRequest){if(m=new XMLHttpRequest,!("withCredentials"in m))throw"";}else m=void 0;if(!m)throw"";m.open("POST",f,!0);m.setRequestHeader&&m.setRequestHeader("Content-type","text/plain");m.send(l)}},isSupported:!0}}(),v=function(){return{send:function(f,c){if(f&&c&&!navigator.sendBeacon(f,
c))throw"";},isSupported:!!navigator.sendBeacon}}();f.ue._ajx=n;f.ue._sBcn=v},"Transportation-clients")(ue_csm,window);
ue_csm.ue.exec(function(f,c){function A(){for(var e=0;e<arguments.length;e++){var k=arguments[e];try{var h;if(k.isSupported){var a=R.buildPayload(q,r);h=k.send(d,a)}else throw dummyException;return h}catch(b){}}B({m:"All supported clients failed",attribution:"CSMSushiClient_TRANSPORTATION_FAIL",f:"sushi-client.js",logLevel:"ERROR"},c.ue_err_chan||"jserr")}function n(){if(r.length){for(var e=0;e<J.length;e++)J[e]();A(p._sBcn||{},p._ajx||{});r=[];b={};q={};K=H=y=N=0}}function v(){var e=new Date,k=function(e){return 10>
e?"0"+e:e};return Date.prototype.toISOString?e.toISOString():e.getUTCFullYear()+"-"+k(e.getUTCMonth()+1)+"-"+k(e.getUTCDate())+"T"+k(e.getUTCHours())+":"+k(e.getUTCMinutes())+":"+k(e.getUTCSeconds())+"."+String((e.getUTCMilliseconds()/1E3).toFixed(3)).slice(2,5)+"Z"}function g(e){try{return JSON.stringify(e)}catch(k){}return null}function l(e,k,h,a){var d=!1;a=a||{};E++;E==z&&B({m:"Max number of Sushi Logs exceeded",f:"sushi-client.js",logLevel:"ERROR",attribution:"CSMSushiClient_MAX_CALLS"},c.ue_err_chan||
"jserr");var b;if(b=!(E>=z))(b=e&&-1<e.constructor.toString().indexOf("Object")&&k&&-1<k.constructor.toString().indexOf("String")&&h&&-1<h.constructor.toString().indexOf("String"))||L++;b&&(e.producerId=e.producerId||k,e.schemaId=e.schemaId||h,e.timestamp=v(),k=Date.now?Date.now():+new Date,e.messageId=f.ue_id+"-"+k+"-"+E,a&&!a.ssd&&(e.sessionId=e.sessionId||f.ue_sid,e.requestId=e.requestId||f.ue_id,e.obfuscatedMarketplaceId=e.obfuscatedMarketplaceId||f.ue_mid),(k=g(e))?(k=k.length,(r.length==u||
y+k>O)&&n(),y+=k,e={data:R.compressEvent(e)},r.push(e),(a||{}).n?0===F?n():K||(K=c.setTimeout(n,F)):H||(H=c.setTimeout(n,t)),d=!0):d=!1);!d&&f.ue_int&&console.error("Invalid JS Nexus API call");return d}function m(){if(!P){for(var e=0;e<M.length;e++)M[e]();for(e=0;e<J.length;e++)J[e]();r.length&&A(p._sBcn||{});P=!0}}function x(e){M.push(e)}function D(e){J.push(e)}var z=1E3,u=499,O=524288,C=function(){},p=f.ue||{},B=p.log||C,G=f.uex||C;(f.uet||C)("bb","ue_sushi_v1",{wb:1});var d=f.ue_surl||"https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.gamma",
a=["messageId","timestamp"],r=[],b={},q={},y=0,N=0,L=0,E=0,M=[],J=[],P=!1,K,H,F=void 0===f.ue_hpsi?1E3:f.ue_hpsi,t=void 0===f.ue_lpsi?1E4:f.ue_lpsi,R=function(){function e(e){b[e]="#"+N++;q[b[e]]=e;return b[e]}function k(e){if(e)switch(typeof e){case "number":return!(isNaN(e)||Infinity===e)&&e.toString().length>("#"+N).length;case "boolean":break;case "string":return e.length>("#"+N).length;default:return!0}return!1}function h(w){if(k(w)){var d=0;w instanceof Array?d=2:w instanceof Function?d=0:w instanceof
Object&&(d=1);switch(d){case 0:w=b[w]?b[w]:e(w);break;case 2:var f=w;w=[];for(var d=f.length,r=0;r<d;r++)w[r]=h(f[r]);break;case 1:d={};for(f in w)w.hasOwnProperty(f)&&(d[b[f]?b[f]:e(f)]=-1==a.indexOf(f)?h(w[f]):w[f]);w=d}}return w}return{compressEvent:h,buildPayload:function(){return g({cs:{dct:q},events:r})}}}();(function(){p.event&&p.event.isStub&&(p.event.replay(function(e){e[3]=e[3]||{};e[3].n=1;l.apply(this,e)}),p.onSushiUnload.replay(function(e){x(e[0])}),p.onSushiFlush.replay(function(e){D(e[0])}))})();
p.attach("beforeunload",m);p.attach("pagehide",m);p._cmps=R;p.event=l;p.event.reset=function(){E=0};p.onSushiUnload=x;p.onSushiFlush=D;try{c.P&&c.P.register&&c.P.register("sushi-client",C)}catch(h){f.ueLogError(h,{logLevel:"WARN"})}G("ld","ue_sushi_v1",{wb:1})},"Nxs-JS-Client")(ue_csm,window);