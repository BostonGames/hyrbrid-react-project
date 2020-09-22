import React, { useEffect } from "react"
import { Link } from "react-router-dom"

//app componenets
import Page from "./Page"

function InteractionWhoAreYouRS5000(props) {
  return (
    //this is the syntax where our Page is used
    <Page title="Rocket Seal 5000 Introduction">
      <div className="dialogueWrapper-left">
        <div className="dialogueLeft">
          <div className="meowmersSpeechBubbleNoAnim sb3 text-0">I am Rocket Seal 5000 - I became the first life form to depart Earth and successfully adapt to living in space.</div>
        </div>
      </div>

      <div className="dialogueWrapper-right">
        <div className="dialogueRight">
          <div className="userSpeechBubbleNoAnim sb1 text-0">
            <Link to="/backhome">Why did you leave Earth?</Link> | <Link to="/join">Join</Link> | <Link to="/login">Enter</Link>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default InteractionWhoAreYouRS5000
