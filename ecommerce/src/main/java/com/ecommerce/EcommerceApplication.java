package com.ecommerce;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
/*@OpenAPIDefinition(info=@Info(
		title="Ecommerce Backend ",
		description = "Diese API bietet eine Reihe von Endpunkten und Funktionen zur programmatischen Interaktion mit unserer eCommerce-Plattform",
		version = "v1",
		contact = @Contact(
				name ="EcommerceAYMAN",
				email="ayman abouhali"
		),
		license = @License(
				name = "ayman abouhali"
		)
))*/
public class EcommerceApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(EcommerceApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
	}
}
