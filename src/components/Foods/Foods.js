import React from 'react'
import { 
    FoodsContainer,
    FoodWrapper,
    FoodsHeading,
    FoodCard,
    FoodInfo,
    TextWrap,
    FoodTitle, 
    FoodImage} from './Food.elements'
import { useStaticQuery, graphql } from "gatsby";
import {Button} from '../Button';




export default function Foods({Heading}) {
    const data = useStaticQuery(graphql`
    query FoodQuery {
        allFoodsJson {
          edges {
            node {
              alt
              lable
              name             
              img {
                publicURL
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      
    `)
function getFoods(data){
    const foodsArray = []
    data.allFoodsJson.edges.forEach((item, index) => {
        foodsArray.push(
        <FoodCard key={index}>
            <FoodImage 
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}/>
            <FoodInfo>
                <TextWrap>                
                    <FoodTitle>
                        {item.node.name}
                    </FoodTitle>
                </TextWrap>
                <Button to="/food" primary round css={`
                 position:absolute;
                 top:420px;
                 font-size:14px`}>
                    {item.node.lable}
                </Button>
            </FoodInfo>
        </FoodCard>
        )
    })
    return foodsArray
}
    return (
        <FoodsContainer>
            <FoodsHeading>{Heading}</FoodsHeading>
            <FoodWrapper>{getFoods(data)}</FoodWrapper>
        </FoodsContainer>
    )
}
