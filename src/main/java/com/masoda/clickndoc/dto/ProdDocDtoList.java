package com.masoda.clickndoc.dto;


import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ProdDocDtoList implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private List<ProdDocInfoDto> productions=new ArrayList<ProdDocInfoDto>();
	private int count = 0;
	public List<ProdDocInfoDto> getProductions() {
		return productions;
	}
	public void setProductions(List<ProdDocInfoDto> productions) {
		this.productions = productions;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	@Override
	public String toString() {
		return "ProdDocDtoList [productions=" + productions + ", count=" + count + "]";
	}

	
	
	

}
