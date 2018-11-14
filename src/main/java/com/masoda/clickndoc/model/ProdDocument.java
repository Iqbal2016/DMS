package com.masoda.clickndoc.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "prod_document_temp")
public class ProdDocument implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String cdTemplate;
	private String cdDocument;
	private String tyDocument;
	private String tyFichier;
	private String dtMaj;
	private String data;
	private String tyTemplate;
	private String tyResource;
	private String viewTreeId;
	private String viewTabId;

	public ProdDocument() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCdTemplate() {
		return cdTemplate;
	}

	public void setCdTemplate(String cdTemplate) {
		this.cdTemplate = cdTemplate;
	}

	public String getCdDocument() {
		return cdDocument;
	}

	public void setCdDocument(String cdDocument) {
		this.cdDocument = cdDocument;
	}

	public String getTyDocument() {
		return tyDocument;
	}

	public void setTyDocument(String tyDocument) {
		this.tyDocument = tyDocument;
	}

	public String getTyFichier() {
		return tyFichier;
	}

	public void setTyFichier(String tyFichier) {
		this.tyFichier = tyFichier;
	}

	public String getDtMaj() {
		return dtMaj;
	}

	public void setDtMaj(String dtMaj) {
		this.dtMaj = dtMaj;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getTyTemplate() {
		return tyTemplate;
	}

	public void setTyTemplate(String tyTemplate) {
		this.tyTemplate = tyTemplate;
	}

	public String getTyResource() {
		return tyResource;
	}

	public void setTyResource(String tyResource) {
		this.tyResource = tyResource;
	}

	public String getViewTreeId() {
		return viewTreeId;
	}

	public void setViewTreeId(String viewTreeId) {
		this.viewTreeId = viewTreeId;
	}

	public String getViewTabId() {
		return viewTabId;
	}

	public void setViewTabId(String viewTabId) {
		this.viewTabId = viewTabId;
	}

	@Override
	public String toString() {
		return "ProdDocument [id=" + id + ", cdTemplate=" + cdTemplate + ", cdDocument=" + cdDocument + ", tyDocument="
				+ tyDocument + ", tyFichier=" + tyFichier + ", dtMaj=" + dtMaj + ", data=" + data + ", tyTemplate="
				+ tyTemplate + ", tyResource=" + tyResource + ", viewTreeId=" + viewTreeId + ", viewTabId=" + viewTabId
				+ "]";
	}

	

}

