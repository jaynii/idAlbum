function loadApp() {

	$('.flipbook .double').scissor();

	// Create the flipbook
        
        
        
	$('.flipbook').turn({
			// Elevation

			elevation: 50,
			
			// Enable gradients

			gradients: true,
			
			// Auto center this flipbook

			autoCenter: true

	});
			
  $('.children1 .double').scissor();			
  $('.children1').turn({
		    width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
	
	 $('.children2 .double').scissor();			
  $('.children2').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
			
	$('.children3 .double').scissor();			
  $('.children3').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
	
	 $('.children4 .double').scissor();			
  $('.children4').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
			
			
	 $('.children5 .double').scissor();			
  $('.children5').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
			
	
	$('.daily1 .double').scissor();			
  $('.daily1').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
		
	
	$('.family1 .double').scissor();			
  $('.family1').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
	
	
	$('.family2 .double').scissor();			
  $('.family2').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
	
	$('.family3 .double').scissor();			
  $('.family3').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
	
	
		$('.graduate1 .double').scissor();			
      $('.graduate1').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});		
	
	$('.graduate2 .double').scissor();			
      $('.graduate2').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});	
	
	$('.graduate3 .double').scissor();			
      $('.graduate3').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});	
	
	$('.love1 .double').scissor();			
      $('.love1').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
	
	$('.love2 .double').scissor();			
      $('.love2').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
	
	$('.love3 .double').scissor();			
      $('.love3').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true
			
		});
			
$('.party1 .double').scissor();			
      $('.party1').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
	
	$('.party2 .double').scissor();			
      $('.party2').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
	



		$('.pet1 .double').scissor();			
      $('.pet1').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
	
	$('.pet2 .double').scissor();			
      $('.pet2').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
	
	
		$('.travel1 .double').scissor();			
      $('.travel1').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
	
	$('.travel2 .double').scissor();			
      $('.travel2').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
	
	$('.travel3 .double').scissor();			
      $('.travel3').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
	

	
		$('.weeding1 .double').scissor();			
      $('.weeding1').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
	$('.weeding2 .double').scissor();			
      $('.weeding2').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});
	$('.weeding3 .double').scissor();			
      $('.weeding3').turn({
		   width:800,
			height:400,
			elevation: 50,
			gradients: true,
			autoCenter: true

	});

	
			
	
}

// Load the HTML4 version if there's not CSS transform

yepnope({
	test : Modernizr.csstransforms,
	yep: ['lib/turn.min.js'],
	nope: ['lib/turn.html4.min.js'],
	both: ['lib/scissor.min.js', 'style.css'],
	complete: loadApp
});