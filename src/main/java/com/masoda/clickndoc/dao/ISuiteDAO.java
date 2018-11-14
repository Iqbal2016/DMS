package com.masoda.clickndoc.dao;

import java.util.List;
import java.util.Map;

import com.masoda.clickndoc.model.Suite;

public interface ISuiteDAO {
	public List<Suite> getDocs(Map<String, String> params);

	public Suite getByCode(String currSuiteCode);

	public String deleteAllNotInId(Integer[] ids);

	public List<Suite> getSuites();

	public Suite getById(Integer id);

	public Integer update(Suite suit);

	public Suite getIconByCode(String suitCode);

}
