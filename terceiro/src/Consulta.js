import react, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Consulta() {
    const [datas, setDatas] = useState([])

    useEffect(async () => {
        await axios.get('http://localhost:3001/nota').then(resp => {
            setDatas(resp.data[0])

            console.log("datas", datas)
        }).catch(err => console.log(err))
        
        datas.forEach(data => {
            console.log("data", data)
            
        })
    }, 1)

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
                {datas.forEach(data => {
                    
                        return (
                            <tr>
                            <td> {data.ra}</td>
                            <td>{data.nome}</td>
                            <td>{data.curso}</td>
                            <td>{data.disciplina}</td>
                            <td>{data.p1}</td>
                            <td>{data.p2}</td>
                            <td>{data.media}</td>
                        </tr>
                    )
               
                })}

            </tbody>
        </table>


    )

}