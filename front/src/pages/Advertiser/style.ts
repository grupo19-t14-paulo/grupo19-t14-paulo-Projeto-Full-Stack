import styled from "styled-components";

const BackgroundBody = styled.div`
  background-color: var(--color--grey-8);
`;

const ContainerDivBlue = styled.div`
  height: 278px;

  background-color: var(--color--brand1);

  margin-bottom: 197px;

  display: flex;
  justify-content: center;

  position: relative;

  section {
    position: absolute;

    bottom: -55px;

    width: 95%;
    max-height: 350px;

    padding: 30px;
    padding-bottom: 45px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;

    background-color: var(--color--grey-10);

    border-radius: 4px;

    div {
      display: flex;
      flex-direction: row;
      gap: 8px;

      h3 {
        font-size: 1.25rem;
      }

      .tagInfo {
        padding: 3px;

        display: flex;

        font-size: 0.875rem;

        color: var(--color--brand1);

        border-radius: 2px;

        background-color: var(--color--brand3);
      }
    }

    .initialsName {
      width: 6.5rem;
      height: 6.5rem;

      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: var(--color--brand1);

      h1 {
        font-size: 2.25rem;
        color: var(--color--whiteFixed);
      }

      .paragraph {
        color: var(--color--grey-2);
        font-weight: 400;
      }
    }

    .button {
      padding: 10px;

      color: var(--color--brand1);
      background-color: var(--color--grey-10);

      border-radius: 4px;
      border: 1px solid var(--color--brand1);

      font-weight: 600;

      transition: 0.3s;
    }

    .button:hover {
      text-decoration: underline;
    }

    @media (min-width: 650px) {
      width: 85%;
    }
  }
`;

const ContainerDivAdverts = styled.div`
  min-height: 90vh;
`;

const ContainerAdverts = styled.section`
  margin-top: -80px;
  margin-bottom: 235px;

  width: 100%;

  display: flex;
  justify-content: center;

  .adsArea {
    width: 95%;

    .advertiserName {
      margin-bottom: 60px;
    }

    .sectionCards {
      display: flex;
      overflow-x: auto;

      .card {
        width: 266px;
        min-width: 285px;
        max-height: 410px;

        display: flex;
        flex-direction: column;
        gap: 16px;

        margin-bottom: 35px;

        border-radius: 4px;
        border: 1px solid var(--color--grey-8);

        background-color: var(--color--grey-10);

        margin-right: 16px;

        figure {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;

          img {
            width: 100%;
            background-color: var(--color--grey-7);
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            transition: 0.8s ease;
            object-fit: cover;
          }

          img:hover {
            transform: scale(1.1);
          }
        }
      }

      .infoCard {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;

        height: 65%;

        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 10px;

        .nameCar {
          font-size: 16px;
          font-weight: 600;
          line-height: 20px;
        }

        .description {
          color: var(--color--grey-2);

          font-size: 12px;
          line-height: 24px;

          max-width: 350px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .divNameUserCard {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 5px;

          .initials {
            width: 2.65rem;
            height: 2.65rem;

            border-radius: 50%;

            display: flex;
            align-items: center;
            justify-content: center;

            background-color: var(--color--brand1);
            color: var(--color--grey-10);
          }

          h3 {
            color: var(--color--grey-2);

            font-size: 14px;
            font-weight: 500;
            line-height: 24px;
          }
        }

        .divKmPriceYear {
          display: flex;
          flex-direction: column;

          .divKmYear {
            display: flex;
            gap: 5px;
            width: 100%;

            .tagInfo {
              padding: 3px;

              display: flex;
              align-items: center;

              font-size: 0.875rem;

              color: var(--color--brand1);

              border-radius: 2px;

              background-color: var(--color--brand3);
            }

            .price {
              font-weight: 500;
              line-height: 20px;

              padding-left: 110px;

              color: var(--color--grey-1);
            }
          }

          .divButton {
            display: flex;
            gap: 10px;

            margin-top: 10px;

            .buttonCard {
              display: flex;
              align-items: center;
              justify-content: center;

              padding: 4px;

              background-color: transparent;
              color: var(--color--grey-1);

              border-radius: 4px;
              border: 1px solid var(--color--grey-1);

              font-size: 13px;
              font-weight: 600;
            }
          }
        }
      }

      transition: 0.3s ease-in;
    }

    .card:hover {
      border: 1px solid var(--color--brand2);
    }
  }
  @media (min-width: 650px) {
    width: 85%;

    .sectionCards {
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: calc(100% / 10);
      overflow: hidden;
    }
  }
`;

export {
  BackgroundBody,
  ContainerDivAdverts,
  ContainerDivBlue,
  ContainerAdverts,
};
