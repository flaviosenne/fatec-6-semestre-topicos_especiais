package br.edu.fatecfranca.model.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.fatecfranca.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long>{

}
