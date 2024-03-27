import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStorageItems } from "../Utility/localStorage";
import ListedBook from "../ListedBook/ListedBook";
import { getWishListStorageItems } from "../Utility2/localStorage2";

const ListedBooks = () => {
    const [clickedRead, setClickedRead] = useState(false);
    const [clickedWish, setClickedWish] = useState(false);
    const books = useLoaderData();
    const [displayBooks, setDisplayBooks] = useState([]);
    const [getBooks, setGetBooks] = useState([]);
    const [getWishBooks, setGetWishBooks] = useState([]);



    const handleBooksFilter = filter => {

        if (clickedRead) {
            if (filter === 'all') {
                setDisplayBooks(getBooks);
            }
            else if (filter === 'history') {
                const historyBooks = getBooks.filter(getBook => getBook.category === 'History');
                setDisplayBooks(historyBooks);

            }
            else if (filter === 'politics') {
                const politicalBook = getBooks.filter(getBook => getBook.category === 'Politics');
                setDisplayBooks(politicalBook);
            }
            else if (filter === 'story') {
                const storyBooks = getBooks.filter(getBook => getBook.category === 'Story');
                setDisplayBooks(storyBooks);
            }
        }
        else if (clickedWish) {
            if (filter === 'all') {
                setDisplayBooks(getWishBooks);
            }
            else if (filter === 'history') {
                const historyBooks = getWishBooks.filter(getWishBook => getWishBook.category === 'History');
                setDisplayBooks(historyBooks);

            }
            else if (filter === 'politics') {
                const politicalBook = getWishBooks.filter(getWishBook => getWishBook.category === 'Politics');
                setDisplayBooks(politicalBook);
            }
            else if (filter === 'story') {
                const storyBooks = getWishBooks.filter(getWishBook => getWishBook.category === 'Story');
                setDisplayBooks(storyBooks);
            }
        }
    }

    const handleReadAndWishlist = (e, readOrWish) => {
        e.preventDefault();
        if (readOrWish === 'read') {
            setDisplayBooks(getBooks);
        } else if (readOrWish === 'wish') {
            setDisplayBooks(getWishBooks);
        }
    }

    useEffect(() => {
        const storedBooks = getStorageItems();
        if (books.length > 0) {
            const bookLists = [];
            for (const id of storedBooks) {
                const book = books.find(book => parseInt(book.bookId) === id);
                if (book) {
                    bookLists.push(book);
                }
            }
            setGetBooks(bookLists);
        }
    }, [books]);

    useEffect(() => {
        const storedWishlistBooks = getWishListStorageItems();
        if (books.length > 0) {
            const bookLists = [];
            for (const id of storedWishlistBooks) {
                const book = books.find(book => parseInt(book.bookId) === id);
                if (book) {
                    bookLists.push(book);
                }
            }
            setGetWishBooks(bookLists);
        }
    }, [books]);


    const handleReadBooks = e => {
        e.preventDefault();
        setClickedRead(!clickedRead);
        setClickedWish(false);
    }
    const handleReadWish = e => {
        e.preventDefault();
        setClickedWish(!clickedWish);
        setClickedRead(false);
    }

    const clickedStyle = {
        border: '2px solid #2b3440',
        backgroundColor: '#2b3440',
        color: 'white',
        padding: '12px 20px',
        borderRadius: '6px',
        fontWeight: '700'
    }
    const unClickedStyle = {
        border: '2px solid #1313130D',
        backgroundColor: 'white',
        padding: '12px 20px',
        borderRadius: '6px'
    }


    return (
        <div className="w-[92%] md:max-w-6xl mx-auto mb-48">
            <h2 className="bg-[#1313130D] py-6 text-center text-3xl font-bold">Books</h2>
            <div className="text-center my-4">
                <details className="dropdown w-48">
                    <summary className="m-1 btn w-full bg-[#23be0a] text-white font-semibold text-lg">Sort Category</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleBooksFilter('all')}><a>All</a></li>
                        <li onClick={() => handleBooksFilter('history')}><a>History</a></li>
                        <li onClick={() => handleBooksFilter('politics')}><a>Politics</a></li>
                        <li onClick={() => handleBooksFilter('story')}><a>Story</a></li>
                    </ul>
                </details>
            </div>
            <div className="mt-8 gap-4 border-b-2 py-6">
                <a onClick={(e) => {
                    handleReadBooks(e),
                        handleReadAndWishlist(e, 'read')
                }} href="" style={clickedRead ? clickedStyle : unClickedStyle}>Read Books</a>
                <a onClick={(e) => {
                    handleReadWish(e),
                        handleReadAndWishlist(e, 'wish')
                }} href="" style={clickedWish ? clickedStyle : unClickedStyle}>Wish Books</a>
            </div>
            <div className="space-y-4 mt-6">
                {
                    displayBooks.map(getBook => <ListedBook
                        key={getBook.bookId}
                        book={getBook}
                    ></ListedBook>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;