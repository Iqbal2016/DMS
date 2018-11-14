package com.masoda.clickndoc.model;


import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the doc_modele_template database table.
 * 
 */
@Embeddable
public class DocModeleTemplatePK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="CD_DOCUMENT", unique=true, nullable=false, length=40)
	private String cdDocument;

	@Column(name="CD_TEMPLATE", unique=true, nullable=false, length=64)
	private String cdTemplate;

	public DocModeleTemplatePK() {
	}
	public String getCdDocument() {
		return this.cdDocument;
	}
	public void setCdDocument(String cdDocument) {
		this.cdDocument = cdDocument;
	}
	public String getCdTemplate() {
		return this.cdTemplate;
	}
	public void setCdTemplate(String cdTemplate) {
		this.cdTemplate = cdTemplate;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof DocModeleTemplatePK)) {
			return false;
		}
		DocModeleTemplatePK castOther = (DocModeleTemplatePK)other;
		return 
			this.cdDocument.equals(castOther.cdDocument)
			&& this.cdTemplate.equals(castOther.cdTemplate);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.cdDocument.hashCode();
		hash = hash * prime + this.cdTemplate.hashCode();
		
		return hash;
	}
}