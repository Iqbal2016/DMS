<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="cts" uri="/WEB-INF/custom.tld" %>
<!DOCTYPE html>
<!-- Template Name: Clip-Two - Responsive Admin Template build with Twitter Bootstrap 3.x | Author: ClipTheme -->
<!--[if IE 8]><html class="ie8" lang="en"><![endif]-->
<!--[if IE 9]><html class="ie9" lang="en"><![endif]-->
<!--[if !IE]><!-->
<html lang="en">
	<!--<![endif]-->
	<!-- start: HEAD -->
	<head>
		<title>MASODA</title>
		
		<!-- start: META -->
		<!--[if IE]><meta http-equiv='X-UA-Compatible' content="IE=edge,IE=9,IE=8,chrome=1" /><![endif]-->
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0, shrink-to-fit=no">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta content="" name="description" />
		<link rel="icon" href="assets/logo/favicon.ico">
		<meta content="" name="author" />
		<!-- end: META -->
		<link rel="stylesheet" href="assets/css/googlefonts.css" type="text/css" />
		<link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="vendor/fontawesome/css/font-awesome.min.css">
		<link rel="stylesheet" href="vendor/themify-icons/themify-icons.min.css">
		<link rel="stylesheet" href="vendor/animate.css/animate.min.css" media="screen">
		<link rel="stylesheet" href="vendor/perfect-scrollbar/perfect-scrollbar.min.css" media="screen">
		<link rel="stylesheet" href="vendor/switchery/switchery.min.css" media="screen">
		<link rel="stylesheet" href="assets/css/styles.css?v=${data.EBSVersion}">
		<link rel="stylesheet" href="assets/css/common.css?v=${data.EBSVersion}">
		<!-- <link rel="stylesheet" href="assets/css/common_1.css"> -->
		<link rel="stylesheet" href="assets/css/plugins.css">
		<link rel="stylesheet" href="assets/css/themes/${data.emp.uiTheme == null ? "theme-1" :  data.emp.uiTheme }.css" id="skin_color" />
		<link rel="stylesheet" href="vendor/DataTables/css/DT_bootstrap.css" media="screen">
		<link rel="stylesheet" href="vendor/sweetalert/sweet-alert.css" media="screen">
		<link rel="stylesheet" href="vendor/sweetalert/ie9.css" media="screen">
		<link rel="stylesheet" href="vendor/toastr/toastr.min.css" media="screen">
		<link rel="stylesheet" href="vendor/bootstrap-datepicker/bootstrap-datepicker3.standalone.min.css" media="screen">
		<link rel="stylesheet" href="vendor/bootstrap-timepicker/bootstrap-timepicker.min.css" media="screen">
		<link rel="stylesheet" href="vendor/bootstrap-fileinput/jasny-bootstrap.min.css" media="screen">	
		 <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<link href="vendor/jstree/themes/default/style.min.css?v=${data.EBSVersion}" rel="stylesheet" media="screen">
		
		<!-- start: CSS REQUIRED FOR Calendar PAGE ONLY -->
		<link href="vendor/fullcalendar/fullcalendar.min.css" rel="stylesheet" media="screen">
		<link href="vendor/bootstrap-datetimepicker/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen">
		<!-- end: CSS REQUIRED FOR Calendar PAGE ONLY -->
	</head>
	<style>
		#face-wrapper {
   display: inline-block;
   background-color:#e8e6e6; 
}

.face {
   position: relative;
   border: 20px solid #e8e6e6;
}
	
	</style>
	<!-- end: HEAD -->
	<body>
		<div id="app">
			<!-- sidebar -->
			<div class="sidebar app-aside" id="sidebar">
				<div class="sidebar-container perfect-scrollbar">
					<nav>
						<!-- start: SEARCH FORM -->
						<div class="search-form">
							<a class="s-open" href="#">
								<i class="ti-search"></i>
							</a>
							<form action="/tcodesearch" method="post" class="ajax navbar-form" data-handler="processTcode" role="search">
							<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
								<a class="s-remove" href="#" target=".navbar-form">
									<i class="ti-close"></i>
								</a>
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Enter Tcode..." name="tcode" id="tcode" style='text-transform:uppercase'/>	
									<button type="submit" class="btn tcode-search search-button">
										<i class="ti-search"></i>
									</button>
								</div>
							</form>
						</div> 
						<!-- end: SEARCH FORM -->
						<!-- start: MAIN NAVIGATION MENU -->
						<ul class="main-navigation-menu" style="margin-top:0px;">
						<c:forEach var="suite" items="${data.empSuites}">
							<li>
								<a href="toc?type=suite&amp;currsuitecode=${ suite.getId() }" class="submenu">
									<div class="item-content">
										<%-- <div class="item-media">
											<i class="${ suite.getSuiteIcon()}"></i>
										</div> --%>
										<div class="item-inner">
											<span class="title">${ suite.getLabel() }</span><i class="icon-arrow"></i>
										</div>
									</div>
								</a>
								<ul class="sub-menu">
	<!-- layer 2 -->
								<c:forEach var="module" items="${data.empModules}">
									<c:if test="${ suite.getId() == module.getViewTab().getId() }">
									<li>
										<a href="toc?type=module&amp;currmodcode=${module.getId()}" class="submenu">
											<div class="item-content">
												<%-- <div class="item-media">
													<i class="${ module.getModuleIcon()} "></i>
												</div> --%>
												<div class="item-inner">
													<span class="title">${ module.getLabel() }</span><i class="icon-arrow"></i>
												</div>
											</div>
										</a>
										<ul class="sub-menu">
										<c:forEach var="privgrp" items="${data.empPrivGroups}">
											<%-- <c:if test="${module.getModCode() == privgrp.getModCode()}">
											<li>
												<a href="toc?type=privgrp&amp;currprivgrp=${ privgrp.getPrivGrpCode() }&amp;currmodcode=${ module.getModCode() }" data-ajax="true">
													<i class="ti-minus"></i>&nbsp;<i class="title">${ privgrp.getPrivGrpName() }</i>
												</a>
											</li>
											</c:if> --%>
										</c:forEach>
										</ul>
									</li>
									</c:if>
								</c:forEach>
	<!-- layer 2 ends -->
								</ul>
							</li>
						</c:forEach>
						</ul>
						<!-- end: MAIN NAVIGATION MENU -->						
					</nav>
				</div>
			</div>
			<!-- / sidebar -->
			<div class="app-content">
				<!-- start: TOP NAVBAR -->
				<header class="navbar navbar-default navbar-static-top">
					<!-- start: NAVBAR HEADER -->
					<div class="navbar-header">
						<a href="#" class="sidebar-mobile-toggler pull-left hidden-md hidden-lg" class="btn btn-navbar sidebar-toggle" data-toggle-class="app-slide-off" data-toggle-target="#app" data-toggle-click-outside="#sidebar">
							<i class="ti-align-justify"></i>
						</a>
						<a class="navbar-brand" href="/">
							<img src="assets/images/logo-Masoda.png" class="ctrends-logo" alt="MASODA"/>
						</a>
						<a href="#" class="sidebar-toggler pull-right visible-md visible-lg" data-toggle-class="app-sidebar-closed" data-toggle-target="#app" id="asdf">
							<i class="ti-align-justify"></i>
						</a>
						<a class="pull-right menu-toggler visible-xs-block" id="menu-toggler" data-toggle="collapse" href=".navbar-collapse">
							<span class="sr-only">Toggle navigation</span>
							<i class="ti-view-grid"></i>
						</a>
					</div>
					<!-- end: NAVBAR HEADER -->
					<!-- start: NAVBAR COLLAPSE -->
					<div class="navbar-collapse collapse">
						<div class="col-md-auto visible-lg">
						<h3 style="font-size: 25px; padding-top: 20px">Document Management System</h3>
						
						</div>
						<div class="col-md-auto visible-lg"><h4 class="margin-top-25">${data.emp.companyName}</h4></div>
						<div class="col-md-auto pull-right">
							<ul class="nav navbar-right">
								
								<!-- end: MESSAGES -->
								<!-- start: Helpdesk -->
								<li class="dropdown">
									<a href="helpdesk" data-ajax="true">
										<span class=""></span> <i class="fa fa-question-circle"></i> <span>HELPDESK</span>
									<!-- class= dot-badge partition-red -->
									</a>
								</li>
						
							
								<!-- end: ACTIVITIES DROPDOWN -->
								<!-- start: USER OPTIONS DROPDOWN -->
								<li class="dropdown current-user">
									<a  class="dropdown-toggle" data-toggle="dropdown" >
										<img src="assets/images/logo-Masoda-208.png" alt="masoda" height="40px" width="40px" style="border-radius: 50%;">
										<%-- <span class="username">${data.emp.empName}<i class="ti-angle-down"></i></span> --%>
									</a>
									<ul class="dropdown-menu dropdown-dark emp-settings" >
										<li>
											<%-- <a href="hrm/ed/employee/show/' + ${data.emp.id} + '/doc" data-ajax="true">
												My Profile  
											</a> --%>
											<a href="hrm/ed/hrreport/myprofile/create" data-ajax="true" >
												My Profile  
											</a> 
											
										</li>
									
										<li class="dropdown">
											<a href="sys/ac/frm_user/myPassword" data-ajax="true">
												Change My Password  
											</a> 	
										
										</li>
										<li>
											<%-- <sec:authorize access="hasRole('ROLE_USER')">
												<!-- For login user -->
												<c:url value="/logout" var="logoutUrl" />
												<form action="${logoutUrl}" method="post" id="logoutForm">
													<input type="hidden" name="${_csrf.parameterName}"
														value="${_csrf.token}" />
												</form>
												<script>
													function formSubmit() {
														sendChatMsg("userList", "updateUserlist");
														LoadMainContent("");
														document.getElementById("logoutForm").submit();
													}
												</script>
										
												<c:if test="${pageContext.request.userPrincipal.name != null}">
													<h2>
														<a href="javascript:formSubmit()"> Log out</a>
													</h2>
												</c:if> 
											</sec:authorize> --%>
											<a href="/logout">Logout</a> 
										</li>
									</ul>
								</li>
								<!-- end: USER OPTIONS DROPDOWN -->
							</ul>
							<!-- start: MENU TOGGLER FOR MOBILE DEVICES -->
							<div class="close-handle visible-xs-block menu-toggler" data-toggle="collapse" href=".navbar-collapse">
								<div class="arrow-left"></div>
								<div class="arrow-right"></div>
							</div>
							<!-- end: MENU TOGGLER FOR MOBILE DEVICES -->
						</div>
					</div>
					<a class="dropdown-off-sidebar" data-toggle-class="app-offsidebar-open" data-toggle-target="#app" onclick="msgCount()" id="chatBar">
					<!-- <a class="dropdown-off-sidebar" data-toggle-class="app-offsidebar-open" data-toggle-target="#app" data-toggle-click-outside="#off-sidebar" onclick="msgCount()"> -->
						&nbsp;
					</a>
					<!-- end: NAVBAR COLLAPSE -->
				</header>
				<!-- end: TOP NAVBAR -->
				
				
				
					<!-- start: SETTINGS -->
<div class="settings panel panel-default hidden-sm hidden-md" id="settings">
	
	<div class="tabbable">
					<ul class="nav nav-tabs tab-padding tab-space-3 tab-blue">
						<li class="active">
							<a data-toggle="tab" href="#settings_panel_1">
								Styles
							</a>
						</li>
						<li>
							<a data-toggle="tab" href="#settings_panel_2" id="dashboards_tab">
								Dashboards
							</a>
						</li>
						<li>
							<button ct-toggle="toggle" data-toggle-class="active" data-toggle-target="#settings" class="btn btn-default" style="margin-top : 8px; margin-left: 4px;" id="btn_close_settings">
       				 <i class="fa fa-close" aria-hidden="true"></i>
    			</button>
						</li>
												
					</ul>
					
					
				<div class="tab-content">
						<div  id="settings_panel_1" class="tab-pane fade in active">
						
						
		<!-- start: FIXED HEADER -->
		<div class="setting-box clearfix">
			<span class="setting-title pull-left"> Fixed header</span> <span
				class="setting-switch pull-right"> <input type="checkbox"
				class="js-switch" id="fixed-header" />
			</span>
		</div>
		<!-- end: FIXED HEADER -->
		<!-- start: FIXED SIDEBAR -->
		<div class="setting-box clearfix">
			<span class="setting-title pull-left">Fixed sidebar</span> <span
				class="setting-switch pull-right"> <input type="checkbox"
				class="js-switch" id="fixed-sidebar" />
			</span>
		</div>
		<!-- end: FIXED SIDEBAR -->
		<!-- start: CLOSED SIDEBAR -->
		<div class="setting-box clearfix">
			<span class="setting-title pull-left">Closed sidebar</span> <span
				class="setting-switch pull-right"> <input type="checkbox"
				class="js-switch" id="closed-sidebar" />
			</span>
		</div>
		<!-- end: CLOSED SIDEBAR -->
		<!-- start: FIXED FOOTER -->
		<div class="setting-box clearfix">
			<span class="setting-title pull-left">Fixed footer</span> <span
				class="setting-switch pull-right"> <input type="checkbox"
				class="js-switch" id="fixed-footer" />
			</span>
		</div>
		<!-- end: FIXED FOOTER -->
		<!-- start: THEME SWITCHER -->
		<div class="colors-row setting-box">
			<div class="color-theme theme-1">
				<div class="color-layout">
					<label> <input type="radio" name="setting-theme"
						value="theme-1"> <span class="ti-check"></span> <span
						class="split header"> <span class="color th-header"></span>
							<span class="color th-collapse"></span>
					</span> <span class="split"> <span class="color th-sidebar"><i
								class="element"></i></span> <span class="color th-body"></span>
					</span>
					</label>
				</div>
			</div>
			<div class="color-theme theme-2">
				<div class="color-layout">
					<label> <input type="radio" name="setting-theme"
						value="theme-2"> <span class="ti-check"></span> <span
						class="split header"> <span class="color th-header"></span>
							<span class="color th-collapse"></span>
					</span> <span class="split"> <span class="color th-sidebar"><i
								class="element"></i></span> <span class="color th-body"></span>
					</span>
					</label>
				</div>
			</div>
		</div>
		<div class="colors-row setting-box">
			<div class="color-theme theme-3">
				<div class="color-layout">
					<label> <input type="radio" name="setting-theme"
						value="theme-3"> <span class="ti-check"></span> <span
						class="split header"> <span class="color th-header"></span>
							<span class="color th-collapse"></span>
					</span> <span class="split"> <span class="color th-sidebar"><i
								class="element"></i></span> <span class="color th-body"></span>
					</span>
					</label>
				</div>
			</div>
			<div class="color-theme theme-4">
				<div class="color-layout">
					<label> <input type="radio" name="setting-theme"
						value="theme-4"> <span class="ti-check"></span> <span
						class="split header"> <span class="color th-header"></span>
							<span class="color th-collapse"></span>
					</span> <span class="split"> <span class="color th-sidebar"><i
								class="element"></i></span> <span class="color th-body"></span>
					</span>
					</label>
				</div>
			</div>
		</div>
		<div class="colors-row setting-box">
			<div class="color-theme theme-5">
				<div class="color-layout">
					<label> <input type="radio" name="setting-theme"
						value="theme-5"> <span class="ti-check"></span> <span
						class="split header"> <span class="color th-header"></span>
							<span class="color th-collapse"></span>
					</span> <span class="split"> <span class="color th-sidebar"><i
								class="element"></i></span> <span class="color th-body"></span>
					</span>
					</label>
				</div>
			</div>
			<div class="color-theme theme-6">
				<div class="color-layout">
					<label> <input type="radio" name="setting-theme"
						value="theme-6"> <span class="ti-check"></span> <span
						class="split header"> <span class="color th-header"></span>
							<span class="color th-collapse"></span>
					</span> <span class="split"> <span class="color th-sidebar"><i
								class="element"></i></span> <span class="color th-body"></span>
					</span>
					</label>
				</div>
			</div>
		</div>
		<!-- end: THEME SWITCHER -->
	</div>	
					<div  id="settings_panel_2" class="tab-pane fade in">
						<div id="div2" class="display-flex">
									 <ol id="dashboard_kpis" style="margin-top: 10px; margin-left: -35px; list-style-type : none;">
          							 </ol> 
				 </div>
			</div>		
		</div>	
	</div>
</div>
<!-- end: SETTINGS -->


<div id="notification"></div>

<div class="main-content" >
	
