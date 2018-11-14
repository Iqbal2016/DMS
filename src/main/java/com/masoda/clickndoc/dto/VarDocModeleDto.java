package com.masoda.clickndoc.dto;


import java.io.Serializable;
import java.util.Objects;

//import com.google.common.base.Objects;


public class VarDocModeleDto
implements Serializable {
    private static final long serialVersionUID = 1L;
    public static final int CONTROL_TYPE_AUTO = 0;
    public static final int CONTROL_TYPE_TEXT_AREA = 3;
    public static final int CONTROL_TYPE_RADIO_GROUP = 7;
    public static final int CONTROL_TYPE_SINGLE_CHECKBOX = 9;
    public static final int CONTROL_TYPE_MULTIPLE_SELECT = 10;
    public static final int CONTROL_TYPE_SIGNATURE = 11;
    public static final int CONTROL_TYPE_DATE_SELECT = 13;
    public static final int CONTROL_TYPE_INFORMATION = 14;
    public static final int CONTROL_TYPE_HIDDEN = 15;
    public static final int CONTROL_TYPE_SWITCH = 16;
    public static final int CONTROL_TYPE_RADIO_GROUP_INLINE = 17;
    public static final int CONTROL_TYPE_SEGMENTED = 18;
    public static final int CONTROL_TYPE_LABEL = 19;
    public static final int CONTROL_TYPE_SECTION = 20;
    public static final int CONTROL_TYPE_SUBSECTION = 21;
    private VarDocModeleKeyDto id;
    private Integer noOrdre;
    private Short idTypeVar;
    private String cdVar;
    private String cdQuery;
    private String cdColonne;
    private Short flLienSaisi;
    private Short flObligatoire;
    private Short flPresRef;
    private Short flGroupe;
    private String cdGroupe;
    private Integer noOrdre2;
    private String lbVar;
    private String lbVarCourt;
    private String ftEdition;
    private String ftSaisie;
    private Short idTypeDonnee;
    private Short composantSaisie;
    private String valMin;
    private String valMax;
    private Short lgVar;
    private Short flMultiOccur;
    private Short flOccUnique;
    private String valDef;
    private byte[] ttVar;
    private Short flLectureSeule;
    private String cdQueryXml;
    private String cdDatasrcXml;
    private String xmlPath;
    private String cdInstanceClause;
    private String cdVarClause;
    private Short flParam;
    private Short flCanAddLines;
    private Short flCanDelLines;
    private Integer flVarFusion;
    private Integer flSaveValue;
    private Short flVisible;
    public static int b;

    public VarDocModeleDto() {
    }

    public VarDocModeleDto(VarDocModeleKeyDto varDocModeleKey) {
        this.id = varDocModeleKey;
    }

    public  boolean isControlType(int ... arrn) {
        int n = b;
        int[] arrn2 = arrn;
        int n2 = arrn2.length;
        int n3 = 0;
        do {
            if (n3 >= n2) return false;
            int n4 = arrn2[n3];
            if (n != 0) continue;
            boolean bl = true; // error solved  la.a((Short)this.getComposantSaisie(), (int)n4)
            if (n != 0) return bl;
            if (bl) {
                return true;
            }
            ++n3;
        } while (n == 0);
        return false;
    }

    public String getText() {
        if (this.getTtVar() == null) return null;
        return new String(this.getTtVar()); // error solved  return new String(this.getTtVar(), kR.d);
    }

    public VarDocModeleKeyDto getId() {
        return this.id;
    }

    public void setId(VarDocModeleKeyDto varDocModeleKey) {
        this.id = varDocModeleKey;
    }

    public Integer getNoOrdre() {
        return this.noOrdre;
    }

    public void setNoOrdre(Integer n) {
        this.noOrdre = n;
    }

    public Short getIdTypeVar() {
        return this.idTypeVar;
    }

    public void setIdTypeVar(Short s) {
        this.idTypeVar = s;
    }

    public String getCdVar() {
        return this.cdVar;
    }

    public void setCdVar(String string) {
        this.cdVar = string;
    }

    public String getCdQuery() {
        return this.cdQuery;
    }

    public void setCdQuery(String string) {
        this.cdQuery = string;
    }

    public String getCdColonne() {
        return this.cdColonne;
    }

    public void setCdColonne(String string) {
        this.cdColonne = string;
    }

    public Short getFlLienSaisi() {
        return this.flLienSaisi;
    }

    public void setFlLienSaisi(Short s) {
        this.flLienSaisi = s;
    }

    public Short getFlObligatoire() {
        return this.flObligatoire;
    }

    public void setFlObligatoire(Short s) {
        this.flObligatoire = s;
    }

    public Short getFlPresRef() {
        return this.flPresRef;
    }

    public void setFlPresRef(Short s) {
        this.flPresRef = s;
    }

    public Short getFlGroupe() {
        return this.flGroupe;
    }

    public void setFlGroupe(Short s) {
        this.flGroupe = s;
    }

    public String getCdGroupe() {
        return this.cdGroupe;
    }

    public void setCdGroupe(String string) {
        this.cdGroupe = string;
    }

    public Integer getNoOrdre2() {
        return this.noOrdre2;
    }

    public void setNoOrdre2(Integer n) {
        this.noOrdre2 = n;
    }

    public String getLbVar() {
        return this.lbVar;
    }

    public void setLbVar(String string) {
        this.lbVar = string;
    }

    public String getLbVarCourt() {
        return this.lbVarCourt;
    }

    public void setLbVarCourt(String string) {
        this.lbVarCourt = string;
    }

    public String getFtEdition() {
        return this.ftEdition;
    }

    public void setFtEdition(String string) {
        this.ftEdition = string;
    }

    public String getFtSaisie() {
        return this.ftSaisie;
    }

    public void setFtSaisie(String string) {
        this.ftSaisie = string;
    }

    public Short getComposantSaisie() {
        return this.composantSaisie;
    }

    public void setComposantSaisie(Short s) {
        this.composantSaisie = s;
    }

    public Short getIdTypeDonnee() {
        return this.idTypeDonnee;
    }

    public void setIdTypeDonnee(Short s) {
        this.idTypeDonnee = s;
    }

    public String getValMin() {
        return this.valMin;
    }

    public void setValMin(String string) {
        this.valMin = string;
    }

    public String getValMax() {
        return this.valMax;
    }

    public void setValMax(String string) {
        this.valMax = string;
    }

    public Short getLgVar() {
        return this.lgVar;
    }

    public void setLgVar(Short s) {
        this.lgVar = s;
    }

    public Short getFlMultiOccur() {
        return this.flMultiOccur;
    }

    public void setFlMultiOccur(Short s) {
        this.flMultiOccur = s;
    }

    public Short getFlOccUnique() {
        return this.flOccUnique;
    }

    public void setFlOccUnique(Short s) {
        this.flOccUnique = s;
    }

    public String getValDef() {
        return this.valDef;
    }

    public void setValDef(String string) {
        this.valDef = string;
    }

    public byte[] getTtVar() {
        return this.ttVar;
    }

    public void setTtVar(byte[] arrby) {
        this.ttVar = arrby;
    }

    public Short getFlLectureSeule() {
        return this.flLectureSeule;
    }

    public void setFlLectureSeule(Short s) {
        this.flLectureSeule = s;
    }

    public String getCdDatasrcXml() {
        return this.cdDatasrcXml;
    }

    public void setCdDatasrcXml(String string) {
        this.cdDatasrcXml = string;
    }

    public String getCdQueryXml() {
        return this.cdQueryXml;
    }

    public void setCdQueryXml(String string) {
        this.cdQueryXml = string;
    }

    public String getXmlPath() {
        return this.xmlPath;
    }

    public void setXmlPath(String string) {
        this.xmlPath = string;
    }

    public String getCdInstanceClause() {
        return this.cdInstanceClause;
    }

    public void setCdInstanceClause(String string) {
        this.cdInstanceClause = string;
    }

    public Short getFlParam() {
        return this.flParam;
    }

    public void setFlParam(Short s) {
        this.flParam = s;
    }

    public String getCdVarClause() {
        return this.cdVarClause;
    }

    public void setCdVarClause(String string) {
        this.cdVarClause = string;
    }

    public Short getFlCanAddLines() {
        return this.flCanAddLines;
    }

    public void setFlCanAddLines(Short s) {
        this.flCanAddLines = s;
    }

    public Short getFlCanDelLines() {
        return this.flCanDelLines;
    }

    public void setFlCanDelLines(Short s) {
        this.flCanDelLines = s;
    }

    public Integer getFlVarFusion() {
        return this.flVarFusion;
    }

    public void setFlVarFusion(Integer n) {
        this.flVarFusion = n;
    }

    public Integer getFlSaveValue() {
        return this.flSaveValue;
    }

    public void setFlSaveValue(Integer n) {
        this.flSaveValue = n;
    }

    public Short getFlVisible() {
        return this.flVisible;
    }

    public void setFlVisible(Short s) {
        this.flVisible = s;
    }

    public int hashCode() {
        return Objects.hashCode(new Object[]{this.id});
    }

    public boolean equals(Object object) {
        int n = b;
        if (object == null) {
            return false;
        }
        VarDocModeleDto varDocModele = this;
        if (n == 0) {
            if (varDocModele == object) {
                return true;
            }
            varDocModele = this;
        }
        Object object2 = varDocModele.getClass();
        if (n == 0) {
            if (object2 != object.getClass()) {
                return false;
            }
            object2 = object;
        }
        VarDocModeleDto varDocModele2 = (VarDocModeleDto)object2;
        return Objects.equals((Object)this.id, (Object)varDocModele2.id);
    }
}

