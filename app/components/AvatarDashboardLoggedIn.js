import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function AvatarDashboard(props) {
  return (
    <div className="dashboardWrapper">
      <div className="blade0">
        <div className="avatarDashBar"></div>
        <div className="avatarDashText">Avatar Name</div>
      </div>

      <div className="avatarCircle"></div>
      <div className="avatarCirclePic" style={{ backgroundColor: "<%= String(user.avatarbgcolor) %>", backgroundImage: "<%= user.avatar %>" }}></div>

      <div className="avatarCircleShell0"></div>
      <div className="avatarCircle0">
        <div className="iconUI">
          <i className=" fas fa-comment"></i>
        </div>
      </div>

      <div className="avatarCircleShell1"></div>
      <div className="avatarCircle1">
        <div className="iconUI">
          <i className="fas fa-globe-asia"></i>
        </div>
      </div>

      <div className="avatarCircleShell2"></div>
      <div className="avatarCircle2">
        <div className="iconUI">
          <i className="fas fa-meteor"></i>
        </div>
      </div>

      <div className="avatarCircleShell3"></div>
      <div className="avatarCircle3">
        <div className="iconUI">
          <i className="fas fa-search"></i>
        </div>
      </div>
    </div>
  )
}

export default AvatarDashboard
