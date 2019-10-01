package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ComboTimeData {

	private String value;
	private String caption;

	public ComboTimeData() {
		clearPorperties();
	}
	
	private void clearPorperties() {
		value = "0";
		caption = "-";
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
	
	
}
