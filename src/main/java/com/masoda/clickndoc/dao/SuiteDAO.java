package com.masoda.clickndoc.dao;


import java.util.List;
import java.util.Map;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.masoda.clickndoc.model.Suite;


@Repository("suiteDAO")
@Transactional
public class SuiteDAO implements ISuiteDAO {

	@Autowired
	private SessionFactory sessionFactory;

	@Autowired
	IUserDAO userDAO;

	@Override
	public List<Suite> getDocs(Map<String, String> params) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional
	public Suite getByCode(String currSuiteCode) {
		Query query = sessionFactory.getCurrentSession().createQuery("from Suite where suiteCode =:suiteCode");
		String [] items = currSuiteCode.split(",");
		if (items.length > 1) {
			String code = items[1];
			query.setParameter("suiteCode", code);
			if (query.list().size()>0) {
				return (Suite) query.list().get(0);
			}
			return null;
		}
		query.setParameter("suiteCode", currSuiteCode);
		if (query.list().size()>0) {
			return (Suite) query.list().get(0);
		}
		return null;
		
	}

	@Transactional
	@Override
	public List<Suite> getSuites() {

		String hqlQuerySuite = "from Suite order by suiteSeq";
		Query querySuite = sessionFactory.getCurrentSession().createQuery(hqlQuerySuite);
		List<Suite> suite = querySuite.list();
		return suite;
	}

	@Override
	public String deleteAllNotInId(Integer[] ids) {
		Session ses = sessionFactory.getCurrentSession();
		Criteria sut = ses.createCriteria(Suite.class);
		sut.add(Restrictions.not(Restrictions.in("id", ids)));
		List<Suite> sutList = sut.list();
		for (int i = 0; i < sutList.size(); i++) {
			Suite suite = sutList.get(i);
			ses.delete(suite);
		}
		return null;
	}

	@Override
	public Suite getById(Integer id) {
		Query query = sessionFactory.getCurrentSession().createQuery("from Suite where id =:id");
		query.setParameter("id", id);
		return (Suite) query.uniqueResult();
	}

	@Override
	public Integer update(Suite suit) {
		sessionFactory.getCurrentSession().saveOrUpdate(suit);
		sessionFactory.getCurrentSession().flush();
		return suit.getId();
	}

	@Transactional
	@Override
	public Suite getIconByCode(String suitCode) {
		Query query = sessionFactory.getCurrentSession().createQuery("from Suite where suiteCode =:suiteCode");
		query.setParameter("suiteCode", suitCode);
		if (query.list().size()>0) {
			return (Suite) query.list().get(0);
		}
		return null;
	}

}
