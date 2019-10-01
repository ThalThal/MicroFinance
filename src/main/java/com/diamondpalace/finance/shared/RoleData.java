package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class RoleData{
	private long syskey;
	private long autokey;
	private String createdDate;
	private String modifiedDate;
	private String userId;
	private String userName;
	private int recordStatus;
	private int syncStatus;
	private long syncBatch;	
	private long usersyskey;
	private String t1;
	private String t2;
	private String t3;
	private long n1;
	private long n2;
	private long n3;
	
	private ButtonCarryData[] btnarr;	
    private RoleMenuData[] menu;
    
	public RoleData() {
		clearProperties();
	}

	public long getSyskey() {
		return syskey;
	}

	public long getUsersyskey() {
		return usersyskey;
	}

	public void setUsersyskey(long usersyskey) {
		this.usersyskey = usersyskey;
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

	public String getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(String createdDate) {
		this.createdDate = createdDate;
	}

	public String getModifiedDate() {
		return modifiedDate;
	}

	public void setModifiedDate(String modifiedDate) {
		this.modifiedDate = modifiedDate;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public int getRecordStatus() {
		return recordStatus;
	}

	public void setRecordStatus(int recordStatus) {
		this.recordStatus = recordStatus;
	}

	public int getSyncStatus() {
		return syncStatus;
	}

	public void setSyncStatus(int syncStatus) {
		this.syncStatus = syncStatus;
	}

	public long getSyncBatch() {
		return syncBatch;
	}

	public void setSyncBatch(long syncBatch) {
		this.syncBatch = syncBatch;
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

	public long getN1() {
		return n1;
	}

	public void setN1(long n1) {
		this.n1 = n1;
	}

	public long getN2() {
		return n2;
	}

	public void setN2(long n2) {
		this.n2 = n2;
	}

	public long getN3() {
		return n3;
	}

	public void setN3(long n3) {
		this.n3 = n3;
	}

	public RoleMenuData[] getMenu() {
		return menu;
	}

	public void setMenu(RoleMenuData[] menu) {
		this.menu = menu;
	}
	
	public ButtonCarryData[] getBtnarr() {
		return btnarr;
	}

	public void setBtnarr(ButtonCarryData[] btnarr) {
		this.btnarr = btnarr;
	}

	private void clearProperties() {
		this.syskey = 0;
		this.autokey = 0;
		this.createdDate = "";
		this.modifiedDate = "";
		this.userId = "";
		this.userName = "";
		this.recordStatus = 0;
		this.syncStatus = 0;
		this.syncBatch = 0;
		this.usersyskey=0;
		this.t1 = "";
		this.t2 = "";
		this.t3 = "";
		this.n1 = 0;
		this.n2 = 0;
		this.n3 = 0;
		this.btnarr = new ButtonCarryData[0];
		this.menu = new RoleMenuData[0];
	}
}
