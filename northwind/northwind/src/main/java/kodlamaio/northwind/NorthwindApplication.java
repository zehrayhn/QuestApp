package kodlamaio.northwind;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


@EnableSwagger2//bu naotasyon swaggeri baslatır.
@SpringBootApplication
public class NorthwindApplication {

	public static void main(String[] args) {
		SpringApplication.run(NorthwindApplication.class, args);
	}
	
	 //java uygulamamız bu bean'i gördükten sonra belleğe yerleştiriyor.
	  //bundan sonra docket isimli nesneyle contorllerlarımızın requesthandler'larını buluyor ve döküman haline getiriyor.test edilebilir hale getiriyor.
	@Bean  //bundan sonra docket isimli nesneyle contorllerlarımızın requesthandler'larını buluyor ve döküman haline getiriyor.test edilebilir hale getiriyor.
    public Docket api(){
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.basePackage("kodlamaio.northwind"))
				
				.build();
	}
}
