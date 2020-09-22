import React, { useEffect } from "react"
import { Link } from "react-router-dom"

//app componenets
import Page from "./Page"

function InteractionGreeting(props) {
  return (
    <Page title="Portal">
      <div className="dialogueWrapper-left">
        <div className="dialogueLeft">
          <div className="meowmersSpeechBubbleNoAnim sb3 text-0">
            Greetings, Hooman. Join us in the gaming<h4 className="my-0 mr-md-auto">UNIVERSE</h4>
          </div>
        </div>
      </div>

      <div className="dialogueWrapper-right">
        <div className="dialogueRight">
          <div className="userSpeechBubbleNoAnim sb1 text-0">
            <Link to="/login">Enter</Link> | <Link to="/where-am-i">Where am I?</Link> | <Link to="/join">Join</Link>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default InteractionGreeting
