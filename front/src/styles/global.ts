import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  :root {
    --color--brand1: #4529E6;
    --color--brand2: #5126EA;
    --color--brand3: #B0A6F0;
    --color--brand4: #EDEAFD;

    --color--grey-0: #0B0D0D;
    --color--grey-1: #212529;
    --color--grey-2: #495057;
    --color--grey-3: #868E96;
    --color--grey-4: #ADB5BD;
    --color--grey-5: #CED4DA;
    --color--grey-6: #DEE2E6;
    --color--grey-7: #E9ECEF;
    --color--grey-8: #F1F3F5;
    --color--grey-9: #F8F9FA;
    --color--grey-10: #FDFDFD;
    --color--whiteFixed: #FFFFFF;

    --color--alert1: #CD2B31;
    --color--alert2: #FDD8D8;
    --color--alert3: #FFE5E5;

    --color--sucess1: #18794E;
    --color--sucess2: #CCEBD7;
    --color--sucess3: #DDF3E4;

    --color--random1: #E34D8C;
    --color--random2: #C04277;
    --color--random3: #7D2A4D;
    --color--random4: #7000FF;
    --color--random5: #6200E3;
    --color--random6: #36007D;
    --color--random7: #349974;
    --color--random8: #2A7D5F;
    --color--random9: #153D2E;
    --color--random10: #6100FF;
    --color--random11: #5700E3;
    --color--random12: #30007D;

    --font--lexend: "Lexend", sans-serif;
    --font--inter: "Inter", sans-serif;
    
    font-size: 60%;
    
  }

  @media(min-width: 700px){
    :root{
        font-size: 62.5%;
    }
  }

  button {
    cursor: pointer;
  }

  ul,ol,li {
    list-style: none;
  }

  ::-webkit-scrollbar {
    background-color: var(--color--grey-8);
   
    height: 10px;
    width: 10px;
   
    border: solid 1px var(--color--grey-2);
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: var(--color--brand1);
   
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--color--brand2);
   
    border-radius: 4px;
  }

  body {
    overflow-y: auto;
    overflow-x: hidden;
    background-color: var(--color--grey-8);
  }

`;
export { GlobalStyle };
