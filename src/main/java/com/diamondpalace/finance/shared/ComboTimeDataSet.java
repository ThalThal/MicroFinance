package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ComboTimeDataSet {
	
	private ComboTimeData[] data;

	public ComboTimeDataSet() {
		data = new ComboTimeData[0];
	}
	
	public ComboTimeData[] getData() {
		return data;
	}

	public void setData(ComboTimeData[] data) {
		this.data = data;
	}
	
}
