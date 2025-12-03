package cl.cionados.Level_Up_Gamer_SpringBoot.controller;

import cl.cionados.Level_Up_Gamer_SpringBoot.model.Noticia;
import cl.cionados.Level_Up_Gamer_SpringBoot.service.NoticiaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("api/v1/noticias")
@Tag(name = "noticias", description = "Operaciones sobre noticias")
public class NoticiaController {
    @Autowired
    private NoticiaService noticiaService;
    
    @GetMapping
    @Operation(summary = "Obtener todas las noticias", description = "Obtiene una lista de todas las noticias")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Operación exitosa"),
            @ApiResponse(responseCode = "404", description = "noticia no encontrado")
    })
    public ResponseEntity<List<Noticia>> getAll() {
        return ResponseEntity.ok(noticiaService.findAll());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Obtener noticia", description = "Obtiene una noticia a traves del ID")
    @Parameter(description = "Id del noticia", required = true, name = "id")
    public ResponseEntity<Optional<Noticia>> getById(@PathVariable int id) {
        return ResponseEntity.ok(noticiaService.findById(id));
    }

    @PostMapping
    @Operation(summary = "Crea una nueva noticia", description = "Crea una noticia a traves de un objeto JSON")
    public ResponseEntity<Noticia> save(@RequestBody Noticia noticia) {
        Noticia newnoticia = noticiaService.save(noticia);
        return new ResponseEntity<>(newnoticia, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Borra una noticia", description = "Borra una noticia a traves del ID")
    public ResponseEntity<Void> deleteById(@PathVariable int id) {
        noticiaService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    @Operation(summary = "actualizar una noticia", description = "Actualizar una noticia")
    public ResponseEntity<Noticia> actualizarnoticia(@PathVariable Integer id, @RequestBody Noticia noticia) {
        return noticiaService.findById(id)
                .map(news -> {
                    news.setTitulo(noticia.getTitulo());
                    news.setDescripcion(noticia.getDescripcion());
                    news.setImagen(noticia.getImagen());
                    noticiaService.save(news);
                    return ResponseEntity.ok(news);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
