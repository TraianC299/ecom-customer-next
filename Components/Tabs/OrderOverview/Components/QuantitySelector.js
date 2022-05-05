import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useData } from '../../../../pages'
import { DARKGREY , GREYWHITE} from '../../../../Styles'




const Container = styled.div`
display:flex;
align-items: center;
width: fit-content;
>p{
    margin-left: 10px;
    margin-right: 10px;
    font-weight: 700;
    font-family:"Poppins" sans-serif;
    color: ${DARKGREY};
}
`

export const Square= styled.div`
width: 5vh;
height:5vh;
max-height: 4vh;
max-width: 4vh;
display: flex;
align-items: center;
justify-content: center;
background-color:${props=>props.backgroundColor};
border-radius: 100px;
cursor: pointer;
font-weight: 600;
>svg{
    height: 40%;
    width: 40%;
}
>p{
    font-weight: 600;
    font-size: 3vh;
}



@media (orientation: portrait) and (min-width:700px) {
width: 2.5vh;
height:2.5vh;
}



`
const QuantitySelector = ({deleteProperty, setDeleteItem, setQuantity, quantity, onlyDelete}) => {
    const {data} = useData()

    useEffect(()=>{if(quantity<1){
        setQuantity(1)
    }},[quantity, setQuantity])


    return (
        <Container className="quantity-delete-button">
            {deleteProperty?
            <Square style={{marginRight:"10px"}} onClick={()=>setDeleteItem(previous=>true)}  backgroundColor={GREYWHITE}>
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z" fill="#323232"/>
                </svg>
            </Square>
            :null}

            {onlyDelete?null:<><Square  onClick={()=>setQuantity(previous=>previous-1)} backgroundColor={GREYWHITE}>
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>

            </Square>
            <p >{quantity}</p>
            
            <Square  onClick={()=>setQuantity(previous=>previous+1)} style={{background:data.themeColor}}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>

            </Square></>}
            
            
        </Container>
    )
}

export default QuantitySelector