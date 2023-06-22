import styled from "styled-components";

const ConteinerButtonHeaderProfile = styled.div`
  height: 100%;
  display: flex;
  gap: 20px;
  align-items: center;

  border-left: solid 1px var(--color--grey-6);
  padding: 30px;

  @media(max-width: 440px){
    padding: 5px;
    gap: 5px;
  }

  @media(max-width: 298px){
    padding: 0 0 0 2px;
    gap: 2px;
  }
`;

const ButtonInitials = styled.button`
    width: 48px;
    height: 48px;
    background-color: var(--color--brand1);
    color: var(--color--whiteFixed);

    border-radius: 50%;
    border: transparent;

    @media(max-width: 440px){
      width: 30px;
      height: 30px;

      font-size: 10px;
    }

    @media(max-width: 298px){
      width: 25px;
      height: 25px;

      font-size: 8px;
    }

`;

const ButtonName = styled.button`
    font-size: 16px;
    background-color: transparent;
    color: var(--color--grey-2);
    border: transparent;

    @media(max-width: 440px){
      font-size: 10px;
    }

    @media(max-width: 298px){
      font-size: 8px;
      font-weight: 600;
    }
`;

export {
    ConteinerButtonHeaderProfile,
    ButtonInitials,
    ButtonName
};