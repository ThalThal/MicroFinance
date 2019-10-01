package com.diamondpalace.finance.service;

import java.io.File;
import java.sql.Date;

import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@XmlRootElement
@JsonIgnoreProperties(ignoreUnknown=true)
public class FinanceData {
	 String centerNo;
	 String groupNo;
	 String loaneeNo;
	 String collectionDay;
	 String loanOfficerName;
	 String clientName;
	 String gender;
	 int age;
	 int currentAge;
	 String husbandORfatherName;
	 String joiningDate;
	 String nrcNumber;
	 String townshipName;
	 String wardORvillageTractName;
	 String villageNameORcenterName;
	 String address;
	 String remarks;
	 String groupCommittees;
	 String replaceORsubstitute;
	 String groupDissolveDate;
	 String oldGroup;
	 String result;
	 String dob;
	 String phNumber;
	 String filePath;
	 String createdDate;
	 String modifiedDate;
	 int userId;
	 String userName;
	 int recordStatus;
	 int id;
	 Boolean state;
	 File uploadFile;
	 
	public File getUploadFile() {
		return uploadFile;
	}
	public void setUploadFile(File uploadFile) {
		this.uploadFile = uploadFile;
	}
	public Boolean getState() {
		return state;
	}
	public void setState(Boolean state) {
		this.state = state;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(String createdDate) {
		this.createdDate = createdDate;
	}
	public String getModifiedDate() {
		return modifiedDate;
	}
	public void setModifiedDate(String modifiedDate) {
		this.modifiedDate = modifiedDate;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public int getRecordStatus() {
		return recordStatus;
	}
	public void setRecordStatus(int recordStatus) {
		this.recordStatus = recordStatus;
	}
	public String getFilePath() {
		return filePath;
	}
	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getPhNumber() {
		return phNumber;
	}
	public void setPhNumber(String phNumber) {
		this.phNumber = phNumber;
	}
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public String getCenterNo() {
		return centerNo;
	}
	public void setCenterNo(String centerNo) {
		this.centerNo = centerNo;
	}
	public String getGroupNo() {
		return groupNo;
	}
	public void setGroupNo(String groupNo) {
		this.groupNo = groupNo;
	}
	public String getLoaneeNo() {
		return loaneeNo;
	}
	public void setLoaneeNo(String loaneeNo) {
		this.loaneeNo = loaneeNo;
	}
	public String getCollectionDay() {
		return collectionDay;
	}
	public void setCollectionDay(String collectionDay) {
		this.collectionDay = collectionDay;
	}
	public String getLoanOfficerName() {
		return loanOfficerName;
	}
	public void setLoanOfficerName(String loanOfficerName) {
		this.loanOfficerName = loanOfficerName;
	}
	public String getClientName() {
		return clientName;
	}
	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getCurrentAge() {
		return currentAge;
	}
	public void setCurrentAge(int currentAge) {
		this.currentAge = currentAge;
	}
	public String getHusbandORfatherName() {
		return husbandORfatherName;
	}
	public void setHusbandORfatherName(String husbandORfatherName) {
		this.husbandORfatherName = husbandORfatherName;
	}
	public String getJoiningDate() {
		return joiningDate;
	}
	public void setJoiningDate(String joiningDate) {
		this.joiningDate = joiningDate;
	}
	public String getNrcNumber() {
		return nrcNumber;
	}
	public void setNrcNumber(String nrcNumber) {
		this.nrcNumber = nrcNumber;
	}
	public String getTownshipName() {
		return townshipName;
	}
	public void setTownshipName(String townshipName) {
		this.townshipName = townshipName;
	}
	public String getWardORvillageTractName() {
		return wardORvillageTractName;
	}
	public void setWardORvillageTractName(String wardORvillageTractName) {
		this.wardORvillageTractName = wardORvillageTractName;
	}
	public String getVillageNameORcenterName() {
		return villageNameORcenterName;
	}
	public void setVillageNameORcenterName(String villageNameORcenterName) {
		this.villageNameORcenterName = villageNameORcenterName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public String getGroupCommittees() {
		return groupCommittees;
	}
	public void setGroupCommittees(String groupCommittees) {
		this.groupCommittees = groupCommittees;
	}
	public String getReplaceORsubstitute() {
		return replaceORsubstitute;
	}
	public void setReplaceORsubstitute(String replaceORsubstitute) {
		this.replaceORsubstitute = replaceORsubstitute;
	}
	public String getGroupDissolveDate() {
		return groupDissolveDate;
	}
	public void setGroupDissolveDate(String groupDissolveDate) {
		this.groupDissolveDate = groupDissolveDate;
	}
	public String getOldGroup() {
		return oldGroup;
	}
	public void setOldGroup(String oldGroup) {
		this.oldGroup = oldGroup;
	}
	 
	 
}
