package com.masoda.clickndoc.service;

import java.util.List;


import com.masoda.clickndoc.model.ViewTree;


public interface ViewTreeService {

	List<ViewTree> findViewTreeByTabId(int id);
	List<ViewTree> findDocumentCodeByTabId(int id);
	List<ViewTree> findViewTree();
	
}