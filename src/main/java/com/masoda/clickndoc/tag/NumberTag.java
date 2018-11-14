package com.masoda.clickndoc.tag;

import java.io.IOException;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

public class NumberTag extends SimpleTagSupport{
	private String name;
	private String cssClass;
	private String value;
	private String label;
	private String readonly;
	private String disabled;
	private String onclick;
	private String onchange;
	private String maxlength;
	 

	public String getReadonly() {
		return readonly;
	}

	public void setReadonly(String readonly) {
		this.readonly = readonly;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCssClass() {
		return cssClass;
	}

	public void setCssClass(String cssClass) {
		this.cssClass = cssClass;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
	public String getDisabled() {
		return disabled;
	}

	public void setDisabled(String disabled) {
		this.disabled = disabled;
	}
	
	
	

	public String getOnclick() {
		return onclick;
	}

	public void setOnclick(String onclick) {
		this.onclick = onclick;
	}

	public String getOnchange() {
		return onchange;
	}

	public void setOnchange(String onchange) {
		this.onchange = onchange;
	}

	public String getMaxlength() {
		return maxlength;
	}

	public void setMaxlength(String maxlength) {
		this.maxlength = maxlength;
	}
	
	
	public void doTag() throws JspException, IOException {
		JspWriter out = getJspContext().getOut();
	    String str = "";

	    str=" <input type=\"text\" id=\"" + this.getName() + "\"";
	    str += " name=\"" + this.getName() + "\"";
	    if (this.getValue()!=null && !this.getValue().isEmpty()) {
	    	str += " value=\"" + this.getValue() + "\"";
		}else{
			str += " value=\"\"";
		}
	    if (this.getReadonly()!=null && !this.getReadonly().isEmpty()) {
	    	str += " readonly=\"" + this.getReadonly() + "\"";
		}
	    if (this.getMaxlength()!=null && !this.getMaxlength().isEmpty()) {
	    	str += " maxlength=\"" + this.getMaxlength() + "\"";
		}else{
			str += " maxlength=\"\"";
		}
	    
	    if (this.getDisabled()!=null && !this.getDisabled().isEmpty()) {
	    	str += " disabled=\"" + this.getDisabled() + "\"";
		}
	    str += " class=\"form-control number ";
	    if (this.getCssClass()!=null && !this.getCssClass().isEmpty()) {
	    	str += this.getCssClass() +"\"";
		}
	    str += "\"";
	    if (this.getOnclick()!=null && !this.getOnclick().isEmpty()) {
	    	str += " onclick =\"" + this.getOnclick() ;
		}
	    str += "\"";
	    if (this.getOnchange()!=null && !this.getOnchange().isEmpty()) {
	    	str += " onchange =\"" + this.getOnchange() ;
		}
	    str += "\"/>";
	    out.println(str);
	  }
}
