package cl.cionados.Level_Up_Gamer_SpringBoot.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String correo;
    private String password;
}
