$(document).ready(function()
{
	$('.MenuIcon').click(function()
	{
		$('.navigate').toggle().addClass('open');
	});
	$('.navigate > .menu-item-has-children').each(function()
	{
		$(this).prepend('<span class="touch"></span>');

		$(this).find('> span').click(function() {
			$(this).parent().find('> ul').toggle();
		});
	});
	$('.sub-menu .sub-menu').each(function()
	{
		$(this).parents('li').addClass('miniChild');
	});
	$width = $( document ).width();
	if($width>800)
	{
		$('.sub-menu .menu-item-has-children a').hover(function()
		{
			$(this).closest('.item-with-ul').find('ul').toggle();

		});	
	 }
	$('.sub-menu .menu-item-has-children').each(function()
	{
		$(this).prepend('<span class="plus"></span>');
	});

	$('.sub-menu .menu-item-has-children').each(function()
	{
		$(this).find('> span').click(function() {
			$(this).parent().find('> ul').toggle();
		});
	});
});



