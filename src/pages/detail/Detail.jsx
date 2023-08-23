import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useBooksContext } from "../../context/BooksContext";
import {
  Description,
  DetailContainer,
  DetailImg,
  DetailPart,
  DetailTitle,
  InfoPart,
} from "./Detail.style";
import defaultImg from "../../assets/book.jpg";

const Detail = () => {
  const { state } = useLocation();
  const { id } = useParams();
  // const [detailData, setDetailData] = useState(""); //? apiden çekilmesi durumunda
  // const { myData } = useBooksContext(); //! global datadan filtrelemek için
  // console.log(state);
  console.log(id);

  // const detailGlobalData = myData.filter(item => item.id === id);
  // console.log(detailGlobalData);

  //! best practice apiden çekmek
  // const getDetailData = async () => {
  //   try {
  //     const { data } = await axios(
  //       `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_apiKey}`
  //     );
  //     setDetailData(data);
  //     console.log(data);
  //   } catch (error) {}
  // };
  // useEffect(() => {
  //   getDetailData();
  // }, []);

  return (
    <DetailContainer>
      <DetailPart>
        <DetailTitle>{state?.volumeInfo.title}</DetailTitle>
        <DetailImg>
          <img
            src={state.volumeInfo?.imageLinks?.smallThumbnail || defaultImg}
            alt={state?.volumeInfo.title}
          />
        </DetailImg>
        <Description>{state?.volumeInfo?.description}</Description>
        <InfoPart>
          <p>{state?.volumeInfo?.authors.join(" - ")}</p>
          <p>
            {state.volumeInfo.publishedDate} / {state.volumeInfo?.publisher}
          </p>
        </InfoPart>
      </DetailPart>
    </DetailContainer>
  );
};

export default Detail;
