package com.diamondpalace.finance.shared;

public class BrandComboData {
	private long value;
	private String engCaption;
	private String myanCaption;	
	private boolean flag;
	private String code;


	public BrandComboData() {
		super();
		clearProperties();
	}

	public long getValue() {
		return value;
	}

	public void setValue(long value) {
		this.value = value;
	}

	
	public String getEngCaption() {
		return engCaption;
	}

	public void setEngCaption(String engCaption) {
		this.engCaption = engCaption;
	}

	public String getMyanCaption() {
		return myanCaption;
	}

	public void setMyanCaption(String myanCaption) {
		this.myanCaption = myanCaption;
	}	

	public boolean isFlag() {
		return flag;
	}

	public void setFlag(boolean flag) {
		this.flag = flag;
	}	

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public void clearProperties() {
		this.value = 0;
		this.engCaption = "";
		this.myanCaption = "";
		this.code = "";
		this.flag=false; 
	}

}
