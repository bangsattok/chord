$(document).ready(function() {
	
/////////////////DEKLARASI JUDUL ATAS
if(typeof message === 'undefined' || message === 'null') 
{ $('#judulatasjalan').append(localStorage.getItem("alternative_message")); } 
else { $('#judulatasjalan').append(message); }
/////////////////DEKLARASI JUDUL ATAS END



////////////////////RUMUS PENCARIAN
var urloooo = "js/dbkunci.js";
	$('#buttonsearchzz').click(function() {
		$('#buttonsearchzz').hide();
		$('#buttonsearchzzwait').show();
		
		////////////////////RUMUS PENGURANGAN DAN VALIDASI POIN		
		if(parseInt(localStorage.getItem("freeOneHourAccess_reward")) < parseInt(localStorage.getItem("tmnow_reward")) && parseInt(localStorage.getItem("freeOneHourAccess_reward")) > 1000){
			if ((localStorage.getItem("deviceplatformOS") == "Android" && parseInt(localStorage.getItem("deviceVersionOS")) < 7) || localStorage.getItem("deviceAPPS_NAME") == 'KGANDROIDPRO') {} else { 
		var oldrewardedpoints = parseInt(localStorage.getItem("rewardedpoints1"), 10) - 1;
	    if (oldrewardedpoints > 19999) { var oldrewardedpoints = 19999; }
			localStorage.setItem("rewardedpoints1", oldrewardedpoints);
			$("#mypoints").empty(); $("#mypoints").append(oldrewardedpoints);
		}}
		////////////////////RUMUS PENGURANGAN DAN VALIDASI POIN	END

		$.getScript(urloooo, function() {
			$("#search").autocomplete({
				source: data,
				maxResults: 500,
				minLength: 3,
				select: function(event, ui) {
					$("#search").val(ui.item.P);
					return false;
				}
			}).data("autocomplete")._renderItem = function(ul, item) {
				return $("<li></li>")
					.data("item.autocomplete", item)
					.append("<a href ='chord.html#" + (item.P.split("@")[0]) + "' onClick='window.location = \"chord.html#" + (item.P.split("@")[0]) + "\";location.reload();' ><strong style=\"color:#2988bc;\">&sung; " + (item.P.split("@")[1]) + "</strong></a>")
					.appendTo("ul");
			};
			$('#buttonsearchzzwait').hide('slow');
			$('#formsearch').show('slow');
		});
		document.getElementById("search").placeholder = " Search Songs...";
		localStorage.setItem("Count_Ganalytics", "");
////////////////////RUMUS PENCARIAN END
		
	});
});

