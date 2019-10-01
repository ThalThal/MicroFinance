package com.diamondpalace.finance.service;

public class SIDProfile {
 public String username;
 public Boolean check;
 public int role;

public int getRole() {
	return role;
}

public void setRole(int role) {
	this.role = role;
}

public Boolean getCheck() {
	return check;
}

public void setCheck(Boolean check) {
	this.check = check;
}

public String getUsername() {
	return username;
}

public void setUsername(String username) {
	this.username = username;
}
}
