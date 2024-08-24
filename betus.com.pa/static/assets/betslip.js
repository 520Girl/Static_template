var SPORT_TYPES={"FOOTBALL":"Football","BASKETBALL":"Basketball","BASEBALL":"Baseball","HOCKEY":"Hockey","SOCCER":"Soccer","OTHERSPORTS":"Other Sports"};var LINE_TYPES={"SPREAD":"Spread","MONEY_LINE":"MoneyLine","TOTAL":"Total","TEAM_TOTAL":"TeamTotal"};var PRICE_TYPES={"AMERICAN":"American","DECIMAL":"Decimal","FRACTIONAL":"Fractional"};var AMOUNT_TYPES={"RISK":"R","WIN":"W","AMOUNT":"A"};var BOX_TYPES={"RISK":"txtRiskAmount","WIN":"txtWinAmount","AMOUNT":"txtWagerAmount","PRICE":"txtPrice","HIDDEN_RISK":"txtRiskAmountHidden","HIDDEN_WIN":"txtWinAmountHidden","WAGER_LIMIT":"txtWagerLimit","MAXIMUM_PAYOUT":"txtMaximumPayout"};var IFBET_TYPES={"SINGLE":"N","DOUBLE":"Y"};var CUSTOMER={"IS_LOGGED_IN":false,"TRUNCATE_CENTS":false,"PRICE_TYPE":"American","MINIMUM_LIMIT":0,"MINIMUM_LIMIT_TYPE":"R"};var ITEM={"CONTAINER":"","NUMBER":0,"SPORT_TYPE":"","SPORT_SUB_TYPE":"","ORIGINAL_PRICE":"","FINAL_PRICE":"","LIMIT":0.0,"RISK":0.0,"WIN":0.0,"PAYOUT":0.0,"IS_RIF":false,"RIF_LIMIT":0.0,"POINT_TYPES":{},"AMOUNT_TYPE":"A","SELECTED":false,"LINE_TYPE":"","DESCRIPTION":""};var POINT_TYPE={"CONTAINER":"","ITEM_NUMBER":"","INDEX":0,"POINTS":0.0,"PRICE":""};var WAGER_TYPE={"STRAIGHT":"STRAIGHT","PARLAY":"PARLAY","TEASER":"TEASER"};function Customer_OnInitialize(isLoggedIn,priceType,minimumLimit,minimumLimitType){CUSTOMER.IS_LOGGED_IN=isLoggedIn;CUSTOMER.PRICE_TYPE=priceType;CUSTOMER.MINIMUM_LIMIT=parseFloat(parseFloat(minimumLimit).toFixed(2));CUSTOMER.MINIMUM_LIMIT_TYPE=minimumLimitType;GAMELINE_ONCLICK_FLAG=false;ITEMDELETE_ONCLICK_FLAG=false;ITEMMOVE_ONCLICK_FLAG=false;jQuery(".delete").prop("disabled",false);jQuery(".img-up").prop("disabled",false);jQuery(".img-down").prop("disabled",false);}
function StraightEngine(bettingEngine,isQuickBet){if(!isQuickBet)
bettingEngine.CONTAINER.Push(this);this.Validate=function(straightNumber,force,callBack){var straightBet=bettingEngine.Get(straightNumber);if(straightBet.IS_FREE_BET)
return true;straightBet.ERROR=false;straightBet.LAST_ERROR=null;var riskAmount=parseFloat(straightBet.RISK);var winAmount=parseFloat(straightBet.WIN);var price=straightBet.FINAL_PRICE;var wagerLimit=straightBet.LIMIT;var limitType=null;if(limitType==undefined||limitType==null)
limitType=bettingEngine.IsFavorite(price)?AMOUNT_TYPES.WIN:AMOUNT_TYPES.RISK;if(isNaN(wagerLimit))
wagerLimit=0.0;if
((wagerLimit>0&&(limitType===AMOUNT_TYPES.RISK?riskAmount:winAmount)>wagerLimit)||(straightBet.IS_RIF&&straightBet.RIF_LIMIT>0&&straightBet.RIF_LIMIT<riskAmount)){if(straightBet.IS_RIF&&straightBet.RIF_LIMIT>0&&straightBet.RIF_LIMIT<riskAmount)
wagerLimit=straightBet.RIF_LIMIT;straightBet.LAST_ERROR={TITLE:'Maximum Wager Limit',CONTENT:'Maximum Wager Limit for '+straightBet.DESCRIPTION+' is $'+wagerLimit.toFixed(2).toString()+'.',IS_OPEN:true};jconfirm
({useBootstrap:false,title:straightBet.LAST_ERROR.TITLE,content:straightBet.LAST_ERROR.CONTENT,type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:callBack});if(limitType===AMOUNT_TYPES.RISK||straightBet.IS_RIF){straightBet.AMOUNT_TYPE="R";straightBet.RISK=wagerLimit;straightBet.WIN=bettingEngine.CalculateWinAmount(straightBet.RISK,price,true);}
else{straightBet.AMOUNT_TYPE="W";straightBet.WIN=wagerLimit;straightBet.RISK=bettingEngine.CalculateRiskAmount(wagerLimit,price,true);}
return false;}
else if(wagerLimit===-1||(wagerLimit>0&&wagerLimit<CUSTOMER.MINIMUM_LIMIT)){straightBet.LAST_ERROR={TITLE:'Maximum Wager Limit',CONTENT:'Maximum Wager Limit for '+straightBet.DESCRIPTION+' has been reached.',IS_OPEN:true};jconfirm
({useBootstrap:false,title:straightBet.LAST_ERROR.TITLE,content:straightBet.LAST_ERROR.CONTENT,type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:callBack});straightBet.RISK=0.0;straightBet.WIN=0.0;straightBet.AMOUNT_TYPE=bettingEngine.IsFavorite(price)?AMOUNT_TYPES.RISK:AMOUNT_TYPES.WIN;return false;}
if(force){var minimumAmount=parseFloat(CUSTOMER.MINIMUM_LIMIT);var wagerAmount=CUSTOMER.MINIMUM_LIMIT_TYPE===AMOUNT_TYPES.RISK||(CUSTOMER.MINIMUM_LIMIT_TYPE===AMOUNT_TYPES.AMOUNT&&limitType===AMOUNT_TYPES.RISK)?straightBet.RISK:straightBet.WIN;if(wagerAmount>0&&wagerAmount<minimumAmount){straightBet.RISK=0.0;straightBet.WIN=0.0;straightBet.AMOUNT_TYPE=bettingEngine.IsFavorite(price)?AMOUNT_TYPES.RISK:AMOUNT_TYPES.WIN;straightBet.LAST_ERROR={TITLE:'Minimum Wager Limit',CONTENT:'Minimum Wager Limit for '+straightBet.DESCRIPTION+' is $'+minimumAmount.toFixed(2).toString(),IS_OPEN:true};jconfirm
({useBootstrap:false,title:straightBet.LAST_ERROR.TITLE,content:straightBet.LAST_ERROR.CONTENT,type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:callBack,onClose:function(){if(straightBet.LAST_ERROR!=undefined&&straightBet.LAST_ERROR!=null)
straightBet.LAST_ERROR.IS_OPEN=false;},});return false;}}
var maximumPayout=straightBet.PAYOUT;if(!isNaN(maximumPayout)&&maximumPayout>0&&straightBet.WIN>maximumPayout){straightBet.WIN=bettingEngine.ToFinalAmount(maximumPayout);return false;}
return true;}
this.Calculate=function(straightNumber,amountType,force){var straightBet=bettingEngine.Get(straightNumber);if(straightBet==undefined||straightBet==null)
return false;var prefixName=straightBet.CONTAINER;var price=straightBet.FINAL_PRICE;var inputRisk=jQuery("#"+prefixName+BOX_TYPES.RISK);var inputWin=jQuery("#"+prefixName+BOX_TYPES.WIN);if
((inputRisk==undefined||inputRisk==null)||(inputWin==undefined||inputWin==null))
return false;var riskAmount=parseFloat(inputRisk.val());var winAmount=parseFloat(inputWin.val());switch(amountType){case "M":case "D":case "X":riskAmount=amountType==="M"?straightBet.LIMIT_MIN:amountType==="D"?straightBet.LIMIT_MID:straightBet.LIMIT_MAX;inputRisk.val(riskAmount.toFixed(2));amountType="R";break;default:amountType=amountType==="A"?bettingEngine.IsFavorite(price)?"W":"R":amountType;break;}
if
(((amountType===AMOUNT_TYPES.RISK||(amountType==="A"&&!bettingEngine.IsFavorite(price)))&&(isNaN(riskAmount)||riskAmount===0))||((amountType===AMOUNT_TYPES.WIN||(amountType==="A"&&bettingEngine.IsFavorite(price)))&&(isNaN(winAmount)||winAmount===0))){if(force){straightBet.RISK=0.0;straightBet.WIN=0.0;}
inputRisk.val(force?"0.00":"");inputWin.val(force?"0.00":"");return force?true:false;}
if
(force||(amountType===AMOUNT_TYPES.RISK&&riskAmount!=straightBet.RISK)||(amountType===AMOUNT_TYPES.WIN&&winAmount!=straightBet.WIN)){switch(amountType){case AMOUNT_TYPES.RISK:winAmount=parseFloat(bettingEngine.CalculateWinAmount(riskAmount,price,true));straightBet.WIN=bettingEngine.ToFinalAmount(winAmount);straightBet.RISK=bettingEngine.ToFinalAmount(riskAmount);inputWin.val(winAmount.toFixed(2));break;default:riskAmount=parseFloat(bettingEngine.CalculateRiskAmount(winAmount,price,true));straightBet.RISK=bettingEngine.ToFinalAmount(riskAmount);straightBet.WIN=bettingEngine.ToFinalAmount(winAmount);inputRisk.val(riskAmount.toFixed(2));break;}
straightBet.AMOUNT_TYPE=amountType;}
else
if(amountType===AMOUNT_TYPES.RISK)
inputWin.val(straightBet.WIN.toFixed(2));else
inputRisk.val(straightBet.RISK.toFixed(2));straightBet.VALIDATE=true;if(!this.Validate(straightNumber,force,null)){if
(((amountType===AMOUNT_TYPES.RISK||(amountType==="A"&&!bettingEngine.IsFavorite(price)))&&(straightBet.RISK!=riskAmount))||((amountType===AMOUNT_TYPES.WIN||(amountType==="A"&&bettingEngine.IsFavorite(price)))&&(straightBet.WIN!=winAmount))){inputRisk.val(straightBet.RISK.toFixed(2));inputWin.val(straightBet.WIN.toFixed(2));}
straightBet.ERROR=true;return false;}
return true;}
this.POINT_TYPES=new PointTypesEngine(bettingEngine);this.PARLAY=null;this.TEASER=null;this.UpdateContainer=function(itemNumber,container){if(!isQuickBet)
return;var item=bettingEngine.Get(itemNumber);item.CONTAINER=container;}
this.OnPointChanged=function(itemNumber,dropDownList){var item=bettingEngine.Get(parseInt(itemNumber));this.POINT_TYPES.OnChange(item,dropDownList);if(!item.AMOUNT_TYPE||item.AMOUNT_TYPE==null||item.AMOUNT_TYPE==undefined)
item.AMOUNT_TYPE=AMOUNT_TYPES.RISK;this.Calculate(itemNumber,item.AMOUNT_TYPE,true);if(item.FINAL_PRICE!==item.ORIGINAL_PRICE){jQuery("#"+item.CONTAINER+"lnkFreePlay").removeClass("checked").addClass("unchecked");var hidden=jQuery("#"+item.CONTAINER+"txtFreePlay");hidden.val("false");}}
this.OnFreePlayChanged=function(itemNumber,checkbox){var item=bettingEngine.Get(parseInt(itemNumber));var hidden=jQuery("#"+item.CONTAINER+"txtFreePlay");hidden.val
(hidden.val()==="true"?"false":"true");if(hidden.val()==="true"){var select=jQuery("#"+item.CONTAINER+"ddlBuyOrSellPointsOption_ddlBuyOrSellPointsOption");if(select!=undefined)
{var original=FindJsonByKeyValue(item.POINT_TYPES,"IS_ORIGINAL","true");if(original!=null&&original!=undefined)
{var optionIndex=parseInt(original.INDEX)-1;var option=select.find('option').eq(optionIndex);if(option!=undefined)
{option.prop("selected",true);}}}
item.FINAL_PRICE=item.ORIGINAL_PRICE;}
jQuery(checkbox).removeClass
(hidden.val()==="true"?"unchecked":"checked").addClass
(hidden.val()==="true"?"checked":"unchecked");this.Calculate(parseInt(itemNumber),item.AMOUNT_TYPE,true);return false;}
this.OnReadback=function(ignoreZero){var isOk=true;var currentEngine=this;jQuery.each
(bettingEngine.List(),function(straightNumber,straightBet){if(straightBet.ERROR!=undefined&&straightBet.ERROR!=null&&straightBet.ERROR){if(straightBet.LAST_ERROR!=undefined&&straightBet.LAST_ERROR!=null&&!straightBet.LAST_ERROR.IS_OPEN)
jconfirm
({useBootstrap:false,title:straightBet.LAST_ERROR.TITLE,content:straightBet.LAST_ERROR.CONTENT,type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:function(){if(straightBet.AMOUNT_TYPE==="R")
inputRisk.focus();else
inputWin.focus();},onClose:function(){straightBet.LAST_ERROR.IS_OPEN=false;}});isOk=false;return false;}
else if(!straightBet.IS_FREE_BET){straightBet.VALIDATE=false;var inputRisk=jQuery("#"+straightBet.CONTAINER+BOX_TYPES.RISK);var inputWin=jQuery("#"+straightBet.CONTAINER+BOX_TYPES.WIN);var riskAmount=parseFloat(inputRisk.val());if(isNaN(riskAmount))
riskAmount=0.0;if(!ignoreZero&&riskAmount===0){jconfirm
({useBootstrap:false,title:'Amount Wager',content:'Amount wagered for '+straightBet.DESCRIPTION+' cannot be zero.',type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:function(){if(straightBet.AMOUNT_TYPE==="R")
inputRisk.focus();else
inputWin.focus();}});isOk=false;return false;}
else if
(riskAmount>0&&!currentEngine.Validate
(straightBet.NUMBER,true,function(){inputRisk.val(straightBet.RISK.toFixed(2));inputWin.val(straightBet.WIN.toFixed(2));if(straightBet.AMOUNT_TYPE==="R")
inputRisk.focus();else
inputWin.focus();})){isOk=false;return false;}}
straightBet.VALIDATE=true;});if(isOk&&this.PARLAY!=undefined&&this.PARLAY!=null)
isOk=this.PARLAY.OnReadback(true);if(isOk&&this.TEASER!=undefined&&this.TEASER!=null)
isOk=this.TEASER.OnReadback(true);return isOk;}
this.OnLostFocus=function(straightNumber){var straightBet=bettingEngine.Get(straightNumber);if(straightBet==undefined||straightBet==null)
return;if(!straightBet.VALIDATE)
return;var inputRisk=jQuery("#"+straightBet.CONTAINER+BOX_TYPES.RISK);var inputWin=jQuery("#"+straightBet.CONTAINER+BOX_TYPES.WIN);if
((inputRisk==undefined||inputRisk==null)||(inputWin==undefined||inputWin==null))
return;if(!this.Calculate(straightNumber,straightBet.AMOUNT_TYPE,true)){inputRisk.val(straightBet.RISK.toFixed(2));inputWin.val(straightBet.WIN.toFixed(2));}
return;}
this.OnQuickBet=function(checkboxName){var checkbox=jQuery(checkboxName)
bettingEngine.Switch();OnSlipReading();}
this.Clone=function(){this.PARLAY=isQuickBet?null:new ParlayEngine(bettingEngine.Clone(true,WAGER_TYPE.PARLAY),true);this.TEASER=isQuickBet?null:new TeaserEngine(bettingEngine.Clone(true,WAGER_TYPE.TEASER),true);}}
function ParlayEngine(bettingEngine,isQuickBet){if(!isQuickBet)
bettingEngine.CONTAINER.Push(this);this.BET=new BetTypeEngine();this.COMBINATIONS=new CombinationType();this.PAYOUTS=new function(){var payouts=new Array();this.Push=function(payout){payouts.push(jQuery.parseJSON(payout));}
this.Get=function(itemsCount){if(itemsCount==undefined||itemsCount==null)
return payouts;return FindJsonByKeyValue(payouts,"ITEMS_COUNT",itemsCount);}
this.Set=function(payouts){var array=payouts.split("|");for(var index=0;index<array.length;index++){var payout=array[index];this.Push(payout);}}}
this.CalculateFlatWinAmount=function(riskAmount,itemsCount){var winAmount=0.0;var payout=this.PAYOUTS.Get(itemsCount);if(payout!=undefined&&payout!=null){winAmount=riskAmount*(parseFloat(payout.MONEY_LINE)/payout.BASE);if(payout.MAXIMUM_MONEY_LINE>0){var maximumAmount=riskAmount*(parseFloat(payout.MAXIMUM_MONEY_LINE)/payout.MAXIMUM_BASE);if(winAmount>maximumAmount)winAmount=maximumAmount;}}
return bettingEngine.ToFinalAmount(winAmount);}
this.CalculateRatioWinAmount=function(originalAmountRisk){var totalAmountWin=0.0;var parlayBet=this.BET.Get();var currentEngine=this;var maximumPayout=parseFloat(parlayBet.PAYOUT);if(isNaN(maximumPayout))
maximumPayout=0.0;jQuery.each
(this.COMBINATIONS.Get(),function(i,combination){var amountWin=originalAmountRisk;var flatAmountWin=originalAmountRisk;var defaultPriceCount=0;jQuery.each
(combination.ITEMS,function(j,element){var item=bettingEngine.Get(element.NUMBER);if
(item.LINE_TYPE.toLowerCase()!=LINE_TYPES.MONEY_LINE.toLowerCase()&&(item.SPORT_TYPE.toLowerCase()==SPORT_TYPES.FOOTBALL.toLowerCase()||item.SPORT_TYPE.toLowerCase()==SPORT_TYPES.BASKETBALL.toLowerCase())){flatAmountWin+=bettingEngine.CalculateWinAmount(flatAmountWin,item.DEFAULT_PRICE,false);amountWin+=bettingEngine.CalculateWinAmount(amountWin,item.FINAL_PRICE,false);defaultPriceCount++;}});flatAmountWin-=originalAmountRisk;amountWin-=originalAmountRisk;if(flatAmountWin>0)
flatAmountWin=currentEngine.CalculateFlatWinAmount(originalAmountRisk,defaultPriceCount)*amountWin/flatAmountWin;else
flatAmountWin=0.0;amountWin=flatAmountWin+originalAmountRisk;jQuery.each
(combination.ITEMS,function(j,element){var item=bettingEngine.Get(element.NUMBER);if
(flatAmountWin==0.0||item.LINE_TYPE.toLowerCase()==LINE_TYPES.MONEY_LINE.toLowerCase()||(item.SPORT_TYPE.toLowerCase()!=SPORT_TYPES.FOOTBALL.toLowerCase()&&item.SPORT_TYPE.toLowerCase()!=SPORT_TYPES.BASKETBALL.toLowerCase()))
amountWin+=bettingEngine.CalculateWinAmount(amountWin,item.FINAL_PRICE,false);});amountWin-=originalAmountRisk;if(maximumPayout>0&&amountWin>maximumPayout)
amountWin=maximumPayout;combination.RISK=parseFloat(originalAmountRisk);combination.WIN=parseFloat(amountWin);totalAmountWin+=combination.WIN;});return totalAmountWin;}
this.Validate=function(force,callBack){var parlayBet=this.BET.Get();var currentEngine=this;var riskAmount=parseFloat(parlayBet.RISK);var wagerLimit=parlayBet.LIMIT;if(isNaN(wagerLimit))
wagerLimit=0.0;if(wagerLimit===0.0||(parlayBet.IS_RIF&&parlayBet.RIF_LIMIT>0))
wagerLimit=parseFloat(parlayBet.RIF_LIMIT);if(wagerLimit>0&&riskAmount>wagerLimit){jconfirm
({useBootstrap:false,title:'Maximum Wager Limit',content:'Maximum Wager Limit for Parlay is $'+wagerLimit.toFixed(2).toString()+'.',type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:callBack});riskAmount=wagerLimit;parlayBet.RISK=riskAmount;parlayBet.WIN=currentEngine.CalculateRatioWinAmount(riskAmount);return false;}
else if(wagerLimit===-1||(wagerLimit>0&&wagerLimit<CUSTOMER.MINIMUM_LIMIT)){jconfirm
({useBootstrap:false,title:'Maximum Wager Limit',content:'Maximum Wager Limit for Parlay has been reached.',type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:callBack});parlayBet.RISK=0.0;parlayBet.WIN=0.0;return false;}
if(force)
if(riskAmount<CUSTOMER.MINIMUM_LIMIT){var minimumAmount=parseFloat(CUSTOMER.MINIMUM_LIMIT);jconfirm
({useBootstrap:false,title:'Minimum Wager Limit',content:'Minimum Wager Limit for Parlay is $'+minimumAmount.toFixed(2).toString(),type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:callBack});parlayBet.RISK=minimumAmount;parlayBet.WIN=currentEngine.CalculateRatioWinAmount(minimumAmount);return false;}
return true;}
this.Calculate=function(force,amountType){var parlayBet=this.BET.Get();if(parlayBet==undefined||parlayBet==null)
return false;var prefixName=parlayBet.CONTAINER+"_";var inputRisk=jQuery("#"+prefixName+BOX_TYPES.RISK);var inputWin=jQuery("#"+prefixName+BOX_TYPES.WIN);if
((inputRisk==undefined||inputRisk==null)||(inputWin==undefined||inputWin==null))
return false;var riskAmount=parseFloat(inputRisk.val());if(amountType!==undefined&&amountType!==null){riskAmount=amountType==="M"?parlayBet.LIMIT_MIN:amountType==="D"?parlayBet.LIMIT_MID:parlayBet.LIMIT_MAX;inputRisk.val(riskAmount.toFixed(2));}
if(isNaN(riskAmount)||riskAmount===0){if(force){parlayBet.RISK=0.00;parlayBet.WIN=0.00;}
inputRisk.val(force?"0.00":"");inputWin.val(force?"0.00":"");return force?true:false;}
parlayBet.VALIDATE=true;parlayBet.RISK=riskAmount;parlayBet.WIN=parseFloat(bettingEngine.ToFinalAmount(this.CalculateRatioWinAmount(riskAmount)));inputWin.val(parlayBet.WIN);if(!this.Validate(force)){inputRisk.val(parlayBet.RISK);inputWin.val(parlayBet.WIN);return false;}
return true;}
this.POINT_TYPES=new PointTypesEngine(bettingEngine);this.STRAIGHTS=null;this.UpdateContainer=function(itemNumber,container){if(!isQuickBet)
return;var item=bettingEngine.Get(itemNumber);if(item!=undefined&&item!=null)
item.CONTAINER=container;}
this.OnPointChanged=function(itemNumber,dropDownList){var item=bettingEngine.Get(parseInt(itemNumber));this.POINT_TYPES.OnChange(item,dropDownList);this.Calculate();}
this.OnFreePlayChanged=function(checkbox){var currentEngine=this;var parlayBet=this.BET.Get();var hidden=jQuery("#"+parlayBet.CONTAINER+"_txtFreePlay");hidden.val
(hidden.val()=="true"?"false":"true");if(hidden.val()==="true")
jQuery.each
(bettingEngine.List(),function(index,item){var select=jQuery("#"+item.CONTAINER+"ddlBuyOrSellPointsOption_ddlBuyOrSellPointsOption");if(select!=undefined)
{var original=FindJsonByKeyValue(item.POINT_TYPES,"IS_ORIGINAL","true");if(original!=null&&original!=undefined)
{var optionIndex=parseInt(original.INDEX)-1;var option=select.find('option').eq(optionIndex);if(option!=undefined)
{option.prop("selected",true);}}}
item.FINAL_PRICE=item.ORIGINAL_PRICE;});jQuery(checkbox).removeClass
(hidden.val()==="true"?"unchecked":"checked").addClass
(hidden.val()==="true"?"checked":"unchecked");this.Calculate(true);return false;}
this.OnRoundRobinChanged=function(select,itemsCount){this.COMBINATIONS.Change(select,itemsCount);this.Calculate();}
this.OnReadback=function(ignoreZero){var parlayBet=this.BET.Get();if(parlayBet==undefined||parlayBet==null)
return ignoreZero?true:false;parlayBet.VALIDATE=false;var prefixName=parlayBet.CONTAINER+"_";var inputRisk=jQuery("#"+prefixName+BOX_TYPES.RISK);if(inputRisk==undefined||inputRisk==null)
return false;var riskAmount=parseFloat(inputRisk.val());if(isNaN(riskAmount))
riskAmount=0.0;if(ignoreZero&&riskAmount===0)
return true;if(bettingEngine.List().length<2){jconfirm
({useBootstrap:false,title:'Minimum picks',content:'Minimum of picks for Parlay is 2',type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}}});return false;}
var inputWin=jQuery("#"+prefixName+BOX_TYPES.WIN);var currentEngine=this;if(riskAmount===0){jconfirm
({useBootstrap:false,title:'Amount Wager',content:'Amount wagered for Parlay cannot be zero.',type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:function(){inputRisk.focus();}});return false;}
if
(riskAmount>0&&!currentEngine.Validate
(true,function(){inputRisk.val(parlayBet.RISK.toFixed(2));inputWin.val(parlayBet.WIN.toFixed(2));inputRisk.focus();})){return false;}
if(this.STRAIGHTS!=undefined&&this.STRAIGHTS!=null)
return this.STRAIGHTS.OnReadback(true);parlayBet.VALIDATE=true;return true;}
this.OnLostFocus=function(){var parlayBet=this.BET.Get();if(parlayBet==undefined||parlayBet==null)
return;if(!parlayBet.VALIDATE)
return;var inputRisk=jQuery("#"+parlayBet.CONTAINER+BOX_TYPES.RISK);var inputWin=jQuery("#"+parlayBet.CONTAINER+BOX_TYPES.WIN);if
((inputRisk==undefined||inputRisk==null)||(inputWin==undefined||inputWin==null))
return;if(!this.Calculate(true)){inputRisk.val(parlayBet.RISK.toFixed(2));inputWin.val(parlayBet.WIN.toFixed(2));}
return;}
this.Clone=function(){this.STRAIGHTS=isQuickBet?null:new StraightEngine(bettingEngine.Clone(false),true)}}
function TeaserEngine(bettingEngine,isQuickBet){if(!isQuickBet)
bettingEngine.CONTAINER.Push(this);this.BET=new BetTypeEngine();this.PAYOUTS=new SimpleListType();this.STRAIGHTS=null;this.UpdateContainer=function(itemNumber,container){if(!isQuickBet)
return;var item=bettingEngine.Get(itemNumber);if(item!=undefined&&item!=null)
item.CONTAINER=container;}
this.OnFreePlayChanged=function(checkbox){var currentEngine=this;var teaserBet=this.BET.Get();var prefixName=teaserBet.CONTAINER+"_";var hidden=jQuery("#"+prefixName+"txtFreePlay");var isFreeplay=hidden.val()==="true"?false:true;hidden.val(isFreeplay.toString());teaserBet.IS_FREEPLAY=isFreeplay;jQuery(checkbox).removeClass
(isFreeplay?"unchecked":"checked").addClass
(isFreeplay?"checked":"unchecked");var option=jQuery("#"+prefixName+"ddlTeaserOption").find(":selected");var payout=this.PAYOUTS.Get(option.index());teaserBet.MINIMUM_PICKS=parseInt(payout.MININUM_PICKS);teaserBet.MAXIMUM_PICKS=parseInt(payout.MAXIMUM_PICKS);teaserBet.PAYOUT=parseFloat(option.val());teaserBet.FREEPLAY_LIMIT=teaserBet.IS_FREEPLAY?parseInt(payout.FREEPLAY_LIMIT):0;this.Calculate(teaserBet.IS_FREEPLAY?AMOUNT_TYPES.RISK:teaserBet.AMOUNT_TYPE,true);return false;}
this.OnTeaserChanged=function(dropDownList){var teaserBet=this.BET.Get();var prefixName=teaserBet.CONTAINER+"_";var option=jQuery("#"+prefixName+"ddlTeaserOption").find(":selected");var payout=this.PAYOUTS.Get(option.index());var allowFreeplay=payout.ALLOW_FREE_PLAY;teaserBet.MINIMUM_PICKS=parseInt(payout.MININUM_PICKS);teaserBet.MAXIMUM_PICKS=parseInt(payout.MAXIMUM_PICKS);teaserBet.PAYOUT=parseFloat(option.val());teaserBet.FREEPLAY_LIMIT=teaserBet.IS_FREEPLAY?parseInt(payout.FREEPLAY_LIMIT):0;jQuery("#"+prefixName+"txtTeaserName").val(option.text().toString().trim());var freeplayBox=jQuery("#"+prefixName+"txtFreePlay");var freeplayLink=jQuery("#"+prefixName+"lnkFreePlay");freeplayBox.val("false");freeplayLink.removeAttr("class").attr("class","unchecked"+(!allowFreeplay?"-hidden":""));this.Calculate(teaserBet.AMOUNT_TYPE,true);return false;}
this.Validate=function(force,callBack){var teaserBet=this.BET.Get();var currentEngine=this;var riskAmount=parseFloat(teaserBet.RISK);var wagerLimit=teaserBet.LIMIT;if(isNaN(wagerLimit))
wagerLimit=0.0;if(wagerLimit===0.0||(teaserBet.IS_FREEPLAY&&teaserBet.FREEPLAY_LIMIT>0&&teaserBet.FREEPLAY_LIMIT<wagerLimit))
wagerLimit=parseFloat(teaserBet.FREEPLAY_LIMIT);else if(wagerLimit===0.0||(teaserBet.IS_RIF&&teaserBet.RIF_LIMIT>0))
wagerLimit=parseFloat(teaserBet.RIF_LIMIT);var prefixName=teaserBet.CONTAINER+"_";var inputRisk=jQuery("#"+prefixName+BOX_TYPES.RISK);var inputWin=jQuery("#"+prefixName+BOX_TYPES.WIN);if(wagerLimit>0&&riskAmount>wagerLimit){jconfirm
({useBootstrap:false,title:'Maximum Wager Limit',content:'Maximum Wager Limit for Teaser is $'+wagerLimit.toFixed(2).toString()+'.',type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:callBack});riskAmount=wagerLimit;teaserBet.RISK=riskAmount;teaserBet.WIN=parseFloat(bettingEngine.ToFinalAmount(wagerLimit*parseFloat(teaserBet.PAYOUT)));inputRisk.val(riskAmount.toFixed(2));inputWin.val(teaserBet.WIN.toFixed(2));return false;}
else if(wagerLimit===-1||(wagerLimit>0&&wagerLimit<CUSTOMER.MINIMUM_LIMIT)){jconfirm
({useBootstrap:false,title:'Maximum Wager Limit',content:'Maximum Wager Limit for Teaser has been reached.',type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:callBack});teaserBet.RISK=0.0;teaserBet.WIN=0.0;return false;}
if(force)
if(riskAmount<CUSTOMER.MINIMUM_LIMIT){var minimumAmount=parseFloat(CUSTOMER.MINIMUM_LIMIT);jconfirm
({useBootstrap:false,title:'Minimum Wager Limit',content:'Minimum Wager Limit for Teaser is $'+minimumAmount.toFixed(2).toString(),type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:callBack});if(teaserBet.AMOUNT_TYPE===AMOUNT_TYPES.RISK){teaserBet.RISK=minimumAmount;teaserBet.WIN=parseFloat(bettingEngine.ToFinalAmount(minimumAmount*parseFloat(teaserBet.PAYOUT)));}
else{teaserBet.RISK=parseFloat(bettingEngine.ToFinalAmount(minimumAmount/parseFloat(teaserBet.PAYOUT)));teaserBet.WIN=minimumAmount;}
return false;}
return true;}
this.Calculate=function(amountType,force){var teaserBet=this.BET.Get();if(teaserBet==undefined||teaserBet==null)
return false;var prefixName=teaserBet.CONTAINER+"_";var inputRisk=jQuery("#"+prefixName+BOX_TYPES.RISK);var inputWin=jQuery("#"+prefixName+BOX_TYPES.WIN);if
((inputRisk==undefined||inputRisk==null)||(inputWin==undefined||inputWin==null))
return false;var riskAmount=parseFloat(inputRisk.val());var winAmount=parseFloat(inputWin.val());if(amountType!==undefined&&amountType!==null&&amountType!=="R"&&amountType!=="W"){riskAmount=amountType==="M"?teaserBet.LIMIT_MIN:amountType==="D"?teaserBet.LIMIT_MID:teaserBet.LIMIT_MAX;inputRisk.val(riskAmount.toFixed(2));amountType="R";}
if
((amountType==AMOUNT_TYPES.RISK&&(isNaN(riskAmount)||riskAmount==0))||(amountType==AMOUNT_TYPES.WIN&&(isNaN(winAmount)||winAmount==0))||(teaserBet.PAYOUT===0||isNaN(teaserBet.PAYOUT))){if(force){teaserBet.RISK=0.00;teaserBet.WIN=0.00;}
inputRisk.val(force?"0.00":"");inputWin.val(force?"0.00":"");return force?true:false;}
if
((force)||(amountType===AMOUNT_TYPES.RISK&&teaserBet.RISK!=riskAmount)||(amountType===AMOUNT_TYPES.WIN&&teaserBet.WIN!=winAmount)){if(amountType===AMOUNT_TYPES.RISK){winAmount=parseFloat(bettingEngine.ToFinalAmount(riskAmount*parseFloat(teaserBet.PAYOUT)));inputWin.val(winAmount.toFixed(2));}
else{riskAmount=parseFloat(bettingEngine.ToFinalAmount(winAmount/parseFloat(teaserBet.PAYOUT)));inputRisk.val(riskAmount.toFixed(2));}
teaserBet.WIN=winAmount;teaserBet.RISK=riskAmount;teaserBet.AMOUNT_TYPE=amountType;teaserBet.VALIDATE=true;}
else
if(amountType===AMOUNT_TYPES.RISK)
inputWin.val(teaserBet.WIN.toFixed(2));else
inputRisk.val(teaserBet.RISK.toFixed(2));if(!this.Validate(force)){inputRisk.val(teaserBet.RISK);inputWin.val(teaserBet.WIN);return false;}
return true;}
this.OnReadback=function(ignoreZero){var teaserBet=this.BET.Get();if(teaserBet==undefined||teaserBet==null)
return ignoreZero?true:false;teaserBet.VALIDATE=false;var prefixName=teaserBet.CONTAINER+"_";var inputRisk=jQuery("#"+prefixName+BOX_TYPES.RISK);if(inputRisk==undefined||inputRisk==null)
return false;var riskAmount=parseFloat(inputRisk.val());if(isNaN(riskAmount))
riskAmount=0.0;if(ignoreZero&&riskAmount===0)
return true;if(riskAmount===0){jconfirm
({useBootstrap:false,title:'Amount Wager',content:'Amount wagered for Teaser cannot be zero.',type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:function(){inputRisk.focus();}});return false;}
if(teaserBet.PAYOUT===0){jconfirm
({useBootstrap:false,title:'Teaser Missing',content:'No Teaser option has been chosen.',type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}}});return false;}
var amountPicks=bettingEngine.List().length;if(amountPicks<teaserBet.MINIMUM_PICKS){jconfirm
({useBootstrap:false,title:'Minimum picks',content:'Minimum of picks for Teaser is '+teaserBet.MINIMUM_PICKS.toString(),type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}}});return false;}
if(amountPicks>teaserBet.MAXIMUM_PICKS){jconfirm
({useBootstrap:false,title:'Maximum picks',content:'Maximum of picks for Teaser is '+teaserBet.MAXIMUM_PICKS.toString(),type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}}});return false;}
var inputWin=jQuery("#"+prefixName+BOX_TYPES.WIN);var currentEngine=this;if
(riskAmount>0&&!currentEngine.Validate
(true,function(){inputRisk.val(teaserBet.RISK.toFixed(2));inputWin.val(teaserBet.WIN.toFixed(2));inputRisk.focus();})){return false;}
if(this.STRAIGHTS!=undefined&&this.STRAIGHTS!=null)
return this.STRAIGHTS.OnReadback(true);teaserBet.VALIDATE=true;return true;}
this.OnLostFocus=function(){var teaserBet=this.BET.Get();if(teaserBet==undefined||teaserBet==null)
return;var inputRisk=jQuery("#"+teaserBet.CONTAINER+"_"+BOX_TYPES.RISK);var inputWin=jQuery("#"+teaserBet.CONTAINER+"_"+BOX_TYPES.WIN);if
((inputRisk==undefined||inputRisk==null)||(inputWin==undefined||inputWin==null))
return;if(!teaserBet.VALIDATE||!this.Calculate(teaserBet.AMOUNT_TYPE,true)){inputRisk.val(teaserBet.RISK.toFixed(2));inputWin.val(teaserBet.WIN.toFixed(2));}
return;}
this.Clone=function(){this.STRAIGHTS=isQuickBet?null:new StraightEngine(bettingEngine.Clone(false),true);}}
function IfBetEngine(bettingEngine){bettingEngine.CONTAINER.Push(this);this.BET=new BetTypeEngine();this.POINT_TYPES=new PointTypesEngine(bettingEngine);this.Previous=function(itemNumber){var previousNumber=0;jQuery.each
(bettingEngine.List(),function(index,item){if(item.NUMBER>previousNumber&&item.NUMBER<itemNumber)
previousNumber=item.NUMBER;});if(previousNumber===0)
return null;return bettingEngine.Get(previousNumber);}
this.Next=function(itemNumber){var nextNumber=0;jQuery.each
(bettingEngine.List(),function(index,item){if(item.NUMBER>itemNumber&&nextNumber===0)
nextNumber=item.NUMBER;});if(nextNumber===0)
return null;return bettingEngine.Get(nextNumber);}
this.MaximumRisk=function(itemNumber){var select=jQuery("#"+this.BET.Get().CONTAINER+"_ddlIfBet");var option=select.find(":selected").val();var first=bettingEngine.List()[0];if(first.NUMBER!==itemNumber)
if(option===IFBET_TYPES.DOUBLE)
return parseFloat(first.RISK);else{var maximumRisk=parseFloat(first.RISK)+parseFloat(first.WIN);var item=this.Next(first.NUMBER);while(item!==undefined&&item!==null&&item.NUMBER<itemNumber){maximumRisk+=parseFloat(item.WIN);item=this.Next(item.NUMBER);}
return maximumRisk;}
return-1.0;}
this.Totalize=function(itemNumber,force){var next=force?this.Next(itemNumber):null;if(next!=undefined&&next!=null)
this.Calculate(next.NUMBER,next.AMOUNT_TYPE,true);else{var ifBet=this.BET.Get();if(ifBet==undefined||ifBet==null)
return;var select=jQuery("#"+this.BET.Get().CONTAINER+"_ddlIfBet");var option=select.find(":selected").val();var maximumRisk=0.0;var totalWin=0.0;jQuery.each
(bettingEngine.List(),function(index,item){if(option===IFBET_TYPES.DOUBLE||maximumRisk===0)
if(parseFloat(item.RISK)>maximumRisk)
maximumRisk=parseFloat(item.RISK);totalWin+=parseFloat(item.WIN);});jQuery("#"+ifBet.CONTAINER+"_txtTotalRiskAmount").val(bettingEngine.ToFinalAmount(maximumRisk));jQuery("#"+ifBet.CONTAINER+"_txtTotalWinAmount").val(bettingEngine.ToFinalAmount(totalWin));}}
this.Validate=function(itemNumber,force,callBack){var ifBet=this.BET.Get();if(ifBet==undefined||ifBet==null)
return false;var itemBet=bettingEngine.Get(itemNumber);if(itemBet==undefined||itemBet==null)
return false;var prefixName=itemBet.CONTAINER;var inputRisk=jQuery("#"+prefixName+BOX_TYPES.RISK);var inputWin=jQuery("#"+prefixName+BOX_TYPES.WIN);if
((inputRisk==undefined||inputRisk==null)||(inputWin==undefined||inputWin==null))
return false;var riskAmount=parseFloat(itemBet.RISK);var winAmount=parseFloat(itemBet.WIN);var price=itemBet.FINAL_PRICE;var maximumRisk=parseFloat(bettingEngine.ToFinalAmount(this.MaximumRisk(itemNumber)));if(maximumRisk!==-1&&riskAmount>maximumRisk){jconfirm
({useBootstrap:false,title:'Maximum Risk Limit',content:maximumRisk>0?'Maximum Risk Limit for '+itemBet.DESCRIPTION+' is $'+maximumRisk.toFixed(2).toString()+'.':'First, place a wager amount on '+this.Previous(itemBet.NUMBER).DESCRIPTION+'.',type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:callBack});riskAmount=maximumRisk;winAmount=parseFloat(bettingEngine.ToFinalAmount(bettingEngine.CalculateWinAmount(riskAmount,price,true)));itemBet.RISK=riskAmount;itemBet.WIN=winAmount;return false;}
var wagerLimit=itemBet.LIMIT;var limitType=bettingEngine.IsFavorite(price)?AMOUNT_TYPES.WIN:AMOUNT_TYPES.RISK;if(isNaN(wagerLimit))
wagerLimit=0.0;if(wagerLimit===0||(ifBet.RIF_LIMIT>0&&ifBet.RIF_LIMIT<wagerLimit))
wagerLimit=parseFloat(itemBet.RIF_LIMIT);if(wagerLimit>0&&(limitType===AMOUNT_TYPES.RISK?riskAmount:winAmount)>wagerLimit){inputRisk.val(force?"0.00":"");inputWin.val(force?"0.00":"");jconfirm
({useBootstrap:false,title:'Maximum Wager Limit',content:'Maximum Wager Limit for '+itemBet.DESCRIPTION+' is $'+wagerLimit.toFixed(2).toString()+'.',type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:callBack});if(limitType===AMOUNT_TYPES.RISK){itemBet.AMOUNT_TYPE="R";itemBet.RISK=wagerLimit;itemBet.WIN=bettingEngine.CalculateWinAmount(riskAmount,price,true);}
else{itemBet.AMOUNT_TYPE="W";itemBet.WIN=wagerLimit;itemBet.RISK=bettingEngine.CalculateRiskAmount(winAmount,price,true);}
this.Totalize(itemNumber,force);return false;}
if(wagerLimit===-1||(wagerLimit>0&&wagerLimit<CUSTOMER.MINIMUM_LIMIT)){inputRisk.val(force?"0.00":"");inputWin.val(force?"0.00":"");jconfirm
({useBootstrap:false,title:'Maximum Wager Limit',content:'Maximum Wager Limit for '+itemBet.DESCRIPTION+' has been reached.',type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:callBack});itemBet.RISK=0.0;itemBet.WIN=0.0;itemBet.AMOUNT_TYPE=itemBet.IsFavorite(price)?AMOUNT_TYPES.RISK:AMOUNT_TYPES.WIN;this.Totalize(itemNumber,force);return false;}
if(force){var minimumAmount=parseFloat(CUSTOMER.MINIMUM_LIMIT);var wagerAmount=CUSTOMER.MINIMUM_LIMIT_TYPE===AMOUNT_TYPES.RISK||(CUSTOMER.MINIMUM_LIMIT_TYPE===AMOUNT_TYPES.AMOUNT&&limitType===AMOUNT_TYPES.RISK)?itemBet.RISK:itemBet.WIN;if(wagerAmount>0&&wagerAmount<minimumAmount){itemBet.RISK=0.0;itemBet.WIN=0.0;itemBet.AMOUNT_TYPE=bettingEngine.IsFavorite(price)?AMOUNT_TYPES.RISK:AMOUNT_TYPES.WIN;jconfirm
({useBootstrap:false,title:'Minimum Wager Limit',content:'Minimum Wager Limit for '+itemBet.DESCRIPTION+' is $'+minimumAmount.toFixed(2).toString(),type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:callBack});return false;}}
var maximumPayout=itemBet.PAYOUT;if(!isNaN(maximumPayout)&&maximumPayout>0&&winAmount>maximumPayout){winAmount=parseFloat(bettingEngine.ToFinalAmount(maximumPayout));itemBet.WIN=winAmount;}
return true;}
this.Calculate=function(itemNumber,amountType,force){var itemBet=bettingEngine.Get(itemNumber);if(itemBet==undefined||itemBet==null)
return false;var ifBet=this.BET.Get();if(ifBet==undefined||ifBet==null)
return false;var prefixName=itemBet.CONTAINER;var price=itemBet.FINAL_PRICE;var inputRisk=jQuery("#"+prefixName+BOX_TYPES.RISK);var inputWin=jQuery("#"+prefixName+BOX_TYPES.WIN);if
((inputRisk==undefined||inputRisk==null)||(inputWin==undefined||inputWin==null))
return false;var riskAmount=parseFloat(inputRisk.val());var winAmount=parseFloat(inputWin.val());switch(amountType){case "M":case "D":case "X":riskAmount=amountType==="M"?itemBet.LIMIT_MIN:amountType==="D"?itemBet.LIMIT_MID:itemBet.LIMIT_MAX;inputRisk.val(riskAmount.toFixed(2));force=true;amountType="R";break;default:amountType=amountType==="A"?bettingEngine.IsFavorite(price)?"W":"R":amountType;break;}
if
(((amountType===AMOUNT_TYPES.RISK||(amountType==="A"&&!bettingEngine.IsFavorite(price)))&&(isNaN(riskAmount)||riskAmount===0))||((amountType===AMOUNT_TYPES.WIN||(amountType==="A"&&bettingEngine.IsFavorite(price)))&&(isNaN(winAmount)||winAmount===0))){inputRisk.val(force?"0.00":"");inputWin.val(force?"0.00":"");itemBet.WIN=0.0;itemBet.RISK=0.0;itemBet.AMOUNT_TYPE=AMOUNT_TYPES.AMOUNT;this.Totalize(itemNumber,force);return false;}
if
(!force&&((amountType===AMOUNT_TYPES.RISK&&riskAmount===itemBet.RISK)||(amountType===AMOUNT_TYPES.WIN&&winAmount===itemBet.WIN)))
return false;var maximumRisk=parseFloat(this.MaximumRisk(itemNumber));switch(amountType==="A"?bettingEngine.IsFavorite(price)?"W":"R":amountType){case AMOUNT_TYPES.RISK:if(maximumRisk>0&&riskAmount>maximumRisk){riskAmount=maximumRisk;inputRisk.val(riskAmount.toFixed(2));}
winAmount=bettingEngine.CalculateWinAmount(riskAmount,price,true);inputWin.val(winAmount.toFixed(2));itemBet.WIN=winAmount;itemBet.RISK=riskAmount;break;default:riskAmount=bettingEngine.CalculateRiskAmount(winAmount,price,true);if(maximumRisk>0&&riskAmount>maximumRisk){riskAmount=maximumRisk;winAmount=bettingEngine.CalculateWinAmount(riskAmount,price,true);inputWin.val(winAmount.toFixed(2));}
inputRisk.val(riskAmount.toFixed(2));itemBet.RISK=riskAmount;itemBet.WIN=winAmount;break;}
itemBet.AMOUNT_TYPE=amountType;ifBet.VALIDATE=true;if(!this.Validate(itemNumber,force)){inputRisk.val(itemBet.RISK);inputWin.val(itemBet.WIN);return false;}
this.Totalize(itemNumber,force);return true;}
this.OnPointChanged=function(itemNumber,dropDownList){var item=bettingEngine.Get(parseInt(itemNumber));this.POINT_TYPES.OnChange(item,dropDownList);if(!item.AMOUNT_TYPE||item.AMOUNT_TYPE==null||item.AMOUNT_TYPE==undefined)
item.AMOUNT_TYPE=AMOUNT_TYPES.RISK;this.Calculate(itemNumber,item.AMOUNT_TYPE,true);}
this.OnTypeChanged=function(dropDownList){var item=bettingEngine.List()[0];this.Calculate(item.NUMBER,item.AMOUNT_TYPE,true);}
this.OnReadback=function(){var isOk=true;var currentEngine=this;var ifBet=this.BET.Get();if(ifBet===undefined||ifBet===null)
return false;jQuery.each
(bettingEngine.List(),function(itemNumber,itemBet){ifBet.VALIDATE=false;var inputRisk=jQuery("#"+itemBet.CONTAINER+BOX_TYPES.RISK);var inputWin=jQuery("#"+itemBet.CONTAINER+BOX_TYPES.WIN);var riskAmount=parseFloat(inputRisk.val());if(isNaN(riskAmount))
riskAmount=0.0;if(riskAmount===0){jconfirm
({useBootstrap:false,title:'Amount Wager',content:'Amount wagered for '+itemBet.DESCRIPTION+' cannot be zero.',type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:function(){if(itemBet.AMOUNT_TYPE==="R")
inputRisk.focus();else
inputWin.focus();}});isOk=false;return false;}
else if
(riskAmount>0&&!currentEngine.Validate
(itemBet.NUMBER,true,function(){inputRisk.val(itemBet.RISK.toFixed(2));inputWin.val(itemBet.WIN.toFixed(2));if(itemBet.AMOUNT_TYPE==="R")
inputRisk.focus();else
inputWin.focus();})){isOk=false;return false;}
ifBet.VALIDATE=true;});return isOk;}
this.OnLostFocus=function(itemNumber){var ifBet=this.BET.Get();if(ifBet===undefined||ifBet===null)
return;if(!ifBet.VALIDATE)
return;var itemBet=bettingEngine.Get(itemNumber);if(itemBet===undefined||itemBet===null)
return;var inputRisk=jQuery("#"+ifBet.CONTAINER+BOX_TYPES.RISK);var inputWin=jQuery("#"+ifBet.CONTAINER+BOX_TYPES.WIN);if
((inputRisk===undefined||inputRisk===null)||(inputWin===undefined||inputWin===null))
return;if(!this.Calculate(itemNumber,itemBet.AMOUNT_TYPE,true)){inputRisk.val(ifBet.RISK.toFixed(2));inputWin.val(ifBet.WIN.toFixed(2));}
return;}}
function ReverseEngine(bettingEngine){bettingEngine.CONTAINER.Push(this);this.BET=new BetTypeEngine();this.COMBINATIONS=new CombinationType();this.Totalize=function(){var reverseBet=this.BET.Get();jQuery("#"+reverseBet.CONTAINER+"_txtRiskAmount").val(parseFloat(bettingEngine.ToFinalAmount(reverseBet.RISK)).toFixed(2));jQuery("#"+reverseBet.CONTAINER+"_txtWinAmount").val(parseFloat(bettingEngine.ToFinalAmount(reverseBet.WIN)).toFixed(2));}
this.WagerLimit=function(){var reverseBet=this.BET.Get();var wagerLimit=parseFloat(0);jQuery.each
(bettingEngine.List(),function(i,item){var price=item.FINAL_PRICE;var amountType=AMOUNT_TYPES.RISK;var limitType=AMOUNT_TYPES.RISK;var itemLimit=parseFloat(item.LIMIT);if(isNaN(itemLimit))
itemLimit=0.0;else if(itemLimit==-1)
wagerLimit=itemLimit;if(wagerLimit!=-1){itemLimit=limitType===AMOUNT_TYPES.RISK?itemLimit:parseFloat(bettingEngine.CalculateRiskAmount(itemLimit,price,true));if(limitType!=amountType)
itemLimit=amountType===AMOUNT_TYPES.RISK?itemLimit:parseFloat(bettingEngine.CalculateRiskAmount(itemLimit,price,true));if(wagerLimit===0||wagerLimit>itemLimit)
wagerLimit=itemLimit;}});if(wagerLimit!=-1){if(reverseBet.RIF_LIMIT>0&&reverseBet.RIF_LIMIT<wagerLimit)
wagerLimit=parseFloat(itemBet.RIF_LIMIT);wagerLimit=parseFloat((wagerLimit/((bettingEngine.List().length-1)*2)).toFixed(2));}
return wagerLimit;}
this.Validate=function(itemNumber,force,callBack){var reverseBet=this.BET.Get();if(reverseBet===undefined||reverseBet===null)
return false;var itemBet=bettingEngine.Get(itemNumber);if(itemBet==undefined||itemBet==null)
return false;var riskAmount=parseFloat(itemBet.RISK);var winAmount=parseFloat(itemBet.WIN);var price=itemBet.FINAL_PRICE;var wagerLimit=itemBet.LIMIT;if(isNaN(wagerLimit))
wagerLimit=0.0;if(reverseBet.RIF_LIMIT>0&&(reverseBet.RIF_LIMIT<wagerLimit||wagerLimit===0))
wagerLimit=parseFloat(itemBet.RIF_LIMIT);var amountType=!bettingEngine.IsFavorite(price)?AMOUNT_TYPES.RISK:AMOUNT_TYPES.WIN;var limitType=!bettingEngine.IsFavorite(price)||reverseBet.IS_RIF?AMOUNT_TYPES.RISK:AMOUNT_TYPES.WIN;wagerLimit=limitType===AMOUNT_TYPES.RISK?wagerLimit:parseFloat(bettingEngine.CalculateRiskAmount(wagerLimit,price,true));wagerLimit=parseFloat((wagerLimit/((bettingEngine.List().length-1)*2)).toFixed(2));if(limitType!=amountType)
wagerLimit=amountType===AMOUNT_TYPES.RISK?wagerLimit:parseFloat(bettingEngine.CalculateRiskAmount(wagerLimit,price,true));if(wagerLimit>0&&(amountType===AMOUNT_TYPES.RISK?riskAmount:winAmount)>wagerLimit){if(amountType===AMOUNT_TYPES.RISK){itemBet.AMOUNT_TYPE=AMOUNT_TYPES.RISK;itemBet.RISK=wagerLimit;itemBet.WIN=bettingEngine.CalculateWinAmount(itemBet.RISK,price,true);}
else{itemBet.AMOUNT_TYPE=AMOUNT_TYPES.WIN;itemBet.WIN=wagerLimit;itemBet.RISK=bettingEngine.CalculateRiskAmount(itemBet.WIN,price,true);}
return false;}
if(wagerLimit===-1||(wagerLimit>0&&wagerLimit<CUSTOMER.MINIMUM_LIMIT)){itemBet.RISK=0.0;itemBet.WIN=0.0;itemBet.AMOUNT_TYPE=itemBet.IsFavorite(price)?AMOUNT_TYPES.RISK:AMOUNT_TYPES.WIN;return false;}
if(force){var minimumAmount=parseFloat(CUSTOMER.MINIMUM_LIMIT);var wagerAmount=CUSTOMER.MINIMUM_LIMIT_TYPE===AMOUNT_TYPES.RISK||(CUSTOMER.MINIMUM_LIMIT_TYPE===AMOUNT_TYPES.AMOUNT&&limitType===AMOUNT_TYPES.RISK)?itemBet.RISK:itemBet.WIN;if(wagerAmount>0&&wagerAmount<minimumAmount){itemBet.RISK=0.0;itemBet.WIN=0.0;itemBet.AMOUNT_TYPE=bettingEngine.IsFavorite(price)?AMOUNT_TYPES.WIN:AMOUNT_TYPES.RISK;jconfirm
({useBootstrap:false,title:'Minimum Wager Limit',content:'Minimum Wager Limit for '+itemBet.DESCRIPTION+' is $'+minimumAmount.toFixed(2).toString(),type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:callBack});return false;}}
var maximumPayout=itemBet.PAYOUT;if(!isNaN(maximumPayout)&&maximumPayout>0&&winAmount>maximumPayout){winAmount=parseFloat(bettingEngine.ToFinalAmount(maximumPayout));itemBet.WIN=winAmount;}
return true;}
this.Calculate=function(force,amountType){var reverseBet=this.BET.Get();if(reverseBet===undefined||reverseBet===null)
return false;var prefixName=reverseBet.CONTAINER+"_";var inputWager=jQuery("#"+prefixName+BOX_TYPES.AMOUNT);if(inputWager===undefined||inputWager===null)
return false;reverseBet.RISK=0.0;reverseBet.WIN=0.0;jQuery.each
(this.COMBINATIONS.Get(),function(i,combination){combination.RISK=0.0;combination.WIN=0.0;jQuery.each
(combination.ITEMS,function(j,element){var item=bettingEngine.Get(element.NUMBER);item.RISK=0.0;item.WIN=0.0;item.AMOUNT_TYPE=bettingEngine.IsFavorite(item.FINAL_PRICE)?AMOUNT_TYPES.WIN:AMOUNT_TYPES.RISK;});});var wagerAmount=parseFloat(inputWager.val());if(amountType!==undefined&&amountType!==null){wagerAmount=amountType==="M"?reverseBet.LIMIT_MIN:amountType==="D"?reverseBet.LIMIT_MID:reverseBet.LIMIT_MAX;inputWager.val(wagerAmount.toFixed(2));}
if(wagerAmount===0||isNaN(wagerAmount)){inputWager.val(force?"0.00":"");this.Totalize();return false;}
var amountLimit=this.WagerLimit();if(amountLimit==-1){inputWager.val(force?"0.00":"");this.Totalize();var itemDescription="";jQuery.each
(bettingEngine.List(),function(i,item){if(parseFloat(item.LIMIT)===-1&&itemDescription===""){itemDescription=item.DESCRIPTION;}});jconfirm
({useBootstrap:false,title:'Maximum Wager Limit',content:'Maximum Wager Limit for '+itemDescription+' has been reached.',type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:null});return false;}
else if(wagerAmount>amountLimit){wagerAmount=amountLimit;inputWager.val(wagerAmount.toFixed(2).toString());jconfirm
({useBootstrap:false,title:'Maximum Wager Limit',content:'Maximum Wager Limit for Action Reverse is $'+amountLimit.toFixed(2).toString()+'.',type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:null});}
reverseBet.VALIDATE=true;var currentEngine=this;var isOk=true;jQuery.each
(this.COMBINATIONS.Get(),function(i,combination){combination.RISK=0.0;combination.WIN=0.0;var maximumRisk=0.0;var totalWin=0.0;jQuery.each
(combination.ITEMS,function(j,element){var item=bettingEngine.Get(element.NUMBER);var price=item.FINAL_PRICE;if(bettingEngine.IsFavorite(price)){item.RISK=parseFloat(bettingEngine.CalculateRiskAmount(wagerAmount,item.FINAL_PRICE,true));item.WIN=wagerAmount;}
else{item.RISK=wagerAmount;item.WIN=parseFloat(bettingEngine.CalculateWinAmount(wagerAmount,item.FINAL_PRICE,true));}
if(!currentEngine.Validate(item.NUMBER,force)){isOk=false;return false;}
if(item.RISK>maximumRisk)
maximumRisk=item.RISK;totalWin+=item.WIN;});combination.RISK+=maximumRisk*2;combination.WIN+=totalWin*2;if(!isOk){reverseBet.RISK=0.0;reverseBet.WIN=0.0;inputWager.val("0.00");return false;}});jQuery.each
(this.COMBINATIONS.Get(),function(i,combination){if(isOk){reverseBet.RISK+=combination.RISK;reverseBet.WIN+=combination.WIN;}
else{combination.RISK=0.0;combination.WIN=0.0;jQuery.each
(combination.ITEMS,function(j,element){var item=bettingEngine.Get(element.NUMBER);item.RISK=0.0;item.WIN=0.0;item.AMOUNT_TYPE=bettingEngine.IsFavorite(item.FINAL_PRICE)?AMOUNT_TYPES.WIN:AMOUNT_TYPES.RISK;});}});this.Totalize();return isOk;}
this.POINT_TYPES=new PointTypesEngine(bettingEngine);this.OnPointChanged=function(itemNumber,dropDownList){var item=bettingEngine.Get(parseInt(itemNumber));this.POINT_TYPES.OnChange(item,dropDownList);if(!item.AMOUNT_TYPE||item.AMOUNT_TYPE==null||item.AMOUNT_TYPE==undefined)
item.AMOUNT_TYPE=AMOUNT_TYPES.RISK;this.Calculate(true);}
this.OnReadback=function(){var reverseBet=this.BET.Get();if(reverseBet===undefined||reverseBet===null)
return false;reverseBet.VALIDATE=false;if(bettingEngine.List().length<2){jconfirm
({useBootstrap:false,title:'Minimum picks',content:'Minimum of picks for Reverse is 2',type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}}});return false;}
var prefixName=reverseBet.CONTAINER+"_";var inputAmount=jQuery("#"+prefixName+BOX_TYPES.AMOUNT);var inputRisk=jQuery("#"+prefixName+BOX_TYPES.RISK);var inputWin=jQuery("#"+prefixName+BOX_TYPES.WIN);if(inputRisk===undefined||inputRisk===null)
return false;var currentEngine=this;var wagerAmount=parseFloat(inputAmount.val());if(isNaN(wagerAmount))
wagerAmount=0.0;if(wagerAmount===0){jconfirm
({useBootstrap:false,title:'Amount Wager',content:'Amount wagered for Reverse cannot be zero.',type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:function(){inputAmount.focus();}});return false;}
if(wagerAmount>0){var isOk=true;jQuery.each
(this.COMBINATIONS.Get(),function(i,combination){jQuery.each
(combination.ITEMS,function(j,element){var item=bettingEngine.Get(element.NUMBER);if
(!currentEngine.Validate
(item.NUMBER,true,function(){inputRisk.val(reverseBet.RISK.toFixed(2));inputWin.val(reverseBet.WIN.toFixed(2));inputAmount.focus();})){isOk=false;return false;}});if(!isOk)
return false;});if(!isOk){return false;}}
reverseBet.VALIDATE=true;return true;}
this.OnLostFocus=function(){var reverseBet=this.BET.Get();if(reverseBet===undefined||reverseBet===null)
return;if(!reverseBet.VALIDATE)
return;var inputRisk=jQuery("#"+reverseBet.CONTAINER+BOX_TYPES.RISK);var inputWin=jQuery("#"+reverseBet.CONTAINER+BOX_TYPES.WIN);if
((inputRisk===undefined||inputRisk===null)||(inputWin===undefined||inputWin===null))
return;if(!this.Calculate(true)){inputRisk.val(reverseBet.RISK.toFixed(2));inputWin.val(reverseBet.WIN.toFixed(2));}
return;}}
function CombinationType(){var combinationTypes=new Array();function ListCombinations(combinationCount,itemsCount,start,current,combination,combinations){for(var index=start;index<=itemsCount;index++){if(index>=start&&FindJsonByKeyValue(combination,"NUMBER",index)==null){combination.push({"NUMBER":index});if(current<combinationCount&&(combination.length+(itemsCount-index)>=combinationCount))
ListCombinations(combinationCount,itemsCount,(start+1),(current+1),combination,combinations);else if(combination.length==combinationCount){var json=jQuery.parseJSON
(JSON.stringify
({"NUMBER":(combinations.length+1),"ITEMS":combination,"RISK":0.0,"WIN":0.0}));var pushIt=true;jQuery.each
(combinations,function(i,combinationType){var isOk=false;jQuery.each
(json.ITEMS,function(j,item){if(FindJsonByKeyValue(combinationType.ITEMS,"NUMBER",item.NUMBER)==null)
isOk=true;});pushIt=pushIt&&isOk;});if(pushIt)
combinations.push(json);}
combination.pop();if((combination.length+(itemsCount-index)<combinationCount))
break;}}}
this.Set=function(combinationsArray,itemsCount){combinationTypes=new Array();if(Array.isArray(combinationsArray)&&combinationsArray instanceof Array&&itemsCount>1)
jQuery.each
(combinationsArray,function(i,combinationCount){ListCombinations(parseInt(combinationCount),itemsCount,1,1,new Array(),combinationTypes);});}
this.Push=function(combination){combinationTypes.push(jQuery.parseJSON(combination));}
this.Get=function(combinationNumber){return FindJsonByKeyValue(combinationTypes,"NUMBER",combinationNumber);}
this.Get=function(){return combinationTypes;}
this.Change=function(select,itemsCount){var combinationsArray=String(jQuery(select).find(":selected").val()).split(',');this.Set(combinationsArray,itemsCount);}}
function SimpleListType(){var simpleList=new Array();this.Push=function(item){simpleList.push(jQuery.parseJSON(item));}
this.Get=function(itemNumber){return FindJsonByKeyValue(simpleList,"NUMBER",itemNumber);}}
function BetTypeEngine(){var current=null;this.Set=function(bet){current=jQuery.parseJSON(bet);}
this.Get=function(){return current;}}
function PointTypesEngine(bettingEngine){this.Push=function(pointType){var obj=jQuery.parseJSON(pointType);var item=bettingEngine.Get(obj.ITEM_NUMBER);if(item!=undefined&&item!=null){if(!item.POINT_TYPES)
item.POINT_TYPES=new Array();item.POINT_TYPES.push(obj);}}
this.Clear=function(itemNumber){var item=bettingEngine.Get(itemNumber);if(item)
item.POINT_TYPES=new Array();}
this.Get=function(itemNumber,index){var item=bettingEngine.Get(itemNumber);if(item&&item.POINT_TYPES)
return FindJsonByKeyValue(item.POINT_TYPES,"INDEX",index);return null;}
this.OnChange=function(item,dropDownList){var select=jQuery(dropDownList);if(!select||!item)
return;var option=jQuery("option:selected",select);if(!option)
return;var values=option.val().split('|');item.FINAL_PRICE=values.length>1?values[1]:values[0];}}
function ContainerType(){var container=null;this.Push=function(container){this.container=container;}
this.Get=function(){return this.container;}}
function BettingEngine(confirmationPanel){var oneClickButton;var confirmationButton;var clearButton;var saveButton;var trashIcon;var confirmationOffButton;var clearOffButton;var saveOffButton;var isConfirming=false;var items=new Array();var children=new Array();if(confirmationPanel){trashIcon=jQuery("#trashIcon");oneClickButton=jQuery("#"+confirmationPanel+"_htmlOneClickConfirmation");oneClickButton.css({"display":"block","visibility":"visible"});confirmationButton=jQuery("#"+confirmationPanel+"_btnConfirm");clearButton=jQuery("#"+confirmationPanel+"_btnClear");saveButton=jQuery("#"+confirmationPanel+"_btnSave");confirmationButton.removeClass("btn-confirm").addClass("btn-off-confirm");clearButton.removeClass("btn-clear").addClass("btn-off-clear");saveButton.removeClass("btn-save").addClass("btn-off-save");confirmationButton.prop("disabled",true);clearButton.prop("disabled",true);saveButton.prop("disabled",true);confirmationOffButton=jQuery("#"+confirmationPanel+"_btnClearOff");clearOffButton=jQuery("#"+confirmationPanel+"_btnClearOff");saveOffButton=jQuery("#"+confirmationPanel+"_btnSaveOff");confirmationOffButton.removeClass("btn-confirm").addClass("btn-off-confirm");clearOffButton.removeClass("btn-clear").addClass("btn-off-clear");saveOffButton.removeClass("btn-save").addClass("btn-off-save");confirmationOffButton.prop("disabled",true);clearOffButton.prop("disabled",true);saveOffButton.prop("disabled",true);}
this.Push=function(item){items.push(jQuery.parseJSON(item));if(items.length>0&&confirmationPanel){confirmationButton.prop("disabled",false);clearButton.prop("disabled",false);saveButton.prop("disabled",false);confirmationButton.removeClass("btn-off-confirm").addClass("btn-confirm");clearButton.removeClass("btn-off-clear").addClass("btn-clear");saveButton.removeClass("btn-off-save").addClass("btn-save");}
jQuery.each
(children,function(index,child){var itemClone=jQuery.parseJSON(item);if(!child.ONLY_SELECTED||itemClone.SELECTED){itemClone.FINAL_PRICE=itemClone.ORIGINAL_PRICE;child.ENGINE.Push(JSON.stringify(itemClone));}});}
this.Get=function(itemNumber){return FindJsonByKeyValue(items,"NUMBER",itemNumber);}
this.List=function(){return items;}
this.Clear=function(){items=new Array();children=new Array();return null;}
this.IsFavorite=function(price){if(CUSTOMER.PRICE_TYPE===PRICE_TYPES.DECIMAL)
return parseFloat(price)<2.0;else if(CUSTOMER.PRICE_TYPE===PRICE_TYPES.FRACTIONAL){var fraction=String(price).split("/");return parseInt(fraction[0])<parseInt(fraction[1]);}
return(parseInt(price)!==Math.abs(parseInt(price)));}
this.ToFinalAmount=function(amount){return parseFloat
(!CUSTOMER.TRUNCATE_CENTS?parseFloat(amount.toFixed(2)):parseFloat(Math.floor(amount).toFixed(2)));}
this.CalculateWinAmount=function(riskAmount,price,toFinalAmount){var winAmount=parseFloat(0);riskAmount=parseFloat(riskAmount);if(riskAmount!=undefined&&!isNaN(riskAmount)&&riskAmount>0)
switch(CUSTOMER.PRICE_TYPE){case PRICE_TYPES.DECIMAL:price=parseFloat(price);if(price!=undefined&&!isNaN(price)&&price>0)
winAmount=riskAmount*(price-1.0);break;case PRICE_TYPES.FRACTIONAL:var fraction=String(price).split("/");if(fraction!=undefined&&fraction.length===2){var numerator=parseInt(fraction[0]);var denominator=parseInt(fraction[1]);if(numerator!=undefined&&!isNaN(numerator)&&numerator>0&&denominator!=undefined&&!isNaN(denominator)&&denominator>0)
winAmount=(riskAmount/denominator)*numerator;}
break;default:price=parseInt(price);if(price!=undefined&&!isNaN(price)&&price!==0)
winAmount=this.IsFavorite(price)?(riskAmount*100.0)/parseFloat(Math.abs(price)):(riskAmount*parseFloat(price))/100.0;break;}
return toFinalAmount?this.ToFinalAmount(winAmount):winAmount;}
this.CalculateRiskAmount=function(winAmount,price,toFinalAmount){var riskAmount=parseFloat(0);winAmount=parseFloat(winAmount);if(winAmount!=undefined&&!isNaN(winAmount)&&winAmount>0)
switch(CUSTOMER.PRICE_TYPE){case PRICE_TYPES.DECIMAL:price=parseFloat(price);if(price!=undefined&&!isNaN(price)&&price>0)
riskAmount=winAmount/(price-1.0);break;case PRICE_TYPES.FRACTIONAL:var fraction=String(price).split("/");if(fraction!=undefined&&fraction.length===2){var numerator=parseInt(fraction[0]);var denominator=parseInt(fraction[1]);if(numerator!=undefined&&!isNaN(numerator)&&numerator>0&&denominator!=undefined&&!isNaN(denominator)&&denominator>0)
riskAmount=(winAmount/numerator)*denominator;}
break;default:price=parseInt(price);if(price!=undefined&&!isNaN(price)&&price!==0)
riskAmount=this.IsFavorite(price)?(winAmount*Math.abs(price))/100:(winAmount*100)/price;break;}
return toFinalAmount?this.ToFinalAmount(riskAmount):riskAmount;}
this.Clone=function(onlySelected,wagerType){var engineClone=new BettingEngine();var itemNumber=0;children.push
({ENGINE:engineClone,ONLY_SELECTED:onlySelected});jQuery.each
(items,function(index,item){if(!onlySelected||(item.SELECTED&&(wagerType==null||wagerType==undefined))||(wagerType==WAGER_TYPE.STRAIGHT)||(item.PARLAY_SELECTED&&wagerType==WAGER_TYPE.PARLAY)||(item.TEASER_SELECTED&&wagerType==WAGER_TYPE.TEASER)){engineClone.Push(JSON.stringify(item));var itemClone=engineClone.Get(item.NUMBER);itemClone.FINAL_PRICE=itemClone.ORIGINAL_PRICE;if(onlySelected){itemClone.NUMBER=++itemNumber;}}});return engineClone;}
this.CONTAINER=confirmationPanel?new ContainerType():null;this.Switch=function(halt){oneClickButton.css({"display":"none","visibility":"hidden"});confirmationButton.removeClass("btn-confirm").addClass("btn-off-confirm");clearButton.removeClass("btn-clear").addClass("btn-off-clear");saveButton.removeClass("btn-save").addClass("btn-off-save");confirmationButton.css({"display":"none","visibility":"hidden"});clearButton.css({"display":"none","visibility":"hidden"});saveButton.css({"display":"none","visibility":"hidden"});confirmationOffButton.css({"display":"block","visibility":"visible"});clearOffButton.css({"display":"block","visibility":"visible"});saveOffButton.css({"display":"block","visibility":"visible"});trashIcon.removeClass("fa-trash-alt");if(halt)
return;var button=jQuery("[id$='_btnStraight']");if(button!=null&&button!=undefined){button.removeClass("btn-off").addClass("btn-on");button.prop("disabled","disabled");}
button=jQuery("[id$='_btnParlays']");if(button!=null&&button!=undefined){button.removeClass("btn-off").addClass("btn-on");button.prop("disabled","disabled");}
button=jQuery("[id$='_btnIfBet']");if(button!=null&&button!=undefined){button.removeClass("btn-off").addClass("btn-on");button.prop("disabled","disabled");}
button=jQuery("[id$='_btnActionReverse']");if(button!=null&&button!=undefined){button.removeClass("btn-off").addClass("btn-on");button.prop("disabled","disabled");}
button=jQuery("[id$='_btnTeasers']");if(button!=null&&button!=undefined){button.removeClass("btn-off").addClass("btn-on");button.prop("disabled","disabled");}}
this.OnClearOrSave=function(e,sender){if(this.CONTAINER!==undefined&&this.CONTAINER!==null&&!isConfirming){isConfirming=true;var currentEngine=this;var container=this.CONTAINER.Get();if(container!==undefined&&container!==null){var button=jQuery(sender);if(button.prop("id").indexOf("btnClear")!==-1){jconfirm
({useBootstrap:false,title:'Clear Bet Slip',content:'Are you sure you want to clear all your wagers?',type:'clear',closeIcon:false,lazyOpen:false,escapeKey:'No',boxWidth:'300px',backgroundDismiss:false,backgroundDismissAnimation:'shake',buttons:{Yes:{text:'Yes',keys:['enter'],action:function(){currentEngine.Switch();OnSlipReading();setTimeout(function(){__doPostBack(button.prop("name"),"");},1);}},No:{text:'No',keys:['esc']}}});}
else{currentEngine.Switch();setTimeout(function(){__doPostBack(button.prop("name"),"");},1);}}
isConfirming=false;}
e.stopPropagation();e.preventDefault();return false;}
this.OnReadback=function(e){if(this.CONTAINER!==undefined&&this.CONTAINER!==null&&!isConfirming){if(!CUSTOMER.IS_LOGGED_IN){jconfirm
({useBootstrap:false,title:"Betslip",content:"You must log in to place wagers.",type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:function(){return false;}});return false;}
isConfirming=true;var container=this.CONTAINER.Get();if(container!==undefined&&container!==null){if(container.OnReadback(false)){isConfirming=false;this.Switch();return true;}}
isConfirming=false;}
e.stopPropagation();e.preventDefault();return false;}
this.OnConfirm=function(e,sender){if(!isConfirming){if(!CUSTOMER.IS_LOGGED_IN){jconfirm
({useBootstrap:false,title:"Betslip",content:"You must log in to place wagers.",type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}},onDestroy:function(){return false;}});return false;}
isConfirming=true;var button=jQuery(sender);var currentPanel=button.prop("id").indexOf("btnConfirm")!==-1?button.prop("id").toString().replace("_btnConfirm",""):button.prop("id").toString().replace("_btnCancel","");var confirmButton=jQuery("#"+currentPanel+"_btnConfirm");var confirmButtonOff=jQuery("#"+currentPanel+"_btnConfirmOff");var cancelButton=jQuery("#"+currentPanel+"_btnCancel");var cancelButtonOff=jQuery("#"+currentPanel+"_btnCancelOff");confirmButton.css({"display":"none","visibility":"hidden"});cancelButton.css({"display":"none","visibility":"hidden"});confirmButtonOff.css({"display":"block","visibility":"visible"});cancelButtonOff.css({"display":"block","visibility":"visible"});e.stopPropagation();e.preventDefault();setTimeout(function(){__doPostBack(button.prop("name"),"");},1);}
return false;}
this.Onkeypress=function(e,sender){if(e.keyCode===13){if(confirmationButton){e.stopPropagation();e.preventDefault();if(this.OnReadback(e)){confirmationButton.click();return true;}
return false;}}
else{var input=jQuery(sender);var oldvalue=input.val();var pattern=input?input.attr('pattern'):null;if(pattern!=undefined&&pattern!=null&&pattern.toString().length>0){var regex=new RegExp(pattern,'g');setTimeout
(function(){var newvalue=input.val();if(!regex.test(newvalue))
input.val(oldvalue)},0);return OnlyNumbersHandler(e,sender);}
return OnlyNumbersHandler(e,sender);}
return true;}}
function OnRifHandler(controlName,button){var link=jQuery(button);var display=!link.hasClass("rif-button-opened");link.removeClass().addClass("text-uppercase").addClass
(display?"rif-button-opened":"rif-button");var control=jQuery("#"+controlName);if(display){control.show();control.css("visibility","visible");control.css("display","block");}
else{control.hide();control.css("visibility","hidden");control.css("display","none");}
return display;}
function OnWagerTypeClick(prefix,buttonName,halt){var button=jQuery("#"+buttonName);if(halt){button.removeClass("btn-on").addClass("btn-off");button.prop("disabled","disabled");return false;}
button.removeClass("btn-off").addClass("btn-on");if(String(buttonName).indexOf('btnStraight')===-1)
OnWagerTypeClick(prefix,prefix+"_"+'btnStraight',true);if(String(buttonName).indexOf('btnParlays')===-1)
OnWagerTypeClick(prefix,prefix+"_"+'btnParlays',true);if(String(buttonName).indexOf('btnIfBet')===-1)
OnWagerTypeClick(prefix,prefix+"_"+'btnIfBet',true);if(String(buttonName).indexOf('btnActionReverse')===-1)
OnWagerTypeClick(prefix,prefix+"_"+'btnActionReverse',true);if(String(buttonName).indexOf('btnTeasers')===-1)
OnWagerTypeClick(prefix,prefix+"_"+'btnTeasers',true);OnSlipReading();bettingEngine.Switch(true);return true;}
function OnPrint(printWindow,ticketNumber){if(!printWindow)
window.open("/sportsbook/printable.aspx",null,"height=500,width=600,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,left=0,right=0");else
window.print();}
function OnRifHelp(action){var rifBlock=jQuery("#rif-help");switch(action){case "open":rifBlock.attr('class','rif-help-open');break;case "expand":rifBlock.attr('class','rif-help-expanded');break;case "close":rifBlock.attr('class','rif-help-closed');break;default:rifBlock.attr('class','rif-help-closed');}}
function OnQuickBetHelp(htmlElement,action){var element=jQuery(htmlElement);var parentElement=element.parent();var paragraphs=parentElement.find("p");var popupSpan=jQuery(paragraphs[0]);switch(action){case "open":if(popupSpan.attr('class')=="pop"){parentElement.css("overflow","visible");popupSpan.css("display","block");}
break;default:if(popupSpan.attr('class')=="pop")
popupSpan.css("display","none");break;}}
function OnSlipReading(){var floater=jQuery("#floater");if(jQuery(window).width()>=992){if(floater!=null&&floater!=undefined){floater.prepend('<div style="width: 100%;min-height: 100%;position: absolute;z-index: 1000;cursor: progress;"></div>');floater.fadeTo("slow",0.30);}}}
function ItemDelete_OnClick(){if(ITEMDELETE_ONCLICK_FLAG)
return false;ITEMDELETE_ONCLICK_FLAG=true;if(bettingEngine!=undefined&&bettingEngine!=null)
bettingEngine.Switch(true);jQuery(".delete").prop("disabled",true);OnSlipReading();return true;}
function ItemMove_OnClick(){if(ITEMMOVE_ONCLICK_FLAG)
return false;ITEMMOVE_ONCLICK_FLAG=true;if(bettingEngine!=undefined&&bettingEngine!=null)
bettingEngine.Switch(true);jQuery(".img-up").prop("disabled",true);jQuery(".img-down").prop("disabled",true);OnSlipReading();return true;}
var bettingEngine;var straightEngine;var parlayEngine;var teaserEngine;var ifbetEngine;var reverseEngine;