import styled from "styled-components";

const StyledHeader = styled.header`
    height: 8rem;
    width: 100%;
    max-width: 37.5rem;
    background-color: var(--color--grey-10);
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 37.6rem) {
        width: 100%;
        max-width: 76.8rem;
    }

    @media (min-width: 76.9rem) {
        width: 100%;
        max-width: 160rem;
    }

    #logoImageDiv {
        margin-left: 2rem;

        @media (min-width: 37.6rem) {
            margin-left: 6rem;
        }
    }

    #userMenu {
        > div {
            width: 15rem;
            display: flex;
            align-items: center;
            gap: 0.8rem;

            > div {
                background-color: var(--color--brand2);
                width: 3.2rem;
                height: 3.2rem;
                border-radius: 100%;

                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
`;

const Container = styled.div`
    height: fit-content;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-image: linear-gradient(
        to top,
        var(--color--grey-8) 0,
        var(--color--grey-8) 85%,
        var(--color--brand1) 15%
    );

    @media (min-width: 37.6rem) {
        background-image: linear-gradient(
            to top,
            var(--color--grey-8) 0,
            var(--color--grey-8) 80%,
            var(--color--brand1) 20%
        );
    }

    @media (min-width: 76.9rem) {
        background-image: linear-gradient(
            to top,
            var(--color--grey-8) 0,
            var(--color--grey-8) 70%,
            var(--color--brand1) 30%
        );
    }
`;

const MediaContainer = styled.div`
    width: 35.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    @media (min-width: 76.9rem) {
        width: 100%;
        max-width: 123.5rem;
        align-items: start;
    }
`;

const StyledSpaceContainer = styled.div`
    height: 4rem;
`;

const StyledAdvertContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    gap: 1.5rem;

    @media (min-width: 76.9rem) {
        flex-direction: row;
        gap: 4.6rem;
    }
`;

const StyledMainImage = styled.figure`
    height: 35.5rem;
    width: 35.1rem;
    padding: 4rem 3.2rem;
    background-color: var(--color--grey-10);
    border-radius: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100%;
    }

    @media (min-width: 37.6rem) {
        width: 75.1rem;
    }
`;

const StyledAdvertCard = styled.div`
    height: fit-content;
    width: 35.1rem;
    padding: 2.8rem 2.8rem;
    background-color: var(--color--grey-10);
    border-radius: 0.4rem;
    margin-top: 1.7rem;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 2rem;
        font-weight: 600;
        line-height: 2.5rem;
        color: var(--color--grey-1);
        font-family: var(--font--lexend);
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 3.2rem;
        justify-content: space-between;
        margin-top: 4.1rem;
        margin-bottom: 2.4rem;
        > div {
            display: flex;
            gap: 1.2rem;

            > div {
                width: fit-content;
                height: fit-content;
                padding: 0.4rem 0.8rem;
                background-color: var(--color--brand4);
                border-radius: 0.4rem;

                > p {
                    font-size: 1.4rem;
                    font-weight: 500;
                    line-height: 2.4rem;
                    color: var(--color--brand1);
                }
            }
        }

        h3 {
            font-size: 1.6rem;
            font-weight: 500;
            line-height: 2rem;
            color: var(--color--grey-1);
            font-family: var(--font--lexend);
        }
    }

    button {
        width: 10.8rem;
        height: 3.8rem;
        background-color: var(--color--brand1);
        border: 0.15rem solid var(--color--brand1);
        border-radius: 0.4rem;
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--color--whiteFixed);
        margin-top: 2.4rem;

        :hover {
            background-color: var(--color--brand2);
        }
    }

    @media (min-width: 37.6rem) {
        width: 75.1rem;
        padding: 3.6rem 4.4rem;
        margin-top: 1.6rem;

        > div {
            flex-direction: row;
            align-items: center;
        }
    }
`;

const StuledDescriptionField = styled.div`
    height: fit-content;
    width: 35.1rem;
    padding: 3.6rem 2.8rem;
    background-color: var(--color--grey-10);
    border-radius: 0.4rem;
    margin-top: 2.4rem;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 2rem;
        font-weight: 600;
        line-height: 2.5rem;
        color: var(--color--grey-1);
        font-family: var(--font--lexend);
    }

    p {
        font-size: 1.6rem;
        font-weight: 400;
        color: var(--color--grey-2);
        line-height: 2.8rem;
        margin-top: 2.8rem;
    }

    @media (min-width: 37.6rem) {
        width: 75.1rem;
        padding: 3.6rem 4.4rem;
        margin-top: 4rem;
    }
`;

const StyledAside = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

const StyledGaleryCard = styled.div`
    height: fit-content;
    width: 35.1rem;
    padding: 3.6rem 2.4rem;
    background-color: var(--color--grey-10);
    border-radius: 0.4rem;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 2rem;
        font-weight: 600;
        line-height: 2.5rem;
        color: var(--color--grey-1);
        font-family: var(--font--lexend);
    }

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 0.55rem;
        margin-top: 3.2rem;

        li {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 9rem;
            height: 9rem;
            background-color: var(--color--grey-7);
            border-radius: 0.4rem;

            figure {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    width: 100%;
                }
            }
        }
    }
    @media (min-width: 37.6rem) {
        width: 44rem;
        padding: 3.6rem 4.4rem;
        margin-top: 0;

        ul {
            gap: 1rem;

            li {
                width: 10.8rem;
                height: 10.8rem;
            }
        }
    }
`;

const StyledSellerCardAdvert = styled.div`
    height: fit-content;
    width: 35.1rem;
    padding: 4rem 2.8rem;
    background-color: var(--color--grey-10);
    border-radius: 0.4rem;
    margin-top: 5.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        > div {
            width: 7.7rem;
            height: 7.7rem;
            border-radius: 100%;
            background-color: var(--color--brand1);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;

            h1 {
                font-size: 2.7rem;
                font-weight: 500;
                color: var(--color--whiteFixed);
                font-family: var(--font--lexend);
            }
        }

        h2 {
            font-size: 2rem;
            font-weight: 600;
            line-height: 2.5rem;
            color: var(--color--grey-1);
            margin-top: 2.8rem;
        }

        p {
            font-size: 1.6rem;
            font-weight: 400;
            color: var(--color--grey-2);
            line-height: 2.8rem;
            margin-top: 2.8rem;
        }

        button {
            width: 20.6rem;
            height: 4.8rem;
            background-color: var(--color--grey-0);
            border: 0.15rem solid var(--color--grey-0);
            border-radius: 0.4rem;
            font-size: 1.6rem;
            font-weight: 600;
            color: var(--color--whiteFixed);

            margin-top: 2.8rem;
        }
    }

    @media (min-width: 37.6rem) {
        width: 44rem;
        padding: 3.6rem;
        margin-top: 3.4rem;

        > div {
            > div {
                width: 10.4rem;
                height: 10.4rem;

                h1 {
                    font-size: 3.6rem;
                }
            }
        }
    }
`;

const StyledCommentSection = styled.section`
    width: 35.1rem;
    padding: 3.6rem 2.8rem;
    margin-top: 1.8rem;
    background-color: var(--color--grey-10);
    border-radius: 0.4rem;

    h2 {
        font-size: 2rem;
        font-weight: 600;
        color: var(--color--grey-1);
        font-family: var(--font--lexend);
        margin-bottom: 2.4rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 4.4rem;
    }

    @media (min-width: 37.6rem) {
        width: 75.1rem;
        padding: 3.6rem 4.4rem;
    }
`;

const StyledComment = styled.li`
    height: 21.2rem;
    width: 28.3rem;
    margin-bottom: 4.4rem;
    background-color: var(--color--grey-10);
    border-radius: 0.4rem;

    #userDataComment {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.2rem;

        h3 {
            font-size: 1.4rem;
            color: var(--color--grey-1);
        }

        > div {
            width: 3.2rem;
            height: 3.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--color--random1);
            border-radius: 100%;

            > h3 {
                color: var(--color--whiteFixed);
            }
        }

        #elipseComment {
            width: 0.4rem;
            height: 0.4rem;
            background-color: var(--color--grey-4);
            border-radius: 100%;
        }

        p {
            font-size: 1.2rem;
            color: var(--color--grey-3);
        }
    }

    #commentParagraph {
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 2.4rem;
        color: var(--color--grey-2);
    }

    @media (min-width: 37.6rem) {
        height: 11.6rem;
        width: 66.3rem;
    }
`;

const StyledUserCommentField = styled.div`
    height: 41.4rem;
    width: 35.1rem;
    padding: 2.6rem 3.6rem;
    background-color: var(--color--grey-10);
    border-radius: 0.4rem;
    margin-top: 4.2rem;

    #userCommentFieldUserData {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2.4rem;

        h3 {
            font-size: 1.4rem;
            color: var(--color--grey-1);
        }

        > div {
            width: 3.2rem;
            height: 3.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--color--random1);
            border-radius: 100%;

            > h3 {
                color: var(--color--whiteFixed);
            }
        }
    }

    #userCommentField {
        border: none;
        border-radius: 0.4rem;
        width: 100%;

        textarea {
            border: 0.15rem solid var(--color--grey-7);
            border-radius: 0.4rem;
            width: 100%;
            height: 12.8rem;
            padding: 1.6rem;
        }

        #postCommentButton {
            width: 10.8rem;
            height: 3.8rem;
            background-color: var(--color--brand1);
            border: 0.15rem solid var(--color--brand1);
            border-radius: 0.4rem;
            font-size: 1.4rem;
            font-weight: 600;
            color: var(--color--whiteFixed);
            margin-top: 2.4rem;

            :hover {
                background-color: var(--color--brand2);
            }
        }
    }

    #autoCommentButtons {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 2.4rem;

        button {
            height: 2.4rem;
            padding: 0 1.2rem;
            background-color: var(--color--grey-7);
            border-radius: 2.4rem;
            border: none;

            font-size: 1.2rem;
            font-weight: 500;
            color: var(--color--grey-3);

            :hover {
                background-color: var(--color--grey-6);
            }
        }
    }

    @media (min-width: 37.6rem) {
        height: fit-content;
        width: 75.1rem;
        padding: 6.6rem 4.4rem;

        #userCommentFieldUserData {
            margin-bottom: 1.5rem;
        }

        #userCommentField {
            border: 0.15rem solid var(--color--grey-7);
            height: 13rem;

            textarea {
                border: none;
                height: 12.8rem;
                padding: 2.8rem;
            }

            #postCommentButton {
                position: relative;
                left: 54.3rem;
                bottom: 7.3rem;
            }
        }

        #autoCommentButtons {
            flex-wrap: nowrap;
        }
    }
`;

const StyledFooter = styled.footer`
    height: 31rem;
    background-color: var(--color--grey-0);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media (min-width: 37.6rem) {
        height: 14rem;
        flex-direction: row;
    }

    p {
        font-size: 1.4rem;
        color: var(--color--whiteFixed);
    }

    button {
        width: 5.3rem;
        height: 5rem;
        background-color: var(--color--grey-1);
        color: var(--color--whiteFixed);
        font-size: 1.6rem;
        font-family: "Inter", sans-serif;
        font-weight: 900;

        border: none;
        border-radius: 0.4rem;
    }
`;

export {
    StyledHeader,
    Container,
    MediaContainer,
    StyledSpaceContainer,
    StyledAdvertContainer,
    StyledMainImage,
    StyledAdvertCard,
    StuledDescriptionField,
    StyledAside,
    StyledGaleryCard,
    StyledSellerCardAdvert,
    StyledCommentSection,
    StyledComment,
    StyledUserCommentField,
    StyledFooter,
};
