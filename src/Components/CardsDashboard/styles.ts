import styled from 'styled-components';

export const Container = styled.section`

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width:450px){
    grid-template-columns: 1fr;
  }
  gap:2rem;
  
  border-radius: 8px;
  .card-content{
    background:#FFFFFF;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
    border-radius: 8px;
    display:flex;
    padding:1rem 1.2rem;
    gap:1rem;
    align-items:center;
  p{
    font-family: 'Lato',sans-serif;
    font-weight: 700;
    font-size: 14px;
  }
    img{
      width:1.8rem;
      object-fit:cover;
    }
    .numbers{
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      background: linear-gradient(90deg, #3374AB 0%, #5AB1F3 59.9%, #6BD8FE 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }


`