package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@XmlRootElement
@JsonIgnoreProperties(ignoreUnknown=true)
public class SaleData {
	
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
	private String T11;
	private String T12;
	private String T13;
	private String T14;
	private String T15;
	private String T16;
	private String T17;
	private String T18;
	private String T19;
	private String T20;
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
	private long n11;
	private long n12;
	private long n13;
	private long n14;
	private long n15;
	private long n16;
	private long n17;
	private long n18;
	private long n19;
	private long n20;
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
	private String errMsg;
	private SaleDetailData [] detail;
	
	public SaleData(){
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
		this.T11 = "";
		this.T12 = "";
		this.T13 = "";
		this.T14 = "";
		this.T15 = "";
		this.T16 = "";
		this.T17 = "";
		this.T18 = "";
		this.T19 = "";
		this.T20 = "";
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
		this.n11 = 0;
		this.n12 = 0;
		this.n13 = 0;
		this.n14 = 0;
		this.n15 = 0;
		this.n16 = 0;
		this.n17 = 0;
		this.n18 = 0;
		this.n19 = 0;
		this.n20 = 0;
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
		this.detail = new SaleDetailData[0];
		this.errMsg = "";
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

	public SaleDetailData[] getDetail() {
		return detail;
	}

	public void setDetail(SaleDetailData[] detail) {
		this.detail = detail;
	}

	public String getT11() {
		return T11;
	}

	public void setT11(String t11) {
		T11 = t11;
	}

	public String getT12() {
		return T12;
	}

	public void setT12(String t12) {
		T12 = t12;
	}

	public String getT13() {
		return T13;
	}

	public void setT13(String t13) {
		T13 = t13;
	}

	public String getT14() {
		return T14;
	}

	public void setT14(String t14) {
		T14 = t14;
	}

	public String getT15() {
		return T15;
	}

	public void setT15(String t15) {
		T15 = t15;
	}

	public String getT16() {
		return T16;
	}

	public void setT16(String t16) {
		T16 = t16;
	}

	public String getT17() {
		return T17;
	}

	public void setT17(String t17) {
		T17 = t17;
	}

	public String getT18() {
		return T18;
	}

	public void setT18(String t18) {
		T18 = t18;
	}

	public String getT19() {
		return T19;
	}

	public void setT19(String t19) {
		T19 = t19;
	}

	public String getT20() {
		return T20;
	}

	public void setT20(String t20) {
		T20 = t20;
	}

	public long getN11() {
		return n11;
	}

	public void setN11(long n11) {
		this.n11 = n11;
	}

	public long getN12() {
		return n12;
	}

	public void setN12(long n12) {
		this.n12 = n12;
	}

	public long getN13() {
		return n13;
	}

	public void setN13(long n13) {
		this.n13 = n13;
	}

	public long getN14() {
		return n14;
	}

	public void setN14(long n14) {
		this.n14 = n14;
	}

	public long getN15() {
		return n15;
	}

	public void setN15(long n15) {
		this.n15 = n15;
	}

	public long getN16() {
		return n16;
	}

	public void setN16(long n16) {
		this.n16 = n16;
	}

	public long getN17() {
		return n17;
	}

	public void setN17(long n17) {
		this.n17 = n17;
	}

	public long getN18() {
		return n18;
	}

	public void setN18(long n18) {
		this.n18 = n18;
	}

	public long getN19() {
		return n19;
	}

	public void setN19(long n19) {
		this.n19 = n19;
	}

	public long getN20() {
		return n20;
	}

	public void setN20(long n20) {
		this.n20 = n20;
	}

	public String getErrMsg() {
		return errMsg;
	}

	public void setErrMsg(String errMsg) {
		this.errMsg = errMsg;
	}
	
}
