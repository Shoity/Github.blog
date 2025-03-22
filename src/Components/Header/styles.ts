import styled from "styled-components";

export const HeaderContent = styled.header`
    width: 100%;
    margin: 0 auto;
    padding: 0;
    z-index: 0;


    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${(props) => props.theme['base-profile']};
`

export const Effects = styled.img`
    width: 30%;
    height: auto;
`

export const LogoContainer = styled.img`
    width: 14%;
    height: auto;
    margin-top: -5rem;
    padding:0;
`