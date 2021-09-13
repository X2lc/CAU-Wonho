import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Route, Link, Switch } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Profiles from './Profiles'
@@ -19,18 +19,24 @@ const App = () => {
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      <Route pate="/profiles" component={Profiles} />
      <Route path="/history" component={HistorySample} />

      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={['/about', '/info']} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  )
}
export default App;