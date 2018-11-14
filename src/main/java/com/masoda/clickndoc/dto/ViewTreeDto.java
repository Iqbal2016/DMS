package com.masoda.clickndoc.dto;


import java.io.Serializable;
import java.text.Normalizer;
import java.util.Arrays;

import com.masoda.clickndoc.util.StringUtils;

public class ViewTreeDto
  implements Serializable
{
  private static final long serialVersionUID = 1L;
  public static final int FOLDER = 1;
  public static final int DOCUMENT = 2;
  private ViewTreeKeyDto id;
  private Integer parentId;
  private Integer level;
  private String path;
  private String label;
  private Integer nodeType;
  private String documentCode;
  private byte[] descriptionBytes;
  
  
  public ViewTreeDto() {}
  
  public ViewTreeDto(ViewTreeKeyDto paramVueTreeKey)
  {
    this.id = paramVueTreeKey;
  }
  
  public String getDescription()
  {
    if (getDescriptionBytes() != null) {
      return  StringUtils.unaccent(new String(getDescriptionBytes()));
    }
    return null;
  }
  
  public ViewTreeKeyDto getId()
  {
    return this.id;
  }
  
  public void setId(ViewTreeKeyDto paramVueTreeKey)
  {
    this.id = paramVueTreeKey;
  }
  
  public Integer getParentId()
  {
    return this.parentId;
  }
  
  public void setParentId(Integer paramInteger)
  {
    this.parentId = paramInteger;
  }
  
  public Integer getLevel()
  {
    return this.level;
  }
  
  public void setLevel(Integer paramInteger)
  {
    this.level = paramInteger;
  }
  
  public String getPath()
  {
    return this.path;
  }
  
  public void setPath(String paramString)
  {
    this.path = paramString;
  }
  
  public String getLabel()
  {
    return StringUtils.unaccent(this.label);
  }
  
  public void setLabel(String paramString)
  {
    this.label = paramString;
  }
  
  public Integer getNodeType()
  {
    return this.nodeType;
  }
  
  public void setNodeType(Integer paramInteger)
  {
    this.nodeType = paramInteger;
  }
  
  public String getDocumentCode()
  {
    return this.documentCode;
  }
  
  public void setDocumentCode(String paramString)
  {
    this.documentCode = paramString;
  }
  
  public byte[] getDescriptionBytes()
  {
    return this.descriptionBytes;
  }
  
  public void setDescriptionBytes(byte[] paramArrayOfByte)
  {
    this.descriptionBytes = paramArrayOfByte;
  }

@Override
public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + Arrays.hashCode(descriptionBytes);
	result = prime * result + ((documentCode == null) ? 0 : documentCode.hashCode());
	result = prime * result + ((id == null) ? 0 : id.hashCode());
	result = prime * result + ((label == null) ? 0 : label.hashCode());
	result = prime * result + ((level == null) ? 0 : level.hashCode());
	result = prime * result + ((nodeType == null) ? 0 : nodeType.hashCode());
	result = prime * result + ((parentId == null) ? 0 : parentId.hashCode());
	result = prime * result + ((path == null) ? 0 : path.hashCode());
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
	ViewTreeDto other = (ViewTreeDto) obj;
	if (!Arrays.equals(descriptionBytes, other.descriptionBytes))
		return false;
	if (documentCode == null) {
		if (other.documentCode != null)
			return false;
	} else if (!documentCode.equals(other.documentCode))
		return false;
	if (id == null) {
		if (other.id != null)
			return false;
	} else if (!id.equals(other.id))
		return false;
	if (label == null) {
		if (other.label != null)
			return false;
	} else if (!label.equals(other.label))
		return false;
	if (level == null) {
		if (other.level != null)
			return false;
	} else if (!level.equals(other.level))
		return false;
	if (nodeType == null) {
		if (other.nodeType != null)
			return false;
	} else if (!nodeType.equals(other.nodeType))
		return false;
	if (parentId == null) {
		if (other.parentId != null)
			return false;
	} else if (!parentId.equals(other.parentId))
		return false;
	if (path == null) {
		if (other.path != null)
			return false;
	} else if (!path.equals(other.path))
		return false;
	return true;
}

  
}

