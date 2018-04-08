import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import configureStore from './store/configureStore'
import App from './components/App'
import Login from './components/Login'
import SignUp from './components/Signup'
import './css/style.css'
const store = configureStore()
ReactDom.render(<Provider store={store}>
    <BrowserRouter>
        <div>
            <Route path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
        </div>
    </BrowserRouter>
</Provider>, document.getElementById('root')
);