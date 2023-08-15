// BUTTON
import styled from 'styled-components'


export const Button = styled.button`
width: 342px;
height: 68px;
margin: 50px auto;
color: #FFFFFF;
background-color: ${props => props.isBack ? 'rgba(255,255,255,0.14)' : '#D93856'};
border: none;

font-family: Roboto;
font-size: 17px;
font-weight: 900;
line-height: 3px;
letter-spacing: 0px;
text-align: center;
cursor: pointer;

&:hover{
    opacity: 0.8;
    transform: scale3d(1.1, 1.1, 1);
    transition: 0.5s;
}

&:active{
    opacity: 0.6;
}
`