!function(t){wp.customize("blogname",function(o){o.bind(function(o){t(".site-title a").text(o)})}),wp.customize("blogdescription",function(o){o.bind(function(o){t(".site-description").text(o)})}),wp.customize("header_textcolor",function(o){o.bind(function(o){t("#navbar-main a.navbar-brand.site-title").css("color",o)})}),wp.customize("header_textcolor",function(o){o.bind(function(o){"blank"===o?t(".site-title, .site-description").css({clip:"rect(1px, 1px, 1px, 1px)",position:"absolute"}):(t(".site-title, .site-description").css({clip:"auto",position:"static"}),t(".site-title a").css({color:o}))})}),wp.customize("wpt_logo",function(o){o.bind(function(o){""==o?t(" #logo ").hide():(t(" #logo ").show(),t(" #logo ").attr("src",o))})}),wp.customize("wpt_custom_home_image",function(o){o.bind(function(o){""==o?t(" #bckimgcust ").show():(t(" #bckimgcust ").show(),t(" #bckimgcust ").attr("src",o))})}),wp.customize("wpt_footer_text",function(o){o.bind(function(o){""==o?(t(" #footertext ").show(),t(" #footertext ").html()):(t(" #footertext ").show(),t(" #footertext ").html(o))})}),wp.customize("wpt_b_color",function(o){o.bind(function(o){t("p").css("color",o)})}),wp.customize("wpt_b_font_size",function(o){o.bind(function(o){t("p").css("font-size",o+"em")})}),wp.customize("wpt_HS1_color",function(o){o.bind(function(o){t("h1").css("color",o)})}),wp.customize("wpt_h1_font_size",function(o){o.bind(function(o){t("h1").css("font-size",o+"em")})}),wp.customize("wpt_h2_color",function(o){o.bind(function(o){t("h2").css("color",o)})}),wp.customize("wpt_h2_font_size",function(o){o.bind(function(o){t("h2").css("font-size",o+"em")})}),wp.customize("wpt_h3_color",function(o){o.bind(function(o){t("h3").css("color",o)})}),wp.customize("wpt_h3_font_size",function(o){o.bind(function(o){t("h3").css("font-size",o+"em")})}),wp.customize("wpt_h4_color",function(o){o.bind(function(o){t("h4").css("color",o)})}),wp.customize("wpt_h4_font_size",function(o){o.bind(function(o){t("h4").css("font-size",o+"em")})}),wp.customize("wpt_h5_color",function(o){o.bind(function(o){t("h5").css("color",o)})}),wp.customize("wpt_h5_font_size",function(o){o.bind(function(o){t("h5").css("font-size",o+"em")})}),wp.customize("wpt_h6_color",function(o){o.bind(function(o){t("h6").css("color",o)})}),wp.customize("wpt_h6_font_size",function(o){o.bind(function(o){t("h6").css("font-size",o+"em")})}),wp.customize("wpt_pre_color",function(o){o.bind(function(o){t("pre").css("color",o)})}),wp.customize("wpt_pre_font_size",function(o){o.bind(function(o){t("pre").css("font-size",o+"em")})})}(jQuery);
//# sourceMappingURL=customizer.js.map
