package com.diamondpalace.finance.util;

import java.io.IOException;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import com.diamondpalace.finance.service.FinanceData;




public class JSONConverter {
	public static void main(String[] args) throws JsonGenerationException, JsonMappingException, IOException {
		System.out.println(new ObjectMapper().writeValueAsString(new FinanceData()));
		//System.out.println(new ObjectMapper().writeValueAsString(new TypeData()));
	}

}
