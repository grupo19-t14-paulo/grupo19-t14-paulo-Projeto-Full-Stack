import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkRegister = styled(Link)`
  text-decoration: none;

  font-weight: 600;
  font-size: 13.5px;

  color: var(--color--grey-0);

  border: solid 1.5px var(--color--grey-4);
  border-radius: 5px;

  padding: 4% 40%;

  @media(max-width: 1060px) {
    padding: 3% 35%;
  };

  @media(max-width: 740px) {
    padding: 3% 42.6%;
  };

  @media(max-width: 607px) {
    padding: 3% 40%;
  };

  @media(max-width: 367px) {
    padding: 5% 37%;
  };

  @media(max-width: 309px) {
    padding: 5% 35%;
  };
  
`;


export {
    LinkRegister
};
