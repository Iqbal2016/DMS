package com.masoda.clickndoc.dto;


import java.io.Serializable;
import java.sql.Clob;
import java.util.Arrays;
import java.util.Date;

import com.masoda.clickndoc.util.StringUtils;

public class ProdDocDto

	implements Serializable {
	private static final long serialVersionUID = 1L;
	public static final int STATUS_NOT_STARTED = 1;
	public static final int STATUS_IN_PROGRESS = 2;
	public static final int STATUS_COMPLETE = 3;
	public static final int STATUS_GENERATED_DOCUMENTS = 4;
	public static final int STATUS_VALIDATED = 5;
	public static final int STATUS_ARCHIVED = 6;
	private Integer productionId;
	private Integer productionVersion;
	private String lbProd;
	private Clob descProd;
	private String cdDocument;
	private String tyDocument;
	private Date dtProdCreat;
	private Date dtProdModif;
	private Date dtFusion;
	private Date dtValidation;
	private String idUserCreat;
	private String idUserModif;
	private byte[] dataXml;
	private Integer dataSize;
	private String dataCrc;
	private Integer idJeusaisie;
	private Integer etatProd;
	private String cdGroupe;
	private Integer flDocProducted = Integer.valueOf(0);
	private Integer flProdValidated = Integer.valueOf(0);
	private Integer flProdDeleted = Integer.valueOf(0);
	private Integer flDocPreview = Integer.valueOf(0);

	public ProdDocDto() {
	}

	

	public String getXml() {
		System.out.println("..........................modeldataXml.........."+this.dataXml);
		if (this.dataXml != null) {
			return StringUtils.unaccent(new String(this.dataXml));
		}

		return null;
	}

	public void setXml(String paramString) {
		// int i = VarDocModele.b;
		// if ((i != 0) || (StringUtils.isNotEmpty(paramString)))
		// {
		// byte[] arrayOfByte = paramString.getBytes(kR.d);
		// this.dataXml = arrayOfByte;
		// this.dataSize = Integer.valueOf(arrayOfByte.length);
		// if (i == 0) {}
		// }
		// else
		// {
		// this.dataXml = null;
		// this.dataSize = null;
		// }
		this.dataCrc = null;
	}

	public String getLbProd() {
		return this.lbProd;
	}

	public void setLbProd(String paramString) {
		this.lbProd = paramString;
	}

	public Clob getDescProd() {
		return this.descProd;
	}

	public String getDescProdString() throws Exception {
		return "ss";// dG.a(this.descProd);
	}

	public void setDescProd(Clob paramClob) {
		this.descProd = paramClob;
	}

	public String getCdDocument() {
		return this.cdDocument;
	}

	public void setCdDocument(String paramString) {
		this.cdDocument = paramString;
	}

	public String getTyDocument() {
		return this.tyDocument;
	}

	public void setTyDocument(String paramString) {
		this.tyDocument = paramString;
	}

	public Date getDtProdCreat() {
		return this.dtProdCreat;
	}

	public void setDtProdCreat(Date paramDate) {
		this.dtProdCreat = paramDate;
	}

	public Date getDtProdModif() {
		return this.dtProdModif;
	}

	public void setDtProdModif(Date paramDate) {
		this.dtProdModif = paramDate;
	}

	public Date getDtFusion() {
		return this.dtFusion;
	}

	public void setDtFusion(Date paramDate) {
		this.dtFusion = paramDate;
	}

	public Date getDtValidation() {
		return this.dtValidation;
	}

	public void setDtValidation(Date paramDate) {
		this.dtValidation = paramDate;
	}

	public String getIdUserCreat() {
		return this.idUserCreat;
	}

	public void setIdUserCreat(String paramString) {
		this.idUserCreat = paramString;
	}

	public String getIdUserModif() {
		return this.idUserModif;
	}

	public void setIdUserModif(String paramString) {
		this.idUserModif = paramString;
	}

	public byte[] getDataXml() {
		return this.dataXml;
	}

	public void setDataXml(byte[] paramArrayOfByte) {
		this.dataXml = paramArrayOfByte;
	}

	public Integer getDataSize() {
		return this.dataSize;
	}

	public void setDataSize(Integer paramInteger) {
		this.dataSize = paramInteger;
	}

	public String getDataCrc() {
		return this.dataCrc;
	}

	public void setDataCrc(String paramString) {
		this.dataCrc = paramString;
	}

	public Integer getIdJeusaisie() {
		return this.idJeusaisie;
	}

	public void setIdJeusaisie(Integer paramInteger) {
		this.idJeusaisie = paramInteger;
	}

	public Integer getEtatProd() {
		return this.etatProd;
	}

	public void setEtatProd(Integer paramInteger) {
		this.etatProd = paramInteger;
	}

	public String getCdGroupe() {
		return this.cdGroupe;
	}

	public void setCdGroupe(String paramString) {
		this.cdGroupe = paramString;
	}

	public Integer getFlDocProducted() {
		return this.flDocProducted;
	}

	public void setFlDocProducted(Integer paramInteger) {
		this.flDocProducted = paramInteger;
	}

	public Integer getFlProdValidated() {
		return this.flProdValidated;
	}

	public void setFlProdValidated(Integer paramInteger) {
		this.flProdValidated = paramInteger;
	}

	public Integer getFlProdDeleted() {
		return this.flProdDeleted;
	}

	public void setFlProdDeleted(Integer paramInteger) {
		this.flProdDeleted = paramInteger;
	}

	public Integer getFlDocPreview() {
		return this.flDocPreview;
	}

	public void setFlDocPreview(Integer paramInteger) {
		this.flDocPreview = paramInteger;
	}



	public Integer getProductionId() {
		return productionId;
	}



	public void setProductionId(Integer productionId) {
		this.productionId = productionId;
	}



	public Integer getProductionVersion() {
		return productionVersion;
	}



	public void setProductionVersion(Integer productionVersion) {
		this.productionVersion = productionVersion;
	}



	@Override
	public String toString() {
		return "ProdDocDto [productionId=" + productionId + ", productionVersion=" + productionVersion + ", lbProd="
				+ lbProd + ", descProd=" + descProd + ", cdDocument=" + cdDocument + ", tyDocument=" + tyDocument
				+ ", dtProdCreat=" + dtProdCreat + ", dtProdModif=" + dtProdModif + ", dtFusion=" + dtFusion
				+ ", dtValidation=" + dtValidation + ", idUserCreat=" + idUserCreat + ", idUserModif=" + idUserModif
				+ ", dataXml=" + Arrays.toString(dataXml) + ", dataSize=" + dataSize + ", dataCrc=" + dataCrc
				+ ", idJeusaisie=" + idJeusaisie + ", etatProd=" + etatProd + ", cdGroupe=" + cdGroupe
				+ ", flDocProducted=" + flDocProducted + ", flProdValidated=" + flProdValidated + ", flProdDeleted="
				+ flProdDeleted + ", flDocPreview=" + flDocPreview + "]";
	}

	
}
