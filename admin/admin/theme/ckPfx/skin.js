﻿CKEDITOR.skins.add("ckPfx",function(){var l=[],g="cke_ui_color";CKEDITOR.env.ie&&CKEDITOR.env.version<7&&l.push("icons.png");return{preload:l,editor:{css:["editor.css"]},dialog:{css:["dialog.css"]},templates:{css:["templates.css"]},margins:[0,0,0,0],init:function(d){function m(b){var c=b.getById(g);if(!c){c=b.getHead().append("style");c.setAttribute("id",g);c.setAttribute("type","text/css")}return c}function h(b,c,i){for(var a,j,f,n=0;n<b.length;n++)if(CKEDITOR.env.webkit)for(j=0;j<c.length;j++){f=
c[j][1];for(a=0;a<i.length;a++)f=f.replace(i[a][0],i[a][1]);b[n].$.sheet.addRule(c[j][0],f)}else{f=c;for(a=0;a<i.length;a++)f=f.replace(i[a][0],i[a][1]);if(CKEDITOR.env.ie)b[n].$.styleSheet.cssText+=f;else b[n].$.innerHTML+=f}}if(d.config.width&&!isNaN(d.config.width))d.config.width-=12;var k=[],e="/* UI Color Support */.cke_skin_ckPfx .cke_menuitem .cke_icon_wrapper{background-color: $color !important;border-color: $color !important;}.cke_skin_ckPfx .cke_menuitem a:hover .cke_icon_wrapper,.cke_skin_ckPfx .cke_menuitem a:focus .cke_icon_wrapper,.cke_skin_ckPfx .cke_menuitem a:active .cke_icon_wrapper{background-color: $color !important;border-color: $color !important;}.cke_skin_ckPfx .cke_menuitem a:hover .cke_label,.cke_skin_ckPfx .cke_menuitem a:focus .cke_label,.cke_skin_ckPfx .cke_menuitem a:active .cke_label{background-color: $color !important;}.cke_skin_ckPfx .cke_menuitem a.cke_disabled:hover .cke_label,.cke_skin_ckPfx .cke_menuitem a.cke_disabled:focus .cke_label,.cke_skin_ckPfx .cke_menuitem a.cke_disabled:active .cke_label{background-color: transparent !important;}.cke_skin_ckPfx .cke_menuitem a.cke_disabled:hover .cke_icon_wrapper,.cke_skin_ckPfx .cke_menuitem a.cke_disabled:focus .cke_icon_wrapper,.cke_skin_ckPfx .cke_menuitem a.cke_disabled:active .cke_icon_wrapper{background-color: $color !important;border-color: $color !important;}.cke_skin_ckPfx .cke_menuitem a.cke_disabled .cke_icon_wrapper{background-color: $color !important;border-color: $color !important;}.cke_skin_ckPfx .cke_menuseparator{background-color: $color !important;}.cke_skin_ckPfx .cke_menuitem a:hover,.cke_skin_ckPfx .cke_menuitem a:focus,.cke_skin_ckPfx .cke_menuitem a:active{background-color: $color !important;}";
if(CKEDITOR.env.webkit){e=e.split("}").slice(0,-1);for(var o=0;o<e.length;o++)e[o]=e[o].split("{")}var p=/\$color/g;CKEDITOR.tools.extend(d,{uiColor:null,getUiColor:function(){return this.uiColor},setUiColor:function(b){var c,i=m(CKEDITOR.document),a="."+d.id;a=[a+" .cke_wrapper",a+"_dialog .cke_dialog_contents",a+"_dialog a.cke_dialog_tab",a+"_dialog .cke_dialog_footer"].join(",");c=CKEDITOR.env.webkit?[[a,"background-color: $color !important;"]]:a+"{background-color: $color !important;}";return(this.setUiColor=
function(j){var f=[[p,j]];d.uiColor=j;h([i],c,f);h(k,e,f)})(b)}});d.on("menuShow",function(b){b=b.data[0].element.getElementsByTag("iframe").getItem(0).getFrameDocument();if(!b.getById("cke_ui_color")){b=m(b);k.push(b);var c=d.getUiColor();c&&h([b],e,[[p,c]])}});d.config.uiColor&&d.setUiColor(d.config.uiColor)}}}());
(function(){function l(){CKEDITOR.dialog.on("resize",function(g){g=g.data;var d=g.height,m=g.dialog;if(g.skin=="ckPfx"){m.parts.contents.setStyles({width:g.width+"px",height:d+"px"});setTimeout(function(){var h=m.parts.dialog.getChild([0,0,0]),k=h.getChild(0),e=h.getChild(2);e.setStyle("width",k.$.offsetWidth+"px");e=h.getChild(7);e.setStyle("width",k.$.offsetWidth-28+"px");e=h.getChild(4);e.setStyle("height",d+k.getChild(0).$.offsetHeight+"px");e=h.getChild(5);e.setStyle("height",d+k.getChild(0).$.offsetHeight+
"px")},100)}})}CKEDITOR.dialog?l():CKEDITOR.on("dialogPluginReady",l)})();