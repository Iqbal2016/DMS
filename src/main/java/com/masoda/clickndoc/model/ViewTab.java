package com.masoda.clickndoc.model;

import java.io.Serializable;
import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;


/**
 * The persistent class for the view_tab database table.
 * 
 */
@Entity
@Table(name="view_tab")
@NamedQuery(name="ViewTab.findAll", query="SELECT v FROM ViewTab v")
public class ViewTab implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="ID_VUE")
	private int id;

	@Column(name="DT_MAJ")
	private Timestamp lastUpdated;

	//@Column(name="FL_DOCANDCLAUSEONLY")
	//private int flDocandclauseonly;

	@Column(name="NO_ORDRE")
	private int orderNumber;

	@Column(name="NOM_VUE")
	private String label;

	@Lob
	@Column(name="TT_VUE")
	private byte[] descriptionBytes;

	private int version;

	//bi-directional many-to-one association to ViewTree
	@OneToMany(mappedBy="viewTab")
	private List<ViewTree> viewTrees;

	public ViewTab() {
	}

	
	
	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public Timestamp getLastUpdated() {
		return lastUpdated;
	}



	public void setLastUpdated(Timestamp lastUpdated) {
		this.lastUpdated = lastUpdated;
	}



	public int getOrderNumber() {
		return orderNumber;
	}



	public void setOrderNumber(int orderNumber) {
		this.orderNumber = orderNumber;
	}



	public String getLabel() {
		return label;
	}



	public void setLabel(String label) {
		this.label = label;
	}



	public byte[] getDescriptionBytes() {
		return descriptionBytes;
	}



	public void setDescriptionBytes(byte[] descriptionBytes) {
		this.descriptionBytes = descriptionBytes;
	}



	public int getVersion() {
		return version;
	}



	public void setVersion(int version) {
		this.version = version;
	}



	public List<ViewTree> getViewTrees() {
		return this.viewTrees;
	}

	public void setViewTrees(List<ViewTree> viewTrees) {
		this.viewTrees = viewTrees;
	}

	public ViewTree addViewTree(ViewTree viewTree) {
		getViewTrees().add(viewTree);
		viewTree.setViewTab(this);

		return viewTree;
	}

	public ViewTree removeViewTree(ViewTree viewTree) {
		getViewTrees().remove(viewTree);
		viewTree.setViewTab(null);

		return viewTree;
	}

}
