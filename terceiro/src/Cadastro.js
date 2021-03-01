import react, { useState } from 'react'

export default function App() {
    const [ra, setRa] = useState(0)
    const [nome, setNome] = useState(0)
    const [p1, setP1] = useState(0)
    const [p2, setP2] = useState(0)
    const [media, setMedia] = useState(0)
    const [curso, setCurso] = useState(0)
    const [disciplina, setDsciplina] = useState(0)


    function result() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">RA</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Curso</th>
                        <th scope="col">Dsciplina</th>
                        <th scope="col">P1</th>
                        <th scope="col">P2</th>
                        <th scope="col">Media</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{ra}</th>
                        <td>{nome}</td>
                        <td>{curso}</td>
                        <td>{disciplina}</td>
                        <td>{p1}</td>
                        <td>{p2}</td>
                        <td>{media}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
    return (
        <div className="container">
            {result()}
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
                <button className="btn btn-primary" type="button" onClick={() => setMedia((Number(p1) + Number(p2))/2 )}> Calcular média</button>
            </div>

        </div>
    )

}