import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 41.1rem;
    max-width: 100vw;

    margin: 4.6rem auto;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    @media (min-width: 37.6rem) {
        width: 37.5rem;
    }
`;

export { Container };
