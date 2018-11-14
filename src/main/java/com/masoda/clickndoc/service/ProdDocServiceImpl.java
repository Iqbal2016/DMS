package com.masoda.clickndoc.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.masoda.clickndoc.dao.ProdDocDao;
import com.masoda.clickndoc.dto.ProdDocDto;
import com.masoda.clickndoc.dto.ProdDocInfoDto;
import com.masoda.clickndoc.model.ProdDoc;
import com.masoda.clickndoc.model.ProdDocPK;
import com.masoda.clickndoc.model.ProdDocument;


@Service("prodDocService")
@Transactional
public class ProdDocServiceImpl implements ProdDocService  {

	@Autowired
	private ProdDocDao prodDocDao;
	
	@Override
	public ProdDoc findById(ProdDocPK pk) {
		
		return prodDocDao.findById(pk);
	}

	@Override
	public ProdDoc findByCdDocument(String cdDocument) {
		return prodDocDao.findByCdDocument(cdDocument);
	}

	@Override
	public List<ProdDoc> findAllProdDoc() {
		
		return prodDocDao.findAllProdDocs();
	}

	@Override
	public List<ProdDocInfoDto> findByCdDocumentList(List<String> cdDocumentList) {
		return prodDocDao.findByCdDocumentList(cdDocumentList);
	}

	@Override
	public ProdDocDto findDocumentByIdAndVersion(Integer id, Integer version) {
		return prodDocDao.findByIdAndVersion(id, version);
	}

	@Override
	public List<ProdDocument> findDocument() {
		// TODO Auto-generated method stub
		return prodDocDao.findDocument();
	}
	
	
	
	
}