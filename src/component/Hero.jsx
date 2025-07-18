

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Hero() {
  const userData = useSelector((state) => state.auth.userData);

  return (
    <div className="bg-black text-white h-[90vh] rounded-bl-3xl rounded-br-3xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <p className="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-slate-300 sm:mt-6">
          Welcome to{" "}
          <span className="border-b  border-slate-500">LOGBOG</span>
        </p>

        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
          <span className="inline-block">
            Beyond{" "}
            <span className="relative whitespace-nowrap ">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-600/40"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">the</span>
            </span>
          </span>{" "}
          <span className="inline-block">Blank Page</span>
        </h1>

        <p className="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-300 sm:mt-6">
          <span className="inline-block">Ideas Worth Reading. Insights Worth Sharing</span>{" "}
          <span className="inline-block">Fresh Perspectives, Deep Dives</span>
        </p>

        {!userData && (
          <div className="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
            {/* Signup Button */}
            <Link
              to="/signup"
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-black hover:bg-slate-200 hover:text-black active:bg-slate-300 active:text-black focus-visible:outline-white animate-fade-in-left"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                className="h-3 w-3 flex-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 17.93V20h-2v-.07C7.062 19.436 4 16.135 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8c0 4.135-3.062 7.436-7 7.93z" />
              </svg>
              <span className="ml-3">Sign Up</span>
            </Link>

            {/* Login Button */}
            <Link
              to="/login"
              className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-400 text-white hover:text-slate-200 hover:ring-slate-500 active:bg-slate-800 active:text-white focus-visible:outline-blue-400 focus-visible:ring-slate-300 animate-fade-in-right"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                className="h-3 w-3 flex-none fill-current text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 12c2.131 0 3.875-1.744 3.875-3.875S14.131 4.25 12 4.25 8.125 5.994 8.125 8.125 9.869 12 12 12zm0 2c-2.63 0-7.875 1.319-7.875 3.95V20h15.75v-2.05c0-2.631-5.245-3.95-7.875-3.95z" />
              </svg>
              <span className="ml-3">Log In</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
