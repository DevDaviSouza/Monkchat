
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MonkChat from './pages/monkchat'
import login from './pages/login'



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={login} />
                <Route path="/chat" component={MonkChat} />
            </Switch>
        </BrowserRouter>
    )
}
