package com.masoda.clickndoc.service;

import com.masoda.clickndoc.model.User;

public interface IUserService extends ICommonService<User> {

	User getUserByUserName(String username);

}
