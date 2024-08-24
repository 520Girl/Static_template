function CancelParlay()
{_parlayEntries=new Array();ChangeWindowsState('trAccountInformation',true,'IconMaximizeRace');showRaceInformation(_WagerInfo.RaceId(),_WagerInfo.GetRaceIndex());return true;}
function ResetParlay()
{isResetAction=true;_parlayEntries=new Array();showRunnersParlay(_WagerInfo.RaceId(),_WagerInfo.GetRaceIndex());isResetAction=false;return true;}
function ChangeRaceOrder(isUp)
{var i=0,index=-1;var obj;if((_parlayEntries==null)||(_parlayEntries.length==0))
{return false;}
for(i=0;i<_parlayEntries.length;i++)
{if((_parlayEntries[i]!=null)&&(_parlayEntries[i].TableIndex==currentRaceParlayIndexSelection))
{index=i;break;}}
if(index==-1)
{return false;}
if(isUp)
{if((index-1)>=0)
{obj=_parlayEntries[index];_parlayEntries[index]=_parlayEntries[index-1];_parlayEntries[index-1]=obj;}}
else
{if((index+1)<_parlayEntries.length)
{obj=_parlayEntries[index];_parlayEntries[index]=_parlayEntries[index+1];_parlayEntries[index+1]=obj;}}
return true;}
function setRunnersSelected(raceId)
{var indexRace=RaceIndexOf(_parlayEntries,raceId);var currentProgramNumber=-1,place=0;SetCheckedControls(ArrayBoxOptions,0,false);SetCheckedControls(ArrayBoxOptions,1,false);SetCheckedControls(ArrayBoxOptions,2,false);if(indexRace!==-1&&_parlayEntries[indexRace].HorseList!==null&&_parlayEntries[indexRace].HorseList.length>0)
{place=0;while(place<_parlayEntries[indexRace].HorseList.length)
{currentProgramNumber=_parlayEntries[indexRace].HorseList[place].ProgramNumber;if(_parlayEntries[indexRace].HorseList[place].Win)
{SetRunnerCheckBox(0,currentProgramNumber);}
if(_parlayEntries[indexRace].HorseList[place].Place)
{SetRunnerCheckBox(1,currentProgramNumber);}
if(_parlayEntries[indexRace].HorseList[place].Show)
{SetRunnerCheckBox(2,currentProgramNumber);}
place++;}}
return true;}
function SetRunnerCheckBox(index,runnerProgramNumber)
{var i=0,pos=-1,programNumber=0;var ctrlName="";var ctrlCheckBox=null;for(i=0;i<ArrayBoxOptions.length;i++)
{ctrlName=ArrayBoxOptions[i][index];ctrlCheckBox=returnObjById(ctrlName);if(ctrlCheckBox!=null)
{pos=ctrlName.indexOf("__");if(pos>-1)
{programNumber=parseInt(ctrlName.substring(pos+2,ctrlName.length));if(runnerProgramNumber==programNumber)
{ctrlCheckBox.checked=true;return true;}}}}
return false;}
function showRunnersParlay(raceId,index){ShowBettingMode();try
{currentRaceParlayIndexSelection=index;if(!isResetAction)
{GetHorseParlayCollection();}
showRaceInformationParlay(raceId,index);var _raceId,_raceOrder=0,_pos=0;var brName="br",raceName="race",tableName="tlbRunners";var i=0,tlb,br,racelabel;if((_WagerInfo.Races[raceId].Runners==null))
{alert("showRunnersParlay :: Wrong information. Please contact customer service.");return;}
currentRaceParlayIndex=index;var poolType=_WagerInfo.PoolSelected().Type;showRunnersTable(raceId,poolType,'tlbRunners1');setRunnersSelected(raceId,'tlbRunners1');i=1;tlb=returnObjById(tableName+i);br=returnObjById(brName+i);racelabel=returnObjById(raceName+i);if((br!==null)&&(racelabel!==null))
{if(_WagerInfo.Races[index+i-1])
{_raceId=_WagerInfo.Races[index+i-1].RaceId;tlb.style.display='';br.style.display='';racelabel.style.display='';racelabel.innerHTML=_WagerInfo.Races[_raceId].Code+" - "+_WagerInfo.Races[_raceId].Name;}}}
catch(er)
{alert("showRunnersParlay :: "+er.name+"\n"+er.message);}}
function showRaceInformationParlay(raceId,index)
{try
{if(raceId==-1)
{return;}
if(_parlayRaces)
{_parlayRaces.SelectRace(index);}}
catch(er)
{alert("showRaceInformationParlay :: "+er.name+"\n"+er.message);}}
function TableParlayIndexOf(raceId)
{var index=-1;try
{if(raceId==-1)
{return index;}
var tlb=returnObjById('dtlRacesParlay');var i=0,pos=0;var _linkObj;if((tlb!=null)&&(tlb.rows[0].cells.length>0))
{for(i=0;i<tlb.rows[0].cells.length;i++)
{_linkObj=returnObjById('dtlRacesParlay_'+i);if(_linkObj)
{if(parseInt(_linkObj.RaceId)==raceId+_incremetRaceIdIn)
{return i;}}}}}
catch(er)
{alert("TableParlayIndexOf :: "+er.name+"\n"+er.message);}}
function RunnerIndexOf(entriesCollection,raceId,programNumber)
{var i=0;if((entriesCollection==null)||(entriesCollection.length==0)||(entriesCollection[raceId]==null)||(entriesCollection[raceId].Runners==null)||(entriesCollection[raceId].Runners.length==0))
{return-1;}
for(i=0;i<entriesCollection[raceId].Runners.length;i++)
{if((entriesCollection[raceId].Runners[i].ProgramNumber==programNumber)&&(!entriesCollection[raceId].Runners[i].Scratch))
{return i;}}
return-1;}
function ContainsHorse(entriesCollection,programNumber)
{var i=0;if((entriesCollection==null)||(entriesCollection.length==0))
{return-1;}
for(i=0;i<entriesCollection.length;i++)
{if(entriesCollection[i].ProgramNumber==programNumber)
{return i;}}
return-1;}
function RaceIndexOf(entriesCollection,raceId)
{var i=0;if((entriesCollection==null)||(entriesCollection.length==0))
{return-1;}
for(i=0;i<entriesCollection.length;i++)
{if((entriesCollection[i]!=null)&&(entriesCollection[i].RaceId==raceId))
{return i;}}
return-1;}
function AddToParlay(raceId,programNumber,poolType)
{var index=0,indexRunner=-1,indexRace=-1;if(_parlayEntries)
{indexRace=RaceIndexOf(_parlayEntries,raceId);if(indexRace!=-1)
{index=ContainsHorse(_parlayEntries[indexRace].HorseList,programNumber);if(index==-1)
{index=_parlayEntries[indexRace].HorseList.length;}
else
{switch(poolType)
{case PoolType.Win:_parlayEntries[indexRace].HorseList[index].Win=true;break;case PoolType.Place:_parlayEntries[indexRace].HorseList[index].Place=true;break;case PoolType.Show:_parlayEntries[indexRace].HorseList[index].Show=true;break;}
index=-1;return;}}
else
{index=0;indexRace=_parlayEntries.length;_parlayEntries[indexRace]=new Object;_parlayEntries[indexRace].RaceId=raceId;_parlayEntries[indexRace].TableIndex=currentRaceParlayIndex;_parlayEntries[indexRace].HorseList=new Array();}
if((indexRace!=-1)&&(index!=-1))
{indexRunner=RunnerIndexOf(_WagerInfo.Races,raceId,programNumber);if(indexRunner!=-1)
{_parlayEntries[indexRace].HorseList[index]=new Object;_parlayEntries[indexRace].HorseList[index].ProgramNumber=programNumber;_parlayEntries[indexRace].HorseList[index].Name=_WagerInfo.Races[raceId].Runners[indexRunner].Name;_parlayEntries[indexRace].HorseList[index].Win=false;_parlayEntries[indexRace].HorseList[index].Place=false;_parlayEntries[indexRace].HorseList[index].Show=false;switch(poolType)
{case PoolType.Win:_parlayEntries[indexRace].HorseList[index].Win=true;break;case PoolType.Place:_parlayEntries[indexRace].HorseList[index].Place=true;break;case PoolType.Show:_parlayEntries[indexRace].HorseList[index].Show=true;break;}}}}}
function ClearParlayEntry(raceId)
{var indexRace=-1;if(_parlayEntries)
{indexRace=RaceIndexOf(_parlayEntries,raceId);if(indexRace!=-1)
{_parlayEntries[indexRace].HorseList=new Array();}}}
function GetHorseParlayCollection()
{var i=0,j=0,pos=-1,poolSize=0,currentSize=0;var ctrlCheckBox,_ckbBox,ctrlName="",programNumber=0;var runnersCollection="",strmessage;var isHorseChecked=false;try
{var userSelection,poolType=_WagerInfo.PoolSelected().Type;var idRace=_WagerInfo.Races[currentRaceParlayIndex].RaceId;poolSize=1;ClearParlayEntry(idRace);switch(poolType)
{case PoolType.Parlay:if(ArrayBoxOptions.length>0)
{userSelection=new Array();for(i=0;i<ArrayBoxOptions[0].length;i++)
userSelection[i]=new Array();}
for(i=0;i<ArrayBoxOptions.length;i++)
{for(j=0;j<ArrayBoxOptions[i].length;j++)
{ctrlName=ArrayBoxOptions[i][j];ctrlCheckBox=returnObjById(ctrlName);if((ctrlCheckBox!=null)&&(ctrlCheckBox.checked))
{pos=ctrlName.indexOf("__");if(pos>-1)
{programNumber=ctrlName.substring(pos+2,ctrlName.length);userSelection[j][userSelection[j].length]=programNumber;}}}}
runnersCollection="";for(i=0;i<userSelection.length;i++)
{for(j=0;j<userSelection[i].length;j++)
{AddToParlay(idRace,parseInt(userSelection[i][j]),i+1);runnersCollection+=userSelection[i][j];if(j+1<userSelection[i].length)
runnersCollection+=", ";}
if((i+1<userSelection.length)&&(userSelection[i+1].length>0))
{runnersCollection+=" / ";currentSize++;}
else
{if(userSelection[i].length>0)
currentSize++;}}
break;}}
catch(er)
{alert("GetHorseParlayCollection :: "+er.name+"\n"+er.message);runnersCollection="";}
return runnersCollection;}
function FillParlayTable()
{var i=0,totalColumnsParlay=3;var isAlternating=false;var tableName="tlbParlayEntries";var tlbEntries=returnObjById(tableName);var raceOrderList="";var parlaySize=0;if(tlbEntries==null)
{alert("FillParlayTable :: "+messages._1007);return;}
for(i=tlbEntries.rows.length;i>0;i--)
{tlbEntries.deleteRow(i-1);}
for(i=0;i<_parlayEntries.length;i++)
{if(_parlayEntries[i].HorseList.length==0)
{_parlayEntries.splice(i,1);return;}
else
{parlaySize++;var aRow;if(isMacintosh)
{aRow=document.createElement("TR");tlbEntries.appendChild(aRow);}
else
{aRow=tlbEntries.insertRow(tlbEntries.rows.length);}
if(isAlternating)
{aRow.className="sLineSecondary";}
else
{aRow.className="sLinePrimary";}
var j=0;for(j=0;j<totalColumnsParlay;j++)
{if(isMacintosh)
{var cell=document.createElement("TD");aRow.appendChild(cell);}
else
{aRow.insertCell(j);}}
if(_parlayEntries[i].TableIndex==currentRaceParlayIndexSelection)
{aRow.className="ParlayListSelected";}
aRow.cells[0].innerHTML=i+1;aRow.cells[0].width="50px";raceOrderList+=_WagerInfo.Races[_parlayEntries[i].RaceId].Code;if((i+1<_parlayEntries.length)&&(_parlayEntries[i+1].HorseList.length>0))
{raceOrderList+=" / ";}
var tempInstruction="showRunnersParlay("+_parlayEntries[i].RaceId+", "+_parlayEntries[i].TableIndex+");";cellStr="<a href=\"javascript:"+tempInstruction+"\"  />";cellStr+=_WagerInfo.Races[_parlayEntries[i].RaceId].Code+"</a>";aRow.cells[1].innerHTML=cellStr;aRow.cells[1].width="50px";aRow.cells[1].style.textAlign="center";setObjAttribute(aRow.cells[2],"width","*");CreateTable(aRow.cells[2],_parlayEntries[i].HorseList);isAlternating=!isAlternating;if(isMacintosh)
{aRow=document.createElement("TR");tlbEntries.appendChild(aRow);}
else
{aRow=tlbEntries.insertRow(tlbEntries.rows.length);}
if(isMacintosh)
{for(j=0;j<totalColumnsParlay;j++)
{var cell=document.createElement("TD");cell.className="sTrLineSeparator";cell.style.width="1px";aRow.appendChild(cell);}}
else
{aRow.insertCell(0);aRow.cells[0].className="sTrLineSeparator";aRow.cells[0].height="1px";aRow.cells[0].colSpan=totalColumnsParlay;}}}}
function CreateTable(objContainer,runnerCollection)
{var i=0,j=0;var table,tablebody,row,cell,currenttext;var isAlternating=false;var wpsValues="";table=document.createElement("TABLE");tablebody=document.createElement("TBODY");for(j=0;j<runnerCollection.length;j++)
{row=document.createElement("TR");if(isAlternating)
{row.className="sLineSecondary";}
else
{row.className="sLinePrimary";}
wpsValues=(runnerCollection[j].Win==true)?"W":"";wpsValues+=(runnerCollection[j].Place==true)?"P":"";wpsValues+=(runnerCollection[j].Show==true)?"S":"";cell=document.createElement("TD");cell.width="45px";currenttext=document.createTextNode(runnerCollection[j].ProgramNumber+" "+wpsValues);cell.appendChild(currenttext);row.appendChild(cell);cell=document.createElement("TD");currenttext=document.createTextNode(runnerCollection[j].Name);cell.appendChild(currenttext);setObjAttribute(cell,"width","*");row.appendChild(cell);tablebody.appendChild(row);isAlternating=!isAlternating;}
table.appendChild(tablebody);objContainer.appendChild(table);table.setAttribute("border","0");table.setAttribute("cellspacing","0");table.setAttribute("cellpadding","0");table.setAttribute("width","100%");table.setAttribute("class","ParlayRunners");}