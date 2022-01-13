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
export const DetailsNotFound = styled.div`
  border: 1px solid #3f3572;
  border-radius: 10px;
  padding: 4rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    padding: 0;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

export const LinkHome = styled(Link)`
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
