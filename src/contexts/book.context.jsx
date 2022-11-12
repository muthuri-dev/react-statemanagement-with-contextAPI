import { createContext, useState } from "react";

export const BookContext= createContext();

const BookContextProvider = (props) => {

    const[books, setBooks]= useState([
        {title:'Name of the wind', author:'patric rothfuse', id:1},
        {title:'The final empire', author:'brandon sanderson', id:2}
    ]);

    const addBook=(title, author, id)=>{
        setBooks([...books,{title ,author,id}]);
    }
    const removeBook= (id)=>{
        setBooks(books.filter((book)=>book.id !==id));
    }

    return ( 
        <BookContext.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;