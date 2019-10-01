package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ComboData {

	private long value;
	private String caption;

	public ComboData() {
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

	public void clearProperties() {
		this.value = 0;
		this.caption = "No Batch";
	}

}
