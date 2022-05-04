import React, { useEffect, useState } from 'react'
import Input from '../../../Components/Input/Input'
import { useOrderContext } from '../../../Contexts/OrderContext'
import useDidMountEffect from '../../../Hooks/useDidMountEffect'

const CustomInputField = ({id, label, placeholder, validation, index}) => {
  const { customerData,setCustomerData, step, setDisable, nextButtonClick} = useOrderContext()
    const [value, setValue] = useState("")
    const [error, setError] = useState("")


    useEffect(()=>{
      if(validation){
            setCustomerData(previous=>{return {...previous, [label]:{value, error:validation(value)}}})
          }
    },[value])



  useDidMountEffect(()=>{
    if( index==step){
      console.log(Object.keys(customerData).map(key=>customerData[key].error).some(error=>error!==false))
      Object.keys(customerData).map(key=>customerData[key].error).some(error=>error!==false)?setDisable(true):setDisable(false)
    }
  },[customerData])

  return(
    <Input validation={validation} value={value} setValue={setValue} error={error} setError={setError} key={id} id={id} label={label} placeholder={placeholder}/>
  )
  }

export default CustomInputField