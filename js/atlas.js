$(document).ready(function() {
	$.mobile.changePage("pages/login.html", { transition: "fade"});
});

$('#butonhome').live('click',function(){
	$.mobile.changePage("login.html", { transition: "fade"});
});

