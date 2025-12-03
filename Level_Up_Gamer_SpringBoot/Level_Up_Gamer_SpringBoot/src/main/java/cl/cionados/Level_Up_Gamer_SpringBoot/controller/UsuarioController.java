package cl.cionados.Level_Up_Gamer_SpringBoot.controller;

import cl.cionados.Level_Up_Gamer_SpringBoot.dto.LoginRequest;
import cl.cionados.Level_Up_Gamer_SpringBoot.model.Usuario;
import cl.cionados.Level_Up_Gamer_SpringBoot.security.JwtUtil;
import cl.cionados.Level_Up_Gamer_SpringBoot.service.UsuarioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("api/v1/usuarios")
@Tag(name = "Usuarios", description = "Operaciones sobre usuarios")
public class UsuarioController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @GetMapping
    @Operation(summary = "Obtener todos los usuarios",description = "Obtiene una lista de todos los usuarios")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Operación exitosa"),
            @ApiResponse(responseCode = "404", description = "Usuario no encontrado")
    })
    public ResponseEntity<List<Usuario>> getAll(){
        return ResponseEntity.ok(usuarioService.findAll());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Obtener usuario",description = "Obtiene un usuario a traves del ID")
    @Parameter(description = "Id del usuario", required = true, name = "id")
    public ResponseEntity<Optional<Usuario>> getById(@PathVariable int id){
        return ResponseEntity.ok(usuarioService.findById(id));
    }
    @PostMapping
    @Operation(summary = "Crea un nuevo usuario", description = "Crea un usuario a traves de un objeto JSON")
    public ResponseEntity<Usuario> save(@RequestBody Usuario usuario){
        //iniciamos encriptacion
        String passwordEncriptada = passwordEncoder.encode(usuario.getPassword());
        //en usuario, antes de insertarlo en la BD, actualizamos la password encriptada
        usuario.setPassword(passwordEncriptada);
        if (usuario.getTipoUsuario() == null){
            usuario.setTipoUsuario("usuario");
        }
        Usuario newUsuario = usuarioService.save(usuario);
        return new ResponseEntity<>(newUsuario, HttpStatus.CREATED);
    }
    @DeleteMapping("/{id}")
    @Operation(summary = "Borra un usuario", description = "Borra un usuario a traves del ID")
    public ResponseEntity<Void> deleteById(@PathVariable int id){
        usuarioService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/login")
    @Operation(summary = "login de usuario", description = "Iniciar con un usuario registrado")
    public  ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Usuario usuario = usuarioService.findByCorreo(request.getCorreo());

        if (usuario == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Correo no registrado");
        }

        boolean passwordOk = passwordEncoder.matches(
                request.getPassword(),
                usuario.getPassword()
        );

        if (!passwordOk) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Contraseña incorrecta");
        }

        String token = jwtUtil.generarToken(usuario);
        System.out.println(usuario);
        System.out.println(token);

        return ResponseEntity.ok(new HashMap() {{
            put("usuario", usuario);
            put("token", token);
        }});
    }

    @PutMapping("/{id}")
    @Operation(summary = "actualizar un usuario", description = "Actualizar los datos de un usuario registrado.")
    public ResponseEntity<Usuario> actualizarUsuario(@PathVariable Integer id, @RequestBody Usuario usuario) {
        String passwordEncriptada = passwordEncoder.encode(usuario.getPassword());
        return usuarioService.findById(id)
                .map(user -> {
                    user.setRut(usuario.getRut());
                    user.setNombre(usuario.getNombre());
                    user.setApellido(usuario.getApellido());
                    user.setCorreo(usuario.getCorreo());
                    user.setPassword(passwordEncriptada);
                    user.setComuna(usuario.getComuna());
                    user.setFechaNacimiento(usuario.getFechaNacimiento());
                    user.setTipoUsuario(usuario.getTipoUsuario());
                    usuarioService.save(user);
                    return ResponseEntity.ok(user);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
