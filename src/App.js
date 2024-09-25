import {Route, Switch, withRouter} from 'react-router-dom'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Products from './components/Products'
import Cart from './components/Cart'

import './App.css'

const App = props => {
  const {location} = props
  const {pathname} = location
  return (
    <>
      {pathname !== '/login' && <Header />}

      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default withRouter(App)
