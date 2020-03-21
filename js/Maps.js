jQuery('document').ready(function() {

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

	function mapSize(){
	$("#svgMap").outerWidth($("#mapImage").width() * 1.0315);
	$("#svgMap").outerHeight($("#mapImage").height() * 1.0315);
	}
	$(window).on('resize',mapSize);
	mapSize();
});
	