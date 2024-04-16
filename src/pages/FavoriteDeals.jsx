import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../utility/localstorage";
import PropertyCard from "../components/PropertyCard";
import { Helmet } from "react-helmet-async";


const FavoriteDeals = () => {
    const [storedFavoriteDeals, setStoredFavoriteDeals] = useState([]);
    const deals = useLoaderData();
    useEffect(() => {
        const storedFavoriteDealsId = getStoredData('favorite');
        if (deals.length > 0) {
            const storedFavoriteDealsDetails = deals.filter(deal => storedFavoriteDealsId.includes(deal.id));
            setStoredFavoriteDeals(storedFavoriteDealsDetails);
        }
    }, [deals])
    return (
        <div className="mt-16">
            <Helmet>
                <title>SkyLine | Favorite Deals</title>
            </Helmet>
            <div className="w-full md:w-2/3 text-center mx-auto space-y-3 mt-16">
                <h1 className="text-3xl font-bold font-playfair">Favorite deals</h1>
                <p className='text-sm text-gray-500'>In the world of real estate, scoring favorite deals can feel like hitting the jackpot. These deals are the stuff dreams are made of, where opportunity meets vision and savvy investors make their mark.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    storedFavoriteDeals.map(deal => <PropertyCard key={deal.id} property={deal}></PropertyCard>)
                }
            </div>
        </div>
    );
};

export default FavoriteDeals;