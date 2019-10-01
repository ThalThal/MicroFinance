package com.diamondpalace.finance.service;



public class FinanceDataSet {
	
	private FinanceData[] data;
	private int totalCount;
	private int currentPage;
	private int pageSize;
	public FinanceData[] getData() {
		return data;
	}
	public void setData(FinanceData[] data) {
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
	private boolean state;
}
