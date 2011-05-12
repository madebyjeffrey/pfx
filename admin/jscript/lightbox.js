/*
   MIT - http://es.wikipedia.org/wiki/Licencia_MIT
 @example   http://www.coders.me/ejemplos/sexy-lightbox-2/
*/
jQuery.bind=function(c,b){var a=Array.prototype.slice.call(arguments,2);return function(){var d=[this].concat(a,$j.makeArray(arguments));return b.apply(c,d)}};
(function(c){SexyLightbox={getOptions:function(){return{name:"SLB",zIndex:32E3,color:"black",find:"sexylightbox",dir:"sexyimages",emergefrom:"top",background:"bgSexy.png",backgroundIE:"bgSexy.gif",buttons:"buttons.png",displayed:0,showDuration:200,closeDuration:400,moveDuration:1E3,moveEffect:"easeInOutBack",resizeDuration:1E3,resizeEffect:"easeInOutBack",shake:{distance:10,duration:100,transition:"easeInOutBack",loops:2},BoxStyles:{width:486,height:320},Skin:{white:{hexcolor:"#FFFFFF",captionColor:"#000000",
"background-color":"#000000",opacity:0.8},black:{hexcolor:"#000000",captionColor:"#FFFFFF","background-color":"#000000",opacity:0.8},blanco:{hexcolor:"#FFFFFF",captionColor:"#000000","background-color":"#000000",opacity:0.8},negro:{hexcolor:"#000000",captionColor:"#FFFFFF","background-color":"#000000",opacity:0.8}}}},overlay:{create:function(b){this.options=b;this.element=c('<div id="'+(new Date).getTime()+'"></div>');this.element.css(c.extend({},{position:"absolute",top:0,left:0,opacity:0,display:"none",
"z-index":this.options.zIndex},this.options.style));this.element.bind("click",c.bind(this,function(a,d){if(this.options.hideOnClick)this.options.callback?this.options.callback():this.hide();d.preventDefault()}));this.hidden=true;this.inject()},inject:function(){this.target=c(document.body);this.target.append(this.element);if(c.browser.msie&&c.browser.version=="6.0"){var b=parseInt(this.element.css("zIndex"));if(!b){b=1;var a=this.element.css("position");if(a=="static"||!a)this.element.css({position:"relative"});
this.element.css({zIndex:b})}b=(this.options.zIndex||this.options.zIndex===0)&&b>this.options.zIndex?this.options.zIndex:b-1;if(b<0)b=1;this.shim=c('<iframe id="IF_'+(new Date).getTime()+'" scrolling="no" frameborder=0 src=""></div>');this.shim.css({zIndex:b,position:"absolute",top:0,left:0,border:"none",opacity:0});this.shim.insertAfter(this.element)}},resize:function(b,a){this.element.css({height:0,width:0});this.shim&&this.shim.css({height:0,width:0});var d={x:c(document).width(),y:c(document).height()},
e=c.browser.safari?d.x-25<document.body.clientWidth?document.body.clientWidth:d.x:d.x;this.element.css({width:b?b:e,height:a?a:d.y});if(this.shim){this.shim.css({height:0,width:0});this.shim.css({width:b?b:e,height:a?a:d.y})}return this},show:function(){if(!this.hidden)return this;this.transition&&this.transition.stop();this.target.bind("resize",c.bind(this,this.resize));this.resize();this.shim&&this.shim.css({display:"block"});this.hidden=false;this.transition=this.element.fadeIn(this.options.showDuration,
c.bind(this,function(){this.element.trigger("show")}));return this},hide:function(){if(this.hidden)return this;this.transition&&this.transition.stop();this.target.unbind("resize");this.shim&&this.shim.css({display:"none"});this.hidden=true;this.transition=this.element.fadeOut(this.options.closeDuration,c.bind(this,function(){this.element.trigger("hide");this.element.css({height:0,width:0})}));return this}},backwardcompatibility:function(b){this.options.dir=b.imagesdir||b.path||b.folder||b.dir;this.options.OverlayStyles=
c.extend(this.options.Skin[this.options.color],this.options.OverlayStyles||{})},preloadimage:function(b){img=new Image;img.src=b},initialize:function(b){this.options=c.extend(this.getOptions(),b);this.backwardcompatibility(this.options);b=this.options.dir+"/"+(window.XMLHttpRequest==undefined&&ActiveXObject!=undefined?this.options.backgroundIE:"png/"+this.options.background);var a=this.options.name;this.preloadimage(b);this.preloadimage(this.options.dir+"/png/"+this.options.buttons);this.overlay.create({style:this.options.Skin[this.options.color],
hideOnClick:true,zIndex:this.options.zIndex-1,callback:c.bind(this,this.close),showDuration:this.options.showDuration,showEffect:this.options.showEffect,closeDuration:this.options.closeDuration,closeEffect:this.options.closeEffect});this.lightbox={};c("body").append('<div id="'+a+'-Wrapper"><div id="'+a+'-Background"></div><div id="'+a+'-Contenedor"><div id="'+a+'-Top" style="background-image: url('+b+')"><a id="'+a+'-CloseButton" href="#">&nbsp;</a><div id="'+a+'-TopLeft" style="background-image: url('+
b+')"></div></div><div id="'+a+'-Contenido"></div><div id="'+a+'-Bottom" style="background-image: url('+b+')"><div id="'+a+'-BottomRight" style="background-image: url('+b+')"><div id="'+a+'-Navegador"><strong id="'+a+'-Caption"></strong></div></div></div></div></div>');this.Wrapper=c("#"+a+"-Wrapper");this.Background=c("#"+a+"-Background");this.Contenedor=c("#"+a+"-Contenedor");this.Top=c("#"+a+"-Top");this.CloseButton=c("#"+a+"-CloseButton");this.Contenido=c("#"+a+"-Contenido");this.bb=c("#"+a+"-Bottom");
this.innerbb=c("#"+a+"-BottomRight");this.Nav=c("#"+a+"-Navegador");this.Descripcion=c("#"+a+"-Caption");this.Wrapper.css({"z-index":this.options.zIndex,display:"none"}).hide();this.Background.css({"z-index":this.options.zIndex+1});this.Contenedor.css({position:"absolute",width:this.options.BoxStyles.width,"z-index":this.options.zIndex+2});this.Contenido.css({height:this.options.BoxStyles.height,"border-left-color":this.options.Skin[this.options.color].hexcolor,"border-right-color":this.options.Skin[this.options.color].hexcolor});
this.CloseButton.css({"background-image":"url("+this.options.dir+"/png/"+this.options.buttons+")"});this.Nav.css({color:this.options.Skin[this.options.color].captionColor});this.Descripcion.css({color:this.options.Skin[this.options.color].captionColor});this.CloseButton.bind("click",c.bind(this,function(){this.close();return false}));c(document).bind("keydown",c.bind(this,function(d,e){if(this.options.displayed==1){e.keyCode==27&&this.close();e.keyCode==37&&this.prev&&this.prev.trigger("click",e);
e.keyCode==39&&this.next&&this.next.trigger("click",e)}}));c(window).bind("resize",c.bind(this,function(){if(this.options.displayed==1){this.replaceBox();this.overlay.resize()}}));c(window).bind("scroll",c.bind(this,function(){this.options.displayed==1&&this.replaceBox()}));this.refresh()},hook:function(b){b=c(b);b.blur();this.show(b.attr("title")||b.attr("name")||b.attr("alt")||"",b.attr("href"),b.attr("rel")||false)},close:function(){this.animate(0)},refresh:function(){var b=this;this.anchors=[];
c("a, area").each(function(){if(c(this).attr("rel")&&RegExp("^"+b.options.find).test(c(this).attr("rel"))){c(this).click(function(a){a.preventDefault();b.hook(this)});c(this).attr("id")==b.options.name+"-Left"||c(this).attr("id")==b.options.name+"-Right"||b.anchors.push(this)}})},animate:function(b){if(this.options.displayed==0&&b!=0||b==1){this.overlay.show();this.options.displayed=1;this.Wrapper.css({display:"block"})}else{this.Wrapper.css({display:"none",top:-(this.options.BoxStyles.height+280)}).hide();
this.overlay.hide();this.overlay.element.bind("hide",c.bind(this,function(){if(this.options.displayed){this.Image&&this.Image.remove();this.options.displayed=0}}))}},replaceBox:function(b){var a={x:c(window).width(),y:c(window).height()-28},d={x:c(window).scrollLeft(),y:c(window).scrollTop()},e=this.options.BoxStyles.width,k=this.options.BoxStyles.height;if(this.options.displayed==0){var i=0,g=0;g=d.x+(a.x-e)/2;i=this.options.emergefrom=="bottom"?d.y+a.y+80:d.y-k-80;this.Wrapper.css({display:"none",
top:i,left:g});this.Contenedor.css({width:0});this.Contenido.css({height:0})}b=c.extend({},{width:this.lightbox.width,height:this.lightbox.height,resize:0},b);this.MoveBox&&this.MoveBox.stop();this.MoveBox=this.Wrapper.animate({left:d.x+(a.x-b.width)/2,top:d.y+(a.y-(b.height+(this.navigator?80:48)))/2},{duration:this.options.moveDuration,easing:this.options.moveEffect});if(b.resize){this.ResizeBox2&&this.ResizeBox2.stop();this.ResizeBox2=this.Contenido.animate({height:b.height},{duration:this.options.resizeDuration,
easing:this.options.resizeEffect});this.ResizeBox&&this.ResizeBox.stop();this.ResizeBox=this.Contenedor.animate({width:b.width},{duration:this.options.resizeDuration,easing:this.options.resizeEffect,complete:function(){c(this).trigger("complete")}})}},getInfo:function(b,a){b=c(b);IEuta=c('<a id="'+this.options.name+"-"+a+'" title="'+b.attr("title")+'" rel="'+b.attr("rel")+'">&nbsp;</a>');IEuta.css({"background-image":"url("+this.options.dir+"/png/"+this.options.buttons+")"});IEuta.attr("href",b.attr("href"));
return IEuta},display:function(b,a,d){return this.show(a,b,"",d)},show:function(b,a,d,e){this.showLoading();var k=a.match(/(.+)?/)[1]||a,i=/\.(jpe?g|png|gif|bmp)/gi,g=a.match(/\?(.+)/);if(g)g=g[1];var f=this.parseQuery(g);this.ResizeBox&&this.ResizeBox.unbind("complete");f=c.extend({},{width:0,height:0,modal:0,background:"",title:b},f||{});f.width=parseInt(f.width);f.height=parseInt(f.height);f.modal=parseInt(f.modal);this.overlay.options.hideOnClick=!f.modal;this.lightbox=c.extend({},f,{width:f.width+
14});this.navigator=this.lightbox.title?true:false;if(e=="image"||k.match(i)){this.img=new Image;this.img.onload=c.bind(this,function(){this.img.onload=function(){};if(!f.width){var h=this.calculate(this.img.width,this.img.height);f.width=h.x>100?h.x:h.x*2;f.height=h.x>100?h.y:h.y*2;this.lightbox.width=f.width+14}this.lightbox.height=f.height-(this.navigator?21:35);this.replaceBox({resize:1});this.ResizeBox.bind("complete",c.bind(this,function(){this.showImage(this.img.src,f)}))});this.img.onerror=
c.bind(this,function(){this.show("",this.options.imagesdir+"/png/404.png",this.options.find)});this.img.src=a}else{this.lightbox.height=f.height+(c.browser.opera?2:0);this.replaceBox({resize:1});if(a.indexOf("TB_inline")!=-1)this.ResizeBox.bind("complete",c.bind(this,function(){this.showContent(c("#"+f.inlineId).html(),this.lightbox)}));else if(a.indexOf("TB_iframe")!=-1){var n=a.split("TB_");this.ResizeBox.bind("complete",c.bind(this,function(){this.showIframe(n[0],this.lightbox)}))}else this.ResizeBox.bind("complete",
c.bind(this,function(){c.ajax({url:a,type:"GET",cache:false,error:c.bind(this,function(){this.show("",this.options.imagesdir+"/png/404html.png",this.options.find)}),success:c.bind(this,this.handlerFunc)})}))}this.prev=this.next=false;if(d.length>this.options.find.length){this.navigator=true;var l=false,m=false,j=this;c.each(this.anchors,function(){if(c(this).attr("rel")==d&&!m)if(c(this).attr("href")==a)l=true;else if(l){j.next=j.getInfo(this,"Right");m=true}else j.prev=j.getInfo(this,"Left")})}this.addButtons();
this.showNavBar(b);this.animate(1)},calculate:function(b,a){var d=c(window).width()-100,e=c(window).height()-100;if(b>d){a*=d/b;b=d;if(a>e){b*=e/a;a=e}}else if(a>e){b*=e/a;a=e;if(b>d){a*=d/b;b=d}}return{x:parseInt(b),y:parseInt(a)}},handlerFunc:function(b,a){this.showContent(a,this.lightbox)},addButtons:function(){this.prev&&this.prev.bind("click",c.bind(this,function(b,a){a.preventDefault();this.hook(this.prev)}));this.next&&this.next.bind("click",c.bind(this,function(b,a){a.preventDefault();this.hook(this.next)}))},
showNavBar:function(){if(this.navigator){this.bb.addClass("SLB-bbnav");this.Nav.empty();this.innerbb.empty();this.innerbb.append(this.Nav);this.Descripcion.html(this.lightbox.title);this.Nav.append(this.prev);this.Nav.append(this.next);this.Nav.append(this.Descripcion)}else{this.bb.removeClass("SLB-bbnav");this.innerbb.empty()}},showImage:function(b,a){this.Background.empty().removeAttr("style").css({width:"auto",height:"auto"}).append('<img id="'+this.options.name+'-Image"/>');this.Image=c("#"+this.options.name+
"-Image");this.Image.attr("src",b).css({width:a.width,height:a.height});this.Contenedor.css({background:"none"});this.Contenido.empty().css({"background-color":"transparent",width:"auto"})},showContent:function(b,a){this.Background.empty().css({width:a.width-14,height:a.height+35,"background-color":a.background||"#ffffff"});this.Contenido.empty().css({width:a.width-14,"background-color":a.background||"#ffffff"}).append('<div id="'+this.options.name+'-Image"/>');this.Image=c("#"+this.options.name+
"-Image");this.Image.css({width:a.width-14,height:a.height,overflow:"auto",background:a.height||"#ffffff"}).append(b);this.Contenedor.css({background:"none"})},showIframe:function(b,a){this.Background.empty().css({width:a.width-14,height:a.height+35,"background-color":a.background||"#ffffff"});var d="if_"+(new Date).getTime()+"-Image";this.Contenido.empty().css({width:a.width-14,"background-color":a.background||"#ffffff"}).append('<iframe id="'+d+'" frameborder="0"></iframe>');this.Image=c("#"+d);
this.Image.css({width:a.width-14,height:a.height,background:a.background||"#ffffff"}).attr("src",b);this.Contenedor.css({background:"none"})},showLoading:function(){this.Background.empty().removeAttr("style").css({width:"auto",height:"auto"});this.Contenido.empty().css({"background-color":"transparent",width:"auto"});this.Contenedor.css({background:"url("+this.options.imagesdir+"/spinner.gif) no-repeat 50% 50%"});this.Contenido.empty().css({"background-color":"#fff",width:"auto"});this.replaceBox(c.extend(this.options.BoxStyles,
{resize:1}))},parseQuery:function(b){if(!b)return{};var a={};b=b.split(/[;&]/);for(var d=0;d<b.length;d++){var e=b[d].split("=");!e||e.length!=2||(a[unescape(e[0])]=unescape(e[1]).replace(/\+/g," "))}return a},shake:function(){var b=this.options.shake.distance,a=this.Wrapper.position();a=a.left;for(x=0;x<this.options.shake.loops;x++)this.Wrapper.animate({left:a+b},this.options.shake.duration,this.options.shake.transition).animate({left:a-b},this.options.shake.duration,this.options.shake.transition);
this.Wrapper.animate({left:a+b},this.options.shake.duration,this.options.shake.transition).animate({left:a},this.options.shake.duration,this.options.shake.transition)}}})(jQuery);