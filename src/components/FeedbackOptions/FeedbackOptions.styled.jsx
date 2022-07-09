import styled from "styled-components";

export const Button = styled.button`
    min-width: 100px;
    height: 45px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
    margin-right: 10px;

    :hover,
    :active{
        background-color:#00beff;
    }
`;