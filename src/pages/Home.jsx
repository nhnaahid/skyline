import { useRef } from "react";
import Banner from "../components/Banner/Banner";
import Deals from "../components/Deals";


const Home = () => {
    const targetRef = useRef(null);
    const scrollToTarget = () => {
        targetRef.current.scrollIntoView({ behavior: "smooth" })
    }
    return (
        <div>
            <Banner scrollToTarget={scrollToTarget}></Banner>
            <div ref={targetRef}>
                 <Deals></Deals>
            </div>
        </div>
    );
};

export default Home;