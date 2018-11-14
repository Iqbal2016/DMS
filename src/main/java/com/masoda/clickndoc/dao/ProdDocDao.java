package com.masoda.clickndoc.dao;


import java.util.List;

import com.masoda.clickndoc.dto.ProdDocDto;
import com.masoda.clickndoc.dto.ProdDocInfoDto;
import com.masoda.clickndoc.model.ProdDoc;
import com.masoda.clickndoc.model.ProdDocPK;
import com.masoda.clickndoc.model.ProdDocument;



public interface ProdDocDao {

	ProdDoc findById(ProdDocPK pk);
	ProdDoc findByCdDocument(String cdDocument);
	List<ProdDocInfoDto>  findByCdDocumentList(List <String> cdDocumentList);
	List<ProdDoc> findAllProdDocs();
	ProdDocDto findByIdAndVersion(Integer id,Integer Version);
	List<ProdDocument> findDocument();
}
