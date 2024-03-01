import React from "react";
import { useSelector } from "react-redux";
import { useGetSingleUserQuery } from "../../redux/service/user-api";

export const UserSinglePage = () => {
  const { user } = useSelector((state) => state);
  const { data, isLoading } = useGetSingleUserQuery();

 console.log(user);
  return (
   <div className="container">
     {user?.user?.map((item)=> {
      return <h1 className="text-4xl">{item.lastName}</h1>
     })}
   </div>
  );
};
