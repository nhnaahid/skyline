import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="bg-base-200 p-0 md:p-5">
            <Helmet>
                <title>SkyLine | Profile</title>
            </Helmet>
            <div className="w-full md:w-3/4 bg-white mx-auto">
                <h1 className="text-2xl font-bold p-3 border-b text-center">User Details</h1>
                <div className="avatar flex justify-center items-center mt-5">
                    <div className="w-24 md:w-40 mask mask-hexagon">
                        <img src={user?.photoURL || 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
                    </div>
                </div>
                <div className="w-full md:w-4/5 mx-auto overflow-hidden my-5 pb-5 text-xs md:text-base px-1 text-center">
                    <p className="border-b py-2 font-bold">Name: <span className="font-normal ml-1 md:ml-3">{user.displayName}</span></p>
                    <p className="border-b py-2 font-bold">Email: <span className="font-normal ml-1 md:ml-3">{user.email}</span></p>
                    <p className="py-2 font-bold">Photo URL: <span className="font-normal ml-1 md:ml-3">{user.photoURL}</span></p>
                </div>
                <div className="w-full flex justify-center">
                    <Link to="/update" className="btn btn-xs sm:btn-sm md:btn-md bg-emerald-500 hover:bg-emerald-400 text-white w-fit md:mb-5">Edit Profile</Link>
                </div>

            </div>
        </div>
    );
};

export default Profile;