if (self.CavalryLogger) { CavalryLogger.start_js(["LA7mc"]); }

__d("NavigationMetricsEnumJS",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={NAVIGATION_START:"navigationStart",UNLOAD_EVENT_START:"unloadEventStart",UNLOAD_EVENT_END:"unloadEventEnd",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",CONNECT_END:"connectEnd",SECURE_CONNECTION_START:"secureConnectionStart",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd",DOM_LOADING:"domLoading",DOM_INTERACTIVE:"domInteractive",DOM_CONTENT_LOADED_EVENT_START:"domContentLoadedEventStart",DOM_CONTENT_LOADED_EVENT_END:"domContentLoadedEventEnd",DOM_COMPLETE:"domComplete",LOAD_EVENT_START:"loadEventStart",LOAD_EVENT_END:"loadEventEnd"};}),null);
__d("ResourceTimingMetricsEnumJS",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={START_TIME:"startTime",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",SECURE_CONNECTION_START:"secureConnectionStart",CONNECT_END:"connectEnd",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd"};}),null);
__d("InstanceProxy",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){"use strict";this.$InstanceProxy1=i;}h.prototype.getInstance=function(){"use strict";return this.$InstanceProxy1;};h.prototype.setInstance=function(i){"use strict";this.$InstanceProxy1=i;};f.exports=h;}),null);
__d('DetectBrokenProxyCache',['AsyncSignal','Cookie','URI'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k=c('Cookie').get(j);if(k!=i&&k!=null&&i!='0'){var l={c:'si_detect_broken_proxy_cache',m:j+' '+i+' '+k},m=new (c('URI'))('/common/scribe_endpoint.php').getQualifiedURI().toString();new (c('AsyncSignal'))(m,l).send();}}f.exports={run:h};}),null);
__d('FeedTrackingAsync',['Arbiter','Run','collectDataAttributes'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h;f.exports.init=function(){if(h)return;h=c('Arbiter').subscribe('AsyncRequest/send',function(i,j){var k=j.request,l=k.getRelativeTo();if(l){var m=k.getData(),n=c('collectDataAttributes')(l,['ft']);if(n.ft&&Object.keys(n.ft).length)Object.assign(m,n);}});c('Run').onLeave(function(){h.unsubscribe();h=null;});};}),null);
__d('legacy:onload-action',['PageHooks'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b._domreadyHook=c('PageHooks')._domreadyHook;b._onloadHook=c('PageHooks')._onloadHook;b.runHook=c('PageHooks').runHook;b.runHooks=c('PageHooks').runHooks;b.keep_window_set_as_loaded=c('PageHooks').keepWindowSetAsLoaded;}),3);
__d('FlipDirection',['DOM','Input','Style'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={setDirection:function i(j){var k=c('DOM').isNodeOfType(j,'input')&&j.type=='text',l=c('DOM').isNodeOfType(j,'textarea');if(!(k||l)||j.getAttribute('data-prevent-auto-flip'))return;var m=c('Input').getValue(j),n=j.style&&j.style.direction;if(!n){var o=0,p=true;for(var q=0;q<m.length;q++){var r=m.charCodeAt(q);if(r>=48){if(p){p=false;o++;}if(r>=1470&&r<=1920){c('Style').set(j,'direction','rtl');j.setAttribute('dir','rtl');return;}if(o==5){c('Style').set(j,'direction','ltr');j.setAttribute('dir','ltr');return;}}else p=true;}}else if(m.length===0){c('Style').set(j,'direction','');j.removeAttribute('dir');}}};f.exports=h;}),null);
__d('FlipDirectionOnKeypress',['Event','FlipDirection'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function i(event){var j=event.getTarget();c('FlipDirection').setDirection(j);};c('Event').listen(document.documentElement,{keyup:h,input:h});}),null);
__d('AccessibilityLogger',['AsyncSignal','Cookie'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={COOKIE:'a11y',DECAY_MS:6*60*60*1000,DEFAULT:{sr:0,'sr-ts':Date.now(),jk:0,'jk-ts':Date.now(),kb:0,'kb-ts':Date.now(),hcm:0,'hcm-ts':Date.now()},getCookie:function i(){var j=h.DEFAULT,k=c('Cookie').get(h.COOKIE);if(k){k=JSON.parse(k);for(var l in j)if(l in k)j[l]=k[l];}return j;},logKey:function i(j,k){var l=h.getCookie();l[j]++;var m=Date.now();if(m-l[j+'-ts']>h.DECAY_MS){new (c('AsyncSignal'))('/ajax/accessibilitylogging',{eventName:k,times_pressed:l[j]}).send();l[j+'-ts']=m;l[j]=0;}c('Cookie').set(h.COOKIE,JSON.stringify(l));},logHCM:function i(){h.logKey('hcm','hcm_users');},logSRKey:function i(){h.logKey('sr','sr_users');},logJKKey:function i(){h.logKey('jk','jk_users');},logFocusIn:function i(){h.logKey('kb','kb_users');}};f.exports=h;}),null);
__d('AsyncRequestNectarLogging',['AsyncRequest','Nectar'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();Object.assign(c('AsyncRequest').prototype,{setNectarModuleData:function h(i){if(this.method=='POST')c('Nectar').addModuleData(this.data,i);},setNectarImpressionId:function h(){if(this.method=='POST')c('Nectar').addImpressionID(this.data);}});}),null);
__d('ClickRefUtils',['DataAttributeUtils'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={get_intern_ref:function i(j){if(!!j){var k={profile_minifeed:1,gb_content_and_toolbar:1,gb_muffin_area:1,ego:1,bookmarks_menu:1,jewelBoxNotif:1,jewelNotif:1,BeeperBox:1,searchBarClickRef:1};for(var l=j;l&&l!=document.body;l=l.parentNode){if(!l.id||typeof l.id!=='string')continue;if(l.id.substr(0,8)=='pagelet_')return l.id.substr(8);if(l.id.substr(0,8)=='box_app_')return l.id;if(k[l.id])return l.id;}}return '-';},get_href:function i(j){var k=j.getAttribute&&(j.getAttribute('ajaxify')||j.getAttribute('data-endpoint'))||j.action||j.href||j.name;return typeof k==='string'?k:null;},should_report:function i(j,k){if(k=='FORCE')return true;if(k=='INDIRECT')return false;return j&&(h.get_href(j)||j.getAttribute&&c('DataAttributeUtils').getDataFt(j));}};f.exports=h;}),null);
__d("setUECookie",["Env"],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){if(!c("Env").no_cookies)document.cookie="act="+encodeURIComponent(i)+"; path=/; domain="+window.location.hostname.replace(/^.*(\.facebook\..*)$/i,'$1');}f.exports=h;}),null);
__d('ClickRefLogger',['Arbiter','Banzai','ClickRefUtils','Env','ScriptPath','SessionName','Vector','$','collectDataAttributes','ge','pageID','setUECookie'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={delay:0,retry:true};function i(m){if(!c('ge')('content'))return [0,0,0,0];var n=c('$')('content'),o=c('Vector').getEventPosition(m);return [o.x,o.y,n.offsetLeft,n.clientWidth];}function j(m,n,event,o){var p='r',q=[0,0,0,0],r,s;if(!!event){r=event.type;if(r=='click'&&c('ge')('content'))q=i(event);var t=0;event.ctrlKey&&(t+=1);event.shiftKey&&(t+=2);event.altKey&&(t+=4);event.metaKey&&(t+=8);if(t)r+=t;}if(!!n)s=c('ClickRefUtils').get_href(n);var u=c('collectDataAttributes')(!!event?event.target||event.srcElement:n,['ft','gt']);Object.assign(u.ft,o.ft);Object.assign(u.gt,o.gt);if(typeof u.ft.ei==='string')delete u.ft.ei;var v=[m._ue_ts,m._ue_count,s||'-',m._context,r||'-',c('ClickRefUtils').get_intern_ref(n),p,b.URI?b.URI.getRequestURI(true,true).getUnqualifiedURI().toString():location.pathname+location.search+location.hash,u].concat(q).concat(c('pageID')).concat(c('ScriptPath').getScriptPath());return v;}c('Arbiter').subscribe("ClickRefAction/new",function(m,n){if(c('ClickRefUtils').should_report(n.node,n.mode)){var o=j(n.cfa,n.node,n.event,n.extra_data);c('setUECookie')(n.cfa.ue);var p=[c('SessionName').getName(),Date.now(),'act'];c('Banzai').post('click_ref_logger',Array.prototype.concat(p,o),h);}});function k(m){function n(v){var w='';for(var x=0;x<v.length;x++)w+=String.fromCharCode(1^v.charCodeAt(x));return w;}function o(v,w,x,y){var z=w[x];if(z&&v&&z in v)if(x+1<w.length){o(v[z],w,x+1,y);}else{var aa=v[z],ba=function ca(){setTimeout(y.bind(null,arguments));return aa.apply(this,arguments);};ba.toString=aa.toString.bind(aa);Object.defineProperty(v,z,{configurable:false,writable:true,value:ba});}}var p={},q={},r=false;function s(v,w){if(q[v])return;q[v]=p[v]=1;}var t=m[n('jiri')];if(t){var u=[];n(t).split(',').map(function(v,w){var x=v.substring(1).split(':'),y;switch(v.charAt(0)){case '1':y=new RegExp('\\b('+x[0]+')\\b','i');u.push(function(z){var aa=y.exec(Object.keys(window));if(aa)s(w,''+aa);});break;case '2':y=new RegExp(x[0]);o(window,x,2,function(z){var aa=z[x[1]];if(typeof aa==='string'&&y.test(aa))s(w,v);});break;case '3':o(window,x,0,function(){for(var z=u.length;z--;)u[z]();var aa=Object.keys(p);if(aa.length){p={};setTimeout(c('Banzai')[n('qnru')].bind(c('Banzai'),n('islg'),{m:''+aa}),5000);}});break;case '4':r=true;break;}});}}try{k(c('Env'));}catch(l){}}),null);
__d('DimensionTracking',['Cookie','Event','debounce','getViewportDimensions','isInIframe'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){var i=c('getViewportDimensions')();c('Cookie').set('wd',i.width+'x'+i.height);}if(!c('isInIframe')()){setTimeout(h,100);c('Event').listen(window,'resize',c('debounce')(h,250));c('Event').listen(window,'focus',h);}}),null);
__d('HighContrastMode',['AccessibilityLogger','CSS','CurrentUser','DOM','Style','URI','emptyFunction'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function i(j){var k=new (c('URI'))(window.location.href);if(k.getPath().indexOf('/intern/')===0)return;if(window.top!==window.self)return;var l=c('DOM').create('div');c('DOM').appendContent(document.body,l);l.style.cssText='border: 1px solid !important;'+'border-color: red green !important;'+'position: fixed;'+'height: 5px;'+'top: -999px;'+'background-image: url('+j.spacerImage+') !important;';var m=c('Style').get(l,'background-image'),n=c('Style').get(l,'border-top-color'),o=c('Style').get(l,'border-right-color'),p=n==o&&m&&(m=='none'||m=='url(invalid-url:)');if(p){c('CSS').conditionClass(document.documentElement,'highContrast',p);if(c('CurrentUser').getID())c('AccessibilityLogger').logHCM();}c('DOM').remove(l);h.init=c('emptyFunction');}};f.exports=h;}),null);
__d('PopoverAsyncMenu',['Bootloader','Event','KeyStatus','PopoverMenu','VirtualCursorStatus','setImmediate'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j={},k=0;h=babelHelpers.inherits(l,c('PopoverMenu'));i=h&&h.prototype;function l(m,n,o,p,q,r){'use strict';i.constructor.call(this,m,n,null,q);this._endpoint=p;this._endpointData=r||{};this._loadingMenu=o;this._instanceId=k++;j[this._instanceId]=this;this._mouseoverListener=c('Event').listen(n,'mouseover',this.fetchMenu.bind(this));}l.prototype._onLayerInit=function(){'use strict';if(!this._menu&&this._loadingMenu)this.setMenu(this._loadingMenu);this._popover.getLayer().subscribe('key',this._handleKeyEvent.bind(this));this._triggerInfo={isKeyDown:c('KeyStatus').isKeyDown(),isVirtualCursorTriggered:c('VirtualCursorStatus').isVirtualCursorTriggered()};c('setImmediate')(function(){return this.fetchMenu();}.bind(this));};l.prototype._onPopoverHide=function(){'use strict';i._onPopoverHide.call(this);this._triggerInfo=null;};l.prototype.fetchMenu=function(){'use strict';if(this._fetched)return;c('Bootloader').loadModules(["AsyncRequest"],function(m){new m().setURI(this._endpoint).setData(Object.assign({pmid:this._instanceId},this._endpointData)).send();}.bind(this),'PopoverAsyncMenu');this._fetched=true;if(this._mouseoverListener){this._mouseoverListener.remove();this._mouseoverListener=null;}};l.prototype._setFocus=function(m){'use strict';var n=this._triggerInfo||{},o=n.isKeyDown,p=n.isVirtualCursorTriggered;this.setInitialFocus(m,o||p);this._triggerInfo=null;};l.setMenu=function(m,n){'use strict';var o=j[m];o.setMenu(n);o._setFocus(n);};l.getInstance=function(m){'use strict';return j[m];};l.getInstanceByTriggerElem=function(m){'use strict';var n=null;Object.keys(j).forEach(function(o){if(j[o]._triggerElem==m)n=j[o];});return n;};f.exports=l;}),null);
__d('UserActionHistory',['Arbiter','ClickRefUtils','ScriptPath','throttle','WebStorage'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={click:1,submit:1},i=false,j={log:[],len:0},k=c('throttle').acrossTransitions(function(){try{i._ua_log=JSON.stringify(j);}catch(n){i=false;}},1000);function l(){var n=c('WebStorage').getSessionStorage();if(n){i=n;i._ua_log&&(j=JSON.parse(i._ua_log));}else i=false;j.log[j.len%10]={ts:Date.now(),path:'-',index:j.len,type:'init',iref:'-'};j.len++;c('Arbiter').subscribe("UserAction/new",function(o,p){var q=p.ua,r=p.node,event=p.event;if(!event||!(event.type in h))return;var s={path:c('ScriptPath').getScriptPath(),type:event.type,ts:q._ue_ts,iref:c('ClickRefUtils').get_intern_ref(r)||'-',index:j.len};j.log[j.len++%10]=s;i&&k();});}function m(){return j.log.sort(function(n,o){return o.ts!=n.ts?o.ts-n.ts:o.index-n.index;});}l();f.exports={getHistory:m};}),null);
__d('ImageTimingHelper',['Arbiter','BigPipe','URI'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i={};c('Arbiter').subscribe(c('BigPipe').Events.init,function(j,k){if(k.lid&&k.lid!=='0')k.arbiter.subscribe('images_displayed',function(l,m){var n=h[m.lid];if(!n)n=h[m.lid]=[];m.images.forEach(function(o){try{var q=new (c('URI'))(o);o=q.setFragment('').toString();}catch(p){return;}if(i[o])return;i[o]=true;n.push({pagelet:m.pagelet,timeslice:m.timeslice,ts:m.ts,uri:o});});});});f.exports.getImageTimings=function(j){return h[j]||[];};}),null);
__d('PageletEventsHelper',['Arbiter','PageletEventConstsJS'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='BigPipe/init',i='pagelet_event',j='phase_begin',k={},l=false;function m(){return {pagelets:{},categories:{},phase_start:{},display_resources:{},all_resources:{}};}function n(q,r,s,t){if(k[t].pagelets[r]==undefined)k[t].pagelets[r]={};k[t].pagelets[r][q]=s;}function o(q){q.subscribe(i,function(r,s){var event=s.event,t=s.ts,u=s.id,v=s.lid,w=s.phase,x=s.categories,y=s.allResources,z=s.displayResources;n(event,u,t,v);var aa=k[v],ba=aa.pagelets[u];if(event===c('PageletEventConstsJS').ARRIVE_END){ba.phase=w;aa.all_resources[u]=y;aa.display_resources[u]=z;}if((event===c('PageletEventConstsJS').ONLOAD_END||event===c('PageletEventConstsJS').DISPLAY_END)&&x)x.forEach(function(ca){if(aa.categories[ca]==undefined)aa.categories[ca]={};aa.categories[ca][event]=t;});});q.subscribe(j,function(event,r){k[r.lid].phase_start[r.phase]=r.ts;});}var p={init:function q(){if(l)return;c('Arbiter').subscribe(h,function(event,r){var s=r.lid,t=r.arbiter;k[s]=m();o(t);});l=true;},getMetrics:function q(r){if(k[r])return JSON.parse(JSON.stringify(k[r]));return null;}};f.exports=p;}),null);
__d('KappaWrapper',['AsyncSignal','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false;f.exports={forceStart:function i(j,k,l){var m=0,n=function o(){new (c('AsyncSignal'))('/si/kappa/',{Ko:"a"}).send();if(++m<j)c('setTimeoutAcrossTransitions')(o,k*1000);};c('setTimeoutAcrossTransitions')(n,(k+l)*1000);},start:function i(j,k,l){if(!h){h=true;this.forceStart(j,k,l);}}};}),null);
__d('Chromedome',['fbt'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();g.start=function(i){if(i.off||top!==window||!/(^|\.)facebook\.(com|sg)$/.test(document.domain))return;var j=i.stop||h._("\u4f4f\u624b\uff01"),k=i.text||h._("\u9019\u662f\u5c08\u9580\u63d0\u4f9b\u7d66\u958b\u767c\u4eba\u54e1\u7684\u700f\u89bd\u5668\u529f\u80fd\u3002\u5982\u679c\u6709\u4eba\u544a\u8a34\u4f60\u5728\u6b64\u8655\u8907\u88fd\u8cbc\u4e0a\u67d0\u4e9b\u5167\u5bb9\u53ef\u4ee5\u4f7f\u7528\u67d0\u500b Facebook \u529f\u80fd\u6216\u300c\u99ed\u5165\u300d\u5176\u4ed6\u4eba\u7684\u5e33\u865f\uff0c\u90a3\u5176\u5be6\u662f\u4e0d\u5be6\u7684\u8a50\u9a19\u8a0a\u606f\uff0c\u4e26\u4e14\u6703\u8b93\u4e0d\u6cd5\u4e4b\u5f92\u6709\u6a5f\u6703\u5b58\u53d6\u4f60\u7684 Facebook \u5e33\u865f\u3002"),l=i.more||h._("\u67e5\u770b{url}\u4ee5\u7372\u5f97\u66f4\u591a\u8a0a\u606f\u3002",[h.param('url','https://www.facebook.com/selfxss')]);if((window.chrome||window.safari)&&!i.textonly){var m='font-family:helvetica; font-size:20px; ';[[j,i.c1||m+'font-size:50px; font-weight:bold; '+'color:red; -webkit-text-stroke:1px black;'],[k,i.c2||m],[l,i.c3||m],['','']].map(function(s){setTimeout(console.log.bind(console,'\n%c'+s[0],s[1]));});}else{var n=['',' .d8888b.  888                       888','d88P  Y88b 888                       888','Y88b.      888                       888',' "Y888b.   888888  .d88b.  88888b.   888','    "Y88b. 888    d88""88b 888 "88b  888','      "888 888    888  888 888  888  Y8P','Y88b  d88P Y88b.  Y88..88P 888 d88P',' "Y8888P"   "Y888  "Y88P"  88888P"   888','                           888','                           888','                           888'],o=(''+k).match(/.{35}.+?\s+|.+$/g),p=Math.floor(Math.max(0,(n.length-o.length)/2));for(var q=0;q<n.length||q<o.length;q++){var r=n[q];n[q]=r+new Array(45-r.length).join(' ')+(o[q-p]||'');}console.log('\n\n\n'+n.join('\n')+'\n\n'+l+'\n');return;}};}),null);
__d('FbFeedAccessible',['csx','cx','fbt','invariant','AccessibilityConfig','Arbiter','ARIA','BootloadedComponent.react','CSS','DataAttributeUtils','DOMQuery','JSResource','LitestandMessages','React','ReactDOM','SubscriptionsHandler','ge','getOrCreateDOMID'],(function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l='Accessibility/StoriesRequested',m='Accessibility/StoriesLoaded',n='Accessibility/StoryContentInserted',o='Accessibility/SubstreamInserted',p=void 0,q=void 0,r={init:function s(t){p=t;if(c('AccessibilityConfig').a11yNewsfeedStoryEnumeration){var u=new (c('SubscriptionsHandler'))();u.addSubscriptions(c('Arbiter').subscribe(c('LitestandMessages').STORIES_REQUESTED,this._onStoriesRequested.bind(this)),c('Arbiter').subscribe(c('LitestandMessages').STORIES_INSERTED,this._onInsertedSubstream.bind(this)),c('Arbiter').subscribe(c('LitestandMessages').NEWER_STORIES_INSERTED,this._onInsertedSubstream.bind(this)),c('Arbiter').subscribe(m,this._processStoriesLoaded.bind(this)),c('Arbiter').subscribe(l,this._processStoriesRequested.bind(this)),c('Arbiter').subscribe(n,this._processStoryContentInserted.bind(this)),c('Arbiter').subscribe(o,this._processInsertedSubstream.bind(this)));this._enumerateStories();}},informStoryContentInserted:function s(t){c('Arbiter').inform(n,t);this.setAriaLabelledBy(t);},setAriaLabelledBy:function s(t){var u=c('ge')(t),v;if(u&&this._isStory(u)){if(u.getAttribute('aria-labelledby'))return;v=this._filterForElement(u,["._4gns","._5pbw",".timestampContent","._5pbx"]);if(v.length>0)u.setAttribute('aria-labelledby',v.map(function(w){return c('getOrCreateDOMID')(w);}).join(' '));}},_getStories:function s(t){return c('DOMQuery').scry(t||p,"._5jmm");},_onInsertedSubstream:function s(t,u){if(u&&u.substream_id)c('Arbiter').inform(o,u.substream_id);},_onStoriesRequested:function s(){c('Arbiter').inform(l);},_setEnumerationText:function s(t,u,v){var w=c('React').createElement(c('BootloadedComponent.react'),{bootloadLoader:c('JSResource')('FbFeedPager.react').__setRef('FbFeedAccessible'),bootloadPlaceholder:c('React').createElement('div',null),position:u,total:v,'aria-hidden':'true'});c('ReactDOM').render(w,t);},_enumerateStories:function s(){var t=this._getStories(p);q=t.length;t.forEach(function(u,v){this._enumerateStory(u,v+=1);}.bind(this));},_enumerateSubstream:function s(t){var u=this._getStories();q=u.length;var v=this._getStories(c('ge')(t)),w=v.length||0;for(var x=0;x<w;x++)this._registerStoryEnumerationPosition(v[x],q-w+(x+1),x+1);},_enumerateStory:function s(t,u){!this._isStory(t)?k(0):void 0;if(u>0){var v=c('DOMQuery').scry(t,"._4gns");if(v&&v[0])this._setEnumerationText(v[0],u,q);}},_processStoriesLoaded:function s(){c('ARIA').notify(j._("\u5df2\u8f09\u5165\u66f4\u591a\u52d5\u614b\u3002"));},_processStoriesRequested:function s(){c('ARIA').notify(j._("\u5df2\u8981\u6c42\u66f4\u591a\u52d5\u614b\u3002"));},_processInsertedSubstream:function s(t,u){this._enumerateSubstream(u);this._enumerateStories();},_processStoryContentInserted:function s(t,u){var v=void 0,w=c('ge')(u);if(w)v=JSON.parse(c('DataAttributeUtils').getDataFt(w));if(v&&v.ordinal_position){var x=v.ordinal_position.split(':'),y=x[0],z=x[1];y=parseInt(y,10);z=parseInt(z,10);this._enumerateStory(w,y);if(z===1)c('Arbiter').inform(m);}},_registerStoryEnumerationPosition:function s(t,u,v){var w=JSON.parse(c('DataAttributeUtils').getDataFt(t));if(w){w.ordinal_position=u+':'+v;c('DataAttributeUtils').setDataFt(t,JSON.stringify(w));}},_isStory:function s(t){return c('CSS').matchesSelector(t,"._5jmm");},_filterForElement:function s(t,u){return u.map(function(v){return c('DOMQuery').scry(t||document,v)[0];}).filter(function(v){return !!v;});}};f.exports=r;}),null);
__d('TimezoneAutoset',['AsyncRequest','emptyFunction'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false;function i(l){var m=new Date(),n=m.getTimezoneOffset()/15,o=m.getTime()/1000,p=Math.round((l-o)/900),q=Math.round(n+p)%96;if(q==0){return 0;}else if(q>48){q-=Math.ceil(q/96)*96;}else if(q<-56)q+=Math.ceil(q/-96)*96;return q*15;}function j(l,m,n){if(!l||undefined==m)return;if(h)return;h=true;var o=-i(l);if(n||o!=m){var p='/ajax/timezone/update.php';new (c('AsyncRequest'))().setURI(p).setData({gmt_off:o,is_forced:n}).setErrorHandler(c('emptyFunction')).setTransportErrorHandler(c('emptyFunction')).setOption('suppressErrorAlerts',true).send();}}var k={setInputValue:function l(m,n){m.value=i(n);},setTimezone:j};f.exports=k;}),null);
__d('PopoverLoadingMenu',['cx','BehaviorsMixin','DOM','PopoverMenuInterface','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('PopoverMenuInterface'));j=i&&i.prototype;function k(l){'use strict';j.constructor.call(this);this._config=l||{};this._theme=l.theme||{};}k.prototype.getRoot=function(){'use strict';if(!this._root){this._root=c('DOM').create('div',{className:c('joinClasses')("_54nq",this._config.className,this._theme.className)},c('DOM').create('div',{className:"_54ng"},c('DOM').create('div',{className:"_54nf _54af"},c('DOM').create('span',{className:"_54ag"}))));if(this._config.behaviors)this.enableBehaviors(this._config.behaviors);}return this._root;};Object.assign(k.prototype,c('BehaviorsMixin'),{_root:null});f.exports=k;}),null);
__d('ReactSpeedHelper',['LogBuffer','ReactDOM'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={enableRenderMeasurements:function i(){if(!c('ReactDOM').enableRenderMeasurements)return;c('ReactDOM').enableRenderMeasurements();},getMetrics:function i(j,k){return c('LogBuffer').read('react_speed').filter(function(l){return ((j==null||l.begin>=j)&&(k==null||l.end<=k));});}};f.exports=h;}),null);
__d('sourceMetaToString',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k;if(i.name){k=i.name;if(i.module)k=i.module+'.'+k;}else if(i.module)k=i.module+'.<anonymous>';if(j&&i.line){k=(k?k:'<anonymous>')+':'+i.line;if(i.column)k+=':'+i.column;}return k;}f.exports=h;}),null);
__d('NavigationTimingHelper',['NavigationMetricsEnumJS','forEachObject','performance'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k){var l={};c('forEachObject')(c('NavigationMetricsEnumJS'),function(m){var n=k[m];if(n)l[m]=n+j;});return l;}var i={getAsyncRequestTimings:function j(k){if(!k||!c('performance').timing||!c('performance').getEntriesByName)return undefined;var l=c('performance').getEntriesByName(k);if(l.length===0)return undefined;return h(c('performance').timing.navigationStart,l[0]);},getNavTimings:function j(){if(!c('performance').timing)return undefined;return h(0,c('performance').timing);}};f.exports=i;}),null);
__d('ResourceTimingBootloaderHelper',['Bootloader','ResourceTimingMetricsEnumJS','ImageTimingHelper','URI','forEachObject','isEmpty','performance'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i={};function j(p,q,r,s){if(!c('performance').timing||!c('performance').getEntriesByType)return;var t={};if(s)t=c('ImageTimingHelper').getImageTimings(r).sort(function(ka,la){return ka.ts-la.ts;}).reduce(function(ka,la){if(ka[la.uri])return ka;ka[la.uri]=la.pagelet;return ka;},{});var u=c('performance').getEntriesByType('resource'),v=0,w=0,x=0;for(var y=0;y<u.length;y++){var z=u[y];if(z.duration<=0||z.startTime<q)continue;var aa='',ba='',ca='',da='',ea='',fa=z.initiatorType;switch(fa){case 'css':case 'link':case 'script':var ga=n(z.name);ba=ga[0];aa=ga[1];if(!ba||!aa)continue;if(aa==='css'||aa==='js'){da=aa;var ha=i[z.name]||w++;ca=ha+'_'+ba;}else{var ia=m(z.name);ea=ia[0];da=ia[1];ca=v+++'_'+ea;}break;case 'img':ca=v+++'_'+k(z.name);da='img';break;case 'iframe':ca=x+++'_'+k(z.name)+l(z.name);da='iframe';break;default:continue;}if(p[z.name]==undefined)p[z.name]=[];var ja={};c('forEachObject')(c('ResourceTimingMetricsEnumJS'),function(ka){var la=z[ka];if(la)ja[ka]=la+c('performance').timing.navigationStart;});ja.type=da;ja.desc=ca;if(da=='img'&&t.hasOwnProperty(z.name))ja.pagelet=t[z.name];ja.transferSize=z.transferSize;ja.encodedBodySize=z.encodedBodySize;p[z.name].push(ja);}}function k(p){var q=new (c('URI'))(p).getDomain();return q;}function l(p){var q=new (c('URI'))(p).getPath();return q;}function m(p){return [k(p),'img'];}function n(p){var q=p.match(/\/rsrc\.php\/.*\/([^\?]+)/);if(!q)return [];var r=q[1],s='',t=r.match(/\.(\w+)$/);if(t)s=t[1];return [r,s];}var o={addBootloaderMetricsToResourceTimings:function p(){var q=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],r=arguments.length<=1||arguments[1]===undefined?{}:arguments[1],s=arguments.length<=2||arguments[2]===undefined?true:arguments[2];if(c('isEmpty')(i))i=c('Bootloader').getURLToHashMap();var t={};c('forEachObject')(i,function(w,x){t[w]=x;});var u={bootload:true,js_exec:true,start_bootload:true,tag_bootload:true},v=[];c('forEachObject')(r,function(w,x){var y=x.indexOf('/');if(y===-1)return;var z=x.substring(0,y);if(!u[z])return;v.push(x);var aa=x.substring(y+1),ba=t[aa];if(!ba)return;if(ba.startsWith('data:'))ba='inlined resource: '+aa;if(q[ba]==null)q[ba]=[{}];q[ba].forEach(function(ca){ca.bootloader_hash=aa;ca[z]=w;});});if(!s)v.forEach(function(w){return delete r[w];});return q;},getLastTTIAndE2EImageResponseEnds:function p(q,r,s){var t={TTI:q,E2E:r};if(!c('performance').timing)return t;var u=s.filter(function(x){return x.ts<=q;}).map(function(x){return x.uri;}).reduce(function(x,y){x[y]=true;return x;},{}),v=s.map(function(x){return x.uri;}).reduce(function(x,y){x[y]=true;return x;},{});for(var w in h)h[w].forEach(function(x){if(x.type==='img'){if(u[w])t.TTI=Math.max(t.TTI,x.responseEnd);if(v[w])t.E2E=Math.max(t.E2E,x.responseEnd);}});return t;},getMetrics:function p(q,r,s){h={};if(c('isEmpty')(i))i=c('Bootloader').getURLToHashMap();j(h,q,r,s);return h;}};f.exports=o;}),null);
__d('TimeSliceHelper',['invariant','ArtilleryExperiments','LogBuffer','Map','ReactSpeedHelper','sourceMetaToString','forEachObject'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=function k(l,m){return Math.round((l-m)*1000);},j={formatMetricsForTransport:function k(l){var m=[],n=[],o=[],p=new (c('Map'))(),q=new (c('Map'))(),r=0,s=function u(v,w,x){var y=void 0;if(w.has(v)){y=w.get(v);}else{y=x.length;w.set(v,y);x.push(v);}return y;},t=[];if(l!=null)l.forEach(function(u){var v=i(u.begin,r),w=i(u.end,u.begin);r=u.end;var x=s(u.name,p,m),y=[v,w,x],z=u.counters||{},aa=Object.keys(z).filter(function(ea){return z[ea]!==0;}).sort(),ba=void 0;if(aa.length>0){var ca=aa.join(),da=s(ca,q,o);ba=aa.map(function(ea){return z[ea];});ba.unshift(da);}else ba=[];if(u.id)y.push(u.id);if(u.parentID)y.push(u.parentID);t.push(y);n.push(ba);});return {version:'compact',items:t,names:m,counters:n,counterSchemas:o};},getMetrics:function k(l,m,n,o){var p=c('LogBuffer').read('time_slice'),q=c('LogBuffer').read('time_slice_heartbeat'),r=c('ReactSpeedHelper').getMetrics().map(function(y){return babelHelpers['extends']({},y,{desc:'React['+y.name+']'});}),s=p.concat(q,r),t,u=[],v=function y(z){var aa;if(z.guard){var ba=c('sourceMetaToString')(z),ca=z.guard.toString();aa=ba?ca+' at '+ba:ca;}else if(z.desc){aa=z.desc;}else aa='JS['+z.count+']';var da={begin:z.begin,end:z.end,name:aa,counters:z.counters};if(c('ArtilleryExperiments').artillery_timeslice_edges){da.id=z.id;da.parentID=z.parentID;}u.push(da);},w=function y(){if(t)v(t.count==1?t.first:t);t=null;},x=function y(z,aa){c('forEachObject')(aa,function(ba,ca){var da=z[ca]||0;z[ca]=da+ba;});};s.sort(function(y,z){if(y.begin!==z.begin){return y.begin-z.begin;}else if(y.end!==z.end){return y.end-z.end;}else return 0;}).forEach(function(y){if(l&&y.end<l||m&&y.begin>m)return;if(y.end-y.begin<n){if(t&&y.begin-t.end<o){t.end=y.end;t.count++;x(t.counters,y.counters);}else{w();t={begin:y.begin,end:y.end,count:1,first:y,guard:false,id:undefined,parentID:undefined,counters:{}};}}else{w();v(y);}});w();return u;}};f.exports=j;}),null);
__d('PerfXFlusher',['invariant','Banzai'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='perfx_custom_logger_endpoint',j=['perfx_page','perfx_page_type','lid'];function k(m){j.forEach(function(n){return h(n in m);});}var l={flush:function m(n){k(n);c('Banzai').post(i,n,{signal:true});},registerToSendWithBeacon:function m(n){c('Banzai').registerToSendWithBeacon(i,n);}};f.exports=l;}),null);
__d("pageLoadedViaSWCache",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){return self.__SW_CACHE__===1;}f.exports=h;}),null);
__d('PerfXLogger',['DataAttributeUtils','PerfXFlusher','NavigationMetrics','NavigationTimingHelper','Set','forEachObject','performanceAbsoluteNow','setTimeoutAcrossTransitions','pageLoadedViaSWCache'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i={},j=65*1000,k=['e2e','tti','all_pagelets_displayed','all_pagelets_loaded'],l={},m={_listenersSetUp:false,_setupListeners:function n(){if(this._listenersSetUp)return;this._subscribeToNavigationMetrics();c('PerfXFlusher').registerToSendWithBeacon(function(){var o=[];c('forEachObject')(h,function(p,q){if(!h[q].sent){var r=this.getPayload(q,'unload fired');if(r!=null)o.push(r);}}.bind(this));h={};return o;}.bind(this));this._listenersSetUp=true;},_init:function n(o){var p=o.lid;if(p==null)return;var q=i[p];delete i[p];h[p]=babelHelpers['extends']({tags:new (c('Set'))(q||[]),sent:false},o);this._registerTimeoutSendback(p);this._setupListeners();},initWithNavigationMetricsLID:function n(o,p){var q=c('NavigationMetrics').getFullPageLoadLid();if(!q)return;this._init(babelHelpers['extends']({},p,{lid:q}));if(o&&o.always)for(var r=0;r<o.always.length;r++)m.addTag(q,o.always[r]);if(o&&o.swCache&&c('pageLoadedViaSWCache')())for(var s=0;s<o.swCache.length;s++)m.addTag(q,o.swCache[s]);},init:function n(o,p){if(p!=null&&o.lid!=null)l[o.lid]=p;this._init(o);},addTag:function n(o,p){var q=h[o];if(q){q.tags.add(p);return;}if(!i[o])i[o]=[];i[o].push(p);},addTagWithNavigationMetricsLID:function n(o){var p=c('NavigationMetrics').getFullPageLoadLid();if(!p)return;m.addTag(p,o);},_registerTimeoutSendback:function n(o){var p=this._getFetchStart(o),q=j;if(p!=null)q-=c('performanceAbsoluteNow')()-p;c('setTimeoutAcrossTransitions')(function(){return this._uploadPayload(o,'sendback time out');}.bind(this),q);},_subscribeToNavigationMetrics:function n(){c('NavigationMetrics').addRetroactiveListener(c('NavigationMetrics').Events.EVENT_OCCURRED,function(o,p){if(!(o in h))return;if(k.includes(p.event)&&p.hasOwnProperty('timestamp')&&p.timestamp!=null)h[o][p.event]=p.timestamp;});c('NavigationMetrics').addRetroactiveListener(c('NavigationMetrics').Events.NAVIGATION_DONE,function(o,p){var q=p.serverLID;if(!(q in h))return;k.forEach(function(event){if(p.hasOwnProperty(event)&&p[event]!=null)h[q][event]=p[event];});this._uploadPayload(q);}.bind(this));},_getPayloadWithOffset:function n(o,p,q){var r=h[o];if(r==null)return null;var s=Object.assign({},r),t=document.querySelector('[id^="hyperfeed_story_id"]');if(t){var u=JSON.parse(c('DataAttributeUtils').getDataFt(t));if(u)s.mf_query_id=u.qid;}s.tags=Array.from(r.tags);this._adjustValues(s,p);s.fetch_start=p;if(s.perfx_page_type==='normal'){var v=c('NavigationTimingHelper').getNavTimings();if(v!=null&&v.navigationStart!=null)s.nav_to_fetch=v.navigationStart;}if(q!=null)s.sendback_reason=q;delete s.sent;return s;},_uploadPayload:function n(o,p){if(h[o]!=null&&!h[o].sent){var q=this.getPayload(o,p);if(q!=null){c('PerfXFlusher').flush(q);h[o].sent=true;}}},getPayload:function n(o,p){return this._getPayloadWithOffset(o,this._getFetchStart(o),p);},_getFetchStart:function n(o){if(!(o in h))return null;var p=void 0,q=h[o].perfx_page_type;if(q=='quickling'){if(!(o in l)){return null;}else p=c('NavigationTimingHelper').getAsyncRequestTimings(l[o]);}else p=c('NavigationTimingHelper').getNavTimings();if(!p||!p.fetchStart)return null;return p.fetchStart;},_adjustValues:function n(o,p){k.forEach(function(q){if(o.hasOwnProperty(q))o[q]-=p;});}};f.exports=m;}),null);
__d('TimeSpentImmediateActiveSecondsLogger',['Banzai','ImmediateActiveSecondsConfig','ScriptPath'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='immediate_active_seconds',i={signal:true,retry:true},j=c('ImmediateActiveSecondsConfig').sampling_rate,k=c('ImmediateActiveSecondsConfig').ias_bucket,l=0;function m(q){if(j<=0)return false;var r=Math.floor(q/1000)%j;return r===k;}function n(q){if(q>=l&&q-l<1000)return;if(m(q)){var r={activity_time_ms:q,last_activity_time_ms:l,script_path:c('ScriptPath').getTopViewEndpoint()};try{c('Banzai').post(h,r,i);}catch(s){}}l=Math.floor(q/1000)*1000;}function o(event,q,r){if(s<0||t<0||s>t)return;var s=Math.floor(q/1000),t=Math.floor(r/1000);if(!p(s,t))return;var u={event:event,start_time_ms:q,end_time_ms:r};c('Banzai').post(h,u,i);}function p(q,r){if(j<=0)return false;if(r-q>=j)return true;var s=q+(k-q%j+j)%j;return s<=r;}f.exports={maybeReportActiveSecond:n,maybeReportActiveInterval:o};}),null);