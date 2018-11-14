package com.masoda.clickndoc.dao;

import com.masoda.clickndoc.dto.ClickndocDocumentDto;




public interface ClickndocDocumentDao {

	
	ClickndocDocumentDto findDocumentsHTMByCdDocument(String documentCode);
}
