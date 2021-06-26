import React from 'react';
import styled from 'styled-components';
import { WiNightAltShowers } from 'weather-icons-react';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const MainWrapper = styled.section`
  width: 40%;
  padding: 4em;
  background: papayawhip;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StyledDate = styled.span`
  color: palevioletred;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  color: gray;
  font-size: 18px;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  width: 150px;
  color: palevioletred;
  font-size: 16px;
  margin: 0 2rem;
`;

const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  border-left: 1px solid #d38ca4;
`;

const WeatherInfo = () => {
  return (
    <MainWrapper>
      <StyledDate>{new Date().toDateString()} </StyledDate>
      <Title>Minsk, BY</Title>
      <Wrapper>
        <WiNightAltShowers size={46} color="palevioletred" />
        <Title>30&#8451;</Title>
      </Wrapper>
      <Span>Feels like 32&#8451;. Overcast clouds. Light breeze </Span>
      <Div>
        <Text>0.18mm</Text>
        <Text>3.8m/s NNW</Text>
        <Text>1012 hPa</Text>
        <Text>Humidity: 80%</Text>
        <Text>UV: 1</Text>
        <Text>Dew point: 24&#8451;</Text>
        <Text>Visibility: 10.0km</Text>
      </Div>
    </MainWrapper>
  );
};

export default WeatherInfo;
