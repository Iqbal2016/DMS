package com.masoda.clickndoc.model;


import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the doc_modele_template database table.
 * 
 */
@Entity
@Table(name="doc_modele_template")
@NamedQuery(name="DocModeleTemplate.findAll", query="SELECT d FROM DocModeleTemplate d")
public class DocModeleTemplate implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private DocModeleTemplatePK id;

	@Column(name="FL_DEFAULT", nullable=false)
	private int flDefault;

	@Column(name="FL_ENABLED", nullable=false)
	private int flEnabled;

	@Column(name="FL_MONODOCUMENT")
	private int flMonodocument;

	@Column(name="FL_MULTI_DESTI")
	private int flMultiDesti;

	@Column(name="FL_PREVIEW", nullable=false)
	private int flPreview;

	@Column(name="FL_SANS_VAR")
	private int flSansVar;

	@Column(name="FL_VAR_PREFIX", nullable=false)
	private int flVarPrefix;

	@Column(name="ID_LANGUE")
	private int idLangue;

	@Column(name="ID_OUTPUT_FORMAT", nullable=false)
	private int idOutputFormat;

	@Column(name="LIB_TEMPLATE", nullable=false, length=128)
	private String libTemplate;

	@Column(name="NO_ORDRE", nullable=false)
	private int noOrdre;

	@Lob
	@Column(name="TEMPLATE_COMMENT")
	private byte[] templateComment;

	@Column(name="TEMPLATE_EXT", nullable=false, length=5)
	private String templateExt;

	@Column(name="TY_TEMPLATE", nullable=false)
	private int tyTemplate;

	//bi-directional many-to-one association to ClickndocDocument
	@OneToMany(mappedBy="docModeleTemplate")
	private List<ClickndocDocument> clickndocDocuments;

	public DocModeleTemplate() {
	}

	public DocModeleTemplatePK getId() {
		return this.id;
	}

	public void setId(DocModeleTemplatePK id) {
		this.id = id;
	}

	public int getFlDefault() {
		return this.flDefault;
	}

	public void setFlDefault(int flDefault) {
		this.flDefault = flDefault;
	}

	public int getFlEnabled() {
		return this.flEnabled;
	}

	public void setFlEnabled(int flEnabled) {
		this.flEnabled = flEnabled;
	}

	public int getFlMonodocument() {
		return this.flMonodocument;
	}

	public void setFlMonodocument(int flMonodocument) {
		this.flMonodocument = flMonodocument;
	}

	public int getFlMultiDesti() {
		return this.flMultiDesti;
	}

	public void setFlMultiDesti(int flMultiDesti) {
		this.flMultiDesti = flMultiDesti;
	}

	public int getFlPreview() {
		return this.flPreview;
	}

	public void setFlPreview(int flPreview) {
		this.flPreview = flPreview;
	}

	public int getFlSansVar() {
		return this.flSansVar;
	}

	public void setFlSansVar(int flSansVar) {
		this.flSansVar = flSansVar;
	}

	public int getFlVarPrefix() {
		return this.flVarPrefix;
	}

	public void setFlVarPrefix(int flVarPrefix) {
		this.flVarPrefix = flVarPrefix;
	}

	public int getIdLangue() {
		return this.idLangue;
	}

	public void setIdLangue(int idLangue) {
		this.idLangue = idLangue;
	}

	public int getIdOutputFormat() {
		return this.idOutputFormat;
	}

	public void setIdOutputFormat(int idOutputFormat) {
		this.idOutputFormat = idOutputFormat;
	}

	public String getLibTemplate() {
		return this.libTemplate;
	}

	public void setLibTemplate(String libTemplate) {
		this.libTemplate = libTemplate;
	}

	public int getNoOrdre() {
		return this.noOrdre;
	}

	public void setNoOrdre(int noOrdre) {
		this.noOrdre = noOrdre;
	}

	public byte[] getTemplateComment() {
		return this.templateComment;
	}

	public void setTemplateComment(byte[] templateComment) {
		this.templateComment = templateComment;
	}

	public String getTemplateExt() {
		return this.templateExt;
	}

	public void setTemplateExt(String templateExt) {
		this.templateExt = templateExt;
	}

	public int getTyTemplate() {
		return this.tyTemplate;
	}

	public void setTyTemplate(int tyTemplate) {
		this.tyTemplate = tyTemplate;
	}

	public List<ClickndocDocument> getClickndocDocuments() {
		return this.clickndocDocuments;
	}

	public void setClickndocDocuments(List<ClickndocDocument> clickndocDocuments) {
		this.clickndocDocuments = clickndocDocuments;
	}

	public ClickndocDocument addClickndocDocument(ClickndocDocument clickndocDocument) {
		getClickndocDocuments().add(clickndocDocument);
		clickndocDocument.setDocModeleTemplate(this);

		return clickndocDocument;
	}

	public ClickndocDocument removeClickndocDocument(ClickndocDocument clickndocDocument) {
		getClickndocDocuments().remove(clickndocDocument);
		clickndocDocument.setDocModeleTemplate(null);

		return clickndocDocument;
	}

}