<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@include file="../admin-header.jsp" %>
	<div class="container-fluid container-fullw bg-gray">
		<div class="loading">
			<img src="/assets/images/loading.gif" />
		</div>
	</div>
	<script>
var	ebsVersion ='1"/>';
var	companyCode ='1"/>';
</script>
<%@include file="../admin-footer.jsp" %>

<script type="text/javascript">
	var destUrl = GetParameterByName(window.location.href, "desturl");
	//alert("......"+destUrl)
	if (!destUrl || destUrl == "/" || destUrl == "home" || destUrl == "/home" || destUrl == "") {
		destUrl = "/dashboard";
	}
 	setTimeout(function(){
		if(destUrl.indexOf("/search")>-1 || destUrl.indexOf("/quick")>-1){
			
			ShowModal(destUrl);
		}
		else{
			LoadMainContent(destUrl);
		}
	}, 300); 
	
	/* add  || destUrl.indexOf("/quick")>-1 to configure quick search modal*/
	
	
</script>


