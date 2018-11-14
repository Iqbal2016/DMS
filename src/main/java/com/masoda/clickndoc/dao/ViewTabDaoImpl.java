package com.masoda.clickndoc.dao;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Hibernate;
import org.hibernate.criterion.Order;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.masoda.clickndoc.model.ViewTab;
@Repository("viewTabDao")
@Transactional
public class ViewTabDaoImpl extends AbstractDao<Integer, ViewTab> implements ViewTabDao {

	@Override
	public List<ViewTab> findAllViewTabs() {
		Criteria criteria = createEntityCriteria().addOrder(Order.asc("orderNumber"));
		criteria.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);//To avoid duplicates.
		List<ViewTab> viewTabs = (List<ViewTab>) criteria.list();
		return viewTabs;
	}

	@Override
	public ViewTab findById(int id) {
		ViewTab viewTab = getByKey(id);
		if(viewTab!=null){
			Hibernate.initialize(viewTab.getViewTrees());
		}
		return viewTab;
	}

	
	
}
