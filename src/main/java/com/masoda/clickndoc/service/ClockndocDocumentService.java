package com.masoda.clickndoc.service;

import com.masoda.clickndoc.dto.ClickndocDocumentDto;



public interface ClockndocDocumentService {
	
	ClickndocDocumentDto findDocumentsHTMByCdDocument(String documentCode);
	
	
}