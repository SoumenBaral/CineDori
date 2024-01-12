import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className=' p-3 bg-gradient-to-r from-blue-500 to-blue-900 text-white font-semibold rounded-s-3xl rounded-br-3xl  hover:from-black hover:to-red-500'>{children}</button>
        </div>
    );
};

export default Button;