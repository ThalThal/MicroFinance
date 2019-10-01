package com.diamondpalace.finance.util;
import java.io.IOException;
import java.util.logging.FileHandler;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;

import com.diamondpalace.finance.framework.ServerSession;

/*import org.apache.log4j.Appender;
import org.apache.log4j.FileAppender;
import org.apache.log4j.Logger;
import org.apache.log4j.SimpleLayout;
*/
/**
 * @author Kiran
 * 
 */
public class MyLogger {

    public MyLogger() {
    }

    public static void main(String[] args) {  

        Logger logger = Logger.getLogger("MyLog");  
    	//private final Logger logger = Logger.getLogger(LoggingTester.class
               // .getName());
        FileHandler fh;  

        try {  

            // This block configure the logger with handler and formatter
        	//ServerSession.serverPath + "WEB-INF/log/MyLogFile.log" 
           // fh = new FileHandler("C:/temp/MyLogFile.log"); 
        	fh = new FileHandler(ServerSession.serverPath + "WEB-INF/log/MyLogFile.log" ); 
            logger.addHandler(fh);
            SimpleFormatter formatter = new SimpleFormatter();  
            fh.setFormatter(formatter);  

            // the following statement is used to log any messages  
            logger.info("Mobile Number Case!!");  

        } catch (SecurityException e) {  
            e.printStackTrace();  
        } catch (IOException e) {  
            e.printStackTrace();  
        }  

        logger.info("Empty Mobile Number when input coupon number !!");  

    }
}


