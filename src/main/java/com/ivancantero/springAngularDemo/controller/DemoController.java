package com.ivancantero.springAngularDemo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("demo")
public class DemoController {

    @GetMapping
    public String getValorRandom() {
        return UUID.randomUUID().toString();
    }
}
