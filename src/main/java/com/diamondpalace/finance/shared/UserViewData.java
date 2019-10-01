package com.diamondpalace.finance.shared;

public class UserViewData extends UserData {

	private String username;

	public UserViewData() {
		clearProperties();
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void clearProperties() {
		super.clearProperties();
		this.username = "";
	}
}
