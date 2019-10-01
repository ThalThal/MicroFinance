package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class CommonComboData {

	private String value;
	private String caption;
	private String type;
	private boolean flag;

	public CommonComboData() {
		clearPorperties();
	}
	
	private void clearPorperties() {
		value = "0";
		caption = "-";
		type = "";
		this.flag=false;
	}

	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	public String getCaption() {
		return caption;
	}
	public void setCaption(String caption) {
		this.caption = caption;
	}

	public boolean isFlag() {
		return flag;
	}

	public void setFlag(boolean flag) {
		this.flag = flag;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	
}
