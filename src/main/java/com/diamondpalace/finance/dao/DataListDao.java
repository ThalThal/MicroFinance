package com.diamondpalace.finance.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import com.diamondpalace.finance.service.FinanceData;
import com.diamondpalace.finance.service.FinanceDataSet;
import com.diamondpalace.finance.util.ServerUtil;
import com.nirvasoft.database.DBField;
import com.nirvasoft.database.DBMgr;
import com.nirvasoft.database.DBRecord;

public class DataListDao {
	public  static   DBRecord define(String pTableName){   // Define Database fields
		DBRecord ret= new  DBRecord();		     
		ret.setTableName(pTableName);                              // Table Name
		ret.setFields(new  ArrayList<DBField>());
	
		ret.getFields().add(new  DBField("ID",(byte) 1)); 
		ret.getFields().add(new  DBField("CreatedDate",(byte) 5)); 
		ret.getFields().add(new  DBField("ModifiedDate",(byte) 5)); 
		ret.getFields().add(new  DBField("UserID",(byte) 5)); 
		ret.getFields().add(new  DBField("UserName",(byte) 5)); 
		ret.getFields().add(new  DBField("RecordStatus",(byte) 2)); 
		ret.getFields().add(new  DBField("CenterNo",(byte) 5)); 
		ret.getFields().add(new  DBField("GroupNo",(byte) 5)); 
		ret.getFields().add(new  DBField("LoaneeNo",(byte) 5)); 
		ret.getFields().add(new  DBField("CollectionDay",(byte) 5)); 
		ret.getFields().add(new  DBField("LoanOfficerName",(byte) 5)); 
		ret.getFields().add(new  DBField("ClientName",(byte) 5)); 
		ret.getFields().add(new  DBField("Gender",(byte) 5)); 
		ret.getFields().add(new  DBField("Age",(byte) 1)); 
		ret.getFields().add(new  DBField("CurrentAge",(byte) 1)); 
		ret.getFields().add(new  DBField("HusbandORfatherName",(byte) 5)); 
		ret.getFields().add(new  DBField("JoiningDate",(byte) 5)); 
		ret.getFields().add(new  DBField("NRCNumber",(byte) 5)); 
		ret.getFields().add(new  DBField("TownshipName",(byte) 5)); 
		ret.getFields().add(new  DBField("WardORvillageTractName",(byte) 5)); 
		ret.getFields().add(new  DBField("VillagenameORcentername",(byte) 5)); 
		ret.getFields().add(new  DBField("Address",(byte) 5)); 
		ret.getFields().add(new  DBField("Remarks",(byte) 5));
		ret.getFields().add(new  DBField("GroupCommittees",(byte) 5));
		ret.getFields().add(new  DBField("ReplaceORsubstitute",(byte) 5));		
		ret.getFields().add(new  DBField("GroupDissolveDate",(byte) 5)); 
		ret.getFields().add(new  DBField("OldGroup",(byte) 5)); 
		ret.getFields().add(new  DBField("PhoneNo",(byte) 5)); 
		ret.getFields().add(new  DBField("DOB",(byte) 5)); 
		ret.getFields().add(new  DBField("UploadFilePath",(byte) 5)); 
		
		return   ret;
	}
	public  static FinanceData getDBRecord(DBRecord aDBRecord){ //	Map DB to Entity/Class 
		FinanceData ret = new FinanceData();		
		ret.setId(aDBRecord.getInt("ID"));
		ret.setUserId(aDBRecord.getInt("UserId"));
		ret.setUserName(aDBRecord.getString("UserName"));
		ret.setCreatedDate(aDBRecord.getString("createddate"));
		ret.setModifiedDate(aDBRecord.getString("modifieddate"));
		ret.setRecordStatus(aDBRecord.getInt("RecordStatus"));
//		ret.setSyncStatus(aDBRecord.getInt("SyncStatus"));
//		ret.setSyncBatch(aDBRecord.getLong("SyncBatch"));
//		ret.setUsersyskey(aDBRecord.getLong("usersyskey"));
		ret.setCenterNo(aDBRecord.getString("CenterNo"));
		ret.setLoaneeNo(aDBRecord.getString("LoaneeNo"));
		ret.setGroupNo(aDBRecord.getString("GroupNo"));
		ret.setCollectionDay(aDBRecord.getString("CollectionDay"));
		ret.setLoanOfficerName(aDBRecord.getString("LoanOfficerName"));
		ret.setClientName(aDBRecord.getString("ClientName"));
		ret.setGender(aDBRecord.getString("Gender"));
		ret.setAge(aDBRecord.getInt("Age"));
		ret.setCurrentAge(aDBRecord.getInt("CurrentAge"));
		ret.setHusbandORfatherName(aDBRecord.getString("HusbandORfatherName"));
		ret.setJoiningDate(aDBRecord.getString("JoiningDate"));
		ret.setNrcNumber(aDBRecord.getString("NRCNumber"));
		ret.setTownshipName(aDBRecord.getString("TownshipName"));
		ret.setWardORvillageTractName(aDBRecord.getString("WardORvillageTractName"));
		ret.setVillageNameORcenterName(aDBRecord.getString("VillagenameORcentername"));
		ret.setAddress(aDBRecord.getString("Address"));
		ret.setRemarks(aDBRecord.getString("Remarks"));
		ret.setGroupCommittees(aDBRecord.getString("GroupCommittees"));
		ret.setReplaceORsubstitute(aDBRecord.getString("ReplaceORsubstitute"));
		ret.setGroupDissolveDate(aDBRecord.getString("GroupDissolveDate"));
		ret.setOldGroup(aDBRecord.getString("OldGroup"));
		ret.setPhNumber(aDBRecord.getString("PhoneNo"));
		ret.setDob(aDBRecord.getString("DOB"));
		ret.setFilePath(aDBRecord.getString("UploadFilePath"));
		
		return   ret;
	}
	public  static   DBRecord setDBRecord(String pTableName,FinanceData aObj){
		DBRecord ret = define(pTableName);
		ret.setValue("id",aObj.getId());       
		ret.setValue("createdDate",aObj.getCreatedDate());       
		ret.setValue("modifiedDate",aObj.getModifiedDate());       
		ret.setValue("userId",aObj.getUserId());       
		ret.setValue("userName",aObj.getUserName());       
		ret.setValue("recordStatus",aObj.getRecordStatus());       
//		ret.setValue("SyncStatus",aObj.getSyncStatus());       
//		ret.setValue("SyncBatch",aObj.getSyncBatch()); 
//		ret.setValue("usersyskey",aObj.getUsersyskey());   
		ret.setValue("centerNo",aObj.getCenterNo());
		ret.setValue("loaneeNo",aObj.getLoaneeNo());
		ret.setValue("groupNo",aObj.getGroupNo());
		ret.setValue("collectionDay",aObj.getCollectionDay());
		ret.setValue("loanOfficerName",aObj.getLoanOfficerName());
		ret.setValue("clientName",aObj.getClientName());
		ret.setValue("gender",aObj.getGender());
		ret.setValue("age",aObj.getAge());
		ret.setValue("currentAge", aObj.getCurrentAge());
		ret.setValue("husbandORfatherName",aObj.getHusbandORfatherName());
		ret.setValue("joiningDate", aObj.getJoiningDate());
		ret.setValue("nrcNumber" , aObj.getNrcNumber());
		ret.setValue("townshipName" , aObj.getTownshipName());
		
		ret.setValue("wardORvillageTractName" , aObj.getWardORvillageTractName());
		ret.setValue("VillageNameORcenterName" , aObj.getVillageNameORcenterName());
		ret.setValue("address" , aObj.getAddress());
		ret.setValue("remarks" , aObj.getRemarks());
		ret.setValue("groupCommittees" , aObj.getGroupCommittees());
		ret.setValue("replaceORsubstitute" , aObj.getReplaceORsubstitute());
		ret.setValue("groupDissolveDate" , aObj.getGroupDissolveDate());
		ret.setValue("oldGroup" , aObj.getOldGroup());
		ret.setValue("phNumber" , aObj.getPhNumber());
		ret.setValue("dob" , aObj.getDob());
		
		ret.setValue("filePath" , aObj.getFilePath());
		
		return   ret;
	}
	public static FinanceData readBySKForSlip(long syskey, Connection conn) throws SQLException {
		FinanceData ret = new FinanceData();
		ArrayList<DBRecord> dbrs = DBMgr.getDBRecords(define("slip001"), "where RecordStatus=1 AND syskey=" + syskey, "",
				conn);
		if (dbrs.size() > 0)
			ret = getDBRecord(dbrs.get(0));
		return ret;
	}
	
	public static FinanceDataSet search(AdvancedSearchData p, String searchVal, String type, String sort,String startDate, String endDate,
			 Connection l_Conn) throws SQLException {
		FinanceDataSet res = new FinanceDataSet();
		ArrayList<FinanceData> datalist = new ArrayList<>();
		
		String whereClause = " WHERE recordStatus=1";
		
		if (!(startDate.equalsIgnoreCase("")) && (!(endDate.equalsIgnoreCase("")))) {
			whereClause += " and (CreatedDate between '" + startDate + "'  and '" + endDate + " 23:59:59')";
		}
		String orderClause = "";

		if (type.equals("0")) {
			orderClause += " ORDER BY ID ";
		} else if (type.equals("1")) {
			orderClause += " ORDER BY t1 ";
		} else if (type.equals("2")) {
			orderClause += " ORDER BY t2 ";
		} else if (type.equals("3")) {
			orderClause += " ORDER BY t3 ";
		} else if (type.equals("4")) {
			orderClause += " ORDER BY t4 ";
		} else if (type.equals("6")) {
			orderClause += "ORDER BY t6 ";
		} else if (type.equals("7")) {
			orderClause += "ORDER BY t7 ";
		} else if (type.equals("11")) {
			orderClause += "ORDER BY t11 ";
		}

		if (sort.equals("asc")) {
			orderClause += " asc ";
		} else if (sort.equals("desc")) {
			orderClause += " desc ";
		}

		PagerData pgData = p.getPager();
		String searchStr = AdvancedSearchStringUtil.getSearchString(p.getSearch());

		if (!searchStr.equals("")) {
			whereClause += searchStr;
		}

		if (!searchVal.equals("")) {
				whereClause = "";
				whereClause += " WHERE RecordStatus=1 AND (GroupNo LIKE '%" + searchVal + "%' OR CenterNo LIKE '%" + searchVal + "%' )";
			
		}

		int start = pgData.getStart() - 1;
		ArrayList<DBRecord> dbrs = DBMgr.getDBRecordSandE(define("FinanceDATA"), whereClause, orderClause, start, pgData.getEnd(), 0,
				l_Conn);
		for (int i = 0; i < dbrs.size(); i++) {
//			String date = ServerUtil.ddMMyyyFormat1(dbrs.get(i).getString("t2"));
//			dbrs.get(i).setValue("t2", date);
			datalist.add(getDBRecord(dbrs.get(i)));
		}
		res.setPageSize(pgData.getSize());
		res.setCurrentPage(pgData.getCurrent());
		if (datalist.size() > 0) {
			res.setState(true);
			PreparedStatement stat = l_Conn
					.prepareStatement("SELECT COUNT(*) AS recCount FROM FinanceData" + whereClause);
			ResultSet result = stat.executeQuery();
			result.next();
			res.setTotalCount(result.getInt("recCount"));
			FinanceData[] dataarray = new FinanceData[datalist.size()];
			dataarray = datalist.toArray(dataarray);
			res.setData(dataarray);
		} else {
			res.setState(false);
		}
	

		return res;
	}

	public static FinanceDataSet searchFinanceDataExecl(AdvancedSearchData p, String searchVal, String type, String sort,
			 String sdate, String edate, Connection l_Conn) throws SQLException {
		ArrayList<FinanceData> datalist = new ArrayList<>();

		FinanceDataSet cds = new FinanceDataSet();
		
		String sql = "";
		String whereClause = " WHERE recordStatus=1";
		
		if (!(sdate.equalsIgnoreCase("")) && (!(edate.equalsIgnoreCase("")))) {
			whereClause += " and (CreatedDate between '" + sdate + "'  and '" + edate + "')";
		}
		String orderClause = "";

		if (type.equals("0")) {
			orderClause += " ORDER BY ID ";
		} else if (type.equals("1")) {
			orderClause += " ORDER BY t1 ";
		} else if (type.equals("2")) {
			orderClause += " ORDER BY t2 ";
		} else if (type.equals("3")) {
			orderClause += " ORDER BY t3 ";
		} else if (type.equals("4")) {
			orderClause += " ORDER BY t4 ";
		} else if (type.equals("6")) {
			orderClause += "ORDER BY t6 ";
		} else if (type.equals("7")) {
			orderClause += "ORDER BY t7 ";
		} else if (type.equals("11")) {
			orderClause += "ORDER BY t11 ";
		}

		if (sort.equals("asc")) {
			orderClause += " asc ";
		} else if (sort.equals("desc")) {
			orderClause += " desc ";
		}

		if (!searchVal.equals("")) {

			sql = "SELECT * FROM FinanceDATA where ( CreatedDate between '" + sdate + "'  and '"
					+ edate + " 23:59:59' ) and RecordStatus=1 AND  (CenterNo LIKE '%" + searchVal + "%' OR GroupNo LIKE '%" + searchVal
					+ "%' ) " + orderClause + " ";

		} else {
			sql = "SELECT * FROM FinanceData where ( CreatedDate between '" + sdate + "'  and '"
					+ edate + " 23:59:59' ) and recordStatus=1 " + orderClause + "";
		} 
		
		PreparedStatement stmt = l_Conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		while (rs.next()) {
			/*String date = ServerUtil.ddMMyyyFormat1(dbrs.get(i).getString("t2"));
			dbrs.get(i).setValue("t2", date);*/
			FinanceData cdata = new FinanceData();
			cdata.setId(rs.getInt("ID"));	
			cdata.setCreatedDate(rs.getString("CreatedDate"));
			cdata.setModifiedDate(rs.getString("ModifiedDate"));
			cdata.setUserId(rs.getInt("UserID"));
			cdata.setUserName(rs.getString("UserName"));
			cdata.setRecordStatus(rs.getInt("RecordStatus"));
			cdata.setCenterNo(rs.getString("CenterNo"));
			cdata.setGroupNo(rs.getString("GroupNo"));
			cdata.setLoaneeNo(rs.getString("LoaneeNo"));
			cdata.setCollectionDay(rs.getString("CollectionDay"));
			cdata.setLoanOfficerName(rs.getString("LoanOfficerName"));
			cdata.setClientName(rs.getString("ClientName"));
			cdata.setGender(rs.getString("Gender"));
			cdata.setAge(rs.getInt("Age"));
			cdata.setCurrentAge(rs.getInt("CurrentAge"));
			cdata.setHusbandORfatherName(rs.getString("HusbandORfatherName"));
			cdata.setJoiningDate(rs.getString("JoiningDate"));
			cdata.setNrcNumber(rs.getString("NRCNumber"));
			cdata.setTownshipName(rs.getString("TownshipName"));
			cdata.setWardORvillageTractName(rs.getString("WardORvillageTractName"));
			cdata.setVillageNameORcenterName(rs.getString("VillagenameORcentername"));
			cdata.setAddress(rs.getString("Address"));
			cdata.setRemarks(rs.getString("Remarks"));
			cdata.setGroupCommittees(rs.getString("GroupCommittees"));
			cdata.setReplaceORsubstitute(rs.getString("ReplaceORsubstitute"));
			cdata.setGroupDissolveDate(rs.getString("GroupDissolveDate"));
			cdata.setOldGroup(rs.getString("OldGroup"));
			cdata.setPhNumber(rs.getString("PhoneNo"));
			cdata.setDob(rs.getString("DOB"));
			cdata.setFilePath(rs.getString("UploadFilePath"));
			datalist.add(cdata);
		}

		if (datalist.size() > 0) {
			FinanceData[] dataArr = new FinanceData[datalist.size()];
			dataArr = (FinanceData[]) datalist.toArray(dataArr);
			cds.setData(dataArr);
			cds.setState(true);
		} else {
			cds.setState(false);
		}
		return cds;
	}

}
