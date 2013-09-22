package com.roiland.simulator.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


/**
 * User: jeffy
 * Date: 13-9-4
 * Time: 下午9:39
 */
@Controller
public class ViewController {

    private static final Logger logger = LoggerFactory.getLogger(ViewController.class);

    @RequestMapping(value = "/")
    public String index() {
        logger.info("index page");
        return "index";
    }
}
