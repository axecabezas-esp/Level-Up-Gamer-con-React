package cl.cionados.Level_Up_Gamer_SpringBoot.repository;

import cl.cionados.Level_Up_Gamer_SpringBoot.model.Noticia;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticiaRepository extends JpaRepository<Noticia,Long> {
}
