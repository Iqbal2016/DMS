package com.masoda.clickndoc.model;

public class Role {
	
	private static final long serialVersionUID = 1L;
    private String name;
    
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	@Override
	public String toString() {
		return "Role [name=" + name + "]";
	}
 
    
    

}
