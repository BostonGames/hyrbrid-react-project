import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function AvatarDashboard(props) {
  return (
    <div className="dashboardWrapper">
      <div className="blade0">
        <div className="avatarDashBar"></div>
        <div className="avatarDashText">Unknown Visitor</div>
      </div>

      <div className="avatarCircle"></div>
      <div className="avatarCirclePicUnknownUser"></div>

      <div className="avatarCircleShell0"></div>
      <div className="avatarCircle0">
        <div className="iconUIloggedOut">
          <i className=" fas fa-question"></i>
        </div>
      </div>

      <div className="avatarCircleShell1"></div>
      <div className="avatarCircle1">
        <div className="iconUIloggedOut">
          <i className="fas fa-question"></i>
        </div>
      </div>

      <div className="avatarCircleShell2"></div>
      <div className="avatarCircle2">
        <div className="iconUIloggedOut">
          <i className="fas fa-question"></i>
        </div>
      </div>
    </div>
  )
}

export default AvatarDashboard
