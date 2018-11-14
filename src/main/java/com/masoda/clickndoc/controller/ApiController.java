package com.masoda.clickndoc.controller;


import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.StringReader;
import java.io.StringWriter;
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.zip.DataFormatException;
import java.util.zip.Inflater;
import org.jsoup.parser.Parser;
import org.jsoup.Jsoup;
import org.jsoup.select.Elements;
import org.modelmapper.ModelMapper;

import javax.xml.bind.DatatypeConverter;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.stream.StreamSource;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.codec.binary.Base64;
/*import org.modelmapper.ModelMapper;*/
/*import org.apache.commons.io.FilenameUtils;
import org.jsoup.Jsoup;
import org.jsoup.parser.Parser;
import org.jsoup.select.Elements;
import org.modelmapper.ModelMapper;*/
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;
import org.w3c.dom.CharacterData;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

/*import com.fasterxml.jackson.databind.jsonFormatVisitors.JsonAnyFormatVisitor;*/
import com.masoda.clickndoc.dao.ProdDocumentDAO;
import com.masoda.clickndoc.dto.ClickndocDocumentDto;
import com.masoda.clickndoc.dto.DocumentTabsDto;
import com.masoda.clickndoc.dto.Message;
import com.masoda.clickndoc.dto.Parentfolder;
import com.masoda.clickndoc.dto.Parentfolder.Folder;
import com.masoda.clickndoc.dto.ProdDocDto;
import com.masoda.clickndoc.dto.ProdDocDtoList;
import com.masoda.clickndoc.dto.ProdDocInfoDto;
import com.masoda.clickndoc.dto.ViewTabDto;
import com.masoda.clickndoc.dto.ViewTreeDto;
import com.masoda.clickndoc.dto.XMLImageDto;
import com.masoda.clickndoc.dto.XMLImageListDto;
import com.masoda.clickndoc.model.ProdDoc;
import com.masoda.clickndoc.model.ProdDocument;
import com.masoda.clickndoc.model.User;
import com.masoda.clickndoc.model.ViewTab;
import com.masoda.clickndoc.model.ViewTree;
import com.masoda.clickndoc.service.ClockndocDocumentService;
import com.masoda.clickndoc.service.ProdDocService;
import com.masoda.clickndoc.service.UserService;
import com.masoda.clickndoc.service.ViewTabService;
import com.masoda.clickndoc.service.ViewTreeService;
import com.masoda.clickndoc.util.IMAGE_FORMAT;
import com.masoda.clickndoc.util.StringUtils;

@RestController
@RequestMapping("restapi")
public class ApiController {
	
	@Autowired
	ProdDocumentDAO prodDocumentDAO;

	@Autowired
	ViewTabService viewTabService;

	@Autowired
	ViewTreeService viewTreeService;

	@Autowired
	ProdDocService prodDocService;
	@Autowired
	ClockndocDocumentService clockndocDocumentService;

	/*@Autowired
	private ModelMapper modelMapper;*/
	
	ModelMapper modelMapper = new ModelMapper();

	@RequestMapping(path = "/apiHome")
	public String welcome(@PathVariable String id) {// Welcome page, non-rest
		return "Welcome to ClickNDOc.";
	}

	@RequestMapping(path = "/getDocumentTabs", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<DocumentTabsDto> getDocumentTabs() {

		List<ViewTab> posts = viewTabService.findAllViewTab();
		return posts.stream().map(post -> convertToDocumentTabDto(post)).collect(Collectors.toList());
	}

	private DocumentTabsDto convertToDocumentTabDto(ViewTab viewTab) {
		DocumentTabsDto documentTabsDto = new DocumentTabsDto();
		documentTabsDto.setTabId("$TAB$" + viewTab.getId());
		documentTabsDto.setLabel(viewTab.getLabel());

		return documentTabsDto;

	}
	
	/**
	 * get current user details information.
	 *//*
	@RequestMapping(value = { "/currentUserInfo" }, produces = { MediaType.APPLICATION_JSON_VALUE })
	public User currentUserInfo(ModelMap model) {
		User userDetails = null;
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		if (principal instanceof UserDetails) {
			String userSoSID = ((UserDetails) principal).getUsername();
			userDetails = userService.findBySSO(userSoSID);
		}
		System.out.println("....................currentUserInfo..........." + userDetails.toString());
		return userDetails;

	}
*/
	@RequestMapping(path = "/getTabDocuments/{id}", method = RequestMethod.GET, produces = {
			MediaType.APPLICATION_XML_VALUE })
	public String postTabDocuments(@PathVariable String id) {
		ViewTab viewTab = viewTabService.findById(Integer.parseInt(id.substring(5, id.length())));
		return convertToXMLFolderDto(convertToTabviewDto(viewTab));

	}

	@RequestMapping(path = "/getTabDocuments", method = RequestMethod.GET)
	public String postTabDocuments() {
		ViewTab viewTab = viewTabService.findById(20);
		return convertToXMLFolderDto(convertToTabviewDto(viewTab));

	}

	@RequestMapping(path = "/getProductionInfos", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ProdDocDtoList getProductionInfos(
			@RequestParam(value = "documentCode", required = false) String documentCode,
			@RequestParam(value = "tabId", required = false) String tabId,
			@RequestParam(value = "documentCodes", required = false) List<String> documentCodes) {

		System.out.println("............documentCodes..................................." + documentCodes);

		ProdDocDtoList prodDocDtoList = new ProdDocDtoList();
		List<String> documentCodeList = new ArrayList<String>();
		if (tabId != null) {
			List<ViewTree> viewTrees = viewTreeService
					.findDocumentCodeByTabId(Integer.parseInt(tabId.substring(5, tabId.length())));
			if (viewTrees != null) {
				List<ViewTreeDto> viewTreeDto = viewTrees.stream().map(viewTree -> convertToTreeviewDto(viewTree))
						.collect(Collectors.toList());
				if (viewTreeDto.size() > 0) {
					for (ViewTreeDto viewTree : viewTreeDto) {
						documentCodeList.add(viewTree.getDocumentCode());
					}
				}
			}
		}

		if (documentCodes != null) {
			for (String docCode : documentCodes) {
				documentCodeList.add(docCode);
			}

		}
		System.out.println("documentCodes size" + documentCodeList.size());
		if (!documentCodeList.isEmpty()) {
			List<ProdDocInfoDto> prodDocInfoDto = prodDocService.findByCdDocumentList(documentCodeList);
			System.out.println("Production size" + prodDocInfoDto.size());
			if (!prodDocInfoDto.isEmpty()) {
				prodDocDtoList.setProductions(prodDocInfoDto);
				return prodDocDtoList;
			}

		}
		
		System.out.println("............prodDocDtoList..................................." +prodDocDtoList.toString());

		return prodDocDtoList;
	}

	@RequestMapping(path = "/getPreview", produces = { MediaType.APPLICATION_JSON_VALUE }) // MediaType.APPLICATION_XML_VALUE})
																							// productionVersion
	public String getPreview(@RequestParam(value = "documentCode", required = false) String documentCode,
			@RequestParam(value = "productionId", required = false) Integer productionId,
			@RequestParam(value = "productionVersion", required = false) Integer productionVersion,
			@RequestParam(value = "templateCode", required = false) String templateCode)
			throws UnsupportedEncodingException {

		String retXml = "";
		// select with primary key and version/
		System.out.println("...........productionId........."+productionId+"....productionVersion......."+productionVersion);
		if (productionId != null && productionVersion != null) {
			// System.out.println("...........get document preview 1........."+productionId
			// +".........."+productionVersion);
			ProdDocDto prodDocDto = prodDocService.findDocumentByIdAndVersion(productionId, productionVersion);
			//System.out.println(".................prodDocDto............."+prodDocDto.toString());
			//System.out.println("....................prodDocDto.getXml().........."+prodDocDto.getXml());
			// System.out.println("...........get document preview
			// 2........."+prodDocDto.toString());
			// System.out.println("...........get document preview
			// 2........."+prodDocDto.getXml());
			if (prodDocDto.getXml().length() > 0) {
				/*System.out.println(
						"...............prodDocDto.getXml().length()............" + prodDocDto.getXml().length());*/
				try {
					//org.jsoup.nodes.Document doc = Jsoup.parse(prodDocDto.getXml(), "", Parser.xmlParser());
					org.jsoup.nodes.Document doc = Jsoup.parse(prodDocDto.getXml(), "");
					/*System.out.println("...............doc.select(\"preview\")............" + doc.select("preview"));*/

					for (org.jsoup.nodes.Element e : doc.select("preview")) { // .select("data")

						String htmlImage = "<images>" + getTagValue(e.text(), "images").toString() + "</images>";
						XMLImageListDto xMLImageListDto = convertXMLToImageObject(htmlImage);
						retXml = getTagValue(e.text(), "document").toString();
						Elements img = Jsoup.parse(e.text()).getAllElements().select("img"); // .attr(attributeKey)
																								// .select("img").attr("src");

						for (org.jsoup.nodes.Element elem : img) {
							if (elem.attr("src") != "") {
								String filename = elem.attr("src");
								String ext2 = FilenameUtils.getExtension(filename).toUpperCase();

								List<XMLImageDto> imgdata = (List<XMLImageDto>) xMLImageListDto.getImage().stream()
										.filter(item -> item.getName().equals(filename)).collect(Collectors.toList());

								if (filename.equals(imgdata.get(0).getName())) {
									if (ext2.toUpperCase().equals("PNG")) {
										retXml = retXml.replace(filename,
												IMAGE_FORMAT.PNG.getImageValue() + imgdata.get(0).getData());
									}
									if (ext2.toUpperCase().equals("BMP")) {
										retXml = retXml.replace(filename,
												IMAGE_FORMAT.BMP.getImageValue() + imgdata.get(0).getData());

									}

								}
							}
						}
						return retXml;
					}

				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return "ss";
			}

		}
		// select with template code
		if (templateCode != null) {
			return "With template code";
		}
		// select with document code
		if (documentCode != null) {

			ClickndocDocumentDto dto = clockndocDocumentService.findDocumentsHTMByCdDocument(documentCode);
			//ProdDocument document = prodDocumentDAO.findById(documentCode);
			ProdDocument document =new ProdDocument();
			System.out.println("...............document..........."+document.toString());
			//System.out.println("....................dto.getXml().........."+dto.getXml());
			//ClickndocDocumentDto dto=clockndocDocumentService.findDocumentsHTMByCdDocument("AAAAAAAAAAAAAA_TEST_STRUCT_DIF");
			
			/*if (dto.getXml().length() > 0) {
				System.out.println(
						"...............dto.getXml().length()............" + dto.getXml().length());
				try {
					org.jsoup.nodes.Document doc = Jsoup.parse(dto.getXml(), "", Parser.xmlParser());
					System.out.println("...............dto.select(\"preview\")............" + doc.select("data"));

					for (org.jsoup.nodes.Element e : doc.select("data")) { // .select("data")

						String htmlImage = "<images>" + getTagValue(e.text(), "images").toString() + "</images>";
						XMLImageListDto xMLImageListDto = convertXMLToImageObject(htmlImage);
						retXml = getTagValue(e.text(), "document").toString();
						Elements img = Jsoup.parse(e.text()).getAllElements().select("img"); // .attr(attributeKey)
																								// .select("img").attr("src");

						for (org.jsoup.nodes.Element elem : img) {
							if (elem.attr("src") != "") {
								String filename = elem.attr("src");
								String ext2 = FilenameUtils.getExtension(filename).toUpperCase();

								List<XMLImageDto> imgdata = (List<XMLImageDto>) xMLImageListDto.getImage().stream()
										.filter(item -> item.getName().equals(filename)).collect(Collectors.toList());

								if (filename.equals(imgdata.get(0).getName())) {
									if (ext2.toUpperCase().equals("PNG")) {
										retXml = retXml.replace(filename,
												IMAGE_FORMAT.PNG.getImageValue() + imgdata.get(0).getData());
									}
									if (ext2.toUpperCase().equals("BMP")) {
										retXml = retXml.replace(filename,
												IMAGE_FORMAT.BMP.getImageValue() + imgdata.get(0).getData());

									}

								}
							}
						}
						return retXml;
					}

				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				return "ss";
			}*/
			
			   byte[] bytes = dto.getData();
			   byte[] byteArray = Base64.decodeBase64(dto.getData());
			  // System.out.println("infatility.................:"+new String(byteArray));
			 
			  // System.out.println(new String(bytes));
			    String encoded = DatatypeConverter.printBase64Binary(bytes);
			    System.out.println("infatility...................... 1:"+dto.getDecodedData());
			    
			    
			    byte[] imageBytes = javax.xml.bind.DatatypeConverter.parseBase64Binary(dto.getDecodedData());
			    System.out.println("...............imageBytes............"+imageBytes);
			    //System.out.println(encoded);
			    //byte[] decoded = DatatypeConverter.parseBase64Binary(encoded);
			    // check
			    //for (int i = 0; i < bytes.length; i++) {
			      //assert bytes[i] == decoded[i];
			    //}
			  
			   // Base64.getDecoder().decode(decoded);
			
				//new String(dto.getData(), "UTF-8");
			    String htmlImage="";
				//org.jsoup.nodes.Document documents = Jsoup.parse(new String (dto.getXml()), "", Parser.xmlParser());
				org.jsoup.nodes.Document documents = Jsoup.parse(new String (dto.getXml()), "");
				for (org.jsoup.nodes.Element e : documents.select("data") ) {
					System.out.println(".................dd................"+e.text());
					// htmlImage= getTagValue(e.text(),"xmlpreviw").toString(); //e.text(); //
					// System.out.println(new String (htmlImage));
					 return dto.toString();
				}
				//Base64.decodeBase64(paramString);
				//byte[] decoded = Base64.decodeBase64(dto.getXml());
				//System.out.println(new String (decoded));
			     //return StringUtils.unaccent(new String(decoded));
				//return new String(dto.getDecodedData());
				//return new String(dto.getDecodedData());
				
				//org.jsoup.nodes.Document doc = Jsoup.parse(dto.getData(), "UTF-8", Parser.xmlParser() );
				//return dto.toString();
			
		//	byte[] decoded = Base64.getDecoder().decode(StringUtils.unaccent(new String(dto.getData())));
		//	return StringUtils.unaccent(new String(decoded));
		}
		return "";

	}



	public static byte[] decompress(byte[] data) throws IOException, DataFormatException {
		Inflater inflater = new Inflater();
		inflater.setInput(data);

		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		while (!inflater.finished()) {
			int count = inflater.inflate(buffer);
			outputStream.write(buffer, 0, count);
		}
		outputStream.close();
		byte[] output = outputStream.toByteArray();
		// LOG.debug("Original: " + data.length);
		// LOG.debug("Compressed: " + output.length);
		return output;
	}

	@RequestMapping(path = "/treeview/{id}", produces = { MediaType.APPLICATION_JSON_VALUE }) // MediaType.APPLICATION_XML_VALUE})
	public List<ViewTreeDto> treeviw(@PathVariable int id) {

		List<ViewTree> posts = viewTreeService.findViewTreeByTabId(id);
		List<ViewTreeDto> treeviewDto = posts.stream().map(post -> convertToTreeviewDto(post))
				.collect(Collectors.toList());
		return treeviewDto;
	}

	@RequestMapping(path = "/testxml/{player}", produces = { MediaType.APPLICATION_JSON_VALUE })

	public Message messagew(@PathVariable String player) {// REST Endpoint.

		Message msg = new Message(player, "Hello " + player);
		return msg;
	}

	@Autowired
	UserService userService; // Service which will do all data retrieval/manipulation work

	// -------------------Retrieve All
	// Users--------------------------------------------------------

/*	@RequestMapping(value = "/user/", method = RequestMethod.GET)
	public ResponseEntity<List<User>> listAllUsers() {
		List<User> users = userService.findAllUsers();
		if (users.isEmpty()) {
			return new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);// You many decide to return
																			// HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}*/

	// -------------------Retrieve Single
	// User--------------------------------------------------------

	/*@RequestMapping(value = "/user/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> getUser(@PathVariable("id") long id) {
		System.out.println("Fetching User with id .....................................fff.................." + id);
		User user = userService.findById(id);
		if (user == null) {
			System.out.println("User with id " + id + " not found");
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}*/

	// -------------------Create a
	// User--------------------------------------------------------

	/*@RequestMapping(value = "/user/", method = RequestMethod.POST)
	public ResponseEntity<Void> createUser(@RequestBody User user, UriComponentsBuilder ucBuilder) {
		System.out.println("Creating User " + user.getLastName());

		// if (userService.isUserExist(user)) {
		// System.out.println("A User with name " + user.getName() + " already exist");
		// return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		// }

		userService.saveUser(user);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/user/{id}").buildAndExpand(user.getId()).toUri());
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}*/

	// ------------------- Update a User
	// --------------------------------------------------------

/*	@RequestMapping(value = "/user/{id}", method = RequestMethod.PUT)
	public ResponseEntity<User> updateUser(@PathVariable("id") long id, @RequestBody User user) {
		System.out.println("Updating User " + id);

		User currentUser = userService.findById(id);

		if (currentUser == null) {
			System.out.println("User with id " + id + " not found");
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}

		currentUser.setFirstName(user.getFirstName());
		currentUser.setLastName(user.getLastName());
		currentUser.setEmail(user.getEmail());

		userService.updateUser(currentUser);
		return new ResponseEntity<User>(currentUser, HttpStatus.OK);
	}*/

	// ------------------- Delete a User
	// --------------------------------------------------------

/*	@RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<User> deleteUser(@PathVariable("id") int id) {
		System.out.println("Fetching & Deleting User with id " + id);

		User user = userService.findById(id);
		if (user == null) {
			System.out.println("Unable to delete. User with id " + id + " not found");
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}

		userService.deleteUserBySSO("" + id);
		return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
	}*/

	// ------------------- Delete All Users
	// --------------------------------------------------------

	/*@RequestMapping(value = "/user/", method = RequestMethod.DELETE)
	public ResponseEntity<User> deleteAllUsers() {
		System.out.println("Deleting All Users");

		userService.findAllUsers();
		return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
	}*/

	private ViewTabDto convertToDto(ViewTab post) {

		ViewTabDto postDto = modelMapper.map(post, ViewTabDto.class);

		return postDto;
	}

	private ViewTreeDto convertToTreeviewDto(ViewTree viewtree) {

		ViewTreeDto viewTreeDto = modelMapper.map(viewtree, ViewTreeDto.class);

		return viewTreeDto;
	}

	private ViewTabDto convertToTabviewDto(ViewTab post) {

		ViewTabDto postDto = modelMapper.map(post, ViewTabDto.class);

		return postDto;
	}

	private ProdDocDto convertToProdDocDto(ProdDoc prodDoc) {

		ProdDocDto prodDocDto = modelMapper.map(prodDoc, ProdDocDto.class);

		return prodDocDto;
	}

	private String convertToXMLFolderDto(ViewTabDto viewTabDto) {

		String xmlString = null;
		JAXBContext context;
		try {
			context = JAXBContext.newInstance(com.masoda.clickndoc.dto.Parentfolder.class);
			Marshaller m = context.createMarshaller();
			m.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, Boolean.TRUE);
			Parentfolder parentFolder = new Parentfolder();
			parentFolder.setCode("$TAB$" + viewTabDto.getId().toString().trim());
			parentFolder.setLabel(viewTabDto.getLabel());
			Folder childfolder = null;
			List<ViewTreeDto> viewTrees = viewTabDto.getViewTrees();
			if (viewTrees.size() > 0) {
				Comparator<ViewTreeDto> c = (s1, s2) -> s1.getPath().compareTo(s2.getPath());
				viewTrees.sort(c);
				for (ViewTreeDto viewTree : viewTrees) {
					if (viewTree.getNodeType() == 1 && viewTree.getLevel() == 0) {
						childfolder = new Folder();
						childfolder.setCode(
								"$DIR$" + viewTabDto.getId() + "$" + viewTree.getId().getNodeId().toString().trim());
						childfolder.setLabel(viewTree.getLabel());
						childfolder.setDescription(viewTree.getDescription());
						parentFolder.getFolder().add(childfolder);
					} else {
						com.masoda.clickndoc.dto.Parentfolder.Folder.Document document = new com.masoda.clickndoc.dto.Parentfolder.Folder.Document();
						document.setCode(viewTree.getDocumentCode());
						document.setLabel(viewTree.getLabel());
						document.setDescription(viewTree.getDescription());
						document.setComposite("false");
						document.setMultiRecipient("false");
						document.setPreview("true");
						document.setTemplateInfos(null);
						childfolder.getDocument().add(document);
					}
				}
			}
			java.io.StringWriter sw = new StringWriter();
			m.marshal(parentFolder, sw);
			xmlString = sw.toString().replaceAll("\\<\\?xml(.+?)\\?\\>", "").replace("parentfolder", "folder").trim();

		} catch (JAXBException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return xmlString;
	}

	private XMLImageListDto convertXMLToImageObject(String xml) throws Exception {

		// System.out.println(xml);
		JAXBContext jaxbContext = JAXBContext.newInstance(XMLImageListDto.class);
		Marshaller m = jaxbContext.createMarshaller();

		// JAXBContext jaxbContext = JAXBContext.newInstance(XMLImageListDto.class);
		Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();

		StringReader reader = new StringReader(xml);
		StreamSource source = new StreamSource(reader);
		// unmarshaller.unmarshal(source, XMLImageListDto.class).getValue();
		XMLImageListDto xmlImageListDto = unmarshaller.unmarshal(source, XMLImageListDto.class).getValue();
		// java.io.StringWriter sw = new StringWriter();
		// m.marshal(xmlImageListDto, sw);
		// System.out.println("test :"+sw.toString());

		return xmlImageListDto;
	}

	public List<ProdDocInfoDto> populateProdDocInfoDto(List<ProdDoc> prodDocs) {
		List<ProdDocInfoDto> prodDocInfoDtos = new <ProdDocInfoDto>ArrayList();
		for (ProdDoc prodDoc : prodDocs) {

			ProdDocInfoDto prodDocInfoDto = new ProdDocInfoDto();
			prodDocInfoDto.setProductionId(prodDoc.getId().getProdVersion());
			prodDocInfoDto.setProductionVersion(prodDoc.getId().getProdVersion());
			prodDocInfoDto.setProductionDescription("" + prodDoc.getDescProd());
			prodDocInfoDto.setProductionLabel(prodDoc.getLbProd());
			prodDocInfoDto.setCreatorCode(prodDoc.getIdUserCreat());
			prodDocInfoDto.setPreview(prodDoc.getFlDocProducted());
			prodDocInfoDto.setDocumentCode(prodDoc.getCdDocument());
			prodDocInfoDtos.add(prodDocInfoDto);
		}
		return prodDocInfoDtos;

	}

	public String getCharacterDataFromElement(String xml) throws Exception {

		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		DocumentBuilder builder = factory.newDocumentBuilder();
		InputSource is = new InputSource(new StringReader(xml));
		Document doc = builder.parse(is);

		doc.getDocumentElement().normalize();
		String rootNode = doc.getDocumentElement().getNodeName();
		NodeList bookslist = doc.getElementsByTagName(rootNode);
		Node line = ((Element) bookslist.item(0)).getElementsByTagName("data").item(0).getChildNodes().item(0);
		CharacterData cd = (CharacterData) line;
		System.out.println(cd.getOwnerDocument());
		// item(0).getChildNodes().item(0).);
		// System.out.println(doc.getChildNodes().item(0).getNodeValue());
//		    NodeList nodes = doc.getElementsByTagName("data");
//		    System.out.println(""+doc.getElementsByTagName("data").item(0). .getTextContent());
//		    for (int i = 0; i < nodes.getLength(); i++) {
//		        Element element = (Element) nodes.item(i);
//		        NodeList title = element.getElementsByTagName("data");
//		        System.out.println("ste"+element.getNodeValue());
//		        Node line = (Element) title.item(0);
//		        System.out.println(line.getNodeName());
//		        if (line instanceof CharacterData) {
//		            CharacterData cd = (CharacterData) line;
//		            return cd.getData();
//		          }
//		      }
//		    

		return cd.getData();
	}

	public static String getTagValue(String xml, String tagName) {
		return xml.split("<" + tagName + ">")[1].split("</" + tagName + ">")[0];
	}

	
	@RequestMapping(path = "/create-document")
	public String create() {// Welcome page, non-rest
		return "Welcome to ClickNDOc.";
	}

}

