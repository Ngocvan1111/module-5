package com.example.sapi.controller;

import com.example.sapi.model.Consignment;
import com.example.sapi.service.IConsignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/Consignment")
public class ResConsignmentController {
    @Autowired
    private IConsignmentService iConsignmentService;
    @GetMapping("list")
    public ResponseEntity<Page<Consignment>> getList(@PageableDefault(page = 0, size = 2)Pageable pageable){
        Page<Consignment> consignmentList = iConsignmentService.findAll(pageable);
        if(consignmentList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(consignmentList, HttpStatus.OK);
    }
}
