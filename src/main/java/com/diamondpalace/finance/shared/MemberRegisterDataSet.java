package com.diamondpalace.finance.shared;

import java.util.ArrayList;

public class MemberRegisterDataSet {
	
	private MemberRegisterData[] data;
	
	private int totalCount;
	private int currentPage;
	private int pageSize;
	private boolean state;
	
	
	
	public MemberRegisterDataSet(){
		data = new MemberRegisterData[0];
	}

	public MemberRegisterData[] getData() {
		return data;
	}

	public void setData(MemberRegisterData[] data) {
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

	
	
	

}
