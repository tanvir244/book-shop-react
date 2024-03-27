import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listed_books">Listed Books</NavLink></li>
        <li><NavLink to="/pages_to_read">Pages to Read</NavLink></li>
        <li><NavLink to="/article">Article</NavLink></li>
        <li><NavLink to="/writer">Writer</NavLink></li>
    </>

    return (
        <div className="max-w-6xl mx-auto work-sans my-4">
            <div className="navbar bg-base-100 font-semibold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a href="/" className="text-xl md:text-3xl font-bold"><span className="text-[#23BE0A]">Book</span> Shop</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2 md:gap-4">
                    <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;