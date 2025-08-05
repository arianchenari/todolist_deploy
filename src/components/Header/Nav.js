import { useLocation, Link } from "react-router-dom"

const Nav = () => {
  const urlLi = useLocation().pathname;

  return (
    <nav className="w-full py-5">
        <ul className="flex justify-between px-4 gap-1 md:px-20">
            <li className={urlLi === '/' ? 'buttons selected' : 'buttons'}>
              <Link to={'/'}>Home</Link>
            </li>
            
            <li className={urlLi === '/search' ? 'buttons selected' : 'buttons'}>
              <Link to={'/search'}>Search</Link>
            </li>

            <li className={urlLi === '/about' ? 'buttons selected' : 'buttons'}>
              <Link to={'/about'}>About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav