/*
 * @(#)FriendsDetail.java	1.0   Feb 19, 2008
 *
 * Copyright 2000-2008 ETH Zurich. All Rights Reserved.
 *
 * This software is the proprietary information of ETH Zurich.
 * Use is subject to license terms.
 *
 */
package ch.ethz.globis.web.facebook;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URL;
import java.net.URLEncoder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Document;
import org.xml.sax.SAXException;

/**
 * Facebook Application FriendsDetail Servlet.
 * 
 * @author Stefania Leone <leone@inf.ethz.ch>
 * @author Michael Nebeling <nebeling@inf.ethz.ch>
 * @version 2.0
 */
public class FriendsDetail extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(final HttpServletRequest request,
			final HttpServletResponse response) throws ServletException,
			IOException {
		this.doPost(request, response);
	}

	@Override
	public void doPost(final HttpServletRequest request,
			final HttpServletResponse response) throws ServletException,
			IOException {

		// set MIME type and encoding
		response.setContentType("text/xml");
		response.setCharacterEncoding("UTF-8");

		// make sure that we have obtained an access token, otherwise redirect
		// to login
		final String accessToken = (String) request.getSession().getAttribute(
				Config.getValue("ACCESS_TOKEN_SESSION"));
		if (accessToken == null) {
			response.sendRedirect(Config.getValue("LOGIN_URL"));
			return;
		}

		response.setHeader("Cache-Control", "no-cache");

		// get user id
		final String uid = request.getParameter("user");

		final PrintWriter p = response.getWriter();
		try {
			// returns an XML tree
			OutputGenerator.transformToXML(
					new DOMSource(this.getUserInfo(uid, accessToken)),
					new StreamResult(p));
		} catch (Exception e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
		} finally {
			p.flush();
			p.close();
		}

	}

	// Retrieves user information by executing a FQL statement
	private Document getUserInfo(final String uid, String accessToken)
			throws IOException, ParserConfigurationException, SAXException {

		// TODO Modify this FQL statement to include more user attributes
		final URL url = new URL(
				"https://api.facebook.com/method/fql.query?access_token="
						+ accessToken
						+ "&query="
						+ URLEncoder.encode(
								"SELECT name,uid,pic_square,sex FROM user WHERE uid="
										+ uid, "UTF-8"));

		final DocumentBuilderFactory factory = DocumentBuilderFactory
				.newInstance();
		final DocumentBuilder builder = factory.newDocumentBuilder();

		return builder.parse(url.openStream());

	}
}
