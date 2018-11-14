import * as React from 'react';
import { createGlobalStyle } from "styled-components";
import * as Container from "../components/container";

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
    }
`

interface IndexPageProps {}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
    public render () {
        return (
            <React.Fragment>
                <GlobalStyle />
                <Container.Main>
                    hi
                </Container.Main>
            </React.Fragment>
        )
    }
}