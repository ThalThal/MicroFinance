package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@XmlRootElement
@JsonIgnoreProperties(ignoreUnknown = true)
public class CompanyDataSet {
	private CompanyData[] data;

	public CompanyDataSet() {
		super();
		data = new CompanyData[0];
	}

	public CompanyData[] getData() {
		return data;
	}

	public void setData(CompanyData[] data) {
		this.data = data;
	}

}
