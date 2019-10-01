package com.diamondpalace.finance.util;
//package com.resort.slip.util;
//
//import com.resort.slip.shared.SearchData;
//
//public class AdvancedSearchStringUtil {
//	
//	public AdvancedSearchStringUtil(){}
//	
//	public static String getSearchString(SearchData[] data){
//		String search = "";
//
//		if (data != null) {
//			for (SearchData s : data) {
//				if (s.getType().equals("string")) {
//					search += checkString(s);
//				} else if (s.getType().equals("numeric")) {
//					search += checkNumber(s);
//				} else if (s.getType().equals("date")) {
//					search += checkDate(s);
//				} else if (s.getType().startsWith("combo")) {
//					search += checkCombo(s);
//				}
//			}
//		}
//
//		return search;
//	}
//	
//	public static String checkString(SearchData s){
//		String search = ""; 
//		if(!s.getT1().isEmpty()){
//			search += " AND ["+ s.getDbname() +"] ";
//			
//			if(s.getCondition().equals("eq")){
//				search += "LIKE '"+s.getT1()+"' ";
//			}
//			else if(s.getCondition().equals("c")){
//				search += "LIKE '%"+s.getT1()+"%' ";
//			}
//			else if(s.getCondition().equals("bw")){
//				search += "LIKE '"+s.getT1()+"%' ";
//			}
//			else if(s.getCondition().equals("ew")){
//				search += "LIKE '%"+s.getT1()+"' ";
//			}
//		}
//		return search;
//	}
//	public static String checkNumber(SearchData s){
//		String search = "";
//		if(!s.getT1().isEmpty()){
//			search += " AND ["+ s.getDbname() +"] ";
//			
//			if(s.getCondition().equals("eq")){
//				search += "= "+s.getT1();
//			}
//			else if(s.getCondition().equals("gt")){
//				search += "> "+s.getT1();
//			}
//			else if(s.getCondition().equals("lt")){
//				search += "< "+s.getT1();
//			}
//			else if(s.getCondition().equals("geq")){
//				search += ">= "+s.getT1();
//			}
//			else if(s.getCondition().equals("leq")){
//				search += "<= "+s.getT1();
//			}
//			else if(s.getCondition().equals("bt")){
//				search += "> "+s.getT1();
//				if(!s.getT2().isEmpty()){
//					search += " AND ["+ s.getDbname() +"] ";
//					search += "< "+s.getT2();
//				}
//			}
//		}
//		return search;
//	}
//	public static String checkDate(SearchData s){
//		String search = "";
//		if(!s.getT1().isEmpty()){
//			System.out.println(s.getT1());
//			String t1 = ServerUtil.datetoStringYMD(s.getT1());
//			search += " AND ["+ s.getDbname() +"] ";
//			System.out.println(t1);
//			if(s.getCondition().equals("eq")){
//				search += "= '"+t1+"' ";
//			}
//			else if(s.getCondition().equals("gt")){
//				search += "> '"+t1+"' ";
//			}
//			else if(s.getCondition().equals("lt")){
//				search += "< '"+t1+"' ";
//			}
//			else if(s.getCondition().equals("geq")){
//				search += ">= '"+t1+"' ";
//			}
//			else if(s.getCondition().equals("leq")){
//				search += "<= '"+t1+"' ";
//			}
//			else if(s.getCondition().equals("bt")){
//				search += "> '"+t1+"' ";
//				if(!s.getT2().isEmpty()){
//					String t2 = ServerUtil.datetoStringYMD(s.getT2());
//					search += " AND ["+ s.getDbname() +"] ";
//					search += "< '"+t2+"' ";
//				}
//			}
//		}
//		return search;
//	}
//	public static String checkCombo(SearchData s){
//		String search = "";
//		if(!s.getT1().isEmpty()){
//			search += " AND ["+ s.getDbname() +"] ";			
//			search += "LIKE '"+s.getT1()+"' ";
//		}
//		return search;
//	}
//
//}
