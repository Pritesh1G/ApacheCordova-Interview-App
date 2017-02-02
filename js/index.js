function adSetter(){
var admobid = {};
// select the right Ad Id according to platform
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-1458465703318112/5533593338',
        interstitial: 'ca-app-pub-1458465703318112/7010326536'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-1458465703318112/5533593338',
        interstitial: 'ca-app-pub-1458465703318112/7010326536'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-1458465703318112/5533593338',
        interstitial: 'ca-app-pub-1458465703318112/7010326536'
    };
}

if(window.AdMob) AdMob.createBanner( {
    isTesting:true, //Remove this Before publishing your app
    adId:admobid.banner, 
    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );
 
  if(window.AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );
 
}
  function onDeviceReady(){
        adSetter();
  }
 
 
function domLoaded(){
 document.addEventListener("deviceready", onDeviceReady, false);
}