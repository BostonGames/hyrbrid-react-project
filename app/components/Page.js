import React, { useEffect } from "react"

function Page(props) {
  useEffect(() => {
    ;(document.title = `Gaming Universe ${props.title}`), []
  })

  return <>{props.children}</>
}

export default Page
