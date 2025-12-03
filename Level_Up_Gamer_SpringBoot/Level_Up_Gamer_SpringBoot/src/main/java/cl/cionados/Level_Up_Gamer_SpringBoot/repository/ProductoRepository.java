package cl.cionados.Level_Up_Gamer_SpringBoot.repository;

import cl.cionados.Level_Up_Gamer_SpringBoot.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Producto,Long> {
}
