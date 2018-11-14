package com.masoda.clickndoc.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.masoda.clickndoc.model.ProdDocument;
import com.masoda.clickndoc.model.User;
import com.masoda.clickndoc.model.ViewTab;
import com.masoda.clickndoc.model.ViewTree;
import com.masoda.clickndoc.service.IUserService;
import com.masoda.clickndoc.service.ProdDocService;
import com.masoda.clickndoc.service.ViewTabService;
import com.masoda.clickndoc.service.ViewTreeService;

@CrossOrigin
@RestController
@RequestMapping("/")
public class HomeController {
	
	@Autowired
	public IUserService userService;
	
	@Autowired
	ViewTabService viewTabService;
	
	@Autowired
	ViewTreeService viewTreeService;
	
	@Autowired
	ProdDocService prodDocService;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	@ResponseBody
	public ModelAndView index() {
		System.out.println("enter....");
		String username = SecurityContextHolder.getContext().getAuthentication().getName();
		User user = userService.getUserByUserName(username);
		
		List<ViewTab> empSuites = viewTabService.findAllViewTab();
		for (int i = 0; i < empSuites.size(); i++) {
			System.out.println("...........empSuites....."+empSuites.get(i).getId());
		}
		
		List<ViewTree> empModules = viewTreeService.findViewTree();
		for (int i = 0; i < empSuites.size(); i++) {
			System.out.println("...........empModules....."+empModules.get(i).getViewTab().getId());
		}
		
		
		List<ProdDocument> empPrivGroups = prodDocService.findDocument();
		System.out.println("...........empSuites....."+empPrivGroups.size());
		
		Map<String, Object> data = new HashMap<String, Object>();
		data.put("user", user);
		data.put("empSuites", empSuites);
		data.put("empModules", empModules);
		data.put("empPrivGroups", empPrivGroups);
		return new ModelAndView("common/index", "data", data);
	}
	
	@RequestMapping(value = "/dashboard", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ModelAndView dashboard() {
System.out.println("enter dashboard......................");
		return new ModelAndView("common/dashboard");
	}
	
	@RequestMapping(value = "/notice", method = RequestMethod.GET)
	@ResponseBody
	public ModelAndView noticeboard() {
		System.out.println("enter notice......................");
		return new ModelAndView("common/notice");
	}
	
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView login(@RequestParam(value = "error", required = false) String error,@RequestParam(value = "/logout", required = false) String logout) {
		ModelAndView model = new ModelAndView();
		if (error != null) {
			model.addObject("error", "Invalid username and password!");
		}
		if (logout != null) {
			System.out.println(">>>>>>");
			model.addObject("msg", "You've been logged out successfully.");
		}
		model.setViewName("common/login");
		return model;
	}
	
	@RequestMapping(value = "/403", method = RequestMethod.GET)
	public ModelAndView accesssDenied() {

		ModelAndView model = new ModelAndView();

		// check if user is login
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (!(auth instanceof AnonymousAuthenticationToken)) {
			UserDetails userDetail = (UserDetails) auth.getPrincipal();
			System.out.println(userDetail);
			model.addObject("username", userDetail.getUsername());
		}
		model.setViewName("common/403");
		return model;

	}
	
	@RequestMapping(value = "/loadpref", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public String loadpref(HttpServletRequest request) {
		//User currentUser = userService.getCurrentUser();
		Map<String, Object> jsonResponse = new HashMap<String, Object>();

		jsonResponse.put("theme", "");
		jsonResponse.put("fixedHeader", "");
		jsonResponse.put("fixedFooter", "");
		jsonResponse.put("fixedSidebar", "");
		jsonResponse.put("closedSidebar", "");
		jsonResponse.put("initialNotification", "");

		GsonBuilder gson = new GsonBuilder();
		Gson g = gson.create();
		return g.toJson(jsonResponse);
	}

	
	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public ModelAndView logout(HttpSession sess) {
		 sess.invalidate();
		ModelAndView model = new ModelAndView();
		model.addObject("msg", "You've been logged out successfully.");
		model.setViewName("common/login");
		return model;
	}

}
