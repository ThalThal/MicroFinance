package com.diamondpalace.finance.mgr;

import java.io.File;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;

import com.diamondpalace.finance.dao.AdvancedSearchData;
import com.diamondpalace.finance.dao.DataListDao;
import com.diamondpalace.finance.framework.ConnAdmin;
import com.diamondpalace.finance.framework.MrBean;
import com.diamondpalace.finance.framework.Result;
import com.diamondpalace.finance.framework.ServerSession;
import com.diamondpalace.finance.service.FinanceData;
import com.diamondpalace.finance.service.FinanceDataSet;
import com.diamondpalace.finance.util.ServerUtil;

import jxl.CellView;
import jxl.Workbook;
import jxl.WorkbookSettings;
import jxl.write.Label;
import jxl.write.WritableCellFormat;
import jxl.write.WritableFont;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import jxl.write.WriteException;
import jxl.write.biff.RowsExceededException;

public class WriteExcel {
	//
	private static WritableCellFormat timesBoldUnderline;
	private static WritableCellFormat times;
	private static WritableCellFormat zawgyi;



	public static Result writeExcelFinanceDataExport(String folder, String fileName, String searchVal, String type,
			String sort, String sdate, String edate, MrBean user) throws SQLException {
		Connection conn = ConnAdmin.getConn(user.getUser().getOrganizationID());
		FinanceDataSet ret = new FinanceDataSet();
		int  k=0, row=0, column=0; 
		
		Result res = new Result();
		AdvancedSearchData pdata = new AdvancedSearchData();
		String filePath = ServerSession.serverPath + folder;
		File dir = new File(filePath);
		if (!dir.exists())
			dir.mkdirs();
		File l_file = new File(ServerSession.serverPath + folder + "/" + fileName);
		if (l_file.exists()) {
			l_file.delete();
		}
		try {
			WorkbookSettings wbSettings = new WorkbookSettings();
			wbSettings.setLocale(new Locale("en", "EN"));
			WritableWorkbook workbook = Workbook.createWorkbook(l_file, wbSettings);
			
			ret = DataListDao.searchFinanceDataExecl(pdata, searchVal, type, sort, sdate, edate, conn);
			List<FinanceData> list = new ArrayList<FinanceData>(Arrays.asList(ret.getData()));
			if(list.size() > 0){
			if (list.size() >= 60000) {
				WritableSheet excelSheet = null;
				for (int i = 0; i < list.size(); i++) {

					if (i % 60000 == 0) {
						//int z=1;
						excelSheet = workbook.createSheet("list" + k, k);
						createHeader1(excelSheet, 1);
						System.out.println(k + " k count i " + i);

						excelSheet = workbook.getSheet(k);
						k++;
						//z++;
					}

					column = 0;

					row = excelSheet.getRows();
					//1-id
					addContent(excelSheet, 0, row, String.valueOf(list.get(i).getId()));
//					
//					String date = list.get(i).getT2();
//					String t2 = (date.substring(6, date.length()) + "/" + date.substring(4, 6) + "/"
//							+ date.substring(0, 4));
					//2-centerno
					addContent(excelSheet, 1, row, list.get(i).getCenterNo());
					//3-groupno
					addContent(excelSheet, 2, row, list.get(i).getGroupNo());
					//4-loaneeno
					addContent(excelSheet, 3, row, list.get(i).getLoaneeNo());
					//5-collectionday
					addContent(excelSheet, 4, row, list.get(i).getCollectionDay());
					//6-LoanOfficerName 
					addContent(excelSheet, 5, row, list.get(i).getLoanOfficerName());		
					//7-ClientName
					addContent(excelSheet, 6, row, list.get(i).getClientName());		
					//8-Gender
					addContent(excelSheet, 7, row, list.get(i).getGender());		
					//9-Age 
					addContent(excelSheet, 8, row, String.valueOf(list.get(i).getAge()));		
					//10-currentAge
					addContent(excelSheet, 9, row, String.valueOf(list.get(i).getCurrentAge()));		
					//11-HusbandORfatherName
					addContent(excelSheet, 10, row, list.get(i).getHusbandORfatherName());		
					//12-JoiningDate
					addContent(excelSheet, 11, row, list.get(i).getJoiningDate());	
					//13-NRCNumber
					addContent(excelSheet, 12, row, list.get(i).getNrcNumber());		
					//14-TownshipName
					addContent(excelSheet, 13, row, list.get(i).getTownshipName());	
					//15-WardORvillageTractName
					addContent(excelSheet, 14, row, list.get(i).getWardORvillageTractName());		
					//16-VillagenameORcentername
					addContent(excelSheet, 15, row, list.get(i).getVillageNameORcenterName());	
					//17-Address
					addContent(excelSheet, 16, row, list.get(i).getAddress());		
					//18-Remarks
					addContent(excelSheet, 17, row, list.get(i).getRemarks());	
					//19-GroupCommittees
					addContent(excelSheet, 18, row, list.get(i).getGroupCommittees());		
					//20-ReplaceORsubstitute
					addContent(excelSheet, 19, row, list.get(i).getReplaceORsubstitute());	
					//21-GroupDissolveDate
					addContent(excelSheet, 20, row, list.get(i).getGroupDissolveDate());		
					//22-OldGroup
					addContent(excelSheet, 21, row, list.get(i).getOldGroup());	
					//23-PhoneNo
					addContent(excelSheet, 22, row, list.get(i).getPhNumber());	
					//24-DOB
					addContent(excelSheet, 23, row, list.get(i).getDob());		
					row++;
				}
			} else {
				WritableSheet excelSheet = workbook.createSheet("List", 0);
				excelSheet = workbook.getSheet(0);
				createHeader1(excelSheet, 1);
				createCouponContent(excelSheet, list, 1);
			}
			
			workbook.write();
			workbook.close();
			res.setState(true);
			}
		} catch (WriteException e) {
			res.setState(false);
		} catch (IOException e) {
			res.setState(false);
		}finally {
			ServerUtil.closeConnection(conn);
		}
		
		return res;
	}
	private static void createHeader1(WritableSheet asheet, int Type) throws WriteException {
		WritableFont times10pt = new WritableFont(WritableFont.createFont("Myanmar3"), 10);
		times = new WritableCellFormat(times10pt);
		times.setWrap(true);
		WritableFont times10ptBoldUnderline = new WritableFont(WritableFont.TIMES, 10, WritableFont.BOLD, false);
		timesBoldUnderline = new WritableCellFormat(times10ptBoldUnderline);
		timesBoldUnderline.setWrap(true);
		CellView cv = new CellView();
		cv.setFormat(times);
		cv.setFormat(timesBoldUnderline);
		int i = 0;
		if (Type == 1) { //
			addCaption(asheet, i++, 0, "ID");
			addCaption(asheet, i++, 0, "Center No");
			addCaption(asheet, i++, 0, "Group No");
			addCaption(asheet, i++, 0, "Loanee No");
			addCaption(asheet, i++, 0, "Collection Day");
			addCaption(asheet, i++, 0, "Loan Officer Name");
			addCaption(asheet, i++, 0, "Client Name");
			addCaption(asheet, i++, 0, "Gender");
			addCaption(asheet, i++, 0, "Age");
			addCaption(asheet, i++, 0, "Current Age");
			addCaption(asheet, i++, 0, "Husband OR Father Name");
			addCaption(asheet, i++, 0, "Joining Date");
			addCaption(asheet, i++, 0, "NRC Number");
			addCaption(asheet, i++, 0, "Township Name");
			addCaption(asheet, i++, 0, "Ward OR Village Tract Name");
			addCaption(asheet, i++, 0, "Village Name OR Center Name");
			addCaption(asheet, i++, 0, "Address");
			addCaption(asheet, i++, 0, "Remarks");
			addCaption(asheet, i++, 0, "Group Committees");
			addCaption(asheet, i++, 0, "Replace OR Substitute");
			addCaption(asheet, i++, 0, "Group Dissolve Date");
			addCaption(asheet, i++, 0, "Old Group");
			addCaption(asheet, i++, 0, "Phone No");
			addCaption(asheet, i++, 0, "Date Of Birth");
		}
		if (Type == 2) { //
			addCaption(asheet, i++, 0, "Barcode");
			addCaption(asheet, i++, 0, "Member Name");
			addCaption(asheet, i++, 0, "Date of Birth");
			addCaption(asheet, i++, 0, "NRC Number");
			addCaption(asheet, i++, 0, "Phone Number");
			addCaption(asheet, i++, 0, "Address");
			addCaption(asheet, i++, 0, "Created Date");
			addCaption(asheet, i++, 0, "Expired Date");
			
			
		}
		
	}
	private static void addCaption(WritableSheet sheet, int column, int row, String s)
			throws RowsExceededException, WriteException {
		Label label;
		label = new Label(column, row, s, timesBoldUnderline);
		sheet.addCell(label);
	}

	private static void addContent(WritableSheet sheet, int col, int row, String data)
			throws RowsExceededException, WriteException {
		Label label;
		label = new Label(col, row, data);
		sheet.addCell(label);
		for (int i = 0; i < col + 1; i++) {
			sheet.setColumnView(i, 20);
		}

	}
	private static void createCouponContent(WritableSheet excelSheet, List<FinanceData> list, int aType) {
		try {
			for (int i = 0; i < list.size(); i++) {
				int row = excelSheet.getRows();		
				//1-id
				addContent(excelSheet, 0, row, String.valueOf(list.get(i).getId()));
//				
//				String date = list.get(i).getT2();
//				String t2 = (date.substring(6, date.length()) + "/" + date.substring(4, 6) + "/"
//						+ date.substring(0, 4));
				//2-centerno
				addContent(excelSheet, 1, row, list.get(i).getCenterNo());
				//3-groupno
				addContent(excelSheet, 2, row, list.get(i).getGroupNo());
				//4-loaneeno
				addContent(excelSheet, 3, row, list.get(i).getLoaneeNo());
				//5-collectionday
				addContent(excelSheet, 4, row, list.get(i).getCollectionDay());
				//6-LoanOfficerName 
				addContent(excelSheet, 5, row, list.get(i).getLoanOfficerName());		
				//7-ClientName
				addContent(excelSheet, 6, row, list.get(i).getClientName());		
				//8-Gender
				addContent(excelSheet, 7, row, list.get(i).getGender());		
				//9-Age 
				addContent(excelSheet, 8, row, String.valueOf(list.get(i).getAge()));		
				//10-currentAge
				addContent(excelSheet, 9, row, String.valueOf(list.get(i).getCurrentAge()));		
				//11-HusbandORfatherName
				addContent(excelSheet, 10, row, list.get(i).getHusbandORfatherName());		
				//12-JoiningDate
				addContent(excelSheet, 11, row, list.get(i).getJoiningDate());	
				//13-NRCNumber
				addContent(excelSheet, 12, row, list.get(i).getNrcNumber());		
				//14-TownshipName
				addContent(excelSheet, 13, row, list.get(i).getTownshipName());	
				//15-WardORvillageTractName
				addContent(excelSheet, 14, row, list.get(i).getWardORvillageTractName());		
				//16-VillagenameORcentername
				addContent(excelSheet, 15, row, list.get(i).getVillageNameORcenterName());	
				//17-Address
				addContent(excelSheet, 16, row, list.get(i).getAddress());		
				//18-Remarks
				addContent(excelSheet, 17, row, list.get(i).getRemarks());	
				//19-GroupCommittees
				addContent(excelSheet, 18, row, list.get(i).getGroupCommittees());		
				//20-ReplaceORsubstitute
				addContent(excelSheet, 19, row, list.get(i).getReplaceORsubstitute());	
				//21-GroupDissolveDate
				addContent(excelSheet, 20, row, list.get(i).getGroupDissolveDate());		
				//22-OldGroup
				addContent(excelSheet, 21, row, list.get(i).getOldGroup());	
				//23-PhoneNo
				addContent(excelSheet, 22, row, list.get(i).getPhNumber());	
				//24-DOB
				addContent(excelSheet, 23, row, list.get(i).getDob());		
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
//	public static Result writeExcelMemberExport(String folder, String fileName, String searchVal, String type,
//			String sort, String sdate, String edate, MrBean user) throws SQLException {
//		Connection conn = ConnAdmin.getConn(user.getUser().getOrganizationID());
//		MemberRegisterDataSet ret = new MemberRegisterDataSet();
//		int  k=0, row=0, column=0; 
//		
//		Result res = new Result();
//		AdvancedSearchData pdata = new AdvancedSearchData();
//		String filePath = ServerSession.serverPath + folder;
//		File dir = new File(filePath);
//		if (!dir.exists())
//			dir.mkdirs();
//		File l_file = new File(ServerSession.serverPath + folder + "/" + fileName);
//		if (l_file.exists()) {
//			l_file.delete();
//		}
//		try {
//			WorkbookSettings wbSettings = new WorkbookSettings();
//			wbSettings.setLocale(new Locale("en", "EN"));
//			WritableWorkbook workbook = Workbook.createWorkbook(l_file, wbSettings);
//			
//			ret = MemberRegisterListDao.searchMemberExecl(pdata, searchVal, type, sort, sdate, edate, conn);
//			List<MemberRegisterData> list = new ArrayList<MemberRegisterData>(Arrays.asList(ret.getData()));
//			if (list.size() >= 60000) {
//				WritableSheet excelSheet = null;
//				for (int i = 0; i < list.size(); i++) {
//
//					if (i % 60000 == 0) {
//						//int z=1;
//						excelSheet = workbook.createSheet("list" + k, k);
//						createHeader1(excelSheet, 2);
//						System.out.println(k + " k count i " + i);
//
//						excelSheet = workbook.getSheet(k);
//						k++;
//						//z++;
//					}
//
//					column = 0;
//
//					row = excelSheet.getRows();
//					
//					
//					String t2 = (list.get(i).getValiddate().substring(6, list.get(i).getValiddate().length()) + "/" + list.get(i).getValiddate().substring(4, 6) + "/"
//							+ list.get(i).getValiddate().substring(0, 4));
//					
//					addContent(excelSheet, column++, row, list.get(i).getBarCode());					
//					addContent(excelSheet, column++, row, list.get(i).getT1());			
//					addContent(excelSheet, column++, row, (list.get(i).getDateOfBirth().substring(6, list.get(i).getDateOfBirth().length()) + "/" + list.get(i).getDateOfBirth().substring(4, 6) + "/"
//							+ list.get(i).getDateOfBirth().substring(0, 4)) );
//					addContent(excelSheet, column++, row, list.get(i).getNRC());
//					
//					addContent(excelSheet, column++, row, String.valueOf(list.get(i).getPhoneNumber()));
//					addContent(excelSheet, column++, row, list.get(i).getAddress());
//					addContent(excelSheet, column++, row, (list.get(i).getCreateddate().substring(6, list.get(i).getCreateddate().length()) + "/" + list.get(i).getCreateddate().substring(4, 6) + "/"
//							+ list.get(i).getCreateddate().substring(0, 4)));
//					addContent(excelSheet, column++, row, (list.get(i).getValiddate().substring(6, list.get(i).getValiddate().length()) + "/" + list.get(i).getValiddate().substring(4, 6) + "/"
//							+ list.get(i).getValiddate().substring(0, 4)));
//					
//					row++;
//				}
//			} else {
//				WritableSheet excelSheet = workbook.createSheet("List", 0);
//				excelSheet = workbook.getSheet(0);
//				createHeader1(excelSheet, 2);
//				createMemberContent(excelSheet, list, 1);
//			}
//			
//			workbook.write();
//			workbook.close();
//			res.setState(true);
//		} catch (WriteException e) {
//			res.setState(false);
//		} catch (IOException e) {
//			res.setState(false);
//		}finally {
//			ServerUtil.closeConnection(conn);
//		}
//		return res;
//	}
//	private static void createMemberContent(WritableSheet excelSheet, List<MemberRegisterData> list, int aType) {
//		try {
//			for (int i = 0; i < list.size(); i++) {
//				int row = excelSheet.getRows();		
//				addContent(excelSheet, 0, row, list.get(i).getBarCode());					
//				addContent(excelSheet, 1, row, list.get(i).getT1());			
//				addContent(excelSheet, 2, row, ServerUtil.ddMMyyyFormat1(list.get(i).getDateOfBirth()) );
//				addContent(excelSheet, 3, row, list.get(i).getNRC());
//				
//				addContent(excelSheet, 4, row, String.valueOf(list.get(i).getPhoneNumber()));
//				addContent(excelSheet, 5, row, list.get(i).getAddress());
//				addContent(excelSheet, 6, row, ServerUtil.ddMMyyyFormat1(list.get(i).getCreateddate()));
//				addContent(excelSheet, 7, row, ServerUtil.ddMMyyyFormat1(list.get(i).getValiddate()));
//			}
//
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}
//	

}
