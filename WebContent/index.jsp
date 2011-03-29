<%@page import="ch.ethz.globis.web.facebook.Config"%>
<html>
	<head>
		<style type="text/css">
			* {
				font-family: Arial;
			}
		</style>
		<title></title>
	</head>
	<body>
		<div style="width: 71%">
			<h1>Welcome to your own Facebook application!</h1>

			
			<p>Please click the following button to login with your Facebook account.</p>
	
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

			<fb:login-button></fb:login-button>
		</div>
	</body>
</html>