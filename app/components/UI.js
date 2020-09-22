import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function UI(props) {
  const [loggedIn, setLoggedIn] = useState()

  return (
    <div className="uiButtons flex-row my-3 my-md-0">
      <a href="/profile/<%= user.username %>" className="mr-2">
        <img id="avatarID" className="avatar-image" title="My Profile" data-toggle="tooltip" data-placement="bottom" style={{ width: "55px", height: "55px", borderRadius: "50%", backgroundColor: "<%= String(user.avatarbgcolor) %>" }} src={"<%= String(user.avatar) %>"} />
      </a>
      <a className="btn btn-sm btn-success mr-2" href="/create-post">
        Create Post
      </a>
      <form action="/logout" method="POST" className="d-inline">
        <input type="hidden" name="_csrf" defaultValue="<%= csrfToken %>" />
        <button className="btn btn-sm btn-secondary">Sign Out</button>
      </form>
    </div>
  )
}

export default UI
