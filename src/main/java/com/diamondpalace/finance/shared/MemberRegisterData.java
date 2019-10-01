package com.diamondpalace.finance.shared;



import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@XmlRootElement
@JsonIgnoreProperties(ignoreUnknown=true)
public class MemberRegisterData {
	
	private long syskey;
	private long autokey;
	private String createddate;
	private String modifieddate;
	private String validdate;
	private String userid;
	private String username;
	private String t1;
	private String DateOfBirth;
	private long PhoneNumber;
	private String Address;
	private int recordStatus;
	private String BarCode;
	private int Status;
	private String NRC;
	private String Msg;	
	private boolean state = false;
	
	
	public String getNRC() {
		return NRC;
	}



	public void setNRC(String nRC) {
		NRC = nRC;
	}



	public String getBarCode() {
		return BarCode;
	}



	public void setBarCode(String barCode) {
		BarCode = barCode;
	}



	public int getStatus() {
		return Status;
	}



	public void setStatus(int status) {
		Status = status;
	}



	public String getValiddate() {
		return validdate;
	}



	public void setValiddate(String validdate) {
		this.validdate = validdate;
	}

	

	public MemberRegisterData() {
		clearProperties();
		
	}

	

	public String getT1() {
		return t1;
	}



	public void setT1(String t1) {
		this.t1 = t1;
	}



	public long getSyskey() {
		return syskey;
	}

	public void setSyskey(long syskey) {
		this.syskey = syskey;
	}

	public long getAutokey() {
		return autokey;
	}

	public void setAutokey(long autokey) {
		this.autokey = autokey;
	}

	public String getCreateddate() {
		return createddate;
	}

	public void setCreateddate(String createddate) {
		this.createddate = createddate;
	}

	public String getModifieddate() {
		return modifieddate;
	}

	public void setModifieddate(String modifieddate) {
		this.modifieddate = modifieddate;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getRecordStatus() {
		return recordStatus;
	}

	public void setRecordStatus(int recordStatus) {
		this.recordStatus = recordStatus;
	}

	
	public String getDateOfBirth() {
		return DateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		DateOfBirth = dateOfBirth;
	}

	public long getPhoneNumber() {
		return PhoneNumber;
	}


	public void setPhoneNumber(long phoneNumber) {
		PhoneNumber = phoneNumber;
	}


	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public String getMsg() {
		return Msg;
	}

	public void setMsg(String Msg) {
		this.Msg = Msg;
	}
	
	public boolean isState() {
		return state;
	}

	public void setState(boolean state) {
		this.state = state;
	}

	public void clearProperties() {
		this.syskey = 0;
		this.autokey = 0;
		this.createddate = "";
		this.modifieddate = "";
		this.userid = "";
		this.username = "";
		this.recordStatus = 0;
		this.DateOfBirth = "";
		this.PhoneNumber = 0;
		this.Address = "";
		this.t1="";
		this.BarCode="";
		this.Status=0;
		this.NRC="";
		this.Msg = "";
		this.state =false;
	}

	@Override
	public String toString() {
		return "MemberRegisterData [syskey=" + syskey + ", autokey=" + autokey + ", createddate=" + createddate
				+ ", modifieddate=" + modifieddate + ", userid=" + userid + ", username=" + username + ", recordStatus="
				+ recordStatus + ", DateOfBirth = "+ DateOfBirth +" ,PhoneNumber = "+ PhoneNumber +",Address = "+ Address +",t1 = "+ t1 +",BarCode = "+ BarCode +", Status = "+ Status +",  NRC=" + NRC + ", Msg=" + Msg + ", state=" + state + "]";
	}
	

}

