package cl.cionados.Level_Up_Gamer_SpringBoot.controller;

import cl.cionados.Level_Up_Gamer_SpringBoot.model.Producto;
import cl.cionados.Level_Up_Gamer_SpringBoot.model.Usuario;
import cl.cionados.Level_Up_Gamer_SpringBoot.service.ProductoService;
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
@RequestMapping("api/v1/productos")
@Tag(name = "productos", description = "Operaciones sobre productos")
public class ProductoController {
    @Autowired
    ProductoService productoService;

    @GetMapping
    @Operation(summary = "Obtener todos los productos", description = "Obtiene una lista de todos los productos")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Operación exitosa"),
            @ApiResponse(responseCode = "404", description = "producto no encontrado")
    })
    public ResponseEntity<List<Producto>> getAll() {
        return ResponseEntity.ok(productoService.findAll());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Obtener producto", description = "Obtiene un producto a traves del ID")
    @Parameter(description = "Id del producto", required = true, name = "id")
    public ResponseEntity<Optional<Producto>> getById(@PathVariable int id) {
        return ResponseEntity.ok(productoService.findById(id));
    }

    @PostMapping
    @Operation(summary = "Crea un nuevo producto", description = "Crea un producto a traves de un objeto JSON")
    public ResponseEntity<Producto> save(@RequestBody Producto producto) {
        Producto newProducto = productoService.save(producto);
        return new ResponseEntity<>(newProducto, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Borra un producto", description = "Borra un producto a traves del ID")
    public ResponseEntity<Void> deleteById(@PathVariable int id) {
        productoService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    @Operation(summary = "actualizar un producto", description = "Actualizar los datos de un producto registrado.")
    public ResponseEntity<Producto> actualizarProducto(@PathVariable Integer id, @RequestBody Producto producto) {
        return productoService.findById(id)
                .map(product -> {
                    product.setTitle(producto.getTitle());
                    product.setCategory(producto.getCategory());
                    product.setDescription(producto.getDescription());
                    product.setPrice(producto.getPrice());
                    product.setImageSrc(producto.getImageSrc());
                    productoService.save(product);
                    return ResponseEntity.ok(product);
                })
                .orElse(ResponseEntity.notFound().build());
    }

}
