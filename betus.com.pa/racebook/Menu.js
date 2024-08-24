var _trackList=null;var _tableBettingToolId="";function showAccountInformationTable(trMenuAcc,iconMenu){var table=returnObjById(trMenuAcc);var tableStyle=0;if(table!=null){if(table.style.display==''){tableStyle=1;}
MaximizeWindows(trMenuAcc,iconMenu);}}
function onStartPage(){var table=document.getElementById('trAccountInformation');if(table!=null){var isCollapse=document.getElementById('_isCollapse');if((isCollapse!=null)&&(isCollapse.value==1)){ChangeWindowsState('trAccountInformation',false,'IconMaximizeAccount');}
else{ChangeWindowsState('trAccountInformation',true,'IconMaximizeAccount');}}
var i=0;for(i=0;i<_showControls.length;i++){ShowControl(_showControls[i]);}
ChangeWindowsState('trAdminMode',false,'IconMaximizeAdmin');SetFocusToFirstControl();var clientPersonal=new Personalization("txtPersonalizationMenu");clientPersonal.ShowInformactionPersonalization();$('body').css({'visibility':''});}
function CallRefreshTracks(){var addInformation=GetAddInformationBetSessionStorage();Racebook.RefreshTracks(_sessionSSC,_token,addInformation,RefreshTracks_CallBack)}
function RefreshTracks_CallBack(response){if(response.error!=null){alert("RefreshTracks_CallBack :: "+response.error);return;}
eval(response.value);}
function CallCancelAplicationMode(){var addInformation=GetAddInformationBetSessionStorage();var response=Racebook.CancelApplicationMode(_sessionSSC,_token,addInformation,RefreshTracks_CallBack);ChangeWindowsState('trAdminMode',false,'IconMaximizeAdmin');}
function SetFocusToFirstControl(){if(_trackSelected){if(_trackSelected.focus){_trackSelected.focus();}}}
function SelectTrackOnMenuPage(keyCode){var isValidKey,tableName;var index=0;isValidKey=false;if((!_trackList)||(!_trackSelected)){return false;}
index=_trackSelected.index;if(index<0){return false;}
switch(keyCode){case 13:ShowTrackInformation(_trackSelected.trackCode,'','',false,_trackSelected.trackType);break;case 37:break;case 38:isValidKey=true;if(index-1>=0){index--;}
else
index=_trackList.Tracks.length-1;break;case 39:break;case 40:isValidKey=true;if(index+1<_trackList.Tracks.length){index++;}
else
index=0;break;}
if((!isValidKey)||(index<0)){return false;}
var rowTrack=returnObjById(_trackList.Tracks[index].TrackCode);if(rowTrack){_trackSelected.className='';rowTrack.className="sTrackSelected";_trackSelected=rowTrack;}}
function RegisterEvents(){oKey.addKey(38,-1,"SelectTrackOnMenuPage(38);","");oKey.addKey(40,-1,"SelectTrackOnMenuPage(40);","");oKey.addKey(13,-1,"SelectTrackOnMenuPage(13);","");}
function showEditWager(){CallRefreshTracks();}
function showEditWagerOnBetZone(trackCode,lblMessage){var trackRow=returnObjById(trackCode);if(trackRow){if(_trackSelected){_trackSelected.className='';}
_trackSelected=trackRow;_trackSelected.className="sTrackSelected";}
ShowTrackInformation(trackCode,'','',false,_trackSelected.trackType);showAppModeTable(lblMessage);}
function showAppModeTable(lblMessagelink){var tlbAppMode=returnObjById('tlbApplicationMode');if(tlbAppMode==null){return false;}
for(i=tlbAppMode.rows.length;i>0;i--){tlbAppMode.deleteRow(i-1);}
var aRow=tlbAppMode.insertRow(-1);aRow.vAlign="middle";aRow.onmouseover=highlightTableRow;aRow.onmouseout=resetRowStyle;aRow.onclick=clickOnTableRow;aRow.style.height="20px";var aCell=aRow.insertCell(-1);aCell.innerHTML=lblMessagelink;ChangeWindowsState('trAdminMode',true,'IconMaximizeAdmin');}
function highlightTableRow(){this.className='TrackRollOver';}
function resetRowStyle(){this.className='';}
function clickOnTableRow(){this.className='sTrackSelected';CallCancelAplicationMode();}
function SetPlayer(player){if(player){_player=new PlayerAccount(player.PlayerCode,player.Password,player.Available,player.Balance,player.Pending,player.Message)}
else{_player=new PlayerAccount("","","-","-","-","");var tlbAppMode=returnObjById('tlbApplicationMode');if(tlbAppMode==null){return false;}
for(i=tlbAppMode.rows.length;i>0;i--){tlbAppMode.deleteRow(i-1);}
ChangeWindowsState('trAdminMode',false,'IconMaximizeAdmin');}
return true;}
function ShowPlayerInformation(){if(_player){_player.ShowPlayerInformation("UserName","trPassword","Password","Available","Balance","Pending","trMessage","lblPlayerMessage");if(_player.PlayerCode.length>0){ChangeWindowsState("trAccountInformation",true,"IconMaximizeAccount");}
else{ChangeWindowsState("trAccountInformation",false,"IconMaximizeAccount");}}
else{_player.ShowPlayerInformation("UserName","trPassword","Password","Available","Balance","Pending","trMessage","lblPlayerMessage");ChangeWindowsState("trAccountInformation",false,"IconMaximizeAccount");}
var clientPersonal=new Personalization("txtPersonalizationMenu");clientPersonal.ShowInformactionPersonalization();CallRefreshTracks();}
function ChangeUpcomingFeaturedRace(toDiv){if(toDiv=='upcomming'){$('#dvUpcomingRaceToBet').removeClass('sHideElement');$('#dvFeaturedRaceToBet').addClass('sHideElement');if($('#dvFeaturedRaceAccess').is(':visible')&&$('#dvUpcomingRaceAccess').is(':visible')){$('#dvUpcomingFeaturedRaceAccessTriangule').removeClass('sDvUpcomingRaceAccessTrianguleLeft');$('#dvUpcomingFeaturedRaceAccessTriangule').addClass('sDvUpcomingRaceAccessTrianguleRight');}
else{$('#dvUpcomingFeaturedRaceAccessTriangule').removeClass('sDvUpcomingRaceAccessTrianguleLeft');$('#dvUpcomingFeaturedRaceAccessTriangule').addClass('sDvUpcomingRaceAccessTrianguleRight');}}
else{$('#dvUpcomingRaceToBet').addClass('sHideElement');$('#dvFeaturedRaceToBet').removeClass('sHideElement');if($('#dvFeaturedRaceAccess').is(':visible')&&$('#dvUpcomingRaceAccess').is(':visible')){$('#dvUpcomingFeaturedRaceAccessTriangule').removeClass('sDvUpcomingRaceAccessTrianguleRight');$('#dvUpcomingFeaturedRaceAccessTriangule').addClass('sDvUpcomingRaceAccessTrianguleLeft');}
else{$('#dvUpcomingFeaturedRaceAccessTriangule').removeClass('sDvUpcomingRaceAccessTrianguleRight');$('#dvUpcomingFeaturedRaceAccessTriangule').addClass('sDvUpcomingRaceAccessTrianguleLeft');}}}
function SetAlternativeStyleBettingTools(tableId){var tlbMenu=returnObjById(tableId);var _singleCss="SingleTableRacebookOption";var _alternatingCss="AlternatingTableRacebookOption";var isAlternating=false;for(i=0;i<tlbMenu.rows.length;i++){if(isAlternating){tlbMenu.rows[i].className=_alternatingCss;}
else{tlbMenu.rows[i].className=_singleCss;}
isAlternating=!isAlternating;tlbMenu.rows[i].index=i;tlbMenu.rows[i].onmouseover=highlightMenuBettingToolRow;tlbMenu.rows[i].onmouseout=resetMenuBettingToolRowStyle;tlbMenu.rows[i].onclick=clickOnMenuBettingToolRowStyle;}}
function clickOnMenuBettingToolRowStyle(){var _singleCss="SingleTableRacebookOption";var _alternatingCss="AlternatingTableRacebookOption";var isAlternating=false;var tlbMenu=this.parentNode;if(tlbMenu.tagName!='TABLE'){tlbMenu=tlbMenu.parentNode;for(i=0;i<tlbMenu.rows.length;i++){if(isAlternating){tlbMenu.rows[i].className=_alternatingCss;}
else{tlbMenu.rows[i].className=_singleCss;}
isAlternating=!isAlternating;}
this.className='LabelMenuTitleRacebookOptionSelected';}}