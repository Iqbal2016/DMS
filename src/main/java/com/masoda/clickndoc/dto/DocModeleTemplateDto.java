package com.masoda.clickndoc.dto;


import java.io.Serializable;

public class DocModeleTemplateDto implements Serializable{

	  
	  private String cdDocument;
	  private String cdTemplate;
	  private String libTemplate;
	  private Integer tyTemplate;
	  private String templateExt;
	  private Integer noOrdre;
	  private Byte flEnabled;
	  private Byte flPreview;
	  private Byte flDefault;
	  private Short idLangue;
	  private Short idOutputFormat;
	  private Short flMultiDesti;
	  private byte[] templateComment;
	  private Byte flSansVar;
	  private Byte flMonodocument;
	  private Byte flVarPrefix;
	  
}
