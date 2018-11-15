import * as React from 'react';
import Helmet from "react-helmet";

import styled from "styled-components";

import StyledGlobal from "../styles/Global"
import StyledLayout from "../layouts";
import StyledIntro from "../components/blocks/Intro";

const getColor = (linkType: string): string => {
    if (linkType === "linkedin") {
        return "#0077B5"
    } else if (linkType === "github") {
        return "#6cc644"
    } else if (linkType === "behance") {
        return "#053eff"
    } else if (linkType === "buuuk") {
        return "#053eff"
    } else {
        return "salmon"
    }
}

const Link = styled.a`
    color: ${(props: any) => getColor(props.type)};
    text-decoration: none;

    &:hover {
        font-size: 20px;
        font-weight: bold;
        text-decoration: underline;
        transition: font-size 0.25s;
        transition-timing-function: ease-in-out;
    }
`

const linkedIn = "https://www.linkedin.com/in/andrewthian"
const github = "https://github.com/AndrewThian"
const behance = "https://www.behance.net/andrewbobb284f"
const hackathon = "https://engineers.sg/video/butt-js-super-silly-hackathon--2179"
const buuuk = "https://buuuk.com/blog/something-new-logo/"

interface StateType {
    counter: number
    intervalId?: NodeJS.Timeout | number
}

class Counter extends React.Component<{}, StateType> {
    state = {
        counter: 1,
        intervalId: 0
    }

    componentDidMount () {
        const intervalId = setInterval(this.timer, 1000);
        this.setState(prev => ({ ...prev, intervalId }));
    }

    componentWillUnmount () {
        clearInterval(this.state.intervalId);
    }

    timer = () => {
        this.setState(prev => ({
            ...prev,
            counter: this.state.counter + 1
        }))
    }

    parseSeconds (totalSeconds: number): string {
        let hours = Math.floor(totalSeconds / 3600)
        totalSeconds = totalSeconds % 3600
        let minutes = Math.floor(totalSeconds / 60)
        let seconds = totalSeconds % 60

        return `${hours} hour(s) : ${minutes} minutes(s) : ${seconds} seconds(s)`
    }

    render () {
        const startDate = new Date(2018, 10, 15, 21, 0, 0).getTime();
        const currentDate = new Date().getTime();

        const difference = currentDate - startDate;
        const totalSeconds = Math.round(difference / 1000)
        const elapsedTime = this.parseSeconds(totalSeconds)
        return (
            <div>
                <p>elapsed: {elapsedTime}</p>
            </div>
            
        )
    }
}

interface IndexPageProps {}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
    public render () {
        return (
            <React.Fragment>
                <Helmet defaultTitle={"Andrew Thian"}>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/site.webmanifest"/>
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                    <meta name="msapplication-TileColor" content="#da532c"/>
                    <meta name="theme-color" content="#ffffff"/>
                    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
                </Helmet>
                <StyledGlobal />
                <StyledLayout>
                    <StyledIntro>
                        <StyledIntro.Header>
                            <span>Hello, you must be looking for andrewthian.com</span>
                        </StyledIntro.Header>
                        <StyledIntro.Content>
                            <p>
                                I know, it's just a blank page at this point. Well, it's under construction. I know, it's a bummer. Who likes construction pages anyway? It's always "We'll be right back" or "Ah, coming to you soon". But not this page!!
                            </p>
                            <p>
                                Since you're already here, you must be looking to know more about Andrew. Well, here's his <Link type="linkedin" target="blank" href={linkedIn}>linkedin</Link> and <Link type="github" target="blank" href={github}>github</Link>.
                            </p>
                            <p>
                                Perhaps, you're a more artistic type? Maybe you could checkout his <Link type="behance" target="blank" href={behance}>behance</Link> or an article about a logo he <Link type="buuuk" target="blank" href={buuuk}>designed</Link>?</p>
                            <p>
                                maybe you're just in for laugh and don't really know why you're here, why not check out his ridiculous project for a <Link target="blank" href={hackathon}>hackathon</Link>.
                            </p>
                            <p>
                                Whatever it is, here's his email address: 
                            </p>
                            <p><strong>andrewbobbythian@gmail.com</strong></p>
                            <p>
                                Oh and a counter so that he can be accountable for the amount of time he took to build this damn domain.
                            </p>
                            <Counter/>
                        </StyledIntro.Content>
                    </StyledIntro>
                </StyledLayout>
            </React.Fragment>
        )
    }
}