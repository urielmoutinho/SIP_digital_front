import styled from 'styled-components'

export const Container = styled.main`
  padding:2rem;
  max-width: 1440px;
  margin: 5rem auto;



  overflow: hidden;

  &::after{
    content: '';
    display: table;
    clear: both;
  }


`;