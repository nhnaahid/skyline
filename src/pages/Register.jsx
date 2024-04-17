import { Link, useNavigate } from 'react-router-dom';
import animation from '../assets/animation.gif'
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
    const navigate = useNavigate();
    const { user, setUser, createUser, updateUser } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(true);
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        // console.log(form.get('email'));
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        // password validation
        const regex = /^(?=.*[a-z])(?=.*[A-Z])/;
        if (password.length < 6 || password.length > 15) {
            toast.error('Password length should be 6 to 15 characters.')
            return;
        }
        if (!regex.test(password)) {
            toast.error('Password must have a lowercase and an uppercase letter.')
            return;
        }

        createUser(email, password)
            .then(result => {
                updateUser(name, photo)
                    .then(() => setUser({ ...user, displayName: name, email: email, photoURL: photo }))
                    .catch()
                toast.success('User Registration Successful.');
                console.log(result.user);
                navigate("/")
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>SkyLine | Register</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={animation} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-2xl font-bold text-center mt-5'>Register</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className='relative'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? 'password' : 'text'} name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div onClick={() => setShowPassword(!showPassword)} className='absolute bottom-4 right-2 text-lg'>
                                {
                                    showPassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>
                                }
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-xs sm:btn-sm md:btn-md bg-emerald-500 hover:bg-emerald-400 text-white border-none">Register</button>
                        </div>
                        <div>
                            <p className='mt-1'>Have an Account? <Link to="/login" className='text-blue-600'>Login</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;