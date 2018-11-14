package com.masoda.clickndoc.dao;


import java.sql.Clob;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projection;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.Transformers;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.masoda.clickndoc.dto.ClickndocDocumentDto;
import com.masoda.clickndoc.dto.ProdDocDto;
import com.masoda.clickndoc.dto.ProdDocInfoDto;
import com.masoda.clickndoc.dto.ProdDocKey;
import com.masoda.clickndoc.model.ClickndocDocument;
import com.masoda.clickndoc.model.ClickndocDocumentPK;
import com.masoda.clickndoc.model.ProdDoc;
import com.masoda.clickndoc.model.ProdDocPK;
;



@Repository("clickndocDocumentDao")
public class ClickndocDocumentDaoImpl extends AbstractDao<ClickndocDocumentPK, ClickndocDocument> implements ClickndocDocumentDao {

	static final Logger logger = LoggerFactory.getLogger(ClickndocDocumentDao.class);
	

	@Override
	public ClickndocDocumentDto findDocumentsHTMByCdDocument(String documentCode) {

		Criterion restrictiontyTemplate= Restrictions.or(Restrictions.eq("tyTemplate", 1),Restrictions.eq("tyTemplate", 2),
				Restrictions.eq("tyTemplate", 3));
		Criterion restrictiontyRessource= Restrictions.or(Restrictions.eq("tyRessource", 4));
	
		Criteria criteria = createEntityCriteria().setProjection( Projections.projectionList()
				.add( Projections.property("id.cdDocument"), "cdDocument" )
				.add( Projections.property("id.tyDocument"), "tyDocument" )
				.add( Projections.property("id.tyFichier"), "tyFichier" )
				.add( Projections.property("id.tyDocument"), "tyDocument" )
				.add( Projections.property("dtMaj"), "dtMaj" )
				.add( Projections.property("data"), "data" )
				.add( Projections.property("tyTemplate"), "tyTemplate" )
				.add( Projections.property("tyRessource"), "tyRessource"))
				.add(Restrictions.and(restrictiontyTemplate, restrictiontyRessource,Restrictions.eq("id.cdDocument", documentCode)))
				.setResultTransformer(Transformers.aliasToBean(ClickndocDocumentDto.class));
		ClickndocDocumentDto clickndocDocumentDto=(ClickndocDocumentDto) criteria.uniqueResult();
		//System.out.println(clickndocDocumentDto.getDtMaj());
		return clickndocDocumentDto;
	}

	



	
}
