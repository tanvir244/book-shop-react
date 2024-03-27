import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 py-16 px-8 md:px-8 lg:px-24 mt-4 bg-[#1313130D] rounded-xl">
            <div className="md:col-span-3 flex items-center">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-12">Books to freshen <br /> up your bookshelf</h1>
                    <Link to="/listed_books">
                        <button className="bg-[#23BE0A] text-white py-4 px-8 font-semibold rounded">View All List</button>
                    </Link>
                </div>
            </div>
            <div className="md:col-span-2">
                <img className="w-[280px] h-[360px] mx-auto" src="/images/banner-img.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;