package com.diamondpalace.finance.service;


import java.awt.AWTException;

import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.sql.SQLException;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.imageio.ImageIO;
import javax.servlet.ServletContext;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.JFileChooser;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.io.FilenameUtils;
import org.codehaus.jackson.map.ObjectMapper;

import com.diamondpalace.finance.dao.AdvancedSearchData;
import com.diamondpalace.finance.framework.MrBean;
import com.diamondpalace.finance.framework.Profile;
import com.diamondpalace.finance.framework.Result;
import com.diamondpalace.finance.framework.ServerSession;
import com.diamondpalace.finance.mgr.ControlMgr;
import com.diamondpalace.finance.mgr.WriteExcel;
import com.diamondpalace.finance.util.FileUtil;
import com.diamondpalace.finance.util.ServerUtil;



@Path("/control")
public class control {
	
	@Context
	static
	HttpServletRequest request;

	@Context
	static
	HttpServletResponse response;

	@javax.ws.rs.core.Context
	ServletContext context;
	
    public String name;
    public String cdcno;
    
    private MrBean getUser() {
		ServerSession.serverPath = request.getServletContext().getRealPath("/") + "/";
		MrBean user = new MrBean();
		user.getUser().setOrganizationID("001");
		user.getUser().setUserId("admin");
		user.getUser().setUserName("administration");
		return user;
	}
    
  
    
    @POST
	@Path("pdfupload")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@Produces(MediaType.APPLICATION_JSON)
	public String pdfupload(@QueryParam("f") String folder, @QueryParam("fn") String inputFileName) {
    	System.out.println("PDF UPLOAD REACH");
		String result = "{\"code\":\"ERROR\",\"filePath\":\"\"}";
		String outputFileName ="";
		FileItemFactory factory = new DiskFileItemFactory();
		ServletFileUpload upload = new ServletFileUpload(factory);
//
//		if (inputFileName.contains("/")) {
//			inputFileName = inputFileName.substring(inputFileName.lastIndexOf("/") + 1);
//		}

		folder = request.getServletContext().getRealPath("/") + "/" + folder;	
		String extension = FilenameUtils.getExtension(inputFileName);
		
		if(extension.equalsIgnoreCase("pdf") ){
		folder += "/PDFUpload";
		
		File dir = new File(folder);
		
		if(!dir.exists())
			dir.mkdirs();
		
		String dtFormat = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
		outputFileName += "USER"+dtFormat+"."+extension;
		folder += "/" + outputFileName;
		
		File l_file = new File(folder);
		
		try {
			
			@SuppressWarnings("unchecked")
			List<FileItem> items = upload.parseRequest(request);
			for (FileItem item : items) {
				if (item.isFormField()) {
				} else {
					if (l_file.exists()) {
						try {
							l_file.delete();
						} catch (Exception e) {
							e.printStackTrace();
						}
					} else {
						
					}
					if (l_file.createNewFile()) {
						item.write(l_file);
						String jsonfilepath = new ObjectMapper().writeValueAsString(folder);
						result = "{\"code\":\"Success\",\"filePath\":"+jsonfilepath+"}";
						
					}else{
						result = "{\"code\":\"Upload Unsuccessful!!! Please Try Again...\"}";
					}
				}
			}
			

		} catch (Exception e) {
			e.printStackTrace();
		}
		}else{
			result = "{\"code\":\"Must be pdf file Type\",\"filePath\":\"Error\"}";
		}

		return result;
	}
	
    @POST
   	@Path("register")
   	@Produces(MediaType.APPLICATION_JSON)
   	@Consumes(MediaType.APPLICATION_JSON)
   	public FinanceData register(FinanceData p) throws Exception {
       	FinanceData fData = new FinanceData();
   		System.out.println("FILE PATH " + p.getFilePath());
   		if(p.getFilePath()!=null){
   		fData = ControlMgr.register(p,getUser());
   		}
   		return fData;
   	}
       
    @POST
	@Path("signin")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public SIDProfile signin(Profile p) throws Exception {
    	SIDProfile sidprofile = new SIDProfile();
		if (p != null && p.getUsername() != null&& p.getPassword() != null) {
			
			sidprofile = CheckData.login(p,getUser());
			
			
		} 
		System.out.println(sidprofile.getUsername()+sidprofile.getRole()+sidprofile.getCheck());
		return sidprofile;
	}
    
    @POST
	@Path("searchData")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public FinanceDataSet searchData(AdvancedSearchData p) {
		String searchVal = request.getParameter("searchVal");
		if (searchVal != "" && searchVal.contains("/")) {
			searchVal = ServerUtil.datetoString1(searchVal);
		}	
		String type = request.getParameter("type");
		String sort = request.getParameter("sort");	
		String startDate = request.getParameter("sdate");
		String endDate = request.getParameter("edate");		
		FinanceDataSet res = new FinanceDataSet();	
		res = ControlMgr.search(p, searchVal, type, sort,startDate, endDate,   getUser());				
		return res;
	}
    
	
    @GET
	@Path("DownloadAttachment")		
	@Produces(MediaType.APPLICATION_JSON)		
    public static void DownloadAttachment() {
    	String filePath=request.getParameter("filePath");
    	FileInputStream fin;
		response.setHeader("Content-Disposition", "attachment; filename=DataList.pdf");
		
		System.out.println(filePath);
		File file = new File(filePath);
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
	
    
	@POST
	@Path("DeleteData")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public FinanceData delete(FinanceData p){
		FinanceData result = new FinanceData();
		if (p != null &&  p.getId()!= 0) {			
			result =ControlMgr.checkForDelete(p,getUser());
	}
		
		return result;
}
	@POST
	@Path("checkForDataUpdate")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public FinanceData checkForDataUpdate(FinanceData fdata){
		FinanceData result = new FinanceData();
		
		if (fdata.getId()!= 0) {			
			result =ControlMgr.checkForUpdateData(fdata.getId(),getUser());
			
	}
		
		return result;
}
	@POST
	@Path("updateData")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Profile updateData(Profile p){
		Profile presult = new Profile();
		if (p != null &&  p.getCdcno()!= null) {			
			presult =CheckData.checkForUpdate(p,getUser());
			if(presult.getCommandCenter() == true) {
				SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
				Date now = new Date();
				String date =dateformat.format(now);
				File dir = new File(ServerSession.serverPath + "WEB-INF/log");
				if (!dir.exists()) {
					dir.mkdirs();					
				}
				FileUtil.LogFile = ServerSession.serverPath + "WEB-INF/log/" + control.class.getName() + ".txt";
				FileUtil.logTime("Update Function !! " + p.getUsername()+ " Cdc No. " + p.getCdcno() + " Date and Time : "+  date);
			}
			System.out.println(presult.getCommandCenter());
	}
		
		return presult;
}
	@GET
	@Path("FinanceDataExcelExport")		
	@Produces(MediaType.APPLICATION_JSON)		
	public Result FinanceDataExcelExport(){
		Result res = new Result();
		String searchVal = request.getParameter("searchVal");
		if (searchVal != "" && searchVal.contains("/")) {
			searchVal = ServerUtil.datetoString1(searchVal);
		}
		String fName = request.getParameter("filename");
		String type = request.getParameter("type");
		String sort = request.getParameter("sort");
		
		String sdate = request.getParameter("sdate");
		String edate = request.getParameter("edate");
		
		String time = String.valueOf(new Date().getHours()) + String.valueOf(new Date().getMinutes())
				+ String.valueOf(new Date().getSeconds());
		
		String fileName = fName + time + ".xls";
		String folder = "download";
		try {
			res = WriteExcel.writeExcelFinanceDataExport(folder, fileName, searchVal, type, sort, sdate, edate,getUser());
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		ControlMgr.downloadFile(folder, fileName, response);
		
		File dir = new File( ServerSession.serverPath + "WEB-INF/log");
		if (!dir.exists()) {
			dir.mkdirs();
		}		
		
		FileUtil.LogFile = ServerSession.serverPath + "WEB-INF/log/" + "FinanceDataExcelExport.txt";
		FileUtil.logTime("Slip Excel Export !! " );	
	
		
		return res;
	}


}
