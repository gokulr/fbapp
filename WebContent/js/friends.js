//
var names = new Array();

var lastText = null;
var lastId = 0;


$(document).ready(function() {
	$("div.thumbnail").live("click", function() {
		selectName($(this).attr('id'));
	   });
	/*$("a.thumbnail").live("mouseenter", function() {
		if(lastId != 0) {
			$("td#" + lastId).empty().html(lastText);
		}
		lastId = $(this).attr('id');
		lastText = $("td#" + $(this).attr('id')).html();
		$("td#" + $(this).attr('id')).empty().html("<div class='name'>" + names[$(this).attr('id')].split(" ", 1) + "</div>");
	});*/
	
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

function selectName(id) {
	if(lastId != id) {
		$("div.detail").text(names[id]);
		$("td#" + id + " div img").addClass("selected");
		$("td#" + id + " div").addClass("selected");
		
		if(lastId != 0) {
			$("td#" + lastId + " div img").removeClass("selected");
			$("td#" + lastId + " div").removeClass("selected");
	
		}
		lastId = id;
	}
}