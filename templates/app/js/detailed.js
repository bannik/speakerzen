jQuery(document).ready(function($) {
	function getURLParameter(name) {
	  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
	}

	var qid = getURLParameter('qid');

	$.ajax({
		url: 'http://83.212.125.48/speakerzen/get_answers.php',
		type: 'GET',
		dataType: 'json',
		data: {qid: qid},
	})
	.done(function(data) {
		var x=parseInt(data["yes"]);
		var y=parseInt(data["no"]);
			avg=x+y;
			if(x>y){
				percent=(x/avg)*100;
					$('.chartyesin').css({
                   				height: percent+"%"
                   			});
					percent=100-percent;
					$('.chartnoin').css({
                   				height: percent+"%"
                   			});

			}
			if(y>x){
				percent=(y/avg)*100;
					$('.chartyesin').css({
                   				height: percent+"%"
                   			});
					percent=100-percent;
					$('.chartnoin').css({
                   				height: percent+"%"
                   			});

			}
			if(y==x){

					$('.chartyesin').css({
                   				height: "50%"
                   			});
					$('.chartnoin').css({
                   				height: "50%"
                   			});

			}
			$(".boxlatest > .left").html("<p class='yes_p'>Yes</p><p class='no_p'>No</p>");
			$(".boxlatest > .right").html("<p>"+data['yes']+"</p><p>"+data['no']+"</p>");

	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

});
