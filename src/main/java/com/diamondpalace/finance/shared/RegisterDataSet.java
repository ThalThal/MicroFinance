package com.diamondpalace.finance.shared;

import java.util.ArrayList;

public class RegisterDataSet {
	
	private RegisterData[] data;
	private RegisterData[] count;
	private int totalCount;
	private int currentPage;
	private int pageSize;
	private boolean state;
	
	private ArrayList<RegisterData> m_arlData;
	private ArrayList<RegisterData> importAllData;
	
	public RegisterDataSet(){
		data = new RegisterData[0];
	}

	public RegisterData[] getData() {
		return data;
	}

	public void setData(RegisterData[] data) {
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

	public RegisterData[] getCount() {
		return count;
	}

	public void setCount(RegisterData[] count) {
		this.count = count;
	}

	public ArrayList<RegisterData> getM_arlData() {
		return m_arlData;
	}

	public void setM_arlData(ArrayList<RegisterData> m_arlData) {
		this.m_arlData = m_arlData;
	}

	public ArrayList<RegisterData> getImportAllData() {
		return importAllData;
	}

	public void setImportAllData(ArrayList<RegisterData> importAllData) {
		this.importAllData = importAllData;
	}

	
	
	

}
