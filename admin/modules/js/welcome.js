$j(document).ready(function(){var a=jQuery.noConflict(),e=0,f=[],b=0,d=1;a(".slides .slide").each(function(c){f[c]=e;e+=a(this).width();if(!a(this).width()){alert("Please, fill in width & height for all your images!");return false}});a(".slides").width(e);a(".thumbs ul li a").click(function(c){c.preventDefault()});a(".thumbs ul li a").hover(function(){a("li.thumb-item").removeClass("act").addClass("inact");a(this).parent().addClass("act");d=a(this).parent().prevAll(".thumb-item").length;a(".slides").animate({marginLeft:-f[d]+
"px"},450);b=a(this).eq(b).length;if(b!==a(".thumbs ul li a").length-1)b++;else b=0},function(){});a(".thumbs ul li.thumb-item:eq(0)").addClass("act").siblings().addClass("inact");setInterval(function(){if(b!==a(".thumbs ul li a").length-1)b++;else b=0;var c=b;a("li.thumb-item").removeClass("act").addClass("inact");a(".thumbs ul li a").eq(c).parent().addClass("act");d=a(".thumbs ul li a").eq(c).parent().prevAll(".thumb-item").length;a(".slides").stop().animate({marginLeft:-f[d]+"px"},450)},1E4)});