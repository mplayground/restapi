try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:mail-page-resources', location = 'templates/sharepage/share-dialog.soy' */
// This file was automatically generated from share-dialog.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Share == 'undefined') { Confluence.Templates.Share = {}; }
if (typeof Confluence.Templates.Share.Dialog == 'undefined') { Confluence.Templates.Share.Dialog = {}; }


Confluence.Templates.Share.Dialog.shareContentPopup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" class="aui share-content-popup"><div class="field-group"><div class="autocomplete-user-target"><input class="text autocomplete-sharepage" id="users" data-max="10" data-dropdown-target=".autocomplete-user-target" data-none-message="', soy.$$escapeHtml("No matches"), '" placeholder="', soy.$$escapeHtml("User name, group or email"), '"/></div><ol class="recipients"></ol></div><div class="field-group"><textarea class="textarea" id="note" placeholder="', soy.$$escapeHtml("Add an optional note"), '"/></div><div class="field-group button-panel"><div class="progress-messages-icon"></div><div class="progress-messages"></div><input class="button submit" type="submit" value="', soy.$$escapeHtml("Share"), '" disabled/><a class="close-dialog" href="#">', soy.$$escapeHtml("Cancel"), '</a></div></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Share.Dialog.recipientUser = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li data-userkey="', soy.$$escapeHtml(opt_data.userKey), '" style="display: none" class="recipient-user"><img src="', soy.$$escapeHtml(opt_data.thumbnailLink.href), '" title="', soy.$$escapeHtml(opt_data.title), '"/><span class="title" title="', soy.$$escapeHtml(opt_data.title), '">', soy.$$escapeHtml(opt_data.title), '</span><span class="remove-recipient"/></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Share.Dialog.recipientEmail = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li data-email="', soy.$$escapeHtml(opt_data.email), '" style="display: none" class="recipient-email"><img src="', soy.$$escapeHtml(opt_data.icon), '" title="', soy.$$escapeHtml(opt_data.email), '"/><span class="title" title="', soy.$$escapeHtml(opt_data.email), '">', soy.$$escapeHtml(opt_data.email), '</span><span class="remove-recipient"/></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Share.Dialog.recipientGroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li data-group="', soy.$$escapeHtml(opt_data.title), '" style="display: none" class="recipient-group"><span><img src="', soy.$$escapeHtml(opt_data.thumbnailLink.href), '" title="', soy.$$escapeHtml(opt_data.title), '"/><span>', soy.$$escapeHtml(opt_data.title), '</span><span class="remove-recipient"/></span></li>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:mail-page-resources', location = 'js/mailpage.js' */
AJS.Confluence.SharePage={};AJS.Confluence.SharePage.autocompleteUser=function(d){d=d||document.body;var e=AJS.$,a=/^([a-zA-Z0-9_\.\-\+\!#\$%&'\*/=\?\^_`{|}~])+\@.*/;var c=function(j){if(!j||!j.result){throw new Error("Invalid JSON format")}var f=[];for(var g=0;g<j.result.length;g++){var h=j.result[g];if(h.type=="group"){h=b(h)}}f.push(j.result);return f};function b(f){if(f.name=="confluence-users"||f.name=="confluence-administrators"){return f}f.title=f.name;f.group=f.name;f.thumbnailLink={href:Confluence.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:mail-page-resources/images/group.png",type:"image/png",rel:"thumbnail"};f.link=[{href:Confluence.getContextPath(),rel:"self"}];return f}e("input.autocomplete-sharepage[data-autocomplete-user-bound!=true]",d).each(function(){var h=e(this).attr("data-autocomplete-sharepage-bound","true").attr("autocomplete","off");var g=h.attr("data-max")||10,j=h.attr("data-alignment")||"left",i=h.attr("data-dropdown-target"),f=null;if(i){f=e(i)}else{f=e("<div></div>");h.after(f)}f.addClass("aui-dd-parent autocomplete");h.quicksearch(AJS.REST.getBaseUrl()+"search/user-or-group.json",function(){h.trigger("open.autocomplete-sharepage")},{makeParams:function(k){return{"max-results":g,query:k.replace("{|}","")}},dropdownPlacement:function(k){f.append(k)},makeRestMatrixFromData:c,addDropdownData:function(l){var k=e.trim(h.val());if(a.test(k)){l.push([{name:k,email:k,href:"#",icon:Confluence.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:mail-page-resources/images/envelope.png"}])}if(!l.length){var m=h.attr("data-none-message");if(m){l.push([{name:m,className:"no-results",href:"#"}])}}return l},ajsDropDownOptions:{alignment:j,displayHandler:function(k){if(k.restObj&&k.restObj.username){return k.name+" ("+k.restObj.username+")"}return k.name},selectionHandler:function(m,l){if(l.find(".search-for").length){h.trigger("selected.autocomplete-sharepage",{searchFor:h.val()});return}if(l.find(".no-results").length){this.hide();m.preventDefault();return}var k=e("span:eq(0)",l).data("properties");if(!k.email){k=k.restObj}h.trigger("selected.autocomplete-sharepage",{content:k});this.hide();m.preventDefault()}}})})};(function(a){jQuery.fn.extend({elastic:function(){var b=["paddingTop","paddingRight","paddingBottom","paddingLeft","fontSize","lineHeight","fontFamily","width","fontWeight","border-top-width","border-right-width","border-bottom-width","border-left-width","borderTopStyle","borderTopColor","borderRightStyle","borderRightColor","borderBottomStyle","borderBottomColor","borderLeftStyle","borderLeftColor"];return this.each(function(){if(this.type!=="textarea"){return false}var g=jQuery(this),c=jQuery("<div />").css({position:"absolute",display:"none","word-wrap":"break-word","white-space":"pre-wrap"}),j=parseInt(g.css("line-height"),10)||parseInt(g.css("font-size"),"10"),l=parseInt(g.css("height"),10)||j*3,k=parseInt(g.css("max-height"),10)||Number.MAX_VALUE,d=0;if(k<0){k=Number.MAX_VALUE}c.appendTo(g.parent());var f=b.length;while(f--){c.css(b[f].toString(),g.css(b[f].toString()))}function h(){var i=Math.floor(parseInt(g.width(),10));if(c.width()!==i){c.css({width:i+"px"});e(true)}}function m(i,o){var n=Math.floor(parseInt(i,10));if(g.height()!==n){g.css({height:n+"px",overflow:o})}}function e(p){var o=g.val().replace(/&/g,"&amp;").replace(/ {2}/g,"&nbsp;").replace(/<|>/g,"&gt;").replace(/\n/g,"<br />");var i=c.html().replace(/<br>/ig,"<br />");if(p||o+"&nbsp;"!==i){c.html(o+"&nbsp;");if(Math.abs(c.height()+j-g.height())>3){var n=c.height()+j;if(n>=k){m(k,"auto")}else{if(n<=l){m(l,"hidden")}else{m(n,"hidden")}}}}}g.css({overflow:"hidden"});g.bind("keyup change cut paste",function(){e()});a(window).bind("resize",h);g.bind("resize",h);g.bind("update",e);g.bind("input paste",function(i){setTimeout(e,250)});e()})}})})(AJS.$);(function(f){var e,c={hideCallback:a,width:250,hideDelay:3600000,calculatePositions:function(h,o,w,s){var p;var y;var u;var l=-7;var m;var q;var x=o.target.offset();var g=o.target.outerWidth();var j=x.left+g/2;var t=(window.pageYOffset||document.documentElement.scrollTop)+f(window).height();var k=10;u=x.top+o.target.outerHeight()+s.offsetY;p=x.left+s.offsetX;var n=x.top>h.height();var i=(u+h.height())<t;q=(!i&&n)||(s.onTop&&n);var r=f(window).width()-(p+s.width+k);if(q){u=x.top-h.height()-8;var v=s.displayShadow?(AJS.$.browser.msie?10:9):0;l=h.height()-v}m=j-p+s.arrowOffsetX;if(s.isRelativeToMouse){if(r<0){y=k;p="auto";m=w.x-(f(window).width()-s.width)}else{p=w.x-20;y="auto";m=w.x-p}}else{if(r<0){y=k;p="auto";m=j-(f(window).width()-h.outerWidth())}else{if(s.width<=g/2){m=s.width/2;p=j-s.width/2}}}return{displayAbove:q,popupCss:{left:p,right:y,top:u},arrowCss:{position:"absolute",left:m,right:"auto",top:l}}}};var a=function(){f(".dashboard-actions .explanation").hide()};var d=function(j,h,i){if(j.find("input").length){i();return}j.append(Confluence.Templates.Share.Dialog.shareContentPopup());AJS.Confluence.SharePage.autocompleteUser();var k=function(m){AJS.Confluence.SharePage.current.hide();if(m){setTimeout(function(){j.empty()},300)}return false};f(document).keyup(function(m){if(m.keyCode==27){k(true);f(document).unbind("keyup",arguments.callee);return false}return true});j.find(".close-dialog").click(function(){k(true)});j.find("#note").elastic();j.find("form").submit(function(){var r=[];j.find(".recipients li").each(function(s,t){r.push(f(t).attr("data-userKey"))});if(r.length<=0){return false}f("button,input,textarea",this).attr("disabled","disabled");j.find(".progress-messages-icon").removeClass("error");j.find(".progress-messages").text("Sending");j.find(".progress-messages").attr("title","Sending");var o=Raphael.spinner(j.find(".progress-messages-icon")[0],7,"#666");j.find(".progress-messages-icon").css("position","absolute").css("left","0").css("margin-top","3px");j.find(".progress-messages").css("padding-left",j.find(".progress-messages-icon").innerWidth()+5);var r=[];j.find(".recipients li[data-userKey]").each(function(s,t){r.push(f(t).attr("data-userKey"))});var q=[];j.find(".recipients li[data-email]").each(function(s,t){q.push(f(t).attr("data-email"))});var m=[];j.find(".recipients li[data-group]").each(function(s,t){m.push(f(t).attr("data-group"))});var n=j.find("#note");var p={users:r,emails:q,groups:m,note:n.hasClass("placeholded")?"":n.val(),entityId:AJS.params.pageId};f.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:Confluence.getContextPath()+"/rest/share-page/latest/share",data:JSON.stringify(p),dataType:"text",success:function(){setTimeout(function(){o();j.find(".progress-messages-icon").addClass("done");j.find(".progress-messages").text("Sent");j.find(".progress-messages").attr("title","Sent");setTimeout(function(){j.find(".progress-messages").text("");j.find(".progress-messages-icon").removeClass("done");j.find("#note").val("");f("button,input,textarea",j).removeAttr("disabled");k(false)},1000)},500)},error:function(t,s){o();j.find(".progress-messages-icon").addClass("error");j.find(".progress-messages").text("Error sending");j.find(".progress-messages").attr("title","Error sending"+": "+s);f("button,input,textarea",j).removeAttr("disabled")}});return false});var l=j.find("#users");var g=j.find("input.submit");l.bind("selected.autocomplete-sharepage",function(n,m){var o=function(r,q,s){var u=j.find(".recipients"),t,p;t="li[data-"+r+'="'+s.content[r]+'"]';if(u.find(t).length>0){u.find(t).hide()}else{u.append(q(s.content))}p=u.find(t);p.find(".remove-recipient").click(function(){p.remove();if(u.find("li").length==0){g.attr("disabled","true")}AJS.Confluence.SharePage.current.refresh();l.focus();return false});p.fadeIn(200)};if(m.content.email){o("email",Confluence.Templates.Share.Dialog.recipientEmail,m)}else{if(m.content.type=="group"){o("group",Confluence.Templates.Share.Dialog.recipientGroup,m)}else{o("userKey",Confluence.Templates.Share.Dialog.recipientUser,m)}}AJS.Confluence.SharePage.current.refresh();g.removeAttr("disabled");l.val("");return false});l.bind("open.autocomplete-sharepage",function(n,m){if(f("a:not(.no-results)",AJS.dropDown.current.links).length>0){AJS.dropDown.current.moveDown()}});l.keypress(function(m){return m.keyCode!=13});f(document).bind("showLayer",function(o,n,m){if(n=="inlineDialog"&&m.popup==AJS.Confluence.SharePage.current){m.popup.find("#users").focus()}});f(h).parents().filter(function(){return this.scrollTop>0}).scrollTop(0);i()};var b=function(g){var h=f("#splitter-content");if(h.length!==0){g.container=h;g.offsetY=AJS.InlineDialog.opts.offsetY-h.offset().top}return g};AJS.Confluence.SharePage.initDialog=function(g,i,h){if(g.length){var j=f.extend(false,b(c),h);AJS.Confluence.SharePage.current=AJS.InlineDialog(g,i,d,j)}};AJS.toInit(function(g){AJS.Confluence.SharePage.initDialog(g("#shareContentLink"),"shareContentPopup")})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.editor.confluence-source-editor:atlassian-source-editor-view-storage-javascript', location = 'jscripts/source-editor/view-source.js' */
AJS.toInit(function(A){if(A("#action-view-storage-link").length){A("#action-source-editor-view-storage-link").closest("li").hide()
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.macros.advanced:blog-post-resources', location = 'com/atlassian/confluence/plugins/macros/advanced/blog-posts.js' */
jQuery(function(a){a(".macro-blank-experience .create-post").bind("click",function(){var b=AJS.Meta.get("base-url")+"/pages/createblogpost.action?spaceKey="+AJS.Meta.get("space-key");window.location=b})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/models.js' */
(function(b,a){a.Watch=Backbone.Model.extend({saveSettings:function(d,e){this.trigger("request");var c=this;return AJS.safe.ajax({url:d,type:"POST",dataType:"json",data:e}).done(function(){c.trigger("sync",c)}).fail(function(){c.trigger("error")})},saveWatchPage:function(d){var c=AJS.contextPath()+"/users/"+(d?"add":"remove")+"pagenotificationajax.action";this.set("watchingPage",d);return this.saveSettings(c,{pageId:this.get("pageId")})},saveWatchBlogs:function(d){var c=AJS.contextPath()+"/users/"+(d?"add":"remove")+"spacenotificationajax.action";this.set("watchingBlogs",d);return this.saveSettings(c,{spaceKey:this.get("spaceKey"),contentType:"blogpost"})},saveWatchSpace:function(d){var c=AJS.contextPath()+"/users/"+(d?"add":"remove")+"spacenotificationajax.action";this.set("watchingSpace",d);return this.saveSettings(c,{spaceKey:this.get("spaceKey")})}})}(AJS.$,CW=window.CW||{}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/views.js' */
(function(b,a){a.WatchView=Backbone.View.extend({events:{"change #cw-watch-page":"changeWatchPage","change #cw-watch-blogs":"changeWatchBlogs","change #cw-watch-space":"changeWatchSpace"},initialize:function(){_.bindAll(this,"render","initTooltips","changeWatchPage","changeWatchBlogs","changeWatchSpace","togglePageEnabledState","toggleBlogsEnabledState","startLoading","stopLoading","setTitle");this.model.on("sync change:watchingSpace",this.togglePageEnabledState,this);this.model.on("change:watchingSpace",this.toggleBlogsEnabledState,this);this.model.on("request",this.startLoading,this);this.model.on("sync",this.setTitle,this);this.model.on("sync",this.stopLoading,this)},render:function(){this.$el.html(Confluence.Watch.Templates.dialogBody(this.model.toJSON()));this.initTooltips();this.setTitle(this.model);return this},initTooltips:function(){this.$(".cw-tooltip").tooltip({gravity:"e",offset:5,delayIn:0});this.togglePageEnabledState(this.model);this.toggleBlogsEnabledState(this.model)},changeWatchPage:function(d){var c=b(d.target).is(":checked");this.model.saveWatchPage(c)},changeWatchBlogs:function(d){var c=b(d.target).is(":checked");this.model.saveWatchBlogs(c)},changeWatchSpace:function(d){var c=b(d.target).is(":checked");this.model.saveWatchSpace(c)},togglePageEnabledState:function(c){var d=c.get("watchingPage");var f=c.get("watchingSpace");this.$("#cw-watch-page").prop("disabled",f);this.$("#cw-watch-page").prop("checked",d||f);var e=f?"You will receive updates for this page because you are watching this space.":"";this.$(".cw-tooltip-watch-page").attr("original-title",e)},toggleBlogsEnabledState:function(c){var f=c.get("watchingBlogs");var e=c.get("watchingSpace");this.$("#cw-watch-blogs").prop("disabled",e);this.$("#cw-watch-blogs").prop("checked",f||e);var d=e?"You are subscribed to all blog posts because you are watching this space.":"";this.$(".cw-tooltip-watch-blogs").attr("original-title",d)},startLoading:function(){this.$(".cw-status").addClass("loading")},stopLoading:function(){this.$(".cw-status").removeClass("loading")},setTitle:function(){var d=this.model.get("watchingPage");var h=this.model.get("watchingBlogs");var f=this.model.get("watchingSpace");var c=this.model.get("isBlogPost");function g(){if(f){return{title:"You are watching this space",description:"Receiving email updates for all content in this space.",}}if(d&&c&&h){return{title:"You are watching this blog post",description:"Receiving email updates about changes to this blog post and all new blog posts in this space.",}}if(d&&c){return{title:"You are watching this blog post",description:"Receiving email updates about changes to this blog post.",}}if(d){return{title:"You are watching this page",description:"Receiving email updates about changes to this page.",}}if(c&&h){return{title:"You are watching for new blog posts",description:"Receiving email updates for new blog posts in this space.",}}if(c){return{title:"You are not watching this blog",description:"Start watching to receive email updates about changes to this blog.",}}return{title:"You are not watching this page",description:"Start watching to receive email updates about changes to this page.",}}var e=g();this.$(".cw-title").text(e.title);this.$(".cw-title-description").text(e.description)}})}(AJS.$,CW=window.CW||{}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch.js' */
(function(e,a){AJS.toInit(function(){var f=e("#watch-content-button");if(!f.length){return}var m=b(f);var i=AJS.Meta.get("page-id");var j=AJS.Meta.get("space-key");var h=AJS.Meta.get("space-name");_.extend(m,{pageId:i,spaceKey:j,spaceName:h});c(f,m);var l=new a.Watch(m);var k=new a.WatchView({model:l});AJS.InlineDialog(f,"confluence-watch",function(o,n,p){k.setElement(o);k.render();p()},{width:325,offsetX:-180,cacheContent:false,hideDelay:null,hideCallback:function(){e(".tipsy").hide()}});l.on("change:watchingPage change:watchingBlogs change:watchingSpace",function(n){c(f,n.toJSON())});a.registerAnalytics(l);d(l);var g=false;e(document).on("keyup",function(){g=false});window.CW_watchPage=function(){if(g){return}g=true;var p=l.get("watchingSpace");var o=l.get("watchingPage");if(p){e("body, #splitter-content").animate({scrollTop:0},300,function(){f.click();setTimeout(function(){e(".cw-tooltip-watch-page").tipsy("show")},50)})}else{var q=!o;l.saveWatchPage(q);var n=q?"You started watching this page.":"You stopped watching this page.";a.Notification.notify("success",n)}}});function c(g,j){var h=j.watchingPage;var f=j.isBlogPost&&j.watchingBlogs;var i=j.watchingSpace;if(h||f||i){g.removeClass("not-watching").addClass("watching")}else{g.removeClass("watching").addClass("not-watching")}}function d(f){f.on("change:watchingPage",function(g,i){var h=i?"watchpage.pageoperation":"unwatchpage.pageoperation";AJS.trigger(h)})}function b(h){var i=h.prop("search");var g=/[?&;]*(.*?)=([^&;]*)/g;var f;var j={};if(i){while(f=g.exec(i)){j[f[1]]=decodeURIComponent(f[2]).replace(/\+/g," ")}}_.each(j,function(l,k){if(l=="true"){j[k]=true}else{if(l=="false"){j[k]=false}}});return j}}(AJS.$,CW=window.CW||{}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch-analytics.js' */
var CW=CW||{};CW.registerAnalytics=function(a){a.on("change:watchingPage",function(b,d){var c=d?"watch-page":"unwatch-page";AJS.trigger("analytics",{name:c})});a.on("change:watchingBlogs",function(b,d){var c=d?"watch-blogs":"unwatch-blogs";AJS.trigger("analytics",{name:c})});a.on("change:watchingSpace",function(b,d){var c=d?"watch-space":"unwatch-space";AJS.trigger("analytics",{name:c})})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/notification.js' */
(function(b,a){b(function(){var c="cw-notification-container";var d=b("<div></div>",{id:c});b("body").append(d);a.Notification={notify:function(e,f,h){AJS.messages[e]("#"+c,{body:f,closeable:true,insert:"prepend"});var g=b(".aui-message",d).first();if(!h){h=5000}else{h*=1000}setTimeout(function(){g.fadeOut("fast",function(){g.closeMessage();g=null})},h)}}})}(AJS.$,CW=window.CW||{}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'templates/watch.soy' */
// This file was automatically generated from watch.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Watch == 'undefined') { Confluence.Watch = {}; }
if (typeof Confluence.Watch.Templates == 'undefined') { Confluence.Watch.Templates = {}; }


Confluence.Watch.Templates.dialogBody = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="cw-status"><h2 class="cw-title"></h2><p class="cw-title-description"></p></div><form class="aui cw-dialog"><div class="cw-tooltip cw-tooltip-watch-page"><div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-page" ', (opt_data.watchingPage) ? 'checked' : '', '><label for="cw-watch-page">', (opt_data.isBlogPost) ? soy.$$escapeHtml("Watch blog post") : soy.$$escapeHtml("Watch page"), '</label></div></div>', (opt_data.isBlogPost) ? '<div class="cw-tooltip cw-tooltip-watch-blogs"><div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-blogs" ' + ((opt_data.watchingBlogs) ? 'checked' : '') + '><label for="cw-watch-blogs">' + soy.$$escapeHtml("Watch for new blog posts in this space") + '</label></div></div>' : '', '<div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-space" ', (opt_data.watchingSpace) ? 'checked' : '', '><label for="cw-watch-space">', soy.$$escapeHtml("Watch all content in this space"), '</label></div></form>', (opt_data.isAdmin) ? '<div class="cw-manage-watchers-wrapper"><button class="aui-button aui-button-link cw-manage-watchers">' + soy.$$escapeHtml("Manage Watchers") + '</button></div>' : '');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.comalatech.workflow:bundled', location = 'templates/com/comalatech/workflow/common/js/cml.js' */
var CML=CML||{VERSION:"0.2",allVersions:function(){if(console.group){console.group("Confluence versions")}console.log("Confluence:",AJS.params.versionNumber);console.log("AJS:",AJS.version);console.log("jQuery:",jQuery.fn.jquery);console.log("jQuery UI:",jQuery.ui.version);console.log("Backbone:",Backbone.VERSION);console.log("Underscore:",_.VERSION);if(console.group){console.groupEnd();console.group("Comalatech versions")}console.log("CML:",this.VERSION);console.log("AWP:",AWP.VERSION);if(console.group){console.groupEnd()}},getUrlParameters:function(){var b={};var a=window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(c,d,e){b[d]=e});return b}};if(!Array.prototype.indexOf){Array.prototype.indexOf=function(c){if(this==null){throw new TypeError()}var d=Object(this);var a=d.length>>>0;if(a===0){return -1}var e=0;if(arguments.length>1){e=Number(arguments[1]);if(e!=e){e=0}else{if(e!=0&&e!=Infinity&&e!=-Infinity){e=(e>0||-1)*Math.floor(Math.abs(e))}}}if(e>=a){return -1}var b=e>=0?e:Math.max(a-Math.abs(e),0);for(;b<a;b++){if(b in d&&d[b]===c){return b}}return -1}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.comalatech.workflow:bundled', location = 'templates/com/comalatech/workflow/embedded/soy/embeddedtemplates.soy' */
// This file was automatically generated from embeddedtemplates.soy.
// Please don't edit this file by hand.

if (typeof AWP == 'undefined') { var AWP = {}; }
if (typeof AWP.Templates == 'undefined') { AWP.Templates = {}; }


AWP.Templates.iframe = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<iframe frameborder=\'0\' width=\'100%\' height=\'350\' class=\'adhoworkflows\'src="', soy.$$escapeHtml(opt_data.contextPath), '/plugins/servlet/adhocworkflows/', soy.$$escapeHtml(opt_data.action), '/', soy.$$escapeHtml(opt_data.pageId), '"/>');
  return opt_sb ? '' : output.toString();
};


AWP.Templates.iframeSmall = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<iframe frameborder=\'0\' width=\'100%\' height=\'220\' class=\'adhoworkflows\'src="', soy.$$escapeHtml(opt_data.contextPath), '/plugins/servlet/adhocworkflows/workflow/', soy.$$escapeHtml(opt_data.pageId), '"/>');
  return opt_sb ? '' : output.toString();
};


AWP.Templates.pageState = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="adhocworkflows-state cw-tracker ', soy.$$escapeHtml(opt_data.finalClass), '" ', (opt_data.hover != opt_data.stateName) ? 'title="' + soy.$$escapeHtml(opt_data.hover) + '"' : '', '>', soy.$$escapeHtml(opt_data.stateName), '</span>');
  return opt_sb ? '' : output.toString();
};


AWP.Templates.versionInfo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('(', soy.$$escapeHtml("view:"), '&nbsp;<a id="view-change-link" href="', soy.$$escapeHtml(opt_data.changeUrl), '">', soy.$$escapeHtml("change"), '</a> &middot;&nbsp;<a id="awp-alternate-view" href="', soy.$$escapeHtml(opt_data.contextPath), soy.$$escapeHtml(opt_data.pageStatus.alternateViewUrl), '">', soy.$$escapeHtml(opt_data.pageStatus.alternateViewStateName), '</a>)');
  return opt_sb ? '' : output.toString();
};


AWP.Templates.altLinkNoVersion = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="noprint">(<a id="awp-alternate-view" href="', soy.$$escapeHtml(opt_data.contextPath), soy.$$escapeHtml(opt_data.pageStatus.alternateViewUrl), '">', soy.$$escapeHtml(opt_data.pageStatus.alternateViewStateName), '</a>)</span>');
  return opt_sb ? '' : output.toString();
};


AWP.Templates.badge = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<sub class="awp-badge ', (opt_data.message == '0') ? 'awp-badge-0' : '', ' badge aui-lozenge">', (opt_data.message == '0') ? '!' : soy.$$escapeHtml(opt_data.message), '</sub>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.comalatech.workflow:bundled', location = 'templates/com/comalatech/workflow/embedded/js/workflow.js' */
var AWP=AWP||{};AWP.Embedded=AWP.Embedded||{};AWP.Embedded.Workflow=(function(i,f){var e="workflow",g=null,k="",a="",b="",c=null,h="",d=false;setState=function(t){var q=f("#"+k);var r="#title-text";var u="#workflow-page-message";q.css("display","block");if(t.stateName&&t.stateName!==""&&!t.hideStates){var o="";if(t.finalState){o="final"}else{if(t.hasFinalState){o="notfinal"}}f("#title-heading .adhocworkflows-state, .rw_page_title .adhocworkflows-state").remove();if(f(".rw_page_title").length>0){r=".rw_page_title"}f(r).append(AWP.Templates.pageState({stateName:t.stateName,finalClass:o,hover:""}));if(t.updatePageStatus){var p=i.$("#content .status-macro:first");if(p.length>0){p.removeClass("aui-lozenge-complete aui-lozenge-success aui-lozenge-current");p.html(t.stateName);if(t.finalState){p.addClass("aui-lozenge-success")}else{if(t.hasFinalState){p.addClass("aui-lozenge-current")}else{p.addClass("aui-lozenge-complete")}}}}}setMessages(t.messages);if(t.hasFinalState){if(t.alternateViewUrl){var m=f("#view-change-link");if(m.length>0){var l=m.attr("href");var s=m.parents("span");s.html(AWP.Templates.versionInfo({changeUrl:l,contextPath:i.Confluence.getContextPath(),pageStatus:t,pageId:i.params.pageId}))}else{var n=f("li.page-metadata-modification-info");if(n.length>0){if(f("#awp-alternate-view").length>0){f("#awp-alternate-view").parent().remove()}n.append(AWP.Templates.altLinkNoVersion({contextPath:i.Confluence.getContextPath(),pageStatus:t}))}}}else{}}else{}f(".awp-badge").remove();if(t.actionable||t.activeTasks>0){$parent=q.parent();$div=i.$("<div></div>",{id:"awp-menu-icon"});q.appendTo($div);$div.append(AWP.Templates.badge({message:t.activeTasks}));$parent.prepend($div);if(i.$("#inline-dialog-adhocWorkflowsDialogPopup").is(":visible")){f(".awp-badge").hide()}}if(!t.hideStates){f("#addAdhocWorkflow").css("display","none");f("#addApprovalWorkflow").css("display","none")}f("#editPageWorkflowLink").css("display","block");if(f("#workflow_page_not_permitted").length){f(".page-metadata").hide()}};setMessages=function(p){var o="#workflow-page-message";if(p){if(!jQuery.isArray(p)){p=[p]}if(p.length>0){var n=f(o);if(n.length===0){pageMessageContainer=f("<div></div>",{id:"workflow-page-message"});f("#main-content").prepend(pageMessageContainer)}else{n.html("")}for(var l=0;l<p.length;l++){var m=p[l];p={title:m.title?m.title:undefined,closeable:true,body:m.renderedMessage};switch(m.type){case"ERROR":i.messages.error(o,p);break;case"SUCCESS":i.messages.success(o,p);break;case"INFO":i.messages.info(o,p);break;case"HINT":i.messages.hint(o,p);break;case"WARNING":i.messages.warning(o,p);break;default:i.messages.generic(o,p)}}}}};updateBadge=function(m){var l=f(".awp-badge").html();if(m!=l){if(m=="0"){f(".awp-badge").addClass("awp-badge-0");m="!"}else{f(".awp-badge").removeClass("awp-badge-0")}f(".awp-badge").html(m)}};generatePopup=function(o,m,n){var l=f(m);f(".awp-badge").hide();var p=f("<div></div>").attr({"class":"awp-loading"}).html("loading");o.height("350px").html(p).append(AWP.Templates.iframe({pageId:i.params.pageId,contextPath:i.Confluence.getContextPath(),action:e}));n()};generateFeedbackPopup=function(l){if(l){var m="#"+l;$popup=f(m);$popup.addClass("awp-"+l);$popup.html(AWP.Templates.feedback({}));f("<iframe></iframe>").attr({src:"http://comalatech.wufoo.com/embed/m7x1p5/",height:"365",allowtransparency:"true",frameborder:"0",scrolling:"no"}).appendTo(m+" .awp-content");f(m+" .awp-btn-close").bind("click",hideFeedbackDialog)}};getModalDialogId=function(){return h};getDialogId=function(){return k};isModalDialogOpen=function(){return d};setModalDialogOpen=function(l){d=l};showModalDlg=function(){setModalDialogOpen(true);c.show()};hideDialog=function(){g.hide()};hideModalDialog=function(){setModalDialogOpen(false);c.hide()};setAction=function(l){e=l};getTask=function(){return b};setTask=function(l){b=l};setApproval=function(l){a=l};getApproval=function(){return a};queryString=function(){var o={};var n=window.location.search.substring(1);var p=n.split("&");for(var m=0;m<p.length;m++){var q=p[m].split("=");if(typeof o[q[0]]==="undefined"){o[q[0]]=q[1]}else{if(typeof o[q[0]]==="string"){var l=[o[q[0]],q[1]];o[q[0]]=l}else{o[q[0]].push(q[1])}}}return o};init=function(m,l){i.log("[AWP] init embedded.workflow");k=m;h=l;var n="#"+k;f("#rte-button-adhoctasks").click(function(){AWP.Embedded.Workflow.setAction("addtask")});g=i.InlineDialog(f(n+",#rte-button-adhoctasks"),"adhocWorkflowsDialogPopup",generatePopup,{width:420,offsetY:17,hideDelay:10000,hideCallback:function(){f(".awp-badge").show("fast")},initCallback:function(){setModalDialogOpen(false)}});c=new i.Dialog({width:350,height:220,id:h,closeOnOutsideClick:true});if(i.params.buildNumber<5700){f(n).parents("li").appendTo(f("#navigation ul.ajs-menu-bar"))}if(f("#rw_page_toolbar").length>0){f(n).find("span").html("").end().addClass("rw_icon_button").removeClass("aui-button").prependTo(f("#rw_page_toolbar"))}else{if(f(".rw_custom_section").length>0){f(n+" span").html("");f(n).addClass("rw_icon_button").prependTo(f("#rw_page_right .rw_custom_section"))}}};var j=function(){var l="rte-button-adhoctasks";f("#"+l).click(function(){AWP.Embedded.Workflow.setAction("addtask")});g=i.InlineDialog(f("#"+l),"adhocWorkflowsDialogPopup",generatePopup,{width:420,offsetY:17,hideDelay:10000,hideCallback:function(){f(".awp-badge").show("fast")},initCallback:function(){setModalDialogOpen(false)}})};i.toInit(function(l){init("adhocWorkflowsPopupLink","addWorkflowDialog");AWP.params=queryString();if(AWP.params.task||AWP.params.approval){i.Confluence.EditorLoader.load(function(){if(AWP.params.task){setTask(AWP.params.task);l("#"+getDialogId()).click()}else{if(AWP.params.approval){setApproval(AWP.params.approval);l("#"+getDialogId()).click()}}})}l(document).delegate(".awp-badge","click",g.show);l(document).delegate("#editPageLink","click",j)});return{setState:setState,setMessages:setMessages,setAction:setAction,updateBadge:updateBadge,dialog:g,getDialogId:getDialogId,hideDialog:hideDialog,modalDialog:c,getModalDialogId:getModalDialogId,isModalDialogOpen:isModalDialogOpen,setModalDialogOpen:setModalDialogOpen,showModalDlg:showModalDlg,hideModalDialog:hideModalDialog,setTask:setTask,getTask:getTask,setApproval:setApproval,getApproval:getApproval}})(AJS,AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.comalatech.workflow:bundled', location = 'templates/com/comalatech/workflow/embedded/js/events.js' */
var AWP=AWP||{};AWP.Embedded=AWP.Embedded||{};AWP.Embedded.Events=new function(a){this.refreshState=function(b,c){AWP.Embedded.Workflow.setState(c)};this.refreshMsg=function(c,b){AWP.Embedded.Workflow.setMessages(b)};this.closeWorkflowDialog=function(){AWP.Embedded.Workflow.hideDialog();AWP.Embedded.Workflow.hideModalDialog()};this.addWorkflow=function(c){c.preventDefault();var d=AWP.Embedded.Workflow;d.showModalDlg();var b=a("#"+d.getModalDialogId());b.html("").append(AWP.Templates.iframeSmall({pageId:AJS.params.pageId,contextPath:AJS.Confluence.getContextPath()}));return false};this.addTask=function(b){b.preventDefault();var c=AWP.Embedded.Workflow;c.setAction("addtask");a("#"+c.getDialogId()).click()};this.addApprovalWorkflow=function(b){b.preventDefault();AWP.Embedded.Workflow.setAction("addapproval");a("#"+AWP.Embedded.Workflow.getDialogId()).click()};a(document).delegate("iframe.adhoworkflows","awp.refresh",this.refreshState);a(document).delegate("iframe.adhoworkflows","awp.refreshMsg",this.refreshMsg);a(document).delegate("iframe.adhoworkflows","awp.close",this.closeWorkflowDialog);a(document).delegate("#addApprovalWorkflow","click",this.addApprovalWorkflow)}(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.comalatech.workflow:bundled', location = 'templates/com/comalatech/workflow/common/js/view/progresstracker.js' */
var AWP=AWP||{};AWP.ProgressTracker=(function(b,g,a){var f=5,h=false,e="",d="awp-progress-tracker",c=AWP.Templates.progresstracker;initialize=function(){filterStates();if(!a){a=""}};checkStates=function(){var l=false;if(arguments.length>0){g=arguments[0]}var k=b.indexOf(g);if(k>=0){l=true}return l};filterStates=function(){var k=b.length;this.hintHiddenStates="";if(k>f){var n=k-f;var l=0,m=false;while(l<k&&!m){if(b[l]==g){m=true}l++}l--;if(l==0){for(j=0;j<f-2;j++){b[j]=b[l+j]}b[j]="...";b[j+1]=b[k-1];b.splice(f);hiddenStates=k-(l+(f-1));e="+"+hiddenStates+" states"}else{if(l<n){for(j=0;j<f-2;j++){b[j]=b[l+j]}b[j]="...";b[j+1]=b[k-1];b.splice(f);hiddenStates=k-(l+(f-1));e="+"+hiddenStates+" states"}else{b.splice(0,n);b.unshift("...")}}}};render=function(){var i="";i=c({el:d,states:b,current:g,hintHiddenStates:e,stateDescription:a});h=true;return i};isRendered=function(){return h};$el=function(){return AJS.$("."+d)};initialize();return{$el:$el,checkStates:checkStates,isRendered:isRendered,render:render}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.comalatech.workflow:adhocworkflows-resource', location = 'templates/adhocworkflows/js/autocomplete-filtered-user.js' */
var AWP=AWP||{};AWP.autocompleteFilteredUser=function(b){b=b||document.body;var c=AJS.$;var a=function(e){if(!e||!e.result){throw new Error("Invalid JSON format")}var d=[];d.push(e.result);return d};c('input.autocomplete-filtered-user[data-autocomplete-filtered-user-bound!="true"]',b).each(function(){var g=c(this).attr("data-autocomplete-filtered-user-bound","true").attr("autocomplete","off");var f=g.attr("data-max")||10,j=g.attr("data-alignment")||"left",h=g.attr("data-dropdown-target"),e=null;if(h){e=c(h)}else{e=c("<div></div>");g.after(e)}if(g.attr("data-resize-to-input")){e.width(g.outerWidth());e.addClass("resize-to-input")}e.addClass("aui-dd-parent autocomplete");var d=c(this).attr("groups");var i=c(this).attr("users");d=d||"";i=i||"";g.quicksearch("/rest/adhocworkflows/1/search/user.json?groups="+d+"&users="+i,function(){g.trigger("open.autocomplete-filtered-user")},{makeParams:function(k){return{"max-results":f,query:k}},dropdownPlacement:function(k){e.append(k)},makeRestMatrixFromData:a,addDropdownData:function(k){if(!k.length){var l=g.attr("data-none-message");if(l){k.push([{name:l,className:"no-results",href:"#"}])}}return k},ajsDropDownOptions:{alignment:j,displayHandler:function(k){if(k.restObj&&k.restObj.username){return k.name+" ("+k.restObj.username+")"}return k.name},selectionHandler:function(p,m){if(m.find(".search-for").length){g.trigger("selected.autocomplete-filtered-user",{searchFor:g.val()});return}if(m.find(".no-results").length){this.hide();p.preventDefault();return}var k=c("span:eq(0)",m).data("properties"),q=k.restObj.username,n=g.attr("data-target"),o=n&&c(n),l=g.attr("data-template")||"{username}";g.val(AJS.template(l).fillHtml(k.restObj));o&&o.val(q);g.trigger("selected.autocomplete-filtered-user",{content:k.restObj});this.hide();p.preventDefault()}}})})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.comalatech.workflow:adhocworkflows-resource', location = 'templates/adhocworkflows/js/states.js' */
var Adhoc=Adhoc||{};Adhoc.Workflow=Adhoc.Workflow||{};Adhoc.menuActions=Adhoc.menuActions||[];(function(a){Adhoc.Workflow.setState=function(b){Adhoc.state=b;var c=a("#adhocWorkflowsLink");if(!b.stateName||b.publishedView){c.css("display","none")}else{c.addClass("workflow-state").css("display","block").css("visibility","inherit");c.attr("title",b.hoverDescription);a("#workflow-page-message").html("")}if(b.activeTasks>0){a("#adhocTasksLink").css("display","block");Adhoc.Tasks.generateTasksPopup(Adhoc.Tasks.dialog.find(".contents"),this,function(){})}else{a("#adhocTasksLink").hide()}if(b.taskable){a("#addPageTaskLink").removeClass("notTaskable");a("#addPageTaskLink").addClass("taskable");a("#taskable").val("true")}else{a("#addPageTaskLink").removeClass("taskable");a("#addPageTaskLink").addClass("notTaskable");a("#taskable").val("false")}a("#editPageWorkflowLink").css("display","block");AWP.Embedded.Workflow.setState(b)};Adhoc.Workflow.refreshState=function(){a.ajax({type:"GET",cache:false,url:AJS.Confluence.getContextPath()+"/rest/adhocworkflows/latest/state/"+AJS.params.pageId+"?publishedView="+Adhoc.publishedView,success:function(c,d,b){if(b.status!=200){return}AWP.Embedded.Workflow.setState(c);if(Adhoc.clickedApprovalId){a("#adhocWorkflowsLink").click()}},error:Adhoc.errorHandler});return false};Adhoc.Workflow.stateAction=function(){var c=a(this).parents("form");var b={name:c.hasClass("adhoc")?c.find("input.newstatename").val():c.find("select").val(),assignee:Adhoc.getAssignees(c),note:c.find("textarea").val()};var d=a(this).attr("name");Adhoc.submitProgress(a(this).parents(".adhoc"));a.ajax({type:"POST",cache:false,contentType:"application/json; charset=utf-8",url:AJS.Confluence.getContextPath()+"/rest/adhocworkflows/latest/state/"+AJS.params.pageId+"/"+d,data:JSON.stringify(b),success:function(f,g,e){if(e.status==200){AWP.Embedded.Workflow.setState(f)}Adhoc.dialog.hide()},error:Adhoc.errorHandler});return false};Adhoc.Workflow.assign=function(){var b=a(this).parents("form");b.addClass("assign");return false};Adhoc.Workflow.unassign=function(){var b=a(this).parents("form");b.addClass("unassign");return false};Adhoc.Workflow.doStateDialog=function(e,c){var b=e.states;c.append(AJS.template.load("adhocworkflows-states").fill());for(i=0;i<b.length;i++){var d={name:b[i]};c.find("select").append(AJS.template.load("adhocworkflows-state").fill(d))}if(e.adhoc){c.find("select").append(AJS.template.load("adhocworkflows-state-adhoc").fill());c.find("select").change(function(){var f=a(this).parents("form");var g=a(this).val();if(g=="0"){f.addClass("adhoc")}else{f.removeClass("adhoc");f.find("input.newstatename").val("")}})}c.find("form.state input[type='submit']").click(Adhoc.Workflow.stateAction);c.find(".cancel-dialog").click(Adhoc.doHidePopup);Adhoc.setPresetUsers(a("#inline-dialog-adhocWorkflowsPopup .usersdropdown .aui-dropdown"),e.involvedUsers);c.find(".usersdropdown").dropDown("Standard");c.find("input.autocomplete-user").click(function(){var f=a(this).parents("form");f.find(".usersdropdown a.aui-dd-trigger").click()});AJS.Confluence.Binder.autocompleteUser();c.find("input.autocomplete-user").bind("selected.autocomplete-user",Adhoc.selectAssignee);c.find(".assign-page").click(Adhoc.Workflow.assign);if(e.assignee!=undefined){c.find("input[name='assignee']").attr("placeholder",c.find("input[name='assignee']").attr("placeholder2"));c.find("ol.assignees.assigned").append(AJS.template.load("adhocworkflows-assignee").fill(e.assignee))}c.find("ol.assignees.assigned .remove-assignee").click(Adhoc.Workflow.unassign);if(!e.pageAssignable){a("form.aui.state").addClass("unassignable")}else{a("form.aui.state").removeClass("unassignable")}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.comalatech.workflow:adhocworkflows-resource', location = 'templates/adhocworkflows/js/approvals.js' */
var Adhoc=Adhoc||{};Adhoc.Approvals=Adhoc.Approvals||{};(function(a){Adhoc.Approvals.hideApproval=function(){a(this).parents(".approvals .approval").removeClass("active");a("#workflow-main .button-panel.dialog").show();return false};Adhoc.Approvals.showApproval=function(){a(this).parents(".approvals").find(".cancel-approval").click();var b=a(this).parents(".approval");var e=a(this).attr("name");var c=b.find("form");a(this).parents(".approvals .approval").removeClass("active");b.addClass("active");b.removeClass("approve").removeClass("reject").removeClass("assign");c.removeClass("approve").removeClass("reject").removeClass("assign");a("ol.assignees.select").empty();b.addClass(e);c.addClass(e);var d=b.find(".button-panel input[name='"+e+"']");d.toggleClass("highlight");setTimeout(function(){d.toggleClass("highlight")},400);a("#workflow-main .button-panel.dialog").hide();return false};Adhoc.Approvals.assign=function(){var b=a(this).parents(".approval");var c=b.find("form");c.removeClass("approve").removeClass("reject");c.addClass("assign");c.find("input.autocomplete-filtered-user").click().focus();return false};Adhoc.Approvals.doAction=function(){var d=a(this).attr("name");var b=a(this).parents("form");var c={assignee:Adhoc.getAssignees(b),user:b.find("input[name='username']").val(),password:b.find("input[name='password']").val(),name:b.find("input[name='name']").val(),note:b.find("textarea").val()};Adhoc.submitProgress(a(this).parents(".adhoc"));a.ajax({type:"POST",cache:false,contentType:"application/json; charset=utf-8",url:AJS.Confluence.getContextPath()+"/rest/adhocworkflows/latest/approval/"+AJS.params.pageId+"/"+d,data:JSON.stringify(c),success:function(g,h,f){if(f.status==200){var e=Adhoc.state.stateName!=g.stateName;Adhoc.Workflow.setState(g);if(!e){a("#adhocWorkflowsLink").click()}else{Adhoc.dialog.hide()}}else{Adhoc.dialog.hide()}},error:Adhoc.errorHandler});return false};Adhoc.Approvals.doDialog=function(d,n){var k;if(d.approvals.length>1){k=AJS.params.approvalsLabel}else{k=""}fillApprovalActions=function(i,o){var p=i.find(".approval-header .workflow-actions");for(var j=o.actions.length-1;j>=0;j--){p.append(AJS.template.load("adhoc-action").fill(o.actions[j]))}};fillDefaultAction=function(i,j,o){$name=i.find(".name");if(j.hint!=undefined){i.attr("title",j.hint)}if(j.defaultAction!=undefined){j.defaultAction.name=o.fullName?o.fullName:o.name;j.defaultAction.shortName=o.shortName;$name.append(AJS.template.load("adhocworkflows-approval-action-default").fill(j))}else{$name.append(o.fullName?o.fullName:o.name)}};var m=d.approvals;n.append(AJS.template.load("adhocworkflows-approvals").fill());var l="";for(var g=0;g<m.length;g++){var c=m[g];c.separator=l;n.find(".approvals").append(AJS.template.load("adhocworkflows-approval").fill(c));var h=a("#"+c.id);if(c.assignees!=undefined&&c.assignees.length>0){Adhoc.setPresetUsers(h.find(".usersdropdown .aui-dropdown ol"),c.assignees);h.addClass("assignees")}else{Adhoc.setPresetUsers(h.find(".usersdropdown .aui-dropdown ol"),d.involvedUsers)}if(c.dueDate){h.find(".approval-duedate").html(AJS.template.load("adhocworkflows-approval-duedate").fill(c))}if(c.message!=undefined&&c.message.length>0){h.find(".adhoc-message").html(c.message)}fillApprovalActions(h,c);fillDefaultAction(h,c,c);for(var f=0;f<c.approvers.length;f++){var e=c.approvers[f];n.find(".approvals").append(AJS.template.load("adhocworkflows-approver").fill(e));var b=a("#"+e.id);fillApprovalActions(b,e);fillDefaultAction(b,e,e.user)}l="separator"}n.find(".workflow-action").click(Adhoc.Approvals.showApproval);n.find("form.approval input[type='submit']").click(Adhoc.Approvals.doAction);n.find(".cancel-approval").click(Adhoc.Approvals.hideApproval);n.find(".assign-approval").click(Adhoc.Approvals.assign);n.find(".cancel-dialog").click(Adhoc.doHidePopup);n.find(".usersdropdown").dropDown("Standard");if(!AJS.$.browser.msie){n.find("input.autocomplete-filtered-user,input.assignee-user").click(function(){var i=a(this).parents("form");i.find(".usersdropdown a.aui-dd-trigger").click()})}else{n.find("div.approval.assignees input.assignee-user").click(function(){var i=a(this).parents("form");i.find(".usersdropdown a.aui-dd-trigger").click()})}n.find("input.autocomplete-filtered-user").bind("selected.autocomplete-filtered-user",Adhoc.selectAssignee);n.find("input.assignee-user").keypress(function(i){i.preventDefault()});AWP.autocompleteFilteredUser();if(Adhoc.clickedApprovalId){a("#"+Adhoc.clickedApprovalId+" .approval-header .name a").click();Adhoc.clickedApprovalId=undefined}else{if(!a("#adhocWorkflowsLink").hasClass("approvalworkflow")){if(n.find(".approval-header").length==1&&n.find("a.approve:first").length==1){n.find("a.approve:first").click()}}}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.comalatech.workflow:adhocworkflows-resource', location = 'templates/adhocworkflows/js/tasks.js' */
Adhoc=Adhoc||{};Adhoc.Tasks=Adhoc.Tasks||{};(function(a){Adhoc.Tasks.clickedTasksId;Adhoc.Tasks.editDialog,Adhoc.Tasks.dialog,Adhoc.Tasks.dialogOptions={width:280,offsetY:17,offsetX:-40,hideDelay:10000};Adhoc.Tasks.editDialogOptions={width:480,height:400,id:"inline-dialog-adhocTasks",closeOnOutsideClick:true};Adhoc.Tasks.hideDialog=function(){if(Adhoc.Tasks.dialog&&Adhoc.Tasks.dialog!=undefined){Adhoc.Tasks.dialog.hide()}if(Adhoc.Tasks.editDialog&&Adhoc.Tasks.editDialog!=undefined){Adhoc.Tasks.editDialog.hide()}return false};Adhoc.Tasks.isInlineDialog=function(){return a("#inline-dialog-adhocTasks").hasClass("aui-inline-dialog")};Adhoc.Tasks.getSelectedText=function(){var b;if(jQuery.browser.msie){b=document.selection.createRange().text}else{b=window.getSelection()}b=""+b;if(b&&b.length>2&&b.indexOf("'")!=0&&b.indexOf('"')!=0&&b.indexOf("|")<0&&b.indexOf('"')<0){b=""+b;return b.split("\n",10)}else{return[]}};Adhoc.Tasks.getNames=function(b){var c=[];b.find("input.taskName:not(.placeholded)").each(function(){var d=a(this).val();if(d.length>0){c.push(d)}});return c};Adhoc.Tasks.doAction=function(){var b=a(this).parents("form");var d=a(this).attr("name");var c=b.find("input[name='id']").val();var e={names:Adhoc.Tasks.getNames(b),assignee:Adhoc.getAssignees(b),note:b.find("textarea:not(.placeholded)").val()};Adhoc.submitProgress(a(this).parents(".adhoc"));a.ajax({type:"POST",cache:false,contentType:"application/json; charset=utf-8",url:AJS.Confluence.getContextPath()+"/rest/adhocworkflows/latest/tasks/"+AJS.params.pageId+"/"+(c!=undefined&&c>0?c+"/":"")+d,data:JSON.stringify(e),success:function(h,i,g){if(g.status==200){Adhoc.Tasks.tasks=h.tasks;Adhoc.Tasks.updateCount(h.tasks.length);var f;if(Adhoc.Tasks.isInlineDialog()){f=Adhoc.Tasks.dialog.find(".contents")}else{f=a("#inline-dialog-adhocTasks .editor-task-dialog")}Adhoc.Tasks.doDialog(h.tasks,f,true);if(!Adhoc.Tasks.isInlineDialog()){Adhoc.Tasks.editDialog.show()}}else{Adhoc.Tasks.hideDialog()}},error:Adhoc.errorHandler});return false};Adhoc.Tasks.hideTask=function(){a(".adhoc .task").removeClass("active");return false};Adhoc.Tasks.showTask=function(){if(AJS.dropDown.current!=undefined){AJS.dropDown.current.hide()}a("#inline-dialog-adhocTasks form.addtask").removeClass("active");var d=a(this).parents(".task");var c=a(this).attr("name");if(c==undefined||c==""){c=a(this).find("a").attr("name")}var b=d.find("form");d.find(".cancel-task").click();d.addClass("active");b.attr("class","aui").addClass(c);return false};Adhoc.Tasks.updateCount=function(c){a("#adhocTasksLink span, #rte-button-adhoctasks span.trigger-text").html("");var b;if(c==undefined){c=0}if(c==0){b="adhoctasks-tasks-count0"}else{if(c==1){a("#adhocTasksLink").css("display","block");b="adhoctasks-tasks-count1"}else{a("#adhocTasksLink").css("display","block");b="adhoctasks-tasks-count"}}a("#adhocTasksLink span, #rte-button-adhoctasks span.trigger-text").append(AJS.template.load(b).fill({count:c}))};Adhoc.Tasks.toggleAddTask=function(){Adhoc.Tasks.hideTask();a("#inline-dialog-adhocTasks form.addtask").toggleClass("active");a("#taskName0").click().focus();return false};Adhoc.Tasks.assign=function(){var c=a(this);var b=a(this).parents(".task").find("form");b.addClass("assign");b.removeClass("complete");b.removeClass("view");b.removeClass("remove");return false};Adhoc.Tasks.remove=function(){var c=a(this);var b=a(this).parents(".task").find("form");b.addClass("remove");b.removeClass("complete");b.removeClass("view");b.removeClass("assign");return false};Adhoc.Tasks.assignNewTask=function(){var c=a(this);var b=c.parents("form");b.addClass("assign");c.hide();return false};Adhoc.Tasks.initClipboardSelection=function(e,h){var f;if(!e.hasClass("reload")){f=Adhoc.Tasks.getSelectedText()}else{f=[]}Adhoc.selected=f;if(!a("#adhocTasksLink").hasClass("addtasklink")&&(h.length==0||f.length>0)){e.find("a.add-task").click();var d=0;for(var b=0;b<f.length;b++){var c=a.trim(f[b]);if(c.length>0){var g=a("#taskName"+d++);g.addClass("active").click().val(c)}}if(d>1){a("form.addtask").addClass("multiple")}else{a("form.addtask").addClass("single")}}else{a("form.addtask").addClass("single")}};Adhoc.Tasks.doDialog=function(f,c,d){var e=function(k,h,n){h.toggle=n?"even":"";k.find(".tasks").append(AJS.template.load("adhoctasks-task").fill(h));var m=a("#task-"+h.id);try{m.find(".task-caption").append(AJS.template.load("adhoctasks-task-completed").fill(h))}catch(l){alert("Comala Workflows panel out of sync because of CONF-23672. Please restart server")}if(!h.comment||h.comment.length==0){m.find(".task-caption .note").remove()}var o=m.find(".name");if(h.actions&&h.actions.length>0){o.append(AJS.template.load("adhoctasks-task-action-default").fill({hint:h.hint,action:h.actions[0],shortName:h.shortName,name:h.name}))}else{o.append(h.name)}if(h.user){if(Adhoc.Tasks.isInlineDialog()){var g=m.find("ol.assignees.select");Adhoc.addAssignee(g,h.user.name,h.user.fullName,h.user.pictureUrl,"assigned")}else{o.append(AJS.template.load("adhoctasks-task-assignee").fill(h))}}if(h.dueDate){o.append(AJS.template.load("adhoctasks-task-duedate").fill(h))}for(var i=h.actions.length-1;i>=0;i--){m.find(".task-header .workflow-actions").append(AJS.template.load("adhoc-action").fill(h.actions[i]))}};c.empty();if(d){c.addClass("reload")}Adhoc.Tasks.tasks=f;c.append(AJS.template.load("adhoctasks-tasks").fill());for(var b=0;b<f.length;b++){e(c,f[b],b%2==1)}c.find("a.cancel-dialog").click(Adhoc.Tasks.hideDialog);c.find("a.cancel-addtask, a.add-task").click(Adhoc.Tasks.toggleAddTask);c.find("input[type='submit']").click(Adhoc.Tasks.doAction);c.find(".task-header, li.dropdown-item .workflow-action").click(Adhoc.Tasks.showTask);c.find(".cancel-task").click(Adhoc.Tasks.hideTask);c.find(".workflow-actions").dropDown("Standard");Adhoc.Tasks.initClipboardSelection(c,f);c.find(".assign-new-task").click(Adhoc.Tasks.assignNewTask);c.find(".assign").click(Adhoc.Tasks.assign);c.find(".remove").click(Adhoc.Tasks.remove);a.ajax({type:"GET",cache:false,url:AJS.Confluence.getContextPath()+"/rest/adhocworkflows/latest/tasks/"+AJS.params.pageId+"/users",success:function(h,i,g){Adhoc.setPresetUsers(a(".adhoc .usersdropdown .aui-dropdown"),h.users);if(!AJS.$.browser.msie){c.find("input.autocomplete-user").click(function(){var j=a(this).parents("form");j.find(".usersdropdown a.aui-dd-trigger").click()})}c.find(".usersdropdown").dropDown("Standard")},error:Adhoc.errorHandler});c.find("input.autocomplete-user").bind("selected.autocomplete-user",Adhoc.selectAssignee);AJS.Confluence.Binder.autocompleteUser();if(Adhoc.Tasks.clickedTasksId&&Adhoc.Tasks.clickedTasksId>0){a("#task-"+Adhoc.Tasks.clickedTasksId+" .task-header .name a").click();Adhoc.Tasks.clickedTasksId=0}if(a("#adhocTasksLink").hasClass("addtasklink")){a("#adhocTasksLink").removeClass("addtasklink");c.find("a.add-task").click()}if(a("#taskable").val()=="false"){a("a.add-task").hide()}};Adhoc.Tasks.generateTasksPopup=function(e,b,d){e.addClass("adhoc");e.empty();e.append(AJS.template.load("adhocworkflows-loading").fill());d();var c=Raphael.spinner(e.find(".progress-messages-icon")[0],7,"#666");a.ajax({type:"GET",cache:false,url:AJS.Confluence.getContextPath()+"/rest/adhocworkflows/latest/tasks/"+AJS.params.pageId,success:function(g,h,f){Adhoc.Tasks.tasks=g.tasks;Adhoc.Tasks.updateCount(g.tasks.length);Adhoc.Tasks.doDialog(Adhoc.Tasks.tasks,e,false)},error:Adhoc.errorHandler})};Adhoc.Tasks.addTaskLink=function(){if(a("#taskable").val()!="false"){a("#adhocTasksLink").css("display","block").addClass("addtasklink").click()}return false};AJS.toInit(function(b){try{Adhoc.Tasks.clickedTasksId=Adhoc.getUrlParams()["task"]}catch(c){}if(b("#editor-container, #rte-toolbar").length==0){Adhoc.Tasks.dialog=AJS.InlineDialog(b("#adhocTasksLink"),"adhocTasks",Adhoc.Tasks.generateTasksPopup,Adhoc.Tasks.dialogOptions);if(b("#adhocTasksLink").length==0){return}if(b("#displayEmptyTaskMenu").length>0){}}else{if(AJS.params.pageId>0){Adhoc.Tasks.editDialog=new AJS.Dialog(Adhoc.Tasks.editDialogOptions);Adhoc.Tasks.editDialog.addPage("editor-task-dialog").addHeader(AJS.params.tasksLabel)}else{b("#rte-button-adhoctasks").hide()}}if(AJS.params.pageId>0){try{b.ajax({type:"GET",cache:false,url:AJS.Confluence.getContextPath()+"/rest/adhocworkflows/latest/tasks/"+AJS.params.pageId+"/count",success:function(e,f,d){Adhoc.Tasks.updateCount(e);if(Adhoc.Tasks.clickedTasksId&&Adhoc.Tasks.clickedTasksId>0){b("#adhocTasksLink").click()}}})}catch(c){}}})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.comalatech.workflow:adhocworkflows-resource', location = 'templates/adhocworkflows/js/templates.js' */
var Adhoc=Adhoc||{};Adhoc.Workflow=Adhoc.Workflow||{};(function(a){Adhoc.Workflow.workflowAction=function(){var b=a("#adhocWorkflowsLink");a("#add-menu-link").click();b.css("display","block").css("visibility","inherit").click();return false};Adhoc.Workflow.addApprovalAction=function(){var b=a("#adhocWorkflowsLink");a("#add-menu-link").click();b.css("display","block").css("visibility","inherit").addClass("approvalworkflow").click();return false};Adhoc.Workflow.doAddWorkflow=function(){var c=a(this);var b={workflowId:c.find("select").val(),stateNames:c.find("input.state-names").val()};Adhoc.submitProgress(a(this).parents(".adhoc"));a.ajax({type:"POST",cache:false,contentType:"application/json; charset=utf-8",url:AJS.Confluence.getContextPath()+"/rest/adhocworkflows/latest/workflow/"+AJS.params.pageId+"/add",data:JSON.stringify(b),success:function(e,f,d){if(d.status==200){a("#addAdhocWorkflow").hide();Adhoc.Workflow.setState(e)}Adhoc.dialog.hide()},error:Adhoc.errorHandler});return false};Adhoc.Workflow.doAddApprovalWorkflow=function(){var c=a(this);var b={workflowId:0};a.ajax({type:"POST",cache:false,contentType:"application/json; charset=utf-8",url:AJS.Confluence.getContextPath()+"/rest/adhocworkflows/latest/workflow/"+AJS.params.pageId+"/add?default=true",data:JSON.stringify(b),success:function(e,f,d){if(d.status==200){a("#addAdhocWorkflow").hide();a("#addApprovalWorkflow").hide();Adhoc.Workflow.setState(e)}Adhoc.dialog.hide();a("#adhocWorkflowsLink").click()},error:Adhoc.errorHandler});return false};Adhoc.Workflow.doSelectTemplate=function(){var c=a(this).val();var b=a(this).parents("form");if(c==0){b.addClass("adhoc")}else{b.removeClass("adhoc")}};Adhoc.Workflow.doTemplatesDialog=function(b,d,e){d.empty();d.append(AJS.template.load("adhocworkflows-select").fill());d.find(".close-dialog").click(Adhoc.doHidePopup);d.find("select").change(Adhoc.Workflow.doSelectTemplate);if(e.status!=200){return}var c=b.templates;for(i=0;i<c.length;i++){d.find("#select-workflow-templates").append(AJS.template.load("adhocworkflows-select-template").fill(c[i]))}d.find("#select-workflow-templates").append(AJS.template.load("adhocworkflows-adhoc-template").fill());d.find("form").submit(Adhoc.Workflow.doAddWorkflow)}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.comalatech.workflow:adhocworkflows-resource', location = 'templates/adhocworkflows/js/forms.js' */
var Adhoc=Adhoc||{};Adhoc.Form=Adhoc.Form||{};Adhoc.menuActions=Adhoc.menuActions||[];(function(a){Adhoc.Form.toggleEdit=function(){a("#workflow-form").toggleClass("edit");return false};Adhoc.Form.doSubmitForm=function(){var d={fields:[]};var c=a(this).parents("form").find("table input");c.each(function(){d.fields.push({id:a(this).attr("name"),value:a(this).attr("value")})});var b=a(this).parents("form").find("table select");b.each(function(){d.fields.push({id:a(this).attr("name"),value:a("option:selected",a(this)).text()})});Adhoc.submitProgress(a(this).parents(".adhoc"));a.ajax({type:"POST",cache:false,contentType:"application/json; charset=utf-8",url:AJS.Confluence.getContextPath()+"/rest/adhocworkflows/latest/forms/"+AJS.params.pageId+"/submit",data:JSON.stringify(d),success:function(g,h,f){if(f.status==200){var e=Adhoc.state.stateName!=g.stateName;Adhoc.Workflow.setState(g);a("#adhocWorkflowsLink").click()}else{Adhoc.dialog.hide()}},error:Adhoc.errorHandler});return false};Adhoc.Form.doFormDialog=function(g,c){var e=g.inputFields;c.append(AJS.template.load("adhocworkflows-form").fill());var d=c.find(".ahoc-form table");for(i=0;i<e.length;i++){var b=e[i];d.append(AJS.template.load("adhocworkflows-inputfield").fill(b));var f=c.find("#"+b.id);if(b.type=="USER"){f.append(AJS.template.load("adhocworkflows-inputfield-user").fill(b));a.ajax({type:"GET",cache:false,url:AJS.Confluence.getContextPath()+"/rest/adhocworkflows/latest/forms/user/"+f.find("span").html(),success:function(h,l,k){if(k.status!=200){return}c.find("span[title='"+h.name+"']").html("").append(AJS.template.load("adhocworkflows-inputfield-decorated-user").fill(h))},error:Adhoc.errorHandler})}else{if(b.type=="LIST"){f.append(AJS.template.load("adhocworkflows-inputfield-list").fill(b));for(j=0;j<b.options.length;j++){f.find("select").append(AJS.template.load("adhocworkflows-inputfield-list-option").fill({option:b.options[j],selected:(b.options[j]==b.value?"selected='selected'":"")}))}}else{f.append(AJS.template.load("adhocworkflows-inputfield-text").fill(b))}}}c.find(".edit-form").click(Adhoc.Form.toggleEdit);if(g.initParameters){c.find(".edit-form").click()}c.find("input[type='submit']").click(Adhoc.Form.doSubmitForm);c.find(".cancel-dialog").click(Adhoc.doHidePopup);Adhoc.setPresetUsers(a("#inline-dialog-adhocWorkflowsPopup .usersdropdown .aui-dropdown"),g.involvedUsers);c.find("input.autocomplete-user").click(function(){a(this).parents("td").find(".usersdropdown a.aui-dd-trigger").click()});c.find(".usersdropdown").dropDown("Standard")};Adhoc.Form.showParameters=function(){Adhoc.action.showParameters=true;Adhoc.generateActionDialog(Adhoc.dialog.find("div.contents"),Adhoc.action);return false}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.comalatech.workflow:adhocworkflows-resource', location = 'templates/adhocworkflows/js/adhocworkflows.js' */
var Adhoc=Adhoc||{};Adhoc.Workflow=Adhoc.Workflow||{};Adhoc.viewHistory=false;(function(b){Adhoc.clickedApprovalId=null;Adhoc.dialog=null;Adhoc.dialogOptions={width:280,offsetY:17,offsetX:-40,hideDelay:10000};Adhoc.activityOptions={onHover:true,width:380,offsetY:10,offsetX:-40,hideDelay:500};Adhoc.setPresetUsers=function(e,f){e.empty();for(var d=0;d<f.length;d++){e.append(AJS.template.load("adhocworkflows-user").fill(f[d]))}e.find("a").click(Adhoc.clickAssignee)};Adhoc.updateAssignButton=function(d){var e=d.parents("form").find("input.assign");if(d.find("li").length>0){e.removeAttr("disabled")}else{e.attr("disabled","disabled")}};Adhoc.addAssignee=function(f,g,i,h,j){if(f.find("li[name='"+g+"']").length>0){return}if(f.hasClass("single")){f.find("li").remove()}var e={name:g,fullName:i,pictureUrl:h};f.append(AJS.template.load("adhocworkflows-assignee").fill(e));var d=f.find("li[name='"+e.name+"']");if(j!==undefined){d.addClass(j)}d.find(".remove-assignee").click(Adhoc.removeAssignee);Adhoc.updateAssignButton(f)};Adhoc.removeAssignee=function(){var e=b(this).parents("ol");var d=b(this).parents("li");d.remove();Adhoc.updateAssignButton(e);return false};Adhoc.clickAssignee=function(){var e=b(this).parents("form");var f=b(this).attr("name");var d=e.find("ol.assignees.select");b.ajax({type:"GET",cache:false,url:AJS.Confluence.getContextPath()+"/rest/adhocworkflows/latest/workflow/userdetails?username="+f,success:function(h,j,i){if(h!==undefined){var g=h;Adhoc.addAssignee(d,g.name,g.fullName,g.pictureUrl)}},error:function(){}});AJS.dropDown.current.hide();return false};Adhoc.selectAssignee=function(j,h){try{var g=b(this).parents("form");var f=g.find("ol.assignees.select");var d=h.content;Adhoc.addAssignee(f,d.username,d.title,d.thumbnailLink.href);g.find("input.autocomplete-user").val("")}catch(i){}return false};Adhoc.getAssignees=function(e){var d=e.find("ol.assignees.select li, ol.assignees.assignee li");var g="";var f="";d.each(function(){f=f+g+jQuery(this).attr("name");g=","});return f};Adhoc.errorHandler=function(e,d){console.error("Error, check Adhoc.errorData and Adhoc.errorStatus");Adhoc.errorData=e;Adhoc.errorStatus=d};Adhoc.doHidePopup=function(){Adhoc.dialog.hide();return false};Adhoc.generateActionDialog=function(d,e){Adhoc.action=e;d.empty();if(e.hasParameters){d.addClass("parameters")}if(e.showParameters){Adhoc.Form.doFormDialog(e,d)}else{if(e.approvals){Adhoc.Approvals.doDialog(e,d)}else{if(e.states){Adhoc.Workflow.doStateDialog(e,d)}else{b("#adhocWorkflowsLink").addClass("published").unbind("click").click(function(){return false});Adhoc.doHidePopup()}}}d.find("a.parameters").click(Adhoc.Form.showParameters)};Adhoc.getUrlParams=function c(){var e={};var d=window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(f,g,h){e[g]=h});return e};Adhoc.submitProgress=function(e){e.find("input, select, a").attr("disabled","disabled");var d=Raphael.spinner(e.find(".progress-messages-icon")[0],7,"#666")};var a=function(g,d,f){g.addClass("adhoc");g.empty();g.append(AJS.template.load("adhocworkflows-loading").fill());f();var e=Raphael.spinner(g.find(".progress-messages-icon")[0],7,"#666");var h=b("#adhocWorkflowsLink");if(h.hasClass("workflow-state")){b.ajax({type:"GET",cache:false,url:AJS.Confluence.getContextPath()+"/rest/adhocworkflows/latest/workflow/"+AJS.params.pageId+"/actions"+(AJS.params.workflowAdmin?"?admin=true":""),success:function(j,k,i){Adhoc.generateActionDialog(g,j)},error:Adhoc.errorHandler})}else{if(h.hasClass("approvalworkflow")){Adhoc.Workflow.doAddApprovalWorkflow()}else{b.ajax({type:"GET",cache:false,url:AJS.Confluence.getContextPath()+"/rest/adhocworkflows/latest/workflow/"+AJS.params.pageId+"/templates",success:function(i,k,j){Adhoc.Workflow.doTemplatesDialog(i,g,j)},error:Adhoc.errorHandler})}}};AJS.toInit(function(f){console.log("initializing Comala Workflows...");f("#labelsString").focus(Adhoc.Workflow.refreshState);if(AJS.params.publishedView){f("#adhocWorkflowsLink").addClass("published").click(function(){return false});f("body").addClass("cw-published-view")}else{if(AJS.params.anonymous){f("#adhocWorkflowsLink").click(function(){return false})}else{Adhoc.dialog=AJS.InlineDialog(f("#adhocWorkflowsLink"),"adhocWorkflowsPopup",a,Adhoc.dialogOptions)}}if(f("#workflow-page-status").length===0){return}var d={stateName:AJS.params.stateName,stateDescription:AJS.params.stateDescription,finalState:AJS.params.finalState,hasFinalState:AJS.params.hasFinalState,publishedView:AJS.params.publishedView,alternateViewStateName:AJS.params.alternateViewStateName,alternateViewUrl:AJS.params.alternateViewUrl,taskable:AJS.params.taskable,hoverDescription:AJS.params.hoverDescription};Adhoc.publishedView=d.publishedView;if(Adhoc.publishedView){f("#viewPageLink").hide();f("#viewPageLink").parents("li").hide()}Adhoc.Workflow.refreshState();try{Adhoc.clickedApprovalId=Adhoc.getUrlParams().approval}catch(g){}})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.comalatech.workflow:adhocworkflows-resource', location = 'templates/com/comalatech/workflow/common/soy/progresstracker.soy' */
// This file was automatically generated from progresstracker.soy.
// Please don't edit this file by hand.

if (typeof AWP == 'undefined') { var AWP = {}; }
if (typeof AWP.Templates == 'undefined') { AWP.Templates = {}; }


AWP.Templates.progresstracker = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="', soy.$$escapeHtml(opt_data.el), '"><ol class="aui-progress-tracker">');
  var stateList6 = opt_data.states;
  var stateListLen6 = stateList6.length;
  for (var stateIndex6 = 0; stateIndex6 < stateListLen6; stateIndex6++) {
    var stateData6 = stateList6[stateIndex6];
    output.append('<li ', (stateData6 == '...') ? 'title="' + soy.$$escapeHtml(opt_data.hintHiddenStates) + '"' : '', 'class="aui-progress-tracker-step ', (stateData6 == opt_data.current) ? 'aui-progress-tracker-step-current' : '', ' ', (stateData6 == '...') ? (stateIndex6 == 0) ? 'awp-progress-tracker-step-first' : 'awp-progress-tracker-step-short' : '', '"><span class="', (stateData6 == '...') ? 'awp-progress-tracker-transition' : '', '">', soy.$$escapeHtml(stateData6), '</span></li>');
  }
  output.append('</ol>', (opt_data.stateDescription && opt_data.current != opt_data.stateDescription) ? '<div class="awp-progress-statedesc">' + soy.$$escapeHtml(opt_data.stateDescription) + '</div>' : '', '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.comalatech.workflow:adhocworkflows-resource', location = 'templates/com/comalatech/workflow/common/js/view/progresstracker.js' */
var AWP=AWP||{};AWP.ProgressTracker=(function(b,g,a){var f=5,h=false,e="",d="awp-progress-tracker",c=AWP.Templates.progresstracker;initialize=function(){filterStates();if(!a){a=""}};checkStates=function(){var l=false;if(arguments.length>0){g=arguments[0]}var k=b.indexOf(g);if(k>=0){l=true}return l};filterStates=function(){var k=b.length;this.hintHiddenStates="";if(k>f){var n=k-f;var l=0,m=false;while(l<k&&!m){if(b[l]==g){m=true}l++}l--;if(l==0){for(j=0;j<f-2;j++){b[j]=b[l+j]}b[j]="...";b[j+1]=b[k-1];b.splice(f);hiddenStates=k-(l+(f-1));e="+"+hiddenStates+" states"}else{if(l<n){for(j=0;j<f-2;j++){b[j]=b[l+j]}b[j]="...";b[j+1]=b[k-1];b.splice(f);hiddenStates=k-(l+(f-1));e="+"+hiddenStates+" states"}else{b.splice(0,n);b.unshift("...")}}}};render=function(){var i="";i=c({el:d,states:b,current:g,hintHiddenStates:e,stateDescription:a});h=true;return i};isRendered=function(){return h};$el=function(){return AJS.$("."+d)};initialize();return{$el:$el,checkStates:checkStates,isRendered:isRendered,render:render}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.comalatech.workflow:deletePageVersionsResource', location = '/templates/javascript/page-delete-versions.js' */
(function(a,b){a.toInit(function(){if(a.params.deletePageVersionsForbidden){b(".remove-historical-version-trigger").each(function(){var c=this.previousSibling;if(c&&c.nodeType&&c.nodeType===3){b(c).remove()}b(this).remove()})}})})(AJS,AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.view-source:view-source-menu-resources', location = 'com/atlassian/confluence/plugins/viewsource/js/viewsource.js' */
AJS.toInit(function ($) {
    $("#action-view-source-link").click(function (e) {
        window.open(this.href, (this.id + "-popupwindow").replace(/-/g, "_"), "width=800, height=600, scrollbars, resizable");
            e.preventDefault();
            return false;
        });
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.view-storage-format:view-storage-menu-resources', location = 'com/atlassian/confluence/plugins/viewstorage/js/viewstorage.js' */
AJS.toInit(function ($) {
    $(".view-storage-link, .view-storage-link a").click(function (e) {
        window.open(this.href, (this.id + "-popupwindow").replace(/-/g, "_"), "width=800, height=600, scrollbars, resizable");
            e.preventDefault();
            return false;
        });
});

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.macros.core:flash-autosize', location = 'javascript/flash-autosize.js' */
AJS.toInit(function($) {
    function autoSize(embeds, attempt) {
        var retry;

        if(attempt >= 20) { // 2 sec
            AJS.log('unable to auto size flash - took too long to load');
            return;
        }

        retry = $([]);

        embeds.each(function() {
            var $e = $(this);
            var h, w;
            if(this.GetVariable) {
                // Only set width/height is not already set
                if(!$e.attr("height")) {
                    h = this.GetVariable("height");
                    if(h) {
                        $e.height(h);
                    } else {
                        retry = retry.add($e);
                        return;
                    }
                }
                if(!$e.attr("width")) {
                    w = this.GetVariable("width");
                    if(w) {
                        $e.width(w);
                    } else {
                        retry = retry.add($e);
                        return;
                    }
                }
            }
        });

        if(retry.length) {
            setTimeout(function() {
                autoSize(retry, attempt + 1);
            }, 100);
        }
    }

    autoSize($('embed[type="application/x-shockwave-flash"]'), 0);

    // For preview
    $(window).bind("render-content-loaded", function(e, body) {
        autoSize($('embed[type="application/x-shockwave-flash"]', body), 0);
    });
});

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


