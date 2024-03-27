import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import BookDetails from './Components/BookDetails/BookDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Article from './Components/Article/Article';
import Writer from './Components/Writer/Writer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/book_details/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/data/books.json")
      },
      {
        path: "/listed_books",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/data/books.json")
      },
      {
        path: "/pages_to_read",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch("/data/books.json")
      },
      {
        path: "/article",
        element: <Article></Article>
      },
      {
        path: "/writer",
        element: <Writer></Writer>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
