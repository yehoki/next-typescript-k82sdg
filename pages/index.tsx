import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export interface IBookProps {
  name: string;
  author: string;
  currentPage: number;
  id?: string;
}

const Home: NextPage = () => {
  const [books, setBooks] = useState<IBookProps[]>([]);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newAuthor, setNewAuthor] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [forceRender, setForceRender] = useState(0);

  const titleChange = (event: any) => {
    event.preventDefault();
    setNewTitle(event.target.value);
  };
  const authorChange = (event: any) => {
    event.preventDefault();
    setNewAuthor(event.target.value);
  };
  const currentPageChange = (event: any) => {
    event.preventDefault();
    setCurrentPage(event.target.value);
  };

  return (
    <div className=" bg-[#616247FF] z-0">
      <Head>
        <title>Bookmarkt</title>
      </Head>
      <Header />
      <section id="bestSellers" className="pt-20"></section>
    </div>
  );
};

export default Home;

{
  /*

import AddBook from "@/components/AddBook";
import BookContainer from "@/components/BookContainer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

import bookService from "../services/axiosReqs";

export interface IBookProps {
  name: string;
  author: string;
  currentPage: number;
  id?: string;
}

export interface IBookListProps {
  bookData: {
    name: string;
    author: string;
    currentPage: number;
    id?: string;
  }[];
}

function Home() {
  const [books, setBooks] = useState<IBookProps[]>([]);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newAuthor, setNewAuthor] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [forceRender, setForceRender] = useState(0);

  const deletingButton = async (e: any) => {
    await bookService.dropBook(e.target.id);
    setForceRender((c) => c + 1);
  };

  useEffect(() => {
    const getBooks = async () => {
      const response = await bookService.getAll();
      const bookList = await response.data;
      setBooks(bookList);
      console.log(bookList);
      console.log(response.status);
    };
    getBooks();
  }, [books]);

  const booksData: IBookListProps = {
    bookData: books,
  };

  const titleChange = (event: any) => {
    event.preventDefault();
    setNewTitle(event.target.value);
  };

  const authorChange = (event: any) => {
    event.preventDefault();
    setNewAuthor(event.target.value);
  };
  const currentPageChange = (event: any) => {
    event.preventDefault();
    setCurrentPage(event.target.value);
  };

  // Adding a new book to the
  const addBook = async (event: any) => {
    event.preventDefault();

    const book:IBookProps = {
      name: newTitle,
      author: newAuthor,
      currentPage: currentPage,
    };
    await bookService.create(book);
    setNewTitle("");
    setNewAuthor("");
    setCurrentPage(0);
  };

  return (
    <div className=" bg-[#616247FF] z-0">
      <Head>
        <title>BookMarKT</title>
      </Head>
      <Header />
      {/* Header */
}
{
  /* Side  */
}
{
  /*
      <section id="bestSellers" className="pt-20">
        <BookContainer
          bookData={booksData.bookData}
          onDelete={(e: Event) => deletingButton(e)}
        />
      </section>
      {/* */
}
{
  /*}
      <AddBook
        onSubmit={addBook}
        newTitle={newTitle}
        titleChange={titleChange}
        newAuthor={newAuthor}
        authorChange={authorChange}
        currentPage={currentPage}
        currentPageChange={currentPageChange}
      />
      {/* */
}
{
  /* */
}
{
  /* */
}
{
  /* */
}
{
  /* */
}
{
  /* */
}
{
  /* */
}
{
  /*

      <Footer />
    </div>
  );
}

export default Home;
*/
}
