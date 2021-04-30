import React from 'react'
import{
    FooterContainer,
    FooterDesc,
    FooterLink,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLinksWrapper,
    
} from './Footer.elements'
export default function Footer() {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <h1>Food</h1>
                    <p>
                        We strive to cook healthy, delicious and beatiful presentable food to make our customers happy.
                    </p>
        
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>
                        About Us
                    </FooterLinkTitle>
                    <FooterLink to="/">
                        Who we are?
                    </FooterLink>
                    <FooterLink to="/">
                        How we started?
                    </FooterLink>
                    <FooterLink to="/">
                        Team and Collaborators
                    </FooterLink>
                    <FooterLink to="/">
                        Our Motto
                    </FooterLink>
                </FooterLinkItems>
                
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinkItems>
                    <FooterLinkTitle>
                        Contact Us
                    </FooterLinkTitle>
                    <FooterLink to="/">
                        Call Us
                    </FooterLink>
                    <FooterLink to="/">
                        Email Us
                    </FooterLink>
                    <FooterLink to="/">
                        Visit Us
                    </FooterLink>
                    <FooterLink to="/">
                        Help and Support
                    </FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>
                        Our Office
                    </FooterLinkTitle>
                    <FooterLink to="/">
                        New Jersey
                    </FooterLink>
                    <FooterLink to="/">
                        Delhi
                    </FooterLink>
                    <FooterLink to="/">
                        Wuhan
                    </FooterLink>
                    <FooterLink to="/">
                        Madrid
                    </FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}
