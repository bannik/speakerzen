$(document).ready(function($) {

	var uid=1;
		var tid=1;
		function get_Answers(qid,count){
		    	$.ajax({
				url: 'http://83.212.125.48/speakerzen/get_answers.php',
				type: 'GET',
				dataType: 'JSON',
				data:{qid:qid}
			})
			.done(function(data) {
				var x=parseInt(data["yes"]);
				var y=parseInt(data["no"]);
				avg=x+y;
				if(x>y){
					percent=(x/avg)*100;

					$('#chartin'+count).css({
                    				height: percent+"%"
                    			});

					$('#chartin'+count).html(Math.floor(percent)+"%");
				}
				else if(y>x){
					percent=(y/avg)*100;
					$('#chartin'+count).css({
                    				height: percent+"%",
                    				'background-color':'#e05d5d'
                    			});
					$('#chartout'+count).css({
                    				'border-color':'#e05d5d'
                    			});
					$('#chartin'+count).html(Math.floor(percent)+"%");

				}
				else
				{

					$('#chartin'+count).css({
                    				height: "50%",
                    				'background-color':'#19acca'
                    			});
					$('#chartout'+count).css({
                    				'border-color':'#19acca'
                    			});
					$('#chartin'+count).html("50%");
				}

	        })
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
		}
		function get_Talks(){
		    	$.ajax({
				url: 'http://83.212.125.48/speakerzen/get_talks.php',
				type: 'GET',
				dataType: 'JSON',
				data:{uid:uid}
			})
			.done(function(data) {
				$('#accordion2').html('');
	                  	for (i in data)
							{
								if (data.hasOwnProperty(i))
								{
	                    			$("#accordion2").prepend('<div class="accordion-group"><div class="accordion-heading"><a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapse'+i+'">'+data[i]["talks_title"]+'</a></div><div id="collapse'+i+'" class="accordion-body collapse" style="height: 0px;"><div class="accordion-inner" ><ul id="question'+i+'"><a href="#"><li><div class="span8"><p>Do you like bacon?</p></div><div class="span3"><div class="chartout"><div class="chartin">70%</div></div></div></li></a><a href="#"><li><div class="span8"><p id="qesttitle">Do you like bacon?</p></div><div class="span3"><div class="chartout"><div class="chartin">70%</div></div></div></li></a><a href="#"><li><div class="span8"><p>Do you like bacon?</p></div><div class="span3"><div class="chartout"><div class="chartin">70%</div></div></div></li></a></ul></div></div></div>');
	                    				get_Questions(tid,i);
	                    				tid++;
								}
	                    	}
	                    })
		}
		function get_Questions(talk_id,count_qid){
		    	$.ajax({
				url: 'http://83.212.125.48/speakerzen/get_questions.php',
				type: 'GET',
				dataType: 'JSON',
				data:{tid:talk_id}
			})
			.done(function(data) {
				$("#question"+count_qid).html('');
                    	for (i in data)
						{
							if (data.hasOwnProperty(i))
							{
                    			$("#question"+count_qid).append('<a href="#"><li><div class="span8"><p>'+data[i]["question_title"]+'</p></div><div class="span3"><div class="chartout" id="chartout'+talk_id+i+'"><div class="chartin" id="chartin'+talk_id+i+'">80%</div></div></div></li></a>');
                    			get_Answers(data[i]['question_id'],talk_id+i);
							}
                    	}

                	})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
		}
		get_Talks();
});
