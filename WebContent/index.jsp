<%@page import="ch.ethz.globis.web.facebook.Config"%>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="./css/facebook.css" />
		<title>FFFRIENDS</title>
	</head>
	<body>
		<div class = "content">
			<div class = "header">FFFRIENDS</div>
			<div class = "chooser">
				<div class = "arrow" id="leftarrow"><a id="left" href="#left">&lt;</a></div>
				<div class = "grid" id = "grid">
					<div class="login">
					<div id="fb-root">
						<script src="http://connect.facebook.net/en_US/all.js"></script>
						<script>
						    var appId = "<%= Config.getValue("APP_ID") %>";
						    if (appId == "" || appId == "!APP_ID!") {
						    	alert("You need to set your Application ID/API_KEY in config.properties.")
						    } else {
								FB.init({appId: appId, cookie: false, logging: false, status: true, xfbml: true});
								FB.Event.subscribe('auth.sessionChange', function(response) {
									if (response.session) {
										if (response.session.access_token) {
											var redirectUrl = '<%= Config.getValue("FRIENDS_URL") %>?access_token=' + response.session.access_token;
											window.location = redirectUrl;
										} else {
											alert('Error: No access token.');
										}
									} else {
										// The user has logged out, and the cookie has been cleared
									}
								  });
							}
						</script>
					</div>
					<fb:login-button perms="friends_birthday,friends_events,friends_groups,friends_hometown,friends_location,friends_online_presence,friends_relationships,friends_relationship_details,friends_status, friends_religion_politics"></fb:login-button>
					</div>
				</div>
				<div class = "arrow" id="rightarrow"><a id="right" href="#right">&gt;</a></div>
			</div>
		</div>
	</body>
</html>