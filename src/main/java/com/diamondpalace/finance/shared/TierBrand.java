package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@XmlRootElement
@JsonIgnoreProperties(ignoreUnknown=true)
public class TierBrand {
	private String tier;
	private String brand;
	
	public TierBrand() {
		clearProperties();
	}
	
	public void clearProperties(){
		this.tier = "";
		this.brand = "";
	}

	public String getTier() {
		return tier;
	}

	public void setTier(String tier) {
		this.tier = tier;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}
	
	
}
