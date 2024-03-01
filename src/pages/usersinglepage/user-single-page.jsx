import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleUserQuery } from "../../redux/service/user-api";

export const UserSinglePage = () => {
    const {id} = useParams();
    const {data, isLoading} = useGetSingleUserQuery(id);
    console.log(data);
  return (
    <div className="container">
      {isLoading ? (
        <h1 className="text-4xl">Loading...</h1>
      ) : (
        <div>
          <h2>{data?.firstName}</h2>
        </div>
      )}
    </div>
  );
};
