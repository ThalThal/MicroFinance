package com.diamondpalace.finance.shared;
public class CommonEnum {

	public enum GeneralStatus{  
		ACTIVE(1,"Active"),INACTIVE(8,"InActive"),DELETED(4,"Deleted"); 

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }

		GeneralStatus(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	} 
	
	public enum TravelRequestFormType{  
		travelRequest(1,"travelRequest"),travelCash(2,"travelCash"),travelReturn(3,"travelReturn"); 

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }

		TravelRequestFormType(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	} 
	
	public enum AmountStatus{  
		Greater(1,"Greater Than"),Less(2,"Less Than"),GreateEqual(3,"Greater Than Equal"),LessEqual(4,"Less Than Equal"),Equal(5,"Equal"); 

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }

		AmountStatus(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	} 
	
	public enum Status{  
		ACTIVE(1,"Active"),INACTIVE(8,"InActive"),DELETED(4,"Deleted"); 

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }

		Status(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	} 
	public enum ApplicantStatusValue{  
		ApproveStatus(1,"ApproveStatus"),InterviewStatus(2,"InterviewStatus"),writtenStatus(3,"writtenStatus"),
		computerStauts(4,"computerStauts"),medicalStatus(5,"medicalStatus"),AppointedStatus(6,"AppointedStatus"),
		rejectStatus(7,"rejectStatus"),DefaultStatus(9,"DefaultStatus"),finalStatus(99,"finalStatus"); 

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }

		ApplicantStatusValue(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	} 
	public enum TravelDetail{  
		ins(1,"INS"),ous(2,"OUS"),its(3,"ITS"); 

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }

		TravelDetail(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	}
	
	public enum ModelTravel{  
		byAir(1,"By Air"),byRoad(2,"By Road"),byRail(3,"By Rail"),byShip(4,"By Ship"); 

		private final long value;  
		private final String description;        
		public long value(){  return this.value;}  
		public String description(){ return this.description; }

		ModelTravel(long aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	}
	
	public enum VehicleType{  
		bankVehicle(1,"Bank's Vehicle"),publicTransport(2,"Public Transportation"),own(3,"By Own Vehicle(state reason)"); 

		private final long value;  
		private final String description;        
		public long value(){  return this.value;}  
		public String description(){ return this.description; }

		VehicleType(long aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	}
	
	public enum EmployeeStatus{  
		ACTIVE(1,"Active"),INACTIVE(8,"Inactive"); 

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }

		EmployeeStatus(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	} 
	

	public enum TravelCashStatus{  
		excess(1,"Excess"),deficient(2,"Deficient"); 

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }

		TravelCashStatus(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	} 
	
	public enum wdgType{

		Submitted(1,"Submitted"),
		Approved(2,"Approved"),
		Rejected(3,"Rejected");
		private final int value;
		private final String description;
		public int value(){ return this.value;}
		public String description(){ return this.description; }

		wdgType(int aStatus, String desc){
			this.value = aStatus;
			this.description = desc;
		}
	}
	public enum Time{  
		AM(0,"AM"),PM(1,"PM"); 

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }

		Time(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	} 
	public enum TravelClaimsStatus{  
		Initial(1,"Initial"),Return(2,"Return"); 

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }

		TravelClaimsStatus(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	} 

	public enum ApprovalType{  
		HeadOffice(1,"Head Office"),Branch(2,"Branch"),TravelAdvance(3,"Advance Travel Branch Flow");  

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }

		ApprovalType(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	}
	
	public enum ClearanceType{  
		Bond(1,"Bond"),Advance(2,"Advance Cash"),Training(3,"Training Bond"),StaffLoan(4,"Staff Loan"),HP(5,"HP"),Uniform(6,"Uniform"),Other(7,"Other"); 

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }

		ClearanceType(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	}
	
	
	public enum EducationType{
		Default(0,"-"),Degree(1,"Degree"),Diploma(2,"Diploma"), Certificate(3,"Certificate"),Training(4,"Training"),Others(5,"Others");

		private final int value; 

		public int val(){return value;}
		private final String description; 
		public String description(){ return this.description; }
		private EducationType(int value,String desc){
			this.value = value;
			this.description=desc;
		}
	}
	public enum Grade{
		Default(0,"-"),A(1,"A"),A1(2,"A+"), A2(3,"A-"),B(4,"B"),B1(5,"B+"),B2(6,"B-"),C(7,"C"),C1(8,"C+"),C2(9,"C-"),D(10,"D"),D1(11,"D+"),D2(12,"D-"),
		E(13,"E"),E1(14,"E+"), E2(15,"E-");
		
		private final int value; 

		public int val(){return value;}
		private final String description; 
		public String description(){ return this.description; }
		private Grade(int value,String desc){
			this.value = value;
			this.description=desc;
		}
	}
	
	public enum projectType{

		ERP(1,"ERP"),
		Banking(2,"Banking"),
		Payroll(3,"Payroll"),
		POS(4,"POS"),
		CMS(5,"CMS"),
		WepApp(6,"Web App"),
		MobileApp(7,"Mobile App");
		private final int value;
		private final String description;
		public int value(){ return this.value;}
		public String description(){ return this.description; }

		projectType(int aStatus, String desc){
			this.value = aStatus;
			this.description = desc;
		}
	}
	public enum TrainingStatus{  
		None(0,"-"),
		New(1,"New"),
		Approve(2,"Approve"); 

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }

		TrainingStatus(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	} 	
	public enum requestStatus{  
		Requestto(1,"Request to"),
		Requestby(2,"Request by"); 

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }

		requestStatus(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	} 	

	public enum auditType{  
		Dash(0,"-"),
		Save(1,"Save"),
		Update(2,"Update"), 
		Delete(3,"Delete");

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }

		auditType(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	}
	
	public enum OverTimeType{  
		under9pm(0,"PR14"),
		between9pmAnd12pm(1,"PR15"),
		over12pm(2,"PR16"), 
		holiday(3,"PR17");

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }

		OverTimeType(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	}
	
	public enum QuestionType{  
		Employee(1,"n3=1"),
		ExitInterview(1,"n1=1"),
		BioPart(1,"n2=1"),
		Group(1,"n5<>0"),
		Template(1, "n6="); 

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }

		QuestionType(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	}
	
	public enum TableName{
		Person("UVM012","Person"),HrRolePlan("HrRolePlan","HrRolePlan"),Clearance("Clearance","Clearance"),Branch("PYM022","Branch"),TransferWorkFlow("ModifiedApprovalTransfer","TransferWorkFlow"),
		Department("GLM003","Department"), Division("PYM059","Division"),Section("PYM023","Section"),Position("PYM025","Rank"),Cluster("PYM061","Cluster"),
		ClaimsType("HRM901","Claims Type"),Claims("HRM902","Claims"),Title("UVM017","Title"),EducationType("Pym042","Education Type"),
		WorkingExp("Pym003","WorkingExp"),Rank("PYM025","Rank"),EmploymentType("Pym032","Employment Type"),WelfareType("WelfareType","WelfareType"),
		CostCenter("Glm002","Cost Center"),PayLevel("HRM905","Pay Level"),PromotionType("HRM906","Promotion Type"),
		Currency("UVM011","Currency"),ReportingMethod("HRM907","Reporting Method"),ApplicantStatus("HRM909","Applicant Status"),
		Status("TCK005","Status"),Priority("TCK004","Priority"),Product("TCK003","Product"),Customer("TCK001","Customer"),AssignStatus("CRM602","AssignStatus"),
		Service("TCK002","Service"),CustomerType("TCK007","Customer Type"),Status2("A00003", "Asset Status"),OrderFrom("HRM104","Order From"),Order("HRM094","Order"),
		ContractDetailsType("HRM004","Contract Sub Type"),ContractType("HRM095","Contract Type"),Contract("HRM025","Contract"), AssetSetup("A00002", "AssetSetup"),
		HRRole("HRM911","Role"),ModuleType("HRM064","Module Type"),SubModuleType("HRM065","Sub Module Type"),Project("CRM001","Project"), Job("CRM002","Job"),
		OrderType("HRM103","Order Type"), InternalRecord("HRM006","Internal Record"),InternalRecordType("HRM058","Internal Record Type"),Warning("HRM099","Warning"),
		PayTransactType("HRM912","Pay Transact Type"),SetupTest("A00009", "SetupTest"), Location("HRM913", "Location"), Brand("HRM915", "Brand"), SubDivision("HRM916", "Sub Division"),
		QualificationType("HRM914","Qualification Type"),QualificationGroup("HRM097","Qualification Group"),Organization("PYM007", "Company"),
		DailylogType("HRM921", "Daily Log Type"), DailylogStatus("HRM922", "Daily Log Status"),Site("PYM024","Site"),Trade("PYM150","Trade"), AssetType("A00004", "Asset Type"), ServiceTracker("TCK006", "Tracker"), 
		LeavePeriod("PYM041","Leave Period"),EmailAddress("HRM017","Email Adress"),JuctionProduct("JunProduct","JunProduct"),OutDivision("PYM060","OutDivision"),
		TypeofCustomer("TCK009", "Customer Type"), RelativeType("Hrm012","Relative Type"),TravelRequest("TravelRequest","TravelRequest"),
		TravelReturnCash("TravelReturnCash","TravelReturnCash"),
		MemberType("TCK011", "Member Type"), LeaveTaken("PYM111", "Leave Taken"),BatchNoForAttendace("ATT105","Batch No"), ProductCus("TCK012", "Product Cus"), Company("PYM007" , "Company"), SLA("TCK013", "SLA"),
		ProductModule("HRM920", "Product Module"), DisplinaryAction("HRM016","DisplinaryAction"),RankType("PYM025","Rank Type"),
		OtherDetails("HRM005","ref Other Details"), FacilitiesType("HRM923", "Facilities Type"),//for others;
		EmpLevel("HRM603","Level"),Resources("CRM603","Resources"),Booking("CRM005","Booking"),AgeType("","AgeType"),Related("HRM010","Related"),
		ClaimsHistory("JUN016","ClaimsHistory"),LeaveApprovalHistory("JUN017","LeaveApprovalHistory"),

		ApprovalHistory("JUN013","ApprovalHistory"),StaffWarefareHistory("WarefareHistory","WarefareHistory"),StaffWarefare("StaffWarefare","StaffWarefare"),
		TravelRequestHistory("TravelRequestHistory","TravelRequestHistory"),TravelCashBeforeTripHistory("TravelCashBeforeTripHistory","TravelCashBeforeTripHistory"),TravelReturnHistory("TravelReturnHistory","TravelReturnHistory"),
		TransferHistory("JUN014","TransferHistory"),OTClaimsHistory("JUN015","OTClaimsHistory"), ExitInterviewHistory("JUN021","Exit Interview History"),ExitInterview("Hrm022","Exit Interview"),
		EmployeeStatus("HRM601","Employee Status"),DetectionType("HRM602","Detection Type"),InterviewStage("HRM019","Interview Stage"),Group("GLM004","Groups"),
		Country("Uvm018","Country"),Education("Pym002", "Education"),PayCode("PayCode","Pay Code"),Period("Period","Period "),PayrollCurrency("Currency","Currency"), SkillHeader("HRM020","Skill Header"),
		PayTransType("PayTransType","PayTransType"), PayRatesType("PayRatesType", "PayRatesType"), PayGroup("PayGroup","PayGroup"), CalculationMethod("CalculationMethod", "Calculation Method"), Stage("Stage", "Stage"),JunRecruitmentPlan("JunRecruitmentPlan","JunRecruitmentPlan"),
		RecruitmentPlan("RecruitmentPlan","RecruitmentPlan"),RecruitmentPlanHistory("JUN020","RecruitmentPlanHistory"), LeaveDateRange("HRM100","Date Range"), Recurring("recurring","Recurring"), BioPart("BIOPART","Bio Part"), QuestionDetail("QuestionDetail","Question Detail"),
		Register("Register","Register"),Rating("Rating","Rating"), QuestionGroup("QuestionGroup","Question Group"), QuestionTemplate("QuestionTemplate","Question Template"),
		MaritalStatus("Uvm020","Marital Status"),Religion("Pym019","Religion"),Race("Uvm019","Race"); //added by su mon 25-11-2014
		
		private final String values;
		private final String description;   
		public String val(){return values;}
		public String description(){return this.description;}
		private TableName(String physicalName, String logicalName){
			this.values = physicalName;
			this.description = logicalName;
		}
	}
	
	public enum CheckingTableName{
		//data type
		Employee("PYM007","PYM006","n1","2"),Promotion("PYM007","hrm904","n9","2"), 
		Product("TCK003", "TCK012", "N2", "2");
		
		private final String values;
		private final String description;   
		private final String fieldName;
		private final String dataType;
		
		public String key(){return values;}
		public String value(){return this.description;}
		public String fieldName(){return this.fieldName;}
		public String dataType(){return this.dataType;}
		
		private CheckingTableName(String physicalName, String logicalName, String fieldName, String dataType){
			this.values = physicalName;
			this.description = logicalName;
			this.fieldName = fieldName;
			this.dataType = dataType;
		}
	}	
	
	public enum RecordStatus{
		
		All(0,"All"),Active(1,"Normal"),InActive(2,"InActive"),Delete(4,"Delete"),Deactivate(8,"8");    

		private final int value;
		private final String description;
		public int val(){return value;}
		public String description(){return this.description;}

		private RecordStatus(int aStatus, String desc){
			this.value = aStatus;
			this.description = desc;
		}
	}
	
	public enum ApplicantAppliedStatus{ 
		Submitted(1,"Submitted"),Saved(2,"Saved");	
		private final long value;
		private final String description;
		public long value(){return this.value;}   
		public String description(){return this.description;}
		
		private ApplicantAppliedStatus(int aStatus, String desc){  
			this.value = aStatus;
			this.description = desc;
		} 
	}

	public enum Months{
		_(0,"-"),January(1,"January"),February(2,"February"),March(3,"March"),April(4,"April"),
		May(5,"May"),June(6,"June"),July(7,"July"),August(8,"August"),September(9,"September"),
		October(10,"October"),November(11,"November"),December(12,"December")
		;        

		private final int value;
		private final String description;
		public int val(){return value;}
		public String description(){return this.description;}

		private Months(int aStatus, String desc){
			this.value = aStatus;
			this.description = desc;
		}
	}
	public enum SyncStatus{  
		NA(1,"NA");          
		private final int value;  
		private final String description;   
		public int value(){return this.value;}  
		public String description(){return this.description; }  

		private SyncStatus(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	}
	public enum LeaveNClaimsStatus{ 
		All(0),Submitted(1),Approved(2),Rejected(3);	
		private final long value;

		public long value(){return this.value;}   

		private LeaveNClaimsStatus(int aStatus){  
			this.value = aStatus;
		}  
	
	}

	public enum RankDepartmentSectionStatus{ 
		Department(1),Section(2);	
		private final long value;

		public long value(){return this.value;}   

		private RankDepartmentSectionStatus(int aStatus){  
			this.value = aStatus;
		}  
	}
	
	public enum sendMailRecordStatus{ 
		Unsend(0),Send(1),Delete(4);	
		private final long value;

		public long value(){return this.value;}   

		private sendMailRecordStatus(int aStatus){  
			this.value = aStatus;
		}  
	}

	
	public enum TransferStatus{ 
		All(0),Submitted(1),Approved(2),Rejected(3);
		private final long value;

		public long value(){return this.value;}   

		private TransferStatus(int aStatus){  
			this.value = aStatus;
		}  
	}
	
	public enum RecruitmentPlanApprovalStatus{ 
		All(0),Submitted(1),Approved(2),Rejected(3);	
		private final long value;

		public long value(){return this.value;}   

		private RecruitmentPlanApprovalStatus(int aStatus){  
			this.value = aStatus;
		}  
	}

	public enum TravelRequestApprovalStatus{ 
		All(0),Submitted(1),Approved(2),Rejected(3);	
		private final long value;

		public long value(){return this.value;}   

		private TravelRequestApprovalStatus(int aStatus){  
			this.value = aStatus;
		}  
	}
	
	public enum RecruitmentPlanStatus{ 
		Replacement(1),Additional(2),NewPosition(3),Temporary(4);	
		private final long value;

		public long value(){return this.value;}   

		private RecruitmentPlanStatus(int aStatus){  
			this.value = aStatus;
		}  
	}
	
	public enum StaffWarefareStatus{ 
		All(0),Submitted(1),Approved(2),Rejected(3);	
		private final long value;

		public long value(){return this.value;}   

		private StaffWarefareStatus(int aStatus){  
			this.value = aStatus;
		}  
	}

	public enum ApplicantApproveStatus{ 
		Interview(0),Approved(1),Rejected(2);	
		private final long value;

		public long value(){return this.value;}   

		private ApplicantApproveStatus(int aStatus){  
			this.value = aStatus;
		}  
	}
	public enum OTType{ 
		Regular(1),Special(2);	
		private final long value;

		public long value(){return this.value;}   

		private OTType(int aStatus){  
			this.value = aStatus;
		}  
	}
	public enum DateFilter{
		Today(1,"Today"), Yesterday(2,"Yesterday"),thisweek(3,"This Week"), Lastweek(4,"Last Week"), Thismonth(5,"This Month"), Lastmonth(6,"Last Month"), Past7day(7,"Past 7 Days"), Past30Days(8,"Past 30 Days"), Ever(9,"Ever") ;
		private final int value;
		private final String description;
		public int value(){return this.value;}
		public String description(){return this.description; }

		private DateFilter(int Status, String desc){
			this.value = Status;
			this.description = desc;
		}
	}
	public enum Period{//Period for Leave Type mew
		Monthly(1,"Monthly"),Yearly(2,"Yearly");
		private final int value;
		private final String description;
		public int value(){return this.value;}
		public String description(){return this.description; }
		private Period(int Status,String desc){
			this.value = Status;
			this.description = desc;
		}
	}
	public enum PayPeriodStaus{//Period for Leave Type mew
		New(0,"New"),Wip(1,"Wip"),Processed(2,"Processed");
		private final int value;
		private final String description;
		public int value(){return this.value;}
		public String description(){return this.description; }
		private PayPeriodStaus(int Status,String desc){
			this.value = Status;
			this.description = desc;
		}
	}
	public enum DateFilterView{
		//updated by Su Mon 30-09-2014
		//Today(1,"Today"), Yesterday(2,"Yesterday") ;
		Today(1,"Today"), Yesterday(2,"Yesterday"),thisweek(3,"This Week"), Lastweek(4,"Last Week"), Thismonth(5,"This Month"), Lastmonth(6,"Last Month"), Past7day(7,"Past 7 Days"), Past30Days(8,"Past 30 Days"); //, Ever(9,"Ever") ;
		//updated by Su Mon 30-09-2014
		private final int value;
		private final String description;
		public int value(){return this.value;}
		public String description(){return this.description; }

		private DateFilterView(int Status, String desc){
			this.value = Status;
			this.description = desc;
		}
	}	
	public enum AssetType{
		CurrentAsset(1,"Current Asset"), FixedAsset(2,"Fixed Asset");
		private final int value;
		private final String description;
		public int value(){return this.value;}
		public String description(){return this.description; }

		private AssetType(int Status, String desc){
			this.value = Status;
			this.description = desc;
		}
	}
	public enum FrequencyType{
		Default(0, "-"), Monthly(1,"Monthly"), Fortnightly(2,"Fortnightly"), Weekly(3, "Weekly");
		private final int value;
		private final String description;
		public int value(){return this.value;}
		public String description(){return this.description; }

		private FrequencyType(int Status, String desc){
			this.value = Status;
			this.description = desc;
		}
	}
	
	public enum RecurringType{
		Default(0, "-"), Monthly(1,"Monthly"), Quarterly(2,"Quarterly"), Weekly(3, "Weekly"), Daily(4, "Daily");
		private final int value;
		private final String description;
		public int value(){return this.value;}
		public String description(){return this.description; }

		private RecurringType(int Status, String desc){
			this.value = Status;
			this.description = desc;
		}
	}
	public enum RecurringMethod{
		Default(0, "-"), Recurring(1,"Recurring"), HousingLoan(2,"Housing Loan");
		private final int value;
		private final String description;
		public int value(){return this.value;}
		public String description(){return this.description; }

		private RecurringMethod(int Status, String desc){
			this.value = Status;
			this.description = desc;
		}
	}
	public enum DrCrType{
		Debit(0,"Debit"), Credit(1,"Credit");
		private final int value;
		private final String description;
		public int value(){return this.value;}
		public String description(){return this.description; }

		private DrCrType(int Status, String desc){
			this.value = Status;
			this.description = desc;
		}
	}
	public enum TextFilterOperator{
		Equals(0,"Equals"),Contains(1,"Contains"),Begins_With(2,"Begins With"),End_With(3,"End With");        

		private final int value;
		private final String description;        
		public int val(){return value;}
		public String description(){return this.description;}

		private TextFilterOperator(int aStatus, String desc){
			this.value = aStatus;
			this.description = desc;
		}
	}
	public enum NumberNDateFilterOperator{
		Equals(0,"Equals"),Greater_than(1,"Greater than"),Less_than(2,"Less than"),Greater_than_or_equal(3,"Greater than or equal"),Less_than_or_equal(4,"Less than or equal"),Between(5,"Between");    	

		private final int value;
		private final String description;        
		public int val(){return value;}
		public String description(){return this.description;}

		private NumberNDateFilterOperator(int aStatus, String desc){
			this.value = aStatus;
			this.description = desc;
		}
	}
	
	public enum NumberNTimeFilterOperator{
		Equals(0,"Equals"),Greater_than(1,"Greater than"),Less_than(2,"Less than"),Greater_than_or_equal(3,"Greater than or equal"),Less_than_or_equal(4,"Less than or equal");    	

		private final int value;
		private final String description;        
		public int val(){return value;}
		public String description(){return this.description;}

		private NumberNTimeFilterOperator(int aStatus, String desc){
			this.value = aStatus;
			this.description = desc;
		}
	}
	public enum ApplicantStatus{
		Applied(1),Screen(2),ScreenOut(3),Interview(4),Cancel(5),OnHold(6),ReadytoHire(7),Appointed(8),Employee(9),finalStatus(99);   	

		private final int value;   
		public int val(){return value;}

		private ApplicantStatus(int aStatus){
			this.value = aStatus;
		}
	}
	public enum InterviewState{
		FirstState(1),SecondState(2),ThirdState(3);   	

		private final int value;   
		public int val(){return value;}

		private InterviewState(int aStatus){
			this.value = aStatus;
		}
	}
	public enum ClassStatus{
		None(0,"-"),
		Applied(1,"Applied"),
		Confirmed(2,"Confirmed"),
		Completed(3,"Completed"),
		DropOut(4,"Drop Out");

		private final long value;
		private final String description;        
		public long val(){return value;}
		public String description(){return this.description;}

		private ClassStatus(int aStatus, String desc){
			this.value = aStatus;
			this.description = desc;
		}
	}	
	public enum projectStatus{

		New(1,"New"),
		Pending(2,"Pending"),
		WIP(3,"WIP"),
		Completed(4,"Completed"),
		Cancel(5,"Cancel");
		private final int value;
		private final String description;
		public int value(){ return this.value;}
		public String description(){ return this.description; }

		projectStatus(int aStatus, String desc){
			this.value = aStatus;
			this.description = desc;
		}
	}
	public enum AssetStatus{
		Issued(1),Return(2),Damage(3),lost(4);

		private final long value;       
		public long val(){return value;}

		private AssetStatus(int aStatus){
			this.value = aStatus;
		}

	}
	public enum AgeType{			//nlkm
		WithToday(0,"With Today"),
		WithFields(1,"With Fields"); 

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }

		AgeType(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}  
	} 	
	/*public static void addItemsToTextCriteriaCombo(ListBox aComboCri) {
		for (TextFilterOperator textFilter : TextFilterOperator.values()) {
			aComboCri.addItem(textFilter.description(),textFilter.description());
		}	
		aComboCri.setSelectedIndex(TextFilterOperator.Contains.val());
	}
	public static void addItemsToNumberCriteriaCombo(ListBox aComboCri) {
		for (NumberNDateFilterOperator numberFileter : NumberNDateFilterOperator.values()) {
			aComboCri.addItem(numberFileter.description(),numberFileter.description());
		}
		aComboCri.setSelectedIndex(NumberNDateFilterOperator.Greater_than_or_equal.val());

	}	

	public static void addStudentStatusComboo(ListBox aCombo){
		for (ClassStatus student : ClassStatus.values()) {
			aCombo.addItem(student.description(),String.valueOf(student.val()));
		}
	}
	public static void addAOrRStatusComboo(ListBox aCombo){
		for (AOrRStatus status : AOrRStatus.values()) {
			aCombo.addItem(status.description(),String.valueOf(status.value));
		}
	}
	
	public static void addGradeComboo(ListBox aCombo){
		for (Grade l_grade : Grade.values()) {
			aCombo.addItem(l_grade.description,String.valueOf(l_grade.value));
		}
	}
	
	public static void addItemsToNumberNTimeCriteriaCombo(ListBox aComboCri) {
		for (NumberNTimeFilterOperator numberFileter : NumberNTimeFilterOperator.values()) {
			aComboCri.addItem(numberFileter.description(),numberFileter.description());
		}
		aComboCri.setSelectedIndex(NumberNTimeFilterOperator.Equals.val());

	}	*/
	public enum AOrRStatus{ //Access or reject status
		All(0,"All"),Accept(1,"Accept"),Reject(2,"Reject");	
		
		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }
		
		AOrRStatus(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}
	}
	
	public enum Capacity{  

		ten(1,"10"),fifteen(2,"15"),twenty(3,"20"),twentyfive(4,"25"),thirty(5,"30"),
		thirtyfive(6,"35"),fourty(7,"40"),fourtyfive(8,"45"),fifty(9,"50"),fiftyfive(10,"55"),
		sixty(11,"60"),sixtyfive(12,"65"),seventy(13,"70"),seventyfive(14,"75"),eighty(15,"80"),
		eightyfive(16,"85"),ninety(17,"90"),ninetyfive(18,"95"),hundred(19,"100");   

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }
		Capacity(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		}
	}

	public enum Weekdays{
		Sun(1,"Sun"),Mon(2,"Mon"),Tue(3,"Tue"),Wed(4,"Wed"),Thu(5,"Thu"),Fri(6,"Fri"),Sat(7,"Sat"),
		publicholiday(8,"Public Holiday"),enday(9,"EOM");

		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }
		Weekdays(int avalue,String desc){
			this.value=avalue;
			this.description=desc;
		}
	}
	public enum LeaveTime{  

		AM(1,"AM"),PM(2,"PM");  
		private final int value;  
		private final String description;        
		public int value(){  return this.value;}  
		public String description(){ return this.description; }
		LeaveTime(int aStatus, String desc){  
			this.value = aStatus;  
			this.description = desc;  
		} 
	}
	public enum WarefareStatus{ 
		All(0),Submitted(1),Approved(2),Rejected(3);	
		private final long value;

		public long value(){return this.value;}   

		private WarefareStatus(long aStatus){  
			this.value = aStatus;
		}  
	}

	public enum DataImportType{ 
		Excel(0),WS(1);	
		private final int value;

		public int value(){return this.value;} 
		private DataImportType(int aStatus){  
			this.value = aStatus;
		}  
	}

	public enum DialogResult{		
		YES,NO,OK,CANCEL,ABORT,RETRY,IGNORE;
		private DialogResult(){} //prevent a class from being explicitly instantiated by its callers  
	}
	
	public enum InOutType{
		In(1,"In"),Out(2,"Out"),InOut(3,"In Out");

		private final int value;
		private final String description;        
		public int val(){return value;}
		public String description(){return this.description;}

		private InOutType(int aStatus, String desc){
			this.value = aStatus;
			this.description = desc;
		}
	}	
}
