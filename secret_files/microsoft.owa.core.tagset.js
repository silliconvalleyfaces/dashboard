﻿try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.owa.core.tagset.js'] = (new Date()).getTime();
Type.registerNamespace("_ts");_ts.g=function(){_ts.g.initializeBase(this);this.__type=_ts.g._dataContractName};_ts.h=function(n,t,i,r,u){_ts.h.initializeBase(this,[2]);this.q(n);this.bj=i;this.r="UpdateHashtags";this.bh=r;this.l=u;this.f=t;this.bk=new _a.j(t)};_ts.h.b=function(n){return n.bY()};_ts.h.a=function(n){return n.cd()};_ts.h.d=function(n,t){n.hR(t)};_ts.h.c=function(n,t){n.ej(t)};_ts.h.prototype={f:null,bh:null,l:!1,bk:null,bj:null,c:null,M:function(){return this.Y("V2015_10_15")},t:function(){for(var f=this.o.length,u=new Array(f),n=0;n<f;n++){this.c=_cmc.a.n(this.f,this.bj);var e=this.bn();var i=this.o[n].bk.ItemId;this.o[n].ej(this.c);var r=new _g.g(i.Id);r.ChangeKey=i.ChangeKey;var t=new _g.bq;t.ItemId=r;t.Updates=e;u[n]=t}return u},be:function(n,t){_h.fa.prototype.be.call(this,n,t);this.l&&this.bh.b(this.f)},R:function(){_a.cU.prototype.R.call(this);_h.c.c(_g.h,_a.j,this.o,"Hashtags",_ts.h.b,this.bk,_ts.h.d);_h.c.c(_g.h,_a.j,this.o,"AppliedHashtags",_ts.h.a,this.c,_ts.h.c)},bn:function(){var i=this.c.b();var t=new _g.v(new _g.d("AppliedHashtags"));t.Item=new _g.G;t.Item.AppliedHashtags=new Array(i);for(var n=0;n<i;n++)t.Item.AppliedHashtags[n]=this.c.a(n);return[t]}};function TagSetComponent(){}TagSetComponent.$$cctor=function(){_a.u.a().a(TagSetComponent)};TagSetComponent.prototype={a:function(n,t,i){var e=this;n.b(_ts.f,function(){return new _ts.f(n.a(_j.j),n.a(_a.f))}).b(IEntitySuggestionManager).a();var o=this;n.b(IHashtagViewModelFactory,function(){return new _ts.s(n.a(IEntitySuggestionManager),n.a(_j.j),n.a(IInferenceTracker),n.a(_a.f),n.a(_g.a),n.a(_a.y),n.d(IDeferredActionsFactory),n.d(IDeferredTypeLoader))});var f=this;n.b(IHashtagWellViewModelFactory,function(){return new _ts.t(n.a(_j.j),n.a(IInferenceTracker),n.a(_y.p),n.a(IEntitySuggestionManager))});var r=this;n.b(IHashtagFirstRunHelper,function(){return new _ts.m(n.c(IIntroductionControllerFactory))}).b(IHashtagFirstRunHelper).a();var u=this;n.b(IEntityLinkHandler,function(){return new _ts.n(n.a(_j.j),n.a(IBasePersonaViewModelFactory))}).b(IEntityLinkHandler).a()},b:function(){return[]}};_ts.p=function(n){_ts.p.initializeBase(this);this.c=n};_ts.p.prototype={c:null,K:function(n){var t=new _dg.bn;t.Tag=this.c;t.AppName="Outlook";var i=new _dg.bC(this.M());i.Body=t;var r=new _dg.bS(200);n.dl(i,r,this.I,this.G)},cJ:function(n){n.ResponseClass!=="Success"}};_ts.l=function(n){_ts.l.initializeBase(this);this.f=n};_ts.l.prototype={f:!1,c:null,K:function(n){var t=new _dg.bG;t.IndexedPageItemView=new _g.F("Beginning");t.RequestTagDetails=this.f;this.c&&(t.Context=this.c);var r=new _dg.cf(200);var i=new _dg.bF(this.M(),t);n.br(i,r,this.I,this.G)},cJ:function(n){n.ResponseClass!=="Success"||!n.ResultSet}};_ts.q=function(n){_ts.q.initializeBase(this);this.c=n};_ts.q.prototype={c:null,K:function(n){var i=new _dg.bs;i.Tag=this.c;var r=new _dg.cx(200);var t=new _dg.bM(this.M());t.Body=i;n.gh(t,r,this.I,this.G)},cJ:function(n){n.ResponseClass!=="Success"}};_ts.m=function(n){this.b=n};_ts.m.prototype={b:null,a:function(n){var t=this;this.b.a(function(t){var i=t.a(_nbs.a.kD,_nbs.a.IM,12,null,null,14);n(i)})}};_ts.n=function(n,t){this.d=n;this.c=t};_ts.n.prototype={d:null,c:null,b:function(n,t,i,r,u){return _cmc.a.o(n,t,r,this.d,u,10)},a:function(n,t,i,r){if(this.e(n,t,i)){var o=t.indexOf("mailto:")+7;var s=t.substring(o,t.length);var f=new _g.f;f.MailboxType="Unknown";f.EmailAddress=s;f.RoutingType="SMTP";var h=_h.i.a(f);var u=this.c.a(h,4,!0,0,!1,!1);var e=new _j.h($("#"+n).get(0));r.cz(u);u.U(e);u.P();u.b(!0);u.s();u.U(e);return!0}return!1},e:function(n,t,i){return!_j.i.a(n)&&!_j.i.a(i)&&!_j.i.a(t)&&n.startsWith("OWAAM")&&t.startsWith("mailto:")&&i.startsWith("@")?!0:!1}};_ts.f=function(n,t){this.o=Function.createDelegate(this,this.A);this.p=Function.createDelegate(this,this.C);this.q=Function.createDelegate(this,this.D);this.n=Function.createDelegate(this,this.z);this.s=Function.createDelegate(this,this.F);this.r=Function.createDelegate(this,this.E);this.m=Function.createDelegate(this,this.u);_ts.f.initializeBase(this);if(t){this.k=t.a().fk().Enabled&&t.a().fg().Enabled;this.l=t.a().fI().Enabled}this.I();this.G();this.g||_j.n.a().c(_ts.f.a,"LoadHashtagLists",this.m)};_ts.f.prototype={k:!1,l:!1,g:null,h:null,i:null,c:function(){return this.h},v:function(n){if(this.h!==n){this.h=n;this.eu("PersonalHashtagsFromServer")}return n},d:function(n){if(this.g){for(var r=this.g.length,t=0;t<r;t++){var i=this.g[t];if(i.toLocaleLowerCase()===n.toLocaleLowerCase()){this.g[t]=n;return}}Array.insert(this.g,0,n)}},w:function(n){var f=[];if(this.g){var i=this.g;if(i&&i.length>0){for(var u=i,o=u.length,r=0;r<o;++r){var s=u[r];var t=s;t.startsWith("#")&&t.length>1&&(n||(t=t.substr(1)));f.push(t)}var e=new _ts.r(i.length);_a.r.c.a(e)}}return f},f:function(n){this.x(n);var t=new _ts.q(n);t.e(this.r);_a.g.a.a(t);_h.l.a(_a.a.T,"HashtagHide",7,1,null)},E:function(n){this.u()},e:function(){return 7},a:function(n,t,i){var r=this.w(t);var e=new _j.q;if(n){for(var s=n.toLowerCase(),o=0,u=0;u<r.length;u++)if(r[u].toLowerCase().indexOf(s)>-1){e.c(r[u]);o++;if(i>0&&o>=i)break}}else if(i>0)for(var f=0;f<r.length&&f<i;f++)e.c(r[f]);else e.h(r);return e.j()},b:function(n){if(!this.k){var r=n?n.length:0;if(r>0){for(var u=[],t=0;t<r;t++){var i=n[t];Array.contains(this.h,i)||Array.enqueue(u,i)}this.t(u)}}},G:function(){if(this.l){var t=_g.b.a.nameToId("alltaggeditems");if(t){var n=new _g.M;n.NotificationType="HashtagsNotification";n.FolderId=t.Id;var i=new _h.D(n);i.l(_ts.f.a,"EntitySuggestionManager",this.s,1)}}},F:function(n){n.EventType!=="Reload"||this.i||(this.i=_j.n.a().a(_a.a.T,"OnTagDetailsChanged",this.n,3e4))},z:function(){this.i&&this.j()},I:function(){if(this.k){var t=_g.b.a.nameToId("tagitems");if(t){var n=new _g.M;n.NotificationType="RowNotification";n.FolderId=t.Id;var i=new _h.D(n);i.l(_ts.f.a,"EntitySuggestionManager",this.q,1)}}},D:function(n){n.EventType==="RowAdded"&&this.j()},u:function(){this.j();this.y()},t:function(n){if(!n.length){this.j();return}var r=Array.dequeue(n);var t=new _ts.p(r);var i=this;t.b(function(){i.t(n)});_a.g.a.a(t)},j:function(){this.i=null;var i=new _ts.l(this.l);var t,n;var r=[(t=new _gg.y,t.Key="AppName",t.Value="Outlook",t),(n=new _gg.y,n.Key="Scope",n.Value="Personal",n)];i.c=r;i.d(this.p);_a.g.a.a(i)},y:function(){var n=new _ts.l(!1);n.d(this.o);_a.g.a.a(n)},A:function(n){var t=n;t.N&&t.N.Body&&t.N.Body.ResultSet&&(this.g=t.N.Body.ResultSet)},C:function(n){var r=n;if(r.N&&r.N.Body){var i=r.N.Body;if(i.TagDetailsList&&i.TagDetailsList.length>0)this.v(r.N.Body.TagDetailsList);else{for(var f=i.ResultSet.length,e=new Array(f),t=0;t<f;t++){var u=new _ts.g;u.Tag=i.ResultSet[t];u.UnreadCount=0;e[t]=u}this.v(e)}}},x:function(n){for(var t=0;t<this.h.length;t++)this.h[t].Tag===n&&Array.remove(this.h,n);Array.contains(this.g,n)&&Array.remove(this.g,n)}};_ts.o=function(n){_ts.o.initializeBase(this);_j.s.b(n,"HashTagTreeViewModel");this.a=n};_ts.o.prototype={a:null,o:function(){return _u.n.PW},b:null,n:function(){return this.b},p:function(n){this.b=n;return n}};_ts.r=function(n){_ts.r.initializeBase(this,[1,"HashtagSuggestion"]);this.a.SuggestionCount=n};_ts.i=function(n,t,i,r,u,f){this.G=Function.createDelegate(this,this.P);_ts.i.initializeBase(this,[n,t,i,null,null,!1,r,u,null,null]);this.r=f;!f||this.s||this.h.bk.FolderId||this.w(!0)};_ts.i.a=function(n,t){n.y&&n.y.Id===t.h.bk.FolderId.Id&&n.n.L.a();n.E.f(t.h.bk.DisplayName);n.o.w(t)&&n.o.o(t,!0);n.z.o(t,!0)};_ts.i.prototype={r:!1,k:!1,O:function(){return null},w:function(n){if(this.k!==n){this.k=n;this.eu("IsHidden")}return n},E:function(){return[]},z:function(){var n=[];Array.contains(_ts.c.a,this.h.bk.DisplayName)&&this.i.v||Array.add(n,new _fm.d(_nbs.a.CW,null,new _j.g(this.G,this.j())));return n},K:function(){_j.e.c(_a.a.T,"HashtagTreeNodeViewModel : Dragging hashtag is not supported")},P:function(){this.r&&this.w(!0);var n=this.i;_ts.i.a(n,this)}};_ts.c=function(n,t,i,r,u,f,e,o){this.bg=Function.createDelegate(this,this.bG);this.bf=Function.createDelegate(this,this.bs);this.o=new _j.l;this.z=new _j.l;this.r=new _j.q;_ts.c.initializeBase(this,[null,!1,t,r,f,e,o,null]);this.V=i;this.E=n;this.A=u;this.bi=new _fm.f(null);this.I=this.A.a().bk.IsHashtagTreeCollapsed;this.E.apcl("PersonalHashtagsFromServer",this.bf);this.apcl("SelectedFolder",this.bg)};_ts.c.b=function(n,t){var r=n.h.bk.DisplayName.toLowerCase();var i=t.h.bk.DisplayName.toLowerCase();return r.localeCompare(i)};_ts.c.prototype={A:null,I:!1,bi:null,Y:null,S:null,J:null,bj:null,V:null,W:!1,X:!1,E:null,bE:function(){return this.I||this.bv()},bJ:function(n){if(n!==this.I){this.I=n;this.bH();this.ey("IsHashtagTreeCollapsed","HashtagsRootNodeToolTip")}if(this.A.a().bk.IsHashtagTreeCollapsed!==n){this.A.a().cD(n);_h.f.a(this.A.a().v,_a.g.a)}return n},bD:function(){return this.I?_u.R.Jp:_u.R.SG},bv:function(){return this.o.x.length?this.o.x.length===1?this.J.k:!1:!0},g:function(){this.bs(null,null)},P:function(n){_j.e.c(_a.a.T,"HashtagTreeViewModel.OnFolderNodeDeleted is not implemented")},c:function(n){var t=null;t=this.bu(this.o,n);if(!t){t=this.bu(this.z,n);if(!t){var i=this.bw(n);this.J.h.f(n);this.J.h.h(new _g.bQ(i,"Hashtag",n));t=this.J;this.bj=n}}t.w(!1);this.X=!0;this.q(t.h.bk.FolderId);this.X=!1;this.ey("IsHashtagTreeEmpty","IsHashtagTreeCollapsed");return t.h},m:function(n){for(var r=!1,u=this.o.x.length,t=0;t<u;t++){var i=this.o.x[t].h;if(i&&i.bk.FolderId&&n.bk.FolderId&&n.bk.FolderId.Id===i.bk.FolderId.Id){this.q(n.bk.FolderId);r=!0;break}}!r&&this.S&&this.q(this.S.h.bk.FolderId)},R:!1,a:function(n){this.R=n;return n},bh:null,d:function(n){this.bh=n;return n},b:function(){this.Y||(this.Y=new _ts.o(this));return this.Y},ex:function(){this.E.rpcl("PersonalHashtagsFromServer",this.bf);this.rpcl("SelectedFolder",this.bg);this.o.dispose();this.z.dispose();_y.gw.prototype.ex.call(this)},bu:function(n,t){for(var u=null,e=n.x.length,o=t.toLocaleLowerCase(),i=0;i<e;i++){var r=n.x[i];var f=r.h.bk.DisplayName;if(f&&f.toLocaleLowerCase()===o){u=r;break}}return u},bs:function(n,t){this.bA();this.W=!0;this.bI();this.W=!1},bA:function(){for(var i=this.o.x.length,t=0;t<i;t++)this.o.x[t].dispose();this.o.f();i=this.z.x.length;for(var n=0;n<i;n++)this.z.x[n].dispose();this.z.f();this.r.f()},bI:function(){var o=this.E.c();if(this.v){this.bx();if(o)for(var s=o,l=s.length,e=0;e<l;++e){var c=s[e];this.bC(this.r.j(),c)||this.r.c(c)}}else this.r.h(o);var h=this.r?this.r.d.length:0;var u=0;var t=[];if(h>0){for(var n=new _j.q,i=0;i<h;i++){var v=this.r.d[i].Tag;_j.i.a(v)?_j.e.b(_a.a.T,"[HashtagTreeViewModel] Hashtag name cannot be null"):n.c(this.bt(this.r.d[i],!1))}var r=n.j();if(this.v)this.o.m(r);else{u=n.d.length;var a=Math.min(u,5);Array.addRange(t,r.slice(0,a));n.k(_ts.c.b);r=n.j();this.z.m(r)}}t.push(this.by());if(!this.v&&u>5){var f=new _g.u;f.h(new _g.l("MoreHashtags"));f.f(_u.R.MP);this.S=new _ts.u(f,this,this.A,this.F,this.t);t.push(this.S)}this.o.m(t);this.ey("IsHashtagTreeEmpty","IsHashtagTreeCollapsed")},bx:function(){for(var n=0;n<_ts.c.a.length;n++){var t=new _ts.g;t.Tag=_ts.c.a[n];this.r.c(t)}},by:function(){var n=new _ts.g;n.Tag=this.bj;n.UnreadCount=0;this.J=this.bt(n,!0);return this.J},bt:function(n,t){var i=this.bB(n.Tag,t);i.i(n.UnreadCount);return new _ts.i(i,this,this.A,this.F,this.t,t)},bw:function(n){var i="Hashtag".toLowerCase();return i+"#"+n.substr(1)},bB:function(n,t){var i=new _g.u;i.v(_g.b.a.nameToId("msgfolderroot"));if(t&&!_j.i.a(n)||!t){var r=this.bw(n);i.h(new _g.bQ(r,"Hashtag",n));i.f(n)}return i},bG:function(n,t){var i=n.p;if(i&&!this.W&&!this.X){this.V&&this.bF(i.h.bk.DisplayName);_cmc.a.g(this.v||this.R?17:18,0)}},bF:function(n){var i=!1;var r=17;var u=this.v?this.r.j():this.E.c();var t=Array.indexOf(u,n);if(t>-1&&(this.v||t<5&&!this.R))i=!0;else if(this.R){i=!0;r=18;t=-1}i&&this.V.h(n,r,null,t)},bH:function(){var n=new _a.o;n.c("expand",!this.I);_h.l.a(_a.a.T,"HashtagTreeExpand",7,1,n)},bC:function(n,t){for(var u=n,f=u.length,i=0;i<f;++i){var r=u[i];if(r.Tag.toLocaleLowerCase()===t.Tag.toLocaleLowerCase()){r.UnreadCount=t.UnreadCount;return!0}}return!1}};_ts.s=function(n,t,i,r,u,f,e,o){this.e=n;this.f=t;this.h=i;this.g=r;this.i=u;this.b=f;this.c=e;this.d=o};_ts.s.prototype={e:null,f:null,g:null,i:null,b:null,c:null,d:null,h:null,a:function(){return new _ts.c(this.e,this.f,this.h,this.g,this.i,this.b,this.c,this.d)}};_ts.t=function(n,t,i,r){this.d=n;this.e=t;this.f=i;this.c=r};_ts.t.prototype={d:null,f:null,c:null,e:null,a:function(n,t){return new _ts.e(n,t,this.d,this.e,this.f)},b:function(n,t,i,r){return new _ts.h(n,t,i,this.c,r)}};_ts.u=function(n,t,i,r,u){_ts.u.initializeBase(this,[n,t,i,r,u,!1])};_ts.u.prototype={O:function(){return this.i.bh},bc:function(){return!0},z:function(){return[]}};_ts.e=function(n,t,i,r,u){this.r=Function.createDelegate(this,this.v);this.s=Function.createDelegate(this,this.w);_ts.e.initializeBase(this);this.h=n;this.m=t;this.k=i;this.q=r;this.j=u;this.o=new _j.g(this.s,_ts.e.a);this.p=new _j.g(this.r,_ts.e.a)};_ts.e.prototype={k:null,j:null,h:null,m:null,i:!1,n:!1,l:null,q:null,a:function(){return this.h},d:function(){return"IsDeleted"},b:function(){return this.i},c:function(n){if(this.i!==n){this.i=n;this.eu("IsDeleted")}return n},e:function(){return this.n},f:function(n){if(this.n!==n){this.n=n;this.eu("IsNew")}return n},g:function(n){this.l=n;return n},o:null,p:null,w:function(){var n=0;if(this.j&&this.j.a()){var t=this.j.a();if(t.d){n=8;_cmc.a.d(n,this.h,this.k)}else if(t.a){n=this.j.a().a;_cmc.a.d(n,this.h,this.k)}else{this.t();_cmc.a.h(this.h,this.k,8)}}},t:function(){this.q.h(this.h,8,this.m?this.m:null,-1)},v:function(){this.c(!0);this.l&&this.l();_h.l.a(_a.a.T,"HashtagRemove",7,1,null)}};_ts.v=function(n,t,i,r,u,f,e){_ts.v.initializeBase(this,[n]);this.bJ=t;this.bO=i;this.cb=r;this.bK=u;this.bQ=f;this.bP=e;this.w(!0)};_ts.v.prototype={bJ:null,bO:null,cb:null,bK:null,bQ:null,bP:null,q:null,bb:null,bR:null,bd:!1,co:function(n){this.q!==n&&(this.q=n);return n},cp:function(n){this.bR=n;this.x().i=this.bR;return n},bC:function(){this.Y()?this.ce():this.bd=!0},cc:function(){this.x().f()},x:function(){if(!this.bb){this.bb=new _cmc.bi(this.bJ,this.bO,this.cb,this.bK,this.bQ,this.bP);this.bb.g=1}return this.bb},bx:function(){var n=_j.h.prototype.bx.call(this);return n?n.concat(this.x()):[this.x()]},cg:function(n){_fc.i.prototype.cg.call(this,n);var t=n.a();if((t===8||t===_ff.i.a)&&this.q&&this.q.b&&this.cm()){n.b();this.q.a()}},O:function(){_fc.i.prototype.O.call(this);this.bh(256)},G:function(){_fc.i.prototype.G.call(this);if(this.bd){this.bd=!1;this.ce()}},cm:function(){return(_j.B.a(this.u())||!this.u())&&this.u()===this.cN()},ce:function(){this.P();this.bu(this.cQ(this.b.length));this.x().I()}};_ts.j=function(){};_ts.j.a=function(){return _fm.b.a(_fm.a.c,"ms-fcl-ns-b",_fm.WebfontSizes.a.t)};_ts.j.b=function(){return _fm.b.a(_fm.a.c,"ms-fcl-nd-b",_fm.WebfontSizes.a.t)};_ts.j.c=function(){return _fm.b.a(_fm.a.a,"ms-fcl-w-b",_fm.WebfontSizes.a.f)};_ts.k=function(n){_ts.k.initializeBase(this,[n])};_ts.k.prototype={a:function(){return this.e()?_ts.j.c():_y.e.e()},v:function(){this.bs("CloseButtonImageId");_fce.e.prototype.v.call(this)}};_ts.d=function(n,t){this.c=Function.createDelegate(this,this.g);this.d=Function.createDelegate(this,this.h);_ts.d.initializeBase(this,[n,t]);this.y("TagListView")};_ts.d.prototype={b:!1,i:function(n){if(this.b!==n){n||this.be(null);this.b=n;this.bs("IsInEditMode")}return n},bx:function(){var i=new _fc.c;i.i("LEFTARROW");i.j=0;i.k=new _j.g(this.me,_ts.d.a);i.n=!0;var r=new _fc.c;r.i("RIGHTARROW");r.j=0;r.k=new _j.g(this.md,_ts.d.a);r.n=!0;var n=new _fc.c;n.i("DELETE");n.j=0;n.k=new _j.g(this.d,_ts.d.a);n.n=!0;var t=new _fc.c;t.i("BACKSPACE");t.j=0;t.k=new _j.g(this.c,_ts.d.a);t.n=!0;var u=new _fc.g;u.a([i,r,n,t]);return[u]},eT:function(){this.a(3,!1)},eV:function(){this.a(2,!1)},f:function(n){return this.a(2,!0)},a:function(n,t){var i=this.e(n);i===-1&&n===2&&t&&(i=this.e(3));if(i!==-1&&i!==this.dN())this.be(this.v().c(i));else{this.be(null);this.bs(_ts.b.b)}return i},e:function(n){var r=this.dr();var i=0;switch(n){case 3:i=1;break;case 2:r===-1&&(r=this.dN());i=-1;break;default:return-1}for(var t=r+i,u=!1;t>=0&&t<this.dN()&&(u=this.v().c(t).b());)t+=i;return u?-1:t},g:function(){this.w()&&this.w().c(!0);this.a(2,!0)},h:function(){this.w()&&this.w().c(!0);this.a(3,!1)}};_ts.b=function(n,t,i,r){this.bO=Function.createDelegate(this,this.cp);this.o=Function.createDelegate(this,this.cz);this.bJ=Function.createDelegate(this,this.cl);this.w=Function.createDelegate(this,this.ck);this.bk=Function.createDelegate(this,this.cf);this.bd=Function.createDelegate(this,this.cw);this.bb=Function.createDelegate(this,this.cv);this.bg=Function.createDelegate(this,this.cE);this.bP=Function.createDelegate(this,this.ct);this.bK=Function.createDelegate(this,this.co);this.be=Function.createDelegate(this,this.cx);this.x=Function.createDelegate(this,this.bW);this.bQ=Function.createDelegate(this,this.cu);_ts.b.initializeBase(this,[n]);this.y("TagSetContainer");this.k=t;this.p=r;this.bU=i;this.bp=new _j.g(this.bQ,_ts.b.a);this.bR=new _j.g(this.x,_ts.b.a);this.br=new _j.g(this.be,_ts.b.a);this.bu=new _j.g(this.bK,_ts.b.a);this.s(!0);this.bh(5);this.u=!1;this.cq()};_ts.b.prototype={k:null,f:!1,u:!1,v:!1,q:"",n:null,r:!1,bU:null,t:!1,g:null,p:null,m:null,j:!1,h:null,b:null,cD:function(n){if(this.g!==n){this.g=n;this.bs("IntroductionController")}return n},cc:function(n){if(this.t!==n){this.t=n;this.bs("ShouldShowIntroductionPeek")}return n},bp:null,br:null,bu:null,bR:null,s:function(n){if(this.r!==n){this.r=n;this.bs("IsTextboxFocused")}return n},cB:function(n){if(this.f!==n){n&&this.i(!1);this.f=n;this.bv("InEditMode","IsInEditOrPopOutMode")}return n},a:function(n){if(this.f){for(var i=this.c().x.length-1;i>=0;i--){var r=this.n.x[i];if(!r.b()&&!r.a().localeCompare(n.a())){this.bB();return}}var t=this.k.a(n.a(),null);t.f(!0);t.g(this.bP);this.c().a(t);this.i(!0)}this.bB()},cm:function(){return this.f||this.W().M()},ce:function(n){this.u=n;this.bs("ShowAddTag");return n},cb:function(n){this.q=n;this.bs("HashtagsText");return n},c:function(){this.n||(this.n=new _j.l);return this.n},bC:function(n){this.cj(n);this.bs("TagCollection");return n},e:function(){return this.W()},d:function(){return this.e()&&this.e().g()?this.e().g().c():null},I:function(){_j.c.prototype.I.call(this);this.h=this.C.a("TagListView");this.h.apcl(_ts.b.b,this.bg);this.b=this.C.a("HashtagsTextBox")},bq:function(){this.bW();_j.bk.prototype.bq.call(this);if(this.e()){this.e().rpcl("EditHashtags",this.bb);this.d()&&this.d().rpcl("ReadingPaneListViewTransitionState",this.bd);this.e().rpcl("TagList",this.bk)}},Z:function(){_j.h.prototype.Z.call(this);if(this.e()){this.d()&&this.d().apcl("ReadingPaneListViewTransitionState",this.bd);this.e().apcl("EditHashtags",this.bb);this.e().apcl("TagList",this.bk);this.cf(null,null)}else this.bC(new _j.l)},cf:function(n,t){this.bC(this.e().cw())},G:function(){_j.c.prototype.G.call(this);this.m=this.C.a("ShareHashtagsButton");this.i(!1)},bt:function(){this.cy(5);this.h.rpcl(_ts.b.b,this.bg);this.s(!1);this.g&&this.g.d(this.w);_j.c.prototype.bt.call(this)},bx:function(){var t=new _fc.c;t.i("ESC");t.j=0;t.k=new _j.g(this.x,_ts.b.a);var n=new _fc.c;n.i("ENTER");n.j=0;n.k=new _j.g(this.be,_ts.b.a);var i=new _fc.g;i.a([t,n]);return[i]},M:function(){_j.c.prototype.M.call(this);this.l(!1);this.i(!1)},cK:function(n){this.bX(!0);_j.h.prototype.cK.call(this,n)},ch:function(n){this.bX(!1);_j.h.prototype.ch.call(this,n)},bM:function(n){if(this.f&&this.b){n.c();this.b.bC()}},cv:function(n,t){this.l(!0)},bX:function(n){this.f||this.ce(n&&!!this.c().x.length)},i:function(n){this.m&&this.m.p(n)},co:function(){this.s(!1);var n=this.c().x.length;if(n>0){var t=this.h.f(this.c().x[n-1]);t!==-1&&this.h.P()}},cw:function(n,t){if(this.d()&&!this.d().a)if(this.d().b&&this.d().f===1&&this.j){this.j=!1;_j.n.a().c(_a.a.T,"TagSetContainer:SetFocusOnTagWell",this.bJ)}else!this.d().b&&this.b&&this.b.cc()},cl:function(){this.b&&this.b.bC()},ca:function(){var n=[];var t=this;this.c().n(function(i){var r=i;r.c(!1);r.e()&&n.push(r);r.rpcl(r.d(),t.o)});this.bZ(n)},cz:function(n,t){this.i(!0)},cu:function(){this.ce(!1);this.l(!0)},l:function(n){this.cB(n);var t=this;this.c().n(function(i){var r=i;n&&r.apcl(r.d(),t.o)});n?this.bB():this.bY(!1)},bB:function(){if(this.b){this.b.c("#");this.bY(this.f)}},bY:function(n){this.j=!1;n?this.d()&&!this.d().a&&this.d().f!==1?this.j=!0:this.b&&this.b.bC():this.b&&this.b.cc()},bW:function(){this.b&&this.b.c("");this.ca();this.l(!1);!this.c().x.length&&this.e()&&this.e().bz(!1)},cx:function(){if(this.m.t()){var f=[];var n=[];var i=new _j.l;n.push(this.q);for(var u=0;u<3;u++)n=this.cF(n," ,;".charAt(u));this.cA(n);var o=this;this.c().n(function(n){var t=n;if(t.b())f.push(t);else{i.a(o.k.a(t.a(),null));t.e()&&t.f(!1)}});this.bZ(f);for(var r=0;r<n.length;r++){var t=n[r];if(!_j.i.a(_cmc.a.a(t,!0))){t.charAt(0)!=="#"&&(t="#"+t);var e=this.k.a(t,null);i.a(e)}}this.bC(i);this.ca();this.W().cC(i);this.cb("");this.l(!1);this.c().x.length>0&&this.cJ();_h.l.a(_a.a.T,"HashtagCreate",8,0,null)}},bZ:function(n){for(var i=0;i<n.length;i++){var t=n[i];this.c().o(t,!0);t.rpcl("IsDeleted",this.o);t.dispose()}},cp:function(n,t){if(n&&t&&!String.isInstanceOfType(n)&&!_ts.e.isInstanceOfType(t))return!1;var r=n.toString().toLowerCase();var i=t.h.substr(1).toLowerCase();return!r.localeCompare(i)&&!t.i?!0:!1},cj:function(n){this.c().f();if(n){var t=this;n.n(function(n){t.c().a(n)})}},cF:function(n,t){for(var r=[],u=n.length,i=0;i<u;i++)r.push.apply(r,n[i].split(t));return r},cA:function(n){for(var i=[],f=n.length,t=0;t<f;t++){for(var e=n[t].toString().toLowerCase(),r=t+1;r<f;r++){var o=n[r].toString().toLowerCase();e.localeCompare(o)||i.push(n[t])}this.c().w(e,this.bO)&&i.push(n[t])}for(var u=0;u<i.length;u++)Array.remove(n,i[u])},cq:function(){if(this.p){var n=this;this.p.a(function(t){n.cD(t);n.v=!0;n.g.c(n.w)})}},cJ:function(){if(this.v&&_y.R.b(14)){this.cc(!0);var n=this;_j.n.a().a(this.F(),"TryShowIntroductionPopup",function(){n.g.e();n.v=!1},1e3)}},ck:function(){this.cc(!1)},cE:function(n,t){!this.b||this.c().x.length&&this.h.w()||this.b.P()},ct:function(){this.b&&this.b.bC()}};_ts.a=function(){};_ts.a.$$cctor=function(){_ts.a._I()};_ts.a.R=function(){var n=window.document.createElement("DIV");n.innerHTML="<div> <div class='_ts_5'></div>  </div><div> <div class='_ts_6'> <button type='button' class='_ts_7'></button> <button type='button' class='_ts_9 ms-fwt-sb'></button> </div> </div><div><div></div></div><div> <div class='_ts_2 ms-bcl-nl'> <div class='_ts_4'> <div class='_ts_5 ms-bcl-nl'></div> <div class='_ts_e'> <input autoid=\"_ts_0\" class='_ts_b ms-font-m'/> </div> </div> <button autoid=\"_ts_1\" type='button' class='_ts_a'></button> <div class='_ts_d'> <button autoid=\"_ts_2\" type='button' class='ms-font-s ms-fwt-sb _ts_c'></button> </div> </div>  </div><div> <div></div> </div><div>  <div></div> <div></div>  </div><div>  <div></div> <div class='_ts_f'> <div></div> </div>  </div><div>  <div tabindex=\"0\" class='_ts_g'>  <span role=\"tree\" class='firstHeaderTreeNodeRow nowrap'> <span> <button type='button' class='firstLevelTwisty ms-fwt-r'></button> </span> <span class='firstLevelFolderHead  ms-fwt-sl ms-font-l'></span> </span> </div> <div></div> </div><div> <div class='_ts_l'>  <div class='_ts_h nowrap border-color-transparent'> <div class='_ts_i'> <span class='_ts_j ms-font-m ms-fwt-sl'></span> <div class='_ts_o'> <span class='ms-font-m ms-font-color-themePrimary ms-font-weight-semibold _ts_n'></span> </div>  <button type='button' class='_ts_m ms-fwt-r ms-fcl-ns'></button> </div> </div> </div> </div><div>  <div class='_ts_p'> </div> <div></div> </div>";_j.h.a().appendChild(n);return n};_ts.a.bu=function(n){return n.i};_ts.a.F=function(n){return n.X};_ts.a.bE=function(n){return _ts.b.isInstanceOfType(n)?n.cm():null};_ts.a.T=function(n){return n.e()};_ts.a.bv=function(n){return n.h};_ts.a.bs=function(n){return n.o};_ts.a.U=function(n){return n.c};_ts.a.bz=function(n){return _ts.d.isInstanceOfType(n)?n.b:null};_ts.a.bt=function(n){return n.p};_ts.a.by=function(n){return n.a()};_ts.a.l=function(n){return n.f};_ts.a.bJ=function(n){return n.c()};_ts.a.bD=function(n){return n.q};_ts.a.W=function(n){return n.b};_ts.a.bK=function(n){return n.bu};_ts.a.bF=function(n){return n.r};_ts.a.V=function(n){return n.j};_ts.a.bC=function(n){return n};_ts.a.bI=function(n){return n.u};_ts.a.bB=function(n){return n.bp};_ts.a.bG=function(n){return n.br};_ts.a.b=function(n){return n.X};_ts.a.bH=function(n){return _ts.b.isInstanceOfType(n)?n.t:null};_ts.a.H=function(n){return _ts.b.isInstanceOfType(n)?n.g:null};_ts.a.L=function(n){return n.b()};_ts.a.bR=function(n){return n.b()};_ts.a.bj=function(n){return n.k()};_ts.a.bf=function(n){return _j.h.isInstanceOfType(n)?n.z:null};_ts.a.bq=function(n){return n.z};_ts.a.v=function(n){return n.c()};_ts.a.x=function(n){return _n.c.isInstanceOfType(n)?n.bB:null};_ts.a.w=function(n){return _n.c.isInstanceOfType(n)?n.bu:null};_ts.a.f=function(n){return _n.c.isInstanceOfType(n)?n.br:null};_ts.a.q=function(n){return n.a};_ts.a.J=function(n){return n.p};_ts.a.N=function(n){return n.f};_ts.a.I=function(n){return n.w};_ts.a.t=function(n){return n.h};_ts.a.m=function(n){return n.bk.DisplayName};_ts.a.s=function(n){return n.n};_ts.a.p=function(n){return n.q()};_ts.a.bP=function(n){return n.y};_ts.a.bl=function(n){return n.O()};_ts.a.bO=function(n){return n.s};_ts.a.bV=function(n){return n.d()};_ts.a.bW=function(n){return n.f()};_ts.a.G=function(n){return n.bi};_ts.a.B=function(n){return n.k()};_ts.a.r=function(n){return n.bE()};_ts.a.bo=function(n){return n.bD()};_ts.a.bn=function(n){return n.o};_ts.a.bm=function(n){return n.k};_ts.a.bT=function(n){return n.er()};_ts.a.u=function(n){return n.bc()};_ts.a.bN=function(n){return n.Z};_ts.a.bZ=function(n){return n.c()};_ts.a.bp=function(n){return n.bv()};_ts.a.bY=function(n){return _n.c.isInstanceOfType(n)?n.be:null};_ts.a.bX=function(n){return _n.c.isInstanceOfType(n)?n.bp:null};_ts.a.bd=function(n){return n.W()};_ts.a.bU=function(n){return n.a};_ts.a.bQ=function(n){return n.x};_ts.a.e=function(n,t){n.J(t)};_ts.a.A=function(n,t){n.k(t)};_ts.a.i=function(n,t){n.T(t)};_ts.a.j=function(n,t){n.l(t)};_ts.a.bA=function(n,t){n.i(t)};_ts.a.S=function(n,t){n.bk(t)};_ts.a.bL=function(n,t){n.cb(t)};_ts.a.Y=function(n,t){n.c(t)};_ts.a.bw=function(n,t){n.co(t)};_ts.a.bM=function(n,t){n.s(t)};_ts.a.X=function(n,t){n.o(t)};_ts.a.bx=function(n,t){n.cp(t)};_ts.a.n=function(n,t){n.m(t)};_ts.a.k=function(n,t){n.bn(t)};_ts.a.bi=function(n,t){n.c(t)};_ts.a.bh=function(n,t){n.g(t)};_ts.a.bS=function(n,t){n.a(t)};_ts.a.bk=function(n,t){n.j(t)};_ts.a.bg=function(n,t){n.d(t)};_ts.a.M=function(n,t){n.e(t)};_ts.a.y=function(n,t){n.bJ(t)};_ts.a.d=function(n,t){n.k=t};_ts.a.P=function(n,t){n.h(t)};_ts.a.K=function(n,t){n.D(t)};_ts.a.Q=function(n,t){n.g(t)};_ts.a.O=function(n,t){n.j(t)};_ts.a.ch=function(n,t){n.cq(t)};_ts.a.ca=function(n,t){n.bY(t)};_ts.a.cc=function(n,t){n.da(t)};_ts.a.cb=function(n,t){n.dL(t)};_ts.a.ce=function(n,t){n.v(t)};_ts.a.cf=function(n,t){n.bP(t)};_ts.a.cg=function(n,t){n.bQ(t)};_ts.a.D=function(n,t){n.c(t)};_ts.a.E=function(n,t){n.r(t)};_ts.a.C=function(n,t){n.j(t)};_ts.a.z=function(n,t){n.s(t)};_ts.a.bb=function(n,t){n.o(t)};_ts.a.Z=function(n,t){n.v(t)};_ts.a.bc=function(n,t){n.bQ(t)};_ts.a.ba=function(n,t){n.bb(t)};_ts.a.o=function(n,t){n.a(t)};_ts.a.br=function(n,t){n.bJ(t)};_ts.a.cd=function(n,t){n.s(t)};_ts.a.ci=function(n,t){n.a=t};_ts.a.be=function(n,t){n.ba(t)};_ts.a.h=function(){_ts.a.g||(_ts.a.g=new _fc.k);return _ts.a.g};_ts.a._I=function(){var i="TagSetContainer._tid1";new _j.d(i,function(){_ts.a.a[i]===undefined&&(_ts.a.a[i]=[null]);var t=_ts.a.c.childNodes[0].cloneNode(!0);var n=new _fce.d(t.children[0]);return new _j.a(t,[n]).l({ListPanel:n})},"",_y.Z,_ts.d,function(n){return new _ts.d(n,_j.b.Instance.a(_ff.a))},!1,!0,!1,0,_ts.a.a);var r="TagSetContainer.TagListItemView";new _j.d(r,function(){_ts.a.a[r]===undefined&&(_ts.a.a[r]=[[[-1,0,["IsDeleted"],[_ts.a.bu],null,"IsHidden",null,_ts.a.e,1,null,null,!0],[-1,5,["TemplatedParent","TemplatedParent","IsInEditOrPopOutMode"],[_ts.a.F,_ts.a.F,_ts.a.bE],null,"_ts_8",null,null,1,null,null,null],[-1,5,["IsSelected"],[_ts.a.T],null,"ms-bgc-tp ms-fcl-w:ms-bgc-nlr ms-fcl-np",null,null,1,null,null,null]],[[-1,0,["Name"],[_ts.a.bv],null,"Text",null,_ts.a.A,1,null,null,null],[-1,0,["ClickCommand"],[_ts.a.bs],null,"ClickCommand",null,_ts.a.i,1,null,null,null],[-1,5,["ListView","IsInEditMode"],[_ts.a.U,_ts.a.bz],null,"ms-fwt-sb:ms-fwt-r",null,null,1,null,null,null]],[[-1,1,["CloseButtonImageId"],[_ts.a.by],null,"ImageId",null,_ts.a.j,1,null,null,null],[-1,0,["DeleteCommand"],[_ts.a.bt],null,"ClickCommand",null,_ts.a.i,1,null,null,null]]]);var n=_ts.a.c.childNodes[1].cloneNode(!0);var u=new _fc.b(_j.a.a(n,[0,1]));u.c("ms-bgc-nta");var t=new _fc.b(_j.a.a(n,[0,0]));t.d("ms-fcl-w ms-bgc-tp");t.c("ms-bgc-nl");var i=new _j.h(n.children[0]);i.A(-1);return new _j.a(n,[i,t,u])},"",_ts.e,_ts.k,function(n){return new _ts.k(n)},!1,!1,!1,0,_ts.a.a);var n="TagSetContainer";new _j.d(n,function(){_ts.a.a[n]===undefined&&(_ts.a.a[n]=[[[-1,5,["InEditMode"],[_ts.a.l],null,"_ts_3",null,null,1,null,null,null]],[[-1,1,["InEditMode"],[_ts.a.l],null,"IsInEditMode",null,_ts.a.bA,1,null,null,!1],[-1,1,["TagCollection"],[_ts.a.bJ],null,"DataSource",null,_ts.a.S,1,null,null,null]],[[-1,1,["InEditMode"],[_ts.a.l],null,"IsHidden",null,_ts.a.e,1,_ts.a.h(),null,!0],[-1,1,["HashtagsText"],[_ts.a.bD],_ts.a.bL,"Text",_ts.a.W,_ts.a.Y,2,null,null,null],[-1,1,["TextBoxBackspaceCommand"],[_ts.a.bK],null,"BackOutCommand",null,_ts.a.bw,1,null,null,null],[-1,1,["IsTextboxFocused"],[_ts.a.bF],_ts.a.bM,"HasFocus",_ts.a.V,_ts.a.X,2,null,null,!1],[-1,1,["HashtagsHandler"],[_ts.a.bC],null,"HashtagsHandler",null,_ts.a.bx,1,null,null,null]],[[-1,4,null,null,null,"ImageId",null,_ts.a.j,0,null,null,null,_ts.j.a()],[-1,4,null,null,null,"HoveredImageId",null,_ts.a.n,0,null,null,null,_ts.j.b()],[-1,4,null,null,null,"Title",null,_ts.a.k,0,null,null,null,_nbs.a.ZR],[-1,1,["ShowAddTag"],[_ts.a.bI],null,"IsHidden",null,_ts.a.e,1,_ts.a.h(),null,!0],[-1,1,["EditCommand"],[_ts.a.bB],null,"ClickCommand",null,_ts.a.i,1,null,null,null]],[[-1,4,null,null,null,"Text",null,_ts.a.A,0,null,null,null,_u.n.Mp],[-1,4,null,null,null,"Title",null,_ts.a.k,0,null,null,null,_nbs.a.FA],[-1,1,["InEditMode"],[_ts.a.l],null,"IsHidden",null,_ts.a.e,1,_ts.a.h(),null,!0],[-1,1,["ShareCommand"],[_ts.a.bG],null,"ClickCommand",null,_ts.a.i,1,null,null,null]]]);var u=_ts.a.c.childNodes[3].cloneNode(!0);var i=new _fc.b(_j.a.a(u,[0,2,0]));i.g("ms-fcl-nt ms-bgc-nlr");i.f(" ms-fcl-w ms-bgc-tp");i.c("ms-fcl-w ms-bgc-td");i.d("ms-fcl-w ms-bgc-td");var t=new _b.J(_j.b.Instance.a(_b.o),_j.b.Instance.a(_b.a),_j.b.Instance.a(_y.a),_j.b.Instance.a(_j.j),_j.b.Instance.a(_ff.b));t.V(_j.f.a(["ContextParent","ShouldShowIntroductionPeek"],[_ts.a.b,_ts.a.bH],null,"IsEnabled",null,_ts.a.bi,1,null,null,!1)).V(_j.f.a(["ContextParent","IntroductionController","IntroductionPeekContentViewModel"],[_ts.a.b,_ts.a.H,_ts.a.L],null,"PeekDataContext",null,_ts.a.bh,1)).V(_j.f.a(["ContextParent","IntroductionController","IntroductionPeekContentViewModel","IsShown"],[_ts.a.b,_ts.a.H,_ts.a.L,_ts.a.bR],_ts.a.bS,"IsShown",_ts.a.bj,_ts.a.bk,2,null,null,!1)).V(_j.f.a(["ContextParent","DOMElement"],[_ts.a.b,_ts.a.bf],null,"AnchorElement",null,_ts.a.bg,1));t.bm(0);t.D=!0;t.f("IntroductionPeekContentView");t.i(2);t.n(10);i.D([t]);var f=new _fc.b(_j.a.a(u,[0,1]));f.f("ms-bgc-nlr");f.c("ms-bgc-nl-h");f.d("ms-fcl-w ms-bgc-nta");var e=new _ts.v(_j.a.a(u,[0,0,1,0]),_j.b.Instance.a(_fc.f),_j.b.Instance.a(_j.j),_j.b.Instance.a(_ff.a),_j.b.Instance.a(_ff.b),_j.b.Instance.a(_a.f),_j.b.Instance.a(IFindTagResultViewModelFactory));e.a(32);var r=new _ts.d(_j.a.a(u,[0,0,0]),_j.b.Instance.a(_ff.a));r.bd=!0;r.x(function(){var t=_ts.a.c.childNodes[2].cloneNode(!0).childNodes[0];var n=new _ts.k(t);n.y("TagSetContainer.TagListItemView");return n});r.y("TagSetContainer._tid1");var o=new _j.h(u.children[0]);return new _j.a(u,[o,r,e,f,i]).l({TagListView:r,HashtagsTextBox:e,ShareHashtagsButton:i}).b(r)},"",_y.Z,_ts.b,function(n){return new _ts.b(n,_j.b.Instance.a(IHashtagWellViewModelFactory),_j.b.Instance.a(_j.j),_j.b.Instance.a(IHashtagFirstRunHelper))},!1,!1,!1,0,_ts.a.a);var t="TagSetContainerWrapper";new _j.d(t,function(){_ts.a.a[t]===undefined&&(_ts.a.a[t]=[null]);var i=_ts.a.c.childNodes[4].cloneNode(!0);var n=new _ts.b(i.children[0],_j.b.Instance.a(IHashtagWellViewModelFactory),_j.b.Instance.a(_j.j),_j.b.Instance.a(IHashtagFirstRunHelper));return new _j.a(i,[n]).b(n)},"",_y.Z,_j.c,function(n){return new _j.c(n)},!1,!1,!1,0,_ts.a.a)};_ts.g.registerClass("_ts.g",_ff.e,0);_ts.h.registerClass("_ts.h",_h.cL);TagSetComponent.registerClass("TagSetComponent",null,_a.ic,_j.ce);_ts.p.registerClass("_ts.p",_h.cO.$$(_dg.bT,_dg.bU));_ts.l.registerClass("_ts.l",_h.cO.$$(_dg.cg,_dg.ch));_ts.q.registerClass("_ts.q",_h.cO.$$(_dg.cy,_dg.cz));_ts.f.registerClass("_ts.f",_a.jb,IEntitySuggestionManager);_ts.o.registerClass("_ts.o",_a.bB,_y.er);_ts.r.registerClass("_ts.r",_a.br);_ts.i.registerClass("_ts.i",_y.br);_ts.c.registerClass("_ts.c",_y.gw,IHashtagTreeViewModel);_ts.u.registerClass("_ts.u",_ts.i);_ts.e.registerClass("_ts.e",_a.bB,ITagViewModel,_j.bp,Sys.IDisposable);_ts.v.registerClass("_ts.v",_fc.i);_ts.k.registerClass("_ts.k",_fce.e);_ts.d.registerClass("_ts.d",_fce.a);_ts.b.registerClass("_ts.b",_j.c,_y.go);_ts.g._dataContractName="TagDetails:#Exchange";TagSetComponent.$$cctor();_ts.m.a=_a.a.T;_ts.n.a=_a.a.T;_ts.f.a=_a.a.T;_ts.c.a=["#Newsletters","#Travel","#Promotions","#Purchases"];_ts.e.a=_a.a.T;_ts.d.a=_a.a.T;_ts.b.b="SetFocusOnInputTextBox";_ts.b.a=_a.a.T;_ts.a.c=_ts.a.R();_ts.a.g=null;_ts.a.a={};_ts.a.$$cctor();
window.scriptsLoaded['microsoft.owa.core.tagset.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.owa.core.tagset.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }
