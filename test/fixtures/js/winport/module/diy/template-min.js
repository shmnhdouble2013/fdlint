(function(g,f){var a=f.widget.Dialog,c=f.diy.Diy,e=f.diy.Msg,b=f.diy.Component;var d={apply:function(j,i){if(this._running){return}var h=this;i=this._prepareOptions(i);this._showLoading("正在应用模板，请稍候...");this._applySkin(j.skinUrl);this._applyCustomStyles(j.customStyles||[]);this._postApply(j.templateKey,{success:function(k){h._postApplySuccess(k,i)},error:function(k){h._hideLoading();h._restoreCustomStyles();h._restoreSkin();e.error(k);i.error()}})},_applySkin:function(h){if(!h){return}var j=g("#skin-link"),i=j.attr("href");if(i===h){return}j.attr("href",h);this._lastSkinUrl=i},_restoreSkin:function(){var i=g("#skin-link"),h=this._lastSkinUrl;if(h){i.attr("href",h);this._lastSkinUrl=null}},_applyCustomStyles:function(j){var i=g("#custom-style"),h=[];g.each(j,function(){var k=this;(k.isEnable||k.enabled)&&h.push(k.styleContent)});this._lastCustomStyles=i.html();i.html(h.join("\n"))},_restoreCustomStyles:function(){var i=g("#custom-style"),h=this._lastCustomStyles;if(h){i.html(h);this._lastCustomStyles=null}},_postApply:function(m,j){var h=this,k=b.getDocConfig(),i=k.applyTemplateUrl,l={templateKey:m};i="mock.json";if(!i){throw new Error("please specify applyTemplateUrl")}c.authAjax(i,{type:"POST",dataType:"json",data:l,success:function(n){if(n.success){j.success(n)}else{j.error("应用模板失败，请刷新后重试")}},error:function(){j.error("网络繁忙，请刷新后重试")}})},_postApplySuccess:function(j,i){var h=this,k=function(){h._hideLoading();e.info("应用模板成功");i.success()};j.needReload?this._reloadPageContent(k):k()},_reloadPageContent:function(k){var j=b.getDocConfig(),i=j.getDiyPageContentUrl,h=function(){window.location.reload()};i="mock.htm";if(!i){throw new Error("please specify getDiyPageContentUrl")}g.ajax(i,{type:"GET",success:g.proxy(this,"_reloadPageContentSuccess",k,h),error:h})},_reloadPageContentSuccess:function(j,h,i){if(!i||/<html[^>]*>/i.test(i)){h();return}g("#content").html(i);f.ModContext.refresh();g(window).trigger("pagecontentreload");g.log("pagecontentreload");j()},backup:function(j){if(this._running){return}var h=this,k=b.getDocConfig(),i=k.backupTemplateUrl,l={};if(!i){throw new Error("please specify backupTemplateUrl")}j=this._prepareOptions(j);this._showLoading("正在备份，请稍候...");c.authAjax(i,{type:"POST",dataType:"json",data:l,success:function(m){h._hideLoading();if(m.success){e.info("备份模板成功");j.success()}else{e.error("备份模板失败，请刷新后重试");j.error()}},error:function(){h._hideLoading();e.warn("网络繁忙，请刷新后重试");j.error()}})},_prepareOptions:function(h){h=h||{};h.success=h.success||g.noop;h.error=h.error||g.noop;return h},_showLoading:function(h){this._running=true;this._loadingDialog=new a({className:"template-loading-dialog",content:'<div class="d-loading">'+h+"</div>"})},_hideLoading:function(){this._running=false;this._loadingDialog.close()}};f.diy.Template=d})(jQuery,Platform.winport);