
$(document).on('mouseover', '#product .card', function(e) {
	$('.pointer-effect').css('visibility', 'visible')
	$('.pointer-effect').css('left', (e.clientX - 10) + 'px')
	$('.pointer-effect').css('top', (e.clientY - 10) + 'px')
})

$(document).on('mouseout', '#product .card', function(e) {
	$('.pointer-effect').css('visibility', 'hidden')
	$('.pointer-effect').css('left', '0px')
	$('.pointer-effect').css('top', '0px')
})
