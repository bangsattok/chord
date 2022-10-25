/*********************
RUMUS CLEAR CACHE SAAT UPDATE TERBARU
******************/
$(document).ready(function(){

if(APPS_NAME == 'CGIOS') { $('#platformshare_result_CG').hide(); $('#platformshare_result_KG').hide(); }
else if (APPS_NAME == 'CGANDROID' || APPS_NAME == 'CGHUAWEI') { $('#platformshare_result_IOS').hide(); $('#platformshare_result_KG').hide(); }
else { $('#platformshare_result_IOS').hide(); $('#platformshare_result_CG').hide(); }

if(!localStorage.getItem("URGENT_RELOAD_RECACHE1")) { localStorage.setItem("URGENT_RELOAD_RECACHE1", 1); }

if (!localStorage.getItem("logOnceTimehome_VERSION") || localStorage.getItem("logOnceTimehome_VERSION") != APPS_VERSION
|| !localStorage.getItem("URGENT_RELOAD_RECACHE2") || localStorage.getItem("URGENT_RELOAD_RECACHE2") != localStorage.getItem("URGENT_RELOAD_RECACHE1")
) 
{ localStorage.setItem("URGENT_RELOAD_RECACHE2", localStorage.getItem("URGENT_RELOAD_RECACHE1"));
localStorage.setItem("deviceAPPS_NAME", APPS_NAME);
localStorage.setItem("urlhomepromodefault", urlhomepromodefault);
localStorage.setItem("urlrecommendedchord", urlrecommendedchord);
localStorage.setItem("urlgoogleanalytics", urlgoogleanalytics);
localStorage.setItem("urlONLINEDETECTOR", urlONLINEDETECTOR);
if(APPS_NAME == 'CGANDROID' || APPS_NAME == 'CGIOS' || APPS_NAME == 'CGHUAWEI') { localStorage.setItem("urlhometoptendefault", urlhometoptendefaultBARAT); }
if(APPS_NAME == 'KGANDROID' || APPS_NAME == 'KGANDROIDPRO') { localStorage.setItem("urlhometoptendefault", urlhometoptendefaultINDO); }
localStorage.setItem("logOnceTimehome_VERSION", APPS_VERSION);
localStorage.setItem("cachepromo", "");
localStorage.setItem("advertisechord", "");
if (parseInt(localStorage.getItem("rewardedpoints1"), 10) < 200) { localStorage.setItem("rewardedpoints1", 1000); }
}
});
/*********************
END RUMUS CLEAR CACHE SAAT UPDATE TERBARU
******************/

////////////////DEVICE DETECTOR
$(document).ready(function(){
if(!sessionStorage.getItem("DEVICEDETECTORONETIMEOPENED") || sessionStorage.getItem("DEVICEDETECTORONETIMEOPENED") != 'DEVICEDETECTORONETIMEOPENED'){ 
	sessionStorage.setItem("DEVICEDETECTORONETIMEOPENED", "DEVICEDETECTORONETIMEOPENED");

	if(localStorage.getItem("deviceplatformOS") == "Android") { localStorage.setItem("ANDROIDVERSION",APPS_VERSION); localStorage.removeItem("IOSVERSION"); }
	else if(localStorage.getItem("deviceplatformOS") == "iOS") { localStorage.setItem("IOSVERSION",APPS_VERSION); localStorage.removeItem("ANDROIDVERSION"); }
	else { 
		if(APPS_NAME == 'CGIOS') { localStorage.setItem("deviceplatformOS", "iOS"); localStorage.setItem("deviceVersionOS", 12); localStorage.setItem("IOSVERSION",APPS_VERSION); localStorage.removeItem("ANDROIDVERSION"); }
		else { 
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				// is mobile..
				localStorage.setItem("deviceplatformOS", "Android"); localStorage.setItem("deviceVersionOS", 6); 
				localStorage.setItem("ANDROIDVERSION",APPS_VERSION); localStorage.removeItem("IOSVERSION");
			}
			else {
				// is desktop..
				localStorage.setItem("deviceplatformOS", "Android"); localStorage.setItem("deviceVersionOS", 8); 
				localStorage.setItem("ANDROIDVERSION",APPS_VERSION); localStorage.removeItem("IOSVERSION");
			}
		}
	}
	$("#OSINFO").empty();
	$('#OSINFO').append("Device OS: "+localStorage.getItem("deviceplatformOS")+" V"+localStorage.getItem("deviceVersionOS")+"<br>App Version: "+localStorage.getItem("logOnceTimehome_VERSION"));
} else { 
	$("#OSINFO").empty();
	$('#OSINFO').append("Device OS: "+localStorage.getItem("deviceplatformOS")+" V"+localStorage.getItem("deviceVersionOS")+"<br>App Version: "+localStorage.getItem("logOnceTimehome_VERSION")); 
}
});
////////////////DEVICE DETECTOR END

///////////////////////ONLINEDETECTOR
$(document).ready(function(){
var tmnow_ONLINEDETECTOR = parseInt(localStorage.getItem("tmnow_reward"));
var ONLINEDETECTOR = ""+urlONLINEDETECTOR+"?temp=" + tmnow_ONLINEDETECTOR;

if (!sessionStorage.getItem("ONLINEDETECTOR") || sessionStorage.getItem("ONLINEDETECTOR") != "ONLINEDETECTOR") {
$('#box-loadload').show();
sessionStorage.setItem("ONLINEDETECTOR", "ONLINEDETECTOR");
localStorage.setItem("rewardedfound", "");
	$.ajax({
		url: ONLINEDETECTOR,
		timeout: 2000
	}).done(function(data) {
		/*SUCCESS INTERNET DATA*/
		//////////////////////////////////
$('#box-loadload').append('<br><Br><center><div id="myProgress" style="width:80%;background-color:#ddd;"><div id="myBar" style="width:1%;height:30px;background-color:#A2D4FE;text-align:center;line-height: 30px;color: white;"></div></div><div style="text-align:center;color:#A2D4FE;width:80%;"><br>Mohon Tunggu, Loading ini terjadi hanya saat pertama kali aplikasi dibuka, bertujuan agar semua data siap dan tidak terjadi error kedepannya. Terimakasih<br><div id="whatloadedresult"></div></div></center>');
var ibar = 0;
  if (ibar == 0) {
    ibar = 1;
	
    var elembar = document.getElementById("myBar");
    var widthbar = 10;
    var idbar = setInterval(frame, 100);
    function frame() {
	
      if (widthbar >= 100) {
        clearInterval(idbar);
        ibar = 0; $('#box-loadload').show(); $('#box-loadload').delay(1500).fadeOut('fast');
		sessionStorage.setItem("NGOFFLINE", "NGONLINE");
        sessionStorage.setItem("BannerOnceTime", "BannerLoaded");
      } else {
	  $('#box-loadload').show();
	  if(APPS_NAME == 'KGANDROIDPRO') { widthbar++; widthbar++; widthbar++; }
        widthbar++; widthbar++; widthbar++;  
        elembar.style.width = widthbar + "%";
        elembar.innerHTML = widthbar  + "%";
		
		if(widthbar <= 30) { $('#whatloadedresult').empty(); $('#whatloadedresult').append('STYLE '+widthbar+' LOADED...');}
		else if(widthbar <= 50) { $('#whatloadedresult').empty(); $('#whatloadedresult').append('DATABASE '+widthbar+' LOADED...');}
		else if(widthbar <= 70) { $('#whatloadedresult').empty(); $('#whatloadedresult').append('CHORD '+widthbar+' LOADED...');}
		else if(widthbar <= 100) { $('#whatloadedresult').empty(); $('#whatloadedresult').append('PREPARING '+widthbar+' LOADED...');}
		
      }
    }
  }
//////////////////////////////////
	}).fail(function(jqXHR, textStatus) {
		if (textStatus === 'timeout') { 
		/*INTERNET LEMOT*/ 
			sessionStorage.setItem("BannerOnceTime", "BannerLoaded");
			localStorage.setItem("rewardedfound", "");
			$('#box-loadload').show(); $('#box-loadload').delay(1500).fadeOut('fast');
		} else {
		/*TENYATA OFFLINE*/
			sessionStorage.setItem("BannerOnceTime", "BannerLoaded");
			sessionStorage.setItem("NGOFFLINE", "NGOFFLINE");
			localStorage.setItem("rewardedfound", "");
			$('#box-loadload').show(); $('#box-loadload').delay(1500).fadeOut('fast');	
		}
	});
} else { $('#box-loadload').delay(1500).fadeOut('fast'); }
});
///////////////////////ONLINEDETECTOR END

$(document).ready(function(){
sessionStorage.setItem("admobOnceTime_interstitial_afterplay", "DONTSHOW"); 
sessionStorage.setItem("refpage", "kosong");
localStorage.setItem("Count_Ganalytics", "no");
});

/////////////////////////////////////TAMPILKAN BOOKMARK
$(document).ready(function(){
	
	$("#bookmark_view_button").click(function() { 
	$("#bookmark_show_button").show('slow'); 
	$("#history_show_button").hide('slow'); 
	});
	$("#bookmark_hide_button").click(function() { 
	$("#bookmark_show_button").hide('slow'); 
	});
	
if(localStorage.length > 0){
      var localStorageArray = new Array();
      for (i=0;i<localStorage.length;i++){
	  var key = localStorage.key(i);
	  var valuesort = localStorage[key];
	  if (key.match(/cccc/)) {
	  var key = key.replace(/cccc/i, '');
          localStorageArray[i] = "<!--"+valuesort+"--\><a href=\"chord.html#" + key + "\"><h4>" + valuesort + "</h4></a>"; }
      }
	var sortedArray = localStorageArray.sort(); 
   }
   
var isibook = '';
for (var i = 0, len = sortedArray.length; i < len; i++) {
	var keyval = sortedArray[i];
	if(keyval){ var isibook = isibook + keyval; }
}

if (isibook == '') {
	$('#mybookmarkchord').append('<center>How to bookmark?<br>Just click this icon<br><span style="font-size:50px;color:silver"><img style="width:32px;" src="bm1.png"></span><br>on chord area.</center>');
} else {
	$('#mybookmarkchord').append(isibook);
}
});
/////////////////////////////////////TAMPILKAN BOOKMARK END


/////////////////////////////////////TAMPILKAN HISTORY
$(document).ready(function(){
	
	$("#history_view_button").click(function() { 
	$("#history_show_button").show('slow'); 
	$("#bookmark_show_button").hide('slow');
	});
	$("#history_hide_button").click(function() { 
	$("#history_show_button").hide('slow'); 
	});
	
if(localStorage.length > 0){
      var localStorageArray = new Array();
      for (i=0;i<localStorage.length;i++){
	  var key = localStorage.key(i);
	  var valuesort = localStorage[key];
	  if (key.match(/hhhh/)) {
	  var key = key.replace(/hhhh/i, ''); 
	  
var valuesortlastvisit = '';
if(valuesort.match(/<!--(\d+)-->/)) 
{ var matcheslastvisit = valuesort.match(/<!--(\d+)-->/);
var valuesortlastvisit = matcheslastvisit[1]; }

          localStorageArray[i] = "<!--"+valuesortlastvisit+"--\><a href=\"chord.html#" + key + "\"><h4>" + valuesort + "</h4></a>"; }
      }
	var sortedArray2 = localStorageArray.sort(); 
	var sortedArray2 = sortedArray2.reverse(); 
   }
   
var isibookhistory = '';
for (var ihistory = 0, lenhistory = sortedArray2.length; ihistory < lenhistory; ihistory++) {
	var keyval = sortedArray2[ihistory];
	if(keyval){ var isibookhistory = isibookhistory + keyval; }
}
if (isibookhistory == '') {
	$('#mybookmarkchordhistory').append('<center>How to?<br>History will available<br>after you read the chord.</center>');
} else {
	$('#mybookmarkchordhistory').append(isibookhistory);
}
});


/////////////////////////////////////TAMPILKAN HISTORY END


////////////////////////////////IMPLEMENTASI POIN
$(document).ready(function(){ 
if (!localStorage.getItem("rewardedpoints1") || localStorage.getItem("rewardedpoints1") == "") {
	localStorage.setItem("rewardedpoints1", 1000);
}

if((localStorage.getItem("deviceplatformOS") == "Android" && parseInt(localStorage.getItem("deviceVersionOS")) < 7) || localStorage.getItem("deviceAPPS_NAME") == 'KGANDROIDPRO') { $("#MANGGUNGNOADS").hide(); if(localStorage.getItem("deviceAPPS_NAME") == 'KGANDROIDPRO') { $("#promokhususatas").hide(); }} else {
if ((parseInt(localStorage.getItem("freeOneHourAccess_reward")) < parseInt(localStorage.getItem("tmnow_reward")) && parseInt(localStorage.getItem("freeOneHourAccess_reward")) > 1000)) {	
	/**REWARDPOINTS_TOS_START**/
	$(".aboutrewardpoint").live("click", function() {
		alert("The reward points only compatible with the latest version!\n\nYou need 1 point for:\n* Searching of chord\n* Bookmark Chord\n* Chord Transposer\n* Zoom in/out\n* ADS BLOCK (5000 Points)\n\n(Limited Time Reward Points) You will get 200 points every showing video ads on Chord page area with the icon point. If your reward point = 0, Some feature will be locked by system.\n\nWHERE THE ADS?\nTransition ads loaded every 2 minute\nRewarded ads loaded every 5 minutes");
	});
	if (!localStorage.getItem('rewardedpoints1') || localStorage.getItem('rewardedpoints1') == '') {
		localStorage.setItem('rewardedpoints1', 1000);
	} else if (parseInt(localStorage.getItem("rewardedpoints1"), 10) > 0) {
		if (parseInt(localStorage.getItem("rewardedpoints1"), 10) > 19999) {
			localStorage.setItem('rewardedpoints1', 19999);
			var newpointsset = 19999;
		} else {
			var newpointsset = parseInt(localStorage.getItem("rewardedpoints1"), 10);
		}
		$('#poinsaya').append('<div class="aboutrewardpoint" style="z-index:2;clear:both;color:white;font-size:16px;text-align:left;background-color:#7799b8;padding:5px;position:fixed;top:4px;left:0px;border-radius: 0px 0px 10px 0px;border:solid 1px white;opacity:0.7;">My Points: <span id="mypoints">' + newpointsset + '</span> <i style="font-size:14px;;color:white;" class="material-icons">group_work</i></div>');
	} else {
		if (parseInt(localStorage.getItem("rewardedpoints1"), 10) < 0) {
			localStorage.setItem('rewardedpoints1', 0);
			var newpointsset = 0;
		} else {
			var newpointsset = parseInt(localStorage.getItem("rewardedpoints1"), 10);
		}
		$('#poinsaya').append('<div class="aboutrewardpoint" style="z-index:2;clear:both;color:white;font-size:16px;text-align:left;background-color:#7799b8;padding:5px;position:fixed;top:4px;left:0px;border-radius: 0px 0px 10px 0px;border:solid 1px white;opacity:0.7;">My Point: 0 <i style="font-size:14px;;color:white;" class="material-icons">group_work</i></div>');
	}
}
}
}); 
////////////////////////////////IMPLEMENTASI POIN END


////////////////////////////RUMUS UDAH SOLAT BELOM
$(document).ready(function(){
var d = new Date();
var jam = d.getHours();
var menit = d.getMinutes();
if (menit < 10) { var menit = '0' + menit; }
var jammenitskr = jam + '' + menit;

if ((!localStorage.getItem("sudahsolat") || localStorage.getItem("sudahsolat") == '')) {
	localStorage.setItem("sudahsolat", "belum");
}

var subuha = 515;
var subuhb = 545;
var zuhura = 1330;
var zuhurb = 1430;
var asara = 1545;
var asarb = 1715;
var magriba = 1840;
var magribb = 1850;
var isaa = 2011;
var isab = 2359;

if(parseInt(localStorage.getItem("freeOneHourAccess_reward")) < parseInt(localStorage.getItem("tmnow_reward")) && parseInt(localStorage.getItem("freeOneHourAccess_reward")) > 1000){

//FREEONEHOURS OPEN
localStorage.setItem("showkonten", "showkonten");
$("#platformshare_result_FOLLOW").show();
if(localStorage.getItem("deviceAPPS_NAME") != 'KGANDROIDPRO') { $("#banneradsinfo_header").show(); }
//FREEONEHOURS OPEN END

if ((jammenitskr >= subuha && jammenitskr <= subuhb) &&
	(!localStorage.getItem("sudahsolat") || localStorage.getItem("sudahsolat") == 'belum') && (localStorage.getItem("IpUserCache") == 'ID')) {
	localStorage.setItem("sudahsolat", "sudah");
	$("#TAMPILUDAHSOLATBELOM").show('slow'); $("#ISISOLATAPA").append('SUBUH');
} else if ((jammenitskr >= zuhura && jammenitskr <= zuhurb) &&
	(!localStorage.getItem("sudahsolat") || localStorage.getItem("sudahsolat") == 'belum') && (localStorage.getItem("IpUserCache") == 'ID')) {
	localStorage.setItem("sudahsolat", "sudah");
	$("#TAMPILUDAHSOLATBELOM").show('slow'); $("#ISISOLATAPA").append('DZUHUR');
} else if ((jammenitskr >= asara && jammenitskr <= asarb) &&
	(!localStorage.getItem("sudahsolat") || localStorage.getItem("sudahsolat") == 'belum') && (localStorage.getItem("IpUserCache") == 'ID')) {
	localStorage.setItem("sudahsolat", "sudah");
	$("#TAMPILUDAHSOLATBELOM").show('slow'); $("#ISISOLATAPA").append('ASHAR');
} else if ((jammenitskr >= magriba && jammenitskr <= magribb) &&
	(!localStorage.getItem("sudahsolat") || localStorage.getItem("sudahsolat") == 'belum') && (localStorage.getItem("IpUserCache") == 'ID')) {
	localStorage.setItem("sudahsolat", "sudah");
	$("#TAMPILUDAHSOLATBELOM").show('slow'); $("#ISISOLATAPA").append('MAGRIB');
} else if ((jammenitskr >= isaa && jammenitskr <= isab) &&
	(!localStorage.getItem("sudahsolat") || localStorage.getItem("sudahsolat") == 'belum') && (localStorage.getItem("IpUserCache") == 'ID')) {
	localStorage.setItem("sudahsolat", "sudah");
	$("#TAMPILUDAHSOLATBELOM").show('slow'); $("#ISISOLATAPA").append('ISYA'); 
} else if (
	((jammenitskr >= 501 && jammenitskr <= 514) ||
	(jammenitskr >= 1311 && jammenitskr <= 1329) ||
	(jammenitskr >= 1515 && jammenitskr <= 1544) ||
	(jammenitskr >= 1810 && jammenitskr <= 1839) ||
	(jammenitskr >= 1930 && jammenitskr <= 2010) ||
	(jammenitskr >= 2130 && jammenitskr <= 2159)) && !sessionStorage.getItem("SolatOnceTimehome")) {
	localStorage.setItem("sudahsolat", "belum");
	sessionStorage.setItem("SolatOnceTimehome", "belum");
}} 

else
{
//FREEONEHOURS LOCKED
$("#MANGGUNGNOADS").hide(); $('#for_id_user1').hide(); $('#for_id_user2').hide(); if(APPS_NAME == 'CGIOS' && localStorage.getItem("showkonten") != 'showkonten') { $("#footerlink").hide(); $("#topfive").hide(); $("#promokhususatas").hide();}
//FREEONEHOURS LOCKED END	
}

sessionStorage.setItem("OPENDEVELOPER", 1);
sessionStorage.setItem("mabookmak", 1);
sessionStorage.setItem("derektorilis", 1);

$("#mabookmak").click(function(){sessionStorage.getItem("mabookmak")||sessionStorage.setItem("mabookmak",1),10<sessionStorage.getItem("mabookmak")?(sessionStorage.setItem("mabookmak",1),localStorage.setItem("MANGGUNG",""),localStorage.setItem("rewardedpoints1", 1),localStorage.setItem("MANGGUNGend",1234),alert("0D DONE!")):sessionStorage.setItem("mabookmak",parseInt(sessionStorage.getItem("mabookmak"))+1)}),$("#derektorilis").click(function(){sessionStorage.getItem("derektorilis")||sessionStorage.setItem("derektorilis",1),10<sessionStorage.getItem("derektorilis")?(sessionStorage.setItem("derektorilis",1),localStorage.setItem("MANGGUNG","MANGGUNG"),localStorage.setItem("rewardedpoints1", 123456),localStorage.setItem("MANGGUNGend",parseInt(localStorage.getItem("tmnow_reward"))+31104e6),alert("12M DONE!")):sessionStorage.setItem("derektorilis",parseInt(sessionStorage.getItem("derektorilis"))+1)});

$('#TAMPILUDAHSOLATBELOMclose').click(function() { $("#TAMPILUDAHSOLATBELOM").hide('slow'); });
});
////////////////////////////RUMUS UDAH SOLAT BELOM END


////////////////////////RUMUS MODE MANGGUNG
$(document).ready(function(){ 

var MANGGUNGtime = parseInt(localStorage.getItem("tmnow_reward"));
var MANGGUNGend = MANGGUNGtime + (3600000 * 1);

if(!localStorage.getItem("MANGGUNGend")) { localStorage.setItem("MANGGUNGend", 0); }
if(!localStorage.getItem("MANGGUNG") || parseInt(localStorage.getItem("MANGGUNGend")) < MANGGUNGtime) { localStorage.setItem("MANGGUNG", ""); }

if((localStorage.getItem("deviceplatformOS") == "Android" && parseInt(localStorage.getItem("deviceVersionOS")) < 7) || localStorage.getItem("deviceAPPS_NAME") == 'KGANDROIDPRO') 
{ $("#MANGGUNGNOADS").hide(); } 
else 
{	
$('#MANGGUNGNOADS').click(function() { $("#MANGGUNGNOADSdetail").show('slow'); });
$('#tidaksetujunoads').click(function() { $("#MANGGUNGNOADSdetail").hide('slow'); });
$('#setujunoads').click(function() { 

if (parseInt(localStorage.getItem("rewardedpoints1"), 10) < 5000) { alert("Poin Tidak Cukup!"); }
else {
localStorage.setItem("MANGGUNG", "MANGGUNG"); 
localStorage.setItem("MANGGUNGend", MANGGUNGend);
$("#MANGGUNGNOADSdetail").hide('slow'); 
$("#MANGGUNGNOADS").hide('slow'); 
var oldrewardedpoints = parseInt(localStorage.getItem("rewardedpoints1"), 10) - 5000;
if (oldrewardedpoints < 1) { var oldrewardedpoints = 0; }
localStorage.setItem("rewardedpoints1", oldrewardedpoints);
$("#mypoints").empty(); $("#mypoints").append(oldrewardedpoints);
alert("ADS BLOCKER for 1 HOURs ACTIVATED!"); }

});

}

if(localStorage.getItem("MANGGUNG") == "MANGGUNG") 
{ $("#MANGGUNGNOADS").hide(); $('#for_id_user1').hide(); $('#for_id_user2').hide(); }
});
////////////////////////RUMUS MODE MANGGUNG END

/********************BACKUP RESTORE******************/
String.prototype.mumet = function(){ return this.replace(/[a-zA-Z]/g, function(c){ return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26); }); };

function BACKUPRESTORE(){ 

var localstoragecek = '';
var count_i = 0;
for (var i = 0, len = localStorage.length; i < len; i++) {
	var keylocalstoragecek = localStorage.key(i);
	var valuelocalstoragecek = localStorage[keylocalstoragecek];
	if (keylocalstoragecek.match(/hhhh/) || keylocalstoragecek.match(/cccc/)) { 
		localstoragecek = localstoragecek + "" + keylocalstoragecek + "@@@" + valuelocalstoragecek + "___";
		if(count_i == 5) {
		localstoragecek = localstoragecek + "ccccc@@@" + localStorage.getItem("rewardedpoints1") + "___"; 
		}
		count_i++;
	}
}

localstoragecek = localstoragecek.replace(/___$/, '');
var localstoragecek_enc = window.btoa(localstoragecek.mumet());

$(".backuprestore_databackup").empty();
$(".backuprestore_databackup").append(localstoragecek_enc);
}

$(document).ready(function(){ 
$('.backuprestore').click(function() {  sessionStorage.setItem("OPENDEVELOPER", 1); $('.backuprestore').hide("slow"); $('.backuprestore_show').show("slow"); BACKUPRESTORE(); }); 
$('.backuprestore_restore').click(function() {  

var backuprestore_datarestore =  document.getElementsByClassName("backuprestore_datarestore");
var restore_list_full_enc = window.atob(backuprestore_datarestore[0].value);
var restore_list_full = restore_list_full_enc.mumet();
var restore_list_list = restore_list_full.split("___");
var restore_done = '';
for (var i = 0, len = restore_list_list.length; i < len; i++) {
	var restore_list_id_judul = restore_list_list[i].split("@@@");
	if (restore_list_id_judul[0] == "ccccc") {
	localStorage.setItem("rewardedpoints1",restore_list_id_judul[1]); 
	var restore_done = 'restore_done';
	}
	else if (restore_list_id_judul[0].match(/hhhh/) || restore_list_id_judul[0].match(/cccc/)) {
	localStorage.setItem(restore_list_id_judul[0],restore_list_id_judul[1]);
	var restore_done = 'restore_done';
	}
}

if(restore_done == 'restore_done') {
alert("RESTORE DONE :)");
window.location.reload(true);
} else { alert("DATA NOT VALID :("); }
});
});

/********************BACKUP RESTORE******************/


/******************/
/////////////////////////////FOR TESTING MODE DEVELOPER/////////////////////
$(document).ready(function(){ 
$('#OSINFO').click(function() { 
if(!sessionStorage.getItem("OPENDEVELOPER")) { sessionStorage.setItem("OPENDEVELOPER", 1); }
if(parseInt(sessionStorage.getItem("OPENDEVELOPER")) > 5) { sessionStorage.setItem("OPENDEVELOPER", 1); alert("DEVELOPER MODE OPENED!"); DEVELOPERTESTING(); }
else { sessionStorage.setItem("OPENDEVELOPER", parseInt(sessionStorage.getItem("OPENDEVELOPER"))+1); }
}); });

function DEVELOPERTESTING(){ 
var localstoragecek = '';
for (var i = 0, len = localStorage.length; i < len; i++) {
	var keylocalstoragecek = localStorage.key(i);
	var valuelocalstoragecek = localStorage[keylocalstoragecek];
	if (keylocalstoragecek.match(/hhhh/) || keylocalstoragecek.match(/cccc/) || keylocalstoragecek.match(/cachepromo/) || keylocalstoragecek.match(/cachetopten/) || keylocalstoragecek.match(/advertisechord/) || keylocalstoragecek.match(/advertiselist/) || keylocalstoragecek.match(/cacherecommendedchord/)) { } else {
		var localstoragecek = localstoragecek + "" + keylocalstoragecek + ": " + valuelocalstoragecek + "\n\r";
	}
}
for (var i = 0, len = sessionStorage.length; i < len; i++) {
	var keysessionstoragecek = sessionStorage.key(i);
	var valuesessionstoragecek = sessionStorage[keysessionstoragecek];
	
		var localstoragecek = localstoragecek + "" + keysessionstoragecek + ": " + valuesessionstoragecek + "\n\r";
	
}
$("#localstoragecek").empty();
$("#localstoragecek").show();
$("#localstoragecek").append(localstoragecek);
}
/////////////////////////////FOR TESTING END/////////////////////


///////////////////////////////////GET PROMO TOPTEN
$(document).ready(function(){ 
var tmnow = parseInt(localStorage.getItem("tmnow_reward"));
var tmnext = tmnow + (3600000 * 1);

if (!sessionStorage.getItem("logOnceTimehome") || parseInt(sessionStorage.getItem("logOnceTimehome")) < tmnow || !localStorage.getItem("cachepromo") || localStorage.getItem("cachepromo") == '' || !localStorage.getItem("cachetopten") || localStorage.getItem("cachetopten") == '') {

setTimeout(function() {
	$.ajax({
		url: localStorage.getItem("urlhometoptendefault") + '?v=' + tmnow,
		timeout: 3000
	}).done(function(data) {
		/*SUCCESS INTERNET DATA*/
		if (data.indexOf("THIS WEEK") > -1) {
		if(localStorage.getItem("deviceplatformOS") == "Android" && parseInt(localStorage.getItem("deviceVersionOS")) < 7) 
		{var data = data.replace(/trending_down|trending_up|trending_flat|insert_comment|arrow_upward/g, '');}
			var data = data.replace(/<\/script/gi, '<\/script');
			sessionStorage.setItem("logOnceTimehome", tmnext);
			localStorage.setItem("cachetopten", data);
			$("#topfive").empty();
			$("#topfive").html(data);
		} else {
			$("#topfive").empty();
			$('#topfive').append(localStorage.getItem("cachetopten"));
		}
	}).fail(function(jqXHR, textStatus) {
			$("#topfive").empty();
			$('#topfive').append(localStorage.getItem("cachetopten"));
		if (textStatus === 'timeout') { /*INTERNET LEMOT*/ } else { /*TENYATA OFFLINE*/ }
	});
}, 1000);

setTimeout(function() {	
	$.ajax({
		url: localStorage.getItem("urlhomepromodefault") + '?v=' + tmnow,
		timeout: 3000
	}).done(function(data) {
		/*SUCCESS INTERNET DATA*/
		if (data.indexOf("LOAD SUCCESS") > -1) {
		if(localStorage.getItem("deviceplatformOS") == "Android" && parseInt(localStorage.getItem("deviceVersionOS")) < 7) 
		{var data = data.replace(/trending_down|trending_up|trending_flat|insert_comment|arrow_upward/g, '');}
			var data = data.replace(/<\/script/gi, '<\/script');
			sessionStorage.setItem("logOnceTimehome", tmnext);
			localStorage.setItem("cachepromo", data);
			$("#promokhususatas").empty();
			$('#promokhususatas').html(data);
		} else {
			$("#promokhususatas").empty();
			$('#promokhususatas').append(localStorage.getItem("cachepromo"));
		}
	}).fail(function(jqXHR, textStatus) {
		$("#promokhususatas").empty();
		$('#promokhususatas').append(localStorage.getItem("cachepromo"));
		if (textStatus === 'timeout') { /*INTERNET LEMOT*/ } else { /*TENYATA OFFLINE*/ }
	});
}, 1500);
}
else
{
	$("#topfive").empty();
	$('#topfive').append(localStorage.getItem("cachetopten"));
	$("#promokhususatas").empty();
	$('#promokhususatas').append(localStorage.getItem("cachepromo"));
}
});
///////////////////////////////////GET PROMO TOPTEN END


