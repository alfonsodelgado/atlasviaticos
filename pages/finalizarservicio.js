$('#pagefinalizarservicio').live('pageshow',function(){
	
});

$('#butonfinalizarservicio').live('click',function(){
	$.mobile.changePage("registrarservicio.html", { transition: "slidedown"});
});
