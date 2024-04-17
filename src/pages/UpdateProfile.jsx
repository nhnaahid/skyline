import { useContext, } from 'react';
import update from '../assets/update.gif'
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {
    const { user, setUser, updateUser } = useContext(AuthContext);
    console.log(user);
    const handleUpdate = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        let name = form.get('name');
        let photo = form.get('photo');
        // console.log(name, photo);
        if (name === '' && photo === '') {
            toast.error('Please provide necessary data.');
            return;
        }
        if (name === '') {
            name = user.displayName;
        }
        if (photo === '') {
            photo = user.photoURL;
        }
        console.log(name);
        updateUser(name, photo)
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo });
                toast.success('User profile updated successfully.');
                e.target.reset();
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <div className="bg-base-200 p-5">
            <Helmet>
                <title>SkyLine | Update Profile</title>
            </Helmet>
            <div className="w-full md:w-3/5 mx-auto bg-white ">
                <h1 className="text-2xl font-bold border-b p-3 text-center md:text-start">Update Profile</h1>
                <div>
                    <img className='md:w-48 mx-auto' src={update} alt="" />
                </div>
                <form onSubmit={handleUpdate} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-xs sm:btn-sm md:btn-md bg-emerald-500 hover:bg-emerald-400 text-white border-none">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;