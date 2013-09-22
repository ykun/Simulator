package com.roiland.simulator.core.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * User: jeffy
 * Date: 13-9-11
 * Time: 下午8:59
 */
@Document(collection = "protocol")
public class ProtocolEntity {

    @Id
    private String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
