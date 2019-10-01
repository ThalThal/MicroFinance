package com.diamondpalace.finance.framework;

import java.util.ArrayList;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Result {
	public Result() {
		clearProperties();
	}

	private boolean state = false;
	private String msgCode = "";
	private String msgDesc = "";
	private long keyResult = 0;
	private ArrayList<Long> longResult = new ArrayList<Long>();
	private ArrayList<String> stringResult = new ArrayList<String>();
	private long[] key;
	private String[] str;

	public String[] getStr() {
		return str;
	}

	public void setStr(String[] str) {
		this.str = str;
	}

	public boolean isState() {
		return state;
	}

	public void setState(boolean state) {
		this.state = state;
	}

	public String getMsgCode() {
		return msgCode;
	}

	public void setMsgCode(String msgCode) {
		this.msgCode = msgCode;
	}

	public String getMsgDesc() {
		return msgDesc;
	}

	public void setMsgDesc(String msgDesc) {
		this.msgDesc = msgDesc;
	}

	public ArrayList<Long> getLongResult() {
		return longResult;
	}

	public void setLongResult(ArrayList<Long> longResult) {
		this.longResult = longResult;
	}

	public ArrayList<String> getStringResult() {
		return stringResult;
	}

	public void setStringResult(ArrayList<String> stringResult) {
		this.stringResult = stringResult;
	}

	
	public long[] getKey() {
		return key;
	}

	public void setKey(long[] key) {
		this.key = key;
	}
	

	public long getKeyResult() {
		return keyResult;
	}

	public void setKeyResult(long keyResult) {
		this.keyResult = keyResult;
	}

	private void clearProperties() {
		state = false;
		msgCode = "";
		msgDesc = "";
		longResult = new ArrayList<Long>();
		stringResult = new ArrayList<String>();
		
	}
}
