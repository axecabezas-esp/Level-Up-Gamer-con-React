package cl.cionados.Level_Up_Gamer_SpringBoot.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.Length;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Noticia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(length = 100)
    private String titulo;
    @Column(length = 1000)
    private String descripcion;
    @Column(length = 200)
    private String imagen;
}
