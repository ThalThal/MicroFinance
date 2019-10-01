package com.diamondpalace.finance.util;
/*package com.nirvasoft.ag2.rc7.util;

import java.io.File;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import org.apache.commons.io.FileUtils;

import com.nirvasoft.ag2.rc7.framework.MrBean;
import com.nirvasoft.ag2.rc7.framework.Result;
import com.nirvasoft.ag2.rc7.framework.ServerSession;

import jxl.CellView;
import jxl.Workbook;
import jxl.WorkbookSettings;
import jxl.write.Label;
import jxl.write.WritableCellFormat;
import jxl.write.WritableFont;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import jxl.write.WriteException;
import jxl.write.biff.RowsExceededException;

public class WriteExcel {
	private static WritableCellFormat timesBoldUnderline;
	private static WritableCellFormat times;
	private static WritableCellFormat zawgyi;

	private static String temp;

	private static void addCaption(WritableSheet sheet, int column, int row, String s)
			throws RowsExceededException, WriteException {
		Label label;
		label = new Label(column, row, s, timesBoldUnderline);
		sheet.addCell(label);
	}

	private static void addContent(WritableSheet sheet, int col, int row, String data)
			throws RowsExceededException, WriteException {
		Label label;
		label = new Label(col, row, data);
		// label.setCellFormat(zawgyi);
		sheet.addCell(label);
	}

	private static void createHeader(WritableSheet asheet, int type) throws WriteException {
		WritableFont times10pt = new WritableFont(WritableFont.createFont("Myanmar3"), 10);
		times = new WritableCellFormat(times10pt);
		times.setWrap(true);
		WritableFont times10ptBoldUnderline = new WritableFont(WritableFont.TIMES, 10, WritableFont.BOLD, false);
		timesBoldUnderline = new WritableCellFormat(times10ptBoldUnderline);
		timesBoldUnderline.setWrap(true);

		WritableFont zgyi = new WritableFont(WritableFont.createFont("Zawgyi-One"), 10);
		zawgyi = new WritableCellFormat(zgyi);
		zawgyi.setWrap(true);

		CellView cv = new CellView();
		cv.setFormat(times);
		cv.setFormat(timesBoldUnderline);

		if (type == 1) {
			List<String> result = new ArrayList<String>();
			result = getHeaderList();
			int tmp = 0;

			for (int i = 0; i < result.size(); i++) {
				addCaption(asheet, i + tmp, 0, result.get(i));
			}
		}
	}

	 * public static Result writeRoleData(String folder, String fileName, MrBean
	 * user) { Result res = new Result();
	 * 
	 * String filePath = ServerSession.serverPath + folder; File dir = new
	 * File(filePath); if (!dir.exists()) dir.mkdirs();
	 * 
	 * File l_file = new File(ServerSession.serverPath + folder + "/" +
	 * fileName); if (l_file.exists()) { l_file.delete(); } List<RoleData>
	 * l_list = new ArrayList<RoleData>(); try { l_list =
	 * RoleDataMgr.getAllRoleData(user); WorkbookSettings wbSettings = new
	 * WorkbookSettings(); wbSettings.setLocale(new Locale("en", "EN"));
	 * WritableWorkbook workbook = Workbook.createWorkbook(l_file, wbSettings);`
	 * 
	 * workbook.createSheet("Role", 0); WritableSheet excelSheet =
	 * workbook.getSheet(0); createHeader(excelSheet, 1);
	 * createRoleDetail(excelSheet, l_list);
	 * 
	 * workbook.write(); workbook.close(); res.setState(true); } catch
	 * (WriteException e) { res.setState(false); } catch (IOException e) {
	 * res.setState(false); } return res; }
	 * 
	 * private static void createRoleDetail(WritableSheet sheet, List<RoleData>
	 * list) throws RowsExceededException, WriteException { for (RoleData data :
	 * list) { int j = 0; int rowcount = sheet.getRows(); addContent(sheet, j++,
	 * rowcount, data.getT1()); addContent(sheet, j++, rowcount, data.getT2());
	 * } }
	 
	
}*/