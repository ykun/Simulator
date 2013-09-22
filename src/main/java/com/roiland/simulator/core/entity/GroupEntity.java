package com.roiland.simulator.core.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

/**
 * User: jeffy
 * Date: 13-9-11
 * Time: 下午9:00
 */
@Document(collection = "group")
public class GroupEntity {

    @Id
    private String id;
    private String type = null;
    private FrameEntity frame = null;
    private List<String> keys = null;

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

    public FrameEntity getFrame() {
        return frame;
    }

    public void setFrame(FrameEntity frame) {
        this.frame = frame;
    }

    public List<String> getKeys() {
        return keys;
    }

    public void setKeys(List<String> keys) {
        this.keys = keys;
    }
}
