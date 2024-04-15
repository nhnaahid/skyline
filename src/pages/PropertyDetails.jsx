import { IoLocationOutline, IoCheckbox } from "react-icons/io5";
import { useParams, useLoaderData } from 'react-router-dom';
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const PropertyDetails = () => {
    const properties = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    // console.log(typeof id);
    // console.log(properties);
    const propertyDetails = properties.find(property => property.id === idInt);
    // console.log(propertyDetails);
    const { image, estate_title, segment_name, price, status, area, location, description, facilities } = propertyDetails;
    return (
        <div className="bg-base-200">
            <div className="flex flex-col md:flex-row gap-7 p-5 pt-16">
                <div className="w-full md:w-3/5 space-y-10">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <h1 className="text-2xl font-bold">{estate_title}</h1>
                                <p className="bg-emerald-500 rounded-2xl md:rounded-full text-white py-1 px-2 text-sm w-fit">For {status}</p>
                            </div>
                            <div className="flex items-center gap-1 font-semibold">
                                <IoLocationOutline className="text-xl"></IoLocationOutline>
                                <p>{location}</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-xl text-emerald-500">{price}</h1>
                            <p className="font-semibold text-lg">{area}</p>
                        </div>
                    </div>
                    <div className=" bg-white p-3 md:p-7">
                        <h3 className="text-xl font-semibold">Gallery</h3>
                        <img className="w-full bg-cover mt-7" src={image} alt="" />
                    </div>
                    <div className="bg-white p-5 space-y-5">
                        <h3 className="text-2xl font-bold">Description</h3>
                        <p className="text-gray-500">{description}</p>
                    </div>
                    <div className="space-y-5 bg-white p-5">
                        <h3 className="text-2xl font-bold">Property Details</h3>
                        <div>
                            <p><span className="font-bold">Property Type: </span> {segment_name}</p>
                            <p><span className="font-bold">Property status: </span> {status}</p>
                            <p><span className="font-bold">Area: </span>{area}</p>
                            <p><span className="font-bold">Price: </span>{price}</p>
                            <p><span className="font-bold">Property Location: </span> {location}</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold pt-5">Facilities</h3>
                            <div>
                                {
                                    facilities.map((facility, idx) => <div className="flex items-center gap-2" key={idx}><IoCheckbox className="text-lg fill-emerald-500"></IoCheckbox><p>{facility}</p></div>)
                                }
                            </div>

                        </div>
                    </div>
                </div>

                <div className="w-full md:w-2/5 space-y-5 relative mb-64 md:mb-0">
                    <h1 className="text-2xl font-bold">Location</h1>
                    <div className="w-full h-[250px] md:h-[500px] lg:h-[700px] absolute z-0">
                        <MapContainer center={[40.7128, -74.0060]} zoom={13} scrollWheelZoom={false} className="h-full">
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[40.7128, -74.0060]}>
                                <Popup>
                                    Your Desired Location.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PropertyDetails;