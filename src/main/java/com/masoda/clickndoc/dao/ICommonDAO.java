package com.masoda.clickndoc.dao;

import java.util.List;
import java.util.Map;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.masoda.clickndoc.model.User;

public interface ICommonDAO<TDoc> {
	
	public List<TDoc> getAllDoc();  
	public TDoc getDocById(Long id); 
	public List<TDoc> getDocs(Map<String, String> params);
	public Long insertDoc(TDoc doc); 
	public Long updateDoc(TDoc doc); 
	public Long deleteDoc(Long id);
	User getByUsername(String username) throws UsernameNotFoundException;
}
