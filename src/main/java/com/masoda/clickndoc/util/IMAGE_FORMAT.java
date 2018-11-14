package com.masoda.clickndoc.util;

public enum IMAGE_FORMAT {
	   PNG,
	   JPG,
	   GIF,
	   BMP;	
	 public String getImageValue() {
         switch (this) {
       case PNG:
           return "data:image/png;base64,";
       case JPG:
           return "data:image/jpeg;base64,"; 
       case GIF:
           return "data:image/gif;base64,";
       case BMP:
           return "data:image/bmp;base64,";    
       default:
           return "data:image/png;base64,";
       }
     }
}
