package com.example.sapi.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String origin;
    private Double price;
    private String unit;
    @OneToMany(mappedBy = "product")
    private List<Consignment> consignments;


}
