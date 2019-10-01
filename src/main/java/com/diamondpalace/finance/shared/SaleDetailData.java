package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class SaleDetailData {
	
	private long syskey;
	private long autokey;
	private String createddate;
	private String modifieddate;
	private String userid;
	private String username;
	private int recordStatus;
	private int syncStatus;
	private long syncBatch;
	private long usersyskey;
	private String T1;
	private String T2;
	private String T3;
	private String T4;
	private String T5;
	private String T6;
	private String T7;
	private String T8;
	private String T9;
	private String T10;	
	private long n1;
	private long n2;
	private long n3;
	private long n4;
	private long n5;
	private long n6;
	private long n7;
	private long n8;
	private long n9;
	private long n10;
	private boolean isT1ErrRecord;
	private boolean isT2ErrRecord;
	private boolean isT3ErrRecord;
	private boolean isT4ErrRecord;
	private boolean isT5ErrRecord;
	private boolean isT6ErrRecord;
	private boolean isT7ErrRecord;
	private boolean isT8ErrRecord;
	private boolean isT9ErrRecord;
	private boolean isT10ErrRecord;
	private boolean isContainerror;
	
	public SaleDetailData(){
		clearProperties();
	}

	private void clearProperties() {
		this.syskey = 0;
		this.autokey = 0;
		this.createddate = "";
		this.modifieddate = "";
		this.userid = "";
		this.username = "";
		this.recordStatus = 0;
		this.syncStatus = 0;
		this.syncBatch = 0;
		this.usersyskey=0;
		this.T1 = "";
		this.T2 = "";
		this.T3 = "";
		this.T4 = "";
		this.T5 = "";
		this.T6 = "";
		this.T7 = "";
		this.T8 = "";
		this.T9 = "";
		this.T10 = "";		
		this.n1 = 0;
		this.n2 = 0;
		this.n3 = 0;
		this.n4 = 0;
		this.n5 = 0;
		this.n6 = 0;
		this.n7 = 0;
		this.n8 = 0;
		this.n9 = 0;
		this.n10 = 0;
		this.isT1ErrRecord = false;
		this.isT2ErrRecord = false;
		this.isT3ErrRecord = false;
		this.isT4ErrRecord = false;
		this.isT5ErrRecord = false;
		this.isT6ErrRecord = false;
		this.isT7ErrRecord = false;
		this.isT8ErrRecord = false;
		this.isT9ErrRecord = false;
		this.isT10ErrRecord = false;
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

	public long getUsersyskey() {
		return usersyskey;
	}

	public void setUsersyskey(long usersyskey) {
		this.usersyskey = usersyskey;
	}

	public String getT1() {
		return T1;
	}

	public void setT1(String t1) {
		T1 = t1;
	}

	public String getT2() {
		return T2;
	}

	public void setT2(String t2) {
		T2 = t2;
	}

	public String getT3() {
		return T3;
	}

	public void setT3(String t3) {
		T3 = t3;
	}

	public String getT4() {
		return T4;
	}

	public void setT4(String t4) {
		T4 = t4;
	}

	public String getT5() {
		return T5;
	}

	public void setT5(String t5) {
		T5 = t5;
	}

	public String getT6() {
		return T6;
	}

	public void setT6(String t6) {
		T6 = t6;
	}

	public String getT7() {
		return T7;
	}

	public void setT7(String t7) {
		T7 = t7;
	}

	public String getT8() {
		return T8;
	}

	public void setT8(String t8) {
		T8 = t8;
	}

	public String getT9() {
		return T9;
	}

	public void setT9(String t9) {
		T9 = t9;
	}

	public String getT10() {
		return T10;
	}

	public void setT10(String t10) {
		T10 = t10;
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

	public long getN4() {
		return n4;
	}

	public void setN4(long n4) {
		this.n4 = n4;
	}

	public long getN5() {
		return n5;
	}

	public void setN5(long n5) {
		this.n5 = n5;
	}

	public long getN6() {
		return n6;
	}

	public void setN6(long n6) {
		this.n6 = n6;
	}

	public long getN7() {
		return n7;
	}

	public void setN7(long n7) {
		this.n7 = n7;
	}

	public long getN8() {
		return n8;
	}

	public void setN8(long n8) {
		this.n8 = n8;
	}

	public long getN9() {
		return n9;
	}

	public void setN9(long n9) {
		this.n9 = n9;
	}

	public long getN10() {
		return n10;
	}

	public void setN10(long n10) {
		this.n10 = n10;
	}

	public boolean isT1ErrRecord() {
		return isT1ErrRecord;
	}

	public void setT1ErrRecord(boolean isT1ErrRecord) {
		this.isT1ErrRecord = isT1ErrRecord;
	}

	public boolean isT2ErrRecord() {
		return isT2ErrRecord;
	}

	public void setT2ErrRecord(boolean isT2ErrRecord) {
		this.isT2ErrRecord = isT2ErrRecord;
	}

	public boolean isT3ErrRecord() {
		return isT3ErrRecord;
	}

	public void setT3ErrRecord(boolean isT3ErrRecord) {
		this.isT3ErrRecord = isT3ErrRecord;
	}

	public boolean isT4ErrRecord() {
		return isT4ErrRecord;
	}

	public void setT4ErrRecord(boolean isT4ErrRecord) {
		this.isT4ErrRecord = isT4ErrRecord;
	}

	public boolean isT5ErrRecord() {
		return isT5ErrRecord;
	}

	public void setT5ErrRecord(boolean isT5ErrRecord) {
		this.isT5ErrRecord = isT5ErrRecord;
	}

	public boolean isT6ErrRecord() {
		return isT6ErrRecord;
	}

	public void setT6ErrRecord(boolean isT6ErrRecord) {
		this.isT6ErrRecord = isT6ErrRecord;
	}

	public boolean isT7ErrRecord() {
		return isT7ErrRecord;
	}

	public void setT7ErrRecord(boolean isT7ErrRecord) {
		this.isT7ErrRecord = isT7ErrRecord;
	}

	public boolean isT8ErrRecord() {
		return isT8ErrRecord;
	}

	public void setT8ErrRecord(boolean isT8ErrRecord) {
		this.isT8ErrRecord = isT8ErrRecord;
	}

	public boolean isT9ErrRecord() {
		return isT9ErrRecord;
	}

	public void setT9ErrRecord(boolean isT9ErrRecord) {
		this.isT9ErrRecord = isT9ErrRecord;
	}

	public boolean isT10ErrRecord() {
		return isT10ErrRecord;
	}

	public void setT10ErrRecord(boolean isT10ErrRecord) {
		this.isT10ErrRecord = isT10ErrRecord;
	}

	public boolean isContainerror() {
		return isContainerror;
	}

	public void setContainerror(boolean isContainerror) {
		this.isContainerror = isContainerror;
	}
}
