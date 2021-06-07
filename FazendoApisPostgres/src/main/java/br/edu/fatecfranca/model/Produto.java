package br.edu.fatecfranca.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity // entidade do banco de dados relacional
@Table(name="produto") // tabela produto
public class Produto implements Serializable{ // serializa (Ram -> HD)

	/**
	 * 
	 */
	private static final long serialVersionUID = 5456901749445784895L;
	
	@Id // chave única
	@GeneratedValue(strategy=GenerationType.IDENTITY) // auto-incremento
	private Long id;
	private String nome;
	private int qtde;
	private float valor;
	
	public Produto() {
		
	}
	
	public Produto(String nome, int qtde, float valor) {
		this.nome = nome;
		this.qtde = qtde;
		this.valor = valor;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public int getQtde() {
		return qtde;
	}
	public void setQtde(int qtde) {
		this.qtde = qtde;
	}
	public float getValor() {
		return valor;
	}
	public void setValor(float valor) {
		this.valor = valor;
	}
	
	
	
}
