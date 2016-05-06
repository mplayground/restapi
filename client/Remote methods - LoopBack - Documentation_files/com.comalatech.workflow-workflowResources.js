try {
/* module-key = 'com.comalatech.workflow:workflowResources', location = 'templates/javascript/charts.js' */
function initWorkflowChart(){jQuery(".aprv-stateschart area").click(nopSelectState).hover(hoverInState,hoverOutState).attr("title","")}function nopSelectState(){return false}function hoverInState(c){var i=jQuery(this);var g;if(jQuery.browser.msie&&(jQuery.browser.version.indexOf("6.")==0||jQuery.browser.version.indexOf("7.")==0)){var b=i.attr("href");g=b.substring(b.indexOf("#")+1)}else{g=i.attr("href")}var f=jQuery("#aprv-chartbox").offset();var a=0;var h=0;var d=0;if(f){d=f.zIndex+1;a=f.left;h=f.top+10}jQuery(g).css("top",c.pageY-h).css("left",c.pageX-a).css("z-index",d).show()}function hoverOutState(b){var d=jQuery(this);var c;if(jQuery.browser.msie&&(jQuery.browser.version.indexOf("6.")==0||jQuery.browser.version.indexOf("7.")==0)){var a=d.attr("href");c=a.substring(a.indexOf("#")+1)}else{c=d.attr("href")}jQuery(c).hide()}function hoverInChart(b){var a=jQuery("#aprv-chartbox");a.removeClass("aprv-closing");if(!a.hasClass("aprv-display")){a.addClass("aprv-display").css("left",b.pageX-a.parent().offset().left).show();if(!a.hasClass("aprv-loading")){a.addClass("aprv-loading");setTimeout("loadChart()",50)}}}function hoverOutChart(a){jQuery("#aprv-chartbox").addClass("aprv-closing");setTimeout("hideChart()",300)}function hideChart(){if(jQuery("#aprv-chartbox").hasClass("aprv-closing")){jQuery("#aprv-chartbox").removeClass("aprv-display").removeClass("aprv-closing").hide()}}function reloadChart(){var a=jQuery("#aprv-chartbox");if(a.hasClass("aprv-loaded")){a.removeClass("aprv-loaded");loadChart()}return false}function loadChart(){var a=getPageId();var d=jQuery(".aprv-stateschart").attr("mode");var c=getActionPath()+"chart.action?pageId="+a;if(d&&d.length>0){c+="&chartMode="+d}var b=jQuery("#aprv-chartbox");b.load(c,function(){b.addClass("aprv-loaded")})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.comalatech.workflow:workflowResources', location = 'templates/javascript/jquery.clickmenu.pack.js' */
(function(a){var b={onClick:function(){a(this).find(">a").each(function(){if(this.href){window.location=this.href}})},arrowSrc:"",subDelay:300,shiftLeft:false,mainDelay:10};a.fn.clickMenu=function(f){var c=false;var p=((a.browser.msie)?4:2);var o=a.extend({},b,f);var d=function(x,w){if(x.timer&&!x.isVisible){clearTimeout(x.timer)}else{if(x.timer){return}}if(x.isVisible){x.timer=setTimeout(function(){a(j(g(x,"UL"),"LI")).unbind("mouseover",h).unbind("mouseout",q).unbind("click",o.onClick);a(x).hide();x.isVisible=false;x.timer=null},w)}};var l=function(x,w){if(x.timer){clearTimeout(x.timer)}if(!x.isVisible){x.timer=setTimeout(function(){if(!u(x.parentNode,"hover")){return}a(j(g(x,"UL"),"LI")).mouseover(h).mouseout(q).click(o.onClick);if(!u(x.parentNode,"main")){a(x).css("left",x.parentNode.offsetWidth-p)}x.isVisible=true;a(x).show();if(o.shiftLeft){a(x).css("left",x.parentNode.offsetWidth-p-a(x).width()+3)}if(a.browser.msie){var y=a(g(x,"UL")).width();if(y<100){y=100}a(x).css("width",y)}x.timer=null},w)}};var v=function(x){var w=(x.type=="mouseover"?x.fromElement:x.toElement)||x.relatedTarget;while(w&&w!=this){try{w=w.parentNode}catch(x){w=this}}if(w==this){return false}return true};var r=function(z){if(!jQuery(this).hasClass("hover")){return}var w=j(this.parentNode,"LI");var y=new RegExp("(^|\\s)hover(\\s|$)");for(var x=0;x<w.length;x++){if(y.test(w[x].className)){a(w[x]).removeClass("hover")}}a(this).addClass("hover");if(c){n(this,o.mainDelay)}};var h=function(w){if(!v(w)){return false}if(w.target!=this){if(!i(this,w.target)){return}}n(this,o.subDelay)};var n=function(w,x){var z=g(w,"DIV");var B=w.parentNode.firstChild;for(;B;B=B.nextSibling){if(B.nodeType==1&&B.nodeName.toUpperCase()=="LI"){var A=g(B,"DIV");if(A&&A.timer&&!A.isVisible){clearTimeout(A.timer);A.timer=null}}}var y=w.parentNode;for(;y;y=y.parentNode){if(y.nodeType==1&&y.nodeName.toUpperCase()=="DIV"){if(y.timer){clearTimeout(y.timer);y.timer=null;a(y.parentNode).addClass("hover")}}}a(w).addClass("hover");if(z&&z.isVisible){if(z.timer){clearTimeout(z.timer);z.timer=null}else{return}}a(w.parentNode.getElementsByTagName("DIV")).each(function(){if(this!=z&&this.isVisible){d(this,x);a(this.parentNode).removeClass("hover")}});if(z){l(z,x)}};var q=function(w){if(!v(w)){return false}if(w.target!=this){if(!i(this,w.target)){return}}var x=g(this,"DIV");if(!x){a(this).removeClass("hover")}else{if(!x.isVisible){a(this).removeClass("hover")}}};var s=function(y){if(!jQuery(this).hasClass("hover")){return}var z=g(this,"DIV");var x=y.relatedTarget||y.toElement;var w;if(!c){a(this).removeClass("hover")}else{if(!z&&x){w=e(y.target,"UL","clickMenu");if(w.contains(x)){a(this).removeClass("hover")}}else{if(x){w=e(y.target,"UL","clickMenu");if(!z.isVisible&&(w.contains(x))){a(this).removeClass("hover")}}}}};var k=function(){var w=g(this,"DIV");if(w&&w.isVisible){m();a(this).addClass("hover")}else{n(this,o.mainDelay);c=true;a(document).bind("mousedown",t)}return false};var t=function(y){var x=false;var w=e(y.target,"UL","clickMenu");if(w){a(w.getElementsByTagName("DIV")).each(function(){if(this.isVisible){x=true}})}if(!x){m()}};var m=function(){a("ul.clickMenu div.outerbox").each(function(){if(this.timer){clearTimeout(this.timer);this.timer=null}if(this.isVisible){a(this).hide();this.isVisible=false}});a("ul.clickMenu li").removeClass("hover");a("ul.clickMenu>li li").unbind("mouseover",h).unbind("mouseout",q).unbind("click",o.onClick);a(document).unbind("mousedown",t);c=false};var g=function(x,w){if(!x){return null}var y=x.firstChild;for(;y;y=y.nextSibling){if(y.nodeType==1&&y.nodeName.toUpperCase()==w){return y}}return null};var j=function(y,w){if(!y){return[]}var x=[];var z=y.firstChild;for(;z;z=z.nextSibling){if(z.nodeType==1&&z.nodeName.toUpperCase()==w){x[x.length]=z}}return x};var e=function(y,x,A){var w=y.parentNode;var z=new RegExp("(^|\\s)"+A+"(\\s|$)");for(;w;w=w.parentNode){if(w.nodeType==1&&w.nodeName.toUpperCase()==x&&z.test(w.className)){return w}}return null};var u=function(w,y){var x=new RegExp("(^|\\s)"+y+"(\\s|$)");if(x.test(w.className)){return true}return false};var i=function(x,w){var y=x.firstChild;for(;y;y=y.nextSibling){if(y==w){return true}}return false};return this.each(function(){if(window.Node&&Node.prototype&&!Node.prototype.contains){Node.prototype.contains=function(y){return !!(this.compareDocumentPosition(y)&16)}}if(!u(this,"clickMenu")){a(this).addClass("clickMenu")}a("ul",this).shadowBox();if(a.browser.msie&&(!a.browser.version||parseInt(a.browser.version)<=6)){if(a.fn.bgiframe){a("div.outerbox",this).bgiframe()}else{a("div.outerbox",this).append('<iframe style="display:block;position:absolute;top:0;left:0;z-index:-1;filter:mask();width:expression(this.parentNode.offsetWidth);height:expression(this.parentNode.offsetHeight)"/>')}}a(this).bind("closemenu",function(){m()});var w=j(this,"LI");for(var x=0;x<w.length;x++){if(g(g(g(w[x],"DIV"),"UL"),"LI")){a(w[x]).click(k)}}a(w).hover(r,s).addClass("main").find(">div").addClass("inner");if(o.arrowSrc){a("div.inner div.outerbox",this).before('<img src="'+o.arrowSrc+'" class="liArrow" />')}a(this).wrap('<div class="cmDiv"></div>').after('<div style="clear: both; visibility: hidden;"></div>')})};a.fn.clickMenu.setDefaults=function(c){a.extend(b,c)}})(jQuery);(function(a){a.fn.shadowBox=function(){return this.each(function(){var b=a('<div class="outerbox"></div>').get(0);if(a(this).css("position")=="absolute"){a(b).css({position:"relative",width:this.offsetWidth,height:this.offsetHeight})}else{a(b).css("position","absolute")}a(this).addClass("innerBox").wrap(b).before('<div class="shadowbox1"></div><div class="shadowbox2"></div><div class="shadowbox3"></div>')})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.comalatech.workflow:workflowResources', location = 'templates/javascript/jquery.listpicker.js' */
(function(b){var a={hint:"",allowNew:true};b.fn.listPicker=function(f,j){var h=b.extend({},a,f);var e=b(this).find("input");var i=b(this).find("ul");i.wrap("<div></div>");var d=i.parent();if(h.hint.length>0){i.before("<div class='hint'>"+h.hint+"</div")}e.after("<input type='hidden' name='default' value=''/>");var c=e.next();c.val(e.val());var g=d.find("li");d.find("ul").addClass("list-picker-list");d.css("width",e.css("width"));g.addClass("list-picker-option");e.addClass("list-picker");e.addClass("default");d.addClass("list-picker").addClass("hidden");e.focus(function(){if(e.hasClass("default")){e.val("");e.removeClass("default")}d.removeClass("hidden")});e.blur(function(){setTimeout(function(){d.addClass("hidden");var l=e.val();if(l.length==0){e.val(c.val()).addClass("default")}var k=true;g.removeClass("hover").each(function(){if(l==b(this).html()){k=false;return false}});if(k&&!e.hasClass("default")){e.addClass("new")}else{e.removeClass("new")}},200)});g.hover(function(){g.removeClass("hover");b(this).addClass("hover")},function(){b(this).removeClass("hover")});g.click(function(){e.removeClass("default");e.val(b(this).html());e.change();if(j!=undefined){j(b(this))}});e.keydown(function(l){if(l.keyCode==40){var k=d.find("li.hover");if(k.length==1){if(k.next().length==1){k.removeClass("hover").next().addClass("hover").click()}}else{k=d.find("li:first");if(k.length==1){k.addClass("hover").click()}}}else{if(l.keyCode==38){var k=d.find("li.hover");if(k.length==1){if(k.prev().length==1){k.removeClass("hover").prev().addClass("hover").click()}}}else{if(l.keyCode==13){e.blur()}else{if(!h.allowNew){return false}}}}})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


