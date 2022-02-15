$(document).ready(function(){
						   
	$('div span').attr('class','next');

	$('div span').attr('id', function(index){return 'next'+index});

	$('p').toggleClass('z');

	$('p').click(function(){
		if($(this).hasClass('a'))
				{
				alert('у него класс A!');
				$(this).removeClass('a').addClass('z')
				}
		else(alert('мы его не нашли!'));
});

$('input:text').val('xxx')

$('input:submit').val('xxx')

alert($('input:submit').val())

$('input:checkbox').val(['ie','opera'])

});
