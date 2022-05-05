import React, { useEffect, useState } from 'react'
import CustomInputField from './Components/CustomInputField'
import { InputButtonsGrid, Padding } from '../../Styles'
import { useOrderContext } from '../../Contexts/OrderContext'
import { useData } from '../../pages'

const isEmpty = (value) => {
  if(value==""){
    return translate("required field")
  }
  else{
    return false
  }
}

export const numberValidation = (value) => {
    
  if(isNaN(Number(value))){
      return translate("this field should be a number")
  }else{
      return false
  }
}

export const checkValidation = (value) => {
  if(!value){
    return translate("check eroare")
  }else{
      return false
  }
}



export const isEmail = (value) => {
  if(!value.includes("@")){
      return translate("invalid email")

  }else{
      return false
  }
}




const options = [{id:1, label:"Name", placeholder: "Ion", validation:isEmpty}, {id:2, label:"Telefon", placeholder: "+37369513786"}, {id:3, label:"Mesaj", placeholder: "Un mesaj informativ de la cumparator"}]



const CustomerDataPage = ({index}) => {
  const {data} = useData()
  const {selectedDeliveryOption, nextButtonClick, setDisable, step} =useOrderContext()

 


  useEffect(()=>{
    setDisable(true)
  },[])

  
//   useEffect(()=>{
//     if(index==step){
//         if(selectedDeliveryOption == null){
//             setDisable(true)
//         }
//         else{
//             setDisable(false)
//         }
//     }
// },[step, selectedDeliveryOption])




  return (
    <Padding>
        <h2 className="h4">{translate("Please give some information so we can contact you.")}</h2>
        <InputButtonsGrid>
        <CustomInputField index={index} validationState={nextButtonClick} validation={isEmail}  label={"Email"}  placeholder={"Email"}/>
        {data.deliveryOption==2 || selectedDeliveryOption==2?<>
        <CustomInputField  index={index} validationState={nextButtonClick} validation={isEmpty}  label={"Country"}  placeholder={"Denmark"}/>
        <CustomInputField  index={index} validationState={nextButtonClick} validation={isEmpty}  label={"Address"}  placeholder={"Schwarzburger Str. 10"}/>
        <CustomInputField  index={index} validationState={nextButtonClick} validation={isEmpty}  label={"City"}  placeholder={"Aarhus"}/>
        <CustomInputField  index={index} validationState={nextButtonClick} validation={isEmpty}  label={"Postal Code"}  placeholder={"12678"}/>

        </>:null}
        {data.phoneNumber==true?<>
        <CustomInputField  index={index} validationState={nextButtonClick} validation={isEmpty}  label={"Phone Number"}  placeholder={"*37369513786"}/>
        </>:null}
        
        </InputButtonsGrid>
    </Padding>
  )
}

export default CustomerDataPage



