package com.diamondpalace.finance.service;

import java.sql.Date;
import java.sql.Timestamp;

import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import jxl.write.DateTime;

@XmlRootElement
@JsonIgnoreProperties(ignoreUnknown=true)
public class SIDData {
	
	private String ID;
	private String CDC_NO;
	private String QUEUE_NO;
	private String TRANSACTION_CODE;
	private String REASON;
	private String NAME;
	private String OTHER_NAME;
	private String RANK;
	private Date DOB;
	private String NRC_NO;
	private String POB;
	private String NATIONALITY;
	private String MANNING_AGENT;
	private String GENDER;
	private String HEIGHT; 
	private String WEIGHT;
	private String COMPLEXION;
	private String MARITAL_STATUS_CODE;
	private String EDUCATION;
	private String IDENTIFYING_CHARACTERISTICS;
	private String RELIGION_CODE;
	private String TELEPHONE_NUMBER;
	private String SEASERVICE_DATE_START;
	private String PASSPORT_NUMBER;
	private Date PASSPORT_ISSUE_DATE;
	private Date PASSPORT_EXPIRY_DATE;
	private String PASSPORT_ISSUE_BY;
	private String PASSPORT_ISSUE_PLACE;
	private String CODEINDEX;
	private Date CDC_ISSUE_DATE;
	private Date CDC_EXPIRY_DATE;
	private String CDC_ISSUE_BY;
	private String CDC_ISSUE_PLACE;
	private String FATHER_NAME;
	private String FATHER_NRC;
	private String MOTHER_NAME;
	private String MOTHER_NRC;
	private String ADDRESS_PERMANENT;
	private String ADDRESS_TEMPORARY;
	private String NOK_NAME;
	private String NOK_RELATION;
	private String NOK_ADDRESS;
	private String SHIP_NAME;
	private Date SIGNON_DATE;
	private Date SIGNOFF_DATE;
	private Date APPOINTMENTDATE;
	private String ISDELETED;
	private String ISISSUED;
	private String EMAIL;
	private String USERNAME;
	private DateTime UPDATETIME;
	private void clearProperties() {
		this.CDC_NO="";
		this.QUEUE_NO ="";
		this.TRANSACTION_CODE="";
		this.REASON ="";
		this.NAME ="";
		this.OTHER_NAME ="";
		this.RANK ="";
		this.DOB=null;
		this.NRC_NO="";
		this.POB="";
		this.NATIONALITY="";
		this.MANNING_AGENT="";
		this.GENDER="";
		this.HEIGHT=""; 
		this.WEIGHT="";
		this.COMPLEXION="";
		this.MARITAL_STATUS_CODE="";
		this.EDUCATION="";
		this.IDENTIFYING_CHARACTERISTICS="";
		this.RELIGION_CODE="";
		this.TELEPHONE_NUMBER="";
		this.SEASERVICE_DATE_START="";
		
		this.PASSPORT_NUMBER="";
		this.PASSPORT_ISSUE_DATE=null;
		this.PASSPORT_EXPIRY_DATE=null;
		this.PASSPORT_ISSUE_BY="";
		this.PASSPORT_ISSUE_PLACE="";
		this.CODEINDEX="";
		this.CDC_ISSUE_DATE=null;
		this.CDC_EXPIRY_DATE=null;
		this.CDC_ISSUE_BY="";
		this.CDC_ISSUE_PLACE="";
		this.FATHER_NAME="";
		this.FATHER_NRC="";
		this.MOTHER_NAME="";
		this.MOTHER_NRC="";
		this.ADDRESS_PERMANENT="";
		this.ADDRESS_TEMPORARY="";
		this.NOK_NAME="";
		this.NOK_RELATION="";
		this.NOK_ADDRESS="";
		this.SHIP_NAME="";
		this.SIGNON_DATE=null;
		this.SIGNOFF_DATE=null;
		this.APPOINTMENTDATE=null;
		this.ACCESSTIME=null;
		this.ISDELETED="";
		this.ISISSUED="";
		this.EMAIL="";
	}
	public String getUSERNAME() {
		return USERNAME;
	}
	public void setUSERNAME(String uSERNAME) {
		USERNAME = uSERNAME;
	}
	public DateTime getUPDATETIME() {
		return UPDATETIME;
	}
	public void setUPDATETIME(DateTime uPDATETIME) {
		UPDATETIME = uPDATETIME;
	}
	public void setPASSPORT_EXPIRY_DATE(Date pASSPORT_EXPIRY_DATE) {
		PASSPORT_EXPIRY_DATE = pASSPORT_EXPIRY_DATE;
	}

	public void setCDC_ISSUE_DATE(Date cDC_ISSUE_DATE) {
		CDC_ISSUE_DATE = cDC_ISSUE_DATE;
	}

	public void setCDC_EXPIRY_DATE(Date cDC_EXPIRY_DATE) {
		CDC_EXPIRY_DATE = cDC_EXPIRY_DATE;
	}

	public void setSIGNOFF_DATE(Date sIGNOFF_DATE) {
		SIGNOFF_DATE = sIGNOFF_DATE;
	}

	public void setAPPOINTMENTDATE(Date aPPOINTMENTDATE) {
		APPOINTMENTDATE = aPPOINTMENTDATE;
	}
	private Timestamp ACCESSTIME;
	public void setACCESSTIME(Timestamp aCCESSTIME) {
		ACCESSTIME = aCCESSTIME;
	}
	
	
	
	
	public String getID() {
		return ID;
	}

	public void setID(String iD) {
		ID = iD;
	}

	public String getCDC_NO() {
		return CDC_NO;
	}

	public void setCDC_NO(String cDC_NO) {
		CDC_NO = cDC_NO;
	}

	public String getQUEUE_NO() {
		return QUEUE_NO;
	}

	public void setQUEUE_NO(String qUEUE_NO) {
		QUEUE_NO = qUEUE_NO;
	}

	public String getTRANSACTION_CODE() {
		return TRANSACTION_CODE;
	}

	public void setTRANSACTION_CODE(String tRANSACTION_CODE) {
		TRANSACTION_CODE = tRANSACTION_CODE;
	}

	public String getREASON() {
		return REASON;
	}

	public void setREASON(String rEASON) {
		REASON = rEASON;
	}

	public String getNAME() {
		return NAME;
	}

	public void setNAME(String nAME) {
		NAME = nAME;
	}

	public String getOTHER_NAME() {
		return OTHER_NAME;
	}

	public void setOTHER_NAME(String oTHER_NAME) {
		OTHER_NAME = oTHER_NAME;
	}

	public String getRANK() {
		return RANK;
	}

	public void setRANK(String rANK) {
		RANK = rANK;
	}

	public Date getDOB() {
		return DOB;
	}

	public void setDOB(Date dOB) {
		DOB = dOB;
	}

	public String getNRC_NO() {
		return NRC_NO;
	}

	public void setNRC_NO(String nRC_NO) {
		NRC_NO = nRC_NO;
	}

	public String getPOB() {
		return POB;
	}

	public void setPOB(String pOB) {
		POB = pOB;
	}

	public String getNATIONALITY() {
		return NATIONALITY;
	}

	public void setNATIONALITY(String nATIONALITY) {
		NATIONALITY = nATIONALITY;
	}

	public String getMANNING_AGENT() {
		return MANNING_AGENT;
	}

	public void setMANNING_AGENT(String mANNING_AGENT) {
		MANNING_AGENT = mANNING_AGENT;
	}

	public String getGENDER() {
		return GENDER;
	}

	public void setGENDER(String gENDER) {
		GENDER = gENDER;
	}

	public String getHEIGHT() {
		return HEIGHT;
	}

	public void setHEIGHT(String hEIGHT) {
		HEIGHT = hEIGHT;
	}

	public String getWEIGHT() {
		return WEIGHT;
	}

	public void setWEIGHT(String wEIGHT) {
		WEIGHT = wEIGHT;
	}

	public String getCOMPLEXION() {
		return COMPLEXION;
	}

	public void setCOMPLEXION(String cOMPLEXION) {
		COMPLEXION = cOMPLEXION;
	}

	public String getMARITAL_STATUS_CODE() {
		return MARITAL_STATUS_CODE;
	}

	public void setMARITAL_STATUS_CODE(String mARITAL_STATUS_CODE) {
		MARITAL_STATUS_CODE = mARITAL_STATUS_CODE;
	}

	public String getEDUCATION() {
		return EDUCATION;
	}

	public void setEDUCATION(String eDUCATION) {
		EDUCATION = eDUCATION;
	}

	public String getIDENTIFYING_CHARACTERISTICS() {
		return IDENTIFYING_CHARACTERISTICS;
	}

	public void setIDENTIFYING_CHARACTERISTICS(String iDENTIFYING_CHARACTERISTICS) {
		IDENTIFYING_CHARACTERISTICS = iDENTIFYING_CHARACTERISTICS;
	}

	public String getRELIGION_CODE() {
		return RELIGION_CODE;
	}

	public void setRELIGION_CODE(String rELIGION_CODE) {
		RELIGION_CODE = rELIGION_CODE;
	}

	public String getTELEPHONE_NUMBER() {
		return TELEPHONE_NUMBER;
	}

	public void setTELEPHONE_NUMBER(String tELEPHONE_NUMBER) {
		TELEPHONE_NUMBER = tELEPHONE_NUMBER;
	}

	public String getSEASERVICE_DATE_START() {
		return SEASERVICE_DATE_START;
	}

	public void setSEASERVICE_DATE_START(String sEASERVICE_DATE_START) {
		SEASERVICE_DATE_START = sEASERVICE_DATE_START;
	}

	public String getPASSPORT_NUMBER() {
		return PASSPORT_NUMBER;
	}

	public void setPASSPORT_NUMBER(String pASSPORT_NUMBER) {
		PASSPORT_NUMBER = pASSPORT_NUMBER;
	}

	public Date getPASSPORT_ISSUE_DATE() {
		return PASSPORT_ISSUE_DATE;
	}

	public void setPASSPORT_ISSUE_DATE(Date pASSPORT_ISSUE_DATE) {
		PASSPORT_ISSUE_DATE = pASSPORT_ISSUE_DATE;
	}

	

	public String getPASSPORT_ISSUE_BY() {
		return PASSPORT_ISSUE_BY;
	}

	public void setPASSPORT_ISSUE_BY(String pASSPORT_ISSUE_BY) {
		PASSPORT_ISSUE_BY = pASSPORT_ISSUE_BY;
	}

	public String getPASSPORT_ISSUE_PLACE() {
		return PASSPORT_ISSUE_PLACE;
	}

	public void setPASSPORT_ISSUE_PLACE(String pASSPORT_ISSUE_PLACE) {
		PASSPORT_ISSUE_PLACE = pASSPORT_ISSUE_PLACE;
	}

	public String getCODEINDEX() {
		return CODEINDEX;
	}

	public void setCODEINDEX(String cODEINDEX) {
		CODEINDEX = cODEINDEX;
	}

	

	public String getCDC_ISSUE_BY() {
		return CDC_ISSUE_BY;
	}

	public void setCDC_ISSUE_BY(String cDC_ISSUE_BY) {
		CDC_ISSUE_BY = cDC_ISSUE_BY;
	}

	public String getCDC_ISSUE_PLACE() {
		return CDC_ISSUE_PLACE;
	}

	public void setCDC_ISSUE_PLACE(String cDC_ISSUE_PLACE) {
		CDC_ISSUE_PLACE = cDC_ISSUE_PLACE;
	}

	public String getFATHER_NAME() {
		return FATHER_NAME;
	}

	public void setFATHER_NAME(String fATHER_NAME) {
		FATHER_NAME = fATHER_NAME;
	}

	public String getFATHER_NRC() {
		return FATHER_NRC;
	}

	public void setFATHER_NRC(String fATHER_NRC) {
		FATHER_NRC = fATHER_NRC;
	}

	public String getMOTHER_NAME() {
		return MOTHER_NAME;
	}

	public void setMOTHER_NAME(String mOTHER_NAME) {
		MOTHER_NAME = mOTHER_NAME;
	}

	public String getMOTHER_NRC() {
		return MOTHER_NRC;
	}

	public void setMOTHER_NRC(String mOTHER_NRC) {
		MOTHER_NRC = mOTHER_NRC;
	}

	public String getADDRESS_PERMANENT() {
		return ADDRESS_PERMANENT;
	}

	public void setADDRESS_PERMANENT(String aDDRESS_PERMANENT) {
		ADDRESS_PERMANENT = aDDRESS_PERMANENT;
	}

	public String getADDRESS_TEMPORARY() {
		return ADDRESS_TEMPORARY;
	}

	public void setADDRESS_TEMPORARY(String aDDRESS_TEMPORARY) {
		ADDRESS_TEMPORARY = aDDRESS_TEMPORARY;
	}

	public String getNOK_NAME() {
		return NOK_NAME;
	}

	public void setNOK_NAME(String nOK_NAME) {
		NOK_NAME = nOK_NAME;
	}

	public String getNOK_RELATION() {
		return NOK_RELATION;
	}

	public void setNOK_RELATION(String nOK_RELATION) {
		NOK_RELATION = nOK_RELATION;
	}

	public String getNOK_ADDRESS() {
		return NOK_ADDRESS;
	}

	public void setNOK_ADDRESS(String nOK_ADDRESS) {
		NOK_ADDRESS = nOK_ADDRESS;
	}

	public String getSHIP_NAME() {
		return SHIP_NAME;
	}

	public void setSHIP_NAME(String sHIP_NAME) {
		SHIP_NAME = sHIP_NAME;
	}

	
	public Date getPASSPORT_EXPIRY_DATE() {
		return PASSPORT_EXPIRY_DATE;
	}

	public Date getCDC_ISSUE_DATE() {
		return CDC_ISSUE_DATE;
	}

	public Date getCDC_EXPIRY_DATE() {
		return CDC_EXPIRY_DATE;
	}

	public void setSIGNON_DATE(Date sIGNON_DATE) {
		SIGNON_DATE = sIGNON_DATE;
	}

	


	public Timestamp getACCESSTIME() {
		return ACCESSTIME;
	}

	public String getISDELETED() {
		return ISDELETED;
	}

	public void setISDELETED(String iSDELETED) {
		ISDELETED = iSDELETED;
	}

	public String getISISSUED() {
		return ISISSUED;
	}

	public void setISISSUED(String iSISSUED) {
		ISISSUED = iSISSUED;
	}

	public String getEMAIL() {
		return EMAIL;
	}

	public void setEMAIL(String eMAIL) {
		EMAIL = eMAIL;
	}
	public SIDData() {
		super();
		clearProperties();
	}

	public Date getSIGNOFF_DATE() {
		return SIGNOFF_DATE;
	}

	public Date getAPPOINTMENTDATE() {
		return APPOINTMENTDATE;
	}

	public Date getSIGNON_DATE() {
		return SIGNON_DATE;
	}
	
}
