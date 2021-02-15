import React, {Component} from 'react'

// estrutura para guardar os valores iniciais
const valoresIniciais = {
    campos : {a: 0, b: 0, c: 0, delta: 0}    
}

export default class Triangulo extends Component {

    state = {...valoresIniciais}

    atualizaCampo(e){
        const campos = {...this.state.campos} // atribui os valores atuais para campos
        campos[e.target.name] = e.target.value // campos[peso] = 85 campos[altura] = 1.73
        // altera o valor dos campos
        this.setState({campos})
    }

    calcula(){
        const campos = {...this.state.campos} // atribui os valores atuais para campos
        const aux = (Number(this.state.campos.b)** 2) - (4 * (Number(this.state.campos.a)* Number(this.state.campos.c)))
        campos['delta'] = aux
        // altera o valor do imc do campos
        this.setState({campos})
    }
  // método que renderiza - desenha no navegador
  render(){
    return (
        <div> 
            <h1> Vamos criar uma calculadora de Delta </h1>
            <div className="form">
                <div className="form-group">
                    <label> Valor de A </label>
                    <input type="number" className="form-control" name="a" placeholder="Informe o valor de a."
                        value={this.state.campos.a} onChange={ e => this.atualizaCampo(e)}/>
                </div>
                <div className="form-group">
                    <label> Valor de B: </label>
                    <input type="number" className="form-control" name="b" placeholder="Informe o valor de b."
                        value={this.state.campos.b} onChange={e=> this.atualizaCampo(e)}/>
                </div>
                <div className="form-group">
                    <label> Valor de C </label>
                    <input type="number" className="form-control" name="c" placeholder="Informe o valor de c."
                        value={this.state.campos.c} onChange={e=> this.atualizaCampo(e)}/>
                </div>
                <div className="form-group">
                    <button onClick={e=> this.calcula()} type="button" className="btn btn-primary"> Calcular </button>
                </div>
                <div className="form-group">
                    <label> Delta: {this.state.campos.delta.toFixed(2)} </label>
                </div>
            </div>
            
        </div>
    )
    }
}