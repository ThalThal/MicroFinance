package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class CommonComboDataSet {
	
	private CommonComboData[] data;

	public CommonComboDataSet() {
		data = new CommonComboData[0];
	}
	
	public CommonComboData[] getData() {
		return data;
	}

	public void setData(CommonComboData[] data) {
		this.data = data;
	}
	
}
