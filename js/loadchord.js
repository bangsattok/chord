$(document).ready(function() {
	//////////////////LOADED/KAPAN? TIME REWARDED_INTERSTITIAL
	if ((localStorage.getItem("deviceplatformOS") == "Android" && parseInt(localStorage.getItem("deviceVersionOS")) < 7) || localStorage.getItem("deviceAPPS_NAME") == 'KGANDROIDPRO') { } else {
		if ((!sessionStorage.getItem("admobOnceTime_reward") || parseInt(sessionStorage.getItem("admobOnceTime_reward")) < parseInt(localStorage.getItem("tmnow_reward"))) && parseInt(localStorage.getItem("freeOneHourAccess_reward")) < parseInt(localStorage.getItem("tmnow_reward")) && parseInt(localStorage.getItem("freeOneHourAccess_reward")) > 1000 && sessionStorage.getItem("NGOFFLINE") != "NGOFFLINE" && localStorage.getItem("MANGGUNG") != "MANGGUNG") {
			
			////////OPEN REWARD SETELAH 2 LAGU
			if(!sessionStorage.getItem("OPENREWARDSETELAH2LAGU")) { sessionStorage.setItem("OPENREWARDSETELAH2LAGU",1); }
			else { sessionStorage.setItem("OPENREWARDSETELAH2LAGU",(parseInt(sessionStorage.getItem("OPENREWARDSETELAH2LAGU"))+1)); }
			
			if(parseInt(sessionStorage.getItem("OPENREWARDSETELAH2LAGU")) > 2) { localStorage.setItem("rewardedfound", "LOADED"); }
			
			
	} }
	
	/////////////JAM MANGGUNG SELESAI
	if (parseInt(localStorage.getItem("MANGGUNGend")) < parseInt(localStorage.getItem("tmnow_reward"))) {
		localStorage.setItem("MANGGUNG", "");
	}
});

//////////////////////////ONLINE DETECTOR
$(document).ready(function() {
	$.ajax({
		url: localStorage.getItem("urlONLINEDETECTOR")+"?temp=" + localStorage.getItem("tmnow_reward"),
		timeout: 1500
	}).done(function(data) {
		/*SUCCESS INTERNET DATA*/
		sessionStorage.setItem("NGOFFLINE", "NGONLINE");
	}).fail(function(jqXHR, textStatus) {
		if (textStatus === 'timeout') { 
		/*INTERNET LEMOT*/ 
		} else {
		/*TENYATA OFFLINE*/
			sessionStorage.setItem("NGOFFLINE", "NGOFFLINE");
		}
	});
});

$(document).ready(function() {
///////////////////////////APPEND PREPARE
	$('head').append("<title>[Chord] " + tampilchord[idchord]['nama_band'] + " - " + tampilchord[idchord]['judul'] + "</title>");

	
		if ((localStorage.getItem("deviceplatformOS") == "Android" && parseInt(localStorage.getItem("deviceVersionOS")) < 7) || localStorage.getItem("deviceAPPS_NAME") == 'KGANDROIDPRO') {} else {
			
			if ((parseInt(localStorage.getItem("freeOneHourAccess_reward")) < parseInt(localStorage.getItem("tmnow_reward")) && parseInt(localStorage.getItem("freeOneHourAccess_reward")) > 1000) || parseInt(localStorage.getItem("rewardedpoints1"), 10) < 1) {
			$(".header").append('<style>@keyframes blinker {  50% { opacity: 0; }}</style><div id="ManualReward" style="z-index:2;margin:0;padding:0;position:fixed;bottom:260px;right:9px;cursor:pointer;"><span id="warningnointernet" style="color:#99ccff;font-size:7px;top:+50px;position: relative;display:none;float:left;animation: blinker 1s linear infinite;">NEEDED INTERNET CONNECTION!<br>WAIITING... BUFFERING...</span><i style="font-size:40px;;color:#99ccff;text-shadow: 1px 1px 2px black;" class="material-icons">group_work</i><br><span style="color:#99ccff;font-size:7px;top:-7px;position: relative;">Get200Poin</span></div>');
			}
		}
	

	$(".header").append('<div style="z-index:2;margin:0;padding:0;position:fixed;bottom:210px;right:10px;"><a target="_blank" href="http://kuncilagu.exe.bz/index.php?request=LISTENFROMMOBILEAPPS&id_chord=' + idchord + '"><img style="width:35px;" src="button_play_small.png"></a></div>');
	
	if ((parseInt(localStorage.getItem("freeOneHourAccess_reward")) < parseInt(localStorage.getItem("tmnow_reward")) && parseInt(localStorage.getItem("freeOneHourAccess_reward")) > 1000) && localStorage.getItem("deviceAPPS_NAME") != 'KGANDROIDPRO') {
	$(".header").append('<div style="color:#0099cc;text-align:right;font-size:8px;margin:0px;border-top:solid 4px #0099cc;z-index:2;position:fixed;top:0px;right:0px;width:100%;"><div style="float:right;border-left:solid 1px #0099cc;border-right:solid 1px #0099cc;border-bottom:solid 1px #0099cc;padding:2px;margin:0px;-moz-border-radius:  0 0 4px 4px;  -webkit-border-radius:  0 0 4px 4px; border-radius:  0 0 4px 4px;background-color:white"> Banner Ads! No Points! </div><div style="clear:both"></div></div>'); } else { $('#recwithadsnopint_info').hide(); }

	$('#promokhususatas').append('<style>.sharingmedia{padding-top:10px;padding-left:20px;padding-right:20px;padding-bottom:10px;color:white;border-radius:0.1em;-moz-border-radius:0.1em;-webkit-border-radius:0.1em;-khtml-border-radius:0.1em;font-weight:bold;}</style><div style="margin-top:5px;padding-top:8px;padding-bottom:2px;"><center style="padding:5px;margin-bottom:10px;"><b class="sharingmedia" style="background-color:#996633;">Share:</b> <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fkuncilagu.exe.bz/' + tampilchord[idchord]["id"] + '"><Span class="sharingmedia" style="background-color:#2988bc;">FB</span></a> <a target="_blank" href="https://twitter.com/intent/tweet?text=%23Chord+%23Guitar+and+%23Lyric+%23' + tampilchord[idchord]["nama_band"] + ' - ' + tampilchord[idchord]["judul"] + '&via=moreshare&url=http://kuncilagu.exe.bz/' + tampilchord[idchord]["id"] + '"><Span class="sharingmedia" style="background-color:#09b8c1;">Twit</span></a> <a target="_blank" href="https://wa.me/?text=[Chord+Guitar]+' + tampilchord[idchord]["nama_band"] + '+-+' + tampilchord[idchord]["judul"] + '.+LIHAT+DISINI:+http://kuncilagu.exe.bz/' + tampilchord[idchord]["id"] + '"><Span class="sharingmedia" style="background-color:#49d65a;">WA</span></a></center></div>');

	$('#judulchord').append("" + tampilchord[idchord]['nama_band'] + " - " + tampilchord[idchord]['judul'] + "");
	
	if(localStorage.getItem("deviceAPPS_NAME") == 'KGANDROIDPRO') { $('#recwithadsnopint_info').hide(); localStorage.setItem('advertisechord',''); }

	$('#listensong').append("<center><a target='_blank' href=\"https://www.youtube.com/results?search_query=" + (tampilchord[idchord]['nama_band'].replace(/\'/g, "\\'")) + " " + (tampilchord[idchord]['judul'].replace(/\'/g, "\\'")) + "\"><img style=\"width:90%;margin-top:10px;margin-bottom:10px;\" src=\"listen.png\"></a><br>" + localStorage.getItem('advertisechord') + "</center>");
///////////////////////////APPEND PREPARE END


	/**********REPLACE ISI**********/
	var cmprsstr = tampilchord[idchord]['isi'];
	cmprsstr = cmprsstr.replace(/Gb/g, "F#");
	cmprsstr = cmprsstr.replace(/Ab/g, "G#");
	cmprsstr = cmprsstr.replace(/Bb/g, "A#");
	cmprsstr = cmprsstr.replace(/Db/g, "C#");
	cmprsstr = cmprsstr.replace(/Eb/g, "D#");
	cmprsstr = cmprsstr.replace(/A:s1:([a-z])/g, "a:s1:$1");
	cmprsstr = cmprsstr.replace(/:([A-Z])(.*?):/g, ":<span style=\"color:#800000;font-weight:bold;\">$1$2</span>:");

	/****************chordposition = GAMBAR CHORD*********************/
	chordposition = cmprsstr.replace(/<\/span>(.*?)<span style=\"color:#800000;font-weight:bold;\">/g, " ");
	chordposition = chordposition.replace(/(.*?)<span style=\"color:#800000;font-weight:bold;\">/g, " ");
	chordposition = chordposition.replace(/<\/span>(.*?)$/g, " ");

	Array.prototype.removeDuplicate = function() {
		var result = [];
		for (var i = 0; i < this.length; i++) {
			if (result.indexOf(this[i]) == -1) result.push(this[i]);
		}
		return result;
	};

	var chordposition = chordposition;
	chordposition = chordposition.replace(/[\/]/g, " ").split(" ").removeDuplicate().join(":after::before:") + ":after:";
	chordposition = chordposition.replace(/#/g, "kr3s");
	chordposition = chordposition.replace(/:before:(.*?):after:/g, '<img src="diagram/$1.png" class="diagramstyle">');
	chordposition = chordposition.replace(/(:before:|:after:)/g, "");

	/**********REPLACE ISI**********/
	cmprsstr = cmprsstr.replace(/http(.*?):x/g, ":x");
	cmprsstr = cmprsstr.replace(/:s10:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	cmprsstr = cmprsstr.replace(/:s9:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	cmprsstr = cmprsstr.replace(/:s8:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	cmprsstr = cmprsstr.replace(/:s7:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	cmprsstr = cmprsstr.replace(/:s6:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	cmprsstr = cmprsstr.replace(/:s5:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	cmprsstr = cmprsstr.replace(/:s4:/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
	cmprsstr = cmprsstr.replace(/:s3:/g, "&nbsp;&nbsp;&nbsp;");
	cmprsstr = cmprsstr.replace(/:s2:/g, "&nbsp;&nbsp;");
	cmprsstr = cmprsstr.replace(/:s1:/g, "&nbsp;");
	cmprsstr = cmprsstr.replace(/:x5:/g, "<br><br><br><br><br>");
	cmprsstr = cmprsstr.replace(/:x4:/g, "<br><br><br><br>");
	cmprsstr = cmprsstr.replace(/:x3:/g, "<br><br><br>");
	cmprsstr = cmprsstr.replace(/:x2:/g, "<br><br>");
	cmprsstr = cmprsstr.replace(/:x1:/g, "<br>");


	//////////////////////////RUMUS BERESIN TEXT GA ADA LINE!!!!!!!!!!!!!!!!
	var HARUSBERESIN = '';
	var cmprsstrmatchtext = cmprsstr.match(/<br/gi);
	if (cmprsstrmatchtext == null) {
		var HARUSBERESIN = 'HARUSBERESIN';
	} else if (cmprsstrmatchtext != null) {
		if (!cmprsstrmatchtext[10]) {
			var HARUSBERESIN = 'HARUSBERESIN';
		}
	}

	if (HARUSBERESIN == 'HARUSBERESIN') {
		cmprsstr = cmprsstr.replace(/([a-z])((&#?([a-z]|[0-9])+;)+)([a-z])/g, "$1&nbsp;$5");
		cmprsstr = cmprsstr.replace(/>((&#?([a-z]|[0-9])+;)+)([a-z])/g, "><br>$4");
		cmprsstr = cmprsstr.replace(/([a-z]|\.)((&#?([a-z]|[0-9])+;)+)</g, "$1<br><");
		cmprsstr = cmprsstr.replace(/(reff|musik|intro|interlude|bridge|lead|melodi|solo|melody|music|chorus)/g, "<br><br>$1<br>");
	}
	//////////////////////////RUMUS BERESIN TEXT GA ADA LINE!!!!!!!!!!!!!!!!



if((!localStorage.getItem("showkonten") || localStorage.getItem("showkonten") != "showkonten") && localStorage.getItem("deviceAPPS_NAME") == 'CGIOS') { 

cmprsstr = cmprsstr.replace(/(intro|reff|interlude|outro|bridge)/g, "<br><span style=\"color:#800000;font-weight:bold;\">$1</span><br>");
cmprsstr = cmprsstr.replace(/<br>/g, "<span style=\"color:#800000;font-weight:bold;\"><br></span>");
cmprsstr = cmprsstr.replace(/<\/span>(.*?)<span style=\"color:#800000;font-weight:bold;\">/mg, "</span>&nbsp;<span style=\"color:#800000;font-weight:bold;\">");
cmprsstr = cmprsstr.replace(/<span style=\"color:#800000;font-weight:bold;\"><br><\/span>/g, "<br>");
cmprsstr = cmprsstr.replace(/<span style=\"color:#800000;font-weight:bold;\">(intro|reff|interlude|outro|bridge)<\/span>/ig, "<span style=\"color:orange;font-weight:bold;font-size:150%;text-decoration: underline overline;\">$1</span>");
cmprsstr = cmprsstr.replace(/&nbsp;&nbsp;/g, "&nbsp;");
cmprsstr = cmprsstr.replace(/&nbsp;&nbsp;/g, "&nbsp;");
cmprsstr = cmprsstr.replace(/^(&nbsp;)/g, "");
cmprsstr = cmprsstr.replace(/<br>&nbsp;/g, "<br>");
cmprsstr = cmprsstr.replace(/&nbsp;<br>/g, "<br>");
cmprsstr = cmprsstr.replace(/<br> /g, "<br>");
cmprsstr = cmprsstr.replace(/ <br>/g, "<br>");
cmprsstr = cmprsstr.replace(/<br><br><br>/g, "<br><br>");
cmprsstr = cmprsstr.replace(/<br><br>/g, "<br>");
cmprsstr = cmprsstr.replace(/(\[|\]|\(|\))/g, "");
cmprsstr = cmprsstr.replace(/([^>]*)$/, "");
cmprsstr = cmprsstr.replace(/([^<]*)/, "");
cmprsstr = cmprsstr.replace(/<br><br><br><br><br>/g, "");
cmprsstr = cmprsstr.replace(/<br><br><br><br>/g, "");
cmprsstr = '<ul><li><i style="color:#e55945;">Update! Lyrics have been disabled!<br>Only guitar chords are displayed!</i><br>'+cmprsstr+'</li></ul>';

 }



	if (cmprsstr == '' || !cmprsstr || 0 === cmprsstr.length) {
		cmprsstr = '<br><br><br><br><center>Not Found!<br>Please Update Your Apps<br>To The Latest Version!<br><Br><hr>Or Contact Us<br>Support@ms-room.com</center>';
	}
	/**********TAMPILKAN ISI**********/
	$('#stage').append("<span class=\"chord\">" + cmprsstr + "<br><br><hr><center><div id=\"native-ad\" style=\"width: 80%; height: 250px;clear:both;margin-top:130px;margin-bottom:10px;display:none;\"></div></center>" + chordposition + "</span>");
	$('body').append('<div class="homehome"> <a href="index.html"><span class="first"> Home </span></a> <a id="support" href="album.html#' + tampilchord[idchord]["id_abjad"] + '#' + tampilchord[idchord]["id_band"] + '#' + tampilchord[idchord]["nama_band"] + '"><span class="afterfirst"> Back </span></a> <span id="box-links"><a><span id="scrollit" class="afterfirst"> Scroll </span></a></span> <span id="box-links-1"> <a><span id="stopscrollit" class="afterfirst"> Stop </span></a></span> <style>[data-tip] {position:relative;}[data-tip]:after { 	display:none; 	content:attr(data-tip); 	position:absolute; 	top:-60px; 	left:-120px; 	padding:5px 8px; 	background:#1a1a1a; 	color:#fff; 	z-index:9; 	font-size: 10px; 	height:18px; 	line-height:18px; 	-webkit-border-radius: 3px; 	-moz-border-radius: 3px; 	border-radius: 3px; 	white-space:nowrap; 	word-wrap:normal; border:solid 1px orange; } [data-tip]:hover:before, [data-tip]:hover:after { 	display:block; } #xspeedscroll {width:30px;font-size:10px;margin:0px;padding:2px;} #xspeedscroll:hover {width:55px; padding: 10px;font-size:24px; }</style><span data-tip="<10: Faster | =10: Normal | >10: Slower"><input  style="" type="number" id="xspeedscroll" onchange="scrlF(this.value)"></span></div>');
	
	/*********
	$("#box-links").live("click", function() {
		$("#box-links").hide("slow");
		$("#box-links-1").show("slow");});
	$("#box-links-1").live("click", function() {
		$("#box-links-1").hide("slow");
		$("#box-links").show("slow");});
	**********/
});


$(document).ready(function() {
	sessionStorage.setItem("refpage", tampilchord[idchord]['id']);
});

var message = "" + tampilchord[idchord]['nama_band'] + " - " + tampilchord[idchord]['judul'] + "";
localStorage.setItem("alternative_message", message);

/////////////SET AUTOSAVE HISTORY PAGE
if(!localStorage.getItem("countlastvisithistory")) { localStorage.setItem("countlastvisithistory", 100000000000); }
else { localStorage.setItem("countlastvisithistory", parseInt(localStorage.getItem("countlastvisithistory"))+1); }
if(parseInt(localStorage.getItem("countlastvisithistory")) > 900000000000) { localStorage.setItem("countlastvisithistory", 99999999999); } 

var halamanchordhhhhkey = "hhhh" + tampilchord[idchord]['id'];
if(!localStorage.getItem(halamanchordhhhhkey)) { localStorage.setItem(halamanchordhhhhkey, message+"<!--"+localStorage.getItem("countlastvisithistory")+"-->"); }
else { localStorage.removeItem(halamanchordhhhhkey); localStorage.setItem(halamanchordhhhhkey, message+"<!--"+localStorage.getItem("countlastvisithistory")+"-->"); }


var startlimithistory = 0;
var localstoragecekhistoryArray = new Array();
for (var istoragecekhistory = 0, lenstoragecekhistory = localStorage.length; istoragecekhistory < lenstoragecekhistory; istoragecekhistory++) {
	var keylocalstoragecekhistory = localStorage.key(istoragecekhistory);
	var valuesort = localStorage[keylocalstoragecekhistory];
	if (keylocalstoragecekhistory.match(/hhhh/)) 
	{  
		var valuesortlastvisit = '';
		if(valuesort.match(/<!--(\d+)-->/)) 
		{ var matcheslastvisit = valuesort.match(/<!--(\d+)-->/);
		var valuesortlastvisit = matcheslastvisit[1]; }
		localstoragecekhistoryArray[istoragecekhistory] = ""+valuesortlastvisit+" " + keylocalstoragecekhistory + ""; 
	}
}

var sortedArray2 = localstoragecekhistoryArray.sort();
var sortedArray2 = sortedArray2.reverse();  

var isibookhistory = '';
for (var ihistory = 0, lenhistory = sortedArray2.length; ihistory < lenhistory; ihistory++) {
	var keyval = sortedArray2[ihistory];
	if(keyval) {
		var keyval_idchordhistory = keyval.split(" ");
	if(parseInt(localStorage.getItem("countlastvisithistory")) == 100000000000) { localStorage.removeItem(keyval_idchordhistory[1]); }
	else if(startlimithistory > 20){ localStorage.removeItem(keyval_idchordhistory[1]); }
	startlimithistory++;
	}
}


/////////////SET AUTOSAVE HISTORY PAGE END

var halamanchordcccckey = "cccc" + tampilchord[idchord]['id'];
//////////////////////////////////////RUMUS BOOKMARK
$('#bookmarkya').click(function() {
	if (halamanchordcccckey in localStorage) {
		localStorage.removeItem(halamanchordcccckey);
		$('#bm1').show('slow');
		$('#bm2').hide('slow');
	} else {
		$('#bm1').hide('slow');
		$('#bm2').show('slow');
		localStorage.setItem(halamanchordcccckey, message);
	}
});

$(document).ready(function() {
	if (halamanchordcccckey in localStorage) {
		$('#bm1').hide('slow');
		$('#bm2').show('slow');
	} else {
		$('#bm1').show('slow');
		$('#bm2').hide('slow');
	}
});
//////////////////////////////////////RUMUS BOOKMARK END


/////////////////////////////////////////RUMUS TRANSPOSE
var match;
var chords = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'D#', 'E', 'F', 'Gb', 'G', 'G#', 'A', 'A#', 'B'];
var chordRegex = /C#|D#|F#|G#|A#|Db|Eb|Gb|Ab|Bb|C|D|E|F|G|A|B/g;

$('#transposeUp').click(function() {
	$('.chord').each(function() {
		var currentChord = $(this).html();
		var currentChord = currentChord.replace(/kr3s/g, "#");
		var output = "";
		var parts = currentChord.split(chordRegex);
		var index = 0;
		while (match = chordRegex.exec(currentChord)) {
			var chordIndex = chords.indexOf(match[0]);
			output += parts[index++] + chords[chordIndex + 1];
		};
		output += parts[index];
		output = output.replace(/Gb/g, "F#");
		output = output.replace(/Ab/g, "G#");
		output = output.replace(/Bb/g, "A#");
		output = output.replace(/Db/g, "C#");
		output = output.replace(/Eb/g, "D#");
		output = output.replace(/<img(.*?)#(.*?)>/g, '<img$1kr3s$2>');

		$(this).html(output);
	});
});

$('#transposeDown').click(function() {
	$('.chord').each(function() {
		var currentChord = $(this).html();
		var currentChord = currentChord.replace(/kr3s/g, "#");
		var output = "";
		var parts = currentChord.split(chordRegex);
		var index = 0;
		while (match = chordRegex.exec(currentChord)) {
			var chordIndex = chords.indexOf(match[0], 1);
			output += parts[index++] + chords[chordIndex - 1];
		}
		output += parts[index];
		output = output.replace(/Gb/g, "F#");
		output = output.replace(/Ab/g, "G#");
		output = output.replace(/Bb/g, "A#");
		output = output.replace(/Db/g, "C#");
		output = output.replace(/Eb/g, "D#");
		output = output.replace(/<img(.*?)#(.*?)>/g, '<img$1kr3s$2>');

		$(this).html(output);
	});
});
/////////////////////////////////////////RUMUS TRANSPOSE END

/////////////////////////////////////////RUMUS AUTO SCROLL
$(document).ready(function() {

	$('#box-links').click(function() {
		$('#box-links').hide('slow');
		$('#box-links-1').show('slow');
	});
	$('#box-links-1').click(function() {
		$('#box-links-1').hide('slow');
		$('#box-links').show('slow');
	});
	
$('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function(e){
 if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel"){
  $("html,body").stop(); $("#box-links-1").hide("slow");$("#box-links").show("slow");
 };
});

	if (!localStorage.getItem("scrl")) {
		localStorage.setItem("scrl", 10);
	}
	document.getElementById("xspeedscroll").value = parseInt(localStorage.getItem("scrl"));

	$('#box-links').click(function() {
		var xspeedscroll = document.getElementById("xspeedscroll").value;
		if (xspeedscroll < 1 || xspeedscroll > 100) {
			var xspeedscroll = 10;
		}
		
		var $elem = $('body');
		var speed = (xspeedscroll * 10000 * 5);
		$('body,html').animate({
			scrollTop: $elem.height()
		}, speed, 'linear');
		
		return false;

	});
});

function scrlF(valscrl) {
	if (valscrl < 1 || valscrl > 100) {
		valscrl = 10;
	}
	localStorage.setItem("scrl", "" + valscrl + "");
}
/////////////////////////////////////////RUMUS AUTO SCROLL END

////////////////////////////////IMPLEMENTASI POIN
$(document).ready(function() {
var openfeaturetemp = '';
	if ((localStorage.getItem("deviceplatformOS") == "Android" && parseInt(localStorage.getItem("deviceVersionOS")) < 7) || localStorage.getItem("deviceAPPS_NAME") == 'KGANDROIDPRO') {} else {
if ((parseInt(localStorage.getItem("freeOneHourAccess_reward")) < parseInt(localStorage.getItem("tmnow_reward")) && parseInt(localStorage.getItem("freeOneHourAccess_reward")) > 1000)) {
		
			openfeaturetemp = "";
			if (localStorage.getItem("rewardedfound") == "LOADED") {
				if (sessionStorage.getItem("NGOFFLINE") != "NGOFFLINE") {
					openfeaturetemp = "yes";
				}
				$("#support .afterfirst,.first").append('<i style="font-size:8px;;color:#99ccff;" class="material-icons">group_work</i>');
			}
			if (parseInt(localStorage.getItem("rewardedpoints1"), 10) < 1 && openfeaturetemp != "yes") {
				$("#promokhususatas").append('<div class="aboutrewardpoint" style="z-index:2;clear:both;color:white;font-size:10px;text-align:left;background-color:#7799b8;padding:5px;position:fixed;top:4px;left:0px;border-radius: 0px 0px 10px 0px;border:solid 1px white;opacity:0.7;">My Point: 0 <i style="font-size:10px;;color:#99ccff;" class="material-icons">group_work</i><br><i style="font-size:8px;">Some Feature Locked! Please turn on your internet data<br>and watch reward ads to get more points!</i></div>');
				$("#tabletranspose").hide();
				$("#tabletransposehidden").show();
				$("#tablezoominouthidden").show();
				$("#transposeDown").hide();
				$("#transposeUp").hide();
				$("#bookmarkya").hide();
				$("#plustext").hide();
				$("#minustext").hide();
			} else {
				$("#promokhususatas").append('<div class="aboutrewardpoint" style="z-index:2;clear:both;color:white;font-size:10px;text-align:left;background-color:#7799b8;padding:5px;position:fixed;top:4px;left:0px;border-radius: 0px 0px 10px 0px;border:solid 1px white;opacity:0.7;">My Points: <span id="mypoints">' + localStorage.getItem('rewardedpoints1') + '</span> <i style="font-size:10px;;color:#99ccff;" class="material-icons">group_work</i></div>');
			} 
		
		function LIMITEDPOINZERO()
		{
			var oldrewardedpoints = parseInt(localStorage.getItem("rewardedpoints1"), 10);
			if(oldrewardedpoints < -1) {
			localStorage.setItem("rewardedpoints1", 0);
			$("#mypoints").empty();
			$("#mypoints").append("0"); 
				$("#tabletranspose").hide();
				$("#tabletransposehidden").show();
				$("#tablezoominouthidden").show();
				$("#transposeDown").hide();
				$("#transposeUp").hide();
				$("#bookmarkya").hide();
				$("#plustext").hide();
				$("#minustext").hide();
			}
		}
		
		$("#transposeDown").click(function() {
			var oldrewardedpoints = parseInt(localStorage.getItem("rewardedpoints1"), 10) - 1;
			localStorage.setItem("rewardedpoints1", oldrewardedpoints);
			$("#mypoints").empty(); $("#mypoints").append(oldrewardedpoints);
			LIMITEDPOINZERO();
		});
		$("#transposeUp").click(function() {
			var oldrewardedpoints = parseInt(localStorage.getItem("rewardedpoints1"), 10) - 1;
			localStorage.setItem("rewardedpoints1", oldrewardedpoints);
			$("#mypoints").empty(); $("#mypoints").append(oldrewardedpoints);
			LIMITEDPOINZERO();
		});
		$("#bm1").click(function() {
			var oldrewardedpoints = parseInt(localStorage.getItem("rewardedpoints1"), 10) - 1;
			localStorage.setItem("rewardedpoints1", oldrewardedpoints);
			$("#mypoints").empty(); $("#mypoints").append(oldrewardedpoints);
			LIMITEDPOINZERO();
		});
		$("#plustext").click(function() {
			var oldrewardedpoints = parseInt(localStorage.getItem("rewardedpoints1"), 10) - 1;
			localStorage.setItem("rewardedpoints1", oldrewardedpoints);
			$("#mypoints").empty(); $("#mypoints").append(oldrewardedpoints);
			LIMITEDPOINZERO();
		});
		$("#minustext").click(function() {
			var oldrewardedpoints = parseInt(localStorage.getItem("rewardedpoints1"), 10) - 1;
			localStorage.setItem("rewardedpoints1", oldrewardedpoints);
			$("#mypoints").empty(); $("#mypoints").append(oldrewardedpoints);
			LIMITEDPOINZERO();
		});
		$(".aboutrewardpoint").live("click", function() {
			alert("The reward points only compatible with the latest version!\n\nYou need 1 point for:\n* Searching of chord\n* Bookmark Chord\n* Chord Transposer\n* Zoom in/out\n* ADS BLOCK (5000 Points)\n\n(Limited Time Reward Points) You will get 200 points every showing video ads on Chord page area with the icon point. If your reward point = 0, Some feature will be locked by system.\n\nWHERE THE ADS?\nTransition ads loaded every 2 minute\nRewarded ads loaded every 5 minutes");
		});
		
		if (parseInt(localStorage.getItem("rewardedpoints1"), 10) < 0) {
			localStorage.setItem('rewardedpoints1', 0);
		}
}}
});
////////////////////////////////IMPLEMENTASI POIN END

