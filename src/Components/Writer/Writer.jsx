import { useEffect, useState } from "react";

const Writer = () => {
    const [writers, setWriters] = useState([]);

    useEffect(() => {
        fetch("/data/writer.json")
        .then(res => res.json())
        .then(data => setWriters(data))
    }, [])
    console.log(writers);
    return (
        <div className="max-w-6xl mx-auto my-16">
            <h2 className="text-center text-3xl font-bold">জনপ্রিয় লেখক</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {
                    writers.map((writer, index) => <div
                    key={index}
                    className="mt-16"
                    >
                        <img className="rounded-full mx-auto" src={writer.profile} alt="" />
                        <h2 className="text-center text-xl mt-3">{writer.writer}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Writer;