package cl.cionados.Level_Up_Gamer_SpringBoot.service;

import cl.cionados.Level_Up_Gamer_SpringBoot.model.Noticia;
import cl.cionados.Level_Up_Gamer_SpringBoot.repository.NoticiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoticiaService {
    @Autowired
    private NoticiaRepository noticiaRepository;

    public List<Noticia> findAll(){
        return noticiaRepository.findAll();
    }
    public Optional<Noticia> findById(long id){
        return noticiaRepository.findById(id);
    }
    public Noticia save(Noticia noticia){
        return noticiaRepository.save(noticia);
    }
    public void deleteById(long id){
        noticiaRepository.deleteById(id);
    }
}
