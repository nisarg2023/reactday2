import React, { useState } from "react";

export default function AddPost() {
  const [formErr, setFormErr] = useState({
    id: "",
    title: "",
    body: "",
  });
  const isEmpty = (input) => {
    if (input.value === "") {
      setFormErr((prev) => {
        return { ...prev, [input.name]: "this field is required" };
      });
      return true;
    } else {
      setFormErr((prev) => {
        return { ...prev, [input.name]: "" };
      });
      return false;
    }
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();
    if (
      isEmpty(e.target.id) ||
      isEmpty(e.target.title) ||
      isEmpty(e.target.body)
    ) {
      return false;
    }
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: e.target.title.value,
        body: e.target.body.value,
        userId: e.target.id.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <form onSubmit={(e) => handelOnSubmit(e)}>
        <div>
          <label htmlFor="usre id"> user id </label>
          <input type="number" name="id" />
          <span>{formErr.id}</span>
        </div>

        <div>
          <label htmlFor="title"> title </label>
          <input type="text" name="title" />
          <span>{formErr.title}</span>
        </div>

        <div>
          <label htmlFor="body"> body </label>
         <textarea name="body"  cols="20" rows="3"></textarea>
          <span>{formErr.body}</span>
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
