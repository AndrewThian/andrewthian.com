import styled, { StyledComponent } from "styled-components";

import Header from "./Header";
import Content from "./Content";

interface ExtendedComponent extends StyledComponent<"div", any, {}, never> {
    Header?: any
    Content?: any
}

const StyledIntro: ExtendedComponent = styled.div`
    grid-area: center;
`

StyledIntro.Header = Header;
StyledIntro.Content = Content;

export default StyledIntro;