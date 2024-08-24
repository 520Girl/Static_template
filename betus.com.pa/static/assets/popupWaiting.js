var popupWaiting=popupWaiting||(function($){'use strict';var $dialog=$('<div class="modal fade" id="pleaseWaitDialog" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-hidden="true" role="dialog" style="padding-top:15%; overflow-y:visible;"> '+
'<div class="modal-dialog modal-m"> '+
'<div class="modal-content"> '+
'<div class="modal-header"> '+
'<h4 class="modal-title"></h4> '+
'</div> '+
'<div class="modal-body"> '+
'<div class="progress"> '+
'<div class="progress-bar progress-bar-striped progress-bar-animated active" role="progressbar" '+
'	aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%; height: 40px; margin-bottom:0;"> '+
'</div> '+
'</div> '+
'</div> '+
'</div> '+
'</div > '+
'</div > ');return{show:function(message,options){if($dialog){$dialog.remove();}
$('#pleaseWaitDialog').remove();if(typeof options==='undefined'){options={};}
if(typeof message==='undefined'||(typeof value==='string'&&(!value||value.trim()===''))){message='PLEASE WAIT...';}
var settings=$.extend({headerText:'',headerSize:4,headerClass:'',dialogSize:'m',progressType:'',contentElement:'p',contentClass:'content',nonce:null,onShow:null,onHide:null},options);$dialog.find('.modal-dialog').attr('class','modal-dialog').addClass('modal-'+settings.dialogSize);$dialog.find('.progress-bar').attr('class','progress-bar progress-bar-striped progress-bar-animated');if(settings.progressType){$dialog.find('.progress-bar').addClass('progress-bar-'+settings.progressType);$dialog.find('.progress-bar').addClass('bg-'+settings.progressType);}
var $headerTag,$contentTag;$headerTag=$('<h'+settings.headerSize+' />');$headerTag.css({'margin':0});if(settings.headerClass){$headerTag.addClass(settings.headerClass);}
$contentTag=$('<'+settings.contentElement+' />');if(settings.contentClass){$contentTag.addClass(settings.contentClass);}
if(settings.headerText===false){$contentTag.html(message);$dialog.find('.modal-body').prepend($contentTag);}
else if(settings.headerText){$headerTag.html(settings.headerText);$dialog.find('.modal-header').html($headerTag).show();$contentTag.html(message);$dialog.find('.modal-body').prepend($contentTag);}
else{$headerTag.html(message);$dialog.find('.modal-header').html($headerTag).show();}
if(isFunction(settings.onHide)){$dialog.off('hidden.bs.modal').on('hidden.bs.modal',function(e){settings.onHide.call($dialog);});}
if(isFunction(settings.onShow)){$dialog.off('shown.bs.modal').on('shown.bs.modal',function(){settings.onShow.call($dialog);});}
$dialog.modal();},showWithTimeout:function(timeout=2000,message,options){this.show(message,options);setTimeout(function(){this.hide();},timeout);},hide:function(){$dialog.modal('hide');}};})(jQuery);function showPleaseWait(message='PLEASE WAIT...'){if(document.querySelector("#pleaseWaitDialog")==null){var modalLoading='<div class="modal fade" id="pleaseWaitDialog" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" style="padding-top:15%; overflow-y:visible;">\
								<div class="modal-dialog modal-m">\
									<div class="modal-content">\
										<div class="modal-header">\
											<h3 class="modal-title">'+message+'</h3>\
										</div>\
										<div class="modal-body">\
											<div class="progress">\
											  <div class="progress-bar progress-bar-success progress-bar-striped progress-bar-animated active" role="progressbar"\
											  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%; height: 40px; margin-bottom:0;">\
											  </div>\
											</div>\
										</div>\
									</div>\
								</div>\
							</div>';$(document.body).append(modalLoading);}
$("#pleaseWaitDialog").modal("show");}
function hidePleaseWait(){$("#pleaseWaitDialog").modal("hide");}