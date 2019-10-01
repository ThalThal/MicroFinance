package com.diamondpalace.finance.dao;

import java.io.File;
import java.sql.Connection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.diamondpalace.finance.framework.Profile;
import com.diamondpalace.finance.framework.ServerSession;
import com.diamondpalace.finance.service.FinanceData;
import com.diamondpalace.finance.service.SIDProfile;

import jxl.write.DateTime;

public class ControlDao {

	/**
	 * @param p
	 * @param con
	 * @return
	 * @throws SQLException
	 */
	public static FinanceData register(FinanceData p, Connection con) throws SQLException {
		FinanceData fd = new FinanceData();
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
		String createdDate = format.format( new Date());
		String modifiedDate = format.format( new Date());
		
		String sql = "INSERT INTO FinanceDATA(CenterNo,GroupNo,LoaneeNo,CollectionDay,LoanOfficerName,ClientName,Gender,Age,CurrentAge,HusbandORfatherName,JoiningDate,NRCNumber,TownshipName,WardORvillageTractName,VillagenameORcentername,Address,Remarks,GroupCommittees,ReplaceORsubstitute,GroupDissolveDate,OldGroup,PhoneNo,DOB,CreatedDate,ModifiedDate,UserID,UserName,RecordStatus,UploadFilePath) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		PreparedStatement stat = con.prepareStatement(sql);
		stat.setString(1, p.getCenterNo());
		stat.setString(2, p.getGroupNo());
		stat.setString(3, p.getLoaneeNo());
		stat.setString(4, p.getCollectionDay());
		stat.setString(5, p.getLoanOfficerName());
		stat.setString(6, p.getClientName());
		stat.setString(7, p.getGender());
		stat.setInt(8, p.getAge());
		stat.setInt(9, p.getCurrentAge());
		stat.setString(10, p.getHusbandORfatherName());
		stat.setString(11, p.getJoiningDate());
		stat.setString(12, p.getNrcNumber());
		stat.setString(13, p.getTownshipName());
		stat.setString(14, p.getWardORvillageTractName());
		stat.setString(15, p.getVillageNameORcenterName());
		stat.setString(16, p.getAddress());
		stat.setString(17, p.getRemarks());
		stat.setString(18, p.getGroupCommittees());
		stat.setString(19, p.getReplaceORsubstitute());
		stat.setString(20, p.getGroupDissolveDate());
		stat.setString(21, p.getOldGroup());
		stat.setString(22, p.getPhNumber());
		stat.setString(23 , p.getDob());
		stat.setString(24 , createdDate);
		stat.setString(25, modifiedDate);
		stat.setString(26, "1");
		stat.setString(27, "user");
		stat.setInt(28, 1);
		stat.setString(29, p.getFilePath());
		
		if(stat.executeUpdate()>0)		
		{
			System.out.print("Registration Successful");
			fd.setResult("Register");
			
		}else{
			System.out.print("Registration not Successful");
			fd.setResult("Not Register");		
		}	
	return fd;
	}

	public static FinanceData Delete(FinanceData fdata, Connection conn) {
		FinanceData result = new FinanceData();
		String sql = "UPDATE FinanceDATA SET RecordStatus=? WHERE ID=? AND RecordStatus=?";
		PreparedStatement stmt;
		int count = 0;
		try {
			stmt = conn.prepareStatement(sql);
			stmt.setInt(1,4);
			stmt.setInt(2, fdata.getId());
			stmt.setInt(3, 1);
			File l_file = new File(fdata.getFilePath());
			l_file.delete();
			if (!l_file.exists()) {
				 count = stmt.executeUpdate();
			}
			if(count > 0){
				result.setState(true);
			}
			else{
			result.setState(false);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return result;
	}

	public static FinanceData checkForUpdateData(int id, Connection conn) {
		FinanceData result = new FinanceData();
		String sql = "Select * from FinanceDATA WHERE ID=? AND RecordStatus=1";
		try {
			PreparedStatement stmt = conn.prepareStatement(sql);
			stmt.setInt(1,id);
			ResultSet rs=stmt.executeQuery();
			while(rs.next()){
				result.setId(rs.getInt("ID"));
				result.setCenterNo(rs.getString("CenterNo"));
				result.setGroupNo(rs.getString("GroupNo"));
				result.setLoaneeNo(rs.getString("LoaneeNo"));
				result.setCollectionDay(rs.getString("CollectionDay"));
				result.setLoanOfficerName(rs.getString("LoanOfficerName"));
				result.setClientName(rs.getString("ClientName"));
				result.setGender(rs.getString("Gender"));
				result.setAge(rs.getInt("Age"));
				result.setCurrentAge(rs.getInt("CurrentAge"));
				result.setHusbandORfatherName(rs.getString("HusbandORfatherName"));
				result.setJoiningDate(rs.getString("JoiningDate"));
				result.setNrcNumber(rs.getString("NRCNumber"));
				result.setTownshipName(rs.getString("TownshipName"));
				result.setWardORvillageTractName(rs.getString("WardORvillageTractName"));
				result.setVillageNameORcenterName(rs.getString("VillageNameORcenterName"));
				result.setAddress(rs.getString("Address"));
				result.setRemarks(rs.getString("Remarks"));
				result.setGroupCommittees(rs.getString("GroupCommittees"));
				result.setReplaceORsubstitute(rs.getString("ReplaceORsubstitute"));
				result.setGroupDissolveDate(rs.getString("GroupDissolveDate"));
				result.setOldGroup(rs.getString("OldGroup"));
				result.setPhNumber(rs.getString("PhoneNo"));
				result.setDob(rs.getString("DOB"));
				result.setFilePath( rs.getString("UploadFilePath"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
		
		return result;
	}

}
