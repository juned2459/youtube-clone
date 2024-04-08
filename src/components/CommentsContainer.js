import React from "react";

const commentsData = [
  {
    name: "juned",
    text: "hello",
    replies: [
      {
        name: "juned",
        text: "hi juned",
        replies: [
          {
            name: "juned",
            text: "How are you",
            replies: [
              {
                name: "juned",
                text: "what are you doing",
                replies: [
                  {
                    name: "juned",
                    text: "where are you from ?",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "juned",
    text: "Hi",
    replies: [],
  },
  {
    name: "juned",
    text: "Bye",
    replies: [],
  },
  {
    name: "juned",
    text: "Bye Bye!",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-200 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://cdn-icons-png.freepik.com/512/552/552721.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />

      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
