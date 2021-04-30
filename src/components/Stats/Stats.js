import React from 'react'
import { 
    StatsContainer, 
    StatsWrapper, 
    Heading,
    StatsBox,
    Title,
    Icon,
    Description } from "./Stats.elements";
import {StatData} from './data'


export default function Stats() {
    return (
        <StatsContainer>
            <Heading>Why You Should Go For Our Choices?</Heading>
            <StatsWrapper>
                {StatData.map((item, index)=>{
                    return(
                        <StatsBox key={index}>
                            <Icon>{item.icon}</Icon>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                        </StatsBox>
                    )
                })}
            </StatsWrapper>
        </StatsContainer>
    )
}
