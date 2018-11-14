package com.masoda.clickndoc.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the view_tree database table.
 * 
 */
@Embeddable
public class ViewTreePK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="ID_VUE", insertable=false, updatable=false)
	private int tabId;

	@Column(name="ID_NODE")
	private int nodeId;

	public ViewTreePK() {
	}

	public int getTabId() {
		return tabId;
	}

	public void setTabId(int tabId) {
		this.tabId = tabId;
	}

	public int getNodeId() {
		return nodeId;
	}

	public void setNodeId(int nodeId) {
		this.nodeId = nodeId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + nodeId;
		result = prime * result + tabId;
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
		ViewTreePK other = (ViewTreePK) obj;
		if (nodeId != other.nodeId)
			return false;
		if (tabId != other.tabId)
			return false;
		return true;
	}

}
