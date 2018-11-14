package com.masoda.clickndoc.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Hibernate;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.masoda.clickndoc.model.User;
import com.masoda.clickndoc.model.ViewTab;
import com.masoda.clickndoc.model.ViewTree;
@Repository("viewTreeDao")
public class ViewTreeDaoImpl extends AbstractDao<Long, ViewTree> implements ViewTreeDao {
	
	@Autowired
	private SessionFactory sessionfactory;

	@Override
	public List<ViewTree> findByTabId(int id) {
		
		
		Criteria criteria = createEntityCriteria();
		criteria.createAlias("viewTab", "tab");
		criteria.add(Restrictions.eq("tab.id", id));
		List<ViewTree> viewTabs = (List<ViewTree>) criteria.list();
		return viewTabs;
		
		
		
	}

	@Override
	public List<ViewTree> findDocumentCodeByTabId(int tabId) {
		Criteria criteria = createEntityCriteria().addOrder(Order.asc("documentCode"));
		criteria.createAlias("viewTab", "tab");
		criteria.add(Restrictions.eq("tab.id", tabId)).add(Restrictions.isNotNull("documentCode"));
		List<ViewTree> viewTrees = (List<ViewTree>) criteria.list();
		
		return viewTrees;
	}

	@Override
	@Transactional
	public List<ViewTree> findViewTree() {
		Query query = sessionfactory.getCurrentSession().createQuery("FROM ViewTree");
		List<ViewTree> modules = query.list();	
		if (query.list().size() > 0) {
			return modules;
		}

		return null;

	}

	
	

	
	
}
