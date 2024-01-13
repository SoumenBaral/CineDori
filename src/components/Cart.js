import React from 'react';
import { Link } from 'react-router-dom';

import Backup from "../assets/logo.png";


const Cart = ({movie}) => {
   
    const {original_title,overview,id,poster_path} = movie
    const img =poster_path? `https://image.tmdb.org/t/p/w500/${poster_path}`:Backup
    return (
        <div className="cart-container max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 m-3 shadow-lg">
            <Link to={`/movie/${id}`}>
                <img className="rounded-t-lg" src={img} alt="" />
            </Link>
            <div className="p-5">
                    <Link to={`/movie/${id}`}>
                         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview.slice(0,300)}</p>
               
            </div>
        </div>
    );
};

export default Cart;