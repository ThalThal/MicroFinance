package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@XmlRootElement
@JsonIgnoreProperties(ignoreUnknown = true)
public class CompanyData {
	public CompanyData() {
		super();
		clearProperties();

	}

	private long syskey;
	private String createdDate;
	private String modifiedDate;
	private String userId;
	private String userName;
	private int recordStatus;
	private int syncStatus;
	private long syncBatch;
	private long parentId;
	private long userSyskey;

	private String t1;
	private String t2;
	private String t3;
	private String t4;
	private String t5;
	private String t6;
	private String t7;
	private String t8;
	private String t9;
	private String t10;
	private String t11;
	private String t12;
	private String t13;
	private String t14;
	private String t15;
	private String t16;
	private String t17;
	private String t18;
	private String t19;
	private String t20;
	private String t21;
	private String t22;
	private String t23;
	private String t24;
	private String t25;
	private String O1;

	private long n1;
	private long n2;
	private long n3;
	private long n4;
	private long n5;
	private long n6;
	private float n7;
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

	public long getSyskey() {
		return syskey;
	}

	public void setSyskey(long syskey) {
		this.syskey = syskey;
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

	public long getParentId() {
		return parentId;
	}

	public void setParentId(long parentId) {
		this.parentId = parentId;
	}

	public long getUserSyskey() {
		return userSyskey;
	}

	public void setUserSyskey(long userSyskey) {
		this.userSyskey = userSyskey;
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

	public void setT6(String t6) {
		this.t6 = t6;
	}

	public String getT7() {
		return t7;
	}

	public void setT7(String t7) {
		this.t7 = t7;
	}

	public String getT8() {
		return t8;
	}

	public void setT8(String t8) {
		this.t8 = t8;
	}

	public String getT9() {
		return t9;
	}

	public void setT9(String t9) {
		this.t9 = t9;
	}

	public String getT10() {
		return t10;
	}

	public void setT10(String t10) {
		this.t10 = t10;
	}

	public String getT11() {
		return t11;
	}

	public void setT11(String t11) {
		this.t11 = t11;
	}

	public String getT12() {
		return t12;
	}

	public void setT12(String t12) {
		this.t12 = t12;
	}

	public String getT13() {
		return t13;
	}

	public void setT13(String t13) {
		this.t13 = t13;
	}

	public String getT14() {
		return t14;
	}

	public void setT14(String t14) {
		this.t14 = t14;
	}

	public String getT15() {
		return t15;
	}

	public void setT15(String t15) {
		this.t15 = t15;
	}

	public String getT16() {
		return t16;
	}

	public void setT16(String t16) {
		this.t16 = t16;
	}

	public String getT17() {
		return t17;
	}

	public void setT17(String t17) {
		this.t17 = t17;
	}

	public String getT18() {
		return t18;
	}

	public void setT18(String t18) {
		this.t18 = t18;
	}

	public String getT19() {
		return t19;
	}

	public void setT19(String t19) {
		this.t19 = t19;
	}

	public String getT20() {
		return t20;
	}

	public void setT20(String t20) {
		this.t20 = t20;
	}

	public String getT21() {
		return t21;
	}

	public void setT21(String t21) {
		this.t21 = t21;
	}

	public String getT22() {
		return t22;
	}

	public void setT22(String t22) {
		this.t22 = t22;
	}

	public String getT23() {
		return t23;
	}

	public void setT23(String t23) {
		this.t23 = t23;
	}

	public String getT24() {
		return t24;
	}

	public void setT24(String t24) {
		this.t24 = t24;
	}

	public String getT25() {
		return t25;
	}

	public void setT25(String t25) {
		this.t25 = t25;
	}

	public String getO1() {
		return O1;
	}

	public void setO1(String o1) {
		O1 = o1;
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

	public float getN7() {
		return n7;
	}

	public void setN7(float n7) {
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

	public void clearProperties() {
		this.syskey = 0;
		this.createdDate = "";
		this.modifiedDate = "";
		this.userId = "";
		this.userName = "";
		this.recordStatus = 0;
		this.syncBatch = 0;
		this.syncStatus = 0;
		this.userSyskey = 0;
		this.parentId = 0;
		this.t1 = "";
		this.t2 = "";
		this.t3 = "";
		this.t4 = "";
		this.t5 = "";
		this.t6 = "";
		this.t7 = "";
		this.t8 = "";
		this.t9 = "";
		this.t10 = "";
		this.t11 = "";
		this.t12 = "";
		this.t13 = "";
		this.t14 = "";
		this.t15 = "";
		this.t16 = "";
		this.t17 = "";
		this.t18 = "";
		this.t19 = "";
		this.t20 = "";
		this.t21 = "";
		this.t22 = "";
		this.t23 = "";
		this.t24 = "";
		this.t25 = "";
		this.O1 = "";
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

	}
}
