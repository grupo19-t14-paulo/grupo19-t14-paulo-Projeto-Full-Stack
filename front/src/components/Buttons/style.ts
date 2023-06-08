import styled, { css } from "styled-components";

interface IButtonStyle {
  buttonStyle: String;
}

export const StyledButton = styled.button`
  padding: 12px 28px;

  border-radius: 4px;
  border: none;

  height: 48px;
  width: 146px;

  color: var(--color--whiteFixed);

  font-size: 16px;
  font-weight: 600;

  text-transform: capitalize;
  ${({ buttonStyle }: IButtonStyle) => {
    switch (buttonStyle) {
      case "grey-0-big":
        return css`
          background-color: var(--color--grey-0);
          :hover {
            background-color: var(--color--grey-1);
          }
        `;
      case "grey-0-medium":
        return css`
          padding: 0px 20px;

          height: 38px;
          width: 119px;

          background-color: var(--color--grey-0);
          :hover {
            background-color: var(--color--grey-1);
          }
        `;
      case "negative-big":
        return css`
          background-color: var(--color--grey-6);
          color: var(--color--grey-2);

          :hover {
            background-color: var(--color--grey-5);
          }
          :disabled {
            background-color: var(--color--grey-5);
            color: var(--color--whiteFixed);
          }
        `;
      case "negative-medium":
        return css`
          padding: 0px 20px;

          height: 38px;
          width: 119px;

          background-color: var(--color--grey-6);
          color: var(--color--grey-2);

          :hover {
            background-color: var(--color--grey-5);
          }
          :disabled {
            background-color: var(--color--grey-5);
            color: var(--color--whiteFixed);
          }
        `;
      case "brand1-big":
        return css`
          background-color: var(--color--brand1);
          color: var(--color--whiteFixed);

          :hover {
            background-color: var(--color--brand2);
          }
          :disabled {
            background-color: var(--color--grey-5);
            color: var(--color--whiteFixed);
          }
        `;
      case "brand1-medium":
        return css`
          padding: 0px 20px;

          height: 38px;
          width: 119px;

          background-color: var(--color--brand1);
          color: var(--color--whiteFixed);

          :hover {
            background-color: var(--color--brand2);
          }
          :disabled {
            background-color: var(--color--grey-5);
            color: var(--color--whiteFixed);
          }
        `;
      case "brand-opacity-big":
        return css`
          background-color: var(--color--brand4);
          color: var(--color--brand1);
          :disabled {
            background-color: var(--color--brand3);
            color: var(--color--brand4);
          }
        `;
      case `brand-opacity-medium`:
        return css`
          padding: 0px 20px;

          height: 38px;
          width: 119px;

          background-color: var(--color--brand4);
          color: var(--color--brand1);
          :disabled {
            background-color: var(--color--brand3);
            color: var(--color--brand4);
          }
        `;
      case "light-big":
        return css`
          background-color: var(--color--grey-10);
          color: var(--color--grey-1);
        `;
      case "light-medium":
        return css`
          padding: 0px 20px;

          height: 38px;
          width: 119px;

          background-color: var(--color--grey-10);
          color: var(--color--grey-1);
        `;
      case "outline-ligth-big":
        return css`
          border: 1.5px solid var(--color--grey-10);
          background-color: var(--color--whiteFixed);
          color: var(--color--grey-10);
          :hover {
            background-color: var(--color--grey-10);
            color: var(--color--grey-1);
            border: 1.5px solid var(--color--grey-1);
          }
        `;
      case "outline-ligth-medium":
        return css`
          padding: 0px 20px;

          height: 38px;
          width: 119px;

          border: 1.5px solid var(--color--grey-10);
          background-color: var(--color--whiteFixed);
          color: var(--color--grey-10);
          :hover {
            background-color: var(--color--grey-10);
            color: var(--color--grey-1);
            border: 1.5px solid var(--color--grey-1);
          }
        `;
      case "outline1-big":
        return css`
          background-color: var(--color--grey-10);
          color: var(--color--grey-1);
          border: 1.5px solid var(--color--grey-1);
          :hover {
            background-color: var(--color--grey-1);
            color: var(--color--grey-10);
          }
        `;
      case "outline1-medium":
        return css`
          padding: 0px 20px;

          height: 38px;
          width: 119px;

          background-color: var(--color--grey-10);
          color: var(--color--grey-1);
          border: 1.5px solid var(--color--grey-1);
          :hover {
            background-color: var(--color--grey-1);
            color: var(--color--grey-10);
          }
        `;
      case "outline2-big":
        return css`
          background-color: var(--color--whiteFixed);
          color: var(--color--grey-1);
          border: 1.5px solid var(--color--grey-4);
          :hover {
            background-color: var(--color--grey-1);
            color: var(--color--grey-10);
          }
        `;
      case "outline2-medium":
        return css`
          padding: 0px 20px;

          height: 38px;
          width: 119px;

          background-color: var(--color--whiteFixed);
          color: var(--color--grey-1);
          border: 1.5px solid var(--color--grey-4);
          :hover {
            background-color: var(--color--grey-1);
            color: var(--color--grey-10);
          }
        `;
      case "outline-brand1-big":
        return css`
          background-color: var(--color--whiteFixed);
          color: var(--color--brand1);
          border: 1.5px solid var(--color--brand1);
          :hover {
            background-color: var(--color--brand4);
          }
        `;
      case "outline-brand1-medium":
        return css`
          padding: 0px 20px;

          height: 38px;
          width: 119px;

          background-color: var(--color--whiteFixed);
          color: var(--color--brand1);
          border: 1.5px solid var(--color--brand1);
          :hover {
            background-color: var(--color--brand4);
          }
        `;
      case "link-big":
        return css`
          background-color: var(--color--whiteFixed);
          color: var(--color--grey-0);
          :hover {
            background-color: var(--color--grey-8);
          }
        `;
      case "link-medium":
        return css`
          padding: 0px 20px;

          height: 38px;
          width: 119px;

          background-color: var(--color--whiteFixed);
          color: var(--color--grey-0);
          :hover {
            background-color: var(--color--grey-8);
          }
        `;
      case "alert-big":
        return css`
          background-color: var(--color--alert3);
          color: var(--color--alert1);
          :hover {
            background-color: var(--color--alert2);
          }
        `;
      case "alert-medium":
        return css`
          padding: 0px 20px;

          height: 38px;
          width: 119px;

          background-color: var(--color--alert3);
          color: var(--color--alert1);
          :hover {
            background-color: var(--color--alert2);
          }
        `;
      case "sucess-big":
        return css`
          background-color: var(--color--sucess3);
          color: var(--color--sucess1);
          :hover {
            background-color: var(--color--sucess2);
          }
        `;
      case "sucess-medium":
        return css`
          padding: 0px 20px;

          height: 38px;
          width: 119px;

          background-color: var(--color--sucess3);
          color: var(--color--sucess1);
          :hover {
            background-color: var(--color--sucess2);
          }
        `;
    }
  }}
`;
