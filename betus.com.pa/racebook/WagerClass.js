var controlTicket;function WagerClass(){var _raceIndex=0;var _poolIndex=0;this.Races=new Array();this.SetRaceIndex=setRaceIndex;this.GetRaceIndex=getRaceIndex;this.SetPoolIndex=setPoolIndex;this.GetPoolIndex=getPoolIndex;this.RaceSelected=getRace;this.RaceByIndex=getRaceByIndex;this.PoolSelected=getPool;this.PoolSelectedByPooltype=getPoolSelectedByPooltype;this.RaceId=getRaceId;this.RacePostTime=getRacePostTime;this.PoolType=getPoolType;this.PoolCode=getPoolCode;this.PoolSize=getPoolSize;this.GetPoolAvailableWin=getPoolAvailableWin;this.GetPoolAvailablePlace=getPoolAvailablePlace;this.GetPoolAvailableShow=getPoolAvailableShow;this.AddRace=AddRaceInfo;this.AddRunner=AddRunnerInfo;this.AddRunnerStat=AddRunnerStatInfo;this.UpdateRunner=UpdateRunnerInfo;this.UpdateRaceMPT=UpdateRaceMPTInfo;this.AddPool=AddPoolInfo;this.ValidatePoolTypeIsLimitEnable=PoolTypeApplyLimitPayOut;function setRaceIndex(value){_raceIndex=value;}
function getRaceIndex(){return _raceIndex;}
function setPoolIndex(value){_poolIndex=value;}
function getPoolIndex(){return _poolIndex;}
function getRace(){var _obj=null;try{_obj=this.Races[this.RaceId()];}
catch(err){_obj=null;}
return _obj;}
function getRaceByIndex(){var _obj=null;try{_obj=this.Races[_raceIndex];}
catch(err){_obj=null;}
return _obj;}
function getPool(){var _obj=null;try{_obj=this.Races[this.RaceId()].Pools[_poolIndex];}
catch(err){_obj=null;}
return _obj;}
function getPoolSelectedByPooltype(poolType){var _obj=null;poolType=parseInt(poolType,10);if(poolType===1001||poolType===1002||poolType===1003){try{for(let positionInfo=0;this.Races[this.RaceId()].Pools.length;positionInfo++){if(1000===this.Races[this.RaceId()].Pools[positionInfo].Type){if(poolType===1001&&this.Races[this.RaceId()].Pools[positionInfo].AvailableWin){_obj=this.Races[this.RaceId()].Pools[positionInfo];}
if(poolType===1002&&this.Races[this.RaceId()].Pools[positionInfo].AvailablePlace){_obj=this.Races[this.RaceId()].Pools[positionInfo];}
if(poolType===1003&&this.Races[this.RaceId()].Pools[positionInfo].AvailableShow){_obj=this.Races[this.RaceId()].Pools[positionInfo];}
break;}}}
catch(err){_obj=null;}}
else{try{for(let positionInfo=0;this.Races[this.RaceId()].Pools.length;positionInfo++){if(poolType==this.Races[this.RaceId()].Pools[positionInfo].Type){_obj=this.Races[this.RaceId()].Pools[positionInfo];break;}}}
catch(err){_obj=null;}}
return _obj;}
function getRaceId(){var _raceId=null;try{_raceId=this.Races[_raceIndex].RaceId;}
catch(err){_raceId=null;}
return _raceId;}
function getRacePostTime(){var _racePostTime=null;try{_racePostTime=this.Races[_raceIndex].PostTime;}
catch(err){_racePostTime=null;}
return _racePostTime;}
function getPoolType(){var _obj=this.PoolSelected();return(_obj)?_obj.Type:null;}
function getPoolCode(){var _obj=this.PoolSelected();return(_obj)?_obj.Code:null;}
function getPoolSize(){var _obj=this.PoolSelected();return(_obj)?_obj.Size:null;}
function getPoolAvailableWin(){var _obj=this.PoolSelected();return(_obj)?_obj.AvailableWin:null;}
function getPoolAvailablePlace(){var _obj=this.PoolSelected();return(_obj)?_obj.AvailablePlace:null;}
function getPoolAvailableShow(){var _obj=this.PoolSelected();return(_obj)?_obj.AvailableShow:null;}
function PoolTypeApplyLimitPayOut(limitPayOutEnable,poolTypeIdToCheck,poolTypeSize){var applied=false;if(poolTypeIdToCheck>=0&&poolTypeIdToCheck<8){applied=limitPayOutEnable;}
else{if(poolTypeIdToCheck>=8&&poolTypeIdToCheck<1000){var raceIdToCheck=parseInt(currentRaceId,10)+poolTypeSize-1;applied=this.Races[raceIdToCheck].LimitPayOutEnable;}
else{applied=limitPayOutEnable;}}
return applied;}
function AddRaceInfo(index,idRace,order,name,code,distance,surface,purse,postTimeDate,strPostTime,mtp,status,limitPayOutEnable,countryId,city,trackType,condition,maxLimitBetByRace,comment,videoURL,hasPoolTypeAvailable,stats,raceType,raceClaimPrice){idRace+=_incremetRaceIdIn;this.Races[index]=new Object;this.Races[index].RaceId=idRace;this.Races[index].Order=order;this.Races[index].PostTime=postTimeDate;this.Races[index].MTP=mtp;this.Races[index].Status=status;this.Races[index].RaceIdNumeric=idRace-_incremetRaceIdIn;this.Races[index].LimitPayOutEnable=limitPayOutEnable;this.Races[index].CountryId=countryId;this.Races[index].City=city;this.Races[index].TrackType=trackType;this.Races[index].HasPoolTypeAvailable=hasPoolTypeAvailable;this.Races[idRace]=new Object;this.Races[idRace].RaceId=idRace;this.Races[idRace].Name=name;this.Races[idRace].Code=code;this.Races[idRace].PostTime=strPostTime;this.Races[idRace].Distance=distance;this.Races[idRace].Surface=surface;this.Races[idRace].Purse=purse;this.Races[idRace].LimitPayOutEnable=limitPayOutEnable;this.Races[idRace].CountryId=countryId;this.Races[idRace].City=city;this.Races[idRace].TrackType=trackType;this.Races[idRace].Condition=condition;this.Races[idRace].MaxLimitBetByRace=maxLimitBetByRace;this.Races[idRace].Comment=comment;this.Races[idRace].VideoURL=videoURL;this.Races[idRace].HasStats=stats;this.Races[idRace].RaceType=raceType;this.Races[idRace].RaceClaimgPrice=raceClaimPrice;this.Races[idRace].Runners=new Array();this.Races[idRace].Pools=new Array();}
function AddRunnerInfo(idRace,index,programNumber,letter,name,trainer,jockey,weight,price,medication,odds,calculatedOdds,scratch,comment,jed,je,ted,te,ag,co,birth,vss,rt){idRace+=_incremetRaceIdIn;this.Races[idRace].Runners[index]=new Object();this.Races[idRace].Runners[index].ProgramNumber=programNumber;this.Races[idRace].Runners[index].ProgramLetter=letter;this.Races[idRace].Runners[index].Name=name;this.Races[idRace].Runners[index].Trainer=trainer;this.Races[idRace].Runners[index].Jockey=jockey;this.Races[idRace].Runners[index].Weight=weight;this.Races[idRace].Runners[index].Price=price;this.Races[idRace].Runners[index].Medication=medication;this.Races[idRace].Runners[index].Odds=odds;this.Races[idRace].Runners[index].CalculatedOdds=calculatedOdds;this.Races[idRace].Runners[index].Scratch=scratch;this.Races[idRace].Runners[index].ScratchLastState=scratch;this.Races[idRace].Runners[index].Comment=comment;this.Races[idRace].Runners[index].JockeyEfeDay=jed;this.Races[idRace].Runners[index].JockeyEfe=je;this.Races[idRace].Runners[index].TrainerEfeDay=ted;this.Races[idRace].Runners[index].TrainerEfe=te;this.Races[idRace].Runners[index].Age=ag;this.Races[idRace].Runners[index].Color=co;this.Races[idRace].Runners[index].Birth=birth;this.Races[idRace].Runners[index].VictStartSt=vss;this.Races[idRace].Runners[index].StyleType=rt;this.Races[idRace].Runners[index].Id='r_'+idRace+'_'+index+'_'+programNumber+'_'+letter;this.Races[idRace].Runners[index].Stats=new Array();}
function AddRunnerStatInfo(idRace,index,rdt,tts,st,tc,w,rd,m,fo,rsp,rc,rcp){idRace+=_incremetRaceIdIn;if(this.Races[idRace].Runners[index].Stats.length<5){let indexStat=this.Races[idRace].Runners[index].Stats.length;this.Races[idRace].Runners[index].Stats[indexStat]=new Object;this.Races[idRace].Runners[index].Stats[indexStat].RaceDate=rdt;this.Races[idRace].Runners[index].Stats[indexStat].TimedTimeSeconds=tts;this.Races[idRace].Runners[index].Stats[indexStat].SurfaceType=st;this.Races[idRace].Runners[index].Stats[indexStat].TrackCondition=tc;this.Races[idRace].Runners[index].Stats[indexStat].Weight=w;this.Races[idRace].Runners[index].Stats[indexStat].RaceDistance=rd;this.Races[idRace].Runners[index].Stats[indexStat].Medication=m;this.Races[idRace].Runners[index].Stats[indexStat].FinalPosition=fo;this.Races[idRace].Runners[index].Stats[indexStat].RunnerSpeed=rsp;this.Races[idRace].Runners[index].Stats[indexStat].RaceType=rc;this.Races[idRace].Runners[index].Stats[indexStat].RaceClaimgPrice=rcp;}}
function AddPoolInfo(idRace,index,code,type,name,size,availableWin,availablePlace,availableShow){idRace+=_incremetRaceIdIn;this.Races[idRace].Pools[index]=new Object;this.Races[idRace].Pools[index].Type=type;this.Races[idRace].Pools[index].Code=code;this.Races[idRace].Pools[index].Name=name;this.Races[idRace].Pools[index].Size=size;this.Races[idRace].Pools[index].AvailableWin=availableWin;this.Races[idRace].Pools[index].AvailablePlace=availablePlace;this.Races[idRace].Pools[index].AvailableShow=availableShow;}
function UpdateRaceMPTInfo(idRace,newMTP,newPostTime){for(var positionRace=0;positionRace<this.Races.length;positionRace++){if(this.Races[positionRace]){if(this.Races[positionRace].RaceIdNumeric==idRace){this.Races[positionRace].PostTime=newPostTime;this.Races[positionRace].MTP=newMTP;_secondsOnClient=1;}}}}
function UpdateRunnerInfo(idRace,index,programNumber,letter,name,trainer,jockey,weight,price,medication,odds,calculatedOdds,scratch){idRace+=_incremetRaceIdIn;if(this.Races[idRace]){if(this.Races[idRace].Runners[index]){this.Races[idRace].Runners[index].Name=name;this.Races[idRace].Runners[index].Trainer=trainer;this.Races[idRace].Runners[index].Jockey=jockey;this.Races[idRace].Runners[index].Weight=weight;this.Races[idRace].Runners[index].Price=price;this.Races[idRace].Runners[index].Medication=medication;this.Races[idRace].Runners[index].Odds=odds;this.Races[idRace].Runners[index].CalculatedOdds=calculatedOdds;this.Races[idRace].Runners[index].ScratchLastState=this.Races[idRace].Runners[index].Scratch;this.Races[idRace].Runners[index].Scratch=scratch;}
else{window.status=(idRace+" - "+index+" - "+programNumber+" - "+letter+" - "+name+" - "+trainer+" - "+jockey+" - "+weight+" - "+price+" - "+medication+" - "+odds+" - "+calculatedOdds+" - "+scratch);}}}}
function CreateControlTicket(){if(controlTicket===undefined){controlTicket=new ControlTicket(shoppingCart.CurrencyISO);}}
class ControlTicket{constructor(currencyId){this.CurrencyId=currencyId;this.TicketList=Array();this.CurrentRefTicket=-1;}
AddNewTicket(mode){this.CurrentRefTicket=this.TicketList.length;let p=new TicketClass(this.TicketList.length,mode);this.TicketList.push(p);}
GetTicketInformation(ref){if(ref===undefined){ref=this.CurrentRefTicket;}
for(let i=0;i<this.TicketList.length;i++){if(this.TicketList[i]!==undefined&&this.TicketList[i].Reference===ref){return this.TicketList[i];}}
return undefined;}
set ChangeRefTicket(newRef){this.CurrentRefTicket=newRef;}}
class TicketClass{constructor(ref,mode){this.Reference=ref;this.Mode=mode;this.TotalAmount=0;this.TotalBets=0;this.BetList=Array();this.CurrentRefBet=-1;}
AddNewBet(pId,amtB){this.CurrentRefBet=this.BetList.length;let p=new BetClass(this.BetList.length,pId,amtB);this.BetList.push(p);}
RemoveBet(ref){for(let i=0;i<this.BetList.length;i++){if(this.BetList[i]===undefined&&this.BetList[i].Reference===ref){delete this.BetList[i];break;}}}
UpdateTotals(){this.TotalAmount=0;this.TotalBets=0;for(let i=0;i<this.BetList.length;i++){if(this.BetList[i]===undefined){this.TotalBets++;this.TotalAmount+=this.BetList[i].AmountToBet;}}}
GetBetInformation(ref){if(ref===undefined){ref=this.CurrentRefBet;}
for(let i=0;i<this.BetList.length;i++){if(this.BetList[i]!==undefined&&this.BetList[i].Reference===ref){return this.BetList[i];}}
return undefined;}
HasParlay(){for(let i=0;i<this.BetList.length;i++){if(this.BetList[i]!==undefined&&this.BetList[i].PoolTypeId>=1000){return true;}}
return false;}
IsValid(){let totalEntries=0;for(let i=0;i<this.BetList.length;i++){if(this.BetList[i]!==undefined&&this.BetList[i].PoolTypeId>=1000){for(let bd=0;bd<this.BetList[i].BetDetailList.length;bd++){if(this.BetList[i].BetDetailList[bd]!==undefined){totalEntries++;}}}}
return totalEntries>1;}
IsValidOneEntrie(){let totalEntries=0;for(let i=0;i<this.BetList.length;i++){if(this.BetList[i]!==undefined&&this.BetList[i].PoolTypeId>=1000){for(let bd=0;bd<this.BetList[i].BetDetailList.length;bd++){if(this.BetList[i].BetDetailList[bd]!==undefined){totalEntries++;}}}}
return totalEntries>0;}}
class BetClass{constructor(ref,pId,amtB){this.Reference=ref;this.PoolTypeId=parseInt(pId,10);this.AmountToBet=amtB;this.PoolTypeName=this.GetPoolTypeName(pId);this.BetDetailList=Array();}
AddNewBetDetail(trkE,trId,trN,rId,rPgN,rPgL,rN,trkEF,rP){if(this.ExistBetDetailPosition(trkE,trId,rId,rP)){for(let i=0;i<this.BetDetailList.length;i++){if(this.BetDetailList[i]!==undefined&&this.BetDetailList[i].TrackEventId===trkE&&this.BetDetailList[i].TrackId===trId&&this.BetDetailList[i].RaceId===rId&&this.BetDetailList[i].RunnerPostition===rP){this.BetDetailList[i].RunnerProgramNumber=rPgN;this.BetDetailList[i].RunnerProgramLetter=rPgL;this.BetDetailList[i].RunnerName=rN;break;}}}
else{let p=new BetDetailClass(this.BetDetailList.length,trkE,trId,trN,rId,rPgN,rPgL,rN,trkEF,rP);this.BetDetailList.push(p);}
this.BetDetailList.sort(function(a,b){if(a!==undefined&&b!==undefined){if(a.TrackEventId>b.TrackEventId){return 1;}
else{if(a.TrackEventId<b.TrackEventId){return-1;}}
if(a.TrackName>b.TrackName){return 1;}
else{if(a.TrackName<b.TrackName){return-1;}}
if(a.RaceId>b.RaceId){return 1;}
else{if(a.RaceId<b.RaceId){return-1;}}
if(a.RunnerPostition>b.RunnerPostition){return 1;}
else{if(a.RunnerPostition<b.RunnerPostition){return-1;}}
if(parseInt(a.RunnerProgramNumber,10)>parseInt(b.RunnerProgramNumber,10)){return 1;}
else{if(parseInt(a.RunnerProgramNumber,10)<parseInt(b.RunnerProgramNumber,10)){return-1;}}}
return 0;});}
GetBetDetailInformation(ref){for(let i=0;i<this.BetDetailList.length;i++){if(this.BetDetailList[i]!==undefined&&this.BetDetailList[i].Reference===ref){return this.BetDetailList[i];}}
return undefined;}
GetMeetingList(){let list=Array();for(let i=0;i<this.BetDetailList.length;i++){if(this.BetDetailList[i]!==undefined){let currentIdEvent=this.BetDetailList[i].TrackId+','+this.BetDetailList[i].TrackEventId+","+this.BetDetailList[i].RaceId;let foundIl=false;for(let l=0;l<list.length;l++){if(list[l]===currentIdEvent){foundIl=true;}}
if(!foundIl){list.push(currentIdEvent);}}}
return list;}
RemoveBetDetail(ref){for(let i=0;i<this.BetDetailList.length;i++){if(this.BetDetailList[i]!==undefined&&this.BetDetailList[i].Reference===ref){this.BetDetailList[i]=undefined;break;}}}
RemoveBetDetailByMettingRace(trkE,trId,rId){for(let i=0;i<this.BetDetailList.length;i++){if(this.BetDetailList[i]!==undefined&&this.BetDetailList[i].TrackEventId===trkE&&this.BetDetailList[i].TrackId===trId&&this.BetDetailList[i].RaceId===rId){this.BetDetailList[i]=undefined;}}}
RemoveBetDetailByInformation(trkE,trId,rId,rP){for(let i=0;i<this.BetDetailList.length;i++){if(this.BetDetailList[i]!==undefined&&this.BetDetailList[i].TrackEventId===trkE&&this.BetDetailList[i].TrackId===trId&&this.BetDetailList[i].RaceId===rId&&this.BetDetailList[i].RunnerPostition===rP){this.BetDetailList[i]=undefined;break;}}}
ExistBetDetail(trkE,trId,rId,rPn){for(let i=0;i<this.BetDetailList.length;i++){if(this.BetDetailList[i]!==undefined&&this.BetDetailList[i].TrackEventId===trkE&&this.BetDetailList[i].TrackId===trId&&this.BetDetailList[i].RaceId===rId&&this.BetDetailList[i].RunnerProgramNumber===rPn){return true;}}
return false;}
ExistBetDetailPosition(trkE,trId,rId,rP){for(let i=0;i<this.BetDetailList.length;i++){if(this.BetDetailList[i]!==undefined&&this.BetDetailList[i].TrackEventId===trkE&&this.BetDetailList[i].TrackId===trId&&this.BetDetailList[i].RaceId===rId&&this.BetDetailList[i].RunnerPostition===rP){return true;}}
return false;}
GetPoolTypeName(value){switch(value){case "0":return messages.lblPoolTypeNameStraight;case "4":return messages.lblPoolTypeNameQuinella;case "5":return messages.lblPoolTypeNameExacta;case "6":return messages.lblPoolTypeNameTrifecta;case "7":return messages.lblPoolTypeNameSuperfecta;case "8":return messages.lblPoolTypeNameDailyDouble;case "9":return messages.lblPoolTypeNamePick3;case "10":return messages.lblPoolTypeNamePick4;case "11":return messages.lblPoolTypeNamePick5;case "41":return messages.lblPoolTypeNamePick6;case "1000":case "1001":case "1002":case "1003":case "1004":case "1005":case "1006":case "1007":return messages.lblPoolTypeNameParlay;default:return '';}}
ChangePoolType(pId){this.PoolTypeId=parseInt(pId,10);;this.PoolTypeName=this.GetPoolTypeName(pId);}
ChangeAmountToBet(amtB){this.AmountToBet=amtB;}}
class BetDetailClass{constructor(ref,trkE,trId,trN,rId,rPgN,rPgL,rN,trkEF,rP){this.Reference=ref;this.TrackEventId=trkE;this.TrackEventFormat=trkEF;this.TrackId=trId;this.TrackName=trN;this.RaceId=rId;this.RunnerProgramNumber=rPgN;this.RunnerProgramLetter=rPgL;this.RunnerName=rN;this.RunnerPostition=rP;}}
function LoadRunnerFromControlTickets(){let basicIdCheck='dvtlbRunners';for(let ict=0;ict<controlTicket.TicketList.length;ict++){let ct=controlTicket.TicketList[ict];if(ct!==undefined){for(let ib=0;ib<ct.BetList.length;ib++){let b=ct.BetList[ib];if(b!==undefined){if(b.PoolTypeId>=1000){for(let ibd=0;ibd<b.BetDetailList.length;ibd++){let bd=b.BetDetailList[ibd];if(bd!==undefined){if(bd.TrackEventId===_trackEvent&&bd.TrackId===_trackCode&&bd.RaceId===_raceId){let pn=bd.RunnerProgramNumber;let hp=bd.RunnerPostition;if(_parlayType===ParlayType.MultiTrackNormal){hp=1;}
let runnerToCheck=basicIdCheck+'1_ckb'+hp+'__'+pn;checkCheckbox(document.getElementById(runnerToCheck));}}}}}}}}}