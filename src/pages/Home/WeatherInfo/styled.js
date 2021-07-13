import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const MainWrapper = styled.section`
  width: 40%;
  padding: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const ImageWrapper = styled.div``;

export const Date = styled.span`
  color: palevioletred;
`;

export const CurrentWeatherWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.span`
  color: gray;
  font-size: 18px;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  width: 150px;
  color: palevioletred;
  font-size: 16px;
  margin: 0 2rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  border-left: 1px solid #d38ca4;
`;
