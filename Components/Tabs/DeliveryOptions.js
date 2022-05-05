import React, { useEffect, useState } from 'react'
import { useOrderContext } from '../../Contexts/OrderContext';
import { useData } from '../../pages';
import { InputButtonsGrid, Padding, RED } from '../../Styles';
// import {   InputButtonsGrid, Padding, RED } from '../Styles';
import Option from '../Input/Option';




const deliveryOptions =  [{id:1, label:"Pickup"},{id:2, label:"Delivery"}, {id:3, label:"Delivery & Pickup"}]




const DeliveryOptions = ({index}) => {
  const {selectedDeliveryOption, setSelectedDeliveryOption, disable, setDisable, step} = useOrderContext()
    const {data, nextButtonClick} = useData()
    const [error, setError] = useState()
    const getDeliveryOptions = (id) => {
      switch(id){
        case 1:return  <Option selectedOptions={selectedDeliveryOption} setSelectedOptions={setSelectedDeliveryOption} id={1}>Delivery</Option>;
        case 2:return <Option selectedOptions={selectedDeliveryOption} setSelectedOptions={setSelectedDeliveryOption} id={2}>Pick-up</Option>;
        case 3:return <>
        <Option single selectedOptions={selectedDeliveryOption} setSelectedOptions={setSelectedDeliveryOption} id={1}>Pick-up</Option>
        <Option single selectedOptions={selectedDeliveryOption} setSelectedOptions={setSelectedDeliveryOption} id={2}>Delivery</Option>
        </>;
      }
    }


    useEffect(()=>{
      if(index==step){
          if(selectedDeliveryOption == null){
              setDisable(true)
          }
          else{
              setDisable(false)
          }
      }
  },[step, selectedDeliveryOption])
    

  return (
<Padding>
        <h2 style={{color: error?RED:""}} className="h4">Choose your delivery method:</h2>
        <InputButtonsGrid>
        {getDeliveryOptions(data.deliveryOption)}
   
        </InputButtonsGrid>
        </Padding>  
  )
}

export default DeliveryOptions




