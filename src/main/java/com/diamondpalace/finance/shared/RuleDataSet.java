package com.diamondpalace.finance.shared;

import java.util.ArrayList;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class RuleDataSet {
	private String m_searchText;
	private int m_totalCount;
	private int m_currentPage;
	private int m_pageSize;
	private boolean state;
	private ArrayList<RuleData> m_arlData;
	RuleData [] data;
	
	public RuleDataSet(){
		clearProperties();
	}
	
	public void clearProperties(){
		this.m_searchText = "";
		this.m_totalCount = 0;
		this.m_currentPage = 0;
		this.m_pageSize = 0;
		this.state = false;
		this.m_arlData = new ArrayList<RuleData>();
		this.data = new RuleData[0];
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

	public ArrayList<RuleData> getM_arlData() {
		return m_arlData;
	}

	public void setM_arlData(ArrayList<RuleData> m_arlData) {
		this.m_arlData = m_arlData;
	}

	public RuleData[] getData() {
		return data;
	}

	public void setData(RuleData[] data) {
		this.data = data;
	}
}
