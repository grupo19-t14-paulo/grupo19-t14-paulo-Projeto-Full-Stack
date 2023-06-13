import styled from "styled-components";

export const StyledProductCard = styled.li`
  width: 260px;

  cursor: pointer;

  :hover {
    > div:nth-child(1) {
      border: 2px solid var(--color--brand1);
    }
  }

  > div:nth-child(1) {
    height: 44%;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--color--grey-7);

    border: 2px solid var(--color--grey-7);

    img {
      width: 100%;
      transform: scale(.8);
      
    }
    .product-img-wrapper {
      padding: 10px;
    }
    > button {
      position: absolute;
      top: 11px;
      left: 16px;

      height: 24px;
      width: 51px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 14px;
      line-height: 24px;
      font-weight: 500;
    }
    > span {
      position: absolute;
      top: 0;
      right: 0;

      width: 15px;
      height: 27px;

      color: var(--color--whiteFixed);

      background-color: var(--color--sucess1);

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 2px;
    }
  }
  > div:nth-child(2) {
    margin-top: 16px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    > h3 {
      width: 100%;
      height: 22px;

      font-family: var(--font--lexend);
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;
    }
    > span {
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;

      height: 48px;
    }

    > div:nth-child(3) {
      display: flex;
      align-items: center;
      gap: 8px;

      height: 32px;

      > span:nth-child(1) {
        background-color: var(--color--brand2);
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        height: 100%;
        width: 32px;

        font-size: 14px;
        font-weight: 500;

        color: var(--color--whiteFixed);
      }
      > span:nth-child(2) {
        font-size: 14px;
        line-height: 24px;
        font-weight: 500;

        color: var(--color--grey-2);
      }
    }
    > div:nth-child(4) {
      width: 100%;
      height: 32px;

      display: flex;
      align-items: center;
      justify-content: space-between;
      > div {
        display: flex;
        gap: 12px;
        height: 100%;
        > span {
          padding: 4px 8px;

          height: 100%;

          background-color: var(--color--brand4);
          color: var(--color--brand1);

          display: flex;

          justify-content: center;
          align-items: center;

          border-radius: 4px;

          font-size: 14px;
          line-height: 24px;
          font-weight: 500;
        }
      }
      > span {
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
        font-family: var(--font--lexend);

        color: var(--color--grey-1);
      }
    }
  }
`;
