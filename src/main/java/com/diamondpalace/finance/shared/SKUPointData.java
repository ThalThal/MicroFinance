package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class SKUPointData {
	private String scode;
	private String sname;
	private String spoint;
	
	public SKUPointData(){
		super();
		clearProperties();
	}
	
	public void clearProperties(){
		this.scode = "";
		this.sname = "";
		this.spoint = "";
	}

	public String getScode() {
		return scode;
	}

	public void setScode(String scode) {
		this.scode = scode;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

	public String getSpoint() {
		return spoint;
	}

	public void setSpoint(String spoint) {
		this.spoint = spoint;
	}
}
