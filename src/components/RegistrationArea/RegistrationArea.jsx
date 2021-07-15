import Register from "./Register"
import SuccessfulRegistration from "./SuccessfulRegistration"
import { useState } from "react"
import { Route } from "react-router-dom"

const RegistrationArea = (props) => {
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  })

  /* function to handle the change of input fields to the state */
  const handleInputChange = (input, value) => {
    setInputs({ ...inputs, [input]: value })
  }

  /* function to handle submit */
  const handleSubmit = (e) => {
    e.preventDefault()
    props.history.push("/registration/success")
  }
  return (
    <>
      <Route
        path="/registration"
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

      <Route
        path="/registration/success"
        exact
        render={(routerProps) => (
          <SuccessfulRegistration {...routerProps} inputs={inputs} />
        )}
      />
    </>
  )
}

export default RegistrationArea
