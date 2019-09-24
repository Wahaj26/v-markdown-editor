module.exports=function(e){var t={};function i(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=11)}([function(e,t){e.exports=require("jquery")},function(e,t){e.exports=require("markdownparser")},function(e,t){e.exports=require("markdown-it")},function(e,t){e.exports=require("codemirror")},function(e,t){e.exports=require("codemirror/lib/codemirror.css")},function(e,t,i){},function(e,t){e.exports=require("codemirror/addon/display/fullscreen.js")},function(e,t){e.exports=require("codemirror/mode/markdown/markdown.js")},function(e,t){e.exports=require("codemirror/mode/gfm/gfm.js")},function(e,t){e.exports=require("codemirror/addon/display/placeholder.js")},function(e,t){e.exports=require("codemirror/addon/selection/active-line.js")},function(e,t,i){"use strict";i.r(t);i(4),i(5);var r=i(0),a=i.n(r),o=i(1),l=i.n(o),s=i(2),n=i.n(s),d=i(3),c=i.n(d);i(6),i(7),i(8),i(9),i(10);var u=function(e,t,i,r,a,o,l,s){var n,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=i,d._compiled=!0),r&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),l?(n=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},d._ssrRegister=n):a&&(n=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),n)if(d.functional){d._injectStyles=n;var c=d.render;d.render=function(e,t){return n.call(t),c(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,n):[n]}return{exports:e,options:d}}({props:{css:{type:String},width:{type:String,default:"100%"},height:{type:String,default:"280px"},toolbar:{type:String,default:"clipboard redo undo | bold italic strikethrough heading | image link | numlist bullist code quote | preview fullscreen"},name:{type:String,default:"html"},value:{type:String,default:"",required:!1},buttonClass:{type:String,default:"btn btn-outline-secondary"},options:{type:Object,default:function(){return{}}}},data:()=>({id:"v-md-editor-"+(new Date).getTime(),editor:null,preview:!1,buttons:{bold:{title:"Bold",className:"far fa-bold",cmd:"bold",hotkey:"Ctrl-B"},italic:{title:"Italic",className:"far fa-italic",cmd:"italic",hotkey:"Ctrl-I"},strikethrough:{cmd:"strikethrough",className:"far fa-strikethrough",title:"Strikethrough"},heading:{title:"Heading",className:"far fa-heading",cmd:"heading",hotkey:"Ctrl-H"},code:{title:"Code",className:"far fa-code",cmd:"code",hotkey:"Ctrl-X"},quote:{title:"Quote",className:"far fa-quote-left",cmd:"quote",hotkey:"Ctrl-Q"},link:{title:"Link",className:"far fa-link",cmd:"link",hotkey:"Ctrl-K"},image:{title:"Image",className:"far fa-image",cmd:"image",hotkey:"Ctrl-P"},fullscreen:{cmd:"fullscreen",className:"far fa-arrows-alt no-disable no-mobile",title:"Toggle Fullscreen",hotkey:"F11",ready:!0},preview:{cmd:"preview",className:"far fa-eye no-disable",title:"Toggle Preview",hotkey:"Ctrl-P",ready:!0},clipboard:{cmd:"clipboard",className:"far fa-clipboard",title:"Copy & Markdown Format",hotkey:"Ctrl-V"},undo:{cmd:"undo",className:"far fa-undo",title:"Undo",hotkey:"Ctrl-Z"},redo:{cmd:"redo",className:"far fa-repeat",title:"Redo",hotkey:"Ctrl-Y"},bullist:{cmd:"bullist",className:"far fa-list-ul",title:"Generic List"},numlist:{cmd:"numlist",className:"far fa-list-ol",title:"Numbered List"}},defaults:{mode:"gfm",theme:"elegent",lineNumbers:!0,styleActiveLine:!1,styleSelectedText:!1,lineWrapping:!0,indentWithTabs:!0,autoRefresh:!1,tabSize:2,indentUnit:2},shortcuts:{}}),watch:{value(e){e!=this.editor.getValue()&&this.editor.setValue(e)}},computed:{styles(){return{width:isNaN(this.width)?this.width:this.width+"%",height:isNaN(this.height)?this.height:this.height+"%"}}},methods:{isEmpty:function(e){return null==e||/^[\s\xa0]*$/.test(e)},isUrl:function(e){return!this.isEmpty(e)&&e.match(/((http(s)?):\/\/[\w\.\/\-=?#]+)/gi)},format(){for(var e=arguments[0],t=1;t<=arguments.length;t++)e=e.replace(/%[a-z]/,arguments[t]);return e},uid(e){return this.format("%s-%s",this.id,e)},obj(e){return a()("#"+this.uid(e))},_toggleBlock(e,t,i){i=this.isEmpty(i)?t:i;var r,a=this.editor,o=a.getCursor("start"),l=a.getCursor("end");this.state()[e]?(t=(r=a.getLine(o.line)).slice(0,o.ch),i=r.slice(o.ch),"bold"==e?(t=t.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/,""),i=i.replace(/(\*\*|__)/,"")):"italic"==e?(t=t.replace(/(\*|_)(?![\s\S]*(\*|_))/,""),i=i.replace(/(\*|_)/,"")):"strikethrough"==e&&(t=t.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/,""),i=i.replace(/(\*\*|~~)/,"")),a.replaceRange(t+i,{line:o.line,ch:0},{line:o.line,ch:99999999999999}),"bold"==e||"strikethrough"==e?(o.ch-=2,o!==l&&(l.ch-=2)):"italic"==e&&(o.ch-=1,o!==l&&(l.ch-=1))):(r=a.getSelection(),"bold"==e?r=(r=r.split("**").join("")).split("__").join(""):"italic"==e?r=(r=r.split("*").join("")).split("_").join(""):"strikethrough"==e&&(r=r.split("~~").join("")),a.replaceSelection(t+r+i),o.ch+=t.length,l.ch=o.ch+r.length),a.setSelection(o,l)},_toggleLine(e){for(var t=this.editor,i=this.state(),r=t.getCursor("start"),a=t.getCursor("end"),o={quote:/^(\s*)\>\s+/,bullist:/^(\s*)(\*|\-|\+)\s+/,numlist:/^(\s*)\d+\.\s+/},l={quote:"> ",bullist:"* ",numlist:"1. "},s=r.line;s<=a.line;s++)!function(r){var a=t.getLine(r);a=i[e]?a.replace(o[e],"$1"):l[e]+a,t.replaceRange(a,{line:r,ch:0},{line:r,ch:99999999999999})}(s)},state(e){e=e||this.editor.getCursor("start");var t=this.editor.getTokenAt(e);if(!t.type)return{};for(var i,r,a=t.type.split(" "),o={},l=0;l<a.length;l++)"strong"===(i=a[l])?o.bold=!0:"variable-2"===i?(r=this.editor.getLine(e.line),/^\s*\d+\.\s/.test(r)?o.numlist=!0:o.bullist=!0):"atom"===i?o.quote=!0:"em"===i?o.italic=!0:"quote"===i?o.quote=!0:"strikethrough"===i?o.strikethrough=!0:"comment"===i?o.code=!0:"link"===i?o.link=!0:"tag"===i?o.image=!0:i.match(/^header(\-[1-6])?$/)&&(o[i.replace("header","heading")]=!0);return o},_replaceSelection(e,t,i){var r,a=this.editor,o=t[0],l=t[1],s=a.getCursor("start"),n=a.getCursor("end");i&&Object.keys(i).forEach(e=>{o=o.replace("#"+e+"#",i[e]),l=l.replace("#"+e+"#",i[e])}),e?(r=a.getLine(s.line),o=r.slice(0,s.ch),l=r.slice(s.ch),a.replaceRange(o+l,{line:s.line,ch:0})):(a.replaceSelection(o+l),s.ch+=o.length,s!==n&&(n.ch+=o.length)),a.setSelection(s,n),a.focus()},command(e){var t=this.editor,i=t.getSelection(),r=this.state();switch(e){case"undo":t.undo();break;case"redo":t.redo();break;case"bold":this._toggleBlock("bold","**");break;case"italic":this._toggleBlock("italic","*");break;case"strikethrough":this._toggleBlock("strikethrough","~~");break;case"code":this._toggleBlock("code","```");break;case"heading":t.replaceSelection("\n### "+i);break;case"clipboard":this.obj("modal-clipboard").modal("show");break;case"image":var a=prompt("Please enter image url","https://");this.isUrl(a)&&this._replaceSelection(r.image,["![#title#](",'#url# "#title#")'],{title:"This is image title",url:a});break;case"link":a=prompt("Please enter link","https://");if(this.isUrl(a)){var o=this.isEmpty(i)?a:i;this._replaceSelection(r.link,["[#title#]",'(#url# "#title#")'],{title:o,url:a})}break;case"quote":case"quote":this._toggleLine("quote");break;case"numlist":this._toggleLine("numlist");break;case"bullist":this._toggleLine("bullist");break;case"preview":var l=new n.a({html:!0,linkify:!0,typographer:!0,breaks:!0,quotes:"“”‘’",langPrefix:"language-",highlight:function(e,t){return'<pre class="hljs" data-lang="'+t+'"><code>'+l.utils.escapeHtml(e)+"</code></pre>"}}),s=l.render(t.getValue());this.obj("html-preview").html(s).toggle(),this.obj("preview").toggleClass("active"),this.preview^=!0,this.obj("toolbar").find('.btn:not(".ready")').prop("disabled",this.preview);break;case"fullscreen":this.obj("container").toggleClass("v-md-fullscreen"),this.obj("fullscreen").toggleClass("active"),t.setOption("fullScreen",!t.getOption("fullScreen"))}t.focus()},toMarkdown(){var e=this.obj("clipboard-text").val(),t=l.a.parse(e);this.editor.replaceSelection(t),this.editor.focus(),this.hideModal("modal-clipboard")},hideModal(e){this.obj(e).modal("hide")},build(){if(this.isEmpty(this.toolbar))console.error("You must set toolbar!");else if(!this.__rendered){for(var e=this,t=e.toolbar.toLowerCase().split(/(\s)/).filter((function(t){return!e.isEmpty(t)})),i=a()('<div class="btn-group mr-3" role="group"></div>'),r=e.obj("toolbar"),o=0;o<t.length;o++){var l=t[o],s=e.buttons[l];s&&(l=a()(e.format('<button type="button" id="%s-%s" data-cmd="%s" title="%s" class="%s %s"><i class="%s" aria-hidden="true"></i></button>',e.id,l,s.cmd,s.title,e.buttonClass,s.ready?"ready":"",s.className)).on("click",(function(){e.command(a()(this).attr("data-cmd"))})),i.append(l)),"|"!==l&&o!=t.length-1||(r.append(i),i=i.clone().empty())}var n=Object.assign({},{extraKeys:e.shortcuts,initialValue:e.value},e.defaults,e.options),d=document.getElementById(e.id+"-input");e.editor=c.a.fromTextArea(d,n),e.editor.on("change",(function(t){e.$emit("input",t.getValue())})),e.__rendered=!0}}},mounted(){this.build()},destroyed(){this.editor=null}},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:["v-md-container",e.css],attrs:{id:e.uid("container")}},[i("div",{staticClass:"v-md-toolbar",attrs:{id:e.uid("toolbar")}}),e._v(" "),i("div",{staticClass:"v-md-wrapper"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],style:e.styles,attrs:{id:e.uid("input"),name:e.name},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),e._v(" "),i("div",{staticClass:"v-md-preview",attrs:{id:e.uid("html-preview")}})]),e._v(" "),e._t("clipboard",[i("div",{staticClass:"modal fade",attrs:{id:e.uid("modal-clipboard"),"data-backdrop":"false","aria-labelledby":"v-md-editor-modal-clipboard-label","aria-hidden":"true",role:"dialog",tabindex:"-1"}},[i("div",{staticClass:"modal-dialog modal-center"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[i("h4",{staticClass:"modal-title",attrs:{id:"v-md-editor-modal-clipboard-label"}},[e._v("Html to Markdown")]),e._v(" "),i("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return e.hideModal("modal-clipboard")}}},[i("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),e._v(" "),i("div",{staticClass:"modal-body"},[i("div",{staticClass:"form-group"},[i("textarea",{staticClass:"form-control clipboard-text",attrs:{id:e.uid("clipboard-text")}})])]),e._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(t){return e.hideModal("modal-clipboard")}}},[e._v("Close")]),e._v(" "),i("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:e.toMarkdown}},[e._v("Convert")])])])])])])],2)}),[],!1,null,null,null).exports,h={install:function(e){e.__md_editor_installed||(e.__md_editor_installed=!0,e.component("markdown-editor",u))}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(h);t.default=h}]);