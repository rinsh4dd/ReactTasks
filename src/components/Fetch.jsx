import { useEffect, useState } from "react";

function Apifetch() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchapi() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        console.log(data);
        setPosts(data.slice(0, 5));
      } catch (e) {
        alert("error fetching data");
      }
    }
    fetchapi();
  }, []);
  {
    return (
      <div className="div1">
        <div className="div2"
          style={{
            background: "aqua",
            height: "auto",
            width: "50%",
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1>FETCHED POSTS</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <strong>{post.title}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Apifetch;
