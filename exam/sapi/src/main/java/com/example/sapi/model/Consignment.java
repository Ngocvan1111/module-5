package com.example.sapi.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Consignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String code;
    @ManyToOne()
    private Product product;
    private Long amountProduct;
    @Column(columnDefinition = "date")
    private String importDate;
    @Column(columnDefinition = "date")
    private String dateOfManufacture;
    @Column(columnDefinition = "date")
    private String expirationDate;
}
