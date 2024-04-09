import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const PropertyCard = ({ property }) => {
    const { id, image, estate_title, segment_name, price, status, area, location} = property;
    return (
        <div data-aos="zoom-in-up" className="card bg-base-100 shadow-xl border flex h-full">
            <figure className="m-5 rounded-xl">
                <div className='rounded-xl'>
                    <img src={image} alt="book" className='rounded-xl' />
                </div>
            </figure>
            <div className="card-body items-center">
                <div className='border-b-2 p-3 w-full space-y-2 '>
                    <h2 className='text-2xl font-bold font-playfair'>{estate_title}</h2>
                    <p className='font-bold'>{segment_name}</p>
                    <p><span className='font-bold'>Area: </span> {area}</p>
                    <p><span className='font-bold'>Type: </span> {status}</p>
                    <p><span className='font-bold'>Price: </span> {price}</p>
                    <p><span className='font-bold'>Location: </span> {location}</p>
                </div>
                <Link to={`/property-details/${id}`} className="btn btn-xs sm:btn-sm md:btn-md bg-emerald-500 hover:bg-emerald-400 text-white mt-2">Property Details</Link>
            </div>
        </div>
    );
};

PropertyCard.propTypes = {
    property: PropTypes.object
};

export default PropertyCard;