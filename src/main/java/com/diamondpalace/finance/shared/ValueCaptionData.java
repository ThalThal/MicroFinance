package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ValueCaptionData {

	private long value;
	private String caption;
	private String brand;
	//private long value;

	public ValueCaptionData() {
		super();
		clearProperties();
	}

	public long getValue() {
		return value;
	}

	public void setValue(long value) {
		this.value = value;
	}

	public String getCaption() {
		return caption;
	}

	public void setCaption(String caption) {
		this.caption = caption;
	}
	

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public void clearProperties() {
		this.value = 0;
		this.caption = "";
		this.brand = "";
	}

}
