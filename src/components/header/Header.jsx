import React from 'react'
import { HeaderContainer, HeaderForm, HeaderTitle, SearchBtn, SearchInput, SelectBox } from './Header.style'

const Header = () => {
  const printType = ["all", "books", "magazines"]
  return (
    <HeaderContainer>
      <HeaderTitle>Books or Magazines</HeaderTitle>
      <HeaderForm>
        <SearchInput placeholder='Search...' type='search'/>
        <SelectBox>
          {/* <option>All</option>
          <option>Books</option>
          <option>Magazines</option> */}
          {
            printType.map(item => (
              <option value={item}>{item}</option>
            ))
          }
        </SelectBox>
        <SearchBtn>Search</SearchBtn>
      </HeaderForm>
    </HeaderContainer>
  )
}

export default Header