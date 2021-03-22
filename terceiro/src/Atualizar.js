import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'


export default function Atualizar(props) {
    const [ra, setRa] = useState(0)
    const [nome, setNome] = useState(0)
    const [p1, setP1] = useState(0)
    const [p2, setP2] = useState(0)
    const [media, setMedia] = useState(0)
    const [curso, setCurso] = useState(0)
    const [disciplina, setDsciplina] = useState(0)
   
    const history = useHistory()

    const id = (props.match.params.id)
    useEffect(async () => {
        
        await axios.get('http://localhost:3001/nota/'+id).then(resp => {
            console.log(resp.data)
           setCurso(resp.data.curso)
           setRa(resp.data.ra)
           setDsciplina(resp.data.disciplina)
           setNome(resp.data.nome)
           setP1(resp.data.p1)
           setP2(resp.data.p2)

        }).catch(err => console.log(err))

    }, [])
    async function atualiza(){
        setMedia((Number(p1) + Number(p2))/2 )
        await axios.put('http://localhost:3001/nota/'+id,
         {ra, nome, disciplina, p1, p2, media , curso})
         .then(res => {
            console.log(res)
            history.push('/consulta')
        })
    }
    return (
        <div className="container">
            <div >
                <label className="form-group">RA</label>
                <input className="input-group" type="text" value={ra} onChange={(e) => setRa(e.target.value)} />
                <br />
                <label className="form-group">Nome</label>
                <input className="input-group" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                <br />
                <label className="form-group">Cuso</label>
                <input className="input-group" type="text" value={curso} onChange={(e) => setCurso(e.target.value)} />
                <br />
                <label className="form-group">Disciplina</label>
                <input className="input-group" type="text" value={disciplina} onChange={(e) => setDsciplina(e.target.value)} />
                <br />
                <label className="form-group">P1</label>
                <input className="input-group" type="number" value={p1} onChange={(e) => setP1(e.target.value)} />
                <br />
                <label className="form-group">P2</label>
                <input className="input-group" type="number" value={p2} onChange={(e) => setP2(e.target.value)} />
            </div>

                <br />
            <div>
                <button className="btn btn-primary" type="button" onClick={() => atualiza()}> Atualizar</button>
            </div>

        </div>
    )

}