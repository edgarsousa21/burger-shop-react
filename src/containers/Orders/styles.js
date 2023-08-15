import styled from 'styled-components'


export const Container = styled.div`
/* width: 414px;
height: 896px; */
min-height: 896px;
background-color: #0A0A10;
display: flex;
flex-direction: column;
align-items: center;
`

export const Image = styled.img`
Width: 342px;
Height: 354px;
margin-top: 11px;
`
export const ContainerItens = styled.div`
width: 414px;
// height: 896px;
min-height: 600px;
height: auto;
margin-top: 37px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
gap: 10px;
`

export const Order = styled.li`
width: 342px;
height: 101px;
margin: 20px auto;
background-color: rgba(255, 255, 255, 0.25);
border-radius: 14px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

div{
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 2px;
padding:10px;
gap: 15px;
}

button{
width: 24px;
height: 28px;
top: 39px;
left: 303px;
background: none;
margin-right: 15px;
cursor: pointer;

&:hover{
    opacity:0.8;
    transition: 0.5s;
    transform: scale3d(1.1, 1.1, 1)
}

&active{
    opacity:0.5;    
}

}

`
export const POrder = styled.p`
font-family: Roboto;
font-size: 18px;
font-weight: 300;
line-height: 21px;
letter-spacing: 0px;
text-align: left;
color:#FFFFFF;
`
export const PClientName = styled.p`
font-family: Roboto;
font-size: 18px;
font-weight: 700;
line-height: 21px;
letter-spacing: 0px;
text-align: left;
color:#FFFFFF;
`

