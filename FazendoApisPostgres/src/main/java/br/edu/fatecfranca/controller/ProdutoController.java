package br.edu.fatecfranca.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.edu.fatecfranca.model.Produto;
import br.edu.fatecfranca.model.repositories.ProdutoRepository;

@RestController
public class ProdutoController {

	@Autowired // injeção de dependência
	ProdutoRepository injecao; // não precisamos instanciar para usar métodos

	@CrossOrigin(origins = "http://127.0.0.1:5500") // permitir o consumo da API de qualquer lugar
	@GetMapping("/produto")
	public List<Produto> get(){
		return injecao.findAll();
	}
	
	@CrossOrigin(origins = "http://127.0.0.1:5500") // permitir o consumo da API de qualquer lugar
	@PostMapping("/produto")
	public String add(@RequestBody Produto produto) {
		injecao.save(produto);
		return "Produto salvo com sucesso";
	}
	@CrossOrigin(origins = "http://127.0.0.1:5500") // permitir o consumo da API de qualquer lugar
	@DeleteMapping("/produto/{id}")
	public String remove(@PathVariable Long id) {
		
		injecao.deleteById(id);
		return "Produto removido com sucesso";
	}
	@CrossOrigin(origins = "http://127.0.0.1:5500") // permitir o consumo da API de qualquer lugar
	@PutMapping("/produto")
	public String update(@RequestBody Produto produto) {
		injecao.save(produto); // produto já tem id, e portanto, atualiza
		return "Produto atualizado com sucesso";
	}
}

