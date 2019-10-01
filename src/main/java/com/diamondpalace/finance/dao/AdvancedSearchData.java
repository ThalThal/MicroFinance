package com.diamondpalace.finance.dao;
import javax.xml.bind.annotation.XmlRootElement;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import com.diamondpalace.finance.service.SearchData;

@XmlRootElement
@JsonIgnoreProperties(ignoreUnknown = true)
public class AdvancedSearchData {

	public PagerData pager;
	public SearchData[] search;
	
	public AdvancedSearchData() {
		super();
		clearProperties();
	}

	public PagerData getPager() {
		return pager;
	}

	public void setPager(PagerData pager) {
		this.pager = pager;
	}

	public SearchData[] getSearch() {
		return search;
	}

	public void setSearch(SearchData[] search) {
		this.search = search;
	}

	public void clearProperties() {
		pager = new PagerData();
		search = new SearchData[0];
	}

}
