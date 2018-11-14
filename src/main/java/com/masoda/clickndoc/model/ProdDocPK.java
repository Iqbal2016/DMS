package com.masoda.clickndoc.model;


import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the prod_doc database table.
 * 
 */
@Embeddable
public class ProdDocPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="ID_PROD_DOC", insertable=false, updatable=false)
	private int idProdDoc;

	@Column(name="PROD_VERSION")
	private int prodVersion;

	public ProdDocPK() {
	}
	public int getIdProdDoc() {
		return this.idProdDoc;
	}
	public void setIdProdDoc(int idProdDoc) {
		this.idProdDoc = idProdDoc;
	}
	public int getProdVersion() {
		return this.prodVersion;
	}
	public void setProdVersion(int prodVersion) {
		this.prodVersion = prodVersion;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof ProdDocPK)) {
			return false;
		}
		ProdDocPK castOther = (ProdDocPK)other;
		return 
			(this.idProdDoc == castOther.idProdDoc)
			&& (this.prodVersion == castOther.prodVersion);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.idProdDoc;
		hash = hash * prime + this.prodVersion;
		
		return hash;
	}
}