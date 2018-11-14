import styled from "styled-components";

export const Main = styled.div`
    display: grid;
    display: -ms-grid;

    grid-template-areas:
        "top top top"
        "left center right"
        "bottom bottom bottom";
    
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    height: 100%;
`