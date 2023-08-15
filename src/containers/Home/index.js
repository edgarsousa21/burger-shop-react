import React, { useState, useRef } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'

import Burger from '../../assets/burger01.svg'

import Button from '../../components/Button'
import H1 from '../../components/Title'
import { 
  Container, 
  Image, 
  ContainerItens,   
  InputLabel, 
  Input,   
} from './styles'


function App() {
  const [orders, setOrders] = useState([])
  const inputOrder = useRef()
  const inputClientName = useRef()
  const history = useHistory()


  async function addNewOrder(){
    const { data: newOrder } = await Axios.post('http://localhost:3001/orders/',{
      order: inputOrder.current.value,
      clientName: inputClientName.current.value,
    })

  setOrders([...orders, newOrder])
  history.push("/orders")
  }


  return (
    <Container>

      <Image src={Burger} />

      <ContainerItens>

        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido:</InputLabel>
        <Input ref={inputOrder} placeholder="1 Coca-Cola, 1 X-Salada"></Input>

        <InputLabel>Nome do Cliente:</InputLabel>
        <Input ref={inputClientName} placeholder="Steve Jobs"></Input>

        <Button onClick={addNewOrder}>Novo Pedido</Button>
     

      </ContainerItens>

    </Container>


  )


}

export default App