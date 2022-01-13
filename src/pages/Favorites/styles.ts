import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    padding: 2rem 0;

    @media (max-width: 600px) {
      padding: 0.5rem 0;
    }
  }

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const ListMovies = styled.ul`
  padding: 0;
  width: 600px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Movie = styled.li`
  border: 1px solid #3f3572;
  padding: 1rem;
  border-radius: 0.3rem;
  list-style: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const MovieTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const DetailsMovie = styled.div`
  button {
    margin-left: 10px;
    background-color: #3f3572;
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: #3f3572;
      border: 1px solid #3f3572;
    }
  }
`;

export const LinkMovie = styled(Link)`
  text-decoration: none;
  color: #3f3572;
  font-weight: bold;

  :hover {
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
    padding: 0.6rem 0;
  }
`;
