import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
    return (
        <div className="w-[90%] md:max-w-6xl mx-auto">
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;