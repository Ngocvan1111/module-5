package com.example.service.service;

import com.example.service.model.Consignment;
import com.example.service.repository.IConsignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsignmentService implements IConsignmentService {
    @Autowired
    private IConsignmentRepository iConsignmentRepository;
    @Override
    public List<Consignment> findAll(){
        return iConsignmentRepository.findAll();
    }

    @Override
    public void save(Consignment consignment) {
        iConsignmentRepository.save(consignment);
    }

    @Override
    public void delete(Long id) {
        iConsignmentRepository.deleteById(id);
    }

    @Override
    public Consignment findById(Long id) {
        return iConsignmentRepository.findById(id).isPresent()?iConsignmentRepository.findById(id).get():null;
    }
}
