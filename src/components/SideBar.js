/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Image, Input } from "antd";
import UserProfile from "../images/avatar me.png";

const SideBar = () => {
  const [name, setname] = useState("");
  const [chats, setChats] = useState([
    { name: "Venkat", profile: UserProfile },
  ]); // Example chat data
  const handleUserprofileClick = () => {
    console.log("user profile clicked");
  };

  return (
    <div>
      <h1 style={{ textAlign: "left" }}>Chats</h1>
      <div>
        <div>
          <Input type="text" placeholder="Search for Chat" />
        </div>
        {chats.map((chat, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              backgroundColor: "#F0F0F0",
              borderRadius: 10,
              margin: 10,
            }}
          >
            <Image
              src={chat.profile}
              style={{
                cursor: "pointer",
                borderRadius: 50,
                width: 50,
              }}
              preview={false}
              onClick={handleUserprofileClick}
            />
            <p style={{ paddingLeft: 10 }}>{chat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SideBar;
