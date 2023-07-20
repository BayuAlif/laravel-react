import { Link } from "@inertiajs/react";
const Navbar = ({user}) => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl">BayuNews</a>
            </div>
            <div className="navbar-end">
                <div class="form-control">
                    <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
                </div>
                <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                    <img src="./img/profile.png" />
                </div>
            </label>
            <ul tabIndex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                {!user ?  
                <>
                 <li><Link href={route('login')} as="button" >Login</Link></li>
                 <li><Link href={route('register')} as="button">Register</Link></li>
                </>
                :

                <>
                <li>
                    <Link href={route('dashboard')} as="button" class="justify-between">
                        Dashboard
                        <span class="badge">New</span>
                    </Link>
                </li>
                <li><Link>Settings</Link></li>
                <li><Link href={route('logout')} as="button" method="POST">Logout</Link></li>
                </>
                }
            </ul>
        </div>
            </div>
        </div>
    )
}



export default Navbar