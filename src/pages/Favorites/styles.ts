import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 900px;
  border-radius: 8px;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const ListMovies = styled.div``;

export const Movie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 1.6rem;

  :last-child {
    margin-bottom: 2rem;
  }
`;

export const MovieTitle = styled.strong`
  padding-bottom: 1rem;
  font-size: 1.2rem;
`;

export const MovieSinopse = styled.p`
  font-size: 1rem;
  color: #191919;
  margin-top: 0.5rem;
  text-align: justify;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  max-height: 350px;
  border-radius: 5px 5px 0 0;
  object-fit: cover;

  @media (max-width: 800px) {
    max-height: 200px;
  }
`;

export const LinkMovie = styled(Link)`
  text-decoration: none;
  color: #fff;
  background-color: #3f3572;
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  padding: 0.8rem 0;
  border-radius: 0 0 5px 5px;

  :hover {
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
    padding: 0.6rem 0;
  }
`;
