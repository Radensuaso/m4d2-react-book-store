import "./App.css"
import MyFooter from "./components/MyFooter"
import MyNav from "./components/MyNav"
import MyJumbotron from "./components/MyJumbotron"
import LatestReleases from "./components/LatestReleases"
import React, { useState } from "react"
import fantasyBooks from "./data/fantasy.json"
import Register from "./components/Register"
import { BrowserRouter as Router, Route } from "react-router-dom"

const App = () => {
  const [query, setQuery] = useState("")

  return (
    <Router>
      <div className="App">
        <MyNav
          query={query}
          setQuery={(e) => setQuery(e.currentTarget.value)}
        />
        <Route path="/" component={MyJumbotron} />
        <Route
          path="/"
          exact
          render={(routerProps) => (
            <LatestReleases
              {...routerProps}
              query={query}
              books={fantasyBooks}
            />
          )}
        />
        <Route path="/Register" exact component={Register} />
        <MyFooter />
      </div>
    </Router>
  )
}

export default App
