package cl.cionados.Level_Up_Gamer_SpringBoot.service;

import cl.cionados.Level_Up_Gamer_SpringBoot.model.Usuario;
import cl.cionados.Level_Up_Gamer_SpringBoot.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> findAll(){
        return usuarioRepository.findAll();
    }
    public Optional<Usuario> findById(long id){
        return usuarioRepository.findById(id);
    }
    public Usuario save(Usuario usuario){
        return usuarioRepository.save(usuario);
    }
    public void deleteById(long id){
        usuarioRepository.deleteById(id);
    }
    public Usuario findByCorreo(String correo){
        return usuarioRepository.findByCorreo(correo);
    }
}
