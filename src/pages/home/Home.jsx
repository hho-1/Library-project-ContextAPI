import React from "react";
import { CardContainer, HomeContainer, HomeImage } from "./Home.style";
import Card from "../../components/card/Card";
import homeImg from "../../assets/books.jpg";
import Header from "../../components/header/Header";
import { useBooksContext } from "../../context/BooksContext";

const Home = () => {
  // console.log(process.env.REACT_APP_apiKey); //! .env dosyasında değişiklik yaptığımızda projeyi yeniden başlatmamız gerekiyor.
  //? .env dosyasındaki değişkenleri okuma yaparken process.env.VARIABLE şeklinde yapmamız gerekiyor.
  const { myData } = useBooksContext();
  return (
    <HomeContainer>
      <Header />
      {myData.length ? (
        <CardContainer wrap="wrap">
          {myData.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </CardContainer>
      ) : (
        <HomeImage>
          <img src={homeImg} alt="Home" />
        </HomeImage>
      )}
    </HomeContainer>
  );
};

export default Home;
