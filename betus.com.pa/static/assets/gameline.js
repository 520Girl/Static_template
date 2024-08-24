function DisplayPropsBuilderModal(url){jconfirm
({useBootstrap:false,content:'<iframe id="iframeprops" src="'+url+'" style="width: 1px; min-width: 100%; height: 500px;" class="iframe-props" runat="server" />',escapeKey:true,closeIcon:true});}
function Periods_OnClick(linkControl){if(linkControl==undefined||linkControl==null)
return;var linkButton=jQuery(linkControl);if(linkButton==undefined||linkButton==null||linkButton.hasClass("disabled"))
return;GameLines_OnClick();}
function GameLines_OnClick(self){PaintClickedLine(self);if(GAMELINE_ONCLICK_FLAG)
return false;GAMELINE_ONCLICK_FLAG=true;if(bettingEngine!=undefined&&bettingEngine!=null)
bettingEngine.Switch(true);OnLinesReading();OnSlipReading();return true;}
function PaintClickedLine(self){let control=jQuery(self);control.addClass("added");}
function Slip_OnItemAdded(linkName,text){var span=jQuery("span[id$='"+linkName+"']");if(span===undefined||span===null)
return;if(text!==undefined&&text!==null&&text!=="")
span.text(text);span.css({"display":"block","visibility":"visible"});setTimeout
(function(){span.css({"display":"none","visibility":"hidden"});GAMELINE_ONCLICK_FLAG=false;},1500);}
function ShowHideLinesOrScores(remainderName,showName,hideName,activeName,inactiveName){var control=jQuery("#"+showName);control.css({"display":"block","visibility":"visible"});control=jQuery("#"+hideName);control.css({"display":"none","visibility":"hidden"});control=jQuery("#"+activeName);control.removeClass("tab-inactive").addClass("tab-active");control=jQuery("#"+inactiveName);control.removeClass("tab-active").addClass("tab-inactive");control=jQuery("#"+remainderName);control.val(showName);return false;}
function ImageLoading(gameNumber,visible){var imageName='htmlGame'+String(gameNumber);var image=jQuery("#"+imageName);if(visible){image.style.display='block';image.style.visibility='visible';}
else{image.style.display='none';image.style.visibility='hidden';}}