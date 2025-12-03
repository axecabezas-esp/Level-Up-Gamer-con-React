package cl.cionados.Level_Up_Gamer_SpringBoot.service;


import cl.cionados.Level_Up_Gamer_SpringBoot.model.Producto;
import cl.cionados.Level_Up_Gamer_SpringBoot.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {
    @Autowired
    private ProductoRepository productoRepository;

    public List<Producto> findAll(){
        return productoRepository.findAll();
    }
    public Optional<Producto> findById(long id){
        return productoRepository.findById(id);
    }
    public Producto save(Producto producto){
        return productoRepository.save(producto);
    }
    public void deleteById(long id){
        productoRepository.deleteById(id);
    }
//    public Producto findByCorreo(String correo){return productoRepository.findByCorreo(correo)};

}
