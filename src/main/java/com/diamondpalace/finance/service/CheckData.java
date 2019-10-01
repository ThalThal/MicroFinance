package com.diamondpalace.finance.service;

import java.io.File;
import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.SQLException;

import javax.servlet.ServletContext;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.Context;

import com.diamondpalace.finance.framework.ConnAdmin;
import com.diamondpalace.finance.framework.MrBean;
import com.diamondpalace.finance.framework.Profile;
import com.diamondpalace.finance.framework.ServerSession;
import com.diamondpalace.finance.util.ServerUtil;


public class CheckData {
	@Context
	static
	HttpServletRequest request;

	@javax.ws.rs.core.Context
	ServletContext context;
	private static FileInputStream fin;
	private MrBean getUser() {
		ServerSession.serverPath = request.getServletContext().getRealPath("/") + "/";
		MrBean user = new MrBean();
		user.getUser().setOrganizationID("001");
		user.getUser().setUserId("admin");
		user.getUser().setUserName("administration");
		return user;
	}
   public Profile checkData(String cdcno,MrBean user){
	   Profile p = new Profile();
	 DeleteData d = new DeleteData();
	d.setCdcno(cdcno);
	Connection con = ConnAdmin.getConn(user.getUser().getOrganizationID());
	try {
		  p = DataDAO.Check(d, con);
		
		// getConnectSSL();
		
	} catch (SQLException e) {
		e.printStackTrace();
	} finally {
		ServerUtil.closeConnection(con);
	}
	
	return p;
	  
   }
   public static Profile checkForDelete(Profile p,MrBean user){
	   Profile profile = new Profile();	
	   Connection con = ConnAdmin.getConn(user.getUser().getOrganizationID());
	try {
		  profile = DataDAO.deleteData(p, con);
		  System.out.println(profile.getRole());
		con.close();
		// getConnectSSL();
		
	} catch (SQLException e) {
		e.printStackTrace();
	} finally {
		ServerUtil.closeConnection(con);
	}
	
	return profile;
	  
   }
   public static Profile checkForUpdate(Profile p,MrBean user){
	   Profile profile = new Profile();	
	   Connection con = ConnAdmin.getConn(user.getUser().getOrganizationID());
	try {
		  profile = DataDAO.updateData(p, con);
		  System.out.println(profile.getCommandCenter());
		con.close();
		// getConnectSSL();
		
	} catch (SQLException e) {
		e.printStackTrace();
	} finally {
		ServerUtil.closeConnection(con);
	}
	
	return profile;
	  
   }
   
   public static void downloadFile(String folder, String fileName, HttpServletResponse response) {
		response.setHeader("Content-Disposition", "attachment; filename=" + fileName);
		File file = new File(ServerSession.serverPath + folder + "/" + fileName);
		int length = (int) file.length();
		byte[] bytes = new byte[length];
		try {
			fin = new FileInputStream(file);
			fin.read(bytes);
			ServletOutputStream os = response.getOutputStream();
			os.write(bytes);
			os.flush();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
public static SIDProfile login(Profile p, MrBean user) {
	Connection con = ConnAdmin.getConn(user.getUser().getOrganizationID());
	SIDProfile sidprofile = new SIDProfile();
	try {
		sidprofile  = DataDAO.login(p, con);
		con.close();
		// getConnectSSL();
		
	} catch (SQLException e) {
		e.printStackTrace();
	} finally {
		ServerUtil.closeConnection(con);
	}
	
	return sidprofile;
}
   }
