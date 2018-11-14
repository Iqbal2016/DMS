package com.masoda.clickndoc.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the view_tree database table.
 * 
 */
@Entity
@Table(name="view_tree")
@NamedQuery(name="ViewTree.findAll", query="SELECT v FROM ViewTree v")
public class ViewTree implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private ViewTreePK id;

	
	@Column(name="CD_DOCUMENT")
	private String documentCode;

	@Column(name="ID_PARENT")
	private Integer parentId;

	@Column(name="LB_NODE")
	private String label;

	@Column(name="NODE_LEVEL")
	private int level;

	private String path;

	@Lob
	@Column(name="TT_NODE")
	private byte[] descriptionBytes;

	@Column(name="TY_NODE")
	private int nodeType;

	
	//bi-directional many-to-one association to ViewTab
	@ManyToOne
	@JoinColumn(name="ID_VUE",insertable=false, updatable=false)
	private ViewTab viewTab;

	public ViewTree() {
	}

	public ViewTreePK getId() {
		return this.id;
	}

	public void setId(ViewTreePK id) {
		this.id = id;
	}
	public String getDocumentCode() {
		return documentCode;
	}

	public void setDocumentCode(String documentCode) {
		this.documentCode = documentCode;
	}

	public Integer getParentId() {
		return parentId;
	}

	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public byte[] getDescriptionBytes() {
		return descriptionBytes;
	}

	public void setDescriptionBytes(byte[] descriptionBytes) {
		this.descriptionBytes = descriptionBytes;
	}

	public int getNodeType() {
		return nodeType;
	}

	public void setNodeType(int nodeType) {
		this.nodeType = nodeType;
	}

	public ViewTab getViewTab() {
		return viewTab;
	}

	public void setViewTab(ViewTab viewTab) {
		this.viewTab = viewTab;
	}


	
}