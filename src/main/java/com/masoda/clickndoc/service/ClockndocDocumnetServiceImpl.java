package com.masoda.clickndoc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.masoda.clickndoc.dao.ClickndocDocumentDao;
import com.masoda.clickndoc.dto.ClickndocDocumentDto;


@Service("clockndocDocumentService")
@Transactional
public class ClockndocDocumnetServiceImpl implements ClockndocDocumentService  {

	@Autowired
	private ClickndocDocumentDao clickndocDocumentDao;

	@Override
	public ClickndocDocumentDto findDocumentsHTMByCdDocument(String documentCode) {
		return clickndocDocumentDao.findDocumentsHTMByCdDocument(documentCode);
	}
	
	

	
	
	
}