package com.masoda.clickndoc.dao;


import java.sql.Clob;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projection;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.Transformers;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.masoda.clickndoc.dto.ProdDocDto;
import com.masoda.clickndoc.dto.ProdDocInfoDto;
import com.masoda.clickndoc.dto.ProdDocKey;
import com.masoda.clickndoc.model.ProdDoc;
import com.masoda.clickndoc.model.ProdDocPK;
import com.masoda.clickndoc.model.ProdDocument;
import com.masoda.clickndoc.model.ViewTree;
;



@Repository("prodDocDao")
public class ProdDocDaoImpl extends AbstractDao<ProdDocPK, ProdDoc> implements ProdDocDao {
	
	@Autowired
	private SessionFactory sessionfactory;

	static final Logger logger = LoggerFactory.getLogger(ProdDocDao.class);
	

	public ProdDoc findByCdDocument(String cdDocument) {
		logger.info("cdDocument : {}", cdDocument);
		Criteria crit = createEntityCriteria();
		crit.add(Restrictions.eq("cdDocument", cdDocument));
		ProdDoc prodDoc = (ProdDoc)crit.uniqueResult();
		return prodDoc;
	}

	public List<ProdDoc> findAllProdDocs() {
		Criteria criteria = createEntityCriteria().addOrder(Order.asc("cdDocument"));
		criteria.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);//To avoid duplicates.
		List<ProdDoc> prodDocs = (List<ProdDoc>) criteria.list();
		return prodDocs;
	}

	public ProdDoc findById(ProdDocPK pk) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ProdDocInfoDto> findByCdDocumentList(List<String> cdDocumentList) {
		logger.info("cdDocumentList : {}", cdDocumentList);
		
		Criteria criteria = createEntityCriteria().setProjection( Projections.projectionList()
				.add( Projections.property("id.idProdDoc"), "productionId" )
				.add( Projections.property("id.prodVersion"), "productionVersion" )
				.add( Projections.property("cdDocument"), "documentCode" )
				.add( Projections.property("lbProd"), "productionLabel" )
				.add( Projections.property("descProd"), "productionDescription" )
				.add( Projections.property("tyDocument"), "tyDocument" )
				.add( Projections.property("dtProdCreat"), "created" )
				.add( Projections.property("dtProdModif"), "updated" )
				.add( Projections.property("dtFusion"), "dtFusion" )
				.add( Projections.property("idUserCreat"), "creatorCode" )
				.add( Projections.property("idUserModif"), "idUserModif" )
				.add( Projections.property("idJeusaisie"), "idJeusaisie" )
				.add( Projections.property("etatProd"), "etatProd" )
				.add( Projections.property("cdGroupe"), "cdGroupe" )
				.add( Projections.property("flDocProducted"), "flDocProducted" )
				.add( Projections.property("flProdDeleted"), "flProdDeleted" )
				.add( Projections.property("flDocPreview"), "preview" ))
				.add(Restrictions.in("cdDocument", cdDocumentList))
				.addOrder(Order.desc("cdDocument"))
				.addOrder(Order.desc("dtProdModif"))
				.setResultTransformer(Transformers.aliasToBean(ProdDocInfoDto.class));
		List<ProdDocInfoDto> prodDocs = criteria.list();
		return prodDocs;
	
		
		
	}

	@Override
	public ProdDocDto findByIdAndVersion(Integer id, Integer version) {
		logger.info("id : {}", id);
		
		Criteria criteria = createEntityCriteria().setProjection( Projections.projectionList()
				.add( Projections.property("id.idProdDoc"), "productionId" )
				.add( Projections.property("id.prodVersion"), "productionVersion" )
				.add( Projections.property("lbProd"), "lbProd" )
				.add( Projections.property("descProd"), "descProd" )
				.add( Projections.property("cdDocument"), "cdDocument" )
				.add( Projections.property("tyDocument"), "tyDocument" )
				.add( Projections.property("dtProdCreat"), "dtProdCreat" )
				.add( Projections.property("dtProdModif"), "dtProdModif" )
				.add( Projections.property("dtFusion"), "dtFusion" )
				.add( Projections.property("dtValidation"), "dtValidation" )
				.add( Projections.property("idUserCreat"), "idUserCreat" )
				.add( Projections.property("idUserModif"), "idUserModif" )
				.add( Projections.property("dataXml"), "dataXml" )
				.add( Projections.property("dataSize"), "dataSize" )
				.add( Projections.property("dataCrc"), "dataCrc" )
				.add( Projections.property("idJeusaisie"), "idJeusaisie" )
				.add( Projections.property("etatProd"), "etatProd" )
				.add( Projections.property("cdGroupe"), "cdGroupe" )
				.add( Projections.property("flDocProducted"), "flDocProducted" )
				.add( Projections.property("flProdValidated"), "flProdValidated" )
				.add( Projections.property("flProdDeleted"), "flProdDeleted" )
				.add( Projections.property("flDocPreview"), "flDocPreview" ))
				.add(Restrictions.eq("id.idProdDoc", id))
				.add(Restrictions.eq("id.prodVersion", version))
				.setResultTransformer(Transformers.aliasToBean(ProdDocDto.class));
				ProdDocDto prodDocDto=(ProdDocDto) criteria.uniqueResult();
				return prodDocDto;
		
	}

	@Override
	@Transactional
	public List<ProdDocument> findDocument() {
		Query query = sessionfactory.getCurrentSession().createQuery("FROM ProdDocument");
		List<ProdDocument> modules = query.list();	
		if (query.list().size() > 0) {
			return modules;
		}

		return null;
	}

	



	
}
