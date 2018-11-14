package com.masoda.clickndoc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.masoda.clickndoc.dao.ViewTreeDao;
import com.masoda.clickndoc.model.ViewTree;


@Service("viewTreeService")
@Transactional
public class ViewTreeServiceImpl implements ViewTreeService{
	
	@Autowired
	ViewTreeDao viewTreeDao;

	@Override
	public List<ViewTree> findViewTreeByTabId(int id) {
		return viewTreeDao.findByTabId(id);
	}

	@Override
	public List<ViewTree> findDocumentCodeByTabId(int id) {
		
		return viewTreeDao.findDocumentCodeByTabId(id);
	}

	@Override
	public List<ViewTree> findViewTree() {
		// TODO Auto-generated method stub
		return viewTreeDao.findViewTree();
	}

	
	
	
}
