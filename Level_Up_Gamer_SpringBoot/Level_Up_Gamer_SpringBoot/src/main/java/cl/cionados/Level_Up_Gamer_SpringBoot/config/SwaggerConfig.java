package cl.cionados.Level_Up_Gamer_SpringBoot.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
    @Bean
    public OpenAPI customOpenApi(){
        return new OpenAPI()
                .info(new Info()
                        .title("Level Up Gamer API, FullStack II - Duoc 2025")
                        .version("1.0")
                        .description("Este un API para la pagina de Level Up Gamer para usuarios registrados.")
                );
    }
}
