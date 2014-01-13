jQuery(function($){
	$('.collapsable').children(':first-child')
	 .on('click', function(event){
	 	if (event.target != this) return;
	 	
		$(this).parent().toggleClass('hidden');
	 });
});

