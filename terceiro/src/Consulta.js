import react, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Consulta() {
    const [datas, setDatas] = useState([])

    useEffect(async () => {
        await axios.get('http://localhost:3001/nota').then(resp => {
            setDatas(resp.data)

        }).catch(err => console.log(err))

    }, [])


    function remove(id) {

        axios.delete('http://localhost:3001/nota/' + id).then(async resp => {
            if (resp.status == 204) {
                await axios.get('http://localhost:3001/nota').then(resp => {
                    setDatas(resp.data)

                }).catch(err => console.log(err))
            }
        })
    }
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
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {datas.map(data => {

                    return (
                        <tr>
                            <td> {data.ra}</td>
                            <td>{data.nome}</td>
                            <td>{data.curso}</td>
                            <td>{data.disciplina}</td>
                            <td>{data.p1}</td>
                            <td>{data.p2}</td>
                            <td>{(data.p1 + data.p2) / 2}</td>
                            <td>
                                <Link to ={"atualiza/"+data._id} className="btn btn-success" >Editar</Link>
                                <Link to="/consulta" className="btn btn-danger" onClick={e => remove(data._id)}>Excluir</Link>
                            </td>
                        </tr>
                    )

                })}

            </tbody>
        </table>


    )

}