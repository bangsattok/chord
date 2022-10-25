/////////////////////////////////IOS TrackingTransparency
$(document).ready(function(){ 
document.addEventListener('deviceready', async () => {
if ((!localStorage.getItem("showAppTrackingTransparency") || localStorage.getItem("showAppTrackingTransparency") != "DONE") && localStorage.getItem("deviceAPPS_NAME") == 'CGIOS') {
localStorage.setItem("showAppTrackingTransparency", "DONE");
alert('This App would like permission to "Track You" across apps and websites owned by other companies.\n\nThis permission allows to provide you with a better ads experience.');
/***********************
if (parseInt(localStorage.getItem("deviceVersionOS")) >= 14) { 
	const idfaPlugin = cordova.plugins.idfa;
	idfaPlugin.getInfo()
    .then(info => {
        if (!info.trackingLimited) {
            return info.idfa || info.aaid;
        } else if (info.trackingPermission === idfaPlugin.TRACKING_PERMISSION_NOT_DETERMINED) {
            return idfaPlugin.requestPermission().then(result => {
                if (result === idfaPlugin.TRACKING_PERMISSION_AUTHORIZED) {
                    return idfaPlugin.getInfo().then(info => {
                        return info.idfa || info.aaid;
                    });
                }
            });
        }
    });
  } 
**********************/
/////////////////////////////////IOS TrackingTransparency end
}
});
});



