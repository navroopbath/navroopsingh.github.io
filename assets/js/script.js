$(document).ready(function(){
	
	$('#contact').click(function() {
		$('#modal-container').fadeIn();
        $('nav').addClass('hide-nav');
	});

    $('#close').click(function() {
		$('#modal-container').hide();
        $('nav').removeClass('hide-nav');
	});
	
	$('#modal-overlay').click(function () {
		$('#modal-container').hide();
        $('nav').removeClass('hide-nav');
	});
    
    $('li').hover(function() {
        $(this).addClass('.hover');
    });
});