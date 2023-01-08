package com.example.sapi.service;

import com.example.sapi.model.Consignment;
import com.example.sapi.repository.IConsignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ConsignmentService implements IConsignmentService {
    @Autowired
    private IConsignmentRepository iConsignmentRepository;
    @Override
    public Page<Consignment> findAll(Pageable pageable){
        return iConsignmentRepository.findAll(pageable);
    }
}
