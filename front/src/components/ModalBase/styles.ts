import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        background-color: var(--color-gray-2);
        padding: 2rem;
        box-shadow: 0 0 2.5rem 0 rgba(0, 0, 0, 0.25);
        width: 100%;
        max-width: 40rem;
        border-radius: 0.8rem;

        @media (min-width: 37.6rem) {
            max-width: 75.1rem;
        }

        li {
            width: 100%;
            height: 100%;

            figure {
                width: 100%;
                height: 100%;

                img {
                    width: 100%;
                    height: 100%;

                    border-radius: 0.8rem;

                    :hover {
                        zoom: 150%;
                    }
                }
            }
        }
    }
`;

export { Container };
