import React from "react";

export default function Posts() {
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>Posts</div>;
}
