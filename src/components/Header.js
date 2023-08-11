import React from "react";
import Input from "antd/es/input/Input";

const Header = () => {
  return (
    <div>
      Chats
      <div>
        <div>
          <Input type="text" placeholder="Search for Chat" />
        </div>
      </div>
    </div>
  );
};

export default Header;
