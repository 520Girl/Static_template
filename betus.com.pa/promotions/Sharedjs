var cdnHost = "https://nx.betuscdn.com";var cdnHostShared = "https://a.betuscdn.com/libs";var cdnResourceHost = "https://sh.betuscdn.com";var dotNet4Host = "www.betus.com.pa";var smsOptApiPath = "https://api.betus.com.pa/api/v1";var ssoPath = "https://api.betus.com.pa/";var ssoPathEndpoint = "sso/api";var depositApiPath = "https://api.betus.com.pa/Deposit/";var notificationBaseUrl = "https://api.betus.com.pa";var clickyChatCampaignId = "ce47a7b3-4001-406b-80f5-ed35058b7b7f";var chatFailedDepositUrl = "https://vue.cs.betus.com.pa/chatwindow.aspx?siteId=310&planId=4cffba5e-f157-47eb-aab7-0244ef6129bf";var chatSiteId = 310;var joinPixelsUrl = "/";var chatIsSysError = 0;// This file is added to .NET4, .NET5 and WP website. Any JS that is required cross-site needs to be added here.
// NOTE: In order to guarantee uniqueness all functions here needs to be prefixed with the word betUs

//***********************************************************************************************
//    Added for Chat
//***********************************************************************************************
//@* NOTE: This function is used by CMS, on home page for example *@
function clicky() {
    if (typeof Comm100API !== 'undefined') {
        Comm100API.do('livechat.button.click');
    }
}

/**
 * purpose of this function is to force start chat with an agent istead of the agent picking up the chat manually
 * @param {object} invitation parameter gets passed by the comm100 widget api
 */
function betus_chatHandleAutoInvitation(invitation) {
    const invitationIdsToIntercept = [
        {
            // Failed Deposit invitation
            invitationId: "4cffba5e-f157-47eb-aab7-0244ef6129bf",
            delayOnForceChat: 1000
        },
        {   
            // Unfunded invitation
            invitationId: "9040c2d4-433b-47dc-9df0-9904fb3bab63",
            delayOnForceChat: 1000
        },
        {   
            // Crypto Support invitation
            invitationId: "7f4613b1-7410-48e7-9d99-f8405f94638a",
            delayOnForceChat: 1000
        },
        {
            // Generic Error invitation
            invitationId: "44b87d1e-2e40-4275-af33-78b255efd3e4",
            delayOnForceChat: 1000
        }
    ]

    const Id = invitationIdsToIntercept.find((item)=> item.invitationId = invitation.id);
    if(Id) setTimeout(()=>sendChatAccept(Id.invitationId), Id.delayOnForceChat)
    function sendChatAccept(invitationId) {
        if (typeof Comm100API !== 'undefined') {
            Comm100API.do('livechat.invitation.accept', invitationId);
        }
    }
}
function betus_chatSubscribeCampaignChange() {
    Comm100API.on('livechat.dynamicCampaign.change', betus_onChatCampaignChange);
}

function betus_chatSubscribeLiveChatOpen() {
    Comm100API.on('livechat.chat.start', function (chatGuid) { chatOpen = 1 });
    Comm100API.on('livechat.chat.end', function () { chatOpen = 0 });
}

function betus_onChatCampaignChange(currentCampaignId) {
    clickyChatCampaignId = currentCampaignId;
}

function betus_chatIsInDeposit(isDeposit) {
    chatIDP = isDeposit ? 1 : 0;
}

function betus_chatSetFailedDepositCampaign(iFailed) {
    chatIFD = iFailed ? 1 : 0;
}

function betus_chatSetSysErrorIndicator(iError) {
    chatIsSysError = iError ? 1 : 0;
}

function betus_chatSetButtonVisibility(showButton) {
    if (typeof Comm100API !== 'undefined') {
        Comm100API.set('livechat.button.isVisible', showButton);
    }
}

// obsolete - to be deleted after net4 and WP deployment
function getCurrentChatCampaignId() {
    var newChatCampaignId = clickyChatCampaignId;

    if (document.location.href.toLowerCase().indexOf('betus.com.pa/online-casino') > -1) {
        newChatCampaignId = '0f963f67-fb36-4de8-9f10-fbeee4db702c';
    }

    if ((chatI1 || 0) == 1 && (chatI2 || 0) == 0) {
        newChatCampaignId = '9040c2d4-433b-47dc-9df0-9904fb3bab63';
        chatInv = '184f86c4-574c-4c2f-9b3e-3bb06ccf013f';
        chatITO = 120000;
    }

    if ((chatI0 || 0) == 0) {
        chatInv = 'e451392e-ccb5-4b67-a076-b6fa9c0ed40b';
        chatITO = 240000;
    }

    if (document.location.href.toLowerCase().indexOf('betus.com.pa/miscellaneous/error') > -1 ||
        document.location.href.toLowerCase().indexOf('betus.com.pa/error.aspx') > -1) {
        newChatCampaignId = 'ce47a7b3-4001-406b-80f5-ed35058b7b7f';
        chatInv = '2bb9d5d7-600d-4377-9ae2-feec45421628'; //TURN OFF IN COMM100
        chatITO = 1000;
    }

    return newChatCampaignId;
}

// obsolete - to be deleted after net4 and WP deployment
function shouldInviteToChat() {
    if ((chatInv || '') != '') {
        setTimeout(function () {
            Comm100API.do('livechat.invitation.show', chatInv);
        }, chatITO);
    }
}

//***********************************************************************************************
//    Public function
//***********************************************************************************************



const DepositVariantType = {
    ClassicDeposit: 45001001,
    QuickDeposit: 45001002,
    M1Deposit: 45001003,
    C1Deposit: 45001004,
    M3Deposit: 45001005,
    MobileDeposit: 45002001,
    DesktopDeposit: 45002002,
    QuickDepositDepositMethodFirst: 45001006,

}

const BetUsDepositBrand = {
    cdnhost: cdnHost == null ? 'https://nx.betuscdn.com' : cdnHost,
    cdnResourceHost: cdnResourceHost == null ? 'https://sh.betuscdn.com' : cdnResourceHost,
    supportPhone: '+18009736659',
    depositPhoneNumber: '+18885123887',
    currentBrand: "bet-us",
    rolloverPolicyText: 'Bonus rules and wagering requirements apply to all special promotions, bonuses and offers. In order to take full advantage of any of these specials, members are required to contact BetUS Customer Support for full details as all specials are structured differently. Free Play for Sports, Propositions, Casino Action and Quarter bets do not count toward rollover. Rollover is calculated by GAME ACTION only. In addition, Baseball Wagers only count as half action. Casino Bonuses carry a rollover on the released amount before a withdrawal can be requested. The Casino Bonus has a 7 day expiration after being credited',
    depositLimitDescription : '<p>Some credit card transactions may be treated as a cash advance. BetUS is not responsible for any cash advance fees as this is established by your credit card’s issuing bank. Please consult with your bank for further details. Some issuing banks have restricted the use of credit cards for online entertainment. We have several alternative payment methods available. Contact us 24/7 for help depositing at %deposit_phone% .</p>',
    cryptoDepositLimitDescription : 'Please note that the minimum deposit amount we accept is $%min_deposit%.Any transaction received for less than $%min_deposit% or more than $%max_deposit%<span class="boldText"> will NOT be credited to your account. </span>',
    cryptoTermsAndConditions: '<div>This is a one-time transaction. Once we have received verification that the funds were transferred successfully, we will notify you via email. Please do not initiate another transfer using this information without discussing with your Account Manager.</div><div> PLEASE NOTE: The final deposit amount is based on the price of cryptocurrency at the processing time. </div><div>The minimum deposit amount we can accept is between $%min_deposit% - $%max_deposit%. Estimated approval time is between 15-30 minutes after confirmation has been received.</div><div> Any transaction received for less than $%min_deposit% or more than $%max_deposit% will NOT be credited to your account.</div><div>By depositing, I acknowledge that BetUS is not responsible for any coins sent to the wrong address.</div>',
    cryptoAlertRecoverDescription : 'Any other crypto currency sent may not be recoverable. Should you forget to complete the deposit, you can always access your <a href="/acc/mywallet/cryptoaddresses">Crypto addresses section</a> to finalize the transaction.',
    depositFinalActionButton:{
        text : "Go to sportsbook",
        url : "/sportsbook/",
        funciton : ""
    }
}

const SsoSettings = {
    ssoBaseURL: `${ssoPath}`,
    ssoLoginRoute: `${ssoPathEndpoint}/Authentication/login`,
    ssoRefreshTokenRoute: `${ssoPathEndpoint}/Authentication/refresh-token`,
    logOutPath: "/authentication/logout",
    useCookie: true
}

function showDepositPage(caller) {

    if (customerDepositMethodType == DepositVariantType.ClassicDeposit) {
        betus_CallOldDepositModal('/deposits/');
    } else {
        betus_QuickDeposit(customerDepositMethodType, caller);
    }
}


//***********************************************************************************************
//    Added Deposit Widget
//***********************************************************************************************
function betus_QuickDeposit(depositMethodVariant, caller) {
    window.parent.postMessage({
        cmd: 'show_quick_deposit',
        baseURL: depositApiPath,
        ...SsoSettings,
        customerId,
        customerObjectId,
        password: "",
        variant: depositMethodVariant,
        chatFailedDepositUrl,
        caller:caller || '',
        brandSetting: BetUsDepositBrand
    }, '*');
}
//***********************************************************************************************
//    Show Deposit Low Balance Popup Widget
//***********************************************************************************************
function NeedToDepositPopup() {
    window.parent.postMessage({
        cmd: 'show_low_balance_popup',
        baseURL: depositApiPath,
        ...SsoSettings,
        customerId,
        customerObjectId,
        password: "",
        variant: customerDepositMethodType,
        chatFailedDepositUrl,
        brandSetting: BetUsDepositBrand
    }, '*');
}

//***********************************************************************************************
//    Render Notifications Widget
//***********************************************************************************************
function betus_showNotificationsBtn(caller) {
    window.parent.postMessage({
        cmd: 'show_notifications_widget',
        baseURL: notificationBaseUrl,
        ...SsoSettings,
        customerId,
        customerObjectId,
        password: "",
        moveUnseenNotifsToTop: false,
        sortListByNewest: false,
        brandSetting: BetUsDepositBrand,
        caller: caller || ''
    }, '*');
}

//***********************************************************************************************
//    Added for VueJS
//***********************************************************************************************

function betus_SlimVueBackToSelectDepositMethod() {
    window.parent.postMessage({
        cmd: 'backToSelectDepositMethod'
    }, '*');
}

function betus_SlimVueHideBackButton() {
    window.parent.postMessage({
        cmd: 'hideBack'
    }, '*');
}

function betus_Open_sms_opt() {
    if (!!customerId) {
        let smsOptinJson = decodeURIComponent(getCookie('sop'))
        if (smsOptinJson == '') {
            return false;
        } else {
            if (localStorage.getItem('sop') != null && localStorage.getItem('sop') === `${customerId}:false`) {
                setCookie('sop', '', -5);
                return false;
            }
            smsOptinJson = JSON.parse(smsOptinJson);
            if (smsOptinJson.action == "sms-opt" && smsOptinJson.showDialog == true) {
                localStorage.setItem('freePlay', '$ ' + smsOptinJson.freePlay)
                window.parent.postMessage({
                    cmd: "showsmsopt",
                    sharedCDN: cdnHostShared ? 'https://a.betuscdn.com/libs' : cdnHostShared,
                    cdnhost: cdnHost == null ? 'https://nx.betuscdn.com' : cdnHost,
                    apiPath: smsOptApiPath,
                    privacyURL: "https://www.betus.com.pa/privacy-policy/",
                    termsURL: "https://www.betus.com.pa/terms-conditions/",
                    customerId
                }, "*");
                setTimeout(function () {
                    setCookie('sop', '', -5);
                }, 800)
            }
        }
    }
}

function betus_ShowSlimVueJoin() {
    let LoginModalIsOpen = document.querySelector('#loginModal.show .close');
    if (LoginModalIsOpen != null) {
        LoginModalIsOpen.click();
    }
    if (!window.location.hash.toLowerCase().includes('#join')) {
        window.location.hash = window.location.hash + '#join'
    }
    window.parent.postMessage({
        cmd: 'showJoin',
        pixelPageURL: joinPixelsUrl == null ? '/' : joinPixelsUrl,
        sharedCDN: cdnHostShared ? 'https://a.betuscdn.com/libs' : cdnHostShared,
        cdnhost: cdnHost == null ? 'https://nx.betuscdn.com' : cdnHost,
    }, '*');
}

function betus_ShowSlimVueDeposit(customerid) {
    if (!window.location.hash.toLowerCase().includes('#deposit')) {
        window.location.hash = window.location.hash + '#deposit'
    }
    window.parent.postMessage({
        cmd: 'showDeposit',
        cdnhost: cdnHost == null ? 'https://nx.betuscdn.com' : cdnHost,
        pixelPageURL: joinPixelsUrl == null ? '/' : joinPixelsUrl,
        sharedCDN: cdnHostShared ? 'https://a.betuscdn.com/libs' : cdnHostShared,
        customerid
    }, '*');
}

function betus_CallOldDepositModal(iframeSrc) {
    ToggleSharedModal({
        id: 'depositModal',
        title: 'MAKE A DEPOSIT',
        iframeSrc,
        class: "",
        callback: AfterDepositModalToggle
    });
}

//***********************************************************************************************
//    Moved from toolbar to be shared with .NET4
//***********************************************************************************************
function iResize() {
    var iframeMain = document.getElementById('iframeMain');
    if (iframeMain == null) {
        return;
    } else {
        var iframeWrapper = document.getElementById('iframe-wrapper');

        iframeMain.style.height = '200px';
        iframeWrapper.style.height = '225px';
        if (iframeMain != null) {
            if (window.innerWidth > 650 &&
                iframeMain.contentWindow.document.body.scrollHeight < window.innerHeight - 120) {
                iframeMain.style.height =
                    iframeMain.contentWindow.document.body.scrollHeight + 'px';
                iframeWrapper.style.height =
                    iframeMain.contentWindow.document.body.scrollHeight + 25 + 'px';
            } else {
                iframeMain.style.height = (window.innerHeight) - 145 + 'px';
                iframeWrapper.style.height = (window.innerHeight) - 120 + 'px';
            }
        }
    }
}

function IsMobileDisplay() {
    let mobileSize = 992;
    return jQuery(window).width() < mobileSize;
}

// Although we are using bootstrap's modal function, we want additional changes to layout on 
// opening of the modal. (hiding join button for example)
function ToggleLoginModal() {
    var isLoginModalOpen = jQuery('#loginModal').hasClass('show');
    if (!isLoginModalOpen) {
        //Adds the animation only if is mobile display
        if (IsMobileDisplay()) {
            jQuery(this).addClass('btn-expand');
            jQuery('.btn-join, .navbar-toggler, .user-balances').hide(100);
        }
        jQuery('body').addClass('login-modal-active');
        //Hides the navbar modal in case that it is open
        if (jQuery('.animated-icon').hasClass('open')) {
            jQuery('.animated').click();
        }
    } else {
        if (IsMobileDisplay()) {
            jQuery('.btn-login').removeClass('btn-expand');
            jQuery('.btn-join, .user-balances').show();
        }
        jQuery('body').removeClass('login-modal-active');
        //Check the screen size in order to display the hamburguer menu
        if (jQuery(window).width() < 992)
            jQuery('.navbar-toggler').show();
    }
}

jQuery(document).ready(function () {

    jQuery('.animated').on('click', function (e) {
        jQuery('.animated-icon').toggleClass('open');
        jQuery('body').toggleClass('menu-modal-active');
    });

    //ToggleLoginModal is defined on responsive-loginToolbar.ascx
    jQuery('.btn-login').on('click', ToggleLoginModal);

});

jQuery(document).ready(function () {
    jQuery('#loginModal button.close').on('click', ToggleLoginModal);
    jQuery('.btn-login').on('click', ToggleLoginModal);
});

AfterDepositModalToggle = () => {
    jQuery('#depositModal').on('shown.bs.modal', function (e) {
        setTimeout(iResize, 100);
    });

    jQuery('#depositModal').on('hidden.bs.modal', function (e) {
        document.getElementById('iframeMain').src = "";
    });
}

closeSharedModal = id => {
    document.getElementById(id).style.display = "none";
}

ToggleSharedModal = config => {
    var html = `<div class="modal" id="${config.id}" aria-modal="true" role="dialog" style="padding-right: 8px;">
        <div class="modal-dialog modal-gray-dialog modal-gray-area-${config.class}" style="max-width: 760px;">
            <div class="modal-gray-content modal-gray-${config.class}" style="z-index: 2000;">
                <div class="modal-gray-header ${config.headerCls}">
                    <div>&nbsp;</div>
                    <h4 class="modal-gray-title mb-0 rfs">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="42.1px" height="32px" viewBox="0 0 42.1 32" style="enable-background: new 0 0 42.1 32;" xml:space="preserve">
                        <path class="fill-gray-03" d="M21,24.7c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5C19.5,25.4,20.2,24.7,21,24.7z
                                M21,4.4c0.8,0,1.5,0.7,1.5,1.5S21.8,7.3,21,7.3c-0.8,0-1.5-0.7-1.5-1.5S20.2,4.4,21,4.4z M27.5,16c0-3.2-2.9-5.8-6.5-5.8
                                c-3.4,0-6.2,2.3-6.5,5.3c1.9,1.4,3.2,3.5,3.8,5.8c0.9,0.4,1.8,0.5,2.7,0.5C24.6,21.8,27.5,19.2,27.5,16z M39.5,13.8h-7.7v4.4h8.7
                                v2.9h-8.7V32h7.7c1.4,0,2.5-1.1,2.5-2.5V16.3C42.1,15,40.9,13.8,39.5,13.8z M11.5,0v14c0.5,0.2,1,0.4,1.5,0.6v-8
                                c0-1,0.6-1.3,1.6-1.8c0.4-0.1,0.7-0.3,1.1-0.6c0.3-0.4,0.5-0.8,0.7-1.3c0.3-0.8,0.6-1.4,1-1.4l0,0h7.3c0.4,0,0.7,0.6,1,1.4
                                c0.1,0.5,0.4,0.9,0.7,1.3c0.3,0.3,0.7,0.5,1.1,0.6c1,0.4,1.6,0.8,1.6,1.8v18.9c0,1-0.6,1.3-1.6,1.8c-0.4,0.1-0.7,0.3-1.1,0.6
                                c-0.3,0.4-0.5,0.8-0.7,1.3c-0.3,0.8-0.6,1.4-1,1.4h-7.3c-0.3,0-0.6-0.4-0.8-1c-0.7,1-1.6,1.8-2.6,2.4h16.6V0H11.5z M10.5,15.3
                                C6,14.2,1.4,17,0.3,21.5c-1.1,4.5,1.6,9.1,6.2,10.2c4.5,1.1,9.1-1.6,10.2-6.2l0,0C17.8,21.1,15,16.5,10.5,15.3
                                C10.5,15.3,10.5,15.3,10.5,15.3z M12.2,22.3c0,0.7-0.5,1.2-1.2,1.4c0,0,0.1,0,0.1,0.1c0.8,0.4,1.1,1.4,0.7,2.2
                                c-0.5,1.4-1.7,1.6-3.3,1.3l-0.4,1.5l-0.9-0.2L7.6,27c-0.2-0.1-0.5-0.1-0.7-0.2l-0.4,1.5l-0.9-0.2L6,26.6c-0.2-0.1-0.4-0.1-0.7-0.2
                                l-1.2-0.3L4.6,25c0,0,0.7,0.2,0.7,0.2l0,0c0.2,0.1,0.4,0,0.4-0.2c0,0,0,0,0,0l0.6-2.4l0.1,0c0,0-0.1,0-0.1,0l0.4-1.7
                                c0-0.3-0.2-0.5-0.4-0.5c0,0-0.7-0.2-0.7-0.2l0.2-1l1.3,0.3c0.2,0,0.4,0.1,0.6,0.1L8.1,18L9,18.3l-0.4,1.5c0.2,0.1,0.5,0.1,0.7,0.2
                                l0.4-1.5l0.9,0.2l-0.4,1.5C11.5,20.6,12.3,21.2,12.2,22.3L12.2,22.3z M8.4,20.9l-0.5,1.9c0.5,0.1,2.1,0.7,2.4-0.4l0,0
                                C10.6,21.2,8.9,21,8.4,20.9z M7.7,23.6l-0.5,2c0.6,0.2,2.6,0.8,2.9-0.4l0,0C10.4,24.1,8.3,23.8,7.7,23.6z"></path>
                    </svg>${config.title}
                    </h4>
                    <button type="button" class="d-md-block d-none close" aria-label="Close" onclick="closeSharedModal('${config.id}')">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="23.3px" height="23.3px" viewBox="0 0 23.3 23.3" style="enable-background: new 0 0 23.3 23.3;" xml:space="preserve">
                        <path class="fill-gray-03" d="M14.5,11.7l8.3-8.3c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0l-8.3,8.3L3.4,0.6c-0.8-0.8-2-0.8-2.8,0
                                  c-0.8,0.8-0.8,2,0,2.8l8.3,8.3l-8.3,8.3c-0.8,0.8-0.8,2,0,2.8C1,23.1,1.5,23.3,2,23.3s1-0.2,1.4-0.6l8.3-8.3l8.3,8.3
                                  c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.5,11.7z"></path>
                    </svg>
                    </button>
                    <button type="button" class="d-md-none d-block close-mobile-top" onclick="closeSharedModal('${config.id}')" aria-label="Close">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14.8px" height="9.2px" viewBox="0 0 14.8 9.2" style="enable-background: new 0 0 14.8 9.2;" xml:space="preserve">
                        <path class="fill-white" d="M13.1,0L7.4,5.7L1.7,0L0,1.7l7.4,7.4l7.4-7.4L13.1,0z"></path>
                    </svg>
                    </button>
                </div>
                <div id="iframe-wrapper" class="iframe-wrapper-${config.class}" style="height: 445px;">
                    <iframe id="iframeMain" src="${config.iframeSrc}" class="mb-3 iframe-${config.class}" style="height: 420px;"></iframe>
                </div>
            </div>
            <div class="modal-backdrop show"></div>
        </div>
    </div>`;

    jQuery("#shared-modal-div").html(html);
    window.closeModal = () => { closeSharedModal(config.id); }
    if (typeof config.callback === "function")
        config.callback();
    document.getElementById(config.id).style.display = "block";
}

function betusJoinExpress(joinExpressUrl) {
    if (typeof trackVirtualPageView === "function") {
        trackVirtualPageView("express sign-up", "join express", "1", "step 1 (JX): open account");
    }

    ToggleSharedModal({
        id: "express-sign-up-modal",
        headerCls: "d-none",
        class: "express",
        iframeSrc: joinExpressUrl
    });
}

//************************ Manage Cookie by js *************************
function setCookie(cookieName, cookieValue, expireDays) {
    var currentDate = new Date();
    currentDate.setTime(currentDate.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    var expires = 'expires=' + currentDate.toUTCString();

    var domainName = document.location.hostname;
    var domain = '';

    if (domainName !== undefined && domainName != null && domainName != '') {
        if (domainName.includes('betus.com.pa') ||
            domainName.includes('dev.') ||
            domainName.includes('stg') ||
            domainName.includes('r0.') ||
            domainName.includes('r1.')) {
            domain = '.betus.com.pa'
        } else {
            domain = 'localhost'
        }
    }

    document.cookie = cookieName + '=' +
                        cookieValue + ';' +
                        expires +
                        ';path=/' +
                        ';Domain=' + domain;
}

function getCookie(cookieName) {
    var name = cookieName + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var c = cookies[i];

        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return '';
}

function isExistCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;

    while (i < clen) {
        var j = i + alen;

        if (document.cookie.substring(i, j) == arg) {
            return true;
        }

        i = document.cookie.indexOf(" ", i) + 1;

        if (i == 0) {
            break;
        }
    }

    return false;
}

function getCookieValueByName(name) {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');

    if (parts.length == 2) {
        return parts
            .pop()
            .split(';')
            .shift();
    }
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

jQuery.fn.clearValidation = function () {
    var v = jQuery(this).validate();
    jQuery('[name]', this).each(function () {
        v.successList.push(this);
        v.showErrors();
    });
    v.resetForm();
    v.reset();
};

function HideContent(d) {
    if (d.length < 1) { return; }
    document.getElementById(d).style.display = "none";
}

function ShowContent(d) {
    if (d.length < 1) { return; }
    var dd = document.getElementById(d);
    dd.style.display = "block";
}

// TODO: Refactor. This is not a utility method and is page specific
function validateAge(yearId, monthId, dayId, ageErrorMessage) {

    const year = jQuery(`#${yearId}`).val();
    const month = jQuery(`#${monthId}`).val();
    const day = jQuery(`#${dayId}`).val();

    return validateBirthDate(year, month, day, ageErrorMessage);
}

function validateBirthDate(year, month, day, ageErrorMessage) {
    const isFullDateSelected = (year.length > 0 && month.length > 0 && day.length > 0);

    var ageIsValid = false;

    if (isFullDateSelected) {
        const dob = `${year}/${month}/${day}`;
        const validateDayNumberOfMonthResult = validateDayNumberOfMonth(`${month}/${day}/${year}`);

        if (!validateDayNumberOfMonthResult.dateIsValid) {

            if (isStringNullOrEmpty(validateDayNumberOfMonthResult.message)) {
                jQuery("#age-is-over-18-validation-container").html(`<span class="">Please enter a valid date.</span>`);

            } else {
                jQuery("#age-is-over-18-validation-container").html(`<span id="CustomerModel.AgreeTerms-error" class="">Please enter a valid day between 1 and ${validateDayNumberOfMonthResult.message}.</span>`);
            }

            return false;
        }

        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        ageIsValid = age >= 18;

        if (!ageIsValid) {
            jQuery("#age-is-over-18-validation-container").html(`<span id="CustomerModel.AgreeTerms-error" class="">${ageErrorMessage}</span>`);

        } else {
            jQuery("#age-is-over-18-validation-container").empty();
        }
    }
    return ageIsValid;
}

//accepted dateString format is 'mm/dd/yyyy'
function validateDayNumberOfMonth(dateString) {
    const result = {
        dateIsValid: false,
        message: ""
    };
    const dateFormat = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;
    if (dateString.match(dateFormat)) {
        const operator = dateString.split("/");

        let datepart = [];
        if (operator.length > 1) {
            datepart = dateString.split("/");
        }

        const month = parseInt(datepart[0]);
        const day = parseInt(datepart[1]);
        const year = parseInt(datepart[2]);

        if (month === 1 || month > 2) {
            const listOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (day > listOfDays[month - 1]) {
                result.message = listOfDays[month - 1];
                return result;
            }
        } else if (month === 2) {
            const leapYear = isLeapYear(year);
            if ((leapYear === false) && (day >= 29)) {
                result.message = "28";
                return result;
            } else if ((leapYear === true) && (day > 29)) {
                result.message = "29";
                return result;
            }
        }
    } else {
        return result;
    }
    result.dateIsValid = true;
    return result;
}

function isLeapYear(year) {
    let leapYear = false;

    if ((!(year % 4) && year % 100) || !(year % 400)) {
        leapYear = true;
    }
    return leapYear;
}

function setFocusOnFirstMissingItem(formId) {
    const input = jQuery(".input-validation-error:first");
    if (input && formId !== undefined) {
        input.focus();
    }
}

function setErrorMessages(errorMessageElementId, errorMessage, inputId) {
    jQuery(`#${errorMessageElementId}`).html(errorMessage);
    if (errorMessage !== undefined && errorMessage !== null && errorMessage !== "") {
        jQuery(`#${inputId}`).addClass('input-validation-error');
    } else {
        jQuery(`#${inputId}`).removeClass('input-validation-error');
    }
}

function removeErrorMessages(errorMessageElementId, inputId) {
    jQuery(`#${errorMessageElementId}`).html('');
    jQuery(`#${inputId}`).removeClass('input-validation-error');
}

function showErrorMessage(errorFieldId, inputField = null, isFocussed = false, hiddenErrorCls = "d-none") {
    let errorField = jQuery(errorFieldId);
    errorField.removeClass(hiddenErrorCls);
    if (isFocussed)
        jQuery(inputField).focus();
}

(function (jQuery) {
    jQuery.fn.serializeFormJSON = function () {

        var o = {};
        const a = this.serializeArray();
        jQuery.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);

function findValueInArrayOfObject(array, key, value) {
    var index = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            index = i;
            break;
        }
    }
    return index;
}

function isStringNullOrEmpty(value) {
    return typeof value === 'undefined' ||
        value === null ||
        (typeof value === 'string' && (!value || !value.trim() || value.trim() === '' || value.trim() === "" || value.length === 0 || value.trim().length === 0));
}

function isFunction(value) {
    var getType = {};

    return value &&
        value !== null &&
        typeof value !== 'undefined' &&
        typeof value === 'function' &&
        getType.toString.call(value) === '[object Function]' &&
        value instanceof Function;
}

function isFieldValueNullOrEmpty(fieldId) {
    const field = jQuery(`#${fieldId}`);
    if (field) {
        return isStringNullOrEmpty(field.val());
    } else
        return false;
}

function isEmailValid(mail) {
    if (isStringNullOrEmpty(mail)) {
        return false;
    }

    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(mail);
}

function validateNumericInput(evt) {
    var digitOnly = String.fromCharCode(evt.which);

    if (!(/[0-9]/.test(digitOnly))) {
        evt.preventDefault();
    }
}

// TODO: Refactor. This is not a utility method and is page specific
function addTemporaryCustomerInfo(id, url) {
    var model = jQuery(`#${id}`).serializeFormJSON();
    model.LeadSourceTypeId = jQuery('#LeadSourceTypeId :selected').text();
    model = JSON.stringify(model);
    const navigatorInstance = navigator || window.navigator;
    if(typeof navigatorInstance.sendBeacon === "function"){
        // this function (browser's API) sends a post request to the specified url and is designed for loging porpuses
        // (sends the request asynchronously and is not affected by page unload)
        const data = new FormData();
        data.append('jsonData', model)
        navigatorInstance.sendBeacon(url, data)
    }else{
        jQuery.ajax({
            url: url,
            data: {
                "jsonData": model
            },
            type: 'POST',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("XSRF-TOKEN",
                    jQuery('input:hidden[name="__RequestVerificationToken"]').val());
            }
        });
    }
};

function IsEmptyOrWhitespace(fieldId, messageFieldId, errorMessage) {
    var result = true;
    const field = jQuery(`#${fieldId}`);
    const fieldVal = field.val();
    if (fieldVal !== undefined && fieldVal !== null && !fieldVal.replace(/\s/g, '').length) {
        jQuery(`#${messageFieldId}`)
            .html(`<span>${errorMessage}</span>`);
        field.addClass("input-validation-error");
    } else {
        jQuery(`#${messageFieldId}`).empty();
        field.removeClass("input-validation-error");
        result = false;
    }
    return result;
}

function avoidWhitespace(event) {
    var key = event.keyCode;
    if (key === 32) {
        event.preventDefault();
    } else if (event.clipboardData || window.clipboardData) {
        const pastedText = (event.clipboardData || window.clipboardData).getData('text');
        if (hasWhiteSpace(pastedText)) {
            event.preventDefault();
        }
    }
}

function hasWhiteSpace(s) {
    return /\s/g.test(s);
}

function convertStringToFloat(str) {
    if (isStringNullOrEmpty(str) || isNaN(str)) {
        return 0;
    }

    return parseFloat(str);
}

function convertStringToFloatWithDecimalPointCount(str, floatingLength) {
    return convertStringToFloat(str).toFixed(floatingLength);
}

function getEnvironment() {
    var domainName = window.location.hostname;

    if (domainName.includes("localhost") ||
        domainName.includes("tst.") ||
        domainName.includes("dev.") ||
        domainName.includes("stg.")) {
        environmentName = "test";
    } else {
        environmentName = "prod";
    }
    return environmentName;
}

function isMobile() {
    var check = false;

    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);

    return check;
}

function checkMinLength(value, minLength) {
    return !isStringNullOrEmpty(value) && value.length >= minLength;
}

function checkPasswordStrength(keyEvent) {
    let password = keyEvent.target.value;
    let progressBar = document.querySelector('#passwordProgressBar');
    let progressStatus = document.querySelector('.status-text');
    let lowUpperCasePattern = /([a-z].*[A-Z])|([A-Z].*[a-z])/;
    let numericPattern = /([0-9])/;
    let specialCharPattern = /([!,%,&,@,#,$,^,*,?,_,~])/;
    let passwordStrength = 0;
    let progressClass = "";

    if (password.length > 7) {
        passwordStrength = checkMinLength(password, 8) ? ++passwordStrength : passwordStrength;
        passwordStrength = lowUpperCasePattern.test(password) ? ++passwordStrength : passwordStrength
        passwordStrength = numericPattern.test(password) ? ++passwordStrength : passwordStrength
        passwordStrength = specialCharPattern.test(password) ? ++passwordStrength : passwordStrength
        passwordStrength = checkMinLength(password, 12) ? ++passwordStrength : passwordStrength;
    }

    if (passwordStrength < 2) {
        progressClass = "progress-danger";
        progressStatus.textContent = 'Weak';
    } else if (passwordStrength === 2) {
        progressClass = "progress-warning";
        progressStatus.textContent = 'Medium';
    }
    else if (passwordStrength === 3) {
        progressClass = "progress-warning";
        progressStatus.textContent = 'Medium';
    } else if (passwordStrength === 4) {
        progressClass = "progress-success";
        progressStatus.textContent = 'Strong';
    } else if (passwordStrength > 4) {
        progressClass = "progress-success";
        progressStatus.textContent = 'Very Strong';
    } else {
        progressClass = "";
        progressStatus.textContent = 'Password must include';
    }

    progressClass = (passwordStrength < 5) ? progressClass.concat(` strength-${(passwordStrength < 1 && password.length) ? 1 : passwordStrength}`) : progressClass;
    progressBar.className = progressClass;
}

// The element must be a Button (<button>) not an input button type
function enableWaitingButton(btn) {
    btn.prop('disabled', true);
    btn.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> PLEASE WAIT ...');
}

function disableWaitingButton(btn, caption) {
    btn.prop('disabled', false);
    btn.html(caption);
}

function addPageUnloadListener(callback){
    // 'beforeunload' & 'pagehide' wont get triggered on most phone browsers, instead we have to use the 'visibilitychange' event to detect the user leaving the page.
    const unloadEventName = isMobile() ? 'visibilitychange' : 'beforeunload';
    window.addEventListener(unloadEventName, () => {
        if(unloadEventName === 'visibilitychange' && (!document.visibilityState === "hidden")) return;
        if(typeof callback === 'function' || callback instanceof Function) callback();
    });
}