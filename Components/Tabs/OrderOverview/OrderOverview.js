import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import CartItem from './Components/CartItem'
import uniqid from "uniqid"
import SuccessPage from '../SuccessPage'
import {  BLACK, BORDERCOLOR, DARKGREY, Padding } from '../../../Styles'
import { useOrderContext } from '../../../Contexts/OrderContext'
import Loading from '../../Utilities/Loading'
import useDidMountEffect from '../../../Hooks/useDidMountEffect'
import { useData } from '../../../Contexts/DataContext'



export const PriceContainer = styled.div`
height: fit-content;
width: 100%;
>p{
border-top: 1px solid ${BORDERCOLOR};
padding-top:1vh;
text-align: right;
color:${BLACK};
font-size: 2.8vh;
}`
const ItemsConatiner = styled.div`
grid-gap: 2vh;
width: 100%;
display: flex;
flex-direction: column;`

const Info = styled.div`
margin-bottom: 2vh;
>div{
    padding: 5px;
    >p{
        color: ${DARKGREY};
    }
}
>h2{
    padding: 5px;
    border-bottom: 1px solid black;
    color: black;
    font-weight: 500;
}
width: 100%;`


const ProductViewStyle = styled.div`
width: 100%;
display: flex;
margin-bottom: 10px;
>img{
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 10px;
    border: 1px solid ${BORDERCOLOR};
}
>div{
    >p{
        color: ${DARKGREY};
    }
    >p:first-child{
        font-weight: 500;
        font-size: 1.1rem;
        color: ${BLACK}
    }
}
`

const getPrice = (cart) => {
    if(cart.length>0){
        let price = 0
        cart.forEach(item => {
            price += item.price * item.quantity
        })
        return price
    }
}
const OrderOverview = ({index}) => {
    const {data} = useData()
    const {
        success, setSuccess,
        disable, setDisable,
        step, setStep,
        selectedDeliveryOption, setSelectedDeliveryOption,
        selectedDate, setSelectedDate,
        customerData, setCustomerData,
        selectedProducts, setSelectedProducts,
        loading, setLoading,
        nextButtonClick,
        deliveryOption, setDeliveryOption,
        items, setItems,
    } = useOrderContext()

    const postOrder  = () => {
        // setDisable(true)
        // setLoading(true)
        // setDoc(doc(database, `shops/${replaceStringSpaces(data.title)}/orders/${uniqid.process()}`), {
        //     selectedDeliveryOption, 
        //     selectedDate,
        //     customerData,
        //     selectedProducts, 
        //     createdAt: new Date()
        // })
        // .then(()=>{
        //     setLoading(false)
        //     setSuccess(true)
        // })
    }

    useDidMountEffect(()=>{
        if(index== step && !success){
            setDisable(true)
            postOrder()
        }
    },[nextButtonClick])

  return (
      loading?
      <Loading></Loading>
      :
      success?
      <SuccessPage></SuccessPage>
      :
    <Padding>
        { selectedProducts && selectedProducts.length!=0 &&<Info>
            <h2 className="h6">Produse</h2>
            <ItemsConatiner>
            {selectedProducts.map(item => <CartItem key={item} id={item.id} quantity={item.quantity}></CartItem>)}
            <PriceContainer>
                <p>{getPrice(selectedProducts)} lei</p>
            </PriceContainer>
            </ItemsConatiner>
        </Info>}
        <Info>
            <h2 className="h6">Customer Info</h2>
<ItemsConatiner>
    {Object.keys(customerData).map(info => customerData[info].value?<p>{info}: {customerData[info].value}</p>:null)}
</ItemsConatiner>
        </Info>
       {data.deliveryOption==1 && <Info>
            <h2 className="h6">Message from seller</h2>
<ItemsConatiner>
{data.deliveryOption==1?<p>
    {data.message || "No message from seller"}
</p>:null}

</ItemsConatiner>
        </Info>}
    </Padding>
  )
}

export default OrderOverview




