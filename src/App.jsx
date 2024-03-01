import { Card } from "./components/card/card";
import { useGetTodoQuery } from "./redux/service/todo-api";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { SingleData } from "./pages/single-data/single-data";
import { UserPage } from "./pages/user-page/user-page";
import { UserSinglePage } from "./pages/usersinglepage/user-single-page";

function App() {
  return (
    <div>
      <div className="container flex justify-around py-3">
        <Link to={"/"}>Home</Link>
        <Link to={"/users"}>User</Link>
        <Link to={"/usersingle"}>SinglePage</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<SingleData />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/usersingle" element={<UserSinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
