import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const WeatherCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const InfoText = styled.p`
  color: ${(props) => (props.desc ? 'gray' : 'palevioletred')};
  font-size: ${(props) => (props.desc ? '12px' : 'normal')};
  font-weight: ${(props) => (props.date ? 'bold' : 'normal')};
  border-bottom: ${(props) => (props.date ? '2.5px solid palevioletred' : 'none')};
`;

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div``;

export const MainTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-left: 1px solid #d38ca4;
`;

export const Text = styled.p`
  color: palevioletred;
  font-size: 12px;
  margin: 0 1rem;
`;
