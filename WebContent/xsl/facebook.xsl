<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fb="http://api.facebook.com/1.0/">

	<xsl:template match="/">
		<html>
			<head>
				<title>FFFRIENDS</title>
				<link rel="stylesheet" type="text/css" href="../css/facebook.css" />
				<script src="../js/jquery.js"></script>
				<script src="../js/jquery-ui.js"></script>
				<script src="../js/ajax.js"></script>
				<script src="../js/friends.js"></script>
			</head>
			<body>
			<script>
				function setNoFriends(friends) {
					setFriends(friends);
				}
				setNoFriends(<xsl:value-of select="count(//user)"/>);
			</script>
				<div class = "content">
					<div class = "header">FFFRIENDS</div>
					<div class = "chooser">
						<div class = "arrow" id="leftarrow"><a id="left" href="#left">&lt;</a></div>
						<div class = "grid" id = "grid">
							<div id = "slideable0" class="slideable">
								<table class = "grid" id = "thumbnailTable0">
								<tr>
								<xsl:for-each select="*/user">
									<xsl:if test = "7 > position()">
										<td>
											<xsl:attribute name="id">
											<xsl:value-of select="uid"/>
											</xsl:attribute>
											<div class = "thumbnail">
											<xsl:attribute name="id">
											<xsl:value-of select="uid"/>
											</xsl:attribute>
											<a>
												<xsl:attribute name="class">thumbnail</xsl:attribute>
												<xsl:attribute name="href">#<xsl:value-of select="uid"/></xsl:attribute>
												<img>
													<xsl:attribute name="src">
										      			<xsl:value-of select="pic_square" />
										      		</xsl:attribute>
										      		<xsl:attribute name="id">
										      			<xsl:value-of select="uid" />
										      		</xsl:attribute>
												</img>
											</a>
											</div>
										</td>
									</xsl:if>
								</xsl:for-each>
								</tr>
								<tr>
								<xsl:for-each select="*/user">
									<xsl:if test = "position() >= 7 and 13 > position()">
										<td>
											<xsl:attribute name="id">
											<xsl:value-of select="uid"/>
											</xsl:attribute>
											<div class = "thumbnail">
											<xsl:attribute name="id">
											<xsl:value-of select="uid"/>
											</xsl:attribute>
											<a>
												<xsl:attribute name="class">thumbnail</xsl:attribute>
												<xsl:attribute name="href">#<xsl:value-of select="uid"/></xsl:attribute>
												<img>
													<xsl:attribute name="src">
										      			<xsl:value-of select="pic_square" />
										      		</xsl:attribute>
										      		<xsl:attribute name="id">
										      			<xsl:value-of select="uid" />
										      		</xsl:attribute>
												</img>
											</a>
											</div>
										</td>
									</xsl:if>
								</xsl:for-each>
								</tr>
								<tr>
								<xsl:for-each select="*/user">
									<xsl:if test = "position() >= 13 and 19 > position()">
										<td>
											<xsl:attribute name="id">
											<xsl:value-of select="uid"/>
											</xsl:attribute>
											<div class = "thumbnail">
											<xsl:attribute name="id">
											<xsl:value-of select="uid"/>
											</xsl:attribute>
											<a>
												<xsl:attribute name="class">thumbnail</xsl:attribute>
												<xsl:attribute name="href">#<xsl:value-of select="uid"/></xsl:attribute>
												<img>
													<xsl:attribute name="src">
										      			<xsl:value-of select="pic_square" />
										      		</xsl:attribute>
										      		<xsl:attribute name="id">
										      			<xsl:value-of select="uid" />
										      		</xsl:attribute>
												</img>
											</a>
											</div>
										</td>
									</xsl:if>
								</xsl:for-each>
								</tr>
								</table>
							</div>
						</div>
						<div class = "arrow" id="rightarrow"><a id="right" href="#right">&gt;</a></div>
					</div>
					<div id = "detail">Drag a fffriend here!</div>
					
				</div>
			</body>
			<script>
			var i = 0;
			<xsl:for-each select="*/user">
			names["<xsl:value-of select='uid'/>"] = "<xsl:value-of select="name"/>";
			pics[i] = "<xsl:value-of select="pic_square"/>";
			uid[i] = "<xsl:value-of select="uid"/>";
			i++;
			refreshArrows();
			</xsl:for-each>
			</script>
		</html>
	</xsl:template>
</xsl:stylesheet>
