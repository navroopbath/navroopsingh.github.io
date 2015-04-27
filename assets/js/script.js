$(document).ready(function(){
	
	$('#contact').click(function() {
		$('#modal-container').fadeIn();
	});

    $('#submit').click(function() {
		$('#modal-container').hide();
	});
	
	$('#modal-overlay').click(function () {
		$('#modal-container').hide();
	});
});