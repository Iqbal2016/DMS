package com.masoda.clickndoc.dto;


import java.io.Serializable;
import java.sql.Clob;
import java.util.Date;

import org.hibernate.criterion.Projections;

import com.masoda.clickndoc.util.StringUtils;

public class ProdDocInfoDto

implements Serializable
{
	  private static final long serialVersionUID = 1L;
	  private Integer productionId;
	  private Integer productionVersion;
	  private String productionLabel;
	  private String productionDescription;
	  private String documentCode;
	  private String tyDocument;
	  private Date  created;
	  private Date updated;
	  private Date dtFusion;
	  private Date dtValidation;
	  private String creatorCode;
	  private String idUserModif;
	  private Integer idJeusaisie;
	  private Integer etatProd;
	  private String cdGroupe;
	  private Integer flDocProducted = Integer.valueOf(0);
	  private Integer flProdValidated = Integer.valueOf(0);
	  private Integer flProdDeleted = Integer.valueOf(0);
	  private Integer preview = Integer.valueOf(0);
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
	public String getProductionLabel() {
		return productionLabel;
	}
	public void setProductionLabel(String productionLabel) {
		this.productionLabel = productionLabel;
	}
	public String getProductionDescription() {
		return productionDescription;
	}
	public void setProductionDescription(String productionDescription) {
		this.productionDescription = productionDescription;
	}
	public String getDocumentCode() {
		return documentCode;
	}
	public void setDocumentCode(String documentCode) {
		this.documentCode = documentCode;
	}
	public String getTyDocument() {
		return tyDocument;
	}
	public void setTyDocument(String tyDocument) {
		this.tyDocument = tyDocument;
	}
	
	public Date getCreated() {
		return created;
	}
	public void setCreated(Date created) {
		this.created = created;
	}
	public Date getUpdated() {
		return updated;
	}
	public void setUpdated(Date updated) {
		this.updated = updated;
	}
	public Date getDtFusion() {
		return dtFusion;
	}
	public void setDtFusion(Date dtFusion) {
		this.dtFusion = dtFusion;
	}
	public Date getDtValidation() {
		return dtValidation;
	}
	public void setDtValidation(Date dtValidation) {
		this.dtValidation = dtValidation;
	}
	public String getCreatorCode() {
		return creatorCode;
	}
	public void setCreatorCode(String creatorCode) {
		this.creatorCode = creatorCode;
	}
	public String getIdUserModif() {
		return idUserModif;
	}
	public void setIdUserModif(String idUserModif) {
		this.idUserModif = idUserModif;
	}
	public Integer getIdJeusaisie() {
		return idJeusaisie;
	}
	public void setIdJeusaisie(Integer idJeusaisie) {
		this.idJeusaisie = idJeusaisie;
	}
	public Integer getEtatProd() {
		return etatProd;
	}
	public void setEtatProd(Integer etatProd) {
		this.etatProd = etatProd;
	}
	public String getCdGroupe() {
		return cdGroupe;
	}
	public void setCdGroupe(String cdGroupe) {
		this.cdGroupe = cdGroupe;
	}
	public Integer getFlDocProducted() {
		return flDocProducted;
	}
	public void setFlDocProducted(Integer flDocProducted) {
		this.flDocProducted = flDocProducted;
	}
	public Integer getFlProdValidated() {
		return flProdValidated;
	}
	public void setFlProdValidated(Integer flProdValidated) {
		this.flProdValidated = flProdValidated;
	}
	public Integer getFlProdDeleted() {
		return flProdDeleted;
	}
	public void setFlProdDeleted(Integer flProdDeleted) {
		this.flProdDeleted = flProdDeleted;
	}
	public Integer getPreview() {
		return preview;
	}
	public void setPreview(Integer preview) {
		this.preview = preview;
	}
	
	
	
}
