////////////////BANNER FUNCTION
function showBannerAd() {
	document.addEventListener("deviceready", function(){
		sessionStorage.setItem("BannerOnceTime", "BannerLoaded");
		admob.start();
		var banner = new admob.BannerAd({
			adUnitId: CONFIGadmobID.ABanner,
			position: 'top'
		});
		setTimeout(function() { banner.load(); }, 2000);
		setTimeout(function() { banner.show(); }, 4000);
	}, false);
}

$(document).ready(function(){ 
if(localStorage.getItem("deviceAPPS_NAME") == 'KGANDROIDPRO') {  } else {
////////////////BANNER ADS START HERE
	if ((!sessionStorage.getItem("BannerOnceTime") || sessionStorage.getItem("BannerOnceTime") != 'BannerLoaded') && parseInt(localStorage.getItem("freeOneHourAccess_reward")) < parseInt(localStorage.getItem("tmnow_reward")) && parseInt(localStorage.getItem("freeOneHourAccess_reward")) > 1000) { sessionStorage.setItem("BannerOnceTime", "BannerLoaded"); if(sessionStorage.getItem("NGOFFLINE") != "NGOFFLINE") { showBannerAd();} } 
///////////////ADMOB END
} }); 
