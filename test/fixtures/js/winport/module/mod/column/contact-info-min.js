(function(e,d){var a=d.mod.unit.WPAlitalk,b=d.widget.TraceLog;var c=new d.Class({init:function(g,f){this.div=g;this.config=f;this.initMap();this.feedBackTraceLog();this.initAlitalk()},initAlitalk:function(){var f=e("a[data-alitalk]",this.div);a.init(f)},initMap:function(){var f=e("div.map-container",this.div),g=null;if(!f.length){return}e.add("vas-zqx",{js:["http://style.china.alibaba.com/js/vas/hub/zqx.js"]});e.use("vas-zqx",function(){window.ZQX&&ZQX.init({prodid:"200",container:f[0],width:718,height:328,memberIds:d.Component.getDocConfig().uid,service:"map"})})},feedBackTraceLog:function(){var g=e("#doc").data("docConfig"),h={toid:d.Component.getDocConfig().uid,fromid:FE.util.lastLoginId||"notmember",sourcetype:this.config.contactFrom||"athena",domainType:g.isTopDomain?"www":"",time:e.now()},f=e.util.cookie("cosite");if(f){h.fromsite=f}new b(this.div,{when:"exposure",url:"http://page.china.alibaba.com/shtml/static/forfeedbacklog.html",param:h})}});d.ModContext.register("wp-contact-info-column",c)})(jQuery,Platform.winport);