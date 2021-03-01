
import { Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import Cadastra from './Cadastro.js'
import Home from './Home.js'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component = {Home} />
                <Route path="/cadastro" component = {Cadastra} />
                <Redirect from="*" to ="/"/>
            </Switch>
        </BrowserRouter>
    )
}