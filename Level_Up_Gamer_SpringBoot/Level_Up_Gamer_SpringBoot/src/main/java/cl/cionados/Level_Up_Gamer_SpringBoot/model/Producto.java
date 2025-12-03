package cl.cionados.Level_Up_Gamer_SpringBoot.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(length = 50)
    private  String title;
    @Column(length = 200)
    private String description;
    @Column(length = 50)
    private String category;
    @Column(length = 50)
    private int price;
    @Column(length = 200)
    private String imageSrc;
}
