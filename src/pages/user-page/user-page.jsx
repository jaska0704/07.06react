import React from "react";
import {
  usePostUsersMutation,
  useGetUserQuery,
} from "../../redux/service/user-api";
import { useForm } from "react-hook-form";
import { User } from "../../components/card/user";
import { add } from "../../redux/reduser/user-reduser";
import { useDispatch, useSelector } from "react-redux";

export const UserPage = () => {
  const { register, reset, handleSubmit } = useForm();
  const [page, setPage] = React.useState(1);
  const [postUser] = usePostUsersMutation();
  const { data, isLoading } = useGetUserQuery(page);
  const dispatch = useDispatch();
  const  user  = useSelector((state) => state);
  console.log(user);

  const submit = (data) => {
    postUser(data)
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

  const addUser = (id) => {
    let res = data.data.find((i) => i.id === id);
    dispatch(add(res));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex gap-6">
          <input
            className="py-2 px-10 border-2 border-blue-400 rounded-lg shadow-lg bg-slate-400 text-blue-700 outline-none"
            {...register("lastName", { required: true })}
            type="text"
            placeholder="lastName"
          />
          <input
            className="py-2 px-10 border-2 border-blue-400 rounded-lg shadow-lg bg-slate-400 text-blue-700 outline-none"
            {...register("firstName", { required: true })}
            type="text"
            placeholder="firstName"
          />
          <button className="btn py-2 px-4 bg-lime-400 rounded-lg">get</button>
        </div>
      </form>
      {isLoading ? (
        <h1 className="text-4xl text-red-700">Loading...</h1>
      ) : (
        data?.data?.map((item) => {
          return (
            <div className="flex justify-between items-center border border-gray-500 mb-1 rounded-lg px-2">
              <User key={item.id} {...item} />
              <button
                onClick={() => addUser(item.id)}
                className="px-5 py-2 bg-green-300 rounded-lg"
              >
                add
              </button>
            </div>
          );
        })
      )}

      <div className="flex gap-2 items-center justify-center">
        {buttons?.map((_, index) => {
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
