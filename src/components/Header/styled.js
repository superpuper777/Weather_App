import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './weather_logo.svg';

export const Wrapper = styled.div`
  flex: 0 0 100%;
`;

export const Navigation = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;
  margin: 0;
  list-style: none;
  padding: 0 6rem;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0px 7px 8px 0px rgba(219, 112, 147, 0.22);
`;

export const NavigationItem = styled.li`
  padding: 10px 0px;
  a {
    text-decoration: none;
    color: palevioletred;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: palevioletred;
  font-size: 18px;
  font-weight: 600;
  &:hover {
    color: #d4829e;
  }
`;

export const StyledLogo = styled(Logo)`
  width: 50px;
  height: 50px;
  opacity: 0.75;
  cursor: pointer;
`;
