import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  overflow: auto;
  width: 300px;
  min-width: 200px;
  overflow-x: hidden !important;
  position: relative;
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
  }
  header {
    height: 64px;
    min-height: 64px;
    margin: 2rem auto;
    display: flex;
    align-items: center;
    padding: 0 20px;
    h2 {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 50.91px;
      text-align: center;

      color: #52575c;
    }
  }

  footer {
    height: 100%;

    a {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      height: 100%;
      gap: 1rem;
      padding-left: 2rem;
    }
    padding: 0 20px;
  }
  ul {
    list-style: none;
    li {
      margin: 2rem 0;
      padding-left: 2rem;
    }
    a {
      display: flex;
      gap: 1rem;
      align-items: center;
      img {
        height: 20px;
        object-fit: cover;
      }
    }
  }
`;

export const Colluns = styled.h2`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;

  color: #52575c;
`;
