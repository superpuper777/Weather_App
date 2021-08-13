import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from './weather_logo.svg';

export const Wrapper = styled.div`
  flex: 0 0 100%;
`;

export const Navigation = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0 6rem;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0px 7px 8px 0px rgba(219, 112, 147, 0.22);
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;
  margin: 0;
`;

export const NavigationItem = styled.li`
  padding: 10px 0px;
  a {
    font-size: ${(props) => (props.registration ? '14px' : '18px')};
    font-weight: 600;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: palevioletred;
  &:hover {
    color: #8d1e43;
  }
`;

export const StyledLogo = styled(Logo)`
  width: 50px;
  height: 50px;
  opacity: 0.75;
  cursor: pointer;
`;

export const SwitchButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: palevioletred;
  &:hover {
    color: #8d1e43;
  }
`;

export const AdditionalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin: 0;
`;
