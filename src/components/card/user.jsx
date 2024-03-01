import React from 'react'
import { Link } from 'react-router-dom';

export const User = ({lastName, firstName,id}) => {
  return (
    <div className="">
      <Link className="block" to={`/users/${id}`}>
        <h2 className="text-4xl font-bold">{lastName}</h2>
      </Link>
      <p>{firstName}</p>
    </div>
  );
}
