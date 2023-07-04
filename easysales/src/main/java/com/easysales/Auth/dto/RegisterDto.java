package com.easysales.Auth.dto;

import com.easysales.constants.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterDto {
    private String nomeEmp;
    private String emailEmp;
    private String sennhaEmp;
    private Role role;
}
