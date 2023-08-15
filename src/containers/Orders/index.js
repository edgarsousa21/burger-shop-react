import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'

import Burger from '../../assets/burger02.svg'
import Garbage from '../../assets/garbage.svg'

import Button from '../../components/Button'
import  H1  from '../../components/Title'
import {
  Container,
  Image,
  ContainerItens,  
  Order,
  POrder,
  PClientName,
} from './styles'


function Orders() {
  const [orders, setOrders] = useState([])
  const history = useHistory()

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await Axios.get('http://localhost:3001/orders/')
      setOrders(newOrders)
    }
    fetchOrders()
  }, [])

 

  async function deleteOrder(orderId) {
    await Axios.delete(`http://localhost:3001/orders/${orderId}`)
    const newOrder = orders.filter(order => order.id !== orderId)
    setOrders(newOrder)
  }

  function goBackPage() {
    history.push("/")
  }


  return (
    <Container>

      <Image src={Burger} />

      <ContainerItens>

        <H1>Pedidos</H1>        

        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <div>
                <POrder>{order.order}</POrder><PClientName>{order.clientName}</PClientName>
              </div>
              <button onClick={() => deleteOrder(order.id)}>
                <img src={Garbage} alt='trash' />
              </button>
            </Order>

          ))}

        </ul>

        <Button isBack={true} onClick={goBackPage}>Voltar</Button>

      </ContainerItens>

    </Container>


  )


}

export default Orders