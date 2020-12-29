import styled from 'styled-components'


export const ButtonContainer = styled.button`
    font-size: 1.4rem;
    background:transparent;
    border: 0.05rem solid var(--mainBlue);
    border-color: black;
    color: white
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: #3a2cb9;
        border-radius: 3px;
        color: white;
    }
    color: var(--mainBlue);
    }
    &:focus{
    outline: none;
    }
`
//