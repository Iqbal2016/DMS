package com.masoda.clickndoc.dto;


import java.io.Serializable;
import java.text.Normalizer;
import java.util.Date;
import java.util.List;

import com.masoda.clickndoc.model.ViewTree;
import com.masoda.clickndoc.util.StringUtils;

public class ViewTabDto
  implements Serializable
{
  private static final long serialVersionUID = 1L;
  private Integer id;
  private String label;
  private Integer orderNumber;
  private Integer version;
  private byte[] descriptionBytes;
  private Date lastUpdated;
  private List<ViewTreeDto> viewTrees;
  public ViewTabDto() {}
  
  public ViewTabDto(Integer paramInteger)
  {
    this.id = paramInteger;
  }
  
  public ViewTabDto(Integer paramInteger1, String paramString, Integer paramInteger2, Integer paramInteger3, byte[] paramArrayOfByte, Date paramDate)
  {
    this.id = paramInteger1;
    this.label = paramString;
    this.orderNumber = paramInteger2;
    this.version = paramInteger3;
    this.descriptionBytes = paramArrayOfByte;
    this.lastUpdated = paramDate;
   
  }
  
  public String getDescription()
  {
    if (getDescriptionBytes() != null) {
      return StringUtils.unaccent(new String(getDescriptionBytes()));
    }
    return null;
  }
  
  public Integer getId()
  {
    return this.id;
  }
  
  public void setId(Integer paramInteger)
  {
    this.id = paramInteger;
  }
  
  public String getLabel()
  {
    return StringUtils.unaccent(this.label);
  }
  
  public void setLabel(String paramString)
  {
    this.label = paramString;
  }
  
  public Integer getOrderNumber()
  {
    return this.orderNumber;
  }
  
  public void setOrderNumber(Integer paramInteger)
  {
    this.orderNumber = paramInteger;
  }
  
  public Integer getVersion()
  {
    return this.version;
  }
  
  public void setVersion(Integer paramInteger)
  {
    this.version = paramInteger;
  }
  
  public byte[] getDescriptionBytes()
  {
    return this.descriptionBytes;
  }
  
  public void setDescriptionBytes(byte[] paramArrayOfByte)
  {
    this.descriptionBytes = paramArrayOfByte;
  }
  
  public Date getLastUpdated()
  {
    return this.lastUpdated;
  }
  
  public void setLastUpdated(Date paramDate)
  {
    this.lastUpdated = paramDate;
  }

public List<ViewTreeDto> getViewTrees() {
	return viewTrees;
}

public void setViewTrees(List<ViewTreeDto> viewTrees) {
	this.viewTrees = viewTrees;
}
  
	
  
  
}

