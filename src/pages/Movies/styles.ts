import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;

  @media (max-width: 600px) {
    padding: 20px;
  }

  iframe {
    width: 900px;
    height: 500px;
    border-radius: 5px;
  }
`;

export const MovieTitle = styled.strong`
  padding: 1rem 0;
  font-size: 1.5rem;
`;

export const MovieSinopse = styled.p`
  font-size: 1.2rem;
  color: #191919;
  margin-top: 0.5rem;
  text-align: justify;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  max-height: 350px;
  border-radius: 20px;
  object-fit: cover;

  @media (max-width: 800px) {
    border-radius: 0px;
    max-height: 200px;
  }
`;

export const ContentBtn = styled.div`
  button {
    margin-right: 0.4rem;
    margin-top: 1rem;
    cursor: pointer;
    border-radius: 5px;
    border: 0;
    font-size: 1.2rem;
    outline: none;
    padding: 0.6rem;
    transition: all 0.5s;
  }

  button:hover {
    background-color: #3f3572;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  a:hover {
    color: #fff;
  }
`;
