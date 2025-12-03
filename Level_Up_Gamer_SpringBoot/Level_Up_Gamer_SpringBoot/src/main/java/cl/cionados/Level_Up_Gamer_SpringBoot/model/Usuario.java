package cl.cionados.Level_Up_Gamer_SpringBoot.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column (length = 8)
    private int rut;
    @Column(length = 50)
    private String nombre;
    @Column(length = 50)
    private String apellido;
    @Column(unique = true, length = 100)
    private String correo;
    @Column(length = 255)
    private String password;
    @Column(length = 100)
    private String comuna;
    private LocalDate fechaNacimiento;
    @Column(length = 30)
    private String tipoUsuario;

}
