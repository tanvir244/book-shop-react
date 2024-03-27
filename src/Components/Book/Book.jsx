import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { bookId, author, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = book;

    return (
        <Link to={`/book_details/${bookId}`}>
            <div className="border p-4 space-y-3 rounded-xl shadow-xl block h-full">
                <div className="bg-[#F3F3F3] p-4 flex justify-center rounded-xl">
                    <img className="w-[196px] h-[260px]" src={image} alt="" />
                </div>
                <div className="flex gap-2">
                    {
                        tags.map(tag => <h2
                            className="py-1 px-2 bg-[#F3F3F3] text-[#23BE0A] text-xs md:text-sm font-semibold rounded"
                        >{tag}</h2>)
                    }
                </div>
                <div className="border-b-2 border-dashed pb-4">
                    <h3 className="text-2xl font-semibold pb-4">{bookName}</h3>
                    <h4 className="text-sm pb-2 font-semibold">লেখক : <span className="text-red-400 font-normal"> {author}</span></h4>
                    <h4 className="text-sm font-semibold">প্রকাশক : <span className="font-normal"> {publisher}</span></h4>
                </div>
                <div className="flex justify-between">
                    <h4 className="px-3 py-1 bg-[#F3F3F3] font-bold text-sm">{category}</h4>
                    <h4 className="flex items-center gap-2"><FaStar /> {rating}</h4>
                </div>
            </div>
        </Link>
    );
};

export default Book;