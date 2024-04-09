import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-base-200 mt-20'>
            <div className="w-1/2 text-center mx-auto py-8">
                <div className="border-b-2 border-dotted py-10 space-y-5">
                    <div className='space-y-2'>
                        <h1 className="text-3xl font font-extrabold">SkyLine</h1>
                        <h3 className='font-bold'>Real Estate & Properties</h3>
                    </div>

                    <p className="text-zinc-500">Skyline is a leading real estate development firm dedicated to creating innovative commercial and industrial spaces. Be connected with us:</p>
                    <div className="flex flex-wrap justify-center gap-8 text-2xl">
                        <a href="#"><FaTwitter></FaTwitter></a>
                        <a href="#"><FaFacebook></FaFacebook></a>
                        <a href="#"><FaInstagram></FaInstagram></a>
                    </div>
                </div>
                <div className="mt-10">
                    <p className="text-sm">Copyright © 2024, Skyline. All rights reserved. | Designed by SkyTech | Terms of Use | Privacy Policy | Sitemap</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;