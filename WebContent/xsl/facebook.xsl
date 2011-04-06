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
				<div class = "content">
					<div class = "header">FFFRIENDS</div>
					<div class = "chooser">
						<div class = "arrow" id="leftarrow"><a id="left" href="#left">&lt;</a></div>
						<div class = "grid" id = "grid">
							<div id = "slideable">
								<table class = "grid">
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
												<xsl:attribute name="id">
												<xsl:value-of select="uid"/>
												</xsl:attribute>
												<xsl:attribute name="class">thumbnail</xsl:attribute>
												<xsl:attribute name="href">#<xsl:value-of select="uid"/></xsl:attribute>
												<xsl:apply-templates select="pic_square" />
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
												<xsl:attribute name="id">
												<xsl:value-of select="uid"/>
												</xsl:attribute>
												<xsl:attribute name="class">thumbnail</xsl:attribute>
												<xsl:attribute name="href">#<xsl:value-of select="uid"/></xsl:attribute>
												<xsl:apply-templates select="pic_square" />
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
												<xsl:attribute name="id">
												<xsl:value-of select="uid"/>
												</xsl:attribute>
												<xsl:attribute name="class">thumbnail</xsl:attribute>
												<xsl:attribute name="href">#<xsl:value-of select="uid"/></xsl:attribute>
												<xsl:apply-templates select="pic_square" />
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
					<div class = "detail">Drag a fffriend here!</div>
				</div>
			</body>
			<script>
			<xsl:for-each select="*/user">names["<xsl:value-of select='uid'/>"] = "<xsl:value-of select="name"/>";</xsl:for-each>
			</script>
		</html>
	</xsl:template>
	
	<xsl:template match="pic_square">
		<img>
			<xsl:attribute name="src">
      			<xsl:value-of select="." />
      		</xsl:attribute>
		</img>
	</xsl:template>

</xsl:stylesheet>
