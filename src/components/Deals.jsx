import { useLoaderData } from "react-router-dom";
import PropertyCard from "./PropertyCard";

const Deals = () => {
    const properties = useLoaderData();
    return (
        <div className="mt-16">
            <div className="w-1/2 mx-auto text-center space-y-2">
                <h1 className=" text-3xl font-bold">Deals For You</h1>
                <p className="text-sm text-gray-500">Looking for the perfect real estate deal? Look no further! Welcome to Skyline Deals for You - your gateway to exciting opportunities in the world of property investment.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                {
                    properties.map(property =>
                        <PropertyCard
                            key={property.id}
                            property={property}
                        ></PropertyCard>)
                }
            </div>

        </div >
    );
};

export default Deals;