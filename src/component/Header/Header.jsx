import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    // <header className='py-3 shadow bg-gray-500'>
    //   <Container>
    //     <nav className='flex'>
    //       <div className='mr-4'>
    //         <Link to='/'>
    //           <Logo width='70px'   />

    //           </Link>
    //       </div>
    //       <ul className='flex ml-auto'>
    //         {navItems.map((item) => 
    //         item.active ? (
    //           <li key={item.name}>
    //             <button
    //             onClick={() => navigate(item.slug)}
    //             className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    //             >{item.name}</button>
    //           </li>
    //         ) : null
    //         )}
    //         {authStatus && (
    //           <li>
    //             <LogoutBtn />
    //           </li>
    //         )}
    //       </ul>
    //     </nav>
    //     </Container>
    // </header>

  <header className="bg-black ">
  <Container>
    <nav className="relative flex h-16 items-center justify-between ">
      {/* Mobile menu button */}
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-evenly rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {/* Menu closed icon */}
          <svg className="block h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Logo and nav items */}
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Link to="/">
            <Logo width="70px" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {navItems.map((item) =>
              item.active ? (
                <button
                  key={item.name}
                  onClick={() => navigate(item.slug)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  {item.name}
                </button>
              ) : null
            )}
          </div>
        </div>
      </div>

      {/* Profile or Logout */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 text-white">
        {authStatus && (
          <div className="relative ml-3">
            <LogoutBtn />
          </div>
        )}
      </div>
    </nav>

    {/* Optional: Mobile menu */}
    <div className="sm:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pt-2 pb-3">
        {navItems.map((item) =>
          item.active ? (
            <button
              key={item.name}
              onClick={() => navigate(item.slug)}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white w-full text-left"
            >
              {item.name}
            </button>
          ) : null
        )}
      </div>
    </div>
  </Container>
</header>


  )
}

export default Header

