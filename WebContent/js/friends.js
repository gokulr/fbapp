
var names = new Array();
var pics = new Array();
var uid = new Array();

var noPages = 0;
var pageNo = 0;
var i;

function setFriends(friends) {
	noPages = Math.ceil(friends/18);
}

var lastHover = 0;

function liveDraggable(selector, options){
	  jQuery(selector).live("mouseover",function(){
	    if (!jQuery(this).data("init")) {
	      	jQuery(this).data("init", true);
	      	jQuery(this).draggable(options);
	    }
	});
}

function refreshArrows() {
	$("div#leftarrow").html("<a id='left' href='#left'><span class='pointer'>&lt;</span>" + pageNo + "</a>");
	$("div#rightarrow").html("<a id='right' href='#right'>" + (noPages-(pageNo+1)) + "<span class='pointer'>&gt;</span></a>");

	if(pageNo == 0) {
		$("div#leftarrow a").addClass("greyed");
	} else {
		$("div#leftarrow a").removeClass("greyed");
	}
	
	if((noPages-(pageNo+1)) == 0) {
		$("div#rightarrow a").addClass("greyed");
	} else {
		$("div#rightarrow a").removeClass("greyed");
	}
}


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
	
	liveDraggable($("div.thumbnail"), {
		revert: "invalid",
		containment: "div.content",
		helper: "clone",
		opacity: 0.5,
		zIndex: 10000
	});
	
	$("div#detail").droppable( {
		accept: "div.thumbnail",
		activeClass: "details-droppable",
		drop: function( event, ui ) {
			selectName(ui.draggable.clone().attr('id'));
			//$("div.detail").
		}
	});
	
	
	$("div#leftarrow").live("click", function(){
		if(pageNo>0){
			if($('div#slideable' + pageNo+2).length != 0) {
				$('div#slideable' + pageNo+2).remove();
			}
			pageNo += -1;
			var table = "<div class='slideable left' id='slideable" + pageNo + "'><table id = 'thumbnailTable" + pageNo + "'>";
			for(i = pageNo*18; i< (pageNo*18)+18; ++i){		
				if(i%6==0){
					table+= "<tr>";
				}
				table+= "<td id="+uid[i]+"><div id=" + uid[i] + " class='thumbnail'>"+
					    "<a id="+uid[i]+" class='thumbnail' href='#"+uid[i]+"'>"+
					    "<img src="+pics[i]+" /></a></div></td>";
				if((i+1)%6==0){
					table+= "</tr>";
				}
			}
			table+= "</table></div>";
			$("div#grid").html($("div#grid").html() + table);
			$("div#grid").addClass("hider");
			$("div#slideable" + pageNo).animate({"left": "0px"}, "slow");
			$("div#slideable" + (pageNo+1)).animate({"left": "500px"}, "slow", function() {
				$("div#slideable" + (pageNo+1)).remove();
				$("div#grid").removeClass("hider");
			});
			refreshArrows();
		}
	});	
	
	$("div#rightarrow").live("click", function(){
		if(pageNo+1<noPages){
			if($('div#slideable' + pageNo-2).length != 0) {
				$('div#slideable' + pageNo-2).remove();
			}
			pageNo += 1;
			var table = "<div class='slideable right' id='slideable" + pageNo + "'><table id = 'thumbnailTable" + pageNo + "'>";
			for(i = pageNo*18; i< (pageNo*18)+18; ++i){		
				if(i%6==0){
					table+= "<tr>";
				}
				if(uid[i]) {
					table+= "<td id="+uid[i]+"><div id=" + uid[i] + " class='thumbnail'>"+
						    "<a id="+uid[i]+" class='thumbnail' href='#"+uid[i]+"'>"+
						    "<img src="+pics[i]+" /></a></div></td>";
					if((i+1)%6==0){
						table+= "</tr>";
					}
				} else {
					table += "<td></td>";
				}
			}
			table+= "</table></div>";
			
			$("div#grid").html($("div#grid").html() + table);
			$("div#grid").addClass("hider");
			$("div#slideable" + pageNo).animate({"left": "0px"}, "slow");
			$("div#slideable" + (pageNo-1)).animate({"left": "-500px"}, "slow", function() {
				$("div#slideable" + (pageNo-1)).remove();
				$("div#grid").removeClass("hider");
			});
			
			refreshArrows();
		}
	});
	
});

var lastClick = 0;

function selectName(id) {
	if(lastClick != id) {
		submitValue(id);
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