import { Link } from 'gatsby'
import styled from 'styled-components'


export const Button = styled(Link)`
background:${({primary}) => (primary? '#f2682e' : '#077bf1')};
white-space:nowrap;
padding:${({big}) => (big? '15px 40px' :'10px 32px')};
color:#fff;
font-size:${({fontBig}) => (fontBig? '20px' :'16px')};
outline:none;
border:none;
min-width:100px;
cursor: pointer;;
text-decoration:none;
transition: 0.3s !important;
border-radius:${({round}) => (round? '50px' : 'none')};
&:hover{
    background:${({primary}) => (primary? '#077bf1' : '#f2682e')};
    transform:translateY(-2px);
}
`