import React from "react";
import { CardContainer, HomeContainer, HomeImage } from "./Home.style";
import Card from "../../components/card/Card";
import homeImg from "../../assets/books.jpg";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <HomeContainer>
      <Header/>
      <CardContainer>
        <Card />
      </CardContainer>
      <HomeImage>
        <img src={homeImg} alt="Home" />
      </HomeImage>
    </HomeContainer>
  );
};

export default Home;