import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


html{
  scroll-behavior: smooth;
}

body{
  width: 100vw;
  height: 100vh;
  position: relative;
 
}

.border{
  border: 1px solid red;
}

.hidden{
  overflow: hidden;
}

.relative{
  position: relative;
}


flex {
  display: flex;
}

.flex-start-row {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

}
.flex-end-row {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;

}
.flex-start-column {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-center-column {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


.flex-space {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.flex-column {
  flex-direction: column;
}
`
