;(function($){if(!Date.now)
Date.now=function(){return+new Date();};$.fn.jAlert=function(options){$('body').focus();$('body').blur();var themes=['default','green','dark_green','red','dark_red','black','brown','gray','dark_gray','blue','dark_blue','yellow'],sizes=['xsm','sm','md','lg','xlg','full','auto'],sizeAliases={'xsmall':'xsm','small':'sm','medium':'md','large':'lg','xlarge':'xlg'},backgroundColors=['white','black'],styles=[],classes=['animated'],backgroundClasses=[];if(this.length>1){this.each(function(){$.fn.jAlert(options);});return this;}
if(typeof $(this)[0]!='undefined')
{if($(this)[0]['jAlert']!='undefined')
{return $(this)[0]['jAlert'];}}
$.each($.fn.jAlert.defaults,function(key,val){var lowerKey=key.toLowerCase();if(typeof options[lowerKey]!=='undefined')
{options[key]=options[lowerKey];}});options=$.extend({},$.fn.jAlert.defaults,options);if(!options.id)
{var unique=Date.now().toString()+Math.floor(Math.random()*100000);var alert_id='ja_'+unique;}
else
{var alert_id=options.id;}
var alert={set:function(key,val)
{alert[key]=val;return alert;},__set:function(key,val)
{return alert.set(key,val);},get:function(key)
{return alert[key];},__get:function(key)
{return alert.get(key);},animateAlert:function(which){if(which=='hide')
{if(alert.instance.data('jAlert').blurBackground)
{$('body').removeClass('ja_blur');}
alert.instance.removeClass(alert.showAnimation).addClass(alert.hideAnimation);}
else
{if(alert.instance.data('jAlert').blurBackground)
{$('body').addClass('ja_blur');}
alert.instance.addClass(alert.showAnimation).removeClass(alert.hideAnimation).show();}
return alert;},closeAlert:function(remove,onClose)
{if(remove!=false)
{remove=true;}
if(alert.instance)
{alert.animateAlert('hide');window.setTimeout(function()
{var alertWrap=alert.instance.parents('.ja_wrap');if(remove)
{alertWrap.remove();}
else
{alertWrap.hide();}
toggleFocusTrap();if(typeof onClose=='function')
{onClose(alert.instance);}
else if(typeof alert.onClose=='function')
{alert.onClose(alert.instance);}
if($('.jAlert:visible').length===0)
{$('html,body').css('overflow','');}},alert.animationTimeout);}
return alert;},showAlert:function(replaceOthers,removeOthers,onOpen,onClose){if(replaceOthers!=false)
{replaceOthers=true;}
if(removeOthers!==false)
{removeOthers=true;}
if(replaceOthers)
{$('.jAlert:visible').data('jAlert').jAlert().closeAlert(removeOthers);}
var wrap=alert.instance.parents('.ja_wrap');$('body').append(wrap);alert.animateAlert('show');if(typeof onClose=='function')
{alert.onClose=onClose;}
window.setTimeout(function(){if(typeof onOpen=='function')
{onOpen(alert.instance);}},alert.animationTimeout);return alert;}};$.each(options,function(key,val){alert.set(key,val);});alert.set('id',alert_id);if(alert.content&&alert.content.indexOf('#')===0)
{if($(alert.content).length>0)
{alert.content=$(alert.content).html();}}
if(typeof alert.content==='object'&&alert.jquery)
{alert.content=alert.content.html();}
if(alert.video&&alert.video.indexOf('youtube.com/watch?v=')>-1&&alert.video.indexOf('embed')===-1)
{alert.video=alert.video.replace('watch?v=','embed/');}
if(alert.type=='confirm')
{if(!alert.content)
{alert.content=alert.confirmQuestion;}
alert.btns=[{'text':alert.confirmBtnText,'theme':'green','class':'confirmBtn','closeAlert':true,'onClick':alert.onConfirm},{'text':alert.denyBtnText,'theme':'red','class':'denyBtn','closeAlert':true,'onClick':alert.onDeny}];alert.autofocus=alert.confirmAutofocus;}
if(alert.color)
{alert.theme=alert.color;}
if($.inArray(alert.theme,themes)==-1)
{console.log('jAlert Config Error: Invalid theme selection.');return false;}
classes.push('ja_'+alert.theme);if(alert['class'])
{classes.push(alert['class']);}
if(alert.classes)
{classes.push(alert.classes);}
if(alert.fullscreen)
{classes.push('ja_fullscreen');}
if(alert.noPadContent)
{classes.push('ja_no_pad');}
if(!alert.title)
{classes.push('ja_noTitle');}
if(alert.width)
{alert.size=alert.width;}
if(alert.size&&((typeof alert.size=='object'&&(typeof alert.size.width=='undefined'||typeof alert.size.height=='undefined')))){console.log('jAlert Config Error: Invalid size selection (try a preset or make sure you\'re including height and width in your size object).');return false;}
else if(!alert.size)
{classes.push('ja_sm');}
else if(typeof alert.size=='object')
{styles.push('width: '+alert.size.width+';');styles.push('height: '+alert.size.height+';');classes.push('ja_setheight');}
else
{if(typeof sizeAliases[alert.size]!=='undefined')
{alert.size=sizeAliases[alert.size];}
if($.inArray(alert.size,sizes)>-1)
{classes.push('ja_'+alert.size);}
else
{styles.push('width: '+alert.size+';');}}
if($.inArray(alert.backgroundColor,backgroundColors)==-1)
{console.log('jAlert Config Error: Invalid background color selection.');return false;}
backgroundClasses.push('ja_wrap_'+alert.backgroundColor);alert.onOpen=[alert.onOpen];var onload="onload='$.fn.jAlert.mediaLoaded($(this))'",loader="<div class='ja_loader'>Loading...</div>";if(alert.picture)
{alert.image=alert.picture;}
if(alert.image)
{alert.noPadContent=true;alert.content="<div class='ja_media_wrap'>"+
loader+
"<img src='"+alert.image+"' class='ja_img' "+onload+"'";if(alert.imageWidth)
{alert.content+=" style='width: "+alert.imageWidth+"'";}
alert.content+=">"+
"</div>";alert.onOpen.unshift(function(elem){var img_elem=elem.find('.ja_img');img_elem.on('load',function(){elem.css('width',img_elem.width()+'px');elem.css('height',img_elem.height()+'px');});});}
else if(alert.video)
{alert.content="<div class='ja_media_wrap'>"+
loader+
"<div class='ja_video'>"+
"</div>"+
"</div>";alert.onOpen.unshift(function(elem){var iframe=document.createElement("iframe");iframe.src=elem.data('jAlert').video;if(iframe.addEventListener)
{iframe.addEventListener('load',function(){$.fn.jAlert.mediaLoaded($(this));},true)}
else if(iframe.attachEvent){iframe.attachEvent("onload",function(){$.fn.jAlert.mediaLoaded($(this));});}else{iframe.onload=function(){$.fn.jAlert.mediaLoaded($(this));};}
elem.find('.ja_video').append(iframe);});}
else if(alert.iframe)
{if(!alert.iframeHeight){classes.push('ja_stretch_height');}
alert.content="<div class='ja_media_wrap'>"+
loader+
"</div>";alert.onOpen.unshift(function(elem){var iframe=document.createElement("iframe");iframe.src=elem.jAlert().iframe;iframe.className='ja_iframe';if(iframe.addEventListener)
{iframe.addEventListener('load',function(){$.fn.jAlert.mediaLoaded($(this));},true)}
else if(iframe.attachEvent){iframe.attachEvent("onload",function(){$.fn.jAlert.mediaLoaded($(this));});}else{iframe.onload=function(){$.fn.jAlert.mediaLoaded($(this));};}
elem.find('.ja_media_wrap').append(iframe);});}
else if(alert.ajax)
{alert.content="<div class='ja_media_wrap'>"+
loader+
"</div>";onAjaxCallbacks=alert.onOpen;alert.onOpen=[function(elem){$.ajax(elem.jAlert().ajax,{async:true,complete:function(jqXHR,textStatus)
{elem.find('.ja_media_wrap').replaceWith(jqXHR.responseText);$.each(onAjaxCallbacks,function(index,onAjax){onAjax(elem);});},error:function(jqXHR,textStatus,errorThrown)
{alert.onAjaxFail(elem,'Error getting content: Code: '+jqXHR.status+' : Msg: '+jqXHR.statusText);}});}];}
var getBtnHTML=function(btn){if(typeof btn.href=='undefined'){btn.href='';}
if(typeof btn['class']=='undefined'){btn['class']='';}
if(typeof btn.theme=='undefined'){btn['class']+=' ja_btn_default';}else{btn['class']+=' ja_btn_'+btn.theme;}
if(typeof btn.text=='undefined'){btn.text='';}
if(typeof btn.id=='undefined'){var unique=Date.now().toString()+Math.floor(Math.random()*100000);btn.id='ja_btn_'+unique;}
if(typeof btn.target=='undefined'){btn.target='_self';}
if(typeof btn.closeAlert=='undefined'){btn.closeAlert=true;}
$('body').off('click','#'+btn.id);$('body').on('click','#'+btn.id,function(e){var button=$(this);alert=button.parents('.jAlert').jAlert();if(btn.closeAlert)
{alert.closeAlert();}
var callbackResponse=true;if(typeof btn.onClick=='function')
{callbackResponse=btn.onClick(e,button,alert);}
if(!callbackResponse||btn.closeAlert)
{e.preventDefault();return false;}
return callbackResponse;});return "<a href='"+btn.href+"' id='"+btn.id+"' target='"+btn.target+"' class='ja_btn "+btn['class']+"'>"+btn.text+"</a> ";};var addAlert=function(content){var html='';html+='<div class="ja_wrap '+backgroundClasses.join(' ')+'">'+
'<div class="jAlert '+classes.join(' ')+'" style="'+styles.join(' ')+'" id="'+alert.id+'">'+
'<div>';if(alert.closeBtn)
{html+="<div tabindex=0 role='button' aria-pressed='false' class='closejAlert ja_close";if(alert.closeBtnAlt)
{html+=' ja_close_alt';}
else if(alert.closeBtnRoundWhite)
{html+=' ja_close_round_white';}
else if(alert.closeBtnRound)
{html+=' ja_close_round';}
html+="'>&times;</div>";}
if(alert.title)
{html+="<div class='ja_title'><div>"+alert.title+"</div></div>";}
html+='<div class="ja_body">'+content;if(alert.btns)
{html+='<div class="ja_btn_wrap ';if(alert.btnBackground)
{html+='optBack';}
html+='">';}
if(typeof alert.btns[0]=='object')
{$.each(alert.btns,function(index,btn){if(typeof btn=='object')
{html+=getBtnHTML(btn);}});}
else if(typeof alert.btns=='object')
{html+=getBtnHTML(alert.btns);}
else if(alert.btns)
{console.log('jAlert Config Error: Incorrect value for btns (must be object or array of objects): '+alert.btns);}
if(alert.btns)
{html+='</div>';}
html+='</div>'+
'</div>'+
'</div>'+
'</div>';var alertHTML=$(html);if(alert.replaceOtherAlerts)
{var alerts=$('.jAlert:visible');alerts.each(function(){$(this).jAlert().closeAlert();});}
$('body').append(alertHTML);$('.jAlert:last').data('jAlert',alert);alert.instance=$('#'+alert.id);alert.instance[0]['jAlert']=alert;$('html,body').css('overflow','hidden');alert.animateAlert('show');if(alert.closeBtn){alert.instance.on('click','.closejAlert',function(e){e.preventDefault();$(this).parents('.jAlert:first').closeAlert();return false;});alert.instance.on('keydown','.closejAlert',function(e){if(e.originalEvent.key==='Enter'){e.preventDefault();$(this).parents('.jAlert:first').closeAlert();return false;}});}
if(alert.closeOnClick){$(document).off('mouseup touchstart',$.fn.jAlert.onMouseUp);$(document).on('mouseup touchstart',$.fn.jAlert.onMouseUp);}
if(alert.closeOnEsc){$(document).off('keydown',$.fn.jAlert.onEscKeyDown);$(document).on('keydown',$.fn.jAlert.onEscKeyDown);}
alert.onOpen.push(toggleFocusTrap);$.each(alert.onOpen,function(index,onOpen){onOpen(alert.instance);});if(alert.autofocus)
{alert.instance.find(alert.autofocus).focus();}
else
{alert.instance.focus();}
if(alert.autoClose)
{$.fn.closeTimer(function()
{var currentAlert=$.jAlert('current');if(currentAlert!==false)
{currentAlert.closeAlert();}},alert.autoClose);}
return alert.instance;};this.initialize=function(){if(!alert.content&&!alert.image&&!alert.video&&!alert.iframe&&!alert.ajax)
{console.log('jAlert potential error: No content defined');return addAlert('');}
else
{if(!alert.content)
{alert.content='';}
return addAlert(alert.content);}};this.initialize();return alert;};$.fn.closeTimer=(function(){var timer=0;return function(callback,ms){clearTimeout(timer);timer=setTimeout(callback,ms);};})(jQuery);$.fn.jAlert.defaults={'title':false,'content':false,'noPadContent':false,'fullscreen':false,'image':false,'imageWidth':'auto','video':false,'ajax':false,'onAjaxFail':function(alert,errorThrown){alert.jAlert().closeAlert();errorAlert(errorThrown);},'iframe':false,'iframeHeight':false,'class':'','classes':'','id':false,'showAnimation':'fadeInUp','hideAnimation':'fadeOutDown','animationTimeout':600,'theme':'default','backgroundColor':'black','blurBackground':false,'size':false,'replaceOtherAlerts':false,'closeOnClick':false,'closeOnEsc':true,'closeBtn':true,'closeBtnAlt':false,'closeBtnRound':true,'closeBtnRoundWhite':false,'btns':false,'autoClose':false,'btnBackground':true,'autofocus':false,'onOpen':function(alert){return false;},'onClose':function(alert){return false;},'type':'modal','confirmQuestion':'Are you sure?','confirmBtnText':'Yes','denyBtnText':'No','confirmAutofocus':'.confirmBtn','onConfirm':function(e,btn){e.preventDefault();console.log('confirmed');return false;},'onDeny':function(e,btn){e.preventDefault();return false;}};var toggleFocusTrap=function(){var curAlert=$.jAlert('current');if(curAlert){document.querySelectorAll('*').forEach(function(el){if(focusable(el)){if(!$.contains(curAlert.instance[0],el)){$(el).addClass("trap-disabled").attr("tabindex",-1).attr("aria-hidden",true);}else{$(el).removeClass("trap-disabled").attr("tabindex",0).attr("aria-hidden",false);;}}});}else{$(".trap-disabled").removeClass("trap-disabled").attr("tabindex",0).attr("aria-hidden",false);}};function focusable(element){var map,mapName,img,nodeName=element.nodeName.toLowerCase(),isTabIndexNotNaN=!isNaN($.attr(element,"tabindex"));if("area"===nodeName){map=element.parentNode;mapName=map.name;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){return false;}
img=$("img[usemap=#"+mapName+"]")[0];return!!img&&visible(img);}
return(/input|select|textarea|button|object/.test(nodeName)?!element.disabled:"a"===nodeName?element.href||isTabIndexNotNaN:isTabIndexNotNaN)&&visible(element);function visible(element){return $.expr.filters.visible(element)&&!$(element).parents().addBack().filter(function(){return $.css(this,"visibility")==="hidden";}).length;}}
$.fn.jAlert.onMouseUp=function(e){var target=e.target?e.target:e.srcElement;var lastVisibleAlert=$('.jAlert:visible:last');if(lastVisibleAlert.length>0&&lastVisibleAlert.data('jAlert').closeOnClick)
{if(!$(target).is('.jAlert *'))
{lastVisibleAlert.data('jAlert').closeAlert();}}};$.fn.jAlert.onEscKeyDown=function(e){if(e.keyCode===27){var lastVisibleAlert=$('.jAlert:visible:last');if(lastVisibleAlert.length>0&&lastVisibleAlert.data('jAlert').closeOnEsc)
{lastVisibleAlert.data('jAlert').closeAlert();}}};$.fn.attachjAlert=function(e){e.preventDefault();$.jAlert($(this).data());return false;};$.jAlert=function(options){if(options=='current')
{var latest=$('.jAlert:visible:last');if(latest.length>0)
{return latest.data('jAlert');}
return false;}
if(options=='attach')
{$('[data-jAlert]').off('click',$.fn.attachjAlert);$('[data-jAlert]').on('click',$.fn.attachjAlert);$('[data-jalert]').off('click',$.fn.attachjAlert);$('[data-jalert]').on('click',$.fn.attachjAlert);return false;}
return $.fn.jAlert(options);};$.fn.alertOnClick=function(options)
{$(this).on('click',function(e){e.preventDefault();$.jAlert(options);return false;});};$.alertOnClick=function(selector,options)
{$('body').on('click',selector,function(e){e.preventDefault();$.jAlert(options);return false;});};$.fn.closeAlert=function(remove,onClose){if($(this).data('jAlert'))
{$(this).data('jAlert').closeAlert(remove,onClose);}};$.fn.jAlert.mediaLoaded=function(elem){var wrap=elem.parents('.ja_media_wrap'),vid_wrap=wrap.find('.ja_video'),alert=elem.parents('.jAlert:first'),jalert=alert.data('jAlert');wrap.find('.ja_loader').remove();if(vid_wrap.length>0)
{vid_wrap.fadeIn('fast');}
else
{elem.fadeIn('fast');}
if(jalert.iframeHeight)
{elem.css('flex','unset');elem.height(jalert.iframeHeight);}};})(jQuery);