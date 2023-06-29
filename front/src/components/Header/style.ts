import styled from "styled-components";
import { Link } from "react-router-dom";

const ConteinerHeader = styled.header`
  width: 100vw;
  height: 90px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: solid 1px var(--color--grey-6);
  box-shadow: 1px 1px var(--color--grey-6);
  background-color: var(--color--grey-10);

  padding: 0 20px;

  > div {
    cursor: pointer;
  }
`;

const ContainerButtonHeader = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 649px) {
    display: none;
    button {
      display: none;
    }
  }
`;

const LinkNoMargin = styled(Link)`
  font-size: 14px;
  font-family: var(--font--inter);
  text-decoration: none;

  color: var(--color--grey-2);
`;

const LinkRegister = styled(Link)`
  width: 100px;
  height: 35px;
  text-align: center;

  font-size: 14px;
  font-family: var(--font--inter);
  text-decoration: none;

  border: solid 1px var(--color--grey-6);
  border-radius: 5px;

  padding-top: 8px;

  color: var(--color--grey-0);
`;

const Container = styled.div`

  @media (max-width: 650px) {
    display: flex;
    justify-content: flex-end;
  }

`;

const ButtonsContainer = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 87px;
  bottom: 0;
  right: 0;
  z-index: 1;

  padding: 10px;

  background-color: var(--color--grey-10);


  @media (min-width: 650px) {
    display: none;
  }
`;

const StyledLinkLogin = styled(Link)`
  font-size: 12px;
  font-family: var(--font--inter);
  font-weight: 500;
  text-decoration: none;

  color: var(--color--grey-2);
  padding: 5px;
  margin-bottom: 20px;
`;

const StyledLinkRegister = styled(Link)`
  width: 95%;
  font-size: 12px;
  font-family: var(--font--inter);
  font-weight: 600;
  text-align: center;
  text-decoration: none;

  color: var(--color--grey-0);
  padding: 10px;
  border: 1px solid var(--color--grey-5);
`

const CloseButton = styled.button`
  font-size: 13px;
  font-weight: 400;
  font-family: var(--font--lexend);

  position: absolute;
  top: -47px;
  right: 35px;

  color: var(--color--grey-2);
  background-color: transparent;
  border: none;
`;

const MenuImage = styled.img`
  width: 40px;
  height: 25px;
  padding-right: 2vw;
  cursor: pointer;

  @media (min-width: 650px) {
    display: none;
  }
`;

export {
  ConteinerHeader,
  ContainerButtonHeader,
  LinkNoMargin,
  LinkRegister,
  Container,
  ButtonsContainer,
  StyledLinkLogin,
  StyledLinkRegister,
  CloseButton,
  MenuImage,
};
