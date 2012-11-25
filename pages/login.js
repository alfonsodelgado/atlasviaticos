$('#pagelogin').live('pageshow',function(){

});

$('#butonlogear').live('click',function(){
	$.mobile.changePage("registrarservicio.html", { transition: "flip"});
});