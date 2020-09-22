import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function InteractionWhereAmI(props) {
  //this is the syntax where useEffect is utilized instea of the Page method
  useEffect(() => {
    ;(document.title = "Gaming Universe - Where Am I?"), []
  })
  return (
    <>
      <div className="dialogueWrapper-left">
        <div className="dialogueLeft">
          <div className="meowmersSpeechBubbleNoAnim sb3 text-0">This is the Gaming Universe portal - here you can leave earth and explore the gaming universe as an alien avatar. When you join us you will get your own galaxy to customize and invite new friends to. Chat with fellow aliens and explore deep space.</div>
        </div>
      </div>

      <div className="dialogueWrapper-right">
        <div className="dialogueRight">
          <div className="userSpeechBubbleNoAnim sb1 text-0">
            <Link to="/join">Sounds fun, I'll join</Link> | <Link to="/rs5000-intro">Who are you?</Link> | <Link to="/login">Enter</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default InteractionWhereAmI
