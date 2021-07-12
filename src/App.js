import MyFooter from "./components/MyFooter"
import MyNav from "./components/MyNav"
import MyJumbotron from "./components/MyJumbotron"
import LatestReleases from "./components/LatestReleases"
/* import React, { useState } from "react" */
import fantasyBooks from "./data/fantasy.json"

const App = () => {
  /* const [query, setQuery] = useState("") */

  return (
    <div className="App">
      <MyNav /* query={query} */ />
      <MyJumbotron />
      <LatestReleases books={fantasyBooks} />
      <MyFooter />
    </div>
  )
}

export default App
