import React from "react";
import PostItem from "./components/post-item";

const Data = [
  {
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehandarit",
    body: "lorem lorem lorem lorem"
  },
  {
    id: 2,
    title: "qui est esse",
    body: "lorem lorem lorem lorem"
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "lorem lorem lorem lorem"
  },
  {
    id: 4,
    title: "eum et est occaecati",
    body: "lorem lorem lorem lorem",
  },
  {
    id: 5,
    title: "nesciunt quas odio",
    body: "lorem lorem lorem lorem"
  }
]

function App() {
  return (
    <div className="box">

      {Data.map((item) => {
        return (
          <PostItem key={item.id} data={item} />

        )
      })}
    </div>
  );
}

export default App;
