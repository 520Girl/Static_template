function GetRoundValues(Value,DivideBy){return Math.floor(Value/DivideBy);}
function TrimNumber(value){if(/^(\d|\.)+$/.test(value)){return parseFloat(value).toString();}
else{return "0";}}
function Trim(str){return str.replace(/^\s*|\s*$/g,"");}
function RefreshOdds(raceId){}
function RefreshMTP(controlName,strMessage,autoRefresh){if((_WagerInfo==null)||(_WagerInfo.Races[currentRaceIndex]==null)){setTimeout(function(){RefreshMTP(controlName,strMessage,autoRefresh);},1000);return;}
var css,cmm,ch,cd,disp='',currentControl,seconds,_className="",_divClassName="";var divControl;var isValidPost=false;_secondsOnClient++;seconds=_WagerInfo.Races[currentRaceIndex].MTP-_secondsOnClient;css=seconds;isValidPost=(css<=0);if(css>=60){cmm=GetRoundValues(css,60);css=css-(cmm*60);if(cmm>=60){ch=GetRoundValues(cmm,60);cmm=cmm-(ch*60);if(ch>=24){cd=GetRoundValues(ch,24);ch=ch-(cd*24);}}}
if(cd>0)disp=disp+' '+((cd<=9)?('0'+cd):cd)+'d';if(ch>0)disp=disp+' '+((ch<=9)?('0'+ch):ch)+'h';if(cmm>0)disp=disp+' '+((cmm<=9)?('0'+cmm):cmm)+'m';if(css>=0)disp=disp+' '+((css<=9)?('0'+css):css)+'s';currentControl=returnObjById(controlName);divControl=returnObjById('div'+controlName);if(currentControl){if(isValidPost){disp=strMessage;}
else{$('#descriptionPool').show();$('.sTblBorderPoolLimits').show();$('.sDvButtonAddBetSlip').show();}
$('#ltrRaceIn').show();$('#PostTime').text(_WagerInfo.Races[currentRaceIndex].PostTime);if(_WagerInfo.Races[currentRaceIndex].Status==0){if(disp==messages.MTP_Reached){$('#ltrRaceIn').hide();}
$(currentControl).text(disp);currentControl.className="sLblMTP";if(divControl){divControl.className="sDvMTPBackground";}
if(seconds<=300){$('#dvRacePostTimeInformation .sDvTracksUpcomingFeaturedMTP').addClass('sDvTracksUpcomingFeaturedMTPNearPost');if(seconds<=60){if(!$('#dvRacePostTimeInformation .sDvTracksUpcomingFeaturedMTP').hasClass('sDvTracksUpcomingFeaturedMTPBlinking')){$('#dvRacePostTimeInformation .sDvTracksUpcomingFeaturedMTP').addClass('sDvTracksUpcomingFeaturedMTPBlinking');}}}
else{$('#dvRacePostTimeInformation .sDvTracksUpcomingFeaturedMTP').removeClass('sDvTracksUpcomingFeaturedMTPNearPost');$('#dvRacePostTimeInformation .sDvTracksUpcomingFeaturedMTP').removeClass('sDvTracksUpcomingFeaturedMTPBlinking');}}
else{$('#dvRacePostTimeInformation .sDvTracksUpcomingFeaturedMTP').addClass('sDvTracksUpcomingFeaturedMTPNearPost');currentControl.className="sLblMTP";if(divControl){divControl.className="sDvMTPBackground";}
$(currentControl).text(messages.RaceClose);}}
if(autoRefresh){setTimeout(function(){RefreshMTP(controlName,strMessage,autoRefresh);},1000);}}
function ToDate(strDate){var regularExp,regularExp2,year,strMonth,month,day,dateValue;regularExp=/^([a-zA-Z]{3})\s(\d{2}),\s(\d{2})$/;regularExp2=/^(\d{4})\/(\d{2})\/(\d{2})$/;if(regularExp.test(strDate)&&IsDate(strDate,false))
{year=new String(RegExp.$4);strMonth=new String(RegExp.$2);month=GetMonthIndex(strMonth);day=new String(RegExp.$3);var today=new Date();var thisYear=new String(today.getFullYear());if(year.length==2){if(year>50){year=String(Number(thisYear.substring(0,2))-1)+year;}
else{year=thisYear.substring(0,2)+year;}}
dateValue=new Date(year,month,day);}
else if(regularExp2.test(strDate)&&IsDate(strDate,false)){year=new String(RegExp.$1);month=new String(RegExp.$2);day=new String(RegExp.$3);dateValue=new Date(year,month-1,day);}
return dateValue;}
function ToDateTime(strDate){var regularExp,regularExp2,year,strMonth,month,day,hour,minutes,seconds,dateValue;regularExp=/^([a-zA-Z]{3})\s(\d{2}),\s(\d{2})\s(\d{2}):(\d{2}):(\d{2})$/;regularExp2=/^(\d{4})\/(\d{2})\/(\d{2})\s(\d{2}):(\d{2}):(\d{2})$/;if(regularExp.test(strDate)&&IsDate(strDate,true))
{year=new String(RegExp.$4);strMonth=new String(RegExp.$2);month=GetMonthIndex(strMonth);day=new String(RegExp.$3);hour=new String(RegExp.$5);minutes=new String(RegExp.$6);seconds=new String(RegExp.$7);var today=new Date();var thisYear=new String(today.getFullYear());if(year.length==2){if(year>50){year=String(Number(thisYear.substring(0,2))-1)+year;}
else{year=thisYear.substring(0,2)+year;}}
dateValue=new Date(year,month,day,hour,minutes,seconds);}
else if(regularExp2.test(strDate)&&IsDate(strDate,true)){year=new String(RegExp.$1);month=new String(RegExp.$2);day=new String(RegExp.$3);hour=new String(RegExp.$4);minutes=new String(RegExp.$5);seconds=new String(RegExp.$6);dateValue=new Date(year,month-1,day,hour,minutes,seconds);}
return dateValue;}
var spinnerList=new Array();function StartSpin(targetId,topPosition,leftPosition,idRotation){var index=spinnerList.length;var valueTop;var valueLeft;if(topPosition==0){valueTop='auto';}
else{valueTop=topPosition;}
if(leftPosition==0){valueLeft='auto';}
else{valueLeft=leftPosition;}
var opts={lines:12,length:7,width:4,radius:10,corners:1,rotate:0,color:'#000',speed:1,trail:60,shadow:false,hwaccel:false,className:'spinner'+targetId,zIndex:2e9,top:valueTop,left:valueLeft};var target=document.getElementById(targetId);var indexFinded=FindSpinner('spinner'+targetId+idRotation);if(indexFinded!=null){spinnerList[indexFinded]=new Object;spinnerList[indexFinded].Spinner=new Spinner(opts).spin(target);spinnerList[indexFinded].SpinnerId='spinner'+targetId+idRotation;}
else{spinnerList[index]=new Object;spinnerList[index].Spinner=new Spinner(opts).spin(target);spinnerList[index].SpinnerId='spinner'+targetId+idRotation;}}
function StopSpin(idToShow,targetId,idRotation){setTimeout(function(){var indexFinded=FindSpinner('spinner'+targetId+idRotation);if(indexFinded!=null){spinnerList[indexFinded].Spinner.stop();}
if(idToShow!=''){$('#'+idToShow).fadeIn('100');}},1000);;}
function FindSpinner(idToFind){var objectFinded=null;for(var fs=0;fs<spinnerList.length;fs++){if(spinnerList[fs].SpinnerId==idToFind){objectFinded=fs;break;}}
return objectFinded;}
var listControlsId;function AccountInformationId(userNameId,passwordId,availableId,balanceId,pendingId,availableIdForHeader){listControlsId=new Object();listControlsId.UserNameId=userNameId;listControlsId.PasswordId=passwordId;listControlsId.AvailableId=availableId;listControlsId.BalanceId=balanceId;listControlsId.PendingId=pendingId;listControlsId.AvailableIdForHeader=availableIdForHeader;}
var debugNavigator=false;function RequiresIframeScrollFix(){try{if(debugNavigator)
alert(navigator.userAgent);var is_safari=navigator.userAgent.indexOf("Safari")>-1;var is_chrome=navigator.userAgent.indexOf('Chrome')>-1;if((is_chrome)&&(is_safari)){is_safari=false;}
if(is_safari&&inIframe()&&(navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)))
return true;else
return false;}catch(e){alert(e.message);}}
function inIframe(){try{return window.self!==window.top;}catch(e){return true;}}
function scrollTopSafari(){if(RequiresIframeScrollFix()){try{window.parent.postMessage($("#dvRootMobile")[0].getBoundingClientRect().top,"*");}catch(e){$("#dvRootMobile")[0].scrollIntoView(true);}}
else{$("#dvRootMobile")[0].scrollIntoView(true);}}
function scrollToTop(){if(inIframe()&&'parentIFrame'in window){try{parentIFrame.scrollToOffset(0,0);}catch(e){try{window.parent.scroll(0,0);}catch(e){}
try{$.mobile.silentScroll(0);}catch(e){}
try{$("#dvRootMobile")[0].scrollIntoView(true);}catch(e){}
try{scrollTopSafari();}catch(e){}}}
else{try{window.scroll(0,0);}catch(e){}
try{$.mobile.silentScroll(0);}catch(e){}
try{$("#dvRootMobile")[0].scrollIntoView(true);}catch(e){}
try{scrollTopSafari();}catch(e){}}}
function sendTrackSelect(){try{if(window.parent){let info="boss.trackselected:"+_trackNameSelect.value+'*'+_trackEvent+'*'+_raceId;window.parent.postMessage(info,"*");}}
catch(ex){console.log("Problem notifying track selected to parent windows. "+e);}}