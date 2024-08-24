window.Adform.Tracking.TrackingPointId = 143139880;
window.Adform.Tracking.TrackingPointName = "Website visit";
try{
var pageURL = location.href;
var tpName = '';

if (pageURL === 'https://www.betus.com.pa/tv/') {
    tpName = 'TV';
} else if (pageURL === 'https://www.betus.com.pa/contests/') {
    tpName = 'Contests';
} else if (pageURL.includes('sportsbook')) {
    tpName = 'Sportsbook';
} else if (pageURL.includes('online-casino')) {
    tpName = 'Online-Casino';
} else if (pageURL.includes('racebook')) {
    tpName = 'Racebook';
} else if (pageURL.includes('promotions')) {
    tpName = 'Promotions';
} else if (pageURL.includes('loyalty')) {
    tpName = 'Loyalty';
} else if (pageURL.includes('sports-betting')) {
    tpName = 'Sports-Betting';
} else if (pageURL.includes('how-to-use-cryptocurrency')) {
    tpName = 'How To Use Cryptocurrency';
} else if (pageURL.includes('https://www.betus.com.pa/miscellaneous/landing')) {
    tpName = 'Landing Page';
}else if (pageURL === 'https://www.betus.com.pa' || pageURL === 'https://www.betus.com.pa/?') {
    tpName = 'Homepage';
}

if (tpName !== '') {
     window._adftrack = Array.isArray(window._adftrack) ? window._adftrack : (window._adftrack ? [window._adftrack] : []);
    window._adftrack.push({
        HttpHost: 'a2.adform.net',
        pm: 3171408,
        divider: encodeURIComponent('|'),
        pagename: encodeURIComponent(tpName)
    });
    (function () { var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = 'https://s2.adform.net/banners/scripts/st/trackpoint-async.js'; var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x); })();

}
}catch(e){}