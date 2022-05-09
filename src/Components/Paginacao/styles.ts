import styled from "styled-components";

export const Container = styled.footer`
  padding: 0.2rem 1rem;
height:auto;
  .pagination ul {
    margin: 2em auto;
    padding-left: 0;
    list-style-type: none;
  }

  .page-number {
    display: inline;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #25282b;
    &.prev{
        background: #FFFFFF;
        border-radius: 20px;
        color: #E8E8E8;
    }
  }

  .page-number a {
    text-decoration: none;
    color: black;
  }
  .pagination-2 .page-number {
    padding: 8px 16px;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    margin: 8px 4px;
  }

  .pagination-2 .active {
    border-radius: 4px;
    background: linear-gradient(90deg, #3374ab 0%, #5ab1f3 59.9%, #6bd8fe 100%);
    border-radius: 4px;
  }

  .pagination-2 .active:hover {
    background-color: #16425b;
  }

  .pagination-2 .active a {
    color: #f3f4f2;
  }
`;
