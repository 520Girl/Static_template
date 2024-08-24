var _iframeLoadReady=true;var _urlAccountInformationPhone="";var _originalComment="";var _lastSearch=new Array();var _readBackModeEnable=false;var _maxTotalLastSessionToShow=5;var shoppingCartReadback=new shoppingCartClass('tdReadBackInformation','',3);var shoppingCartReadbackAutoConfirm=new shoppingCartClass('tdReadBackInformation','',4);var _playerWindowsIsOpen=false;var _playerAutenticatedFromSportsbook=false;var _autoConfirmMode=false;var _someTicketHasSaved=false;var _autoLogOnPhone=false;var _blockCallStartSession=false;function PhoneMode(){if($('#_modeBetting').val()==='0'){if(detectIE()!==0){$('#dvOtherInformation').text("IE: "+detectIE());}
if($('#_autoConfirmMode').val()==='TRUE'){_autoConfirmMode=true;$('#dvReadBack').addClass('sDvReadBackReviewBetCommitted');}
RegisterEvents();OpenDialogToSignInPlayer();document.onhelp=new Function("return false;");window.onhelp=new Function("return false;");$("#btnCloseSession").prop("disabled",true);$("#btnInitSession").prop("disabled",true);$('#ifrAccount').on("load",function(){try{$(document.getElementById('ifrAccount').contentWindow.document).keydown(function(event){switch(event.which){case 27:if($('.ja_wrap').css('display')==undefined){if(!_playerAutenticatedFromSportsbook){parent.CloseDialogToSignInPlayer();event.preventDefault();event.stopPropagation();}}
return false;default:break;}});parent._iframeLoadReady=true;}catch(ex){parent._iframeLoadReady=true;console.log("Error: Account access denied. Check domain of URL");}});if(_playerAutenticatedFromSportsbook){$('#dvBtnExitPhone').hide();$('.sDvPhoneContentTableSecurity').hide();$('#dvBtnSelectPlayerOut').hide();}}
if($('#_modeBetting').val()==='1'){$('#dvMainPhonePlayerLogin').hide();$('#dvRootPlayerInformationPhone').hide();$('#dvRootAccountPhone').hide();}}
function OpenDialogToSignInPlayer(){UpdateDialogToSignInPlayerPhone();if(!_isAuthenticated){$('#ifrAccount').hide();$("#txtPlayerId").prop("disabled",false);}
else{$("#txtPlayerId").prop("disabled",true);$("#btnInitSession").prop("disabled",true);$("#btnLoad").prop("disabled",true);}
$('#dvMainPhonePlayerLogin').show();if($('#ifrAccount').attr('src')===''){$('#ifrAccount').hide();}
else{$('#ifrAccount').show();}
disableScroll();$("#txtPlayerId").focus();_playerWindowsIsOpen=true;}
function OpenConfirmationBet(viewResult){if(!_autoConfirmMode){var heightFanxyToSet=window.innerHeight;$.fancybox.open({'href':'#dvOpenConfirmationBet',autoSize:false,autoResize:true,closeSpeed:100,closeBtn:false,fitToView:false,weight:'500px',helpers:{overlay:{locked:true}},afterShow:function(){if(!_autoConfirmMode){if(viewResult){shoppingCartReadback.GetshoppingCart(true);$('#dvOpenConfirmationBet .sTblBetSlipButtons').hide();$('#dvOpenConfirmationBet .sTblBetSlipButtonsContinue').show();$('#dvTblBetSplipCart').click();}
else{LoadReadBackInformation();$('#dvOpenConfirmationBet .sTblBetSlipButtons').show();$('#dvOpenConfirmationBet .sTblBetSlipButtonsContinue').hide();}}},afterClose:function(){}});}}
function OpenConfirmationBetReackAutoConfirm(viewResult){$('#dvOpenConfirmationBet .sTblBetSlipButtons').show();$('#dvOpenConfirmationBet .sTblBetSlipButtonsContinue').show();if(_someTicketHasSaved){var heightFanxyToSet=window.innerHeight;$.fancybox.open({'href':'#dvOpenConfirmationBet',autoSize:false,autoResize:true,closeSpeed:100,closeBtn:false,fitToView:false,weight:'500px',height:'650px',helpers:{overlay:{locked:true}},afterShow:function(){LoadReadBackAutoConfirmationInformation();$('.sDvTicketEdit').css('height',$('.sDvTicketEdit').outerHeight());},afterClose:function(){}});}}
function LoadReadBackInformation(){if(!_autoConfirmMode){shoppingCartReadback=new shoppingCartClass('tdReadBackInformation','',3);var positionBet=0;var informationBet=shoppingCart.GetInformaionTicket(positionBet);var newObject;if(shoppingCartEditNewBet){informationBet=shoppingCartEditNewBet.GetInformaionTicket(0);if(informationBet!==undefined){positionBet=0;var informationBetEdit=shoppingCartEdit.GetInformaionTicket(positionBet);while(informationBetEdit!==undefined){if(informationBetEdit.TicketConfirmation==informationBet.TicketConfirmationReference){newObject=jQuery.extend(true,{},informationBetEdit);newObject.TicketWasEditedRefered=true;shoppingCartReadback.AddBetshoppingCartObject(newObject);break;}
positionBet++;informationBetEdit=shoppingCartEdit.GetInformaionTicket(positionBet);}
newObject=jQuery.extend(true,{},informationBet);newObject.NewTicketFromTicketToChange=true;shoppingCartReadback.AddBetshoppingCartObject(newObject);}}
for(positionBet=0;positionBet<shoppingCart.GetTotalCollection();positionBet++){informationBet=shoppingCart.GetInformaionTicket(positionBet);if(informationBet!==undefined){newObject=jQuery.extend(true,{},informationBet);newObject.TicketIsNew=true;shoppingCartReadback.AddBetshoppingCartObject(newObject);}}
shoppingCartReadback.Currency=shoppingCart.Currency;shoppingCartReadback.CurrencyISO=shoppingCart.CurrencyISO;shoppingCartReadback.CurrencySymbol=shoppingCart.CurrencySymbol;shoppingCartReadback.GetshoppingCart(false);$('.sDvTicketEdit').css('height',$('.sDvTicketEdit').outerHeight());}}
function LoadReadBackAutoConfirmationInformation(){shoppingCartReadbackAutoConfirm.Currency=shoppingCart.Currency;shoppingCartReadbackAutoConfirm.CurrencyISO=shoppingCart.CurrencyISO;shoppingCartReadbackAutoConfirm.CurrencySymbol=shoppingCart.CurrencySymbol;shoppingCartReadbackAutoConfirm.GetshoppingCartReadbackAutoConfirm();$('#dvSubmitBetReadback').hide();}
function CloseConfirmationBet(){if(!_autoConfirmMode){shoppingCartReadback=null;}
$.fancybox.close();}
function UpdateDialogToSignInPlayerPhone(){if($('#_modeBetting').val()==='0'){var heightScreen=0;var widthScreen=1024;if(window.screen.innerWidth<1024){if(window.innerWidth>window.screen.availWidth){widthScreen=window.screen.availWidth;}
else{widthScreen=window.innerWidth;}}
if(window.innerHeight>window.screen.availHeight){heightScreen=window.screen.availHeight;}
else{heightScreen=window.innerHeight;}
widthScreen-=50;heightScreen-=140;var fancyWidthBase=1054/1440;if(window.innerWidth<=420){fancyWidthBase=1254/1440;$('#ifrAccount').attr('height',(heightScreen-130)+'px');$('#dvFancywrap').css('width',(fancyWidthBase*window.innerWidth)+'px');$('#dvFancywrap').css('left',((64*window.innerWidth)/1440)+'px');$('#dvFancyInner').css('width',((fancyWidthBase*window.innerWidth)-30)+'px');}
else{$('#ifrAccount').attr('height',(heightScreen-130)+'px');$('#dvFancywrap').css('width',(fancyWidthBase*window.innerWidth)+'px');$('#dvFancywrap').css('left',((184*window.innerWidth)/1440)+'px');$('#dvFancyInner').css('width',((fancyWidthBase*window.innerWidth)-30)+'px');}}}
function CloseDialogToSignInPlayer(){if(_iframeLoadReady){setTimeout(function(){$('#dvMainPhonePlayerLogin').hide();},200);enableScroll();_playerWindowsIsOpen=false;$('#inpSearchText').focus();}
else{setTimeout(function(){CloseDialogToSignInPlayer();},10);}}
function RegisterEvents(){$(window).keydown(function(event){SetKeyPressEvents(event,"windows");});$('#dvSubmitAll').keydown(function(event){SetKeyPressEvents(event,'dvSubmitAll');});$('#txtPlayerId').keydown(function(event){SetKeyPressEvents(event,'txtPlayerId')});$("#txtPlayerId").focus(function(){$("#txtPlayerId").select();});}
function InvokeF2Event(){var e=jQuery.Event("keydown");e.which=113;SetKeyPressEvents(e,"windows");}
function InvokeEscEvent(){var e=jQuery.Event("keydown");e.which=27;SetKeyPressEvents(e,"windows");}
function SetKeyPressEvents(event,source){switch(event.which){case 27:if(!_playerAutenticatedFromSportsbook){if($('.ja_wrap').css('display')==undefined){if($('#ifrAccount').attr('src')!=''){if(!_playerWindowsIsOpen){if(shoppingCart.CountBetEnable>0){if($('#dvOpenConfirmationBet').css('display')=='block'){CloseConfirmationBet();}
else{if(_autoConfirmMode){CallCloseSession();OpenDialogToSignInPlayer();}
else{OpenConfirmationBet(false);}}}
else{if($('.fancybox-overlay').css('display')=='block'){CloseConfirmationBet();}
else{CallCloseSession();OpenDialogToSignInPlayer();}}}
else{CallCloseSession();}}}}
event.preventDefault();event.stopPropagation();return false;case 113:if($('#dvOpenConfirmationBet').css('display')!=='block'){if($('.ja_wrap').css('display')==undefined){if($('#dvMainPhonePlayerLogin').css('display')!=='block'){OpenDialogToSignInPlayer();}
else{CloseDialogToSignInPlayer();}}}
event.preventDefault();event.stopPropagation();return false;case 112:case 114:if(_autoConfirmMode){OpenConfirmationBetReackAutoConfirm(false);}
event.preventDefault();event.stopPropagation();return false;case 13:if(!_playerAutenticatedFromSportsbook){if(source!==undefined&&source=='txtPlayerId'){if($('.ja_wrap').css('display')==undefined){CallSelectPlayer();}
event.preventDefault();event.stopPropagation();}
if(source!==undefined&&source.indexOf('dvShowLastStarted')>=0){$('#txtPlayerId').val($('#'+source).find('input').val());$('#txtPlayerId').focus();}}
if(source!==undefined&&source.indexOf('dvSubmitAll')>=0&&shoppingCart.CountBetEnable>0){$('#dvSubmitAll').click();}
return false;case 40:if(source!=undefined&&source=='txtPlayerId'){ShowLastStartedSession();}
if(source!=undefined&&source.indexOf('dvShowLastStarted')>=0){let indexSource=parseInt(source.replace('dvShowLastStarted_',''),10)-1;let newSourceLast='dvShowLastStarted_'+indexSource;$('#'+newSourceLast+' input').focus();}
break;case 38:if(source!=undefined&&source.indexOf('dvShowLastStarted')>=0){let indexSource=parseInt(source.replace('dvShowLastStarted_',''),10)+1;let newSourceLast='dvShowLastStarted_'+indexSource;$('#'+newSourceLast+' input').focus();}
break;default:break;}}
function SetToUpperCase(control){if(control!=null){control.value=control.value.toUpperCase();}}
function StartSessionPlayerPhone(){CloseDialogToSignInPlayer();RefreshTrackListRace("","","","",false);}
function EndSessionPlayerPhone(){RefreshTrackListRace("","","","",false);}
function AddPlayerInitialSession(playerIdValue){if(_lastSearch.length==_maxTotalLastSessionToShow){delete _lastSearch[0];var tempArry=new Array();for(var positionArrray=1;positionArrray<_lastSearch.length;positionArrray++){tempArry[tempArry.length]=_lastSearch[positionArrray];}
_lastSearch=tempArry;}
_lastSearch[_lastSearch.length]=playerIdValue;}
function ShowLastStartedSession(){var divValueMain=document.createElement('div');$(divValueMain).css('width',$('#txtPlayerId').width()+5);$('#dvLastSessionPlayer').css('top',parseInt($('#txtPlayerId').offset().top,10)+parseInt($('#txtPlayerId').height(),10));$('#dvLastSessionPlayer').css('left',parseInt($('#txtPlayerId').offset().left,10));for(var lastSearchPosition=_lastSearch.length-1;lastSearchPosition>=0;lastSearchPosition--){var divValue=document.createElement('div');var divInput=document.createElement('input');divValue.id='dvShowLastStarted_'+lastSearchPosition;$(divInput).val(_lastSearch[lastSearchPosition]);$(divInput).prop('readonly',true);divValue.appendChild(divInput);divValueMain.appendChild(divValue);}
$('#dvLastSessionPlayer').html(divValueMain);$('#dvShowLastStarted_'+(_lastSearch.length-1)+' input').focus();$('#dvLastSessionPlayer input').keydown(function(event){SetKeyPressEvents(event,$(event.target).parent().attr("id"));});setTimeout(function(){hideLastStartedSession();},3000);}
function hideLastStartedSession(){if($('#dvLastSessionPlayer:hover').length>0||$('#dvLastSessionPlayer input:focus').length>0){setTimeout(function(){hideLastStartedSession();},3000);}
else{$('#dvLastSessionPlayer').html('');}}
function saveComment(){var txtPlayerCode=returnObjById("txtPlayerId");if($('#ifrAccount').attr('src')!=''){if(_originalComment!=$('#spComments').val()){confirm(messages.ConfirmaSaveComment,function(){var addInformation=GetAddInformationBetSessionStorage();var response=Racebook.SaveCommentPhone(txtPlayerCode.value,$('#spComments').val(),_sessionSSC,_token,addInformation);if(response.error!=null){alert(response.error);return;}
else{eval(response.value);}});}}
else{alert(messages.ErrorPhonePlayerIdEmpty);}}
function CallSelectPlayer(){var ms=1;if(_playerAutenticatedFromSportsbook){ms=200;}
setTimeout(function(){var txtPlayerCode=returnObjById("txtPlayerId");var playerCode="";if(txtPlayerCode){$("#btnLoad").prop("disabled",true);playerCode=txtPlayerCode.value;playerCode=Trim(playerCode);if(playerCode.length==0){alert(messages.ErrorPhonePlayerIdEmpty);setFocus(txtPlayerCode);$("#btnLoad").prop("disabled",false);return false;}
else{var addInformation=GetAddInformationBetSessionStorage();Racebook.SelectPlayer(playerCode,false,_sessionSSC,_token,addInformation,SelectPlayer_CallBack)}}},ms);}
function SelectPlayer_CallBack(response){$("#btnLoad").prop("disabled",false);if(response.error!=null){alert(response.error);return;}
else{if(response!=null&&response.value!=null){eval(response.value);if(_autoLogOnPhone){_autoLogOnPhone=false;CallStartSession();}}}}
function EnableButtonsToLogin(){$("#btnInitSession").prop("disabled",false);if(!$('#dvPhonePlayerInUse').hasClass('sDvPhoneIconActive')&&!$('#dvPhonePlayerInvactive').hasClass('sDvPhoneIconActive')){$('#btnInitSession').focus();}}
function CallStartSession(){if(!_blockCallStartSession){_blockCallStartSession=true;_isBlockRefresh=true;var txtPlayerCode=returnObjById("txtPlayerId");var playerCode="";if(txtPlayerCode){playerCode=txtPlayerCode.value;playerCode=Trim(playerCode);if(playerCode.length==0){alert(messages.ErrorPhonePlayerIdEmpty);setFocus(txtPlayerCode);return false;}
var addInformation=GetAddInformationBetSessionStorage();Racebook.SelectPlayer(playerCode,true,_sessionSSC,_token,addInformation,StartSession_CallBack);}}}
function StartSession_CallBack(response){_blockCallStartSession=false;if(response.error!=null){alert(response.error);return;}
else{if(response!=null&&response.value!=null){eval(response.value);SetBasicValuesPage();AddPlayerInitialSession($('#txtPlayerId').val());shoppingCart.ShowBetSlipInformation();shoppingCartEdit.HideBetSlipBetInformation();$("#dvBtnSelectPlayerOut").removeClass("sBtnPhoneGeneralDisable");$("#dvAccounPlayerLayout").show();$("#dvAccounAmountAvailable").show();if($('#ucBetSlip_hdnTypeAccount').val()==="0"&&_integrationCode===0){$("#dvAccounAmountBalance").show();}
$('#tblBetSlip').addClass('sDvAccounAutheticated');if(_trackCode!=''&&_raceId!=''&&_trackEvent!=''){ShowTrackInformation(_trackCode,_raceId,_trackEvent,'false','');}}}
_isBlockRefresh=false;}
function CallCloseSession(){_isBlockRefresh=true;var addInformation=GetAddInformationBetSessionStorage();if(shoppingCart.CountBetEnable>0){confirm(messages.lblRemoveAllBetConfirmAndSignOut,function(){shoppingCart.RestartBetList();Racebook.CloseSession(_sessionSSC,_token,addInformation,CloseSession_CallBack);},function(){CloseDialogToSignInPlayer();$('#rblPools_0').click();_isBlockRefresh=false;});}
else{Racebook.CloseSession(_sessionSSC,_token,addInformation,CloseSession_CallBack);}}
function CloseSession_CallBack(response){if(response.error!=null){alert(response.error);return;}
if(response!=null&&response.value!=null){try{$('#dvTblBetSplipCart').click();eval(response.value);$('#txtPlayerId').val('');$('#txtPlayerId').focus();$("#btnCloseSession").prop("disabled",true);$("#btnInitSession").prop("disabled",true);SetBasicValuesPage();shoppingCartEdit.HideBetSlipBetInformation();shoppingCart.ClearBetPlaced();shoppingCart.GetshoppingCart(false);$("#dvBtnSelectPlayerOut").addClass("sBtnPhoneGeneralDisable");$("#dvAccounPlayerLayout").hide();$("#dvAccounAmountBalance").hide();$("#dvAccounAmountAvailable").hide();if(_autoConfirmMode){shoppingCartReadbackAutoConfirm=new shoppingCartClass('tdReadBackInformation','',4);_someTicketHasSaved=false;}}
catch(er){}}
$('#rblPools_0').click();_isBlockRefresh=false;$('#tblBetSlip').removeClass('sDvAccounAutheticated');}
function SetBasicValuesPage(){_isAuthenticated=$('#_isAnonimous').val()==='0'?true:false;$("#txtPlayerId").prop("disabled",false);$("#btnLoad").prop("disabled",false);if(_isAuthenticated){$('#dvChAskConfirmationSubmit').removeClass('sHideElement');$('#dvConfirmationSubmitPassword').removeClass('sHideElement');if($('#_askConfirmationBet').val()==="FALSE"){$('#dvChAskConfirmationSubmit').addClass('sHideElement');}
if($('#_passwordConfirmationBet').val()==="FALSE"){$('#dvConfirmationSubmitPassword').addClass('sHideElement');}
$("#btnCloseSession").prop("disabled",false);$('.sDvSearchOption').removeClass('sHideElement');}
else{$('#dvChAskConfirmationSubmit').addClass('sHideElement');$('#dvConfirmationSubmitPassword').addClass('sHideElement');$('.sDvSearchOption').addClass('sHideElement');}
if(!_isAuthenticated){var htmlMessage;var messageBase=messages.lblMessageSignInBet;if($('#_anonimousLoginType').val()!=="3"){htmlMessage="<span>"+messageBase.replace('{0}',messages.lblSignIn)+"</span>";}
if($('#_anonimousLoginType').val()==="3"){var strURL=$("#loginURL").val();var messageSignIn='<span onclick=\"GoURLLogin(\''+strURL+'\');\" class=\"sSpSignInUrl\">'+messages.lblSignIn+'</span>';htmlMessage="<span>"+messageBase.replace('{0}',messageSignIn)+"</span>";}
$('.sDvAskLogin > div').html(htmlMessage);}
else{$('.sDvAskLogin > div').html('');}
showMyAccountOptions();$("#txtPlayerId").focus();}
function LoadPendingBetsToEdit(){}
function HidePendingBet(){$('#dvBetSliptZone').removeClass('sdvBetSlipZoneWithOpenBets');}
function ShowPendingBet(){$('#dvBetSliptZone').addClass('sdvBetSlipZoneWithOpenBets');if((typeof shoppingCart!=="undefined"&&shoppingCart.HaveTicketWithSomeError())){showBetSlipCart();}
else{$('#dvTblBetSlipOpenBets').click();}}
function SetIframePlayerInformation(url){try{_urlAccountInformationPhone=url;if(_integrationCode==0){url=url+'&go=3';}
$('#ifrAccount').show();_iframeLoadReady=false;$('#ifrAccount').attr('src',url);}
catch(e){}}
function OpenForReportPlayerInformation(report){var url=_urlAccountInformationPhone;switch(report){case 0:url=url+'&go=1,1,0';break;case 1:url=url+'&go=1,1,1';break;default:url=url+'&go=3';break;}
OpenDialogToSignInPlayer();$('#ifrAccount').show();_iframeLoadReady=false;$('#ifrAccount').attr('src',url);}
function ClearIframePlayerInformation(){$('#ifrAccount').attr('src','');$('#ifrAccount').on("load",function(){setTimeout(function(){try{$(document.getElementById('ifrAccount').contentWindow.document).keydown(function(event){SetKeyPressEvents(event);});}
catch(e){Console.log(e.messages);}},200);});$('#ifrAccount').hide();}
function disableScroll(){$('html').addClass('fancybox-margin fancybox-lock');}
function enableScroll(){$('html').removeClass('fancybox-margin fancybox-lock');}
function ActiveStatusPlayer(selector,type){if(type!=undefined){if(type=="0"){$(selector).addClass('sDvPhoneIconActive sDvPhoneUsePhone');}
else{$(selector).addClass('sDvPhoneIconActive sDvPhoneUseInternet');}}
else{$(selector).addClass('sDvPhoneIconActive');}}
function RemoveStatusPlayer(selector){$(selector).removeClass('sDvPhoneIconActive sDvPhoneUsePhone');$(selector).removeClass('sDvPhoneIconActive sDvPhoneUseInternet');$(selector).addClass('sDvPhoneUseInternet');}