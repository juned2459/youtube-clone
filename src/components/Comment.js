import React from "react";

const Comment = (data) => {
  console.log("hi", data);

  const { name, text, reply } = data;

  return (
    <div>
      <img
        alt="user"
        src="https://cdn-icons-png.freepik.com/512/552/552721.png"
      />
      <div>
        <p>{name}</p>
        <p>Comment</p>
      </div>
    </div>
  );
};

export default Comment;
