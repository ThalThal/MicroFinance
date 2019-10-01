package com.diamondpalace.finance.shared;
//ymksun to carry button data
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ButtonCarryData {
	
	private long syskey;
	private String desc;
	private String link;
	private boolean flag;
	
	public ButtonCarryData() {
		clearProperties();
	}

	public long getSyskey() {
		return syskey;
	}

	public void setSyskey(long syskey) {
		this.syskey = syskey;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public boolean isFlag() {
		return flag;
	}

	public void setFlag(boolean flag) {
		this.flag = flag;
	}

	protected void clearProperties() {
		this.syskey = 0;
		this.desc = "";
		this.link = "";
		this.flag = false;
	}
}
