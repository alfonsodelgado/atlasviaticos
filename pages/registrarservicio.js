$('#pageregistrarservicio').live('pageshow',function(){
	
});

$('#butonregistrarservicio').live('click',function(){
	$.mobile.changePage("registrardetalleservicio.html", { transition: "fade"});
});
