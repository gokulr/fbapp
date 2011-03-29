<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fb="http://api.facebook.com/1.0/">

	<xsl:import href="header.xsl" />

	<xsl:template match="/">
		<html>
			<head>
				<title>My Facebook Application</title>
				<link rel="stylesheet" type="text/css" href="../css/facebook.css" />
				<script src="../js/ajax.js"></script>
			</head>
			<body>
				<xsl:copy-of select="$header" />
				<h1>Welcome!</h1>
				<br />


				<table border="1" width="100%">
					<tr>
						<th>Name</th>
						<th>Picture</th>
					</tr>
					<xsl:for-each select="*/user">

						<tr>
							<td align="center" style="cursor: pointer">
								<xsl:attribute name="id">
			      					<xsl:value-of select="uid" />
			      				</xsl:attribute>
								<xsl:attribute name="onclick">submitValue(<xsl:value-of
									select="uid" />)</xsl:attribute>
								<xsl:value-of select="name" />
							</td>
							<td align="center">
								<xsl:apply-templates select="pic_square" />
							</td>
						</tr>

					</xsl:for-each>
				</table>
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
