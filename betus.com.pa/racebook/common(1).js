var _pageParameters;var FramesetEnum;var _BOSS_addInformation='';var _enableRememberBet=false;var isMobile={Android:function(){return navigator.userAgent.match(/Android/i);},Nokia:function(){return navigator.userAgent.match(/Nokia/i);},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i);},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera:function(){return navigator.userAgent.match(/Opera Mini/i);},Windows:function(){return navigator.userAgent.match(/IEMobile/i);},Samsung:function(){return navigator.userAgent.match(/Samsung/i);},Nintendo:function(){return navigator.userAgent.match(/NintendoBrowser/);},any:function(){return(isMobile.Nintendo()||isMobile.Android()||isMobile.Nokia()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows());}};function returnObjById(strId){var tempObj=document.getElementById(strId);return tempObj;}
function setObjAttribute(targetID,attribute,strValue){var objImg;if(typeof targetID=="string"){objImg=returnObjById(targetID);}
else{if(typeof targetID=="object"){objImg=targetID;}}
if(objImg){objImg.setAttribute(attribute,strValue);}}
function ShowControl(targetID){var objCtrl;if(typeof targetID=="string"){objCtrl=returnObjById(targetID);}
else{if(typeof targetID=="object"){objCtrl=targetID;}}
if(objCtrl){if(objCtrl.style.display=="none")
objCtrl.style.display="block";else
objCtrl.style.display="none";}}
function setStyleAttribute(targetID,attribute,value){var objCtrl;if(typeof targetID=="string"){objCtrl=returnObjById(targetID);}
else{if(typeof targetID=="object"){objCtrl=targetID;}}
if(objCtrl){switch(attribute.toLowerCase()){case "display":objCtrl.style.display=value;break;}}}
function ShowWaitDialog(isShow,positionToShowTop,positionToShowLeft){var currentControl=document.getElementById("MessageDiv");if(currentControl!=null){if(isShow){if(currentControl.style.visibility=="hidden"||currentControl.style.visibility==''){if(positionToShowLeft!=undefined&&positionToShowLeft>0){$('#MessageDiv').css('left',positionToShowLeft);}
if(positionToShowTop!=undefined&&positionToShowTop>0){$('#MessageDiv').css('top',positionToShowTop);}
else{$('#MessageDiv').css('top',$('#dvMainContent').position().top+200);}
currentControl.style.visibility="visible";}}
else{currentControl.style.visibility="hidden";$('#MessageDiv').css('top',0);}}}
function MaximizeWindowsRaceDetail(controlName,obj,controlText){var _control=document.getElementById(controlName);var _controlJquery='#'+controlName;var _controlObjJquery='#'+obj;var _controlTextJquery='#'+controlText;if(_control){if(_control.style.display=='none'){$(_controlJquery).slideDown();$(_controlObjJquery).removeClass('sTdBtnMaximize').addClass('sTdBtnMinimize');$(_controlTextJquery).text(messages.lblRaceDetailInformationHide);}
else{$(_controlJquery).slideUp();$(_controlObjJquery).removeClass('sTdBtnMinimize').addClass('sTdBtnMaximize');$(_controlTextJquery).text(messages.lblRaceDetailInformation);}}}
function MaximizeWindowsRaceVideo(controlName,obj,controlText){var _control=document.getElementById(controlName);var _controlJquery='#'+controlName;var _controlObjJquery='#'+obj;var _controlTextJquery='#'+controlText;if(_control){if(_control.style.display=='none'){$(_controlJquery).slideDown();$(_controlObjJquery).removeClass('sTdBtnMaximize').addClass('sTdBtnMinimize');$(_controlTextJquery).text(messages.lblRaceVideoInformationHide);LoadExternalInformationBetSlipVideo(_lastVideoURLLoaded,true);}
else{$(_controlJquery).slideUp();$(_controlObjJquery).removeClass('sTdBtnMinimize').addClass('sTdBtnMaximize');$(_controlTextJquery).text(messages.lblRaceVideoInformation);$('#dvMobileStreamingVideo').html('');}}}
function MaximizeWindows(controlName,obj){var _control=document.getElementById(controlName);var _controlJquery='#'+controlName;var _controlObjJquery='#'+obj;if(_control){if(_control.style.display=='none'){$(_controlJquery).slideDown({start:function(a){$(this).parent().parent().find('.sDvMenuTrackListHeader').removeClass('sDvIsColapse');}});$(_controlObjJquery).removeClass('sTdBtnMaximize').addClass('sTdBtnMinimize');}
else{$(_controlJquery).slideUp({progress:function(a,prog,ms){if(prog>0.95){$(this).parent().parent().find('.sDvMenuTrackListHeader').addClass('sDvIsColapse');}}});$(_controlObjJquery).removeClass('sTdBtnMinimize').addClass('sTdBtnMaximize');}}}
function MaximizeWindowsParlay(controlName,obj){var _control=document.getElementById(controlName);var _controlJquery='#'+controlName;if(_control){if(_control.style.display=='none'){$(_controlJquery).show("slow");setObjAttribute(obj,"src",_skinIdentifier+"Images/Controls/Win_Min2.gif");}
else{$(_controlJquery).hide("slow");setObjAttribute(obj,"src",_skinIdentifier+"Images/Controls/Win_Max2.gif");}}}
function ChangeWindowsState(controlName,expand,iconControl){var _control=document.getElementById(controlName);if(_control){if(expand){_control.style.display='';setObjAttribute(iconControl,"src",_skinIdentifier+"Images/Controls/Win_Min.gif");}
else{_control.style.display='none';setObjAttribute(iconControl,"src",_skinIdentifier+"Images/Controls/Win_Max.gif");}}
return true;}
function ChangeWindowsStateParlay(controlName,expand,iconControl){var _control=document.getElementById(controlName);if(_control){if(expand){_control.style.display='';setObjAttribute(iconControl,"src",_skinIdentifier+"Images/Controls/Win_Min2.gif");}
else{_control.style.display='none';setObjAttribute(iconControl,"src",_skinIdentifier+"Images/Controls/Win_Max2.gif");}}
return true;}
function setControlFocus(controlName){var controlToSelect=document.getElementById(controlName);if(controlToSelect!=null){controlToSelect.select();controlToSelect.focus();}}
function setFocus(control){if(control){control.select();control.focus();}}
function disableControl(controlName,boolValue){currentControl=document.getElementById(controlName);if(currentControl!=null){if(currentControl.parentElement.id!=''){unCheckCheckbox(currentControl.parentElement);}
if(boolValue){$(currentControl.parentElement).addClass('sHideElement');}
else{$(currentControl.parentElement).removeClass('sHideElement');}}}
function disableControlKey(controlName,boolValue){currentControl=document.getElementById(controlName);if(currentControl!=null){currentControl.disabled=boolValue;}}
function checkControl(controlName,boolValue){currentControl=document.getElementById(controlName);if(currentControl!=null){currentControl.checked=boolValue;}}
function setBoxWithKey(){var i=0;var j=0;var ctrlBox,ctrlBoxKey;ctrlBox=document.getElementById("ckbBox");ctrlBoxKey=document.getElementById("ckbBoxKey");if((ctrlBoxKey!=null)&&(ctrlBox!=null)){if(ctrlBoxKey.checked){unCheckCheckbox(document.getElementById('dvCkbBoxKey'));}
else{checkCheckbox(document.getElementById('dvCkbBoxKey'));}
if(ctrlBox.checked){setBox();}}
GenerateTotalCombination();}
function ShowLoginPage(){try{var addInformation=GetAddInformationBetSessionStorage();if(_insertFailedBetLog){if(shoppingCart!=null&&shoppingCart.GetTotalCollection()>0){var sToken=$("#_sToken").val();for(var b=0;b<shoppingCart.GetTotalCollection();b++){Racebook.InsertFailedBetLogWithToken(sToken,"Session TimeOut",shoppingCart.betDescription(b),_sessionSSC,_token,addInformation);}}}}
catch(er){console.log("Session TimeOut");}
if(_integrationCode==="0"){window.top.location=$("#loginURL").val();}
else{if($("#loginURL").val()===''){document.location="Error.aspx?ssc="+_sessionSSC+"&errorCode=B502";}
else{window.top.location=$("#loginURL").val();}}}
function ShowLogoutPage(){var response="";var addInformation=GetAddInformationBetSessionStorage();if($('#_modeBetting').val()=='0'){if(_isAuthenticated){confirm(messages.lblConfirmExit,function(){response=Racebook.PlayerLogout(_sessionSSC,_token,addInformation);if(response!==null){if(response.value!==""){window.location.href=response.value;}}});}
else{response=Racebook.PlayerLogout(_sessionSSC,_token,addInformation);if(response!==null){if(response.value!==""){window.location.href=response.value;}}}}
else{response=Racebook.PlayerLogout(_sessionSSC,_token,addInformation);if(response!==null){if(response.value!==""){window.location.href=response.value;}}}}
function ShowAleaLoginPage(address){window.parent.frames['BetZone'].window.parent.window.location=address;}
function ShowFrameSet(frameName,urlAddress){try{if(window.parent){if(window.parent.frames){switch(frameName){case "NEW":NewPopUpWindow(urlAddress,"Report",950,700,true);break;}}}}
catch(er){alert("ShowFrameSet :: "+er.number+" :: "+er.message);}
return;}
function ShowDiv(div){returnObjById(div).style.display="";}
function HiddenDiv(div){returnObjById(div).style.display="none";}
function ShowTrackInformation(trackCode,featuredRaceId,featuredTrackEvent,isFeatured,trackType){ShowBetZone();callPageLoadByTrack(trackCode,featuredRaceId,featuredTrackEvent,isFeatured,trackType,false);return true;}
function ShowTrackResultInformation(trackCode,trackEventId,raceId){ShowBetZone();callPageLoadByTrack(trackCode,raceId,trackEventId,'','',true);return true;}
function ShowTrackInformationMobile(trackCode,featuredRaceId,featuredTrackEvent,isFeatured,trackType){SetValidateSession();ShowBetZone();_loadRaceForResult=false;_trackEvent=featuredTrackEvent;if(featuredRaceId&&featuredRaceId!=''){_featuredRaceId=featuredRaceId;}
if(trackCode&&trackCode!=''){_trackCode=featuredTrackEvent;}
_trackType=trackType;_sectionIsShowingModeMobileLast=_sectionIsShowingModeMobile;_sectionIsShowingModeMobile=1;var addInformation=GetAddInformationBetSessionStorage();Racebook.LoadTrackInformation(trackCode,featuredRaceId,featuredTrackEvent,isFeatured,trackType,false,_sessionSSC,_token,addInformation,PageLoadByTrack_CallBack);return true;}
function NewPopUpWindow(urlAddress,title,width,height,report){var newWindows
if(report){newWindows=window.open(urlAddress,title,"toolbar = no, menubar = no, status = no, location = no, toolbar = no,  height = "+height+", width = "+width+", resizable = yes, scrollbars = yes",true);newWindows.focus();newWindows=null;}
else{newWindows=window.open(urlAddress,title,"toolbar = no, menubar = no, status = no, location = no, toolbar = no, left = 0, top = 0, height = "+height+", width = "+width+", resizable = yes",true);newWindows.focus();newWindows=null;}}
function openPopupPage(url,value){if(url===undefined||url===""){url=_accountManagementURL;}
var param={'valueEnc':value};OpenWindowWithPost(url,"toolbar = no, menubar = no, status = no, location = no, toolbar = no,width=950, height=700, resizable=yes, scrollbars=yes","NewFile",param);}
function OpenWindowWithPost(url,windowoption,name,params){var form=document.createElement("form");form.setAttribute("method","post");form.setAttribute("action",url);form.setAttribute("target",name);for(var i in params){if(params.hasOwnProperty(i)){var input=document.createElement('input');input.type='hidden';input.name=i;input.value=params[i];form.appendChild(input);}}
document.body.appendChild(form);var newWindows=window.open("",name,windowoption);form.submit();document.body.removeChild(form);newWindows.focus();newWindows=null;}
function GotoCashierPage(message){if(_cashierUrl.length>0){var answer=confirm(message,function(){NewPopUpWindow(_cashierUrl,"Cashier",800,600);});}
else{alert(message);}}
function SetLabelText(ctrlName,text){var ctrlObj;ctrlObj=returnObjById(ctrlName);if(ctrlObj){ctrlObj.innerHTML=text;}}
function SetControlValue(ctrlName,text){var ctrlObj;ctrlObj=returnObjById(ctrlName);if(ctrlObj){ctrlObj.value=text;}}
function SetDropDownIndex(ctrlName,index){var ctrlObj;ctrlObj=returnObjById(ctrlName);if(ctrlObj){if(ctrlObj.options){if(ctrlObj.options.length>index){ctrlObj.selectedIndex=index;}}}}
function SetTrackHorseImage(trackTrype){if(trackTrype=="GYN"){$('#tdTrackHorseImage').removeClass('sTdTrackImageHorseHarness sTdTrackImageHorseThoroughbred sTdTrackImageHorseGreyhound').addClass('sTdTrackImageHorseGreyhound');}
else{if(trackTrype=="HRN"){$('#tdTrackHorseImage').removeClass('sTdTrackImageHorseHarness sTdTrackImageHorseThoroughbred sTdTrackImageHorseGreyhound').addClass('sTdTrackImageHorseHarness');}
else{$('#tdTrackHorseImage').removeClass('sTdTrackImageHorseHarness sTdTrackImageHorseThoroughbred sTdTrackImageHorseGreyhound').addClass('sTdTrackImageHorseThoroughbred');}}}
function SetReportToPage(htmlInformation){$('#dvResultReport').html(htmlInformation);}
function SetReportResultTrackByEvent(htmlInformation){$('#dvResultTrackEvent').html(htmlInformation);}
function SetReportResultTrackByEventMessage(htmlInformation){if(htmlInformation==""){$('#dvResultTrackEventMessage').html('');$('#dvResultTrackEventMessage').hide();$('#dvResultTrackEvent').show();}
else{$('#dvResultTrackEventMessage').html(htmlInformation);$('#dvResultTrackEventMessage').show();$('#dvResultTrackEvent').hide();}}
function checkOrUnCheckCheckbox(control,isParlay){if(!$('#'+control.id).find('input').prop('disabled')){if($('#'+control.id).hasClass('checkBoxChecked')){unCheckCheckbox(control,isParlay);}
else{checkCheckbox(control);}}
if(!isParlay){SetBoxAllLineReverse(control);}}
function checkOrUnCheckCheckboxId(controlId){var control=document.getElementById(controlId);if(!$('#'+control.id).find('input').prop('disabled')){if($('#'+control.id).hasClass('checkBoxChecked')){unCheckCheckbox(control);}
else{checkCheckbox(control);}}}
function unCheckCheckbox(control,isParlay){if(isParlay!==undefined&&isParlay){let rP=1;if(control.id.toString().indexOf('_ckb2')>0){rP=2;}
if(control.id.toString().indexOf('_ckb3')>0){rP=3;}
ShowBetParlay();}
$('#'+control.id).find('input').prop('checked',false);$('#'+control.id).addClass('checkBoxUnChecked');$('#'+control.id).removeClass('checkBoxChecked');}
function checkCheckbox(control){$('#'+control.id).find('input').prop('checked',true);$('#'+control.id).addClass('checkBoxChecked');$('#'+control.id).removeClass('checkBoxUnChecked');}
function setValueDynamicDropDown(idPrincipal,value){var keyId="dvChdOp_"+idPrincipal+'_'+value;var optionIndex=document.getElementById(keyId);if(optionIndex!=null&&optionIndex!=undefined){document.getElementById('lbDropDownElemenSelected_'+optionIndex.keyId).innerHTML=optionIndex.innerHTML;document.getElementById('lbDropDownElemenSelected_'+optionIndex.keyId).value=optionIndex.value;}}
function createDynamicDropDown(stylePrincipal,idPrincipal,options,defaultValueToSelectionOption,callback,initialTextForce,initialValueForce,callBackBeforeClickSelectOptionDropDown,resizeMainPage,personalizationChild,callBackOpenOption,callBackCloseOption,dvBase){var divPrincipal=document.createElement('div');var divElmentSelected=document.createElement('div');var divChilds=document.createElement('div');var divChildsTemp=document.createElement('div');var divArrow=document.createElement('div');var divArrowTemp=document.createElement('div');var divLabel=document.createElement('label');var divLabelTemp=document.createElement('div');var divLabelTemp2=document.createElement('div');divPrincipal.id='dvDropDown_'+idPrincipal;divPrincipal.className=stylePrincipal;divChilds.id='dvChild_'+idPrincipal;divChilds.className='sDvChildDropDown sHideElement';divChildsTemp.appendChild(divChilds);divArrow.className='sDvDropDownArrow';divArrow.keyId=idPrincipal;divArrow.onclick=function(){$('#dvElementSelected_'+this.keyId).click();};divArrowTemp.appendChild(divArrow);divLabel.id='lbDropDownElemenSelected_'+idPrincipal;divElmentSelected.id='dvElementSelected_'+idPrincipal;divElmentSelected.className='sDvElementSelected';divElmentSelected.keyId=idPrincipal;divElmentSelected.onclick=function(){var dvElement='#dvElementSelected_'+this.keyId;if($('#dvChild_'+this.keyId).hasClass('sHideElement')){if(callBackOpenOption){callBackOpenOption();}
else{$(document).click();$(document).click(function(event){if(!$(event.target).closest(dvElement).length){$(dvElement).parent().find('.sDvChildDropDown').addClass('sHideElement');$(dvElement).removeClass('sDvDropDownHover');$('#dvContent').css('height','');$(document).off("click");}});}
$('#dvChild_'+this.keyId).removeClass('sHideElement');$('#dvChild_'+this.keyId).parent().parent().find('.sDvDropDownArrow').addClass('sDvOpen');$(dvElement).addClass('sDvDropDownHover');if(resizeMainPage!=undefined&&resizeMainPage){var heightToResize=0;var totalHeight=$('#dvRootMobile').outerHeight()+$('#dvContent').outerHeight();if(($('#dvChild_'+this.keyId).position().top+$('#dvChild_'+this.keyId).outerHeight())>totalHeight){heightToResize+=($('#dvChild_'+this.keyId).position().top+$('#dvChild_'+this.keyId).outerHeight());}
if(heightToResize!=0){$('#dvContent').css('height',heightToResize+'px');}
else{$('#dvContent').css('height','');}}}
else{if(callBackCloseOption){callBackCloseOption();}
$('#dvChild_'+this.keyId).parent().parent().find('.sDvDropDownArrow').removeClass('sDvOpen');$('#dvChild_'+this.keyId).addClass('sHideElement');$(dvElement).removeClass('sDvDropDownHover');$(document).off("click");$('#dvContent').css('height','');}}
if(initialTextForce!==undefined&&initialValueForce!==undefined){divLabel.value=initialValueForce;divLabel.innerHTML=initialTextForce;}
for(var posOption=0;posOption<options.length;posOption++){if(initialTextForce==undefined&&initialValueForce==undefined){if(defaultValueToSelectionOption==options[posOption][0]){divLabel.value=options[posOption][0];divLabel.innerHTML=options[posOption][1];}}
var optionsToAdd=document.createElement('div');optionsToAdd.value=options[posOption][0];optionsToAdd.innerHTML=options[posOption][1];if(options[posOption].length>2){optionsToAdd.innerHTMLSelect=options[posOption][2];}
optionsToAdd.keyId=idPrincipal;optionsToAdd.id='dvChdOp_'+idPrincipal+'_'+options[posOption][0];if(personalizationChild!==undefined&&personalizationChild==0){optionsToAdd.className=options[posOption][2];}
optionsToAdd.onclick=function(){if(callBackBeforeClickSelectOptionDropDown){if(callBackBeforeClickSelectOptionDropDown()){$('#dvChild_'+this.keyId).addClass('sHideElement');$('#dvChild_'+this.keyId).parent().parent().find('.sDvDropDownArrow').removeClass('sDvOpen');if(this.innerHTMLSelect!==undefined&&this.innerHTMLSelect!==''){document.getElementById('lbDropDownElemenSelected_'+this.keyId).innerHTML=this.innerHTMLSelect;}
else{document.getElementById('lbDropDownElemenSelected_'+this.keyId).innerHTML=this.innerHTML;}
document.getElementById('lbDropDownElemenSelected_'+this.keyId).value=this.value;if(callback){callback(this.value,idPrincipal,this);}}}
else{$('#dvChild_'+this.keyId).addClass('sHideElement');$('#dvChild_'+this.keyId).parent().parent().find('.sDvDropDownArrow').removeClass('sDvOpen');if(this.innerHTMLSelect!==undefined&&this.innerHTMLSelect!==''){document.getElementById('lbDropDownElemenSelected_'+this.keyId).innerHTML=this.innerHTMLSelect;}
else{document.getElementById('lbDropDownElemenSelected_'+this.keyId).innerHTML=this.innerHTML;}
document.getElementById('lbDropDownElemenSelected_'+this.keyId).value=this.value;if(callback){callback(this.value,idPrincipal,this);}}};divChilds.appendChild(optionsToAdd);}
divElmentSelected.appendChild(divLabel);if(dvBase!==undefined){divLabelTemp.appendChild(divElmentSelected);divLabelTemp.appendChild(divArrowTemp);divPrincipal.appendChild(divLabelTemp);divPrincipal.appendChild(divChildsTemp);dvBase.appendChild(divPrincipal);return dvBase;}
else{divLabelTemp.appendChild(divElmentSelected);divLabelTemp.appendChild(divArrowTemp);divLabelTemp2.appendChild(divLabelTemp);divPrincipal.appendChild(divLabelTemp2);divPrincipal.appendChild(divChilds);return divPrincipal;}}
function openAddBetSlipMessage(idControl,controRef){if(!isMobile.any()){var hasToShow=true;if(controRef==undefined){if($('#aCallSendBetTop').position().top==0){if($('#aCallSendBetTopMobile').position().top!=0){$("#"+idControl).css('top',($('#aCallSendBetTopMobile').position().top+30)+'px');$("#"+idControl).css('left',$('#aCallSendBetTopMobile').position().left+'px');}
else{hasToShow=false;}}
else{$("#"+idControl).css('top',($('#aCallSendBetTop').position().top+30)+'px');$("#"+idControl).css('left',$('#aCallSendBetTop').position().left+'px');}}
else{if(controRef.id=='aCallSendBetTop'||controRef.id=='aCallSendBetTopMobile'){$("#"+idControl).css('top',($(controRef).position().top+30)+'px');$("#"+idControl).css('left',$(controRef).position().left+'px');}
else{$("#"+idControl).css('top',($(controRef).position().top-40)+'px');$("#"+idControl).css('left',$(controRef).position().left+'px');}}
if($("#"+idControl).css('display')!=='none'){closeAddBetSlipMessage(idControl,true);}
if(hasToShow){$("#"+idControl).fadeIn(400,'swing',function(){closeAddBetSlipMessage(idControl,false);});}}}
function closeAddBetSlipMessage(idControl,forceClose){if(!forceClose){$("#"+idControl).fadeOut(3000);}
else{$("#"+idControl).stop();$("#"+idControl).hide();}}
function displaySpaceSectionBetting(){if($('#dvTrackListToBetZoneTop').height()>0){$('#dvSpaceSectionBetting').removeClass('sHideElement');}
else{if($('#dvTrackListToBet').height()>0){$('#dvSpaceSectionBetting').removeClass('sHideElement');}
else{$('#dvSpaceSectionBetting').addClass('sHideElement');}}}
function isInIframe(){try{var value=window.self!==window.top;return value;}catch(e){return false;}}
function replaceAll(value,search,replacement){var target=value;return target.split(search).join(replacement);}
function wheelDistance(evt){if(!evt)evt=event;var w=evt.wheelDelta,d=evt.detail;if(d){if(w)return w/d/40*d>0?1:-1;else return-d/3;}else return w/120;}
function wheelDirection(evt){if(!evt)evt=event;var direction=0;if(evt.detail!=undefined||evt.wheelDelta!=undefined){direction=(evt.detail<0||evt.wheelDelta>0)?1:-1;}
else{evt=evt.originalEvent;direction=(evt.detail<0||evt.wheelDelta>0)?1:-1;}
return direction;}
function checkIEVersion(){var version=detectIE();if(version<10){alert("You should upgrade your Windows Internet Explorer "+version);}
else{alert("Current version "+version);}}
function detectIE(){var ua=window.navigator.userAgent;var msie=ua.indexOf('MSIE ');if(msie>0){return parseInt(ua.substring(msie+5,ua.indexOf('.',msie)),10);}
var trident=ua.indexOf('Trident/');if(trident>0){var rv=ua.indexOf('rv:');return parseInt(ua.substring(rv+3,ua.indexOf('.',rv)),10);}
var edge=ua.indexOf('Edge/');if(edge>0){return parseInt(ua.substring(edge+5,ua.indexOf('.',edge)),10);}
return 0;}
function SaveRememberBetSessionStorage(information){try{var infoDeco=JSON.parse(information);for(var infoDecoPos=0;infoDecoPos<infoDeco.length;infoDecoPos++){sessionStorage.setItem(infoDeco[infoDecoPos].Key,infoDeco[infoDecoPos].KeyValue);}}catch(e){console.log(e);}}
function LoadRememberBetSessionStorage(){var rememberedBetsDetailList=Array();$.each(sessionStorage,function(key,value){if(key.indexOf("BOSS_")>=0&&key.indexOf("BOSS_addInformation")!=0){var index=rememberedBetsDetailList.length;rememberedBetsDetailList[index]=new Object();rememberedBetsDetailList[index].Key=key.replace("BOSS_","");rememberedBetsDetailList[index].KeyValue=value;}});var addInformation=GetAddInformationBetSessionStorage();var response=Racebook.LoadRememberBet(JSON.stringify(rememberedBetsDetailList),_sessionSSC,_token,addInformation);if(response.error!==null){return;}
eval(response.value);response=null;}
function ClearRememberBetSessionStorage(){try{$.each(sessionStorage,function(key,value){if(key.indexOf("BOSS_")>=0&&key.indexOf("BOSS_addInformation")!=0){sessionStorage.removeItem(key);}});console.log('ClearRememberBetSessionStorage');}
catch(e){_BOSS_addInformation='';}}
function SaveAddInformationBetSessionStorage(information){try{sessionStorage.setItem("BOSS_addInformation",information);}catch(e){_BOSS_addInformation=information;}}
function GetAddInformationBetSessionStorage(){var valueToReturn="";try{$.each(sessionStorage,function(key,value){if(key.indexOf("BOSS_addInformation")>=0){valueToReturn=value;}});}
catch(e){valueToReturn=_BOSS_addInformation;}
return valueToReturn;}
function SetText(selector,value){if(Encoder.hasEncoded(value)){$(selector).text(Encoder.htmlDecode(value));}
else{$(selector).text(value);}}
function SetTitle(selector,value){if(value==''){$(selector).removeAttr('title');}
else{$(selector).attr('title',value);}}
function HideElement(selector){$(selector).hide();}
function AddClassElement(selector,value){$(selector).addClass(value);}
function AddClickEvent(selector,action){$(selector).attr('onclick',action);}
function SetPlaceHolder(selector,value){$(selector).attr("placeholder",value);}
function SetValue(selector,value){if('#spComments'==selector){var textarea=document.getElementById('spComments');_originalComment=value;textarea.setAttribute('style','');textarea.value="";$(selector).val(value);}
else{if(Encoder.hasEncoded(value)){$(selector).val(Encoder.htmlDecode(value));}
else{$(selector).val(value);}}}
function SetVisible(selector,value){if(value=="0"){$(selector).css('visibility','hidden');$(selector).hide();}
else{$(selector).show();$(selector).css('visibility','visible');}}
function precisionRound(number,precision){var factor=Math.pow(10,precision);return Math.round(parseFloat(number)*factor)/factor;}