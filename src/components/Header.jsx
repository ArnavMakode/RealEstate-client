import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
        <div className="flex justify-between p-3 items-center max-w-6xl mx-auto">
            <div className="font-bold text-sm sm:text-xl flex flex-wrap">
                <span className=" text-slate-500">Real</span>
                <span className=" text-slate-700">Estate</span>
            </div>
            <form className="bg-slate-100 p-3 rounded-lg flex items-center">
                <input type="text" className="bg-transparent focus:outline-none w-24 sm:w-64" placeholder="Search..."/>
                <FaSearch className='text-slate-600'/>
            </form>
            <ul className='flex gap-4'>
                <Link to='/'>
                <li className='hidden sm:inline hover:underline cursor-pointer text-slate-700'>Home</li>
                </Link>
                <Link to='/about'>
                <li className='hidden sm:inline hover:underline cursor-pointer text-slate-700'>About</li>
                </Link>
                <Link to='sign-in'>
                <li className='hover:underline cursor-pointer text-slate-700'>SignIn</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}
export default Header