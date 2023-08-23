// Books Context
import { createContext, useContext, useState } from "react";
import axios from "axios";
//? 1-Creating Context
export const BooksContext = createContext();

//? 2-provider component

const BooksContextProvider = props => {
  const [query, setQuery] = useState("");
  const [selectType, setSelectType] = useState("all");
  const [myData, setMyData] = useState([]);

  const getData = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${selectType}&key=${process.env.REACT_APP_apiKey}`;
    try {
      // const res = await axios(url)
      const { data } = await axios(url);
      console.log(data);
      setMyData(data.items);
    } catch (error) {}
  };

  return (
    <BooksContext.Provider
      value={{ query, setQuery, selectType, setSelectType, myData, getData }}>
      {props.children}
    </BooksContext.Provider>
  );
};

//! custom hooklar use ile başlar.
//* custom hooklar jsx return etmez.
//? içerisinde react hookları kullanılabilir. Bir fonksiyon içerisinde react hookları kullanmamız gerekiyorsa bu fonksiyonu custoom hook haline getirmemiz gerekiyor.

export const useBooksContext = () => {
  return useContext(BooksContext);
};

export default BooksContextProvider;