import react, {useState}from 'react'

export default function App(){
    const [cont, setCont] = useState(0)

    return (
        <div className= "container">
            <div>
                Valor do contador {cont}
            </div>
            <div>
                <button className="btn btn-primary"type="button" onClick={()=> setCont(cont + 1)}> Aumenta </button>
            </div>
            <br/>
            <div>
                <button className="btn btn-primary"type="button" onClick={()=> setCont(cont - 1)}> Diminui</button>
            </div>
        </div>
    )

}