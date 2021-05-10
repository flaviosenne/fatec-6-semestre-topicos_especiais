package com.topicos.FazendoApi.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/saudacao")
public class SaudacaoController {

    @GetMapping(value = "/{name}")
    public String getMessage(@PathVariable(name = "name") String name){
        return "olá "+ name+ " seu doido";
    }
}
