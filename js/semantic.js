$(function () {
    $('a.item.navbar').on('click', function () {
        
        $('a.item.navbar').removeClass('active');
        $(this).addClass('active');
    });
    
    
    // Des-oculto menú plegado en vertical.
    $('.right.menu.open').on("click", function(e){
        e.preventDefault();
		$('.ui.vertical.menu').toggle();
	});
        
	$('.ui.dropdown').dropdown();
    
    $('.ui.cards .card').dimmer({
    on: 'hover'
  })
;

})