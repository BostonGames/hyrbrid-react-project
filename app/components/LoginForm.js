import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"

//app componenets
import Page from "./Page"

function LoginForm(props) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await Axios.post("http://localhost:7000/api/login", { username, password })
      if (response.data) {
      } else {
        console.log("Incorrect username / password")
      }
      console.log(response.data)
    } catch (e) {
      console.log("There was problem. LoginForm.handleSubmit")
    }
  }

  return (
    <Page title="Log In">
      <div className="dialogueWrapper-left">
        <div className="dialogueLeft">
          <div className="meowmersSpeechBubbleNoAnim sb3 text-0 darkBGlinks">
            <Link to="/backhome">
              <i className="fas fa-caret-left"></i>
            </Link>{" "}
            Alright let's go to space! 👽
          </div>
        </div>
      </div>

      <div className="dialogueWrapper-right">
        <div className="dialogueRight">
          <div className="userSpeechBubbleNoAnim sb1 text-0">
            <form onSubmit={handleSubmit} action="/login" method="POST" className="mb-0 pt-2 pt-md-0">
              <div className="row align-items-center">
                <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                  <input onChange={(e) => setUsername(e.target.value)} name="username" className="form-control form-control-sm" type="text" placeholder="Username" autoComplete="off" />
                </div>
                <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                  <input onChange={(e) => setPassword(e.target.value)} name="password" className="form-control form-control-sm" type="password" placeholder="Password" />
                </div>
                <div className="col-md-auto">
                  <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                  <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                    <button className="btn btn-primary btn-sm">Sign In</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default LoginForm
