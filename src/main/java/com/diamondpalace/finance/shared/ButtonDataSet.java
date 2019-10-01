package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ButtonDataSet {
	
	private ButtonData[] data;
	private boolean state;
	
	public ButtonDataSet(){
		data = new ButtonData[0];
	}

	public ButtonData[] getData() {
		return data;
	}

	public void setData(ButtonData[] data) {
		this.data = data;
	}

	public boolean isState() {
		return state;
	}

	public void setState(boolean state) {
		this.state = state;
	}
	
}
