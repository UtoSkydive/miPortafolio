$(document).ready(function(){
	$.getJSON('js/lang.json',function(json){
		console.log(json)
		$('.translate').click(function(){
			let lang = $(this).attr('id');
			$('.lang').each(function(index,value){
				$(this).text(json[lang][$(this).attr('key')]);

			})//cierra each

		})
	})//cierra json

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});