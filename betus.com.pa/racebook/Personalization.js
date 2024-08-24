function Personalization(idInputPagePersonalization){var _Perzonalization="1,BOSS";var isCallCenter;var isPlayForFun;var clientPersonalization;this.ShowInformactionPersonalization=showInformactionPersonalizationMenu;this.LoadInformationPersonlization=loadInformationPersonlization;this.ViewInformationBetZone=viewInformationBetZone;if(document.getElementById(idInputPagePersonalization)!=null){_Perzonalization=document.getElementById(idInputPagePersonalization).value}
isCallCenter=_Perzonalization.substring(0,1);isPlayForFun=_Perzonalization.substring(1,2);clientPersonalization=_Perzonalization.substring(2,_Perzonalization.length);function showInformactionPersonalizationMenu(){switch(clientPersonalization){case "BOSS":if(isCallCenter=="1"){setStyleAttribute("trPassword","display","");}
break;case "Alea":if(isCallCenter=="1"){}
else{setStyleAttribute("tblMenu","align","right");setStyleAttribute("tblMenuLogo","display","none");setStyleAttribute("trUsername","display","none");setStyleAttribute("trPassword","display","none");setStyleAttribute("trBalance","display","none");setStyleAttribute("trPending","display","none");if(isPlayForFun=="0"){setStyleAttribute("trMessage","display","none");setStyleAttribute("trAvailable","display","");}
else{setStyleAttribute("trMessage","display","");setStyleAttribute("trAvailable","display","none");}}
break;case "BetPhoenix":if(isCallCenter=="1"){setStyleAttribute("trPassword","display","");setStyleAttribute("trBalance","display","none");setStyleAttribute("trMessage","display","none");}
else{setStyleAttribute("trPassword","display","none");setStyleAttribute("trBalance","display","none");}
break;case "IDS":case "ASI":if(isCallCenter=="1"){setStyleAttribute("trBalance","display","none");}
else{setStyleAttribute("trBalance","display","none");}
break;}}
function loadInformationPersonlization(){switch(clientPersonalization){case "Alea":break;case "BetPhoenix":if(isCallCenter=="1"){setStyleAttribute("trPlayerCodePassLabelInformation","display","none");setStyleAttribute("tdNickNameInformation","display","none");setStyleAttribute("tblBalanceInformation","display","none");setStyleAttribute("trBalanceWeekSBInformation","display","none");setStyleAttribute("trBalanceWeekCAInformation","display","none");}
break;case "IDS":case "ASI":break;}}
function viewInformationBetZone(){switch(clientPersonalization){case "Alea":if(isCallCenter=="1"){}
else{setStyleAttribute("trBetZoneInfomation","display","none");}
break;}}}
$(document).ready(function(){if(sportsInteractionPersonalization==personalization){try{document.domain='sportsinteraction.com';}catch(e){}
$('#dvCartBet').text($('#dvTblBetSplipCart .sLblBetSlip').text());}})