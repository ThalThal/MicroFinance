package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@XmlRootElement
@JsonIgnoreProperties(ignoreUnknown = true)
public class AdvancedSearchData {

	private PagerData pager;
	private SearchData[] search;
	
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
