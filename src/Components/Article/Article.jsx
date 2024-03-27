import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Article = () => {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        fetch("/data/content.json")
            .then(res => res.json())
            .then(data => setContents(data))
    }, []);

    return (
        <div className="w-[92%] md:max-w-6xl mx-auto mb-12">
            <h2 className="text-center font-bold text-3xl mb-12 mt-14">আমার লেখা আর্টিকেল</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    contents.map((content, index) => <div
                        key={index}
                        className="card bg-base-100 shadow-xl image-full">
                        <figure><img src={content.img} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-semibold mb-4 text-white">{content.title}</h2>
                            <p className="text-sm font-medium">{content.description}</p>
                            <Link to={content.link}>
                                <div className="card-actions justify-end">
                                    <button className="btn px-4">See More</button>
                                </div>
                            </Link>
                        </div>
                    </div>)
                }



            </div>
        </div>
    );
};

export default Article;