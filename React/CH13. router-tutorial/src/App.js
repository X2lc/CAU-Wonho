import React from 'react'
import { Route, Link } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Profiles from './Profiles'
import HistorySample from './HistorySample'

const App = () => {
  return (
@@ -28,6 +29,7 @@ const App = () => {
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      <Route pate="/profiles" component={Profiles} />
      <Route path="/history" component={HistorySample} />

    </div>
  )
}
export default App;