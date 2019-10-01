package com.diamondpalace.finance.shared;



import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@XmlRootElement
@JsonIgnoreProperties(ignoreUnknown=true)
public class PriceData {
	
	private long syskey;
	private long autokey;
	private String createddate;
	private String modifieddate;
	private String userid;
	private String username;
	private String t1;
	private String t2;
	private String t3;
	private String t4;
	private String t5;
	private String n1;
	private int recordStatus;	
	private String Msg;	
	private boolean state = false;
	private PriceData [] addArray;
	
	public PriceData[] getAddArray() {
		return addArray;
	}
	public void setAddArray(PriceData[] addArray) {
		this.addArray = addArray;
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
	public String getT1() {
		return t1;
	}
	public void setT1(String t1) {
		this.t1 = t1;
	}
	public String getT2() {
		return t2;
	}
	public void setT2(String t2) {
		this.t2 = t2;
	}
	
	public String getT3() {
		return t3;
	}
	public void setT3(String t3) {
		this.t3 = t3;
	}
	public String getT4() {
		return t4;
	}
	public void setT4(String t4) {
		this.t4 = t4;
	}
	
	public String getT5() {
		return t5;
	}
	public void setT5(String t5) {
		this.t5 = t5;
	}
	public String getN1() {
		return n1;
	}
	public void setN1(String n1) {
		this.n1 = n1;
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
	public void setMsg(String msg) {
		Msg = msg;
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
		this.t1 = "";
		this.t2 = "";
		this.t3 = "";
		this.t4 = "";
		this.n1="";
		this.recordStatus = 0;
		this.Msg = "";
		this.state =false;
		this.addArray = new PriceData[0];
	}

	
	
	
}