(function(d,b){var e=b.Util,a=b.widget.TraceLog;var c={init:function(){this.name="CoreModTraceLog";e.initParts(this)},gridMain:function(f){return d(f).closest("div.grid-main").length>0}};c.Parts={};c.Parts.CompanyName={init:function(){new a([["div.logo a","wp_widget_signboard_sign"],["a.chinaname","wp_widget_signboard_cnname"],["a.enname","wp_widget_signboard_enname"]],{delegate:"div.wp-company-name"})}};c.Parts.TopNav={init:function(){new a("li",function(){var g={sy:"wp_widget_nav_index",gy:"wp_widget_nav_prod",zs:"wp_widget_nav_trust",js:"wp_widget_nav_comp",xc:"wp_widget_nav_album",dt:"wp_widget_nav_news",lx:"wp_widget_nav_contact",hy:"wp_widget_nav_private",od:"wp_widget_nav_offerdetail",c1:"wp_page_diypage",c2:"wp_page_diypage"},f=d(this).data("page-type");return g[f]||false},{delegate:"div.wp-top-nav"})}};c.Parts.SupplierInfo={init:function(){var f=d("div.wp-supplier-info");new a([["a.tplogo","wp_widget_supplierinfo_logo"],["div.companyname a","wp_widget_supplierinfo_compname"],["div.guarantee a.basic-trust","wp_widget_supplierinfo_trust_ico"],["p.guarantee-money a","wp_widget_supplierinfo_trust_money"],["div.guarantee p.compensate a","wp_widget_supplierinfo_trust_xxpf"],["dl.tp-score a.score-value","wp_widget_supplierinfo_trustindex"],["dl.tp-honor dd a","wp_widget_supplierinfo_cert"],["dl.sat-rate a.rate-value","wp_widget_supplierinfo_remark"],["a.certificate-etp","wp_widget_supplierinfo_auth"],["div.process-panel a.more","wp_widget_supplierinfo_process_more"],["li.honor-founder a,li.honor-popular a","wp_widget_supplierinfo_sponsor"],["li.honor-goldenbrand a","wp_widget_supplierinfo_goldenbrand"],["li.honor-precursor a","wp_widget_supplierinfo_precursor"],["li.honor-auction a","wp_widget_supplierinfo_auction"],["li.honor-p4p a","wp_widget_supplierinfo_p4p"],["li.honor-fx a","wp_widget_supplierinfo_fx"],["a.pagecollect","wp_widget_supplierinfo_favorite"],["div.precharge-panel a.apply","wp_widget_supplierinfo_precharge_apply "],["div.precharge-panel a.charge","wp_widget_supplierinfo_precharge_pay"],["div.private-panel a.apply-btn","wp_widget_supplierinfo_private_apply"],["div.private-panel a.view-link","wp_widget_supplierinfo_private_gotoprivatepage"],["dd.authentication a","wp_infowidget_quotation"]],{delegate:f});new a(d("a.alitalk",f),"wp_widget_supplierinfo_alitalk");new a([["a.process-ability","wp_widget_supplierinfo_process_ico"],["dl.member-service a.discount","wp_widget_supplierinfo_private_discountico"],["dl.member-service a.private","wp_widget_supplierinfo_private_privateico"],["a.precharge","wp_widget_supplierinfo_precharge_ico"]],{once:true,event:"mouseenter",delegate:f})}};c.Parts.CompanyInfo={init:function(){new a("a.more","wp_widget_compintro_more",{delegate:"div.wp-company-info"})}};c.Parts.OfferList={init:function(){var f=d("div.wp-auto-rec-offers-main,div.wp-new-supply-offers-main"),g=d("div.wp-auto-rec-offers-sub,div.wp-new-supply-offers-sub");new a([["div.image","wp_widget_offer_main_pic"],["div.title a","wp_widget_offer_main_tile"],["a.more","wp_widget_offer_main_more"]],{delegate:f});new a([["div.image","wp_widget_offer_side_pic"],["div.title a","wp_widget_offer_side_tile"],["a.more","wp_widget_offer_side_more"]],{delegate:g})}};c.Parts.Albums={init:function(){var f=this;new a([["li div.cover",function(){return f.gridMain(this)?"wp_widget_album_main_pic":"wp_widget_album_side_pic"}],["li div.title a",function(){return f.gridMain(this)?"wp_widget_album_main_title":"wp_widget_album_side_title"}],["a.more",function(){return f.gridMain(this)?"wp_widget_album_main_more":"wp_widget_album_side_more"}]],{delegate:"div.wp-albums,div.wp-recommend-albums"})}};c.Parts.CompanyInfo={init:function(){var f=this;new a([["div.info-image a",function(){return f.gridMain(this)?"wp_widget_compintro_main_pic":"wp_widget_compintro_side_pic"}],["a.more",function(){return f.gridMain(this)?"wp_widget_compintro_main_more":"wp_widget_compintro_side_more"}]],{delegate:"div.wp-company-info"})}};c.Parts.NewsList={init:function(){var f=this,g=d("#doc").data("doc-config").isHomepage;new a([["li a",function(){return !f.gridMain(this)?"wp_widget_news_side_title":g?"wp_widget_news_main_title":"wp_page_news_title"}],["a.more",function(){return !f.gridMain(this)?"wp_widget_news_side_more":g?"wp_widget_news_main_more":"wp_page_news_more"}]],{delegate:"div.wp-news-list"})}};c.Parts.CategoryNav={init:function(){var f=d("div.wp-category-nav-main"),g=d("div.wp-category-nav-sub");new a("a.name","wp_widget_prodcate_main_title",{delegate:f});new a([["a.name","wp_widget_prodcate_side_title"],["a.image","wp_widget_prodcate_side_pic"]],{delegate:g})}};c.Parts.ContactInfo={init:function(){var f=d("div.wp-contact-info-main"),g=d("div.wp-contact-info-sub");new a([["a.membername","wp_widget_contact_main_membername"],["a.topdomain","wp_widget_contact_main_siteurl_topdomain"],["a.subdomain","wp_widget_contact_main_siteurl_subdomain"],["a.outsite","wp_page_contact_siteurl_outsite"],["a.more","wp_widget_contact_main_more"]],{delegate:f});new a([[d("a.alitalk",f),"wp_widget_contact_main_alitalk"],[d("a.alitalk",g),"wp_widget_contact_side_alitalk"]]);new a([["a.membername","wp_widget_contact_side_membername"],["a.more","wp_widget_contact_side_more"]],{delegate:g})}};c.Parts.FriendLink={init:function(){var f=this;new a("li a",function(){return f.gridMain(this)?"wp_widget_friendlink_main_title":"wp_widget_friendlink_side_title"},{delegate:"div.wp-friend-link"})}};c.Parts.SelfRecOffers={init:function(){var f=this;new a([["div.image",function(){return f.gridMain(this)?"wp_widget_offer_main_pic":"wp_widget_offer_side_pic"}],["div.title a",function(){return f.gridMain(this)?"wp_widget_offer_main_tile":"wp_widget_offer_side_tile"}],["a.more",function(){return f.gridMain(this)?"wp_widget_offer_main_more":"wp_widget_offer_side_more"}]],{delegate:"div.vas-selfRecOffers"})}};c.Parts.Footer={init:function(){new a([["a.footer-alibaba","wp_footer_alibaba"],["a.footer-wpadmin","wp_footer_wpadmin"],["a.footer-inform","wp_footer_inform"],["a.footer-postoffice","wp_footer_postoffice"]],{delegate:"#footer"})}};b.PageContext.register("~CoreModTraceLog",c)})(jQuery,Platform.winport);