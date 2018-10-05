$(function(){
	$('li, #summary').click(function() {
	  let text = prompt('Change value to what?', $(this).text().trim());
	  if (text !== "" && text !== undefined && text !== null ) $(this).text(text);
	});
});