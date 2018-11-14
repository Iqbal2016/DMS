package com.masoda.clickndoc.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.masoda.clickndoc.dao.ViewTabDao;
import com.masoda.clickndoc.model.ViewTab;


@Service("viewTabService")
public class ViewTabServiceImpl implements ViewTabService{
	
	@Autowired
	ViewTabDao dao;

	@Override
	public List<ViewTab> findAllViewTab() {
		return dao.findAllViewTabs();
	}

	@Override
	public ViewTab findById(int Id) {
		return dao.findById(Id);
	}

	
	
	
}