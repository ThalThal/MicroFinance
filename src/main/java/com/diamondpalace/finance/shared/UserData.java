package com.diamondpalace.finance.shared;

import java.util.Arrays;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class UserData {
	private long syskey;
	private long autokey;
	private String createdDate;
	private String modifiedDate;
	private String userId;
	private String userName;
	private String password;
	private String organizationID;
	private int recordStatus;
	private int syncStatus;
	private long syncBatch;
	private long usersyskey;
	private String t1;
	private String t2;
	private String t3;
	private String t4;
	private String t5;
	private String t6;
	private String t7;
	private long n1;
	private int n2;
	private long n3;
	private long n4;
	private int n5;
	private int n6;
	private int n7;
	private long n8;
	private long[] rolesyskey;
	private UserRoleViewData[] userrolelist;
	private PersonData person;
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public UserData() {
		clearProperties();
	}

	public UserRoleViewData[] getUserrolelist() {
		return userrolelist;
	}

	public void setUserrolelist(UserRoleViewData[] userrolelist) {
		this.userrolelist = userrolelist;
	}

	public PersonData getPerson() {
		return person;
	}

	public void setPerson(PersonData person) {
		this.person = person;
	}

	public long[] getRolesyskey() {
		return rolesyskey;
	}

	public void setRolesyskey(long[] result) {
		this.rolesyskey = result;
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

	public String getT6() {
		return t6;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getOrganizationID() {
		return organizationID;
	}

	public void setOrganizationID(String organizationID) {
		this.organizationID = organizationID;
	}

	public void setT6(String t6) {
		this.t6 = t6;
	}

	public String getT7() {
		return t7;
	}

	public void setT7(String t7) {
		this.t7 = t7;
	}

	public long getN1() {
		return n1;
	}

	public void setN1(long n1) {
		this.n1 = n1;
	}

	public int getN2() {
		return n2;
	}

	public void setN2(int n2) {
		this.n2 = n2;
	}

	public long getN3() {
		return n3;
	}

	public void setN3(long n3) {
		this.n3 = n3;
	}

	public long getN4() {
		return n4;
	}

	public void setN4(long n4) {
		this.n4 = n4;
	}

	public int getN5() {
		return n5;
	}

	public void setN5(int n5) {
		this.n5 = n5;
	}

	public int getN6() {
		return n6;
	}

	public void setN6(int n6) {
		this.n6 = n6;
	}

	public int getN7() {
		return n7;
	}

	public void setN7(int n7) {
		this.n7 = n7;
	}

	public long getN8() {
		return n8;
	}

	public void setN8(long n8) {
		this.n8 = n8;
	}

	protected void clearProperties() {
		this.syskey = 0;
		this.autokey = 0;
		this.createdDate = "";
		this.modifiedDate = "";
		this.userId = "";
		this.userName = "";
		this.recordStatus = 0;
		this.syncStatus = 0;
		this.syncBatch = 0;
		this.usersyskey = 0;
		this.t1 = "";
		this.t2 = "";
		this.t3 = "";
		this.t4 = "";
		this.t5 = "";
		this.t6 = "";
		this.t7 = "";
		this.n1 = 0;
		this.n2 = 0;
		this.n3 = 0;
		this.n4 = 0;
		this.n5 = 0;
		this.n6 = 0;
		this.n7 = 0;
		this.n8 = 0;
		this.person = new PersonData();
		this.name = "";
	}

	@Override
	public String toString() {
		return "UserData [syskey=" + syskey + ", autokey=" + autokey + ", createdDate=" + createdDate
				+ ", modifiedDate=" + modifiedDate + ", userId=" + userId + ", userName=" + userName + ", password="
				+ password + ", organizationID=" + organizationID + ", recordStatus=" + recordStatus + ", syncStatus="
				+ syncStatus + ", syncBatch=" + syncBatch + ", usersyskey=" + usersyskey + ", t1=" + t1 + ", t2=" + t2
				+ ", t3=" + t3 + ", t4=" + t4 + ", t5=" + t5 + ", t6=" + t6 + ", t7=" + t7 + ", n1=" + n1 + ", n2=" + n2
				+ ", n3=" + n3 + ", n4=" + n4 + ", n5=" + n5 + ", n6=" + n6 + ", n7=" + n7 + ", n8=" + n8
				+ ", rolesyskey=" + Arrays.toString(rolesyskey) + ", userrolelist=" + Arrays.toString(userrolelist)
				+ ", person=" + person + ", name=" + name + "]";
	}
	
	
}
