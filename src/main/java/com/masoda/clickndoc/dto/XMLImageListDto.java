package com.masoda.clickndoc.dto;


import java.util.List;

import javax.xml.bind.annotation.*;

//@XmlRootElement(name="images") 
@XmlAccessorType(XmlAccessType.FIELD)
@XmlRootElement(name = "images")
public class XMLImageListDto {

	//@XmlElement
	private List <XMLImageDto> image;

	public List<XMLImageDto> getImage() {
		return image;
	}

	public void setImage(List<XMLImageDto> image) {
		this.image = image;
	}
	 
//	    private List <XMLImageDto> image;
//
//	    public List <XMLImageDto> getImage ()
//	    {
//	        return image;
//	    }
//
//	    public void setImage (List <XMLImageDto> image)
//	    {
//	        this.image = image;
//	    }

}
