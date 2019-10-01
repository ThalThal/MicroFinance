package com.diamondpalace.finance.shared;



import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@XmlRootElement
@JsonIgnoreProperties(ignoreUnknown=true)
public class BarCodeData {
	
	private long syskey;
	private long autokey;
	private String createddate;
	private String modifieddate;
	private String userid;
	private String username;
	private String BarCode;
	private int recordStatus;	
	private String Msg;	
	private boolean state = false;
	private int status;
	
	

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

	public String getBarCode() {
		return BarCode;
	}

	public void setBarCode(String barCode) {
		BarCode = barCode;
	}

	public int getRecordStatus() {
		return recordStatus;
	}

	public void setRecordStatus(int recordStatus) {
		this.recordStatus = recordStatus;
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
		this.BarCode = "";
		this.Msg = "";
		this.state =false;
		this.status=0;
	}

	@Override
	public String toString() {
		return "BarCodeData [syskey=" + syskey + ", autokey=" + autokey + ", createddate=" + createddate
				+ ", modifieddate=" + modifieddate + ", userid=" + userid + ", username=" + username + ", recordStatus="
				+ recordStatus + ", BarCode=" + BarCode + " , Msg=" + Msg + ", state=" + state + "]";
	}
   public void setStatus(int status){
	   this.status=status;
   }
	public int getStatus() {
		// TODO Auto-generated method stub
		
		return status;
	}
	

}

