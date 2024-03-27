import { HiMiniUsers } from "react-icons/hi2";
import { MdStickyNote2 } from "react-icons/md";
import { Link } from "react-router-dom";

const ListedBook = ({ book }) => {
    const { image, bookName, author, tags, publisher, totalPages, category, rating, bookId } = book;

    return (
        <div className="flex flex-col md:flex-row border p-4 gap-6 shadow-xl">
            <div className="p-4 bg-[#1313130D] flex justify-center">
                <img className="w-[160px] md:w-[188px] lg:w-[160px] h-[218px] md:h-[172px]" src={image} alt="" />
            </div>
            <div className="w-full space-y-2">
                <h2 className="text-2xl font-bold">{bookName}</h2>
                <h5 className="font-semibold"><span>লেখকঃ</span> <span className="text-red-400">{author}</span></h5>
                <div className="flex gap-4">
                    <h2 className="font-bold">Tag: </h2>
                    {
                        tags.map((tag, index) => <h2
                            key={index}
                            className="py-1 px-2 bg-[#F3F3F3] text-[#23BE0A] text-xs md:text-sm font-semibold rounded"
                        >{tag}</h2>)
                    }
                </div>
                <div className="flex flex-col md:flex-row gap-1 md:gap-8 pb-2 border-b-2 pt-4">
                    <h5 className="text-[#757575] flex gap-2 items-center"><span><HiMiniUsers /></span> প্রকাশকঃ {publisher}</h5>
                    <h5 className="text-[#757575] flex gap-2 items-center"><span><MdStickyNote2 /></span> পৃষ্ঠাঃ {totalPages}</h5>
                </div>
                <div className="flex gap-2 md:gap-4 font-semibold py-2 text-sm">
                    <h3 className="py-1 px-2 md:px-4 rounded-2xl bg-[#328EFF26] text-[#328EFF] text-xs md:text-sm">Category: {category}</h3>
                    <h3 className="py-1 px-2 md:px-4 rounded-2xl bg-[#FFAC3326] text-[#FFAC33]">Rating: {rating}</h3>
                    <Link to={`/book_details/${bookId}`}>
                        <h3 className="py-1 px-2 md:px-4 rounded-2xl bg-[#23BE0A] text-white">View Details</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;