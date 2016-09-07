if (self.CavalryLogger) { CavalryLogger.start_js(["4ocyj"]); }

__d("MercuryGenericConstants",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={MAX_THREAD_NAME_LENGTH:250};}),null);
__d('MercuryNonEmployeeTypeaheadRenderer',['cx','fbt','DOM','CompactTypeaheadRenderer'],(function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();function j(k,l){var m=c('CompactTypeaheadRenderer')(k,l);if(k.non_employee){var n=c('DOM').create('span',{className:"_52l8 highlight"},i._("\uff08\u975e\u54e1\u5de5\uff09")),o=c('DOM').scry(m,'.subtext')[0];if(o){c('DOM').prependContent(o,'\u00b7');c('DOM').prependContent(o,n);}}return m;}f.exports=j;}),null);
__d('ChatTabTypeaheadRenderer',['DOM','MercuryNonEmployeeTypeaheadRenderer','MercuryTypeaheadConstants','MercuryThreadMetadataRawRenderer','TypeaheadFacepile'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k){switch(j.type){case c('MercuryTypeaheadConstants').USER_TYPE:case c('MercuryTypeaheadConstants').PAGE_TYPE:return c('MercuryNonEmployeeTypeaheadRenderer')(j,k);case c('MercuryTypeaheadConstants').THREAD_TYPE:return i(j,k);default:return c('DOM').create('div');}}function i(j,k){var l=[],m=j.mercury_thread;if(m.image_src){l.push(c('DOM').create('img',{alt:'',src:m.image_src}));}else{var n=j.participants_to_render.map(function(q){return q.big_image_src||q.image_src;});if(n){if(n instanceof Array){n=c('TypeaheadFacepile').render(n);}else n=c('DOM').create('img',{alt:'',src:n});l.push(n);}}var o=m.name,p=c('MercuryThreadMetadataRawRenderer').renderRawParticipantList(m.thread_id,j.participants_to_render,m.participants.length,{names_renderer:c('MercuryThreadMetadataRawRenderer').renderShortNames});l.push(c('DOM').create('span',{className:'timestamp'},m.timestamp_relative));l.push(c('DOM').create('span',{className:'text'},o));l.push(c('DOM').create('span',{className:'subtext'},p));return c('DOM').create('li',{className:'node'},l);}h.className='compact';f.exports=h;}),null);
__d('ChatAddFriendsTabSheetRawRenderer',['fbt','ChatTabTypeaheadRenderer','ContextualTypeaheadView','DOM','Event','MercuryDataSourceWrapper','MercuryTypeahead','MessengerAdminGroupUtils','ChatTabTemplates','WorkModeConfig'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={render:function j(k,l,m,n,o,p){var q=p?c('ChatTabTemplates')[':fb:mercury:chat:tab-sheet:add-friends-empty-tab'].build():c('ChatTabTemplates')[':fb:mercury:chat:tab-sheet:add-friends'].build(),r=p?c('MercuryDataSourceWrapper').chat_typeahead_source:c('MercuryDataSourceWrapper').chat_add_people_source;r.setShowThreads(p);var s=new (c('MercuryTypeahead'))(r,c('ContextualTypeaheadView'));s.setViewOption('renderer',c('ChatTabTypeaheadRenderer'));s.setExcludedParticipantsFromThreadMeta(n);if(!p){var t=void 0;if(c('WorkModeConfig').is_work_user){t=h._("\u5c07\u540c\u4e8b\u52a0\u5165\u804a\u5929\u5ba4");}else if(c('MessengerAdminGroupUtils').isJoinableThread(n)){t=h._("\u9080\u8acb\u670b\u53cb\u5230\u9019\u500b\u804a\u5929\u5ba4");}else t=h._("\u65b0\u589e\u670b\u53cb\u5230\u9019\u500b\u804a\u5929\u5ba4");s.setPlaceholder(t);}s.build();c('DOM').replace(q.getNode('participantsTypeahead'),s.getElement());c('DOM').setContent(m,q.getRoot());s.getTokenizer().adjustWidth();var u=q.getNode('participantsTypeahead').getAttribute('data-labelid'),v=c('DOM').scry(s.getElement(),'input[type="text"]')[0];if(v)if(u){v.setAttribute('aria-labelledby',u);}else v.setAttribute('aria-label',h._("\u81f4"));s.focus();if(!p){var w=function x(){var y=s.getSelectedParticipantIDs();if(y.length)o(y);l.close(k);};c('Event').listen(q.getNode('doneButton'),'click',w);s.subscribe('tokens-return',function(){if(s.getTokens().length)w();});}return s;}};f.exports=i;}),null);
__d('ChatAddFriendsTabSheet',['ArbiterMixin','ChatAddFriendsTabSheetRawRenderer','ChatOpenTab','ChatOpenTabEventLogger','ChatTabActions','FantaTabActions','MercuryConfig','MercuryIDs','MercuryLogMessageType','MercurySourceType','MercuryThreadInfo','MercuryTypeaheadConstants','MercuryMessageActions','MercuryMessageObject','MessengerAdminGroupUtils','MultiChatController','Style','MercuryThreadActions','MercuryThreads'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('MercuryMessageActions').get(),i=c('MercuryMessageObject').get(),j=c('MercuryThreadActions').get(),k=c('MercuryThreads').get();function l(p,q,r,s){this._threadID=p;this._rootElement=q;this._sheetView=r;this._typeahead=null;this._chatTabView=s;}Object.assign(l.prototype,c('ArbiterMixin'),{render:function p(){k.getThreadMeta(this._threadID,function(q){var r=q.is_canonical_user?m:n,s=k.isNewEmptyLocalThread(this._threadID);this._typeahead=c('ChatAddFriendsTabSheetRawRenderer').render(this,this._sheetView,this._rootElement,q,r.bind(null,q),s);this._typeahead.subscribe('tokens-changed',function(){if(s)o(this,this._typeahead,this._threadID,this._chatTabView);}.bind(this));this._typeahead.subscribe('resize',function(){this._sheetView.resize();}.bind(this));this._typeahead.subscribe('esc-pressed',function(){this.inform('esc-pressed');}.bind(this));}.bind(this));},getParticipants:function p(){if(!this._typeahead)return null;return this._typeahead.getSelectedParticipantIDs();},isPermanent:function p(){return true;},isSheetWithInput:function p(){return true;},getType:function p(){return 'add_friends_type';},open:function p(){this._sheetView.open(this);},close:function p(){this._sheetView.close(this);},getHeight:function p(){return c('Style').get(this._rootElement,'height');}});function m(p,q){var r=p.participants;c('MultiChatController').createThreadForTokens(r.concat(q));}function n(p,q){var r=p.thread_id;if(c('MercuryThreadInfo').isEmptyLocalThread(p)){j.addParticipants(r,q);}else{var s=c('MessengerAdminGroupUtils').isJoinableThread(p);if(s){q.map(function(t){var u=c('MercuryIDs').getThreadIDFromParticipantID(t);h.send(i.constructUserGeneratedMessageObject(p.joinable_mode.link,c('MercurySourceType').MESSENGER_WEB,u));});}else h.send(i.constructLogMessageObject(c('MercurySourceType').CHAT_WEB,r,c('MercuryLogMessageType').SUBSCRIBE,{added_participants:q}));}if(c('MercuryConfig').FantaTabs){c('FantaTabActions').openTab(r);c('ChatOpenTabEventLogger').log('ChatAddFriendsTabSheet',r);}else c('ChatOpenTab').openThread(r,'ChatAddFriendsTabSheet');}function o(p,q,r,s){var t=q.getTypeahead().getData(),u=q.getTokens(),v=q.getTypeahead().getCore();v.getElement().removeAttribute('disabled');t.setShowThreads(u.length===0);var w=u.length==1&&u[0].getInfo().render_type===c('MercuryTypeaheadConstants').THREAD_TYPE;if(w){var x=u[0].getInfo().mercury_thread;if(x){var y=s._sharePreview,z=y&&y.getShareData();if(z)var aa=function ba(ca){return ca.loadShareFromParams(z.share_type,z.share_params);};if(c('MercuryConfig').FantaTabs){c('FantaTabActions').replaceTab(r,x.thread_fbid);}else c('ChatOpenTab').openThread(x.thread_fbid,'openGroupChat','',aa);}if(!c('MercuryConfig').FantaTabs)c('ChatTabActions').closeTab(r,'open_group_chat');}else{if(u.length==1&&u[0].getInfo().render_type===c('MercuryTypeaheadConstants').PAGE_TYPE)v.getElement().setAttribute('disabled','disabled');p.inform('chat/tokens-changed',{token_count:u.length,tokens:u});}}f.exports=l;}),null);
__d('ChatEmployeeAwaySheet.react',['cx','fbt','React'],(function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=function k(){return (c('React').createElement('div',{className:"_2phz"},c('React').createElement('div',{className:"_1skd _1ske fss",'data-jsid':'text'},i._("\u9019\u4f4d\u540c\u4e8b\u6b63\u5728\u6d77\u908a\u5ea6\u5047\u3002\u82e5\u975e\u7dca\u6025\u72c0\u6cc1\uff0c\u5de5\u4f5c\u4e0a\u7684\u554f\u984c\u8acb\u6539\u4ee5\u96fb\u5b50\u90f5\u4ef6\u806f\u7d61\u3002"))));};f.exports=j;}),null);
__d('ChatNameConversationTabSheet.react',['cx','fbt','Button.react','MercuryGenericConstants','MessengerTextWithEmojiInput.react','React'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;l.prototype.render=function(){var m=i._("\u66ff\u6b64\u5c0d\u8a71\u547d\u540d");return (c('React').createElement('div',{className:"_56jk"},c('React').createElement(c('MessengerTextWithEmojiInput.react'),{'data-jsid':'nameInput',initialValue:this.props.defaultThreadName?this.props.defaultThreadName:'',maxLength:c('MercuryGenericConstants').MAX_THREAD_NAME_LENGTH,onReturn:function(){return this.$ChatNameConversationTabSheet1();}.bind(this),placeholder:m,ref:'input'}),c('React').createElement(c('Button.react'),{'data-jsid':'doneButton',type:'submit',use:'confirm',label:i._("\u5b8c\u6210"),onClick:function(){return this.$ChatNameConversationTabSheet1();}.bind(this)})));};l.prototype.$ChatNameConversationTabSheet1=function(){this.props.onDone(this.refs.input.getValue());};function l(){j.apply(this,arguments);}f.exports=l;}),null);
__d('ChatNewMessagesTabSheet.react',['cx','fbt','Link.react','React'],(function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=function k(l){return (c('React').createElement(c('Link.react'),{onClick:l.onClick},c('React').createElement('div',{className:"_2phz"},c('React').createElement('div',{className:"_1skc",'data-jsid':'image'}),c('React').createElement('div',{className:"_1skd",'data-jsid':'text'},i._("\u5f80\u4e0b\u6372\u52d5\u4ee5\u67e5\u770b\u65b0\u8a0a\u606f\u3002")))));};f.exports=j;}),null);
__d('ChatNoRecipientsTabSheet.react',['cx','fbt','React'],(function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=function k(){return (c('React').createElement('div',{className:"_2phz"},c('React').createElement('div',{className:"_1skc",'data-jsid':'image'}),c('React').createElement('div',{className:"_1skd",'data-jsid':'text'},i._("\u6240\u6709\u4eba\u90fd\u5df2\u96e2\u958b\u8a72\u5c0d\u8a71\u3002"))));};f.exports=j;}),null);
__d('ChatOfflineTabSheet.react',['cx','fbt','React','WorkModeConfig'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;l.prototype.render=function(){var m=this.props,n=m.turnOnChat,o=m.shortName,p=c('React').createElement('a',{href:'#',className:'fbChatGoOnlineLink',onClick:n},i._("\u958b\u555f\u804a\u5929\u5ba4")),q=void 0;if(c('WorkModeConfig').is_work_user){q=i._("\u82e5\u8981\u8207{name}\u548c\u5176\u4ed6\u540c\u4e8b\u804a\u5929\uff0c{link}\u3002",[i.param('name',o),i.param('link',p)]);}else q=i._("\u8207{name}\u548c\u5176\u4ed6\u670b\u53cb\u804a\u5929\uff0c{link}\u3002",[i.param('name',o),i.param('link',p)]);return (c('React').createElement('div',{className:"_2phz _1sk1"},c('React').createElement('div',{className:"_1skc",'data-jsid':'image'}),c('React').createElement('div',{className:"_1skd",'data-jsid':'text'},q)));};l.prototype.componentWillUnmount=function(){this.props.privacyActionController.destroy();};function l(){j.apply(this,arguments);}f.exports=l;}),null);
__d('ChatThreadIsMessageBlockedSheet.react',['cx','fbt','Link.react','React'],(function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=function k(l){return (c('React').createElement('div',{className:"_2phz"},c('React').createElement('div',{className:"_1skd _1zi5",'data-jsid':'text'},i._("\u5df2\u5c01\u9396\u4f86\u81ea{name}\u7684\u8a0a\u606f\u3002",[i.param('name',l.shortName)]),c('React').createElement(c('Link.react'),{'data-jsid':'unblockButton',onClick:l.onUnblock,className:"_2pir"},i._("\u89e3\u9664\u5c01\u9396")))));};f.exports=j;}),null);
__d('ChatThreadIsMutedTabSheet.react',['cx','fbt','React','Link.react'],(function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=function k(l){return (c('React').createElement('div',{className:"_2phz"},c('React').createElement('div',{className:"_yk1",'data-jsid':'text'},i._("\u9019\u6bb5\u5c0d\u8a71\u5df2\u95dc\u9589\u3002\u804a\u5929\u5ba4\u9801\u7c64\u4e0d\u6703\u5f48\u51fa\uff0c\u63a8\u64ad\u901a\u77e5\u4e5f\u5df2\u95dc\u9589\u3002"),c('React').createElement(c('Link.react'),{'data-jsid':'unmuteButton',className:"_2phz",onClick:l.onUnmute},i._("\u6062\u5fa9")))));};f.exports=j;}),null);
__d('ChatUploadWarningTabSheet.react',['cx','fbt','React'],(function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=function k(){return (c('React').createElement('div',{className:"_2phz"},c('React').createElement('div',{className:"_1skc",'data-jsid':'image'}),c('React').createElement('div',{className:"_1skd",'data-jsid':'text'},i._("\u8acb\u7b49\u5019\u4e0a\u50b3\u5b8c\u7562\uff0c\u518d\u50b3\u9001\u4f60\u7684\u8a0a\u606f\u3002"))));};f.exports=j;}),null);
__d('ChatUserBlockedTabSheet.react',['cx','fbt','Link.react','GenderConst','React'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;l.prototype.render=function(){var m=this.props,n=m.shortName,o=m.gender,p=null;switch(o){case c('GenderConst').FEMALE_SINGULAR:case c('GenderConst').FEMALE_SINGULAR_GUESS:p=i._("\u96d6\u7136\u4f60\u5df2\u95dc\u9589\u548c{name}\u7684\u804a\u5929\u5ba4\uff0c\u4f46\u4f60\u4ecd\u53ef\u50b3\u9001\u8a0a\u606f\u7d66\u5979\u3002",[i.param('name',n)]);break;case c('GenderConst').MALE_SINGULAR:case c('GenderConst').MALE_SINGULAR_GUESS:p=i._("\u96d6\u7136\u4f60\u5df2\u95dc\u9589\u548c{name}\u7684\u804a\u5929\u5ba4\uff0c\u4f46\u4f60\u4ecd\u53ef\u50b3\u9001\u8a0a\u606f\u7d66\u4ed6\u3002",[i.param('name',n)]);break;default:p=i._("\u96d6\u7136\u4f60\u5df2\u95dc\u9589\u548c{name}\u7684\u804a\u5929\u5ba4\uff0c\u4f46\u4f60\u4ecd\u53ef\u50b3\u9001\u8a0a\u606f\u7d66\u5c0d\u65b9\u3002",[i.param('name',n)]);}return (c('React').createElement('div',{className:"_2phz _1sk0"},c('React').createElement('div',{className:"_1skc",src:'/images/icon-report.gif','data-jsid':'image'}),c('React').createElement('div',{className:"_1skd",'data-jsid':'text'},p,c('React').createElement(c('Link.react'),{href:'#','data-jsid':'actionLink',onClick:this.$ChatUserBlockedTabSheet1.bind(this)},i._("\u5c0d{name}\u958b\u555f\u804a\u5929\u5ba4",[i.param('name',n)])))));};l.prototype.$ChatUserBlockedTabSheet1=function(){this.props.privacyActionController.togglePrivacy();};l.prototype.componentWillUnmount=function(){this.props.privacyActionController.destroy();};function l(){j.apply(this,arguments);}f.exports=l;}),null);