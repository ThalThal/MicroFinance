package com.diamondpalace.finance.shared;

import java.util.ArrayList;

public class PriceDataSet {
	
	private PriceData[] data;
	
	private int totalCount;
	private int currentPage;
	private int pageSize;
	private boolean state;
	
	
	
	public PriceDataSet(){
		data = new PriceData[0];
	}

	public PriceData[] getData() {
		return data;
	}

	public void setData(PriceData[] data) {
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
