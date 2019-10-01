package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Brand_SKUDataSet {
	private String searchText;
	private int totalCount;
	private int currentPage;
	private int pageSize;
	private boolean state;
	Brand_SKUData [] data;
	
	public Brand_SKUDataSet(){
		super();
		clearProperties();
	}
	
	public void clearProperties(){
		this.searchText = "";
		this.totalCount = 0;
		this.currentPage = 0;
		this.pageSize = 0;
		this.state = false;
		this.data = new Brand_SKUData[0];
	}

	public String getSearchText() {
		return searchText;
	}

	public void setSearchText(String searchText) {
		this.searchText = searchText;
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

	public Brand_SKUData[] getData() {
		return data;
	}

	public void setData(Brand_SKUData[] data) {
		this.data = data;
	}
	
}
