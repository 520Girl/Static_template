(function (Adform) {
  var Tracking = Adform.Tracking;
  if (Tracking.appendFirstPartyId) {
    Tracking.appendFirstPartyId("https://a2.adform.net/Serving/TrackPoint/?CC=1&pm=3171408&ADFPageName=Website%20visit&ADFdivider=%7C&ord=98812594567&ADFtpmode=2&loc=https%3A%2F%2Fwww.betus.com.pa%2F&Set1=zh-CN%7Czh-CN%7C1920x1080%7C24", "6024317100877509084");
  } else {
    Tracking.LoadScript("https://a2.adform.net/Serving/TrackPoint/?CC=1&pm=3171408&ADFPageName=Website%20visit&ADFdivider=%7C&ord=98812594567&ADFtpmode=2&loc=https%3A%2F%2Fwww.betus.com.pa%2F&Set1=zh-CN%7Czh-CN%7C1920x1080%7C24" + "&frpid=0");
  }
})(window.Adform);