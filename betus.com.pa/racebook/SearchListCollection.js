var searchCollection;var _searchType=0;var _searchTypeFilter=0;function SearchListCollection(){var _count=0;this.TotalIndex=0;this.TotalCoincidence=0;this.CurrentIndex=0;this.Add=AddSearchInfo;this.SortOrderNameAndMTP=SortOrderListNameAndMTP;this.SortOrderMTP=SortListOrderMTP;this.Tracks=new Array();this.TotalCount=function(){return _count;};this.ClearList=function(){this.Tracks=new Array();};this.NextIndex=function(){if((this.CurrentIndex+1)>(this.TotalIndex-1)){this.CurrentIndex=this.TotalIndex-1;}
else{this.CurrentIndex=this.CurrentIndex+1;}
return this.CurrentIndex;};this.LastIndex=function(){if((this.CurrentIndex-1)<0){this.CurrentIndex=0;}
else{this.CurrentIndex=this.CurrentIndex-1;}
return this.CurrentIndex;};function AddInfo(collection,trackCode,name,race,mtp,trackEvent,raceId,trackType,mtpSeconds,runnerName,runnerDriver,runnerPN,runnerLetter,raceCode,countryId,trackEventText){var index=collection.length;_count++;collection[index]=new Object;collection[index].TrackCode=trackCode;collection[index].Name=name;collection[index].Race=race;collection[index].MTP=mtp;collection[index].RaceId=raceId;collection[index].TrackType=trackType;collection[index].TrackEvent=trackEvent;collection[index].MTPSeconds=mtpSeconds;collection[index].RunnerName=runnerName;collection[index].RunnerDriver=runnerDriver;collection[index].RunnerPN=runnerPN;collection[index].RunnerLetter=runnerLetter;collection[index].RaceCode=raceCode;collection[index].CountryId=countryId;collection[index].TrackEventText=trackEventText;}
function SortOrderListNameAndMTP(){this.Tracks.sort(function(a,b){if(a.Name!=b.Name){var nameA=replaceAll(a.Name,' ','');var nameB=replaceAll(b.Name,' ','');if(nameA.localeCompare(nameB)>0){return 1;}
if(nameA.localeCompare(nameB)<0){return-1;}}
else{if(typeof a.MTPSeconds!=="undefined"&&typeof b.MTPSeconds!=="undefined"){return a.MTPSeconds-b.MTPSeconds;}
else{return a.RaceId-b.RaceId;}}});}
function SortListOrderMTP(){this.Tracks.sort(function(a,b){if(typeof a.MTPSeconds!=="undefined"&&typeof b.MTPSeconds!=="undefined"){return a.MTPSeconds-b.MTPSeconds;}
else{return a.RaceId-b.RaceId;}});}
function AddSearchInfo(trackCode,name,race,mtp,trackEvent,raceId,trackType,mtpSeconds,runnerName,runnerDriver,runnerPN,runnerLetter,raceCode,countryId,trackEventText){AddInfo(this.Tracks,trackCode,name,race,mtp,trackEvent,raceId,trackType,mtpSeconds,runnerName,runnerDriver,runnerPN,runnerLetter,raceCode,countryId,trackEventText);}
function SetFavoriteRace(collection,trackCode){for(i=0;i<collection.length;i++){if(collection[i].TrackCode==trackCode){collection[i].IsFavorite="1";break;}}}
function RemoveFavoriteRace(collection,trackCode){for(i=0;i<collection.length;i++){if(collection[i].TrackCode==trackCode){collection[i].IsFavorite="0";break;}}}}
function RestartAndClearSearchInfomation(){if(searchCollection!=undefined){SearchClean();searchCollection.TotalIndex=0;searchCollection.TotalCoincidence=0;searchCollection.CurrentIndex=0;searchCollection.ClearList();searchCollection=new SearchListCollection();}
$('#dvLastSearch').parent().addClass('sTdMenuArrowDimentionDisable');$('#dvNextSearch').parent().addClass('sTdMenuArrowDimentionDisable');$('#dvMenuContentListSearch').html('');}