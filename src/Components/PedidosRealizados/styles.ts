import styled from "styled-components";

export const Container = styled.header`
  background: #fff;
  margin-top: 2rem;

  border-radius: 20px;
`;

export const Content = styled.div`
  h5 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    padding: 1rem;
    font-size: 20px;
    display: block;
    margin: 1rem;
    line-height: 26px;
  }
  table {

    overflow-x:auto;


    border-collapse: collapse;

    width: 100%;
    thead {
      color: #25282b;

      tr {
        color: #25282b;
        border: 1px solid #dbdde0;
        border-left: 0;
        border-right: 0;
        th {
          font-family: "Lato";
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.1px;
          text-align: left;
          padding: 19px 25px;
          background: #fafafa;
        }
      }
    }
    tbody {
      td {
        padding: 18px 25px;
        button{
            background: linear-gradient(90deg, #3374AB 0%, #5AB1F3 59.9%, #6BD8FE 100%);
            border-radius: 2.93333px;
            font-family: 'Lato';
            font-style: normal;
            display:block;
            width:100%;
            font-weight: 700;
            border:0;
            padding:15px 5px;
            font-size: 12px;
            text-align: center;
            text-transform: uppercase;
            color: #FFFFFF;
        }
      }
      tr {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #52575c;
        .accent-color{
            background: linear-gradient(90deg, #3374AB 0%, #5AB1F3 59.9%, #6BD8FE 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
      }
      tr:last-child{
        border: 1px solid #dbdde0;
        border-left: 0;
        border-right: 0;
      }
      tr:nth-child(odd) {
        background-color: #ffffff;
      }
      tr:nth-child(even) {
        border: 1px solid #dbdde0;
        background-color: #fafafa;
        border-left: 0;
        border-right: 0;
      }
    }
  }
`;
