package com.masoda.clickndoc.dao;


import java.util.List;



import org.hibernate.Criteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.masoda.clickndoc.model.ProdDocument;

@Repository("prodDocumentDAO")
public class ProdDocumentDAO  extends AbstractDao<Integer, ProdDocument>{
	
	
	@Transactional
	public ProdDocument findById(String id) {
		System.out.println("...............id.........."+id);
		//ProdDocument prodDocument = getByKey(id);
		Criteria criteria = createEntityCriteria().addOrder(Order.asc("id"));
		criteria.add(Restrictions.eq("viewTabId", id));
		List<ProdDocument> viewTrees = (List<ProdDocument>) criteria.list();		
		return (ProdDocument) viewTrees;
	}

}
