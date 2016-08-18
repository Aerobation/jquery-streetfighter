$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
	.mousedown(function() {
  		playHadouken();
  		$('.ryu-ready').hide();
  		$('.ryu-throwing').show();
  		$('.hadouken').finish().show()
  		.animate(
    		{'left': '1020px'},
    		500,
    		function() {
      			$(this).hide();
      			$(this).css('left', '520px');
    		}
  		);
	})
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  })
});

$(document).ready(function() {
  $('.hulk-ryu').mouseenter(function() {
    $('.hulk-ryu-still').hide();
    $('.hulk-ryu-ready').show();
  })
  .mouseleave(function() {
    $('.hulk-ryu-ready').hide();
    $('.hulk-ryu-still').show();
  })
	/* $('.hulk-ryu').keydown(function(event) {
		console.log(event);
  		if (event.which == 120) {
  		playHadouken();
  		$('.hulk-ryu-ready').hide();
  		$('.hulk-ryu-throwing').show();
  		$('.hulk-hadouken').finish().show()
  		.animate(
    		{'right': '520px'},
    		500,
    		function() {
      			$(this).hide();
      			$(this).css('right', '1020px');
    		}
  		);
  		}
	}) */
  .mouseup(function() {
    $('.hulk-ryu-throwing').hide();
    $('.hulk-ryu-ready').show();
  })
});

  function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

$(document).ready(function() {
       $("body").keydown(function(event)
       {
       	if (event.which == 120) {
         console.log(event);
        playHadouken();
  		$('.hulk-ryu-ready').hide();
  		$('.hulk-ryu-throwing').show();
  		$('.hulk-hadouken').finish().show()
  			.animate(
    			{'right': '520px'},
    			500,
    			function() {
      				$(this).hide();
      				$(this).css('right', '1020px');
    			}
  			);
        }
       });

	   $("body").keyup(function(event)
       {
       	console.log(event);
       	if (event.which == 120) {
        playHadouken();
        $('.hulk-ryu-throwing').hide();
  		$('.hulk-ryu-ready').show();
  		$('.hulk-hadouken').finish().show()
  			.animate(
    			{'right': '520px'},
    			500,
    			function() {
      				$(this).hide();
      				$(this).css('right', '1020px');
    			}
  			);
        }
       })
});