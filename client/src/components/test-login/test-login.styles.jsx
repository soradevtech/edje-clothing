import styled from 'styled-components';

export const TestLoginContainer = styled.div`
border: 1px solid black;
background: lightgray;
margin-right: 20px;
padding: 5px;
@media screen and (max-width: 800px) {
    padding: 1px;
    margin: 0;
}
`
export const TestLoginMessage = styled.p`
margin: 0;
@media screen and (max-width: 800px) {
    font-size: .5rem;
}
`