import React from "react";

export default function Posts() {
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const [posts , setPosts] = React.useState([])

  


  return posts.map((item => {
    return <div key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
    </div>
}));
}
