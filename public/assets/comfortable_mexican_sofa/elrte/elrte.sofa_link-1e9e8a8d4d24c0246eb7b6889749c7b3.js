(function(e){elRTE.prototype.ui.prototype.buttons.sofa_link=function(t,n){this.constructor.prototype.constructor.call(this,t,n);var r=this;r.link_url=null,e(document).on("submit","#cms_dialog form.link_url",function(){return r.link_url=e(this).find("input[name=link_url]").val(),r.set(),!1}),this.set=function(){r.rte.history.add(),r.rte.doc.execCommand("createLink",!1,r.link_url),r.rte.ui.update(),r.dialog.dialog("close")},this.command=function(){r.dialog=jQuery(jQuery("#cms_dialog").get(0)||jQuery('<div id="cms_dialog"></div>')),r.dialog.dialog({title:t.i18n("Link"),modal:!0,resizable:!1,width:800,closeOnEscape:!0,autoOpen:!1}),jQuery.ajax({url:"/"+e('meta[name="cms-admin-path"]').attr("content")+"/sites/"+e('meta[name="cms-site-id"]').attr("content")+"/dialog/link",success:function(e){r.dialog.html(e),r.dialog.dialog("open")}})},this.update=function(){var e=this.rte.selection.getNode();this.rte.dom.selfOrParentLink(e)?this.domElem.removeClass("disabled").addClass("active"):this.rte.dom.selectionHas(function(e){return e.nodeName=="A"&&e.href})?this.domElem.removeClass("disabled").addClass("active"):!this.rte.selection.collapsed()||e.nodeName=="IMG"?this.domElem.removeClass("disabled active"):this.domElem.addClass("disabled").removeClass("active")}},elRTE.prototype.options.buttons.sofa_link="Link"})(jQuery);