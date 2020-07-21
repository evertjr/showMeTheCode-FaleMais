import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 36px;
  color: #3a3a3a;
  line-height: 56px;
  margin-top: 40px;
`;

export const Container = styled.form`
   margin-top: 16px;
   display: flex;

   @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
    align-items: center;

  }

   `;

export const Options = styled.div`
    background-color: #4B008F;
    width: 300px;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    select {
    option[value="option"] {
      display: none;
  }

    padding: 16px;
    border: 2px solid #8600FF;
    margin: 16px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    color: #fff;
    background-color: #4B008F;
    }

    input {
    border-radius: 8px;
    border: none;
    margin: 8px 16px;
    padding: 16px 0;
    font-weight: bold;
    text-align: center;
    }

    button {
    border: none;
    margin: 16px;
    padding: 8px;
    border-radius: 8px;
    background-color: #8600FF;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    transition: 0.2s;
    
    &:hover {
      background-color: ${shade(0.3, '#8600FF')};

    }
    
    }
   
`;

export const Card = styled.div`
  background-color: #fff;
  margin: 0 8px;
  padding: 40px 8px;
  border-radius: 16px;
  width: 100%;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(max-width: 800px) {
    margin: 8px 0;
    max-width: 300px;
  }

  h1 {
    color: #4B008F;
    text-align: center;
    font-size: 30px;
  }

  div {
    display: flex;
    justify-content: space-around;
    margin: 20px 10%;

    span {
      font-size: 50px;
      font-size: 4.0vw;
      font-weight: bold;
      border: 2px solid #8600FF;
      color: #4B008F;
      border-radius: 16px;
      padding: 4px;
    }

    svg {
      font-size: 30px;
      margin: auto 4px;
      color: #8600FF;
    }
  
  }

  p {
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    color: #8600FF;
    margin-bottom: 16px;
  }

  span {
      display: block;
      text-align: center;
      color: #4B008F;
      margin-bottom: 8px;

      strong {
        display: block;
        font-size: 20px;
      }

    }
  
`;
