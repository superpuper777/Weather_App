import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
// import { WeatherIcon } from 'react-icons/wi';
import { WiDayShowers } from 'weather-icons-react';
import Home from './Home';

const StyledHeader = styled.div`
  flex: 0 0 100%;
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4rem;
    margin: 0;
    list-style: none;
    padding: 0 2rem;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0px 7px 8px 0px rgba(219, 112, 147, 0.22);
    li {
      padding: 10px 0px;
        a {
          text-decoration: none;
          color: palevioletred;
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      <Router>
        <div>
          <ul>
            <li>
              <WiDayShowers size={46} color="palevioletred" />
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </StyledHeader>
  );
};

export default Header;
