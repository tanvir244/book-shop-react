import { useLoaderData } from "react-router-dom";
import Chart from "../BarChart/BarChart";
import { getStorageItems } from "../Utility/localStorage";
import { useEffect, useState } from "react";


const PagesToRead = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [customObject, setCustomObject] = useState([]);

  useEffect(() => {
    const customBooksData = [];
    for (const data of readBooks) {
      const bookName = data.bookName;
      const pages = data.totalPages;
      const object = { name: `${bookName}`, pages: `${pages}` };
      if (object) {
        customBooksData.push(object);
      }
    }
    setCustomObject(customBooksData);
  }, [readBooks]);

  useEffect(() => {
    const readStorageBooks = getStorageItems();
    if (readStorageBooks.length > 0) {
      const booksArray = [];
      for (const id of readStorageBooks) {
        const book = books.find(book => book.bookId == id);
        if (book) {
          booksArray.push(book);
        }
      }
      setReadBooks(booksArray);
    }
  }, [books]);

  // console.log(readBooks);
  // console.log(customObject);

  return (
    <div>
      <Chart
        customObject={customObject}
      ></Chart>
    </div>
  );
};

export default PagesToRead;