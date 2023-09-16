import React from "react";

const UserStatus = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <p>O usuário está logado.</p>
      ) : (
        <p>O usuário não está logado.</p>
      )}
    </div>
  );
};

export default UserStatus;
