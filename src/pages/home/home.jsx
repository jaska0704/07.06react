import React from "react";
import {
  useGetTodoQuery,
  usePostTodosDataMutation,
} from "../../redux/service/todo-api";
import { Card } from "../../components/card/card";
import { useForm } from "react-hook-form";

export const Home = () => {
  const { register, reset, handleSubmit } = useForm();
  const [page, setPage] = React.useState(1);
  const [postTodo] = usePostTodosDataMutation();
  const { data, isLoading } = useGetTodoQuery(page);

  const submit = (data) => {
    postTodo(data)
      .unwrap()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
  };
  const buttons = Array(data?.pageSize).fill(null);
  return (
    <div className="container">
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex gap-6">
          <input
            className="py-2 px-10 border-2 border-blue-400 rounded-lg shadow-lg bg-slate-400 text-blue-700 outline-none"
            {...register("title", { required: true })}
            type="text"
            placeholder="title"
          />
          <input
            className="py-2 px-10 border-2 border-blue-400 rounded-lg shadow-lg bg-slate-400 text-blue-700 outline-none"
            {...register("description", { required: true })}
            type="text"
            placeholder="discription"
          />
          <button className="btn py-2 px-4 bg-lime-400 rounded-lg">get</button>
        </div>
      </form>
      {isLoading ? (
        <h1 className="text-4xl text-red-700">Loading...</h1>
      ) : (
        data?.data.map((item) => <Card key={item.id} {...item} />)
      )}

      <div className="flex gap-2 items-center justify-center">
        {buttons.map((_, index) => {
          let number = index + 1;
          return (
            <button
              onClick={() => setPage(number)}
              className={`rounded-md p-[.5em] ${
                number === page ? "bg-blue-500" : "bg-slate-500"
              } `}
              key={number}
            >
              {number}
            </button>
          );
        })}
      </div>
    </div>
  );
};
