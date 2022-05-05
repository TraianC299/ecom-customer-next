import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useOrderContext } from '../../../../Contexts/OrderContext'
import useDidMountEffect from '../../../../Hooks/useDidMountEffect'
import { DARKGREY, greyBorder, RED } from '../../../../Styles'
import QuantitySelector, { Square } from './QuantitySelector'
import {getItemById} from '../../../../Utils/UtilityFunctions'
import { useData } from '../../../../pages'



const NewScrollContainer = styled.div`
padding: 0px 0px 10px 0px;
>img{
    height: 6vh;
    width: 6vh;
    border-radius: 20px;
}
`

const ItemContainer = styled.div`
padding: 10px;
border-radius: 10px;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;
box-shadow: ${greyBorder};
background: white;
background-blend-mode: soft-light, normal;
>.first-constiner{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
>div:nth-child(2){
    
}
`



const InfoContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
>div:first-child{
    >p{
        color: ${DARKGREY};
        font-size: 1.2rem;
        font-weight: 500;
    }
}
`
const CartItem = ({id, quantity}) => {
    const {data} = useData()
    const item = React.useRef(getItemById(id, data.products)).current
    const [quantityState, setQuantityState] = useState(quantity)
    const {selectedProducts, setSelectedProducts}  = useOrderContext()


    const deleteItem = () => {
        const newCart = selectedProducts.filter(item => id !== id)
        setSelectedProducts([...newCart])
    }

    const changeQuantityFunction = () => {
        const index = selectedProducts.findIndex(item=>id==id)
        const placeHolder = [...selectedProducts]
        placeHolder[index].quantity = quantityState
        setSelectedProducts(previous=>[...placeHolder])
    }


        useDidMountEffect(()=>{
            changeQuantityFunction()
        },[quantityState])


        console.log(quantityState)


  return (
    <ItemContainer>
        <div className="first-constiner">
            <NewScrollContainer>{
                 <img src={item.image}></img>
            }</NewScrollContainer>
            <Square onClick={()=>{deleteItem()}} style={{background: RED, fontWeight: 700, color:"white"}}><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></Square>
        </div>
        <InfoContainer >
            <div>
                <p style={{color: data.color}}>{"price"}: {item.price*quantityState}{"lei"}</p>
            </div>
            <QuantitySelector
                setQuantity={setQuantityState}
            quantity={quantityState}></QuantitySelector>
        </InfoContainer>
    </ItemContainer>
  )
}

export default CartItem