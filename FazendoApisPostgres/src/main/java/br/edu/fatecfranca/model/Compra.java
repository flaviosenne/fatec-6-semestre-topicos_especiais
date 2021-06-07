package br.edu.fatecfranca.model;

import java.io.Serializable;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="compra")
public class Compra implements Serializable {

	private static final long serialVersionUID = -7461737704168936136L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private float valor;
	
	private Date data;
	
	private String localEntrega;
	private String formaPagto;
	
	// associação um para muitos -> composição
	// quando insere uma compra no BD, insere os produtos automaticamente
	@OneToMany(cascade = CascadeType.ALL) 
	// coluna de ligação entre tabela compra e produto
	// na tabela produto do DB, haverá uma coluna id_compra ligada com id da compra 
	@JoinColumn(name="id_compra", referencedColumnName = "id")
	private List<Produto> produtos = new ArrayList<>();
	
	public Compra() {
		
	}
	
	public Compra(float valor, Date data, String localEntrega, String formaPagto) {
		this.valor = valor;
		this.data = data;
		this.localEntrega = localEntrega;
		this.formaPagto = formaPagto;
	}


	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public float getValor() {
		return valor;
	}
	public void setValor(float valor) {
		this.valor = valor;
	}
	public Date getData() {
		return data;
	}
	public void setData(Date data) {
		this.data = data;
	}
	public String getLocalEntrega() {
		return localEntrega;
	}
	public void setLocalEntrega(String localEntrega) {
		this.localEntrega = localEntrega;
	}
	public String getFormaPagto() {
		return formaPagto;
	}
	public void setFormaPagto(String formaPagto) {
		this.formaPagto = formaPagto;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public List<Produto> getProdutos() {
		return produtos;
	}


	public void setProdutos(List<Produto> produtos) {
		this.produtos = produtos;
	}
	
	
}
