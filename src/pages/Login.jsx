import { Link, useNavigate, useLocation } from 'react-router-dom';
import animation from '../assets/animation.gif'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Login = () => {
    const { loginUser, loginWithGoogle, loginWithFacebook, loginWithGithub } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('User Login Successful.');
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user);
                toast.success('User Login Successful.');
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                toast.error(error.message);
            })

    }
    const handleLoginWithFacebook = () => {
        loginWithFacebook()
            .then(result => {
                console.log(result.user);
                toast.success('User Login Successful.');
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                toast.error(error.message);
            })

    }
    const handleLoginWithGithub = () => {
        loginWithGithub()
            .then(result => {
                console.log(result.user);
                toast.success('User Login Successful.');
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>SkyLine | Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={animation} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-2xl font-bold text-center mt-5'>Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className='relative'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? 'password' : 'text'} name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div onClick={() => setShowPassword(!showPassword)} className='absolute bottom-12 right-2 text-lg'>
                                {
                                    showPassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>
                                }
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-xs sm:btn-sm md:btn-md bg-emerald-500 hover:bg-emerald-400 text-white border-none">Login</button>
                        </div>
                        <div>
                            <p className='mt-1'>New user? <Link to="/register" className='text-blue-600'>Register</Link> </p>
                        </div>
                        <div className='space-y-3'>
                            <p className='text-center font-bold'>Login With</p>
                            <div className='flex items-center justify-center gap-2'>
                                <button onClick={handleLoginWithGoogle} className="btn btn-outline text-xl px-3"><FcGoogle></FcGoogle></button>
                                <button onClick={handleLoginWithFacebook} className="btn btn-outline text-xl px-3"><FaFacebookF></FaFacebookF></button>
                                <button onClick={handleLoginWithGithub} className="btn btn-outline text-xl px-3"><FaGithub></FaGithub></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;