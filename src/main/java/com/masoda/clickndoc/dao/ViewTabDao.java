package com.masoda.clickndoc.dao;

import java.util.List;


import com.masoda.clickndoc.model.ViewTab;

public interface ViewTabDao {

	List<ViewTab> findAllViewTabs();
	ViewTab findById(int id);
}
