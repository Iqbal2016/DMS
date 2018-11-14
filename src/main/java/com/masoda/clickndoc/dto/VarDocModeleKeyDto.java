package com.masoda.clickndoc.dto;


import java.io.Serializable;
import java.util.Objects;
//import com.google.common.base.Objects;

public class VarDocModeleKeyDto implements Serializable {
    private static final long serialVersionUID = 1L;
    private String cdChamp;
    private String cdDocument;
    private String tyDocument;

    public String getCdChamp() {
        return this.cdChamp;
    }

    public void setCdChamp(String string) {
        this.cdChamp = string;
    }

    public String getCdDocument() {
        return this.cdDocument;
    }

    public void setCdDocument(String string) {
        this.cdDocument = string;
    }

    public String getTyDocument() {
        return this.tyDocument;
    }

    public void setTyDocument(String string) {
        this.tyDocument = string;
    }

    public int hashCode() {
        return Objects.hashCode(this.cdChamp);
    }

    public boolean equals(Object object) {
        int n = VarDocModeleDto.b;
        if (object == null) {
            return false;
        }
        VarDocModeleKeyDto varDocModeleKey = this;
        if (n == 0) {
            if (varDocModeleKey == object) {
                return true;
            }
            varDocModeleKey = this;
        }
        Object object2 = varDocModeleKey.getClass();
        if (n == 0) {
            if (object2 != object.getClass()) {
                return false;
            }
            object2 = object;
        }
        VarDocModeleKeyDto varDocModeleKey2 = (VarDocModeleKeyDto)object2;
        boolean bl = Objects.equals(this.cdChamp, varDocModeleKey2.cdChamp);
        if (n == 0) {
            if (!bl) return false;
            bl = Objects.equals(this.cdDocument, varDocModeleKey2.cdDocument);
        }
        if (n == 0) {
            if (!bl) return false;
            bl = Objects.equals(this.tyDocument, varDocModeleKey2.tyDocument);
        }
        if (n != 0) return bl;
        if (!bl) return false;
        return true;
    }
}

