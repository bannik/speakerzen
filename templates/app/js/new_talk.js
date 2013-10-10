jQuery(document).ready(function($) {

	$("#ok").on('click', function () {
		alert($("#questions :input").serialize());
	});
	$("#add_question").on('click', function () {
		$("#questions").append('<input type="text" placeholder="Do you like bacon?"></input>');
	});
});
