var sendRequestActivity0=true;var sendRequestActivity1=true;function PlayerAccount(playerCode,password,available,balance,pending,message)
{this.PlayerCode=playerCode;this.Password=password;this.Available=available;this.Balance=balance;this.Pending=pending;this.Message=message;this.ShowPlayerInformation=showPlayerInformation;function showPlayerInformation(lblPlayerCode,trPassword,lblPassword,lblAvailable,lblBalance,lblPending,trMessage,lblMessage)
{var objControl=returnObjById(lblPlayerCode);var row;if(objControl)
{objControl.innerHTML=this.PlayerCode;}
if(this.Password.length>0)
{setStyleAttribute(trPassword,"display","");objControl=returnObjById(lblPassword);if(objControl)
{objControl.innerHTML=this.Password;}}
else
{setStyleAttribute(trPassword,"display","none");}
objControl=returnObjById(lblAvailable);if(objControl)
{objControl.innerHTML=this.Available;}
objControl=returnObjById(lblBalance);if(objControl)
{objControl.innerHTML=this.Balance;}
objControl=returnObjById(lblPending);if(objControl)
{objControl.innerHTML=this.Pending;}
if(this.Message.length>0)
{ShowControl(trMessage,true);objControl=returnObjById(lblMessage);if(objControl)
{objControl.innerHTML=this.Message;}}
else
{ShowControl(trMessage,false);}}}
function ResetActivityPlayer(){sendRequestActivity0=true;sendRequestActivity1=true;}
function AddActivityPlayer(controlZoneId){let sendRequestActivity=false;switch(controlZoneId){case "0":if(sendRequestActivity0){sendRequestActivity=true;sendRequestActivity0=false;}
break;case "1":if(sendRequestActivity1){sendRequestActivity=true;sendRequestActivity1=false;}
break;}
if(sendRequestActivity){var addInformation=GetAddInformationBetSessionStorage();Racebook.AddPlayerActivity(_sessionSSC,_token,addInformation,controlZoneId,_trackCodeStr,_trackEvent,_raceId,AddPlayerActivity_CallBack);}}
function AddPlayerActivity_CallBack(response){if(response.error!==null){return;}
eval(response.value);}