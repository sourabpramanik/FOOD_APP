import React from 'react'
import {Button} from '../Button'
import {
    EmailContainer,
    EmailContent,
    FormWrap
} from './Email.elements'
export default function Email() {
    return (
        <EmailContainer>
            <EmailContent>
                <h1>
                    Get Access to Exclusive Offers
                </h1>
                <p>
                    Sign up for our newsletter to get $100 off on your first order!
                </p>
                <form action="#">
                    <FormWrap>
                        <label htmlFor="email">
                            <input type="email" placeholder="Enter Your Email" id="email"/>
                        </label>
                        <Button round as="button" type="submit"
                            css={`
                            height:48px;
                            @media screen and (max-width:768px){
                                width:100%;
                                min-width:350px
                            }
                            @media screen and (max-width:400px){
                                width:100%;
                                min-width:250px
                            }
                            `}
                        >
                            Sign Up
                        </Button>
                    </FormWrap>
                </form>
            </EmailContent>
        </EmailContainer>
    )
}
