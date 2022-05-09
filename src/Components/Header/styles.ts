import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  .profile-settings {
    display: flex;
    align-items: center;
    gap: 1rem;
    button {
      position: relative;
      display: flex;
      border: 0;
      background: transparent;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      .icon {
        position: absolute;
        top: -10px;
        right: -10px;
        width: 18px;
        height: 18px;
        background: linear-gradient(
          90deg,
          #3374ab 0%,
          #5ab1f3 59.9%,
          #6bd8fe 100%
        );
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }
    }
    .profile {
      padding: 0;
      height: 48px;
      width: 48px;

      border-radius: 50%;
      img {
        border-radius: 50%;
        height: 48px;
        border: 4px solid #e8e8e8;
        width: 48px;
      }
    }
  }
`;

export const Pesquisa = styled.div`
  width: 200px;
  height: 40px;
  position: relative;
  border-radius: 100px;
  background: #ffffff;
  align-items: center;
  display: flex;
  margin: 0;
  padding: 1rem;
  input {
    border: 0;
    &::placeholder {
      padding: 0 1.2rem;
    }
  }
  img {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
  }
`;
export const Letters = styled.div``;
