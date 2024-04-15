import { Link } from 'react-router-dom';
import animation from '../assets/animation.gif'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={animation} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-2xl font-bold text-center mt-5'>Login</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-xs sm:btn-sm md:btn-md bg-emerald-500 hover:bg-emerald-400 text-white border-none">Login</button>
                        </div>
                        <div>
                            <p className='mt-1'>New user? <Link to="/register" className='text-blue-600'>Register</Link> </p>
                        </div>
                        <div className='space-y-2'>
                            <p className='text-center'>Login With</p>
                            <div className='flex items-center justify-center gap-2'>
                                <button className="btn"><FcGoogle></FcGoogle>Google</button>
                                <button className="btn"><FaFacebookF></FaFacebookF>Facebook</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;