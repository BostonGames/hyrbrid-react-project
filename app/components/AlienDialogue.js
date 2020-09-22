import React, { useEffect } from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Axios from "axios"

// Components
import InteractionWhereAmI from "./InteractionWhereAmI"
import InteractionGreeting from "./InteractionGreeting"
import InteractionWhoAreYouRS5000 from "./InteractionWhoAreYouRS5000"
import Join from "./Join"
import LoginForm from "./LoginForm"
import AvatarDashboard from "./AvatarDashboard"

function AlienDialogue() {
  return (
    <>
      <div className="screenContentContainer0 meowmersThoughts"></div>

      <div className="screenContentContainer0">
        <div className="meowmersWrapper">
          <div divstyle="flex-basis:200px" className="meowmers"></div>
        </div>

        <div className="dialogueWrapper0">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <InteractionGreeting />
              </Route>
              <Route path="/where-am-i" exact>
                <InteractionWhereAmI />
              </Route>
              <Route path="/rs5000-intro" exact>
                <InteractionWhoAreYouRS5000 />
              </Route>
              <Route path="/join" exact>
                <Join />
              </Route>
              <Route path="/login" exact>
                <LoginForm />
                <AvatarDashboard />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>

      <div className="spacer"></div>
    </>
  )
}

export default AlienDialogue
