(function(e,c){var d=c.diy.ModBox,b=c.diy.form.SimpleHandler;var a=e.extendIf({init:function(g,f){b.init.apply(this,arguments);this.managePart=e("p.manage-part",g);this.openCatPart=e("p.open-cat-part",g);this.initForm()},initForm:function(){var f=this;e.ajax(this.config.offerUserDefCatUrl,{dataType:"jsonp",success:function(h){var g=h.data||{};if(h.success&&!g.hasOpen&&g.isShowTips){f.openCatPart.show();f.initOpenCatPart()}else{f.showManagePart()}},error:function(){f.showManagePart()}})},initOpenCatPart:function(){var f=this,g=e("a.open",f.openCatPart);g.click(function(){f.openUserDefCat();return false})},openUserDefCat:function(){var f=this,g=e("p.open-cat-loading",this.form);g.show();e.ajax(this.config.openUserDefCatUrl,{data:{open:"true"},dataType:"jsonp",success:function(h){if(h.success){f.showManagePart("您的旺铺已启用自定义分类！");g.hide();f.openCatPart.hide();f.refreshModBox()}},complete:function(){g.hide()}})},showManagePart:function(g){var f=e("span.info",this.managePart);this.managePart.show();g&&f.html(g)},refreshModBox:function(){var f=e("div.wp-category-nav-main,div.wp-category-nav-sub");f.each(function(){var g=e(this).closest("div.mod-box");d.reload(g)})}},b);c.diy.form.CategoryNavHandler=a})(jQuery,Platform.winport);