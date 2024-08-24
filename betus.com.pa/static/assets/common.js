var HTTP_SERVICE_REQUEST='/sportsbook/services/engineservice.aspx';var GAMELINE_ONCLICK_FLAG=false;var ITEMDELETE_ONCLICK_FLAG=false;var ITEMMOVE_ONCLICK_FLAG=false;function EnterPressed(buttonSubmit,event){var res=true;var key;if(buttonSubmit!=''&&buttonSubmit!=null){if(!event)
event=window.event;key=event.keyCode?event.keyCode:event.which;if(key==13){var controlSubmit=document.all?document.all[buttonSubmit]:document.getElementById(buttonSubmit);fireClickEvent(controlSubmit);res=false;}}
return res;}
function ValidateSearch(controlname){var res=true;var control=document.all?document.all[controlname]:document.getElementById(controlname);var value=String(control.value).trim();if(value=='Team or Rot #')
value='';if(value.length==0){alert('Please enter a Team or Rotation #');res=false;}
return res;}
function DisableEnterKey(e)
{var keycode=e.keyCode?e.keyCode:window.event?window.event.keyCode:e.which;return(keycode!==13);}
function OnlyNumbersHandler(e,txt)
{var keyCode=e.keyCode?e.keyCode:e.which;if(jQuery.inArray(keyCode,[46,8,9,27,13])!==-1||(jQuery.inArray(keyCode,[110,190])!==-1&&String(jQuery(txt).val()).indexOf(".")===-1)||(keyCode===65&&(e.ctrlKey===true||e.metaKey===true))||(keyCode>=35&&keyCode<=40))
return true;if((e.shiftKey||(keyCode<48||keyCode>57))&&(keyCode<96||keyCode>105))
{e.stopPropagation();e.preventDefault();return false;}
return true;}
function FindJsonByKeyValue(array,key,value){if(array!=undefined&&array!=null)
for(var i=0;i<array.length;i++)
if(array[i]){var obj=(typeof array[i]==="object")?array[i]:jQuery.parseJSON(String(array[i]));if(obj.hasOwnProperty(key)&&obj[key]===value)
return obj;}
return null;}
function ClearZerosHandler(e,txt)
{var input=jQuery(txt);var number=parseFloat(input.val());if(isNaN(number)||number==0.0)
input.val('');else
input.select();}
function showHideDisc(hide,show,type)
{ElmHide=GetControlByName(hide);ElmShow=GetControlByName(show);if(ElmHide&&ElmShow){ElmShow.style.display=type;ElmHide.style.display='none';}}