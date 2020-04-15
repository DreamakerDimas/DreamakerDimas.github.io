jQuery('document').ready(function() {
let mapMultCoef = 1.0;
let mapSizeCounter = 0;

$(".NavButton")
	.each(function(i) {
		if (i != 0)
		{
			$("#ButtAudio")
			.clone()
			.attr("id", "ButtAudio-" + i)
			.appendTo($(this).parent());
		}
		$(this).data("ButtSound", i);
	})
	.mouseenter(function() {
		$("#ButtAudio-" + $(this).data("ButtSound"))[0].play();
	});
	$("#ButtAudio").attr("id", "ButtAudio-0");


$('.Country').hover(
		function() {
			$('.description').html($(this).attr('description-data'));
			$('.description').fadeIn(10);
		},

		function() {
			$('.description').fadeOut(15);
		}
	)
;
	mapSize();

	function mapSizeChange (isZoomIn){
    	if(isZoomIn === true && mapSizeCounter < 9){
    		mapMultCoef += 0.2;
    		mapSizeCounter++;
		}
    	else if(isZoomIn === false && mapSizeCounter > -1){
    		mapMultCoef -= 0.2;
			mapSizeCounter--;
    	}
    	else{
    		return 0;
		}
        console.log('Coef' + mapMultCoef);
    	mapSize();
    	mapMultCoef = 1.0;
    }

    
	function mapSize(){

		$("#svgMap").outerWidth($("#mapImage").width() * 1.0315 * mapMultCoef);
		$("#svgMap").outerHeight($("#mapImage").height() * 1.0315 * mapMultCoef);
		$('#mapImage').outerWidth($('#mapImage').width()*mapMultCoef);
		$('#mapImage').outerHeight($('#mapImage').height()*mapMultCoef);
		$('#maps1').outerHeight($('#maps1').width());
		console.log('Multy=' + mapMultCoef);

		return 0;
	}

	$(window).on('resize',mapSize);


	document.getElementById("mapSizePlus").addEventListener('click', function(){mapSizeChange(true);});
	document.getElementById("mapSizeMinus").addEventListener('click', function(){mapSizeChange(false);});

});


