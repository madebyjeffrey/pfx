AIM={frame:function(b){var a="f"+Math.floor(Math.random()*99999),c=document.createElement("DIV");c.innerHTML='<iframe style="display:none" src="about:blank" id="'+a+'" name="'+a+'" onload="AIM.loaded(\''+a+"')\"></iframe>";document.body.appendChild(c);c=document.getElementById(a);if(b&&typeof b.onComplete=="function")c.onComplete=b.onComplete;return a},form:function(b,a){b.setAttribute("target",a)},submit:function(b,a){AIM.form(b,AIM.frame(a));return a&&typeof a.onStart=="function"?a.onStart():true},
loaded:function(b){var a=document.getElementById(b);b=a.contentDocument?a.contentDocument:a.contentWindow?a.contentWindow.document:window.frames[b].document;b.location.href!="about:blank"&&typeof a.onComplete=="function"&&a.onComplete(b.body.innerHTML)}};