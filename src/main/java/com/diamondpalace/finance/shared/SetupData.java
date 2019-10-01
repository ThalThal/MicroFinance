package com.diamondpalace.finance.shared;

import java.io.Serializable;
import java.util.HashMap;

import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
@XmlRootElement
@JsonIgnoreProperties(ignoreUnknown = true)
public class SetupData implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -956213754516909702L;
	public SetupData() {
		super();
		clearProperties();
	}
	private long syskey;
	public void setSyskey(long args ){
		this.syskey=args;
	}
	public long getSyskey() {
		return this.syskey;
	}
	private long autokey;
	public void setAutokey(long args ){
		this.autokey=args;
	}
	public long getAutokey() {
		return this.autokey;
	}
	private String createddate;
	public void setCreateddate(String args ){
		this.createddate=args;
	}
	public String getCreateddate() {
		return this.createddate;
	}
	private String modifieddate;
	public void setModifieddate(String args ){
		this.modifieddate=args;
	}
	public String getModifieddate() {
		return this.modifieddate;
	}
	private String userid;
	public void setUserid(String args ){
		this.userid=args;
	}
	public String getUserid() {
		return this.userid;
	}
	private String username;
	public void setUsername(String args ){
		this.username=args;
	}
	public String getUsername() {
		return this.username;
	}
	private int RecordStatus;
	public void setRecordstatus(int args ){
		this.RecordStatus=args;
	}
	public int getRecordstatus() {
		return this.RecordStatus;
	}
	private int SyncStatus;
	public void setSyncstatus(int args ){
		this.SyncStatus=args;
	}
	public int getSyncstatus() {
		return this.SyncStatus;
	}
	private long SyncBatch;
	public void setSyncbatch(long args ){
		this.SyncBatch=args;
	}
	public long getSyncbatch() {
		return this.SyncBatch;
	}
	private String T1;
	public void setT1(String args ){
		this.T1=args;
	}
	public String getT1() {
		return this.T1;
	}
	private String T2;
	public void setT2(String args ){
		this.T2=args;
	}
	public String getT2() {
		return this.T2;
	}
	private String T3;
	public void setT3(String args ){
		this.T3=args;
	}
	public String getT3() {
		return this.T3;
	}
	private String T4;
	public void setT4(String args ){
		this.T4=args;
	}
	public String getT4() {
		return this.T4;
	}
	private String T5;
	public void setT5(String args ){
		this.T5=args;
	}
	public String getT5() {
		return this.T5;
	}
	private long N1;
	public void setN1(long args ){
		this.N1=args;
	}
	public long getN1() {
		return this.N1;
	}
	public HashMap<String, Object> getKeyValue() {
		return keyValue;
	}
	public void setKeyValue(HashMap<String, Object> keyValue) {
		this.keyValue = keyValue;
	}
	private HashMap<String, Object> keyValue;
	private HashMap<String, Object> keyValue1;
	private SKUPointData [] skuArray;
	private long N2;
	public void setN2(long args ){
		this.N2=args;
	}
	public long getN2() {
		return this.N2;
	}
	private double N3;
	public void setN3(double args ){
		this.N3=args;
	}
	public double getN3() {
		return this.N3;
	}
	private long N4;
	public void setN4(long args ){
		this.N4=args;
	}
	public long getN4() {
		return this.N4;
	}
	private long N5;
	public void setN5(long args ){
		this.N5=args;
	}
	public long getN5() {
		return this.N5;
	}

	private long usersyskey;
	public long getUsersyskey() {
		return usersyskey;
	}
	public void setUsersyskey(long usersyskey) {
		this.usersyskey = usersyskey;
	}	
	private long parentid;
	public long getParentid(){
		return this.parentid;
	}
	
	private int sr;

	public int getSr() {
	return sr;
	}
	public void setSr(int sr) {
	this.sr = sr;
	}

	public void clearProperties(){
	this.syskey=0;
	this.autokey=0;
	this.createddate="";
	this.modifieddate="";
	this.userid="";
	this.username="";
	this.RecordStatus=0;
	this.SyncStatus=0;
	this.SyncBatch=0;
	this.parentid=0;
	this.usersyskey = 0;
	this.T1="";
	this.T2="";
	this.T3="";
	this.T4="";
	this.T5="";
	this.N1=0;
	this.N2=0;
	this.N3=0;
	this.N4=0;
	this.N5=0;
	this.parentid=0;
	this.skuArray = new SKUPointData[0];
	}
	public SKUPointData[] getSkuArray() {
		return skuArray;
	}
	public void setSkuArray(SKUPointData[] skuArray) {
		this.skuArray = skuArray;
	}
	
	
	
}
