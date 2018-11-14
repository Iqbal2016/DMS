package com.masoda.clickndoc.dao;

import java.util.List;
import java.util.Map;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.masoda.clickndoc.model.User;

@Transactional
@Repository("userDAO")
public class UserDAO implements IUserDAO {
	
	@Autowired
	private SessionFactory sessionfactory;

	@Override
	public List<User> getAllDoc() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User getDocById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> getDocs(Map<String, String> params) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Long insertDoc(User doc) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Long updateDoc(User doc) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Long deleteDoc(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
    public User getByUsername(String username) throws UsernameNotFoundException {
        Query query = sessionfactory.getCurrentSession().createQuery("FROM User WHERE username = :username");
        query.setParameter("username", username);
        User user = (User) query.uniqueResult();
        if (user == null) {
            throw new UsernameNotFoundException("User with username '" + username + "' does not exist.");
        }
        return user;
    }

	@Override
	public User getByUserName(String username) {
		 Query query = sessionfactory.getCurrentSession().createQuery("FROM User WHERE username = :username");
	        query.setParameter("username", username);
	        User user = (User) query.uniqueResult();
	        if (user == null) {
	            throw new UsernameNotFoundException("User with username '" + username + "' does not exist.");
	        }
	        return user;
	}

	

}
