package br.edu.fatecfranca;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.edu.fatecfranca.model.Compra;
import br.edu.fatecfranca.model.Produto;
import br.edu.fatecfranca.model.Usuario;
import br.edu.fatecfranca.model.repositories.CompraRepository;
import br.edu.fatecfranca.model.repositories.UsuarioRepository;

@SpringBootApplication
public class FazendoApisPostgresApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(FazendoApisPostgresApplication.class, args);
	}
	
	@Autowired
	CompraRepository injecao;
	
	@Autowired 
	UsuarioRepository injecaoUsuario;
	
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		// vamos criar uma compra
		
		Compra cmp1 = new Compra(400, new Date(), "Rua Chile, 123", "à vista no cartão");
		
		Produto prod1 = new Produto("Alcool em gel", 10, 3.0f);
		Produto prod2 = new Produto("Lanche", 10, 3.0f);
		Produto prod3 = new Produto("Refrigerante", 10, 3.0f);
		
		// associa os produto na compra
		cmp1.getProdutos().add(prod1);
		cmp1.getProdutos().add(prod2);
		cmp1.getProdutos().add(prod3);
		
		this.injecao.save(cmp1); // ele cria a compra e os produtos da compra
	
		Usuario user = new Usuario("teste@gmail.com", "123", "Rua Chile 123", "Franca-SP");
		injecaoUsuario.save(user);
		
	}

}
