import React, { useEffect } from "react"

function HomeGuest() {
  return (
    <>
      <div className="screenContentContainer0 meowmersThoughts"></div>

      <div className="screenContentContainer0">
        <div className="meowmersWrapper">
          <div divstyle="flex-basis:200px" className="meowmers"></div>
        </div>

        <div className="dialogueWrapper0">
          <div className="dialogueWrapper-left">
            <div className="dialogueLeft">
              <div className="meowmersSpeechBubble sb3 text-0">
                Greetings, Hooman. Join us in the gaming<h4 className="my-0 mr-md-auto">UNIVERSE</h4>
              </div>
            </div>
          </div>

          <div className="dialogueWrapper-right">
            <div className="dialogueRight">
              <div className="userSpeechBubble sb1 text-0">Enter | Join | Where am I?</div>
            </div>
          </div>
        </div>
      </div>

      <div className="spacer"></div>
    </>
  )
}

export default HomeGuest
