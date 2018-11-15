import styled from "styled-components";
import { StyledComponent } from "styled-components";

import Blog from "./blog"

interface ExtendedComponent extends StyledComponent<"div", any, {}, never> {
    Blog?: typeof Blog
}

const StyledLayout: ExtendedComponent = styled.div`
    display: grid;
    display: -ms-grid;

    grid-template-areas:
            "top"
            "center"
            "bottom";
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;

    margin-left: 10px;
    margin-right: 10px;

    height: 100vh;

    @media only screen and (min-width: 800px) {
        grid-template-areas:
            "top top top"
            "left center right"
            "bottom bottom bottm";
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }
`

StyledLayout.Blog = Blog

export default StyledLayout