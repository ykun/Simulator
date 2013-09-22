package com.roiland.simulator.core.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * User: jeffy
 * Date: 13-9-11
 * Time: 下午9:00
 */
@Document(collection = "attribute")
public class AttributeEntity {

    @Id
    private String id;

    private String type;

    private String value;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
