package com.diamondpalace.finance.framework;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Extension {

	private String refcofsys;
	private String refcofcaption;
	private String datatext;
	private String datanumber;
	private String datadouble;
	
	public Extension(){
		clearProperty();
	}
	
	void clearProperty(){
		refcofsys = "";
		refcofcaption = "";
		datatext = "";
		datanumber = "";
		datadouble = "";
	}

	public String getrefcofsys() {
		return refcofsys;
	}

	public void setrefcofsys(String refcofsys) {
		this.refcofsys = refcofsys;
	}

	public String getrefcofcaption() {
		return refcofcaption;
	}

	public void setrefcofcaption(String refcofcaption) {
		this.refcofcaption = refcofcaption;
	}

	public String getdatatext() {
		return datatext;
	}

	public void setdatatext(String datatext) {
		this.datatext = datatext;
	}

	public String getdatanumber() {
		return datanumber;
	}

	public void setdatanumber(String datanumber) {
		this.datanumber = datanumber;
	}

	public String getdatadouble() {
		return datadouble;
	}

	public void setdatadouble(String datadouble) {
		this.datadouble = datadouble;
	}
	
	
	
}
