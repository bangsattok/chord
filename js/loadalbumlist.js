
$(document).ready(function(){

$('body').append('<div class="homehome"> <a href="index.html"><span class="first"> Home </span></a> <a id="support" href="band.html#'+okehash[0]+'"><span class="afterfirst"> << Back </span></a></div><div class="backback"> </div> <div class="exitexit"> <a id="support" href="#"><h4 class="tombolkananbawah" onclick="exitFromApp()"> EXIT!  </h4></a></div>');
$('head').append("<title>ALBUM - "+decodeURIComponent(okehash[2])+"</title>");

var textpret = "";
for (i = 0; i < dataalbumlist.length; i++) { 
if(dataalbumlist[i].id_band == okehash[1]) {
    textpret += "<a id=\""+ dataalbumlist[i].id +"\" href=\"chord.html#"+ dataalbumlist[i].id +"\"><h4 id=\"col"+ dataalbumlist[i].id +"\">"+ dataalbumlist[i].judul + "</h4></a>";
}};
document.getElementById("hasillist").innerHTML = textpret;
});


$(document).ready(function(){
		if (sessionStorage.getItem("refpage") != "kosong") {
				$.scrollTo($('#'+sessionStorage.getItem("refpage")+''), 1000);
				var col=document.getElementById("col"+sessionStorage.getItem("refpage")); col.style.color="orange"; };
				sessionStorage.setItem("refpage", okehash[1]); 

		});
		
		
var message='Album - '+decodeURIComponent(okehash[2])+'';
