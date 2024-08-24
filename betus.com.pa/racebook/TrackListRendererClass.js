var _trackListSelected;var _labelTitleFeatured="";function TrackListRendererClass(mode){var activeRow=false;var _singleCss="sDvSingleTableUpcomingFeatures";var _alternatingCss="sDvAlternatingTableUpcomingFeatures";var _trackTypeToLoad="";var _titleId="";var _buttonAccessId="";var _principalTableId="";var list;var _trackMsg="";var _deepLink="";var _totalRowToPadding=0;var _setTitleHeaderId="";var _mode=mode;if(mode===0){list=new Array();}
else{list=new Array();}
this.Tracks=list;this.TrackMsg="";this.SetSingleCss=setSingleCss;this.GetSingleCss=getSingleCss;this.SetAlternatingCss=setAlternatingCss;this.GetAlternatingCss=getAlternatingCss;this.SetTitleId=setTitle;this.GetTitleId=getTitle;this.SetPrincipalTableId=setPrincipalTableId;this.SetTrackMsg=setTrackMsg;this.GetTrackMsg=getTrackMsg;this.SetTitleHeaderId=setTitleHeaderId;this.SetButtonAccessId=setButtonAccess;this.GetButtonAccessId=getButtonAccess;this.SetTrackTypeToLoad=setTrackTypeToLoad;this.Show=ShowInfo;this.ShowUpcoming=ShowInfoUpcoming;this.SetDeepLink=setDeepLink;this.SetTotalRowToPadding=setTotalRowToPadding;function setTrackMsg(value){_trackMsg=value;}
function getTrackMsg(){return _trackMsg;}
function setPrincipalTableId(value){_principalTableId=value;}
function setSingleCss(value){_singleCss=value;}
function getSingleCss(){return _singleCss;}
function setAlternatingCss(value){_alternatingCss=value;}
function getAlternatingCss(){return _alternatingCss;}
function setTitle(value){_titleId=value;}
function setTitleHeaderId(value){_setTitleHeaderId=value;}
function getTitle(){return _titleId;}
function setTotalRowToPadding(value){_totalRowToPadding=value;}
function setButtonAccess(value){_buttonAccessId=value;}
function getButtonAccess(){return _buttonAccessId;}
function setTrackTypeToLoad(value){_trackTypeToLoad=value;}
function setDeepLink(value){_deepLink=value;}
function ShowInfo(tableName,collectionName){if(renderUpcomingFeature()){ShowOnTable(tableName,collectionName);}
return true;}
function ShowOnTable(tableName,collectionList){try{if($.trim(_setTitleHeaderId).length>0){if($.trim(_labelTitleFeatured).length>0){$('#'+_setTitleHeaderId)[0].innerHTML=_labelTitleFeatured;}
else{$('#'+_setTitleHeaderId)[0].innerHTML=messages.lblFeaturedRacesMessage;}}}catch(e){console.log('Error ShowOnTable _setTitleHeaderId: '+_setTitleHeaderId);}
var collection=collectionList;var dvButtonAccess=returnObjById(_buttonAccessId);var tlbTracks=returnObjById(tableName);var tlbTracksPrincipalTable=returnObjById(_principalTableId);var tlbTracksLabel=returnObjById(_titleId);if(tlbTracks===null){return false;}
$(tlbTracks).html('');if(collection.length===0){if(tlbTracksPrincipalTable){tlbTracksPrincipalTable.style.display='none';}
if(tlbTracksLabel){tlbTracksLabel.innerHTML=_trackMsg;tlbTracksLabel.style.height="30px";}
if(dvButtonAccess){$(dvButtonAccess).addClass('sHideElement');}
if(_mode===0){$('#dvUpcomingRaceToBet').hasClass('sHideElement');}
if(_mode===1){$('#dvFeaturedRaceToBet').hasClass('sHideElement');}}
else{if(tlbTracksPrincipalTable){tlbTracksPrincipalTable.style.display='';}
if(tlbTracksLabel){tlbTracksLabel.innerHTML='';}
if(dvButtonAccess){$(dvButtonAccess).removeClass('sHideElement');}
if(_mode===0){$('#dvUpcomingRaceToBet').removeClass('sHideElement');}
if(_mode===1){$('#dvFeaturedRaceToBet').removeClass('sHideElement');}}
var aDivRow,aDivCell,aDivRowMain,span,aDivCell2,aDivCell3;var i,col;var isAlternating=false;aDivRowMain=document.createElement("div");aDivRowMain.className='sDvTracksUpcomingFeaturedHeader';aDivRow=document.createElement("div");aDivCell=document.createElement("div");aDivCell.innerHTML="1";aDivCell.className='sDvTracksUpcomingFeaturedTrackName';aDivRow.appendChild(aDivCell);aDivCell=document.createElement("div");aDivCell.innerHTML="2";aDivCell.className='sDvTracksUpcomingFeaturedRaceName';aDivRow.appendChild(aDivCell);aDivCell=document.createElement("div");aDivCell.innerHTML="3";aDivCell.className='sDvTracksUpcomingFeaturedMTP';aDivRow.appendChild(aDivCell);aDivRowMain.appendChild(aDivRow);var rowInsert=false;var countRender=0;for(i=0;i<collection.length;i++){if((collection[i].IsFeatured==="1"&&_trackTypeToLoad==='FTR')||_trackTypeToLoad===''){if(countRender%2===0){aDivRowMain=document.createElement("div");if(isAlternating){aDivRowMain.className=_alternatingCss;}
else{aDivRowMain.className=_singleCss;}
isAlternating=!isAlternating;rowInsert=true;}
else{rowInsert=false;}
countRender++;aDivRow=document.createElement("div");aDivRow.trackCode=collection[i].TrackCode;aDivRow.raceId=collection[i].Race;aDivRow.featuredRaceId=collection[i].RaceId;aDivRow.trackEvent=collection[i].TrackEvent;aDivRow.index=i;aDivRow.nameTrack=collection[i].Name;aDivRow.trackType=collection[i].TrackType;aDivRow.onclick=clickOnTableRow;if(collection[i].IsFeatured==="1"){aDivRow.isFeatured=true;}
else{aDivRow.isFeatured=false;}
col=0;span=document.createElement("div");SetImageFlagMenu(collection[i].CountryId,'','',false,span);aDivCell=document.createElement("div");aDivCell.className='sDvTracksUpcomingFeaturedTrackCountry';aDivCell.appendChild(span);aDivRow.appendChild(aDivCell);span=document.createElement("div");span.innerHTML=collection[i].Name;if(collection[i].HaveFeaturedRaceName!==undefined&&collection[i].HaveFeaturedRaceName==="1"){span.innerHTML=collection[i].FeaturedRaceName+' '+messages.lblAt+' '+collection[i].Name;}
else{span.innerHTML=collection[i].Name;}
span.title=span.innerHTML;aDivCell=document.createElement("div");aDivCell.className='sDvTracksUpcomingFeaturedTrackName';aDivCell.appendChild(span);aDivRow.appendChild(aDivCell);span=document.createElement("div");span.innerHTML=collection[i].Race;aDivCell=document.createElement("div");aDivCell.className='sDvTracksUpcomingFeaturedRaceName';aDivCell.appendChild(span);aDivRow.appendChild(aDivCell);aDivCell=document.createElement("div");span=document.createElement("div");aDivCell2=document.createElement("div");aDivCell3=document.createElement("div");span.innerHTML=collection[i].MTP;if(parseInt(collection[i].MTPSeconds,10)<300){aDivCell.className='sDvTracksUpcomingFeaturedMTP sDvTracksUpcomingFeaturedMTPNearPost';}
else{aDivCell.className='sDvTracksUpcomingFeaturedMTP';}
aDivCell2.className='sDvTracksUpcomingFeaturedMTPIcon';aDivCell3.appendChild(aDivCell2);aDivCell3.appendChild(span);aDivCell.appendChild(aDivCell3);aDivRow.appendChild(aDivCell);if(!activeRow){if(!_trackListSelected){_trackListSelected=aDivRow;}
activeRow=true;}
aDivRowMain.appendChild(aDivRow);tlbTracks.appendChild(aDivRowMain);}}
for(var countPadding=0;countPadding<_totalRowToPadding;countPadding++){if(!rowInsert){rowInsert=!rowInsert
aDivRowMain=document.createElement("div");if(isAlternating){aDivRowMain.className=_alternatingCss;}
else{aDivRowMain.className=_singleCss;}
isAlternating=!isAlternating;}
aDivRow=document.createElement("div");aDivRow.className="sDvTracksPadding";col=0;span=document.createElement("div");aDivCell=document.createElement("div");aDivCell.className='sDvTracksUpcomingFeaturedTrackName';aDivCell.appendChild(span);aDivRow.appendChild(aDivCell);span=document.createElement("div");aDivCell=document.createElement("div");aDivCell.className='sDvTracksUpcomingFeaturedRaceName';aDivCell.appendChild(span);aDivRow.appendChild(aDivCell);span=document.createElement("div");aDivCell=document.createElement("div");aDivCell.className='sDvTracksUpcomingFeaturedMTP';aDivCell.appendChild(span);aDivRow.appendChild(aDivCell);if(!activeRow){if(!_trackListSelected){_trackListSelected=aDivRow;}
activeRow=true;}
aDivRowMain.appendChild(aDivRow);tlbTracks.appendChild(aDivRowMain);}
return true;}
function ShowInfoUpcoming(tableName,collectionList){var tlbTracks=returnObjById(tableName);var tlbTracksPrincipalTable=returnObjById(_principalTableId);var tlbTracksLabel=returnObjById(_titleId);var collection=collectionList;collection.sort(function(a,b){return a.MTPSeconds-b.MTPSeconds;});var tBody;if(tlbTracks.getElementsByTagName('tbody')[0]===undefined||tlbTracks.getElementsByTagName('tbody')[0].lenght===0){tBody=document.createElement('tbody');}else{tBody=tlbTracks.getElementsByTagName('tbody')[0];}
if(tlbTracks===null){return false;}
for(i=tBody.rows.length;i>0;i--){tBody.deleteRow(i-1);}
if(collection.length===0){if(tlbTracksPrincipalTable){tlbTracksPrincipalTable.style.display='none';}
if(tlbTracksLabel){tlbTracksLabel.innerHTML=_trackMsg;tlbTracksLabel.style.height="30px";}}
else{if(tlbTracksPrincipalTable){tlbTracksPrincipalTable.style.display='';}
if(tlbTracksLabel){tlbTracksLabel.innerHTML='';tlbTracksLabel.style.display='none';}}
var aRow,aCell;var i,col;var isAlternating=false;var hasRows=false;for(i=0;i<collection.length;i++){hasRows=true;aRow=tBody.insertRow(-1);aRow.id=collection[i].TrackCode;aRow.trackCode=collection[i].TrackCode;aRow.raceId=collection[i].Race;aRow.featuredRaceId=collection[i].RaceId;aRow.trackEvent=collection[i].TrackEvent;aRow.index=i;aRow.nameTrack=collection[i].Name;aRow.trackType=collection[i].TrackType;$(aRow).click({param1:_deepLink,param2:collection[i].TrackEvent,param3:collection[i].TrackCode,param4:collection[i].RaceId,param5:collection[i].InternalSource},clickDeepLink);if(isAlternating){aRow.className=_alternatingCss;}
else{aRow.className=_singleCss;}
isAlternating=!isAlternating;if(collection[i].IsFeatured==="1"){aRow.isFeatured=true;aRow.className="RaceFeaturedDeepLink";}
else{aRow.isFeatured=false;}
col=0;aCell=aRow.insertCell(-1);aCell.innerHTML=collection[i].Name;aCell.className="sTdTrackNameUpcoming";aCell=aRow.insertCell(-1);aCell.innerHTML=collection[i].Race;aCell.className="sTdRaceNumberUpcoming";aCell=aRow.insertCell(-1);aCell.innerHTML=collection[i].MTP;aCell.className="sTdMTPUpcoming";if(!activeRow){if(!_trackListSelected){_trackListSelected=aRow;}
activeRow=true;}
aRow=tBody.insertRow(tBody.rows.length);aRow.width="1px";aRow.height="1px";for(j=0;j<5;j++){aCell=aRow.insertCell(-1);aCell.className="TrackLineSeparator";aCell.width="1px";}}
if(!hasRows){$('#dvUpcomingRace').hide();}
else{$('#dvUpcomingRace').show();}
return true;}
function clickDeepLink(event){var URL=event.data.param1;var meeting=event.data.param2;var trackCode=event.data.param3;var raceId=event.data.param4;var internalSource=event.data.param5;if(URL!==undefined&&URL!==''){if(URL.indexOf('?')>=0){if($('#hndUseInternalSource').val()==='1'){URL=URL+"&meetingRace="+internalSource+'*'+meeting+'*'+raceId;}else{URL=URL+"&meetingRace="+trackCode+'*'+meeting+'*'+raceId;}}
else{if($('#hndUseInternalSource').val()==='1'){URL=URL+"?meetingRace="+internalSource+'*'+meeting+'*'+raceId;}
else{URL=URL+"?meetingRace="+trackCode+'*'+meeting+'*'+raceId;}}
if($('#hndParameterToAddDeepLink').val()!==''){if(URL.indexOf('?')>=0){URL=URL+"&"+$('#hndParameterToAddDeepLink').val();}
else{URL=URL+"?"+$('#hndParameterToAddDeepLink').val();}}
window.top.location=URL;}
return false;}
function resetRowStyle(){var tableObj=this.parentNode;if(tableObj.tagName!=='TABLE'){tableObj=tableObj.parentNode;}
if(_trackListSelected&&_trackListSelected===this){if(this.index%2===0){this.className=_singleCss;}
else{this.className=_alternatingCss;}
return;}
if(this.index%2===0){this.className=_singleCss;}
else{this.className=_alternatingCss;}}
function clickOnTableRow(){_trackListSelected=this;ShowWaitDialog(true,$(this).offset().top,$(this).offset().left+($(this).width()/2));ShowTrackInformation(this.trackCode,this.featuredRaceId,this.trackEvent,this.isFeatured,this.trackType);}}