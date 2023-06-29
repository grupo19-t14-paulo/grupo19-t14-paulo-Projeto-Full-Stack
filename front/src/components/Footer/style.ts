import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100vw;
  height: 23.5rem;
  background-color: var(--color--grey-0);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding-top: 32px;
  padding-bottom: 32px;

  @media (min-width: 650px) {
    height: 8.75rem;
    flex-direction: row;

    padding-left: 35px;
    padding-right: 35px;
  }

  p {
    font-size: 1.4rem;
    color: var(--color--whiteFixed);
  }

  button {
    width: 3.313rem;
    height: 3.125rem;
    background-color: var(--color--grey-1);
    color: var(--color--whiteFixed);
    font-size: 1.6rem;
    font-family: "Inter", sans-serif;
    font-weight: 900;

    border: none;
    border-radius: 0.4rem;
  }
`;

export default StyledFooter;
