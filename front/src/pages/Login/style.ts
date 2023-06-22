import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkRegister = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 48px;
    text-decoration: none;

    font-weight: 600;
    font-size: 13.5px;

    color: var(--color--grey-0);

    border: solid 1.5px var(--color--grey-4);
    border-radius: 5px;
`;

const LinkSendEmailResetPassword = styled(Link)`
    align-self: self-end;
`;

export { LinkRegister, LinkSendEmailResetPassword };
