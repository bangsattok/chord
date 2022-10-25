/////////////////////////////ONLINE/OFFLINE DETECTOR PAS CEK RECOMMENDED CHORD
$(document).ready(function() {
	if (idchord >= 1 && localStorage.getItem("deviceplatformOS") == "Android" && localStorage.getItem("deviceAPPS_NAME") != 'KGANDROIDPRO') {
		$("#ganalytics").attr("src", ""+localStorage.getItem("urlgoogleanalytics")+"#" + idchord + "#" + encodeURI(tampilchord[idchord]['nama_band']) + "#" + encodeURI(tampilchord[idchord]['judul']) + "");
	}
	
	/////////////CLICK RECOMMENDED RELOAD PAGE
	$(".rec_ads").live("click", function() {
		$(window).on('hashchange', function() {
			window.location.reload(true);
		});
	});

function revalidasi_isigetkontendata()
{
	cacherecommendedchord_data = localStorage.getItem("cacherecommendedchord");
	cacherecommendedchord_data = cacherecommendedchord_data.replace(/<\/script/gi, '<\/script');
	$("#script_recchord").empty();
	$("#recchord").empty();
	$('#script_recchord').append(cacherecommendedchord_data);
}

var cacherecommendedchord_nowtime = parseInt(localStorage.getItem("tmnow_reward")); 
var cacherecommendedchord_nexttime = cacherecommendedchord_nowtime + (3600000 * 24);
if(!localStorage.getItem("cacherecommendedchord_nexttime") || parseInt(localStorage.getItem("cacherecommendedchord_nexttime")) < cacherecommendedchord_nowtime || !localStorage.getItem("cacherecommendedchord") || localStorage.getItem("cacherecommendedchord") == '') {
setTimeout(function() {
	$.ajax({
		url: ""+localStorage.getItem('urlrecommendedchord')+"",
		timeout: 3000
	}).done(function(data) { 
		/*SUCCESS INTERNET DATA*/
		if (data.indexOf("h4") > -1) {
			var data = data.replace(/<\/script/gi, '<\/script');
			localStorage.setItem("cacherecommendedchord_nexttime",cacherecommendedchord_nexttime);
			localStorage.setItem("cacherecommendedchord",data);
			$("#script_recchord").empty();
			$("#recchord").empty();
			$("#script_recchord").html(data); 
		} else { 
			revalidasi_isigetkontendata();
		} 
	}).fail(function(jqXHR, textStatus) { 
		if (textStatus === 'timeout') { /*INTERNET LEMOT*/ } else { /*TENYATA OFFLINE*/ } 
			revalidasi_isigetkontendata();
	});
}, 1500);
} 
else { revalidasi_isigetkontendata(); }
});
/////////////////////////////ONLINE/OFFLINE DETECTOR PAS CEK RECOMMENDED CHORD END