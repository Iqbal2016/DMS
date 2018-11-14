package com.masoda.clickndoc.dao;

import java.util.List;


import com.masoda.clickndoc.model.ViewTree;

public interface ViewTreeDao {

	List<ViewTree> findByTabId(int id);
	List<ViewTree> findDocumentCodeByTabId(int id);
	List<ViewTree> findViewTree();
}
