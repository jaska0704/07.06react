import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({description, title, id}) => {
  return (
    <div className='border m-3 p-5'>
      <Link className="block" to={`/todo/${id}`}>
        <h2 className="text-4xl font-bold">{title}</h2>
      </Link>
        <p>{description}</p>
    </div>
  );
}
