import styled from "styled-components";

export const ProfileCardContainer = styled.div`
    width: 100%;
    max-width: 864px;
    margin: 0 auto;
    padding: 1.5rem 1.5rem;
    border-radius: 10px;
    position: relative;
    top:-5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${(props) => props.theme['base-profile']};

`
export const ProfileImage = styled.img`
    width: 150px;
`

export const ProfileInfo = styled.div`
    margin:0px 1.25rem;
    padding: 1rem;
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`

export const Bio = styled.p`
    margin-bottom: 1.5rem;
`

export const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;

    a{
        text-decoration: none;
        color: inherit;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center
    }


    *:nth-child(n+2){
        margin-left: 1rem;

    }
`

export const IconLink = styled.a`
    svg {
        margin-right: 8px;
    }
`

