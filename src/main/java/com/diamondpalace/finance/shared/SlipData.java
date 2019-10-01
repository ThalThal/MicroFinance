package com.diamondpalace.finance.shared;



import java.util.Arrays;

import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@XmlRootElement
@JsonIgnoreProperties(ignoreUnknown=true)
public class SlipData {
	
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
	private long n21;
	private long n22;
	private long n23;
	private long n24;
	private long n25;
	private long n26;
	private long n27;
	private long n28;
	private long n29;
	private long n30;
	private String createdTime;
	private String Msg;	
	private boolean state = false;
	private SlipData [] addArray;//barcode
	private SlipData [] addArraySaleItem;
	private SlipData [] addArrayRentItem;
	public SlipData() {
		clearProperties();
		
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

	public SlipData[] getAddArray() {
		return addArray;
	}

	public void setAddArray(SlipData[] addArray) {
		this.addArray = addArray;
	}

	public String getT1() {
		return T1;
	}
	public void setT1(String t1) {
		T1 = t1;
	}
	public String getT13() {
		return T13;
	}

	public void setT13(String t13) {
		T13 = t13;
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

	public long getN21() {
		return n21;
	}

	public void setN21(long n21) {
		this.n21 = n21;
	}

	public long getN22() {
		return n22;
	}

	public void setN22(long n22) {
		this.n22 = n22;
	}

	public long getN23() {
		return n23;
	}

	public void setN23(long n23) {
		this.n23 = n23;
	}

	public long getN24() {
		return n24;
	}

	public void setN24(long n24) {
		this.n24 = n24;
	}

	public long getN25() {
		return n25;
	}

	public void setN25(long n25) {
		this.n25 = n25;
	}

	public long getN26() {
		return n26;
	}

	public void setN26(long n26) {
		this.n26 = n26;
	}

	public long getN27() {
		return n27;
	}

	public void setN27(long n27) {
		this.n27 = n27;
	}

	public long getN28() {
		return n28;
	}

	public void setN28(long n28) {
		this.n28 = n28;
	}

	public long getN29() {
		return n29;
	}

	public void setN29(long n29) {
		this.n29 = n29;
	}

	public long getN30() {
		return n30;
	}

	public void setN30(long n30) {
		this.n30 = n30;
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
	

	public String getCreatedTime() {
		return createdTime;
	}

	public void setCreatedTime(String createdTime) {
		this.createdTime = createdTime;
	}
	
	public SlipData[] getAddArraySaleItem() {
		return addArraySaleItem;
	}

	public void setAddArraySaleItem(SlipData[] addArraySaleItem) {
		this.addArraySaleItem = addArraySaleItem;
	}
	

	public SlipData[] getAddArrayRentItem() {
		return addArrayRentItem;
	}

	public void setAddArrayRentItem(SlipData[] addArrayRentItem) {
		this.addArrayRentItem = addArrayRentItem;
	}

	public void clearProperties() {
		this.syskey = 0;
		this.autokey = 0;
		this.createddate = "";
		this.modifieddate = "";
		this.userid = "";
		this.username = "";
		this.recordStatus = 0;
		this.syncStatus = 0;
		this.syncBatch = 0;
		this.usersyskey = 0;
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
		this.createdTime="";
		this.n1=0;
		this.n2=0;
		this.n3=0;
		this.n4=0;
		this.n5=0;
		this.n6=0;
		this.n7=0;
		this.n8=0;
		this.n9=0;
		this.n10=0;
		this.n11=0;
		this.n12=0;
		this.n13=0;
		this.n14=0;
		this.n15=0;
		this.n16=0;
		this.n17=0;
		this.n18=0;
		this.n19=0;
		this.n20=0;
		this.n21=0;
		this.n22=0;
		this.n23=0;
		this.n24=0;
		this.n25=0;
		this.n26=0;
		this.n27=0;
		this.n28=0;
		this.n29=0;
		this.n30=0;
		this.Msg = "";
		this.state =false;
		this.addArray = new SlipData[0];
		this.addArraySaleItem = new SlipData[0];
		this.addArrayRentItem = new SlipData[0];
	}

	@Override
	public String toString() {
		return "SlipData [syskey=" + syskey + ", autokey=" + autokey + ", createddate=" + createddate
				+ ", modifieddate=" + modifieddate + ", userid=" + userid + ", username=" + username + ", recordStatus="
				+ recordStatus + ", syncStatus=" + syncStatus + ", syncBatch=" + syncBatch + ", usersyskey="
				+ usersyskey + ", T1=" + T1 + ", T2=" + T2 + ", T3=" + T3 + ", T4=" + T4 + ", T5=" + T5 + ", T6=" + T6
				+ ", T7=" + T7 + ", T8=" + T8 + ", T9=" + T9 + ", T10=" + T10 + ", T11=" + T11 + ", T12=" + T12
				+ ", T13=" + T13 + ", T14=" + T14 + ", T15=" + T15 + ", T16=" + T16 + ", n1=" + n1 + ", n2=" + n2
				+ ", n3=" + n3 + ", n4=" + n4 + ", n5=" + n5 + ", n6=" + n6 + ", n7=" + n7 + ", n8=" + n8 + ", n9=" + n9
				+ ", n10=" + n10 + ", n11=" + n11 + ", n12=" + n12 + ", n13=" + n13 + ", n14=" + n14 + ", n15=" + n15
				+ ", n16=" + n16 + ", n17=" + n17 + ", n18=" + n18 + ", n19=" + n19 + ", n20=" + n20 + ", n21=" + n21
				+ ", n22=" + n22 + ", n23=" + n23 + ", n24=" + n24 + ", n25=" + n25 + ", n26=" + n26 + ", n27=" + n27
				+ ", n28=" + n28 + ", n29=" + n29 + ", n30=" + n30 + ", createdTime=" + createdTime + ", Msg=" + Msg
				+ ", state=" + state + ", addArray=" + Arrays.toString(addArray) + ", addArraySaleItem="
				+ Arrays.toString(addArraySaleItem) + ", addArrayRentItem=" + Arrays.toString(addArrayRentItem) + "]";
	}

	
	

}

