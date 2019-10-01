package com.diamondpalace.finance.shared;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class RuleSaveData {
	
	private RuleHeaderData ruleHeader;
	private ComboData[] firstPrize;
	private ComboData[] secPrize;
	private ComboData[] thirdPrize;
	private ComboData[] fourthPrize;
	private String firstT2;
	private String secondT2;
	private String thirdT2;
	private String fourthT2;

	public RuleHeaderData getRuleHeader() {
		return ruleHeader;
	}
	public void setRuleHeader(RuleHeaderData ruleHeader) {
		this.ruleHeader = ruleHeader;
	}
	
	public ComboData[] getFirstPrize() {
		return firstPrize;
	}
	public void setFirstPrize(ComboData[] firstPrize) {
		this.firstPrize = firstPrize;
	}
	public ComboData[] getSecPrize() {
		return secPrize;
	}
	public void setSecPrize(ComboData[] secPrize) {
		this.secPrize = secPrize;
	}
	public ComboData[] getThirdPrize() {
		return thirdPrize;
	}
	public void setThirdPrize(ComboData[] thirdPrize) {
		this.thirdPrize = thirdPrize;
	}
	public ComboData[] getFourthPrize() {
		return fourthPrize;
	}
	public void setFourthPrize(ComboData[] fourthPrize) {
		this.fourthPrize = fourthPrize;
	}
	public String getFirstT2() {
		return firstT2;
	}
	public void setFirstT2(String firstT2) {
		this.firstT2 = firstT2;
	}
	public String getSecondT2() {
		return secondT2;
	}
	public void setSecondT2(String secondT2) {
		this.secondT2 = secondT2;
	}
	public String getThirdT2() {
		return thirdT2;
	}
	public void setThirdT2(String thirdT2) {
		this.thirdT2 = thirdT2;
	}
	public String getFourthT2() {
		return fourthT2;
	}
	public void setFourthT2(String fourthT2) {
		this.fourthT2 = fourthT2;
	}
}
