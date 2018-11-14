package com.masoda.clickndoc.service;


import java.util.List;

import com.masoda.clickndoc.model.ViewTab;


public interface ViewTabService {

	List<ViewTab> findAllViewTab();
	ViewTab  findById(int Id);
}
