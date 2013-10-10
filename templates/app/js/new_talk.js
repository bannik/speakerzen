jQuery(document).ready(function($) {

	$("#ok").on('click', function () {
		var talk_title=$("#talk_title").val();
		// $("#questions :input")
		var question_title=$("#question_title").val();
		var question_type=0;
		$.ajax({
			url: 'http://83.212.125.48/speakerzen/set_talk.php',
			type: 'POST',
			dataType: 'JSON',
			data: {talk_title:talk_title, question_title:question_title, question_type:"0"},
		})
		.done(function() {
			alert("success bitches");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});

	});
	$("#add_question").on('click', function () {
		$("#questions").append('<input type="text" placeholder="Do you like bacon?"></input>');
	});
});
