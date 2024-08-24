function TableRendererClass(){var _singleCss="sLinePrimary";var _alternatingCss="sLineSecondary";var _singleCssBetSlip="SingleTableBetSlip";var _alternatingCssBetSlip="AlternatingTableBetSlip";var _singleCssBetSlipStraight="SingleTableBetSlipStraight";var _alternatingCssBetSlipStraight="AlternatingTableBetSlipStraight";var _alternatingCssBetSlipStraightError="SingleTableBetSlipStraightError";var _alternateStyle=true;var _defaultAlternateStyle=false;var _useStyleBetSlip=false;var _isError=false;this.SetSingleCss=setSingleCss;this.GetSingleCss=getSingleCss;this.SetAlternatingCss=setAlternatingCss;this.GetAlternatingCss=getAlternatingCss;this.SetAlternateStyle=setAlternateStyle;this.GetAlternateStyle=getAlternateStyle;this.SetDefaultAlternateStyle=setDefaultAlternateStyle;this.GetDefaultAlternateStyle=getDefaultAlternateStyle;this.SetUseStyleBetSlip=setUseStyleBetSlip;this.GetUseStyleBetSlip=getUseStyleBetSlip;this.SetIsError=setIsError;this.GetIsError=getIsError;function setSingleCss(value){_singleCss=value;}
function getSingleCss(){return _singleCss;}
function setAlternatingCss(value){_alternatingCss=value;}
function getAlternatingCss(){return _alternatingCss;}
function setAlternateStyle(value){_alternateStyle=value;}
function getAlternateStyle(){return _alternateStyle;}
function setDefaultAlternateStyle(value){_defaultAlternateStyle=value;}
function getDefaultAlternateStyle(){return _defaultAlternateStyle;}
function setUseStyleBetSlip(value){_useStyleBetSlip=value;}
function getUseStyleBetSlip(){return _useStyleBetSlip;}
function setIsError(value){_isError=value;}
function getIsError(){return _isError;}
this.LoadTableInformation=loadTableInformation;this.LoadTableInformationSource=loadTableInformationSource;this.LoadTableInformationParlay=loadTableInformationParlay;function loadTableInformationParlay(tableName,collection,configuration,mainHeaderToClose){if(_useStyleBetSlip){_singleCss=_singleCssBetSlip;_alternatingCss=_alternatingCssBetSlip;if(_defaultAlternateStyle){_singleCss=_alternatingCssBetSlip;}
else{_singleCss=_singleCssBetSlip;}}
else{if(_defaultAlternateStyle){_singleCss=_alternatingCss;}
else{_singleCss="sLinePrimary";}}
var tlbControl=returnObjById(tableName);var tlbControlHeader=returnObjById('tbHeader'+tableName);if(tlbControl==null&&tlbControlHeader==null){return false;}
for(i=tlbControl.rows.length;i>0;i--){tlbControl.deleteRow(i-1);}
for(i=tlbControlHeader.rows.length;i>0;i--){tlbControlHeader.deleteRow(i-1);}
var tThead=tlbControlHeader.createTHead();var tBody=tlbControl.createTBody();var aRow,aCell;var i,col;var isAlternating=false;var addHeader=false;var lastNumberCombination=0;var cssNameClass="";tThead.className="sTblDetailParlay";for(i=0;i<collection.length;i++){if(!addHeader){aRow=tThead.insertRow(-1);for(col=0;col<collection[i].length;col++){aCell=aRow.insertCell(-1);}
aCell=aRow.insertCell(-1);var divClose=document.createElement('div');divClose.className='sTdDetailClose';divClose.onclick=function(){$(mainHeaderToClose).find('.sDvPopupBetDetail').hide();resizeHeightFancyDetailBet();};aCell.align='right';aCell.appendChild(divClose);addHeader=true;}
aRow=tBody.insertRow(-1);for(col=0;col<collection[i].length;col++){if(col==0){if(isAlternating&&_alternateStyle){cssNameClass=_alternatingCss;}
else{cssNameClass=_singleCss;}
aRow.className=cssNameClass;aCell=aRow.insertCell(-1);aCell.className='sTdDetailTitleParlay';aCell.innerHTML=messages.lblPoolTypeNameParlay;aCell=aRow.insertCell(-1);}
else{aCell=aRow.insertCell(-1);aCell.innerHTML='';}}
for(row=0;row<collection[i].length;row++){if(row==0){isAlternating=!isAlternating;}
aRow=tBody.insertRow(-1);aRow.className=cssNameClass;aCell=aRow.insertCell(-1);aCell.className=configuration.Cells[0].ClassName;aCell.innerHTML=collection[i][row][0];aCell=aRow.insertCell(-1);aCell.className=configuration.Cells[1].ClassName;aCell.innerHTML=collection[i][row][1];}}}
function loadTableInformation(tableName,collection,configuration,mainHeaderToClose){if(_useStyleBetSlip){_singleCss=_singleCssBetSlip;_alternatingCss=_alternatingCssBetSlip;if(_defaultAlternateStyle){_singleCss=_alternatingCssBetSlip;}
else{_singleCss=_singleCssBetSlip;}}
else{if(_defaultAlternateStyle){_singleCss=_alternatingCss;}
else{_singleCss="sLinePrimary";}}
var tlbControl=returnObjById(tableName);var tlbControlHeader=returnObjById('tbHeader'+tableName);if(tlbControl==null&&tlbControlHeader==null){return false;}
for(i=tlbControl.rows.length;i>0;i--){tlbControl.deleteRow(i-1);}
for(i=tlbControlHeader.rows.length;i>0;i--){tlbControlHeader.deleteRow(i-1);}
var tThead=tlbControlHeader.createTHead();var tBody=tlbControl.createTBody();var aRow,aCell;var i,col;var isAlternating=false;var addHeader=false;var lastNumberCombination=0;var cssNameClass="";for(i=0;i<collection.length;i++){if(!addHeader){aRow=tThead.insertRow(-1);for(col=0;col<collection[i].length;col++){aCell=aRow.insertCell(-1);aCell.className=configuration.Cells[col].ClassName;aCell.innerHTML=configuration.Cells[col].HeaderName}
aCell=aRow.insertCell(-1);aCell.className='sTdDetailClose';aCell.onclick=function(){$(mainHeaderToClose).find('.sDvPopupBetDetail').hide();resizeHeightFancyDetailBet();};addHeader=true;}
aRow=tBody.insertRow(-1);for(col=0;col<collection[i].length;col++){if(col==0){aCell=aRow.insertCell(-1);aCell.className=configuration.Cells[col].ClassName;if(lastNumberCombination==collection[i][col]){aRow.className=cssNameClass;aCell.innerHTML=" ";}
else{if(isAlternating&&_alternateStyle){cssNameClass=_alternatingCss;}
else{cssNameClass=_singleCss;}
isAlternating=!isAlternating;aRow.className=cssNameClass;aCell.innerHTML=collection[i][col];}
lastNumberCombination=collection[i][col];}
else{aCell=aRow.insertCell(-1);aCell.className=configuration.Cells[col].ClassName;aCell.innerHTML=collection[i][col];}}}}
function loadTableInformationSource(tableName,collection,configuration,idInput,showEditAmount){var tlbControl=returnObjById(tableName);if(tlbControl==null){tlbControl=document.createElement("div");tlbControl.border=0;tlbControl.cellSpacing=0;tlbControl.cellPadding=0;tlbControl.className='sDvBetSlipStraightDetail';}
var aRow,aCell,aInput;var i,col;var isAlternating=false;var lastNumberCombination=0;var cssNameClass="";if(_isError){_singleCss=_alternatingCssBetSlipStraightError;}
for(i=0;i<collection.length;i++){aRow=document.createElement("div");aRow.className="sDvBetSlipRow";for(col=0;col<collection[i].length;col++){if(col!==4){if(col===0){aCell=document.createElement("div");if(lastNumberCombination==collection[i][col]){aCell.innerHTML=" ";}
else{aCell.innerHTML=(collection[i][col]).trim();}}
else{if(col==3&&_enableEditAmountToBetInBetslip&&showEditAmount){aCell=document.createElement("div");aInput=document.createElement("input");if(isMobile.any()){aInput.type='number';}else{aInput.type='text';}
aInput.id="inpAmount_"+idInput+"_"+collection[i][4];$(aInput).attr("value",(collection[i][col]).trim());$(aInput).attr("onblur","inputFocusOutBet(this, true)");aInput.className='TextboxNumeric TextboxRaceStraightsWithAmount';aCell.appendChild(aInput);}
else{aCell=document.createElement("div");aCell.innerHTML=collection[i][col].trim();}}
aCell.className=configuration.Cells[col].ClassName;aRow.appendChild(aCell);}}
tlbControl.appendChild(aRow);}
return $(tlbControl).html();}}
function inputFocusOutBet(elemt,isStraight){if(TrimNumber(elemt.value)==="0"){elemt.value="0";}
var inpId=elemt.id;var keysId=inpId.split('_');var objectShoppingCart;if(typeof shoppingCartEdit!=="undefined"&&shoppingCartEdit.IsEditMode()){objectShoppingCart=shoppingCartEditNewBet;}
else{objectShoppingCart=shoppingCart;}
if(isStraight){objectShoppingCart.UpdateAmountToBetStraight(keysId[1],keysId[2],keysId[3],elemt.value);}
else{objectShoppingCart.UpdateAmountToBetExotics(keysId[1],elemt.value);}
objectShoppingCart.GetshoppingCart(false);}