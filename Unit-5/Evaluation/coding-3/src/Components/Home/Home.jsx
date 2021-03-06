import {useContext} from 'react'
import { BookCard } from "../BookCard/BookCard";
// import axios from 'axios'
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
import { useEffect } from "react";
import {BookContextData} from '../../context/BookContext'

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below

  const Main = styled.div`
    /* Apply some responsive styling to children */
  `;
const {books,getBooks} = useContext(BookContextData)


useEffect(()=>{
  getBooks()
},[]);

// console.log(books, "from context")

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="grid grid-cols-4 p-2 mainContainer" style={{
        display: "grid",
        gridTemplateColumns:"repeat(3,1fr)"
      }}>
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */
            books.map(({ id, imageUrl, title, price })=>(
        <BookCard  id={id} imageUrl={imageUrl} title={title} price={price}  />
      ))
        }
      </Main>
    </div>
  );
};