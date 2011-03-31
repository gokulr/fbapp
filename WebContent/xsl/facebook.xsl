<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fb="http://api.facebook.com/1.0/">

	<xsl:template match="/">
		<html>
			<head>
				<title>My Facebook Application</title>
				<link rel="stylesheet" type="text/css" href="../css/facebook.css" />
				<script src="../js/ajax.js"></script>
			</head>
			<body>
				<div class = "header">FACEBOOK</div>
				<div class = "chooser">
					<div class = "leftarrow">&lt;-</div>
					<div class = "grid" id = "grid">
						<div id = "slideable">
							<table class = "grid">
							<tr>
							<xsl:for-each select="*/user">
								<xsl:if test = "6 > position()">
									<td>
										<xsl:apply-templates select="pic_square" />
									</td>
								</xsl:if>
							</xsl:for-each>
							</tr>
							<tr>
							<xsl:for-each select="*/user">
								<xsl:if test = "position() > 6 and 12 > position()">
									<td>
										<xsl:apply-templates select="pic_square" />
									</td>
								</xsl:if>
							</xsl:for-each>
							</tr>
							</table>
						</div>
					</div>
					<div class = "rightarrow">-&gt;</div>
				</div>
				<div class = "detail">more shit</div>
			</body>
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
