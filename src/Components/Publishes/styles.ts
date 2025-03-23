import { styled } from "styled-components";

export const SectionContainer = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 1.5rem 1.5rem;
`

export const SearchBar = styled.input`
    width: 100%;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    margin-bottom: 4rem;
`
export const SearchBarTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
`

export const ArticleCard = styled.article`
    padding: 2rem;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-post']};
`

export const Title = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    h2{
        font-size: 1.25rem;
        font-weight: 700;
        max-width: 300px;
        color: ${(props) => props.theme['base-title']};
    }

    span{
        font-size: 0.875rem;
        margin-top: 0.25rem;
        color: ${(props) => props.theme['base-span']};
    }
`
