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

function displayUser(user) {	
	if (expandedId !=0){
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
	resultNode.appendChild(table);
}