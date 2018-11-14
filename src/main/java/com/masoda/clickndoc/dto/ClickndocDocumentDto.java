package com.masoda.clickndoc.dto;


import java.util.Arrays;
import java.util.Date;

import org.apache.commons.codec.binary.Base64;

import com.masoda.clickndoc.util.StringUtils;

public class ClickndocDocumentDto {

	private String cdTemplate;
	private String cdDocument;
	private String tyDocument;
	private String tyFichier;
	public static String tyfichier_doc;
	public static String tyfichier_docx;
	public static String tyfichier_xls;
	public static String tyfichier_xlsx;
	public static String tyfichier_ppt;
	public static String tyfichier_pptx;
	public static String tyfichier_xml;

	private Date dtMaj;
	private byte[] data;
	private Integer tyTemplate;
	private Integer tyRessource;

	public ClickndocDocumentDto() {
	}

	public String getCdTemplate() {
		return cdTemplate;
	}

	public void setCdTemplate(String cdTemplate) {
		this.cdTemplate = cdTemplate;
	}

	public String getCdDocument() {
		return cdDocument;
	}

	public void setCdDocument(String cdDocument) {
		this.cdDocument = cdDocument;
	}

	public String getTyDocument() {
		return tyDocument;
	}

	public void setTyDocument(String tyDocument) {
		this.tyDocument = tyDocument;
	}

	public String getTyFichier() {
		return tyFichier;
	}

	public void setTyFichier(String tyFichier) {
		this.tyFichier = tyFichier;
	}

	public Date getDtMaj() {
		return this.dtMaj;
	}

	public void setDtMaj(Date paramDate) {
		this.dtMaj = paramDate;
	}
	
	

	/*public byte[] getData() {
		return this.data;
	}
	
	public String  getDecodedData(){
		 return new String(Base64.encodeBase64(this.data));
		  
	}
	     

	public void setData(byte[] paramArrayOfByte) {
		this.data = paramArrayOfByte;
	}*/
	
	public String  getDecodedData(){
		// return new String(Base64.encodeBase64(this.data));
		return new String(Base64.encodeBase64(this.data));
		  
	}
	
	public String getXml() {
		System.out.println("..........................modeldataXml.........."+this.data);
		if (this.data != null) {
			return StringUtils.unaccent(new String(this.data));
		}

		return null;
	}
	
	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

	public Integer getTyTemplate() {
		return this.tyTemplate;
	}

	public void setTyTemplate(Integer paramInteger) {
		this.tyTemplate = paramInteger;
	}

	public Integer getTyRessource() {
		return this.tyRessource;
	}

	public void setTyRessource(Integer paramInteger) {
		this.tyRessource = paramInteger;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((cdDocument == null) ? 0 : cdDocument.hashCode());
		result = prime * result + ((cdTemplate == null) ? 0 : cdTemplate.hashCode());
		result = prime * result + Arrays.hashCode(data);
		result = prime * result + ((dtMaj == null) ? 0 : dtMaj.hashCode());
		result = prime * result + ((tyDocument == null) ? 0 : tyDocument.hashCode());
		result = prime * result + ((tyFichier == null) ? 0 : tyFichier.hashCode());
		result = prime * result + ((tyRessource == null) ? 0 : tyRessource.hashCode());
		result = prime * result + ((tyTemplate == null) ? 0 : tyTemplate.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ClickndocDocumentDto other = (ClickndocDocumentDto) obj;
		if (cdDocument == null) {
			if (other.cdDocument != null)
				return false;
		} else if (!cdDocument.equals(other.cdDocument))
			return false;
		if (cdTemplate == null) {
			if (other.cdTemplate != null)
				return false;
		} else if (!cdTemplate.equals(other.cdTemplate))
			return false;
		if (!Arrays.equals(data, other.data))
			return false;
		if (dtMaj == null) {
			if (other.dtMaj != null)
				return false;
		} else if (!dtMaj.equals(other.dtMaj))
			return false;
		if (tyDocument == null) {
			if (other.tyDocument != null)
				return false;
		} else if (!tyDocument.equals(other.tyDocument))
			return false;
		if (tyFichier == null) {
			if (other.tyFichier != null)
				return false;
		} else if (!tyFichier.equals(other.tyFichier))
			return false;
		if (tyRessource == null) {
			if (other.tyRessource != null)
				return false;
		} else if (!tyRessource.equals(other.tyRessource))
			return false;
		if (tyTemplate == null) {
			if (other.tyTemplate != null)
				return false;
		} else if (!tyTemplate.equals(other.tyTemplate))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ClickndocDocumentDto [cdTemplate=" + cdTemplate + ", cdDocument=" + cdDocument + ", tyDocument="
				+ tyDocument + ", tyFichier=" + tyFichier + ", dtMaj=" + dtMaj + ", data=" + Arrays.toString(data)
				+ ", tyTemplate=" + tyTemplate + ", tyRessource=" + tyRessource + "]";
	}
	
	

}
