//
var names = new Array();

var lastText = null;
var lastId = 0;


$(document).ready(function() {
	$("div#slideable table td").live("click", function() {
		$("div.detail").text(names[$(this).attr('id')]);
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
		opacity: 0.5
	});
	
	$("div.detail").droppable( {
		accept: "div.thumbnail",
		activeClass: "details-droppable",
		drop: function( event, ui ) {
			$("div.detail").text(names[ui.draggable.clone().attr('id')]);
			//$("div.detail").
		}
	});
 });