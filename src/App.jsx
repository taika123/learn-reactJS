import { useState } from "react";
import Todo from "./components/Todo";
import AlbumList from "./components/Album/AlbumList/AlbumList";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  let myArr = ["Javascript", "CSS", "PHP", "JS"];
  myArr = ["DASH", ...myArr];
  console.log(myArr);
  return (
    <div className="App">
      Home page
      <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">albums</Link>
      </p>
      <Routes>
        <Route path="/todos" element={<Todo />} />
        <Route path="/albums" element={<AlbumList />} />
      </Routes>
      {/* <Todo />
      <AlbumList /> */}
    </div>
  );
}

export default App;
