package com.masoda.clickndoc.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the clickndoc_document database table.
 * 
 */
@Embeddable
public class ClickndocDocumentPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="CD_DOCUMENT", insertable=false, updatable=false, unique=true, nullable=false, length=40)
	private String cdDocument;

	@Column(name="TY_DOCUMENT", unique=true, nullable=false, length=1)
	private String tyDocument;

	@Column(name="CD_TEMPLATE", insertable=false, updatable=false, unique=true, nullable=false, length=64)
	private String cdTemplate;

	@Column(name="TY_FICHIER", unique=true, nullable=false, length=4)
	private String tyFichier;

	public ClickndocDocumentPK() {
	}
	public String getCdDocument() {
		return this.cdDocument;
	}
	public void setCdDocument(String cdDocument) {
		this.cdDocument = cdDocument;
	}
	public String getTyDocument() {
		return this.tyDocument;
	}
	public void setTyDocument(String tyDocument) {
		this.tyDocument = tyDocument;
	}
	public String getCdTemplate() {
		return this.cdTemplate;
	}
	public void setCdTemplate(String cdTemplate) {
		this.cdTemplate = cdTemplate;
	}
	public String getTyFichier() {
		return this.tyFichier;
	}
	public void setTyFichier(String tyFichier) {
		this.tyFichier = tyFichier;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof ClickndocDocumentPK)) {
			return false;
		}
		ClickndocDocumentPK castOther = (ClickndocDocumentPK)other;
		return 
			this.cdDocument.equals(castOther.cdDocument)
			&& this.tyDocument.equals(castOther.tyDocument)
			&& this.cdTemplate.equals(castOther.cdTemplate)
			&& this.tyFichier.equals(castOther.tyFichier);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.cdDocument.hashCode();
		hash = hash * prime + this.tyDocument.hashCode();
		hash = hash * prime + this.cdTemplate.hashCode();
		hash = hash * prime + this.tyFichier.hashCode();
		
		return hash;
	}
}