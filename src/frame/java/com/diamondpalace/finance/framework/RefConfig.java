package com.diamondpalace.finance.framework;

import javax.xml.bind.annotation.XmlRootElement;


@XmlRootElement
public class RefConfig {
	private String svytype;
	private int typesrno;
	private String datatype;
	private String caption;
	private String value;
	
	public RefConfig(){
		svytype = "";
		typesrno = 0;
		datatype = "";
		caption = "";
		value = "";
	}

	public String getsvytype() {
		return svytype;
	}

	public void setsvytype(String svytype) {
		this.svytype = svytype;
	}

	public int gettypesrno() {
		return typesrno;
	}

	public void settypesrno(int typesrno) {
		this.typesrno = typesrno;
	}

	public String getdatatype() {
		return datatype;
	}

	public void setdatatype(String datatype) {
		this.datatype = datatype;
	}

	public String getcaption() {
		return caption;
	}

	public void setcaption(String caption) {
		this.caption = caption;
	}
	
	public String getvalue(){
		return value;
	}
	
	public void setvalue(String value){
		this.value = value;
	}
	
	
}
