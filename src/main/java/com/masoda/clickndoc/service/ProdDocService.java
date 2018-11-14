package com.masoda.clickndoc.service;

import java.util.List;

import com.masoda.clickndoc.dto.ProdDocDto;
import com.masoda.clickndoc.dto.ProdDocInfoDto;
import com.masoda.clickndoc.model.ProdDoc;
import com.masoda.clickndoc.model.ProdDocPK;
import com.masoda.clickndoc.model.ProdDocument;



public interface ProdDocService {
	
	ProdDoc findById(ProdDocPK pk);
	ProdDoc findByCdDocument(String cdDocument);
	List<ProdDoc> findAllProdDoc(); 
	List<ProdDocInfoDto> findByCdDocumentList(List<String> cdDocumentList);
	
	ProdDocDto findDocumentByIdAndVersion(Integer id, Integer version);
	List<ProdDocument> findDocument();
	
	
}