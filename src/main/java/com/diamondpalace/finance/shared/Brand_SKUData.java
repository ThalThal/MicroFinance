package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Brand_SKUData {
	private Long brandsyskey;
	private Long skusyskey;
	private String brandname;
	private String skuname;
	
	public Brand_SKUData(){
		super();
		clearproperties();
	}
	
	public void clearproperties(){
		this.brandsyskey = 0L;
		this.skusyskey = 0L;
		this.brandname = "";
		this.skuname = "";
	}

	public Long getBrandsyskey() {
		return brandsyskey;
	}

	public void setBrandsyskey(Long brandsyskey) {
		this.brandsyskey = brandsyskey;
	}

	public Long getSkusyskey() {
		return skusyskey;
	}

	public void setSkusyskey(Long skusyskey) {
		this.skusyskey = skusyskey;
	}

	public String getBrandname() {
		return brandname;
	}

	public void setBrandname(String brandname) {
		this.brandname = brandname;
	}

	public String getSkuname() {
		return skuname;
	}

	public void setSkuname(String skuname) {
		this.skuname = skuname;
	}
	
}
