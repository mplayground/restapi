try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'soy/pagetree.soy' */
// This file was automatically generated from pagetree.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Pagetree == 'undefined') { Confluence.Templates.Pagetree = {}; }
if (typeof Confluence.Templates.Pagetree.Macro == 'undefined') { Confluence.Templates.Pagetree.Macro = {}; }


Confluence.Templates.Pagetree.Macro.loadingIndicator = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="plugin_pagetree_children_loading_wrapper"><div class="spinner"/><span class="plugin_pagetree_children_loading">', soy.$$escapeHtml("Loading..."), '</span></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'com/atlassian/confluence/plugins/pagetree/resource/javascript/pagetree.js' */
(function(){var A=function(M){this.$=M;
var H=this.$;
var b=999;
var c=true;
var K=false;
var W={};
var D={};
var N=function(k,j,f,i,e){if(j==undefined||j==null){j=!B(k)
}if(f==undefined||f==null){f=0
}if(!L(k,j)){var h=H("#children"+k);
if(Z(h)){var g=H("#plusminus"+k);
if(j==c){g.removeClass("icon-section-closed").addClass("icon-section-opened")
}else{g.removeClass("icon-section-opened").addClass("icon-section-closed")
}if(j==c){if(e==false){h.slideDown(300)
}else{h.removeClass("plugin-pagetree-hide-children");
h.animate({opacity:1})
}}else{if(e==false){h.slideUp(300)
}else{h.animate({opacity:0},{complete:function(){h.addClass("plugin-pagetree-hide-children")
}})
}}if(i){R(k)
}}else{J(k,new Array(),f,"",i,e)
}}if(i){R(k)
}};
var Z=function(e){return e.children("ul[id]").length>0
};
var B=function(f){var e=H("#plusminus"+f);
return(e.length>0)?(e.hasClass("icon-minus")||e.hasClass("icon-section-opened")):K
};
var L=function(f,e){return B(f)==e
};
var I=function(h,g,f){a(h,c,g,f)
};
var X=function(h,g,f){a(h,K,g,f)
};
var a=function(k,i,h,g){G(k);
var j=H("#"+k);
var f=j.find("div.plugin_pagetree_children_container");
f.each(function(e){var l=V(this.id);
N(l,i,b,e==f.length-1,g)
});
h.preventDefault();
h.stopPropagation()
};
var V=function(e){if(!e||e==undefined){return null
}if(e.indexOf("plusminus")!=-1){return e.substring("plusminus".length)
}if(e.indexOf("children")!=-1){return e.substring("children".length)
}return null
};
var C=function(e){if(!e||e==undefined){return null
}return S(e)[1]
};
var S=function(e){if(!e||e==undefined){return null
}return e.split("-")
};
var G=function(f){var e=C(f);
H("div.plugin_pagetree").each(function(g){if(g==e){H(this).find("span.plugin_pagetree_status").removeClass("hidden");
H(this).find("div.plugin_pagetree_expandcollapse").addClass("hidden")
}})
};
var R=function(f){var e=C(f);
H("div.plugin_pagetree").each(function(g){if(g==e){H(this).find("span.plugin_pagetree_status").addClass("hidden");
H(this).find("div.plugin_pagetree_expandcollapse").removeClass("hidden")
}})
};
var F=function(l,f,i,h,k,e,g){var j=W[l];
if(f=="Orphan"){j+="&hasRoot=false&spaceKey="+k
}else{j+="&hasRoot=true&pageId="+f
}j+="&treeId="+l+"&startDepth="+h+"&mobile="+g;
H.each(i,function(){j+="&ancestors="+this
});
j+="&treePageId="+e;
if(g==false){j=(AJS.params.serverUrl||"")+j
}return j
};
var Q=function(g){var f=g;
var e=null;
H("div.plugin_pagetree").each(function(h){if(h==f){e=H(this)
}});
return e
};
var P=function(e){var f=e.children("fieldset");
var g=new Object();
if(f.length>0){f.children("input").each(function(){g[this.name]=this.value
})
}return g
};
var O=function(e){var g=e.children("fieldset");
var h=new Array();
if(g.length>0){var f=g.children("fieldset");
if(f.length>0){f.children("input").each(function(){h.push(this.value)
})
}}return h
};
var E=function(g,f){var e=H("a.plugin_pagetree_childtoggle",g);
e.each(function(){var h=H(this);
h.attr("href","#").bind("click",function(k){var i=h.parent().parent().children("div.plugin_pagetree_children_container");
var j=i.attr("id");
var l=j.substring(8);
N(l,null,null,null,f);
k.preventDefault();
k.stopPropagation()
})
})
};
var U=function(e){var f=H(document.createElement("div"));
f.html(e);
return f.find("ul[id^='child_ul']").length
};
var J=function(m,g,q,o,i,f){var p=m;
var j=i;
var e=S(m);
var h=e[0];
var l=e[1];
var k=H("#children"+m);
var n=P(Q(l));
k.append(Confluence.Templates.Pagetree.Macro.loadingIndicator());
Raphael.spinner(k.find(".plugin_pagetree_children_loading_wrapper .spinner")[0],7,"#666");
H.ajax({type:"GET",url:F(l,h,g,q,o,n.treePageId,f),dataType:"text",success:function(r){if(U(r)){k.html(r);
if(k.children().length&&k.hasClass("hidden")){k.removeClass("hidden")
}E(k,f);
H("#plusminus"+p).addClass("icon-section-opened").removeClass("icon-section-closed");
H("#childrenspan"+D[parseInt(l)]+"-"+l).addClass("plugin_pagetree_current");
if(j){R(p)
}T(k);
if(AJS.PageGadget&&AJS.PageGadget.contentsUpdated){AJS.PageGadget.contentsUpdated()
}}else{window.location=n.loginUrl
}AJS.trigger("pagetree-children-loaded")
},error:function(r){if(r.status=="403"){k.text(n["i18n-pagetree.error.permission"])
}else{k.text(n["i18n-pagetree.error.general"])
}}})
};
var T=function(e){H("div.plugin_pagetree_children_container:empty",e).addClass("hidden")
};
var Y=function(e,j){var h=P(e);
var k=h.noRoot=="true";
var g=k?"Orphan-"+j:h.rootPageId+"-"+j;
var f=h.mobile=="true";
W[j]=h.treeRequestId;
if(f==false){D[j]=AJS.params.pageId
}else{D[j]=H("div.content-container").parent().attr("data-content-id")
}e.children("fieldset").each(function(){var l=H(this);
l.children("input[treeId]").attr("value",j);
l.children("input[rootPage]").attr("value",g)
});
if(k){e.find("div.plugin_pagetree_children").attr("id","childrenOrphan-"+j);
e.find("a.plugin_pagetree_expandall").click(function(l){I("childrenOrphan-"+j,l,f);
return false
});
e.find("a.plugin_pagetree_collapseall").click(function(l){X("childrenOrphan-"+j,l,f);
return false
})
}else{e.find("div.plugin_pagetree_children").attr("id","children"+g);
e.find("a.plugin_pagetree_expandall").click(function(l){I("children"+g,l,f);
return false
});
e.find("a.plugin_pagetree_collapseall").click(function(l){X("children"+g,l,f);
return false
})
}var i=O(e);
J(g,i,h.startDepth,h.spaceKey,"",f)
};
this.initPageTrees=function(){H("div.plugin_pagetree").each(function(e){Y(H(this),e)
});
d()
};
var d=function(){var e=self.placeFocus;
if(e){self.placeFocus=function(){var f=H("form[name='pagetreesearchform']");
f.attr("name","inlinecommentform");
e();
f.attr("name","pagetreesearchform")
}
}};
H(".open-flyout-to-search").bind("click",function(e){if(H(".fly-out-open").length){setTimeout(function(){ConfluenceMobile.flyout.hide()
},400)
}else{setTimeout(function(){ConfluenceMobile.flyout.show()
},400)
}e.stopPropagation();
e.preventDefault()
})
};
Confluence=Confluence||{};
Confluence.Plugins=Confluence.Plugins||{};
Confluence.Plugins.PagetreeMacro={bind:function(B){var C=new A(B);
C.initPageTrees()
}}
})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'com/atlassian/confluence/plugins/pagetree/resource/javascript/pagetree-desktop.js' */
AJS.toInit(function(A){Confluence.Plugins.PagetreeMacro.bind(A)
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.whatsnew:whats-new-resources', location = 'js/whats-new.js' */
AJS.toInit(function(d){var j=d("#whats-new-menu-link"),f,c,a,m,i,h,l=function(q){var o=!d(this).prop("checked");var n=AJS.Meta.get("context-path")+"/plugins/whatsnew/set.action";var p={isShownForUser:o};AJS.log("whatsnew > toggleDontShow > setting isShownForUser to: "+p.isShownForUser);AJS.safe.post(n,p,function(s,r){AJS.log("whatsnew > toggleDontShow > isShownForUser set to: "+s.isShownForUser)})},e=function(){if(!c){return}h&&clearTimeout(h);g();AJS.setVisible(c,true)},k=function(o){var n=new AJS.ConfluenceDialog({width:880,height:585,id:"whats-new-dialog",onCancel:function(){n.hide().remove();h&&clearTimeout(h)}});var q="What\u2019s New in Confluence {0}";var p=AJS.Meta.get("version-number").match(/^\d+\.\d+/);var s=AJS.format(q,p);n.addHeader(s);n.addPanel("default",AJS.renderTemplate("whats-new-dialog-panel"));n.addCancel("Close",function(){n.hide().remove();h&&clearTimeout(h);return false});a=n.popup.element;if(AJS.Meta.get("remote-user")){n.page[n.curpage].buttonpanel.append(AJS.renderTemplate("whats-new-dialog-tip-panel"));a.find("#dont-show-whats-new").change(l).prop("checked",!o)}c=a.find("iframe");var r=AJS.Meta.get("whats-new-iframe-src-override");if(typeof(r)=="undefined"){r=j[0].href}c[0].src=r;c.load(e);m=a.find(".whats-new-timeout");return n},g=function(){if(i){i();i=null}f.addClass("hidden")},b=function(){var n=AJS.Meta.get("context-path")+"/plugins/whatsnew/get.action";d.getJSON(n,function(o){var p=AJS.Meta.get("static-resource-url-prefix")+"/download/resources/com.atlassian.confluence.plugins.whatsnew:whats-new-resources/whats-new.html";AJS.loadTemplatesFromUrl(p,function(){k(o.isShownForUser).show();f=a.find(".whats-new-throbber.hidden");f.removeClass("hidden");i=Raphael.spinner(f[0],80,"#666");h=setTimeout(function(){c=null;g();AJS.setVisible(m,true)},10000)})})};j.click(function(n){n.preventDefault();d(this).removeClass("interactive");b()});AJS.Meta.getBoolean("show-whats-new")&&b()});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:share-keyboard-shortcut-js-resources', location = 'js/resourceloader.js' */
AJS.toInit(function(a){AJS.I18n.get("com.atlassian.confluence.plugins.share-page")});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-mentions-plugin:help-dialog-extension', location = 'js/help-dialog.js' */
AJS.toInit(function(a){Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.Autoformat.push({action:"@",context:"autoformat.autocomplete",description:"Mention"})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.doctheme:splitter', location = 'doctheme/splitter-1.5.1/splitter.js' */
/*
 * jQuery.splitter.js - two-pane splitter window plugin
 *
 * version 1.51 (2009/01/09)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

/**
 * The splitter() plugin implements a two-pane resizable splitter window.
 * The selected elements in the jQuery object are converted to a splitter;
 * each selected element should have two child elements, used for the panes
 * of the splitter. The plugin adds a third child element for the splitbar.
 *
 * For more details see: http://methvin.com/splitter/
 *
 *
 * @example $('#MySplitter').splitter();
 * @desc Create a vertical splitter with default settings
 *
 * @example $('#MySplitter').splitter({type: 'h', accessKey: 'M'});
 * @desc Create a horizontal splitter resizable via Alt+Shift+M
 *
 * @name splitter
 * @type jQuery
 * @param Object options Options for the splitter (not required)
 * @cat Plugins/Splitter
 * @return jQuery
 * @author Dave Methvin (dave.methvin@gmail.com)
 */
 ;(function($){
 var Z_INDEX = 4; // This is a hackish number, set somewhere in-between some page panels vs. the z-index of the browse menu.
 $.fn.splitter = function(args){
    args = args || {};
    return this.each(function() {
        var zombie;        // left-behind splitbar for outline resizes
        function startSplitMouse(evt) {
            if ( opts.outline )
                zombie = zombie || bar.clone(false).insertAfter(A);
            panes.css("-webkit-user-select", "none");    // Safari selects A/B text on a move
            bar.addClass(opts.activeClass);
            A._posSplit = A[0][opts.pxSplit] - evt[opts.eventPos];
            $(document)
                .bind("mousemove", doSplitMouse)
                .bind("mouseup", endSplitMouse);
        }
        function doSplitMouse(evt) {
            var newPos = A._posSplit+evt[opts.eventPos];
            if ( opts.outline ) {
                newPos = Math.max(0, Math.min(newPos, splitter._DA - bar._DA));
                bar.css(opts.origin, newPos);
            } else {
                resplit(newPos);
            }
        }
        function endSplitMouse(evt) {
            bar.removeClass(opts.activeClass);
            var newPos = A._posSplit+evt[opts.eventPos];
            if ( opts.outline ) {
                zombie.remove(); zombie = null;
                resplit(newPos);
            }
            panes.css("-webkit-user-select", "text");    // let Safari select text again
            $(document)
                .unbind("mousemove", doSplitMouse)
                .unbind("mouseup", endSplitMouse);
        }
        function resplit(newPos) {
            // Constrain new splitbar position to fit pane size limits
            newPos = Math.max(A._min, splitter._DA - B._max,
                    Math.min(newPos, A._max, splitter._DA - bar._DA - B._min));
            // Resize/position the two panes
            bar._DA = bar[0][opts.pxSplit];        // bar size may change during dock
            bar.css(opts.origin, newPos).css(opts.fixed, splitter._DF);
            A.css(opts.origin, 0).css(opts.split, newPos).css(opts.fixed,  splitter._DF);
            B.css(opts.origin, newPos+bar._DA)
                .css(opts.split, splitter._DA-bar._DA-newPos).css(opts.fixed,  splitter._DF);
            // IE fires resize for us; all others pay cash
            if ( !$.browser.msie )
                panes.trigger("resize");
        }
        function dimSum(jq, dims) {
            // Opera returns -1 for missing min/max width, turn into 0
            var sum = 0;
            for ( var i=1; i < arguments.length; i++ )
                sum += Math.max(parseInt(jq.css(arguments[i])) || 0, 0);
            return sum;
        }

        // Determine settings based on incoming opts, element classes, and defaults
        var vh = (args.splitHorizontal? 'h' : args.splitVertical? 'v' : args.type) || 'v';
        var opts = $.extend({
            activeClass: 'active',    // class name for active splitter
            pxPerKey: 8,            // splitter px moved per keypress
            tabIndex: 0,            // tab order indicator
            accessKey: ''            // accessKey for splitbar
        },{
            v: {                    // Vertical splitters:
                keyLeft: 39, keyRight: 37, cursor: ($.browser.msie) ? "e-resize" : "ew-resize",
                splitbarClass: "vsplitbar", outlineClass: "voutline",
                type: 'v', eventPos: "pageX", origin: "left",
                split: "width",  pxSplit: "offsetWidth",  side1: "Left", side2: "Right",
                fixed: "height", pxFixed: "offsetHeight", side3: "Top",  side4: "Bottom"
            },
            h: {                    // Horizontal splitters:
                keyTop: 40, keyBottom: 38,  cursor: ($.browser.msie) ? "n-resize" : "ns-resize",
                splitbarClass: "hsplitbar", outlineClass: "houtline",
                type: 'h', eventPos: "pageY", origin: "top",
                split: "height", pxSplit: "offsetHeight", side1: "Top",  side2: "Bottom",
                fixed: "width",  pxFixed: "offsetWidth",  side3: "Left", side4: "Right"
            }
        }[vh], args);

        // Create jQuery object closures for splitter and both panes
        var splitter = $(this).css({position: "relative"});
        var panes = splitter.children().css({
            position: "absolute",             // positioned inside splitter container
            "-moz-outline-style": "none"    // don't show dotted outline
        });
        var A = $(panes[0]);        // left  or top
        var B = $(panes[1]);        // right or bottom

        // Focuser element, provides keyboard support; title is shown by Opera accessKeys
        var focuser = $('<a href="javascript:void(0)"></a>')
            .attr({accessKey: opts.accessKey, tabIndex: opts.tabIndex, title: opts.splitbarClass})
            .bind($.browser.opera?"click":"focus", function(){ this.focus(); bar.addClass(opts.activeClass) })
            .bind("keydown", function(e){
                var key = e.which || e.keyCode;
                var dir = key==opts["key"+opts.side1]? 1 : key==opts["key"+opts.side2]? -1 : 0;
                if ( dir )
                    resplit(A[0][opts.pxSplit]+dir*opts.pxPerKey, false);
            })
            .bind("blur", function(){ bar.removeClass(opts.activeClass) });

        // Splitbar element, can be already in the doc or we create one
        var bar = $(panes[2] || '<div></div>')
            .insertAfter(A).css("z-index", Z_INDEX).append(focuser)
            .attr({"class": opts.splitbarClass, unselectable: "on"})
            .css({position: "absolute",    "user-select": "none", "-webkit-user-select": "none",
                "-khtml-user-select": "none", "-moz-user-select": "none"})
            .bind("mousedown", startSplitMouse);
        // Use our cursor unless the style specifies a non-default cursor
        if ( /^(auto|default|)$/.test(bar.css("cursor")) )
            bar.css("cursor", opts.cursor);

        // Cache several dimensions for speed, rather than re-querying constantly
        bar._DA = bar[0][opts.pxSplit];
        splitter._PBF = $.boxModel? dimSum(splitter, "border"+opts.side3+"Width", "border"+opts.side4+"Width") : 0;
        splitter._PBA = $.boxModel? dimSum(splitter, "border"+opts.side1+"Width", "border"+opts.side2+"Width") : 0;
        A._pane = opts.side1;
        B._pane = opts.side2;
        $.each([A,B], function(){
            this._min = opts["min"+this._pane] || dimSum(this, "min-"+opts.split);
            this._max = opts["max"+this._pane] || dimSum(this, "max-"+opts.split) || 9999;
            this._init = opts["size"+this._pane]===true ?
                parseInt($.curCSS(this[0],opts.split)) : opts["size"+this._pane];
        });

        // Determine initial position, get from cookie if specified
        var initPos = A._init;
        if ( !isNaN(B._init) )    // recalc initial B size as an offset from the top or left side
            initPos = splitter[0][opts.pxSplit] - splitter._PBA - B._init - bar._DA;
        if ( opts.cookie ) {
            if ( !$.cookie )
                alert('jQuery.splitter(): jQuery cookie plugin required');
            var ckpos = parseInt($.cookie(opts.cookie));
            if ( !isNaN(ckpos) )
                initPos = ckpos;
            /*
                CONF-27142 - Store sidebar width as soon as resize occurs so that new width is reflected
                in new tabs. 'A' is the jQuery object for the #splitter-sidebar div.
             */
            A.bind('resize', _.debounce(function(){
                var state = String(bar.css(opts.origin));    // current location of splitbar
                $.cookie(opts.cookie, state, {expires: opts.cookieExpires || 365,
                    path: opts.cookiePath || document.location.pathname});
            }, 300));
        }
        if ( isNaN(initPos) )    // King Solomon's algorithm
            initPos = Math.round((splitter[0][opts.pxSplit] - splitter._PBA - bar._DA)/2);

        var resizeHandler = function(e){
            var top = splitter.offset().top;
            //TODO: a quick hack to get the splitter to be the right height in ondemand due to the footer difference
            var footer = $("#footer, #studio-footer").outerHeight(true);
            if (!footer)
                footer = 24;
            var wh = $(window).height()-footer;
            splitter.css("height", Math.max(wh-top-splitter._hadjust, splitter._hmin)+"px");
            // ATLASSIAN - only resize components if the window has been resized, or this has been called directly.
            if (!e || e.target == window) splitter.trigger("resize");
        };
        args.update = function (isBound) {
            splitter._hadjust = dimSum(splitter, "borderTopWidth", "borderBottomWidth", "marginBottom");
            splitter._hmin = Math.max(dimSum(splitter, "minHeight"), 20);
            isBound && $(window).bind("resize", resizeHandler);
            resizeHandler();
        };
        // Resize event propagation and splitter sizing
        if ( opts.anchorToWindow ) {
            // Account for margin or border on the splitter container and enforce min height
            args.update(true);
        }
        else if ( opts.resizeToWidth && !$.browser.msie )
            $(window).bind("resize", function(){
                splitter.trigger("resize");
            });

        // Resize event handler; triggered immediately to set initial position
        splitter.bind("resize", function(e, size){
            // Custom events bubble in jQuery 1.3; don't Yo Dawg
            if ( e.target != this ) return;
            // Determine new width/height of splitter container
            splitter._DF = splitter[0][opts.pxFixed] - splitter._PBF;
            splitter._DA = splitter[0][opts.pxSplit] - splitter._PBA;
            // Bail if splitter isn't visible or content isn't there yet
            if ( splitter._DF <= 0 || splitter._DA <= 0 ) return;
            // Re-divvy the adjustable dimension; maintain size of the preferred pane
            resplit(!isNaN(size)? size : (!(opts.sizeRight||opts.sizeBottom)? A[0][opts.pxSplit] :
                splitter._DA-B[0][opts.pxSplit]-bar._DA));
        }).trigger("resize" , [initPos]);
    });
};
})(jQuery);

/*Places focus on the main content section of pages*/
/* TODO - CONFDEV-2045 Clean up this code */
window.placeFocus = function () {

    var mainSection = document.getElementById('splitter-content');
    // Don't focus when there is an editor on the page.
    if(mainSection && AJS.$("#wysiwyg").length == 0)
    {
        mainSection.focus();
    }
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.doctheme:splitter', location = 'doctheme/space-specific-quicknav.js' */
AJS.toInit(function($) {
    // This code runs on every page, but we only want it to run in the Doc theme.
    if ($("#com-atlassian-confluence").hasClass("theme-documentation")) {
        var quickSearchQuery = $("#quick-search-query");

        var siteSearchForm = quickSearchQuery.closest("form");
        var spaceKey = $("fieldset input[name='spaceSearch']", siteSearchForm).val() === "true" ? $("#confluence-space-key").attr("content") : "";

        siteSearchForm.submit(function() {
            var query = quickSearchQuery.val();

            if (query.search(/all:/gi) >= 0) {
                quickSearchQuery.val($.trim(query.replace(/all:/gi, '')));
            }
        });

        var quickNav = AJS.defaultIfUndefined("Atlassian.SearchableApps.QuickNav", { defaultValue: Confluence.QuickNav });

        AJS.log("Applying doc-theme quick search");
        quickNav.addDropDownPostProcess(function (dropDown) {
            if (spaceKey) {
                var searchFor = $("a.search-for", dropDown);
                searchFor.attr("href", searchFor.attr("href") + "&where=" + encodeURIComponent(spaceKey));
            }
        });
        quickNav.setMakeParams(function(value) {
            var params = { query : value };

            if (params.query.search(/all:/gi) >= 0) {
                $("input[name='where']", siteSearchForm).val("");
                params.query = $.trim(params.query.replace(/all:/gi, ''));
                if (!params.query)
                    params.query = "ALL";
            } else if (spaceKey) {
                params.spaceKey = spaceKey;
            }

            return params;
        });

        // DOC-79 - We need to overwrite the tooltip that Confluence appended to the quick search box when each page finish loading.
        quickSearchQuery.mouseover(function() {
            if(spaceKey) {
                quickSearchQuery.attr("title", $("input[name='tooltip']", siteSearchForm).val());
            }
        });
    }
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:view-comment', location = '/includes/js/comments.js' */
AJS.toInit(function(e){var d=Confluence.storageManager("comments");var a=function(){if(confirm("Are you sure you want to delete the comment?")){this.href=this.href+"&confirm=yes";return true}return false};Confluence.Comments={bindRemoveConfirmation:function(f){e("#comment-"+f+" .comment-action-remove a").click(a)}};if(!e("#comments-section").length){return}if(AJS.isIE6){e(".logo.anonymous").each(function(){var f=document.createElement("div");f.className="replacement";AJS.applyPngFilter(f,this.src);e(this).replaceWith(f)});e(".comment-actions .comment-permalink a").each(function(){e(this).addClass("filtered");var g=e(this).css("background-image").replace(/^url\(\"?|\"?\)$/g,"");var f=g.replace("light","dark");AJS.applyPngFilter(this,g);this.style.cursor="pointer";this.style.background="none";e(this).hover(function(){AJS.applyPngFilter(this,f)},function(){AJS.applyPngFilter(this,g)})})}e("#comments-section .comment:odd").addClass("odd");e(".comment-action-remove a").click(a);var c=e("#addcomment.comment-text"),b=e("#comments-text-editor textarea");b.focus(function(){c.addClass("active")}).blur(function(){if(!e.trim(b.val()).length){c.removeClass("active")}}).bind("reset.default-text",function(){c.removeClass("active")});e("form[name='textcommentform']").submit(function(){var f=b.val();if(!e.trim(f)){alert("Comment text is empty. Cannot create empty comments.");return false}return true});e("#add-comment-rte").click(function(){if(!b.hasClass("placeholded")){d.setItem("text-comment",e.trim(b.val()))}});if(e("#addcomment #rte").length){AJS.bind("init.rte",function(h,g){var f=d.getItem("text-comment");if(f){g.editor.setContent(f);d.setItem("text-comment","")}})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.issue-status-plugin:issue-status-resources', location = 'templates/status.soy' */
// This file was automatically generated from status.soy.
// Please don't edit this file by hand.

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Template == 'undefined') { JIRA.Template = {}; }
if (typeof JIRA.Template.Util == 'undefined') { JIRA.Template.Util = {}; }
if (typeof JIRA.Template.Util.Issue == 'undefined') { JIRA.Template.Util.Issue = {}; }
if (typeof JIRA.Template.Util.Issue.Status == 'undefined') { JIRA.Template.Util.Issue.Status = {}; }


JIRA.Template.Util.Issue.Status.issueStatusResolver = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (! opt_data.issueStatus) {
    output.append('<span class="aui-icon aui-icon-small aui-iconfont-help jira-issue-status-render-error" title="', soy.$$escapeHtml("No issue status information was provided"), '"></span>');
  } else if (opt_data.issueStatus.statusCategory) {
    JIRA.Template.Util.Issue.Status.issueStatus(opt_data, output);
  } else {
    JIRA.Template.Util.Issue.Status.iconStatus({name: opt_data.issueStatus.name, iconUrl: opt_data.issueStatus.iconUrl, description: opt_data.issueStatus.description, isCompact: opt_data.isCompact}, output);
  }
  return opt_sb ? '' : output.toString();
};


JIRA.Template.Util.Issue.Status.iconStatus = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<img src="', soy.$$escapeHtml(opt_data.iconUrl), '" width="16" height="16" alt="', soy.$$escapeHtml(opt_data.name), '" title="', soy.$$escapeHtml(opt_data.name), (opt_data.description) ? ' - ' + soy.$$escapeHtml(opt_data.description) : '', '" class="jira-issue-status-icon">', (! opt_data.isCompact) ? ' ' + soy.$$escapeHtml(opt_data.name) : '');
  return opt_sb ? '' : output.toString();
};


JIRA.Template.Util.Issue.Status.issueStatus = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  JIRA.Template.Util.Issue.Status.statusLozenge({name: opt_data.issueStatus.name, categoryKey: opt_data.issueStatus.statusCategory.key, colorName: opt_data.issueStatus.statusCategory.colorName, description: opt_data.issueStatus.description, isSubtle: opt_data.isSubtle, isCompact: opt_data.isCompact, maxWidth: opt_data.maxWidth}, output);
  return opt_sb ? '' : output.toString();
};


JIRA.Template.Util.Issue.Status.statusLozenge = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var maxWidth__soy46 = opt_data.maxWidth ? opt_data.maxWidth : 'medium';
  var tooltipContent__soy47 = new soy.StringBuilder('<span class="jira-issue-status-tooltip-title">', soy.$$escapeHtml(opt_data.name), '</span>', (opt_data.description) ? '<br><span class="jira-issue-status-tooltip-desc">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '');
  tooltipContent__soy47 = tooltipContent__soy47.toString();
  output.append('<span class=" jira-issue-status-lozenge aui-lozenge ');
  JIRA.Template.Util.Issue.Status.statusLozengeClasses(opt_data, output);
  output.append((opt_data.isSubtle && ! opt_data.isCompact) ? ' aui-lozenge-subtle' : '', (opt_data.isCompact) ? ' jira-issue-status-lozenge-compact' : '', ' jira-issue-status-lozenge-max-width-', soy.$$escapeHtml(maxWidth__soy46), '" data-tooltip="', soy.$$escapeHtml(tooltipContent__soy47), '">', soy.$$escapeHtml(opt_data.name), '</span>');
  return opt_sb ? '' : output.toString();
};


JIRA.Template.Util.Issue.Status.statusLozengeClasses = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('jira-issue-status-lozenge-', soy.$$escapeHtml(opt_data.colorName ? opt_data.colorName : 'medium-gray'), ' ', (opt_data.categoryKey) ? 'jira-issue-status-lozenge-' + soy.$$escapeHtml(opt_data.categoryKey) : '');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.issue-status-plugin:issue-status-resources', location = '/js/issue-status-plugin.js' */
AJS.$(function(){if(AJS.$.fn.tooltip){AJS.$(".jira-issue-status-lozenge").tooltip({aria:true,gravity:AJS.$.fn.tipsy.autoWE,delayIn:100,html:true,live:true,title:"data-tooltip",className:"jira-issue-status-tooltip"})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-metadata:confluence-jira-metadata-resources', location = 'soy/jira-metadata.soy' */
// This file was automatically generated from jira-metadata.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Metadata == 'undefined') { Confluence.Templates.Metadata = {}; }
if (typeof Confluence.Templates.Metadata.JIRA == 'undefined') { Confluence.Templates.Metadata.JIRA = {}; }


Confluence.Templates.Metadata.JIRA.metadata = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="jira-metadata-dialog" class="rendered-content"><h2 class="title">', soy.$$escapeHtml("JIRA links"), '</h2><div class="items-section">');
  var groupList6 = opt_data.groups;
  var groupListLen6 = groupList6.length;
  for (var groupIndex6 = 0; groupIndex6 < groupListLen6; groupIndex6++) {
    var groupData6 = groupList6[groupIndex6];
    if (groupData6.items.length) {
      switch (groupData6.type) {
        case 'ISSUES':
          Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: "Issues", type: groupData6.type, links: groupData6.links}, output);
          break;
        case 'SPRINTS':
          Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: "Sprints", type: groupData6.type, links: groupData6.links}, output);
          break;
        case 'VERSIONS':
          Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: "Versions", type: groupData6.type, links: groupData6.links}, output);
          break;
        case 'EPICS':
          Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: "Epics", type: groupData6.type, links: groupData6.links}, output);
          break;
      }
    }
  }
  output.append('</div>');
  Confluence.Templates.Metadata.JIRA.renderAuthPrompts({appLinks: opt_data.unauthorisedAppLinks}, output);
  Confluence.Templates.Metadata.JIRA.renderJiraErrors(opt_data, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.featureDiscovery = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="jira-metadata-feature-discovery"><h2>', soy.$$escapeHtml("View related JIRA items here"), '</h2><p>', soy.$$escapeHtml("Now you can see which epics, sprints, versions and issues relate to this page."), '</p><div class="aui-toolbar2" role="toolbar"><div class="aui-toolbar2-inner">');
  aui.buttons.button({text: "Show me", extraClasses: 'showme'}, output);
  aui.buttons.button({text: "Don\x27t show again", type: 'link', extraClasses: 'close'}, output);
  output.append('</div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.nometadata = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="jira-metadata-dialog" class="rendered-content">');
  aui.message.warning({content: '<p>' + soy.$$escapeHtml("JIRA links cannot be displayed. Either you do not have correct JIRA permissions or the links have been removed.") + '</p>'}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.renderAuthPrompts = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.appLinks.length) {
    var param66 = new soy.StringBuilder();
    if (opt_data.appLinks.length == 1) {
      var appLink__soy69 = opt_data.appLinks[0];
      param66.append('<p>', AJS.format("{0}Login \x26amp; Approve{1} to retrieve data from {2}",'<a class="jira-metadata-auth-link" href="#" data-href="' + appLink__soy69.authorisationUrl + '">','</a>',appLink__soy69.htmlSafeName), '</p>');
    } else {
      param66.append('<p>', soy.$$escapeHtml("Authenticate to retrieve data from the following instances:"), '</p>');
      var appLinkList78 = opt_data.appLinks;
      var appLinkListLen78 = appLinkList78.length;
      for (var appLinkIndex78 = 0; appLinkIndex78 < appLinkListLen78; appLinkIndex78++) {
        var appLinkData78 = appLinkList78[appLinkIndex78];
        param66.append('<div><a class="jira-metadata-auth-link" href="#" data-href="', soy.$$escapeHtml(appLinkData78.authorisationUrl), '">', soy.$$escapeHtml(appLinkData78.name), '</a></div>');
      }
    }
    aui.message.hint({content: param66.toString()}, output);
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.renderGroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jira-metadata-section ', soy.$$escapeHtml(opt_data.type), '-section"><div class="section-label"><span class="icon"></span><span>', soy.$$escapeHtml(opt_data.headingText), '</span></div><ul class="jira-metadata-list jira-', soy.$$escapeHtml(opt_data.type), '-list">');
  var itemList94 = opt_data.items;
  var itemListLen94 = itemList94.length;
  for (var itemIndex94 = 0; itemIndex94 < itemListLen94; itemIndex94++) {
    var itemData94 = itemList94[itemIndex94];
    output.append('<li class="jira-metadata-item"><span class="item-label"><a href="', soy.$$escapeHtml(""), '/plugins/servlet/jira-metadata/redirect?u=', soy.$$escapeUri(itemData94.url), '&t=', soy.$$escapeHtml(opt_data.type), '" title="', soy.$$escapeHtml(itemData94.name), '">', soy.$$escapeHtml(itemData94.name), '</a>');
    if (itemData94.status) {
      output.append('&nbsp;');
      if (itemData94.status.statusCategory) {
        JIRA.Template.Util.Issue.Status.issueStatusResolver({issueStatus: itemData94.status, isSubtle: true}, output);
      } else {
        output.append('<span class="item-status">(', soy.$$escapeHtml(itemData94.status.name), ')</span>');
      }
    }
    output.append('</span>', (itemData94.description != '') ? '<span class="item-subtext">' + soy.$$escapeHtml(itemData94.description) + '</span>' : '', '</li>');
  }
  output.append('</ul><ul class="jira-metadata-list ', soy.$$escapeHtml(opt_data.type), '-more-link">');
  var linkList130 = opt_data.links;
  var linkListLen130 = linkList130.length;
  for (var linkIndex130 = 0; linkIndex130 < linkListLen130; linkIndex130++) {
    var linkData130 = linkList130[linkIndex130];
    output.append('<li class="jira-metadata-item"><a href="', soy.$$escapeHtml(""), '/plugins/servlet/jira-metadata/redirect?u=', soy.$$escapeUri(linkData130.url), '&t=', soy.$$escapeHtml(opt_data.type), '&more">', soy.$$escapeHtml(AJS.format("View {0} more in {1}",linkData130.numItems,linkData130.appName)), '</a></li>');
  }
  output.append('</ul></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.loadingMetadata = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="jira-metadata-dialog"><h2 class="title">', soy.$$escapeHtml("JIRA links"), '</h2><div class="spinner-container"><div class="spinner"></div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.renderJiraErrors = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.errors.length == 1) {
    var error__soy150 = opt_data.errors[0];
    aui.message.warning({content: '<p>' + soy.$$escapeHtml("Unable to retrieve JIRA metadata.") + ' ' + soy.$$escapeHtml(error__soy150.errorMessage) + '</p>'}, output);
  } else if (opt_data.errors.length > 1) {
    var param159 = new soy.StringBuilder('<p>', soy.$$escapeHtml("Unable to retrieve JIRA metadata. The following errors occurred:"), '</p><ul>');
    var errorList163 = opt_data.errors;
    var errorListLen163 = errorList163.length;
    for (var errorIndex163 = 0; errorIndex163 < errorListLen163; errorIndex163++) {
      var errorData163 = errorList163[errorIndex163];
      param159.append('<li>', soy.$$escapeHtml(errorData163.errorMessage), '</li>');
    }
    param159.append('</ul>');
    aui.message.warning({content: param159.toString()}, output);
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.unknownError = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="jira-metadata-dialog" class="rendered-content">');
  aui.message.warning({content: '<p>' + soy.$$escapeHtml("Unable to retrieve JIRA metadata. Could not connect to Confluence") + '</p>'}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-metadata:confluence-jira-metadata-resources', location = '/js/jira-metadata.js' */
AJS.toInit(function(h){var i="com.atlassian.confluence.plugins.confluence-jira-metadata";var s=false;var o;var l;var q="jira-metadata-dialog";var g=h("#content-metadata-jira");var t;var e="jira-metadata-discovery";var r=AJS.Meta.get("jira-metadata-count");var k="linked-issues-dropdown";if(r>0){p(r,AJS.Meta.get("jira-metadata-count-incomplete"))}else{if(r==-1){h.ajax({url:AJS.contextPath()+"/rest/jira-metadata/1.0/metadata/aggregate?pageId="+AJS.Meta.get("page-id"),type:"GET",dataType:"json",contentType:"application/json",cache:false,success:function(u){if(u.count>0){p(u.count,u.incomplete)}}})}}function p(v,u){f(v,u);g.removeClass("hidden");if(b()){o=AJS.InlineDialog(g,q,function(x,w,y){AJS.trigger("analytics",{name:"confluence.jira.metadata.expanded"});if(!l||!s){l=x;y();a(x)}else{y()}return false},{hideDelay:null});g.click(function(){if(h("#"+q).is(":visible")){o.hide()}})}if(g&&j()){m();g.one("click",function(){Confluence.FeatureDiscovery.forPlugin(i).markDiscovered(k)})}}function f(v,u){if(!u){h("#content-metadata-jira > span").text(v==1?"1 JIRA link":AJS.format("{0} JIRA links",v))}}function b(){return !g.attr("href")}function m(){t=AJS.InlineDialog(g,e,function(v,u,w){v.html(Confluence.Templates.Metadata.JIRA.featureDiscovery());v.find(".showme").on("click",function(){Confluence.FeatureDiscovery.forPlugin(i).markDiscovered(k);t.hide();o.show()});v.find(".close").on("click",function(){Confluence.FeatureDiscovery.forPlugin(i).markDiscovered(k);t.hide()});w()},{noBind:true,closeOthers:false,hideDelay:null});t.show();Confluence.FeatureDiscovery.forPlugin(i).addDiscoveryView(k)}function j(){return !AJS.Meta.get("blueprint-index-popup-key")&&Confluence.FeatureDiscovery.forPlugin(i).shouldShow(k)}function a(){d();l.html(Confluence.Templates.Metadata.JIRA.loadingMetadata());l.find(".spinner").spin("medium");h.ajax({url:AJS.contextPath()+"/rest/jira-metadata/1.0/metadata?pageId="+AJS.Meta.get("page-id"),type:"GET",dataType:"json",contentType:"application/json",error:function(u){c();l.html(Confluence.Templates.Metadata.JIRA.unknownError())},success:function(v){c();s=true;f(v.count,false);var w;if(v.count===0&&!(v.unauthorisedAppLinks&&v.unauthorisedAppLinks.length>0)&&v.errors.length==0){AJS.trigger("analytics",{name:"confluence.jira.metadata.error.no-metadata"});w=Confluence.Templates.Metadata.JIRA.nometadata()}else{w=Confluence.Templates.Metadata.JIRA.metadata(v)}var x=l.height();l.html(w);var u=l.height();l.find("#"+q+" > *").not("h2").css("opacity",0).animate({opacity:1},350,"easeInOutQuad");l.css({overflow:"hidden",height:x+"px"}).animate({height:u+"px"},350,"easeInOutQuad",function(){l.css({overflow:"",height:""})});n()},complete:function(){h("#"+q+" .icon-close").click(function(u){u.stopPropagation();h(this).closest(".closable").remove()})}})}function n(){h(".jira-metadata-auth-link").click(function(u){u.preventDefault();AppLinks.authenticateRemoteCredentials(h(this).data("href"),a,function(){})})}function d(){if(l&&l.height()>0){l.css("height",l.height())}}function c(){l&&l.css("height","")}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:blueprint-first-time-tooltip-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/first-time-tooptip.js' */
AJS.bind("sidebar.finished-loading",function(){var a=AJS.Meta.get("blueprint-index-popup-key");AJS.debug("Index key for "+a);if(a){Confluence.Blueprint.showIndexPagePopup(a)}});AJS.toInit(function(a){Confluence.Blueprint.showIndexPagePopup=function(c){var e=function(j){return function(m,k,l){m.html(Confluence.Templates.Blueprints.sidebarIndexPagePopup({indexPageTitle:j.toLowerCase()}));l()}};var b=AJS.$(AJS.$("li.blueprint."+c)[0]);var i=b.text();var h=AJS.$(".icon",b);var g="blueprintIndexSidebarPopup";var d=AJS.InlineDialog(h.is(":visible")?h:AJS.$(".acs-nav-sections .quick-links-section"),g,e(i),{addActiveClass:false,hideDelay:null,noBind:true});AJS.$(document).bind("showLayer",function(j){var k=g+".inline-dialog-check";a("body").unbind("click."+k)});d.show();var f=function(j){AJS.$(document).on("click","#dismiss-index-popup",function(){j.hide();return false})}(d);AJS.bind("quickedit.success",function(){d.hide()})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-from-template-macro.js' */
AJS.toInit(function(b){var a=b(".create-from-template-button");a.each(function(){var d=b(this);if(d.attr("aria-disabled")=="true"){var c={live:true,gravity:"n",title:"data-tooltip",delayIn:250,delayOut:0};d.tooltip(c)}else{d.click(function(){d.addClass("launching-dialog");Confluence.Blueprint.Dialog.launch(d.data());return false})}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/create-from-template-macro.soy' */
// This file was automatically generated from create-from-template-macro.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }
if (typeof Confluence.Templates.Blueprints.CreateFromTemplate == 'undefined') { Confluence.Templates.Blueprints.CreateFromTemplate = {}; }


Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class=\'aui-button create-from-template-button\'', (! opt_data.hasCreatePermission) ? 'aria-disabled=\'true\' data-tooltip="' + soy.$$escapeHtml("Sorry, you don\x27t have permission to create content. Contact your space administrator to request access.") + '"' : '', 'data-space-key=\'', soy.$$escapeHtml(opt_data.spaceKey), '\' href=\'', soy.$$escapeHtml(opt_data.createContentUrl), '\'', (opt_data.title) ? 'data-title=\'' + soy.$$escapeHtml(opt_data.title) + '\'' : '', (opt_data.templateId) ? 'data-template-id=\'' + soy.$$escapeHtml(opt_data.templateId) + '\'' : '', (opt_data.contentBlueprintId) ? 'data-content-blueprint-id=\'' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '\'' : '', '>', soy.$$escapeHtml(opt_data.buttonLabel), '</a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/user.soy' */
// This file was automatically generated from user.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.User == 'undefined') { Confluence.Templates.User = {}; }


Confluence.Templates.User.userLinkUrl = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml(""), '/display/~', soy.$$escapeUri(opt_data.username));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.logo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.profilePictureInfo['default'] && opt_data.username == opt_data.currentUsername) {
    output.append('<a ', (opt_data.canView) ? ' ' + ((! opt_data.disableUserHover) ? 'class="userLogoLink"' : '') + ' data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : '', ' href="', soy.$$escapeHtml(""), '/users/editmyprofilepicture.action" title="', soy.$$escapeHtml("Add a picture of yourself"), '"><img class="userLogo logo defaultLogo" src="', soy.$$escapeHtml("/s/en_GB/5528/d86f1e458384da85f007b276ccfa37b0b9acccac.59/_"), '/images/icons/profilepics/add_profile_pic.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml("Add a picture of yourself"), '"></a>');
  } else {
    if (opt_data.profilePictureInfo.anonymous) {
      output.append('<img class="userLogo logo anonymous" src="', soy.$$escapeHtml("/s/en_GB/5528/d86f1e458384da85f007b276ccfa37b0b9acccac.59/_"), '/images/icons/profilepics/anonymous.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml("Anonymous"), '" title="', soy.$$escapeHtml("Anonymous"), '">');
    } else if (opt_data.canView) {
      output.append('<a ', (! opt_data.disableUserHover) ? 'class="userLogoLink"' : '', ' data-username="', soy.$$escapeHtml(opt_data.username), '" href="');
      Confluence.Templates.User.userLinkUrl(opt_data, output);
      output.append('"><img class="userLogo logo" src="', soy.$$escapeHtml(""), soy.$$escapeHtml(opt_data.profilePictureInfo.downloadPath), '" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml(opt_data.username), '" title="', soy.$$escapeHtml(opt_data.username), '"></a>');
    } else {
      output.append('<img class="userLogo logo anonymous" src="', soy.$$escapeHtml("/s/en_GB/5528/d86f1e458384da85f007b276ccfa37b0b9acccac.59/_"), '/images/icons/profilepics/anonymous.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml(opt_data.username), '" title="', soy.$$escapeHtml(opt_data.username), '">');
    }
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.usernameLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.username && opt_data.username != '') {
    output.append('<a href="');
    Confluence.Templates.User.userLinkUrl(opt_data, output);
    output.append('"', (opt_data.canView) ? 'class="url fn confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : 'class="url fn"', '>', (opt_data.fullName && opt_data.fullName != '') ? soy.$$escapeHtml(opt_data.fullName) : soy.$$escapeHtml(opt_data.username), '</a>');
  } else {
    output.append(soy.$$escapeHtml("Anonymous"));
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.fullNameOrAnonymous = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.user && opt_data.user.fullName) ? soy.$$escapeHtml(opt_data.user.fullName) : soy.$$escapeHtml("Anonymous"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.usernameOrAnonymous = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.user && opt_data.user.name) ? soy.$$escapeHtml(opt_data.user.name) : soy.$$escapeHtml("Anonymous"));
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/icons.soy' */
// This file was automatically generated from icons.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Icons == 'undefined') { Confluence.Templates.Icons = {}; }


Confluence.Templates.Icons.contentIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.content.type == 'trackback') ? '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon icon-trackback" title="' + soy.$$escapeHtml("Track back") + '">' + soy.$$escapeHtml("Track back") + ':</a>' : '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon ' + soy.$$escapeHtml(opt_data.iconCss) + '" title="' + soy.$$escapeHtml(opt_data.iconTitle) + '">' + soy.$$escapeHtml(opt_data.iconTitle) + '</a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/js/tablesorter-date-parser.js' */
(function(A){A(function(){A.tablesorter.addParser({id:"dateAttributeParser",is:function(B,D,C){return A(C).is(".content-report-table-macro .modified")
},format:function(B,D,C,E){return A(C).attr("data-sortable-date")
},type:"numeric"})
})
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/soy/content-report-table.soy' */
// This file was automatically generated from content-report-table.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Plugins == 'undefined') { Confluence.Templates.Plugins = {}; }
if (typeof Confluence.Templates.Plugins.ContentReport == 'undefined') { Confluence.Templates.Plugins.ContentReport = {}; }


Confluence.Templates.Plugins.ContentReport.contentReportTable = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var hasSocialColumn__soy3 = opt_data.showCommentsCount || opt_data.showLikesCount;
  if (opt_data.results.length == 0 && opt_data.blueprintKey) {
    output.append('<div class="blueprint-blank-experience ', soy.$$escapeHtml(opt_data.blueprintKey), '"><div class="content"><h2>', soy.$$escapeHtml(opt_data.blankTitle), '</h2><p>', soy.$$escapeHtml(opt_data.blankDescription), '</p></div>', (opt_data.createButtonLabel) ? '<p><button class="create-from-template-button aui-button aui-button-primary" data-space-key="' + soy.$$escapeHtml(opt_data.dataSpaceKey) + '" data-content-blueprint-id="' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '" href="' + soy.$$escapeHtml(opt_data.createContentUrl) + '" >' + soy.$$escapeHtml(opt_data.createButtonLabel) + '</button></p>' : '', '</div>');
  } else {
    output.append('<table class="aui content-report-table-macro', (hasSocialColumn__soy3) ? ' with-extra-columns' : '', '"', (opt_data.analyticsKey) ? ' data-analytics-key="' + soy.$$escapeHtml(opt_data.analyticsKey) + '"' : '', '><thead><tr><th>', soy.$$escapeHtml("Title"), '</th><th>', soy.$$escapeHtml("Creator"), '</th><th>', soy.$$escapeHtml("Modified"), '</th></tr></thead><tbody>');
    var resultList43 = opt_data.results;
    var resultListLen43 = resultList43.length;
    if (resultListLen43 > 0) {
      for (var resultIndex43 = 0; resultIndex43 < resultListLen43; resultIndex43++) {
        var resultData43 = resultList43[resultIndex43];
        output.append('<tr><td class="title"><a href="', soy.$$escapeHtml(resultData43.urlPath), '">', soy.$$escapeHtml(resultData43.title), '</a></td><td class="creator">');
        Confluence.Templates.User.usernameLink({canView: opt_data.canViewProfiles, username: resultData43.creatorName, fullName: resultData43.creatorFullName, contextPath: opt_data.contextPath}, output);
        output.append('</td><td class="modified" data-sortable-date="', soy.$$escapeHtml(resultData43.sortableDate), '">', soy.$$escapeHtml(resultData43.friendlyModificationDate), '</td>', (hasSocialColumn__soy3) ? '<td class="social">' + ((opt_data.showCommentsCount && resultData43.commentCount != 0) ? '<span class="icon icon-comment"></span> <span class="count">' + soy.$$escapeHtml(resultData43.commentCount) + '</span>' : '') + ((opt_data.showLikesCount && resultData43.likeCount != 0) ? '<span class="icon icon-like"></span> <span class="count">' + soy.$$escapeHtml(resultData43.likeCount) + '</span>' : '') + '</td>' : '', '</tr>');
      }
    } else {
      output.append('<tr><td colspan="3">', soy.$$escapeHtml("No content found."), '</td></tr>');
    }
    output.append('</tbody></table>', (opt_data.searchMoreResultsLinkUrl) ? '<div class="more-results"><a href="' + soy.$$escapeHtml("") + soy.$$escapeHtml(opt_data.searchMoreResultsLinkUrl) + '">' + soy.$$escapeHtml("Find more results") + '</a></div>' : '');
  }
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/js/content-report-analytics.js' */
AJS.$(function(A){A(".content-report-table-macro").on("click",".title a",function(D){var B=A(D.delegateTarget).data("analytics-key");
if(B){var C="content-report-table-macro.content-click."+B;
AJS.trigger("analytics",{name:C})
}})
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.position.js' */
/*
 * jQuery UI Position 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(G,H){G.ui=G.ui||{};var D=/left|center|right/,E=/top|center|bottom/,A="center",F={},B=G.fn.position,C=G.fn.offset;G.fn.position=function(J){if(!J||!J.of){return B.apply(this,arguments)}J=G.extend({},J);var N=G(J.of),M=N[0],P=(J.collision||"flip").split(" "),O=J.offset?J.offset.split(" "):[0,0],L,I,K;if(M.nodeType===9){L=N.width();I=N.height();K={top:0,left:0}}else{if(M.setTimeout){L=N.width();I=N.height();K={top:N.scrollTop(),left:N.scrollLeft()}}else{if(M.preventDefault){J.at="left top";L=I=0;K={top:J.of.pageY,left:J.of.pageX}}else{L=N.outerWidth();I=N.outerHeight();K=N.offset()}}}G.each(["my","at"],function(){var Q=(J[this]||"").split(" ");if(Q.length===1){Q=D.test(Q[0])?Q.concat([A]):E.test(Q[0])?[A].concat(Q):[A,A]}Q[0]=D.test(Q[0])?Q[0]:A;Q[1]=E.test(Q[1])?Q[1]:A;J[this]=Q});if(P.length===1){P[1]=P[0]}O[0]=parseInt(O[0],10)||0;if(O.length===1){O[1]=O[0]}O[1]=parseInt(O[1],10)||0;if(J.at[0]==="right"){K.left+=L}else{if(J.at[0]===A){K.left+=L/2}}if(J.at[1]==="bottom"){K.top+=I}else{if(J.at[1]===A){K.top+=I/2}}K.left+=O[0];K.top+=O[1];return this.each(function(){var T=G(this),V=T.outerWidth(),S=T.outerHeight(),U=parseInt(G.curCSS(this,"marginLeft",true))||0,R=parseInt(G.curCSS(this,"marginTop",true))||0,X=V+U+(parseInt(G.curCSS(this,"marginRight",true))||0),Y=S+R+(parseInt(G.curCSS(this,"marginBottom",true))||0),W=G.extend({},K),Q;if(J.my[0]==="right"){W.left-=V}else{if(J.my[0]===A){W.left-=V/2}}if(J.my[1]==="bottom"){W.top-=S}else{if(J.my[1]===A){W.top-=S/2}}if(!F.fractions){W.left=Math.round(W.left);W.top=Math.round(W.top)}Q={left:W.left-U,top:W.top-R};G.each(["left","top"],function(a,Z){if(G.ui.position[P[a]]){G.ui.position[P[a]][Z](W,{targetWidth:L,targetHeight:I,elemWidth:V,elemHeight:S,collisionPosition:Q,collisionWidth:X,collisionHeight:Y,offset:O,my:J.my,at:J.at})}});if(G.fn.bgiframe){T.bgiframe()}T.offset(G.extend(W,{using:J.using}))})};G.ui.position={fit:{left:function(I,J){var L=G(window),K=J.collisionPosition.left+J.collisionWidth-L.width()-L.scrollLeft();I.left=K>0?I.left-K:Math.max(I.left-J.collisionPosition.left,I.left)},top:function(I,J){var L=G(window),K=J.collisionPosition.top+J.collisionHeight-L.height()-L.scrollTop();I.top=K>0?I.top-K:Math.max(I.top-J.collisionPosition.top,I.top)}},flip:{left:function(J,L){if(L.at[0]===A){return }var N=G(window),M=L.collisionPosition.left+L.collisionWidth-N.width()-N.scrollLeft(),I=L.my[0]==="left"?-L.elemWidth:L.my[0]==="right"?L.elemWidth:0,K=L.at[0]==="left"?L.targetWidth:-L.targetWidth,O=-2*L.offset[0];J.left+=L.collisionPosition.left<0?I+K+O:M>0?I+K+O:0},top:function(J,L){if(L.at[1]===A){return }var N=G(window),M=L.collisionPosition.top+L.collisionHeight-N.height()-N.scrollTop(),I=L.my[1]==="top"?-L.elemHeight:L.my[1]==="bottom"?L.elemHeight:0,K=L.at[1]==="top"?L.targetHeight:-L.targetHeight,O=-2*L.offset[1];J.top+=L.collisionPosition.top<0?I+K+O:M>0?I+K+O:0}}};if(!G.offset.setOffset){G.offset.setOffset=function(M,J){if(/static/.test(G.curCSS(M,"position"))){M.style.position="relative"}var L=G(M),O=L.offset(),I=parseInt(G.curCSS(M,"top",true),10)||0,N=parseInt(G.curCSS(M,"left",true),10)||0,K={top:(J.top-O.top)+I,left:(J.left-O.left)+N};if("using" in J){J.using.call(M,K)}else{L.css(K)}};G.fn.offset=function(I){var J=this[0];if(!J||!J.ownerDocument){return null}if(I){if(G.isFunction(I)){return this.each(function(K){G(this).offset(I.call(this,K,G(this).offset()))})}return this.each(function(){G.offset.setOffset(this,I)})}return C.call(this)}}if(!G.curCSS){G.curCSS=G.css}(function(){var I=document.getElementsByTagName("body")[0],P=document.createElement("div"),M,O,J,N,L;M=document.createElement(I?"div":"body");J={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};if(I){G.extend(J,{position:"absolute",left:"-1000px",top:"-1000px"})}for(var K in J){M.style[K]=J[K]}M.appendChild(P);O=I||document.documentElement;O.insertBefore(M,O.firstChild);P.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;";N=G(P).offset(function(Q,R){return R}).offset();M.innerHTML="";O.removeChild(M);L=N.top+N.left+(I?2000:0);F.fractions=L>21&&L<22})()}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.droppable.js' */
/*
 * jQuery UI Droppable 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function(A,B){A.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var D=this.options,C=D.accept;this.isover=0;this.isout=1;this.accept=A.isFunction(C)?C:function(E){return E.is(C)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};A.ui.ddmanager.droppables[D.scope]=A.ui.ddmanager.droppables[D.scope]||[];A.ui.ddmanager.droppables[D.scope].push(this);(D.addClasses&&this.element.addClass("ui-droppable"))},destroy:function(){var C=A.ui.ddmanager.droppables[this.options.scope];for(var D=0;D<C.length;D++){if(C[D]==this){C.splice(D,1)}}this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(C,D){if(C=="accept"){this.accept=A.isFunction(D)?D:function(E){return E.is(D)}}A.Widget.prototype._setOption.apply(this,arguments)},_activate:function(D){var C=A.ui.ddmanager.current;if(this.options.activeClass){this.element.addClass(this.options.activeClass)}(C&&this._trigger("activate",D,this.ui(C)))},_deactivate:function(D){var C=A.ui.ddmanager.current;if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}(C&&this._trigger("deactivate",D,this.ui(C)))},_over:function(D){var C=A.ui.ddmanager.current;if(!C||(C.currentItem||C.element)[0]==this.element[0]){return }if(this.accept.call(this.element[0],(C.currentItem||C.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)}this._trigger("over",D,this.ui(C))}},_out:function(D){var C=A.ui.ddmanager.current;if(!C||(C.currentItem||C.element)[0]==this.element[0]){return }if(this.accept.call(this.element[0],(C.currentItem||C.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("out",D,this.ui(C))}},_drop:function(D,E){var C=E||A.ui.ddmanager.current;if(!C||(C.currentItem||C.element)[0]==this.element[0]){return false}var F=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var G=A.data(this,"droppable");if(G.options.greedy&&!G.options.disabled&&G.options.scope==C.options.scope&&G.accept.call(G.element[0],(C.currentItem||C.element))&&A.ui.intersect(C,A.extend(G,{offset:G.element.offset()}),G.options.tolerance)){F=true;return false}});if(F){return false}if(this.accept.call(this.element[0],(C.currentItem||C.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("drop",D,this.ui(C));return this.element}return false},ui:function(C){return{draggable:(C.currentItem||C.element),helper:C.helper,position:C.position,offset:C.positionAbs}}});A.extend(A.ui.droppable,{version:"1.8.24"});A.ui.intersect=function(P,J,N){if(!J.offset){return false}var E=(P.positionAbs||P.position.absolute).left,D=E+P.helperProportions.width,M=(P.positionAbs||P.position.absolute).top,L=M+P.helperProportions.height;var G=J.offset.left,C=G+J.proportions.width,O=J.offset.top,K=O+J.proportions.height;switch(N){case"fit":return(G<=E&&D<=C&&O<=M&&L<=K);break;case"intersect":return(G<E+(P.helperProportions.width/2)&&D-(P.helperProportions.width/2)<C&&O<M+(P.helperProportions.height/2)&&L-(P.helperProportions.height/2)<K);break;case"pointer":var H=((P.positionAbs||P.position.absolute).left+(P.clickOffset||P.offset.click).left),I=((P.positionAbs||P.position.absolute).top+(P.clickOffset||P.offset.click).top),F=A.ui.isOver(I,H,O,G,J.proportions.height,J.proportions.width);return F;break;case"touch":return((M>=O&&M<=K)||(L>=O&&L<=K)||(M<O&&L>K))&&((E>=G&&E<=C)||(D>=G&&D<=C)||(E<G&&D>C));break;default:return false;break}};A.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(F,H){var C=A.ui.ddmanager.droppables[F.options.scope]||[];var G=H?H.type:null;var I=(F.currentItem||F.element).find(":data(droppable)").andSelf();droppablesLoop:for(var E=0;E<C.length;E++){if(C[E].options.disabled||(F&&!C[E].accept.call(C[E].element[0],(F.currentItem||F.element)))){continue}for(var D=0;D<I.length;D++){if(I[D]==C[E].element[0]){C[E].proportions.height=0;continue droppablesLoop}}C[E].visible=C[E].element.css("display")!="none";if(!C[E].visible){continue}if(G=="mousedown"){C[E]._activate.call(C[E],H)}C[E].offset=C[E].element.offset();C[E].proportions={width:C[E].element[0].offsetWidth,height:C[E].element[0].offsetHeight}}},drop:function(C,D){var E=false;A.each(A.ui.ddmanager.droppables[C.options.scope]||[],function(){if(!this.options){return }if(!this.options.disabled&&this.visible&&A.ui.intersect(C,this,this.options.tolerance)){E=this._drop.call(this,D)||E}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(C.currentItem||C.element))){this.isout=1;this.isover=0;this._deactivate.call(this,D)}});return E},dragStart:function(C,D){C.element.parents(":not(body,html)").bind("scroll.droppable",function(){if(!C.options.refreshPositions){A.ui.ddmanager.prepareOffsets(C,D)}})},drag:function(C,D){if(C.options.refreshPositions){A.ui.ddmanager.prepareOffsets(C,D)}A.each(A.ui.ddmanager.droppables[C.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return }var G=A.ui.intersect(C,this,this.options.tolerance);var I=!G&&this.isover==1?"isout":(G&&this.isover==0?"isover":null);if(!I){return }var H;if(this.options.greedy){var F=this.options.scope;var E=this.element.parents(":data(droppable)").filter(function(){return A.data(this,"droppable").options.scope===F});if(E.length){H=A.data(E[0],"droppable");H.greedyChild=(I=="isover"?1:0)}}if(H&&I=="isover"){H.isover=0;H.isout=1;H._out.call(H,D)}this[I]=1;this[I=="isout"?"isover":"isout"]=0;this[I=="isover"?"_over":"_out"].call(this,D);if(H&&I=="isout"){H.isout=0;H.isover=1;H._over.call(H,D)}})},dragStop:function(C,D){C.element.parents(":not(body,html)").unbind("scroll.droppable");if(!C.options.refreshPositions){A.ui.ddmanager.prepareOffsets(C,D)}}}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.resizable.js' */
/*
 * jQuery UI Resizable 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(C,D){C.widget("ui.resizable",C.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000},_create:function(){var F=this,J=this.options;this.element.addClass("ui-resizable");C.extend(this,{_aspectRatio:!!(J.aspectRatio),aspectRatio:J.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:J.helper||J.ghost||J.animate?J.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(C('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=J.handles||(!C(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all"){this.handles="n,e,s,w,se,sw,ne,nw"}var K=this.handles.split(",");this.handles={};for(var G=0;G<K.length;G++){var I=C.trim(K[G]),E="ui-resizable-"+I;var H=C('<div class="ui-resizable-handle '+E+'"></div>');H.css({zIndex:J.zIndex});if("se"==I){H.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}this.handles[I]=".ui-resizable-"+I;this.element.append(H)}}this._renderAxis=function(P){P=P||this.element;for(var M in this.handles){if(this.handles[M].constructor==String){this.handles[M]=C(this.handles[M],this.element).show()}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var N=C(this.handles[M],this.element),O=0;O=/sw|ne|nw|se|n|s/.test(M)?N.outerHeight():N.outerWidth();var L=["padding",/ne|nw|n/.test(M)?"Top":/se|sw|s/.test(M)?"Bottom":/^e$/.test(M)?"Right":"Left"].join("");P.css(L,O);this._proportionallyResize()}if(!C(this.handles[M]).length){continue}}};this._renderAxis(this.element);this._handles=C(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){if(!F.resizing){if(this.className){var L=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}F.axis=L&&L[1]?L[1]:"se"}});if(J.autoHide){this._handles.hide();C(this.element).addClass("ui-resizable-autohide").hover(function(){if(J.disabled){return }C(this).removeClass("ui-resizable-autohide");F._handles.show()},function(){if(J.disabled){return }if(!F.resizing){C(this).addClass("ui-resizable-autohide");F._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();var E=function(G){C(G).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){E(this.element);var F=this.element;F.after(this.originalElement.css({position:F.css("position"),width:F.outerWidth(),height:F.outerHeight(),top:F.css("top"),left:F.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);E(this.originalElement);return this},_mouseCapture:function(F){var G=false;for(var E in this.handles){if(C(this.handles[E])[0]==F.target){G=true}}return !this.options.disabled&&G},_mouseStart:function(G){var J=this.options,F=this.element.position(),E=this.element;this.resizing=true;this.documentScroll={top:C(document).scrollTop(),left:C(document).scrollLeft()};if(E.is(".ui-draggable")||(/absolute/).test(E.css("position"))){E.css({position:"absolute",top:F.top,left:F.left})}this._renderProxy();var K=B(this.helper.css("left")),H=B(this.helper.css("top"));if(J.containment){K+=C(J.containment).scrollLeft()||0;H+=C(J.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:K,top:H};this.size=this._helper?{width:E.outerWidth(),height:E.outerHeight()}:{width:E.width(),height:E.height()};this.originalSize=this._helper?{width:E.outerWidth(),height:E.outerHeight()}:{width:E.width(),height:E.height()};this.originalPosition={left:K,top:H};this.sizeDiff={width:E.outerWidth()-E.width(),height:E.outerHeight()-E.height()};this.originalMousePosition={left:G.pageX,top:G.pageY};this.aspectRatio=(typeof J.aspectRatio=="number")?J.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);var I=C(".ui-resizable-"+this.axis).css("cursor");C("body").css("cursor",I=="auto"?this.axis+"-resize":I);E.addClass("ui-resizable-resizing");this._propagate("start",G);return true},_mouseDrag:function(E){var H=this.helper,G=this.options,M={},P=this,J=this.originalMousePosition,N=this.axis;var Q=(E.pageX-J.left)||0,O=(E.pageY-J.top)||0;var I=this._change[N];if(!I){return false}var L=I.apply(this,[E,Q,O]),K=C.browser.msie&&C.browser.version<7,F=this.sizeDiff;this._updateVirtualBoundaries(E.shiftKey);if(this._aspectRatio||E.shiftKey){L=this._updateRatio(L,E)}L=this._respectSize(L,E);this._propagate("resize",E);H.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}this._updateCache(L);this._trigger("resize",E,this.ui());return false},_mouseStop:function(H){this.resizing=false;var I=this.options,M=this;if(this._helper){var G=this._proportionallyResizeElements,E=G.length&&(/textarea/i).test(G[0].nodeName),F=E&&C.ui.hasScroll(G[0],"left")?0:M.sizeDiff.height,K=E?0:M.sizeDiff.width;var N={width:(M.helper.width()-K),height:(M.helper.height()-F)},J=(parseInt(M.element.css("left"),10)+(M.position.left-M.originalPosition.left))||null,L=(parseInt(M.element.css("top"),10)+(M.position.top-M.originalPosition.top))||null;if(!I.animate){this.element.css(C.extend(N,{top:L,left:J}))}M.helper.height(M.size.height);M.helper.width(M.size.width);if(this._helper&&!I.animate){this._proportionallyResize()}}C("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",H);if(this._helper){this.helper.remove()}return false},_updateVirtualBoundaries:function(G){var J=this.options,I,H,F,K,E;E={minWidth:A(J.minWidth)?J.minWidth:0,maxWidth:A(J.maxWidth)?J.maxWidth:Infinity,minHeight:A(J.minHeight)?J.minHeight:0,maxHeight:A(J.maxHeight)?J.maxHeight:Infinity};if(this._aspectRatio||G){I=E.minHeight*this.aspectRatio;F=E.minWidth/this.aspectRatio;H=E.maxHeight*this.aspectRatio;K=E.maxWidth/this.aspectRatio;if(I>E.minWidth){E.minWidth=I}if(F>E.minHeight){E.minHeight=F}if(H<E.maxWidth){E.maxWidth=H}if(K<E.maxHeight){E.maxHeight=K}}this._vBoundaries=E},_updateCache:function(E){var F=this.options;this.offset=this.helper.offset();if(A(E.left)){this.position.left=E.left}if(A(E.top)){this.position.top=E.top}if(A(E.height)){this.size.height=E.height}if(A(E.width)){this.size.width=E.width}},_updateRatio:function(H,G){var I=this.options,J=this.position,F=this.size,E=this.axis;if(A(H.height)){H.width=(H.height*this.aspectRatio)}else{if(A(H.width)){H.height=(H.width/this.aspectRatio)}}if(E=="sw"){H.left=J.left+(F.width-H.width);H.top=null}if(E=="nw"){H.top=J.top+(F.height-H.height);H.left=J.left+(F.width-H.width)}return H},_respectSize:function(L,G){var J=this.helper,I=this._vBoundaries,Q=this._aspectRatio||G.shiftKey,P=this.axis,S=A(L.width)&&I.maxWidth&&(I.maxWidth<L.width),M=A(L.height)&&I.maxHeight&&(I.maxHeight<L.height),H=A(L.width)&&I.minWidth&&(I.minWidth>L.width),R=A(L.height)&&I.minHeight&&(I.minHeight>L.height);if(H){L.width=I.minWidth}if(R){L.height=I.minHeight}if(S){L.width=I.maxWidth}if(M){L.height=I.maxHeight}var F=this.originalPosition.left+this.originalSize.width,O=this.position.top+this.size.height;var K=/sw|nw|w/.test(P),E=/nw|ne|n/.test(P);if(H&&K){L.left=F-I.minWidth}if(S&&K){L.left=F-I.maxWidth}if(R&&E){L.top=O-I.minHeight}if(M&&E){L.top=O-I.maxHeight}var N=!L.width&&!L.height;if(N&&!L.left&&L.top){L.top=null}else{if(N&&!L.top&&L.left){L.left=null}}return L},_proportionallyResize:function(){var J=this.options;if(!this._proportionallyResizeElements.length){return }var G=this.helper||this.element;for(var F=0;F<this._proportionallyResizeElements.length;F++){var H=this._proportionallyResizeElements[F];if(!this.borderDif){var E=[H.css("borderTopWidth"),H.css("borderRightWidth"),H.css("borderBottomWidth"),H.css("borderLeftWidth")],I=[H.css("paddingTop"),H.css("paddingRight"),H.css("paddingBottom"),H.css("paddingLeft")];this.borderDif=C.map(E,function(K,M){var L=parseInt(K,10)||0,N=parseInt(I[M],10)||0;return L+N})}if(C.browser.msie&&!(!(C(G).is(":hidden")||C(G).parents(":hidden").length))){continue}H.css({height:(G.height()-this.borderDif[0]-this.borderDif[2])||0,width:(G.width()-this.borderDif[1]-this.borderDif[3])||0})}},_renderProxy:function(){var F=this.element,I=this.options;this.elementOffset=F.offset();if(this._helper){this.helper=this.helper||C('<div style="overflow:hidden;"></div>');var E=C.browser.msie&&C.browser.version<7,G=(E?1:0),H=(E?2:-1);this.helper.addClass(this._helper).css({width:this.element.outerWidth()+H,height:this.element.outerHeight()+H,position:"absolute",left:this.elementOffset.left-G+"px",top:this.elementOffset.top-G+"px",zIndex:++I.zIndex});this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(G,F,E){return{width:this.originalSize.width+F}},w:function(H,F,E){var J=this.options,G=this.originalSize,I=this.originalPosition;return{left:I.left+F,width:G.width-F}},n:function(H,F,E){var J=this.options,G=this.originalSize,I=this.originalPosition;return{top:I.top+E,height:G.height-E}},s:function(G,F,E){return{height:this.originalSize.height+E}},se:function(G,F,E){return C.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[G,F,E]))},sw:function(G,F,E){return C.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[G,F,E]))},ne:function(G,F,E){return C.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[G,F,E]))},nw:function(G,F,E){return C.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[G,F,E]))}},_propagate:function(F,E){C.ui.plugin.call(this,F,[E,this.ui()]);(F!="resize"&&this._trigger(F,E,this.ui()))},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});C.extend(C.ui.resizable,{version:"1.8.24"});C.ui.plugin.add("resizable","alsoResize",{start:function(F,G){var E=C(this).data("resizable"),I=E.options;var H=function(J){C(J).each(function(){var K=C(this);K.data("resizable-alsoresize",{width:parseInt(K.width(),10),height:parseInt(K.height(),10),left:parseInt(K.css("left"),10),top:parseInt(K.css("top"),10)})})};if(typeof (I.alsoResize)=="object"&&!I.alsoResize.parentNode){if(I.alsoResize.length){I.alsoResize=I.alsoResize[0];H(I.alsoResize)}else{C.each(I.alsoResize,function(J){H(J)})}}else{H(I.alsoResize)}},resize:function(G,I){var F=C(this).data("resizable"),J=F.options,H=F.originalSize,L=F.originalPosition;var K={height:(F.size.height-H.height)||0,width:(F.size.width-H.width)||0,top:(F.position.top-L.top)||0,left:(F.position.left-L.left)||0},E=function(M,N){C(M).each(function(){var Q=C(this),R=C(this).data("resizable-alsoresize"),P={},O=N&&N.length?N:Q.parents(I.originalElement[0]).length?["width","height"]:["width","height","top","left"];C.each(O,function(S,U){var T=(R[U]||0)+(K[U]||0);if(T&&T>=0){P[U]=T||null}});Q.css(P)})};if(typeof (J.alsoResize)=="object"&&!J.alsoResize.nodeType){C.each(J.alsoResize,function(M,N){E(M,N)})}else{E(J.alsoResize)}},stop:function(E,F){C(this).removeData("resizable-alsoresize")}});C.ui.plugin.add("resizable","animate",{stop:function(I,N){var O=C(this).data("resizable"),J=O.options;var H=O._proportionallyResizeElements,E=H.length&&(/textarea/i).test(H[0].nodeName),F=E&&C.ui.hasScroll(H[0],"left")?0:O.sizeDiff.height,L=E?0:O.sizeDiff.width;var G={width:(O.size.width-L),height:(O.size.height-F)},K=(parseInt(O.element.css("left"),10)+(O.position.left-O.originalPosition.left))||null,M=(parseInt(O.element.css("top"),10)+(O.position.top-O.originalPosition.top))||null;O.element.animate(C.extend(G,M&&K?{top:M,left:K}:{}),{duration:J.animateDuration,easing:J.animateEasing,step:function(){var P={width:parseInt(O.element.css("width"),10),height:parseInt(O.element.css("height"),10),top:parseInt(O.element.css("top"),10),left:parseInt(O.element.css("left"),10)};if(H&&H.length){C(H[0]).css({width:P.width,height:P.height})}O._updateCache(P);O._propagate("resize",I)}})}});C.ui.plugin.add("resizable","containment",{start:function(F,P){var R=C(this).data("resizable"),J=R.options,L=R.element;var G=J.containment,K=(G instanceof C)?G.get(0):(/parent/.test(G))?L.parent().get(0):G;if(!K){return }R.containerElement=C(K);if(/document/.test(G)||G==document){R.containerOffset={left:0,top:0};R.containerPosition={left:0,top:0};R.parentData={element:C(document),left:0,top:0,width:C(document).width(),height:C(document).height()||document.body.parentNode.scrollHeight}}else{var N=C(K),I=[];C(["Top","Right","Left","Bottom"]).each(function(T,S){I[T]=B(N.css("padding"+S))});R.containerOffset=N.offset();R.containerPosition=N.position();R.containerSize={height:(N.innerHeight()-I[3]),width:(N.innerWidth()-I[1])};var O=R.containerOffset,E=R.containerSize.height,M=R.containerSize.width,H=(C.ui.hasScroll(K,"left")?K.scrollWidth:M),Q=(C.ui.hasScroll(K)?K.scrollHeight:E);R.parentData={element:K,left:O.left,top:O.top,width:H,height:Q}}},resize:function(G,P){var S=C(this).data("resizable"),I=S.options,F=S.containerSize,O=S.containerOffset,M=S.size,N=S.position,Q=S._aspectRatio||G.shiftKey,E={top:0,left:0},H=S.containerElement;if(H[0]!=document&&(/static/).test(H.css("position"))){E=O}if(N.left<(S._helper?O.left:0)){S.size.width=S.size.width+(S._helper?(S.position.left-O.left):(S.position.left-E.left));if(Q){S.size.height=S.size.width/S.aspectRatio}S.position.left=I.helper?O.left:0}if(N.top<(S._helper?O.top:0)){S.size.height=S.size.height+(S._helper?(S.position.top-O.top):S.position.top);if(Q){S.size.width=S.size.height*S.aspectRatio}S.position.top=S._helper?O.top:0}S.offset.left=S.parentData.left+S.position.left;S.offset.top=S.parentData.top+S.position.top;var L=Math.abs((S._helper?S.offset.left-E.left:(S.offset.left-E.left))+S.sizeDiff.width),R=Math.abs((S._helper?S.offset.top-E.top:(S.offset.top-O.top))+S.sizeDiff.height);var K=S.containerElement.get(0)==S.element.parent().get(0),J=/relative|absolute/.test(S.containerElement.css("position"));if(K&&J){L-=S.parentData.left}if(L+S.size.width>=S.parentData.width){S.size.width=S.parentData.width-L;if(Q){S.size.height=S.size.width/S.aspectRatio}}if(R+S.size.height>=S.parentData.height){S.size.height=S.parentData.height-R;if(Q){S.size.width=S.size.height*S.aspectRatio}}},stop:function(F,M){var O=C(this).data("resizable"),G=O.options,K=O.position,L=O.containerOffset,E=O.containerPosition,H=O.containerElement;var I=C(O.helper),P=I.offset(),N=I.outerWidth()-O.sizeDiff.width,J=I.outerHeight()-O.sizeDiff.height;if(O._helper&&!G.animate&&(/relative/).test(H.css("position"))){C(this).css({left:P.left-E.left-L.left,width:N,height:J})}if(O._helper&&!G.animate&&(/static/).test(H.css("position"))){C(this).css({left:P.left-E.left-L.left,width:N,height:J})}}});C.ui.plugin.add("resizable","ghost",{start:function(G,H){var E=C(this).data("resizable"),I=E.options,F=E.size;E.ghost=E.originalElement.clone();E.ghost.css({opacity:0.25,display:"block",position:"relative",height:F.height,width:F.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof I.ghost=="string"?I.ghost:"");E.ghost.appendTo(E.helper)},resize:function(F,G){var E=C(this).data("resizable"),H=E.options;if(E.ghost){E.ghost.css({position:"relative",height:E.size.height,width:E.size.width})}},stop:function(F,G){var E=C(this).data("resizable"),H=E.options;if(E.ghost&&E.helper){E.helper.get(0).removeChild(E.ghost.get(0))}}});C.ui.plugin.add("resizable","grid",{resize:function(E,M){var O=C(this).data("resizable"),H=O.options,K=O.size,I=O.originalSize,J=O.originalPosition,N=O.axis,L=H._aspectRatio||E.shiftKey;H.grid=typeof H.grid=="number"?[H.grid,H.grid]:H.grid;var G=Math.round((K.width-I.width)/(H.grid[0]||1))*(H.grid[0]||1),F=Math.round((K.height-I.height)/(H.grid[1]||1))*(H.grid[1]||1);if(/^(se|s|e)$/.test(N)){O.size.width=I.width+G;O.size.height=I.height+F}else{if(/^(ne)$/.test(N)){O.size.width=I.width+G;O.size.height=I.height+F;O.position.top=J.top-F}else{if(/^(sw)$/.test(N)){O.size.width=I.width+G;O.size.height=I.height+F;O.position.left=J.left-G}else{O.size.width=I.width+G;O.size.height=I.height+F;O.position.top=J.top-F;O.position.left=J.left-G}}}}});var B=function(E){return parseInt(E,10)||0};var A=function(E){return !isNaN(parseInt(E,10))}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.selectable.js' */
/*
 * jQuery UI Selectable 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(A,B){A.widget("ui.selectable",A.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var C=this;this.element.addClass("ui-selectable");this.dragged=false;var D;this.refresh=function(){D=A(C.options.filter,C.element[0]);D.addClass("ui-selectee");D.each(function(){var E=A(this);var F=E.offset();A.data(this,"selectable-item",{element:this,$element:E,left:F.left,top:F.top,right:F.left+E.outerWidth(),bottom:F.top+E.outerHeight(),startselected:false,selected:E.hasClass("ui-selected"),selecting:E.hasClass("ui-selecting"),unselecting:E.hasClass("ui-unselecting")})})};this.refresh();this.selectees=D.addClass("ui-selectee");this._mouseInit();this.helper=A("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(E){var C=this;this.opos=[E.pageX,E.pageY];if(this.options.disabled){return }var D=this.options;this.selectees=A(D.filter,this.element[0]);this._trigger("start",E);A(D.appendTo).append(this.helper);this.helper.css({left:E.clientX,top:E.clientY,width:0,height:0});if(D.autoRefresh){this.refresh()}this.selectees.filter(".ui-selected").each(function(){var F=A.data(this,"selectable-item");F.startselected=true;if(!E.metaKey&&!E.ctrlKey){F.$element.removeClass("ui-selected");F.selected=false;F.$element.addClass("ui-unselecting");F.unselecting=true;C._trigger("unselecting",E,{unselecting:F.element})}});A(E.target).parents().andSelf().each(function(){var G=A.data(this,"selectable-item");if(G){var F=(!E.metaKey&&!E.ctrlKey)||!G.$element.hasClass("ui-selected");G.$element.removeClass(F?"ui-unselecting":"ui-selected").addClass(F?"ui-selecting":"ui-unselecting");G.unselecting=!F;G.selecting=F;G.selected=F;if(F){C._trigger("selecting",E,{selecting:G.element})}else{C._trigger("unselecting",E,{unselecting:G.element})}return false}})},_mouseDrag:function(J){var D=this;this.dragged=true;if(this.options.disabled){return }var F=this.options;var E=this.opos[0],I=this.opos[1],C=J.pageX,H=J.pageY;if(E>C){var G=C;C=E;E=G}if(I>H){var G=H;H=I;I=G}this.helper.css({left:E,top:I,width:C-E,height:H-I});this.selectees.each(function(){var K=A.data(this,"selectable-item");if(!K||K.element==D.element[0]){return }var L=false;if(F.tolerance=="touch"){L=(!(K.left>C||K.right<E||K.top>H||K.bottom<I))}else{if(F.tolerance=="fit"){L=(K.left>E&&K.right<C&&K.top>I&&K.bottom<H)}}if(L){if(K.selected){K.$element.removeClass("ui-selected");K.selected=false}if(K.unselecting){K.$element.removeClass("ui-unselecting");K.unselecting=false}if(!K.selecting){K.$element.addClass("ui-selecting");K.selecting=true;D._trigger("selecting",J,{selecting:K.element})}}else{if(K.selecting){if((J.metaKey||J.ctrlKey)&&K.startselected){K.$element.removeClass("ui-selecting");K.selecting=false;K.$element.addClass("ui-selected");K.selected=true}else{K.$element.removeClass("ui-selecting");K.selecting=false;if(K.startselected){K.$element.addClass("ui-unselecting");K.unselecting=true}D._trigger("unselecting",J,{unselecting:K.element})}}if(K.selected){if(!J.metaKey&&!J.ctrlKey&&!K.startselected){K.$element.removeClass("ui-selected");K.selected=false;K.$element.addClass("ui-unselecting");K.unselecting=true;D._trigger("unselecting",J,{unselecting:K.element})}}}});return false},_mouseStop:function(E){var C=this;this.dragged=false;var D=this.options;A(".ui-unselecting",this.element[0]).each(function(){var F=A.data(this,"selectable-item");F.$element.removeClass("ui-unselecting");F.unselecting=false;F.startselected=false;C._trigger("unselected",E,{unselected:F.element})});A(".ui-selecting",this.element[0]).each(function(){var F=A.data(this,"selectable-item");F.$element.removeClass("ui-selecting").addClass("ui-selected");F.selecting=false;F.selected=true;F.startselected=true;C._trigger("selected",E,{selected:F.element})});this._trigger("stop",E);this.helper.remove();return false}});A.extend(A.ui.selectable,{version:"1.8.24"})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.accordion.js' */
/*
 * jQuery UI Accordion 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(A,B){A.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var C=this,D=C.options;C.running=0;C.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");C.headers=C.element.find(D.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){if(D.disabled){return }A(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){if(D.disabled){return }A(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){if(D.disabled){return }A(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){if(D.disabled){return }A(this).removeClass("ui-state-focus")});C.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");if(D.navigation){var E=C.element.find("a").filter(D.navigationFilter).eq(0);if(E.length){var F=E.closest(".ui-accordion-header");if(F.length){C.active=F}else{C.active=E.closest(".ui-accordion-content").prev()}}}C.active=C._findActive(C.active||D.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");C.active.next().addClass("ui-accordion-content-active");C._createIcons();C.resize();C.element.attr("role","tablist");C.headers.attr("role","tab").bind("keydown.accordion",function(G){return C._keydown(G)}).next().attr("role","tabpanel");C.headers.not(C.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();if(!C.active.length){C.headers.eq(0).attr("tabIndex",0)}else{C.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0})}if(!A.browser.safari){C.headers.find("a").attr("tabIndex",-1)}if(D.event){C.headers.bind(D.event.split(" ").join(".accordion ")+".accordion",function(G){C._clickHandler.call(C,G,this);G.preventDefault()})}},_createIcons:function(){var C=this.options;if(C.icons){A("<span></span>").addClass("ui-icon "+C.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(C.icons.header).toggleClass(C.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var C=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var D=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(C.autoHeight||C.fillHeight){D.css("height","")}return A.Widget.prototype.destroy.call(this)},_setOption:function(C,D){A.Widget.prototype._setOption.apply(this,arguments);if(C=="active"){this.activate(D)}if(C=="icons"){this._destroyIcons();if(D){this._createIcons()}}if(C=="disabled"){this.headers.add(this.headers.next())[D?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")}},_keydown:function(F){if(this.options.disabled||F.altKey||F.ctrlKey){return }var G=A.ui.keyCode,E=this.headers.length,C=this.headers.index(F.target),D=false;switch(F.keyCode){case G.RIGHT:case G.DOWN:D=this.headers[(C+1)%E];break;case G.LEFT:case G.UP:D=this.headers[(C-1+E)%E];break;case G.SPACE:case G.ENTER:this._clickHandler({target:F.target},F.target);F.preventDefault()}if(D){A(F.target).attr("tabIndex",-1);A(D).attr("tabIndex",0);D.focus();return false}return true},resize:function(){var C=this.options,E;if(C.fillSpace){if(A.browser.msie){var D=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}E=this.element.parent().height();if(A.browser.msie){this.element.parent().css("overflow",D)}this.headers.each(function(){E-=A(this).outerHeight(true)});this.headers.next().each(function(){A(this).height(Math.max(0,E-A(this).innerHeight()+A(this).height()))}).css("overflow","auto")}else{if(C.autoHeight){E=0;this.headers.next().each(function(){E=Math.max(E,A(this).height("").height())}).height(E)}}return this},activate:function(C){this.options.active=C;var D=this._findActive(C)[0];this._clickHandler({target:D},D);return this},_findActive:function(C){return C?typeof C==="number"?this.headers.filter(":eq("+C+")"):this.headers.not(this.headers.not(C)):C===false?A([]):this.headers.filter(":eq(0)")},_clickHandler:function(C,G){var L=this.options;if(L.disabled){return }if(!C.target){if(!L.collapsible){return }this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(L.icons.headerSelected).addClass(L.icons.header);this.active.next().addClass("ui-accordion-content-active");var I=this.active.next(),F={options:L,newHeader:A([]),oldHeader:L.active,newContent:A([]),oldContent:I},D=(this.active=A([]));this._toggle(D,I,F);return }var H=A(C.currentTarget||G),J=H[0]===this.active[0];L.active=L.collapsible&&J?false:this.headers.index(H);if(this.running||(!L.collapsible&&J)){return }var E=this.active,D=H.next(),I=this.active.next(),F={options:L,newHeader:J&&L.collapsible?A([]):H,oldHeader:this.active,newContent:J&&L.collapsible?A([]):D,oldContent:I},K=this.headers.index(this.active[0])>this.headers.index(H[0]);this.active=J?A([]):H;this._toggle(D,I,F,J,K);E.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(L.icons.headerSelected).addClass(L.icons.header);if(!J){H.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(L.icons.header).addClass(L.icons.headerSelected);H.next().addClass("ui-accordion-content-active")}return },_toggle:function(C,I,G,J,K){var M=this,N=M.options;M.toShow=C;M.toHide=I;M.data=G;var D=function(){if(!M){return }return M._completed.apply(M,arguments)};M._trigger("changestart",null,M.data);M.running=I.size()===0?C.size():I.size();if(N.animated){var F={};if(N.collapsible&&J){F={toShow:A([]),toHide:I,complete:D,down:K,autoHeight:N.autoHeight||N.fillSpace}}else{F={toShow:C,toHide:I,complete:D,down:K,autoHeight:N.autoHeight||N.fillSpace}}if(!N.proxied){N.proxied=N.animated}if(!N.proxiedDuration){N.proxiedDuration=N.duration}N.animated=A.isFunction(N.proxied)?N.proxied(F):N.proxied;N.duration=A.isFunction(N.proxiedDuration)?N.proxiedDuration(F):N.proxiedDuration;var L=A.ui.accordion.animations,E=N.duration,H=N.animated;if(H&&!L[H]&&!A.easing[H]){H="slide"}if(!L[H]){L[H]=function(O){this.slide(O,{easing:H,duration:E||700})}}L[H](F)}else{if(N.collapsible&&J){C.toggle()}else{I.hide();C.show()}D(true)}I.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).blur();C.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(C){this.running=C?0:--this.running;if(this.running){return }if(this.options.clearStyle){this.toShow.add(this.toHide).css({height:"",overflow:""})}this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length){this.toHide.parent()[0].className=this.toHide.parent()[0].className}this._trigger("change",null,this.data)}});A.extend(A.ui.accordion,{version:"1.8.24",animations:{slide:function(K,I){K=A.extend({easing:"swing",duration:300},K,I);if(!K.toHide.size()){K.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},K);return }if(!K.toShow.size()){K.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},K);return }var D=K.toShow.css("overflow"),H=0,E={},G={},F=["height","paddingTop","paddingBottom"],C;var J=K.toShow;C=J[0].style.width;J.width(J.parent().width()-parseFloat(J.css("paddingLeft"))-parseFloat(J.css("paddingRight"))-(parseFloat(J.css("borderLeftWidth"))||0)-(parseFloat(J.css("borderRightWidth"))||0));A.each(F,function(L,N){G[N]="hide";var M=(""+A.css(K.toShow[0],N)).match(/^([\d+-.]+)(.*)$/);E[N]={value:M[1],unit:M[2]||"px"}});K.toShow.css({height:0,overflow:"hidden"}).show();K.toHide.filter(":hidden").each(K.complete).end().filter(":visible").animate(G,{step:function(L,M){if(M.prop=="height"){H=(M.end-M.start===0)?0:(M.now-M.start)/(M.end-M.start)}K.toShow[0].style[M.prop]=(H*E[M.prop].value)+E[M.prop].unit},duration:K.duration,easing:K.easing,complete:function(){if(!K.autoHeight){K.toShow.css("height","")}K.toShow.css({width:C,overflow:D});K.complete()}})},bounceslide:function(C){this.slide(C,{easing:C.down?"easeOutBounce":"swing",duration:C.down?1000:200})}}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.autocomplete.js' */
/*
 * jQuery UI Autocomplete 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function(A,B){var C=0;A.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var D=this,F=this.element[0].ownerDocument,E;this.isMultiLine=this.element.is("textarea");this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(G){if(D.options.disabled||D.element.propAttr("readOnly")){return }E=false;var H=A.ui.keyCode;switch(G.keyCode){case H.PAGE_UP:D._move("previousPage",G);break;case H.PAGE_DOWN:D._move("nextPage",G);break;case H.UP:D._keyEvent("previous",G);break;case H.DOWN:D._keyEvent("next",G);break;case H.ENTER:case H.NUMPAD_ENTER:if(D.menu.active){E=true;G.preventDefault()}case H.TAB:if(!D.menu.active){return }D.menu.select(G);break;case H.ESCAPE:D.element.val(D.term);D.close(G);break;default:clearTimeout(D.searching);D.searching=setTimeout(function(){if(D.term!=D.element.val()){D.selectedItem=null;D.search(null,G)}},D.options.delay);break}}).bind("keypress.autocomplete",function(G){if(E){E=false;G.preventDefault()}}).bind("focus.autocomplete",function(){if(D.options.disabled){return }D.selectedItem=null;D.previous=D.element.val()}).bind("blur.autocomplete",function(G){if(D.options.disabled){return }clearTimeout(D.searching);D.closing=setTimeout(function(){D.close(G);D._change(G)},150)});this._initSource();this.menu=A("<ul></ul>").addClass("ui-autocomplete").appendTo(A(this.options.appendTo||"body",F)[0]).mousedown(function(G){var H=D.menu.element[0];if(!A(G.target).closest(".ui-menu-item").length){setTimeout(function(){A(document).one("mousedown",function(I){if(I.target!==D.element[0]&&I.target!==H&&!A.ui.contains(H,I.target)){D.close()}})},1)}setTimeout(function(){clearTimeout(D.closing)},13)}).menu({focus:function(H,I){var G=I.item.data("item.autocomplete");if(false!==D._trigger("focus",H,{item:G})){if(/^key/.test(H.originalEvent.type)){D.element.val(G.value)}}},selected:function(I,J){var H=J.item.data("item.autocomplete"),G=D.previous;if(D.element[0]!==F.activeElement){D.element.focus();D.previous=G;setTimeout(function(){D.previous=G;D.selectedItem=H},1)}if(false!==D._trigger("select",I,{item:H})){D.element.val(H.value)}D.term=D.element.val();D.close(I);D.selectedItem=H},blur:function(G,H){if(D.menu.element.is(":visible")&&(D.element.val()!==D.term)){D.element.val(D.term)}}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");if(A.fn.bgiframe){this.menu.element.bgiframe()}D.beforeunloadHandler=function(){D.element.removeAttr("autocomplete")};A(window).bind("beforeunload",D.beforeunloadHandler)},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();A(window).unbind("beforeunload",this.beforeunloadHandler);A.Widget.prototype.destroy.call(this)},_setOption:function(D,E){A.Widget.prototype._setOption.apply(this,arguments);if(D==="source"){this._initSource()}if(D==="appendTo"){this.menu.element.appendTo(A(E||"body",this.element[0].ownerDocument)[0])}if(D==="disabled"&&E&&this.xhr){this.xhr.abort()}},_initSource:function(){var D=this,F,E;if(A.isArray(this.options.source)){F=this.options.source;this.source=function(H,G){G(A.ui.autocomplete.filter(F,H.term))}}else{if(typeof this.options.source==="string"){E=this.options.source;this.source=function(H,G){if(D.xhr){D.xhr.abort()}D.xhr=A.ajax({url:E,data:H,dataType:"json",success:function(J,I){G(J)},error:function(){G([])}})}}else{this.source=this.options.source}}},search:function(E,D){E=E!=null?E:this.element.val();this.term=this.element.val();if(E.length<this.options.minLength){return this.close(D)}clearTimeout(this.closing);if(this._trigger("search",D)===false){return }return this._search(E)},_search:function(D){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:D},this._response())},_response:function(){var E=this,D=++C;return function(F){if(D===C){E.__response(F)}E.pending--;if(!E.pending){E.element.removeClass("ui-autocomplete-loading")}}},__response:function(D){if(!this.options.disabled&&D&&D.length){D=this._normalize(D);this._suggest(D);this._trigger("open")}else{this.close()}},close:function(D){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",D)}},_change:function(D){if(this.previous!==this.element.val()){this._trigger("change",D,{item:this.selectedItem})}},_normalize:function(D){if(D.length&&D[0].label&&D[0].value){return D}return A.map(D,function(E){if(typeof E==="string"){return{label:E,value:E}}return A.extend({label:E.label||E.value,value:E.value||E.label},E)})},_suggest:function(D){var E=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(E,D);this.menu.deactivate();this.menu.refresh();E.show();this._resizeMenu();E.position(A.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next(new A.Event("mouseover"))}},_resizeMenu:function(){var D=this.menu.element;D.outerWidth(Math.max(D.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(F,E){var D=this;A.each(E,function(G,H){D._renderItem(F,H)})},_renderItem:function(D,E){return A("<li></li>").data("item.autocomplete",E).append(A("<a></a>").text(E.label)).appendTo(D)},_move:function(E,D){if(!this.menu.element.is(":visible")){this.search(null,D);return }if(this.menu.first()&&/^previous/.test(E)||this.menu.last()&&/^next/.test(E)){this.element.val(this.term);this.menu.deactivate();return }this.menu[E](D)},widget:function(){return this.menu.element},_keyEvent:function(E,D){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(E,D);D.preventDefault()}}});A.extend(A.ui.autocomplete,{escapeRegex:function(D){return D.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(F,D){var E=new RegExp(A.ui.autocomplete.escapeRegex(D),"i");return A.grep(F,function(G){return E.test(G.label||G.value||G)})}})}(jQuery));(function(A){A.widget("ui.menu",{_create:function(){var B=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(C){if(!A(C.target).closest(".ui-menu-item a").length){return }C.preventDefault();B.select(C)});this.refresh()},refresh:function(){var C=this;var B=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");B.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(D){C.activate(D,A(this).parent())}).mouseleave(function(){C.deactivate()})},activate:function(E,D){this.deactivate();if(this.hasScroll()){var F=D.offset().top-this.element.offset().top,B=this.element.scrollTop(),C=this.element.height();if(F<0){this.element.scrollTop(B+F)}else{if(F>=C){this.element.scrollTop(B+F-C+D.height())}}}this.active=D.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",E,{item:D})},deactivate:function(){if(!this.active){return }this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null},next:function(B){this.move("next",".ui-menu-item:first",B)},previous:function(B){this.move("prev",".ui-menu-item:last",B)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(E,D,C){if(!this.active){this.activate(C,this.element.children(D));return }var B=this.active[E+"All"](".ui-menu-item").eq(0);if(B.length){this.activate(C,B)}else{this.activate(C,this.element.children(D))}},nextPage:function(D){if(this.hasScroll()){if(!this.active||this.last()){this.activate(D,this.element.children(".ui-menu-item:first"));return }var E=this.active.offset().top,C=this.element.height(),B=this.element.children(".ui-menu-item").filter(function(){var F=A(this).offset().top-E-C+A(this).height();return F<10&&F>-10});if(!B.length){B=this.element.children(".ui-menu-item:last")}this.activate(D,B)}else{this.activate(D,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))}},previousPage:function(D){if(this.hasScroll()){if(!this.active||this.first()){this.activate(D,this.element.children(".ui-menu-item:last"));return }var E=this.active.offset().top,C=this.element.height(),B=this.element.children(".ui-menu-item").filter(function(){var F=A(this).offset().top-E+C-A(this).height();return F<10&&F>-10});if(!B.length){B=this.element.children(".ui-menu-item:first")}this.activate(D,B)}else{this.activate(D,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))}},hasScroll:function(){return this.element.height()<this.element[A.fn.prop?"prop":"attr"]("scrollHeight")},select:function(B){this._trigger("selected",B,{item:this.active})}})}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.button.js' */
/*
 * jQuery UI Button 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(F,B){var K,E,A,H,I="ui-button ui-widget ui-state-default ui-corner-all",C="ui-state-hover ui-state-active ",G="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",J=function(){var L=F(this).find(":ui-button");setTimeout(function(){L.button("refresh")},1)},D=function(M){var L=M.name,N=M.form,O=F([]);if(L){if(N){O=F(N).find("[name='"+L+"']")}else{O=F("[name='"+L+"']",M.ownerDocument).filter(function(){return !this.form})}}return O};F.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",J);if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.propAttr("disabled")}else{this.element.propAttr("disabled",this.options.disabled)}this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var L=this,N=this.options,O=this.type==="checkbox"||this.type==="radio",P="ui-state-hover"+(!O?" ui-state-active":""),M="ui-state-focus";if(N.label===null){N.label=this.buttonElement.html()}this.buttonElement.addClass(I).attr("role","button").bind("mouseenter.button",function(){if(N.disabled){return }F(this).addClass("ui-state-hover");if(this===K){F(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){if(N.disabled){return }F(this).removeClass(P)}).bind("click.button",function(Q){if(N.disabled){Q.preventDefault();Q.stopImmediatePropagation()}});this.element.bind("focus.button",function(){L.buttonElement.addClass(M)}).bind("blur.button",function(){L.buttonElement.removeClass(M)});if(O){this.element.bind("change.button",function(){if(H){return }L.refresh()});this.buttonElement.bind("mousedown.button",function(Q){if(N.disabled){return }H=false;E=Q.pageX;A=Q.pageY}).bind("mouseup.button",function(Q){if(N.disabled){return }if(E!==Q.pageX||A!==Q.pageY){H=true}})}if(this.type==="checkbox"){this.buttonElement.bind("click.button",function(){if(N.disabled||H){return false}F(this).toggleClass("ui-state-active");L.buttonElement.attr("aria-pressed",L.element[0].checked)})}else{if(this.type==="radio"){this.buttonElement.bind("click.button",function(){if(N.disabled||H){return false}F(this).addClass("ui-state-active");L.buttonElement.attr("aria-pressed","true");var Q=L.element[0];D(Q).not(Q).map(function(){return F(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")})}else{this.buttonElement.bind("mousedown.button",function(){if(N.disabled){return false}F(this).addClass("ui-state-active");K=this;F(document).one("mouseup",function(){K=null})}).bind("mouseup.button",function(){if(N.disabled){return false}F(this).removeClass("ui-state-active")}).bind("keydown.button",function(Q){if(N.disabled){return false}if(Q.keyCode==F.ui.keyCode.SPACE||Q.keyCode==F.ui.keyCode.ENTER){F(this).addClass("ui-state-active")}}).bind("keyup.button",function(){F(this).removeClass("ui-state-active")});if(this.buttonElement.is("a")){this.buttonElement.keyup(function(Q){if(Q.keyCode===F.ui.keyCode.SPACE){F(this).click()}})}}}this._setOption("disabled",N.disabled);this._resetButton()},_determineButtonType:function(){if(this.element.is(":checkbox")){this.type="checkbox"}else{if(this.element.is(":radio")){this.type="radio"}else{if(this.element.is("input")){this.type="input"}else{this.type="button"}}}if(this.type==="checkbox"||this.type==="radio"){var L=this.element.parents().filter(":last"),N="label[for='"+this.element.attr("id")+"']";this.buttonElement=L.find(N);if(!this.buttonElement.length){L=L.length?L.siblings():this.element.siblings();this.buttonElement=L.filter(N);if(!this.buttonElement.length){this.buttonElement=L.find(N)}}this.element.addClass("ui-helper-hidden-accessible");var M=this.element.is(":checked");if(M){this.buttonElement.addClass("ui-state-active")}this.buttonElement.attr("aria-pressed",M)}else{this.buttonElement=this.element}},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass(I+" "+C+" "+G).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());if(!this.hasTitle){this.buttonElement.removeAttr("title")}F.Widget.prototype.destroy.call(this)},_setOption:function(L,M){F.Widget.prototype._setOption.apply(this,arguments);if(L==="disabled"){if(M){this.element.propAttr("disabled",true)}else{this.element.propAttr("disabled",false)}return }this._resetButton()},refresh:function(){var L=this.element.is(":disabled");if(L!==this.options.disabled){this._setOption("disabled",L)}if(this.type==="radio"){D(this.element[0]).each(function(){if(F(this).is(":checked")){F(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")}else{F(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}})}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)}return }var P=this.buttonElement.removeClass(G),N=F("<span></span>",this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(P.empty()).text(),M=this.options.icons,L=M.primary&&M.secondary,O=[];if(M.primary||M.secondary){if(this.options.text){O.push("ui-button-text-icon"+(L?"s":(M.primary?"-primary":"-secondary")))}if(M.primary){P.prepend("<span class='ui-button-icon-primary ui-icon "+M.primary+"'></span>")}if(M.secondary){P.append("<span class='ui-button-icon-secondary ui-icon "+M.secondary+"'></span>")}if(!this.options.text){O.push(L?"ui-button-icons-only":"ui-button-icon-only");if(!this.hasTitle){P.attr("title",N)}}}else{O.push("ui-button-text-only")}P.addClass(O.join(" "))}});F.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(L,M){if(L==="disabled"){this.buttons.button("option",L,M)}F.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var L=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return F(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(L?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(L?"ui-corner-left":"ui-corner-right").end().end()},destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return F(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");F.Widget.prototype.destroy.call(this)}})}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.datepicker.js' */
/*
 * jQuery UI Datepicker 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function($,undefined){$.extend($.ui,{datepicker:{version:"1.8.24"}});var PROP_NAME="datepicker";var dpuuid=new Date().getTime();var instActive;function Datepicker(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};$.extend(this._defaults,this.regional[""]);this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){if(this.debug){console.log.apply("",arguments)}},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase();var inline=(nodeName=="div"||nodeName=="span");if(!target.id){this.uuid+=1;target.id="dp"+this.uuid}var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{});if(nodeName=="input"){this._connectDatepicker(target,inst)}else{if(inline){this._inlineDatepicker(target,inst)}}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))}},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return }this._attachments(input,inst);input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});this._autoSize(inst);$.data(target,PROP_NAME,inst);if(inst.settings.disabled){this._disableDatepicker(target)}},_attachments:function(input,inst){var appendText=this._get(inst,"appendText");var isRTL=this._get(inst,"isRTL");if(inst.append){inst.append.remove()}if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+"</span>");input[isRTL?"before":"after"](inst.append)}input.unbind("focus",this._showDatepicker);if(inst.trigger){inst.trigger.remove()}var showOn=this._get(inst,"showOn");if(showOn=="focus"||showOn=="both"){input.focus(this._showDatepicker)}if(showOn=="button"||showOn=="both"){var buttonText=this._get(inst,"buttonText");var buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==""?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==input[0]){$.datepicker._hideDatepicker()}else{if($.datepicker._datepickerShowing&&$.datepicker._lastInput!=input[0]){$.datepicker._hideDatepicker();$.datepicker._showDatepicker(input[0])}else{$.datepicker._showDatepicker(input[0])}}return false})}},_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var date=new Date(2009,12-1,20);var dateFormat=this._get(inst,"dateFormat");if(dateFormat.match(/[DM]/)){var findMax=function(names){var max=0;var maxI=0;for(var i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i}}return maxI};date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))));date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?"dayNames":"dayNamesShort")))+20-date.getDay())}inst.input.attr("size",this._formatDate(inst,date).length)}},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return }divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});$.data(target,PROP_NAME,inst);this._setDate(inst,this._getDefaultDate(inst),true);this._updateDatepicker(inst);this._updateAlternate(inst);if(inst.settings.disabled){this._disableDatepicker(target)}inst.dpDiv.css("display","block")},_dialogDatepicker:function(input,date,onSelect,settings,pos){var inst=this._dialogInst;if(!inst){this.uuid+=1;var id="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+id+'" style="position: absolute; top: -100px; width: 0px;"/>');this._dialogInput.keydown(this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst)}extendRemove(inst.settings,settings||{});date=(date&&date.constructor==Date?this._formatDate(inst,date):date);this._dialogInput.val(date);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){var browserWidth=document.documentElement.clientWidth;var browserHeight=document.documentElement.clientHeight;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv)}$.data(this._dialogInput[0],PROP_NAME,inst);return this},_destroyDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return }var nodeName=target.nodeName.toLowerCase();$.removeData(target,PROP_NAME);if(nodeName=="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else{if(nodeName=="div"||nodeName=="span"){$target.removeClass(this.markerClassName).empty()}}},_enableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return }var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)})},_disableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return }var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)});this._disabledInputs[this._disabledInputs.length]=target},_isDisabledDatepicker:function(target){if(!target){return false}for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]==target){return true}}return false},_getInst:function(target){try{return $.data(target,PROP_NAME)}catch(err){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(target,name,value){var inst=this._getInst(target);if(arguments.length==2&&typeof name=="string"){return(name=="defaults"?$.extend({},$.datepicker._defaults):(inst?(name=="all"?$.extend({},inst.settings):this._get(inst,name)):null))}var settings=name||{};if(typeof name=="string"){settings={};settings[name]=value}if(inst){if(this._curInst==inst){this._hideDatepicker()}var date=this._getDateDatepicker(target,true);var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");extendRemove(inst.settings,settings);if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){inst.settings.minDate=this._formatDate(inst,minDate)}if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){inst.settings.maxDate=this._formatDate(inst,maxDate)}this._attachments($(target),inst);this._autoSize(inst);this._setDate(inst,date);this._updateAlternate(inst);this._updateDatepicker(inst)}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst)}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst)}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst,noDefault)}return(inst?this._getDate(inst):null)},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);var handled=true;var isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=false;break;case 13:var sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv);if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])}var onSelect=$.datepicker._get(inst,"onSelect");if(onSelect){var dateStr=$.datepicker._formatDate(inst);onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{$.datepicker._hideDatepicker()}return false;break;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");break;case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target)}handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target)}handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")}break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D")}handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")}break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D")}handled=event.ctrlKey||event.metaKey;break;default:handled=false}}else{if(event.keyCode==36&&event.ctrlKey){$.datepicker._showDatepicker(this)}else{handled=false}}if(handled){event.preventDefault();event.stopPropagation()}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){var chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);return event.ctrlKey||event.metaKey||(chr<" "||!chars||chars.indexOf(chr)>-1)}},_doKeyUp:function(event){var inst=$.datepicker._getInst(event.target);if(inst.input.val()!=inst.lastVal){try{var date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));if(date){$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst)}}catch(err){$.datepicker.log(err)}}return true},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!="input"){input=$("input",input.parentNode)[0]}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input){return }var inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!=inst){$.datepicker._curInst.dpDiv.stop(true,true);if(inst&&$.datepicker._datepickerShowing){$.datepicker._hideDatepicker($.datepicker._curInst.input[0])}}var beforeShow=$.datepicker._get(inst,"beforeShow");var beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};if(beforeShowSettings===false){return }extendRemove(inst.settings,beforeShowSettings);inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){input.value=""}if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight}var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")=="fixed";return !isFixed});if(isFixed&&$.browser.opera){$.datepicker._pos[0]-=document.documentElement.scrollLeft;$.datepicker._pos[1]-=document.documentElement.scrollTop}var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.dpDiv.empty();inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){var showAnim=$.datepicker._get(inst,"showAnim");var duration=$.datepicker._get(inst,"duration");var postProcess=function(){var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");if(!!cover.length){var borders=$.datepicker._getBorders(inst.dpDiv);cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})}};inst.dpDiv.zIndex($(input).zIndex()+1);$.datepicker._datepickerShowing=true;if($.effects&&$.effects[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[showAnim||"show"]((showAnim?duration:null),postProcess)}if(!showAnim||!duration){postProcess()}if(inst.input.is(":visible")&&!inst.input.is(":disabled")){inst.input.focus()}$.datepicker._curInst=inst}},_updateDatepicker:function(inst){var self=this;self.maxRows=4;var borders=$.datepicker._getBorders(inst.dpDiv);instActive=inst;inst.dpDiv.empty().append(this._generateHTML(inst));this._attachHandlers(inst);var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");if(!!cover.length){cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})}inst.dpDiv.find("."+this._dayOverClass+" a").mouseover();var numMonths=this._getNumberOfMonths(inst);var cols=numMonths[1];var width=17;inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em")}inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst==$.datepicker._curInst&&$.datepicker._datepickerShowing&&inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&inst.input[0]!=document.activeElement){inst.input.focus()}if(inst.yearshtml){var origyearshtml=inst.yearshtml;setTimeout(function(){if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)}origyearshtml=inst.yearshtml=null},0)}},_getBorders:function(elem){var convert=function(value){return{thin:1,medium:2,thick:3}[value]||value};return[parseFloat(convert(elem.css("border-left-width"))),parseFloat(convert(elem.css("border-top-width")))]},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();var dpHeight=inst.dpDiv.outerHeight();var inputWidth=inst.input?inst.input.outerWidth():0;var inputHeight=inst.input?inst.input.outerHeight():0;var viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft());var viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);return offset},_findPos:function(obj){var inst=this._getInst(obj);var isRTL=this._get(inst,"isRTL");while(obj&&(obj.type=="hidden"||obj.nodeType!=1||$.expr.filters.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"]}var position=$(obj).offset();return[position.left,position.top]},_hideDatepicker:function(input){var inst=this._curInst;if(!inst||(input&&inst!=$.data(input,PROP_NAME))){return }if(this._datepickerShowing){var showAnim=this._get(inst,"showAnim");var duration=this._get(inst,"duration");var postProcess=function(){$.datepicker._tidyDialog(inst)};if($.effects&&$.effects[showAnim]){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[(showAnim=="slideDown"?"slideUp":(showAnim=="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess)}if(!showAnim){postProcess()}this._datepickerShowing=false;var onClose=this._get(inst,"onClose");if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])}this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(event){if(!$.datepicker._curInst){return }var $target=$(event.target),inst=$.datepicker._getInst($target[0]);if((($target[0].id!=$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length==0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)))||($target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=inst)){$.datepicker._hideDatepicker()}},_adjustDate:function(id,offset,period){var target=$(id);var inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return }this._adjustInstDate(inst,offset+(period=="M"?this._get(inst,"showCurrentAtPos"):0),period);this._updateDatepicker(inst)},_gotoToday:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear}else{var date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear()}this._notifyChange(inst);this._adjustDate(target)},_selectMonthYear:function(id,select,period){var target=$(id);var inst=this._getInst(target[0]);inst["selected"+(period=="M"?"Month":"Year")]=inst["draw"+(period=="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target)},_selectDay:function(id,month,year,td){var target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return }var inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))},_clearDate:function(id){var target=$(id);var inst=this._getInst(target[0]);this._selectDate(target,"")},_selectDate:function(id,dateStr){var target=$(id);var inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input){inst.input.val(dateStr)}this._updateAlternate(inst);var onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{if(inst.input){inst.input.trigger("change")}}if(inst.inline){this._updateDatepicker(inst)}else{this._hideDatepicker();this._lastInput=inst.input[0];if(typeof (inst.input[0])!="object"){inst.input.focus()}this._lastInput=null}},_updateAlternate:function(inst){var altField=this._get(inst,"altField");if(altField){var altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");var date=this._getDate(inst);var dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr)})}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),""]},iso8601Week:function(date){var checkDate=new Date(date.getTime());checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));var time=checkDate.getTime();checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments"}value=(typeof value=="object"?value.toString():value+"");if(value==""){return null}var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var year=-1;var month=-1;var day=-1;var doy=-1;var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var getNumber=function(match){var isDoubled=lookAhead(match);var size=(match=="@"?14:(match=="!"?20:(match=="y"&&isDoubled?4:(match=="o"?3:2))));var digits=new RegExp("^\\d{1,"+size+"}");var num=value.substring(iValue).match(digits);if(!num){throw"Missing number at position "+iValue}iValue+=num[0].length;return parseInt(num[0],10)};var getName=function(match,shortNames,longNames){var names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]]}).sort(function(a,b){return -(a[1].length-b[1].length)});var index=-1;$.each(names,function(i,pair){var name=pair[1];if(value.substr(iValue,name.length).toLowerCase()==name.toLowerCase()){index=pair[0];iValue+=name.length;return false}});if(index!=-1){return index+1}else{throw"Unknown name at position "+iValue}};var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat)){throw"Unexpected literal at position "+iValue}iValue++};var iValue=0;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{checkLiteral()}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":var date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"!":var date=new Date((getNumber("!")-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'")){checkLiteral()}else{literal=true}break;default:checkLiteral()}}}if(iValue<value.length){throw"Extra/unparsed characters found in date: "+value.substring(iValue)}if(year==-1){year=new Date().getFullYear()}else{if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)}}if(doy>-1){month=1;day=doy;do{var dim=this._getDaysInMonth(year,month-1);if(day<=dim){break}month++;day-=dim}while(true)}var date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day){throw"Invalid date"}return date},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date){return""}var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num}}return num};var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])};var output="";var literal=false;if(date){for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{output+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=(lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);break;case"@":output+=date.getTime();break;case"!":output+=date.getTime()*10000+this._ticksTo1970;break;case"'":if(lookAhead("'")){output+="'"}else{literal=true}break;default:output+=format.charAt(iFormat)}}}}return output},_possibleChars:function(format){var chars="";var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{chars+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;case"'":if(lookAhead("'")){chars+="'"}else{literal=true}break;default:chars+=format.charAt(iFormat)}}}return chars},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]},_setDateFromField:function(inst,noDefault){if(inst.input.val()==inst.lastVal){return }var dateFormat=this._get(inst,"dateFormat");var dates=inst.lastVal=inst.input?inst.input.val():null;var date,defaultDate;date=defaultDate=this._getDefaultDate(inst);var settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate}catch(event){this.log(event);dates=(noDefault?"":dates)}inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst)},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()))},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date};var offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst))}catch(e){}var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date();var year=date.getFullYear();var month=date.getMonth();var day=date.getDate();var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;var matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break}matches=pattern.exec(offset)}return new Date(year,month,day)};var newDate=(date==null||date===""?defaultDate:(typeof date=="string"?offsetString(date):(typeof date=="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));newDate=(newDate&&newDate.toString()=="Invalid Date"?defaultDate:newDate);if(newDate){newDate.setHours(0);newDate.setMinutes(0);newDate.setSeconds(0);newDate.setMilliseconds(0)}return this._daylightSavingAdjust(newDate)},_daylightSavingAdjust:function(date){if(!date){return null}date.setHours(date.getHours()>12?date.getHours()+2:0);return date},_setDate:function(inst,date,noChange){var clear=!date;var origMonth=inst.selectedMonth;var origYear=inst.selectedYear;var newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));inst.selectedDay=inst.currentDay=newDate.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();if((origMonth!=inst.selectedMonth||origYear!=inst.selectedYear)&&!noChange){this._notifyChange(inst)}this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst))}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate},_attachHandlers:function(inst){var stepMonths=this._get(inst,"stepMonths");var id="#"+inst.id.replace(/\\\\/g,"\\");inst.dpDiv.find("[data-handler]").map(function(){var handler={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,-stepMonths,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,+stepMonths,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(id)},selectDay:function(){window["DP_jQuery_"+dpuuid].datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return false},selectMonth:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"M");return false},selectYear:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"Y");return false}};$(this).bind(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")])})},_generateHTML:function(inst){var today=new Date();today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));var isRTL=this._get(inst,"isRTL");var showButtonPanel=this._get(inst,"showButtonPanel");var hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext");var navigationAsDateFormat=this._get(inst,"navigationAsDateFormat");var numMonths=this._getNumberOfMonths(inst);var showCurrentAtPos=this._get(inst,"showCurrentAtPos");var stepMonths=this._get(inst,"stepMonths");var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");var drawMonth=inst.drawMonth-showCurrentAtPos;var drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--}if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--}}}inst.drawMonth=drawMonth;inst.drawYear=drawYear;var prevText=this._get(inst,"prevText");prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>"));var nextText=this._get(inst,"nextText");nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>"));var currentText=this._get(inst,"currentText");var gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(inst,"closeText")+"</button>":"");var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";var firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=(isNaN(firstDay)?0:firstDay);var showWeek=this._get(inst,"showWeek");var dayNames=this._get(inst,"dayNames");var dayNamesShort=this._get(inst,"dayNamesShort");var dayNamesMin=this._get(inst,"dayNamesMin");var monthNames=this._get(inst,"monthNames");var monthNamesShort=this._get(inst,"monthNamesShort");var beforeShowDay=this._get(inst,"beforeShowDay");var showOtherMonths=this._get(inst,"showOtherMonths");var selectOtherMonths=this._get(inst,"selectOtherMonths");var calculateWeek=this._get(inst,"calculateWeek")||this.iso8601Week;var defaultDate=this._getDefaultDate(inst);var html="";for(var row=0;row<numMonths[0];row++){var group="";this.maxRows=4;for(var col=0;col<numMonths[1];col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));var cornerClass=" ui-corner-all";var calender="";if(isMultiMonth){calender+='<div class="ui-datepicker-group';if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+=" ui-datepicker-group-last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+=" ui-datepicker-group-middle";cornerClass="";break}}calender+='">'}calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var thead=(showWeek?'<th class="ui-datepicker-week-col">'+this._get(inst,"weekHeader")+"</th>":"");for(var dow=0;dow<7;dow++){var day=(dow+firstDay)%7;thead+="<th"+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+dayNames[day]+'">'+dayNamesMin[day]+"</span></th>"}calender+=thead+"</tr></thead><tbody>";var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)}var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;var curRows=Math.ceil((leadDays+daysInMonth)/7);var numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);this.maxRows=numRows;var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(var dRow=0;dRow<numRows;dRow++){calender+="<tr>";var tbody=(!showWeek?"":'<td class="ui-datepicker-week-col">'+this._get(inst,"calculateWeek")(printDate)+"</td>");for(var dow=0;dow<7;dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);var otherMonth=(printDate.getMonth()!=drawMonth);var unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+='<td class="'+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()==currentDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()==today.getTime()?" ui-datepicker-today":""))+'"'+((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':"")+(unselectable?"":' data-handler="selectDay" data-event="click" data-month="'+printDate.getMonth()+'" data-year="'+printDate.getFullYear()+'"')+">"+(otherMonth&&!showOtherMonths?"&#xa0;":(unselectable?'<span class="ui-state-default">'+printDate.getDate()+"</span>":'<a class="ui-state-default'+(printDate.getTime()==today.getTime()?" ui-state-highlight":"")+(printDate.getTime()==currentDate.getTime()?" ui-state-active":"")+(otherMonth?" ui-priority-secondary":"")+'" href="#">'+printDate.getDate()+"</a>"))+"</td>";printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate)}calender+=tbody+"</tr>"}drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++}calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':""):"");group+=calender}html+=group}html+=buttonPanel+($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");inst._keyEvent=false;return html},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var changeMonth=this._get(inst,"changeMonth");var changeYear=this._get(inst,"changeYear");var showMonthAfterYear=this._get(inst,"showMonthAfterYear");var html='<div class="ui-datepicker-title">';var monthHtml="";if(secondary||!changeMonth){monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+"</span>"}else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);monthHtml+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':"")+">"+monthNamesShort[month]+"</option>"}}monthHtml+="</select>"}if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")}if(!inst.yearshtml){inst.yearshtml="";if(secondary||!changeYear){html+='<span class="ui-datepicker-year">'+drawYear+"</span>"}else{var years=this._get(inst,"yearRange").split(":");var thisYear=new Date().getFullYear();var determineYear=function(value){var year=(value.match(/c[+-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));return(isNaN(year)?thisYear:year)};var year=determineYear(years[0]);var endYear=Math.max(year,determineYear(years[1]||""));year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);inst.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;year<=endYear;year++){inst.yearshtml+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':"")+">"+year+"</option>"}inst.yearshtml+="</select>";html+=inst.yearshtml;inst.yearshtml=null}}html+=this._get(inst,"yearSuffix");if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml}html+="</div>";return html},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=="Y"?offset:0);var month=inst.drawMonth+(period=="M"?offset:0);var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period=="D"?offset:0);var date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period=="M"||period=="Y"){this._notifyChange(inst)}},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");var newDate=(minDate&&date<minDate?minDate:date);newDate=(maxDate&&newDate>maxDate?maxDate:newDate);return newDate},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return(numMonths==null?[1,1]:(typeof numMonths=="number"?[1,numMonths]:numMonths))},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null)},_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate()},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))}return this._isInRange(inst,date)},_isInRange:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime()))},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear}var date=(day?(typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))}});function bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return dpDiv.bind("mouseout",function(event){var elem=$(event.target).closest(selector);if(!elem.length){return }elem.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(event){var elem=$(event.target).closest(selector);if($.datepicker._isDisabledDatepicker(instActive.inline?dpDiv.parent()[0]:instActive.input[0])||!elem.length){return }elem.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");elem.addClass("ui-state-hover");if(elem.hasClass("ui-datepicker-prev")){elem.addClass("ui-datepicker-prev-hover")}if(elem.hasClass("ui-datepicker-next")){elem.addClass("ui-datepicker-next-hover")}})}function extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null||props[name]==undefined){target[name]=props[name]}}return target}function isArray(a){return(a&&(($.browser.safari&&typeof a=="object"&&a.length)||(a.constructor&&a.constructor.toString().match(/\Array\(\)/))))}$.fn.datepicker=function(options){if(!this.length){return this}if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);$.datepicker.initialized=true}var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=="string"&&(options=="isDisabled"||options=="getDate"||options=="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}return this.each(function(){typeof options=="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)})};$.datepicker=new Datepicker();$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.8.24";window["DP_jQuery_"+dpuuid]=$})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.dialog.js' */
/*
 * jQuery UI Dialog 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */
(function(D,E){var B="ui-dialog ui-widget ui-widget-content ui-corner-all ",A={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},C={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};D.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",collision:"fit",using:function(G){var F=D(this).css(G).offset().top;if(F<0){D(this).css("top",G.top-F)}}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string"){this.originalTitle=""}this.options.title=this.options.title||this.originalTitle;var N=this,O=N.options,L=O.title||"&#160;",G=D.ui.dialog.getTitleId(N.element),M=(N.uiDialog=D("<div></div>")).appendTo(document.body).hide().addClass(B+O.dialogClass).css({zIndex:O.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(P){if(O.closeOnEscape&&!P.isDefaultPrevented()&&P.keyCode&&P.keyCode===D.ui.keyCode.ESCAPE){N.close(P);P.preventDefault()}}).attr({role:"dialog","aria-labelledby":G}).mousedown(function(P){N.moveToTop(false,P)}),I=N.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(M),H=(N.uiDialogTitlebar=D("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(M),K=D('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){K.addClass("ui-state-hover")},function(){K.removeClass("ui-state-hover")}).focus(function(){K.addClass("ui-state-focus")}).blur(function(){K.removeClass("ui-state-focus")}).click(function(P){N.close(P);return false}).appendTo(H),J=(N.uiDialogTitlebarCloseText=D("<span></span>")).addClass("ui-icon ui-icon-closethick").text(O.closeText).appendTo(K),F=D("<span></span>").addClass("ui-dialog-title").attr("id",G).html(L).prependTo(H);if(D.isFunction(O.beforeclose)&&!D.isFunction(O.beforeClose)){O.beforeClose=O.beforeclose}H.find("*").add(H).disableSelection();if(O.draggable&&D.fn.draggable){N._makeDraggable()}if(O.resizable&&D.fn.resizable){N._makeResizable()}N._createButtons(O.buttons);N._isOpen=false;if(D.fn.bgiframe){M.bgiframe()}},_init:function(){if(this.options.autoOpen){this.open()}},destroy:function(){var F=this;if(F.overlay){F.overlay.destroy()}F.uiDialog.hide();F.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");F.uiDialog.remove();if(F.originalTitle){F.element.attr("title",F.originalTitle)}return F},widget:function(){return this.uiDialog},close:function(I){var F=this,H,G;if(false===F._trigger("beforeClose",I)){return }if(F.overlay){F.overlay.destroy()}F.uiDialog.unbind("keypress.ui-dialog");F._isOpen=false;if(F.options.hide){F.uiDialog.hide(F.options.hide,function(){F._trigger("close",I)})}else{F.uiDialog.hide();F._trigger("close",I)}D.ui.dialog.overlay.resize();if(F.options.modal){H=0;D(".ui-dialog").each(function(){if(this!==F.uiDialog[0]){G=D(this).css("z-index");if(!isNaN(G)){H=Math.max(H,G)}}});D.ui.dialog.maxZ=H}return F},isOpen:function(){return this._isOpen},moveToTop:function(J,I){var F=this,H=F.options,G;if((H.modal&&!J)||(!H.stack&&!H.modal)){return F._trigger("focus",I)}if(H.zIndex>D.ui.dialog.maxZ){D.ui.dialog.maxZ=H.zIndex}if(F.overlay){D.ui.dialog.maxZ+=1;F.overlay.$el.css("z-index",D.ui.dialog.overlay.maxZ=D.ui.dialog.maxZ)}G={scrollTop:F.element.scrollTop(),scrollLeft:F.element.scrollLeft()};D.ui.dialog.maxZ+=1;F.uiDialog.css("z-index",D.ui.dialog.maxZ);F.element.attr(G);F._trigger("focus",I);return F},open:function(){if(this._isOpen){return }var G=this,H=G.options,F=G.uiDialog;G.overlay=H.modal?new D.ui.dialog.overlay(G):null;G._size();G._position(H.position);F.show(H.show);G.moveToTop(true);if(H.modal){F.bind("keydown.ui-dialog",function(K){if(K.keyCode!==D.ui.keyCode.TAB){return }var J=D(":tabbable",this),L=J.filter(":first"),I=J.filter(":last");if(K.target===I[0]&&!K.shiftKey){L.focus(1);return false}else{if(K.target===L[0]&&K.shiftKey){I.focus(1);return false}}})}D(G.element.find(":tabbable").get().concat(F.find(".ui-dialog-buttonpane :tabbable").get().concat(F.get()))).eq(0).focus();G._isOpen=true;G._trigger("open");return G},_createButtons:function(I){var H=this,F=false,G=D("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),J=D("<div></div>").addClass("ui-dialog-buttonset").appendTo(G);H.uiDialog.find(".ui-dialog-buttonpane").remove();if(typeof I==="object"&&I!==null){D.each(I,function(){return !(F=true)})}if(F){D.each(I,function(K,M){M=D.isFunction(M)?{click:M,text:K}:M;var L=D('<button type="button"></button>').click(function(){M.click.apply(H.element[0],arguments)}).appendTo(J);D.each(M,function(N,O){if(N==="click"){return }if(N in L){L[N](O)}else{L.attr(N,O)}});if(D.fn.button){L.button()}});G.appendTo(H.uiDialog)}},_makeDraggable:function(){var F=this,I=F.options,J=D(document),H;function G(K){return{position:K.position,offset:K.offset}}F.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(K,L){H=I.height==="auto"?"auto":D(this).height();D(this).height(D(this).height()).addClass("ui-dialog-dragging");F._trigger("dragStart",K,G(L))},drag:function(K,L){F._trigger("drag",K,G(L))},stop:function(K,L){I.position=[L.position.left-J.scrollLeft(),L.position.top-J.scrollTop()];D(this).removeClass("ui-dialog-dragging").height(H);F._trigger("dragStop",K,G(L));D.ui.dialog.overlay.resize()}})},_makeResizable:function(K){K=(K===E?this.options.resizable:K);var G=this,J=G.options,F=G.uiDialog.css("position"),I=(typeof K==="string"?K:"n,e,s,w,se,sw,ne,nw");function H(L){return{originalPosition:L.originalPosition,originalSize:L.originalSize,position:L.position,size:L.size}}G.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:G.element,maxWidth:J.maxWidth,maxHeight:J.maxHeight,minWidth:J.minWidth,minHeight:G._minHeight(),handles:I,start:function(L,M){D(this).addClass("ui-dialog-resizing");G._trigger("resizeStart",L,H(M))},resize:function(L,M){G._trigger("resize",L,H(M))},stop:function(L,M){D(this).removeClass("ui-dialog-resizing");J.height=D(this).height();J.width=D(this).width();G._trigger("resizeStop",L,H(M));D.ui.dialog.overlay.resize()}}).css("position",F).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var F=this.options;if(F.height==="auto"){return F.minHeight}else{return Math.min(F.minHeight,F.height)}},_position:function(G){var H=[],I=[0,0],F;if(G){if(typeof G==="string"||(typeof G==="object"&&"0" in G)){H=G.split?G.split(" "):[G[0],G[1]];if(H.length===1){H[1]=H[0]}D.each(["left","top"],function(K,J){if(+H[K]===H[K]){I[K]=H[K];H[K]=J}});G={my:H.join(" "),at:H.join(" "),offset:I.join(" ")}}G=D.extend({},D.ui.dialog.prototype.options.position,G)}else{G=D.ui.dialog.prototype.options.position}F=this.uiDialog.is(":visible");if(!F){this.uiDialog.show()}this.uiDialog.css({top:0,left:0}).position(D.extend({of:window},G));if(!F){this.uiDialog.hide()}},_setOptions:function(I){var G=this,F={},H=false;D.each(I,function(J,K){G._setOption(J,K);if(J in A){H=true}if(J in C){F[J]=K}});if(H){this._size()}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option",F)}},_setOption:function(I,J){var G=this,F=G.uiDialog;switch(I){case"beforeclose":I="beforeClose";break;case"buttons":G._createButtons(J);break;case"closeText":G.uiDialogTitlebarCloseText.text(""+J);break;case"dialogClass":F.removeClass(G.options.dialogClass).addClass(B+J);break;case"disabled":if(J){F.addClass("ui-dialog-disabled")}else{F.removeClass("ui-dialog-disabled")}break;case"draggable":var H=F.is(":data(draggable)");if(H&&!J){F.draggable("destroy")}if(!H&&J){G._makeDraggable()}break;case"position":G._position(J);break;case"resizable":var K=F.is(":data(resizable)");if(K&&!J){F.resizable("destroy")}if(K&&typeof J==="string"){F.resizable("option","handles",J)}if(!K&&J!==false){G._makeResizable(J)}break;case"title":D(".ui-dialog-title",G.uiDialogTitlebar).html(""+(J||"&#160;"));break}D.Widget.prototype._setOption.apply(G,arguments)},_size:function(){var J=this.options,G,I,F=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(J.minWidth>J.width){J.width=J.minWidth}G=this.uiDialog.css({height:"auto",width:J.width}).height();I=Math.max(0,J.minHeight-G);if(J.height==="auto"){if(D.support.minHeight){this.element.css({minHeight:I,height:"auto"})}else{this.uiDialog.show();var H=this.element.css("height","auto").height();if(!F){this.uiDialog.hide()}this.element.height(Math.max(H,I))}}else{this.element.height(Math.max(J.height-G,0))}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())}}});D.extend(D.ui.dialog,{version:"1.8.24",uuid:0,maxZ:0,getTitleId:function(F){var G=F.attr("id");if(!G){this.uuid+=1;G=this.uuid}return"ui-dialog-title-"+G},overlay:function(F){this.$el=D.ui.dialog.overlay.create(F)}});D.extend(D.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:D.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(F){return F+".dialog-overlay"}).join(" "),create:function(G){if(this.instances.length===0){setTimeout(function(){if(D.ui.dialog.overlay.instances.length){D(document).bind(D.ui.dialog.overlay.events,function(H){if(D(H.target).zIndex()<D.ui.dialog.overlay.maxZ){return false}})}},1);D(document).bind("keydown.dialog-overlay",function(H){if(G.options.closeOnEscape&&!H.isDefaultPrevented()&&H.keyCode&&H.keyCode===D.ui.keyCode.ESCAPE){G.close(H);H.preventDefault()}});D(window).bind("resize.dialog-overlay",D.ui.dialog.overlay.resize)}var F=(this.oldInstances.pop()||D("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});if(D.fn.bgiframe){F.bgiframe()}this.instances.push(F);return F},destroy:function(F){var G=D.inArray(F,this.instances);if(G!=-1){this.oldInstances.push(this.instances.splice(G,1)[0])}if(this.instances.length===0){D([document,window]).unbind(".dialog-overlay")}F.remove();var H=0;D.each(this.instances,function(){H=Math.max(H,this.css("z-index"))});this.maxZ=H},height:function(){var G,F;if(D.browser.msie&&D.browser.version<7){G=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);F=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);if(G<F){return D(window).height()+"px"}else{return G+"px"}}else{return D(document).height()+"px"}},width:function(){var F,G;if(D.browser.msie){F=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);G=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(F<G){return D(window).width()+"px"}else{return F+"px"}}else{return D(document).width()+"px"}},resize:function(){var F=D([]);D.each(D.ui.dialog.overlay.instances,function(){F=F.add(this)});F.css({width:0,height:0}).css({width:D.ui.dialog.overlay.width(),height:D.ui.dialog.overlay.height()})}});D.extend(D.ui.dialog.overlay.prototype,{destroy:function(){D.ui.dialog.overlay.destroy(this.$el)}})}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.progressbar.js' */
/*
 * jQuery UI Progressbar 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function(A,B){A.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=A("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove();A.Widget.prototype.destroy.apply(this,arguments)},value:function(C){if(C===B){return this._value()}this._setOption("value",C);return this},_setOption:function(C,D){if(C==="value"){this.options.value=D;this._refreshValue();if(this._value()===this.options.max){this._trigger("complete")}}A.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var C=this.options.value;if(typeof C!=="number"){C=0}return Math.min(this.options.max,Math.max(this.min,C))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var D=this.value();var C=this._percentage();if(this.oldValue!==D){this.oldValue=D;this._trigger("change")}this.valueDiv.toggle(D>this.min).toggleClass("ui-corner-right",D===this.options.max).width(C.toFixed(0)+"%");this.element.attr("aria-valuenow",D)}});A.extend(A.ui.progressbar,{version:"1.8.24"})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.slider.js' */
/*
 * jQuery UI Slider 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(B,C){var A=5;B.widget("ui.slider",B.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var E=this,J=this.options,I=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),H="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",D=(J.values&&J.values.length)||1,G=[];this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"+(J.disabled?" ui-slider-disabled ui-disabled":""));this.range=B([]);if(J.range){if(J.range===true){if(!J.values){J.values=[this._valueMin(),this._valueMin()]}if(J.values.length&&J.values.length!==2){J.values=[J.values[0],J.values[0]]}}this.range=B("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+((J.range==="min"||J.range==="max")?" ui-slider-range-"+J.range:""))}for(var F=I.length;F<D;F+=1){G.push(H)}this.handles=I.add(B(G.join("")).appendTo(E.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(K){K.preventDefault()}).hover(function(){if(!J.disabled){B(this).addClass("ui-state-hover")}},function(){B(this).removeClass("ui-state-hover")}).focus(function(){if(!J.disabled){B(".ui-slider .ui-state-focus").removeClass("ui-state-focus");B(this).addClass("ui-state-focus")}else{B(this).blur()}}).blur(function(){B(this).removeClass("ui-state-focus")});this.handles.each(function(K){B(this).data("index.ui-slider-handle",K)});this.handles.keydown(function(O){var L=B(this).data("index.ui-slider-handle"),P,M,K,N;if(E.options.disabled){return }switch(O.keyCode){case B.ui.keyCode.HOME:case B.ui.keyCode.END:case B.ui.keyCode.PAGE_UP:case B.ui.keyCode.PAGE_DOWN:case B.ui.keyCode.UP:case B.ui.keyCode.RIGHT:case B.ui.keyCode.DOWN:case B.ui.keyCode.LEFT:O.preventDefault();if(!E._keySliding){E._keySliding=true;B(this).addClass("ui-state-active");P=E._start(O,L);if(P===false){return }}break}N=E.options.step;if(E.options.values&&E.options.values.length){M=K=E.values(L)}else{M=K=E.value()}switch(O.keyCode){case B.ui.keyCode.HOME:K=E._valueMin();break;case B.ui.keyCode.END:K=E._valueMax();break;case B.ui.keyCode.PAGE_UP:K=E._trimAlignValue(M+((E._valueMax()-E._valueMin())/A));break;case B.ui.keyCode.PAGE_DOWN:K=E._trimAlignValue(M-((E._valueMax()-E._valueMin())/A));break;case B.ui.keyCode.UP:case B.ui.keyCode.RIGHT:if(M===E._valueMax()){return }K=E._trimAlignValue(M+N);break;case B.ui.keyCode.DOWN:case B.ui.keyCode.LEFT:if(M===E._valueMin()){return }K=E._trimAlignValue(M-N);break}E._slide(O,L,K)}).keyup(function(L){var K=B(this).data("index.ui-slider-handle");if(E._keySliding){E._keySliding=false;E._stop(L,K);E._change(L,K);B(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();return this},_mouseCapture:function(F){var G=this.options,J,L,E,H,N,K,M,I,D;if(G.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();J={x:F.pageX,y:F.pageY};L=this._normValueFromMouse(J);E=this._valueMax()-this._valueMin()+1;N=this;this.handles.each(function(O){var P=Math.abs(L-N.values(O));if(E>P){E=P;H=B(this);K=O}});if(G.range===true&&this.values(1)===G.min){K+=1;H=B(this.handles[K])}M=this._start(F,K);if(M===false){return false}this._mouseSliding=true;N._handleIndex=K;H.addClass("ui-state-active").focus();I=H.offset();D=!B(F.target).parents().andSelf().is(".ui-slider-handle");this._clickOffset=D?{left:0,top:0}:{left:F.pageX-I.left-(H.width()/2),top:F.pageY-I.top-(H.height()/2)-(parseInt(H.css("borderTopWidth"),10)||0)-(parseInt(H.css("borderBottomWidth"),10)||0)+(parseInt(H.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(F,K,L)}this._animateOff=true;return true},_mouseStart:function(D){return true},_mouseDrag:function(F){var D={x:F.pageX,y:F.pageY},E=this._normValueFromMouse(D);this._slide(F,this._handleIndex,E);return false},_mouseStop:function(D){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(D,this._handleIndex);this._change(D,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"},_normValueFromMouse:function(E){var D,H,G,F,I;if(this.orientation==="horizontal"){D=this.elementSize.width;H=E.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{D=this.elementSize.height;H=E.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}G=(H/D);if(G>1){G=1}if(G<0){G=0}if(this.orientation==="vertical"){G=1-G}F=this._valueMax()-this._valueMin();I=this._valueMin()+G*F;return this._trimAlignValue(I)},_start:function(F,E){var D={handle:this.handles[E],value:this.value()};if(this.options.values&&this.options.values.length){D.value=this.values(E);D.values=this.values()}return this._trigger("start",F,D)},_slide:function(H,G,F){var D,E,I;if(this.options.values&&this.options.values.length){D=this.values(G?0:1);if((this.options.values.length===2&&this.options.range===true)&&((G===0&&F>D)||(G===1&&F<D))){F=D}if(F!==this.values(G)){E=this.values();E[G]=F;I=this._trigger("slide",H,{handle:this.handles[G],value:F,values:E});D=this.values(G?0:1);if(I!==false){this.values(G,F,true)}}}else{if(F!==this.value()){I=this._trigger("slide",H,{handle:this.handles[G],value:F});if(I!==false){this.value(F)}}}},_stop:function(F,E){var D={handle:this.handles[E],value:this.value()};if(this.options.values&&this.options.values.length){D.value=this.values(E);D.values=this.values()}this._trigger("stop",F,D)},_change:function(F,E){if(!this._keySliding&&!this._mouseSliding){var D={handle:this.handles[E],value:this.value()};if(this.options.values&&this.options.values.length){D.value=this.values(E);D.values=this.values()}this._trigger("change",F,D)}},value:function(D){if(arguments.length){this.options.value=this._trimAlignValue(D);this._refreshValue();this._change(null,0);return }return this._value()},values:function(E,H){var G,D,F;if(arguments.length>1){this.options.values[E]=this._trimAlignValue(H);this._refreshValue();this._change(null,E);return }if(arguments.length){if(B.isArray(arguments[0])){G=this.options.values;D=arguments[0];for(F=0;F<G.length;F+=1){G[F]=this._trimAlignValue(D[F]);this._change(null,F)}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(E)}else{return this.value()}}}else{return this._values()}},_setOption:function(E,F){var D,G=0;if(B.isArray(this.options.values)){G=this.options.values.length}B.Widget.prototype._setOption.apply(this,arguments);switch(E){case"disabled":if(F){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.propAttr("disabled",true);this.element.addClass("ui-disabled")}else{this.handles.propAttr("disabled",false);this.element.removeClass("ui-disabled")}break;case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(D=0;D<G;D+=1){this._change(null,D)}this._animateOff=false;break}},_value:function(){var D=this.options.value;D=this._trimAlignValue(D);return D},_values:function(D){var G,F,E;if(arguments.length){G=this.options.values[D];G=this._trimAlignValue(G);return G}else{F=this.options.values.slice();for(E=0;E<F.length;E+=1){F[E]=this._trimAlignValue(F[E])}return F}},_trimAlignValue:function(G){if(G<=this._valueMin()){return this._valueMin()}if(G>=this._valueMax()){return this._valueMax()}var D=(this.options.step>0)?this.options.step:1,F=(G-this._valueMin())%D,E=G-F;if(Math.abs(F)*2>=D){E+=(F>0)?D:(-D)}return parseFloat(E.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var G=this.options.range,F=this.options,M=this,E=(!this._animateOff)?F.animate:false,H,D={},I,K,J,L;if(this.options.values&&this.options.values.length){this.handles.each(function(O,N){H=(M.values(O)-M._valueMin())/(M._valueMax()-M._valueMin())*100;D[M.orientation==="horizontal"?"left":"bottom"]=H+"%";B(this).stop(1,1)[E?"animate":"css"](D,F.animate);if(M.options.range===true){if(M.orientation==="horizontal"){if(O===0){M.range.stop(1,1)[E?"animate":"css"]({left:H+"%"},F.animate)}if(O===1){M.range[E?"animate":"css"]({width:(H-I)+"%"},{queue:false,duration:F.animate})}}else{if(O===0){M.range.stop(1,1)[E?"animate":"css"]({bottom:(H)+"%"},F.animate)}if(O===1){M.range[E?"animate":"css"]({height:(H-I)+"%"},{queue:false,duration:F.animate})}}}I=H})}else{K=this.value();J=this._valueMin();L=this._valueMax();H=(L!==J)?(K-J)/(L-J)*100:0;D[M.orientation==="horizontal"?"left":"bottom"]=H+"%";this.handle.stop(1,1)[E?"animate":"css"](D,F.animate);if(G==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[E?"animate":"css"]({width:H+"%"},F.animate)}if(G==="max"&&this.orientation==="horizontal"){this.range[E?"animate":"css"]({width:(100-H)+"%"},{queue:false,duration:F.animate})}if(G==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[E?"animate":"css"]({height:H+"%"},F.animate)}if(G==="max"&&this.orientation==="vertical"){this.range[E?"animate":"css"]({height:(100-H)+"%"},{queue:false,duration:F.animate})}}}});B.extend(B.ui.slider,{version:"1.8.24"})}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.tabs.js' */
/*
 * jQuery UI Tabs 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(D,F){var C=0,B=0;function E(){return ++C}function A(){return ++B}D.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(G,H){if(G=="selected"){if(this.options.collapsible&&H==this.options.selected){return }this.select(H)}else{this.options[G]=H;this._tabify()}},_tabId:function(G){return G.title&&G.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+E()},_sanitizeSelector:function(G){return G.replace(/:/g,"\\:")},_cookie:function(){var G=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+A());return D.cookie.apply(null,[G].concat(D.makeArray(arguments)))},_ui:function(H,G){return{tab:H,panel:G,index:this.anchors.index(H)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var G=D(this);G.html(G.data("label.tabs")).removeData("label.tabs")})},_tabify:function(R){var S=this,I=this.options,H=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=D(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return D("a",this)[0]});this.panels=D([]);this.anchors.each(function(V,T){var U=D(T).attr("href");var W=U.split("#")[0],X;if(W&&(W===location.toString().split("#")[0]||(X=D("base")[0])&&W===X.href)){U=T.hash;T.href=U}if(H.test(U)){S.panels=S.panels.add(S.element.find(S._sanitizeSelector(U)))}else{if(U&&U!=="#"){D.data(T,"href.tabs",U);D.data(T,"load.tabs",U.replace(/#.*$/,""));var Z=S._tabId(T);T.href="#"+Z;var Y=S.element.find("#"+Z);if(!Y.length){Y=D(I.panelTemplate).attr("id",Z).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(S.panels[V-1]||S.list);Y.data("destroy.tabs",true)}S.panels=S.panels.add(Y)}else{I.disabled.push(V)}}});if(R){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(I.selected===F){if(location.hash){this.anchors.each(function(U,T){if(T.hash==location.hash){I.selected=U;return false}})}if(typeof I.selected!=="number"&&I.cookie){I.selected=parseInt(S._cookie(),10)}if(typeof I.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length){I.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}I.selected=I.selected||(this.lis.length?0:-1)}else{if(I.selected===null){I.selected=-1}}I.selected=((I.selected>=0&&this.anchors[I.selected])||I.selected<0)?I.selected:0;I.disabled=D.unique(I.disabled.concat(D.map(this.lis.filter(".ui-state-disabled"),function(U,T){return S.lis.index(U)}))).sort();if(D.inArray(I.selected,I.disabled)!=-1){I.disabled.splice(D.inArray(I.selected,I.disabled),1)}this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");if(I.selected>=0&&this.anchors.length){S.element.find(S._sanitizeSelector(S.anchors[I.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(I.selected).addClass("ui-tabs-selected ui-state-active");S.element.queue("tabs",function(){S._trigger("show",null,S._ui(S.anchors[I.selected],S.element.find(S._sanitizeSelector(S.anchors[I.selected].hash))[0]))});this.load(I.selected)}D(window).bind("unload",function(){S.lis.add(S.anchors).unbind(".tabs");S.lis=S.anchors=S.panels=null})}else{I.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}this.element[I.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");if(I.cookie){this._cookie(I.selected,I.cookie)}for(var L=0,Q;(Q=this.lis[L]);L++){D(Q)[D.inArray(L,I.disabled)!=-1&&!D(Q).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled")}if(I.cache===false){this.anchors.removeData("cache.tabs")}this.lis.add(this.anchors).unbind(".tabs");if(I.event!=="mouseover"){var K=function(U,T){if(T.is(":not(.ui-state-disabled)")){T.addClass("ui-state-"+U)}};var N=function(U,T){T.removeClass("ui-state-"+U)};this.lis.bind("mouseover.tabs",function(){K("hover",D(this))});this.lis.bind("mouseout.tabs",function(){N("hover",D(this))});this.anchors.bind("focus.tabs",function(){K("focus",D(this).closest("li"))});this.anchors.bind("blur.tabs",function(){N("focus",D(this).closest("li"))})}var G,M;if(I.fx){if(D.isArray(I.fx)){G=I.fx[0];M=I.fx[1]}else{G=M=I.fx}}function J(T,U){T.css("display","");if(!D.support.opacity&&U.opacity){T[0].style.removeAttribute("filter")}}var O=M?function(T,U){D(T).closest("li").addClass("ui-tabs-selected ui-state-active");U.hide().removeClass("ui-tabs-hide").animate(M,M.duration||"normal",function(){J(U,M);S._trigger("show",null,S._ui(T,U[0]))})}:function(T,U){D(T).closest("li").addClass("ui-tabs-selected ui-state-active");U.removeClass("ui-tabs-hide");S._trigger("show",null,S._ui(T,U[0]))};var P=G?function(U,T){T.animate(G,G.duration||"normal",function(){S.lis.removeClass("ui-tabs-selected ui-state-active");T.addClass("ui-tabs-hide");J(T,G);S.element.dequeue("tabs")})}:function(U,T,V){S.lis.removeClass("ui-tabs-selected ui-state-active");T.addClass("ui-tabs-hide");S.element.dequeue("tabs")};this.anchors.bind(I.event+".tabs",function(){var U=this,W=D(U).closest("li"),T=S.panels.filter(":not(.ui-tabs-hide)"),V=S.element.find(S._sanitizeSelector(U.hash));if((W.hasClass("ui-tabs-selected")&&!I.collapsible)||W.hasClass("ui-state-disabled")||W.hasClass("ui-state-processing")||S.panels.filter(":animated").length||S._trigger("select",null,S._ui(this,V[0]))===false){this.blur();return false}I.selected=S.anchors.index(this);S.abort();if(I.collapsible){if(W.hasClass("ui-tabs-selected")){I.selected=-1;if(I.cookie){S._cookie(I.selected,I.cookie)}S.element.queue("tabs",function(){P(U,T)}).dequeue("tabs");this.blur();return false}else{if(!T.length){if(I.cookie){S._cookie(I.selected,I.cookie)}S.element.queue("tabs",function(){O(U,V)});S.load(S.anchors.index(this));this.blur();return false}}}if(I.cookie){S._cookie(I.selected,I.cookie)}if(V.length){if(T.length){S.element.queue("tabs",function(){P(U,T)})}S.element.queue("tabs",function(){O(U,V)});S.load(S.anchors.index(this))}else{throw"jQuery UI Tabs: Mismatching fragment identifier."}if(D.browser.msie){this.blur()}});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(G){if(typeof G=="string"){G=this.anchors.index(this.anchors.filter("[href$='"+G+"']"))}return G},destroy:function(){var G=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var H=D.data(this,"href.tabs");if(H){this.href=H}var I=D(this).unbind(".tabs");D.each(["href","load","cache"],function(J,K){I.removeData(K+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){if(D.data(this,"destroy.tabs")){D(this).remove()}else{D(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}});if(G.cookie){this._cookie(null,G.cookie)}return this},add:function(J,I,H){if(H===F){H=this.anchors.length}var G=this,L=this.options,N=D(L.tabTemplate.replace(/#\{href\}/g,J).replace(/#\{label\}/g,I)),M=!J.indexOf("#")?J.replace("#",""):this._tabId(D("a",N)[0]);N.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var K=G.element.find("#"+M);if(!K.length){K=D(L.panelTemplate).attr("id",M).data("destroy.tabs",true)}K.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(H>=this.lis.length){N.appendTo(this.list);K.appendTo(this.list[0].parentNode)}else{N.insertBefore(this.lis[H]);K.insertBefore(this.panels[H])}L.disabled=D.map(L.disabled,function(P,O){return P>=H?++P:P});this._tabify();if(this.anchors.length==1){L.selected=0;N.addClass("ui-tabs-selected ui-state-active");K.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){G._trigger("show",null,G._ui(G.anchors[0],G.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[H],this.panels[H]));return this},remove:function(G){G=this._getIndex(G);var I=this.options,J=this.lis.eq(G).remove(),H=this.panels.eq(G).remove();if(J.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(G+(G+1<this.anchors.length?1:-1))}I.disabled=D.map(D.grep(I.disabled,function(L,K){return L!=G}),function(L,K){return L>=G?--L:L});this._tabify();this._trigger("remove",null,this._ui(J.find("a")[0],H[0]));return this},enable:function(G){G=this._getIndex(G);var H=this.options;if(D.inArray(G,H.disabled)==-1){return }this.lis.eq(G).removeClass("ui-state-disabled");H.disabled=D.grep(H.disabled,function(J,I){return J!=G});this._trigger("enable",null,this._ui(this.anchors[G],this.panels[G]));return this},disable:function(H){H=this._getIndex(H);var G=this,I=this.options;if(H!=I.selected){this.lis.eq(H).addClass("ui-state-disabled");I.disabled.push(H);I.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[H],this.panels[H]))}return this},select:function(G){G=this._getIndex(G);if(G==-1){if(this.options.collapsible&&this.options.selected!=-1){G=this.options.selected}else{return this}}this.anchors.eq(G).trigger(this.options.event+".tabs");return this},load:function(J){J=this._getIndex(J);var H=this,L=this.options,G=this.anchors.eq(J)[0],I=D.data(G,"load.tabs");this.abort();if(!I||this.element.queue("tabs").length!==0&&D.data(G,"cache.tabs")){this.element.dequeue("tabs");return }this.lis.eq(J).addClass("ui-state-processing");if(L.spinner){var K=D("span",G);K.data("label.tabs",K.html()).html(L.spinner)}this.xhr=D.ajax(D.extend({},L.ajaxOptions,{url:I,success:function(N,M){H.element.find(H._sanitizeSelector(G.hash)).html(N);H._cleanup();if(L.cache){D.data(G,"cache.tabs",true)}H._trigger("load",null,H._ui(H.anchors[J],H.panels[J]));try{L.ajaxOptions.success(N,M)}catch(O){}},error:function(O,M,N){H._cleanup();H._trigger("load",null,H._ui(H.anchors[J],H.panels[J]));try{L.ajaxOptions.error(O,M,J,G)}catch(N){}}}));H.element.dequeue("tabs");return this},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},url:function(H,G){this.anchors.eq(H).removeData("cache.tabs").data("load.tabs",G);return this},length:function(){return this.anchors.length}});D.extend(D.ui.tabs,{version:"1.8.24"});D.extend(D.ui.tabs.prototype,{rotation:null,rotate:function(I,K){var G=this,L=this.options;var H=G._rotate||(G._rotate=function(M){clearTimeout(G.rotation);G.rotation=setTimeout(function(){var N=L.selected;G.select(++N<G.anchors.length?N:0)},I);if(M){M.stopPropagation()}});var J=G._unrotate||(G._unrotate=!K?function(M){if(M.clientX){G.rotate(null)}}:function(M){H()});if(I){this.element.bind("tabsshow",H);this.anchors.bind(L.event+".tabs",J);H()}else{clearTimeout(G.rotation);this.element.unbind("tabsshow",H);this.anchors.unbind(L.event+".tabs",J);delete this._rotate;delete this._unrotate}return this}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.core.js' */
/*
 * jQuery UI Effects 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||(function(H,E){H.effects={};H.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(O,N){H.fx.step[N]=function(P){if(!P.colorInit){P.start=M(P.elem,N);P.end=K(P.end);P.colorInit=true}P.elem.style[N]="rgb("+Math.max(Math.min(parseInt((P.pos*(P.end[0]-P.start[0]))+P.start[0],10),255),0)+","+Math.max(Math.min(parseInt((P.pos*(P.end[1]-P.start[1]))+P.start[1],10),255),0)+","+Math.max(Math.min(parseInt((P.pos*(P.end[2]-P.start[2]))+P.start[2],10),255),0)+")"}});function K(O){var N;if(O&&O.constructor==Array&&O.length==3){return O}if(N=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(O)){return[parseInt(N[1],10),parseInt(N[2],10),parseInt(N[3],10)]}if(N=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(O)){return[parseFloat(N[1])*2.55,parseFloat(N[2])*2.55,parseFloat(N[3])*2.55]}if(N=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(O)){return[parseInt(N[1],16),parseInt(N[2],16),parseInt(N[3],16)]}if(N=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(O)){return[parseInt(N[1]+N[1],16),parseInt(N[2]+N[2],16),parseInt(N[3]+N[3],16)]}if(N=/rgba\(0, 0, 0, 0\)/.exec(O)){return A.transparent}return A[H.trim(O).toLowerCase()]}function M(P,N){var O;do{O=(H.curCSS||H.css)(P,N);if(O!=""&&O!="transparent"||H.nodeName(P,"body")){break}N="backgroundColor"}while(P=P.parentNode);return K(O)}var A={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};var F=["add","remove","toggle"],C={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};function G(){var Q=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,R={},O,P;if(Q&&Q.length&&Q[0]&&Q[Q[0]]){var N=Q.length;while(N--){O=Q[N];if(typeof Q[O]=="string"){P=O.replace(/\-(\w)/g,function(S,T){return T.toUpperCase()});R[P]=Q[O]}}}else{for(O in Q){if(typeof Q[O]==="string"){R[O]=Q[O]}}}return R}function B(O){var N,P;for(N in O){P=O[N];if(P==null||H.isFunction(P)||N in C||(/scrollbar/).test(N)||(!(/color/i).test(N)&&isNaN(parseFloat(P)))){delete O[N]}}return O}function I(N,P){var Q={_:0},O;for(O in P){if(N[O]!=P[O]){Q[O]=P[O]}}return Q}H.effects.animateClass=function(N,O,Q,P){if(H.isFunction(Q)){P=Q;Q=null}return this.queue(function(){var U=H(this),R=U.attr("style")||" ",V=B(G.call(this)),T,S=U.attr("class")||"";H.each(F,function(W,X){if(N[X]){U[X+"Class"](N[X])}});T=B(G.call(this));U.attr("class",S);U.animate(I(V,T),{queue:false,duration:O,easing:Q,complete:function(){H.each(F,function(W,X){if(N[X]){U[X+"Class"](N[X])}});if(typeof U.attr("style")=="object"){U.attr("style").cssText="";U.attr("style").cssText=R}else{U.attr("style",R)}if(P){P.apply(this,arguments)}H.dequeue(this)}})})};H.fn.extend({_addClass:H.fn.addClass,addClass:function(O,N,Q,P){return N?H.effects.animateClass.apply(this,[{add:O},N,Q,P]):this._addClass(O)},_removeClass:H.fn.removeClass,removeClass:function(O,N,Q,P){return N?H.effects.animateClass.apply(this,[{remove:O},N,Q,P]):this._removeClass(O)},_toggleClass:H.fn.toggleClass,toggleClass:function(P,O,N,R,Q){if(typeof O=="boolean"||O===E){if(!N){return this._toggleClass(P,O)}else{return H.effects.animateClass.apply(this,[(O?{add:P}:{remove:P}),N,R,Q])}}else{return H.effects.animateClass.apply(this,[{toggle:P},O,N,R])}},switchClass:function(N,P,O,R,Q){return H.effects.animateClass.apply(this,[{add:P,remove:N},O,R,Q])}});H.extend(H.effects,{version:"1.8.24",save:function(O,P){for(var N=0;N<P.length;N++){if(P[N]!==null){O.data("ec.storage."+P[N],O[0].style[P[N]])}}},restore:function(O,P){for(var N=0;N<P.length;N++){if(P[N]!==null){O.css(P[N],O.data("ec.storage."+P[N]))}}},setMode:function(N,O){if(O=="toggle"){O=N.is(":hidden")?"show":"hide"}return O},getBaseline:function(O,P){var Q,N;switch(O[0]){case"top":Q=0;break;case"middle":Q=0.5;break;case"bottom":Q=1;break;default:Q=O[0]/P.height}switch(O[1]){case"left":N=0;break;case"center":N=0.5;break;case"right":N=1;break;default:N=O[1]/P.width}return{x:N,y:Q}},createWrapper:function(N){if(N.parent().is(".ui-effects-wrapper")){return N.parent()}var O={width:N.outerWidth(true),height:N.outerHeight(true),"float":N.css("float")},R=H("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),Q=document.activeElement;try{Q.id}catch(P){Q=document.body}N.wrap(R);if(N[0]===Q||H.contains(N[0],Q)){H(Q).focus()}R=N.parent();if(N.css("position")=="static"){R.css({position:"relative"});N.css({position:"relative"})}else{H.extend(O,{position:N.css("position"),zIndex:N.css("z-index")});H.each(["top","left","bottom","right"],function(S,T){O[T]=N.css(T);if(isNaN(parseInt(O[T],10))){O[T]="auto"}});N.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return R.css(O).show()},removeWrapper:function(N){var O,P=document.activeElement;if(N.parent().is(".ui-effects-wrapper")){O=N.parent().replaceWith(N);if(N[0]===P||H.contains(N[0],P)){H(P).focus()}return O}return N},setTransition:function(O,Q,N,P){P=P||{};H.each(Q,function(S,R){var T=O.cssUnit(R);if(T[0]>0){P[R]=T[0]*N+T[1]}});return P}});function D(O,N,P,Q){if(typeof O=="object"){Q=N;P=null;N=O;O=N.effect}if(H.isFunction(N)){Q=N;P=null;N={}}if(typeof N=="number"||H.fx.speeds[N]){Q=P;P=N;N={}}if(H.isFunction(P)){Q=P;P=null}N=N||{};P=P||N.duration;P=H.fx.off?0:typeof P=="number"?P:P in H.fx.speeds?H.fx.speeds[P]:H.fx.speeds._default;Q=Q||N.complete;return[O,N,P,Q]}function L(N){if(!N||typeof N==="number"||H.fx.speeds[N]){return true}if(typeof N==="string"&&!H.effects[N]){return true}return false}H.fn.extend({effect:function(Q,P,S,U){var O=D.apply(this,arguments),R={options:O[1],duration:O[2],callback:O[3]},T=R.options.mode,N=H.effects[Q];if(H.fx.off||!N){if(T){return this[T](R.duration,R.callback)}else{return this.each(function(){if(R.callback){R.callback.call(this)}})}}return N.call(this,R)},_show:H.fn.show,show:function(O){if(L(O)){return this._show.apply(this,arguments)}else{var N=D.apply(this,arguments);N[1].mode="show";return this.effect.apply(this,N)}},_hide:H.fn.hide,hide:function(O){if(L(O)){return this._hide.apply(this,arguments)}else{var N=D.apply(this,arguments);N[1].mode="hide";return this.effect.apply(this,N)}},__toggle:H.fn.toggle,toggle:function(O){if(L(O)||typeof O==="boolean"||H.isFunction(O)){return this.__toggle.apply(this,arguments)}else{var N=D.apply(this,arguments);N[1].mode="toggle";return this.effect.apply(this,N)}},cssUnit:function(N){var O=this.css(N),P=[];H.each(["em","px","%","pt"],function(Q,R){if(O.indexOf(R)>0){P=[parseFloat(O),R]}});return P}});var J={};H.each(["Quad","Cubic","Quart","Quint","Expo"],function(O,N){J[N]=function(P){return Math.pow(P,O+2)}});H.extend(J,{Sine:function(N){return 1-Math.cos(N*Math.PI/2)},Circ:function(N){return 1-Math.sqrt(1-N*N)},Elastic:function(N){return N===0||N===1?N:-Math.pow(2,8*(N-1))*Math.sin(((N-1)*80-7.5)*Math.PI/15)},Back:function(N){return N*N*(3*N-2)},Bounce:function(P){var N,O=4;while(P<((N=Math.pow(2,--O))-1)/11){}return 1/Math.pow(4,3-O)-7.5625*Math.pow((N*3-2)/22-P,2)}});H.each(J,function(O,N){H.easing["easeIn"+O]=N;H.easing["easeOut"+O]=function(P){return 1-N(1-P)};H.easing["easeInOut"+O]=function(P){return P<0.5?N(P*2)/2:N(P*-2+2)/-2+1}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.blind.js' */
/*
 * jQuery UI Effects Blind 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.blind=function(C){return this.queue(function(){var E=A(this),D=["position","top","bottom","left","right"];var I=A.effects.setMode(E,C.options.mode||"hide");var H=C.options.direction||"vertical";A.effects.save(E,D);E.show();var K=A.effects.createWrapper(E).css({overflow:"hidden"});var F=(H=="vertical")?"height":"width";var J=(H=="vertical")?K.height():K.width();if(I=="show"){K.css(F,0)}var G={};G[F]=I=="show"?J:0;K.animate(G,C.duration,C.options.easing,function(){if(I=="hide"){E.hide()}A.effects.restore(E,D);A.effects.removeWrapper(E);if(C.callback){C.callback.apply(E[0],arguments)}E.dequeue()})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.bounce.js' */
/*
 * jQuery UI Effects Bounce 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.bounce=function(C){return this.queue(function(){var F=A(this),L=["position","top","bottom","left","right"];var K=A.effects.setMode(F,C.options.mode||"effect");var N=C.options.direction||"up";var D=C.options.distance||20;var E=C.options.times||5;var H=C.duration||250;if(/show|hide/.test(K)){L.push("opacity")}A.effects.save(F,L);F.show();A.effects.createWrapper(F);var G=(N=="up"||N=="down")?"top":"left";var P=(N=="up"||N=="left")?"pos":"neg";var D=C.options.distance||(G=="top"?F.outerHeight(true)/3:F.outerWidth(true)/3);if(K=="show"){F.css("opacity",0).css(G,P=="pos"?-D:D)}if(K=="hide"){D=D/(E*2)}if(K!="hide"){E--}if(K=="show"){var I={opacity:1};I[G]=(P=="pos"?"+=":"-=")+D;F.animate(I,H/2,C.options.easing);D=D/2;E--}for(var J=0;J<E;J++){var O={},M={};O[G]=(P=="pos"?"-=":"+=")+D;M[G]=(P=="pos"?"+=":"-=")+D;F.animate(O,H/2,C.options.easing).animate(M,H/2,C.options.easing);D=(K=="hide")?D*2:D/2}if(K=="hide"){var I={opacity:0};I[G]=(P=="pos"?"-=":"+=")+D;F.animate(I,H/2,C.options.easing,function(){F.hide();A.effects.restore(F,L);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}})}else{var O={},M={};O[G]=(P=="pos"?"-=":"+=")+D;M[G]=(P=="pos"?"+=":"-=")+D;F.animate(O,H/2,C.options.easing).animate(M,H/2,C.options.easing,function(){A.effects.restore(F,L);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}})}F.queue("fx",function(){F.dequeue()});F.dequeue()})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.clip.js' */
/*
 * jQuery UI Effects Clip 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.clip=function(C){return this.queue(function(){var G=A(this),K=["position","top","bottom","left","right","height","width"];var J=A.effects.setMode(G,C.options.mode||"hide");var L=C.options.direction||"vertical";A.effects.save(G,K);G.show();var D=A.effects.createWrapper(G).css({overflow:"hidden"});var F=G[0].tagName=="IMG"?D:G;var H={size:(L=="vertical")?"height":"width",position:(L=="vertical")?"top":"left"};var E=(L=="vertical")?F.height():F.width();if(J=="show"){F.css(H.size,0);F.css(H.position,E/2)}var I={};I[H.size]=J=="show"?E:0;I[H.position]=J=="show"?0:E/2;F.animate(I,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){if(J=="hide"){G.hide()}A.effects.restore(G,K);A.effects.removeWrapper(G);if(C.callback){C.callback.apply(G[0],arguments)}G.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.drop.js' */
/*
 * jQuery UI Effects Drop 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.drop=function(C){return this.queue(function(){var F=A(this),E=["position","top","bottom","left","right","opacity"];var J=A.effects.setMode(F,C.options.mode||"hide");var I=C.options.direction||"left";A.effects.save(F,E);F.show();A.effects.createWrapper(F);var G=(I=="up"||I=="down")?"top":"left";var D=(I=="up"||I=="left")?"pos":"neg";var K=C.options.distance||(G=="top"?F.outerHeight(true)/2:F.outerWidth(true)/2);if(J=="show"){F.css("opacity",0).css(G,D=="pos"?-K:K)}var H={opacity:J=="show"?1:0};H[G]=(J=="show"?(D=="pos"?"+=":"-="):(D=="pos"?"-=":"+="))+K;F.animate(H,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){if(J=="hide"){F.hide()}A.effects.restore(F,E);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}F.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.explode.js' */
/*
 * jQuery UI Effects Explode 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.explode=function(C){return this.queue(function(){var J=C.options.pieces?Math.round(Math.sqrt(C.options.pieces)):3;var F=C.options.pieces?Math.round(Math.sqrt(C.options.pieces)):3;C.options.mode=C.options.mode=="toggle"?(A(this).is(":visible")?"hide":"show"):C.options.mode;var I=A(this).show().css("visibility","hidden");var K=I.offset();K.top-=parseInt(I.css("marginTop"),10)||0;K.left-=parseInt(I.css("marginLeft"),10)||0;var H=I.outerWidth(true);var D=I.outerHeight(true);for(var G=0;G<J;G++){for(var E=0;E<F;E++){I.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-E*(H/F),top:-G*(D/J)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:H/F,height:D/J,left:K.left+E*(H/F)+(C.options.mode=="show"?(E-Math.floor(F/2))*(H/F):0),top:K.top+G*(D/J)+(C.options.mode=="show"?(G-Math.floor(J/2))*(D/J):0),opacity:C.options.mode=="show"?0:1}).animate({left:K.left+E*(H/F)+(C.options.mode=="show"?0:(E-Math.floor(F/2))*(H/F)),top:K.top+G*(D/J)+(C.options.mode=="show"?0:(G-Math.floor(J/2))*(D/J)),opacity:C.options.mode=="show"?1:0},C.duration||500)}}setTimeout(function(){C.options.mode=="show"?I.css({visibility:"visible"}):I.css({visibility:"visible"}).hide();if(C.callback){C.callback.apply(I[0])}I.dequeue();A("div.ui-effects-explode").remove()},C.duration||500)})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.fade.js' */
/*
 * jQuery UI Effects Fade 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fade
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.fade=function(C){return this.queue(function(){var D=A(this),E=A.effects.setMode(D,C.options.mode||"hide");D.animate({opacity:E},{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){(C.callback&&C.callback.apply(this,arguments));D.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.fold.js' */
/*
 * jQuery UI Effects Fold 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.fold=function(C){return this.queue(function(){var F=A(this),L=["position","top","bottom","left","right"];var I=A.effects.setMode(F,C.options.mode||"hide");var P=C.options.size||15;var O=!(!C.options.horizFirst);var H=C.duration?C.duration/2:A.fx.speeds._default/2;A.effects.save(F,L);F.show();var E=A.effects.createWrapper(F).css({overflow:"hidden"});var J=((I=="show")!=O);var G=J?["width","height"]:["height","width"];var D=J?[E.width(),E.height()]:[E.height(),E.width()];var K=/([0-9]+)%/.exec(P);if(K){P=parseInt(K[1],10)/100*D[I=="hide"?0:1]}if(I=="show"){E.css(O?{height:0,width:P}:{height:P,width:0})}var N={},M={};N[G[0]]=I=="show"?D[0]:P;M[G[1]]=I=="show"?D[1]:0;E.animate(N,H,C.options.easing).animate(M,H,C.options.easing,function(){if(I=="hide"){F.hide()}A.effects.restore(F,L);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(F[0],arguments)}F.dequeue()})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.highlight.js' */
/*
 * jQuery UI Effects Highlight 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.highlight=function(C){return this.queue(function(){var E=A(this),D=["backgroundImage","backgroundColor","opacity"],G=A.effects.setMode(E,C.options.mode||"show"),F={backgroundColor:E.css("backgroundColor")};if(G=="hide"){F.opacity=0}A.effects.save(E,D);E.show().css({backgroundImage:"none",backgroundColor:C.options.color||"#ffff99"}).animate(F,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){(G=="hide"&&E.hide());A.effects.restore(E,D);(G=="show"&&!A.support.opacity&&this.style.removeAttribute("filter"));(C.callback&&C.callback.apply(this,arguments));E.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.pulsate.js' */
/*
 * jQuery UI Effects Pulsate 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.pulsate=function(C){return this.queue(function(){var G=A(this),J=A.effects.setMode(G,C.options.mode||"show"),I=((C.options.times||5)*2)-1,H=C.duration?C.duration/2:A.fx.speeds._default/2,D=G.is(":visible"),E=0;if(!D){G.css("opacity",0).show();E=1}if((J=="hide"&&D)||(J=="show"&&!D)){I--}for(var F=0;F<I;F++){G.animate({opacity:E},H,C.options.easing);E=(E+1)%2}G.animate({opacity:E},H,C.options.easing,function(){if(E==0){G.hide()}(C.callback&&C.callback.apply(this,arguments))});G.queue("fx",function(){G.dequeue()}).dequeue()})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.scale.js' */
/*
 * jQuery UI Effects Scale 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.puff=function(C){return this.queue(function(){var G=A(this),H=A.effects.setMode(G,C.options.mode||"hide"),F=parseInt(C.options.percent,10)||150,E=F/100,D={height:G.height(),width:G.width()};A.extend(C.options,{fade:true,mode:H,percent:H=="hide"?F:100,from:H=="hide"?D:{height:D.height*E,width:D.width*E}});G.effect("scale",C.options,C.duration,C.callback);G.dequeue()})};A.effects.scale=function(C){return this.queue(function(){var H=A(this);var E=A.extend(true,{},C.options);var K=A.effects.setMode(H,C.options.mode||"effect");var I=parseInt(C.options.percent,10)||(parseInt(C.options.percent,10)==0?0:(K=="hide"?0:100));var J=C.options.direction||"both";var D=C.options.origin;if(K!="effect"){E.origin=D||["middle","center"];E.restore=true}var G={height:H.height(),width:H.width()};H.from=C.options.from||(K=="show"?{height:0,width:0}:G);var F={y:J!="horizontal"?(I/100):1,x:J!="vertical"?(I/100):1};H.to={height:G.height*F.y,width:G.width*F.x};if(C.options.fade){if(K=="show"){H.from.opacity=0;H.to.opacity=1}if(K=="hide"){H.from.opacity=1;H.to.opacity=0}}E.from=H.from;E.to=H.to;E.mode=K;H.effect("size",E,C.duration,C.callback);H.dequeue()})};A.effects.size=function(C){return this.queue(function(){var D=A(this),O=["position","top","bottom","left","right","width","height","overflow","opacity"];var N=["position","top","bottom","left","right","overflow","opacity"];var K=["width","height","overflow"];var Q=["fontSize"];var L=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"];var G=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"];var H=A.effects.setMode(D,C.options.mode||"effect");var J=C.options.restore||false;var F=C.options.scale||"both";var P=C.options.origin;var E={height:D.height(),width:D.width()};D.from=C.options.from||E;D.to=C.options.to||E;if(P){var I=A.effects.getBaseline(P,E);D.from.top=(E.height-D.from.height)*I.y;D.from.left=(E.width-D.from.width)*I.x;D.to.top=(E.height-D.to.height)*I.y;D.to.left=(E.width-D.to.width)*I.x}var M={from:{y:D.from.height/E.height,x:D.from.width/E.width},to:{y:D.to.height/E.height,x:D.to.width/E.width}};if(F=="box"||F=="both"){if(M.from.y!=M.to.y){O=O.concat(L);D.from=A.effects.setTransition(D,L,M.from.y,D.from);D.to=A.effects.setTransition(D,L,M.to.y,D.to)}if(M.from.x!=M.to.x){O=O.concat(G);D.from=A.effects.setTransition(D,G,M.from.x,D.from);D.to=A.effects.setTransition(D,G,M.to.x,D.to)}}if(F=="content"||F=="both"){if(M.from.y!=M.to.y){O=O.concat(Q);D.from=A.effects.setTransition(D,Q,M.from.y,D.from);D.to=A.effects.setTransition(D,Q,M.to.y,D.to)}}A.effects.save(D,J?O:N);D.show();A.effects.createWrapper(D);D.css("overflow","hidden").css(D.from);if(F=="content"||F=="both"){L=L.concat(["marginTop","marginBottom"]).concat(Q);G=G.concat(["marginLeft","marginRight"]);K=O.concat(L).concat(G);D.find("*[width]").each(function(){var S=A(this);if(J){A.effects.save(S,K)}var R={height:S.height(),width:S.width()};S.from={height:R.height*M.from.y,width:R.width*M.from.x};S.to={height:R.height*M.to.y,width:R.width*M.to.x};if(M.from.y!=M.to.y){S.from=A.effects.setTransition(S,L,M.from.y,S.from);S.to=A.effects.setTransition(S,L,M.to.y,S.to)}if(M.from.x!=M.to.x){S.from=A.effects.setTransition(S,G,M.from.x,S.from);S.to=A.effects.setTransition(S,G,M.to.x,S.to)}S.css(S.from);S.animate(S.to,C.duration,C.options.easing,function(){if(J){A.effects.restore(S,K)}})})}D.animate(D.to,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){if(D.to.opacity===0){D.css("opacity",D.from.opacity)}if(H=="hide"){D.hide()}A.effects.restore(D,J?O:N);A.effects.removeWrapper(D);if(C.callback){C.callback.apply(this,arguments)}D.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.shake.js' */
/*
 * jQuery UI Effects Shake 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.shake=function(C){return this.queue(function(){var F=A(this),L=["position","top","bottom","left","right"];var K=A.effects.setMode(F,C.options.mode||"effect");var N=C.options.direction||"left";var D=C.options.distance||20;var E=C.options.times||3;var H=C.duration||C.options.duration||140;A.effects.save(F,L);F.show();A.effects.createWrapper(F);var G=(N=="up"||N=="down")?"top":"left";var P=(N=="up"||N=="left")?"pos":"neg";var I={},O={},M={};I[G]=(P=="pos"?"-=":"+=")+D;O[G]=(P=="pos"?"+=":"-=")+D*2;M[G]=(P=="pos"?"-=":"+=")+D*2;F.animate(I,H,C.options.easing);for(var J=1;J<E;J++){F.animate(O,H,C.options.easing).animate(M,H,C.options.easing)}F.animate(O,H,C.options.easing).animate(I,H/2,C.options.easing,function(){A.effects.restore(F,L);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}});F.queue("fx",function(){F.dequeue()});F.dequeue()})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.slide.js' */
/*
 * jQuery UI Effects Slide 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.slide=function(C){return this.queue(function(){var F=A(this),E=["position","top","bottom","left","right"];var J=A.effects.setMode(F,C.options.mode||"show");var I=C.options.direction||"left";A.effects.save(F,E);F.show();A.effects.createWrapper(F).css({overflow:"hidden"});var G=(I=="up"||I=="down")?"top":"left";var D=(I=="up"||I=="left")?"pos":"neg";var K=C.options.distance||(G=="top"?F.outerHeight(true):F.outerWidth(true));if(J=="show"){F.css(G,D=="pos"?(isNaN(K)?"-"+K:-K):K)}var H={};H[G]=(J=="show"?(D=="pos"?"+=":"-="):(D=="pos"?"-=":"+="))+K;F.animate(H,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){if(J=="hide"){F.hide()}A.effects.restore(F,E);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}F.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.transfer.js' */
/*
 * jQuery UI Effects Transfer 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.transfer=function(C){return this.queue(function(){var G=A(this),I=A(C.options.to),F=I.offset(),H={top:F.top,left:F.left,height:I.innerHeight(),width:I.innerWidth()},E=G.offset(),D=A('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(C.options.className).css({top:E.top,left:E.left,height:G.innerHeight(),width:G.innerWidth(),position:"absolute"}).animate(H,C.duration,C.options.easing,function(){D.remove();(C.callback&&C.callback.apply(G[0],arguments));G.dequeue()})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery.ui.menu.js' */
(function(A){A.widget("ui.menu",{_create:function(){var B=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(C){if(!A(C.target).closest(".ui-menu-item a").length){return }C.preventDefault();B.select(C)});this.refresh()},refresh:function(){var C=this;var B=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");B.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(D){C.activate(D,A(this).parent())}).mouseleave(function(){C.deactivate()})},activate:function(E,D){this.deactivate();if(this.hasScroll()){var F=D.offset().top-this.element.offset().top,B=this.element.attr("scrollTop"),C=this.element.height();if(F<0){this.element.attr("scrollTop",B+F)}else{if(F>C){this.element.attr("scrollTop",B+F-C+D.height())}}}this.active=D.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",E,{item:D})},deactivate:function(){if(!this.active){return }this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null},next:function(B){this.move("next",".ui-menu-item:first",B)},previous:function(B){this.move("prev",".ui-menu-item:last",B)},first:function(){return this.active&&!this.active.prev().length},last:function(){return this.active&&!this.active.next().length},move:function(E,D,C){if(!this.active){this.activate(C,this.element.children(D));return }var B=this.active[E+"All"](".ui-menu-item").eq(0);if(B.length){this.activate(C,B)}else{this.activate(C,this.element.children(D))}},nextPage:function(D){if(this.hasScroll()){if(!this.active||this.last()){this.activate(D,this.element.children(":first"));return }var E=this.active.offset().top,C=this.element.height(),B=this.element.children("li").filter(function(){var F=A(this).offset().top-E-C+A(this).height();return F<10&&F>-10});if(!B.length){B=this.element.children(":last")}this.activate(D,B)}else{this.activate(D,this.element.children(!this.active||this.last()?":first":":last"))}},previousPage:function(C){if(this.hasScroll()){if(!this.active||this.first()){this.activate(C,this.element.children(":last"));return }var D=this.active.offset().top,B=this.element.height();result=this.element.children("li").filter(function(){var E=A(this).offset().top-D+B-A(this).height();return E<10&&E>-10});if(!result.length){result=this.element.children(":first")}this.activate(C,result)}else{this.activate(C,this.element.children(!this.active||this.first()?":last":":first"))}},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")},select:function(B){this._trigger("selected",B,{item:this.active})}})}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/drag-and-drop-support.js' */
var DragnDropSupport=(function(){var c,a;try{c=new XMLHttpRequest();a=!!(c.sendAsBinary||c.upload)&&!(jQuery.browser.mozilla&&jQuery.browser.version.indexOf("1.9.1")>-1)}catch(b){a=false}c=null;return{hasXhrSupport:a}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/drag-and-drop-utils.js' */
AJS.DragAndDrop={};(function(b){var c,a=/^\w+:\/\/[^\/?#]+/.exec(location.href);AJS.DragAndDropUtils={hasXhrOrGearsSupport:function(){return(AJS.DragAndDropUtils.hasXhrSupport||AJS.DragAndDropUtils.isGearsInstalledNoPrompt())},hasXhrSupport:DragnDropSupport.hasXhrSupport,base:a,init:function(d){d&&d(DragnDropSupport.hasXhrSupport)},bindDragEnter:function(d,f){if(d.addEventListener){f=(this.isFireFox35OrLater()?this.firefox35DragEnterAndOverCallbackWrapper(f):f);f&&d.addEventListener("dragenter",f,false)}else{if(d.attachEvent){var e=this.ieDragEnterAndDragOverCallbackWrapper(f);d.attachEvent("ondragenter",e);b(window).unload(function(){d.detachEvent("ondragenter",e)})}}},bindDragOver:function(d,f){if(d.addEventListener){if(this.isFireFox35OrLater()){f=this.firefox35DragEnterAndOverCallbackWrapper(f)}else{if(b.browser.safari){f=this.safariDragOverCallbackWrapper(f)}}f&&d.addEventListener("dragover",f,false)}else{if(d.attachEvent){var e=this.ieDragEnterAndDragOverCallbackWrapper(f);d.attachEvent("ondragover",e);b(window).unload(function(){d.detachEvent("ondragover",e)})}}},bindDragLeave:function(d,e){if(!e){return}if(b.browser.safari||this.isFireFox35OrLater()){d.addEventListener("dragleave",e,false)}else{if(b.browser.mozilla){d.addEventListener("dragexit",e,false)}else{if(b.browser.msie){d.attachEvent("ondragleave",e);b(window).unload(function(){d.detachEvent("ondragleave",e)})}}}},bindDrop:function(e,g){if(b.browser.mozilla){var d=(this.isFireFox35OrLater()?"drop":"dragdrop");e.addEventListener(d,this.mozillaDropCallbackWrapper(g),false)}else{if(b.browser.msie){if(g){var f=function(h){g(h);AJS.DragAndDropUtils.stopPropagation(h)};e.attachEvent("ondrop",f);b(window).unload(function(){e.detachEvent("ondrop",f)})}}else{if(b.browser.safari){g&&e.addEventListener("drop",function(h){g(h);AJS.DragAndDropUtils.stopPropagation(h)},false)}}}},niceSize:function(d){var g=[" B"," kB"," MB"," GB"," TB"," PB"," EB"," ZB"," YB"];for(var e=0,f=g.length;e<f;e++){if(d<Math.pow(2,10*(e+1))){return(!e?d:(d/Math.pow(2,10*e)).toFixed(2))+g[e]
}}return(d/Math.pow(2,10*(e+1))).toFixed(2)+g[g.length-1]},ieDragEnterAndDragOverCallbackWrapper:function(d){return function(f){f=f||window.event;if(!f){return}d&&d(f);b.browser.msie&&(f.returnValue=false)}},safariDragOverCallbackWrapper:function(d){return function(f){f=f||window.event;if(!f){return}if(f.target.type=="file"){return}d&&d(f);(b.inArray("public.file-url",f.dataTransfer.types)!=-1)&&f.preventDefault()}},mozillaDropCallbackWrapper:function(d){return function(f){if(!f){return}d&&d(f);f.preventDefault();if(AJS.DragAndDropUtils.isFireFox35OrLater()){AJS.DragAndDropUtils.firefox35FileDataInEvent(f)&&f.stopPropagation()}else{f.stopPropagation()}}},firefox35DragEnterAndOverCallbackWrapper:function(d){return function(f){if(!f){return}d&&d(f);AJS.DragAndDropUtils.firefox35FileDataInEvent(f)&&f.preventDefault()}},firefox35FileDataInEvent:function(d){return b.inArray("application/x-moz-file",d.dataTransfer.types)!=-1},stopPropagation:function(d){d=d||window.event;if(!d){return}if(d.stopPropagation){d.stopPropagation()}else{d.cancelBubble=true}},preventDefault:function(d){d=d||window.event;if(!d){return}if(d.preventDefault){d.preventDefault()}else{d.returnValue=false}},isGearsInstalledNoPrompt:function(){try{return !!window.google&&!!google.gears&&!!google.gears.factory.create("beta.desktop")}catch(d){return false}},isGearsInstalledWithPermissions:function(d){var e={returnUrl:location.href};d=b.extend({},e,d);if(AJS.DragAndDropUtils.isGearsInstalledNoPrompt()){return google.gears.factory.getPermission("Confluence",Confluence.getContextPath()+"/images/logo/confluence_64.png","Allow Confluence to use Google Gears to perform drag-and-drop file uploads?")}else{AJS.log("Gears installation prompt is disabled, since it has been discontinued");return false}},isFireFox35OrLater:function(){return !this.isFireFox30()&&b.browser.version.indexOf("1.9.")!=-1},isFireFox30:function(){return b.browser.version.indexOf("1.9.0")!=-1},isIE9:function(){if(AJS.$.browser.msie){var d=parseFloat(AJS.$.browser.version);
if(d>=9&&d<10){return true}}return false},enableDropZoneOn:function(d,e){if(!d){throw new Error("Cannot enable drop zone on invalid container. Received: "+d)}e=e||AJS.DragAndDrop.defaultDropHandler;this.bindDragEnter(d);this.bindDragOver(d);this.bindDragLeave(d);this.bindDrop(d,e)},getFilesFromDropEvent:function(f){if(AJS.DragAndDropUtils.isFolderDropEvent(f)){AJS.DragAndDropUtils.displayMessageDialog("No files were found in the items dragged onto this window. It is possible that you may have dragged a folder - this is not supported. \u003cp>\u003cstrong>Note to Mac OSX users:\u003c\/strong> Some items may appear as files but are actually folders and are therefore not supported. Examples include iWork and Keynote files.\u003c\/p>");return[]}var g=this.getDesktopInstance().getDragData(f,"application/x-gears-files");var d;try{d=g&&g.files}catch(h){AJS.log("Error retrieving file data from drop event")}return d||[]},isFolderDropEvent:function(d){try{return(this.getDesktopInstance().getDragData(d,"application/x-gears-files")||{}).count==0}catch(f){AJS.log("Error retrieving file data from drop event")}},displayMessageDialog:function(e){var d=new AJS.Dialog(600,200,"drag-and-drop-message-dialog");d.addHeader("Drag & Drop").addPanel("Panel 1","<div>"+e+"</div>").addButton("Done",function(f){d.remove()});d.show()},getDesktopInstance:function(){if(!c){c=google.gears.factory.create("beta.desktop")}return c}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/plupload.js' */
(function(){var f=0,k=[],m={},i={},a={"<":"lt",">":"gt","&":"amp",'"':"quot","'":"#39"},l=/[<>&\"\']/g,b,c=window.setTimeout,d={},e;function h(){this.returnValue=false}function j(){this.cancelBubble=true}(function(n){var o=n.split(/,/),p,r,q;for(p=0;p<o.length;p+=2){q=o[p+1].split(/ /);for(r=0;r<q.length;r++){i[q[r]]=o[p]}}})("application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.template,xltx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,audio/mpeg,mpga mpega mp2 mp3,audio/x-wav,wav,audio/mp4,m4a,image/bmp,bmp,image/gif,gif,image/jpeg,jpeg jpg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/html,htm html xhtml,text/rtf,rtf,video/mpeg,mpeg mpg mpe,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/vnd.rn-realvideo,rv,text/csv,csv,text/plain,asc txt text diff log,application/octet-stream,exe");var g={VERSION:"@@version@@",STOPPED:1,STARTED:2,QUEUED:1,UPLOADING:2,FAILED:4,DONE:5,GENERIC_ERROR:-100,HTTP_ERROR:-200,IO_ERROR:-300,SECURITY_ERROR:-400,INIT_ERROR:-500,FILE_SIZE_ERROR:-600,FILE_EXTENSION_ERROR:-601,IMAGE_FORMAT_ERROR:-700,IMAGE_MEMORY_ERROR:-701,IMAGE_DIMENSIONS_ERROR:-702,mimeTypes:i,ua:(function(){var r=navigator,q=r.userAgent,s=r.vendor,o,n,p;o=/WebKit/.test(q);p=o&&s.indexOf("Apple")!==-1;
n=window.opera&&window.opera.buildNumber;return{windows:navigator.platform.indexOf("Win")!==-1,ie:!o&&!n&&(/MSIE/gi).test(q)&&(/Explorer/gi).test(r.appName),webkit:o,gecko:!o&&/Gecko/.test(q),safari:p,opera:!!n}}()),extend:function(n){g.each(arguments,function(o,p){if(p>0){g.each(o,function(r,q){n[q]=r})}});return n},getElement:function(n){return n&&n.nodeType==1?n:document.getElementById(n)},cleanName:function(n){var o,p;p=[/[\300-\306]/g,"A",/[\340-\346]/g,"a",/\307/g,"C",/\347/g,"c",/[\310-\313]/g,"E",/[\350-\353]/g,"e",/[\314-\317]/g,"I",/[\354-\357]/g,"i",/\321/g,"N",/\361/g,"n",/[\322-\330]/g,"O",/[\362-\370]/g,"o",/[\331-\334]/g,"U",/[\371-\374]/g,"u"];for(o=0;o<p.length;o+=2){n=n.replace(p[o],p[o+1])}n=n.replace(/\s+/g,"_");n=n.replace(/[^a-z0-9_\-\.]+/gi,"");return n},addRuntime:function(n,o){o.name=n;k[n]=o;k.push(o);return o},guid:function(){var n=new Date().getTime().toString(32),o;for(o=0;o<5;o++){n+=Math.floor(Math.random()*65535).toString(32)}return(g.guidPrefix||"p")+n+(f++).toString(32)},buildUrl:function(o,n){var p="";g.each(n,function(r,q){p+=(p?"&":"")+encodeURIComponent(q)+"="+encodeURIComponent(r)});if(p){o+=(o.indexOf("?")>0?"&":"?")+p}return o},each:function(q,r){var p,o,n;if(q){p=q.length;if(p===b){for(o in q){if(q.hasOwnProperty(o)){if(r(q[o],o)===false){return}}}}else{for(n=0;n<p;n++){if(r(q[n],n)===false){return}}}}},formatSize:function(n){if(n===b||/\D/.test(n)){return g.translate("N/A")}if(n>1073741824){return Math.round(n/1073741824,1)+" GB"}if(n>1048576){return Math.round(n/1048576,1)+" MB"}if(n>1024){return Math.round(n/1024,1)+" KB"}return n+" b"},getPos:function(o,s){var t=0,r=0,v,u=document,p,q;o=o;s=s||u.body;function n(B){var z,A,w=0,C=0;if(B){A=B.getBoundingClientRect();z=u.compatMode==="CSS1Compat"?u.documentElement:u.body;w=A.left+z.scrollLeft;C=A.top+z.scrollTop}return{x:w,y:C}}if(o&&o.getBoundingClientRect&&(navigator.userAgent.indexOf("MSIE")>0&&u.documentMode!==8)){p=n(o);q=n(s);return{x:p.x-q.x,y:p.y-q.y}}v=o;while(v&&v!=s&&v.nodeType){t+=v.offsetLeft||0;
r+=v.offsetTop||0;v=v.offsetParent}v=o.parentNode;while(v&&v!=s&&v.nodeType){t-=v.scrollLeft||0;r-=v.scrollTop||0;v=v.parentNode}return{x:t,y:r}},getSize:function(n){return{w:n.offsetWidth||n.clientWidth,h:n.offsetHeight||n.clientHeight}},parseSize:function(n){var o;if(typeof(n)=="string"){n=/^([0-9]+)([mgk]?)$/.exec(n.toLowerCase().replace(/[^0-9mkg]/g,""));o=n[2];n=+n[1];if(o=="g"){n*=1073741824}if(o=="m"){n*=1048576}if(o=="k"){n*=1024}}return n},xmlEncode:function(n){return n?(""+n).replace(l,function(o){return a[o]?"&"+a[o]+";":o}):n},toArray:function(p){var o,n=[];for(o=0;o<p.length;o++){n[o]=p[o]}return n},addI18n:function(n){return g.extend(m,n)},translate:function(n){return m[n]||n},isEmptyObj:function(n){if(n===b){return true}for(var o in n){return false}return true},hasClass:function(p,o){var n;if(p.className==""){return false}n=new RegExp("(^|\\s+)"+o+"(\\s+|$)");return n.test(p.className)},addClass:function(o,n){if(!g.hasClass(o,n)){o.className=o.className==""?n:o.className.replace(/\s+$/,"")+" "+n}},removeClass:function(p,o){var n=new RegExp("(^|\\s+)"+o+"(\\s+|$)");p.className=p.className.replace(n,function(r,q,s){return q===" "&&s===" "?" ":""})},getStyle:function(o,n){if(o.currentStyle){return o.currentStyle[n]}else{if(window.getComputedStyle){return window.getComputedStyle(o,null)[n]}}},addEvent:function(s,n,t){var r,q,p,o;o=arguments[3];n=n.toLowerCase();if(e===b){e="Plupload_"+g.guid()}if(s.addEventListener){r=t;s.addEventListener(n,r,false)}else{if(s.attachEvent){r=function(){var u=window.event;if(!u.target){u.target=u.srcElement}u.preventDefault=h;u.stopPropagation=j;t(u)};s.attachEvent("on"+n,r)}}if(s[e]===b){s[e]=g.guid()}if(!d.hasOwnProperty(s[e])){d[s[e]]={}}q=d[s[e]];if(!q.hasOwnProperty(n)){q[n]=[]}q[n].push({func:r,orig:t,key:o})},removeEvent:function(s,n){var q,t,p;if(typeof(arguments[2])=="function"){t=arguments[2]}else{p=arguments[2]}n=n.toLowerCase();if(s[e]&&d[s[e]]&&d[s[e]][n]){q=d[s[e]][n]}else{return}for(var o=q.length-1;o>=0;o--){if(q[o].key===p||q[o].orig===t){if(s.detachEvent){s.detachEvent("on"+n,q[o].func)
}else{if(s.removeEventListener){s.removeEventListener(n,q[o].func,false)}}q[o].orig=null;q[o].func=null;q.splice(o,1);if(t!==b){break}}}if(!q.length){delete d[s[e]][n]}if(g.isEmptyObj(d[s[e]])){delete d[s[e]];try{delete s[e]}catch(r){s[e]=b}}},removeAllEvents:function(o){var n=arguments[1];if(o[e]===b||!o[e]){return}g.each(d[o[e]],function(q,p){g.removeEvent(o,p,n)})}};g.Uploader=function(r){var p={},u,t=[],q;u=new g.QueueProgress();r=g.extend({chunk_size:0,multipart:true,multi_selection:true,file_data_name:"file",filters:[]},r);function s(){var w,x=0,v;if(this.state==g.STARTED){for(v=0;v<t.length;v++){if(!w&&t[v].status==g.QUEUED){w=t[v];w.status=g.UPLOADING;if(this.trigger("BeforeUpload",w)){this.trigger("UploadFile",w)}}else{x++}}if(x==t.length){this.stop();this.trigger("UploadComplete",t)}}}function o(){var w,v;u.reset();for(w=0;w<t.length;w++){v=t[w];if(v.size!==b){u.size+=v.size;u.loaded+=v.loaded}else{u.size=b}if(v.status==g.DONE){u.uploaded++}else{if(v.status==g.FAILED){u.failed++}else{u.queued++}}}if(u.size===b){u.percent=t.length>0?Math.ceil(u.uploaded/t.length*100):0}else{u.bytesPerSec=Math.ceil(u.loaded/((+new Date()-q||1)/1000));u.percent=u.size>0?Math.ceil(u.loaded/u.size*100):0}}function n(){return !!u.queued}g.extend(this,{state:g.STOPPED,runtime:"",features:{},files:t,settings:r,total:u,id:g.guid(),init:function(){var A=this,B,x,w,z=0,y;if(typeof(r.preinit)=="function"){r.preinit(A)}else{g.each(r.preinit,function(D,C){A.bind(C,D)})}r.page_url=r.page_url||document.location.pathname.replace(/\/[^\/]+$/g,"/");if(!/^(\w+:\/\/|\/)/.test(r.url)){r.url=r.page_url+r.url}r.chunk_size=g.parseSize(r.chunk_size);r.max_file_size=g.parseSize(r.max_file_size);A.bind("FilesAdded",function(C,F){var E,D,H=0,I,G=r.filters;if(G&&G.length){I=[];g.each(G,function(J){g.each(J.extensions.split(/,/),function(K){if(/^\s*\*\s*$/.test(K)){I.push("\\.*")}else{I.push("\\."+K.replace(new RegExp("["+("/^$.*+?|()[]{}\\".replace(/./g,"\\$&"))+"]","g"),"\\$&"))}})});I=new RegExp(I.join("|")+"$","i")
}for(E=0;E<F.length;E++){D=F[E];D.loaded=0;D.percent=0;D.status=g.QUEUED;if(I&&!I.test(D.name)){C.trigger("Error",{code:g.FILE_EXTENSION_ERROR,message:g.translate("File extension error."),file:D});continue}if(D.size!==b&&D.size>r.max_file_size){C.trigger("Error",{code:g.FILE_SIZE_ERROR,message:g.translate("File size error."),file:D});continue}t.push(D);H++}if(H){c(function(){A.trigger("QueueChanged");A.refresh()},1)}else{return false}});if(r.unique_names){A.bind("UploadFile",function(C,D){var F=D.name.match(/\.([^.]+)$/),E="tmp";if(F){E=F[1]}D.target_name=D.id+"."+E})}A.bind("UploadProgress",function(C,D){D.percent=D.size>0?Math.ceil(D.loaded/D.size*100):100;o()});A.bind("StateChanged",function(C){if(C.state==g.STARTED){q=(+new Date())}else{if(C.state==g.STOPPED){for(B=C.files.length-1;B>=0;B--){if(C.files[B].status==g.UPLOADING){C.files[B].status=g.QUEUED;o()}}}}});A.bind("QueueChanged",o);A.bind("Error",function(C,D){if(D.file){D.file.status=g.FAILED;o();if(C.state==g.STARTED){if(!n()){c(function(){s.call(A)},1)}}}});A.bind("FileUploaded",function(C,D){D.status=g.DONE;D.loaded=D.size;C.trigger("UploadProgress",D);c(function(){s.call(A)},1)});if(r.runtimes){x=[];y=r.runtimes.split(/\s?,\s?/);for(B=0;B<y.length;B++){if(k[y[B]]){x.push(k[y[B]])}}}else{x=k}function v(){var F=x[z++],E,C,D;if(F){E=F.getFeatures();C=A.settings.required_features;if(C){C=C.split(",");for(D=0;D<C.length;D++){if(!E[C[D]]){v();return}}}F.init(A,function(G){if(G&&G.success){A.features=E;A.runtime=F.name;A.trigger("Init",{runtime:F.name});A.trigger("PostInit");A.refresh()}else{v()}})}else{A.trigger("Error",{code:g.INIT_ERROR,message:g.translate("Init error.")})}}v();if(typeof(r.init)=="function"){r.init(A)}else{g.each(r.init,function(D,C){A.bind(C,D)})}},refresh:function(){this.trigger("Refresh")},start:function(){if(this.state!=g.STARTED){this.state=g.STARTED;this.trigger("StateChanged");s.call(this)}},stop:function(){if(this.state!=g.STOPPED){this.state=g.STOPPED;this.trigger("CancelUpload");this.trigger("StateChanged")
}},getFile:function(w){var v;for(v=t.length-1;v>=0;v--){if(t[v].id===w){return t[v]}}},removeFile:function(w){var v;for(v=t.length-1;v>=0;v--){if(t[v].id===w.id){return this.splice(v,1)[0]}}},splice:function(y,w){var x;x=t.splice(y===b?0:y,w===b?t.length:w);this.trigger("FilesRemoved",x);this.trigger("QueueChanged");if(x[0].status==g.UPLOADING&&this.state==g.STARTED){this.trigger("CancelUpload")}if(!n()){var v=this;c(function(){v.trigger("UploadComplete")})}return x},trigger:function(w){var y=p[w.toLowerCase()],x,v;if(y){v=Array.prototype.slice.call(arguments);v[0]=this;for(x=0;x<y.length;x++){if(y[x].func.apply(y[x].scope,v)===false){return false}}}return true},hasEventListener:function(v){return !!p[v.toLowerCase()]},bind:function(v,x,w){var y;v=v.toLowerCase();y=p[v]||[];y.push({func:x,scope:w||this});p[v]=y},unbind:function(v){v=v.toLowerCase();var y=p[v],w,x=arguments[1];if(y){if(x!==b){for(w=y.length-1;w>=0;w--){if(y[w].func===x){y.splice(w,1);break}}}else{y=[]}if(!y.length){delete p[v]}}},unbindAll:function(){var v=this;g.each(p,function(x,w){v.unbind(w)})},destroy:function(){this.trigger("Destroy");this.unbindAll()}})};g.File=function(q,o,p){var n=this;n.id=q;n.name=o;n.size=p;n.loaded=0;n.percent=0;n.status=0};g.Runtime=function(){this.getFeatures=function(){};this.init=function(n,o){}};g.QueueProgress=function(){var n=this;n.size=0;n.loaded=0;n.uploaded=0;n.failed=0;n.queued=0;n.percent=0;n.bytesPerSec=0;n.reset=function(){n.size=n.loaded=n.uploaded=n.failed=n.queued=n.percent=n.bytesPerSec=0}};g.runtimes={};window.plupload=g})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/default-drop-handler.js' */
AJS.toInit(function(b){var c;function a(){var f=document.getElementById("fileuploadShim");if(!f){f=document.createElement("div");f.setAttribute("id","fileuploadShim");document.body.appendChild(f)}var e=new plupload.Uploader({runtimes:"html5",dragdrop:true,drop_element:b("body")[0],browse_button:f.getAttribute("id"),multipart:false,stop_propagation:true,max_file_size:+AJS.Meta.get("global-settings-attachment-max-size")}),d=function(){if(AJS.Editor&&AJS.Editor.isVisible()&&AJS.Confluence.EditorUploadProgressDialog){c=AJS.Confluence.EditorUploadProgressDialog}else{c=new AJS.DragAndDropProgressDialog()}};c=null;e.init();AJS.DragAndDrop.defaultDropHandler=null;e.bind("FilesAdded",function(g,l){if(AJS.Editor&&AJS.Editor.isVisible()){Confluence.Uploader&&Confluence.Uploader.trigger("FilesAdded",l);return}!c&&d();for(var j=0,k=l.length;j<k;j++){var h=l[j];if(h.status!==plupload.FAILED){c.render({workId:h.id,status:h.status,file:h})}}e.start()});e.bind("BeforeUpload",function(g,j){if(AJS.Editor&&AJS.Editor.isVisible()){return}var i=AJS.DragAndDropUtils.base+Confluence.getContextPath()+"/plugins/drag-and-drop/upload.action";var h=AJS.Meta.get("page-id");var k=h!=0?{pageId:h}:{draftId:AJS.Meta.get("draft-id")},l=j.name.substr(j.name.lastIndexOf(".")+1);k.filename=j.name;k.size=j.size;k.mimeType=plupload.mimeTypes[l.toLowerCase()]||"application/x-upload-data";k.spaceKey=AJS.Meta.get("space-key");k.atl_token=AJS.Meta.get("atl-token");g.settings.url=plupload.buildUrl(i,k);c.cancelListeners.push(function(o,m){var n=g.getFile(m.workId);n&&g.removeFile(n);c.renderInfo(m.workId,"File was manually removed from the queue.")});c.show()});e.bind("UploadProgress",function(g,h){c.renderUpdateToBytesUploaded(h.id,h.loaded,h.size);c.hideCloseButton()});e.bind("FileUploaded",function(g,i,h){if(h.status===0){c.renderError(i.id,"The server is not responding. Please check that it is running.")}else{c.renderComplete(i.id)}});e.bind("Error",function(h,i){if(AJS.Editor&&AJS.Editor.isVisible()){return}var g,j;
if(i.response){try{g=AJS.$.parseJSON(i.response);j=g.actionErrors[0]}catch(k){if(k.name==="SyntaxError"){j="Invalid response received from the server."}else{j=i.message}}c.renderError(i.file.id,j)}else{j=i.message;if(i.code==plupload.FILE_SIZE_ERROR){j=AJS.format("File of size {0} exceeds maximum upload limit of {1}",AJS.DragAndDropUtils.niceSize(i.file.size).toString(),AJS.DragAndDropUtils.niceSize(AJS.Meta.get("global-settings-attachment-max-size")).toString());!c&&d();c.render({workId:i.file.id,status:i.file.status,file:i.file,errorMessage:j});if(!c.isVisible()){c.show();c.showCloseButton()}}}});e.bind("UploadComplete",function(){if(!e.total.queued){c.showCloseButton();if(!c.hasErrors()){setTimeout(function(){c.hide();c.clearRenderOutput();window.location.reload()},1000)}}})}AJS.DragAndDropUtils.hasXhrSupport&&a()});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/observable-array-list.js' */
AJS.ObservableArrayList=function(){this._data=[];this._pushObservers=[]};AJS.ObservableArrayList.prototype={push:function(a){this._data.push(a);this._notifyPushObservers(a)},length:function(){return this._data.length},remove:function(b,a){return this._remove.call(this._data,b,a)},_remove:function(c,b){var a=this.slice((b||c)+1||this.length);this.length=c<0?this.length+c:c;return this.push.apply(this,a)},shift:function(){return this._data.shift()},removeByPredicate:function(b){var d=[],a=this._data.length;for(var c=0;c<a;c++){if(!b(this._data[c])){d.push(this._data[c])}}this._data=d;return a-this._data.length},addPushObserver:function(a){if(AJS.$.isFunction(a)){this._pushObservers.push(a)}else{throw new Error("Attempting to add an observer that is not a function: "+a)}},_notifyPushObservers:function(c){for(var a=0,b=this._pushObservers.length;a<b;a++){this._pushObservers[a](c)}}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/plupload.html5.js' */
(function(h,k,j,e){var c={},g;function m(o,p){var n;if("FileReader" in h){n=new FileReader();n.readAsDataURL(o);n.onload=function(){p(n.result)}}else{return p(o.getAsDataURL())}}function l(o,p){var n;if("FileReader" in h){n=new FileReader();n.readAsBinaryString(o);n.onload=function(){p(n.result)}}else{return p(o.getAsBinary())}}function d(r,p,n,v){var q,o,u,s,t=this;m(c[r.id],function(w){q=k.createElement("canvas");q.style.display="none";k.body.appendChild(q);o=q.getContext("2d");u=new Image();u.onerror=u.onabort=function(){v({success:false})};u.onload=function(){var B,x,z,y,A;if(!p.width){p.width=u.width}if(!p.height){p.height=u.height}s=Math.min(p.width/u.width,p.height/u.height);if(s<1||(s===1&&n==="image/jpeg")){B=Math.round(u.width*s);x=Math.round(u.height*s);q.width=B;q.height=x;o.drawImage(u,0,0,B,x);if(n==="image/jpeg"){y=new f(atob(w.substring(w.indexOf("base64,")+7)));if(y.headers&&y.headers.length){A=new a();if(A.init(y.get("exif")[0])){A.setExif("PixelXDimension",B);A.setExif("PixelYDimension",x);y.set("exif",A.getBinary());if(t.hasEventListener("ExifData")){t.trigger("ExifData",r,A.EXIF())}if(t.hasEventListener("GpsData")){t.trigger("GpsData",r,A.GPS())}}}if(p.quality){try{w=q.toDataURL(n,p.quality/100)}catch(C){w=q.toDataURL(n)}}}else{w=q.toDataURL(n)}w=w.substring(w.indexOf("base64,")+7);w=atob(w);if(y&&y.headers&&y.headers.length){w=y.restore(w);y.purge()}q.parentNode.removeChild(q);v({success:true,data:w})}else{v({success:false})}};u.src=w})}j.runtimes.Html5=j.addRuntime("html5",{getFeatures:function(){var s,o,r,q,p,n;o=r=p=n=false;if(h.XMLHttpRequest){s=new XMLHttpRequest();r=!!s.upload;o=!!(s.sendAsBinary||s.upload)}if(o){q=!!(s.sendAsBinary||(h.Uint8Array&&h.ArrayBuffer));p=!!(File&&(File.prototype.getAsDataURL||h.FileReader)&&q);n=!!(File&&(File.prototype.mozSlice||File.prototype.webkitSlice||File.prototype.slice))}g=j.ua.safari&&j.ua.windows&&navigator.userAgent&&navigator.userAgent.indexOf("Version/4")>0;return{html5:o,dragdrop:(function(){var t=k.createElement("div");
return("draggable" in t)||("ondragstart" in t&&"ondrop" in t)}()),jpgresize:p,pngresize:p,multipart:p||!!h.FileReader||!!h.FormData,canSendBinary:q,cantSendBlobInFormData:!!(j.ua.gecko&&h.FormData&&h.FileReader&&!FileReader.prototype.readAsArrayBuffer),progress:r,chunks:n,multi_selection:!(j.ua.safari&&j.ua.windows),triggerDialog:(j.ua.gecko&&h.FormData||j.ua.webkit)}},init:function(p,r){var n,q;function o(w){var u,t,v=[],x,s={};for(t=0;t<w.length;t++){u=w[t];if(s[u.name]){continue}s[u.name]=true;x=j.guid();c[x]=u;if(u.fileSize>0||u.size>0){v.push(new j.File(x,u.fileName||u.name,u.fileSize||u.size))}}if(v.length){p.trigger("FilesAdded",v)}}n=this.getFeatures();if(!n.html5){r({success:false});return}p.upload=function(s){o(s)};p.bind("Init",function(w){var G,F,C=[],v,D,t=w.settings.filters,u,B,s=k.body,E;G=k.createElement("div");G.id=w.id+"_html5_container";j.extend(G.style,{position:"absolute",background:p.settings.shim_bgcolor||"transparent",width:"100px",height:"100px",overflow:"hidden",zIndex:99999,opacity:p.settings.shim_bgcolor?"":0});G.className="plupload html5";if(p.settings.container){s=k.getElementById(p.settings.container);if(j.getStyle(s,"position")==="static"){s.style.position="relative"}}s.appendChild(G);no_type_restriction:for(v=0;v<t.length;v++){u=t[v].extensions.split(/,/);for(D=0;D<u.length;D++){if(u[D]==="*"){C=[];break no_type_restriction}B=j.mimeTypes[u[D]];if(B){C.push(B)}}}G.innerHTML='<input id="'+p.id+'_html5"  style="font-size:999px" type="file" accept="'+C.join(",")+'" '+(p.settings.multi_selection&&p.features.multi_selection?'multiple="multiple"':"")+" />";G.scrollTop=100;E=k.getElementById(p.id+"_html5");if(w.features.triggerDialog){j.extend(E.style,{position:"absolute",width:"100%",height:"100%"})}else{j.extend(E.style,{cssFloat:"right",styleFloat:"right"})}E.onchange=function(){o(this.files);this.value=""};F=k.getElementById(w.settings.browse_button);if(F){var z=w.settings.browse_button_hover,A=w.settings.browse_button_active,x=w.features.triggerDialog?F:G;
if(z){j.addEvent(x,"mouseover",function(){j.addClass(F,z)},w.id);j.addEvent(x,"mouseout",function(){j.removeClass(F,z)},w.id)}if(A){j.addEvent(x,"mousedown",function(){j.addClass(F,A)},w.id);j.addEvent(k.body,"mouseup",function(){j.removeClass(F,A)},w.id)}if(w.features.triggerDialog){j.addEvent(F,"click",function(y){k.getElementById(w.id+"_html5").click();y.preventDefault()},w.id)}}});p.bind("PostInit",function(){var s=j.getElement(p.settings.drop_element),t,u=false;if(s){if(g){j.addEvent(s,"dragenter",function(y){var x,v,w;x=k.getElementById(p.id+"_drop");if(!x){x=k.createElement("input");x.setAttribute("type","file");x.setAttribute("id",p.id+"_drop");x.setAttribute("multiple","multiple");j.addEvent(x,"change",function(){o(this.files);j.removeEvent(x,"change",p.id);x.parentNode.removeChild(x)},p.id);s.appendChild(x);u=true}v=j.getPos(s,k.getElementById(p.settings.container));w=j.getSize(s);if(j.getStyle(s,"position")==="static"){j.extend(s.style,{position:"relative"})}j.extend(x.style,{position:"absolute",display:"block",top:0,left:0,width:w.w+"px",height:w.h+"px",opacity:0})},p.id);j.addEvent(s,"dragleave",function(v){if(!u){t&&t.parentElement.removeChild(t);t=null}u=false});return}j.addEvent(s,"dragover",function(v){v.preventDefault()},p.id);j.addEvent(s,"drop",function(w){var v=w.dataTransfer;if(v&&v.files){o(v.files)}t&&t.parentElement.removeChild(t);t=null;w.preventDefault();if(p.settings.stop_propagation){if(w.cancelBubble){w.cancelBubble=true}else{w.stopPropagation()}}},p.id)}});p.bind("Refresh",function(s){var t,u,v,x,w;t=k.getElementById(p.settings.browse_button);if(t){u=j.getPos(t,k.getElementById(s.settings.container));v=j.getSize(t);x=k.getElementById(p.id+"_html5_container");j.extend(x.style,{top:u.y+"px",left:u.x+"px",width:v.w+"px",height:v.h+"px"});if(p.features.triggerDialog){if(j.getStyle(t,"position")==="static"){j.extend(t.style,{position:"relative"})}w=parseInt(j.getStyle(t,"z-index"),10);if(isNaN(w)){w=0}j.extend(t.style,{zIndex:w});j.extend(x.style,{zIndex:w-1})
}}});p.bind("CancelUpload",function(){if(q&&q.abort){q.abort()}});p.bind("UploadFile",function(s,u){var v=s.settings,y,t;function x(A,D,z){var B;if(File.prototype.slice){try{A.slice();return A.slice(D,z)}catch(C){return A.slice(D,z-D)}}else{if(B=File.prototype.webkitSlice||File.prototype.mozSlice){return B.call(A,D,z)}else{return null}}}function w(A){var D=0,C=0,z=("FileReader" in h)?new FileReader:null;function B(){var I,M,K,L,H,J,F,E=s.settings.url;function G(V){var T=0,N="----pluploadboundary"+j.guid(),O,P="--",U="\r\n",R="";q=new XMLHttpRequest;if(q.upload){q.upload.onprogress=function(W){u.loaded=Math.min(u.size,C+W.loaded-T);s.trigger("UploadProgress",u)}}q.onreadystatechange=function(){var W,Y;if(q.readyState==4){try{W=q.status}catch(X){W=0}if(W>=400){s.trigger("Error",{code:j.HTTP_ERROR,message:j.translate("HTTP Error."),file:u,status:W,response:q.responseText||""})}else{if(K){Y={chunk:D,chunks:K,response:q.responseText,status:W};s.trigger("ChunkUploaded",u,Y);C+=J;if(Y.cancelled){u.status=j.FAILED;return}u.loaded=Math.min(u.size,(D+1)*H)}else{u.loaded=u.size}s.trigger("UploadProgress",u);V=I=O=R=null;if(!K||++D>=K){u.status=j.DONE;s.trigger("FileUploaded",u,{response:q.responseText,status:W})}else{B()}}}};if(s.settings.multipart&&n.multipart){L.name=u.target_name||u.name;q.open("post",E,true);j.each(s.settings.headers,function(X,W){q.setRequestHeader(W,X)});if(typeof(V)!=="string"&&!!h.FormData){O=new FormData();j.each(j.extend(L,s.settings.multipart_params),function(X,W){O.append(W,X)});O.append(s.settings.file_data_name,V);q.send(O);return}if(typeof(V)==="string"){q.setRequestHeader("Content-Type","multipart/form-data; boundary="+N);j.each(j.extend(L,s.settings.multipart_params),function(X,W){R+=P+N+U+'Content-Disposition: form-data; name="'+W+'"'+U+U;R+=unescape(encodeURIComponent(X))+U});F=j.mimeTypes[u.name.replace(/^.+\.([^.]+)/,"$1").toLowerCase()]||"application/octet-stream";R+=P+N+U+'Content-Disposition: form-data; name="'+s.settings.file_data_name+'"; filename="'+unescape(encodeURIComponent(u.name))+'"'+U+"Content-Type: "+F+U+U+V+U+P+N+P+U;
T=R.length-V.length;V=R;if(q.sendAsBinary){q.sendAsBinary(V)}else{if(n.canSendBinary){var S=new Uint8Array(V.length);for(var Q=0;Q<V.length;Q++){S[Q]=(V.charCodeAt(Q)&255)}q.send(S.buffer)}}return}}E=j.buildUrl(s.settings.url,j.extend(L,s.settings.multipart_params));q.open("post",E,true);q.setRequestHeader("Content-Type","application/octet-stream");if(V.encoding){q.setRequestHeader("Content-Encoding",V.encoding)}j.each(s.settings.headers,function(X,W){q.setRequestHeader(W,X)});q.send(V.getData?V.getData():V)}if(u.status==j.DONE||u.status==j.FAILED||s.state==j.STOPPED){return}L={name:u.target_name||u.name};if(v.chunk_size&&u.size>v.chunk_size&&(n.chunks||typeof(A)=="string")){H=v.chunk_size;K=Math.ceil(u.size/H);J=Math.min(H,u.size-(D*H));if(typeof(A)=="string"){I=A.substring(D*H,D*H+J)}else{I=x(A,D*H,D*H+J)}L.chunk=D;L.chunks=K}else{J=u.size;I=A}if(typeof(I)!=="string"&&z&&n.cantSendBlobInFormData&&n.chunks&&s.settings.chunk_size){z.onload=function(){G(z.result)};z.readAsBinaryString(I)}else{G(I)}}B()}y=c[u.id];if(n.jpgresize&&s.settings.resize&&/\.(png|jpg|jpeg)$/i.test(u.name)){d.call(s,u,s.settings.resize,/\.png$/i.test(u.name)?"image/png":"image/jpeg",function(z){if(z.success){u.size=z.data.length;w(z.data)}else{w(y)}})}else{w(y)}});p.bind("Destroy",function(s){var u,v,t=k.body,w={inputContainer:s.id+"_html5_container",inputFile:s.id+"_html5",browseButton:s.settings.browse_button,dropElm:s.settings.drop_element};for(u in w){v=k.getElementById(w[u]);if(v){j.removeAllEvents(v,s.id)}}j.removeAllEvents(k.body,s.id);if(s.settings.container){t=k.getElementById(s.settings.container)}t.removeChild(k.getElementById(w.inputContainer))});r({success:true})}});function b(){var q=false,o;function r(t,v){var s=q?0:-8*(v-1),w=0,u;for(u=0;u<v;u++){w|=(o.charCodeAt(t+u)<<Math.abs(s+u*8))}return w}function n(u,s,t){var t=arguments.length===3?t:o.length-s-1;o=o.substr(0,s)+u+o.substr(t+s)}function p(t,u,w){var x="",s=q?0:-8*(w-1),v;for(v=0;v<w;v++){x+=String.fromCharCode((u>>Math.abs(s+v*8))&255)
}n(x,t,w)}return{II:function(s){if(s===e){return q}else{q=s}},init:function(s){q=false;o=s},SEGMENT:function(s,u,t){switch(arguments.length){case 1:return o.substr(s,o.length-s-1);case 2:return o.substr(s,u);case 3:n(t,s,u);break;default:return o}},BYTE:function(s){return r(s,1)},SHORT:function(s){return r(s,2)},LONG:function(s,t){if(t===e){return r(s,4)}else{p(s,t,4)}},SLONG:function(s){var t=r(s,4);return(t>2147483647?t-4294967296:t)},STRING:function(s,t){var u="";for(t+=s;s<t;s++){u+=String.fromCharCode(r(s,1))}return u}}}function f(s){var u={65505:{app:"EXIF",name:"APP1",signature:"Exif\0"},65506:{app:"ICC",name:"APP2",signature:"ICC_PROFILE\0"},65517:{app:"IPTC",name:"APP13",signature:"Photoshop 3.0\0"}},t=[],r,n,p=e,q=0,o;r=new b();r.init(s);if(r.SHORT(0)!==65496){return}n=2;o=Math.min(1048576,s.length);while(n<=o){p=r.SHORT(n);if(p>=65488&&p<=65495){n+=2;continue}if(p===65498||p===65497){break}q=r.SHORT(n+2)+2;if(u[p]&&r.STRING(n+4,u[p].signature.length)===u[p].signature){t.push({hex:p,app:u[p].app.toUpperCase(),name:u[p].name.toUpperCase(),start:n,length:q,segment:r.SEGMENT(n,q)})}n+=q}r.init(null);return{headers:t,restore:function(y){r.init(y);var w=new f(y);if(!w.headers){return false}for(var x=w.headers.length;x>0;x--){var z=w.headers[x-1];r.SEGMENT(z.start,z.length,"")}w.purge();n=r.SHORT(2)==65504?4+r.SHORT(4):2;for(var x=0,v=t.length;x<v;x++){r.SEGMENT(n,0,t[x].segment);n+=t[x].length}return r.SEGMENT()},get:function(x){var y=[];for(var w=0,v=t.length;w<v;w++){if(t[w].app===x.toUpperCase()){y.push(t[w].segment)}}return y},set:function(y,x){var z=[];if(typeof(x)==="string"){z.push(x)}else{z=x}for(var w=ii=0,v=t.length;w<v;w++){if(t[w].app===y.toUpperCase()){t[w].segment=z[ii];t[w].length=z[ii].length;ii++}if(ii>=z.length){break}}},purge:function(){t=[];r.init(null)}}}function a(){var q,n,o={},t;q=new b();n={tiff:{274:"Orientation",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer"},exif:{36864:"ExifVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",36867:"DateTimeOriginal",33434:"ExposureTime",33437:"FNumber",34855:"ISOSpeedRatings",37377:"ShutterSpeedValue",37378:"ApertureValue",37383:"MeteringMode",37384:"LightSource",37385:"Flash",41986:"ExposureMode",41987:"WhiteBalance",41990:"SceneCaptureType",41988:"DigitalZoomRatio",41992:"Contrast",41993:"Saturation",41994:"Sharpness"},gps:{0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude"}};
t={ColorSpace:{1:"sRGB",0:"Uncalibrated"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{1:"Daylight",2:"Fliorescent",3:"Tungsten",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 -5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire.",1:"Flash fired.",5:"Strobe return light not detected.",7:"Strobe return light detected.",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},ExposureMode:{0:"Auto exposure",1:"Manual exposure",2:"Auto bracket"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},GPSLatitudeRef:{N:"North latitude",S:"South latitude"},GPSLongitudeRef:{E:"East longitude",W:"West longitude"}};
function p(u,C){var w=q.SHORT(u),z,F,G,B,A,v,x,D,E=[],y={};for(z=0;z<w;z++){x=v=u+12*z+2;G=C[q.SHORT(x)];if(G===e){continue}B=q.SHORT(x+=2);A=q.LONG(x+=2);x+=4;E=[];switch(B){case 1:case 7:if(A>4){x=q.LONG(x)+o.tiffHeader}for(F=0;F<A;F++){E[F]=q.BYTE(x+F)}break;case 2:if(A>4){x=q.LONG(x)+o.tiffHeader}y[G]=q.STRING(x,A-1);continue;case 3:if(A>2){x=q.LONG(x)+o.tiffHeader}for(F=0;F<A;F++){E[F]=q.SHORT(x+F*2)}break;case 4:if(A>1){x=q.LONG(x)+o.tiffHeader}for(F=0;F<A;F++){E[F]=q.LONG(x+F*4)}break;case 5:x=q.LONG(x)+o.tiffHeader;for(F=0;F<A;F++){E[F]=q.LONG(x+F*4)/q.LONG(x+F*4+4)}break;case 9:x=q.LONG(x)+o.tiffHeader;for(F=0;F<A;F++){E[F]=q.SLONG(x+F*4)}break;case 10:x=q.LONG(x)+o.tiffHeader;for(F=0;F<A;F++){E[F]=q.SLONG(x+F*4)/q.SLONG(x+F*4+4)}break;default:continue}D=(A==1?E[0]:E);if(t.hasOwnProperty(G)&&typeof D!="object"){y[G]=t[G][D]}else{y[G]=D}}return y}function s(){var v=e,u=o.tiffHeader;q.II(q.SHORT(u)==18761);if(q.SHORT(u+=2)!==42){return false}o.IFD0=o.tiffHeader+q.LONG(u+=2);v=p(o.IFD0,n.tiff);o.exifIFD=("ExifIFDPointer" in v?o.tiffHeader+v.ExifIFDPointer:e);o.gpsIFD=("GPSInfoIFDPointer" in v?o.tiffHeader+v.GPSInfoIFDPointer:e);return true}function r(w,u,z){var B,y,x,A=0;if(typeof(u)==="string"){var v=n[w.toLowerCase()];for(hex in v){if(v[hex]===u){u=hex;break}}}B=o[w.toLowerCase()+"IFD"];y=q.SHORT(B);for(i=0;i<y;i++){x=B+12*i+2;if(q.SHORT(x)==u){A=x+8;break}}if(!A){return false}q.LONG(A,z);return true}return{init:function(u){o={tiffHeader:10};if(u===e||!u.length){return false}q.init(u);if(q.SHORT(0)===65505&&q.STRING(4,5).toUpperCase()==="EXIF\0"){return s()}return false},EXIF:function(){var u;u=p(o.exifIFD,n.exif);if(u.ExifVersion){u.ExifVersion=String.fromCharCode(u.ExifVersion[0],u.ExifVersion[1],u.ExifVersion[2],u.ExifVersion[3])}return u},GPS:function(){var u;u=p(o.gpsIFD,n.gps);if(u.GPSVersionID){u.GPSVersionID=u.GPSVersionID.join(".")}return u},setExif:function(u,v){if(u!=="PixelXDimension"&&u!=="PixelYDimension"){return false}return r("exif",u,v)},getBinary:function(){return q.SEGMENT()
}}}})(window,document,plupload);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/upload-progress-dialog.js' */
(function(a){AJS.DragAndDropProgressDialog=function(b){var c=this;var d={header:"Attach File(s)",width:600,height:400};this._options=a.extend({},d,b);this.id="drag-and-drop-progress-dialog";this._dialog=new AJS.Dialog(this._options.width,this._options.height,this.id);this._dialog.addHeader(this._options.header).addPanel("Panel 1",AJS.DragAndDrop.Templates.uploadFileStatusContainer()).addButton("Done",function(){c.hide();c.clearRenderOutput()},"all-file-uploads-complete");this._dialog.getCurrentPanel().setPadding(0);this._$closeButton=a(".all-file-uploads-complete");a(document).keydown(function(f){if(f.which==27){if(!c._$closeButton.prop("disabled")){c.hide();c.clearRenderOutput()}return AJS.stopEvent(f)}});this._$container=a("#upload-statuses");this._workIdsOfFilesInProgress=[];this.cancelListeners=[];this.onShowListeners=[];this._hidden=true;this.hasErrorMessage=false};AJS.DragAndDropProgressDialog.prototype={show:function(){if(this._hidden){this._dialog.show();this._hidden=false;a.each(this.onShowListeners,function(b,c){c()})}this.hideCloseButton()},hide:function(){if(!this._hidden){this._dialog.hide();this._hidden=true}},isVisible:function(){return !this._hidden},_getProgressElementId:function(b){return"file-"+b+"-progress"},render:function(c){this._workIdsOfFilesInProgress.push(c.workId);this._$container.append(AJS.DragAndDrop.Templates.fileStatus({filename:c.file.name,progressElementId:this._getProgressElementId(c.workId),workId:c.workId,showCancel:(c.status==plupload.QUEUED)}));var b=a("#"+this._getProgressElementId(c.workId));b.progressbar({value:0});if(c.status==plupload.QUEUED){a("#file-upload-cancel-"+c.workId).click((function(d){return function(f){a.each(d,function(e,g){g(f,c)})}})(this.cancelListeners))}else{this.renderError(c.workId,c.errorMessage)}},renderError:function(e,d){if(a.inArray(e,this._workIdsOfFilesInProgress)==-1){throw new Error("No file status found with id: "+e)}var b=a("#file-status-block-"+e);
var c=b.attr("data-filename");b.html(aui.message.warning({content:d,titleContent:c}));this.hasErrorMessage=true},renderInfo:function(e,d){if(a.inArray(e,this._workIdsOfFilesInProgress)==-1){throw new Error("No file status found with id: "+e)}var b=a("#file-status-block-"+e);var c=b.attr("data-filename");b.html(aui.message.info({content:d,titleContent:c}));this.hasErrorMessage=true},hasErrors:function(){return this.hasErrorMessage},renderUpdateToBytesUploaded:function(h,g,b){if(a.inArray(h,this._workIdsOfFilesInProgress)==-1){throw new Error("No file status found with id: "+h)}var d=AJS.DragAndDropUtils.niceSize(g);var f=a("#file-"+h+"-uploaded");if(!!f.length){f.text(d)}else{a("#file-upload-progress-text-"+h).html(AJS.DragAndDrop.Templates.uploadFileStatusProgressMessage({fileId:h,uploadedSizeNice:d,totalSizeNice:AJS.DragAndDropUtils.niceSize(b)}))}var e=Math.round(g*100/b);var c=a("#"+this._getProgressElementId(h));c.progressbar("option","value",e)},renderComplete:function(b){if(a.inArray(b,this._workIdsOfFilesInProgress)==-1){throw new Error("No file status found with id: "+b)}a("#cancel-or-success-placeholder-"+b).html(AJS.DragAndDrop.Templates.uploadFileStatusSuccessIcon())},renderCancelled:function(c){if(a.inArray(c,this._workIdsOfFilesInProgress)==-1){throw new Error("No file status found with id: "+c)}var b=a("#"+this._getProgressElementId(c));if(b.progressbar("option","value")==0){b.progressbar("option","value",100)}b.progressbar("disable");a("#file-upload-progress-text-"+c).html("Cancelled.");a("#cancel-or-success-placeholder-"+c).hide()},clearRenderOutput:function(){this.showCloseButton();this._$container.empty();this._workIdsOfFilesInProgress=[];this.hasErrorMessage=false},hideCloseButton:function(){this._$closeButton.hide()},showCloseButton:function(){this._$closeButton.show()}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'templates/drag-and-drop.soy' */
// This file was automatically generated from drag-and-drop.soy.
// Please don't edit this file by hand.

if (typeof AJS == 'undefined') { var AJS = {}; }
if (typeof AJS.DragAndDrop == 'undefined') { AJS.DragAndDrop = {}; }
if (typeof AJS.DragAndDrop.Templates == 'undefined') { AJS.DragAndDrop.Templates = {}; }


AJS.DragAndDrop.Templates.fileStatus = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li id="file-status-block-', soy.$$escapeHtml(opt_data.workId), '" data-filename="', soy.$$escapeHtml(opt_data.filename), '"><label>', soy.$$escapeHtml(opt_data.filename), '</label><div class="file-upload-progress-block"><div class="aui-progressbar" id="', soy.$$escapeHtml(opt_data.progressElementId), '"><div id="file-upload-progress-text-', soy.$$escapeHtml(opt_data.workId), '" class="file-upload-progress-text">', soy.$$escapeHtml("Waiting..."), '</div></div>', (opt_data.showCancel) ? '<div id="cancel-or-success-placeholder-' + soy.$$escapeHtml(opt_data.workId) + '" class="cancel-or-success-placeholder ui-state-default"><span id="file-upload-cancel-' + soy.$$escapeHtml(opt_data.workId) + '" class="aui-icon aui-icon-small aui-iconfont-remove" title="' + soy.$$escapeHtml("Cancel Upload") + '">' + soy.$$escapeHtml("Cancel") + '</span></div>' : '', '</div></li>');
  return opt_sb ? '' : output.toString();
};


AJS.DragAndDrop.Templates.uploadFileStatusContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul id="upload-statuses"></ul>');
  return opt_sb ? '' : output.toString();
};


AJS.DragAndDrop.Templates.uploadFileStatusSuccessIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class=\'aui-icon aui-icon-small aui-iconfont-success\'></span>');
  return opt_sb ? '' : output.toString();
};


AJS.DragAndDrop.Templates.uploadFileStatusProgressMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span id="file-', soy.$$escapeHtml(opt_data.fileId), '-uploaded">', soy.$$escapeHtml(opt_data.uploadedSizeNice), '</span> ', soy.$$escapeHtml("of"), ' ', soy.$$escapeHtml(opt_data.totalSizeNice));
  return opt_sb ? '' : output.toString();
};


AJS.DragAndDrop.Templates.dropZone = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="attachments-drop-zone"><div class="drop-zone-image"></div><div class="drop-zone-text">', soy.$$escapeHtml("Drop files here to attach them"), '</div></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:drag-and-drop-for-view-content', location = 'js/view-content-client.js' */
AJS.toInit(function(a){AJS.DragAndDropUtils.init(function(b){var c=a("body")[0];if(!b&&!AJS.DragAndDropUtils.isIE9()){AJS.DragAndDropUtils.enableDropZoneOn(c)}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:page-banner-common-resources', location = 'js/page-banner.js' */
AJS.toInit(function(e){d();AJS.bind("system-content-metadata.toggled-restrictions",function(g,h){AJS.setVisible("#content-metadata-page-restrictions",h.hasRestrictions);d()});AJS.bind("breadcrumbs.expanded",f);e("#page-metadata-banner").css("visibility","visible");b();e("#content-metadata-page-restrictions").click(function(g){g.preventDefault();AJS.trigger("system-content-metadata.open-restrictions-dialog")});function d(){if(e("#system-content-items").children(":not(.hidden)").length==0){e("#system-content-items").addClass("hidden")}else{e("#system-content-items").removeClass("hidden")}}function f(){e("#page-metadata-banner").hide()}function b(){var g=e("#system-content-items a:not(.tipsy-disabled), .page-metadata-item a:not(.tipsy-disabled), .page-metadata-modification-info a.last-modified:not(tipsy-disabled)");a(g);g.click(function(h){c(e(h.target).closest("a"))});e(window).on("click scroll resize",c)}function a(g){e(g).tooltip({live:true,gravity:e("#com-atlassian-confluence").hasClass("theme-documentation view-blog-post")?"nw":"n",title:"title",delayIn:500})}function c(g){e(".tipsy").remove();if(g){var h=e(g).data("tipsy");if(h){h.hoverState="out"}}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:page-banner-common-resources', location = 'js/page-banner-analytics.js' */
AJS.toInit(function(c){function b(){if(!AJS.Confluence.Analytics||!AJS.Confluence.Analytics.setAnalyticsSource){AJS.log("WARNING: Could not initialise analytics for the page banner: AJS.Confluence.Analytics.setAnalyticsSource is not defined.");return}var e=AJS.Confluence.Analytics.setAnalyticsSource;var f=c("#breadcrumbs > li");e(f.filter(":not(#ellipsis)").find("a"),"breadcrumbs");e(f.filter(".hidden-crumb").find("a"),"breadcrumbs-expanded");e(f.filter(":last").find("a"),"breadcrumbs-parent");var d=c("#com-atlassian-confluence").hasClass("theme-documentation")?"breadcrumbs-homepage":"breadcrumbs-collector";e(f.filter(".first").find("a"),d)}function a(e,d,g){var f=null;e.mouseover(function(){f=setTimeout(g,d)});e.mouseout(function(){clearTimeout(f)})}AJS.bind("breadcrumbs.expanded",function(){AJS.trigger("analyticsEvent",{name:"breadcrumbs-expanded"})});b()});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:soy-resources', location = 'soy/page-banner.soy' */
// This file was automatically generated from page-banner.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.PageBanner == 'undefined') { Confluence.Templates.PageBanner = {}; }


Confluence.Templates.PageBanner.banner = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="page-metadata-banner"><ul class="banner">');
  Confluence.Templates.PageBanner.renderSystemContentItems(opt_data, output);
  var itemList6 = opt_data.pageBannerItems;
  var itemListLen6 = itemList6.length;
  for (var itemIndex6 = 0; itemIndex6 < itemListLen6; itemIndex6++) {
    var itemData6 = itemList6[itemIndex6];
    Confluence.Templates.PageBanner.renderPageBannerItem(itemData6, output);
  }
  output.append('</ul></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.PageBanner.renderSystemContentItems = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li id="system-content-items" class="noprint">');
  var itemList12 = opt_data.systemContentItems;
  var itemListLen12 = itemList12.length;
  for (var itemIndex12 = 0; itemIndex12 < itemListLen12; itemIndex12++) {
    var itemData12 = itemList12[itemIndex12];
    Confluence.Templates.PageBanner.itemAnchor(soy.$$augmentData(itemData12, {isSystemContentItem: true}), output);
  }
  output.append('</li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.PageBanner.renderPageBannerItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="page-metadata-item noprint ', (opt_data.isAuiButton) ? 'has-button' : '', '" ', (opt_data.linkId) ? ' id="' + soy.$$escapeHtml(opt_data.linkId) + '-wrapper"' : '', '>');
  Confluence.Templates.PageBanner.itemAnchor(opt_data, output);
  output.append('</li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.PageBanner.itemAnchor = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(opt_data.href), '" title="', soy.$$escapeHtml(opt_data.tooltip), '" ', (opt_data.linkId) ? 'id="' + soy.$$escapeHtml(opt_data.linkId) + '"' : '', ' ', (opt_data.styleClasses) ? 'class="' + soy.$$escapeHtml(opt_data.styleClasses) + '"' : '', '>');
  Confluence.Templates.PageBanner.itemIcon(opt_data, output);
  output.append((! opt_data.isSystemContentItem) ? '<span>' + soy.$$escapeHtml(opt_data.label) + '</span>' : '', '</a>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.PageBanner.itemIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.icon) ? '<img class="page-banner-item-icon" src="' + soy.$$escapeHtml(opt_data.icon.url) + '" style="height: ' + soy.$$escapeHtml(opt_data.icon.height) + 'px; width: ' + soy.$$escapeHtml(opt_data.icon.width) + 'px;"/>' : '');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.comalatech.workflow:newui-resources', location = 'templates/dist/cml-workflows-content.js' */
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var comala = require('comala-ext.js');
var InlineDialog = require('views/inline-dialog-controller.js');

AJS.toInit(function ($) {
  if(!AJS.params.publishedView){
    //Store confluence & plugin context data in skull
    var context = {
        'path': AJS.contextPath(),
        'plugin': '/plugins/servlet/comalaworkflows',
        'locale': AJS.params.userLocale?AJS.params.userLocale:AJS.params.actionLocale,
        'user': AJS.params.currentUserFullname,
        'content': AJS.params.pageId,
        'UAKey': AJS.params.workflowStatsUAKey
    };
    comala.add('cwContext', context);

    //Track lozenge clicks
    //Temporary: remove these lines when lozenge click tracking is over
    comala.analytics.init(context.UAKey, 'cw');
    AJS.$(document).on('click', '.cw-tracker', function(){
        comala.analytics.trackEvent('content-overview', 'click');
    })

    //Status Overview Inline Dialog
    var statusDialog = new InlineDialog({
        id: 'workflows-status-dialog',
        action: 'overview',
        trigger: '.cw-tracker',
        type: 'iframe',
        content: context.path+context.plugin+"/content/"+context.content+"/overview",
        width: 400,
        align: 'bottom center',
        respondsTo: 'hover',
        liveEvents: true,
        preload: false,
        padding: 0,
     });

    //Sync workflow changes (approvals & state transitions) with iframe to fetch new model data
    $(document).delegate("iframe.adhoworkflows","awp.refresh",function(){
        comala.require('events', function(events){
            //show loader spinner in status dialog
            statusDialog.reload();
            //re-render status dialog
            events.trigger('cw:module.reload');
        });
    });
  }
});

},{"comala-ext.js":11,"views/inline-dialog-controller.js":16}],2:[function(require,module,exports){
"use strict";

/**
 * The Super duper Comala Framework
 * We start simple, then get fancy, but let's try to follow Atlassian's AP pattern, which is extendable
 */
module.exports = {
    require: function(what,callback,context) {
        var exports = this._exports();
        var resp = [];
        what = _.isArray(what) ? what : [what];
        _(what).each(function(key) {
            var val = exports[key];
            // if it's function we use it retrieve the value an set the value as the resulting object
            if (_.isFunction(val)) {
                val = val();
                exports[key] = val;
            }
            resp.push(val);
        },this);
        callback.apply(context,resp);
    },

    _exports: function() {
        if (window.comalaExports) {
            return window.comalaExports;
        } if (window.parent && window.parent.comalaExports) {
            return window.parent.comalaExports;
        } else {
            window.comalaExports = {
                events: function() {
                    return _.extend({}, Backbone.Events);
                }
            };
            return window.comalaExports;
        }
    },

    // Register object
    add: function(name,object) {
        this._exports()[name] = object;
    },

    // Unregister object
    remove: function (name) {
        delete this._exports()[name];
    },

    // set an height or auto-resize based on content
    resize: function(height) {
        // set an height or auto-resize based on content
        var iframeHeight = height ? height : AJS.$('body').outerHeight(true);
         // give some extra padding
        iframeHeight += 50;
        if(parent.document) {
            AJS.$('iframe', parent.document).attr('height', iframeHeight + 'px');    
        }
    },

    // get query params and returns an array object
    getQueryParams: function(qs) {
        var params = {},
            tokens,
            re = /[?&]?([^=]+)=([^&]*)/g;

        qs = qs.split("+").join(" ");

        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }
    },

    View: Backbone.View.extend({
        constructor: function(options, parent) {
            this.properties = options && options.properties ? options.properties : {};
            if (parent && parent.properties) {
                this.properties = _.extend(_.clone(parent.properties), this.properties);
            }
            Backbone.View.prototype.constructor.apply(this, arguments);
        }
    })
 };
},{}],3:[function(require,module,exports){
(function (global){
"use strict";
/*globals Handlebars: true */
var base = require("./handlebars/base");

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)
var SafeString = require("./handlebars/safe-string")["default"];
var Exception = require("./handlebars/exception")["default"];
var Utils = require("./handlebars/utils");
var runtime = require("./handlebars/runtime");

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
var create = function() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = SafeString;
  hb.Exception = Exception;
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function(spec) {
    return runtime.template(spec, hb);
  };

  return hb;
};

var Handlebars = create();
Handlebars.create = create;

/*jshint -W040 */
/* istanbul ignore next */
var root = typeof global !== 'undefined' ? global : window,
    $Handlebars = root.Handlebars;
/* istanbul ignore next */
Handlebars.noConflict = function() {
  if (root.Handlebars === Handlebars) {
    root.Handlebars = $Handlebars;
  }
};

Handlebars['default'] = Handlebars;

exports["default"] = Handlebars;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./handlebars/base":4,"./handlebars/exception":5,"./handlebars/runtime":6,"./handlebars/safe-string":7,"./handlebars/utils":8}],4:[function(require,module,exports){
"use strict";
var Utils = require("./utils");
var Exception = require("./exception")["default"];

var VERSION = "3.0.0";
exports.VERSION = VERSION;var COMPILER_REVISION = 6;
exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1'
};
exports.REVISION_CHANGES = REVISION_CHANGES;
var isArray = Utils.isArray,
    isFunction = Utils.isFunction,
    toString = Utils.toString,
    objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials) {
  this.helpers = helpers || {};
  this.partials = partials || {};

  registerDefaultHelpers(this);
}

exports.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: logger,
  log: log,

  registerHelper: function(name, fn) {
    if (toString.call(name) === objectType) {
      if (fn) { throw new Exception('Arg not supported with multiple helpers'); }
      Utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function(name) {
    delete this.helpers[name];
  },

  registerPartial: function(name, partial) {
    if (toString.call(name) === objectType) {
      Utils.extend(this.partials,  name);
    } else {
      if (typeof partial === 'undefined') {
        throw new Exception('Attempting to register a partial as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function(name) {
    delete this.partials[name];
  }
};

function registerDefaultHelpers(instance) {
  instance.registerHelper('helperMissing', function(/* [args, ]options */) {
    if(arguments.length === 1) {
      // A missing field in a {{foo}} constuct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new Exception("Missing helper: '" + arguments[arguments.length-1].name + "'");
    }
  });

  instance.registerHelper('blockHelperMissing', function(context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if(context === true) {
      return fn(this);
    } else if(context === false || context == null) {
      return inverse(this);
    } else if (isArray(context)) {
      if(context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = createFrame(options.data);
        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
        options = {data: data};
      }

      return fn(context, options);
    }
  });

  instance.registerHelper('each', function(context, options) {
    if (!options) {
      throw new Exception('Must pass iterator to #each');
    }

    var fn = options.fn, inverse = options.inverse;
    var i = 0, ret = "", data;

    var contextPath;
    if (options.data && options.ids) {
      contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (isFunction(context)) { context = context.call(this); }

    if (options.data) {
      data = createFrame(options.data);
    }

    function execIteration(key, i, last) {
      if (data) {
        data.key = key;
        data.index = i;
        data.first = i === 0;
        data.last  = !!last;

        if (contextPath) {
          data.contextPath = contextPath + key;
        }
      }

      ret = ret + fn(context[key], {
        data: data,
        blockParams: Utils.blockParams([context[key], key], [contextPath + key, null])
      });
    }

    if(context && typeof context === 'object') {
      if (isArray(context)) {
        for(var j = context.length; i<j; i++) {
          execIteration(i, i, i === context.length-1);
        }
      } else {
        var priorKey;

        for(var key in context) {
          if(context.hasOwnProperty(key)) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array. 
            if (priorKey) {
              execIteration(priorKey, i-1);
            }
            priorKey = key;
            i++;
          }
        }
        if (priorKey) {
          execIteration(priorKey, i-1, true);
        }
      }
    }

    if(i === 0){
      ret = inverse(this);
    }

    return ret;
  });

  instance.registerHelper('if', function(conditional, options) {
    if (isFunction(conditional)) { conditional = conditional.call(this); }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function(conditional, options) {
    return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
  });

  instance.registerHelper('with', function(context, options) {
    if (isFunction(context)) { context = context.call(this); }

    var fn = options.fn;

    if (!Utils.isEmpty(context)) {
      if (options.data && options.ids) {
        var data = createFrame(options.data);
        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
        options = {data:data};
      }

      return fn(context, options);
    } else {
      return options.inverse(this);
    }
  });

  instance.registerHelper('log', function(message, options) {
    var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
    instance.log(level, message);
  });

  instance.registerHelper('lookup', function(obj, field) {
    return obj && obj[field];
  });
}

var logger = {
  methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

  // State enum
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  level: 1,

  // Can be overridden in the host environment
  log: function(level, message) {
    if (typeof console !== 'undefined' && logger.level <= level) {
      var method = logger.methodMap[level];
      (console[method] || console.log).call(console, message);
    }
  }
};
exports.logger = logger;
var log = logger.log;
exports.log = log;
var createFrame = function(object) {
  var frame = Utils.extend({}, object);
  frame._parent = object;
  return frame;
};
exports.createFrame = createFrame;
},{"./exception":5,"./utils":8}],5:[function(require,module,exports){
"use strict";

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line,
      column;
  if (loc) {
    line = loc.start.line;
    column = loc.start.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  if (loc) {
    this.lineNumber = line;
    this.column = column;
  }
}

Exception.prototype = new Error();

exports["default"] = Exception;
},{}],6:[function(require,module,exports){
"use strict";
var Utils = require("./utils");
var Exception = require("./exception")["default"];
var COMPILER_REVISION = require("./base").COMPILER_REVISION;
var REVISION_CHANGES = require("./base").REVISION_CHANGES;
var createFrame = require("./base").createFrame;

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = REVISION_CHANGES[currentRevision],
          compilerVersions = REVISION_CHANGES[compilerRevision];
      throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
            "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
            "Please update your runtime to a newer version ("+compilerInfo[1]+").");
    }
  }
}

exports.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new Exception("No environment passed to template");
  }
  if (!templateSpec || !templateSpec.main) {
    throw new Exception('Unknown template object: ' + typeof templateSpec);
  }

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  var invokePartialWrapper = function(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
    }

    partial = env.VM.resolvePartial.call(this, partial, context, options);
    var result = env.VM.invokePartial.call(this, partial, context, options);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, options);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new Exception("The partial " + options.name + " could not be compiled when running in runtime-only mode");
    }
  };

  // Just add water
  var container = {
    strict: function(obj, name) {
      if (!(name in obj)) {
        throw new Exception('"' + name + '" not defined in ' + obj);
      }
      return obj[name];
    },
    lookup: function(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function(i) {
      return templateSpec[i];
    },

    programs: [],
    program: function(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = program(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = program(this, i, fn);
      }
      return programWrapper;
    },

    data: function(data, depth) {
      while (data && depth--) {
        data = data._parent;
      }
      return data;
    },
    merge: function(param, common) {
      var ret = param || common;

      if (param && common && (param !== common)) {
        ret = Utils.extend({}, common, param);
      }

      return ret;
    },

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  var ret = function(context, options) {
    options = options || {};
    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      depths = options.depths ? [context].concat(options.depths) : [context];
    }

    return templateSpec.main.call(container, context, container.helpers, container.partials, data, blockParams, depths);
  };
  ret.isTop = true;

  ret._setup = function(options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
    }
  };

  ret._child = function(i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new Exception('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new Exception('must pass parent depths');
    }

    return program(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

exports.template = template;function program(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  var prog = function(context, options) {
    options = options || {};

    return fn.call(container,
        context,
        container.helpers, container.partials,
        options.data || data,
        blockParams && [options.blockParams].concat(blockParams),
        depths && [context].concat(depths));
  };
  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

exports.program = program;function resolvePartial(partial, context, options) {
  if (!partial) {
    partial = options.partials[options.name];
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

exports.resolvePartial = resolvePartial;function invokePartial(partial, context, options) {
  options.partial = true;

  if(partial === undefined) {
    throw new Exception("The partial " + options.name + " could not be found");
  } else if(partial instanceof Function) {
    return partial(context, options);
  }
}

exports.invokePartial = invokePartial;function noop() { return ""; }

exports.noop = noop;function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? createFrame(data) : {};
    data.root = context;
  }
  return data;
}
},{"./base":4,"./exception":5,"./utils":8}],7:[function(require,module,exports){
"use strict";
// Build out our basic SafeString type
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
  return "" + this.string;
};

exports["default"] = SafeString;
},{}],8:[function(require,module,exports){
"use strict";
/*jshint -W004 */
var escape = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
};

var badChars = /[&<>"'`]/g;
var possible = /[&<>"'`]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

exports.extend = extend;var toString = Object.prototype.toString;
exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
var isFunction = function(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  isFunction = function(value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
var isFunction;
exports.isFunction = isFunction;
/* istanbul ignore next */
var isArray = Array.isArray || function(value) {
  return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
};
exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.
function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

exports.indexOf = indexOf;
function escapeExpression(string) {
  // don't escape SafeStrings, since they're already safe
  if (string && string.toHTML) {
    return string.toHTML();
  } else if (string == null) {
    return "";
  } else if (!string) {
    return string + '';
  }

  // Force a string conversion as this will be done by the append regardless and
  // the regex test will do this transparently behind the scenes, causing issues if
  // an object's to string has escaped characters in it.
  string = "" + string;

  if(!possible.test(string)) { return string; }
  return string.replace(badChars, escapeChar);
}

exports.escapeExpression = escapeExpression;function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

exports.isEmpty = isEmpty;function blockParams(params, ids) {
  params.path = ids;
  return params;
}

exports.blockParams = blockParams;function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}

exports.appendContextPath = appendContextPath;
},{}],9:[function(require,module,exports){
// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = require('./dist/cjs/handlebars.runtime').default;

},{"./dist/cjs/handlebars.runtime":3}],10:[function(require,module,exports){
module.exports = require("handlebars/runtime")["default"];

},{"handlebars/runtime":9}],11:[function(require,module,exports){
"use strict";
var comala = require('comala');
module.exports = _.extend(comala, {
    //disable Almond temporarily
    noAMD: function (callback) {
        var cache = null;
        if (typeof define === 'function') {
            cache = define.amd;
            define.amd = null;
            callback();
            define.amd = cache;
        } else {
            callback();
        }
    },
    //Note to Mike: Overriding skull's resize method because of the forced 50px padding.
    resize: function (height, padding) {

        var iframeHeight = _.isNumber(height) && height > 0 ? height : AJS.$('html').outerHeight(true);

        if (_.isNumber(padding) && padding > 0) {
            iframeHeight += padding;
        }

        AJS.$(window.frameElement).attr('height', iframeHeight + 'px');

    },

    analytics: (function () {
        var version = '1.0',
                UAKey = '',
                prefix = '';

        var init = function (GAKey, nameTracker) {
            if (GAKey) {
                this.UAKey = GAKey;

                // Universal Analytics code snippet
                (function (i, s, o, g, r, a, m) {
                    i['GoogleAnalyticsObject'] = r;
                    i[r] = i[r] || function () {
                                (i[r].q = i[r].q || []).push(arguments)
                            }, i[r].l = 1 * new Date();
                    a = s.createElement(o),
                            m = s.getElementsByTagName(o)[0];
                    a.async = 1;
                    a.src = g;
                    m.parentNode.insertBefore(a, m)
                })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

                // Set a unique prefix for multiple GA accounts in same page compatibility
                if (nameTracker) {
                    ga('create', this.UAKey, 'auto', {'name': nameTracker});
                    this.trackName(nameTracker);
                }
                else {
                    ga('create', this.UAKey, 'auto');
                }
            }
            else {
                console.error('UA Key not found');
            }
        };

        var trackPage = function (pageUrl) {
            if (this.UAKey) {
                if (pageUrl) {
                    ga(this.trackName() + 'send', 'pageview', pageUrl);
                }
                else {
                    ga(this.trackName() + 'send', 'pageview');
                }
            }
        };

        var trackEvent = function (category, action, label, value) {
            if (this.UAKey) {
                // value is optional
                if (arguments.length === 4) {
                    ga(this.trackName() + 'send', 'event', category, action, label, value);
                }
                // label is optional
                else if (arguments.length === 3) {
                    ga(this.trackName() + 'send', 'event', category, action, label);
                }
                else {
                    ga(this.trackName() + 'send', 'event', category, action);
                }
            }
        };

        var trackName = function (newPrefix) {
            if (arguments.length > 0) {
                this.prefix = newPrefix + ".";
            } else {
                return this.prefix;
            }
            return this;
        };

        return {
            init: init,
            trackPage: trackPage,
            trackEvent: trackEvent,
            trackName: trackName,
            VERSION: version
        };
    })()

});

},{"comala":2}],12:[function(require,module,exports){
"use strict";
var LoaderView = require('./loader.js');

module.exports = Backbone.View.extend({
    template: require('hbs/inline-dialog.hbs'),
    version: parseFloat(AJS.version).toFixed(2),

    loaded: false,
    loading: false,
    loader: null,

    //values passed to the view
    properties: {
        iframe: false,
        content: '',
        width: 300,
        id: null,
    },

    initialize: function(options) {
        this.options = options;
        this.trigger = AJS.$(this.options.trigger);

        //check if trigger is present (otherwise render will fail)
        if(this.trigger.length){
            this.setup();
        }else{
            //listen to DOM changes to trigger preload
            AJS.$(document).bind("DOMSubtreeModified", $.proxy(this.deferredSetup, this));
        }

        return this;
    },

    setup: function(){
        //set properties passed to the template
        this.properties = this.getProperties();

        //get options for AJS's Inline Dialog
        var render = (this.options.type == 'ajax')?this.options.content:$.proxy(this.render, this);
        var dialogOptions = this.getDialogOptions();

        //instantiante AJS's Inline Dialog
        this.dialog = AJS.InlineDialog(this.trigger, this.id, render, dialogOptions);

        //preload when needed
        if(this.options.preload || this.options.opened){
            this.preload();
        }
    },

    //This method is bound to dom change event to trigger setup ONLY when the trigger is present.
    deferredSetup: function(event){
        if(AJS.$(this.options.trigger).length){
            //remove the event listener now that it's not needed anymore
            AJS.$(document).unbind("DOMSubtreeModified", $.proxy(this.deferredSetup, this));

            //re-set the trigger object now that it is present on the DOM
            this.trigger = AJS.$(this.options.trigger);

            //NEVER do this before unbinding the event from the document, or you'll get into a 'Maximum call stack size exceed' error.
            this.setup();
        }
    },

    //get values for the template
    getProperties: function(){
        return {
            iframe: (this.options.type == 'iframe'),
            content: this.options.content,
            width: this.options.width,
            id: this.id
        }
    },

    //get options for AJS's API
    getDialogOptions: function(){
        var gravity = this.getGravity(this.options.align);
        var dialogOptions = {
            'gravity'                : gravity,
            'onHover'                : (this.options.respondsTo == 'hover'),
            'useLiveEvents'            : this.options.liveEvents,
            'persistent'            : this.options.persistent,
            'closeOnTriggerClick'    : (this.options.respondsTo == 'toggle'),
            'width'                    : this.options.width,
            'initCallback'            : this.options.onOpen,
            'hideCallback'            : this.options.onClose,
        }


        if(this.version >= 5.5){
            dialogOptions.offsetX = $.proxy(this.getOffsetX, this);
            dialogOptions.offsetY = $.proxy(this.getOffsetY, this);
        }else{
            //older inline-dialog's API does not accept functions as offset parameters, so, precalculate
            dialogOptions.offsetX = this.getOffsetX();
            dialogOptions.offsetY = this.getOffsetY();
        }

        return dialogOptions;
    },

    //method that renders the inline dialog's contents
    render: function(content, trigger, showPopup){
        if(!this.loading && !this.loaded){
            this.$el = content.parent();
            content.css({'padding': this.options.padding});
            content.html(this.template(this.properties));
            showPopup();
            if(this.options.loader && !this.loader){
                this.loader = new LoaderView({el:content, width: this.options.width});
            }
            this.startLoading();
        }else{
            showPopup();
        }
        return false;
    },

    //open the inline dialog
    open: function(event){
        this.dialog.show(event);
        return this;
    },

    //close the inline dialog
    close: function(event){
        this.dialog.hide(event);
        return this;
    },

    //preload the iframe.
    preload: function(event){
        this.open(event);
        if(!this.options.opened){
            this.close(event);
        }
        return this;
    },

    startLoading: function(){
        if(this.loader){
            this.loader.spin();
        }

        this.loading = true;
    },

    //bind this method to the iframe's dom load event through the controller.
    stopLoading: function(event){
        if(this.loader){
            this.loader.stop();
        }
        this.loading = false;
        this.loaded = true;
        //execute callback
        if(_.isFunction(this.options.onLoad)){
            this.options.onLoad(event);
        }
    },

    //translate inline-dialog-2 alignment property to inline-dialog gravity property
    getGravity: function(){
        var align = this.options.align.split(' ');
        switch(align[0]){
            case 'right':
                return 'w';
            break;
            case 'left':
                return 'e';
            break;
            case 'bottom':
                return 'n';
            break;
            case 'top':
                return 's';
            break;
        }
    },

    //get vertical offset based on inline-dialog-2 alignment property
    //FIXME: positioning for side alignments (right|left bottom|middle)
    getOffsetY: function(popup, targetPosition, mousePosition, opts){
        var align = this.options.align.split(' ');
        var target = targetPosition && targetPosition.target?targetPosition.target:this.trigger;
        var height = popup?popup.outerHeight():10;
        var yPos =  target.outerHeight();

        if((align[0] == 'right' || align[0] == 'left') && align[1]!== 'top'){
            //calculate position based on dialog's height and trigger's height
            var yPos = height - target.outerHeight();
            //center it if needed
            if(align[1] == 'middle'){
                yPos = yPos/2;
            }

            yPos = yPos*-1;
        }

        return yPos;
    },

    //get horizontal offset based on inline-dialog-2 alignment property
    getOffsetX: function(popup, targetPosition, mousePosition, opts){
        var align = this.options.align.split(' ');
        var target = targetPosition && targetPosition.target?targetPosition.target:this.trigger;
        var width = popup?popup.outerWidth():this.options.width+2;
        var xPos = target.outerWidth();

        if((align[0] == 'top' || align[0] == 'bottom') && align[1]!='right'){
            //calculate position based on dialog's width and trigger's width
            xPos = width-target.outerWidth();

            //center it if needed
            if(align[1] == 'center'){
                xPos = xPos/2;
            }

            //get the sidebar's current width and add a 10px margin space
            var sidebarWidth = AJS.$('.ia-fixed-sidebar').width()+10;

            var offset = target.offset();

            //if the calculated position will overlap sidebar, then...
            if(_.isObject(offset) && offset.left < (xPos + sidebarWidth)){
                xPos = offset.left - sidebarWidth;
            }
            xPos = xPos*-1;
        }

        return xPos;
    }

});

},{"./loader.js":13,"hbs/inline-dialog.hbs":14}],13:[function(require,module,exports){
"use strict";

module.exports = Backbone.View.extend({
	template: require('hbs/loader.hbs'),
	spinning: false,
	defaults: {
		width: 100,
		height: 50,
		style: 'block',
		text: "loading..."
	},
	initialize: function(options){
		this.options = _.extend(this.defaults, options);

		if(this.options.width){
			this.$el.css('min-width', this.options.width);
		}else{
			this.$el.css('min-width', this.$el.width());
		}
		if(this.options.height){
			this.$el.css('min-height', this.options.height);
		}else{
			this.$el.css('min-height', this.$el.height());
		}

		this.render();
		return this;
	},
	render: function(){
		this.$el.append(this.template(this.options));
	},
	spin: function(){
		this.$el.find('.cml-loading').show();
		this.$el.find('.cml-loading__icon').spin();
		this.spinning = true;
	},
	stop: function(){
		this.$el.find('.cml-loading').hide();
		this.$el.find('.cml-loading__icon').spinStop();
		this.spinning = false;
	},
});

},{"hbs/loader.hbs":15}],14:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n	<iframe id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "-iframe\" src=\""
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "\" width=\""
    + alias3(((helper = (helper = helpers.width || (depth0 != null ? depth0.width : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"width","hash":{},"data":data}) : helper)))
    + "\" height=\"0\" frameborder=\"0\" scrolling=\"no\" class=\"cml-iframe\" ALLOWTRANSPARENCY=\"true\"></iframe>\n\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "\n	"
    + this.escapeExpression(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.iframe : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

},{"hbsfy/runtime":10}],15:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"cml-loading cml-"
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + "\">\n	<span class=\"cml-loading__text\">\n		<span class=\"cml-loading__icon\"></span>\n		<span class=\"cml-loading__label\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</span>\n	</span>\n</div>\n";
},"useData":true});

},{"hbsfy/runtime":10}],16:[function(require,module,exports){
"use strict";
var comala = require('comala');
var InlineDialogView = require('views/inline-dialog.js');

module.exports = Backbone.View.extend({
    defaults: {
        'type'          : 'content',
        'width'         : 300,
        'padding'       : 10,
        'trigger'       : null,
        'respondsTo'    : 'toggle',
        'liveEvents'    : false,
        'align'         : 'right middle',
        'persistent'    : false,
        'preload'       : false,
        'content'       : '',
        'opened'        : false,
        'callbacks'     : {
            'beforeopen': null,
            'open'      : null,
            'close'     : null,
            'load'      : null,
        },
        'action'        : '',
        'loader'        : true,
    },

    initialize: function(options) {
        this.options = _.extend(this.defaults, options);

        //setup callbacks
        this.options.onOpen = $.proxy(this.onBeforeOpen, this); //AUI's onOpen callback fires when inline-dialog is not yet visible
        this.options.onClose = $.proxy(this.onClose, this);
        this.options.onLoad = $.proxy(this.onLoad, this);
        //AUI does not provide a proper callback for when inline-dialog is shown, but a 'showLayer' event is thrown at document level
        AJS.$(document).bind('showLayer', $.proxy(this.onOpen, this));

        //setup trigger
        this.trigger = AJS.$(this.options.trigger);

        //use required view
        this.dialog = new InlineDialogView(this.options);

        //action is required to show/hide spinner, based on "load" event thrown by the module view loaded inside the iframe
        this.action = this.options.action?this.options.action:this.id;

        //bind open events to their correspondent methods
        comala.require('events', function(events){
            //binding events to inline-dialog's id to prevent opening/closing of wrong dialog
            events.bind('cm:'+this.id+'.open', this.open, this);
            events.bind('cm:'+this.id+'.close', this.close, this);
            //load event is bound to event thrown by the loaded module instead
            events.bind('cm:'+this.action+'.load', this.load, this);
        }, this);

        return this.dialog;
    },

    //show
    open: function(event){
        this.dialog.open(event);
        return this;
    },

    //hide
    close: function(event){
        this.dialog.close(event);
        return this;
    },

    //reload (if needed)
    reload: function(){
        if(this.loaded()){
            this.dialog.startLoading();
        }
        return this;
    },

    //stop loading
    load: function(event){
        this.dialog.stopLoading(event);
        this.onLoad();
        return this;
    },

    //check if dialog already loaded
    loaded: function(){
        return this.dialog.loaded;
    },

    //throw event before dialog opens
    onBeforeOpen: function(){
        comala.require('events', function(events){
            events.trigger('cm:'+this.id+'.opening');
            events.trigger('cm:'+this.action+'.opening');
        }, this);
        this.dialog.$el.addClass('active');
        if(_.isFunction(this.options.callbacks.beforeopen)){
            this.options.callbacks.beforeopen();
        }
    },

    //throw event after dialog opens
    onOpen: function(event, type, inlinedialog){
        if(type == 'inlineDialog' && inlinedialog.id == this.id){
            comala.require('events', function(events){
                events.trigger('cm:'+this.id+'.opened');
                events.trigger('cm:'+this.action+'.opened');
            }, this);
            if(_.isFunction(this.options.callbacks.open)){
                this.options.callbacks.open();
            }
        }
    },

    //throw event on dialog close
    onClose: function(){
        comala.require('events', function(events){
            events.trigger('cm:'+this.id+'.closed');
            events.trigger('cm:'+this.action+'.closed');
        }, this);
        this.dialog.$el.removeClass('active');
        if(_.isFunction(this.options.callbacks.close)){
            this.options.callbacks.close();
        }
    },

    //throw event on iframe load
    onLoad: function(){
        comala.require('events', function(events){
            events.trigger('cm:'+this.id+'.loaded');
            events.trigger('cm:'+this.action+'.loaded');
        }, this);
        if(_.isFunction(this.options.callbacks.load)){
            this.options.callbacks.load();
        }
    }

});

},{"comala":2,"views/inline-dialog.js":12}]},{},[1]);

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'js/inline-tasks.js' */
(function(f){function e(m){var h,n;if(m.offsetX===undefined){var l=0,k=0,j=m.target,i;do{if(j.scrollTop!=0||j.scrollLeft!=0){i=j}l+=j.offsetLeft;k+=j.offsetTop;j=j.offsetParent}while(j&&j!=j.offsetParent);h=m.pageX+(i?i.scrollLeft:0)-l;n=m.pageY+(i?i.scrollTop:0)-k}else{h=m.offsetX;n=m.offsetY}return h>=3&&h<=14&&n>=3&&n<=14}function d(h){return h.currentTarget===h.target}function c(i){var h="page";if(i.closest("table.tasks-report").length){h="report"}else{if(i.closest("#task-container").length){h="mytasks"}else{if(i.closest("ul.inline-task-list").length){h="task"}}}return h}function g(k,i){var h=k.attr("data-inline-task-id");var j=k.find(i).first();if(j.closest("li").attr("data-inline-task-id")===h){return j}else{return f()}}var a=false;f(window).bind("beforeunload",function(){a=true});var b=[];f(document).delegate("ul.inline-task-list > li[data-inline-task-id]",{click:function(m){if(d(m)&&e(m)){var k=f(m.target).toggleClass("checked"),h=k.hasClass("checked")?"CHECKED":"UNCHECKED",j=k.data("inline-task-id"),n=k.closest("ul").attr("data-inline-tasks-content-id")||AJS.params.pageId,i=AJS.contextPath()+"/rest/inlinetasks/1/task/"+n+"/"+j+"/";k.prop("disabled",true);var l=k.closest("tr");l.attr("aria-disabled",true);b.push(j);AJS.trigger("inline-tasks.status-update.start",{status:h,taskId:j,taskListQueue:b});f.ajax({type:"POST",url:i,data:{status:h,trigger:"VIEW_PAGE"},dataType:"text",timeout:30000,error:function(p,r,o){if(a||r==="timeout"){return}AJS.logError("Inline Task #"+j+" was not persisted to "+h+" because of "+o+" (status: "+r+")");k.toggleClass("checked");var q;if(p.status===403){q=new Confluence.InlineTasks.Notice({textMessage:"Oops! You can\'t update this task because you are not allowed to edit the page it appears on.",className:"forbidden-notice"})}else{q=new Confluence.InlineTasks.Notice()}q.show()},success:function(){var o={dueDate:g(k,"time").attr("datetime"),completionDate:moment().format("YYYY-MM-DD"),mode:"view",assigneeUsername:g(k,".user-mention").attr("data-username"),context:c(k)};if(h==="CHECKED"){AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent("confluence-spaces.tasks.completed",o):AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.completed",data:o})}}}).always(function(){k.prop("disabled",false);var o=k.closest("tr");o.attr("aria-disabled",false);b.splice(AJS.indexOf(b,j),1);AJS.trigger("inline-tasks.status-update.complete",{status:h,taskId:j,taskListQueue:b})})}},mousemove:function(h){if(d(h)){if(e(h)){f(h.target).addClass("hover")}else{f(h.target).removeClass("hover")}}},mouseout:function(h){if(d(h)){f(h.target).removeClass("hover")}},mousedown:function(h){if(d(h)&&e(h)){f(h.target).addClass("task-active")}},mouseup:function(h){if(d(h)&&e(h)){f(h.target).removeClass("task-active")}}});f("ul.inline-task-list li:not(.checked) time.date-upcoming").tooltip({title:function(){return "This task is due in less than a week"},live:true});f("ul.inline-task-list li:not(.checked) time.date-past").tooltip({title:function(){return "This task is overdue"},live:true});f("span.emptycompletedate").tooltip({title:function(){return "A completion date wasn\'t recorded for this task"},live:true});f(document).on("click","time",function(){var i=f(this);var h={date:i.attr("datetime"),mode:"view",context:c(i)};AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent("confluence-spaces.date.clicked",h):AJS.trigger("analyticsEvent",{name:"confluence-spaces.date.clicked",data:h})})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'js/inline-tasks-alert.js' */
Confluence.InlineTasks=Confluence.InlineTasks||{};(function(b){var a=function(c){this.settings=b.extend({},a.DEFAULTS,c);this.template=Confluence.InlineTasks.Templates;b("#inline-tasks-notice").remove();var d=b(this.template.notice(this.settings));d.hide().appendTo("body");d.find(".notice-close").click(function(){d.hide()});this.$notice=d};a.DEFAULTS={textMessage:"Oops! Your task change couldn\'t be saved. \u003cbr\/>There could be a few reasons for this.",className:"general-notice"};a.prototype.show=function(){this.$notice.show();return this};a.prototype.hide=function(){this.$notice.hide();return this};Confluence.InlineTasks.Notice=a}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'templates/inline-tasks.soy' */
// This file was automatically generated from inline-tasks.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.InlineTasks == 'undefined') { Confluence.InlineTasks = {}; }
if (typeof Confluence.InlineTasks.Templates == 'undefined') { Confluence.InlineTasks.Templates = {}; }


Confluence.InlineTasks.Templates.notice = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-message error', (opt_data.className) ? ' ' + soy.$$escapeHtml(opt_data.className) : '', '" id="inline-tasks-notice">', opt_data.textMessage, '&nbsp;&nbsp;<a href="#" class="notice-close">', soy.$$escapeHtml("Dismiss"), '</a></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:sortable-table-server-side', location = 'js/jquery.tablesorter.serveronly.js' */
(function(a){a.extend({tablesorterServerOnly:new function(){this.defaults={classNameDisableSorting:"aui-table-column-unsortable",classNameHeaderDesc:"tablesorter-headerDesc",classNameHeaderAsc:"tablesorter-headerAsc",reverseSort:false,sortColumn:"",onInit:function(){},onSort:function(){},events:{clickHeader:"click.sortServerOnly",refreshHeader:"refreshHeader.sortServerOnly",simulateClickHeader:"simulateClickHeader.sortServerOnly"}};var b=this;var d={updateCurrentHeaderSort:function(e,f){d.resetHeadersSort(e,f);f.$headers.each(function(){var h=a(this),g=h.attr("data-column-name");var i=f.reverseSort;if(g===f.sortColumn){i?h.addClass(f.classNameHeaderDesc):h.addClass(f.classNameHeaderAsc)}})},resetHeadersSort:function(e,f){f.$headers.removeClass(f.classNameHeaderDesc).removeClass(f.classNameHeaderAsc)},prepareHTMLHeader:function(e,f){f.$headers.not("."+f.classNameDisableSorting).attr("unselectable","on").bind("selectstart",false).addClass("tablesorter-header").wrapInner("<span class='aui-table-header-content'/>")},bindEvents:function(f,g){var e=a(f);e.on(g.events.refreshHeader,function(){d.updateCurrentHeaderSort(f,g)});e.on(g.events.simulateClickHeader,function(i,j,h){g.reverseSort=h;g.sortColumn=j})}};var c=function(f,g){var e=a(f);g.$table=e;g.$headers=e.find("thead th");g.$tbodies=e.find("tbody");d.prepareHTMLHeader(f,g);d.updateCurrentHeaderSort(f,g);if(typeof g.onInit==="function"){g.onInit.apply(f,[g])}g.$headers.on(g.events.clickHeader,function(){var h=a(this);if(h.hasClass(g.classNameDisableSorting)){return false}var i=h.attr("data-column-name");if(i===g.sortColumn){g.reverseSort=!g.reverseSort}else{g.reverseSort=false}g.sortColumn=i;if(typeof g.onSort==="function"){g.onSort.apply(f,[g])}return false});d.bindEvents(f,g)};b.construct=function(e){return this.each(function(){var f=this,g=a.extend(true,{},a.tablesorterServerOnly.defaults,e);if(this.config&&f.hasInitialized&&a.tablesorter){a.tablesorter.destroy(f,false,function(){c(f,g)})}else{c(f,g)}})}}()});a.fn.extend({tablesorterServerOnly:a.tablesorterServerOnly.construct})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:sortable-table-server-side', location = 'js/tasks-table-sortable.js' */
(function(a){var b=function(d){this.ajaxUrl=d.ajaxUrl;this.restUrlPagination=d.restUrlPagination;this.$wrapper=d.$wrapper;this.table=d.table;this.$table=a(this.table);this.analyticEventKey=d.analyticEventKey;this.sortColumnDefault=d.sortColumnDefault||"duedate";this.sortReverseSortDefault=d.sortReverseSortDefault||false;this.reportParametersDefault=d.reportParametersDefault;this.pageIndex=d.pageIndex||0;this.pageSize=d.pageSize||10;this.pageTotal=d.pageTotal||0;this.pageLimit=d.pageLimit||7;this.adaptive=d.adaptive;this.columns=d.columns;this.templates=d.templates;this.onRenderEmptyTable=d.onRenderEmptyTable;this.onBusySorting=d.onBusySorting};b.getColumnNameFromSortBy=function(e){var d={"due date":"duedate","page title":"location",assignee:"assignee"};return d[e]?d[e]:"duedate"};b.getSortByFromColumnName=function(d){var e={duedate:"due date",location:"page title"};return e[d]?e[d]:d};b.prototype.updateOptions=function(d){a.extend(this,d);this.$table=a(this.table)};b.prototype.getCurrentPageIndex=function(){var e=this.$wrapper.find(".macro-auto-pagination").last();var d=parseInt(e.attr("data-initial-page-index"),10);return isNaN(d)?0:d};b.prototype.renderPagination=function(e,g){var d=this;if(!e){e=d.$table}if(!g){g=d.reportParametersDefault}this.$wrapper.find(".macro-auto-pagination").remove();if(!(d.pageTotal>1)){return}c.UI.Components.Pagination.build({scope:e,pageSize:d.pageSize,totalPages:d.pageTotal,pageLimit:d.pageLimit,path:d.restUrlPagination,adaptive:d.adaptive,currentPage:d.pageIndex,data:{reportParameters:JSON.stringify(g)},success:function f(h,j){var k={task:h,columns:d.columns};var i=d.templates.tasksReportLine(k);j.append(i)}})};b.prototype.toggleBusyState=function(d){this.$wrapper.attr("data-loading",d);if(d){this.$wrapper.find(".task-blanket").show()}else{this.$wrapper.find(".task-blanket").hide()}if(typeof this.onBusySorting==="function"){this.onBusySorting.apply(this,[d])}};b.prototype.renderTable=function(e){var d=this;var f=_.map(e,function(g){return d.templates.tasksReportLine({task:g,columns:d.columns})}).join("");d.$table.find("tbody").html(f)};b.prototype._triggerAnalyticsSorting=function(){var d=this.analyticEventKey;var e={column:this.sortColumn,direction:this.reverseSort?"desc":"asc"};AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent(d,e):AJS.trigger("analyticsEvent",{name:d,data:e})};b.prototype._buildAjaxData=function(e){var d={url:this.ajaxUrl,cache:false,dataType:"json",data:{pageIndex:this.pageIndex,pageSize:this.pageSize,reportParameters:JSON.stringify(e)}};return d};b.prototype.init=function(){var d=this;d.sortColumn=d.sortColumnDefault;d.reverseSort=d.sortReverseSortDefault;this.$table.tablesorterServerOnly({sortColumn:d.sortColumn,reverseSort:d.reverseSort,onInit:function(){var e=a(this);e.addClass("aui-table-sortable")},onSort:function(i){var h=this,f=a(h);d.pageIndex=d.getCurrentPageIndex();d.sortColumn=i.sortColumn;d.reverseSort=i.reverseSort;d.toggleBusyState(true);var g=a.extend({},d.reportParametersDefault,{sortColumn:b.getSortByFromColumnName(d.sortColumn),reverseSort:d.reverseSort});var e=d._buildAjaxData(g);a.ajax(e).done(function(j){d.pageIndex=d.getCurrentPageIndex();d.pageTotal=j.totalPages;if(d.pageIndex===0&&d.pageTotal===0){if(typeof d.onRenderEmptyTable==="function"){d.$wrapper.find(".macro-auto-pagination").remove();f.remove();d.onRenderEmptyTable.apply(d)}return}d.renderTable(j.detailLines);d.renderPagination(null,g);f.trigger("refreshHeader.sortServerOnly");d._triggerAnalyticsSorting()}).fail(function(){var j=new c.InlineTasks.Notice({textMessage:"We can\'t sort your tasks right now. Refresh the page to try again.",className:"forbidden-notice"});j.show()}).always(function(){d.toggleBusyState(false)})}})};var c=window.Confluence||{};c.InlineTasks=c.InlineTasks||{};c.InlineTasks.TasksTableSortable=b})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:pagination', location = '/js/pagination.js' */
(function(e,c){var d=function(j,k,i){var h=j.find("a").attr("aria-disabled",i);if(i){h.attr("disabled","disabled")}else{h.removeAttr("disabled");var g=e(".aui-nav-selected",j).data("index")+1;j.find(".aui-nav-next > a").attr("aria-disabled",g==k);j.find(".aui-nav-previous > a").attr("aria-disabled",g==1)}};var b={scope:null,success:null,data:null,path:"",url:"#",pageLimit:7,currentPage:0,adaptive:false,totalPages:0,pageSize:0};var f=function(i,j,k){var g=Math.floor(k/2);var h=j-1;if(!k||j<=k||i-g<0){return 0}if(i+g>h){return j-k}return i-g};var a=function(l){var k=l.totalPages,j=l.currentPage,m=l.pageLimit,h=l.adaptive,g;if(m){if(h){k=j+m}g=m}else{g=k}var i=f(j,k,m);return Confluence.UI.Components.Pagination.Templates.paginationFooter({currentPage:j||0,startPage:i,itemsToRender:g,totalPages:k,pageSize:l.pageSize,url:l.url||"#"})};c.build=function(j){var h=_.extend({},b,j);if(typeof h.success!=="function"){h.success=function(){}}var k=a(h);h.scope.after(k);var i=h.scope.next();var g=i.data("initial-page-index");i.on("click","a",function(p){var o=e(this),r=o.parents("ol").prev(),n=r.is("table")?r:r.find("table");var l=n.data("pageIndex")||g,q=o.parent("li");if(q.hasClass("aui-nav-selected")||q.find("> a[aria-disabled=true]").length){return}if(q.hasClass("aui-nav-next")){l++}else{if(q.hasClass("aui-nav-previous")){l--}else{l=q.data("index")}}d(i,h.totalPages,true);var m=e.extend({},{pageSize:h.pageSize,pageIndex:l},h.data);e.getJSON(Confluence.getContextPath()+h.path,m).done(function(t){l=t.currentPage;var s=n.find("tbody");s.find("tr").remove();n.data("pageIndex",l);_.each(t.detailLines,function(v){h.success(v,s)});AJS.trigger("ui.components.pagination.updated",[t,h]);var u=e.extend({},h,{totalPages:t.totalPages,adaptive:t.adaptive,currentPage:l});i.html(a(u));d(i,u.totalPages,false)}).fail(function(){d(i,h.totalPages,false)});p.preventDefault()})}})(AJS.$,window.Confluence.UI.Components.Pagination);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:pagination', location = '/soy/pagination.soy' */
// This file was automatically generated from pagination.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.Pagination == 'undefined') { Confluence.UI.Components.Pagination = {}; }
if (typeof Confluence.UI.Components.Pagination.Templates == 'undefined') { Confluence.UI.Components.Pagination.Templates = {}; }


Confluence.UI.Components.Pagination.Templates.paginationFooter = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol class="aui-nav aui-nav-pagination macro-auto-pagination" data-page-size="', soy.$$escapeHtml(opt_data.pageSize), '" data-initial-page-index="', soy.$$escapeHtml(opt_data.currentPage), '"><li class="aui-nav-previous"><a href="#"', (opt_data.currentPage == 0) ? 'aria-disabled="true"' : '', '>', soy.$$escapeHtml("Prev"), '</a></li>');
  var startIdx__soy14 = opt_data.startPage + 1;
  var currentIdx__soy15 = opt_data.currentPage + 1;
  var endIdx__soy16 = startIdx__soy14 + opt_data.itemsToRender;
  var totalRange__soy17 = opt_data.totalPages + 1;
  var indexInit18 = startIdx__soy14;
  var indexLimit18 = endIdx__soy16 < totalRange__soy17 ? endIdx__soy16 : totalRange__soy17;
  for (var index18 = indexInit18; index18 < indexLimit18; index18++) {
    output.append((index18 == currentIdx__soy15) ? '<li class="aui-nav-selected" data-index="' + soy.$$escapeHtml(index18 - 1) + '">' + soy.$$escapeHtml(index18) + '</li>' : '<li data-index="' + soy.$$escapeHtml(index18 - 1) + '"><a href="#">' + soy.$$escapeHtml(index18) + '</a></li>');
  }
  output.append('<li class="aui-nav-next"><a href="', soy.$$escapeHtml(opt_data.url), '"', (currentIdx__soy15 == opt_data.totalPages) ? 'aria-disabled="true"' : '', '>', soy.$$escapeHtml("Next"), '</a></li></ol>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:blank-placeholder-box', location = 'soy/blank-placeholder-box.soy' */
// This file was automatically generated from blank-placeholder-box.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.BlankPlaceholderBox == 'undefined') { Confluence.UI.Components.BlankPlaceholderBox = {}; }
if (typeof Confluence.UI.Components.BlankPlaceholderBox.Templates == 'undefined') { Confluence.UI.Components.BlankPlaceholderBox.Templates = {}; }


Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="blank-placeholder-box ', (opt_data.customClass) ? soy.$$escapeHtml(opt_data.customClass) : '', '"><div class="content"><h2>', soy.$$escapeHtml(opt_data.blankTitle), '</h2><p>', soy.$$escapeHtml(opt_data.blankDescription), '</p></div>', (opt_data.customHtml) ? opt_data.customHtml : '', '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-table-sortable', location = 'js-vendor/jquery/jquery.tablesorter.js' */
/*
 * TableSorter 2.10.8 - Client-side table sorting with ease!
 * @requires jQuery v1.2.6+
 *
 * Copyright (c) 2007 Christian Bach
 * Examples and docs at: http://tablesorter.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @type jQuery
 * @name tablesorter
 * @cat Plugins/Tablesorter
 * @author Christian Bach/christian.bach@polyester.se
 * @contributor Rob Garrison/https://github.com/Mottie/tablesorter
 */
!(function(B){B.extend({tablesorter:new function(){var C=this;C.version="2.10.8";C.parsers=[];C.widgets=[];C.defaults={theme:"default",widthFixed:false,showProcessing:false,headerTemplate:"{content}",onRenderTemplate:null,onRenderHeader:null,cancelSelection:true,dateFormat:"mmddyyyy",sortMultiSortKey:"shiftKey",sortResetKey:"ctrlKey",usNumberFormat:true,delayInit:false,serverSideSorting:false,headers:{},ignoreCase:true,sortForce:null,sortList:[],sortAppend:null,sortInitialOrder:"asc",sortLocaleCompare:false,sortReset:false,sortRestart:false,emptyTo:"bottom",stringTo:"max",textExtraction:"simple",textSorter:null,widgets:[],widgetOptions:{zebra:["even","odd"]},initWidgets:true,initialized:null,tableClass:"tablesorter",cssAsc:"tablesorter-headerAsc",cssChildRow:"tablesorter-childRow",cssDesc:"tablesorter-headerDesc",cssHeader:"tablesorter-header",cssHeaderRow:"tablesorter-headerRow",cssIcon:"tablesorter-icon",cssInfoBlock:"tablesorter-infoOnly",cssProcessing:"tablesorter-processing",selectorHeaders:"> thead th, > thead td",selectorSort:"th, td",selectorRemove:".remove-me",debug:false,headerList:[],empties:{},strings:{},parsers:[]};function O(Y){if(typeof console!=="undefined"&&typeof console.log!=="undefined"){console.log(Y)}else{alert(Y)}}function I(Y,Z){O(Y+" ("+(new Date().getTime()-Z.getTime())+"ms)")}C.log=O;C.benchmark=I;function F(b,a,Y){if(!a){return""}var e=b.config,Z=e.textExtraction,d="";if(Z==="simple"){if(e.supportsTextContent){d=a.textContent}else{d=B(a).text()}}else{if(typeof Z==="function"){d=Z(a,b,Y)}else{if(typeof Z==="object"&&Z.hasOwnProperty(Y)){d=Z[Y](a,b,Y)}else{d=e.supportsTextContent?a.textContent:B(a).text()}}}return B.trim(d)}function J(e,g,c,b){var d,Z=C.parsers.length,Y=false,a="",f=true;while(a===""&&f){c++;if(g[c]){Y=g[c].cells[b];a=F(e,Y,b);if(e.config.debug){O("Checking if value was empty on row "+c+", column: "+b+': "'+a+'"')}}else{f=false}}while(--Z>=0){d=C.parsers[Z];if(d&&d.id!=="text"&&d.is&&d.is(a,e,Y)){return d}}return C.getParserById("text")}function K(k){var j=k.config,d=j.$tbodies=j.$table.children("tbody:not(."+j.cssInfoBlock+")"),m,g,b,e,f,Y,a,Z="";if(d.length===0){return j.debug?O("*Empty table!* Not building a parser cache"):""}m=d[0].rows;if(m[0]){g=[];b=m[0].cells.length;for(e=0;e<b;e++){f=j.$headers.filter(":not([colspan])");f=f.add(j.$headers.filter('[colspan="1"]')).filter('[data-column="'+e+'"]:last');Y=j.headers[e];a=C.getParserById(C.getData(f,Y,"sorter"));j.empties[e]=C.getData(f,Y,"empty")||j.emptyTo||(j.emptyToBottom?"bottom":"top");j.strings[e]=C.getData(f,Y,"string")||j.stringTo||"max";if(!a){a=J(k,m,-1,e)}if(j.debug){Z+="column:"+e+"; parser:"+a.id+"; string:"+j.strings[e]+"; empty: "+j.empties[e]+"\n"}g.push(a)}}if(j.debug){O(Z)}j.parsers=g}function X(q){var l=q.tBodies,d=q.config,n,Y,o=d.parsers,r,p,f,e,a,g,h,m,Z=[];d.cache={};if(!o){return d.debug?O("*Empty table!* Not building a cache"):""}if(d.debug){m=new Date()}if(d.showProcessing){C.isProcessing(q,true)}for(a=0;a<l.length;a++){d.cache[a]={row:[],normalized:[]};if(!B(l[a]).hasClass(d.cssInfoBlock)){n=(l[a]&&l[a].rows.length)||0;Y=(l[a].rows[0]&&l[a].rows[0].cells.length)||0;for(f=0;f<n;++f){g=B(l[a].rows[f]);h=[];if(g.hasClass(d.cssChildRow)){d.cache[a].row[d.cache[a].row.length-1]=d.cache[a].row[d.cache[a].row.length-1].add(g);continue}d.cache[a].row.push(g);for(e=0;e<Y;++e){r=F(q,g[0].cells[e],e);p=o[e].format(r,q,g[0].cells[e],e);h.push(p);if((o[e].type||"").toLowerCase()==="numeric"){Z[e]=Math.max(Math.abs(p)||0,Z[e]||0)}}h.push(d.cache[a].normalized.length);d.cache[a].normalized.push(h)}d.cache[a].colMax=Z}}if(d.showProcessing){C.isProcessing(q)}if(d.debug){I("Building cache for "+n+" rows",m)}}function V(u,s){var v=u.config,w=u.tBodies,d=[],g=v.cache,f,h,a,e,x,Z,t,q,p,o,Y,m;if(!g[0]){return }if(v.debug){m=new Date()}for(p=0;p<w.length;p++){x=B(w[p]);if(x.length&&!x.hasClass(v.cssInfoBlock)){Z=C.processTbody(u,x,true);f=g[p].row;h=g[p].normalized;a=h.length;e=a?(h[0].length-1):0;for(t=0;t<a;t++){Y=h[t][e];d.push(f[Y]);if(!v.appender||!v.removeRows){o=f[Y].length;for(q=0;q<o;q++){Z.append(f[Y][q])}}}C.processTbody(u,Z,false)}}if(v.appender){v.appender(u,d)}if(v.debug){I("Rebuilt table",m)}if(!s){C.applyWidget(u)}B(u).trigger("sortEnd",u)}function Q(u){var r=[],a={},q=0,h=B(u).find("thead:eq(0), tfoot").children("tr"),f,e,d,b,o,s,p,Y,n,g,m,Z;for(f=0;f<h.length;f++){s=h[f].cells;for(e=0;e<s.length;e++){o=s[e];p=o.parentNode.rowIndex;Y=p+"-"+o.cellIndex;n=o.rowSpan||1;g=o.colSpan||1;if(typeof (r[p])==="undefined"){r[p]=[]}for(d=0;d<r[p].length+1;d++){if(typeof (r[p][d])==="undefined"){m=d;break}}a[Y]=m;q=Math.max(m,q);B(o).attr({"data-column":m});for(d=p;d<p+n;d++){if(typeof (r[d])==="undefined"){r[d]=[]}Z=r[d];for(b=m;b<m+g;b++){Z[b]="x"}}}}u.config.columns=q;return a}function H(Y){return(/^d/i.test(Y)||Y===1)}function S(j){var a=Q(j),Y,b,e,d,k,g,Z,f=j.config;f.headerList=[];f.headerContent=[];if(f.debug){Z=new Date()}d=f.cssIcon?'<i class="'+f.cssIcon+'"></i>':"";f.$headers=B(j).find(f.selectorHeaders).each(function(c){b=B(this);Y=f.headers[c];f.headerContent[c]=this.innerHTML;k=f.headerTemplate.replace(/\{content\}/g,this.innerHTML).replace(/\{icon\}/g,d);if(f.onRenderTemplate){e=f.onRenderTemplate.apply(b,[c,k]);if(e&&typeof e==="string"){k=e}}this.innerHTML='<div class="tablesorter-header-inner">'+k+"</div>";if(f.onRenderHeader){f.onRenderHeader.apply(b,[c])}this.column=a[this.parentNode.rowIndex+"-"+this.cellIndex];this.order=H(C.getData(b,Y,"sortInitialOrder")||f.sortInitialOrder)?[1,0,2]:[0,1,2];this.count=-1;this.lockedOrder=false;g=C.getData(b,Y,"lockedOrder")||false;if(typeof g!=="undefined"&&g!==false){this.order=this.lockedOrder=H(g)?[1,1,1]:[0,0,0]}b.addClass(f.cssHeader);f.headerList[c]=this;b.parent().addClass(f.cssHeaderRow);b.attr("tabindex",0)});L(j);if(f.debug){I("Built headers:",Z);O(f.$headers)}}function P(Z,Y,b){var a=Z.config;a.$table.find(a.selectorRemove).remove();K(Z);X(Z);W(a.$table,Y,b)}function L(Z){var Y,a=Z.config;a.$headers.each(function(b,c){Y=C.getData(c,a.headers[b],"sorter")==="false";c.sortDisabled=Y;B(c)[Y?"addClass":"removeClass"]("sorter-false")})}function D(k){var e,b,Z,Y,h=k.config,g=h.sortList,d=[h.cssAsc,h.cssDesc],a=B(k).find("tfoot tr").children().removeClass(d.join(" "));h.$headers.removeClass(d.join(" "));Y=g.length;for(b=0;b<Y;b++){if(g[b][1]!==2){e=h.$headers.not(".sorter-false").filter('[data-column="'+g[b][0]+'"]'+(Y===1?":last":""));if(e.length){for(Z=0;Z<e.length;Z++){if(!e[Z].sortDisabled){e.eq(Z).addClass(d[g[b][1]]);if(a.length){a.filter('[data-column="'+g[b][0]+'"]').eq(Z).addClass(d[g[b][1]])}}}}}}}function N(a){if(a.config.widthFixed&&B(a).find("colgroup").length===0){var Y=B("<colgroup>"),Z=B(a).width();B(a.tBodies[0]).find("tr:first").children("td").each(function(){Y.append(B("<col>").css("width",parseInt((B(this).width()/Z)*1000,10)/10+"%"))});B(a).prepend(Y)}}function T(b,d){var a,Z,e,f=b.config,Y=d||f.sortList;f.sortList=[];B.each(Y,function(g,c){a=[parseInt(c[0],10),parseInt(c[1],10)];e=f.headerList[a[0]];if(e){f.sortList.push(a);Z=B.inArray(a[1],e.order);e.count=Z>=0?Z:a[1]%(f.sortReset?3:2)}})}function M(Z,Y){return(Z&&Z[Y])?Z[Y].type||"":""}function U(n,m,f){var l,d,b,Y,p,h=n.config,Z=!f[h.sortMultiSortKey],g=B(n);g.trigger("sortStart",n);m.count=f[h.sortResetKey]?2:(m.count+1)%(h.sortReset?3:2);if(h.sortRestart){d=m;h.$headers.each(function(){if(this!==d&&(Z||!B(this).is("."+h.cssDesc+",."+h.cssAsc))){this.count=-1}})}d=m.column;if(Z){h.sortList=[];if(h.sortForce!==null){l=h.sortForce;for(b=0;b<l.length;b++){if(l[b][0]!==d){h.sortList.push(l[b])}}}Y=m.order[m.count];if(Y<2){h.sortList.push([d,Y]);if(m.colSpan>1){for(b=1;b<m.colSpan;b++){h.sortList.push([d+b,Y])}}}}else{if(h.sortAppend&&h.sortList.length>1){if(C.isValueInArray(h.sortAppend[0][0],h.sortList)){h.sortList.pop()}}if(C.isValueInArray(d,h.sortList)){for(b=0;b<h.sortList.length;b++){p=h.sortList[b];Y=h.headerList[p[0]];if(p[0]===d){p[1]=Y.order[Y.count];if(p[1]===2){h.sortList.splice(b,1);Y.count=-1}}}}else{Y=m.order[m.count];if(Y<2){h.sortList.push([d,Y]);if(m.colSpan>1){for(b=1;b<m.colSpan;b++){h.sortList.push([d+b,Y])}}}}}if(h.sortAppend!==null){l=h.sortAppend;for(b=0;b<l.length;b++){if(l[b][0]!==d){h.sortList.push(l[b])}}}g.trigger("sortBegin",n);setTimeout(function(){D(n);R(n);V(n)},1)}function R(p){var d=0,h=p.config,j=h.sortList,e=j.length,a=p.tBodies.length,r,n,g,o,f,Y,Z,q,b,m;if(h.serverSideSorting||!h.cache[0]){return }if(h.debug){r=new Date()}for(g=0;g<a;g++){f=h.cache[g].colMax;Y=h.cache[g].normalized;Z=Y.length;m=(Y&&Y[0])?Y[0].length-1:0;Y.sort(function(i,c){for(n=0;n<e;n++){o=j[n][0];b=j[n][1];q=/n/i.test(M(h.parsers,o))?"Numeric":"Text";q+=b===0?"":"Desc";if(/Numeric/.test(q)&&h.strings[o]){if(typeof (h.string[h.strings[o]])==="boolean"){d=(b===0?1:-1)*(h.string[h.strings[o]]?-1:1)}else{d=(h.strings[o])?h.string[h.strings[o]]||0:0}}var k=B.tablesorter["sort"+q](p,i[o],c[o],o,f[o],d);if(k){return k}}return i[m]-c[m]})}if(h.debug){I("Sorting on "+j.toString()+" and dir "+b+" time",r)}}function G(Y,Z){Y.trigger("updateComplete");if(typeof Z==="function"){Z(Y[0])}}function W(Z,Y,a){if(Y!==false&&!Z[0].isProcessing){Z.trigger("sorton",[Z[0].config.sortList,function(){G(Z,a)}])}else{G(Z,a)}}function E(Z){var d=Z.config,a=d.$table,Y,b;d.$headers.find(d.selectorSort).add(d.$headers.filter(d.selectorSort)).unbind("mousedown.tablesorter mouseup.tablesorter sort.tablesorter keypress.tablesorter").bind("mousedown.tablesorter mouseup.tablesorter sort.tablesorter keypress.tablesorter",function(g,h){if(((g.which||g.button)!==1&&!/sort|keypress/.test(g.type))||(g.type==="keypress"&&g.which!==13)){return false}if(g.type==="mouseup"&&h!==true&&(new Date().getTime()-b>250)){return false}if(g.type==="mousedown"){b=new Date().getTime();return g.target.tagName==="INPUT"?"":!d.cancelSelection}if(d.delayInit&&!d.cache){X(Z)}var f=/TH|TD/.test(this.tagName)?B(this):B(this).parents("th, td").filter(":first"),c=f[0];if(!c.sortDisabled){U(Z,c,g)}});if(d.cancelSelection){d.$headers.attr("unselectable","on").bind("selectstart",false).css({"user-select":"none",MozUserSelect:"none"})}a.unbind("sortReset update updateRows updateCell updateAll addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(".tablesorter ")).bind("sortReset.tablesorter",function(c){c.stopPropagation();d.sortList=[];D(Z);R(Z);V(Z)}).bind("updateAll.tablesorter",function(f,c,g){f.stopPropagation();C.refreshWidgets(Z,true,true);C.restoreHeaders(Z);S(Z);E(Z);P(Z,c,g)}).bind("update.tablesorter updateRows.tablesorter",function(f,c,g){f.stopPropagation();L(Z);P(Z,c,g)}).bind("updateCell.tablesorter",function(h,k,i,m){h.stopPropagation();a.find(d.selectorRemove).remove();var f,o,j,c=a.find("tbody"),n=c.index(B(k).parents("tbody").filter(":first")),g=B(k).parents("tr").filter(":first");k=B(k)[0];if(c.length&&n>=0){o=c.eq(n).find("tr").index(g);j=k.cellIndex;f=d.cache[n].normalized[o].length-1;d.cache[n].row[Z.config.cache[n].normalized[o][f]]=g;d.cache[n].normalized[o][j]=d.parsers[j].format(F(Z,k,j),Z,k,j);W(a,i,m)}}).bind("addRows.tablesorter",function(g,j,h,k){g.stopPropagation();var f,o=j.filter("tr").length,m=[],c=j[0].cells.length,n=a.find("tbody").index(j.parents("tbody").filter(":first"));if(!d.parsers){K(Z)}for(f=0;f<o;f++){for(Y=0;Y<c;Y++){m[Y]=d.parsers[Y].format(F(Z,j[f].cells[Y],Y),Z,j[f].cells[Y],Y)}m.push(d.cache[n].row.length);d.cache[n].row.push([j[f]]);d.cache[n].normalized.push(m);m=[]}W(a,h,k)}).bind("sorton.tablesorter",function(f,c,h,g){f.stopPropagation();a.trigger("sortStart",this);T(Z,c);D(Z);a.trigger("sortBegin",this);R(Z);V(Z,g);if(typeof h==="function"){h(Z)}}).bind("appendCache.tablesorter",function(c,g,f){c.stopPropagation();V(Z,f);if(typeof g==="function"){g(Z)}}).bind("applyWidgetId.tablesorter",function(c,f){c.stopPropagation();C.getWidgetById(f).format(Z,d,d.widgetOptions)}).bind("applyWidgets.tablesorter",function(c,f){c.stopPropagation();C.applyWidget(Z,f)}).bind("refreshWidgets.tablesorter",function(g,f,c){g.stopPropagation();C.refreshWidgets(Z,f,c)}).bind("destroy.tablesorter",function(g,h,f){g.stopPropagation();C.destroy(Z,h,f)})}C.construct=function(Y){return this.each(function(){if(!this.tHead||this.tBodies.length===0||this.hasInitialized===true){return(this.config&&this.config.debug)?O("stopping initialization! No thead, tbody or tablesorter has already been initialized"):""}var d=B(this),b=this,e,a="",Z=B.metadata;b.hasInitialized=false;b.isProcessing=true;b.config={};e=B.extend(true,b.config,C.defaults,Y);B.data(b,"tablesorter",e);if(e.debug){B.data(b,"startoveralltimer",new Date())}e.supportsTextContent=B("<span>x</span>")[0].textContent==="x";e.supportsDataObject=parseFloat(B.fn.jquery)>=1.4;e.string={max:1,min:-1,"max+":1,"max-":-1,zero:0,none:0,"null":0,top:true,bottom:false};if(!/tablesorter\-/.test(d.attr("class"))){a=(e.theme!==""?" tablesorter-"+e.theme:"")}e.$table=d.addClass(e.tableClass+a);e.$tbodies=d.children("tbody:not(."+e.cssInfoBlock+")");S(b);N(b);K(b);if(!e.delayInit){X(b)}E(b);if(e.supportsDataObject&&typeof d.data().sortlist!=="undefined"){e.sortList=d.data().sortlist}else{if(Z&&(d.metadata()&&d.metadata().sortlist)){e.sortList=d.metadata().sortlist}}C.applyWidget(b,true);if(e.sortList.length>0){d.trigger("sorton",[e.sortList,{},!e.initWidgets])}else{if(e.initWidgets){C.applyWidget(b)}}if(e.showProcessing){d.unbind("sortBegin.tablesorter sortEnd.tablesorter").bind("sortBegin.tablesorter sortEnd.tablesorter",function(c){C.isProcessing(b,c.type==="sortBegin")})}b.hasInitialized=true;b.isProcessing=false;if(e.debug){C.benchmark("Overall initialization time",B.data(b,"startoveralltimer"))}d.trigger("tablesorter-initialized",b);if(typeof e.initialized==="function"){e.initialized(b)}})};C.isProcessing=function(b,Z,a){b=B(b);var d=b[0].config,Y=a||b.find("."+d.cssHeader);if(Z){if(d.sortList.length>0){Y=Y.filter(function(){return this.sortDisabled?false:C.isValueInArray(parseFloat(B(this).attr("data-column")),d.sortList)})}Y.addClass(d.cssProcessing)}else{Y.removeClass(d.cssProcessing)}};C.processTbody=function(a,Y,Z){var b;if(Z){a.isProcessing=true;Y.before('<span class="tablesorter-savemyplace"/>');b=(B.fn.detach)?Y.detach():Y.remove();return b}b=B(a).find("span.tablesorter-savemyplace");Y.insertAfter(b);b.remove();a.isProcessing=false};C.clearTableBody=function(Y){B(Y)[0].config.$tbodies.empty()};C.restoreHeaders=function(Y){var Z=Y.config;Z.$table.find(Z.selectorHeaders).each(function(a){if(B(this).find(".tablesorter-header-inner").length){B(this).html(Z.headerContent[a])}})};C.destroy=function(d,Z,g){d=B(d)[0];if(!d.hasInitialized){return }C.refreshWidgets(d,true,true);var f=B(d),e=d.config,Y=f.find("thead:first"),a=Y.find("tr."+e.cssHeaderRow).removeClass(e.cssHeaderRow),b=f.find("tfoot:first > tr").children("th, td");Y.find("tr").not(a).remove();f.removeData("tablesorter").unbind("sortReset update updateAll updateRows updateCell addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd ".split(" ").join(".tablesorter "));e.$headers.add(b).removeClass(e.cssHeader+" "+e.cssAsc+" "+e.cssDesc).removeAttr("data-column");a.find(e.selectorSort).unbind("mousedown.tablesorter mouseup.tablesorter keypress.tablesorter");C.restoreHeaders(d);if(Z!==false){f.removeClass(e.tableClass+" tablesorter-"+e.theme)}d.hasInitialized=false;if(typeof g==="function"){g(d)}};C.regex=[/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,/^0x[0-9a-f]+$/i];C.sortText=function(s,m,l,d){if(m===l){return 0}var k=s.config,j=k.string[(k.empties[d]||k.emptyTo)],Y=C.regex,p,f,h,q,Z,o,g,n;if(m===""&&j!==0){return typeof j==="boolean"?(j?-1:1):-j||-1}if(l===""&&j!==0){return typeof j==="boolean"?(j?1:-1):j||1}if(typeof k.textSorter==="function"){return k.textSorter(m,l,s,d)}p=m.replace(Y[0],"\\0$1\\0").replace(/\\0$/,"").replace(/^\\0/,"").split("\\0");h=l.replace(Y[0],"\\0$1\\0").replace(/\\0$/,"").replace(/^\\0/,"").split("\\0");f=parseInt(m.match(Y[2]),16)||(p.length!==1&&m.match(Y[1])&&Date.parse(m));q=parseInt(l.match(Y[2]),16)||(f&&l.match(Y[1])&&Date.parse(l))||null;if(q){if(f<q){return -1}if(f>q){return 1}}n=Math.max(p.length,h.length);for(g=0;g<n;g++){Z=isNaN(p[g])?p[g]||0:parseFloat(p[g])||0;o=isNaN(h[g])?h[g]||0:parseFloat(h[g])||0;if(isNaN(Z)!==isNaN(o)){return(isNaN(Z))?1:-1}if(typeof Z!==typeof o){Z+="";o+=""}if(Z<o){return -1}if(Z>o){return 1}}return 0};C.sortTextDesc=function(f,Z,Y,d){if(Z===Y){return 0}var h=f.config,g=h.string[(h.empties[d]||h.emptyTo)];if(Z===""&&g!==0){return typeof g==="boolean"?(g?-1:1):g||1}if(Y===""&&g!==0){return typeof g==="boolean"?(g?1:-1):-g||-1}if(typeof h.textSorter==="function"){return h.textSorter(Y,Z,f,d)}return C.sortText(f,Y,Z)};C.getTextValue=function(Z,e,c){if(e){var b,Y=Z?Z.length:0,f=e+c;for(b=0;b<Y;b++){f+=Z.charCodeAt(b)}return c*f}return 0};C.sortNumeric=function(g,Z,Y,f,j,i){if(Z===Y){return 0}var k=g.config,h=k.string[(k.empties[f]||k.emptyTo)];if(Z===""&&h!==0){return typeof h==="boolean"?(h?-1:1):-h||-1}if(Y===""&&h!==0){return typeof h==="boolean"?(h?1:-1):h||1}if(isNaN(Z)){Z=C.getTextValue(Z,j,i)}if(isNaN(Y)){Y=C.getTextValue(Y,j,i)}return Z-Y};C.sortNumericDesc=function(g,Z,Y,f,j,i){if(Z===Y){return 0}var k=g.config,h=k.string[(k.empties[f]||k.emptyTo)];if(Z===""&&h!==0){return typeof h==="boolean"?(h?-1:1):h||1}if(Y===""&&h!==0){return typeof h==="boolean"?(h?1:-1):-h||-1}if(isNaN(Z)){Z=C.getTextValue(Z,j,i)}if(isNaN(Y)){Y=C.getTextValue(Y,j,i)}return Y-Z};C.characterEquivalents={a:"\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5",A:"\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5",c:"\u00e7\u0107\u010d",C:"\u00c7\u0106\u010c",e:"\u00e9\u00e8\u00ea\u00eb\u011b\u0119",E:"\u00c9\u00c8\u00ca\u00cb\u011a\u0118",i:"\u00ed\u00ec\u0130\u00ee\u00ef\u0131",I:"\u00cd\u00cc\u0130\u00ce\u00cf",o:"\u00f3\u00f2\u00f4\u00f5\u00f6",O:"\u00d3\u00d2\u00d4\u00d5\u00d6",ss:"\u00df",SS:"\u1e9e",u:"\u00fa\u00f9\u00fb\u00fc\u016f",U:"\u00da\u00d9\u00db\u00dc\u016e"};C.replaceAccents=function(b){var Z,c="[",Y=C.characterEquivalents;if(!C.characterRegex){C.characterRegexArray={};for(Z in Y){if(typeof Z==="string"){c+=Y[Z];C.characterRegexArray[Z]=new RegExp("["+Y[Z]+"]","g")}}C.characterRegex=new RegExp(c+"]")}if(C.characterRegex.test(b)){for(Z in Y){if(typeof Z==="string"){b=b.replace(C.characterRegexArray[Z],Z)}}}return b};C.isValueInArray=function(b,Z){var c,Y=Z.length;for(c=0;c<Y;c++){if(Z[c][0]===b){return true}}return false};C.addParser=function(c){var b,Z=C.parsers.length,Y=true;for(b=0;b<Z;b++){if(C.parsers[b].id.toLowerCase()===c.id.toLowerCase()){Y=false}}if(Y){C.parsers.push(c)}};C.getParserById=function(Z){var a,Y=C.parsers.length;for(a=0;a<Y;a++){if(C.parsers[a].id.toLowerCase()===(Z.toString()).toLowerCase()){return C.parsers[a]}}return false};C.addWidget=function(Y){C.widgets.push(Y)};C.getWidgetById=function(a){var b,Z,Y=C.widgets.length;for(b=0;b<Y;b++){Z=C.widgets[b];if(Z&&Z.hasOwnProperty("id")&&Z.id.toLowerCase()===a.toLowerCase()){return Z}}};C.applyWidget=function(h,g){h=B(h)[0];var b=h.config,d=b.widgetOptions,e=[],Z,a,f,Y;if(b.debug){Z=new Date()}if(b.widgets.length){b.widgets=B.grep(b.widgets,function(i,c){return B.inArray(i,b.widgets)===c});B.each(b.widgets||[],function(c,j){Y=C.getWidgetById(j);if(Y&&Y.id){if(!Y.priority){Y.priority=10}e[c]=Y}});e.sort(function(i,c){return i.priority<c.priority?-1:i.priority===c.priority?0:1});B.each(e,function(j,c){if(c){if(g){if(c.hasOwnProperty("options")){d=h.config.widgetOptions=B.extend(true,{},c.options,d)}if(c.hasOwnProperty("init")){c.init(h,c,b,d)}}else{if(!g&&c.hasOwnProperty("format")){c.format(h,b,d,false)}}}})}if(b.debug){f=b.widgets.length;I("Completed "+(g===true?"initializing ":"applying ")+f+" widget"+(f!==1?"s":""),Z)}};C.refreshWidgets=function(f,e,Y){f=B(f)[0];var d,g=f.config,b=g.widgets,a=C.widgets,Z=a.length;for(d=0;d<Z;d++){if(a[d]&&a[d].id&&(e||B.inArray(a[d].id,b)<0)){if(g.debug){O("Refeshing widgets: Removing "+a[d].id)}if(a[d].hasOwnProperty("remove")){a[d].remove(f,g,g.widgetOptions)}}}if(Y!==true){C.applyWidget(f,e)}};C.getData=function(d,c,b){var e="",Z=B(d),Y,a;if(!Z.length){return""}Y=B.metadata?Z.metadata():false;a=" "+(Z.attr("class")||"");if(typeof Z.data(b)!=="undefined"||typeof Z.data(b.toLowerCase())!=="undefined"){e+=Z.data(b)||Z.data(b.toLowerCase())}else{if(Y&&typeof Y[b]!=="undefined"){e+=Y[b]}else{if(c&&typeof c[b]!=="undefined"){e+=c[b]}else{if(a!==" "&&a.match(" "+b+"-")){e=a.match(new RegExp("\\s"+b+"-([\\w-]+)"))[1]||""}}}}return B.trim(e)};C.formatFloat=function(a,b){if(typeof a!=="string"||a===""){return a}var Z,Y=b&&b.config?b.config.usNumberFormat!==false:typeof b!=="undefined"?b:true;if(Y){a=a.replace(/,/g,"")}else{a=a.replace(/[\s|\.]/g,"").replace(/,/g,".")}if(/^\s*\([.\d]+\)/.test(a)){a=a.replace(/^\s*\(/,"-").replace(/\)/,"")}Z=parseFloat(a);return isNaN(Z)?B.trim(a):Z};C.isDigit=function(Y){return isNaN(Y)?(/^[\-+(]?\d+[)]?$/).test(Y.toString().replace(/[,.'"\s]/g,"")):true}}()});var A=B.tablesorter;B.fn.extend({tablesorter:A.construct});A.addParser({id:"text",is:function(){return true},format:function(C,D){var E=D.config;if(C){C=B.trim(E.ignoreCase?C.toLocaleLowerCase():C);C=E.sortLocaleCompare?A.replaceAccents(C):C}return C},type:"text"});A.addParser({id:"digit",is:function(C){return A.isDigit(C)},format:function(C,D){var E=A.formatFloat((C||"").replace(/[^\w,. \-()]/g,""),D);return C&&typeof E==="number"?E:C?B.trim(C&&D.config.ignoreCase?C.toLocaleLowerCase():C):C},type:"numeric"});A.addParser({id:"currency",is:function(C){return(/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/).test((C||"").replace(/[,. ]/g,""))},format:function(C,D){var E=A.formatFloat((C||"").replace(/[^\w,. \-()]/g,""),D);return C&&typeof E==="number"?E:C?B.trim(C&&D.config.ignoreCase?C.toLocaleLowerCase():C):C},type:"numeric"});A.addParser({id:"ipAddress",is:function(C){return(/^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/).test(C)},format:function(F,H){var E,D=F?F.split("."):"",G="",C=D.length;for(E=0;E<C;E++){G+=("00"+D[E]).slice(-3)}return F?A.formatFloat(G,H):F},type:"numeric"});A.addParser({id:"url",is:function(C){return(/^(https?|ftp|file):\/\//).test(C)},format:function(C){return C?B.trim(C.replace(/(https?|ftp|file):\/\//,"")):C},type:"text"});A.addParser({id:"isoDate",is:function(C){return(/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/).test(C)},format:function(C,D){return C?A.formatFloat((C!=="")?(new Date(C.replace(/-/g,"/")).getTime()||""):"",D):C},type:"numeric"});A.addParser({id:"percent",is:function(C){return(/(\d\s*?%|%\s*?\d)/).test(C)&&C.length<15},format:function(C,D){return C?A.formatFloat(C.replace(/%/g,""),D):C},type:"numeric"});A.addParser({id:"usLongDate",is:function(C){return(/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i).test(C)||(/^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i).test(C)},format:function(C,D){return C?A.formatFloat((new Date(C.replace(/(\S)([AP]M)$/i,"$1 $2")).getTime()||""),D):C},type:"numeric"});A.addParser({id:"shortDate",is:function(C){return(/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/).test((C||"").replace(/\s+/g," ").replace(/[\-.,]/g,"/"))},format:function(F,G,C,D){if(F){var I=G.config,E=I.headerList[D],H=E.dateFormat||A.getData(E,I.headers[D],"dateFormat")||I.dateFormat;F=F.replace(/\s+/g," ").replace(/[\-.,]/g,"/");if(H==="mmddyyyy"){F=F.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$1/$2")}else{if(H==="ddmmyyyy"){F=F.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$2/$1")}else{if(H==="yyyymmdd"){F=F.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/,"$1/$2/$3")}}}}return F?A.formatFloat((new Date(F).getTime()||""),G):F},type:"numeric"});A.addParser({id:"time",is:function(C){return(/^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i).test(C)},format:function(C,D){return C?A.formatFloat((new Date("2000/01/01 "+C.replace(/(\S)([AP]M)$/i,"$1 $2")).getTime()||""),D):C},type:"numeric"});A.addParser({id:"metadata",is:function(){return false},format:function(D,E,C){var G=E.config,F=(!G.parserMetadataName)?"sortValue":G.parserMetadataName;return B(C).metadata()[F]},type:"numeric"});A.addWidget({id:"zebra",priority:90,format:function(N,K,M){var D,H,J,O,I,E,G,F,C=new RegExp(K.cssChildRow,"i"),L=K.$tbodies;if(K.debug){E=new Date()}for(G=0;G<L.length;G++){D=L.eq(G);F=D.children("tr").length;if(F>1){O=0;H=D.children("tr:visible");H.each(function(){J=B(this);if(!C.test(this.className)){O++}I=(O%2===0);J.removeClass(M.zebra[I?1:0]).addClass(M.zebra[I?0:1])})}}if(K.debug){A.benchmark("Applying Zebra widget",E)}},remove:function(H,I,F){var E,D,C=I.$tbodies,G=(F.zebra||["even","odd"]).join(" ");for(E=0;E<C.length;E++){D=B.tablesorter.processTbody(H,C.eq(E),true);D.children().removeClass(G);B.tablesorter.processTbody(H,D,false)}}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-table-sortable', location = 'js/aui-experimental-tables-sortable.js' */
(function(){var B={sortMultiSortKey:"",headers:{},debug:false};function A(D){var C=B;D.find("th").each(function(F,G){var E=AJS.$(G);C.headers[F]={};if(E.hasClass("aui-table-column-unsortable")){C.headers[F].sorter=false}else{E.attr("tabindex","0");E.wrapInner("<span class='aui-table-header-content'/>");if(E.hasClass("aui-table-column-issue-key")){C.headers[F].sorter="issue-key"}}});D.tablesorter(C)}AJS.tablessortable={setup:function(){AJS.$.tablesorter.addParser({id:"issue-key",is:function(){return false},format:function(G){var C=G.split("-");var D=C[0];var F=C[1];var I="..........";var H="000000";var E=(D+I).slice(0,I.length);E+=(H+F).slice(-H.length);return E},type:"text"});AJS.$(".aui-table-sortable").each(function(){A(AJS.$(this))})},setTableSortable:function(C){A(C)}};AJS.$(AJS.tablessortable.setup)})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'templates/tasks-report.soy' */
// This file was automatically generated from tasks-report.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.InlineTasks == 'undefined') { Confluence.InlineTasks = {}; }
if (typeof Confluence.InlineTasks.Report == 'undefined') { Confluence.InlineTasks.Report = {}; }
if (typeof Confluence.InlineTasks.Report.Templates == 'undefined') { Confluence.InlineTasks.Report.Templates = {}; }


Confluence.InlineTasks.Report.Templates.tasksReport = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="table-wrapper" data-loading="false"><div class="task-blanket"></div><input type="hidden" name="reportParameters" value="', soy.$$escapeHtml(opt_data.reportParameters), '" /><table class="aui aui-table-interactive tasks-report" data-sortable="false" data-total-pages="', soy.$$escapeHtml(opt_data.totalPages), '" data-page-size="', soy.$$escapeHtml(opt_data.pageSize), '" data-adaptive="', soy.$$escapeHtml(opt_data.adaptive), '" data-page-limit="', soy.$$escapeHtml(opt_data.pageLimit), '"><thead><tr class="tablesorter-headerRow">');
  var headingList14 = opt_data.headings;
  var headingListLen14 = headingList14.length;
  for (var headingIndex14 = 0; headingIndex14 < headingListLen14; headingIndex14++) {
    var headingData14 = headingList14[headingIndex14];
    output.append('<th class="header-', soy.$$escapeHtml(headingData14), (headingData14 == 'description') ? ' aui-table-column-unsortable' : '', '" data-column-name="', soy.$$escapeHtml(headingData14), '">', soy.$$escapeHtml(opt_data.headingTexts[headingData14]), '</th>');
  }
  output.append('</tr></thead><tbody>');
  if (opt_data.tasks.length) {
    var taskList29 = opt_data.tasks;
    var taskListLen29 = taskList29.length;
    for (var taskIndex29 = 0; taskIndex29 < taskListLen29; taskIndex29++) {
      var taskData29 = taskList29[taskIndex29];
      Confluence.InlineTasks.Report.Templates.tasksReportLine({task: taskData29, columns: opt_data.headings}, output);
    }
  } else {
    output.append('<tr><td colspan="', soy.$$escapeHtml(opt_data.headings.length), '">', soy.$$escapeHtml("Create a task list in a Confluence page to keep track of things you need to do."), '</td></tr>');
  }
  output.append('</tbody></table></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h2>', soy.$$escapeHtml("Hey! Did you know..."), '</h2><p>', soy.$$escapeHtml("You can view the tasks you created, or assigned to you, in the tasks tabs of your profile."), '</p>');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.tasksReportLine = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<tr data-task-id="', soy.$$escapeHtml(opt_data.task.taskId), '" aria-disabled="false">');
  var columnList51 = opt_data.columns;
  var columnListLen51 = columnList51.length;
  for (var columnIndex51 = 0; columnIndex51 < columnListLen51; columnIndex51++) {
    var columnData51 = columnList51[columnIndex51];
    if (columnData51 == 'duedate') {
      output.append('<td class=\'tasks-report-date\'>', (opt_data.task.dueDate) ? soy.$$escapeHtml(opt_data.task.dueDate) : '', '</td>');
    } else if (columnData51 == 'description') {
      output.append('<td>', opt_data.task.taskHtml, '</td>');
    } else if (columnData51 == 'assignee') {
      output.append('<td class=\'tasks-report-assignee\'>');
      if (opt_data.task.assigneeUserName) {
        Confluence.Templates.User.usernameLink({username: opt_data.task.assigneeUserName, fullName: opt_data.task.assigneeFullName, canView: false}, output);
      }
      output.append('</td>');
    } else if (columnData51 == 'location') {
      output.append('<td><a href="', soy.$$escapeHtml(opt_data.task.pageUrl), '">', soy.$$escapeHtml(opt_data.task.pageTitle), '</a></td>');
    } else if (columnData51 == 'completedate') {
      output.append('<td class=\'tasks-report-date\'>', (opt_data.task.completeDate) ? soy.$$escapeHtml(opt_data.task.completeDate) : (opt_data.task.taskCompleted) ? '<span class="emptycompletedate">--</span>' : '', '</td>');
    } else if (columnData51 == 'labels') {
      output.append('<td>');
      var labelList89 = opt_data.task.labels;
      var labelListLen89 = labelList89.length;
      for (var labelIndex89 = 0; labelIndex89 < labelListLen89; labelIndex89++) {
        var labelData89 = labelList89[labelIndex89];
        aui.labels.label({text: labelData89}, output);
      }
      output.append('</td>');
    }
  }
  output.append('</tr>');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.taskReportBrowserWarning = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param97 = new soy.StringBuilder('<p>', soy.$$escapeHtml("Unable to show this task report."), '</p>');
  var messageList101 = opt_data.messages;
  var messageListLen101 = messageList101.length;
  for (var messageIndex101 = 0; messageIndex101 < messageListLen101; messageIndex101++) {
    var messageData101 = messageList101[messageIndex101];
    param97.append('<p>', soy.$$escapeHtml(messageData101), '</p>');
  }
  aui.message.warning({content: param97.toString()}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.taskReportWarning = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.warning({content: '<p>' + soy.$$escapeHtml("Unable to show the task report. Edit this page to resolve the issues.") + '</p>'}, output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'js/tasks-report-blank-exp.js' */
(function(b){Confluence.InlineTasks=Confluence.InlineTasks||{};Confluence.InlineTasks.TasksReport=Confluence.InlineTasks.TasksReport||{};var a={"blank.complete.title":"Task report","blank.complete.desc":"Get going, no tasks completed yet.","blank.incomplete.title":"Task report","blank.incomplete.desc":"Looking good, no incomplete tasks."};Confluence.InlineTasks.TasksReport.renderBlankExperiences=function(g,c){if(!c){c="incomplete"}var f=a["blank."+c+".title"],e=a["blank."+c+".desc"];var d=Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox({blankTitle:f,blankDescription:e,customClass:c+" tasks-report-blank"});g.html(d)}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'js/tasks-report.js' */
AJS.$(function(c){var b="/rest/inlinetasks/1/task-report/",a=Confluence.InlineTasks.Report.Templates,e=Confluence.InlineTasks.TasksTableSortable;var d=c(".tasks-report").parent();_.each(d,function(i){var l=c(i),n=l.find("table.tasks-report"),m=n.data("page-size"),k=n.data("total-pages"),f=n.data("page-limit"),q=n.data("adaptive"),p=l.find("input[name=reportParameters]").val(),g=JSON.parse(p);var o=function(r,s){c(r).attr("aria-disabled",s)};AJS.bind("inline-tasks.status-update.start",function(t,s){if(s.taskListQueue.length>0){var r=c("li[data-inline-task-id="+s.taskId+"]").closest(".tasks-report").siblings(".macro-auto-pagination");o(r,true);r=r.find("li a");r.on("click.taskreport.pagination",function(u){u.preventDefault();u.stopPropagation()})}});AJS.bind("inline-tasks.status-update.complete",function(s,r){if(r.taskListQueue.length===0){o(".macro-auto-pagination",false);c(".macro-auto-pagination li a").off("click.taskreport.pagination")}});var j=n.closest(".table-wrapper");var h=new e({$wrapper:j,table:n[0],sortReverseSortDefault:g.reverseSort,sortColumnDefault:e.getColumnNameFromSortBy(g.sortColumn),reportParametersDefault:g,pageIndex:0,pageSize:m,pageTotal:k,adaptive:q,pageLimit:f,templates:a,columns:g.columns,onRenderEmptyTable:function(){Confluence.InlineTasks.TasksReport.renderBlankExperiences(j,g.status)},analyticEventKey:"confluence-spaces.tasks.report.sorted",restUrlPagination:b,ajaxUrl:Confluence.getContextPath()+b});h.init();if(q||k>1){h.renderPagination()}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-help-tips:common', location = 'js/help-tip.js' */
(function(f){function b(){return false}function d(){return true}var l=0,g=new Date().getTime();var k=AJS.contextPath()+"/rest/helptips/1.0/tips";function h(n){n=""+(n||"");return n.replace(/\./g,"-")}function j(o,n){if(AJS.EventQueue&&n&&n.attributes.id){var q={};var p=h(n.attributes.id);q.name="helptips."+p+"."+o;q.properties={};AJS.EventQueue.push(q)}}function c(){return"c"+g+(l++)}var a={dismissedTipIds:[],loaded:f.Deferred(),url:function(){return k},sync:function(o,n){o||(o="get");n||(n=null);return f.ajax(this.url(),{type:o,context:this,dataType:"json",contentType:"application/json",data:n&&JSON.stringify(n),processData:false}).promise()},fetch:function(){var n=this.sync();n.done(function(o){f.merge(this.dismissedTipIds,o);this.loaded.resolve()});return n.promise()},show:function(n){this.loaded.done(n)},dismiss:function(n){var o=n.attributes.id;if(!o){n._dismissed=true}else{this.dismissedTipIds.push(o);this.sync("post",{id:o})}},undismiss:function(n){var o=n.attributes.id;if(!o){n._dismissed=false}else{this.dismissedTipIds.splice(f.inArray(o,this.dismissedTipIds),1);this.sync("delete",{id:o})}},isDismissed:function(n){var o=n.attributes.id;return(o)?f.inArray(o,this.dismissedTipIds)>=0:n._dismissed}};var e=AJS.HelpTip=function(n){var o;this.attributes=f.extend({},n);this.attributes.id||(this.attributes.id=false);if(this.attributes.body){this.attributes.bodyHtml=this.attributes.body;delete this.attributes.body}this.cid=c();o=this.attributes.anchor;delete this.attributes.anchor;this.view=o?new i(this,o):new m(this);this.view.$el.addClass("aui-help-tip")};AJS.HelpTip.Manager=a;f.extend(e.prototype,{show:function(){var n=this;AJS.HelpTip.Manager.show(function(){if(!n.isDismissed()){if(AJS.Popups&&AJS.Popups.DisplayController){AJS.Popups.DisplayController.request({name:n.id,weight:1000,show:function(){n.view.show()}})}else{n.view.show()}j("shown",n)}})},dismiss:function(){var n=h(arguments[0]||"programmatically");this.view.dismiss();if(!this.isDismissed()){AJS.HelpTip.Manager.dismiss(this);j("dismissed."+n,this)}},isVisible:function(){return this.view.$el.is(":visible")},isDismissed:function(){return AJS.HelpTip.Manager.isDismissed(this)}});var i=function(o,n){this.initialize(o,n)};f.extend(i.prototype,{initialize:function(r,q){var o=this;var s=q.prop("ownerDocument");var p=s!=window.document;if(p){var n=f("iframe").filter(function(){return this.contentDocument==s});n.contents().scroll(function(){var v=f(this).contents().find("body").scrollTop();var w=n.offset().top;var u=o.popup.data("offset-top");var t=o.popup.find(".arrow").height();o.popup.css("top",u-v);o.popup.toggle(v<=u-w-t&&v+n.height()-t+w-o.popup.height()>=u)})}this.model=r;this.beforeHide=b;this.dismissButton=f(AJS.Templates.HelpTip.tipDismiss());this.dismissButton.click(function(t){r.dismiss("close-button");t.preventDefault()});this.popup=AJS.InlineDialog(q,r.cid,function(v,u,t){v.html(AJS.Templates.HelpTip.tipContent(r.attributes));v.find(".helptip-body").after(o.dismissButton);v.unbind("mouseover mouseout");v.find(".helptip-link").click(function(){j("learn-more.clicked",r)});t()},{container:"body",noBind:true,preHideCallback:function(){return o.beforeHide()},calculatePositions:function(t,y,z,x){var w=AJS.InlineDialog.opts.calculatePositions(t,y,z,x);if(p){var v=t.find(".arrow").height();var u=n.contents().find("body").scrollTop();w.popupCss.top=n.offset().top+(q.offset().top-u)+q.height()+v;w.popupCss.left=q.offset().left;n.contents().scroll()}t.data("offset-top",w.popupCss.top);return w}});this.popup.refresh();this._popupHide=this.popup.hide;this.popup.hide=b;this.$el=f(this.popup[0]);AJS.$(document).bind("showLayer",function(v,u,t){if(u==="inlineDialog"&&t.id===r.cid){AJS.InlineDialog.current=null;AJS.$(document.body).unbind("click."+r.cid+".inline-dialog-check");t._validateClickToClose=b;t.hide=b}})},show:function(){var n=this.popup,o=function(p){if(!n.has(p.target).length){n.shadow.remove();n.remove()}};n.show()},dismiss:function(){this.beforeHide=d;this._popupHide()}});var m=function(n){this.initialize(n)};f.extend(m.prototype,{initialize:function(){this.$el=f("<div />")},show:f.noop,dismiss:f.noop});if(AJS.Meta.get("remote-user")){a.fetch()}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-help-tips:common', location = 'templates/help-tip.soy' */
// This file was automatically generated from help-tip.soy.
// Please don't edit this file by hand.

if (typeof AJS == 'undefined') { var AJS = {}; }
if (typeof AJS.Templates == 'undefined') { AJS.Templates = {}; }
if (typeof AJS.Templates.HelpTip == 'undefined') { AJS.Templates.HelpTip = {}; }


AJS.Templates.HelpTip.tipContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.title) ? '<h4 class="helptip-title">' + soy.$$escapeHtml(opt_data.title) + '</h4>' : '', '<div class="helptip-body">', opt_data.bodyHtml, '</div>', (opt_data.url) ? '<a class="helptip-link" href="' + soy.$$escapeHtml(opt_data.url) + '" target="_blank">' + soy.$$escapeHtml("Learn more") + '</a>' : '');
  return opt_sb ? '' : output.toString();
};


AJS.Templates.HelpTip.tipDismiss = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<button class="helptip-dismiss aui-button" type="button">', soy.$$escapeHtml("Dismiss"), '</button>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-feature-discovery-resources', location = 'js/tasks-discovery.js' */
(function(b){function a(){if(!!AJS.HelpTip){var c={id:null,body:Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification(),anchor:b("#user-menu-link")};var d=new AJS.HelpTip(c);AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent("confluence-spaces.tasks.feature.discovery.shown"):AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.feature.discovery.shown"});d.show()}}b(document).ready(function(){if(b("meta[name=show-task-feature-discovery-flag]").length>0){a()}})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-urlmacro-resources', location = 'com/atlassian/confluence/plugins/sharelinksurlmacro/soy/sharelinks-urlmacro-templates.soy' */
// This file was automatically generated from sharelinks-urlmacro-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.SharelinksUrlMacro == 'undefined') { Confluence.Blueprints.SharelinksUrlMacro = {}; }


Confluence.Blueprints.SharelinksUrlMacro.bookmarkletLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class="aui-button sharelinks-urlmacro-button" href="');
  Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript(opt_data, output);
  output.append('"><span>', soy.$$escapeHtml("Share on Confluence"), '</span></a>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('javascript:(function(){var screenWidth=screen.width,screenHeight=screen.height,popupWidth=640,popupHeight=580,popupLeft=0,popupTop=0; if(screenWidth>popupWidth){popupLeft=Math.round((screenWidth/2)-(popupWidth/2));}if(screenHeight>popupHeight){popupTop=Math.round((screenHeight/2)-(popupHeight/2));}window.open(\'', opt_data.bookmarkletActionURL, '?bookmarkedURL=\'+encodeURIComponent(window.location.href), \'\',\'left=\'+popupLeft+\',top=\'+popupTop+\',width=\'+popupWidth+\',height=\'+popupHeight+\',personalbar=0,toolbar=0,scrollbars=1,resizable=1\');}());');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-urlmacro-resources', location = 'com/atlassian/confluence/plugins/sharelinksurlmacro/js/sharelinks-urlmacro.js' */
AJS.toInit(function(a){a(".sharelinks-urlmacro-button").click(function(){alert("Drag this link to your toolbar");return false})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-sortable-tables:sortable-table-resources', location = 'js/SortableTables.js' */
(function($){

$(function(){
    /**
     * We work hard here to keep the cheap and expensive parts separated.
     * We call enable on a delay but keep both methods exposed globally so that we can re-init/enable
     * sortable tables on a page should we modify the dom dramatically.
     */
    var tables;
    Confluence.SortableTables = {
        init: function(){
            tables = $('table').filter(function(){
                var thisTable = $(this),
                    cells = thisTable.find('td, th'),
                    firstRowCells = this.rows.length && $(this.rows[0].cells),
                    cell, eventData;

                if(thisTable.attr("data-sortable") === "false")
                    return false;

                // this exists for legacy reasons, we use a data attribute to opt out now
                eventData = jQuery.Event("makeSortable.SortableTables");
                thisTable.trigger(eventData);
                if (eventData.isDefaultPrevented()) {
                    return false;
                }

                if (!firstRowCells || firstRowCells.length === 0) { //there are no rows or no cells
                    return false;
                }
                //no colspan or rowspans > 1
                for (var i = 0, len = cells.length; i < len; i++) {
                    cell = cells[i];
                    if(cell.rowSpan != 1 || cell.colSpan != 1) {
                        return false;
                    }
                }

                //Header contains an inner table, not sortable
                if($(this.rows[0]).find('table').length){
                    return false;
                }

                // at least one cell in first row is not a th or have a class of nohighlight, not sortable
                if (firstRowCells.filter('th').length != firstRowCells.length || firstRowCells.hasClass('nohighlight'))
                    return false;

                // single row tables are not sortable
                return this.rows[1];
            });
        },
        enable: function(){
            tables.each(function(){
                // Changing this to use live dom nodes or something other than a document fragment has a
                // significant performance penalty. Modify with care.
                var body = this.removeChild(this.children[0]),
                    rows = $(body.children),
                    firstRow = Array.prototype.shift.call(rows),
                    fragment = document.createDocumentFragment(),
                    head = document.createElement("thead");

                fragment.appendChild(head);
                head.appendChild(firstRow);
                fragment.appendChild(body);

                this.appendChild(fragment);
            });

            tables.tablesorter({
                "cssHeader" : 'sortableHeader',
                "delayInit" : true,
                "textExtraction" : function(node){
                    //Do the text trim manually since our version of jQuery fails at this.
                    return AJS.trim($(node).text());
                },
                "dateFormat": getDateFormat()
            });
        }
    };
    Confluence.SortableTables.init();
    setTimeout(Confluence.SortableTables.enable, 100);
});

//Sortable tables friendly date format
function getDateFormat(){
    var dateFormat = AJS.Meta.get('date.format'),
        firstCharacter, retVal;

    if (dateFormat && dateFormat.length !== 0) {
        //we can assume enough from the first character
        firstCharacter = dateFormat.toLowerCase()[0];
        if (firstCharacter === 'm') {
            retVal = 'mmddyyyy';
        } else if (firstCharacter === 'd') {
            retVal = 'ddmmyyyy';
        } else if (firstCharacter === 'y') {
            retVal = 'yyyymmdd';
        }
    }
    return retVal;
}
})(AJS.$);

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-sortable-tables:sortable-table-resources', location = 'tablesorter/js/jquery.tablesorter.js' */
﻿/*!
* TableSorter 2.3.10 - Client-side table sorting with ease!
* @requires jQuery v1.2.6+
*
* Copyright (c) 2007 Christian Bach
* Examples and docs at: http://tablesorter.com
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
* @type jQuery
* @name tablesorter
* @cat Plugins/Tablesorter
* @author Christian Bach/christian.bach@polyester.se
* @contributor Rob Garrison/https://github.com/Mottie/tablesorter
*/
!(function($) {
	$.extend({
		tablesorter: new function() {

			this.version = "2.3.10";

			var parsers = [], widgets = [];
			this.defaults = {

				// appearance
				widthFixed       : false,      // adds colgroup to fix widths of columns

				// functionality
				cancelSelection  : true,       // prevent text selection in the header
				dateFormat       : "mmddyyyy", // other options: "ddmmyyy" or "yyyymmdd"
				sortMultiSortKey : "shiftKey", // key used to select additional columns
				usNumberFormat   : true,       // false for German "1.234.567,89" or French "1 234 567,89"
				delayInit        : false,      // if false, the parsed table contents will not update until the first sort.

				// sort options
				headers          : {},         // set sorter, string, empty, locked order, sortInitialOrder, filter, etc.
				ignoreCase       : true,       // ignore case while sorting
				sortForce        : null,       // column(s) first sorted; always applied
				sortList         : [],         // Initial sort order; applied initially; updated when manually sorted
				sortAppend       : null,       // column(s) sorted last; always applied

				sortInitialOrder : "asc",      // sort direction on first click
				sortLocaleCompare: false,      // replace equivalent character (accented characters)
				sortReset        : false,      // third click on the header will reset column to default - unsorted
				sortRestart      : false,      // restart sort to "sortInitialOrder" when clicking on previously unsorted columns

				emptyTo          : "bottom",   // sort empty cell to bottom, top, none, zero
				stringTo         : "max",      // sort strings in numerical column as max, min, top, bottom, zero
				textExtraction   : "simple",   // text extraction method/function - function(node, table, cellIndex){}
				textSorter       : null,       // use custom text sorter - function(a,b){ return a.sort(b); } // basic sort

				// widget options
				widgets: [],                   // method to add widgets, e.g. widgets: ['zebra']
				widgetOptions    : {
					zebra : [ "even", "odd" ]    // zebra widget alternating row class names
				},
				initWidgets      : true,       // apply widgets on tablesorter initialization

				// callbacks
				initialized      : null,       // function(table){},
				onRenderHeader   : null,       // function(index){},

				// css class names
				tableClass       : 'tablesorter',
				cssAsc           : "tablesorter-headerSortUp",
				cssChildRow      : "expand-child",
				cssDesc          : "tablesorter-headerSortDown",
				cssHeader        : "tablesorter-header",
				cssInfoBlock     : "tablesorter-infoOnly", // don't sort tbody with this class name

				// selectors
				selectorHeaders  : '> thead th',
				selectorRemove   : "tr.remove-me",

				// advanced
				debug            : false,

				// Internal variables
				headerList: [],
				empties: {},
				strings: {},
				parsers: []

				// deprecated; but retained for backwards compatibility
				// widgetZebra: { css: ["even", "odd"] }

			};

			/* debuging utils */
			function log(s) {
				if (typeof console !== "undefined" && typeof console.log !== "undefined") {
					console.log(s);
				} else {
					alert(s);
				}
			}

			function benchmark(s, d) {
				log(s + " (" + (new Date().getTime() - d.getTime()) + "ms)");
			}

			this.benchmark = benchmark;
			this.hasInitialized = false;

			function getElementText(table, node, cellIndex) {
				if (!node) { return ""; }
				var c = table.config,
					t = c.textExtraction, text = "";
				if (t === "simple") {
					if (c.supportsTextContent) {
						text = node.textContent; // newer browsers support this
					} else {
						if (node.childNodes[0] && node.childNodes[0].hasChildNodes()) {
							text = node.childNodes[0].innerHTML;
						} else {
							text = node.innerHTML;
						}
					}
				} else {
					if (typeof(t) === "function") {
						text = t(node, table, cellIndex);
					} else if (typeof(t) === "object" && t.hasOwnProperty(cellIndex)) {
						text = t[cellIndex](node, table, cellIndex);
					} else {
						text = c.supportsTextContent ? node.textContent : $(node).text();
					}
				}
				return $.trim(text);
			}

			/* parsers utils */
			function getParserById(name) {
				var i, l = parsers.length;
				for (i = 0; i < l; i++) {
					if (parsers[i].id.toLowerCase() === (name.toString()).toLowerCase()) {
						return parsers[i];
					}
				}
				return false;
			}

			function detectParserForColumn(table, rows, rowIndex, cellIndex) {
				var i, l = parsers.length,
				node = false,
				nodeValue = '',
				keepLooking = true;
				while (nodeValue === '' && keepLooking) {
					rowIndex++;
					if (rows[rowIndex]) {
						node = rows[rowIndex].cells[cellIndex];
						nodeValue = getElementText(table, node, cellIndex);
						if (table.config.debug) {
							log('Checking if value was empty on row ' + rowIndex + ', column: ' + cellIndex + ': ' + nodeValue);
						}
					} else {
						keepLooking = false;
					}
				}
				for (i = 1; i < l; i++) {
					if (parsers[i].is(nodeValue, table, node)) {
						return parsers[i];
					}
				}
				// 0 is always the generic parser (text)
				return parsers[0];
			}

			function buildParserCache(table, $headers) {
				var c = table.config,
					tb = $(table.tBodies).filter(':not(.' + c.cssInfoBlock + ')'),
					ts = $.tablesorter, rows, list, l, i, h, m, ch, cl, p, parsersDebug = "";
				if ( tb.length === 0) { return; } // In the case of empty tables
				rows = tb[0].rows;
				if (rows[0]) {
					list = [];
					l = rows[0].cells.length;
					for (i = 0; i < l; i++) {
						// tons of thanks to AnthonyM1229 for working out the following selector (issue #74) to make this work in IE8!
						h = $headers.filter(':not([colspan])[data-column="'+i+'"]:last,[colspan="1"][data-column="'+i+'"]:last');
						ch = c.headers[i];
						// get column parser
						p = getParserById( ts.getData(h, ch, 'sorter') );
						// empty cells behaviour - keeping emptyToBottom for backwards compatibility.
						c.empties[i] = ts.getData(h, ch, 'empty') || c.emptyTo || (c.emptyToBottom ? 'bottom' : 'top' );
						// text strings behaviour in numerical sorts
						c.strings[i] = ts.getData(h, ch, 'string') || c.stringTo || 'max';
						if (!p) {
							p = detectParserForColumn(table, rows, -1, i);
						}
						if (c.debug) {
							parsersDebug += "column:" + i + "; parser:" + p.id + "; string:" + c.strings[i] + '; empty: ' + c.empties[i] + "\n";
						}
						list.push(p);
					}
				}
				if (c.debug) {
					log(parsersDebug);
				}
				return list;
			}

			/* utils */
			function buildCache(table) {
				var b = table.tBodies,
				tc = table.config,
				totalRows,
				totalCells,
				parsers = tc.parsers,
				t, i, j, k, c, cols, cacheTime;
				tc.cache = {};
				if (tc.debug) {
					cacheTime = new Date();
				}
				for (k = 0; k < b.length; k++) {
					tc.cache[k] = { row: [], normalized: [] };
					// ignore tbodies with class name from css.cssInfoBlock
					if (!$(b[k]).hasClass(tc.cssInfoBlock)) {
						$(b[k]).addClass('tablesorter-hidden');
						totalRows = (b[k] && b[k].rows.length) || 0;
						totalCells = (b[k].rows[0] && b[k].rows[0].cells.length) || 0;
						for (i = 0; i < totalRows; ++i) {
							/** Add the table data to main data array */
							c = $(b[k].rows[i]);
							cols = [];
							// if this is a child row, add it to the last row's children and continue to the next row
							if (c.hasClass(tc.cssChildRow)) {
								tc.cache[k].row[tc.cache[k].row.length - 1] = tc.cache[k].row[tc.cache[k].row.length - 1].add(c);
								// go to the next for loop
								continue;
							}
							tc.cache[k].row.push(c);
							for (j = 0; j < totalCells; ++j) {
								t = getElementText(table, c[0].cells[j], j);
								// allow parsing if the string is empty, previously parsing would change it to zero,
								// in case the parser needs to extract data from the table cell attributes
								cols.push( parsers[j].format(t, table, c[0].cells[j], j) );
							}
							cols.push(tc.cache[k].normalized.length); // add position for rowCache
							tc.cache[k].normalized.push(cols);
						}
						$(b[k]).removeClass('tablesorter-hidden');
					}
				}
				if (tc.debug) {
					benchmark("Building cache for " + totalRows + " rows", cacheTime);
				}
			}

			function getWidgetById(name) {
				var i, w, l = widgets.length;
				for (i = 0; i < l; i++) {
					w = widgets[i];
					if (w && w.hasOwnProperty('id') && w.id.toLowerCase() === name.toLowerCase()) {
						return w;
					}
				}
			}

			function applyWidget(table, init) {
				var tc = table.config, c = tc.widgets,
				time, i, w, l = c.length;
				if (tc.debug) {
					time = new Date();
				}
				for (i = 0; i < l; i++) {
					w = getWidgetById(c[i]);
					if ( w ) {
						if (init === true && w.hasOwnProperty('init')) {
							w.init(table, widgets, w);
						} else if (!init && w.hasOwnProperty('format')) {
							w.format(table);
						}
					}
				}
				if (tc.debug) {
					benchmark("Completed " + (init === true ? "initializing" : "applying") + " widgets", time);
				}
			}

			// init flag (true) used by pager plugin to prevent widget application
			function appendToTable(table, init) {
				var c = table.config,
				b = table.tBodies,
				rows = [],
				r, n, totalRows, checkCell, c2 = c.cache,
				f, i, j, k, l, pos, appendTime;
				if (c.debug) {
					appendTime = new Date();
				}
				for (k = 0; k < b.length; k++) {
					if (!$(b[k]).hasClass(c.cssInfoBlock)){
						$(b[k]).addClass('tablesorter-hidden');
						f = document.createDocumentFragment();
						r = c2[k].row;
						n = c2[k].normalized;
						totalRows = n.length;
						checkCell = totalRows ? (n[0].length - 1) : 0;
						for (i = 0; i < totalRows; i++) {
							pos = n[i][checkCell];
							rows.push(r[pos]);
							// removeRows used by the pager plugin
							if (!c.appender || !c.removeRows) {
								l = r[pos].length;
								for (j = 0; j < l; j++) {
									f.appendChild(r[pos][j]);
								}
							}
						}
						table.tBodies[k].appendChild(f);
						$(b[k]).removeClass('tablesorter-hidden');
					}
				}
				if (c.appender) {
					c.appender(table, rows);
				}
				if (c.debug) {
					benchmark("Rebuilt table", appendTime);
				}
				// apply table widgets
				if (!init) { applyWidget(table); }
				// trigger sortend
				$(table).trigger("sortEnd", table);
			}

			// computeTableHeaderCellIndexes from:
			// http://www.javascripttoolbox.com/lib/table/examples.php
			// http://www.javascripttoolbox.com/temp/table_cellindex.html
			function computeThIndexes(t) {
				var matrix = [],
				lookup = {},
				trs = $(t).find('thead:eq(0) tr'),
				i, j, k, l, c, cells, rowIndex, cellId, rowSpan, colSpan, firstAvailCol, matrixrow;
				for (i = 0; i < trs.length; i++) {
					cells = trs[i].cells;
					for (j = 0; j < cells.length; j++) {
						c = cells[j];
						rowIndex = c.parentNode.rowIndex;
						cellId = rowIndex + "-" + c.cellIndex;
						rowSpan = c.rowSpan || 1;
						colSpan = c.colSpan || 1;
						if (typeof(matrix[rowIndex]) === "undefined") {
							matrix[rowIndex] = [];
						}
						// Find first available column in the first row
						for (k = 0; k < matrix[rowIndex].length + 1; k++) {
							if (typeof(matrix[rowIndex][k]) === "undefined") {
								firstAvailCol = k;
								break;
							}
						}
						lookup[cellId] = firstAvailCol;
						// add data-column
						$(c).attr({ 'data-column' : firstAvailCol }); // 'data-row' : rowIndex
						for (k = rowIndex; k < rowIndex + rowSpan; k++) {
							if (typeof(matrix[k]) === "undefined") {
								matrix[k] = [];
							}
							matrixrow = matrix[k];
							for (l = firstAvailCol; l < firstAvailCol + colSpan; l++) {
								matrixrow[l] = "x";
							}
						}
					}
				}
				return lookup;
			}

			function formatSortingOrder(v) {
				// look for "d" in "desc" order; return true
				return (/^d/i.test(v) || v === 1);
			}


			function buildHeaders(table) {
				var header_index = computeThIndexes(table), ch, $t,
					$th, lock, time, $tableHeaders, c = table.config, ts = $.tablesorter;
					c.headerList = [];
				if (c.debug) {
					time = new Date();
				}
				$tableHeaders = $(table).find(c.selectorHeaders)
				.each(function(index) {
					$t = $(this);
					ch = c.headers[index];
					this.innerHTML = '<div class="tablesorter-header-inner">' + this.innerHTML + '</div>'; // faster than wrapInner
					if (c.onRenderHeader) { c.onRenderHeader.apply($t, [index]); }
					this.column = header_index[this.parentNode.rowIndex + "-" + this.cellIndex];
					this.order = formatSortingOrder( ts.getData($t, ch, 'sortInitialOrder') || c.sortInitialOrder ) ? [1,0,2] : [0,1,2];
					this.count = -1; // set to -1 because clicking on the header automatically adds one
					if (ts.getData($t, ch, 'sorter') === 'false') { this.sortDisabled = true; }
					this.lockedOrder = false;
					lock = ts.getData($t, ch, 'lockedOrder') || false;
					if (typeof(lock) !== 'undefined' && lock !== false) {
						this.order = this.lockedOrder = formatSortingOrder(lock) ? [1,1,1] : [0,0,0];
					}
					if (!this.sortDisabled) {
						$th = $t.addClass(c.cssHeader);
					}
					// add cell to headerList
					c.headerList[index] = this;
					// add to parent in case there are multiple rows
					$t.parent().addClass(c.cssHeader);
				});
				if (table.config.debug) {
					benchmark("Built headers:", time);
					log($tableHeaders);
				}
				return $tableHeaders;
			}

			function isValueInArray(v, a) {
				var i, l = a.length;
				for (i = 0; i < l; i++) {
					if (a[i][0] === v) {
						return true;
					}
				}
				return false;
			}

			function setHeadersCss(table, $headers, list) {
				var f, h = [], i, j, l, css = [table.config.cssDesc, table.config.cssAsc];
				// remove all header information
				$headers
					.removeClass(css.join(' '))
					.each(function() {
						if (!this.sortDisabled) {
							h[this.column] = $(this);
						}
					});
				l = list.length;
				for (i = 0; i < l; i++) {
					if (list[i][1] === 2) { continue; } // direction = 2 means reset!
					if (h[list[i][0]]) {
						// add class if cell exists - fix for issue #78
						h[list[i][0]].addClass(css[list[i][1]]);
					}
					// multicolumn sorting updating
					f = $headers.filter('[data-column="' + list[i][0] + '"]');
					if (l > 1 && f.length) {
						for (j = 0; j < f.length; j++) {
							if (!f[j].sortDisabled) {
								$(f[j]).addClass(css[list[i][1]]);
							}
						}
					}
				}
			}

			function fixColumnWidth(table) {
				if (table.config.widthFixed) {
					var colgroup = $('<colgroup>');
					$("tr:first td", table.tBodies[0]).each(function() {
						colgroup.append($('<col>').css('width', $(this).width()));
					});
					$(table).prepend(colgroup);
				}
			}

			function updateHeaderSortCount(table, sortList) {
				var i, s, o, c = table.config,
				l = sortList.length;
				for (i = 0; i < l; i++) {
					s = sortList[i];
					o = c.headerList[s[0]];
					if (o) { // prevents error if sorton array is wrong
						o.count = s[1] % (c.sortReset ? 3 : 2);
					}
				}
			}

			function getCachedSortType(parsers, i) {
				return (parsers && parsers[i]) ? parsers[i].type || '' : '';
			}

			/* sorting methods - reverted sorting method back to version 2.0.3 */
			function multisort(table, sortList) {
				var dynamicExp, col, mx = 0, dir = 0, tc = table.config,
				l = sortList.length, bl = table.tBodies.length,
				sortTime, i, j, k, c, cache, lc, s, e, order, orgOrderCol;
				if (tc.debug) { sortTime = new Date(); }
				for (k = 0; k < bl; k++) {
					dynamicExp = "var sortWrapper = function(a,b) {";
					cache = tc.cache[k];
					lc = cache.normalized.length;
					for (i = 0; i < l; i++) {
						c = sortList[i][0];
						order = sortList[i][1];
						// fallback to natural sort since it is more robust
						s = /n/i.test(getCachedSortType(tc.parsers, c)) ? "Numeric" : "Text";
						s += order === 0 ? "" : "Desc";
						e = "e" + i;
						// get max column value (ignore sign)
						if (/Numeric/.test(s) && tc.strings[c]) {
							for (j = 0; j < lc; j++) {
								col = Math.abs(parseFloat(cache.normalized[j][c]));
								mx = Math.max( mx, isNaN(col) ? 0 : col );
							}
							// sort strings in numerical columns
							if (typeof(tc.string[tc.strings[c]]) === 'boolean') {
								dir = (order === 0 ? 1 : -1) * (tc.string[tc.strings[c]] ? -1 : 1);
							} else {
								dir = (tc.strings[c]) ? tc.string[tc.strings[c]] || 0 : 0;
							}
						}
						dynamicExp += "var " + e + " = sort" + s + "(table,a[" + c + "],b[" + c + "]," + c + "," + mx +  "," + dir + "); ";
						dynamicExp += "if (" + e + ") { return " + e + "; } ";
						dynamicExp += "else { ";
					}
					// if value is the same keep orignal order
					orgOrderCol = (cache.normalized && cache.normalized[0]) ? cache.normalized[0].length - 1 : 0;
					dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";
					for (i=0; i < l; i++) {
						dynamicExp += "}; ";
					}
					dynamicExp += "return 0; ";
					dynamicExp += "}; ";
					eval(dynamicExp);
					cache.normalized.sort(sortWrapper); // sort using eval expression
				}
				if (tc.debug) { benchmark("Sorting on " + sortList.toString() + " and dir " + order+ " time", sortTime); }
			}

			// Natural sort - https://github.com/overset/javascript-natural-sort
			function sortText(table, a, b, col) {
				if (a === b) { return 0; }
				var c = table.config, e = c.string[ (c.empties[col] || c.emptyTo ) ],
					r = $.tablesorter.regex, xN, xD, yN, yD, xF, yF, i, mx;
				if (a === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? -1 : 1) : -e || -1; }
				if (b === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? 1 : -1) : e || 1; }
				if (typeof c.textSorter === 'function') { return c.textSorter(a, b, table, col); }
				// chunk/tokenize
				xN = a.replace(r[0], '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0');
				yN = b.replace(r[0], '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0');
				// numeric, hex or date detection
				xD = parseInt(a.match(r[2])) || (xN.length !== 1 && a.match(r[1]) && Date.parse(a));
				yD = parseInt(b.match(r[2])) || (xD && b.match(r[1]) && Date.parse(b)) || null;
				// first try and sort Hex codes or Dates
				if (yD) {
					if ( xD < yD ) { return -1; }
					if ( xD > yD ) { return 1; }
				}
				mx = Math.max(xN.length, yN.length);
				// natural sorting through split numeric strings and default strings
				for (i = 0; i < mx; i++) {
					// find floats not starting with '0', string or 0 if not defined (Clint Priest)
					xF = (!(xN[i] || '').match(r[3]) && parseFloat(xN[i])) || xN[i] || 0;
					yF = (!(yN[i] || '').match(r[3]) && parseFloat(yN[i])) || yN[i] || 0;
					// handle numeric vs string comparison - number < string - (Kyle Adams)
					if (isNaN(xF) !== isNaN(yF)) { return (isNaN(xF)) ? 1 : -1; }
					// rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
					if (typeof xF !== typeof yF) {
						xF += '';
						yF += '';
					}
					if (xF < yF) { return -1; }
					if (xF > yF) { return 1; }
				}
				return 0;
			}

			function sortTextDesc(table, a, b, col) {
				if (a === b) { return 0; }
				var c = table.config, e = c.string[ (c.empties[col] || c.emptyTo ) ];
				if (a === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? -1 : 1) : e || 1; }
				if (b === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? 1 : -1) : -e || -1; }
				if (typeof c.textSorter === 'function') { return c.textSorter(b, a, table, col); }
				return sortText(table, b, a);
			}

			// return text string value by adding up ascii value
			// so the text is somewhat sorted when using a digital sort
			// this is NOT an alphanumeric sort
			function getTextValue(a, mx, d) {
				if (mx) {
					// make sure the text value is greater than the max numerical value (mx)
					var i, l = a.length, n = mx + d;
					for (i = 0; i < l; i++) {
						n += a.charCodeAt(i);
					}
					return d * n;
				}
				return 0;
			}

			function sortNumeric(table, a, b, col, mx, d) {
				if (a === b) { return 0; }
				var c = table.config, e = c.string[ (c.empties[col] || c.emptyTo ) ];
				if (a === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? -1 : 1) : -e || -1; }
				if (b === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? 1 : -1) : e || 1; }
				if (isNaN(a)) { a = getTextValue(a, mx, d); }
				if (isNaN(b)) { b = getTextValue(b, mx, d); }
				return a - b;
			}

			function sortNumericDesc(table, a, b, col, mx, d) {
				if (a === b) { return 0; }
				var c = table.config, e = c.string[ (c.empties[col] || c.emptyTo ) ];
				if (a === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? -1 : 1) : e || 1; }
				if (b === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? 1 : -1) : -e || -1; }
				if (isNaN(a)) { a = getTextValue(a, mx, d); }
				if (isNaN(b)) { b = getTextValue(b, mx, d); }
				return b - a;
			}

			function checkResort($table, flag, callback) {
				var t = $table[0];
				if (flag !== false) {
					$table.trigger("sorton", [t.config.sortList, function(){
						$table.trigger('updateComplete');
						if (typeof callback === "function") {
							callback(t);
						}
					}]);
				} else {
					$table.trigger('updateComplete');
					if (typeof callback === "function") {
						callback(t);
					}
				}
			}

			/* public methods */
			this.construct = function(settings) {
				return this.each(function() {
					// if no thead or tbody quit.
					if (!this.tHead || this.tBodies.length === 0) { return; }
					// declare
					var $headers, $cell, $this,
						c, i, j, k, a, s, o, downTime,
						m = $.metadata;
					// new blank config object
					this.config = {};
					// merge and extend.
					c = $.extend(true, this.config, $.tablesorter.defaults, settings);

					if (c.debug) { $.data( this, 'startoveralltimer', new Date()); }
					// store common expression for speed
					$this = $(this).addClass(c.tableClass);
					// save the settings where they read
					$.data(this, "tablesorter", c);
					c.supportsTextContent = $('<span>x</span>')[0].textContent === 'x';
					// digit sort text location; keeping max+/- for backwards compatibility
					c.string = { 'max': 1, 'min': -1, 'max+': 1, 'max-': -1, 'zero': 0, 'none': 0, 'null': 0, 'top': true, 'bottom': false };
					// build headers
					$headers = buildHeaders(this);
					// try to auto detect column type, and store in tables config
					c.parsers = buildParserCache(this, $headers);
					// build the cache for the tbody cells
					// delayInit will delay building the cache until the user starts a sort
					if (!c.delayInit) { buildCache(this); }
					// fixate columns if the users supplies the fixedWidth option
					fixColumnWidth(this);
					// apply event handling to headers
					// this is to big, perhaps break it out?
					$headers.bind('mousedown.tablesorter mouseup.tablesorter', function(e, external) {
						if (e.type === 'mousedown') {
							downTime = new Date().getTime();
							return !c.cancelSelection;
						}
						// prevent resizable widget from initializing a sort (long clicks are ignored)
						if (external !== true && (new Date().getTime() - downTime > 500)) { return false; }
						if (c.delayInit && !c.cache) { buildCache($this[0]); }
						if (!this.sortDisabled) {
							// Only call sortStart if sorting is enabled.
							$this.trigger("sortStart", $this[0]);
							// store exp, for speed
							$cell = $(this);
							k = !e[c.sortMultiSortKey];
							// get current column sort order
							this.count = (this.count + 1) % (c.sortReset ? 3 : 2);
							// reset all sorts on non-current column - issue #30
							if (c.sortRestart) {
								i = this;
								$headers.each(function() {
									// only reset counts on columns that weren't just clicked on and if not included in a multisort
									if (this !== i && (k || !$(this).is('.' + c.cssDesc + ',.' + c.cssAsc))) {
										this.count = -1;
									}
								});
							}
							// get current column index
							i = this.column;
							// user only wants to sort on one column
							if (k) {
								// flush the sort list
								c.sortList = [];
								if (c.sortForce !== null) {
									a = c.sortForce;
									for (j = 0; j < a.length; j++) {
										if (a[j][0] !== i) {
											c.sortList.push(a[j]);
										}
									}
								}
								// add column to sort list
								o = this.order[this.count];
								if (o < 2) {
									c.sortList.push([i, o]);
									// add other columns if header spans across multiple
									if (this.colSpan > 1) {
										for (j = 1; j < this.colSpan; j++) {
											c.sortList.push([i+j, o]);
										}
									}
								}
								// multi column sorting
							} else {
								// the user has clicked on an already sorted column.
								if (isValueInArray(i, c.sortList)) {
									// reverse the sorting direction for all tables.
									for (j = 0; j < c.sortList.length; j++) {
										s = c.sortList[j];
										o = c.headerList[s[0]];
										if (s[0] === i) {
											s[1] = o.order[o.count];
											if (s[1] === 2) {
												c.sortList.splice(j,1);
												o.count = -1;
											}
										}
									}
								} else {
									// add column to sort list array
									o = this.order[this.count];
									if (o < 2) {
										c.sortList.push([i, o]);
										// add other columns if header spans across multiple
										if (this.colSpan > 1) {
											for (j = 1; j < this.colSpan; j++) {
												c.sortList.push([i+j, o]);
											}
										}
									}
								}
							}
							if (c.sortAppend !== null) {
								a = c.sortAppend;
								for (j = 0; j < a.length; j++) {
									if (a[j][0] !== i) {
										c.sortList.push(a[j]);
									}
								}
							}
							// sortBegin event triggered immediately before the sort
							$this.trigger("sortBegin", $this[0]);
							// set css for headers
							setHeadersCss($this[0], $headers, c.sortList);
							multisort($this[0], c.sortList);
							appendToTable($this[0]);
							// stop normal event by returning false
							return false;
						}
					});
					if (c.cancelSelection) {
						// cancel selection
						$headers.each(function() {
							this.onselectstart = function() {
								return false;
							};
						});
					}
					// apply easy methods that trigger binded events
					$this
					.bind("update", function(e, resort, callback) {
						// remove rows/elements before update
						$(c.selectorRemove, this).remove();
						// rebuild parsers.
						c.parsers = buildParserCache(this, $headers);
						// rebuild the cache map
						buildCache(this);
						checkResort($this, resort, callback);
					})
					.bind("updateCell", function(e, cell, resort, callback) {
						// get position from the dom.
						var t = this, $tb = $(this).find('tbody'), row, pos,
						// update cache - format: function(s, table, cell, cellIndex)
						tbdy = $tb.index( $(cell).closest('tbody') );
						row = $tb.eq(tbdy).find('tr').index( $(cell).closest('tr') );
						pos = [ row, cell.cellIndex];
						t.config.cache[tbdy].normalized[pos[0]][pos[1]] = c.parsers[pos[1]].format( getElementText(t, cell, pos[1]), t, cell, pos[1] );
						checkResort($this, resort, callback);
					})
					.bind("addRows", function(e, $row, resort, callback) {
						var i, rows = $row.filter('tr').length,
						dat = [], l = $row[0].cells.length, t = this,
						tbdy = $(this).find('tbody').index( $row.closest('tbody') );
						// add each row
						for (i = 0; i < rows; i++) {
							// add each cell
							for (j = 0; j < l; j++) {
								dat[j] = c.parsers[j].format( getElementText(t, $row[i].cells[j], j), t, $row[i].cells[j], j );
							}
							// add the row index to the end
							dat.push(c.cache[tbdy].row.length);
							// update cache
							c.cache[tbdy].row.push([$row[i]]);
							c.cache[tbdy].normalized.push(dat);
							dat = [];
						}
						// resort using current settings
						checkResort($this, resort, callback);
					})
					.bind("sorton", function(e, list, callback, init) {
						$(this).trigger("sortStart", this);
						var l = c.headerList.length;
						c.sortList = [];
						$.each(list, function(i,v){
							// make sure column exists
							if (v[0] < l) { c.sortList.push(list[i]); }
						});
						// update header count index
						updateHeaderSortCount(this, c.sortList);
						// set css for headers
						setHeadersCss(this, $headers, c.sortList);
						// sort the table and append it to the dom
						multisort(this, c.sortList);
						appendToTable(this, init);
						if (typeof callback === "function") {
							callback(this);
						}
					})
					.bind("appendCache", function(e, init) {
						appendToTable(this, init);
					})
					.bind("applyWidgetId", function(e, id) {
						getWidgetById(id).format(this);
					})
					.bind("applyWidgets", function(e, init) {
						// apply widgets
						applyWidget(this, init);
					})
					.bind("destroy", function(e,c){
						$.tablesorter.destroy(this, c);
					});

					// get sort list from jQuery data or metadata
					if ($this.data() && typeof $this.data().sortlist !== 'undefined') {
						c.sortList = $this.data().sortlist;
					} else if (m && ($this.metadata() && $this.metadata().sortlist)) {
						c.sortList = $this.metadata().sortlist;
					}
					// apply widget init code
					applyWidget(this, true);
					// if user has supplied a sort list to constructor.
					if (c.sortList.length > 0) {
						$this.trigger("sorton", [c.sortList, {}, !c.initWidgets]);
					} else if (c.initWidgets) {
						// apply widget format
						applyWidget(this);
					}

					// initialized
					this.hasInitialized = true;
					if (c.debug) {
						$.tablesorter.benchmark("Overall initialization time", $.data( this, 'startoveralltimer'));
					}
					$this.trigger('tablesorter-initialized', this);
					if (typeof c.initialized === 'function') { c.initialized(this); }
				});
			};

			this.destroy = function(table, removeClasses){
				var $t = $(table), c = table.config;
				// remove widget added rows
				$t.find('thead:first tr:not(.' + c.cssHeader + ')').remove();
				// remove resizer widget stuff
				$t.find('thead:first .tablesorter-resizer').remove();
				// disable tablesorter
				$t
					.unbind('update updateCell addRows sorton appendCache applyWidgetId applyWidgets destroy mouseup mouseleave')
					.find(c.selectorHeaders)
					.unbind('click mousedown mousemove mouseup')
					.removeClass(c.cssHeader + ' ' + c.cssAsc + ' ' + c.cssDesc);
				if (removeClasses !== false) {
					$t.removeClass(c.tableClass);
				}
			};

			this.addParser = function(parser) {
				var i, l = parsers.length, a = true;
				for (i = 0; i < l; i++) {
					if (parsers[i].id.toLowerCase() === parser.id.toLowerCase()) {
						a = false;
					}
				}
				if (a) {
					parsers.push(parser);
				}
			};
			this.addWidget = function(widget) {
				widgets.push(widget);
			};

			this.formatFloat = function(s, table) {
				if (typeof(s) !== 'string' || s === '') { return s; }
				if (table.config.usNumberFormat !== false) {
					// US Format - 1,234,567.89 -> 1234567.89
					s = s.replace(/,/g,'');
				} else {
					// German Format = 1.234.567,89 -> 1234567.89
					// French Format = 1 234 567,89 -> 1234567.89
					s = s.replace(/[\s|\.]/g,'').replace(/,/g,'.');
				}
				if(/^\s*\([.\d]+\)/.test(s)) {
					s = s.replace(/^\s*\(/,'-').replace(/\)/,'');
				}
				var i = parseFloat(s);
				// return the text instead of zero
				return isNaN(i) ? $.trim(s) : i;
			};
			this.isDigit = function(s) {
				// replace all unwanted chars and match.
				return (/^[\-+(]?\d+[)]?$/).test(s.replace(/[,.'\s]/g, ''));
			};

			// regex used in natural sort
			this.regex = [
				/(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi, // chunk/tokenize numbers & letters
				/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/, //date
				/^0x[0-9a-f]+$/i, // hex
				/^0/ // leading zeros
			];
			// used when replacing accented characters during sorting
			this.characterEquivalents = {
				"a" : "\u00e1\u00e0\u00e2\u00e3\u00e4", // áàâãä
				"A" : "\u00c1\u00c0\u00c2\u00c3\u00c4", // ÁÀÂÃÄ
				"c" : "\u00e7", // ç
				"C" : "\u00c7", // Ç
				"e" : "\u00e9\u00e8\u00ea\u00eb", // éèêë
				"E" : "\u00c9\u00c8\u00ca\u00cb", // ÉÈÊË
				"i" : "\u00ed\u00ec\u0130\u00ee\u00ef", // íìİîï
				"I" : "\u00cd\u00cc\u0130\u00ce\u00cf", // ÍÌİÎÏ
				"o" : "\u00f3\u00f2\u00f4\u00f5\u00f6", // óòôõö
				"O" : "\u00d3\u00d2\u00d4\u00d5\u00d6", // ÓÒÔÕÖ
				"S" : "\u00df", // ß
				"u" : "\u00fa\u00f9\u00fb\u00fc", // úùûü
				"U" : "\u00da\u00d9\u00db\u00dc" // ÚÙÛÜ
			};
			this.replaceAccents = function(s) {
				var a, acc = '[', eq = this.characterEquivalents;
				if (!this.characterRegex) {
					this.characterRegexArray = {};
					for (a in eq) {
						if (typeof a === 'string') {
							acc += eq[a];
							this.characterRegexArray[a] = new RegExp('[' + eq[a] + ']', 'g');
						}
					}
					this.characterRegex = new RegExp(acc + ']');
				}
				if (this.characterRegex.test(s)) {
					for (a in eq) {
						if (typeof a === 'string') {
							s = s.replace( this.characterRegexArray[a], a );
						}
					}
				}
				return s;
			};

			// get sorter, string, empty, etc options for each column from
			// jQuery data, metadata, header option or header class name ("sorter-false")
			// priority = jQuery data > meta > headers option > header class name
			this.getData = function(h, ch, key) {
				var val = '', $h = $(h), m, cl;
				if (!$h.length) { return ''; }
				m = $.metadata ? $h.metadata() : false;
				cl = ' ' + ($h.attr('class') || '');
				if ($h.data() && ( typeof $h.data(key) !== 'undefined' || typeof $h.data(key.toLowerCase()) !== 'undefined') ){
					// "data-lockedOrder" is assigned to "lockedorder"; but "data-locked-order" is assigned to "lockedOrder"
					// "data-sort-initial-order" is assigned to "sortInitialOrder"
					val += $h.data(key) || $h.data(key.toLowerCase());
				} else if (m && typeof m[key] !== 'undefined') {
					val += m[key];
				} else if (ch && typeof ch[key] !== 'undefined') {
					val += ch[key];
				} else if (cl && cl.match(' ' + key + '-')) {
					// include sorter class name "sorter-text", etc
					val = cl.match( new RegExp(' ' + key + '-(\\w+)') )[1] || '';
				}
				return $.trim(val);
			};

			this.clearTableBody = function(table) {
				$(table.tBodies).filter(':not(.' + table.config.cssInfoBlock + ')').empty();
			};

		}
	})();

	// make shortcut
	var ts = $.tablesorter;

	// extend plugin scope
	$.fn.extend({
		tablesorter: ts.construct
	});

	// add default parsers
	ts.addParser({
		id: "text",
		is: function(s, table, node) {
			return true;
		},
		format: function(s, table, cell, cellIndex) {
			var c = table.config;
			s = $.trim( c.ignoreCase ? s.toLocaleLowerCase() : s );
			return c.sortLocaleCompare ? ts.replaceAccents(s) : s;
		},
		type: "text"
	});

	ts.addParser({
		id: "currency",
		is: function(s) {
			return (/^\(?[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+/).test(s); // £$€¤¥¢
		},
		format: function(s, table) {
			return ts.formatFloat(s.replace(/[^\w,. \-()]/g, ""), table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "ipAddress",
		is: function(s) {
			return (/^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/).test(s);
		},
		format: function(s, table) {
			var i, item, a = s.split("."),
			r = "",
			l = a.length;
			for (i = 0; i < l; i++) {
				item = a[i];
				if (item.length === 2) {
					r += "0" + item;
				} else {
					r += item;
				}
			}
			return ts.formatFloat(r, table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "url",
		is: function(s) {
			return (/^(https?|ftp|file):\/\//).test(s);
		},
		format: function(s) {
			return $.trim(s.replace(/(https?|ftp|file):\/\//, ''));
		},
		type: "text"
	});

	ts.addParser({
		id: "isoDate",
		is: function(s) {
			return (/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/).test(s);
		},
		format: function(s, table) {
			return ts.formatFloat((s !== "") ? (new Date(s.replace(/-/g, "/")).getTime() || "") : "", table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "percent",
		is: function(s) {
			return (/\d%\)?$/).test(s);
		},
		format: function(s, table) {
			return ts.formatFloat(s.replace(/%/g, ""), table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "usLongDate",
		is: function(s) {
			return s.match(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/);
		},
		format: function(s, table) {
			return ts.formatFloat( (new Date(s).getTime() || ''), table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "shortDate", // "mmddyyyy", "ddmmyyyy" or "yyyymmdd"
		is: function(s) {
			// testing for ####-##-#### - so it's not perfect
			return (/^(\d{2}|\d{4})[\/\-\,\.\s+]\d{2}[\/\-\.\,\s+](\d{2}|\d{4})$/).test(s);
		},
		format: function(s, table, cell, cellIndex) {
			var c = table.config, ci = c.headerList[cellIndex],
			format = ci.shortDateFormat;
			if (typeof format === 'undefined') {
				// cache header formatting so it doesn't getData for every cell in the column
				format = ci.shortDateFormat = ts.getData( ci, c.headers[cellIndex], 'dateFormat') || c.dateFormat;
			}
			s = s.replace(/\s+/g," ").replace(/[\-|\.|\,]/g, "/");
			if (format === "mmddyyyy") {
				s = s.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$1/$2");
			} else if (format === "ddmmyyyy") {
				s = s.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$2/$1");
			} else if (format === "yyyymmdd") {
				s = s.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/, "$1/$2/$3");
			}
			return ts.formatFloat( (new Date(s).getTime() || ''), table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "time",
		is: function(s) {
			return (/^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/).test(s);
		},
		format: function(s, table) {
			return ts.formatFloat( (new Date("2000/01/01 " + s).getTime() || ''), table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "digit",
		is: function(s) {
			return ts.isDigit(s);
		},
		format: function(s, table) {
			return ts.formatFloat(s.replace(/[^\w,. \-()]/g, ""), table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "metadata",
		is: function(s) {
			return false;
		},
		format: function(s, table, cell) {
			var c = table.config,
			p = (!c.parserMetadataName) ? 'sortValue' : c.parserMetadataName;
			return $(cell).metadata()[p];
		},
		type: "numeric"
	});

	// add default widgets
	ts.addWidget({
		id: "zebra",
		format: function(table) {
			var $tb, $tv, $tr, row, even, time, k, l,
			c = table.config,
			child = new RegExp(c.cssChildRow, 'i'),
			b = $(table).children('tbody:not(.' + c.cssInfoBlock + ')'),
			css = [ "even", "odd" ];
			// maintain backwards compatibility
			css = c.widgetZebra && c.hasOwnProperty('css') ? c.widgetZebra.css :
				(c.widgetOptions && c.widgetOptions.hasOwnProperty('zebra')) ? c.widgetOptions.zebra : css;
			if (c.debug) {
				time = new Date();
			}
			for (k = 0; k < b.length; k++ ) {
				// loop through the visible rows
				$tb = $(b[k]);
				l = $tb.children('tr').length;
				if (l > 1) {
					row = 0;
					$tv = $tb.find('tr:visible');
					$tb.addClass('tablesorter-hidden');
					// revered back to using jQuery each - strangely it's the fastest method
					$tv.each(function(){
						$tr = $(this);
						// style children rows the same way the parent row was styled
						if (!child.test(this.className)) { row++; }
						even = (row % 2 === 0);
						$tr.removeClass(css[even ? 1 : 0]).addClass(css[even ? 0 : 1]);
					});
					$tb.removeClass('tablesorter-hidden');
				}
			}
			if (c.debug) {
				ts.benchmark("Applying Zebra widget", time);
			}
		}
	});

})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:about', location = '/includes/js/about/about-page.js' */
AJS.toInit(function(d){var a=d("#confluence-about-link"),b;var c=function(){var f=AJS.Meta.get("version-number").match(/^\d+\.\d+/),h="Atlassian Confluence and Confluence Plugins",g=AJS.Meta.get("context-path")+"/aboutconfluence.action",e=new AJS.ConfluenceDialog({id:"about-confluence-dialog",closeOnOutsideClick:true});e.addHeader(h);e.addCancel("Close",function(){e.hide()});d.get(g,function(i){e.addPanel("default",i,"about-page-content")});return e};a.click(function(f){f.preventDefault();d(this).removeClass("interactive");if(b==null){b=c()}b.show()})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:analytics-support', location = '/includes/js/analytics-support/analytics-common.js' */
(function(f){AJS.Confluence.Analytics=AJS.Confluence.Analytics||{};var g=/([^\?]+)[\?]?([^#]*)[#]?(.*)/;var c=["source","urlPath","queryParams","anchor"];var b;var i;function j(o){var n={};var q=g.exec(o);if(q){for(var p=0;p<c.length;p++){n[c[p]]=q[p]}n.queryParams=d(n.queryParams)}return n}function k(n){if(f.isEmptyObject(n)){return""}else{return(!n.urlPath?"":n.urlPath)+(f.isEmptyObject(n.queryParams)?"":"?"+m(n.queryParams))+(!n.anchor?"":"#"+n.anchor)}}function d(r){var q={};if(r){var p=r.split("&");for(var o=0;o<p.length;o++){var n=p[o].split("=");if(!q[n[0]]){q[n[0]]=[]}q[n[0]].push(p[o].substring(n[0].length+1))}}return q}function m(o){var q="";for(var p in o){for(var n=0;n<o[p].length;n++){q+="&"+p;if(o[p][n]){q+="="+o[p][n]}}}return q.substring(1)}function a(o,p){var n=j(o);if(!f.isEmptyObject(n)){n.queryParams.src=[p]}return k(n)}function e(){if("undefined"===typeof b){b=f('script[src$="/ga.js"]').length>0}return b}function h(){if("undefined"===typeof i){var n=f._data(window,"events");i=n.analytics&&n.analytics.length>0}return i}function l(){if(e()){if(_gaq){_gaq.push(function(){window.history.replaceState(null,"",AJS.Confluence.Analytics.srcRemovedUrl(document.URL))})}else{AJS.log("ERROR: Could not queue src parameter URL clean up task: _gaq is not defined but Google Analytics is activated.")}}else{window.history.replaceState(null,"",AJS.Confluence.Analytics.srcRemovedUrl(document.URL))}}AJS.Confluence.Analytics.setAnalyticsSource=function(n,o){if(e()||h()){n.attr("href",function(q,p){return a(p,encodeURIComponent(o))})}};AJS.Confluence.Analytics.srcRemovedUrl=function(o){var n=j(o);delete n.queryParams.src;return k(n)};AJS.Confluence.Analytics.srcParamValues=function(n){var o=j(n).queryParams;return o&&o.src?o.src:[]};AJS.toInit(function(p){var n=AJS.Confluence.Analytics.srcParamValues(document.URL);for(var o=0;o<n.length;o++){AJS.trigger("analytics",{name:"confluence.viewpage.src."+n[o]})}if(window.history&&window.history.replaceState){l()}})}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-blueprints:confluence-team-space-blueprint-resources', location = 'com/atlassian/confluence/plugins/team/js/confluence-team-space-blueprints.js' */
AJS.bind("blueprint.wizard-register.ready",function(){function a(d,c){c.pageData.ContentPageTitle=c.pageData.name;return Confluence.SpaceBlueprint.CommonWizardBindings.submit(d,c)}function b(d,c){c.soyRenderContext.atlToken=AJS.Meta.get("atl-token");c.soyRenderContext.showSpacePermission=false}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-space-blueprints:team-space-blueprint-item",function(c){c.on("submit.teamSpaceId",a);c.on("pre-render.teamSpaceId",b);c.on("post-render.teamSpaceId",Confluence.SpaceBlueprint.CommonWizardBindings.postRender)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-blueprints:confluence-team-space-blueprint-resources', location = 'com/atlassian/confluence/plugins/team/soy/dialog-page.soy' */
// This file was automatically generated from dialog-page.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.SpaceBlueprints == 'undefined') { Confluence.SpaceBlueprints = {}; }
if (typeof Confluence.SpaceBlueprints.Team == 'undefined') { Confluence.SpaceBlueprints.Team = {}; }


Confluence.SpaceBlueprints.Team.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="decisions-form" class="common-space-form aui">');
  Confluence.Templates.Blueprints.CreateSpace.createSpaceFormFields({showSpacePermission: false, fieldErrors: opt_data.fieldErrors, name: opt_data.name, spaceKey: opt_data.spaceKey}, output);
  output.append('<fieldset><div class="field-group"><label for="team-members">', soy.$$escapeHtml("Team members"), '</label><input id="team-members" class="text long-field autocomplete-multiuser" type="text" name="members" placeholder="', soy.$$escapeHtml("Add your team members"), '" data-autofill-user="true"/></div><div class="field-group"><label for="team-description">', soy.$$escapeHtml("Description"), '</label><textarea id="team-description" class="textarea long-field" rows="3" type="text" name="description" placeholder="', soy.$$escapeHtml("Let others know what this space is for"), '"></textarea></div></fieldset><input type="hidden" name="atl_token" value="', soy.$$escapeHtml(opt_data.atlToken), '" /></form>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-blueprints:confluence-documentation-space-blueprint-resources', location = 'com/atlassian/confluence/plugins/documentation/js/confluence-documentation-space-blueprint.js' */
AJS.bind("blueprint.wizard-register.ready",function(){function b(d,c){c.pageData.ContentPageTitle=c.pageData.name;return Confluence.SpaceBlueprint.CommonWizardBindings.submit(d,c)}function a(d,c){c.soyRenderContext.atlToken=AJS.Meta.get("atl-token");c.soyRenderContext.showSpacePermission=false}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-space-blueprints:documentation-space-blueprint-item",function(c){c.on("submit.documentationSpaceId",b);c.on("pre-render.documentationSpaceId",a);c.on("post-render.documentationSpaceId",Confluence.SpaceBlueprint.CommonWizardBindings.postRender)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-blueprints:confluence-documentation-space-blueprint-resources', location = 'com/atlassian/confluence/plugins/documentation/soy/dialog-page.soy' */
// This file was automatically generated from dialog-page.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.SpaceBlueprints == 'undefined') { Confluence.SpaceBlueprints = {}; }
if (typeof Confluence.SpaceBlueprints.Documentation == 'undefined') { Confluence.SpaceBlueprints.Documentation = {}; }


Confluence.SpaceBlueprints.Documentation.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="documentation-space-form" class="common-space-form aui">');
  Confluence.Templates.Blueprints.CreateSpace.createSpaceFormFields({showSpacePermission: false, fieldErrors: opt_data.fieldErrors, name: opt_data.name, key: opt_data.key}, output);
  output.append('<fieldset><div class="field-group"><label for="documentation-description">', soy.$$escapeHtml("Description"), '</label><textarea id="documentation-description" class="textarea long-field" rows="3" type="text" name="spaceDesc" placeholder="', soy.$$escapeHtml("Briefly describe the documentation in this space"), '"></textarea></div></fieldset><input type="hidden" name="noPageTitlePrefix" value="true" /><input type="hidden" name="atl_token" value="', soy.$$escapeHtml(opt_data.atlToken), '" /></form>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-feature-discovery-plugin:confluence-feature-discovery-plugin-resources', location = '/js/confluence-feature-discovery-plugin.js' */
(function(d){Confluence.FeatureDiscovery={};var f,a=false,b=3;function c(g){if(f===undefined){f=JSON.parse(AJS.Meta.get("discovered-plugin-features")||"{}")}if(g){return f[g]||[]}return f}function e(j,l){var k=c(j);for(var h=0,g=k.length;h<g;h++){if(k[h]==l){return true}}return false}Confluence.FeatureDiscovery.forPlugin=function(i,h){var l=Confluence.storageManager("feature-discovery."+i);h=h||b;function k(n){var m=parseInt(l.getItem(n),10);return isNaN(m)?0:m}function j(n,m){return l.setItem(n,m)}function g(m){return l.removeItem(m)}return{addDiscoveryView:function(m){j(m,k(m)+1)},shouldShow:function(m){if(a||e(i,m)){return false}if(k(m)>=h){this.markDiscovered(m);return false}a=true;return true},markDiscovered:function(n,m){if(e(i,n)){return}d.ajax({url:AJS.contextPath()+"/rest/feature-discovery/1.0/discovered/"+i+"/"+n,type:"POST",success:function(){c(i).unshift(n);g(n);AJS.trigger("feature-discovered",{pluginKey:i,featureKey:n});if(m&&d.isFunction(m)){m()}}})},listDiscovered:function(){return c(i).slice(0)}}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'templates/recently.soy' */
// This file was automatically generated from recently.soy.
// Please don't edit this file by hand.

if (typeof RY == 'undefined') { var RY = {}; }
if (typeof RY.Templates == 'undefined') { RY.Templates = {}; }


RY.Templates.body = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="recently-viewed" class="aui-group"><div class="aui-item"><div class="top"><div class="filter"><form class="aui"><input class="filter-input text" type="text" placeholder="', "Filter", '"></form></div></div><div class="pages"></div><div class="recently-viewed-spinner" id="', soy.$$escapeHtmlAttribute(opt_data.spinnerId), '"></div></div></div>');
  return opt_sb ? '' : output.toString();
};


RY.Templates.pageCollection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="groups"></div><div class="empty"></div>');
  return opt_sb ? '' : output.toString();
};


RY.Templates.pageGroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h3>', soy.$$escapeHtml(opt_data.title), '</h3><ul/>');
  return opt_sb ? '' : output.toString();
};


RY.Templates.pageItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="page-icon"><a href=', soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)), ' class="icon icon-', soy.$$escapeHtmlAttribute(opt_data.type), '"></a></div><div class="page-title"><a class="ellipsis" href=', soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)), '>', soy.$$escapeHtml(opt_data.title), ' - ', soy.$$escapeHtml(opt_data.space), '</a></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/util.js' */
var RY=RY||{};(function(){var b=new Date();var c=new Date(b).getTime();var a=new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime();var d=new Date(b.getFullYear(),b.getMonth(),b.getDate()-1).getTime();RY.util=RY.Util={analytics:{trackDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-dialog-open"})},trackPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-page-open"})}},quote:function(e){return(e).replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},diffInDays:function(g,f){var e=1000*60*60*24;return Math.floor((g-f)/e)},daysSince:function(e){if(e>=a){return 0}else{if(e>=d){return 1}else{return RY.util.diffInDays(c,e)}}},formatDate:function(e){if(e>=a){e="Today"}else{if(e>=d){e="Yesterday"}else{var f=RY.util.diffInDays(c,e);e=AJS.format("{0} days ago",f)}}return e},wait:function(h,j,f){var i,k,e;var g=function(){k=setTimeout(function(){h.apply(f,e)},j)};return function(){e=arguments;var l=new Date();if(i&&l-i<j){clearTimeout(k)}g();i=l}}}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-storage.js' */
var RY=RY||{};RY.RecentPageStorage=function(h){var f="com.atlassian.confluence.plugins.recently.viewed.pages.v1";var d=100;var c={};var b=function(){var i=function(k,l){if(k==="lastSeen"&&_.isString(l)){if(AJS.$.browser.msie){l=l.replace(/\-/g,"/");l=l.replace(/T.*$/,"")}return new Date(l).getTime()}else{return l}};try{c=JSON.parse(h.getItem(f),i)||{}}catch(j){c={}}return c};var g=function(){var i=_.values(c);var k=i.length-d;if(k>0){var j=_.sortBy(i,function(l){return l.lastSeen});_.times(k,function(){var l=j.shift();delete c[l.id]})}};var e=function(){g();try{h.setItem(f,JSON.stringify(c))}catch(i){}};this.addCurrentPage=function(i){if(!(i.id&&i.title)){return}b();a(i);e()};var a=function(i){var j=c[i.id];if(!j){c[i.id]=j={}}j=_.extend(j,i);j.lastSeen=new Date().getTime();j.count=j.count+1||1};this.getPages=function(){return _.values(b())}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/filter.js' */
var RY=RY||{};RY.FilterView=Backbone.View.extend({className:"filter",events:{"input .filter-input":"onInput","keyup .filter-input":"onInput","keydown .filter-input":"onKeydown"},initialize:function(){_.bindAll(this,"render","onInput","onKeydown","search");this.navigationEvents=this.options.navigationEvents;this.onInput=RY.util.wait(this.onInput,100,this)},render:function(){this.$input=this.$(".filter-input");return this},onInput:function(a){if(a&&_.contains([37,38,39,40],a.which)){return}this.search()},onKeydown:function(a){switch(a.which){case 13:this.navigationEvents.trigger("select");a.preventDefault();a.stopPropagation();break;case 38:this.navigationEvents.trigger("previous");a.preventDefault();break;case 40:this.navigationEvents.trigger("next");a.preventDefault();break}},search:function(){var a=this.$input.val();this.collection.search(a)}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page.js' */
var RY=RY||{};RY.Page=Backbone.Model.extend({href:function(){return AJS.contextPath()+this.get("url")},daysSinceLastSeen:function(){return RY.util.daysSince(this.get("lastSeen"))}});RY.PageCollection=Backbone.Collection.extend({model:RY.Page,url:AJS.contextPath()+"/rest/recentlyviewed/1.0/recent",search:function(b){var a;if(AJS.$.trim(b).length===0){a=this.models}else{var c=b.match(/[^\s-]+/g);a=this.filter(function(f){var g=f.get("title");var e=f.get("space");var d=(g+e).toLowerCase();return _.all(c,function(h){return d.indexOf(h.toLowerCase())!==-1})})}this.trigger("filter",a,b);return a},comparator:function(a){return -(a.get("lastSeen"))}});RY.PageView=Backbone.View.extend({tagName:"li",className:"ry-page",template:RY.Templates.pageItem,initialize:function(){_.bindAll(this,"hide","show","render")},hide:function(){this.$el.hide().removeClass("shown")},show:function(){this.$el.show().addClass("shown")},render:function(){var a=this.model.toJSON();a.href=this.model.href();this.$el.html(this.template(a));return this}});RY.PageGroupView=Backbone.View.extend({className:"group",template:RY.Templates.pageGroup,initialize:function(){_.bindAll(this,"hide","hideAll","show","showBorder","showPages","add","render");this.title=this.options.title;this.modelViews={}},hide:function(){this.$el.hide()},hideAll:function(){this.$el.removeClass("border").hide();_.invoke(_.values(this.modelViews),"hide")},show:function(){this.$el.show()},showBorder:function(){this.$el.addClass("border")},showPages:function(a){var c=this;var b=false;_.each(a,function(e){var d=c.modelViews[e.cid];if(d){b=true;d.show()}});if(b){this.show()}return b},add:function(b){var a=new RY.PageView({model:b});this.modelViews[b.cid]=a;this.$list.append(a.render().el)},render:function(){this.$el.html(this.template({title:this.title}));this.$list=this.$("ul");return this}});RY.PageNavigator=function(a,e,c){var g=null;function f(){return a.find("li.shown")}function b(i){pageItems=f();var h=pageItems.index(pageItems.filter(".highlight"));if(g){g.removeClass("highlight")}i+=h;if(i<0){i=pageItems.length-1}if(i>=pageItems.length){i=0}g=pageItems.eq(i);g.addClass("highlight")}function d(){if(!g.length){return}var k=e;var l=k.children();var j=k.height();var i=g.outerHeight(true);var h=g.position().top;if(h<0){if(f().index(g)===0){k.scrollTop(0);return}k.scrollTop(g.offset().top-l.offset().top)}else{if(h>j){k.scrollTop(g.offset().top-l.offset().top-j+i)}}}c.on("select",function(){if(g&&g.is(":visible")){RY.util.analytics.trackPageOpen();var h=g.find(".page-title a").attr("href");window.location=h}},this);c.on("previous",function(){b(-1);d()},this);c.on("next",function(){b(1);d()},this)};RY.PageCollectionView=Backbone.View.extend({template:RY.Templates.pageCollection,events:{"click .page-title a":RY.util.analytics.trackPageOpen},initialize:function(){_.bindAll(this,"checkEmpty","filter","_groupForPage","addOne","showEmptyMessage","clearEmptyMessage","addAll","render");this.modelViews={};this.collection.on("reset",this.addAll,this);this.collection.on("add",this.addOne,this);this.collection.on("filter",this.filter,this)},checkEmpty:function(a,e){var f=this.collection.isEmpty();var b=a.length===0;if(f||b){var c;if(f){c="Sorry mate, looks like you haven\'t visited any pages yet."}else{var d=AJS.contextPath()+"/dosearchsite.action?queryString="+encodeURIComponent(e);c=AJS.format("We didn\'\'t find any matching pages in your history. \u003ca href=\"{0}\">Click here\u003c\/a> to search for this term instead.",d)}this.showEmptyMessage(c)}else{this.clearEmptyMessage()}},filter:function(b,d){d=d||"";this.checkEmpty(b,d);var a=[this.$today,this.$yesterday,this.$older];_.invoke(a,"hideAll");var c=[];_.each(a,function(f){var e=f.showPages(b);if(e){c.push(f)}});if(c.length>1){c.pop();_.invoke(c,"showBorder")}},_groupForPage:function(a){var b=a.daysSinceLastSeen();if(b===0){return this.$today}else{if(b===1){return this.$yesterday}else{return this.$older}}},addOne:function(a){var b=this._groupForPage(a);b.add(a)},showEmptyMessage:function(a){this.$(".empty").html(AJS.$("<p>").html(a))},clearEmptyMessage:function(){this.$(".empty").html("")},addAll:function(){this.collection.each(this.addOne)},render:function(){this.$el.html(this.template());this.$today=new RY.PageGroupView({title:"Today"});this.$yesterday=new RY.PageGroupView({title:"Yesterday"});this.$older=new RY.PageGroupView({title:"Older"});var a=this.$(".groups");a.append(this.$today.render().el);a.append(this.$yesterday.render().el);a.append(this.$older.render().el);_.invoke([this.$today,this.$yesterday,this.$older],"hideAll");return this}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/quicknav/util.js' */
var RYQ=RYQ||{};(function(){RYQ.util={analytics:{trackQuickNavOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-open"})},trackQuickNavPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-click-page"})},trackQuickNavRecentlyDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-click-more-recent"})}}}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/quicknav/quicknav.js' */
var RYQ=RYQ||{};RYQ.QuickNavEntry=Backbone.Model.extend({classNameByType:{blogpost:"content-type-blogpost",page:"content-type-page"},parse:function(a){return{className:this.classNameByType[a.type],name:a.title,href:AJS.contextPath()+a.url,id:a.id,spaceName:a.space,lastSeen:a.lastSeen}}},{escape:function(b){var a=_.map(b,_.clone);_.each(a,function(c){c.name=_.escape(c.name);c.spaceName=_.escape(c.spaceName)});return a}});RYQ.QuickNavEntryCollection=Backbone.Collection.extend({model:RYQ.QuickNavEntry,url:AJS.contextPath()+"/rest/recentlyviewed/1.0/recent?limit=8",search:function(b){var a;if(AJS.$.trim(b).length===0){a=this.models}else{var c=b.match(/[^\s-]+/g);a=this.filter(function(e){var f=e.get("name");var d=f.toLowerCase();return _.all(c,function(g){return d.indexOf(g.toLowerCase())!==-1})})}this.trigger("filter",a);return a},comparator:function(a){return -(a.get("lastSeen"))}});(function(a){RYQ.QuickNav=Backbone.View.extend({initialize:function(){this.moreLink={className:"recently-viewed",href:"#",name:"More recently viewed pages..."};this.$input=a("#quick-search-query");this.makeDropdown();this.addShowHideHandlers();this.getHistory=_.once(this._getHistory);_.bindAll(this,"makeDropdown","addSearchResultBoostingHandler","_getHistory","render","addShowHideHandlers","_getItemsToShow","showQuickResults","onQuickSearch")},makeDropdown:function(){var c=function(d){a("a",d).each(function(){var g=a(this);var e=g.find("span");var f=AJS.dropDown.getAdditionalPropertyValue(e,"spaceName");if(f&&!g.is(".content-type-spacedesc")){g.after(g.clone().attr("class","space-name").html(f));g.parent().addClass("with-space-name")}})};var b=this;this.$dropdown=AJS.inputDrivenDropdown({dropdownPlacement:function(d){b.$input.closest("form").find(".quick-nav-drop-down").append(d)},dropdownPostprocess:function(d){c(d)},ajsDropDownOptions:{className:"recently-viewed-dropdown"}})},addSearchResultBoostingHandler:function(){var b=this;a(window).on("quicksearch.ajax-success",function(g,f){var d=f.url.match("/json/contentnamesearch.action");var c=f.url.match(/rest\/quicknav\/\d\/search/);if(d||c){b.onQuickSearch(g,f)}})},_getHistory:function(){return this.collection.fetch().done(this.addSearchResultBoostingHandler)},render:function(){var b=this.getHistory();b.done(_.bind(function(){if(AJS.dropDown.current==null&&this.collection.length!==0&&this.$input.val().length===0){this.showQuickResults()}},this));var c=this.$input;c.trigger("quick-search-loading-start");b.always(function(){c.trigger("quick-search-loading-stop")})},addShowHideHandlers:function(){var b=this;this.$input.on("focus",function(){b.render()}).on("click",function(c){c.stopPropagation();b.render()}).on("keyup",function(f){var c=f.which===27;var g=f.which===13;var d=a(this).val().length!==0;if(d||c){if(b.$dropdown.dd&&b.$dropdown.dd.$.is(":visible")){b.$dropdown.hide()}}else{if(!g){b.render()}}})},_getItemsToShow:function(){var c=this.collection.toJSON();var b=c.length>0&&c[0].id==AJS.Meta.get("page-id");if(b){c.shift()}return c},showQuickResults:function(){var b=RYQ.QuickNavEntry.escape(this._getItemsToShow());this.$dropdown.show([b,[this.moreLink]],"","");a(".recently-viewed-dropdown").on("click",".recently-viewed",function(c){c.preventDefault();a("#view-user-history-link").click();RYQ.util.analytics.trackQuickNavRecentlyDialogOpen()});a(".recently-viewed-dropdown").on("click",".with-space-name",function(c){RYQ.util.analytics.trackQuickNavPageOpen()});RYQ.util.analytics.trackQuickNavOpen()},onQuickSearch:function(l,f){var o=f.json.query;var c=_.map(this.collection.search(o),function(e){return e.attributes});c=RYQ.QuickNavEntry.escape(c);if(c.length==0){return}var m=f.json.contentNameMatches;var p=-1;for(var g=0;g<m.length;g++){var n=m[g][0].className;if(n=="content-type-blogpost"||n=="content-type-page"){p=g;break}}if(p!=-1){var h=m[p];var b=Math.min(h.length>4?2:6-h.length,c.length);h.unshift.apply(h,_(c).first(b));m[p]=_.uniq(h,function(e){return +e.id});if(h.length>6){var k=6-b;for(var d=k;d>0;d--){h.pop()}}}else{m.unshift(_(c).first(6))}}})}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/main.js' */
var RY=RY||{};AJS.toInit(function(a){a("#view-user-history-link").unbind("click");a("#view-user-history-link").click(function(i){i.preventDefault();var d=new AJS.Dialog({width:600,height:500,id:"recently-viewed-dialog",closeOnOutsideClick:true});var c="recently-viewed-spinner-"+Math.random();var h=a(RY.Templates.body({spinnerId:c}));d.addHeader("Recently viewed pages");d.addPanel("SinglePanel",h);d.addLink("Close",function(e){e.hide()});var f=a("<div>",{"class":"dialog-tip"}).text("Hint: type \"g\" and then \"r\" anywhere to quickly open this menu");d.popup.element.find(".dialog-button-panel").append(f);var j=new RY.PageCollection();var b=new RY.PageCollectionView({collection:j});h.find(".pages").html(b.render().el);var g=Raphael.spinner(c,16,"#707070");j.fetch({success:function(){g();var k=_.extend({},Backbone.Events);var l=new RY.PageNavigator(b.$el,h.parent(),k);var e=new RY.FilterView({collection:j,el:h.find(".filter"),navigationEvents:k}).render();e.search()}});d.gotoPanel(0);d.show();RY.util.analytics.trackDialogOpen()})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/quicknav/main.js' */
var RYQ=RYQ||{};AJS.toInit(function(){var b=new RYQ.QuickNavEntryCollection();var a=new RYQ.QuickNav({collection:b})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-plugin:data', location = 'js/data/data.js' */
(function(){if(!window.WRM){window.WRM={}}var a={};function b(d){if(!d){return d}return JSON.parse(d)}function c(e,d){return Object.prototype.hasOwnProperty.call(e,d)}WRM.data=function(d){if(!c(a,d)){if(WRM._unparsedData&&c(WRM._unparsedData,d)){var g=WRM._unparsedData[d];try{a[d]=b(g);WRM._unparsedData[d]=undefined}catch(f){console&&console.log&&console.log("JSON Error parsing data with key "+d+": "+f)}}else{a[d]=null}}return a[d]}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.aui.staging:content-ready', location = 'js/content-ready.js' */

// This has been added to directly to confluence to make it into confluence 5.0; it should be remove
// once contentReady is in AUI.

(function($) {

    var EVENT = 'content.ready'; // event name used in underlying event implementation

    // Check it's not already defined, eg when it's added to AUI plugin
    if (AJS.contentReady) {
        return;
    }

    /**
     * Binds an event handler to be called when content is ready.
     *
     * Usage:
     *
     * AJS.contentReady(fn)
     * called whenever content is ready
     *
     * AJS.contentReady(selector, fn)
     * called whenever content has been added that matches the given selector.
     * If the selector matches no elements, the handler will not be called.
     *
     * fn is always called with the first argument as a jQuery element.
     * Optional arguments can be passed by the triggering code.
     */
    AJS.contentReady = function() {
        var handler, boundSelector;
        if (1 === arguments.length) {
            handler = arguments[0];
        }
        else if (2 === arguments.length) {
            boundSelector = arguments[0];
            handler = arguments[1];
        }
        $(AJS).on(EVENT, function(e) {
            var args = Array.prototype.slice.call(arguments, 1),
                $element = args[0];
            if (boundSelector) {
                var $matched;
                if ($element.is(boundSelector)) {
                    $matched = $element;
                }
                else {
                    $matched = $element.find(boundSelector);
                }
                if ($matched.length) {
                    args[0] = $matched;
                    handler.apply(this, args);
                }
            }
            else {
                handler.apply(this, args);
            }
        });
    };

    /**
     * Triggers all bound contentReady event handlers.
     *
     * Usage:
     *
     * AJS.triggerContentReady($el, args...)
     * Calls all contentReady event handlers with the given element.
     * The $el argument is jQuery element and is required.
     * args... are optional arguments passed through to event handlers.
     */
    AJS.triggerContentReady = function() {
        $(AJS).trigger(EVENT, arguments);
    };

    /**
     * contentReady is always triggered on document ready. It is triggered with the body as the context.
     * Developers can set AJS.contentReady.onReadyArgs as a single value or array; these are passed
     * to handlers that are executed on ready.
     */
    $(function() {
        var args = [$("body")];
        if (AJS.contentReady.onReadyArgs) {
            args = args.concat(AJS.contentReady.onReadyArgs);
        }
        AJS.triggerContentReady.apply(this, args);
    });

}(AJS.$));

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugin.notifications.notifications-module:notification-util', location = '/js/notifications-module-util.js' */
if(typeof AJS.namespace==="undefined"){AJS.namespace=function(d,c,e){var f=d.split(".");c=c||window;for(var b=0,g=f.length-1;b<g;b++){var a=c[f[b]];c=(a!=null)?a:c[f[b]]={}}return c[f[b]]=e||{}}}AJS.overrides={};AJS.Meta=jQuery.extend({},AJS.Meta,{set:function(a,b){AJS.overrides[a]=b},get:function(b){if(typeof AJS.overrides[b]!="undefined"){return AJS.overrides[b]}var a=jQuery("meta[name='ajs-"+b+"']");if(!a.length){return undefined}var c=a.attr("content");return AJS.asBooleanOrString(c)},getBoolean:function(a){return this.get(a)===true},getNumber:function(a){return +this.get(a)},getAllAsMap:function(){var a={};jQuery("meta[name^=ajs-]").each(function(){a[this.name.substring(4)]=this.content});return jQuery.extend(a,AJS.overrides)}});if(typeof Class==="undefined"){(function(){begetObject=function(d){var c=function(){};c.prototype=d;return new c()};var a=false,b=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.Class=function(){};Class.extend=function(){var j;var g=this.prototype;if(arguments.length>1){var i=AJS.$.makeArray(arguments);j=i.pop();var h;AJS.$.each(i,function(l,k){if(h){h=h.extend(k)}else{h=k}});return h.extend(this.prototype).extend(j)}else{j=arguments[0]}a=true;var f=new this();a=false;for(var e in j){if(f[e]=typeof j[e]=="function"&&typeof g[e]=="function"&&b.test(j[e])){f[e]=(function(k,l){return function(){var n=this._super;this._super=g[k];var m=l.apply(this,arguments);this._super=n;return m}})(e,j[e])}else{if(typeof g[e]==="object"){var d=begetObject(j[e]);AJS.$.each(g[e],function(l,m){if(!d[l]){d[l]=m}else{if(typeof d[l]==="object"){var k=begetObject(d[l]);AJS.$.each(m,function(o,n){if(!k[o]){k[o]=n}});d[l]=k}}});f[e]=d}else{f[e]=j[e]}}}function c(){if(!a&&this.init){this.init.apply(this,arguments)}}c.fn=c.prototype=f;c.constructor=c;c.extend=arguments.callee;return c}})()};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugin.notifications.notifications-module:notification-util', location = '/js/FormDialog.js' */
(function(){AJS.namespace("Notifications.FormDialog");Notifications.FormDialog=Class.extend({init:function(b){var a=this;this.options=b;this.$trigger=AJS.$(this.options.trigger);this.url=this.$trigger.attr("href");this.options.id=this.options.id||"notifiations-form-dialog";AJS.$(".notifications-form-dialog").remove();this.dialog=new AJS.Dialog({width:this.options.width||810,height:this.options.height||600,id:this.options.id});AJS.$(this.dialog.popup.element).addClass("notifications-form-dialog");this.ajaxOptions=AJS.$.extend({url:this.url,success:function(c){a._renderContents(c);a.dialog.show()},error:function(c){alert("Unknown error occurred. Please reload the page and try again.")},complete:function(d,c){a._hideLoadingIndicator()}},this.options.ajaxOptions)},show:function(){this._showLoadingIndicator();AJS.$.ajax(this.ajaxOptions)},hide:function(){this.dialog.hide()},_getThrobber:function(){if(!this.$throbber){this.$throbber=AJS.$('<span class="icon throbber loading notif-hidden"></span>');this.dialog.popup.element.find(".dialog-button-panel").prepend(this.$throbber)}return this.$throbber},_showThrobber:function(){this._getThrobber().show()},_hideThrobber:function(){this._getThrobber().hide()},_handleSubmit:function(b){var a=this;a._showThrobber();b.addClass("submitting");AJS.$(".error",b).remove();var c=b.serializeArray();AJS.$.ajax({url:b.attr("action"),type:!!this.options.edit?"PUT":"POST",contentType:"application/json",data:JSON.stringify({config:c}),success:function(d){b.removeClass("submitting");window.location.reload()},error:function(f){if(f&&f.responseText){try{var d=JSON.parse(f.responseText);if(d&&d.errors){AJS.$.each(d.errors,function(h,i){AJS.$("input[name='"+h+"']",b).after("<div class='error'>"+i+"</div>")})}if(d&&d.errorMessages){var g="";AJS.$.each(d.errorMessages,function(h,i){g+=i+"<br/>"});if(g!==""){AJS.$("#errorContainer",b).append("<div class='field-group error'>"+g+"</div>")}}}catch(e){alert("Unknown error occurred. Please reload the page and try again.")}}b.removeClass("submitting")},complete:function(e,d){a._hideThrobber()}})},_renderContents:function(f){var e=AJS.$(f),a=this,c=AJS.$(":header:first",e);this.dialog.addHeader(c.text());c.remove();this.dialog.addPanel(this.options.id);var b=this.dialog.getPanel(0,0);b.html(e);e.find("form").submit(function(i){i.preventDefault();var h=AJS.$(this);a._handleSubmit.call(a,h)});var d=AJS.$("div.buttons-container",e);var g=d.find(".button:first");this.dialog.addButton(g.val(),function(){e.find("form").submit()},"aui-button "+g.attr("id"));this.dialog.addLink("Cancel",function(){a.hide()},"cancel-dialog");d.remove();if(this.options.decorateContents){this.options.decorateContents(e)}this.dialog.popup.element.addClass("jira-dialog-content-ready")},_showLoadingIndicator:function(){var a=this,b=440,c=0;clearInterval(this.loadingTimer);this._getLoadingIndicator().show();this.loadingTimer=window.setInterval(function(){if(c===b){c=0}c=c+40;a._getLoadingIndicator().css("backgroundPosition","0 -"+c+"px")},50)},_hideLoadingIndicator:function(){clearInterval(this.loadingTimer);this._getLoadingIndicator().hide()},_getLoadingIndicator:function(){if(!this.loadingIndicator){this.loadingIndicator=AJS.$('<div class="aui-loading"></div>');this.loadingIndicator.appendTo("body")}return this.loadingIndicator}})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugin.notifications.notifications-module:notification-prefs-checker', location = 'js/user-notification-prompt.js' */
(function(){AJS.$(function(){var b=AJS.Meta.get("show-notifications-prompt");if(b){var c=AJS.format("New notification servers are available! Please visit your personal {0}notification settings{1} to ensure all your preferences are up to date.","<a href='"+AJS.contextPath()+AJS.Meta.get("show-notifications-url")+"' target='_blank'>","</a>");var a=AJS.$('<div class="notif-global-warning" id="notificationsBanner"/>').html(c);a.prependTo("body")}})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:analytics', location = 'analytics/analytics.js' */
var _gaq=_gaq||[];AJS.$(function(){_gaq.push(["navlinks._setAccount","UA-20272869-14"]);_gaq.push(["navlinks._setDomainName","none"]);_gaq.push(["navlinks._setAllowLinker",true]);_gaq.push(["navlinks._setDetectTitle",false]);_gaq.push(["navlinks._trackPageview",location.pathname]);AJS.$.ajax(AJS.contextPath()+"/rest/nav-links-analytics-data/1.0/",{success:function(a){_gaq.push(["navlinks._setCustomVar",1,"isUserAdmin",a.isUserAdmin?"true":"false",2])}})});(function(a){a.trackEvent=function(c,e,b,d){if(d===undefined){_gaq.push(["navlinks._trackEvent",c,e,b])}else{_gaq.push(["navlinks._trackEvent",c,e,b,d])}if(AJS.EventQueue){AJS.EventQueue.push({name:c+"."+e,properties:{label:b,value:d}})}};a.getCurrentApplication=function(){if(window.Confluence!==undefined){return"confluence"}else{if(window.BAMBOO!==undefined){return"bamboo"}else{if(window.JIRA!==undefined){return"jira"}else{return""}}}}}(window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:analytics', location = 'analytics/help-analytics.js' */
(function(c,b){function a(g,d,f){try{b.trackEvent("helpmenu",g,d,f)}catch(h){AJS.log("failed to track analytics event, category: helpmenu, action: "+g+", label: "+d+", value: "+f)}}c(function(){var d=c("#system-help-menu-content,#help-menu-link-content,#bamboo\\.global\\.header-help\\.menu");d.bind({"aui-dropdown2-show":function(f){a("show","")},"aui-dropdown2-hide":function(f){a("hide","")}}).find("a").unbind(".analytics").bind("click.analytics",function(){var e=this.attributes.href;a("linkFollowed",typeof e==="object"?e.value:e)}).addClass("interactive")})}(jQuery,window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher.soy' */
// This file was automatically generated from appswitcher.soy.
// Please don't edit this file by hand.

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher == 'undefined') { navlinks.templates.appswitcher = {}; }


navlinks.templates.appswitcher.linkSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.list.length > 0) {
    output.append('<div class="aui-nav-heading sidebar-section-header">', soy.$$escapeHtml(opt_data.title), '</div><ul class="aui-nav nav-links">');
    var linkList8 = opt_data.list;
    var linkListLen8 = linkList8.length;
    for (var linkIndex8 = 0; linkIndex8 < linkListLen8; linkIndex8++) {
      var linkData8 = linkList8[linkIndex8];
      navlinks.templates.appswitcher.applicationsItem(linkData8, output);
    }
    output.append('</ul>');
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.applicationsItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="nav-link"><a href="', soy.$$escapeHtml(opt_data.link), '" class="interactive', (opt_data.self) ? ' checked' : '', '" title="', soy.$$escapeHtml(opt_data.link), '"><span class="nav-link-label">', soy.$$escapeHtml(opt_data.label), '</span></a></li>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.shortcutsItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="nav-link"><a href="', soy.$$escapeHtml(opt_data.link), '" class="interactive', (opt_data.self) ? ' checked' : '', '" title="', soy.$$escapeHtml(opt_data.link), '"><span class="nav-link-label">', soy.$$escapeHtml(opt_data.label), '</span>', (opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '', '</a></li>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.error = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-error">', "Something went wrong, please \x3cspan class\x3d\x22app-switcher-retry\x22\x3etry again\x3c/span\x3e.", '</div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.sidebarContents = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-page-panel-nav"><nav class="aui-navgroup aui-navgroup-vertical"><div class="app-switcher-section app-switcher-applications"><div class="aui-nav-heading">', soy.$$escapeHtml("Application Links"), '</div><div class="app-switcher-loading">', "Loading\x26hellip;", '</div></div><div class="app-switcher-section app-switcher-shortcuts"><div class="aui-nav-heading">', soy.$$escapeHtml("Shortcuts"), '</div><div class="app-switcher-loading">', "Loading\x26hellip;", '</div></div></nav></div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">', soy.$$escapeHtml("Linked Applications"), '</span>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.projectHeaderSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-title">');
  aui.avatar.avatar({size: 'large', avatarImageUrl: opt_data.avatarUrl, isProject: true, title: opt_data.name}, output);
  output.append('<div class="sidebar-project-name">', soy.$$escapeHtml(opt_data.name), '</div></div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.cogDropdown = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var dropdownList__soy74 = new soy.StringBuilder();
  navlinks.templates.appswitcher.dropdownList({list: opt_data.links}, dropdownList__soy74);
  dropdownList__soy74 = dropdownList__soy74.toString();
  aui.dropdown2.dropdown2({menu: {'id': opt_data.id, 'content': dropdownList__soy74, 'extraClasses': 'aui-style-default sidebar-customize-section'}, trigger: {'showIcon': false, 'content': '<span class="aui-icon aui-icon-small aui-iconfont-configure"></span>', 'container': '#app-switcher'}}, output);
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.dropdownList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="sidebar-admin-links">');
  var linkList82 = opt_data.list;
  var linkListLen82 = linkList82.length;
  for (var linkIndex82 = 0; linkIndex82 < linkListLen82; linkIndex82++) {
    var linkData82 = linkList82[linkIndex82];
    output.append('<li class="nav-link"><a href="', soy.$$escapeHtml(linkData82.href), '" title="', soy.$$escapeHtml(linkData82.title), '"><span class="nav-link-label">', soy.$$escapeHtml(linkData82.label), '</span></a></li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.switcher = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (true) {
    if (AJS.DarkFeatures.isEnabled('rotp.sidebar')) {
      var sidebarContents__soy97 = new soy.StringBuilder();
      navlinks.templates.appswitcher.sidebarContents(null, sidebarContents__soy97);
      sidebarContents__soy97 = sidebarContents__soy97.toString();
      var triggerContent__soy99 = new soy.StringBuilder();
      navlinks.templates.appswitcher.trigger(null, triggerContent__soy99);
      triggerContent__soy99 = triggerContent__soy99.toString();
      navlinks.templates.appswitcher.sidebar({sidebar: {'id': 'app-switcher', 'content': sidebarContents__soy97}, trigger: {'showIcon': false, 'content': triggerContent__soy99}}, output);
      output.append('<script>\n                (function (NL) {\n                    var initialise = function () {\n                        new NL.SideBar({\n                            sidebarContents: \'#app-switcher\'\n                        });\n                    };\n                    if (NL.SideBar) {\n                        initialise();\n                    } else {\n                        NL.onInit = initialise;\n                    }\n                }(window.NL = (window.NL || {})));\n                window.NL.isUserAdmin = ', soy.$$escapeHtml(false), '<\/script>');
    } else {
      navlinks.templates.appswitcher_old.switcher(null, output);
    }
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.sidebar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class="sidebar-trigger app-switcher-trigger" aria-owns="', soy.$$escapeHtml(opt_data.sidebar.id), '" aria-haspopup="true">', opt_data.trigger.content, '</a><div id=', soy.$$escapeHtml(opt_data.sidebar.id), ' class="app-switcher-sidebar aui-style-default sidebar-offscreen">', opt_data.sidebar.content, '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher.js' */
(function(c,a){a.SideBar=function(d){var e=this;this.$sidebar=null;d=c.extend({sidebarContents:null},d);this.getLinks=function(){return c.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:false,dataType:"json"}).done(this.updateAppLinks).fail(this.showAppSwitcherError)};this.populateProjectHeader=function(g,f){e.getSidebar().find(".app-switcher-shortcuts .aui-nav-heading").after(navlinks.templates.appswitcher.projectHeaderSection({avatarUrl:f,name:g}))};this.getProjectData=function(){var f=c(".project-shortcut-dialog-trigger"),g=f.data("key"),h=f.data("entity-type");if(f.size()==0||!g||!h){c(".app-switcher-shortcuts").remove();return}var j,i;i=c.ajax({url:AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+g,cache:false,data:{entityType:h},dataType:"json"});j=c.ajax({url:AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+g,cache:false,data:{entityType:h},dataType:"json"});c.when(i,j).then(function(l,k){e.updateProjectShortcuts(l,k,{key:g,entityType:h,name:f.data("name"),avatarUrl:f.find("img").prop("src")})},e.showProjectShortcutsError)};this.getSidebar=function(){if(!this.$sidebar){this.$sidebar=c(d.sidebarContents)}return this.$sidebar};this.addApplicationsCog=function(){c(".app-switcher-applications .aui-nav-heading").before(navlinks.templates.appswitcher.cogDropdown({id:"sidebar-applications-admin-dropdown",links:[{href:AJS.contextPath()+"/plugins/servlet/customize-application-navigator",label:"Customize navigator",title:"Add new entries, hide existing or restrict who sees what"},{href:AJS.contextPath()+"/plugins/servlet/applinks/listApplicationLinks",label:"Manage application links",title:"Link to more Atlassian applications"}]}))};this.addProjectShortcutsCog=function(f,h){var g=[{href:AJS.contextPath()+"/plugins/servlet/custom-content-links-admin?entityKey="+f,label:"Customize shortcuts",title:""}];if(e.entityMappings[h]){g.push({href:e.generateEntityLinksUrl(f,e.entityMappings[h]),label:"Manage product links",title:""})}e.getSidebar().find(".app-switcher-shortcuts .aui-nav-heading").before(navlinks.templates.appswitcher.cogDropdown({id:"sidebar-project-shortcuts-admin-dropdown",links:g}))};this.updateAppLinks=function(f){c(function(){e.getSidebar().find(".app-switcher-applications").html(navlinks.templates.appswitcher.linkSection({title:"Application Links",list:f}));if(a.isUserAdmin){e.addApplicationsCog()}e.bindAnalyticsHandlers(e.getSidebar(),f)})};this.updateProjectShortcuts=function(i,g,h){var j=i[0].shortcuts,f=g[0].shortcuts;e.getSidebar().find(".app-switcher-shortcuts").html(navlinks.templates.appswitcher.linkSection({title:"Shortcuts",list:j.concat(f)}));if(a.isUserAdmin){e.addProjectShortcutsCog(h.key,h.entityType)}e.populateProjectHeader(h.name,h.avatarUrl);e.bindAnalyticsHandlers(e.getSidebar(),data)};this.entityMappings={"confluence.space":"com.atlassian.applinks.api.application.confluence.ConfluenceSpaceEntityType","jira.project":"com.atlassian.applinks.api.application.jira.JiraProjectEntityType","bamboo.project":"com.atlassian.applinks.api.application.bamboo.BambooProjectEntityType","stash.project":"com.atlassian.applinks.api.application.stash.StashProjectEntityType"};this.generateEntityLinksUrl=function(f,g){if(g===e.entityMappings["confluence.space"]){return AJS.contextPath()+"/spaces/listentitylinks.action?typeId="+g+"&key="+f}else{return AJS.contextPath()+"/plugins/servlet/applinks/listEntityLinks/"+g+"/"+f}};this.showAppSwitcherError=function(){c(function(){var f=e.getSidebar();f.find(".app-switcher-applications .app-switcher-loading").replaceWith(navlinks.templates.appswitcher.error());f.off(".appswitcher").on("click.appswitcher",".app-switcher-retry",c.proxy(e.retryLoading,e))})};this.showProjectShortcutsError=function(){c(function(){var f=e.getSidebar();f.find(".app-switcher-shortcuts .app-switcher-loading").replaceWith(navlinks.templates.appswitcher.error());f.off(".appswitcher").on("click.appswitcher",".app-switcher-retry",c.proxy(e.retryLoading,e))})};this.retryLoading=function(f){this.getSidebar().html(navlinks.templates.appswitcher.sidebarContents());this.getLinks();this.getProjectData();f&&f.stopPropagation()};this.trackEvent=function(h,f,g){try{a.trackEvent("appswitcher-new",h,f,g)}catch(i){AJS.log("failed to track analytics event, category: appswitcher, action: "+h+", label: "+f+", value: "+g)}};this.bindAnalyticsHandlers=function(f,g){};this.getLinks();c(this.getProjectData);this.toggleSidebar=function(h){var i=e.getSidebar(),g=c("body"),f=c(window.document);if(!g.hasClass("app-switcher-open")){var k=c("#header");i.css("left",-i.width());i.parent("body").length||i.appendTo("body");b({data:i});i.animate({left:0},300);function j(l){var n=l.target&&c(l.target),m=l.keyCode;if(l.originalEvent===h.originalEvent){return}if(n&&!m&&!(n.closest(i).length||n.closest(k).length)&&h.which==1&&!(l.shiftKey||l.ctrlKey||l.metaKey)){e.toggleSidebar()}else{if(m===27){e.toggleSidebar()}}}f.on("click.appSwitcher",j);f.on("keydown.appSwitcher",j);f.on("scroll.appSwitcher",i,b)}else{f.off(".appSwitcher")}g.toggleClass("app-switcher-open")};c("#header").on("click",".app-switcher-trigger",this.toggleSidebar)};function b(f){var d=c(document).scrollTop(),g=c("#header"),e=(g.height()+g.offset().top)-d;if(e>=0){f.data.css({top:e,position:"fixed"})}else{f.data.css({top:0,left:0,position:"fixed"})}}if(a.onInit){a.onInit()}}(jQuery,window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher_old.js' */
(function(b,a){a.AppSwitcher=function(c){var d=AJS.contextPath()+"/plugins/servlet/customize-application-navigator";var e=this;this.$dropdown=null;c=b.extend({dropdownContents:null},c);this.getLinks=function(){return b.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:false,dataType:"json"}).done(this.updateDropdown).fail(this.showError)};this.getDropdown=function(){if(!this.$dropdown){this.$dropdown=b(c.dropdownContents)}return this.$dropdown};this.updateDropdown=function(f){b(function(){e.getDropdown().html(navlinks.templates.appswitcher_old.applications({apps:f,showAdminLink:a.isUserAdmin,adminLink:d}));e.bindAnalyticsHandlers(e.getDropdown(),f)})};this.showError=function(){b(function(){e.getDropdown().html(navlinks.templates.appswitcher_old.error()).off(".appswitcher").on("click.appswitcher",".app-switcher-retry",b.proxy(e.retryLoading,e))})};this.retryLoading=function(f){this.getDropdown().html(navlinks.templates.appswitcher_old.loading());this.getLinks();f&&f.stopPropagation()};this.trackEvent=function(h,f,g){try{a.trackEvent("appswitcher-new",h,f,g)}catch(i){AJS.log("failed to track analytics event, category: appswitcher, action: "+h+", label: "+f+", value: "+g)}};this.bindAnalyticsHandlers=function(i,h){function g(){var l=0;for(var j in h){var k=h[j];if(k.custom){l+=1}}return l}var f=g();i.on({"aui-dropdown2-show":function(j){e.trackEvent("show",a.getCurrentApplication(),h.length)},"aui-dropdown2-hide":function(j){e.trackEvent("hide",a.getCurrentApplication(),h.length)}});i.off(".analytics").on("click.analytics","a",function(j){e.trackEvent("appSelected",b(this).attr("href"),h.length)})};this.getLinks()};if(a.onInit){a.onInit()}}(jQuery,window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher_old.soy' */
// This file was automatically generated from appswitcher_old.soy.
// Please don't edit this file by hand.

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher_old == 'undefined') { navlinks.templates.appswitcher_old = {}; }


navlinks.templates.appswitcher_old.applications = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.apps, listClass: 'nav-links', showDescription: opt_data.showDescription}, output);
  if (opt_data.custom) {
    navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.custom, showDescription: opt_data.showDescription}, output);
  }
  if (opt_data.showAdminLink) {
    navlinks.templates.appswitcher_old.adminSection(opt_data, output);
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.applicationsSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.list.length > 0) {
    var param19 = new soy.StringBuilder('<ul', (opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '', '>');
    var linkList27 = opt_data.list;
    var linkListLen27 = linkList27.length;
    for (var linkIndex27 = 0; linkIndex27 < linkListLen27; linkIndex27++) {
      var linkData27 = linkList27[linkIndex27];
      navlinks.templates.appswitcher_old.applicationsItem(soy.$$augmentData(linkData27, {showDescription: opt_data.showDescription}), param19);
    }
    param19.append('</ul>');
    aui.dropdown2.section({content: param19.toString()}, output);
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.applicationsItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="nav-link', (opt_data.self) ? ' nav-link-local' : '', '"><a href="', soy.$$escapeHtml(opt_data.link), '" class="aui-dropdown2-radio interactive', (opt_data.self) ? ' checked' : '', '" title="', soy.$$escapeHtml(opt_data.link), '"><span class="nav-link-label">', soy.$$escapeHtml(opt_data.label), '</span>', (opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '', '</a></li>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.adminSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.dropdown2.section({content: '<ul class="nav-links"><li><a class="nav-link-edit-wrapper" href="' + soy.$$escapeHtml(opt_data.adminLink) + '"><span class="nav-link-edit">' + "Configure\x26hellip;" + '</span></a></li></ul>'}, output);
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.error = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-error">', "Something went wrong, please \x3cspan class\x3d\x22app-switcher-retry\x22\x3etry again\x3c/span\x3e.", '</div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.loading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-loading">', "Loading\x26hellip;", '</div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">', soy.$$escapeHtml("Linked Applications"), '</span>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.switcher = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (true) {
    var loadingContent__soy81 = new soy.StringBuilder();
    navlinks.templates.appswitcher_old.loading(null, loadingContent__soy81);
    loadingContent__soy81 = loadingContent__soy81.toString();
    var triggerContent__soy83 = new soy.StringBuilder();
    navlinks.templates.appswitcher_old.trigger(null, triggerContent__soy83);
    triggerContent__soy83 = triggerContent__soy83.toString();
    aui.dropdown2.dropdown2({menu: {'id': 'app-switcher', 'content': loadingContent__soy81, 'extraClasses': 'aui-style-default'}, trigger: {'showIcon': false, 'content': triggerContent__soy83, 'extraClasses': 'app-switcher-trigger'}}, output);
    output.append('<script>\n            (function (NL) {\n                var initialise = function () {\n                    // For some milestones of AUI, the atlassian soy namespace was renamed to aui. Handle that here by ensuring that window.atlassian is defined.\n                    window.atlassian = window.atlassian || window.aui;\n                    new NL.AppSwitcher({\n                        dropdownContents: \'#app-switcher\'\n                    });\n                };\n                if (NL.AppSwitcher) {\n                    initialise();\n                } else {\n                    NL.onInit = initialise;\n                }\n            }(window.NL = (window.NL || {})));\n            window.NL.isUserAdmin = ', soy.$$escapeHtml(false), '<\/script>');
  }
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:space-page-picker', location = '/js/space-page-picker.js' */
(function(i,c){var t={conf_all:"All spaces",conf_favorites:"Favourite spaces",conf_global:"Site spaces",conf_personal:"Personal spaces",conf_current:"Current space"};var b={data:null,suggestCategories:null};var v="SPACE-PAGE-TRIGGER-VALUE";var f={placeholder:"Select a space or page",multiple:true,formatInputTooShort:function(){return "Start typing to search"},formatResult:function(G,I,L){if(G.children){I.addClass("space-page-picker-result-category");return i.fn.select2.defaults.formatResult.apply(this,arguments)}else{if(G.id){I.attr("title",G.text);I.addClass("space-page-picker-result-label-with-icon");var F=i("<span/>").addClass(G.className+" item-text").html(i.fn.select2.defaults.formatResult.apply(this,arguments));var K=(G.subText)?i("<span/>").addClass("space-name").html(G.subText):i("");var H=i("<span/>").attr(s(G.id),G.id).append(F).append(K);var J=i("<span/>").append(H);return J}else{I.addClass(G.className);return i.fn.select2.defaults.formatResult.apply(this,arguments)}}},formatSelection:function(G,H){H.addClass("space-page-picker-selected-item");H.attr("title",G.text);var F=i("<span/>").attr(s(G.id),G.id).addClass(G.className+" item-text").html(i.fn.select2.defaults.formatSelection.apply(this,arguments));H.append(F)},escapeMarkup:function(F){return F},formatResultCssClass:function(F){return(F.children||F.id)?"":"select2-result-space-page-separator"},containerCssClass:"space-page-picker-container",dropdownCssClass:"space-page-picker-drop"};var B=function(F,H){var G=F.data("select2").opts.manualInit;if(G===true){return}d(F.val(),F,H)};function r(H,G,F){var I=_.map(H,function(J){return G[J]});return(F)?I:((I.length>0)?I[0]:null)}var l=function(F){var G;if(F.suggestCategories){var H={text:"Suggested categories",children:_.map(F.suggestCategories,function(I){return o(I)})}}return function(J){if(G){J.callback(G);return}var I=[];G={results:[]};if(x(F)){var L=i.getJSON(AJS.contextPath()+"/rest/recentlyviewed/1.0/recent/spaces").done(function(M){var N=(H)?[H]:[];(M.length>0)&&N.push({text:"Suggested spaces",children:_.map(M,function(O){return m(O.key,_.escape(O.name),null,true)})});(N.length>0)&&(G.results=G.results.concat(N))}).fail(function(){AJS.debug("Couldn't fetch recent spaces");var M=(H)?[H]:[];(M.length>0)&&(G.results=G.results.concat(M))});I.push(L)}if(j(F)){var K=i.getJSON(AJS.contextPath()+"/rest/recentlyviewed/1.0/recent/pages",{noTrashedContent:true}).done(function(M){if(M.length>0){G.results.push({text:"Suggested pages",children:_.map(M,function(N){return h(N.id,_.escape(N.title),_.escape(N.space),"content-type-page",true)})})}}).fail(function(){AJS.debug("Couldn't fetch recent pages")});I.push(K)}i.when.apply(i,_.map(I,function(N){var M=i.Deferred();N.always(function(){M.resolve()});return M})).done(function(){if(G.results.length===0){G.results=[{text:"",children:[]}]}J.callback(G)})}};var w=function(F){var G="";if(!F||F.length===2&&F.indexOf("space")>=0&&F.indexOf("page")>=0){G="type=spacedesc&type=personalspacedesc&type=page"}else{if(F.length===1&&F[0]==="space"){G="type=spacedesc&type=personalspacedesc"}else{if(F.length===1&&F[0]==="page"){G="type=page"}else{return}}}return window.Select2.query.ajax({url:AJS.contextPath()+"/rest/quicknav/1/search?"+G,data:function(H,I){return{query:H,maxPerCategory:25}},quietMillis:250,results:function(K,O){var N=K.contentNameMatches;if(N.length<=1){return{results:[]}}else{var P=[];var I=function(Q){return E(Q.spaceKey,Q.spaceName,Q.id,Q.name,Q.className)};for(var L=0;L<N.length-1;L++){var M=[];for(var J=0;J<N[L].length;J++){var H=I(N[L][J]);if(H){M.push(H)}}if(M.length>0){P=P.concat(M);P.push({id:"",text:"",subText:"",className:"",disabled:true})}}return{results:[{text:"Search results",children:P}]}}}})};var p=function(G){var F=w(G.contentType);var H=l(G);return function(I){if(I.term.length<2){H(I)}else{F(I)}}};function s(F){return(F.indexOf("page:")===0)?"data-item-id":"data-item-key"}function m(F,I,G,H){G=(G)?G:((F.indexOf("~")===0)?"content-type-personalspacedesc":"content-type-spacedesc");return e("space",F,I,"",G,H)}function o(F){var G=t[F];return e("space-cat",F,G,"","content-type-space-category",G)}function h(J,I,F,G,H){return e("page",J,I,F,G,H)}function e(L,I,K,H,G,J){var F=y(L,I);K=(!K)?I:K;G=(J)?G:(G+" content-not-found");return{id:F,text:K,subText:H,className:G,disabled:(J?false:true)}}function C(F){return"space-cat:"+F}function a(F){return"space:"+F}function D(F){return"page:"+F}function E(J,G,K,H,I){var F;if(I==="content-type-spacedesc"||I==="content-type-personalspacedesc"){F=m(J,G,I,true)}else{if(I==="content-type-page"){F=h(K,H,G,I,true)}}return F}function y(){var F=Array.prototype.slice.apply(arguments);return F.join(":")}function x(F){return((!F.contentType||F.contentType.length===0||F.contentType.indexOf("space")>=0)&&F.showRecentlyViewedSpaces!==false)}function j(F){return((!F.contentType||F.contentType.length===0||F.contentType.indexOf("page")>=0)&&F.showRecentlyViewedPages!==false)}function n(G,F){var H=q("SpaceCat",G,F.inputSpaceCatId,(F.inputSpaceCatName)?F.inputSpaceCatName:F.inputSpaceCatId);return u(G,H.id,H.name)}function g(G,F){var H=q("Space",G,F.inputSpaceId,(F.inputSpaceName)?F.inputSpaceName:F.inputSpaceId);return u(G,H.id,H.name)}function z(G,F){var H=q("Page",G,F.inputPageId,(F.inputPageName)?F.inputPageName:F.inputPageId);return u(G,H.id,H.name)}function q(J,H,K,G){var F;if(!K){F=H.attr("id");if(!F){return null}K=F+J}if(!G){var I=H.attr("name")||F;G=I+J}return{id:K,name:G}}function u(G,I,F){var H=i("#"+I);if(H.length===0){H=i(Confluence.UI.Components.templates.hiddenField({id:I,name:F}));G.after(H)}return H}function k(G,I,H){if(!G){return}var F=_.filter(I,function(J){return J.indexOf(H)===0});F=_.map(F,function(J){return J.substring(H.length,J.length)});G.val(F.join(","))}function A(M,H,I,F){I=(I)?(_.isArray(I)?I:I.split(",")):[];F=(F)?F.split(","):[];var L=_.union(I,F);var G=_.map(L,function(O){return H+O});var J=M.val();var N=J?J.split(","):[];var K=_.union(N,G);if(K.length>0){M.val(K.join(","))}}c.build=function(G){var F=_.extend({},b,f,G);if(!G.data){F=_.extend({},{initSelection:B,query:p(F)},F)}var H=i(F.orgElement);if(!H||H.length!==1){return F}if(!H.val()&&!F.manualInit){H.val(v)}H.addClass("select2-input");return F};c.setValue=function(G,F){d(G,F,function(H){F.auiSelect2("data",H)})};function d(P,G,S){var U=G.data("select2").opts;var Q=U.placeholder||G.data("placeholder");var K=n(G,U);var M=g(G,U);var I=z(G,U);G.on("change",function(V){k(K,V.val,"space-cat:");k(M,V.val,"space:");k(I,V.val,"page:")});G.val("");var T=(G["0"].tagName==="SELECT")?(G.context.multiple):(U.multiple);var N=[];var R=[];var L=[];var F={};var H=(P)?P.split(","):[];H=_.filter(H,function(V){var W=V.split(":");if(W.length===2){return true}else{if(W.length<0||W.length>=3||(W.length===1&&(W[0]!==v&&W[0]!==Q))){AJS.debug("Error value: "+W)}}});P=H.join(",");G.val(P);A(G,"space-cat:",U.spaceCatKeys,(K)?K.val():"");A(G,"space:",U.spaceKeys,(M)?M.val():"");A(G,"page:",U.pageIds,(I)?I.val():"");P=G.val();H=(P)?P.split(","):[];k(K,H,"space-cat:");k(M,H,"space:");k(I,H,"page:");if(H.length===0){return}_.each(H,function(V,W){var Z=V.split(":");if(Z.length===2){var Y=Z[0];var X=Z[1];if(Y==="space-cat"){N.push(X)}else{if(Y==="space"){R.push(X)}else{if(Y==="page"){L.push(X)}}}}});_.each(N,function(V){F[C(V)]=o(V)});var O=[];if(R.length>0){var J=i.getJSON(AJS.contextPath()+"/rest/prototype/1/space",{spaceKey:R}).done(function(X){var V=[];_.each(X.space,function(Y){F[a(Y.key)]=m(Y.key,_.escape(Y.name),null,true);V.push(Y.key)});var W=_.difference(R,V);_.each(W,function(Y){F[a(Y)]=m(Y,Y,null,false)})}).fail(function(){AJS.debug("Couldn't resolve spaceKeys:",R);_.each(R,function(V){F[a(V)]=m(V,V,null,false)})});O.push(J)}_.each(L,function(V){var W=i.getJSON(AJS.contextPath()+"/rest/api/content/"+V,{expand:"space"}).done(function(X){F[D(X.id)]=h(X.id,_.escape(X.title),_.escape(X.space.name),"content-type-page",true)}).fail(function(){AJS.debug("Couldn't resolve pageId:",V);F[D(V)]=h(V,V,"","content-type-page",false)});O.push(W)});i.when.apply(i,_.map(O,function(W){var V=new i.Deferred();W.always(function(){V.resolve()});return V.promise()})).done(function(){S(r(H,F,T))})}}(AJS.$,window.Confluence.UI.Components.SpacePagePicker));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:space-page-picker', location = '/soy/space-page-picker.soy' */
// This file was automatically generated from space-page-picker.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.templates == 'undefined') { Confluence.UI.Components.templates = {}; }


Confluence.UI.Components.templates.hiddenField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<input type="hidden" id="', soy.$$escapeHtml(opt_data.id), '" name="', soy.$$escapeHtml(opt_data.name), '" />');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:task-report-blueprint-resources', location = 'templates/task-report-blueprint.soy' */
// This file was automatically generated from task-report-blueprint.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.InlineTasks == 'undefined') { Confluence.InlineTasks = {}; }
if (typeof Confluence.InlineTasks.Report == 'undefined') { Confluence.InlineTasks.Report = {}; }
if (typeof Confluence.InlineTasks.Report.Templates == 'undefined') { Confluence.InlineTasks.Report.Templates = {}; }


Confluence.InlineTasks.Report.Templates.taskReportBlueprintForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol class="report-types" id="task-report-types"><li class="template" id="team-task-report"><span class="template-preview team-task-report-icon"></span><div class="template-meta"><div class="template-name">', soy.$$escapeHtml("Assigned to my team"), '</div><div class="template-description">', soy.$$escapeHtml("Show tasks assigned to specific people"), '</div></div></li><li class="template" id="location-task-report"><span class="template-preview location-task-report-icon"></span><div class="template-meta"><div class="template-name">', soy.$$escapeHtml("In my project"), '</div><div class="template-description">', soy.$$escapeHtml("Show tasks created in specific spaces and pages"), '</div></div></li><li class="template" id="custom-task-report"><span class="template-preview custom-task-report-icon"></span><div class="template-meta"><div class="template-name">', soy.$$escapeHtml("Custom"), '</div><div class="template-description">', soy.$$escapeHtml("Create your own report"), '</div></div></li></ol>');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.reportByTeamForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="report-by-team-form" class="aui"><fieldset><div class="field-group"><label for="task-report-page-title">', soy.$$escapeHtml("Title"), '<span class="aui-icon icon-required">required</span></label><input id="task-report-page-title" class="text long-field" type="text" name="title" placeholder="', soy.$$escapeHtml("Title of your task report"), '"/><div class="error hidden"></div></div><div class="field-group"><label for="task-report-team-picker">', soy.$$escapeHtml("Assigned to"), '<span class="aui-icon icon-required">required</span></label><input id="task-report-team-picker" class="text select2-input long-field autocomplete-multiuser" type="text" name="teamMembers" placeholder="', soy.$$escapeHtml("Only show tasks assigned to these people"), '" /><div class="error hidden"></div></div><div class="field-group"><div class="checkbox"><input class="checkbox" type="checkbox" name="completed" id="task-report-completed-cb"><label for="task-report-completed-cb">', soy.$$escapeHtml("Include completed tasks"), '</label></div></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.reportByLocationForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="report-by-location-form" class="aui"><fieldset><div class="field-group"><label for="task-report-page-title">', soy.$$escapeHtml("Title"), '<span class="aui-icon icon-required">required</span></label><input id="task-report-page-title" class="text long-field" type="text" name="title" placeholder="', soy.$$escapeHtml("Title of your task report"), '"/><div class="error hidden"></div></div><div class="field-group"><label for="task-report-location-picker">', soy.$$escapeHtml("Created in"), '<span class="aui-icon icon-required">required</span></label><input id="task-report-location-picker" class="text select2-input long-field" type="text" name="locations" placeholder="', soy.$$escapeHtml("Select task locations"), '"/><div class="error hidden"></div></div><div class="field-group"><label for="task-report-label-picker">', soy.$$escapeHtml("Labels"), '</label><input id="task-report-label-picker" class="text select2-input long-field" type="text" name="labels" placeholder="', soy.$$escapeHtml("Only show tasks on pages with these labels"), '"/></div><div class="field-group"><div class="checkbox"><input class="checkbox" type="checkbox" name="completed" id="task-report-completed-cb"><label for="task-report-completed-cb">', soy.$$escapeHtml("Include completed tasks"), '</label></div></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.assigneeParam = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.userKeys) {
    output.append('<ac:parameter ac:name="assignees">');
    var keyList48 = opt_data.userKeys;
    var keyListLen48 = keyList48.length;
    for (var keyIndex48 = 0; keyIndex48 < keyListLen48; keyIndex48++) {
      var keyData48 = keyList48[keyIndex48];
      output.append('<ri:user ri:userkey="', soy.$$escapeHtml(keyData48), '" />');
    }
    output.append('</ac:parameter>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.creatorParam = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.userKeys) {
    output.append('<ac:parameter ac:name="creators">');
    var keyList58 = opt_data.userKeys;
    var keyListLen58 = keyList58.length;
    for (var keyIndex58 = 0; keyIndex58 < keyListLen58; keyIndex58++) {
      var keyData58 = keyList58[keyIndex58];
      output.append('<ri:user ri:userkey="', soy.$$escapeHtml(keyData58), '" />');
    }
    output.append('</ac:parameter>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.macroParam = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.value) ? '<ac:parameter ac:name="' + soy.$$escapeHtml(opt_data.name) + '">' + soy.$$escapeHtml(opt_data.value) + '</ac:parameter>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.teamReportContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p><ac:structured-macro ac:name="tasks-report-macro"><!-- assignee-->');
  Confluence.InlineTasks.Report.Templates.assigneeParam({userKeys: opt_data.assignees}, output);
  output.append('<!-- status--><ac:parameter ac:name="status">incomplete</ac:parameter></ac:structured-macro></p>');
  if (opt_data.showCompletedTasks) {
    output.append('<ac:structured-macro ac:name="expand"><ac:parameter ac:name="title">', soy.$$escapeHtml("Completed tasks"), '</ac:parameter><ac:rich-text-body><p><ac:structured-macro ac:name="tasks-report-macro"><!-- assignee-->');
    Confluence.InlineTasks.Report.Templates.assigneeParam({userKeys: opt_data.assignees}, output);
    output.append('<!-- status--><ac:parameter ac:name="status">complete</ac:parameter></ac:structured-macro></p></ac:rich-text-body></ac:structured-macro>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.locationReportContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p><ac:structured-macro ac:name="tasks-report-macro"><!-- space-->');
  Confluence.InlineTasks.Report.Templates.macroParam({name: 'spaces', value: opt_data.spaceKeys}, output);
  output.append('<!-- pages-->');
  Confluence.InlineTasks.Report.Templates.macroParam({name: 'pages', value: opt_data.pageIds}, output);
  output.append('<!-- labels-->');
  Confluence.InlineTasks.Report.Templates.macroParam({name: 'labels', value: opt_data.labels}, output);
  output.append('<!-- status--><ac:parameter ac:name="status">incomplete</ac:parameter></ac:structured-macro></p>');
  if (opt_data.showCompletedTasks) {
    output.append('<ac:structured-macro ac:name="expand"><ac:parameter ac:name="title">', soy.$$escapeHtml("Completed tasks"), '</ac:parameter><ac:rich-text-body><p><ac:structured-macro ac:name="tasks-report-macro"><!-- space-->');
    Confluence.InlineTasks.Report.Templates.macroParam({name: 'spaces', value: opt_data.spaceKeys}, output);
    output.append('<!-- pages-->');
    Confluence.InlineTasks.Report.Templates.macroParam({name: 'pages', value: opt_data.pageIds}, output);
    output.append('<!-- labels-->');
    Confluence.InlineTasks.Report.Templates.macroParam({name: 'labels', value: opt_data.labels}, output);
    output.append('<!-- status--><ac:parameter ac:name="status">complete</ac:parameter></ac:structured-macro></p></ac:rich-text-body></ac:structured-macro>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.customReportContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p><span class="text-placeholder">', soy.$$escapeHtml("Edit the Task Report macro to customise your report."), '</span></p><ac:structured-macro ac:name="tasks-report-macro">');
  if (opt_data.creators) {
    Confluence.InlineTasks.Report.Templates.creatorParam({userKeys: opt_data.creators}, output);
  }
  output.append('</ac:structured-macro>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:task-report-blueprint-resources', location = 'js/task-report-bp.js' */
(function(d){var c;function e(t){t.addClass("selected").siblings().removeClass("selected");AJS.trigger("selected.task-report-types",t)}function i(w,v){AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent("confluence-spaces.tasks.report_blueprint.clicked"):AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.report_blueprint.clicked"});var u=d("#task-report-types");var t=u.find(".template");t.first().addClass("selected");t.click(function(){e(d(this))}).dblclick(function(){d(".create-dialog-create-button:visible").click()});u.attr("tabindex",0).keydown(function(z){if(z.keyCode==38||z.keyCode==40){z.preventDefault();var x=u.find(".selected"),y;if(z.keyCode==38){y=x.prev().length?x.prev():t.last()}else{if(z.keyCode==40){y=x.next().length?x.next():t.first()}}e(y)}});u.focus();AJS.bind("selected.task-report-types",function(y,x){if(d(x).is("#custom-task-report")){p("Create")}else{p("Next")}});p("Next")}function f(v,u){var t=u.$container.find(".selected").attr("id");if(t==="team-task-report"){u.nextPageId="teamTaskReportId";AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent("confluence-spaces.tasks.report_team.clicked"):AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.report_team.clicked"})}else{if(t==="location-task-report"){u.nextPageId="locationTaskReportId";AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent("confluence-spaces.tasks.report_project.clicked"):AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.report_project.clicked"})}else{if(t==="custom-task-report"){c.getSubmissionRestPath=function(){AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent("confluence-spaces.tasks.report_custom.clicked"):AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.report_custom.clicked"});return"/rest/create-dialog/1.0/content-blueprint/create-draft"};g(u,"custom-task-report-template")}else{return false}}}}function a(u,t){o()}function m(w,v){var t=d("#report-by-team-form");b(t);var u=true;u=r(d("#task-report-team-picker"),"Assignee is required.")&&u;u=s(v.wizardData.spaceKey)&&u;u?g(v,"team-task-report-template"):h(t);AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent("confluence-spaces.tasks.report_team.created"):AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.report_team.created"});return u}function n(u,t){k(d("#task-report-location-picker"),t.wizardData.spaceKey);q(d("#task-report-label-picker"));o()}function j(w,v){var t=d("#report-by-location-form");b(t);var u=true;u=r(d("#task-report-location-picker"),"A space or page is required.")&&u;u=s(v.wizardData.spaceKey)&&u;if(u){g(v,"location-task-report-template")}else{h(t)}AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent("confluence-spaces.tasks.report_project.created"):AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.report_project.created"});return u}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-inline-tasks:task-report-blueprint-item",function(t){t.on("post-render.selectTaskReportId",i);t.on("submit.selectTaskReportId",f);t.on("post-render.teamTaskReportId",a);t.on("submit.teamTaskReportId",m);t.on("post-render.locationTaskReportId",n);t.on("submit.locationTaskReportId",j);c=t});function b(t){t.find(".error").addClass("hidden").empty()}function s(v){var t=d("#task-report-page-title");var u=Confluence.Blueprint.validateTitle(t,v);if(!u){t.siblings(".error").removeClass("hidden")}return u}function r(t,u){var v=d.trim(t.val());if(!v&&u){l(t,u)}return !!v}function h(u){var t=u.find("div.error:not(.hidden)").first();var v=t.siblings("input").eq(0);if(v.hasClass("select2-offscreen")){v.select2("focus")}else{v.focus()}}function g(t,u){t.pageData.contentTemplateKey=u}function l(v,u){var t=v.siblings(".error");t.html(u);t.removeClass("hidden");return u}function q(t){t.auiSelect2(Confluence.UI.Components.LabelPicker.build())}function k(u,t){u.auiSelect2(Confluence.UI.Components.SpacePagePicker.build({spaceKeys:[t],orgElement:u}))}function p(t){d(".create-dialog-create-button:visible").text(t)}function o(){var v;var u=d("#task-report-completed-cb");var t=d("label[for=task-report-completed-cb]").add(u);t.mousedown(function(){v=true});d(".dialog-wizard-page-main").on("mouseup",function(w){if(!t.is(w.target)&&v){u.click()}v=false})}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-knowledge-base:space-kb-web-resource', location = 'js/kb-space-dialog-wizard.js' */
AJS.bind("blueprint.wizard-register.ready",function(){function a(d,c){c.pageData.ContentPageTitle=c.pageData.name;return Confluence.SpaceBlueprint.CommonWizardBindings.submit(d,c)}function b(d,c){c.soyRenderContext.atlToken=AJS.Meta.get("atl-token");c.soyRenderContext.showSpacePermission=false}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-knowledge-base:kb-blueprint-item",function(c){c.on("submit.kbSpaceId",a);c.on("pre-render.kbSpaceId",b);c.on("post-render.kbSpaceId",Confluence.SpaceBlueprint.CommonWizardBindings.postRender)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-knowledge-base:space-kb-web-resource', location = 'soy/space.soy' */
// This file was automatically generated from space.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.SpaceBlueprints == 'undefined') { Confluence.SpaceBlueprints = {}; }
if (typeof Confluence.SpaceBlueprints.KnowledgeBase == 'undefined') { Confluence.SpaceBlueprints.KnowledgeBase = {}; }


Confluence.SpaceBlueprints.KnowledgeBase.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="kb-space-form" class="common-space-form aui">');
  Confluence.Templates.Blueprints.CreateSpace.createSpaceFormFields({showSpacePermission: false, fieldErrors: opt_data.fieldErrors, name: opt_data.name, spaceKey: opt_data.spaceKey}, output);
  output.append('<fieldset><div class="field-group"><label for="kb-space-desc">', soy.$$escapeHtml("Description"), '</label><textarea id="kb-space-desc" class="textarea long-field" rows="3" type="text" name="description" placeholder="', soy.$$escapeHtml("What is this knowledge base for?"), '"></textarea></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.SpaceBlueprints.KnowledgeBase.livesearchMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:structured-macro ac:name="livesearch"><ac:parameter ac:name="additional">page excerpt</ac:parameter><ac:parameter ac:name="placeholder">', soy.$$escapeHtml("Search for a solution"), '</ac:parameter>', (opt_data.spaceKey) ? '<ac:parameter ac:name="spaceKey"><ri:space ri:space-key="' + soy.$$escapeHtml(opt_data.spaceKey) + '"/></ac:parameter>' : '', '<ac:parameter ac:name="type">page</ac:parameter><ac:parameter ac:name="size">large</ac:parameter></ac:structured-macro>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:label-picker', location = '/js/label-picker.js' */
(function(c,a){var e=/[:;,\.\?&\[\(\)#\^\*@!<>\]]/g;var b=function(h){var i=_.uniq(h.match(e));return i.join(" ")};var g=function(h){var i=_.map(h.contentNameMatches[0],function(j){return{id:j.name,text:j.name}});return _.sortBy(i,function(j){return j.text.toLowerCase()})};var d=function(h){return function(i){return c.extend({query:i},h)}};var f={placeholder:"Add labels",multiple:true,minimumInputLength:1,maximumSelectionSize:20,tokenSeparators:[" ",","],formatInputTooShort:function(i,h){return "Start typing to search for a label"},formatSelectionTooBig:function(h){return AJS.format("You can only input {0} labels",h)},formatResult:function(h){return Confluence.UI.Components.LabelPicker.templates.labelResult({label:{labelName:h.text,isNew:h.isNew}})},formatNoMatches:function(i){var h=b(i);if(h){return Confluence.UI.Components.LabelPicker.templates.labelInvalid({inputValue:i,invalidCharacters:h})}else{return "Add labels"}},createSearchChoice:function(i){if(!i){return null}var h=b(i);if(h){return null}return{id:i,text:i,isNew:true}},ajax:{data:d(),dataType:"json",url:Confluence.getContextPath()+"/labels/autocompletelabel.action",results:function(h){return{results:g(h)}},quietMillis:300},dropdownCssClass:"labels-dropdown",containerCssClass:"labels-autocomplete"};a.build=function(i){var h=c.extend({},f,i);if(i&&i.queryOpts){h.ajax.data=d(i.queryOpts);delete h.queryOpts}return h}}(AJS.$,window.Confluence.UI.Components.LabelPicker));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:label-picker', location = '/soy/label-picker.soy' */
// This file was automatically generated from label-picker.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.LabelPicker == 'undefined') { Confluence.UI.Components.LabelPicker = {}; }
if (typeof Confluence.UI.Components.LabelPicker.templates == 'undefined') { Confluence.UI.Components.LabelPicker.templates = {}; }


Confluence.UI.Components.LabelPicker.templates.labelResult = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.label.isNew) ? soy.$$escapeHtml(AJS.format("\x22{0}\x22 - add a new label",opt_data.label.labelName)) : soy.$$escapeHtml(opt_data.label.labelName));
  return opt_sb ? '' : output.toString();
};


Confluence.UI.Components.LabelPicker.templates.labelInvalid = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var inputValueHtml__soy9 = new soy.StringBuilder('<b>', soy.$$escapeHtml(opt_data.inputValue), '</b>');
  inputValueHtml__soy9 = inputValueHtml__soy9.toString();
  var invalidCharactersHtml__soy13 = new soy.StringBuilder('<b>', soy.$$escapeHtml(opt_data.invalidCharacters), '</b>');
  invalidCharactersHtml__soy13 = invalidCharactersHtml__soy13.toString();
  output.append(AJS.format("{0} contains invalid characters {1}",inputValueHtml__soy9,invalidCharactersHtml__soy13));
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-knowledge-base:kb-article-resources', location = 'soy/kb-articles.soy' */
// This file was automatically generated from kb-articles.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Plugin == 'undefined') { Confluence.Blueprints.Plugin = {}; }
if (typeof Confluence.Blueprints.Plugin.KnowledgeBaseArticle == 'undefined') { Confluence.Blueprints.Plugin.KnowledgeBaseArticle = {}; }


Confluence.Blueprints.Plugin.KnowledgeBaseArticle.wizardPage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="kb-article-wizard-page-form" class="aui"><fieldset><div class="field-group"><label for="kb-article-title">', soy.$$escapeHtml("Name"), '<span class="aui-icon icon-required">', soy.$$escapeHtml("$WIZARD_FORM_FIELD_REQUIRED_I18N"), '</span></label><input id="kb-article-title" class="text  long-field" type="text" name="title" title="title" placeholder="', soy.$$escapeHtml("Title of your article."), '" maxlength="255"><div class="error"></div></div><div class="field-group"><label>', soy.$$escapeHtml("Labels"), '</label><input id="kb-article-labels" class="text select2-input long-field" type="text" name="labelsString" title="labelsString" placeholder="', soy.$$escapeHtml("Topics this article covers (e.g. \x22printer\x22)."), '"><div class="error"></div></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Plugin.KnowledgeBaseArticle.contentbylabelMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:structured-macro ac:name="contentbylabel"><ac:parameter ac:name="showLabels">false</ac:parameter><ac:parameter ac:name="max">5</ac:parameter><ac:parameter ac:name="sort">modified</ac:parameter><ac:parameter ac:name="reverse">true</ac:parameter><ac:parameter ac:name="labels">', soy.$$escapeHtml(opt_data.labels), '</ac:parameter><ac:parameter ac:name="showSpace">false</ac:parameter><ac:parameter ac:name="spaces"><ri:space ri:space-key="', soy.$$escapeHtml(opt_data.spaceKey), '" /></ac:parameter><ac:parameter ac:name="type">page</ac:parameter></ac:structured-macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Plugin.KnowledgeBaseArticle.jiraIssuesMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:structured-macro ac:name="jira"><ac:parameter ac:name="key">', soy.$$escapeHtml(opt_data.jiraIssueKey), '</ac:parameter><ac:parameter ac:name="serverId">', soy.$$escapeHtml(opt_data.jiraServerId), '</ac:parameter></ac:structured-macro>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-knowledge-base:kb-article-resources', location = 'js/kb-articles-dialog-wizard.js' */
AJS.toInit(function(c){function a(i,g){var h=g.$container;var f=c("#kb-article-labels",h);f.auiSelect2(Confluence.UI.Components.LabelPicker.build({separator:" ",queryOpts:{spaceKey:g.wizardData.spaceKey}}))}function d(j,h){var i=j,e=i.find("#kb-article-title"),g=c.trim(e.val()),f;i.find(".error").html("");if(!g){f="Title is required."}else{if(!Confluence.Blueprint.canCreatePage(h,g)){f="A page with this name already exists."}}if(f){e.focus().siblings(".error").html(f);return false}return true}function b(g,f){return d(f.$container,f.wizardData.spaceKey)}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-knowledge-base:kb-how-to-item",function(e){e.on("post-render.kb-how-to-wizard",a);e.on("submit.kb-how-to-wizard",b)});Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-knowledge-base:kb-troubleshooting-item",function(e){e.on("post-render.kb-troubleshooting-wizard",a);e.on("submit.kb-troubleshooting-wizard",b)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:common-template-resources', location = 'com/atlassian/confluence/plugins/blueprint/common/soy/common-templates.soy' */
// This file was automatically generated from common-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Common == 'undefined') { Confluence.Blueprints.Common = {}; }
if (typeof Confluence.Blueprints.Common.Index == 'undefined') { Confluence.Blueprints.Common.Index = {}; }


Confluence.Blueprints.Common.Index.detailsSummaryMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="detailssummary"><ac:parameter ac:name="label">', soy.$$escapeHtml(opt_data.label), '</ac:parameter><ac:parameter ac:name="spaces">', soy.$$escapeHtml(opt_data.spaces), '</ac:parameter><ac:parameter ac:name="firstcolumn">', soy.$$escapeHtml(opt_data.firstcolumn), '</ac:parameter><ac:parameter ac:name="headings">', soy.$$escapeHtml(opt_data.headings), '</ac:parameter><ac:parameter ac:name="blankTitle">', soy.$$escapeHtml(opt_data.blankTitle), '</ac:parameter><ac:parameter ac:name="blankDescription">', soy.$$escapeHtml(opt_data.blankDescription), '</ac:parameter><ac:parameter ac:name="contentBlueprintId">', soy.$$escapeHtml(opt_data.contentBlueprintId), '</ac:parameter><ac:parameter ac:name="blueprintModuleCompleteKey">', soy.$$escapeHtml(opt_data.blueprintModuleCompleteKey), '</ac:parameter><ac:parameter ac:name="createButtonLabel">', soy.$$escapeHtml(opt_data.createButtonLabel), '</ac:parameter></ac:macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Common.Index.createFromTemplateMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="create-from-template"><ac:parameter ac:name="blueprintModuleCompleteKey">', soy.$$escapeHtml(opt_data.moduleKey), '</ac:parameter><ac:parameter ac:name="buttonLabel">', soy.$$escapeHtml(opt_data.buttonLabel), '</ac:parameter><ac:parameter ac:name="spaceKey">', soy.$$escapeHtml(opt_data.spaceKey), '</ac:parameter><ac:parameter ac:name="templateName">', soy.$$escapeHtml(opt_data.templateName), '</ac:parameter></ac:macro>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:file-list-resources', location = 'com/atlassian/confluence/plugins/filelist/soy/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.FileList == 'undefined') { Confluence.Templates.FileList = {}; }


Confluence.Templates.FileList.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="file-list-form" class="aui"><fieldset><div class="field-group"><label for="file-list-page-title">', soy.$$escapeHtml("Name"), '<span class="aui-icon icon-required"> required</span></label><input id="file-list-page-title" class="text long-field" type="text" name="title" placeholder="', soy.$$escapeHtml("Title of your file list"), '" maxlength="255"><div class="error"></div></div><div class="field-group"><label for="file-list-page-description">', soy.$$escapeHtml("Description"), '</label><textarea id="file-list-page-description" class="textarea long-field" name="description" rows="6" placeholder="', soy.$$escapeHtml("Description which will appear at the top of file list"), '"></textarea></div><div class="field-group"><label for="file-list-restrictions">', soy.$$escapeHtml("Restrictions"), '</label><input id="file-list-restrictions" class="text long-field autocomplete-multiuser" type="text" name="viewPermissionsUsers" placeholder="', soy.$$escapeHtml("Restrict to users"), '"></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:file-list-resources', location = 'com/atlassian/confluence/plugins/filelist/js/create-file-list-listener.js' */
(function(b){function c(h,g){var d=h.find("#file-list-page-title"),f=b.trim(d.val()),e;if(!f){e="Name is required."}else{if(!Confluence.Blueprint.canCreatePage(g,f)){e="A page with this name already exists."}}if(e){d.focus().siblings(".error").html(e);return false}return true}function a(d,e){return c(e.$container,e.wizardData.spaceKey)}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-business-blueprints:file-list-item",function(d){d.on("submit.file-list-page1",a)})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/how-to.soy' */
// This file was automatically generated from how-to.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Meeting == 'undefined') { Confluence.Blueprints.Meeting = {}; }
if (typeof Confluence.Blueprints.Meeting.Notes == 'undefined') { Confluence.Blueprints.Meeting.Notes = {}; }


Confluence.Blueprints.Meeting.Notes.howTo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h1>', soy.$$escapeHtml("With meeting notes you can..."), '</h1><ol class="howto-steps"><li class="howto-step"><div><h3>', soy.$$escapeHtml("Crowd-source your agenda"), '</h3><p>', soy.$$escapeHtml("Distribute an agenda and keep meetings focused."), '</p></div></li><li class="howto-step"><div><h3>', soy.$$escapeHtml("Capture meeting minutes"), '</h3><p>', soy.$$escapeHtml("Take notes and make them available to everyone."), '</p></div></li><li class="howto-step"><div><h3>', soy.$$escapeHtml("Create and assign tasks"), '</h3><p>', soy.$$escapeHtml("Assign action items for attendees to work on afterward."), '</p></div></li></ol>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/user-mention.soy' */
// This file was automatically generated from user-mention.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Meeting == 'undefined') { Confluence.Templates.Meeting = {}; }
if (typeof Confluence.Templates.Meeting.Notes == 'undefined') { Confluence.Templates.Meeting.Notes = {}; }


Confluence.Templates.Meeting.Notes.userMention = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.username) ? '<li><p><ac:link><ri:user ri:username="' + soy.$$escapeHtml(opt_data.username) + '" /></ac:link></p></li><li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml("@mention a person to add them as an attendee and they will be notified.") + '</ac:placeholder></p></li>' : '<li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml("@mention a person to add them as an attendee and they will be notified.") + '</ac:placeholder></p></li>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:decisions-resources', location = 'com/atlassian/confluence/plugins/decisions/soy/decisions-templates.soy' */
// This file was automatically generated from decisions-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Decisions == 'undefined') { Confluence.Blueprints.Decisions = {}; }


Confluence.Blueprints.Decisions.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="decisions-form" class="aui"><fieldset><div class="field-group"><label for="decisions-status">', soy.$$escapeHtml("Status"), '</label><select class="select long-field" id="decisions-status" name="status"><option value="GREY">', soy.$$escapeHtml("Not started"), '</option><option value="YELLOW">', soy.$$escapeHtml("In progress"), '</option><option value="GREEN">', soy.$$escapeHtml("Decided"), '</option></select></div><div class="field-group"><label for="decisions-page-title">', soy.$$escapeHtml("Decision"), '<span class="aui-icon icon-required"> required</span></label><input id="decisions-page-title" class="text long-field" type="text" name="title" placeholder="', soy.$$escapeHtml("What are you deciding?"), '" maxlength="255"><div class="error"></div></div><div class="field-group"><label for="decisions-owner">', soy.$$escapeHtml("Owner"), '</label><input id="decisions-owner" type="text" class="text long-field autocomplete-multiuser" name="owner" placeholder="', soy.$$escapeHtml("Who should make the final decision?"), '" data-autofill-user="true"></div><div class="field-group"><label for="decisions-stakeholders">', soy.$$escapeHtml("Stakeholders"), '</label><input id="decisions-stakeholders" class="text long-field autocomplete-multiuser" type="text" name="stakeholders" placeholder="', soy.$$escapeHtml("Who needs to help make this decision?"), '"></div><div class="field-group"><label for="decisions-due-date">', soy.$$escapeHtml("Due date"), '</label><input id="decisions-due-date" class="datepicker-field date-field text" type="text" name="due-date" size="10" autocomplete="off"></div><div class="field-group"><label for="decisions-background">', soy.$$escapeHtml("Background"), '</label><textarea id="decisions-background" class="textarea long-field" rows="3" name="background" placeholder="', soy.$$escapeHtml("What details are important in making this decision?"), '"></textarea></div><div class="field-group"><label for="decisions-final-decision">', soy.$$escapeHtml("Outcome"), '</label><textarea id="decisions-final-decision" class="textarea long-field" rows="3" name="final-decision" placeholder="', soy.$$escapeHtml("What did you decide?"), '"></textarea></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Decisions.mentionXml = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var nameList35 = opt_data.names;
  var nameListLen35 = nameList35.length;
  for (var nameIndex35 = 0; nameIndex35 < nameListLen35; nameIndex35++) {
    var nameData35 = nameList35[nameIndex35];
    output.append('<ac:link><ri:user ri:username="', soy.$$escapeHtml(nameData35), '" /></ac:link>&nbsp;');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Decisions.mentionsPlaceholder = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:placeholder ac:type="mention">', soy.$$escapeHtml(opt_data.placeholderText), '</ac:placeholder>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Decisions.placeholder = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:placeholder>', soy.$$escapeHtml(opt_data.placeholderText), '</ac:placeholder>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Decisions.statusTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="status"><ac:parameter ac:name="title">', soy.$$escapeHtml(opt_data.status), '</ac:parameter><ac:parameter ac:name="colour">', soy.$$escapeHtml(opt_data.statusColour), '</ac:parameter></ac:macro>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:decisions-resources', location = 'com/atlassian/confluence/plugins/decisions/js/create-decisions-listener.js' */
(function(c){function d(i,h){var e=i.find("#decisions-page-title"),g=c.trim(e.val()),f;if(!g){f="Decision is required."}else{if(!Confluence.Blueprint.canCreatePage(h,g)){f="A page with this name already exists."}}if(f){e.focus().siblings(".error").html(f);return false}return true}function a(e,f){return d(f.$container,f.wizardData.spaceKey)}function b(e,f){c("#decisions-due-date").datepicker({dateFormat:"yy-mm-dd"});c("#decisions-status").on("change",function(){var h=c("#decisions-final-decision");var g=c("label[for=decisions-final-decision]");if(c(this).find(":selected").val()=="GREEN"){h.css({display:"inline"});g.css({display:"inline"})}else{h.css({display:"none"});g.css({display:"none"})}})}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-business-blueprints:decisions-blueprint-item",function(e){e.on("post-render.decisions-page1",b);e.on("submit.decisions-page1",a)})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-resources', location = 'com/atlassian/confluence/plugins/sharelinks/soy/sharelinks-templates.soy' */
// This file was automatically generated from sharelinks-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Sharelinks == 'undefined') { Confluence.Blueprints.Sharelinks = {}; }


Confluence.Blueprints.Sharelinks.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="sharelinks-form" class="aui"><fieldset><div class="field-group"><label for="sharelinks-url">', soy.$$escapeHtml("Link"), '<span class="aui-icon icon-required"> required</span></label><input id="sharelinks-url" class="text long-field" type="text" name="url" placeholder="', soy.$$escapeHtml("Paste a link to any website"), '"/><div class="error"></div></div><div class="field-group"><label for="sharelinks-title">', soy.$$escapeHtml("Title"), '<span class="aui-icon icon-required"> required</span></label><input id="sharelinks-title" class="text long-field" type="text" name="title" title="title" placeholder="', soy.$$escapeHtml("Title of the page"), '" maxlength="255"><div class="error"></div></div><div class="field-group"><label for="sharelinks-label">', soy.$$escapeHtml("Labels"), '</label><input id="sharelinks-label" class="text select2-input long-field" type="text" name="label" placeholder="', soy.$$escapeHtml("Suggest a topic"), '" /></div><div class="field-group"><label for="sharelinks-sharewith">', soy.$$escapeHtml("Share with"), '</label><input id="sharelinks-sharewith" class="text long-field autocomplete-multiuser" type="text" name="sharewith" placeholder="', soy.$$escapeHtml("Share this page with users"), '"/></div><div class="field-group"><label for="sharelinks-comment">', soy.$$escapeHtml("Comment"), '</label><textarea id="sharelinks-comment" class="textarea long-field" rows="4" type="text" name="comment" placeholder="', soy.$$escapeHtml("Share your thoughts about this link"), '"></textarea></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.previewLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="sharelinks-preview">');
  if (opt_data.linkMetaData.title) {
    output.append('<h3 class="sharelinks-preview-title">', soy.$$escapeHtml(opt_data.linkMetaData.title), '</h3>');
    if (opt_data.linkMetaData.imageURL) {
      output.append('<div class="sharelinks-preview-image"><img src="', soy.$$escapeHtml(opt_data.linkMetaData.imageURL), '"/></div>');
    } else {
      var noImagePreviewContent__soy37 = new soy.StringBuilder();
      Confluence.Blueprints.Sharelinks.noImagePreview(null, noImagePreviewContent__soy37);
      noImagePreviewContent__soy37 = noImagePreviewContent__soy37.toString();
      output.append(noImagePreviewContent__soy37);
    }
    output.append((opt_data.linkMetaData.description) ? '<p>' + soy.$$escapeHtml(opt_data.linkMetaData.description) + '</p>' : '');
  } else {
    var previewUnavailableContent__soy47 = new soy.StringBuilder();
    Confluence.Blueprints.Sharelinks.previewUnavailable(null, previewUnavailableContent__soy47);
    previewUnavailableContent__soy47 = previewUnavailableContent__soy47.toString();
    output.append(previewUnavailableContent__soy47);
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.previewVideoLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="sharelinks-preview"><h3 class="sharelinks-preview-title">', soy.$$escapeHtml(opt_data.linkMetaData.title), '</h3><div class="sharelinks-preview-video">');
  if (opt_data.linkMetaData.imageURL) {
    output.append('<span class="sharelinks-preview-image"><img src="', soy.$$escapeHtml(opt_data.linkMetaData.imageURL), '"/><span class="sharelinks-preview-camera-icon sharelinks-camera-with-image"></span></span>');
  } else {
    output.append('<div>');
    var noImagePreviewContent__soy63 = new soy.StringBuilder();
    Confluence.Blueprints.Sharelinks.noImagePreview(null, noImagePreviewContent__soy63);
    noImagePreviewContent__soy63 = noImagePreviewContent__soy63.toString();
    output.append(noImagePreviewContent__soy63, '<span class="sharelinks-preview-camera-icon sharelinks-camera-with-no-image"></span></div>');
  }
  output.append('</div>', (opt_data.linkMetaData.description) ? '<p>' + soy.$$escapeHtml(opt_data.linkMetaData.description) + '</p>' : '', '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.previewLoading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="sharelinks-preview-loading"><span class="aui-icon aui-icon-wait"></span>&nbsp;', soy.$$escapeHtml("Loading preview\u2026"), '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.metaDataHtml = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="sharelinks-link-meta-data"><ac:macro ac:name="panel"><ac:rich-text-body>', (opt_data.linkMetaData.imageURL) ? '<h3><ac:image ac:align="right"><ri:url ri:value=\'' + soy.$$escapeHtml(opt_data.linkMetaData.imageURL) + '\' /></ac:image></h3>' : '', '<p><ac:image ac:width=\'16\'><ri:url ri:value="', soy.$$escapeHtml(opt_data.faviconURL), '" /></ac:image>&nbsp;<a href="', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '">', soy.$$escapeHtml(opt_data.linkMetaData.excerptedURL), '</a></p>', (opt_data.linkMetaData.description) ? '<blockquote><p>' + soy.$$escapeHtml(opt_data.descriptionMessage) + '</p></blockquote>' : '<p style="text-align: left;"><span style="color: rgb(128,128,128);"><em>' + soy.$$escapeHtml(opt_data.descriptionMessage) + '</em></span></p>', '<p><strong><a href="', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '">', soy.$$escapeHtml("Open link"), '</a></strong></p></ac:rich-text-body></ac:macro></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.previewError = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="sharelinks-preview">');
  var previewUnavailableContent__soy109 = new soy.StringBuilder();
  Confluence.Blueprints.Sharelinks.previewUnavailable(null, previewUnavailableContent__soy109);
  previewUnavailableContent__soy109 = previewUnavailableContent__soy109.toString();
  output.append(previewUnavailableContent__soy109, '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.videoMetaDataHtml = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="panel"><ac:rich-text-body><ac:macro ac:name="section"><ac:rich-text-body><ac:macro ac:name="column"><ac:parameter ac:name="width">50%</ac:parameter><ac:rich-text-body><p><ac:image ac:width=\'16\'><ri:url ri:value="', soy.$$escapeHtml(opt_data.faviconURL), '" /></ac:image>&nbsp;<a href="', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '">', soy.$$escapeHtml(opt_data.linkMetaData.excerptedURL), '</a></p>', (opt_data.linkMetaData.description) ? '<blockquote><p>' + soy.$$escapeHtml(opt_data.linkMetaData.description) + '</p></blockquote>' : '', '<p><strong><a href="', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '">', soy.$$escapeHtml("Open link"), '</a></strong></p></ac:rich-text-body></ac:macro><ac:macro ac:name="column"><ac:parameter ac:name="width">50%</ac:parameter><ac:rich-text-body><p>', (opt_data.isSupportedMediaDomain) ? '<ac:macro ac:name="widget"><ac:parameter ac:name="url">' + soy.$$escapeHtml(opt_data.linkMetaData.sourceURL) + '</ac:parameter><ac:parameter ac:name="width">350</ac:parameter><ac:parameter ac:name="height">240</ac:parameter></ac:macro>' : '<ac:image ac:width="300"><ri:url ri:value="' + soy.$$escapeHtml(opt_data.linkMetaData.imageURL) + '" /></ac:image>', '</p></ac:rich-text-body></ac:macro></ac:rich-text-body></ac:macro></ac:rich-text-body></ac:macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.twitterMetaDataHtml = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.linkMetaData.description) {
    output.append('<div class="sharelinks-twitter-content"><p><ac:image ac:width=\'16\'><ri:url ri:value="', soy.$$escapeHtml(opt_data.faviconURL), '" /></ac:image>&nbsp;<a href="', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '">', soy.$$escapeHtml(opt_data.linkMetaData.excerptedURL), '</a></p><p><ac:macro ac:name="widget"><ac:parameter ac:name="url">', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '</ac:parameter></ac:macro></p><p><strong><a href="', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '">', soy.$$escapeHtml("Open link"), '</a></strong></p></div>');
  } else {
    Confluence.Blueprints.Sharelinks.metaDataHtml(opt_data, output);
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.bookmarkletGuideOnWizard = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var bookmarkletLinkParam__soy163 = new soy.StringBuilder();
  Confluence.Blueprints.SharelinksUrlMacro.bookmarkletLink(opt_data, bookmarkletLinkParam__soy163);
  bookmarkletLinkParam__soy163 = bookmarkletLinkParam__soy163.toString();
  output.append('<p>', bookmarkletLinkParam__soy163, '</p><p>', soy.$$escapeHtml("It will appear like this in your browser."), '</p><div class="bookmarklet-guide-picture"></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.bookmarkletGuide = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var bookmarkletMacroParam__soy173 = new soy.StringBuilder('<ac:macro ac:name="sharelinks-urlmacro"/>');
  bookmarkletMacroParam__soy173 = bookmarkletMacroParam__soy173.toString();
  output.append('<ac:macro ac:name="info"><ac:parameter ac:name="icon">false</ac:parameter><ac:rich-text-body><p><ac:emoticon ac:name="information" />&nbsp;', AJS.format("Tip: share a link from anywhere by dragging this button \u2192 {0} to your browser bookmarks toolbar. Once added to your toolbar, click it to share links with your team.",bookmarkletMacroParam__soy173), '</p></ac:rich-text-body></ac:macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.noImagePreview = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p class="image-unavailable"><span class="no-image-picture"></span>', soy.$$escapeHtml("No image available"), '</p>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.previewUnavailable = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p class="link-unavailable"><span class="preview-unavailable-picture"></span>', soy.$$escapeHtml("Link preview unavailable"), '</p>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-resources', location = 'com/atlassian/confluence/plugins/sharelinks/js/sharelinks-creation-wizard.js' */
(function(i){var d=false;function g(s,r){var q=false;if(k(s,!q)){q=true}if(f(s,r,!q)){q=true}return !q}function k(u,q){var t=u.find("#sharelinks-url");var s=i.trim(t.val());var r="";if(!s){r="URL is required"}else{if(d){r="URL syntax is invalid"}}return j(t,r,q)}function f(w,u,s){var r=w.find("#sharelinks-title");var v=i.trim(r.val());var t="";if(!v){t="Title is required"}else{if(!Confluence.Blueprint.canCreatePage(u,v)){t="A page with this name already exists";var q=Confluence.Blueprints.Sharelinks.Analytics.errorTypes.value.duplicatedPage;Confluence.Blueprints.Sharelinks.Analytics.triggerErrorTypes(q)}}return j(r,t,s)}function j(s,r,q){s.siblings(".error").html(r);if(r&&q){s.focus()}return r}var p;function a(u,v){var s=g(v.$container,v.wizardData.spaceKey);if(s){var r=Confluence.Blueprints.Sharelinks.Analytics.submitData.value.noComment;var x=i("#sharelinks-comment").val();x=i.trim(x);if(x){r=Confluence.Blueprints.Sharelinks.Analytics.submitData.value.comment}Confluence.Blueprints.Sharelinks.Analytics.triggerSubmitData(r);var q=Confluence.Blueprints.Sharelinks.Analytics.submitData.value.noEditTitle;if(p!==i("#sharelinks-title").val()){q=Confluence.Blueprints.Sharelinks.Analytics.submitData.value.editTitle}Confluence.Blueprints.Sharelinks.Analytics.triggerSubmitData(q);var w=Confluence.Blueprints.Sharelinks.Analytics.submitData.value.noShare;var t=i("#sharelinks-sharewith").val();t=i.trim(t);if(t){w=Confluence.Blueprints.Sharelinks.Analytics.submitData.value.share}Confluence.Blueprints.Sharelinks.Analytics.triggerSubmitData(w)}v.wizardData.parentPageId=-1;return s}var e;function h(s,t){e="";i("#sharelinks-url").bind("paste",function(){setTimeout(function(){l(t.$container,t.wizardData.spaceKey,true)},0)});i("#sharelinks-url").change(function(){l(t.$container,t.wizardData.spaceKey,false)});i("#sharelinks-title").change(function(){if(i("#sharelinks-title").siblings(".error").html!=""){f(t.$container,t.wizardData.spaceKey,false)}});var u=i(".dialog-wizard-page-description,.create-dialog-page-description");var q=AJS.Meta.get("base-url")+"/plugins/sharelinksbookmarklet/bookmarklet.action";var r=Confluence.Blueprints.Sharelinks.bookmarkletGuideOnWizard({bookmarkletActionURL:q});i(r).appendTo(u);Confluence.Blueprints.Sharelinks.autocompleteMultiLabel.build(i("#sharelinks-label"));i(".create-dialog-sharelinks-page1 .sharelinks-urlmacro-button").click(function(){alert("Drag this link to your toolbar");return false})}function c(q,r){i.ajax({type:"get",dataType:"json",url:Confluence.getContextPath()+"/rest/sharelinks/1.0/can-create-comment",data:{spaceKey:r.wizardData.spaceKey},success:function(t){if(!t){var s=i("#sharelinks-comment");s.attr("disabled","disabled");s.attr("placeholder","Sorry, you don\'t have permission to add comments in this space")}}})}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-blueprint-item",function(q){q.on("post-render.sharelinks-page1",h);q.on("post-render.sharelinks-page1",c);q.on("submit.sharelinks-page1",a)});function b(u){var y=255;var q=180;var t=o(u.title,y);var s=i("#sharelinks-title");s.val(t);s.removeClass("placeholded");var x=i.extend({},u);x.title=o(x.title,q);var w=Confluence.Blueprints.Sharelinks.Analytics.linkTypes.value.noContent;var r;if(u.videoURL){r=Confluence.Blueprints.Sharelinks.previewVideoLink({linkMetaData:x});w=Confluence.Blueprints.Sharelinks.Analytics.linkTypes.value.video}else{r=Confluence.Blueprints.Sharelinks.previewLink({linkMetaData:x});if(u.imageURL){w=Confluence.Blueprints.Sharelinks.Analytics.linkTypes.value.image}else{if(u.title){w=Confluence.Blueprints.Sharelinks.Analytics.linkTypes.value.noVideoImage}}}var v=i(".create-dialog-page-description,.dialog-wizard-page-description");v.empty();i(r).appendTo(v);Confluence.Blueprints.Sharelinks.Analytics.triggerLinkTypes(w)}function o(r,q){if(null!=r&&q<r.length){r=r.substring(0,q-1)+"\u2026"}return r}function m(r,q){r.attr("disabled","disabled");q.attr("disabled","disabled")}function n(r,q){r.removeAttr("disabled");q.removeAttr("disabled")}function l(z,w,s){var r=i("#sharelinks-url"),v=r.val(),q=i("#sharelinks-title");v=i.trim(v);if(v){var x=Confluence.getContextPath()+"/rest/sharelinks/1.0/link";if(v!==e){e=v;var t=i(".create-dialog-page-description,.dialog-wizard-page-description").empty();var y=Confluence.Blueprints.Sharelinks.previewLoading();var A=i(y).appendTo(t);m(r,q);i.ajax({type:"get",url:x,data:{url:v},success:function(B,C){A.remove();b(B);d=false;g(z,w);n(r,q)},error:function(E,B,D){n(r,q);if(400==E.status){A.remove();d=true;k(z,false)}else{A.remove();var C=Confluence.Blueprints.Sharelinks.previewError();i(C).appendTo(t);d=false;g(z,w)}}});var u;if(s){u=Confluence.Blueprints.Sharelinks.Analytics.inputTypes.value.pasteUrl}else{u=Confluence.Blueprints.Sharelinks.Analytics.inputTypes.value.typeUrl}Confluence.Blueprints.Sharelinks.Analytics.triggerInputTypes(u)}}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-resources', location = 'com/atlassian/confluence/plugins/sharelinks/js/sharelinks-analytics.js' */
Confluence.Blueprints.Sharelinks.Analytics={inputTypes:{name:"blueprints.sharelinks.input",value:{pasteUrl:{type:"paste-url"},typeUrl:{type:"type-url"}}},linkTypes:{name:"blueprints.sharelinks.link",value:{video:{link:"video"},image:{link:"image"},noVideoImage:{link:"no-video-image"},noContent:{link:"no-content"}}},errorTypes:{name:"blueprints.sharelinks.error",value:{duplicatedPage:{error:"page-duplicated"}}},submitData:{name:"blueprints.sharelinks.submit",value:{editTitle:{submit:"edit-title"},noEditTitle:{submit:"no-edit-title"},comment:{submit:"comment"},noComment:{submit:"no-comment"},share:{submit:"share"},noShare:{submit:"no-share"}}},triggerInputTypes:function(a){AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:Confluence.Blueprints.Sharelinks.Analytics.inputTypes.name,properties:a})},triggerLinkTypes:function(a){AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:Confluence.Blueprints.Sharelinks.Analytics.linkTypes.name,properties:a})},triggerErrorTypes:function(a){AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:Confluence.Blueprints.Sharelinks.Analytics.errorTypes.name,properties:a})},triggerSubmitData:function(a){AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:Confluence.Blueprints.Sharelinks.Analytics.submitData.name,properties:a})}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-resources', location = 'com/atlassian/confluence/plugins/sharelinks/soy/sharelinks-label.soy' */
// This file was automatically generated from sharelinks-label.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Sharelinks == 'undefined') { Confluence.Blueprints.Sharelinks = {}; }


Confluence.Blueprints.Sharelinks.labelResult = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.label.isNew) ? soy.$$escapeHtml(AJS.format("\x22{0}\x22 - add a new topic",opt_data.label.labelName)) : soy.$$escapeHtml(opt_data.label.labelName));
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-resources', location = 'com/atlassian/confluence/plugins/sharelinks/js/sharelinks-label.js' */
Confluence.Blueprints.Sharelinks.autocompleteMultiLabel=(function(a){function b(c){c.auiSelect2(Confluence.UI.Components.LabelPicker.build({formatInputTooShort:function(){return "Start typing to search for a topic"},formatResult:function(d){return Confluence.Blueprints.Sharelinks.labelResult({label:{labelName:d.text,isNew:d.isNew}})}}))}return{build:b}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:application-header-administration-cog-resource', location = 'header/cog.js' */
var NavLinks=(function(a){a.ApplicationHeader=function(b){b.Cog=(function(){var c=function(){var d=AJS.$("#system-admin-menu-content");if(d.length>0){return d}var e=AJS.$("#admin-menu-link-content");if(e.length>0){return e}return AJS.$("#bamboo\\.global\\.header-admin\\.menu")};return{getDropdown:c}}());return b}(a.ApplicationHeader||{});return a}(NavLinks||{}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.soy' */
// This file was automatically generated from projectshortcuts.soy.
// Please don't edit this file by hand.

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.projectshortcuts == 'undefined') { navlinks.templates.projectshortcuts = {}; }


navlinks.templates.projectshortcuts.dialogContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.localShortcuts && opt_data.localShortcuts.length > 0) {
    navlinks.templates.projectshortcuts.dialogContentShortcuts({shortcuts: opt_data.localShortcuts, listClass: 'projectshortcut-links'}, output);
  }
  if (opt_data.remoteShortcuts != null) {
    if (opt_data.remoteShortcuts.length > 0) {
      output.append('<h2 class="projectshortcuts-heading">Related Links</h2>');
      navlinks.templates.projectshortcuts.dialogContentShortcuts(soy.$$augmentData(opt_data.remoteShortcuts, {shortcuts: opt_data.remoteShortcuts, listClass: 'projectshortcut-links'}), output);
    }
  } else {
    navlinks.templates.projectshortcuts.dialogLoading(null, output);
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.headingWrapper = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="project-dialog-header-wrapper"><div class="project-header"><img class="project-img" src="', soy.$$escapeHtml(opt_data.logoUrl), '"><h2 class="dialog-title">', soy.$$escapeHtml(opt_data.title), '</h2></div><div class="project-content-wrapper">', opt_data.contentHtml, '</div></div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.dialogContentShortcuts = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul', (opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '', '>');
  var shortcutList35 = opt_data.shortcuts;
  var shortcutListLen35 = shortcutList35.length;
  for (var shortcutIndex35 = 0; shortcutIndex35 < shortcutListLen35; shortcutIndex35++) {
    var shortcutData35 = shortcutList35[shortcutIndex35];
    output.append('<li', (shortcutIndex35 == shortcutListLen35 - 1) ? ' class="last"' : '', '>');
    navlinks.templates.projectshortcuts.dialogContentShortcut(shortcutData35, output);
    output.append('</li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.dialogContentShortcut = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(opt_data.link), '"', (opt_data.tooltip) ? ' title="' + soy.$$escapeHtml(opt_data.tooltip) + '"' : '', '>', soy.$$escapeHtml(opt_data.label), '</a>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.dialogLoading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="projectshortcuts-loading">', (opt_data != null && opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '', '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.js' */
(function(e,h){var j,l={},o="key",b="name",k="entity-type";function n(r,p,q){try{h.trackEvent("projectshortcuts",r,p,q)}catch(s){AJS.log("failed to track analytics event, category: projectshortcuts, action: "+r+", label: "+p+", value: "+q)}}function f(u){var p=e(this),q=p.data(o),s=p.data(b),r=p.data(k);if(typeof q==="undefined"){return}u.preventDefault();j=new AJS.Dialog({width:600,keypressListener:function(w){if(w.which==jQuery.ui.keyCode.ESCAPE){j.remove()}},id:"project-shortcuts-dialog"}).addCancel("Close",function(){j.remove();n("hide",h.getCurrentApplication())}).addPanel("",navlinks.templates.projectshortcuts.headingWrapper({title:s,logoUrl:i(),contentHtml:navlinks.templates.projectshortcuts.dialogLoading({text:"Retrieving links…"})})).show();c(j);if(!l[q]){l[q]={entity:{title:s},localShortcuts:null,remoteShortcuts:null};d(AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+q,{entityType:r}).done(v);d(AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+q,{entityType:r}).done(t).fail(function(){var w=j.getCurrentPanel().body.find(".project-content-wrapper");w.find(".projectshortcuts-loading").remove();AJS.messages.error(w,{body:"Could not retrieve remote project shortcuts",closeable:false});c(j)})}else{m(l[q])}function v(w){l[q].localShortcuts=w.shortcuts;m(l[q])}function t(w){l[q].remoteShortcuts=w.shortcuts;m(l[q])}n("show",h.getCurrentApplication())}function i(){return e(".project-shortcut-dialog-trigger img").attr("src")}function g(p){p.getCurrentPanel().body.find("a").unbind(".analytics").bind("click.analytics",function(){var q=this.attributes.href;n("navLinkFollowed",typeof q==="object"?q.value:q)})}function m(p){if(p.localShortcuts){j.getCurrentPanel().html(navlinks.templates.projectshortcuts.headingWrapper({title:p.entity.title,logoUrl:i(),contentHtml:navlinks.templates.projectshortcuts.dialogContent(p)}));g(j);c(j)}}function a(r){var q=210;if(!r||r.length<=q){return r}var p=q;while(p>0&&r.charAt(p)!=" "){p--}if(p==0){p=q}r=r.substring(0,p);if(r.length>=p){r=r+"..."}return r}function c(p){var s=p.popup.element,r=s.find(".dialog-panel-body"),q=s.find(".dialog-components");r.height("auto");s.height(q.outerHeight()-1);e(".aui-shadow").remove()}function d(p,q){return e.ajax({url:p,cache:false,data:q,dataType:"json"})}e(document).on("click",".project-shortcut-dialog-trigger",f)}(jQuery,window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:atlassian-ui-popup-display-controller', location = 'popups/DisplayController.js' */
AJS.Popups=AJS.Popups||{};AJS.Popups.DisplayController=function(){var c=[];var a=false;var b=false;AJS.toInit(function(){setTimeout(function(){AJS.Popups.DisplayController.render()},0)});return{request:function(d){c.push(d);if(a&&b===false){this.render()}},render:function(){c.sort(function(e,d){return e.weight-d.weight});a=true;if(c.length!==0){b=true;c[0].show()}}}}();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'js/space-menu.js' */
AJS.toInit(function(a){var d=a(Confluence.Templates.BrowseSpaces.spacesLink());a("#space-directory-link").replaceWith(a(d));var b=a("#space-menu-link"),c=function(e){a("#space-menu-link-content").html(e.template);AJS.trigger("spacemenu-loaded");a("#create-space-header").click(function(){AJS.trigger("analyticsEvent",{name:"create-space-from-header"});Confluence.SpaceBlueprint.Dialog.launch();return false})};b.click(function(){if(!a("#space-menu-link-content .aui-dropdown2-section").length){a.ajax({url:Confluence.getContextPath()+"/rest/ia/1.0/spacesmenu",type:"GET",dataType:"json",cache:false,success:c})}return false})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'soy/space-menu.soy' */
// This file was automatically generated from space-menu.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.BrowseSpaces == 'undefined') { Confluence.Templates.BrowseSpaces = {}; }


Confluence.Templates.BrowseSpaces.spacesLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a id="space-menu-link" class="aui-nav-link aui-dropdown2-trigger" href="#" aria-haspopup="true" aria-owns="space-menu-link-content" title="', soy.$$escapeHtml("Spaces"), '"><span class="browse">', soy.$$escapeHtml("Spaces"), '</span><span class="aui-icon-dropdown"></span></a><div id="space-menu-link-content" class="aui-dropdown2 aui-style-default aui-dropdown2-in-header" aria-hidden="false"></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:space-ia-analytics', location = 'js/space-ia-analytics.js' */
(function(d){var c=RegExp("(.+[?&])src=.+?(&.+|$)");var e;if(AJS.Confluence.Analytics&&AJS.Confluence.Analytics.setAnalyticsSource){e=AJS.Confluence.Analytics.setAnalyticsSource}else{e=function(h,i){if(b()){_.each(h,function(j){d(j).attr("href",g(d(j).attr("href"),i))})}}}function g(h,j){if(h&&(h.charAt(0)!="#")){var i=c.exec(h);if(!i){if(h.indexOf("?")>-1){h=h+"&src="+j}else{h=h+"?src="+j}}else{h=i[1]+"src="+j+i[2]}}return h}function b(){var h=d(document.getElementsByTagName("script"));var i=false;h.each(function(k,j){if(d(j).attr("src")&&d(j).attr("src").indexOf("google-analytics.com/ga.js")!=-1){i=true;return false}});return i}function f(){var i=d(".acs-side-bar a:not(.external_link a, #acs-configure-link)");e(i,"sidebar");var h=d(".quick-links-section li:not(.external_link) a");e(h,"spaceshortcut");var j=d(".ia-secondary-container a:not(.more-children-link)");if(d(".ia-secondary-container").data("tree-type")=="pages"){e(j,"contextnavchildmode")}else{if(d(".ia-secondary-container").data("tree-type")=="page-tree"){e(j,"contextnavpagetreemode")}else{e(j,"contextnav")}}}function a(h){return function(){AJS.trigger("analyticsEvent",{name:"space-ia-nav",data:{linkType:h}})}}AJS.bind("sidebar.exit-configure-mode",f);AJS.bind("sidebar.flyout-triggered",function(i,h){a("flyout-triggered."+h.flyout)()});AJS.bind("spacemenu-loaded",function(){e(d("#space-menu-link-content a"),"spacemenu")});AJS.bind("sidebar.spacetools-loaded",function(){e(d("#inline-dialog-space-tools a:not(.configure-sidebar)"),"spacetools")});AJS.bind("pagetree-children-loaded",f);AJS.toInit(function(h){h(".ia-secondary-container .more-children-link").click(a("context-nav.more-children"));f()})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:clickable-resources', location = 'js/clickable.js' */
jQuery(function(a){a(".clickable").live("click",function(c){if(a(c.target).closest("a[href]").length===0&&a(c.target).closest(".clickable").length===1){var b=a(this).attr("href")||a("a[href]:first",this).attr("href");if(b){location.href=b}}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/request-access.js' */
AJS.toInit(function(e){var b=AJS.Meta.get("page-id"),c=e("#page-restricted-container"),a=AJS.Meta.get("remote-user"),d=e("#page-restricted-container button");if(c.length){e("#breadcrumbs").hide();e("#title-text.with-breadcrumbs").hide();if(d.length){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page.view",data:{pageId:b,requestAccessUser:a}})}}d.click(function(){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page",data:{pageId:b,requestAccessUser:a}});d.attr("aria-disabled","true");var f,g=e(Confluence.Request.Access.loading({}));d.replaceWith(g);e.ajax({url:Confluence.getContextPath()+"/rest/request-access/latest/page/restriction/"+b,success:function(h){f=e(Confluence.Request.Access.result({success:true,recipient:h}));c.removeClass("page-restricted");c.addClass("access-requested")},error:function(h,i){f=e(Confluence.Request.Access.result({success:false}))},complete:function(){g.replaceWith(f);Confluence.Binder.userHover()}})})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/grant-access.js' */
AJS.toInit(function(d){var a=AJS.Meta.get("page-id"),f=AJS.Meta.get("remote-user"),h=c("username"),e=c("userFullName");var g=d("#system-content-items");var j=d("#content-metadata-page-restrictions").is(":visible");if(!g.length||!j||!c("grantAccess")){return}var b=d(Confluence.Request.Access.loading());var i=AJS.InlineDialog(g,"grantAccessDialog",function(l,k,m){l.css({padding:"20px"}).html(Confluence.Grant.Access.dialog({requestAccessUsername:h,requestAccessUserFullName:e}));l.on("click",".aui-button.grant-access",function(p){p.stopPropagation();var o=l.find(".actions-result");o.replaceWith(b);AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.grant.access.to.page",data:{pageId:a,grantAccessUser:f,requestAccessUser:h}});var n="",q=true;d.ajax({url:Confluence.getContextPath()+"/rest/request-access/latest/page/restriction/"+a,type:"POST",contentType:"application/json; charset=utf-8",data:h,success:function(s,t,r){if(r.status==202){n="Access was already granted to the user."}else{n="Access was granted, a notification to the user will be sent."}},error:function(r){q=false;if(r.status==412){n="Access was granted, but there is not a mail server configured so the notification could not be sent."}else{if(r.status==502){n="Access was granted, but an unexpected error happened while sending the notification."}else{n="Sorry, there was an unexpected error while granting access."}}},complete:function(r){b.replaceWith(d(Confluence.Grant.Access.result({success:q,message:n})));setTimeout(function(){i.hide()},4000)}})});l.on("click",".aui-button.deny-access",function(n){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.deny.access.to.page",data:{pageId:a,grantAccessUser:f,requestAccessUser:h}});i.hide()});m();return false},{offsetY:2,offsetX:0,width:350,hideDelay:null,noBind:true,hideCallback:function(){setTimeout(i.hide(),5000)}});i.show();function c(m){var k=window.location.search.substring(1),l,o,n=k.split("&");for(l=0;l<n.length;l++){o=n[l].split("=");if(o[0]==m){return unescape(o[1])}}return null}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/request-access.soy' */
// This file was automatically generated from request-access.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Request == 'undefined') { Confluence.Request = {}; }
if (typeof Confluence.Request.Access == 'undefined') { Confluence.Request.Access = {}; }


Confluence.Request.Access.result = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="request-access">');
  if (opt_data.success) {
    var usernameLink__soy6 = new soy.StringBuilder();
    Confluence.Request.Access.usernameLink({user: opt_data.recipient}, usernameLink__soy6);
    usernameLink__soy6 = usernameLink__soy6.toString();
    output.append('<span class="aui-icon aui-icon-small aui-iconfont-approve" data-unicode="UTF+E005" original-title=""></span><p class="title">', AJS.format("Your request has been sent to {0}. If approved you will receive an email shortly.",usernameLink__soy6), '</p>');
  } else {
    output.append('<span class="aui-icon aui-icon-small aui-iconfont-error" data-unicode="UTF+E011" original-title=""></span><p class="title">', soy.$$escapeHtml("Your request for access has not been sent. Contact your space admin."), '</p>');
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Request.Access.usernameLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(""), '/display/~', soy.$$escapeUri(opt_data.user.name), '" class="url fn confluence-userlink" title data-username="', soy.$$escapeHtml(opt_data.user.name), '">', soy.$$escapeHtml(opt_data.user.fullName), '</a>');
  return opt_sb ? '' : output.toString();
};


Confluence.Request.Access.loading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class=\'aui-icon aui-icon-wait\'>', soy.$$escapeHtml("Loading, please wait"), '</span>"');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/grant-access.soy' */
// This file was automatically generated from grant-access.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Grant == 'undefined') { Confluence.Grant = {}; }
if (typeof Confluence.Grant.Access == 'undefined') { Confluence.Grant.Access = {}; }


Confluence.Grant.Access.dialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="grant-access-dialog">');
  var usernameLink__soy4 = new soy.StringBuilder();
  Confluence.Grant.Access.usernameLink({username: opt_data.requestAccessUsername, userFullName: opt_data.requestAccessUserFullName}, usernameLink__soy4);
  usernameLink__soy4 = usernameLink__soy4.toString();
  output.append('<h2 class="grant-access-title">', AJS.format("{0} requested access to view the page",usernameLink__soy4), '</h2><p class="grant-access-message">', soy.$$escapeHtml("Grant access to the page, or deny it explicitly."), '</p><div class="actions-result"><button class="aui-button grant-access">', soy.$$escapeHtml("Grant access"), '</button><button class="aui-button aui-button-link deny-access">', soy.$$escapeHtml("Deny"), '</button><div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Grant.Access.result = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="aui-icon aui-icon-small aui-iconfont-', (opt_data.success) ? 'approve' : 'error', '" data-unicode="UTF+E011" original-title=""></span><p class="title">', soy.$$escapeHtml(opt_data.message), '</p>');
  return opt_sb ? '' : output.toString();
};


Confluence.Grant.Access.usernameLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(""), '/display/~', soy.$$escapeHtml(opt_data.username), '" class="url fn" title data-username="', soy.$$escapeHtml(opt_data.username), '">', soy.$$escapeHtml(opt_data.userFullName), '</a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


