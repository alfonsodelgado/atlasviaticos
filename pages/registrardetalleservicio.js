$('#pageregistrardetalleservicio').live('pageshow',function(){

});

$('#butonregistrardetalleservicio').live('click',function(){
	$.mobile.changePage("registrardetalleservicio.html", { transition: "flip"});
});

$('#butonfinalizardetalleservicio').live('click',function(){
	$.mobile.changePage("finalizarservicio.html", { transition: "pop"});
});

	