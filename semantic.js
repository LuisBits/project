$(function () {
    $('.ui.secondary.ui.menu.navbar a.item').on('click', function () {
        
        $('.ui.secondary.ui.menu.navbar a.item').removeClass('active');
        $(this).addClass('active');
    });
    
    
    // Des-oculto menú plegado en vertical.
    $('.right.menu.open').on("click", function(e){
        e.preventDefault();
		$('.ui.vertical.menu').toggle();
	});
        
	$('.ui.dropdown').dropdown();

})