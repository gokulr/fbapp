var expandedId=0;
function submitValue(uid){

	var xmlHttp = new XMLHttpRequest();

	xmlHttp.open("POST", "/facebook/servlet/friendsdetail", true);
	xmlHttp.onreadystatechange=function(){
		    if(xmlHttp.readyState==4)
		    {
		        if (xmlHttp.readyState == 4) {
					if (xmlHttp.status == 200) {
					  	var user =  xmlHttp.responseXML.getElementsByTagName("user")[0];
					  	displayUser(user);
					} else {
						alert("Error: status not 200")
					}
		      }
    	}	

	}
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

	xmlHttp.send("user=" + uid);
}

function trim(str){
	return str.replace(/^\s*/, "").replace(/\s*$/, "");
}

function displayUser(user) {
	var uid = user.getElementsByTagName("uid")[0].firstChild.nodeValue;
	var name = names[uid];
	
	var html = "";
	var pic_big = user.getElementsByTagName("pic_big")[0].firstChild.nodeValue;

	html += "<img class='profile' src='" + pic_big + "'>";
	
	html += "<span class='name'>" + name + "</span>";

	var online_presence = user.getElementsByTagName("online_presence")[0].firstChild;
	if(online_presence != null && online_presence.nodeValue != "error" && trim(online_presence.nodeValue) != ""){
		if(online_presence.nodeValue.toLowerCase() == "offline") {
			html += "<img src='../imgs/red.png'/ class='status'>";
		} else {
			html += "<img src='../imgs/green.png'/ class='status'>";			
		}
	}
	
	var status = user.getElementsByTagName("status")[0].firstChild;
	if(status != null){
		if(trim(status.nodeValue) != ""){
			html += "<br/>" + status.nodeValue;
		}
	}
	//alert(status);//birthday, hometown_location, current_location, online_presence, relationship_status, status
	var birthday = user.getElementsByTagName("birthday")[0].firstChild
	if(birthday != null && trim(birthday.nodeValue) != ""){
		html += "<br/>" + birthday.nodeValue;
	}
	var relationship_status = user.getElementsByTagName("relationship_status")[0].firstChild;
	if(relationship_status != null && trim(relationship_status.nodeValue)!=""){
		html += "<br/>" + relationship_status.nodeValue;
	}
	var political_views = user.getElementsByTagName("political")[0].firstChild;
	if(political_views != null && trim(political_views.nodeValue)!=""){
		html += "<br/>" + political_views.nodeValue;
	}
	$("div#detail").html(html);//name + "<br/>" + status + "<table><tr><td>hello</td><td>as</td></tr><tr><td>asd</td></tr></table>");
	/*if (expandedId !=0){
		var tableNodes = document.getElementsByTagName("table");
		for (i = 0; i < tableNodes.length; i++) {
			tableNode = tableNodes.item(i);
			if (tableNode.getAttribute("uid") == expandedId) {
				parentNode = tableNode.parentNode;
				parentNode.removeChild(tableNode);
			} 
		}
	}
	 
	var uidNode = user.getElementsByTagName("uid")[0];
	var uid = uidNode.firstChild.nodeValue;
	expandedId = uid;
	
	var fields = new Array();

	fields["Gender:"] = user.getElementsByTagName("sex")[0];
	fields["Friends:"] = user.getElementsByTagName("friends")[0];
	
	var table = document.createElement("table");
	var tbody = document.createElement("tbody");
	table.appendChild(tbody);
	
	var tableAttr = document.createAttribute("uid");
	tableAttr.nodeValue=uid;
	table.setAttributeNode(tableAttr);
	
	for (var i in fields){
		
		var tr = document.createElement("tr");
		var tdName = document.createElement("td");
		tdName.className = "ajaxResponse";
		tdName.appendChild(document.createTextNode(i));
		tr.appendChild(tdName);
		
		var tdValue = document.createElement("td");
		tdValue.className = "ajaxResponse";
		var text = "-";
		if (fields[i] && fields[i].childNodes.length > 0) {
			text = fields[i].firstChild.nodeValue;
		}
		tdValue.appendChild(document.createTextNode(text));
			
		tr.appendChild(tdValue);
		tbody.appendChild(tr);
	}
	
	var resultNode = document.getElementById(uid);
	resultNode.appendChild(table);*/
}