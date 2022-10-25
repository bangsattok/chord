/////////////////////////PROMO HALAMAN LIST KHUSUSBAWAH
$(document).ready(function() {
if (localStorage.getItem('advertiselist') && localStorage.getItem("deviceAPPS_NAME") != 'KGANDROIDPRO' && parseInt(localStorage.getItem("freeOneHourAccess_reward")) < parseInt(localStorage.getItem("tmnow_reward")) && parseInt(localStorage.getItem("freeOneHourAccess_reward")) > 1000) {
	$('#promokhususbawah').append(localStorage.getItem('advertiselist'));
} });