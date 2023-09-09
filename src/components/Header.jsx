import "./css/header.css"

function Header() {
  return (
      <div className='absolute bg-gradient-to-b from-black w-full z-10'>
          <img
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt='logo'
              className='w-56 ml-4 mt-2 z-20'
          />
    </div>
  )
}

export default Header