package com.roiland.simulator.controller.restful;

import com.roiland.simulator.dto.ProtocolDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;


/**
 * User: jeffy
 * Date: 13-9-4
 * Time: 下午9:39
 */
@Controller
public class ProtocolController {

    private static final Logger logger = LoggerFactory.getLogger(ProtocolController.class);

    @RequestMapping(value = "/protocol/list", method = RequestMethod.GET)
    @ResponseBody
    public List<ProtocolDTO> findAll() {
        List<ProtocolDTO> protocols = new ArrayList<ProtocolDTO>();
        ProtocolDTO protocol = new ProtocolDTO();
        protocol.setId("1");
        protocol.setType("发送");
        protocol.setValue("0210");
        protocols.add(protocol);
        return protocols;
    }
}
