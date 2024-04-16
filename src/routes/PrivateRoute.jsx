
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user ,loadingState } = useContext(AuthContext);
    if(loadingState){
        return <div className='w-full flex items-center justify-center'><span className="loading loading-bars loading-lg"></span></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;