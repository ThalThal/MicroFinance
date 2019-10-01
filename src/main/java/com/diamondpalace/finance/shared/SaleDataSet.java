package com.diamondpalace.finance.shared;

import java.util.ArrayList;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class SaleDataSet {

	private String m_searchText;
	private int m_totalCount;
	private int m_currentPage;
	private int m_pageSize;
	private boolean state;
	private SaleData[] data;
	private ArrayList<SaleData> m_arlData;
	private ArrayList<SaleData> importAllData;
	
	public SaleDataSet(){
		clearProperties();
	}
	
	public void clearProperties(){
		this.m_searchText = "";
		this.m_totalCount = 0;
		this.m_currentPage = 0;
		this.m_pageSize = 0;
		this.state = false;
		this.m_arlData = new ArrayList<SaleData>();
		this.data = new SaleData[0];
		this.importAllData = new ArrayList<SaleData>();
	}
	
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

	public ArrayList<SaleData> getM_arlData() {
		return m_arlData;
	}

	public void setM_arlData(ArrayList<SaleData> m_arlData) {
		this.m_arlData = m_arlData;
	}

	public SaleData[] getData() {
		return data;
	}

	public void setData(SaleData[] data) {
		this.data = data;
	}

	public ArrayList<SaleData> getImportAllData() {
		return importAllData;
	}

	public void setImportAllData(ArrayList<SaleData> importAllData) {
		this.importAllData = importAllData;
	}
}
