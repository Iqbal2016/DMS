package com.masoda.clickndoc.dto;


import java.io.Serializable;

public class ViewTreeKeyDto   implements Serializable
{
	  private static final long serialVersionUID = 1L;
	  private Integer nodeId;
	  private Integer tabId;
	  
	  public ViewTreeKeyDto() {}
	  
	  public ViewTreeKeyDto(Integer paramInteger1, Integer paramInteger2)
	  {
	    this.nodeId = paramInteger1;
	    this.tabId = paramInteger2;
	  }
	  
	  public Integer getNodeId()
	  {
	    return this.nodeId;
	  }
	  
	  public void setNodeId(Integer paramInteger)
	  {
	    this.nodeId = paramInteger;
	  }
	  
	  public Integer getTabId()
	  {
	    return this.tabId;
	  }
	  
	  public void setTabId(Integer paramInteger)
	  {
	    this.tabId = paramInteger;
	  }

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((nodeId == null) ? 0 : nodeId.hashCode());
		result = prime * result + ((tabId == null) ? 0 : tabId.hashCode());
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
		ViewTreeKeyDto other = (ViewTreeKeyDto) obj;
		if (nodeId == null) {
			if (other.nodeId != null)
				return false;
		} else if (!nodeId.equals(other.nodeId))
			return false;
		if (tabId == null) {
			if (other.tabId != null)
				return false;
		} else if (!tabId.equals(other.tabId))
			return false;
		return true;
	}
	  
	  
	}

