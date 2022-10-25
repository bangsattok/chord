////////////////ADMOB START
$(document).ready(function() {
	if (sessionStorage.getItem("NGOFFLINE") != "NGOFFLINE" && parseInt(localStorage.getItem("freeOneHourAccess_reward")) < parseInt(localStorage.getItem("tmnow_reward")) && parseInt(localStorage.getItem("freeOneHourAccess_reward")) > 1000 && localStorage.getItem("deviceAPPS_NAME") != 'KGANDROIDPRO') {
		document.addEventListener("deviceready", function(){ admob.start(); }, false);
	}
});

/////////////////LOAD SHOW NATIVE
$(document).ready(function() {
	if (parseInt(localStorage.getItem("freeOneHourAccess_reward")) < parseInt(localStorage.getItem("tmnow_reward")) && parseInt(localStorage.getItem("freeOneHourAccess_reward")) > 1000 && sessionStorage.getItem("NGOFFLINE") != "NGOFFLINE" && localStorage.getItem("MANGGUNG") != "MANGGUNG") {
		if ((localStorage.getItem("deviceplatformOS") == "Android" && parseInt(localStorage.getItem("deviceVersionOS")) < 8) || localStorage.getItem("deviceAPPS_NAME") == 'KGANDROIDPRO') {} else { showNativeAd(); }
	}
});

///////////////REWARD
$(document).ready(function() {
	if ((localStorage.getItem("deviceplatformOS") == "Android" && parseInt(localStorage.getItem("deviceVersionOS")) < 7) || localStorage.getItem("deviceAPPS_NAME") == 'KGANDROIDPRO') {} else {
		if (localStorage.getItem('rewardedfound') == 'LOADED' && sessionStorage.getItem("NGOFFLINE") != "NGOFFLINE" && localStorage.getItem("MANGGUNG") != "MANGGUNG") {
			var rewarded;
			document.addEventListener("deviceready", function(){
				rewarded = new admob.RewardedInterstitialAd({
					adUnitId: CONFIGadmobID.ARewardInterstitial
				});
				rewarded.on('impression', (evt) => {});
				rewarded.on('reward', (evt) => {});
				setTimeout(function() { rewarded.load(); }, 1000);
				$('#support .afterfirst,.first').click(function() {
					TMNOW_REWARD();
					TMNOW_INTERSTITIAL();
						localStorage.setItem("rewardedfound", "");
						sessionStorage.setItem("admobOnceTime_reward", parseInt(localStorage.getItem("tmnext_reward")));
							var oldrewardedpoints = parseInt(localStorage.getItem("rewardedpoints1"), 10) + 200;
							if (oldrewardedpoints > 19999) {
								var oldrewardedpoints = 19999;
							}
							localStorage.setItem("rewardedpoints1", oldrewardedpoints);
							sessionStorage.setItem("admobOnceTime_interstitial_val", parseInt(localStorage.getItem("tmnext_interstitial_val")));
					rewarded.show();
				});
			}, false); 
		}
	}
});
///////////////REWARDEND

///////////////INTERSTITIAL


$(document).ready(function() {
	if ((!sessionStorage.getItem("admobOnceTime_interstitial_val") || parseInt(sessionStorage.getItem("admobOnceTime_interstitial_val")) < parseInt(localStorage.getItem("tmnow_interstitial_val"))) && parseInt(localStorage.getItem("freeOneHourAccess_interstitial_val")) < parseInt(localStorage.getItem("tmnow_interstitial_val")) && parseInt(localStorage.getItem("freeOneHourAccess_interstitial_val")) > 1000 && sessionStorage.getItem("NGOFFLINE") != "NGOFFLINE" && localStorage.getItem("MANGGUNG") != "MANGGUNG" && localStorage.getItem("deviceAPPS_NAME") != 'KGANDROIDPRO') {

		var interstitial;
		document.addEventListener("deviceready", function(){
			interstitial = new admob.InterstitialAd({
				adUnitId: CONFIGadmobID.AInterstitial
			});
			setTimeout(function() { interstitial.load(); }, 1000);
			if (localStorage.getItem('rewardedfound') != 'LOADED') {
				document.addEventListener("backbutton", onBackKeyDown2, false);

				function onBackKeyDown2() {
					TMNOW_REWARD();
					TMNOW_INTERSTITIAL();
					localStorage.setItem("rewardedfound", "");
					sessionStorage.setItem("admobOnceTime_interstitial_val", parseInt(localStorage.getItem("tmnext_interstitial_val")));
					interstitial.show();
					window.history.back();
				}
				$('#support .afterfirst,.first').click(function() {
					TMNOW_REWARD();
					TMNOW_INTERSTITIAL();
					sessionStorage.setItem("admobOnceTime_interstitial_val", parseInt(localStorage.getItem("tmnext_interstitial_val")));
					interstitial.show();
				});
				$("ul,.rec_ads").live("click", function() {
					TMNOW_REWARD();
					TMNOW_INTERSTITIAL();
					sessionStorage.setItem("admobOnceTime_interstitial_val", parseInt(localStorage.getItem("tmnext_interstitial_val")));
					interstitial.show();
				});
			} else {
				document.addEventListener("backbutton", onBackKeyDown3, false);

				function onBackKeyDown3() {
					TMNOW_REWARD();
					TMNOW_INTERSTITIAL();
					localStorage.setItem("rewardedfound", "");
					sessionStorage.setItem("admobOnceTime_interstitial_val", parseInt(localStorage.getItem("tmnext_interstitial_val")));
					interstitial.show();
					window.history.back();
				}
				$("ul,.rec_ads").live("click", function() {
					TMNOW_REWARD();
					TMNOW_INTERSTITIAL();
					sessionStorage.setItem("admobOnceTime_interstitial_val", parseInt(localStorage.getItem("tmnext_interstitial_val")));
					interstitial.show();
				});
			}
		}, false);
	} else {
		if (parseInt(localStorage.getItem("freeOneHourAccess_reward")) < parseInt(localStorage.getItem("tmnow_reward")) && parseInt(localStorage.getItem("freeOneHourAccess_reward")) > 1000 && sessionStorage.getItem("NGOFFLINE") != "NGOFFLINE" && localStorage.getItem("MANGGUNG") != "MANGGUNG" && localStorage.getItem("deviceAPPS_NAME") != 'KGANDROIDPRO') {
			var interstitial;
			document.addEventListener("deviceready", function(){
				interstitial = new admob.InterstitialAd({
					adUnitId: CONFIGadmobID.AInterstitialRec
				});
				setTimeout(function() { interstitial.load(); }, 1000);
				$('.rec_ads').live("click", function() {
					TMNOW_REWARD();
					TMNOW_INTERSTITIAL();
					sessionStorage.setItem("admobOnceTime_interstitial_val", parseInt(localStorage.getItem("tmnext_interstitial_val")));
					interstitial.show();
				});
			}, false);
		}
	} 
});	


///////////////INTERSTITIALEND


////////////////MANUAL REWARD
$(document).ready(function() {
	$('#ManualReward').live("click", function() {
		$('#warningnointernet').show("slow"); 
		document.addEventListener('deviceready', async() => { await admob.start(); }, false);
		document.addEventListener('deviceready', async() => {
			var rewardedmanual = new admob.RewardedAd({
				adUnitId: CONFIGadmobID.ARewardOnly
			});
			rewardedmanual.on('show', (evt) => {
				$('#warningnointernet').hide("slow");
			});
			rewardedmanual.on('reward', (evt) => {
				TMNOW_REWARD();
				TMNOW_INTERSTITIAL();
				var oldrewardedpoints = parseInt(localStorage.getItem("rewardedpoints1"), 10) + 200;
				if (oldrewardedpoints > 19999) {
					var oldrewardedpoints = 19999;
				}
				localStorage.setItem("rewardedpoints1", oldrewardedpoints);
				sessionStorage.setItem("admobOnceTime_reward", parseInt(localStorage.getItem("tmnext_reward")));
				sessionStorage.setItem("admobOnceTime_interstitial_val", parseInt(localStorage.getItem("tmnext_interstitial_val")));
				$("#mypoints").empty();
				$("#mypoints").append(oldrewardedpoints);
				$('#ManualReward').hide("slow");
				$('#warningnointernet').hide("slow");
				
				$("#tabletranspose").show();
				$("#tabletransposehidden").hide();
				$("#tablezoominouthidden").hide();
				$("#transposeDown").show();
				$("#transposeUp").show();
				$("#bookmarkya").show();
				$("#plustext").show();
				$("#minustext").show();				
			});

			await rewardedmanual.load(); 
			await rewardedmanual.show(); 
		}, false);
	});
});
////////////////MANUAL REWARD END

///////////////////////////NATIVE FUNCTION
function showNativeAd() {
	document.addEventListener('deviceready', async() => { await admob.start(); }, false);
	document.addEventListener('deviceready', async() => {
		const ad = new admob.NativeAd({
			adUnitId: CONFIGadmobID.ANative
		});
		$("#native-ad").empty();
		$("#native-ad").hide();
		ad.on('load', async(evt) => {
			////////////KHUSUS IOS
			if(localStorage.getItem("deviceAPPS_NAME") == 'CGIOS') { 
			sessionStorage.setItem("NativeOnceTime", "NativeLoaded");
			$("body").click(function() {
				$("#native-ad").empty();
				$("#native-ad").hide();
				ad.hide();
			});
			document.addEventListener("backbutton", onBackKeyDown, false);
			////////////NATIVE HIDE BACK FUNCTION
			function onBackKeyDown() {
				$("#native-ad").empty();
				$("#native-ad").hide();
				localStorage.setItem("rewardedfound", "");
				ad.hide();
				window.history.back();
			}
			}
			////////////KHUSUS IOS
		});
		ad.on('impression', async(evt) => {
			////////////
			if(localStorage.getItem("deviceAPPS_NAME") != 'CGIOS') {
			sessionStorage.setItem("NativeOnceTime", "NativeLoaded");
			$('body').click(function() {
				$("#native-ad").empty();
				$("#native-ad").hide();
				ad.hide();
			});
			document.addEventListener("backbutton", onBackKeyDown, false);
			////////////NATIVE HIDE BACK FUNCTION
			function onBackKeyDown() {
				$("#native-ad").empty();
				$("#native-ad").hide();
				localStorage.setItem("rewardedfound", "");
				ad.hide();
				window.history.back();
			}
			}
			///////////
		});
		await ad.load();
		await ad.show({
			x: 0,
			y: 300,
			width: window.screen.width,
			height: 300,
		});
		$("#native-ad").show();
		ad.showWith(document.getElementById('native-ad'));
	}, false);
}
