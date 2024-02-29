import { Card } from "./components/card/card";
import { useGetTodoQuery } from "./redux/service/todo-api";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { SingleData } from "./pages/single-data/single-data";

function App() {
  console.log(import.meta.env.VITE_APP_URL);
  // const { data, isLoading, error } = useGetTodoQuery();

  // if (isLoading) {
  //   <h1>Loading...</h1>;
  // }
  // console.log(data);
  return (
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/todo/:id" element={<SingleData/>}/>
   </Routes>
  );
}

export default App;
