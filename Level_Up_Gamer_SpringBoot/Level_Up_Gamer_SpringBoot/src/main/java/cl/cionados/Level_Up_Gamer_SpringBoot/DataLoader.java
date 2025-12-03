package cl.cionados.Level_Up_Gamer_SpringBoot;

import cl.cionados.Level_Up_Gamer_SpringBoot.model.Noticia;
import cl.cionados.Level_Up_Gamer_SpringBoot.model.Producto;
import cl.cionados.Level_Up_Gamer_SpringBoot.model.Usuario;
import cl.cionados.Level_Up_Gamer_SpringBoot.repository.NoticiaRepository;
import cl.cionados.Level_Up_Gamer_SpringBoot.repository.ProductoRepository;
import cl.cionados.Level_Up_Gamer_SpringBoot.repository.UsuarioRepository;
import cl.cionados.Level_Up_Gamer_SpringBoot.security.JwtUtil;
import net.datafaker.Faker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private ProductoRepository productoRepository;
    @Autowired
    private NoticiaRepository noticiaRepository;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        //Si la lista no esta vacia, no agregamos nada.
//        if (!usuarioRepository.findAll().isEmpty()) return;

        Faker faker = new Faker();
        //creamos x usuarios random
        int cantidad = 2; //cantidad de usuarios a crear


        for (int i = 0; i < cantidad; i++) {
            Usuario user = new Usuario();
            user.setRut(faker.number().numberBetween(1,99999999));
            user.setNombre(faker.name().firstName());
            user.setApellido(faker.name().lastName());
            user.setCorreo(user.getNombre().toLowerCase() + "." + user.getApellido().toLowerCase() + "@duoc.cl");
            user.setPassword(faker.internet().password(4,4));
            user.setComuna("PA");
            user.setFechaNacimiento(LocalDate.now().plusYears(faker.number().numberBetween(-40,-20)));
            usuarioRepository.save(user);
        }

        Usuario usuario = new Usuario();
        usuario.setRut(12345678);
        usuario.setNombre("Admin");
        usuario.setApellido("Admin");
        usuario.setCorreo("Admin@gmail.com");
        usuario.setPassword("123456");
        String passwordEncriptada = usuario.getPassword();
        passwordEncriptada = passwordEncoder.encode(usuario.getPassword());
        usuario.setPassword(passwordEncriptada);
        usuario.setTipoUsuario("Admin");
        usuario.setComuna("PA");
        usuarioRepository.save(usuario);


        Producto producto = new Producto();

        producto.setTitle("Play 5");
        producto.setDescription("Consola de última generación con SSD ultrarrápido");
        producto.setCategory("Consola");
        producto.setImageSrc("../public/img/ps5.png");
        producto.setPrice(699990);
        productoRepository.save(producto);

        Producto producto2 = new Producto();
        producto2.setTitle("Xbox Series X");
        producto2.setDescription("La consola más potente de Microsoft con 1 TB SSD y 4K nativo");
        producto2.setCategory("Consola");
        producto2.setImageSrc("/img/Xbox Series X.jpg");
        producto2.setPrice(649990);
        productoRepository.save(producto2);

// 3. Nintendo Switch OLED
        producto = new Producto();
        producto.setTitle("Nintendo Switch OLED");
        producto.setDescription("Versión con pantalla OLED vibrante y dock mejorado");
        producto.setCategory("Consola");
        producto.setImageSrc("/img/Nintendo Switch OLED.jpg");
        producto.setPrice(379990);
        productoRepository.save(producto);

// 4. PC Gamer ASUS ROG Strix
        producto = new Producto();
        producto.setTitle("PC Gamer ASUS ROG Strix");
        producto.setDescription("Potencia extrema para gaming competitivo y multitarea.");
        producto.setCategory("PC Gamer");
        producto.setImageSrc("/img/PC_Gamer_ASUS_ROG_Strix.png");
        producto.setPrice(2699990);
        productoRepository.save(producto);

// 5. MSI Trident X
        producto = new Producto();
        producto.setTitle("MSI Trident X");
        producto.setDescription("Compacta pero poderosa, con RTX 4070 Ti y refrigeración líquida.");
        producto.setCategory("PC Gamer");
        producto.setImageSrc("/img/MSI Trident X.png");
        producto.setPrice(2500000);
        productoRepository.save(producto);

// 6. HP Omen Obelisk
        producto = new Producto();
        producto.setTitle("HP Omen Obelisk");
        producto.setDescription("Diseño sobrio y rendimiento de alta gama para eSports.");
        producto.setCategory("PC Gamer");
        producto.setImageSrc("/img/HP Omen Obelisk.png");
        producto.setPrice(2109990);
        productoRepository.save(producto);

// 7. Mouse Logitech G502 HERO
        producto = new Producto();
        producto.setTitle("Mouse Logitech G502 HERO");
        producto.setDescription("Sensor óptico HERO 25K con precisión y ajuste de peso.");
        producto.setCategory("Periféricos");
        producto.setImageSrc("/img/mouse gamer logitech.webp");
        producto.setPrice(75990);
        productoRepository.save(producto);

// 8. Auriculares HyperX Cloud II
        producto = new Producto();
        producto.setTitle("Auriculares HyperX Cloud II");
        producto.setDescription("Audio envolvente 7.1 con micrófono desmontable.");
        producto.setCategory("Periféricos");
        producto.setImageSrc("/img/Auriculares HyperX Cloud II.png");
        producto.setPrice(89990);
        productoRepository.save(producto);

// 9. Controlador Xbox Series X
        producto = new Producto();
        producto.setTitle("Controlador Xbox Series X");
        producto.setDescription("Diseño ergonómico con respuesta háptica mejorada.");
        producto.setCategory("Periféricos");
        producto.setImageSrc("/img/Controlador Xbox Series X.png");
        producto.setPrice(89990);
        productoRepository.save(producto);

// 10. Mousepad Razer Goliathus Extended
        producto = new Producto();
        producto.setTitle("Mousepad Razer Goliathus Extended");
        producto.setDescription("Superficie RGB con iluminación personalizable.");
        producto.setCategory("Accesorios");
        producto.setImageSrc("/img/Mousepad Razer Goliathus Extended.jpg");
        producto.setPrice(99900);
        productoRepository.save(producto);

// 11. Silla Gamer Secretlab Titan
        producto = new Producto();
        producto.setTitle("Silla Gamer Secretlab Titan");
        producto.setDescription("Comodidad premium con soporte lumbar ajustable.");
        producto.setCategory("Accesorios");
        producto.setImageSrc("/img/Silla Gamer Secretlab Titan.png");
        producto.setPrice(549990);
        productoRepository.save(producto);

// 12. Polera Gamer Level-Up
        producto = new Producto();
        producto.setTitle("Polera Gamer Level-Up");
        producto.setDescription("Personalízala con tu gamer tag o diseño favorito.");
        producto.setCategory("Accesorios");
        producto.setImageSrc("/img/polera_level_up.webp");
        producto.setPrice(41990);
        productoRepository.save(producto);

// 13. Catan
        producto = new Producto();
        producto.setTitle("Catan");
        producto.setDescription("Estrategia y comercio para dominar la isla.");
        producto.setCategory("Juegos de Mesa");
        producto.setImageSrc("/img/catan.avif");
        producto.setPrice(34990);
        productoRepository.save(producto);

// 14. Carcassonne
        producto = new Producto();
        producto.setTitle("Carcassonne");
        producto.setDescription("Construye ciudades y caminos medievales con tus amigos.");
        producto.setCategory("Juegos de Mesa");
        producto.setImageSrc("/img/carcassonne juego de mesa.jpg");
        producto.setPrice(29990);
        productoRepository.save(producto);

        Noticia noticia = new Noticia();
        noticia.setTitulo("LevelUpGamer inaugura su primera competencia online de eSports");
        noticia.setDescripcion("LevelUpGamer anunció con orgullo el lanzamiento de su primer torneo online, en el que jugadores de toda \n" +
                "              la región podrán enfrentarse en títulos como Valorant y League of Legends. La competencia ofrecerá premios sorpresa y lo más \n" +
                "              importante: la posibilidad de que los ganadores sean parte del equipo oficial de LevelUpGamer.\n" +
                "              Según los organizadores, el objetivo es “dar visibilidad al talento local y fortalecer la comunidad gamer que hemos construido en estos meses”.");
        noticia.setImagen("img/eSports.jpeg");
        noticiaRepository.save(noticia);

        noticia = new Noticia();
        noticia.setTitulo("Nueva alianza: LevelUpGamer se une a desarrolladores indie");
        noticia.setDescripcion("En un esfuerzo por apoyar a los creadores independientes, LevelUpGamer anunció una alianza estratégica \n" +
                "              con estudios emergentes de videojuegos. Gracias a esta iniciativa, los usuarios podrán probar demos exclusivas de juegos indie directamente desde la plataforma.\n" +
                "              “Queremos ser un puente entre los jugadores y los desarrolladores que están creando experiencias frescas y originales”, explicó el equipo en su comunicado.");
        noticia.setImagen("img/juegos_indie.jpeg");
        noticiaRepository.save(noticia);
    }
}
