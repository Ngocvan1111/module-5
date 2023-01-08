package com.example.service.dto;

import com.example.service.model.Product;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ConsignmentDto {
    private Long id;
    @NotEmpty(message = "Không được để trống")
    @NotBlank(message = "Không được để trống")
    @Pattern(regexp = "^LH-[0-9]{4}'", message = "Code phải đúng định dạng ")
    private String code;
    @NotEmpty(message = "Không được để trống")
    private Product product;
    @NotEmpty(message = "Không được để trống")
    private Long amountProduct;
    @NotEmpty(message = "Không được để trống")
    private String importDate;
    @NotEmpty(message = "Không được để trống")
    private String dateOfManufacture;
    @NotEmpty(message = "Không được để trống")
    private String expirationDate;
}
