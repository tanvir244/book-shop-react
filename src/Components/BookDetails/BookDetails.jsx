// import { parse } from "postcss";
import { useLoaderData, useParams } from "react-router-dom";
import { saveBookItems } from "../Utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getWishListStorageItems, saveWishListBookItems } from "../Utility2/localStorage2";
import { useState } from "react";

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const idInt = parseInt(bookId);
    const book = books.find(book => parseInt(book.bookId) === idInt);
    const { author, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = book;

    const [isExistRead, setIsExistRead] = useState(null);
    const [isExistWish, setIsExistWish] = useState(null);

    const handleReadButton = bookId => {
        if (!isExistRead) {
            toast.success('Added to Read !');
        } else {
            toast.warning('Read already exist !');
        }
        saveBookItems(bookId);
        setIsExistRead(true);

    }
    
    const handleWishListButton = bookId => {
        if (!isExistWish) {
            if(isExistRead){
                toast.error('Already exist to Read, so it should not to be added to Wishlist !');
            } else{
                toast.success('Added to Wishlist !');
            }
        } else {
            if(isExistRead){
                toast.error('Already exist to Read, so it should not to be added to Wishlist !');
            } else{
                toast.warning('Wishlist already exist !');
            }
        }
        saveWishListBookItems(bookId);
        setIsExistWish(true);
    }

    return (
        <div className="w-[92%] md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-16">
            <div className="">
                <img className="w-[100%] h-[100%] mx-auto" src={image} alt="" />
            </div>
            <div className="space-y-4 md:space-y-8">
                <h2 className="text-3xl font-semibold">{bookName}</h2>
                <h5><span className="font-bold">লেখকঃ</span> <span className="text-red-400">{author}</span></h5>
                <h4 className="font-bold py-2 px-2 bg-[#F3F3F3]"><span className="text-2xl">#</span> {category}</h4>
                <p><span className="font-bold">পর্যালোচনা:</span> {review}</p>
                <div className="flex gap-4 border-b-2 pb-8">
                    <h2 className="font-bold">Tag: </h2>
                    {
                        tags.map((tag, index) => <h2
                            key={index}
                            className="py-1 px-2 bg-[#F3F3F3] text-[#23BE0A] text-xs md:text-sm font-semibold rounded"
                        >{tag}</h2>)
                    }
                </div>
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <h4 className="w-40 font-semibold text-[#757575]">পৃষ্ঠা সংখ্যা</h4>
                        <h4 className="w-40 font-bold">: {totalPages}</h4>
                    </div>
                    <div className="flex gap-4">
                        <h4 className="w-40 font-semibold text-[#757575]">প্রকাশক</h4>
                        <h4 className="w-40 font-bold">: {publisher}</h4>
                    </div>
                    <div className="flex gap-4">
                        <h4 className="w-40 font-semibold text-[#757575]">প্রকাশিত বছর</h4>
                        <h4 className="w-40 font-bold">: {yearOfPublishing}</h4>
                    </div>
                    <div className="flex gap-4">
                        <h4 className="w-40 font-semibold text-[#757575]">রেটিং</h4>
                        <h4 className="w-40 font-bold">: {rating}</h4>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => handleReadButton(idInt)} className="btn border-1 border-[#50B1C9] bg-[#50B1C9] text-white text-lg px-12">Read</button>
                    <button onClick={() => handleWishListButton(idInt)} className="btn border-1 border-[#23BE0A] bg-[#23BE0A] text-white text-lg px-12">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;