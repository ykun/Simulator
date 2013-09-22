package com.roiland.simulator.core.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Map;

/**
 * User: jeffy
 * Date: 13-9-11
 * Time: 下午9:00
 */
@Document(collection = "frame")
public class FrameEntity {

    @Id
    private String id;
    private String name;
    private Map<String, AttributeEntity> attributes = null;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Map<String, AttributeEntity> getAttributes() {
        return attributes;
    }

    public void setAttributes(Map<String, AttributeEntity> attributes) {
        this.attributes = attributes;
    }
}
