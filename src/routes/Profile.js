import React from "react";
import { authService } from "../firebase";
import { useNavigate } from "react-router-dom";
//v5에서는 useHistory라는 Hook을 사용함. v6으로 넘어오면서 useNavigate로 대체

const Profile = () => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    navigate("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
export default Profile;
