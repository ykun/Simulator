package com.roiland.simulator.service;

import com.roiland.simulator.core.repository.AttributeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * User: jeffy
 * Date: 13-9-11
 * Time: 下午11:08
 */
@Service
public class AttributeService {

    @Autowired
    private AttributeRepository attributeRepository;

}
