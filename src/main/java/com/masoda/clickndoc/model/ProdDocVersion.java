package com.masoda.clickndoc.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the prod_doc_version database table.
 * 
 */
@Entity
@Table(name="prod_doc_version")
@NamedQuery(name="ProdDocVersion.findAll", query="SELECT p FROM ProdDocVersion p")
public class ProdDocVersion implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="ID_PROD_DOC", insertable=false, updatable=false)
	private int idProdDoc;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="DT_VERSION")
	private Date dtVersion;

	@Column(name="LAST_VERSION")
	private int lastVersion;

	//bi-directional many-to-one association to ProdDoc
	@OneToMany(mappedBy="prodDocVersion")
	private List<ProdDoc> prodDocs;

	public ProdDocVersion() {
	}

	public int getIdProdDoc() {
		return this.idProdDoc;
	}

	public void setIdProdDoc(int idProdDoc) {
		this.idProdDoc = idProdDoc;
	}

	public Date getDtVersion() {
		return this.dtVersion;
	}

	public void setDtVersion(Date dtVersion) {
		this.dtVersion = dtVersion;
	}

	public int getLastVersion() {
		return this.lastVersion;
	}

	public void setLastVersion(int lastVersion) {
		this.lastVersion = lastVersion;
	}

	public List<ProdDoc> getProdDocs() {
		return this.prodDocs;
	}

	public void setProdDocs(List<ProdDoc> prodDocs) {
		this.prodDocs = prodDocs;
	}

	public ProdDoc addProdDoc(ProdDoc prodDoc) {
		getProdDocs().add(prodDoc);
		prodDoc.setProdDocVersion(this);

		return prodDoc;
	}

	public ProdDoc removeProdDoc(ProdDoc prodDoc) {
		getProdDocs().remove(prodDoc);
		prodDoc.setProdDocVersion(null);

		return prodDoc;
	}

}