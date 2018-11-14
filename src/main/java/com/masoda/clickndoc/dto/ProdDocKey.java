package com.masoda.clickndoc.dto;

import java.io.Serializable;

public class ProdDocKey implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer idProdDoc;
	private Integer prodVersion;

	public ProdDocKey() {
	}

	public ProdDocKey(Integer paramInteger1, Integer paramInteger2) {
		this.idProdDoc = paramInteger1;
		this.prodVersion = paramInteger2;
	}

	public Integer getIdProdDoc() {
		return this.idProdDoc;
	}

	public void setIdProdDoc(Integer paramInteger) {
		this.idProdDoc = paramInteger;
	}

	public Integer getProdVersion() {
		return this.prodVersion;
	}

	public void setProdVersion(Integer paramInteger) {
		this.prodVersion = paramInteger;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((idProdDoc == null) ? 0 : idProdDoc.hashCode());
		result = prime * result + ((prodVersion == null) ? 0 : prodVersion.hashCode());
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
		ProdDocKey other = (ProdDocKey) obj;
		if (idProdDoc == null) {
			if (other.idProdDoc != null)
				return false;
		} else if (!idProdDoc.equals(other.idProdDoc))
			return false;
		if (prodVersion == null) {
			if (other.prodVersion != null)
				return false;
		} else if (!prodVersion.equals(other.prodVersion))
			return false;
		return true;
	}

}
