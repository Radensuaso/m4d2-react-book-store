import "./App.css"
import MyFooter from "./components/MyFooter"
import MyNav from "./components/MyNav"
import MyJumbotron from "./components/MyJumbotron"
import LatestReleases from "./components/LatestReleases"
import React, { useState } from "react"
import fantasyBooks from "./data/fantasy.json"

const App = () => {
  const [query, setQuery] = useState("")

  return (
    <div className="App">
      <MyNav query={query} setQuery={(e) => setQuery(e.currentTarget.value)} />
      <MyJumbotron />
      <LatestReleases query={query} books={fantasyBooks} />
      <MyFooter />
    </div>
  )
}

export default App
