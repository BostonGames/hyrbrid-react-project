import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// Components
import Header from "./components/Header"
import HeaderStatic from "./components/HeaderStatic"
import AlienDialogue from "./components/AlienDialogue"
import AlienDialogueStatic from "./components/AlienDialogueStatic"
import BGspace from "./components/BGspace"
import OnloadAnim from "./components/OnloadAnim"
import Footer from "./components/Footer"
import UI from "./components/UI"
import AvatarDashboard from "./components/AvatarDashboard"
import AvatarDashboardLoggedIn from "./components/AvatarDashboardLoggedIn"
import SceneTitle from "./components/SceneTitle"
import MainContentScreen from "./components/MainContentScreen"

function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <BGspace />
          <OnloadAnim />
          <Header />
          <AlienDialogue />
        </Route>
        <Route path="/backhome" exact>
          <BGspace />
          <HeaderStatic />
          <AlienDialogueStatic />
        </Route>
        <Route path="/where-am-i" exact>
          <BGspace />
          <HeaderStatic />
          <AlienDialogueStatic />
        </Route>
        <Route path="/rs5000-intro" exact>
          <BGspace />
          <HeaderStatic />
          <AlienDialogueStatic />
        </Route>
        <Route path="/join" exact>
          <BGspace />
          <HeaderStatic />
          <AlienDialogueStatic />
        </Route>
        <Route path="/login" exact>
          <BGspace />
          <HeaderStatic />
          <AlienDialogueStatic />
          <AvatarDashboard />
        </Route>
        <Route path="/home-dashboard" exact>
          <BGspace />
          <SceneTitle />
          <MainContentScreen />
          <AvatarDashboardLoggedIn />
        </Route>
      </Switch>
      <UI />
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(<Main />, document.querySelector("#app"))

//this allows the app to update asychronously
if (module.hot) {
  module.hot.accept()
}
