import React from "react";
import { CardBtn, CardContainer, CardHeader, CardMedia } from "./Card.style";
import defaultImg from "../../assets/book.jpg";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const { volumeInfo, id } = item;
  const navigate = useNavigate();
  return (
    <CardContainer>
      <CardHeader>{volumeInfo?.title}</CardHeader>
      <CardMedia
        src={volumeInfo?.imageLinks?.smallThumbnail || defaultImg}
        alt={volumeInfo?.title}
      />
      <CardBtn onClick={() => navigate(`/detail/${id}`, { state: item })}>
        View More
      </CardBtn>
    </CardContainer>
  );
};

export default Card;
