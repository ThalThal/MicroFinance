package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class CommonDataSet {
	
	private  CommonData[] data;
	private String[] replyData;
	private int totalCount;
	private int currentPage;
	private int pageSize;
	private boolean state;
	private String Role;
	
	public CommonDataSet(){
		data = new CommonData[0];
	}

	public CommonData[] getData() {
		return data;
	}

	public void setData(CommonData[] data) {
		this.data = data;
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public boolean isState() {
		return state;
	}

	public void setState(boolean state) {
		this.state = state;
	}

	public String[] getReplyData() {
		return replyData;
	}

	public void setReplyData(String[] replyData) {
		this.replyData = replyData;
	}

	public String getRole() {
		return Role;
	}

	public void setRole(String role) {
		Role = role;
	}
	

}
