package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class SKUDataSet {
	
	private String m_searchText;
	private int m_totalCount;
	private int m_currentPage;
	private int m_pageSize;
	private boolean state;
	private SKUData[] data;

	public String getM_searchText() {
		return m_searchText;
	}
	public void setM_searchText(String m_searchText) {
		this.m_searchText = m_searchText;
	}
	public int getM_totalCount() {
		return m_totalCount;
	}
	public void setM_totalCount(int m_totalCount) {
		this.m_totalCount = m_totalCount;
	}
	public int getM_currentPage() {
		return m_currentPage;
	}
	public void setM_currentPage(int m_currentPage) {
		this.m_currentPage = m_currentPage;
	}
	public int getM_pageSize() {
		return m_pageSize;
	}
	public void setM_pageSize(int m_pageSize) {
		this.m_pageSize = m_pageSize;
	}
	public boolean isState() {
		return state;
	}
	public void setState(boolean state) {
		this.state = state;
	}
	public SKUData[] getData() {
		return data;
	}
	public void setData(SKUData[] data) {
		this.data = data;
	}
	
}
