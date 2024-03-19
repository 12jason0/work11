import React, { useEffect, useState } from 'react';

export default function LifeCycleExam2() {
  const [posts, setPosts] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          return Error('oh no');
        }
        return res.json();
      })
      .then((data) => setPosts(data));
  });
  return (
    <div className="App">
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          Np.{post.id}-{post.title}
        </div>
      ))}
    </div>
  );
}
