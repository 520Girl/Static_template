function DeleteCookie(Name){var ThreeDays=3*24*60*60*1000;var ExpDate=new Date();ExpDate.setTime(ExpDate.getTime()-ThreeDays);document.cookie=Name+"=ImOutOfHere; expires="+ExpDate.toGMTString();}
function GetCookie(Name){try{var Result="";var myCookie=" "+document.cookie+";";var SearchName=" "+Name+"=";var StartOfCookie=myCookie.indexOf(SearchName);var EndOfCookie;if(StartOfCookie!==-1){StartOfCookie+=SearchName.length;EndOfCookie=myCookie.indexOf(";",StartOfCookie);Result=unescape(myCookie.substring(StartOfCookie,EndOfCookie));}
return Result;}
catch(e){return "";}}
function SetCookie(cname,cvalue,exdays){try{var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+"; "+expires;}
catch(e){let er=e;}}