package com.example.service.controller;

import com.example.service.model.Product;
import com.example.service.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/product")
public class ResProductController {
    @Autowired
    private IProductService iProductService;
    @GetMapping("list")
    public List<Product> getAll(){
        return iProductService.findAll();
    }

}
