import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Countries from "./components/Countries"
import Country from "./components/Country"
import Header from "./components/Header"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          {/* Filter components */}
          <Countries />
        </Route>
        <Route path="/:capital" children={<Country />}></Route>
      </Switch>
    </Router>
  )
}

export default App
