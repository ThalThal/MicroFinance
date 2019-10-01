package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import java.io.Serializable;
import java.util.ArrayList;
@XmlRootElement
@JsonIgnoreProperties(ignoreUnknown = true)
public  class SetupDataset implements Serializable{ 
	
	private SetupData[] data;
	public SetupData[] getData() {
		return data;
	}
	public void setData(SetupData[] data) {
		this.data = data;
	}

	private static final long serialVersionUID = 1L;
	private boolean state;
	public boolean isState() {
		return state;
	}
	public void setState(boolean state) {
		this.state = state;
	}

	private String m_searchText;
	private int m_totalCount;
	private int m_currentPage;
	private int m_pageSize;
	private ArrayList<SetupData> m_arlData;
	public  String getSearchText(){return   this.m_searchText;}
	public  void setSearchText(String value){this.m_searchText = value;}
	public  int getTotalCount(){return   this.m_totalCount;}
	public  void setTotalCount(int value){this.m_totalCount = value;}
	public  int getCurrentPage(){return   this.m_currentPage;}
	public  void setCurrentPage(int value){this.m_currentPage = value;}
	public  int getPageSize(){return   this.m_pageSize;}
	public  void setPageSize(int value){this.m_pageSize = value;}
	public  ArrayList<SetupData> getDataList(){return   this.m_arlData;}
	public  void setDataList(ArrayList<SetupData> value){this.m_arlData = value;}
}
