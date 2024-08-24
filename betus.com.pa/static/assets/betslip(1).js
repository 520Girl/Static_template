var BETSLIP_MIN_WIDTH_TO_DISPLAY_MOBILE=992;var BETSLIP_MAX_HEIGHT_SCROLL_TO_START_HOVER=100;var BETSLIP_MAX_HEIGHT_OFFSET=200;var BETSLIP_IS_MOBILE_MODE=false;jQuery(document).ready(function(){jQuery(window).scroll(function(){UpdateBetslip(true);});jQuery(".txt32").bind('paste',function(e){var data=e.originalEvent.clipboardData.getData('Text');if(!jQuery.isNumeric(data))
e.preventDefault();});jQuery(".txt32").on('drop',function(e){e.preventDefault();});jQuery(window).resize(function(){if(jQuery(window).width()>=992)
EnableScroll();});var prm=Sys.WebForms.PageRequestManager.getInstance();prm.add_endRequest(function(s,e){var floater=jQuery('#floater');var betslipState=localStorage.getItem('betslipState');if(betslipState=="true")
jQuery(floater).removeClass("close-betslip").addClass("open-betslip");IOS_Update();});jQuery(window).on("beforeunload",function(){localStorage.removeItem("betslipState");})
IOS_Update();});function IOS_Update(){var isIOS=(navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?true:false);if(isIOS){jQuery('.ios-device').removeClass('ios-device');jQuery('#floater').addClass('ios-device');jQuery('#floater').find('*').addClass('ios-device');}}
function BetslipMobileResume(){BetslipMobileDisplay(null);}
function BetslipMobileDisplay(event){if(event!=null)
event.preventDefault();var floater=jQuery('#floater');var betslipState=localStorage.getItem('betslipState');if(floater.height()<=0){betslipState=true;jQuery(floater).removeClass("close-betslip").addClass("open-betslip");DisableScroll();}else{betslipState=false;jQuery(floater).removeClass("open-betslip").addClass("close-betslip");EnableScroll();}
localStorage.setItem('betslipState',betslipState);IOS_Update();}
function QuickBetExplanationOnOver(elm){var parent=jQuery(elm).parent();var spanTag=parent.find('p.pop');if(spanTag!==null&&spanTag!==undefined){spanTag.css('overflow','visible');spanTag.css('display','flex');}}
function QuickBetExplanationOnOut(elm){var parent=jQuery(elm).parent();var spanTag=parent.find('p');if(spanTag.attr('class')=='pop')
jQuery(spanTag).css('display','none');}
function QuickBetExplanationClose(elm){var parent=jQuery(elm).parents('.pop');jQuery(parent).css('display','none');}
function UpdateBetslip(isScrolling){var
floater=jQuery('#floater'),confirmSlip=jQuery('#confirmSlip'),betslip=jQuery('#show-hide-bs'),bets=jQuery('#bets');var enableFloating=(jQuery(floater).data("enable-floating")==='True');jQuery(betslip).css('height','');jQuery(bets).css('height','');if(enableFloating){if(confirmSlip.length>0){jQuery(floater).css('top','0px');jQuery(floater).css('position','relative');if(!isScrolling){if(window.matchMedia('(min-width: 992px)').matches){jQuery('html,body').animate({scrollTop:jQuery(confirmSlip).offset().top},'slow');}}}
else{var windowWidth=jQuery(window).width();var useNarrowBetslip=(windowWidth<BETSLIP_MIN_WIDTH_TO_DISPLAY_MOBILE);if
(BETSLIP_IS_MOBILE_MODE==true&&useNarrowBetslip==false&&jQuery("#show-hide-bs").css('display')!='block')
BetslipMobileDisplay(null);if(useNarrowBetslip){jQuery(floater).removeClass("float-off").addClass("float-on");}else{jQuery(floater).removeClass("float-on").addClass("float-off");}
BETSLIP_IS_MOBILE_MODE=useNarrowBetslip;var scrollPosition=jQuery(window).scrollTop();if(useNarrowBetslip==false&&scrollPosition>BETSLIP_MAX_HEIGHT_SCROLL_TO_START_HOVER){jQuery(floater).css('top','61px');jQuery(floater).css('position','fixed');jQuery(floater).css('width',jQuery('#right-col').width()+'px');jQuery(floater).css('width',jQuery('#desktop-bonus-holder').width()+'px');jQuery(floater).addClass('desktopFloater');jQuery(".free-bet-cta-outer").css("display","none");jQuery(".special-message-container").css("display","none");jQuery(".wagering-right-col").css("filter","blur(10px)");}
else{jQuery(floater).css('top','0px');jQuery(floater).css('position','relative');jQuery(floater).css('width','unset');jQuery(floater).removeClass('desktopFloater');jQuery(".free-bet-cta-outer").css("display","block");jQuery(".special-message-container").css("display","block");jQuery(".wagering-right-col").css("filter","none");}
if
(bets.length>0&&bets.children().length>0){var windowHeight=jQuery(window).height();var betsStartPosition=jQuery(bets).position().top;var betslipHeight=jQuery(betslip).height();}}}
IOS_Update();}
function PUSH_FLOATING_SLIP(bannersID){UpdateBetslip(false);}
var errorMessages=[];function AddErrorMessage(errorMessage)
{var isOk=true;jQuery.each
(errorMessages,function(index,value)
{if(value==errorMessage)
{isOk=false;return;}});if(isOk)
errorMessages.push(errorMessage);}
function ClearErrorMessage()
{errorMessages=[];}
function DisplayErrorMessage()
{var message='';var windowWidth=jQuery(window).width();var useNarrowBetslip=(windowWidth<BETSLIP_MIN_WIDTH_TO_DISPLAY_MOBILE);jQuery.each
(errorMessages,function(index,value){message+=message==''?value:"<br /><hr />"+value;})
if(useNarrowBetslip&&message!='')
jconfirm
({useBootstrap:false,title:'Betslip Message',content:message,type:'red',escapeKey:true,closeIcon:true,lazyOpen:false,buttons:{Ok:{text:'Ok',keys:['enter']}}});}
function DisableScroll(){jQuery('body').css("overflow","hidden");jQuery('body').css("position","fixed")}
function EnableScroll(){jQuery('body').css("overflow","auto");jQuery("body").css("position","static");window.onscroll=function(){};}