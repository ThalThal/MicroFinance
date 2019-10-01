package com.diamondpalace.finance.mgr;


import java.io.File;
import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.SQLException;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import com.diamondpalace.finance.dao.AdvancedSearchData;
import com.diamondpalace.finance.dao.ControlDao;
import com.diamondpalace.finance.dao.DataListDao;
import com.diamondpalace.finance.framework.ConnAdmin;
import com.diamondpalace.finance.framework.MrBean;
import com.diamondpalace.finance.framework.Profile;
import com.diamondpalace.finance.framework.ServerSession;
import com.diamondpalace.finance.service.DataDAO;
import com.diamondpalace.finance.service.FinanceData;
import com.diamondpalace.finance.service.FinanceDataSet;
import com.diamondpalace.finance.service.SIDProfile;
import com.diamondpalace.finance.util.ServerUtil;

public class ControlMgr {
	private static FileInputStream fin;
	public static FinanceData register(FinanceData p, MrBean user) {
		Connection con = ConnAdmin.getConn(user.getUser().getOrganizationID());
		FinanceData fData = new FinanceData();
		
		
		try {
			fData  = ControlDao.register(p, con);
			con.close();
			// getConnectSSL();
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ServerUtil.closeConnection(con);
		}
		
		return fData;
	}

	public static FinanceDataSet search(AdvancedSearchData p, String searchVal, String type, String sort,String startDate, String endDate, MrBean user) {
		Connection conn = ConnAdmin.getConn(user.getUser().getOrganizationID());
		FinanceDataSet res = new FinanceDataSet();
		try {
			res = DataListDao.search(p, searchVal, type, sort, startDate, endDate,  conn);

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			ServerUtil.closeConnection(conn);
		}
		return res;
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

	public static FinanceData checkForDelete(FinanceData fdata, MrBean user) {
		Connection conn = ConnAdmin.getConn(user.getUser().getOrganizationID());
		FinanceData res = new FinanceData();
		try {
			res = ControlDao.Delete(fdata,  conn);

		} finally {
			ServerUtil.closeConnection(conn);
		}
		return res;
		
	}

	public static void downloadAttachment(String folder, String fileName, HttpServletResponse response) {
		
		FileInputStream fin;
		response.setHeader("Content-Disposition", "attachment; filename="+ fileName );
		
		System.out.println(folder);
		File file = new File(folder+ "/" +fileName);
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

	public static FinanceData checkForUpdateData(int id, MrBean user) {
		Connection conn = ConnAdmin.getConn(user.getUser().getOrganizationID());
		FinanceData res = new FinanceData();
		try {
			res = ControlDao.checkForUpdateData(id,  conn);

		} finally {
			ServerUtil.closeConnection(conn);
		}
		return res;
		
	}
	}


