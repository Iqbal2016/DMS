package com.masoda.clickndoc.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the clickndoc_document database table.
 * 
 */
@Entity
@Table(name="clickndoc_document")
@NamedQuery(name="ClickndocDocument.findAll", query="SELECT c FROM ClickndocDocument c")
public class ClickndocDocument implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private ClickndocDocumentPK id;

	@Column(length=20)
	private String crc;

	@Lob
	private byte[] data;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="DT_FICHIER")
	private Date dtFichier;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="DT_MAJ")
	private Date dtMaj;

	private int taille;

	@Column(name="TY_RESSOURCE", nullable=false)
	private int tyRessource;

	@Column(name="TY_TEMPLATE", nullable=false)
	private int tyTemplate;

	//bi-directional many-to-one association to DocModeleTemplate
	@ManyToOne
	@JoinColumns({
		@JoinColumn(name="CD_DOCUMENT", referencedColumnName="CD_DOCUMENT", nullable=false, insertable=false, updatable=false),
		@JoinColumn(name="CD_TEMPLATE", referencedColumnName="CD_TEMPLATE", nullable=false, insertable=false, updatable=false)
		})
	private DocModeleTemplate docModeleTemplate;

	public ClickndocDocument() {
	}

	public ClickndocDocumentPK getId() {
		return this.id;
	}

	public void setId(ClickndocDocumentPK id) {
		this.id = id;
	}

	public String getCrc() {
		return this.crc;
	}

	public void setCrc(String crc) {
		this.crc = crc;
	}

	public byte[] getData() {
		return this.data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

	public Date getDtFichier() {
		return this.dtFichier;
	}

	public void setDtFichier(Date dtFichier) {
		this.dtFichier = dtFichier;
	}

	public Date getDtMaj() {
		return this.dtMaj;
	}

	public void setDtMaj(Date dtMaj) {
		this.dtMaj = dtMaj;
	}

	public int getTaille() {
		return this.taille;
	}

	public void setTaille(int taille) {
		this.taille = taille;
	}

	public int getTyRessource() {
		return this.tyRessource;
	}

	public void setTyRessource(int tyRessource) {
		this.tyRessource = tyRessource;
	}

	public int getTyTemplate() {
		return this.tyTemplate;
	}

	public void setTyTemplate(int tyTemplate) {
		this.tyTemplate = tyTemplate;
	}

	public DocModeleTemplate getDocModeleTemplate() {
		return this.docModeleTemplate;
	}

	public void setDocModeleTemplate(DocModeleTemplate docModeleTemplate) {
		this.docModeleTemplate = docModeleTemplate;
	}

}