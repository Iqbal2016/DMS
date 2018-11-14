package com.masoda.clickndoc.dao;

import com.masoda.clickndoc.model.User;

public interface IUserDAO extends ICommonDAO<User> {

	User getByUserName(String username);


}
