//
var names = new Array();

var lastHover = 0;


$(document).ready(function() {
	$("div.thumbnail").live("click", function() {
		selectName($(this).attr('id'));
	   });
	$("div.thumbnail").live("mouseenter", function() {
		if(lastHover != $(this).attr('id')) {
			$("td#" + $(this).attr('id') + " div img").addClass("hovered");
			if(lastHover != 0) {
				$("td#" + lastHover + " div img").removeClass("hovered");
			}
			lastHover = $(this).attr('id');
		}
	});
	
	$("div.thumbnail").draggable({
		revert: "invalid",
		containment: "div.content",
		helper: "clone",
		opacity: 0.5,
		zIndex: 10000
	});
	
	$("div.detail").droppable( {
		accept: "div.thumbnail",
		activeClass: "details-droppable",
		drop: function( event, ui ) {
			selectName(ui.draggable.clone().attr('id'));
			//$("div.detail").
		}
	});
});

var lastClick = 0;

function selectName(id) {
	if(lastClick != id) {
		$("div.detail").text(names[id]);
		$("td#" + id + " div img").addClass("selected");
		$("td#" + id + " div").addClass("selected");
		$("td#" + id + " div img").removeClass("hovered");
		
		if(lastClick != 0) {
			$("td#" + lastClick + " div img").removeClass("selected");
			$("td#" + lastClick + " div").removeClass("selected");
	
		}
		lastClick = id;
	}
}