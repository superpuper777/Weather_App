import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';

const ApiKey = 'b7e2a93dd815c83eb49c60c0960d9732';

const StyledSearchInput = styled.div`
  margin: 1em;
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  border: 2px solid palevioletred;
  border-right: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;
const Button = styled.button`
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  cursor: pointer;
  padding: 10px;
  border-radius: 0 3px 3px 0;
  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
  &:hover {
    background: #d38ca4;
    color: #ffffff;
  }
`;

const SearchInput = () => {
  const [query, setQuery] = useState('Minsk');
  const [searchTerm, setSearchTerm] = useState('Minsk');
  const [data, setData] = useState([]);

  const changeLocation = () => {
    setSearchTerm(query);
    setQuery('');
  };

  useEffect(() => {
    const getWeather = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${ApiKey}`,
      );
      console.log(response);
      setData(response.data);
    };
    getWeather();
  }, [searchTerm]);
  return (
    <StyledSearchInput>
      <Input
        type="text"
        placeholder="Search City"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button primary onClick={changeLocation}>
        Search
      </Button>
    </StyledSearchInput>
  );
};
export default SearchInput;
