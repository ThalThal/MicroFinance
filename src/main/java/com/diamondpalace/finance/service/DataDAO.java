package com.diamondpalace.finance.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import com.diamondpalace.finance.dao.AdvancedSearchData;
import com.diamondpalace.finance.framework.MrBean;
import com.diamondpalace.finance.framework.Profile;
import com.diamondpalace.finance.util.ServerUtil;
import com.nirvasoft.database.DBField;
import com.nirvasoft.database.DBMgr;
import com.nirvasoft.database.DBRecord;

import jxl.write.DateFormat;
import jxl.write.DateTime;

public class DataDAO {

	public static SIDDataSet searchSIDExecl(AdvancedSearchData p,  String type, String sort,
			 String sdate, String edate, Connection l_Conn) throws SQLException {
		ArrayList<SIDData> datalist = new ArrayList<>();

		SIDDataSet cds = new SIDDataSet();		


		
		String sql = " SELECT *  FROM tbSIDApplication WHERE (APPOINTMENTDATE between '" + sdate + "'  and '" + edate + "')  ORDER BY APPOINTMENTDATE asc";
		PreparedStatement stmt = l_Conn.prepareStatement(sql);
		ResultSet result = stmt.executeQuery();
		while (result.next()) {
			/*String date = ServerUtil.ddMMyyyFormat1(dbrs.get(i).getString("t2"));
			dbrs.get(i).setValue("t2", date);*/
			SIDData sdata = new SIDData();
			sdata.setID(result.getString("ID"));
			sdata.setCDC_NO(result.getString("CDC_NO"));
			sdata.setQUEUE_NO(result.getString("QUEUE_NO"));
			sdata.setTRANSACTION_CODE(result.getString("TRANSACTION_CODE"));
			sdata.setNAME(result.getString("NAME"));
			sdata.setOTHER_NAME(result.getString("RANK"));
			sdata.setDOB(result.getDate("DOB"));
			sdata.setNRC_NO(result.getString("POB"));
			sdata.setNATIONALITY(result.getString("MANNING_AGENT"));
			sdata.setGENDER(result.getString("GENDER"));
			sdata.setHEIGHT(result.getString("WEIGHT"));
			sdata.setCOMPLEXION(result.getString("COMPLEXION"));
			sdata.setCOMPLEXION(result.getString("MARITAL_STATUS_CODE"));
			sdata.setEDUCATION(result.getString("EDUCATION"));
			sdata.setIDENTIFYING_CHARACTERISTICS(result.getString("IDENTIFYING_CHARACTERISTICS"));
			sdata.setRELIGION_CODE(result.getString("RELIGION_CODE"));
			sdata.setTELEPHONE_NUMBER(result.getString("SEASERVICE_DATE_START"));
			
			sdata.setPASSPORT_NUMBER(result.getString("PASSPORT_NUMBER"));
			sdata.setPASSPORT_ISSUE_DATE(result.getDate("PASSPORT_ISSUE_DATE"));
			sdata.setPASSPORT_EXPIRY_DATE(result.getDate("PASSPORT_EXPIRy_DATE"));
			sdata.setPASSPORT_ISSUE_BY(result.getString("PASSPORT_ISSUE_BY"));
			sdata.setPASSPORT_ISSUE_PLACE(result.getString("PASSPORT_ISSUE_PLACE"));
			sdata.setCODEINDEX(result.getString("CODEINDEX"));
			sdata.setCDC_ISSUE_DATE(result.getDate("CDC_EXPIRY_DATE"));
			sdata.setCDC_ISSUE_BY(result.getString("CDC_ISSUE_BY"));
			sdata.setCDC_ISSUE_PLACE(result.getString("CDC_ISSUE_PLACE"));
			sdata.setFATHER_NAME(result.getString("FATHER_NAME"));
			sdata.setMOTHER_NAME(result.getString("MOTHER_NAME"));
			sdata.setMOTHER_NRC(result.getString("MOTHER_NRC"));
			sdata.setADDRESS_PERMANENT(result.getString("ADDRESS_PERMANENT"));
			sdata.setADDRESS_TEMPORARY(result.getString("ADDRESS_TEMPORARY"));
			sdata.setNOK_NAME(result.getString("NOK_NAME"));
			sdata.setNOK_RELATION(result.getString("NOK_RELATION"));
			sdata.setNOK_ADDRESS(result.getString("NOK_ADDRESS"));
			sdata.setSHIP_NAME(result.getString("SHIP_NAME"));
			sdata.setSIGNON_DATE(result.getDate("SIGNON_DATE"));
			sdata.setSIGNOFF_DATE(result.getDate("SIGNOFF_DATE"));
			sdata.setAPPOINTMENTDATE(result.getDate("APPOINTMENTDATE"));
			sdata.setACCESSTIME(result.getTimestamp("ACCESSTIME"));
			sdata.setTELEPHONE_NUMBER(result.getString("TELEPHONE_NUMBER"));
			sdata.setEMAIL(result.getString("EMAIL"));
			sdata.setISDELETED(result.getString("ISDELETED"));
			sdata.setISISSUED(result.getString("ISISSUED"));
			
			datalist.add(sdata);
		}

		if (datalist.size() > 0) {
			SIDData[] dataArr = new SIDData[datalist.size()];
			dataArr = (SIDData[]) datalist.toArray(dataArr);
			cds.setData(dataArr);
			cds.setState(true);
		} else {
			cds.setState(false);
		}
		return cds;
	}
	
	
	public static Profile Check(DeleteData data, Connection con) throws SQLException {
		Profile p = new Profile();
		String cdcno = data.getCdcno();
		String sql = " SELECT *  FROM tbSIDApplication WHERE CDC_NO=?";
		PreparedStatement stat = con.prepareStatement(sql);
		stat.setString(1, cdcno);
		ResultSet result = stat.executeQuery();		
		if (result.next()) {		
			p.setCdcno(result.getString("CDC_NO"));
			p.setAppId(result.getString("TRANSACTION_CODE"));
			p.setqNo(result.getString("QUEUE_NO"));
			p.setName(result.getString("NAME"));
			p.setAppDate(result.getDate("APPOINTMENTDATE"));
			p.settNo(result.getString("TELEPHONE_NUMBER"));
			p.setEmail(result.getString("EMAIL"));
			p.setPassNo(result.getString("PASSPORT_NUMBER"));
			
			p.setCommandCenter(true);
				}else{
					p.setCommandCenter(false);
				}	
	return p;

	}
	public static Profile updateData(Profile data, Connection con) throws SQLException {
		Profile p = new Profile();
		System.out.print("TELEPHONE NUMBER"+ data.gettNo());
		String sql = " UPDATE tbSIDApplication SET EMAIL=?,APPOINTMENTDATE=?,TELEPHONE_NUMBER=? WHERE CDC_NO=?";
		PreparedStatement stat = con.prepareStatement(sql);
		stat.setString(1, data.getEmail());
		stat.setDate(2, data.getAppDate());
		stat.setString(3, data.gettNo());
		stat.setString(4, data.getCdcno());
		
		if(stat.executeUpdate()>0)		
		{
			System.out.print("UPDate Successful");
			p.setCommandCenter(true);
				}else{
					System.out.print("UPDate not Successful");
					p.setCommandCenter(false);
				}	
	return p;

	}
	public static Profile deleteData(Profile  p, Connection con) throws SQLException {
		Profile profile = new Profile();
		String cdcno = p.getCdcno();		
		String sql = " SELECT *  FROM tbSIDApplication WHERE CDC_NO=?";
		PreparedStatement stat = con.prepareStatement(sql);
		stat.setString(1, cdcno);
		SIDData sdata = new SIDData();

		ResultSet result = stat.executeQuery();
		
		if (result.next()) {
		
			sdata.setID(result.getString("ID"));
			sdata.setCDC_NO(result.getString("CDC_NO"));
			sdata.setQUEUE_NO(result.getString("QUEUE_NO"));
			sdata.setTRANSACTION_CODE(result.getString("TRANSACTION_CODE"));
			sdata.setNAME(result.getString("NAME"));
			sdata.setOTHER_NAME(result.getString("OTHER_NAME"));
			sdata.setRANK(result.getString("RANK"));
			sdata.setDOB(result.getDate("DOB"));
			sdata.setNRC_NO(result.getString("NRC_NO"));
			sdata.setPOB(result.getString("POB"));
			sdata.setNATIONALITY(result.getString("NATIONALITY"));
			sdata.setMANNING_AGENT(result.getString("MANNING_AGENT"));
			sdata.setGENDER(result.getString("GENDER"));
			sdata.setHEIGHT(result.getString("WEIGHT"));
			sdata.setCOMPLEXION(result.getString("COMPLEXION"));
			sdata.setMARITAL_STATUS_CODE(result.getString("MARITAL_STATUS_CODE"));
			sdata.setEDUCATION(result.getString("EDUCATION"));
			sdata.setIDENTIFYING_CHARACTERISTICS(result.getString("IDENTIFYING_CHARACTERISTICS"));
			sdata.setRELIGION_CODE(result.getString("RELIGION_CODE"));
			sdata.setTELEPHONE_NUMBER(result.getString("TELEPHONE_NUMBER"));
			sdata.setSEASERVICE_DATE_START(result.getString("SEASERVICE_DATE_START"));
			
			sdata.setPASSPORT_NUMBER(result.getString("PASSPORT_NUMBER"));
			sdata.setPASSPORT_ISSUE_DATE(result.getDate("PASSPORT_ISSUE_DATE"));
			sdata.setPASSPORT_EXPIRY_DATE(result.getDate("PASSPORT_EXPIRY_DATE"));
			sdata.setPASSPORT_ISSUE_BY(result.getString("PASSPORT_ISSUE_BY"));
			sdata.setPASSPORT_ISSUE_PLACE(result.getString("PASSPORT_ISSUE_PLACE"));
			sdata.setCODEINDEX(result.getString("CODEINDEX"));
			sdata.setCDC_ISSUE_DATE(result.getDate("CDC_EXPIRY_DATE"));
			sdata.setCDC_ISSUE_BY(result.getString("CDC_ISSUE_BY"));
			sdata.setCDC_ISSUE_PLACE(result.getString("CDC_ISSUE_PLACE"));
			sdata.setFATHER_NAME(result.getString("FATHER_NAME"));
			sdata.setMOTHER_NAME(result.getString("MOTHER_NAME"));
			sdata.setMOTHER_NRC(result.getString("MOTHER_NRC"));
			sdata.setADDRESS_PERMANENT(result.getString("ADDRESS_PERMANENT"));
			sdata.setADDRESS_TEMPORARY(result.getString("ADDRESS_TEMPORARY"));
			sdata.setNOK_NAME(result.getString("NOK_NAME"));
			sdata.setNOK_RELATION(result.getString("NOK_RELATION"));
			sdata.setNOK_ADDRESS(result.getString("NOK_ADDRESS"));
			sdata.setSHIP_NAME(result.getString("SHIP_NAME"));
			sdata.setSIGNON_DATE(result.getDate("SIGNON_DATE"));
			sdata.setSIGNOFF_DATE(result.getDate("SIGNOFF_DATE"));
			sdata.setAPPOINTMENTDATE(result.getDate("APPOINTMENTDATE"));
			sdata.setACCESSTIME(result.getTimestamp("ACCESSTIME"));
			sdata.setISDELETED(result.getString("ISDELETED"));
			sdata.setEMAIL(result.getString("EMAIL"));
			
			
			
			
			
			String insertSql = "INSERT INTO tbSIDApplicationCancel(CDC_NO,QUEUE_NO,TRANSACTION_CODE,REASON,NAME,OTHER_NAME,RANK,DOB,NRC_NO,POB,NATIONALITY,MANNING_AGENT,GENDER,HEIGHT,WEIGHT,COMPLEXION,MARITAL_STATUS_CODE,EDUCATION,IDENTIFYING_CHARACTERISTICS,RELIGION_CODE,TELEPHONE_NUMBER,SEASERVICE_DATE_START,PASSPORT_NUMBER,PASSPORT_ISSUE_DATE,PASSPORT_EXPIRY_DATE,PASSPORT_ISSUE_BY,PASSPORT_ISSUE_PLACE,CODEINDEX,CDC_ISSUE_DATE,CDC_EXPIRY_DATE,CDC_ISSUE_BY,CDC_ISSUE_PLACE,FATHER_NAME,FATHER_NRC,MOTHER_NAME,MOTHER_NRC,ADDRESS_PERMANENT,ADDRESS_TEMPORARY,NOK_NAME,NOK_RELATION,NOK_ADDRESS,SHIP_NAME,SIGNON_DATE,SIGNOFF_DATE,APPOINTMENTDATE,ACCESSTIME,ISDELETED,ISISSUED,EMAIL,USERNAME,UPDATETIME) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
			Date now = new Date();
			String date =dateformat.format(now);
			PreparedStatement insertStat = con.prepareStatement(insertSql);
			insertStat.setString(1, sdata.getCDC_NO());
			insertStat.setString(2, sdata.getQUEUE_NO());
			insertStat.setString(3, sdata.getTRANSACTION_CODE());
			insertStat.setString(4,sdata.getREASON());
			insertStat.setString(5, sdata.getNAME());
			insertStat.setString(6, sdata.getOTHER_NAME());
			insertStat.setString(7, sdata.getRANK());
			insertStat.setDate(8, sdata.getDOB());
			insertStat.setString(9, sdata.getNRC_NO());
			insertStat.setString(10, sdata.getPOB());
			insertStat.setString(11, sdata.getNATIONALITY());
			insertStat.setString(12, sdata.getMANNING_AGENT());
			insertStat.setString(13, sdata.getGENDER());
			insertStat.setString(14, sdata.getHEIGHT());
			insertStat.setString(15, sdata.getWEIGHT());
			insertStat.setString(16, sdata.getCOMPLEXION());
			insertStat.setString(17, sdata.getMARITAL_STATUS_CODE());
			insertStat.setString(18, sdata.getEDUCATION());
			insertStat.setString(19, sdata.getIDENTIFYING_CHARACTERISTICS());
			insertStat.setString(20, sdata.getRELIGION_CODE());
			insertStat.setString(21, sdata.getTELEPHONE_NUMBER());
			insertStat.setString(22, sdata.getSEASERVICE_DATE_START());
			insertStat.setString(23, sdata.getPASSPORT_NUMBER());
			insertStat.setDate(24, sdata.getPASSPORT_ISSUE_DATE());
			insertStat.setDate(25, sdata.getPASSPORT_EXPIRY_DATE());
			insertStat.setString(26, sdata.getPASSPORT_ISSUE_BY());
			insertStat.setString(27, sdata.getPASSPORT_ISSUE_PLACE());
			insertStat.setString(28, sdata.getCODEINDEX());
			insertStat.setDate(29, sdata.getCDC_ISSUE_DATE());
			insertStat.setDate(30, sdata.getCDC_EXPIRY_DATE());
			insertStat.setString(31, sdata.getCDC_ISSUE_BY());
			insertStat.setString(32, sdata.getCDC_ISSUE_PLACE());
			insertStat.setString(33, sdata.getFATHER_NAME());
			insertStat.setString(34, sdata.getFATHER_NRC());
			insertStat.setString(35, sdata.getMOTHER_NAME());
			insertStat.setString(36, sdata.getMOTHER_NRC());
			insertStat.setString(37, sdata.getADDRESS_PERMANENT());
			insertStat.setString(38, sdata.getADDRESS_TEMPORARY());
			insertStat.setString(39, sdata.getNOK_NAME());
			insertStat.setString(40, sdata.getNOK_RELATION());
			insertStat.setString(41, sdata.getNOK_ADDRESS());
			insertStat.setString(42, sdata.getSHIP_NAME());
			insertStat.setDate(43, sdata.getSIGNON_DATE());
			insertStat.setDate(44, sdata.getSIGNOFF_DATE());
			insertStat.setDate(45, sdata.getAPPOINTMENTDATE());
			insertStat.setTimestamp(46, sdata.getACCESSTIME());
			insertStat.setString(47, sdata.getISDELETED());
			insertStat.setString(48, sdata.getISISSUED());
			insertStat.setString(49, sdata.getEMAIL());
			insertStat.setString(50, p.getUsername());			
			insertStat.setString(51, date);
			if(insertStat.executeUpdate()> 0){	
				String deleteQuery = "DELETE FROM tbSIDApplication WHERE CDC_NO=?";
				PreparedStatement deleteStat = con.prepareStatement(deleteQuery);
				deleteStat.setString(1, cdcno);
				if(deleteStat.executeUpdate()>0)
				{
					System.out.println("Delete Successful");
					profile.setRole(1);
					System.out.println(profile.getRole());
				}
				else{
					System.out.println("Delete UnSuccessful");
				}
			}else{
				System.out.println("Insert UnSuccessful");
			}
			
			}
		
		
	
	return profile;

	}
	public static SIDDataSet searchSIDData(DeleteData data, Connection con) throws SQLException {
		SIDDataSet res = new SIDDataSet();
		Profile p = new Profile();
		String cdcno = data.getCdcno();
		String name = data.getName();
		String sql = " SELECT *  FROM tbSIDApplication WHERE CDC_NO=? OR NAME=?";
		ArrayList<SIDData> datalist = new ArrayList<>();
		PreparedStatement stat = con.prepareStatement(sql);
		stat.setString(1, cdcno);
		stat.setString(2, name);
		SIDData sdata = new SIDData();

		ResultSet result = stat.executeQuery();
		
		while (result.next()) {
		
			sdata.setID(result.getString("ID"));
			sdata.setCDC_NO(result.getString("CDC_NO"));
			sdata.setQUEUE_NO(result.getString("QUEUE_NO"));
			sdata.setTRANSACTION_CODE(result.getString("TRANSACTION_CODE"));
			sdata.setNAME(result.getString("NAME"));
			sdata.setOTHER_NAME(result.getString("RANK"));
			sdata.setDOB(result.getDate("DOB"));
			sdata.setNRC_NO(result.getString("POB"));
			sdata.setNATIONALITY(result.getString("MANNING_AGENT"));
			sdata.setGENDER(result.getString("GENDER"));
			sdata.setHEIGHT(result.getString("WEIGHT"));
			sdata.setCOMPLEXION(result.getString("COMPLEXION"));
			sdata.setCOMPLEXION(result.getString("MARITAL_STATUS_CODE"));
			sdata.setEDUCATION(result.getString("EDUCATION"));
			sdata.setIDENTIFYING_CHARACTERISTICS(result.getString("IDENTIFYING_CHARACTERISTICS"));
			sdata.setRELIGION_CODE(result.getString("RELIGION_CODE"));
			sdata.setTELEPHONE_NUMBER(result.getString("SEASERVICE_DATE_START"));
			
			sdata.setPASSPORT_NUMBER(result.getString("PASSPORT_NUMBER"));
			sdata.setPASSPORT_ISSUE_DATE(result.getDate("PASSPORT_ISSUE_DATE"));
			sdata.setPASSPORT_EXPIRY_DATE(result.getDate("PASSPORT_EXPIRy_DATE"));
			sdata.setPASSPORT_ISSUE_BY(result.getString("PASSPORT_ISSUE_BY"));
			sdata.setPASSPORT_ISSUE_PLACE(result.getString("PASSPORT_ISSUE_PLACE"));
			sdata.setCODEINDEX(result.getString("CODEINDEX"));
			sdata.setCDC_ISSUE_DATE(result.getDate("CDC_EXPIRY_DATE"));
			sdata.setCDC_ISSUE_BY(result.getString("CDC_ISSUE_BY"));
			sdata.setCDC_ISSUE_PLACE(result.getString("CDC_ISSUE_PLACE"));
			sdata.setFATHER_NAME(result.getString("FATHER_NAME"));
			sdata.setMOTHER_NAME(result.getString("MOTHER_NAME"));
			sdata.setMOTHER_NRC(result.getString("MOTHER_NRC"));
			sdata.setADDRESS_PERMANENT(result.getString("ADDRESS_PERMANENT"));
			sdata.setADDRESS_TEMPORARY(result.getString("ADDRESS_TEMPORARY"));
			sdata.setNOK_NAME(result.getString("NOK_NAME"));
			sdata.setNOK_RELATION(result.getString("NOK_RELATION"));
			sdata.setNOK_ADDRESS(result.getString("NOK_ADDRESS"));
			sdata.setSHIP_NAME(result.getString("SHIP_NAME"));
			sdata.setSIGNON_DATE(result.getDate("SIGNON_DATE"));
			sdata.setSIGNOFF_DATE(result.getDate("SIGNOFF_DATE"));
			sdata.setAPPOINTMENTDATE(result.getDate("APPOINTMENTDATE"));
			sdata.setACCESSTIME(result.getTimestamp("ACCESSTIME"));
			sdata.setISDELETED(result.getString("ISDELETED"));
			sdata.setISISSUED(result.getString("EMAIL"));
			
			datalist.add(sdata);		
			
			
		}
		SIDData[] dataarray = new SIDData[datalist.size()];
		dataarray = datalist.toArray(dataarray);
		res.setData(dataarray);
		
	
	return res;

	}
	public static SIDProfile login(Profile p, Connection con) throws SQLException {
		SIDProfile sidprofile = new SIDProfile();
		String psw = p.getPassword();
		psw = ServerUtil.encryptPIN(psw);
		String sql = " SELECT *  FROM dbuser WHERE NAME=? AND PASSWORD=?";
		PreparedStatement stat = con.prepareStatement(sql);
		stat.setString(1, p.getUsername());
		stat.setString(2, psw);
		ResultSet result = stat.executeQuery();		
		if (result.next()) {		
			sidprofile.setRole(result.getInt("ROLE"));
			sidprofile.setUsername(result.getString("NAME"));
			sidprofile.setCheck(true);		
				}else{
					sidprofile.setCheck(false);					
				}	
	return sidprofile;
		
	}
	
}
