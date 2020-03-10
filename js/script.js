jQuery('document').ready(function() {
var DispFlag = false;
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

});


