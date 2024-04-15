import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result);
                toast.success('User Successfully Logged Out.')
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    const navLinks = <>
        <li><NavLink to='/' style={({ isActive }) => ({
            color: isActive ? '#10b981' : '',
            border: isActive ? '1px solid #10b981' : '',
            background: 'none',
            fontWeight: isActive ? 'bolder' : 'bold'
        })}>Home</NavLink></li>
        <li><NavLink to='/favorite' style={({ isActive }) => ({
            color: isActive ? '#10b981' : '',
            border: isActive ? '1px solid #10b981' : '',
            background: 'none',
            fontWeight: isActive ? 'bolder' : 'bold'
        })}>Favorite Deals</NavLink></li>
        <li><NavLink to='/update' style={({ isActive }) => ({
            color: isActive ? '#10b981' : '',
            border: isActive ? '1px solid #10b981' : '',
            background: 'none',
            fontWeight: isActive ? 'bolder' : 'bold'
        })}>Update Profile</NavLink></li>
    </>

    return (
        <nav>
            <div className="navbar bg-base-100 shadow-md fixed z-20 px-4 sm:px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-lg md:text-3xl font-bold">SkyLine</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 md:text-base">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end md:gap-2">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li className="text-center"><Link>Profile</Link></li>
                                    <li className="text-center"><Link onClick={handleLogout}>Logout</Link></li>
                                </ul>
                            </div>
                            :
                            <Link to="/login" className="btn btn-xs sm:btn-sm md:btn-md bg-emerald-500 hover:bg-emerald-400 text-white">Login</Link>
                    }

                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </nav>
    );
};

export default Navbar;