var N;var _ArrayRaceList=new Array();var _ArrayRaceParlayList=new Array();var _selectedControl=null;var ob;var over=false;var _stateId="";var _cityId="";var _weatherURL="";var _weatherIMG="";var _TrackType="";var _showWeatherSticker=false;var _weatherStickerState=false;var _showWeatherSticker_Colapsed=false;var _betPlaced=false;var _featuredRaceId='';var _trackEvent='';var _trackCode='';var _trackCodeStr='';var _raceId='';var _trackType='';var _poolCodeSelected='';var _hasAvailableRaceForToday=true;var _loadRaceForResult=false;var ddTrackEvents;var ddTrackEventsSelecteIndex;var ddTrackEventsLocalized;var _controlElementAddBetCart;var _sendBetFromMobile=false;var BetZoneLayout=new Object();BetZoneLayout.Wagering=0;BetZoneLayout.Ticket=1;BetZoneLayout.Confirmation=2;BetZoneLayout.Error=3;function ClearBetzoneFields(){var ctrlWin,ctrlPlace,ctrlShow;ctrlWin=returnObjById("txtWinAmount");ctrlPlace=returnObjById("txtPlaceAmount");ctrlShow=returnObjById("txtShowAmount");if(ctrlWin){ctrlWin.value='';}
if(ctrlPlace){ctrlPlace.value='';}
if(ctrlShow){ctrlShow.value='';}}
function LoadWeatherInformation(isLoading){var ctrlWeatherIMG=returnObjById('_WeatherSticker_weatherIMG');var ctrlWeatherTable=returnObjById('tblWeatherSticker');var ctrlWeatherTableJquery='#tblWeatherSticker';if(_weatherURL.length>0&&_weatherIMG.length>0){if(_weatherStickerState){if(personalization!==aleaPersonalization){setObjAttribute("_WeatherSticker_weatherURL","href",_weatherURL);}
if(ctrlWeatherIMG){setObjAttribute(ctrlWeatherIMG,"src",_weatherIMG);ctrlWeatherIMG.style.display='';}
$(ctrlWeatherTableJquery).show("slow");}
else{$(ctrlWeatherTableJquery).hide("slow");}
_weatherStickerState=!_weatherStickerState;}
else{if(ctrlWeatherTable){ctrlWeatherTable.style.display='none';$(ctrlWeatherTableJquery).hide("slow");}
if(!isLoading){alert('There is not information of weather time for this track.');}}}
function getRaceIndex(controlName,raceList,prefixName){var i=0;for(i=0;i<raceList.length;i++){if(prefixName+i===controlName){return i;}}
return-1;}
function CallRefreshOdds(){window.status="RefreshOdds";var tlbRaces=returnObjById('dtlRaces');var rblPools=returnObjById('dvPools');if(rblPools!==null){return;}
var racelist="";for(i=0;i<_ArrayRaceList.length;i++){racelist+=(_ArrayRaceList[i]-_incremetRaceIdIn)+",";}
if(racelist.length>0){racelist=racelist.substring(0,racelist.length-1);}
var postTime;postTime=returnObjById("ddEvents");if(postTime===null){return false;}
var addInformation=GetAddInformationBetSessionStorage();Racebook.RefreshOdds(_trackCode,postTime.value,racelist,_sessionSSC,_token,addInformation,RefreshOdds_CallBack);setTimeout(function(){CallRefreshOdds();},10000);}
function RefreshOdds_CallBack(response){if(response.error!==null){alert("RefreshOdds_CallBack :: "+response.error);return;}
try{window.status="RefreshOdds_CallBack";eval(response.value);if(_WagerInfo){if(_WagerInfo.Races[currentRaceIndex]){RefreshOdds(_WagerInfo.Races[currentRaceIndex].RaceId);}}}catch(ex){return;}}
function CallSendBetMobile(controlElement){let amountAvailable=false;if($('#_PoolTypeOnClient').val()!=='0'&&TrimNumber($('#betAmount').val())!=="0"){amountAvailable=true;}
if($('#_PoolTypeOnClient').val()==='0'){amountAvailable=true;}
if(controlElement===undefined){controlElement=document.getElementById('aCallSendBetTop');}
if($(controlElement).hasClass('aSendBetEnable')&&amountAvailable){if($('#_modeBetting').val()==='0'){if(!_playerWindowsIsOpen&&!_isAuthenticated){OpenDialogToSignInPlayer();}
else{CallSendBetToBetSlip(controlElement);}}
else{CallSendBetToBetSlip(controlElement);}}
else{$(controlElement).removeClass('aSendBetEnable');}}
function CallSendBetToBetSlip(controlElement){var _SelfExclusionRacebook=returnObjById("_SelfExclusionRacebook");if(_SelfExclusionRacebook&&_SelfExclusionRacebook.value!==""){SelfExclusionAction(_SelfExclusionRacebook.value);return;}
_sendBetFromMobile=true;if(controlElement!==undefined){ShowWaitDialog(true,$(controlElement).offset().top,$(controlElement).offset().left+$(controlElement).width()/2);}
else{ShowWaitDialog(true,$('#aCallSendBetTop').offset().top,$('#aCallSendBetTop').offset().left+$('#aCallSendBetTop').width()/2);}
if(isMobile.any()){scrollToTop();}
CallSendBet(controlElement);}
function CallSendBet(controlElement){if(_betPlaced){return;}
else{_betPlaced=true;}
if(setWagerInformation()){var raceCollection=returnObjById("_RaceCollectionOnClient");var trackName=$('#_trackNameSelect').val();var poolType=returnObjById("_PoolTypeOnClient");var poolCode=returnObjById("_PoolCodeOnClient");var runnersCollection=returnObjById("_RunnersCollectionOnClient");var postTime=returnObjById("dvTrackMeetings");var betAmount=returnObjById("betAmount");var txtWinAmount=returnObjById("txtWinAmount");var txtPlaceAmount=returnObjById("txtPlaceAmount");var txtShowAmount=returnObjById("txtShowAmount");var ckbBox=returnObjById("ckbBox");var ckbBoxKey=returnObjById("ckbBoxKey");var txtHour=returnObjById("txtHour");var txtMin=returnObjById("txtMin");var txtSec=returnObjById("txtSec");var ddlTime=returnObjById("ddlTime");if(raceCollection===null||poolType===null||poolCode===null||runnersCollection===null||postTime===null||betAmount===null){_betPlaced=false;alert(messages.SendBet+messages._1006);return false;}
var box=false;if(ckbBox){if(ckbBox.checked){box=true;}}
var boxWithKey=false;if(ckbBoxKey){if(ckbBoxKey.checked){boxWithKey=true;}}
var winAmountOnClient="0";var placeAmountOnClient="0";var showAmountOnClient="0";if(txtWinAmount){winAmountOnClient=txtWinAmount.value;}
if(txtPlaceAmount){placeAmountOnClient=txtPlaceAmount.value;}
if(txtShowAmount){showAmountOnClient=txtShowAmount.value;}
setStyleAttribute('divWinParlay',"display","none");if(txtHour){hours=txtHour.value;}
if(txtMin){minutes=txtMin.value;}
if(txtSec){seconds=txtSec.value;}
if(ddlTime){dayTime=ddlTime.value;}
var objectShoppingCart;if(typeof shoppingCartEdit!=="undefined"&&shoppingCartEdit.IsEditMode()){objectShoppingCart=shoppingCartEditNewBet;}
else{objectShoppingCart=shoppingCart;}
if(objectShoppingCart===shoppingCart){if($('#_modeBetting').val()==='0'&&!objectShoppingCart.IsEditMode()){shoppingCart.RestartBetList();}}
var indexIdShoppingCart=objectShoppingCart.IsEditMode()?objectShoppingCart.EditPalayerIndexBetId():objectShoppingCart.NextIndexBet();var poolTypeValue=poolType.value;poolCode=poolCode.value;if(objectShoppingCart.IsEditMode()&&_parlayType==ParlayType.MultiTrackNormal&&objectShoppingCart.GetInformaionTicketEdit().PoolCode>=1000){poolTypeValue=$('#_hdnParlayPoolTypeSelected').val();poolCode=$('#_hdnParlayPoolTypeSelected').val();}
_controlElementAddBetCart=controlElement;let wagerEditId='';let amountEdit=0;if(typeof shoppingCartEdit!=="undefined"&&shoppingCartEdit.IsEditMode()){wagerEditId=shoppingCartEdit.GetInformaionTicketEdit().TicketConfirmation;amountEdit=shoppingCartEdit.GetInformaionTicketEdit().TotalWager;}
var addInformation=GetAddInformationBetSessionStorage();if(parseInt(poolTypeValue,10)<1000){Racebook.AddBetToCart(_trackCode,_trackEvent,runnersCollection.value,raceCollection.value,poolTypeValue,poolCode,betAmount.value,winAmountOnClient,placeAmountOnClient,showAmountOnClient,box,boxWithKey,'','','','',trackName,indexIdShoppingCart,wagerEditId,amountEdit,_sessionSSC,_token,addInformation,AddBetToCart_CallBack);}
else{if(typeof shoppingCartEdit!=="undefined"&&shoppingCartEdit.IsEditMode()){if(objectShoppingCart.ValidNewEntryParlay(_trackEvent,_trackCode,raceCollection.value,runnersCollection.value,poolCode)){let addInformation=GetAddInformationBetSessionStorage();Racebook.AddBetToCart(_trackCode,_trackEvent,runnersCollection.value,raceCollection.value,poolTypeValue,poolCode,betAmount.value,winAmountOnClient,placeAmountOnClient,showAmountOnClient,box,boxWithKey,'','','','',trackName,indexIdShoppingCart,wagerEditId,amountEdit,_sessionSSC,_token,addInformation,AddBetToCart_CallBack);}
else{$('#ckbBox').attr('checked',false);$('#ckbBoxKey').attr('checked',false);if(_parlayType==ParlayType.MultiTrackNormal&&$('#_hdnParlayPoolTypeSelected').val()!='-1'){hadSendBetToCart=false;$('#dvChdOp_dvPoolParlaySelect_'+$('#_hdnParlayPoolTypeSelected').val()).click();objectShoppingCart.ShowHideBlockBetSlip(shoppingCart.EditPalayerIndexBetId(),true);}
else{hadSendBetToCart=true;$('#dvPools :input:checked').click();}
if(_modePage!=0){if($('#dvBetSliptZone').css('display')=='none'){$("#dvTblBetSplipCartMobile").click();}}
_betPlaced=false;ShowWaitDialog(false);}}
else{shoppingCart.ParlayStartNew();let poolTypeParlay=1000;for(let ict=0;ict<controlTicket.TicketList.length;ict++){let ct=controlTicket.TicketList[ict];if(ct!==undefined){for(let ib=0;ib<ct.BetList.length;ib++){let b=ct.BetList[ib];if(b!==undefined){if(b.PoolTypeId>=1000){poolTypeParlay=b.PoolTypeId;let trackEventIdParlayEntrie;let trackIdParlayEntrie;let raceIdParlayEntrie;let runnerParlayEntrie;let trackNameParlayEntrie;let mkp=b.GetMeetingList();for(let iml=0;iml<mkp.length;iml++){runnerParlayEntrie='';for(let ibd=0;ibd<b.BetDetailList.length;ibd++){let bd=b.BetDetailList[ibd];if(bd!==undefined){let currentIdEvent=bd.TrackId+','+bd.TrackEventId+","+bd.RaceId;if(mkp[iml]===currentIdEvent){trackIdParlayEntrie=bd.TrackId;trackEventIdParlayEntrie=bd.TrackEventId;raceIdParlayEntrie=bd.RaceId;trackNameParlayEntrie=bd.TrackName;if(runnerParlayEntrie!==''){runnerParlayEntrie+='/pa/';}
runnerParlayEntrie+=bd.RunnerProgramNumber;if(bd.RunnerPostition===1){runnerParlayEntrie+='W';}
if(bd.RunnerPostition===2){runnerParlayEntrie+='P';}
if(bd.RunnerPostition===3){runnerParlayEntrie+='S';}}}}
if(objectShoppingCart.ValidNewEntryParlay(trackEventIdParlayEntrie,trackIdParlayEntrie,raceIdParlayEntrie,runnerParlayEntrie,poolCode)){let response=Racebook.AddBetToCart(trackIdParlayEntrie,trackEventIdParlayEntrie,runnerParlayEntrie,raceIdParlayEntrie,b.PoolTypeId,b.PoolTypeId,betAmount.value,0,0,0,box,boxWithKey,'','','','',trackNameParlayEntrie,indexIdShoppingCart,wagerEditId,amountEdit,_sessionSSC,_token,addInformation);if(response.error!==null){alert("CallSendBet_Response"+response.error);return;}
try{eval(response.value);}
catch(er){window.status="CallSendBet_Response :: "+er.name+er.message;}
_betPlaced=false;ShowWaitDialog(false);}
else{$('#ckbBox').attr('checked',false);$('#ckbBoxKey').attr('checked',false);if(_parlayType==ParlayType.MultiTrackNormal&&$('#_hdnParlayPoolTypeSelected').val()!=='-1'){hadSendBetToCart=false;$('#dvChdOp_dvPoolParlaySelect_'+$('#_hdnParlayPoolTypeSelected').val()).click();objectShoppingCart.ShowHideBlockBetSlip(shoppingCart.EditPalayerIndexBetId(),true);}
else{hadSendBetToCart=true;$('#dvPools :input:checked').click();}
if(_modePage!=0){if($('#dvBetSliptZone').css('display')==='none'){$("#dvTblBetSplipCartMobile").click();}}}}}}}}}
_betPlaced=false;ShowWaitDialog(false);shoppingCart.UpdateParlayType(shoppingCart.EditPalayerIndexBetId(),poolTypeParlay);shoppingCart.SetParlayAmountBet(shoppingCart.EditPalayerIndexBetId(),betAmount.value);shoppingCart.RefreshOptionParlays(shoppingCart.EditPalayerIndexBetId());shoppingCart.ParlayFinish();if($('#_modeBetting').val()==='0'){$('#dvSubmitAll').click();}}}}
else{_betPlaced=false;}}
function RemoveParlayEntrie(rP){if(controlTicket!==undefined&&controlTicket.GetTicketInformation()!==undefined&&controlTicket.GetTicketInformation().GetBetInformation()!==undefined&&controlTicket.GetTicketInformation().GetBetInformation().BetDetailList!==undefined&&controlTicket.GetTicketInformation().GetBetInformation().BetDetailList.length>0)
controlTicket.GetTicketInformation().GetBetInformation().RemoveBetDetailByInformation(_trackEvent,_trackCode,_raceId,rP);}
function AddParlayEntrie(controlElement){if(_betPlaced){return;}
else{_betPlaced=true;}
if(setWagerInformation(false,controlElement)){ShowWaitDialog(true,$(controlElement).offset().top,$(controlElement).offset().left);setTimeout(function(){let raceCollection=returnObjById("_RaceCollectionOnClient");let trackName=$('#_trackNameSelect').val();let poolType=returnObjById("_PoolTypeOnClient");let poolCode=returnObjById("_PoolCodeOnClient");let runnersCollection=returnObjById("_RunnersCollectionOnClient");let postTime=returnObjById("dvTrackMeetings");let betAmount=returnObjById("betAmount");let box=false;let boxWithKey=false;if(raceCollection===null||poolType===null||poolCode===null||runnersCollection===null||postTime===null||betAmount===null){_betPlaced=false;alert(messages.SendBet+messages._1006);return false;}
var poolTypeValue=poolType.value;poolCode=poolCode.value;_controlElementAddBetCart=controlElement;let wagerEditId='';let amountEdit=0;let addInformation=GetAddInformationBetSessionStorage();let response=Racebook.AddEntrieParlayBet(_trackCode,_trackEvent,runnersCollection.value,raceCollection.value,poolTypeValue,poolCode,betAmount.value,"0","0","0",box,boxWithKey,'','','','',trackName,0,wagerEditId,_sessionSSC,_token,addInformation);if(response.error!==null){alert("AddEntrieParlayBet_CallBack"+response.error);return;}
try{if(_parlayType===ParlayType.MultiTrackCombined){controlTicket.GetTicketInformation().GetBetInformation().RemoveBetDetailByMettingRace(_trackEvent,_trackCode,_raceId);}
eval(response.value);}
catch(er){window.status="AddEntrieParlayBet_CallBack :: "+er.name+er.message;}
_betPlaced=false;ShowWaitDialog(false);ShowBetParlay();GenerateTotalCombination();},100);}
else{_betPlaced=false;}}
function AddBetToCart_CallBack(response){var totalCount=shoppingCart.CountBetEnable;if(response.error!==null){alert("SendBets_CallBack"+response.error);return;}
try{eval(response.value);}
catch(er){window.status="AddBetToCart_CallBack :: "+er.name+er.message;}
if(typeof shoppingCartEdit==="undefined"||(typeof shoppingCartEdit!=="undefined"&&!shoppingCartEdit.IsEditMode())){if((totalCount!==shoppingCart.CountBetEnable)||$('#_hdnParlayPoolTypeSelected').val()!=='-1'){unCheckCheckbox(document.getElementById('dvCkbBox'));unCheckCheckbox(document.getElementById('dvCkbBoxKey'));if(_parlayType==ParlayType.MultiTrackNormal&&$('#_hdnParlayPoolTypeSelected').val()!=='-1'){hadSendBetToCart=false;$('#dvChdOp_dvPoolParlaySelect_'+$('#_hdnParlayPoolTypeSelected').val()).click();shoppingCart.ShowHideBlockBetSlip(shoppingCart.EditPalayerIndexBetId(),true);}
else{hadSendBetToCart=true;$('#dvPools :input:checked').click();}
if(_modePage!==0){if($('#dvBetSliptZone').css('display')==='none'){if(isMobile.any()){if(_modeHashTagReloadMode){if(_sendBetFromMobile){history.pushState("#BetCart",null,"#BetCart");location.reload();return;}}
else{if(!shoppingCart.IsEditMode()){scrollToTop();$("#dvTblBetSplipCartMobile").click();}}}}}
else{$('#dvTblBetSplipCart').click();}
if(shoppingCart.IsEditMode()){shoppingCart.ShowHideBlockBetSlip(shoppingCart.EditPalayerIndexBetId(),true);}
if($('#_modeBetting').val()==='0'){$('#dvSubmitAll').focus();}}}
else{if(typeof shoppingCartEdit!=="undefined"){shoppingCartEdit.ActiveFinishEdit();}}
_betPlaced=false;ShowWaitDialog(false);if($('#_modeBetting').val()==='0'&&$('#_isAnonimous').val()==='0'){if(_autoConfirmMode){if(!shoppingCart.IsEditMode()&&shoppingCart.CountBetEnable>0&&(typeof shoppingCartEdit!=="undefined"&&!shoppingCartEdit.IsEditMode())){$('#dvSubmitAll').click();}}}}
function CallPlaceBet(){if(_betPlaced){return;}
var btnConfirm=returnObjById("_client_btConfirm");if(btnConfirm){btnConfirm.disabled=true;}
if(setWagerInformation()){var trackName=$('#_trackNameSelect').text();var raceCollection=returnObjById("_RaceCollectionOnClient");var poolType=returnObjById("_PoolTypeOnClient");var poolCode=returnObjById("_PoolCodeOnClient");var runnersCollection=returnObjById("_RunnersCollectionOnClient");var postTime=returnObjById("ddEvents");var betAmount=returnObjById("betAmount");var txtWinAmount=returnObjById("txtWinAmount");var txtPlaceAmount=returnObjById("txtPlaceAmount");var txtShowAmount=returnObjById("txtShowAmount");var ckbBox=returnObjById("ckbBox");var ckbBoxKey=returnObjById("ckbBoxKey");var txtHour=returnObjById("txtHour");var txtMin=returnObjById("txtMin");var txtSec=returnObjById("txtSec");var ddlTime=returnObjById("ddlTime");if((raceCollection===null)||(poolType===null)||(poolCode===null)||(runnersCollection===null)||(postTime===null)||(betAmount===null)){alert(messages.SendBet+messages._1006);if(btnConfirm){btnConfirm.disabled=false;}
return false;}
var box=false;if(ckbBox){if(ckbBox.checked){box=true;}}
var boxWithKey=false;if(ckbBoxKey){if(ckbBoxKey.checked){boxWithKey=true;}}
var winAmountOnClient="0";var placeAmountOnClient="0";var showAmountOnClient="0";if(txtWinAmount){winAmountOnClient=txtWinAmount.value;}
if(txtPlaceAmount){placeAmountOnClient=txtPlaceAmount.value;}
if(txtShowAmount){showAmountOnClient=txtShowAmount.value;}
var hours,minutes,seconds,dayTime;if(txtHour){hours=txtHour.value;}
if(txtMin){minutes=txtMin.value;}
if(txtSec){seconds=txtSec.value;}
if(ddlTime){dayTime=ddlTime.value;}
var addInformation=GetAddInformationBetSessionStorage();Racebook.PlaceBet(postTime.value,runnersCollection.value,raceCollection.value,poolType.value,poolCode.value,betAmount.value,winAmountOnClient,placeAmountOnClient,showAmountOnClient,box,boxWithKey,hours,minutes,seconds,dayTime,trackName,_sessionSSC,_token,addInformation,PlaceBet_CallBack);_betPlaced=false;}}
function PlaceBet_CallBack(response){if(response.error!==null){alert("PlaceBet_CallBack"+response.error);return;}
try{eval(response.value);}
catch(er){window.status="PlaceBet_CallBack :: "+er.name+er.message;}
ShowWaitDialog(false);}
function pageLoad_CallBack(response){if(response.error!==null){alert("pageLoad_CallBack"+response.error);return;}
try{eval(response.value);sendTrackSelect();}
catch(er){setPageLayout(BetZoneLayout.Error);window.status="pageLoad_CallBack :: "+er.name+er.message;}
ShowWaitDialog(false);}
var _requestCallPageByTrack=false;function callPageLoadByTrack(trackCode,featuredRaceId,trackEvent,isFeatured,trackType,modeResult){if(!_requestCallPageByTrack){_requestCallPageByTrack=true;_loadRaceForResult=false;_trackEvent=trackEvent;if(featuredRaceId&&featuredRaceId!=''){_featuredRaceId=featuredRaceId;}
if(trackCode&&trackCode!==''){_trackCode=trackCode;_trackSelected=returnObjById(trackCode);}
_trackType=trackType;_sectionIsShowingModeMobileLast=_sectionIsShowingModeMobile;_sectionIsShowingModeMobile=2;var addInformation=GetAddInformationBetSessionStorage();Racebook.LoadTrackInformation(trackCode,_featuredRaceId,trackEvent,isFeatured,trackType,modeResult,_sessionSSC,_token,addInformation,PageLoadByTrack_CallBack);}}
function PageLoadByTrack_CallBack(response){var loadRace=false;ClearFilterSearch();if(response.error!==null){ShowWaitDialog(false);return;}
try{eval(response.value);}
catch(er){window.status="PageLoadByTrack_CallBack :: "+er.name+er.message;}
_requestCallPageByTrack=false;try{var tlbRaces;if(_loadRaceForResult){tlbRaces=returnObjById('dtlRaces');if(tlbRaces===null){return false;}
for(var r=0;r<tlbRaces.rows[0].cells.length;r++){if(_featuredRaceId==tlbRaces.rows[0].cells[r].RaceIdNumeric){initRace=100+parseInt(_featuredRaceId,10);showResultInformation(initRace,tlbRaces.rows[0].cells[r].RaceIndex);break;}}}
else{if(_hasAvailableRaceForToday){if(_featuredRaceId===''){showRaceInformation(initRace,0);}
else{tlbRaces=returnObjById('dtlRaces');if(tlbRaces===null){return false;}
if(parseInt(_featuredRaceId,10)<=parseInt(tlbRaces.rows[0].cells.length,10)){for(var r=0;r<tlbRaces.rows[0].cells.length;r++){if(_featuredRaceId==tlbRaces.rows[0].cells[r].RaceIdNumeric){_normalRaces.SelectRace(tlbRaces.rows[0].cells[r].RaceIndex);showRaceInformation(tlbRaces.rows[0].cells[r].RaceId,tlbRaces.rows[0].cells[r].RaceIndex);var indexDrop=tlbRaces.rows[0].cells[r].RaceIndex+1;setValueDynamicDropDown('raceOption',indexDrop);loadRace=true;break;}}}
else{HiddenDiv('dvBetZoneContent');HiddenDiv('dvMainBetZone');return;}}}}
if(_modePage===2){setMobileMode();}
else{displaySpaceSectionBetting();}}
catch(er){setPageLayout(BetZoneLayout.Error);window.status="PageLoadByTrack_CallBack :: "+er.name+er.message;}
ShowWaitDialog(false);ShowDiv('dvBetZone');$('.sTrackSelected').removeClass('sTrackSelected');$('#'+_trackCode).addClass('sTrackSelected');$('#'+_searchSelected).addClass('sTrackSelected');$('#fv_'+_trackCode).addClass('sTrackSelected');$('#tdTrackHorseImage').focus();}
function loadTrackMeetingsInformation(controlName,values,selectedIndex){var ddEvents=returnObjById(controlName);if(ddEvents){$(ddEvents).html('');for(var i=0;i<values.length;i++){var aDivMeetingNew=document.createElement("div");aDivMeetingNew.innerHTML=values[i];aDivMeetingNew.indexMeeting=i;aDivMeetingNew.onclick=showMeetingInformation;if(selectedIndex==i){aDivMeetingNew.className='sDvMeeting sDvMeetingSelected';}
else{aDivMeetingNew.className='sDvMeeting';}
$(ddEvents).append(aDivMeetingNew);}
setInformationRootMobileMetting(ddTrackEventsLocalized[selectedIndex]);}
else{window.status="loadTrackMeetingsInformation :: Track event can not load";}}
function showMeetingInformation(){var control=this;if(control){let loadEvent=true;if(ddTrackEvents.length===1){let hasOpenRace=false;_WagerInfo.Races.forEach(function(valor,indice,array){if(valor.MTP){if(parseInt(valor.MTP)>0){hasOpenRace=true;}}});loadEvent=hasOpenRace;}
if(loadEvent){$('#dvTrackMeetings').find('.sDvMeetingSelected').removeClass('sDvMeetingSelected');$(control).addClass('sDvMeetingSelected');setInformationRootMobileMetting(ddTrackEventsLocalized[this.indexMeeting]);var addInformation=GetAddInformationBetSessionStorage();Racebook.ShowTrackEventInformation(_trackCode,ddTrackEvents[this.indexMeeting],_sessionSSC,_token,addInformation,pageLoad_CallBack);}}}
function setPageLayout(layoutStyle){var wagerBlock=returnObjById('dvBetZoneContent');var wagerBlockMain=returnObjById('dvMainBetZone');var confirmationBlock=returnObjById('trConfirmation');var ticketBlock=returnObjById('trTicket');if(wagerBlock){wagerBlock.style.display='none';wagerBlockMain.style.display='none';}
if(confirmationBlock){confirmationBlock.style.display='none';}
if(ticketBlock){ticketBlock.style.display='none';}
switch(layoutStyle){case BetZoneLayout.Wagering:if(wagerBlock){var btnSubmit=returnObjById("_client_btSubmit_top");if(btnSubmit){btnSubmit.disabled=false;}
btnSubmit=returnObjById("_client_btSubmit_bottom");if(btnSubmit){btnSubmit.disabled=false;}
wagerBlock.style.display='block';wagerBlockMain.style.display='block';if((_WagerInfo)&&(_WagerInfo.PoolSelected())){switch(_WagerInfo.PoolSelected().Type){case PoolType.Parlay:setStyleAttribute('divWinParlay',"display","block");break;}}
_registerEvents=EventAction.ShowWager;}
break;case BetZoneLayout.Confirmation:if(confirmationBlock){confirmationBlock.style.display='block';_registerEvents=EventAction.Continue;}
break;case BetZoneLayout.Ticket:if(ticketBlock){var btnConfirm=returnObjById("_client_btConfirm");if(btnConfirm){btnConfirm.disabled=false;}
ticketBlock.style.display='block';_registerEvents=EventAction.SumitWager;}
break;case BetZoneLayout.Error:break;}}
function showConfirmationInformation(wagerNumber,ticketPostTime,redirectURL){var confirmWagerNumber=returnObjById('ConfirmWagerNumber');var confirmTicketPostTime=returnObjById('ConfirmTicketPostTime');var lnkContinue=returnObjById('hlnkContinue');if(confirmWagerNumber){confirmWagerNumber.innerHTML=wagerNumber;}
if(confirmTicketPostTime){confirmTicketPostTime.innerHTML=ticketPostTime;}
if(lnkContinue){lnkContinue.href=redirectURL;}
ShowWaitDialog(false);}
function gotoWagerPage(){SetControlValue('txtHour','');SetControlValue('txtMin','');SetControlValue('txtSec','');SetDropDownIndex('ddlTime',-1);showRaceInformation(_WagerInfo.Races[currentRaceIndex].RaceId,currentRaceIndex);setPageLayout(BetZoneLayout.Wagering);}
function clearWagerPage(){var rblPools=returnObjById('dvPools');if(rblPools){$(rblPools).html('');}
var lblControlArray=new Array('Distance','Surface','Purse','PostTime','lblPool1','lblPool2','lblPool3','lblMin1','lblMin2','lblMin3','lblMax1','lblMax2','lblMax3');var lblControl=null;for(var i=0;i<lblControlArray.length;i++){lblControl=returnObjById(lblControlArray[i]);if(lblControl){lblControl.innerHTML="";}}
var lblPoolLimit=returnObjById("lblPoolLimit");if(lblPoolLimit){lblPoolLimit.innerHTML=messages.lblLimits;}
var btnSubmit=returnObjById("_client_btSubmit_top");if(btnSubmit){btnSubmit.disabled=true;}
btnSubmit=returnObjById("_client_btSubmit_bottom");if(btnSubmit){btnSubmit.disabled=true;}
hideRunnersTables();var divWinParlay=returnObjById("divWinParlay");var divParlayRaces=returnObjById("divParlayRaces");var tlbParlayInformation=returnObjById("tlbParlayInformation");if(divWinParlay){divWinParlay.style.display='none';}
if(divParlayRaces){divParlayRaces.style.display='none';}
if(tlbParlayInformation){tlbParlayInformation.style.display='none';}
$('#descriptionPool').hide();$('.sTblBorderPoolLimits').hide();$('.sDvButtonAddBetSlip').hide();}
function showTrackEventInformation(control){if(control){setInformationRootMobileMetting(ddTrackEventsLocalized[$(control)[0].selectedIndex]);var addInformation=GetAddInformationBetSessionStorage();Racebook.ShowTrackEventInformation(_trackCode,control.value,_sessionSSC,_token,addInformation,pageLoad_CallBack);}}
function showTrackEventInformation_CallBack(response){if(response.error!==null){alert("showTrackEventInformation_CallBack :: "+response.error);return;}
eval(response.value);}
function GoLogin(anonymousLoginType,ssc,token,applicationId){if(anonymousLoginType==0){showMyAccountMenu(false);$("#dvPopupMyAccount").show();$('#dvInternalLogin').focus();}
else if(anonymousLoginType==1){showMyAccountMenu(false);$("#dvPopupMyAccount").show();$('#dvInternalLogin').focus();}
else if(anonymousLoginType==2){var strURL=$("#loginURL").val();if(strURL===""){strURL="./Login.aspx";}
if(strURL.indexOf("?",0)===-1){strURL+="?";}
if(strURL.indexOf("ssc=",0)===-1){strURL+="ssc="+ssc;}
strURL+="&stoken="+token;strURL+="&applicationId="+applicationId;window.top.location=strURL;}
else if(anonymousLoginType==3){GoURLLogin($("#loginURL").val());}}
function authenticateSession(token,ssc){var
currentSessionId,usr,pass,result,errorMsg;usr=$(".sInpLoginFormUsr").val();pass=$(".sInpPasswordFormUsr").val();var addInformation=GetAddInformationBetSessionStorage();result=Racebook.AuthenticateSession(token,usr,pass,ssc,addInformation);result=result.value;idx=result.indexOf("/");errorCode=result.substring(0,idx);if(errorCode==="0"){var strURL=$("#loginURL").val();if(strURL===""){strURL="./Login.aspx";}
if(strURL.indexOf("?",0)===-1){strURL+="?";}
if(strURL.toLowerCase().indexOf("ssc=",0)==-1){strURL+="ssc="+ssc;}
strURL+="&stoken="+token;window.top.location=strURL;}
else{errorMsg=result.substring(idx+1);if(errorCode==="50646"){alert(errorMsg);}else{if(errorMsg.indexOf("ShowLoginPage")>=0){ShowLoginPage();}
else{$("#dvLoginErrorMessage").show();$("#dvLoginErrorMessage span").text(errorMsg);}}}
resizeHeightFancyMyAccountPopup();}
function createAccount(){var strURL=$("#createAccURL").val();if(strURL===""){strURL=$("#loginURL").val();}
if(strURL!==""){window.top.location=strURL;}}
function submitBetSlip(object){if(_isAuthenticated){var validAllInformation=false;$('#dvErrorAskConfirmation').addClass('sHideElement');if($('#_askConfirmationBet').val()==='TRUE'){if($('#chbAcceptSubmit').prop("checked")){$('#dvChkControlConfirmationSumbit').click();validAllInformation=true;}
else{$('#dvErrorAskConfirmation').removeClass('sHideElement');$('#dvErrorAskConfirmation').find('label').text(messages.MustAcceptBets);validAllInformation=false;}}
else{validAllInformation=true;}
if(validAllInformation){validAllInformation=false;if($('#_passwordConfirmationBet').val()==='TRUE'){if($('#inpPasswordConfirmation').val()!==''){var addInformation=GetAddInformationBetSessionStorage();var reponseAut=Racebook.ConfirmPassword($('#inpPasswordConfirmation').val(),_sessionSSC,_token,addInformation);if(reponseAut.value==='true'){validAllInformation=true;}
else{$('#dvErrorAskConfirmation').removeClass('sHideElement');$('#dvErrorAskConfirmation').find('label').text(messages.lblErrorConfirmPassword);}
$('#inpPasswordConfirmation').val('');}else{$('#dvErrorAskConfirmation').removeClass('sHideElement');$('#dvErrorAskConfirmation').find('label').text(messages.lblErrorConfirmPassword);}}
else{validAllInformation=true;}
if(validAllInformation){validAllInformation=shoppingCart.AllBetCorrectToPlace();if(!validAllInformation){$('#dvErrorAskConfirmation').removeClass('sHideElement');$('#dvErrorAskConfirmation').find('label').text(shoppingCart.MessageErrorToPlace());}}}
if(validAllInformation){if($('#_modeBetting').val()==='0'){if(_autoConfirmMode){if(typeof shoppingCartEdit!=="undefined"&&shoppingCartEdit.IsEditMode()){shoppingCartEditNewBet.PlaceBetsCart(object);}
else{shoppingCart.PlaceBetsCart(object);}}
else{if(!_readBackModeEnable){LoadReadBackInformation();shoppingCartReadback.PlaceBetsCart(object);shoppingCartEditNewBet=new shoppingCartClass('','',2);}
else{if(object.id==='dvSubmitBetReadback'){shoppingCartReadback.PlaceBetsCart(object);shoppingCartEditNewBet=new shoppingCartClass('','',2);}
else{if(shoppingCart.CountBetEnable>0||(typeof shoppingCartEdit!=="undefined"&&shoppingCartEdit.IsEditMode)){OpenConfirmationBet(false);}}}}}
else{shoppingCart.PlaceBetsCart(object);}}}
else{if($('#_anonimousLoginType').val()==="1"||$('#_anonimousLoginType').val()==="2"){showMyAccountMenu(false);$("#dvPopupMyAccount").show();$('#dvInternalLogin').focus();}
else{$("#dvAskLoginBetSlip span").removeClass('sSpSignInUrlBlink');setTimeout(function(){$("#dvAskLoginBetSlip  span").addClass('sSpSignInUrlBlink');},500);}}}
function LoadPendingTicket_CallBack(response){if(response.error!==null){alert("LoadPendingTicket"+response.error);return;}
try{eval(response.value);}
catch(er){window.status="EditTicketCancel :: "+er.name+er.message;}}
function showSignUp(){showMyAccountMenu(false);$("#dvPopupMyAccount").show();$('#dvInternalLogin').focus();}
function forgotPassword(){var strURL=$("#forgotURL").val();if(strURL!==""){window.top.location=strURL;}}
function ShowErrorMsgTemporarilyRestricted(errorMsg){ShowErrorMsg(errorMsg);$("#trBetSlipMessage").hide();$("#trErrorMessage").show();}
function ShowBetSlipMessage(){$("#trBetSlipMessage").show();}
function HideBetSlipMessage(){$("#trBetSlipMessage").hide();}
function HideErrorMsg(){$("#divLoginMsgErr").hide();}
function ShowErrorMsg(errorMsg){var strHtml="";strHtml+="<TABLE class='loginBoxWarning' border=0 cellspacing=0 cellpadding=0 width='100%'>";strHtml+="<tr>";strHtml+="<td>";strHtml+=errorMsg;strHtml+="</td>";strHtml+="</tr>";strHtml+="</table>";$("#divLoginMsgErr").html(strHtml);}
function SelfExclusionAction(selfExclusionDate){var msg=messages.lblSelfExclusionInformation;msg=msg.replace("{0}",selfExclusionDate);SelfExclusionDate=selfExclusionDate;alert(msg);}
function addRemovefavorite(){var mode="0";if($('#dvTrackFavorite').hasClass('btnBetZoneHeaderFavoriteSelected')){mode="1";$('#dvTrackFavorite').removeClass('btnBetZoneHeaderFavoriteSelected');$('#dvTrackFavorite').attr('title',messages.lblTitleFavoriteAdd);}
else{mode="0";$('#dvTrackFavorite').addClass('btnBetZoneHeaderFavoriteSelected');$('#dvTrackFavorite').attr('title',messages.lblTitleFavoriteRemove);}
var addInformation=GetAddInformationBetSessionStorage();Racebook.AddRemoveFavorite(mode,_trackCode,_sessionSSC,_token,addInformation,AddRemoveFavorite_CallBack);}
function removeFavoriteFromMenu(trackCode,trackName){_ifFromRemoveFavorite=true;var mode="1";$('#dvTrackFavorite').removeClass('btnBetZoneHeaderFavoriteSelected');$('#dvTrackFavorite').attr('title',messages.lblTitleFavoriteAdd);var addInformation=GetAddInformationBetSessionStorage();Racebook.AddRemoveFavorite(mode,trackCode,_sessionSSC,_token,addInformation,AddRemoveFavorite_CallBack);}
function AddRemoveFavorite_CallBack(response){if(response.error!==null){return;}
eval(response.value);RefreshTracks();setTimeout(function(){if($('#bntMinimizeMaximizeTT_FavC_Fav').hasClass('sTdBtnMaximize')){$('#trMenuTitleTT_FavC_Fav').click();}},200);}
function RefreshFavorityTrackOption(trackCode){if($('#fv_'+trackCode).html()!==undefined){$('#dvTrackFavorite').addClass('btnBetZoneHeaderFavoriteSelected');$('#dvTrackFavorite').attr('title',messages.lblTitleFavoriteRemove);}
else{$('#dvTrackFavorite').removeClass('btnBetZoneHeaderFavoriteSelected');$('#dvTrackFavorite').attr('title',messages.lblTitleFavoriteAdd);}}
function ShowBetParlay(loadFirtsEntrieRace){$('#dvParlayDetailInformation').html('');if(typeof shoppingCartEdit!=="undefined"&&shoppingCartEdit.IsEditMode()){$('#dvParlayDetailInformation').html('');}
else{let firtsIdEdit='';if(loadFirtsEntrieRace===undefined){loadFirtsEntrieRace=false;}
let tl=$(document.createElement('span')).text(messages.lblBetDetail).addClass('sLabelMessage');let tr=$(document.createElement('div')).append(tl);$('#dvParlayDetailInformation').append(tr);if(controlTicket===undefined||controlTicket.GetTicketInformation()===undefined||!controlTicket.GetTicketInformation().IsValidOneEntrie()){let ml=$(document.createElement('span')).text(messages.lblParlayDetailEmpty);let mr=$(document.createElement('div')).append(ml);$('#dvParlayDetailInformation').append(mr);}
else{for(let ict=0;ict<controlTicket.TicketList.length;ict++){let ct=controlTicket.TicketList[ict];if(ct!==undefined){for(let ib=0;ib<ct.BetList.length;ib++){let b=ct.BetList[ib];if(b!==undefined){if(b.PoolTypeId>=1000){let currentTN='';for(let ibd=0;ibd<b.BetDetailList.length;ibd++){let bd=b.BetDetailList[ibd];if(bd!==undefined){let tempText=bd.TrackName+', '+bd.TrackEventFormat+", "+messages.lblTicketValue1+bd.RaceId;if(currentTN!==tempText){currentTN=tempText;let ri=$(document.createElement('div')).text(tempText);let nd=$(document.createElement('div')).append(ri);$('#dvParlayDetailInformation').append(nd);}
let c1d2;let labelStraight='';if(_parlayType===ParlayType.MultiTrackCombined){switch(bd.RunnerPostition){case 1:labelStraight=messages.lblWin;break;case 2:labelStraight=messages.lblPlace;break;case 3:labelStraight=messages.lblShow;break;default:break;}
c1d2=$(document.createElement('div')).text(labelStraight+' '+bd.RunnerProgramNumber+' '+bd.RunnerName);}
else{c1d2=$(document.createElement('div')).text(bd.RunnerProgramNumber+' '+bd.RunnerName);}
if(firtsIdEdit===''&&loadFirtsEntrieRace){firtsIdEdit="dvParlayDetailEdit_"+bd.Reference;}
let c0=$(document.createElement('div')).addClass('sDvParlayDetailFirstCol');let c1=$(document.createElement('div')).attr({id:"dvParlayDetail_"+bd.Reference}).addClass('sDvParlayDetail').append(c1d2);let c2=$(document.createElement('div')).attr({id:"dvParlayDetailEdit_"+bd.Reference}).addClass('sDvParlayDetailEdit').click(function(){let ref=this.id.replace("dvParlayDetailEdit_","");let infoBetDetail=controlTicket.GetTicketInformation().GetBetInformation().GetBetDetailInformation(parseInt(ref,10));ShowTrackInformation(infoBetDetail.TrackId,infoBetDetail.RaceId,infoBetDetail.TrackEventId,'false','');}).attr('title',messages.lblEdit);let c3=$(document.createElement('div')).attr({id:"dvParlayDetailDelete_"+bd.Reference}).addClass('sDvParlayDetailDelete').click(function(){let ref=this.id.replace("dvParlayDetailDelete_","");controlTicket.GetTicketInformation().GetBetInformation().RemoveBetDetail(parseInt(ref,10));ShowBetParlay();for(let i=0;i<ArrayBoxOptions.length;i++){if(document.getElementById(ArrayBoxOptions[i][0])!==undefined){unCheckCheckbox(document.getElementById(ArrayBoxOptions[i][0]).parentElement,true);}
if(_parlayType===ParlayType.MultiTrackCombined){if(document.getElementById(ArrayBoxOptions[i][1])!==undefined){unCheckCheckbox(document.getElementById(ArrayBoxOptions[i][1]).parentElement,true);}
if(document.getElementById(ArrayBoxOptions[i][2])!==undefined){unCheckCheckbox(document.getElementById(ArrayBoxOptions[i][2]).parentElement,true);}}}
LoadRunnerFromControlTickets();}).attr('title',messages.lblRemove);let nd=$(document.createElement('div')).append(c0).append(c1).append(c2).append(c3);$('#dvParlayDetailInformation').append(nd);}}}}}}}
if(loadFirtsEntrieRace){setTimeout(function(){$('#'+firtsIdEdit).click();},200);}}}}