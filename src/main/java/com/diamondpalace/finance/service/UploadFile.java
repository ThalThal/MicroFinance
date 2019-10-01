package com.diamondpalace.finance.service;

import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@XmlRootElement
@JsonIgnoreProperties(ignoreUnknown=true)
public class UploadFile {
  private String foldername;
  private String filename;
public String getFoldername() {
	return foldername;
}
public void setFoldername(String foldername) {
	this.foldername = foldername;
}
public String getFilename() {
	return filename;
}
public void setFilename(String filename) {
	this.filename = filename;
}
}
