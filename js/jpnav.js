$(document).ready(function()
{
	$('.MenuIcon').click(function()
	{
		$('.jpMenu').toggle().addClass('open');
	});
	$('.jpMenu > .menu-item-has-children').each(function()
	{
		$(this).prepend('<span class="touch"></span>');

		$(this).find('> span').click(function() {
			$(this).parent().find('> ul').toggle();
		});
	});
});