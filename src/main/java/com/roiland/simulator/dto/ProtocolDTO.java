package com.roiland.simulator.dto;

/**
 * User: jeffy
 * Date: 13-9-11
 * Time: 下午8:59
 */
public class ProtocolDTO {

    private String id;
    private String type;
    private String value;

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

    public String getId() {

        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
