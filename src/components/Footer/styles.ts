import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 4rem;
  background: #3f3572;

  .logo {
    text-decoration: none;
    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;
  }

  .favoritos {
    cursor: pointer;
    text-decoration: none;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px;
    font-weight: bold;
    color: #000;
  }
`;
