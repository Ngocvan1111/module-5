package com.example.service.controller;

import com.example.service.dto.ConsignmentDto;
import com.example.service.model.Consignment;
import com.example.service.service.IConsignmentService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/Consignment")
public class ResConsignmentController {
    @Autowired
    private IConsignmentService iConsignmentService;
    @GetMapping("list")
    public ResponseEntity<List<Consignment>> getList(){
        List<Consignment> consignmentList = iConsignmentService.findAll();
        if(consignmentList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(consignmentList, HttpStatus.OK);
    }
    @PostMapping("list")
    public void addConsignment (@RequestBody ConsignmentDto consignmentDto, BindingResult bindingResult){
        if(!bindingResult.hasErrors()){
            Consignment consignment = Consignment.builder().build();
            BeanUtils.copyProperties(consignmentDto, consignment);
            iConsignmentService.save(consignment);
        }
    }
    @DeleteMapping("list/{id}")
    public void deleteConsignment(@PathVariable("id") Long id ){
        iConsignmentService.delete(id);
    }
    @GetMapping("list/{id}")
    public ResponseEntity<Consignment> getConsignment(@PathVariable("id") long id) {
        Consignment consignment = iConsignmentService.findById(id);
        if (consignment == null) {
            return new ResponseEntity<Consignment>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Consignment>(consignment, HttpStatus.OK);
    }
    @PutMapping("/list/{id}")
    public ResponseEntity<Consignment> updateUser(@PathVariable("id") long id, @RequestBody Consignment consignment) {
        Consignment currentConsignment = iConsignmentService.findById(id);
        if (currentConsignment==null) {
            System.out.println("User with id " + id + " not found");
            return new ResponseEntity<Consignment>(HttpStatus.NOT_FOUND);
        }
        iConsignmentService.save(consignment);
        return new ResponseEntity<Consignment>(currentConsignment, HttpStatus.OK);
    }
}
