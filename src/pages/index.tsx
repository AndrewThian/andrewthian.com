import * as React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import * as Container from "../components/Containers";
import * as Content from "../components/blocks/introduction"

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
                    <Content.Introduction>
                        HI
                    </Content.Introduction>
                </Container.Main>
            </React.Fragment>
        )
    }
}