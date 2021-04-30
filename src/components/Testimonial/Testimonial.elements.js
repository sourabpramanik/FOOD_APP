import styled from "styled-components"
import Img from 'gatsby-image'

export const TestimonialContainer = styled.div`
width:100%;
background:#f2682e;
color:#000;
padding:5rem calc((100vw - 1300px)/2);
height:100%
`
export const Topline = styled.div`
color:#fff;
font-size:1rem;
padding-left:2rem;
margin-bottom:0.75rem;
`
export const Description = styled.div`
text-align:start;
padding-left:2rem;
margin-bottom:4rem;
font-size:clamp(1.5rem, 5vw, 2rem);
font-weight:bold;
`
export const ContentWrapper = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
padding:0 2rem;

@media screen and (max-width:768px){
    grid-template-columns:1fr;
};
`
export const ColumnOne = styled.div`
display:grid;
grid-template-rows:1fr 1fr;
padding:1rem;
padding-right:2rem;


`
export const Testimonials = styled.div`

padding-top: 1rem;
padding-right: 2rem;
h3{
    margin-bottom:1rem;
    font-size:1.5rem;
    font-style:italic;
};
p{
    color:#fff
}
`
export const ColumnTwo = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
margin-top:2rem;
grid-gap:10px;

@media screen and (max-width:500px){
    grid-template-columns:1fr;

}
`
export const Images = styled(Img)`
border-radius:10px;
height:100%
`