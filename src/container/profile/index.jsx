import React, { useEffect, useState } from "react";
import Api from "../../api/Api";
import { api } from "../../../config/config";
import { ProfileContent } from './style'
import { navigate } from "gatsby";

const Profile = () => {
  const userApi = new Api(api);
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    userApi.setToken(jwt)
    userApi.getProfile()
      .then((res) => {
        setUserData({
          name: res.userName,
          email: res.email
        })
      })
  })

  function handleLogOut (e) {
    e.preventDefault();
    localStorage.removeItem('jwt')
    navigate("/login");
  }

  return (
    <ProfileContent>
      <div>
        <h3>My Nickname</h3>
        <p>{userData.name}</p>
      </div>
      <div>
        <h3>My Email</h3>
        <p>{userData.email}</p>
      </div>
      <button onClick={handleLogOut}>Log Out</button>
    </ProfileContent>
  )
}

export default Profile;
