package com.masoda.clickndoc.service;

import java.util.List;
import java.util.Map;

public interface ICommonService<T> {
	
	 public Map<String, String> insert(Map<String, String[]> requestMap);   
	 public List<T> getAll();  
	 public T getById(Long id);  
	 public Map<String, String> update(Map<String,String[]> requestMap);  
	 public Long delete(Map<String, String[]> requestMap);  

}
