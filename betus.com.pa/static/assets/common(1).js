function SetSessionTimeout(timeoutLength){var timeoutInstance;var redirectLogout=function(){window.parent.location.href="https://www.betus.com.pa/authentication/logout";};timeoutInstance=setTimeout(redirectLogout,timeoutLength);}
function showWait(){var uploaddocs=$get('m_m_M_m_uploadDocs');var regexvalidator=$get('m_m_M_m_regexvalidator');var reqfieldvalidator=$get('m_m_M_m_reqfieldvalidator');var ddlreqfieldvalidator=$get('m_m_M_m_ddlreqfieldvalidator');var updateprogress=$get('m_m_M_m_UpdateProgress1');var lblMessage=$get('m_m_M_m_lblMessage');var ddlDocumentTypeID=$get('m_m_M_m_ddlDocumentTypeID');if(ddlDocumentTypeID.value=='-1'){ddlreqfieldvalidator.isvalid=false;}
if((uploaddocs.value.length>0)&&(regexvalidator.isvalid)&&(reqfieldvalidator.isvalid)&&(ddlreqfieldvalidator.isvalid)){updateprogress.style.display='block';}
else{if(lblMessage!=null){lblMessage.style.visibility="hidden";}}}
if(typeof jQuery!='undefined'){jQuery.preloadImages=function(){for(var i=0;i<arguments.length;i++){jQuery("<img>").attr("src",arguments[i]);}}
jQuery(document).ready(function(){});}
function FindElement(strElid,objForm){var formElements=objForm.elements;var strID="";var objEl=null;for(i=0;i<formElements.length;i++){strID=formElements[i].id.toUpperCase();if(strID.indexOf(strElid)!=-1)
{objEl=formElements[i];break;}}
return objEl;}
function Check4NaN(src,arg){var val=new String(arg.Value)
val=val.replace(".","/");if(isNaN(val))
arg.IsValid=false;}
function FindControl(ctlName,tagName){var ctl=null;if(tagName==null)
tagName="input";var controls=document.getElementsByTagName(tagName);if(controls){for(var i=0;i<controls.length;i++){if(controls[i].id.lastIndexOf(ctlName)==controls[i].id.length-ctlName.length&&controls[i].id.lastIndexOf(ctlName)>=0){ctl=controls[i];break;}}}
return ctl;}
function FilterKey(e){if(!e)e=window.event;var keyCode=e.which?e.which:e.keyCode;var validKey=(keyCode>=48&&keyCode<=57)||(keyCode==0)||(keyCode==8)||(keyCode==9)||(keyCode==13)||(keyCode==27)||(keyCode==37)||(keyCode==39)||(keyCode==46)||(keyCode==35)||(keyCode==36)||(keyCode==116);if(window.event)
e.returnValue=validKey;else{if(validKey)
return true;else{e.preventDefault();return false;}}}
function trim(s){return s.replace(/^\s*|\s*$/g,"");}
function EnableProceed(ctlName){var btnProceed=FindControl(ctlName);if(btnProceed.disabled)
btnProceed.disabled=false;else
btnProceed.disabled=true;return true;}
function GetControlByName($controlname){return(document.all?document.all[$controlname]:document.getElementById($controlname));}
function extractElements(parentContainer,tagName,cssClass){var ItemsCount=parentContainer.getElementsByTagName(tagName);var ExtractedItems=new Array();var Counter=0;for(x=0;x<ItemsCount.length;x++){if(ItemsCount[x].className.match(cssClass)!=null){ExtractedItems[Counter]=ItemsCount[x];Counter++;}}
return ExtractedItems;}
function toggleCollapse(button,block,show,hide){var toggleButton=button;var panelElm=document.getElementById(block);var textShow=show;var textHide=hide;if((panelElm.style.display!="none")&&(panelElm)){panelElm.style.display="none";toggleButton.className="collapsed"
if(textShow){toggleButton.innerHTML=textShow;}}else if(panelElm){panelElm.style.display="block";toggleButton.className="expanded";if(textHide){toggleButton.innerHTML=textHide;}}}
function changeClass(elem,className1,className2){elem.className=(elem.className==className1)?className2:className1;}
function changeClassID(elementID,className1,className2){var elem=document.getElementById(elementID);elem.className=(elem.className==className1)?className2:className1;}
function ClearDefaultText($input,$default){if(String($input.value).trim()==$default)
$input.value='';$input.style.color="#000000";}
function InitDefaultText($input,$default){if(String($input.value).trim().length==0)
$input.value=$default;$input.style.color="";}
var $PopWindow=null;function popWindow(winLocation,winName,winWidth,winHeight){winFeatures="width="+winWidth+",height="+winHeight+",toolbar=no,location=no,resizable=yes,scrollbars=yes,status=false";if($PopWindow==null||$PopWindow.closed){$PopWindow=window.open(winLocation,winName,winFeatures);}
else{$PopWindow.focus();}}
var menuTimer;function hideMenu(parentDivID){var subMenu=document.all?document.all[parentDivID+"-sub"]:document.getElementById(parentDivID+"-sub");var menuButton=document.all?document.all[parentDivID+"-button"]:document.getElementById(parentDivID+"-button");var parentDiv=document.all?document.all[parentDivID]:document.getElementById(parentDivID);if((subMenu)&&(menuButton)&&(parentDiv)){if(menuTimer){clearTimeout(menuTimer);menuTimer=null;}
menuButton.className="heading-link";parentDiv.className="toolbar-menu";subMenu.style.display="none";}}
function MenuTimeout(parentDivID){var subMenu=document.all?document.all[parentDivID+"-sub"]:document.getElementById(parentDivID+"-sub");var menuButton=document.all?document.all[parentDivID+"-button"]:document.getElementById(parentDivID+"-button");var parentDiv=document.all?document.all[parentDivID]:document.getElementById(parentDivID);if((subMenu)&&(parentDiv)){if(menuTimer){clearTimeout(menuTimer);menuTimer=null;}
myInstance="hideMenu('"+parentDivID+"');";menuTimer=setTimeout(myInstance,50);}}
function showMenu(parentDivID){var subMenu=document.all?document.all[parentDivID+"-sub"]:document.getElementById(parentDivID+"-sub");var menuButton=document.all?document.all[parentDivID+"-button"]:document.getElementById(parentDivID+"-button");var parentDiv=document.all?document.all[parentDivID]:document.getElementById(parentDivID);var promoDiv=document.all?document.all["promotions-div"]:document.getElementById("promotions-div");if((subMenu)&&(menuButton)&&(parentDiv)){if(menuTimer){clearTimeout(menuTimer);menuTimer=null;}
subMenu.style.display="block";menuButton.className="heading-link-over";parentDiv.className="toolbar-menu-over";}}
function loginToggle(loginDivID,linkElmID){loginDiv=document.all?document.all[loginDivID]:document.getElementById(loginDivID);linkElm=document.all?document.all[linkElmID]:document.getElementById(linkElmID);loginSection=document.all?document.all["login-section"]:document.getElementById("login-section");promoDiv=document.all?document.all["menu-promo"]:document.getElementById("menu-promo");if(loginDiv.style.display!="none"){loginDiv.style.display="none";linkElm.style.display="block";}else{loginDiv.style.display="block";linkElm.style.display="none";}}
function ShowandHide(div1ID,div2ID){if(document.getElementById(div1ID).style.display!='none'){hidediv(div1ID);showdiv(div2ID);}
else{showdiv(div1ID);hidediv(div2ID);}}
function hidediv(id){if(document.getElementById)
{document.getElementById(id).style.display='none';}
else{if(document.layers)
{document.id.display='none';}
else
{document.all.id.style.display='none';}}}
function showdiv(id){if(document.getElementById)
{document.getElementById(id).style.display='block';}
else{if(document.layers)
{document.id.display='block';}
else
{document.all.id.style.display='block';}}}
function ClearDefaultText(ctrl,text){if(ctrl.value&&ctrl.value==text){ctrl.value="";ctrl.style.color="#000000";}}
function InitDefaultText(ctrl,text){if(ctrl.value==""){ctrl.value=text;ctrl.style.color="";if(text=="Password"){ShowPasswordText(ctrl);}}}
function ClearPasswordText(ctrl1,ctrl2){hidediv(ctrl1);showdiv(ctrl2);GetMyElementByID(ctrl2).focus();}
function InitPasswordText(ctrl1,ctrl2){}
function GetMyElementByID(id){if(document.getElementById)
{return document.getElementById(id);}
else{if(document.layers)
{return document.id;}
else
{return document.all.id;}}}
function fireClickEventByName($controlName){var $control=document.all?document.all[$controlName]:document.getElementById($controlName);fireClickEvent($control);}
function fireClickEvent($control){if(document.all){$control.click();}
else{var $clickEvent=window.document.createEvent("MouseEvent");$clickEvent.initEvent("click",true,true);$control.dispatchEvent($clickEvent);}}
function EnterPressed($buttonSubmit,$event){var $res=true;if($buttonSubmit!=''&&$buttonSubmit!=null){var $key;if(!$event){$event=window.event;}
$key=$event.keyCode?$event.keyCode:$event.which;if($key==13){var $controlSubmit=document.all?document.all[$buttonSubmit]:document.getElementById($buttonSubmit);fireClickEvent($controlSubmit);return false;}}
return $res;}
function ShowHidePanel(panel,link){if(document.getElementById(panel).style.display=="none"){document.getElementById(panel).style.display="block";document.getElementById(link).innerHTML='&#187';}
else{document.getElementById(panel).style.display="none";document.getElementById(link).innerHTML='&#171';}}
function HideContent(d){if(d.length<1){return;}
document.getElementById(d).style.display="none";}
function ShowContent(d){if(d.length<1){return;}
var dd=document.getElementById(d);dd.style.display="block";}
function adjustTextHeight(elem,height){var h=height;elem.style.height=h+'px';}
function clearText(elem,text){if(elem.value==text){elem.value="";elem.className="focused txtbox";}}
function resetText(elem,text){if(elem.value==""){elem.value=text;elem.className="unfocused txtbox";}}
function hideNonAffContent(hideDiv){if(($IsAffiliate!=null)&&($IsAffiliate!="")&&($IsAffiliate=="true")){if(hideDiv){document.getElementById(hideDiv).style.display="none";}}}
function Ie6Check(){if((typeof document.body.style.maxHeight!="undefined")&&(window.XMLHttpRequest)){return true;}
else{return false;}}
function GetYPosition(){var positionY=0;if(typeof(window.pageYOffset)=='number'){positionY=window.pageYOffset;}
else if(document.body&&document.body.scrollTop){positionY=document.body.scrollTop;}
else if(document.documentElement&&document.documentElement.scrollTop){positionY=document.documentElement.scrollTop;}
return[positionY];}
function openLiveDealer(){window.open("https://casinogames.betus.com.pa/LiveDealer.aspx","BetUS Live Casino","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=1015, height=754");}
function openLiveDealerLogin(){window.open("https://casinogames.betus.com.pa/LiveDealer.aspx","BetUS Live Casino","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=1015, height=754");window.location.href="https://www.betus.com.pa/";}
function openViGLiveDealer(){window.open("https://casinogames.betus.com.pa/LiveDealer.aspx?version=viggames","BetUS Live Casino","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=1015, height=754");}