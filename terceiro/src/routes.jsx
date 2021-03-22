
import { Switch, Route, Redirect } from 'react-router-dom'
import Cadastra from './Cadastro.js'
import Atualizar from './Atualizar'
import Consulta from './Consulta.js'
import Home from './Home.js'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cadastro" component={Cadastra} />
            <Route path="/consulta" component={Consulta} />
            <Route path="/atualiza/:id" component={Atualizar} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}