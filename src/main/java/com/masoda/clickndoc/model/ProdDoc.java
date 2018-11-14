package com.masoda.clickndoc.model;


import java.io.Serializable;
import javax.persistence.*;

import com.masoda.clickndoc.dto.VarDocModeleDto;

import java.util.Date;
import java.util.Objects;


/**
 * The persistent class for the prod_doc database table.
 * 
 */
@Entity
@Table(name="prod_doc")
@NamedQuery(name="ProdDoc.findAll", query="SELECT p FROM ProdDoc p")
public class ProdDoc implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private ProdDocPK id;

	@Column(name="CD_DOCUMENT")
	private String cdDocument;

	@Column(name="CD_GROUPE")
	private String cdGroupe;

	@Column(name="DATA_CRC")
	private String dataCrc;

	@Column(name="DATA_SIZE")
	private Integer dataSize=0;

	@Lob
	@Column(name="DATA_XML")
	private byte[] dataXml;

	@Lob
	@Column(name="DESC_PROD")
	private String descProd;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="DT_FUSION")
	private Date dtFusion;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="DT_PROD_CREAT")
	private Date dtProdCreat;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="DT_PROD_MODIF")
	private Date dtProdModif;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="DT_VALIDATION")
	private Date dtValidation;

	@Column(name="ETAT_PROD")
	private int etatProd;

	@Column(name="FL_DOC_PREVIEW")
	private int flDocPreview;

	@Column(name="FL_DOC_PRODUCTED")
	private int flDocProducted;

	@Column(name="FL_PROD_DELETED")
	private int flProdDeleted;

	@Column(name="FL_PROD_VALIDATED")
	private int flProdValidated;

	@Column(name="ID_JEUSAISIE")
	private int idJeusaisie;

	@Column(name="ID_USER_CREAT")
	private String idUserCreat;

	@Column(name="ID_USER_MODIF")
	private String idUserModif;

	@Column(name="LB_PROD")
	private String lbProd;

	@Column(name="TY_DOCUMENT")
	private String tyDocument;

	//bi-directional many-to-one association to ProdDocVersion
	@ManyToOne(optional=false)
	@JoinColumn(name="ID_PROD_DOC", insertable=false, updatable=false)
	private ProdDocVersion prodDocVersion;

	public ProdDoc() {
	}

	public ProdDocPK getId() {
		return this.id;
	}

	public void setId(ProdDocPK id) {
		this.id = id;
	}

	public String getCdDocument() {
		return this.cdDocument;
	}

	public void setCdDocument(String cdDocument) {
		this.cdDocument = cdDocument;
	}

	public String getCdGroupe() {
		return this.cdGroupe;
	}

	public void setCdGroupe(String cdGroupe) {
		this.cdGroupe = cdGroupe;
	}

	public String getDataCrc() {
		return this.dataCrc;
	}

	public void setDataCrc(String dataCrc) {
		this.dataCrc = dataCrc;
	}

	public Integer getDataSize() {
		return this.dataSize;
	}

	public void setDataSize(Integer dataSize) {
		
			this.dataSize = dataSize;
		
	}

	public byte[] getDataXml() {
		return this.dataXml;
	}

	public void setDataXml(byte[] dataXml) {
		this.dataXml = dataXml;
	}

	public String getDescProd() {
		return this.descProd;
	}

	public void setDescProd(String descProd) {
		this.descProd = descProd;
	}

	public Date getDtFusion() {
		return this.dtFusion;
	}

	public void setDtFusion(Date dtFusion) {
		this.dtFusion = dtFusion;
	}

	public Date getDtProdCreat() {
		return this.dtProdCreat;
	}

	public void setDtProdCreat(Date dtProdCreat) {
		this.dtProdCreat = dtProdCreat;
	}

	public Date getDtProdModif() {
		return this.dtProdModif;
	}

	public void setDtProdModif(Date dtProdModif) {
		this.dtProdModif = dtProdModif;
	}

	public Date getDtValidation() {
		return this.dtValidation;
	}

	public void setDtValidation(Date dtValidation) {
		this.dtValidation = dtValidation;
	}

	public int getEtatProd() {
		return this.etatProd;
	}

	public void setEtatProd(int etatProd) {
		this.etatProd = etatProd;
	}

	public int getFlDocPreview() {
		return this.flDocPreview;
	}

	public void setFlDocPreview(int flDocPreview) {
		this.flDocPreview = flDocPreview;
	}

	public int getFlDocProducted() {
		return this.flDocProducted;
	}

	public void setFlDocProducted(int flDocProducted) {
		this.flDocProducted = flDocProducted;
	}

	public int getFlProdDeleted() {
		return this.flProdDeleted;
	}

	public void setFlProdDeleted(int flProdDeleted) {
		this.flProdDeleted = flProdDeleted;
	}

	public int getFlProdValidated() {
		return this.flProdValidated;
	}

	public void setFlProdValidated(int flProdValidated) {
		this.flProdValidated = flProdValidated;
	}

	public int getIdJeusaisie() {
		return this.idJeusaisie;
	}

	public void setIdJeusaisie(int idJeusaisie) {
		this.idJeusaisie = idJeusaisie;
	}

	public String getIdUserCreat() {
		return this.idUserCreat;
	}

	public void setIdUserCreat(String idUserCreat) {
		this.idUserCreat = idUserCreat;
	}

	public String getIdUserModif() {
		return this.idUserModif;
	}

	public void setIdUserModif(String idUserModif) {
		this.idUserModif = idUserModif;
	}

	public String getLbProd() {
		return this.lbProd;
	}

	public void setLbProd(String lbProd) {
		this.lbProd = lbProd;
	}

	public String getTyDocument() {
		return this.tyDocument;
	}

	public void setTyDocument(String tyDocument) {
		this.tyDocument = tyDocument;
	}

	public ProdDocVersion getProdDocVersion() {
		return this.prodDocVersion;
	}

	public void setProdDocVersion(ProdDocVersion prodDocVersion) {
		this.prodDocVersion = prodDocVersion;
	}

	public boolean equals(Object paramObject)
	  {
	    int i = VarDocModeleDto.b;
	    if (paramObject == null) {
	      return false;
	    }
	    if (i == 0) {
	      if (this == paramObject) {
	        return true;
	      }
	    }
	    if (i == 0) {
	      if (getClass() != paramObject.getClass()) {
	        return false;
	      }
	    }
	    ProdDoc localProdDocDesc = (ProdDoc)paramObject;
	    return Objects.equals(this.id, localProdDocDesc.id);
	  }
}