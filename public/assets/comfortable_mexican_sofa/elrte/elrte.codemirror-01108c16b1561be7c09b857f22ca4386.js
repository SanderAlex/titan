(function(e){elRTE.prototype.codeMirror=!0,elRTE.prototype.updateSourceOld=elRTE.prototype.updateSource,elRTE.prototype.updateSource=function(){if(this.codeMirror){var t="h[1-6]|div|p|blockquote|pre|form|label|select|input|button|ol|ul|dd|dt|li|table|thead|tbody|td|th|tr",n=this.filter.source(e(this.doc.body).html());n=n.replace(new RegExp("(</?("+t+")[^<]*?>)\\s*","gi"),"$1\n").replace(new RegExp("\\s*(</?("+t+")[^<]*?>)","gi"),"\n$1"),this.source.val(n),this.codeMirror=CodeMirror.fromTextArea(this.source[0],{mode:"htmlmixed",tabMode:"indent",lineWrapping:!0});for(var r=0,i=this.codeMirror.lineCount();r<i;++r)this.codeMirror.indentLine(r);this.source.css("display","block").css("position","absolute").css("z-index","-1")}else this.updateSourceOld()},elRTE.prototype.updateEditorOld=elRTE.prototype.updateEditor,elRTE.prototype.updateEditor=function(){this.codeMirror&&(this.codeMirror.toTextArea(),this.source.css("display","none")),this.updateEditorOld()}})(jQuery);