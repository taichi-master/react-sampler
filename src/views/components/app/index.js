import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { hot, setConfig } from 'react-hot-loader'
import NavBar from 'components/nav-bar'
import Home from 'views/Home'
import Posts from 'views/Posts'
import Comments from 'views/Comments'
import NoMatch from 'views/404'

if ( module.hot )
  setConfig( { logLevel: 'no-errors-please' } )

const App = () => (
  <>
    <header>
      <NavBar />
    </header>
    <article className="main-content">
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/posts/:userId" component={ Posts } />
        <Route path="/comments/:postId" component={ Comments } />              
        <Route component={ NoMatch } />
      </Switch>
    </article>
    <footer>
    </footer>
  </>
)

export default module.hot ? hot( module )( App ) : App