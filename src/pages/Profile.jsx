import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="bg-base-200 p-0 md:p-5 overflow-x-hidden">
            <Helmet>
                <title>SkyLine | Profile</title>
            </Helmet>
            <div className="w-full md:w-3/5 bg-white mx-auto flex flex-col items-center">
                <h1 className="text-2xl font-bold border-b p-3 text-center md:text-start">User Details</h1>
                <div className="avatar flex justify-center items-center mt-5">
                    <div className="w-24 md:w-36 mask mask-hexagon">
                        <img src={user?.photoURL || 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
                    </div>
                </div>
                <div className="mt-5">
                    <table className="table">
                        <tbody>
                            {/* row 1 */}
                            <tr className="text-center md:text-lg">
                                <td className="font-bold">Name:</td>
                                <td>{user?.displayName}</td>
                            </tr>
                            {/* row 2 */}
                            <tr className="text-center md:text-lg">
                                <td className="font-bold">Email: </td>
                                <td>{user?.email}</td>
                            </tr>
                            {/* row 3 */}
                            <tr className="text-center md:text-lg">
                                <td className="font-bold">Photo URL: </td>
                                <td>{user?.photoURL}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Link to="/update" className="btn btn-xs sm:btn-sm md:btn-md bg-emerald-500 hover:bg-emerald-400 text-white my-5 w-fit">Edit Profile</Link>
            </div>
        </div>
    );
};

export default Profile;