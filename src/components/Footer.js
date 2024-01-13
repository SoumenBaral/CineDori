import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
         <footer className="bg-white  shadow  dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to={"/"} className="hover:underline">CineDore™</Link>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="https://github.com/SoumenBaral" target="_blank"  rel="noreferrer" className="hover:underline me-4 md:me-6">Github</a>
            </li>
            <li>
                <a href="https://www.facebook.com/shumen.baral.3/" target="_blank"  rel="noreferrer"  className="hover:underline me-4 md:me-6">FaceBook</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/soumenwebdev/" target="_blank"  rel="noreferrer"   className="hover:underline me-4 md:me-6">Linkdin</a>
            </li>
            <li>
                <a href="https://twitter.com/" target="_blank"  rel="noreferrer"  className="hover:underline">tweeter</a>
            </li>
        </ul>
        </div>
         </footer>

    );
};

export default Footer;