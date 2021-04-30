import React from 'react'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaRegLightbulb} from 'react-icons/fa'
import {
    TestimonialContainer,
    Testimonials,
    Topline,
    Description,
    ColumnOne,
    ColumnTwo,
    ContentWrapper,
    Images
} from './Testimonial.elements'
import { useStaticQuery, graphql } from "gatsby";


export default function Testimonial() {
    

    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
        name: {in: ["guy1", "guy2"]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      
    `)
    return (
        <TestimonialContainer>
            <Topline>
                Testimonials
            </Topline>
            <Description>
                What People Are Saying
            </Description>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonials>
                        <IoMdCheckmarkCircleOutline css={`
                            color:#fff;
                            font-size:2rem;
                            margin-bottom:1rem;
                        `}/>
                        <h3>Sean Dan</h3>
                        <p>"The unexpected tastes swirlling around the 
                            tongue and the feeling of satisfaction is UNREAL"</p>
                    </Testimonials>
                    <Testimonials>
                        <FaRegLightbulb css={`
                            color:#fff;
                            font-size:2rem;
                            margin-bottom:1rem;
                        `}/>
                        <h3>Sara Leah</h3>
                        <p>"The unexpected tastes swirlling around the 
                            tongue and the feeling of satisfaction is UNREAL"</p>
                    </Testimonials>
                </ColumnOne>
                <ColumnTwo>
                {data.allFile.edges.map((image, index)=>(
                    <Images key={index}
                        fluid={image.node.childImageSharp.fluid}/>
                 ))}
                
                </ColumnTwo>    
            </ContentWrapper>
        </TestimonialContainer>
    )
}
