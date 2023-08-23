import React from "react";
import {
  HeaderContainer,
  HeaderForm,
  HeaderTitle,
  SearchBtn,
  SearchInput,
  SelectBox,
} from "./Header.style";
import { useBooksContext } from "../../context/BooksContext";

const Header = () => {
  const printType = ["all", "books", "magazines"];
  const { query, selectType, setQuery, setSelectType, getData } =
    useBooksContext();

  const handleSubmit = e => {
    e.preventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <HeaderTitle>Books or Magazines</HeaderTitle>
      <HeaderForm onSubmit={handleSubmit}>
        <SearchInput
          placeholder="Search..."
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          required
        />
        <SelectBox
          value={selectType}
          onChange={e => setSelectType(e.target.value)}>
          {/* <option>All</option>
          <option>Books</option>
          <option>Magazines</option> */}
          {printType.map(item => (
            <option value={item}>{item}</option>
          ))}
        </SelectBox>
        <SearchBtn>Search</SearchBtn>
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;
