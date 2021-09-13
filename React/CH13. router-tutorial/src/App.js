import React from 'react'
import { Route, Link } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Profile from './Profile'

const App = () => {
  return (
@@ -13,10 +14,17 @@ const App = () => {
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      <Route pate="/profile/:username" component={Profile} />

    </div>
  )
}
export default App;