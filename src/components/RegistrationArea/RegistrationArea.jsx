import Register from "./Register"
import SuccessfulRegistration from "./SuccessfulRegistration"
import { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

const RegistrationArea = (props) => {
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  })

  const [submitted, setSubmitted] = useState(false)

  /* function to handle the change of input fields to the state */
  const handleInputChange = (input, value) => {
    setInputs({ ...inputs, [input]: value })
  }

  /* function to handle submit */
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    props.history.push("/register/success")
  }
  return (
    <Router>
      <Route
        path="/register"
        exact
        render={(routerProps) => (
          <Register
            {...routerProps}
            inputs={inputs}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        )}
      />
      {submitted && (
        <Route
          path="/register/success"
          exact
          render={(routerProps) => (
            <SuccessfulRegistration {...routerProps} inputs={inputs} />
          )}
        />
      )}
    </Router>
  )
}

export default RegistrationArea
